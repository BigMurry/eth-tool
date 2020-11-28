webpackHotUpdate("static/development/pages/decode.js",{

/***/ "./pages/decode.js":
/*!*************************!*\
  !*** ./pages/decode.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethereum-tx-decoder */ "./node_modules/ethereum-tx-decoder/src/index.js");
/* harmony import */ var ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ethereumjs-tx */ "./node_modules/ethereumjs-tx/dist/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! eosjs */ "./node_modules/eosjs/dist/index.js");
/* harmony import */ var eosjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(eosjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ripple_binary_codec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ripple-binary-codec */ "./node_modules/ripple-binary-codec/distrib/npm/index.js");
/* harmony import */ var ripple_binary_codec__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ripple_binary_codec__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ripple_binary_codec_distrib_npm_hashes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ripple-binary-codec/distrib/npm/hashes */ "./node_modules/ripple-binary-codec/distrib/npm/hashes.js");
/* harmony import */ var ripple_binary_codec_distrib_npm_hashes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ripple_binary_codec_distrib_npm_hashes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var traverse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! traverse */ "./node_modules/traverse/index.js");
/* harmony import */ var traverse__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(traverse__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/Root */ "./components/Root.js");
/* harmony import */ var _lib_erc20_abi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../lib/erc20-abi */ "./lib/erc20-abi.js");
/* harmony import */ var _lib_erc20_abi__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_lib_erc20_abi__WEBPACK_IMPORTED_MODULE_20__);


var _jsxFileName = "/Users/admin/Projects/eth-tool/pages/decode.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




















__webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js");

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    cont: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '800px',
      margin: 'auto'
    },
    btn: {
      margin: '10px 0 60px 0'
    }
  };
});

function formatEventValues(values) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e0;
  var trimValues = Object.keys(values).reduce(function (ret, k) {
    if (!/^\d+$/.test(k) && k !== 'length') {
      ret[k] = values[k];
    }

    return ret;
  }, {});
  var ret = traverse__WEBPACK_IMPORTED_MODULE_17___default()(trimValues).map(function (v) {
    if (v.hasOwnProperty('_hex')) {
      console.log('bignumber');
      var bn = new bignumber_js__WEBPACK_IMPORTED_MODULE_16___default.a(v.toString()).dividedBy(precision);
      this.update(bn.toString());
    }
  });
  return ret;
}

