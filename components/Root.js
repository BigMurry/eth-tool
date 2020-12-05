import React from 'react';
import _get from 'lodash/get';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import makeBlockie from 'ethereum-blockies-base64';

import { connect, useWallet } from './useWallet';
import { shortAddr } from '../lib/share';

const useStyles = makeStyles(theme => ({
  page: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: theme.spacing(3),
    position: 'fixed',
    width: '100%',
    top: 0,
    padding: `0px ${theme.spacing(2)}px`,
    backgroundColor: grey[500],
    alignItems: 'center'
  },
  logo: {
    height: theme.spacing(8),
    marginRight: theme.spacing(3)
  },
  body: {
    width: '680px',
    margin: `${theme.spacing(20)}px ${theme.spacing(2)}px 0 ${theme.spacing(2)}px`
  },
  links: {
    backgroundColor: 'rgba(220,220,220,0.6)',
    padding: `${theme.spacing(1)}px 10px`,
    marginBottom: theme.spacing(2)
  },
  anchor: {
    marginRight: '10px'
  }
}));

function Root ({ children }) {
  const classes = useStyles();
  const { state } = useWallet();
  const account = _get(state, ['accounts', 0]);
  const chainId = _get(state, ['chainId']);

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <img className={classes.logo} src={`${process.env.BACKEND_URL}/static/logo.png`} />
        {!account && (
          <Button variant='outlined' color='secondary' onClick={e => connect()}>
            Connect Wallet
          </Button>
        )}
        {
          !!account && (
            <Chip
              avatar={<Avatar className={classes.small} src={makeBlockie(account)} />}
              label={shortAddr(account)}
              className={clsx({ [classes.yellow]: chainId > 1, [classes.grey]: chainId < 0, [classes.ready]: chainId === 1 })}
            />
          )
        }
      </div>
      <div className={classes.body}>
        <div className={classes.links}>
          <Link href={`${process.env.BACKEND_URL}/`}>
            <a className={classes.anchor}>sign</a>
          </Link>
          <Link href={`${process.env.BACKEND_URL}/decode`}>
            <a className={classes.anchor}>decode</a>
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Root;
