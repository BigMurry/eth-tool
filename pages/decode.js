import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import _get from 'lodash/get';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

import txDecoder from 'ethereum-tx-decoder';
import { Transaction as Tx } from 'ethereumjs-tx';
import { decode } from 'ripple-binary-codec';
import { transactionID } from 'ripple-binary-codec/distrib/npm/hashes';
import BN from 'bignumber.js';
import traverse from 'traverse';
import * as ethers from 'ethers';
import * as eosUnpack from 'eos-unpack';

import Root from '../components/Root';
import { v2 as abi } from '../lib/erc20-abi';
require('buffer');

const useStyles = makeStyles(theme => ({
  cont: {
    display: 'flex',
    flexDirection: 'column'
  },
  btn: {
    margin: '10px 0 60px 0'
  },
  exp: {
    display: 'flex',
    backgroundColor: grey[200],
    padding: theme.spacing(1),
    borderRadius: '4px',
    position: 'relative'
  },
  lnk: {
    marginRight: theme.spacing(2)
  },
  ready: {
    backgroundColor: '#44b700',
    color: '#44b700'
  },
  pending: {
    backgroundColor: yellow[500],
    color: yellow[500]
  },
  failed: {
    backgroundColor: red[500],
    color: red[500]
  },
  dot: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    position: 'absolute',
    top: -theme.spacing(1),
    left: -theme.spacing(1),
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: '50%',
    animation: '$ripple 1.2s infinite ease-in-out',
    border: '1px solid currentColor',
    content: '""'
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1.6)',
      opacity: 0
    }
  }
}));

function formatEventValues (values, precision = 1e0) {
  const trimValues = Object.keys(values).reduce((ret, k) => {
    if (!/^\d+$/.test(k) && k !== 'length') {
      ret[k] = values[k];
    }
    return ret;
  }, {});
  const ret = traverse(trimValues).map(function (v) {
    if (Object.hasOwnProperty.call(v, '_hex')) {
      console.log('bignumber');
      const bn = new BN(v.toString()).dividedBy(precision);
      this.update(bn.toString());
    }
  });
  return ret;
}

function xrpHash (raw) {
  return transactionID(Buffer.from(raw, 'hex')).toString('hex');
}

function decodeXrp (rawTx) {
  const hash = xrpHash(rawTx);
  return Object.assign({ hash }, decode(rawTx));
}

async function decodeTx (rawTx, txType) {
  if (txType === TX_TYPES.DEFAULT || txType === TX_TYPES.ERC20) {
    return decodeEth(rawTx, txType);
  }
  if (txType === TX_TYPES.XRP) {
    return decodeXrp(rawTx);
  }
  if (txType === TX_TYPES.EOS) {
    return eosUnpack(rawTx);
  }
  return {
    error: 'NOT support'
  };
}

function decodeEth (rawTx, txType) {
  const ethTx = new Tx(rawTx);
  const tx = txDecoder.decodeTx(rawTx);
  if (txType === TX_TYPES.ERC20) {
    const fnDecoder = new txDecoder.FunctionDecoder(abi);
    const data = fnDecoder.decodeFn(tx.data);
    tx.decodeData = formatEventValues(data);
  }
  tx.gasPrice = tx.gasPrice.toString();
  tx.gasLimit = tx.gasLimit.toString();
  tx.value = tx.value.toString();
  const hash = ethers.utils.keccak256(rawTx);
  return Object.assign(
    {
      hash,
      from: '0x' + ethTx.getSenderAddress().toString('hex')
    },
    tx
  );
}

const TX_TYPES = {
  DEFAULT: 10,
  ERC20: 20,
  XRP: 30,
  EOS: 40
};

async function retry (times, fn, ...args) {
  try {
    const res = await fn(...args);
    return res;
  } catch (e) {
    console.log(e.message || e);
    if (times > 0) {
      return retry(times - 1, fn, ...args);
    }
    throw e;
  }
}

async function getTxStatus (hash, txType) {
  let confirmed = -1;
  if (txType === TX_TYPES.DEFAULT || txType === TX_TYPES.ERC20) {
    let res = await window.fetch('https://mainnet.infura.io/v3/af819efca3484e109bc70d5cabb93cf7', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: new Date().getTime(),
        jsonrpc: '2.0',
        method: 'eth_getTransactionReceipt',
        params: [hash]
      })
    });
    res = await res.json();
    confirmed = parseInt(_get(res, ['result', 'status']), 16);
  }
  if (txType === TX_TYPES.EOS) {
    let res = await window.fetch('https://api.eossweden.org/v1/history/get_transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: hash
      })
    });
    res = await res.json();
    confirmed = _get(res, ['last_irreversible_block']) ? 1 : 0;
  }
  if (txType === TX_TYPES.XRP) {
    let res = await window.fetch(`https://data.ripple.com/v2/transactions/${hash}?binary=false`);
    res = await res.json();
    confirmed = _get(res, ['transaction', 'meta', 'TransactionResult']) === 'tesSUCCESS' ? 1 : 0;
  }
  return confirmed;
}