function decodeEos(rawTx) {
  var eosNode,
      chainId,
      rpc,
      api,
      res,
      hash,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function decodeEos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          eosNode = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'https://api.eossweden.org';
          chainId = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
          rpc = new eosjs__WEBPACK_IMPORTED_MODULE_12__["JsonRpc"](eosNode, {
            fetch: isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_13___default.a
          });
          api = new eosjs__WEBPACK_IMPORTED_MODULE_12__["Api"]({
            rpc: rpc,
            // signatureProvider: new SignatureProvider(),
            chainId: chainId,
            textEncoder: new TextEncoder(),
            textDecoder: new TextDecoder()
          });
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(api.deserializeTransactionWithActions(rawTx));

        case 6:
          res = _context.sent;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(eosHash(rawTx));

        case 9:
          hash = _context.sent;
          return _context.abrupt("return", Object.assign({
            hash: hash
          }, res));

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

function xrpHash(raw) {
  return Object(ripple_binary_codec_distrib_npm_hashes__WEBPACK_IMPORTED_MODULE_15__["transactionID"])(Buffer.from(raw, 'hex')).toString('hex');
}

var fromHexString = function fromHexString(hexString) {
  return new Uint8Array(hexString.match(/.{1,2}/g).map(function (_byte) {
    return parseInt(_byte, 16);
  }));
}; // https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest


function eosHash(hex) {
  var hashBuffer, hashArray, hashHex;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function eosHash$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(window.crypto.subtle.digest('SHA-256', fromHexString(hex)));

        case 2:
          hashBuffer = _context2.sent;
          // hash the message
          hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array

          hashHex = hashArray.map(function (b) {
            return b.toString(16).padStart(2, '0');
          }).join(''); // convert bytes to hex string

          return _context2.abrupt("return", hashHex);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
}

function decodeXrp(rawTx) {
  var hash = xrpHash(rawTx);
  console.log(hash);
  return Object.assign({
    hash: hash
  }, Object(ripple_binary_codec__WEBPACK_IMPORTED_MODULE_14__["decode"])(rawTx));
}

function decodeTx(rawTx, txType) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function decodeTx$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          if (!(txType === TX_TYPES.DEFAULT || txType === TX_TYPES.ERC20)) {
            _context3.next = 2;
            break;
          }

          return _context3.abrupt("return", decodeEth(rawTx, txType));

        case 2:
          if (!(txType === TX_TYPES.XRP)) {
            _context3.next = 4;
            break;
          }

          return _context3.abrupt("return", decodeXrp(rawTx));

        case 4:
          if (!(txType === TX_TYPES.EOS)) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", decodeEos(rawTx));

        case 6:
          return _context3.abrupt("return", {
            error: 'NOT support'
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
}

function decodeEth(rawTx, txType) {
  var ethTx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_11__["Transaction"](rawTx);
  var tx = ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_10___default.a.decodeTx(rawTx);

  if (txType === TX_TYPES.ERC20) {
    var fnDecoder = new ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_10___default.a.FunctionDecoder(_lib_erc20_abi__WEBPACK_IMPORTED_MODULE_20__["v2"]);
    var data = fnDecoder.decodeFn(tx.data);
    tx.decodeData = formatEventValues(data);
  }

  tx.gasPrice = tx.gasPrice.toString();
  tx.gasLimit = tx.gasLimit.toString();
  tx.value = tx.value.toString();
  var hash = ethers__WEBPACK_IMPORTED_MODULE_18__["utils"].keccak256(rawTx);
  return Object.assign({
    hash: hash,
    from: '0x' + ethTx.getSenderAddress().toString('hex')
  }, tx);
}

var TX_TYPES = {
  DEFAULT: 10,
  ERC20: 20,
  XRP: 30,
  EOS: 40
};

var Decode = function Decode() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      rawTx = _useState[0],
      setRawTx = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      plainTx = _useState2[0],
      setPlainTx = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10),
      txType = _useState3[0],
      setTxType = _useState3[1];

  var inputLabel = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      labelWidth = _React$useState2[0],
      setLabelWidth = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return __jsx(_components_Root__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.cont,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    multiline: true,
    id: "raw",
    label: "Raw transaction",
    rows: 3,
    className: classes.tx,
    value: rawTx,
    onChange: function onChange(e) {
      return setRawTx(e.target.value);
    },
    margin: "normal",
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: 'outlined',
    className: classes.formControl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ref: inputLabel,
    id: "tx-type",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 11
    }
  }, "Tx type"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "tx-type-select",
    value: txType,
    onChange: function onChange(e) {
      return setTxType(e.target.value);
    },
    labelWidth: labelWidth,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: TX_TYPES.DEFAULT,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, "Eth default")), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: TX_TYPES.ERC20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }, "ERC20"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: TX_TYPES.XRP,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, "XRP"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: TX_TYPES.EOS,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }, "EOS"))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 'large',
    variant: "contained",
    color: "secondary",
    className: classes.btn,
    onClick: function _callee(_) {
      var tx;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(decodeTx(rawTx, txType));

            case 3:
              tx = _context4.sent;
              setPlainTx(JSON.stringify(tx, null, 2));
              _context4.next = 11;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              setPlainTx("error message: ".concat(_context4.t0.message || _context4.t0));
              console.log(_context4.t0);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 7]], Promise);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 9
    }
  }, "Decode Tx"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    multiline: true,
    disabled: true,
    rows: 15,
    id: "output-box",
    label: "Decoded Transaction",
    className: classes.lgTx,
    value: plainTx,
    margin: "normal",
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Decode);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=decode.js.0379b20fbe36e3265e21.hot-update.js.map