import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { WalletProvider } from '../components/useWallet';

class MyApp extends App {
  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>ETH-Tools</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <WalletProvider>
            <Component {...pageProps} />
          </WalletProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
