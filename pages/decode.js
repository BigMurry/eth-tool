import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import txDecoder from 'ethereum-tx-decoder';
import {Transaction as Tx} from 'ethereumjs-tx';
import BN from 'bignumber.js';
import traverse from 'traverse';

import Root from '../components/Root';
import {v2 as abi} from '../lib/erc20-abi';

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

function decodeTx(rawTx) {
  const ethTx = new Tx(rawTx);
  const tx = txDecoder.decodeTx(rawTx);
  const fnDecoder = new txDecoder.FunctionDecoder(abi);
  const data = fnDecoder.decodeFn(tx.data);
  tx.gasPrice = tx.gasPrice.toString();
  tx.gasLimit = tx.gasLimit.toString();
  tx.value = tx.value.toString();
  tx.decodeData = formatEventValues(data);
  return Object.assign(
    {from: '0x' + ethTx.getSenderAddress().toString('hex')},
    tx
  );
}

let Decode = function() {
  const classes = useStyles();
  const [rawTx, setRawTx] = useState('0xf8aa098501dcd6500083015f9094dac17f958d2ee523a2206206994597c13d831ec780b844a9059cbb000000000000000000000000f8a73320e1a463cd9ac1bf8953e332428218b47600000000000000000000000000000000000000000000000000000000625773a026a0caff69431f28238518ecd11f380cfc01088679d7baef48f8e1512c048dbe7aa9a0654c8fdd7ba37cfd75e6edc261a9f929e6cea7d8f983bf81d231b8f74d807b5a');
  const [plainTx, setPlainTx] = useState('');
  return (
    <Root>
      <div className={classes.cont}>
        <TextField
          multiline
          id='raw'
          label='ERC20 Raw transaction'
          rows={3}
          className={classes.tx}
          value={rawTx}
          onChange={e => setRawTx(e.target.value)}
          margin='normal'
          variant='outlined'
        />
        <Button
          size={'large'}
          variant='contained'
          color='secondary'
          className={classes.btn}
          onClick={_ => {
            try {
              const tx = decodeTx(rawTx);
              setPlainTx(JSON.stringify(tx, null, 2));
            } catch (e) {}
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
