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
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/core */ "./lib/core.js");
var _jsxFileName = "/Users/admin/Projects/eth-tool/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    header: {
      fontSize: theme.spacing(2),
      position: 'fixed',
      width: '100%',
      top: 0,
      padding: theme.spacing(2),
      backgroundColor: _material_ui_core_colors_grey__WEBPACK_IMPORTED_MODULE_4___default.a[500]
    },
    body: {
      marginTop: theme.spacing(8),
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4)
    },
    textField: {
      width: theme.spacing(50),
      height: theme.spacing(50)
    },
    line: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  };
});

var Index = function Index(_ref) {
  var provider = _ref.provider;
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      inputObj = _useState[0],
      setInputObj = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      sig = _useState2[0],
      setSig = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: classes.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "My Ethereum Tools"), __jsx("div", {
    className: classes.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    multiline: true,
    id: "input-box",
    label: "Input Object",
    className: classes.textField,
    value: inputObj,
    onChange: function onChange(e) {
      return setInputObj(e.target.value);
    },
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "outlined",
    color: "secondary",
    className: classes.btn,
    onClick: function onClick(_) {
      return Object(_lib_core__WEBPACK_IMPORTED_MODULE_6__["providerSign"])(provider, Object(_lib_core__WEBPACK_IMPORTED_MODULE_6__["jsonHash"])(inputObj)).then(setSig);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "JSON sign"), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    multiline: true,
    disabled: true,
    id: "output-box",
    label: "Signature",
    className: classes.textField,
    value: sig,
    margin: "normal",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
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
//# sourceMappingURL=index.js.50cceb2d7bf278e9fb92.hot-update.js.map