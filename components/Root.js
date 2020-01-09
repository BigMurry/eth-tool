import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Link from 'next/link';

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
  links: {
    marginLeft: '40px',
    fontSize: '0.8em'
  },
  anchor: {
    marginRight: '10px'
  }
}));

function Root({children}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.header}>
        <img className={classes.logo} src={`${process.env.BACKEND_URL}/static/logo.png`} />
        <div>My Ethereum Tools</div>
        <div className={classes.links}>
          <Link href={`${process.env.BACKEND_URL}/`}>
            <a className={classes.anchor}>sign</a>
          </Link>
          <Link href={`${process.env.BACKEND_URL}/decode`}>
            <a className={classes.anchor}>decode</a>
          </Link>
        </div>
      </div>
      <div className={classes.body}>{children}</div>
    </React.Fragment>
  );
}

export default Root;
