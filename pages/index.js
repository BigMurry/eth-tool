import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { connect } from 'react-redux';
import clsx from 'clsx';
import {signJSON, decodeSeed, validSeedOrPrivKey} from '../lib/core';

const useStyles = makeStyles(theme => ({
  header: {
    fontSize: theme.spacing(3),
    position: 'fixed',
    width: '100%',
    top: 0,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    backgroundColor: grey[500],
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: theme.spacing(8),
    marginRight: theme.spacing(3)
  },
  body: {
    marginTop: theme.spacing(14),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4)
  },
  lgTx: {
    width: theme.spacing(80)
  },
  mdTx: {
    width: theme.spacing(50)
  },
  smTx: {
    width: theme.spacing(20)
  },
  mgRight: {
    marginRight: theme.spacing(10)
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  line: {
    display: 'flex',
    alignItems: 'center'
  }
}));

function usePrivKey(seed, idx) {
  const [account, setAccount] = useState({privKey: '', address: ''});
  useEffect(() => {
    if (validSeedOrPrivKey(seed)) {
      setAccount(decodeSeed(seed, idx));
    } else {
      setAccount({privKey: '', address: ''});
    }
  }, [seed, idx]);
  return account;
}

const Index = function({provider}) {
  const classes = useStyles();
  const [json, setJson] = useState('');
  const [seedOrPrivKey, setSeedOrPrivKey] = useState('');
  const [seedIdx, setSeedIdx] = useState(0);
  const [sig, setSig] = useState('');
  const {privKey, address} = usePrivKey(seedOrPrivKey, seedIdx);

  return (
    <React.Fragment>
      <div className={classes.header}>
        <img className={classes.logo} src={`${process.env.BACKEND_URL}/static/logo.png`} />
        <div>My Ethereum Tools</div>
      </div>
      <div className={classes.body}>
        <div className={classes.block}>
          <TextField
            multiline
            id='seeds'
            label='Seed words or private key'
            className={classes.lgTx}
            value={seedOrPrivKey}
            onChange={e => setSeedOrPrivKey(e.target.value)}
            margin='normal'
            variant='outlined'
          />
          <div className={classes.line}>
            <TextField
              id='seed-idx'
              label='Input Seed Index'
              className={clsx(classes.smTx, classes.mgRight)}
              value={seedIdx}
              onChange={e => setSeedIdx(e.target.value)}
              margin='normal'
              variant='outlined'
            />
            <TextField
              disabled
              id='address'
              label='address'
              className={classes.mdTx}
              value={address}
              margin='normal'
              variant='outlined'
            />
          </div>
          <TextField
            multiline
            id='json'
            label='Input JSON Object'
            className={classes.lgTx}
            value={json}
            onChange={e => setJson(e.target.value)}
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
                const {signature} = signJSON(privKey, JSON.parse(json));
                setSig(signature);
              } catch (e) {}
            }}>
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
      </div>
    </React.Fragment>
  );
};

export default connect(({provider}) => ({provider}))(Index);
