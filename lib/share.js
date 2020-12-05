export function selectAs (object, pathConf) {
  return Object.keys(object).reduce((ret, key) => {
    if (Object.hasOwnProperty.call(pathConf, key)) {
      ret[pathConf[key]] = object[key];
    }
    return ret;
  }, {});
}

export function shortAddr (address = '') {
  return address.replace(/^(0x[0-9a-fA-F]{3}).+([0-9a-fA-F]{3})$/, '$1...$2');
}

export function numberWithCommas (x) {
  const parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}

export function trimZero (numStr = '') {
  return numStr.replace(/\.?0+$/, '');
}

export function formatNumber (len) {
  const zeros = '0000000000';
  return (number) => {
    if (number >= Math.pow(10, len)) {
      return number;
    }
    return `${zeros}${number}`.substr(-len);
  };
}
