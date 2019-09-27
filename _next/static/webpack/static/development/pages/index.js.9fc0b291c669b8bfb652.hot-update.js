webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/core.js":
/*!*********************!*\
  !*** ./lib/core.js ***!
  \*********************/
/*! exports provided: jsonHash, sign, validSeedOrPrivKey, decodeSeed, signJSON, providerSignObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonHash", function() { return jsonHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validSeedOrPrivKey", function() { return validSeedOrPrivKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeSeed", function() { return decodeSeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signJSON", function() { return signJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providerSignObj", function() { return providerSignObj; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-stable-stringify */ "./node_modules/json-stable-stringify/index.js");
/* harmony import */ var json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ethereumjs-util */ "./node_modules/ethereumjs-util/dist/index.js");
/* harmony import */ var ethereumjs_util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bitcore_mnemonic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bitcore-mnemonic */ "./node_modules/bitcore-mnemonic/index.js");
/* harmony import */ var bitcore_mnemonic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bitcore_mnemonic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ethereumjs_wallet_hdkey__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethereumjs-wallet/hdkey */ "./node_modules/ethereumjs-wallet/hdkey.js");
/* harmony import */ var ethereumjs_wallet_hdkey__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_wallet_hdkey__WEBPACK_IMPORTED_MODULE_6__);







var BIP44_PATH = "m/44'/60'/0'/0";
function jsonHash(obj) {
  var json = json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__(obj);
  return ethers__WEBPACK_IMPORTED_MODULE_2__["utils"].keccak256(ethers__WEBPACK_IMPORTED_MODULE_2__["utils"].toUtf8Bytes(json));
}
function sign(privateKey, msgHash) {
  msgHash = Buffer.from(msgHash.replace(/^0x/, ''), 'hex');
  var sig = Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_4__["ecsign"])(msgHash, privateKey);
  var ret = {
    r: sig.r.toString('hex'),
    s: sig.s.toString('hex'),
    v: sig.v
  };
  ret.messageHash = msgHash.toString('hex');
  ret.signature = "0x".concat(ret.r).concat(ret.s).concat(ret.v.toString(16));
  ret.r = '0x' + ret.r;
  ret.s = '0x' + ret.s;
  return ret;
}
function validSeedOrPrivKey(seedOrPrivKey) {
  return /^[0-9a-fA-F]{64}$/.test(seedOrPrivKey) || seedOrPrivKey.split(' ').length === 12;
}
function decodeSeed(seedOrPrivKey, idx) {
  var privKey = '';
  var address = '';

  try {
    if (!/^[0-9a-fA-F]{64}$/.test(seedOrPrivKey)) {
      // not privKey
      var _toHDPrivateKey = new bitcore_mnemonic__WEBPACK_IMPORTED_MODULE_5___default.a(seedOrPrivKey).toHDPrivateKey(),
          xprivkey = _toHDPrivateKey.xprivkey;

      var hdKey = Object(ethereumjs_wallet_hdkey__WEBPACK_IMPORTED_MODULE_6__["fromExtendedKey"])(xprivkey);
      var ethereumNode = hdKey.derivePath(BIP44_PATH);
      var wallet = ethereumNode.deriveChild(idx).getWallet();
      privKey = wallet.getPrivateKey();
    } else {
      privKey = ethers__WEBPACK_IMPORTED_MODULE_2__["utils"].arrayify(privKey);
    }

    address = '0x' + Object(ethereumjs_util__WEBPACK_IMPORTED_MODULE_4__["privateToAddress"])(privKey).toString('hex');
  } catch (e) {
    console.log(e);
  }

  return {
    privKey: privKey,
    address: address
  };
}
function signJSON(privKey, obj) {
  var hash = jsonHash(obj);
  var sig = sign(privKey, hash);
  return sig;
}
function providerSignObj(_x, _x2) {
  return _providerSignObj.apply(this, arguments);
}

function _providerSignObj() {
  _providerSignObj = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(provider, obj) {
    var msg, signer, addr, sig;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const msg = `coke bet unlock session wallet`;
            // window.__provider = provider;
            msg = json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__(obj);
            _context.prev = 1;
            signer = provider.getSigner();
            _context.next = 5;
            return signer.getAddress();

          case 5:
            addr = _context.sent;
            msg = ethers__WEBPACK_IMPORTED_MODULE_2__["utils"].toUtf8Bytes(msg);
            /*
            if (provider._web3Provider.isTrust) {
              window.alert('debug: prepare sign');
            }
            */

            _context.next = 9;
            return provider.send('personal_sign', [ethers__WEBPACK_IMPORTED_MODULE_2__["utils"].hexlify(msg), addr.toLowerCase()]);

          case 9:
            sig = _context.sent;
            return _context.abrupt("return", sig);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", null);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));
  return _providerSignObj.apply(this, arguments);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=index.js.9fc0b291c669b8bfb652.hot-update.js.map