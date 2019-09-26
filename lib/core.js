import * as ethers from 'ethers';
import * as stringify from 'json-stable-stringify';

export function jsonHash(obj) {
  const json = stringify(obj);
  return ethers.utils.keccak256(
    ethers.utils.toUtf8Bytes(json)
  );
}

export async function providerSign(provider, hash) {
  // const msg = `coke bet unlock session wallet`;
  // window.__provider = provider;
  try {
    const signer = provider.getSigner();
    const addr = await signer.getAddress();
    /*
    if (provider._web3Provider.isTrust) {
      window.alert('debug: prepare sign');
    }
    */
    const sig = await provider.send('personal_sign', [hash, addr.toLowerCase()]);
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
