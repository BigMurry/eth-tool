import * as ethers from 'ethers';
import * as stringify from 'json-stable-stringify';
import {
  ecsign
} from 'ethereumjs-util';
import Mnemonic from 'bitcore-mnemonic';
import {fromExtendedKey} from 'ethereumjs-wallet/hdkey';

const BIP44_PATH = `m/44'/60'/0'/0`;

export function jsonHash(obj) {
  const json = stringify(obj);
  return ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(json)
  );
}

export function sign(privateKey, msgHash) {
  msgHash = Buffer.from(msgHash.replace(/^0x/, ''), 'hex');
  const sig = ecsign(msgHash, privateKey);
  const ret = {
    r: sig.r.toString('hex'),
    s: sig.s.toString('hex'),
    v: sig.v
  };
  ret.messageHash = msgHash.toString('hex');
  ret.signature = `0x${ret.r}${ret.s}${ret.v.toString(16)}`;
  ret.r = '0x' + ret.r;
  ret.s = '0x' + ret.s;
  return ret;
}

export function signJSONFromSeed(seeds, idx, obj) {
  const { xprivkey } = new Mnemonic(seeds).toHDPrivateKey();
  const hdKey = fromExtendedKey(xprivkey);
  const ethereumNode = hdKey.derivePath(BIP44_PATH);
  const wallet = ethereumNode.deriveChild(idx).getWallet();
  const hash = jsonHash(obj);
  const sig = sign(wallet.getPrivateKey(), hash);
  return {
    sig,
    address: '0x' + wallet.getAddress().toString('hex')
  };
}

export async function providerSignObj(provider, obj) {
  // const msg = `coke bet unlock session wallet`;
  // window.__provider = provider;
  let msg = stringify(obj);
  try {
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    msg = ethers.utils.toUtf8Bytes(msg);
    /*
    if (provider._web3Provider.isTrust) {
      window.alert('debug: prepare sign');
    }
    */
    const sig = await provider.send('personal_sign', [ethers.utils.hexlify(msg), addr.toLowerCase()]);
    /*
    if (provider._web3Provider.isTrust) {
      window.alert(`debug: sig returns, ${sig}`);
    }
    */
    return sig;
  } catch (e) {
    /*
    if (provider._web3Provider.isTrust) {
      window.alert(`debug: exception occured, ${e.message}`);
    }
    */
    return null;
  }
}
