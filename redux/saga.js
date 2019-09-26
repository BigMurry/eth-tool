import { all, put, takeEvery, select, call } from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import _get from 'lodash/get';
import _pick from 'lodash/pick';
import _toLower from 'lodash/toLower';
import * as ethers from 'ethers';
import {STORE_ACTIONS} from './store';
import {tryEnableWeb3} from '../lib/share';

function heartbeat(ms, delayMs = 10000) { // delay 10s
  let trigger;
  const channel = eventChannel(emitter => {
    trigger = emitter;
    setTimeout(() => {
      emitter({type: 'HEART_BEAT'});
    }, delayMs);

    const iv = setInterval(() => {
      emitter({
        type: 'HEART_BEAT'
      });
    }, ms);
    return () => {
      clearInterval(iv);
    };
  });
  const trig = () => {
    if (typeof trigger === 'function') {
      trigger({type: 'HEART_BEAT'});
    }
  };
  return {
    channel,
    trig
  };
}

function wrp(saga) {
  return function * inner(...args) {
    try {
      yield call(saga, ...args);
    } catch (e) {
      console.log('saga exception raised.');
      console.log(e);
    }
  };
}

// update wallet address and activties
let errorCount = 0;
let providerBackup;
function * updateAccount(action) {
  const currentProvider = _get(window, ['ethereum'], _get(window, ['web3', 'currentProvider']));
  if (providerBackup && currentProvider && currentProvider !== providerBackup) {
    return window.location.reload();
  }
  if (!providerBackup) {
    providerBackup = currentProvider;
  }
  let {provider, account: lastAccount} = yield select(state => _pick(state, ['provider', 'account']));

  if (!provider && currentProvider) {
    provider = new ethers.providers.Web3Provider(currentProvider);
    // setWalletFlag(currentProvider);
    yield put(STORE_ACTIONS.setProvider(provider));
    const {chainId: network} = yield call(provider.getNetwork.bind(provider));
    yield put(STORE_ACTIONS.setNetwork(network));
    // const Watcher = yield call(eventWatcher, provider);
    // yield put(STORE_ACTIONS.setEventWatcher(Watcher));
  }

  if (provider) {
    try {
      yield call(tryEnableWeb3);
      const accounts = yield call(provider.listAccounts.bind(provider));
      if (accounts && accounts.length > 0) {
        const newAccount = _toLower(accounts[0]);

        // account switched
        if (newAccount && lastAccount && newAccount !== lastAccount) {
          return window.location.reload();
        }

        // new Account
        if (!lastAccount) {
          yield put(STORE_ACTIONS.setAccount(newAccount));
        }

        errorCount = 0;
      }
    } catch (e) {
      console.log(e);
      if (errorCount === 0) {
        yield put(STORE_ACTIONS.setNotice({
          id: new Date().getTime(),
          msg: 'saga.error.walletNotReady',
          variant: 'error'
        }));
      }
      ++errorCount;
    }
  }
}

function * rootSaga() {
  if (typeof window === 'undefined') {
    return;
  }

  const walletDetector = heartbeat(1000); // 1s

  yield all([
    takeEvery(walletDetector.channel, wrp(updateAccount))
  ]);
}

export default rootSaga;
