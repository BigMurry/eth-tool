import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { signJSON, decodeSeed, validSeedOrPrivKey } from '../lib/core';
import { useWallet } from '../components/useWallet';
import Root from '../components/Root';

const useStyles = makeStyles(theme => ({
  lgTx: {
    width: '100%'
  },
  mdTx: {
  },
  smTx: {
  },
  mgRight: {
    marginRight: theme.spacing(1)
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  line: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'spacing-between',
    width: '100%'
  }
}));

function usePrivKey (seed, idx) {
  const [account, setAccount] = useState({ privKey: '', address: '' });
  useEffect(() => {
    if (validSeedOrPrivKey(seed)) {
      setAccount(decodeSeed(seed, idx));
    } else {
      setAccount({ privKey: '', address: '' });
    }
  }, [seed, idx]);
  return account;
}

const Index = function () {
  const { state } = useWallet();
  const classes = useStyles();
  const [json, setJson] = useState('');
  const [seedOrPrivKey, setSeedOrPrivKey] = useState('');
  const [seedIdx, setSeedIdx] = useState(0);
  const [sig, setSig] = useState('');
  const { privKey, address } = usePrivKey(seedOrPrivKey, seedIdx);

  return (
    <Root>
      <div className={classes.block}>
        <TextField
          multiline
          id='seeds'
          label='Seed words or private key'
          className={classes.lgTx}
          value={seedOrPrivKey}
          onChange={e => setSeedOrPrivKey(e.target.value)}
          variant='outlined'
        />
        <div className={classes.line}>
          <TextField
            id='seed-idx'
            label='Wallet Index'
            fullWidth
            className={clsx(classes.smTx, classes.mgRight)}
            value={seedIdx}
            onChange={e => setSeedIdx(e.target.value)}
            variant='outlined'
          />
          <TextField
            disabled
            id='address'
            label='address'
            fullWidth
            className={classes.mdTx}
            value={address}
            variant='outlined'
          />
        </div>
        <TextField
          multiline
          id='json'
          label='JSON Object to Sign'
          className={classes.lgTx}
          value={json}
          onChange={e => setJson(e.target.value)}
          margin='normal'
          variant='outlined'
        />
        <Button
          size='large'
          variant='contained'
          color='secondary'
          className={classes.btn}
          fullWidth
          onClick={_ => {
            try {
              const { signature } = signJSON(privKey, JSON.parse(json));
              setSig(signature);
            } catch (e) {}
          }}
        >
          JSON sign
        </Button>
        <TextField
          multiline
          disabled
          id='output-box'
          label='Signature'
          className={classes.lgTx}
          value={sig}
          margin='normal'
          variant='outlined'
        />
      </div>
    </Root>
  );
};

export default Index;
