import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import { connect } from 'react-redux';
import {providerSignObj} from '../lib/core';

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
  textField: {
    width: theme.spacing(50)
  },
  line: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const Index = function({provider}) {
  const classes = useStyles();
  const [inputObj, setInputObj] = useState('');
  const [sig, setSig] = useState('');

  return (
    <React.Fragment>
      <div className={classes.header}>
        <img className={classes.logo} src={`${process.env.BACKEND_URL}/static/logo.png`} />
        <div>My Ethereum Tools</div>
      </div>
      <div className={classes.body}>
        <div className={classes.line}>
          <TextField
            multiline
            id='input-box'
            label='Input Object'
            className={classes.textField}
            value={inputObj}
            onChange={e => setInputObj(e.target.value)}
            margin='normal'
            variant='outlined'
          />
          <Button
            variant='outlined'
            color='secondary'
            className={classes.btn}
            onClick={_ => providerSignObj(provider, JSON.parse(inputObj)).then(setSig)}>
            JSON sign
          </Button>
          <TextField
            multiline
            disabled
            id='output-box'
            label='Signature'
            className={classes.textField}
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