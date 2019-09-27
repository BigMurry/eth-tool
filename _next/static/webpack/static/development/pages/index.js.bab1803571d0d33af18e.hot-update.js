webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/grey */ "./node_modules/@material-ui/core/colors/grey.js");
/* harmony import */ var _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/core */ "./lib/core.js");
var _jsxFileName = "/Users/admin/Projects/eth-tool/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    header: {
      fontSize: theme.spacing(3),
      position: 'fixed',
      width: '100%',
      top: 0,
      paddingLeft: theme.spacing(3),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      backgroundColor: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_4___default.a[500],
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
    lgTx: {
      width: theme.spacing(80)
    },
    mdTx: {
      width: theme.spacing(50)
    },
    smTx: {
      width: theme.spacing(20)
    },
    mgRight: {
      marginRight: theme.spacing(10)
    },
    block: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    line: {
      display: 'flex',
      alignItems: 'center'
    }
  };
});

function usePrivKey(seed, idx) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    privKey: '',
    address: ''
  }),
      account = _useState[0],
      setAccount = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (Object(_lib_core__WEBPACK_IMPORTED_MODULE_7__["validSeedOrPrivKey"])(seed)) {
      try {
        var acc = Object(_lib_core__WEBPACK_IMPORTED_MODULE_7__["decodeSeed"])(seed, idx);
        setAccount(acc);
      } catch (e) {}
    }
  }, [seed, idx]);
  return account;
}

var Index = function Index(_ref) {
  var provider = _ref.provider;
  var classes = useStyles();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      json = _useState2[0],
      setJson = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      seedOrPrivKey = _useState3[0],
      setSeedOrPrivKey = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      seedIdx = _useState4[0],
      setSeedIdx = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      sig = _useState5[0],
      setSig = _useState5[1];

  var _usePrivKey = usePrivKey(seedOrPrivKey, seedIdx),
      privKey = _usePrivKey.privKey,
      address = _usePrivKey.address;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("img", {
    className: classes.logo,
    src: "".concat("", "/static/logo.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "My Ethereum Tools")), __jsx("div", {
    className: classes.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: classes.block,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    multiline: true,
    id: "seeds",
    label: "Seed words or private key",
    className: classes.lgTx,
    value: seedOrPrivKey,
    onChange: function onChange(e) {
      return setSeedOrPrivKey(e.target.value);
    },
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("div", {
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: "seed-idx",
    label: "Input Seed Index",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.smTx, classes.mgRight),
    value: seedIdx,
    onChange: function onChange(e) {
      return setSeedIdx(e.target.value);
    },
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disabled: true,
    id: "address",
    label: "address",
    className: classes.mdTx,
    value: address,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    multiline: true,
    id: "json",
    label: "Input JSON Object",
    className: classes.lgTx,
    value: json,
    onChange: function onChange(e) {
      return setJson(e.target.value);
    },
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 'large',
    variant: "contained",
    color: "secondary",
    className: classes.btn,
    onClick: function onClick(_) {
      var _signJSON = Object(_lib_core__WEBPACK_IMPORTED_MODULE_7__["signJSON"])(privKey, JSON.parse(json)),
          signature = _signJSON.signature;

      setSig(signature);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "JSON sign"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    multiline: true,
    disabled: true,
    id: "output-box",
    label: "Signature",
    className: classes.lgTx,
    value: sig,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (_ref2) {
  var provider = _ref2.provider;
  return {
    provider: provider
  };
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.bab1803571d0d33af18e.hot-update.js.map