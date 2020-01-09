webpackHotUpdate("static/development/pages/decode.js",{

/***/ "./pages/decode.js":
/*!*************************!*\
  !*** ./pages/decode.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethereum-tx-decoder */ "./node_modules/ethereum-tx-decoder/src/index.js");
/* harmony import */ var ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethereumjs-tx */ "./node_modules/ethereumjs-tx/dist/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bignumber.js */ "./node_modules/bignumber.js/bignumber.js");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var traverse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! traverse */ "./node_modules/traverse/index.js");
/* harmony import */ var traverse__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(traverse__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Root */ "./components/Root.js");
/* harmony import */ var _lib_erc20_abi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/erc20-abi */ "./lib/erc20-abi.js");
/* harmony import */ var _lib_erc20_abi__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_lib_erc20_abi__WEBPACK_IMPORTED_MODULE_13__);



var _jsxFileName = "/Users/admin/Projects/eth-tool/pages/decode.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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

  var trimValues = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(values).reduce(function (ret, k) {
    if (!/^\d+$/.test(k) && k !== 'length') {
      ret[k] = values[k];
    }

    return ret;
  }, {});

  var ret = traverse__WEBPACK_IMPORTED_MODULE_11___default()(trimValues).map(function (v) {
    if (v instanceof ethers__WEBPACK_IMPORTED_MODULE_7__["utils"].BigNumber) {
      console.log('bignumber');
      var bn = new bignumber_js__WEBPACK_IMPORTED_MODULE_10___default.a(v.toString()).dividedBy(precision);
      this.update(bn.toString());
    }
  });
  return ret;
}

function decodeTx(rawTx) {
  var ethTx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_9__["Transaction"](rawTx);
  var tx = ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_8___default.a.decodeTx(rawTx);
  var fnDecoder = new ethereum_tx_decoder__WEBPACK_IMPORTED_MODULE_8___default.a.FunctionDecoder(_lib_erc20_abi__WEBPACK_IMPORTED_MODULE_13__["v2"]);
  var data = fnDecoder.decodeFn(tx.data);
  tx.gasPrice = tx.gasPrice.toString();
  tx.gasLimit = tx.gasLimit.toString();
  tx.decodeData = formatEventValues(data);
  console.log(tx);
  return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({
    from: '0x' + ethTx.getSenderAddress().toString('hex')
  }, tx);
}

var Decode = function Decode() {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('0xf8aa098501dcd6500083015f9094dac17f958d2ee523a2206206994597c13d831ec780b844a9059cbb000000000000000000000000f8a73320e1a463cd9ac1bf8953e332428218b47600000000000000000000000000000000000000000000000000000000625773a026a0caff69431f28238518ecd11f380cfc01088679d7baef48f8e1512c048dbe7aa9a0654c8fdd7ba37cfd75e6edc261a9f929e6cea7d8f983bf81d231b8f74d807b5a'),
      rawTx = _useState[0],
      setRawTx = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      plainTx = _useState2[0],
      setPlainTx = _useState2[1];

  return __jsx(_components_Root__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: classes.cont,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 'large',
    variant: "contained",
    color: "secondary",
    className: classes.btn,
    onClick: function onClick(_) {
      try {
        var tx = decodeTx(rawTx);
        setPlainTx(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(tx, null, 2));
      } catch (e) {}
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Decode Tx"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    multiline: true,
    disabled: true,
    rows: 15,
    id: "output-box",
    label: "Decoded Transaction",
    className: classes.lgTx,
    value: plainTx,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Decode);

/***/ })

})
//# sourceMappingURL=decode.js.ca95c66bf67f70f8a6e3.hot-update.js.map