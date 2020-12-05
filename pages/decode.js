import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import txDecoder from 'ethereum-tx-decoder';
import {Transaction as Tx} from 'ethereumjs-tx';
import { decode } from 'ripple-binary-codec';
import { transactionID } from 'ripple-binary-codec/distrib/npm/hashes';
import BN from 'bignumber.js';
import traverse from 'traverse';
import * as ethers from 'ethers';
import * as eosUnpack from 'eos-unpack';

import Root from '../components/Root';
import {v2 as abi} from '../lib/erc20-abi';
require('buffer');

const useStyles = makeStyles(theme => ({
  cont: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    margin: 'auto'
  },
  btn: {
    margin: '10px 0 60px 0'
  }
}));

function formatEventValues(values, precision = 1e0) {
  const trimValues = Object.keys(values).reduce((ret, k) => {
    if (!/^\d+$/.test(k) && k !== 'length') {
      ret[k] = values[k];
    }
    return ret;
  }, {});
  const ret = traverse(trimValues).map(function(v) {
    if (v.hasOwnProperty('_hex')) {
      console.log('bignumber');
      const bn = new BN(v.toString()).dividedBy(precision);
      this.update(bn.toString());
    }
  });
  return ret;
}

function xrpHash(raw) {
  return transactionID(Buffer.from(raw, 'hex')).toString('hex');
}

function decodeXrp(rawTx) {
  const hash = xrpHash(rawTx);
  return Object.assign({hash}, decode(rawTx));
}

async function decodeTx(rawTx, txType) {
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

function decodeEth(rawTx, txType) {
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

let Decode = function() {
  const classes = useStyles();
  const [rawTx, setRawTx] = useState('');
  const [plainTx, setPlainTx] = useState('');
  const [txType, setTxType] = useState(10);
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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
          margin='normal'
          variant='outlined'
        />
        <FormControl variant={'outlined'} className={classes.formControl}>
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
          size={'large'}
          variant='contained'
          color='secondary'
          className={classes.btn}
          onClick={async _ => {
            setPlainTx('waiting...');
            try {
              const tx = await decodeTx(rawTx, txType);
              setPlainTx(JSON.stringify(tx, null, 2));
            } catch (e) {
              setPlainTx(`error message: ${e.message || e}`);
              console.log(e);
            }
          }}>
          Decode Tx
        </Button>
        <TextField
          multiline
          disabled
          rows={15}
          id='output-box'
          label='Decoded Transaction'
          className={classes.lgTx}
          value={plainTx}
          margin='normal'
          variant='outlined'
        />
      </div>
    </Root>
  );
};

export default Decode;