function getLinks (tx, txType) {
  const links = {};
  if (!_get(tx, ['hash'])) {
    return links;
  }
  if (txType === TX_TYPES.DEFAULT) { // ETH
    links.from = `https://etherscan.io/address/${_get(tx, ['from'])}`;
    links.to = `https://etherscan.io/address/${_get(tx, ['to'])}`;
    links.tx = `https://etherscan.io/tx/${_get(tx, ['hash'])}`;
  }
  if (txType === TX_TYPES.ERC20) {
    links.from = `https://etherscan.io/address/${_get(tx, ['from'])}`;
    links.to = `https://etherscan.io/address/${_get(tx, ['decodeData', 'to'])}`;
    links.tx = `https://etherscan.io/tx/${_get(tx, ['hash'])}`;
  }
  if (txType === TX_TYPES.XRP) {
    links.from = `https://xrpscan.com/account/${_get(tx, ['Account'])}`;
    links.to = `https://xrpscan.com/account/${_get(tx, ['Destination'])}`;
    links.tx = `https://xrpscan.com/tx/${_get(tx, ['hash'])}`;
  }
  if (txType === TX_TYPES.EOS) {
    links.from = `https://bloks.io/account/${_get(tx, ['actions', 0, 'data', 'from'])}`;
    links.to = `https://bloks.io/account/${_get(tx, ['actions', 0, 'data', 'to'])}`;
    links.tx = `https://bloks.io/transaction/${_get(tx, ['hash'])}`;
  }
  return links;
}

const Decode = function () {
  const classes = useStyles();
  const [rawTx, setRawTx] = useState('');
  const [decTx, setDecTx] = useState({ message: '<decoded tx>' });
  const [txType, setTxType] = useState(10);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const { from: fromLnk, to: toLnk, tx: txLnk } = getLinks(decTx, txType);
  const txHash = _get(decTx, ['hash']);
  const [confirmed, setConfirmed] = useState(-1);
  const txStatus = confirmed === 1
    ? 'tx ok'
    : confirmed === 0
      ? 'tx failed'
      : 'pending';
  useEffect(() => {
    if (txHash) {
      setConfirmed(-1);
      retry(5, getTxStatus, txHash, txType).then(res => {
        setConfirmed(res);
      }).catch(e => {
        console.log(e);
      });
    }
  }, [txHash]);

  return (
    <Root>
      <div className={classes.cont}>
        <TextField
          multiline
          id='raw'
          label='Raw transaction'
          rows={3}
          className={classes.tx}
          value={rawTx}
          onChange={e => setRawTx(e.target.value)}
          variant='outlined'
        />
        <FormControl margin='normal' variant='outlined' className={classes.formControl}>
          <InputLabel ref={inputLabel} id='tx-type'>
            Tx type
          </InputLabel>
          <Select
            id='tx-type-select'
            value={txType}
            onChange={e => setTxType(e.target.value)}
            labelWidth={labelWidth}
          >
            <MenuItem value={TX_TYPES.DEFAULT}>
              <em>Eth default</em>
            </MenuItem>
            <MenuItem value={TX_TYPES.ERC20}>ERC20</MenuItem>
            <MenuItem value={TX_TYPES.XRP}>XRP</MenuItem>
            <MenuItem value={TX_TYPES.EOS}>EOS</MenuItem>
          </Select>
        </FormControl>
        <Button
          size='large'
          variant='contained'
          color='secondary'
          className={classes.btn}
          onClick={async _ => {
            setDecTx({ message: 'waiting...' });
            try {
              const tx = await decodeTx(rawTx, txType);
              setDecTx(tx);
            } catch (e) {
              setDecTx({ message: `error message: ${e.message || e}` });
              console.log(e);
            }
          }}
        >
          Decode Tx
        </Button>
        {
          !!txLnk && (
            <div className={classes.exp}>
              <Link href={fromLnk}>
                <a className={classes.lnk} target='_blank'>from</a>
              </Link>
              <Link href={toLnk}>
                <a className={classes.lnk} target='_blank'>to</a>
              </Link>
              <Link href={txLnk}>
                <a
                  className={classes.lnk}
                  target='_blank'
                >
                  tx details
                </a>
              </Link>
              <Tooltip placement='top' title={txStatus}>
                <div className={clsx(classes.dot, {
                  [classes.ready]: confirmed === 1,
                  [classes.failed]: confirmed === 0,
                  [classes.pending]: confirmed === -1
                })}
                />
              </Tooltip>
            </div>
          )
        }
        <TextField
          multiline
          disabled
          rows={12}
          id='output-box'
          label='Decoded Transaction'
          className={classes.lgTx}
          value={JSON.stringify(decTx, null, 2)}
          margin='normal'
          variant='outlined'
        />
      </div>
    </Root>
  );
};

export default Decode;
