import React, { useContext, useState, useEffect } from 'react';
import * as ethers from 'ethers';

export async function connect () {
  let accounts = [];
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
  return accounts;
}

function setup (setStates) {
  console.log('setup begin');
  let ready;
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    window.ethereum.request({ method: 'eth_accounts' }).then(accounts => setStates(prev => ({
      ...prev,
      chainId: parseInt(window.ethereum.chainId, 16),
      provider,
      accounts
    })));

    window.ethereum.on('chainChanged', chainId => setStates(prev => ({
      ...prev,
      chainId: parseInt(chainId, 16)
    })));
    window.ethereum.on('accountsChanged', accounts => setStates(prev => ({
      ...prev,
      accounts
    })));
    window.ethereum.on('connect', () => {
      console.log('connect');
    });
    window.ethereum.on('disconnect', () => {
      console.log('disconnect');
    });
    window.ethereum.on('message', message => {
      console.log(message);
    });
    console.log('setup complete');
    ready = true;
  }
  return ready;
}

const WalletContext = React.createContext({});

export function useWallet () {
  return useContext(WalletContext);
}

const states = {
  accounts: [],
  chainId: -1
};

export function WalletProvider ({ children }) {
  const [state, setState] = useState(states);

  useEffect(() => {
    console.log('wallet provider use effect');
    const maxTimes = 20;
    let retry = 0;
    let ready;
    const inter = setInterval(() => {
      if (retry >= maxTimes || ready) {
        clearInterval(inter);
        return;
      }
      ready = setup(setState);
      ++retry;
    }, 1000);
  }, []);

  return (
    <WalletContext.Provider value={{ state, setState }}>
      {children}
    </WalletContext.Provider>
  );
}
