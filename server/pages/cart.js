(function() {
var exports = {};
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./components/CheckoutEdit.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutEdit.jsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/user.slice */ "./redux/user.slice.js");
/* harmony import */ var _styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/youraccount.module.css */ "./styles/youraccount.module.css");
/* harmony import */ var _styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\yashv\\OneDrive\\Desktop\\priyanka\\myminielvess\\components\\CheckoutEdit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const CheckoutEdit = props => {
  var _props$data$address_, _props$data$address_2, _props$data$pincode, _props$data$city, _props$data$state, _props$data$number, _props$data$name;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    0: state,
    1: setstate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    address_1: (_props$data$address_ = props.data.address_1) !== null && _props$data$address_ !== void 0 ? _props$data$address_ : "",
    address_2: (_props$data$address_2 = props.data.address_2) !== null && _props$data$address_2 !== void 0 ? _props$data$address_2 : "",
    pincode: (_props$data$pincode = props.data.pincode) !== null && _props$data$pincode !== void 0 ? _props$data$pincode : "",
    city: (_props$data$city = props.data.city) !== null && _props$data$city !== void 0 ? _props$data$city : "",
    state: (_props$data$state = props.data.state) !== null && _props$data$state !== void 0 ? _props$data$state : "",
    number: (_props$data$number = props.data.number) !== null && _props$data$number !== void 0 ? _props$data$number : "",
    name: (_props$data$name = props.data.name) !== null && _props$data$name !== void 0 ? _props$data$name : ""
  });

  const onChange = e => {
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const onsubmit = e => {
    e.preventDefault();
    dispatch((0,_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(_objectSpread({}, state)));
    props.isCheckOut ? props.func2() : props.func();
    alert("Profile Updated Successfully");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      onClick: props.func,
      src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-essentials-tanah-basah-glyph-tanah-basah.png",
      className: (_styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().edit)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("u", {
        children: " Your Addresses"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: onsubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "name",
        onChange: onChange,
        value: state.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "number",
        onChange: onChange,
        value: state.number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "House"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "address_1",
        onChange: onChange,
        value: state.address_1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Street"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "address_2",
        onChange: onChange,
        value: state.address_2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 20
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "City"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: state.city,
        name: "city",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 18
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "State"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: state.state,
        name: "state",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 19
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Zip code"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: state.pincode,
        name: "pincode",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 22
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 8
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 18
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutEdit);

/***/ }),

/***/ "./components/ProfileEdit.jsx":
/*!************************************!*\
  !*** ./components/ProfileEdit.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/user.slice */ "./redux/user.slice.js");
/* harmony import */ var _styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/youraccount.module.css */ "./styles/youraccount.module.css");
/* harmony import */ var _styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\yashv\\OneDrive\\Desktop\\priyanka\\myminielvess\\components\\ProfileEdit.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const ProfileEdit = props => {
  var _props$data$address_, _props$data$address_2, _props$data$pincode, _props$data$city, _props$data$state, _props$data$number, _props$data$name;

  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    0: state,
    1: setstate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    address_1: (_props$data$address_ = props.data.address_1) !== null && _props$data$address_ !== void 0 ? _props$data$address_ : "",
    address_2: (_props$data$address_2 = props.data.address_2) !== null && _props$data$address_2 !== void 0 ? _props$data$address_2 : "",
    pincode: (_props$data$pincode = props.data.pincode) !== null && _props$data$pincode !== void 0 ? _props$data$pincode : "",
    city: (_props$data$city = props.data.city) !== null && _props$data$city !== void 0 ? _props$data$city : "",
    state: (_props$data$state = props.data.state) !== null && _props$data$state !== void 0 ? _props$data$state : "",
    number: (_props$data$number = props.data.number) !== null && _props$data$number !== void 0 ? _props$data$number : "",
    name: (_props$data$name = props.data.name) !== null && _props$data$name !== void 0 ? _props$data$name : ""
  });

  const onChange = e => {
    setstate(_objectSpread(_objectSpread({}, state), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const onsubmit = e => {
    e.preventDefault();
    dispatch((0,_redux_user_slice__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(_objectSpread({}, state)));
    props.isCheckOut ? props.func2() : props.func();
    alert("Profile Updated Successfully");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      onClick: props.func,
      src: "https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-plus-essentials-tanah-basah-glyph-tanah-basah.png",
      className: (_styles_youraccount_module_css__WEBPACK_IMPORTED_MODULE_4___default().edit)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("u", {
        children: " Your Addresses"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
      onSubmit: onsubmit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Name"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "name",
        onChange: onChange,
        value: state.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "number",
        onChange: onChange,
        value: state.number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "House"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "address_1",
        onChange: onChange,
        value: state.address_1
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Street"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        name: "address_2",
        onChange: onChange,
        value: state.address_2
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 20
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "City"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: state.city,
        name: "city",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 18
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "State"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: state.state,
        name: "state",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 8
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h5", {
        children: "Zip code"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: state.pincode,
        name: "pincode",
        onChange: onChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 22
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 8
      }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 18
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        children: "Add"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileEdit);

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["ibb.co","imgur.com","i.ibb.co","ebackendbucket.s3.amazonaws.com","via.placeholder.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if ((widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/cart.jsx":
/*!************************!*\
  !*** ./pages/cart.jsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_cart_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/cart.slice */ "./redux/cart.slice.js");
/* harmony import */ var _styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/CartPage.module.css */ "./styles/CartPage.module.css");
/* harmony import */ var _styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-razorpay */ "react-razorpay");
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_razorpay__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../payment */ "./payment/index.js");
/* harmony import */ var _redux_user_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/user.slice */ "./redux/user.slice.js");
/* harmony import */ var _components_ProfileEdit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ProfileEdit */ "./components/ProfileEdit.jsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CheckoutEdit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/CheckoutEdit */ "./components/CheckoutEdit.jsx");


var _jsxFileName = "C:\\Users\\yashv\\OneDrive\\Desktop\\priyanka\\myminielvess\\pages\\cart.jsx";












const CartPage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
  const Razorpay = react_razorpay__WEBPACK_IMPORTED_MODULE_5___default()();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    0: state,
    1: setstate
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const profile = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user.user);
  const auth = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.auth.accessToken);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_4__.getCart)());
    dispatch((0,_redux_user_slice__WEBPACK_IMPORTED_MODULE_7__.getProfile)());
  }, [state]);
  const cart = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.cart.cart);

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
  };

  const buyNow = () => {
    if (profile.address_1 === '' || profile.address_2 === '' || profile.city === '' || profile.state === '' || profile.pincode === '') {
      setstate(!state);
    } else {
      (0,_payment__WEBPACK_IMPORTED_MODULE_6__.makePayment)(getTotalPrice(), Razorpay, profile, auth, router);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: state ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutEdit__WEBPACK_IMPORTED_MODULE_10__.default, {
      func: () => {
        setstate(!state);
      },
      data: profile,
      isCheckOut: false
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 14
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
      children: cart.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: "Your Cart is Empty!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11___default().header),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Product"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Quantity"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Actions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: "Total Price"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined), cart.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11___default().body),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11___default().image),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
              src: item.image,
              height: "90",
              width: "65"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item.product
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u20B9 ", item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: item.quantity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_CartPage_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttons),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_4__.incrementQuantity)(item.id)),
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_4__.decrementQuantity)(item.id)),
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: () => dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_4__.removeFromCart)(item.id)),
              children: "x"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["\u20B9 ", item.quantity * item.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, undefined)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          children: ["Grand Total: \u20B9 ", getTotalPrice()]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: buyNow,
          children: "Check Out"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CartPage);

/***/ }),

/***/ "./payment/index.js":
/*!**************************!*\
  !*** ./payment/index.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makePayment": function() { return /* binding */ makePayment; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-razorpay */ "react-razorpay");
/* harmony import */ var react_razorpay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_razorpay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const makePayment = async (price = "1000", Razorpay, profile, auth, router) => {
  const options = {
    key: "rzp_test_DoFJd8wtSqz0tt",
    amount: (price * 100).toString(),
    currency: "INR",
    name: "Custom Tshirt",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    handler: async response => {
      if (response.razorpay_payment_id) {
        await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://nestjs-e-back.herokuapp.com/order", {
          payment_id: response.razorpay_payment_id
        }, {
          headers: {
            Authorization: `Bearer ${auth}`
          }
        });
      }

      alert("Payment Successful");
      router.push('/');
    },
    prefill: {
      name: profile.name,
      email: profile.email,
      contact: "+91" + profile.number
    },
    notes: {
      address: "Razorpay Corporate Office"
    },
    theme: {
      color: "#3399cc"
    }
  };
  const rzp1 = new Razorpay(options);
  rzp1.on("payment.failed", response => {
    alert("Payment Failed");
    console.log(response);
  });
  rzp1.open();
}; // const instance = new Razorpay({ key_id: 'rzp_test_dCc7zFPTy5AGCv', key_secret: 'yW0YMhG0nbcNJ3s4dba47FeQ' })
// await instance.orders.create({
//       name: "Manu Arora Pvt Ltd",
//       currency: "INR",
//       amount: price,
//       // order_id: ,
//       description: "Thankyou for your test donation",
//       handler:  (response) => {
//         console.log(response);
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Manu Arora",
//         email: "manuarorawork@gmail.com",
//         contact: "9999999999",
//       },
//     })
// }
// instance.orders.create({
//   amount: price,
//   currency: "INR",
//   receipt: "receipt#1",
//   notes: {
//     key1: "value3",
//     key2: "value2"
//   }
// })
// const makePayment = async () => {
//     const res = await initializeRazorpay();
//     if (!res) {
//       alert("Razorpay SDK Failed to load");
//       return;
//     }
//     // Make API call to the serverless API
//     const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
//       t.json()
//     );
//     console.log(data);
//     var options = {
//       key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
//       name: "Manu Arora Pvt Ltd",
//       currency: data.currency,
//       amount: data.amount,
//       order_id: data.id,
//       description: "Thankyou for your test donation",
//       handler: function (response) {
//         image: "https://manuarora.in/logo.png",
//         // Validate payment at server - using webhooks is a better idea.
//         alert(response.razorpay_payment_id);
//         alert(response.razorpay_order_id);
//         alert(response.razorpay_signature);
//       },
//       prefill: {
//         name: "Manu Arora",
//         email: "manuarorawork@gmail.com",
//         contact: "9999999999",
//       },
//     };
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

/***/ }),

/***/ "./redux/cart.slice.js":
/*!*****************************!*\
  !*** ./redux/cart.slice.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCart": function() { return /* binding */ getCart; },
/* harmony export */   "incrementQuantity": function() { return /* binding */ incrementQuantity; },
/* harmony export */   "decrementQuantity": function() { return /* binding */ decrementQuantity; },
/* harmony export */   "removeFromCart": function() { return /* binding */ removeFromCart; },
/* harmony export */   "addToCartCart": function() { return /* binding */ addToCartCart; },
/* harmony export */   "addToCart": function() { return /* binding */ addToCart; },
/* harmony export */   "addCustomProduct": function() { return /* binding */ addCustomProduct; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/getCart", async (arg, {
  getState
}) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const incrementQuantity = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/incrementQuantity", async (id, {
  getState
}) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default().patch("https://nestjs-e-back.herokuapp.com/cart/increment/" + id, {}, {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const decrementQuantity = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/decrementQuantity", async (id, {
  getState
}) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default().patch("https://nestjs-e-back.herokuapp.com/cart/decrement/" + id, {}, {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const removeFromCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/removeProduct", async (id, {
  getState
}) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default().delete("https://nestjs-e-back.herokuapp.com/cart/" + id, {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const addToCartCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/addToCart", async (product, {
  getState
}) => {
  // product map to formdata
  const formData = new FormData();

  for (let key in product) {
    formData.append(key, product[key]);
  }

  await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://nestjs-e-back.herokuapp.com/cart/add", formData, {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const addToCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/addProduct", async (product, {
  getState
}) => {
  await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://nestjs-e-back.herokuapp.com/cart/", _objectSpread(_objectSpread({}, product), {}, {
    quantity: 1
  }), {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const addCustomProduct = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("cart/addCustomProduct", async (product, {
  getState
}) => {
  // convert product to formdata
  const formData = new FormData();

  for (let key in product) {
    formData.append(key, product[key]);
  }

  await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://nestjs-e-back.herokuapp.com/cart/custom", formData, {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://nestjs-e-back.herokuapp.com/cart/user", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
  name: "cart",
  initialState: {
    cart: []
  },
  // reducers: {},
  extraReducers: builder => {
    builder.addCase(incrementQuantity.fulfilled, (state, action) => {
      console.log(action.payload);
      state.cart = action.payload;
    });
    builder.addCase(decrementQuantity.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const itemExists = state.cart.find(item => item.id === action.payload.id);

      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.cart = action.payload;
      }
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addCustomProduct.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (cartSlice.reducer);

/***/ }),

/***/ "./redux/user.slice.js":
/*!*****************************!*\
  !*** ./redux/user.slice.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProfile": function() { return /* binding */ getProfile; },
/* harmony export */   "updateProfile": function() { return /* binding */ updateProfile; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const getProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/getProfile", async (arg, {
  getState
}) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://nestjs-e-back.herokuapp.com/user/userId", {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const updateProfile = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("user/", async (arg, {
  getState
}) => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().patch("https://nestjs-e-back.herokuapp.com/user/", arg, {
    headers: {
      Authorization: `Bearer ${getState().auth.accessToken}`
    }
  });
  return res.data;
});
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "user",
  initialState: {
    user: {
      userId: "",
      name: "",
      email: "",
      address_1: "",
      address_2: "",
      pincode: "",
      city: "",
      state: ""
    }
  },
  extraReducers: builder => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = (userSlice.reducer);

/***/ }),

/***/ "./styles/CartPage.module.css":
/*!************************************!*\
  !*** ./styles/CartPage.module.css ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "CartPage_container__13dhG",
	"header": "CartPage_header__nGAuq",
	"body": "CartPage_body__2kF27",
	"image": "CartPage_image__1VZY8",
	"buttons": "CartPage_buttons__3qoAF"
};


/***/ }),

/***/ "./styles/youraccount.module.css":
/*!***************************************!*\
  !*** ./styles/youraccount.module.css ***!
  \***************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"title": "youraccount_title__3_Eox",
	"outter": "youraccount_outter__wiVsm",
	"inner": "youraccount_inner__2_fFv",
	"spc": "youraccount_spc__22cxr",
	"edit": "youraccount_edit__2ENY-"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-razorpay":
/*!*********************************!*\
  !*** external "react-razorpay" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-razorpay");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/cart.jsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9jb21wb25lbnRzL0NoZWNrb3V0RWRpdC5qc3giLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC8uL2NvbXBvbmVudHMvUHJvZmlsZUVkaXQuanN4Iiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9wYWdlcy9jYXJ0LmpzeCIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcGF5bWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcmVkdXgvY2FydC5zbGljZS5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcmVkdXgvdXNlci5zbGljZS5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vc3R5bGVzL0NhcnRQYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC8uL3N0eWxlcy95b3VyYWNjb3VudC5tb2R1bGUuY3NzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcInJlYWN0LXJhem9ycGF5XCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNoZWNrb3V0RWRpdCIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInN0YXRlIiwic2V0c3RhdGUiLCJ1c2VTdGF0ZSIsImFkZHJlc3NfMSIsImRhdGEiLCJhZGRyZXNzXzIiLCJwaW5jb2RlIiwiY2l0eSIsIm51bWJlciIsIm5hbWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uc3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVQcm9maWxlIiwiaXNDaGVja091dCIsImZ1bmMyIiwiZnVuYyIsImFsZXJ0Iiwic3R5bGVzIiwiZWRpdCIsIlByb2ZpbGVFZGl0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJleHBvcnRzIiwiSW1hZ2UiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIiLCJfZXh0ZW5kczIiLCJfcmVhY3QiLCJfaGVhZCIsIl90b0Jhc2UiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiZGVmYXVsdExvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJkZWZhdWx0IiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJ3aWR0aCIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicHVzaCIsInBhcnNlSW50IiwibGVuZ3RoIiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJtaW4iLCJ3aWR0aHMiLCJmaWx0ZXIiLCJzIiwia2luZCIsIlNldCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwic3R5bGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImNvbXBsZXRlIiwib25sb2FkIiwiX3JlZiIsInByaW9yaXR5IiwibG9hZGluZyIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJvdmVyZmxvdyIsImltZ0F0dHJpYnV0ZXMiLCJjcmVhdGVFbGVtZW50IiwiYWx0Iiwicm9sZSIsInRvQmFzZTY0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWYiLCJlbGVtZW50Iiwia2V5IiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiVVJMIiwiZXJyIiwiZXJyb3IiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJDYXJ0UGFnZSIsInJvdXRlciIsInVzZVJvdXRlciIsIlJhem9ycGF5IiwidXNlUmF6b3JwYXkiLCJwcm9maWxlIiwidXNlU2VsZWN0b3IiLCJ1c2VyIiwiYXV0aCIsImFjY2Vzc1Rva2VuIiwiZ2V0Q2FydCIsImdldFByb2ZpbGUiLCJjYXJ0IiwiZ2V0VG90YWxQcmljZSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsInF1YW50aXR5IiwicHJpY2UiLCJidXlOb3ciLCJtYWtlUGF5bWVudCIsImltYWdlIiwicHJvZHVjdCIsImluY3JlbWVudFF1YW50aXR5IiwiZGVjcmVtZW50UXVhbnRpdHkiLCJyZW1vdmVGcm9tQ2FydCIsImFtb3VudCIsInRvU3RyaW5nIiwiY3VycmVuY3kiLCJkZXNjcmlwdGlvbiIsImhhbmRsZXIiLCJyZXNwb25zZSIsInJhem9ycGF5X3BheW1lbnRfaWQiLCJheGlvcyIsInBheW1lbnRfaWQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByZWZpbGwiLCJlbWFpbCIsImNvbnRhY3QiLCJub3RlcyIsImFkZHJlc3MiLCJ0aGVtZSIsImNvbG9yIiwicnpwMSIsIm9uIiwibG9nIiwib3BlbiIsImNyZWF0ZUFzeW5jVGh1bmsiLCJhcmciLCJnZXRTdGF0ZSIsInJlcyIsImFkZFRvQ2FydENhcnQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiYWRkVG9DYXJ0IiwiYWRkQ3VzdG9tUHJvZHVjdCIsImNhcnRTbGljZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwiYWN0aW9uIiwicGF5bG9hZCIsIml0ZW1FeGlzdHMiLCJyZWR1Y2VyIiwidXNlclNsaWNlIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNB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QUNELEtBRkQ7QUFHRDtBQXRCMkIsQ0FBRCxDQUE3QjtBQXdCQSwrREFBZUcsU0FBUyxDQUFDRCxPQUF6QixFOzs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQyw4Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB1cGRhdGVQcm9maWxlIH0gZnJvbSAnLi4vcmVkdXgvdXNlci5zbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy95b3VyYWNjb3VudC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBDaGVja291dEVkaXQgPSAocHJvcHMpID0+IHtcclxuICBcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBhZGRyZXNzXzE6IHByb3BzLmRhdGEuYWRkcmVzc18xID8/IFwiXCIsXHJcbiAgICBhZGRyZXNzXzI6IHByb3BzLmRhdGEuYWRkcmVzc18yID8/IFwiXCIsXHJcbiAgICBwaW5jb2RlOiBwcm9wcy5kYXRhLnBpbmNvZGUgPz8gXCJcIixcclxuICAgIGNpdHk6IHByb3BzLmRhdGEuY2l0eSA/PyBcIlwiLFxyXG4gICAgc3RhdGU6IHByb3BzLmRhdGEuc3RhdGUgPz8gXCJcIixcclxuICAgIG51bWJlcjogcHJvcHMuZGF0YS5udW1iZXIgPz8gXCJcIixcclxuICAgIG5hbWU6IHByb3BzLmRhdGEubmFtZSA/PyBcIlwiLFxyXG4gICB9KTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRzdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuICBjb25zdCBvbnN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVQcm9maWxlKHtcclxuICAgICAgLi4uc3RhdGVcclxuICAgIH0pKVxyXG4gICAgcHJvcHMuaXNDaGVja091dCA/ICAgcHJvcHMuZnVuYzIoKSA6IHByb3BzLmZ1bmMoKVxyXG4gICAgYWxlcnQoXCJQcm9maWxlIFVwZGF0ZWQgU3VjY2Vzc2Z1bGx5XCIpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGltZyBvbkNsaWNrPXtwcm9wcy5mdW5jfSBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2V4dGVybmFsLXRhbmFoLWJhc2FoLWdseXBoLXRhbmFoLWJhc2FoLzQ4LzAwMDAwMC9leHRlcm5hbC1wbHVzLWVzc2VudGlhbHMtdGFuYWgtYmFzYWgtZ2x5cGgtdGFuYWgtYmFzYWgucG5nXCJcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZWRpdH1cclxuICAgICAgLz5cclxuXHJcbiAgICA8YnIgLz5cclxuICAgIDxwPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHU+IFlvdXIgQWRkcmVzc2VzPC91PlxyXG4gICAgPC9wPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8aDU+PC9oNT5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtvbnN1Ym1pdH0+XHJcbiAgICA8aDU+TmFtZTwvaDU+XHJcbiAgICA8aW5wdXQgbmFtZT0nbmFtZScgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgdmFsdWU9e3N0YXRlLm5hbWV9XHJcbiAgICAvPlxyXG4gICAgPGg1Pk51bWJlcjwvaDU+XHJcbiAgICA8aW5wdXQgbmFtZT0nbnVtYmVyJyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICB2YWx1ZT17c3RhdGUubnVtYmVyfVxyXG4gICAgLz5cclxuICAgIDxoNT5Ib3VzZTwvaDU+XHJcbiAgICA8aW5wdXQgbmFtZT0nYWRkcmVzc18xJyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICB2YWx1ZT17c3RhdGUuYWRkcmVzc18xfVxyXG4gICAgLz5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGg1PlN0cmVldDwvaDU+PGlucHV0IFxyXG4gICAgbmFtZSA9ICdhZGRyZXNzXzInIG9uQ2hhbmdlPXtvbkNoYW5nZX0gXHJcbiAgICB2YWx1ZT17c3RhdGUuYWRkcmVzc18yfVxyXG4gICAgLz5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGg1PkNpdHk8L2g1PjxpbnB1dCBcclxuICAgICAgdmFsdWU9e3N0YXRlLmNpdHl9XHJcbiAgICBuYW1lID0gJ2NpdHknIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgIC8+IDxicj48L2JyPlxyXG4gICAgPGg1PlN0YXRlPC9oNT48aW5wdXRcclxuICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlfVxyXG4gICAgICBuYW1lID0gJ3N0YXRlJyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAvPiA8YnI+PC9icj5cclxuICAgIDxoNT5aaXAgY29kZTwvaDU+PGlucHV0XHJcbiAgICAgIHZhbHVlPXtzdGF0ZS5waW5jb2RlfSBcclxuICAgIG5hbWUgPSAncGluY29kZScgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgLz4gPGJyPjwvYnI+IDxicj48L2JyPlxyXG4gICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0RWRpdCIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXBkYXRlUHJvZmlsZSB9IGZyb20gJy4uL3JlZHV4L3VzZXIuc2xpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMveW91cmFjY291bnQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUHJvZmlsZUVkaXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGFkZHJlc3NfMTogcHJvcHMuZGF0YS5hZGRyZXNzXzEgPz8gXCJcIixcclxuICAgIGFkZHJlc3NfMjogcHJvcHMuZGF0YS5hZGRyZXNzXzIgPz8gXCJcIixcclxuICAgIHBpbmNvZGU6IHByb3BzLmRhdGEucGluY29kZSA/PyBcIlwiLFxyXG4gICAgY2l0eTogcHJvcHMuZGF0YS5jaXR5ID8/IFwiXCIsXHJcbiAgICBzdGF0ZTogcHJvcHMuZGF0YS5zdGF0ZSA/PyBcIlwiLFxyXG4gICAgbnVtYmVyOiBwcm9wcy5kYXRhLm51bWJlciA/PyBcIlwiLFxyXG4gICAgbmFtZTogcHJvcHMuZGF0YS5uYW1lID8/IFwiXCIsXHJcbiAgIH0pO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldHN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uc3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZVByb2ZpbGUoe1xyXG4gICAgICAuLi5zdGF0ZVxyXG4gICAgfSkpXHJcbiAgICBwcm9wcy5pc0NoZWNrT3V0ID8gICBwcm9wcy5mdW5jMigpIDogcHJvcHMuZnVuYygpXHJcbiAgICBhbGVydChcIlByb2ZpbGUgVXBkYXRlZCBTdWNjZXNzZnVsbHlcIilcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8aW1nIG9uQ2xpY2s9e3Byb3BzLmZ1bmN9IHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZXh0ZXJuYWwtdGFuYWgtYmFzYWgtZ2x5cGgtdGFuYWgtYmFzYWgvNDgvMDAwMDAwL2V4dGVybmFsLXBsdXMtZXNzZW50aWFscy10YW5haC1iYXNhaC1nbHlwaC10YW5haC1iYXNhaC5wbmdcIlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0fVxyXG4gICAgLz5cclxuXHJcbiAgICA8YnIgLz5cclxuICAgIDxwPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHU+IFlvdXIgQWRkcmVzc2VzPC91PlxyXG4gICAgPC9wPlxyXG4gICAgPGJyPjwvYnI+XHJcbiAgICA8aDU+PC9oNT5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtvbnN1Ym1pdH0+XHJcbiAgICA8aDU+TmFtZTwvaDU+XHJcbiAgICA8aW5wdXQgbmFtZT0nbmFtZScgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgdmFsdWU9e3N0YXRlLm5hbWV9XHJcbiAgICAvPlxyXG4gICAgPGg1Pk51bWJlcjwvaDU+XHJcbiAgICA8aW5wdXQgbmFtZT0nbnVtYmVyJyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICB2YWx1ZT17c3RhdGUubnVtYmVyfVxyXG4gICAgLz5cclxuICAgIDxoNT5Ib3VzZTwvaDU+XHJcbiAgICA8aW5wdXQgbmFtZT0nYWRkcmVzc18xJyBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICB2YWx1ZT17c3RhdGUuYWRkcmVzc18xfVxyXG4gICAgLz5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGg1PlN0cmVldDwvaDU+PGlucHV0IFxyXG4gICAgbmFtZSA9ICdhZGRyZXNzXzInIG9uQ2hhbmdlPXtvbkNoYW5nZX0gXHJcbiAgICB2YWx1ZT17c3RhdGUuYWRkcmVzc18yfVxyXG4gICAgLz5cclxuICAgIDxicj48L2JyPlxyXG4gICAgPGg1PkNpdHk8L2g1PjxpbnB1dCBcclxuICAgICAgdmFsdWU9e3N0YXRlLmNpdHl9XHJcbiAgICBuYW1lID0gJ2NpdHknIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgIC8+IDxicj48L2JyPlxyXG4gICAgPGg1PlN0YXRlPC9oNT48aW5wdXRcclxuICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlfVxyXG4gICAgbmFtZSA9ICdzdGF0ZScgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgLz4gPGJyPjwvYnI+XHJcbiAgICA8aDU+WmlwIGNvZGU8L2g1PjxpbnB1dFxyXG4gICAgICB2YWx1ZT17c3RhdGUucGluY29kZX0gXHJcbiAgICBuYW1lID0gJ3BpbmNvZGUnIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgIC8+IDxicj48L2JyPiA8YnI+PC9icj5cclxuICAgIDxidXR0b24+QWRkPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlRWRpdCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYoKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7c3JjOnNyYyxkZWNvZGluZzpcImFzeW5jXCIsc2l6ZXM6c2l6ZXMsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBpbmNyZW1lbnRRdWFudGl0eSxcclxuICBkZWNyZW1lbnRRdWFudGl0eSxcclxuICByZW1vdmVGcm9tQ2FydCxcclxuICBnZXRDYXJ0LFxyXG59IGZyb20gJy4uL3JlZHV4L2NhcnQuc2xpY2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DYXJ0UGFnZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHVzZVJhem9ycGF5IGZyb20gXCJyZWFjdC1yYXpvcnBheVwiO1xyXG5pbXBvcnQgeyBtYWtlUGF5bWVudCB9IGZyb20gJy4uL3BheW1lbnQnO1xyXG5pbXBvcnQgeyBnZXRQcm9maWxlIH0gZnJvbSAnLi4vcmVkdXgvdXNlci5zbGljZSc7XHJcbmltcG9ydCBQcm9maWxlRWRpdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2ZpbGVFZGl0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ2hlY2tvdXRFZGl0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2hlY2tvdXRFZGl0JztcclxuXHJcbmNvbnN0IENhcnRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgUmF6b3JwYXkgPSB1c2VSYXpvcnBheSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwcm9maWxlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLnVzZXIpO1xyXG4gIGNvbnN0IGF1dGggPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguYWNjZXNzVG9rZW4pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChnZXRDYXJ0KCkpXHJcbiAgICBkaXNwYXRjaChnZXRQcm9maWxlKCkpXHJcbiAgfSwgW3N0YXRlXSk7XHJcbiAgY29uc3QgY2FydCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY2FydC5jYXJ0KTtcclxuXHJcbiAgY29uc3QgZ2V0VG90YWxQcmljZSA9ICgpID0+IHtcclxuICAgIHJldHVybiBjYXJ0LnJlZHVjZShcclxuICAgICAgKGFjY3VtdWxhdG9yLCBpdGVtKSA9PiBhY2N1bXVsYXRvciArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnByaWNlLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG4gIH07XHJcbiAgY29uc3QgYnV5Tm93ID0gKCkgPT4ge1xyXG4gICAgaWYocHJvZmlsZS5hZGRyZXNzXzEgPT09ICcnIHx8IHByb2ZpbGUuYWRkcmVzc18yID09PSAnJyB8fCBwcm9maWxlLmNpdHkgPT09ICcnIHx8IHByb2ZpbGUuc3RhdGUgPT09ICcnIHx8IHByb2ZpbGUucGluY29kZSA9PT0gJycpe1xyXG4gICAgICBzZXRzdGF0ZSghc3RhdGUpXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBtYWtlUGF5bWVudChnZXRUb3RhbFByaWNlKCksIFJhem9ycGF5LHByb2ZpbGUsYXV0aCwgcm91dGVyKTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiB7XHJcbiAgIHN0YXRlID8gICA8Q2hlY2tvdXRFZGl0ICBmdW5jID0geygpID0+e1xyXG4gICAgc2V0c3RhdGUoIXN0YXRlKVxyXG5cclxuICAgfX0gZGF0YT17cHJvZmlsZX0gaXNDaGVja091dD17ZmFsc2V9Lz4gOiBcclxuIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICB7Y2FydC5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPGgxPllvdXIgQ2FydCBpcyBFbXB0eSE8L2gxPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXY+SW1hZ2U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5Qcm9kdWN0PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+UHJpY2U8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5RdWFudGl0eTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PkFjdGlvbnM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5Ub3RhbCBQcmljZTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Y2FydC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1hZ2V9IGhlaWdodD1cIjkwXCIgd2lkdGg9XCI2NVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucHJvZHVjdH08L3A+XHJcbiAgICAgICAgICAgICAgPHA+4oK5IHtpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICA8cD57aXRlbS5xdWFudGl0eX08L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50UXVhbnRpdHkoaXRlbS5pZCkpfT5cclxuICAgICAgICAgICAgICAgICAgK1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGRlY3JlbWVudFF1YW50aXR5KGl0ZW0uaWQpKX0+XHJcbiAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KGl0ZW0uaWQpKX0+XHJcbiAgICAgICAgICAgICAgICAgIHhcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwPuKCuSB7aXRlbS5xdWFudGl0eSAqIGl0ZW0ucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGgyPkdyYW5kIFRvdGFsOiDigrkge2dldFRvdGFsUHJpY2UoKX08L2gyPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtidXlOb3d9PkNoZWNrIE91dDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+IFxyXG4gICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFBhZ2U7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZVJhem9ycGF5IGZyb20gXCJyZWFjdC1yYXpvcnBheVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlUGF5bWVudCAgPSBhc3luYyAoIHByaWNlID0gXCIxMDAwXCIsIFJhem9ycGF5LCBwcm9maWxlLFxyXG5hdXRoLCByb3V0ZXIgICkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIGtleTogXCJyenBfdGVzdF9Eb0ZKZDh3dFNxejB0dFwiLCBcclxuICAgIGFtb3VudDogKHByaWNlICogMTAwKS50b1N0cmluZygpLCBcclxuICAgIGN1cnJlbmN5OiBcIklOUlwiLFxyXG4gICAgbmFtZTogXCJDdXN0b20gVHNoaXJ0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUZXN0IFRyYW5zYWN0aW9uXCIsXHJcbiAgICBpbWFnZTogXCJodHRwczovL2V4YW1wbGUuY29tL3lvdXJfbG9nb1wiLFxyXG4gICAgaGFuZGxlcjogYXN5bmMgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmKHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQpe1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9vcmRlclwiLHtwYXltZW50X2lkOnJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWR9LHtcclxuICAgICAgICAgIGhlYWRlcnMgOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb24gOiBgQmVhcmVyICR7YXV0aH1gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICBhbGVydChcIlBheW1lbnQgU3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH0sXHJcbiAgICBwcmVmaWxsOiB7XHJcbiAgICAgIG5hbWU6IHByb2ZpbGUubmFtZSxcclxuICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXHJcbiAgICAgIGNvbnRhY3Q6IFwiKzkxXCIgKyBwcm9maWxlLm51bWJlcixcclxuICAgIH0sXHJcbiAgICBub3Rlczoge1xyXG4gICAgICBhZGRyZXNzOiBcIlJhem9ycGF5IENvcnBvcmF0ZSBPZmZpY2VcIixcclxuICAgIH0sXHJcbiAgICB0aGVtZToge1xyXG4gICAgICBjb2xvcjogXCIjMzM5OWNjXCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJ6cDEgPSBuZXcgUmF6b3JwYXkob3B0aW9ucyk7XHJcblxyXG4gIHJ6cDEub24oXCJwYXltZW50LmZhaWxlZFwiLCAgKHJlc3BvbnNlKSA9PiB7XHJcbiAgIGFsZXJ0KFwiUGF5bWVudCBGYWlsZWRcIik7XHJcbiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9KTtcclxuXHJcbiAgcnpwMS5vcGVuKCk7XHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBpbnN0YW5jZSA9IG5ldyBSYXpvcnBheSh7IGtleV9pZDogJ3J6cF90ZXN0X2RDYzd6RlBUeTVBR0N2Jywga2V5X3NlY3JldDogJ3lXMFlNaEcwbmJjTkozczRkYmE0N0ZlUScgfSlcclxuXHJcbi8vIGF3YWl0IGluc3RhbmNlLm9yZGVycy5jcmVhdGUoe1xyXG4vLyAgICAgICBuYW1lOiBcIk1hbnUgQXJvcmEgUHZ0IEx0ZFwiLFxyXG4vLyAgICAgICBjdXJyZW5jeTogXCJJTlJcIixcclxuLy8gICAgICAgYW1vdW50OiBwcmljZSxcclxuLy8gICAgICAgLy8gb3JkZXJfaWQ6ICxcclxuLy8gICAgICAgZGVzY3JpcHRpb246IFwiVGhhbmt5b3UgZm9yIHlvdXIgdGVzdCBkb25hdGlvblwiLFxyXG4vLyAgICAgICBoYW5kbGVyOiAgKHJlc3BvbnNlKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4vLyAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQpO1xyXG4vLyAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnJhem9ycGF5X29yZGVyX2lkKTtcclxuLy8gICAgICAgICBhbGVydChyZXNwb25zZS5yYXpvcnBheV9zaWduYXR1cmUpO1xyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgICBwcmVmaWxsOiB7XHJcbi8vICAgICAgICAgbmFtZTogXCJNYW51IEFyb3JhXCIsXHJcbi8vICAgICAgICAgZW1haWw6IFwibWFudWFyb3Jhd29ya0BnbWFpbC5jb21cIixcclxuLy8gICAgICAgICBjb250YWN0OiBcIjk5OTk5OTk5OTlcIixcclxuLy8gICAgICAgfSxcclxuLy8gICAgIH0pXHJcblxyXG4vLyB9XHJcblxyXG4vLyBpbnN0YW5jZS5vcmRlcnMuY3JlYXRlKHtcclxuLy8gICBhbW91bnQ6IHByaWNlLFxyXG4vLyAgIGN1cnJlbmN5OiBcIklOUlwiLFxyXG4vLyAgIHJlY2VpcHQ6IFwicmVjZWlwdCMxXCIsXHJcbi8vICAgbm90ZXM6IHtcclxuLy8gICAgIGtleTE6IFwidmFsdWUzXCIsXHJcbi8vICAgICBrZXkyOiBcInZhbHVlMlwiXHJcbi8vICAgfVxyXG4vLyB9KVxyXG4vLyBjb25zdCBtYWtlUGF5bWVudCA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGluaXRpYWxpemVSYXpvcnBheSgpO1xyXG5cclxuLy8gICAgIGlmICghcmVzKSB7XHJcbi8vICAgICAgIGFsZXJ0KFwiUmF6b3JwYXkgU0RLIEZhaWxlZCB0byBsb2FkXCIpO1xyXG4vLyAgICAgICByZXR1cm47XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgLy8gTWFrZSBBUEkgY2FsbCB0byB0aGUgc2VydmVybGVzcyBBUElcclxuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcIi9hcGkvcmF6b3JwYXlcIiwgeyBtZXRob2Q6IFwiUE9TVFwiIH0pLnRoZW4oKHQpID0+XHJcbi8vICAgICAgIHQuanNvbigpXHJcbi8vICAgICApO1xyXG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgICB2YXIgb3B0aW9ucyA9IHtcclxuLy8gICAgICAga2V5OiBwcm9jZXNzLmVudi5SQVpPUlBBWV9LRVksIC8vIEVudGVyIHRoZSBLZXkgSUQgZ2VuZXJhdGVkIGZyb20gdGhlIERhc2hib2FyZFxyXG4vLyAgICAgICBuYW1lOiBcIk1hbnUgQXJvcmEgUHZ0IEx0ZFwiLFxyXG4vLyAgICAgICBjdXJyZW5jeTogZGF0YS5jdXJyZW5jeSxcclxuLy8gICAgICAgYW1vdW50OiBkYXRhLmFtb3VudCxcclxuLy8gICAgICAgb3JkZXJfaWQ6IGRhdGEuaWQsXHJcbi8vICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoYW5reW91IGZvciB5b3VyIHRlc3QgZG9uYXRpb25cIixcclxuLy8gICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbi8vICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9tYW51YXJvcmEuaW4vbG9nby5wbmdcIixcclxuLy8gICAgICAgICAvLyBWYWxpZGF0ZSBwYXltZW50IGF0IHNlcnZlciAtIHVzaW5nIHdlYmhvb2tzIGlzIGEgYmV0dGVyIGlkZWEuXHJcbi8vICAgICAgICAgYWxlcnQocmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZCk7XHJcbi8vICAgICAgICAgYWxlcnQocmVzcG9uc2UucmF6b3JwYXlfb3JkZXJfaWQpO1xyXG4vLyAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnJhem9ycGF5X3NpZ25hdHVyZSk7XHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIHByZWZpbGw6IHtcclxuLy8gICAgICAgICBuYW1lOiBcIk1hbnUgQXJvcmFcIixcclxuLy8gICAgICAgICBlbWFpbDogXCJtYW51YXJvcmF3b3JrQGdtYWlsLmNvbVwiLFxyXG4vLyAgICAgICAgIGNvbnRhY3Q6IFwiOTk5OTk5OTk5OVwiLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICBjb25zdCBwYXltZW50T2JqZWN0ID0gbmV3IHdpbmRvdy5SYXpvcnBheShvcHRpb25zKTtcclxuLy8gICAgIHBheW1lbnRPYmplY3Qub3BlbigpO1xyXG4vLyAgIH07IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5leHBvcnQgY29uc3QgZ2V0Q2FydCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJjYXJ0L2dldENhcnRcIixcclxuICBhc3luYyAoYXJnLCB7IGdldFN0YXRlIH0pID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvdXNlclwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVtZW50UXVhbnRpdHkgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiY2FydC9pbmNyZW1lbnRRdWFudGl0eVwiLFxyXG4gIGFzeW5jIChpZCwgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L2luY3JlbWVudC9cIiArIGlkLFxyXG4gICAgICB7fSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC91c2VyXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImNhcnQvZGVjcmVtZW50UXVhbnRpdHlcIixcclxuICBhc3luYyAoaWQsIHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC9kZWNyZW1lbnQvXCIgKyBpZCxcclxuICAgICAge30sXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L3VzZXJcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiY2FydC9yZW1vdmVQcm9kdWN0XCIsXHJcbiAgYXN5bmMgKGlkLCB7IGdldFN0YXRlIH0pID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvXCIgKyBpZCwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L3VzZXJcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0Q2FydCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJjYXJ0L2FkZFRvQ2FydFwiLFxyXG4gIGFzeW5jIChwcm9kdWN0LCB7IGdldFN0YXRlIH0pID0+IHtcclxuICAgIC8vIHByb2R1Y3QgbWFwIHRvIGZvcm1kYXRhXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3QpIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgcHJvZHVjdFtrZXldKTtcclxuICAgIH1cclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC9hZGRcIixcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvdXNlclwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJjYXJ0L2FkZFByb2R1Y3RcIixcclxuICBhc3luYyAocHJvZHVjdCwgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICBcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvXCIsXHJcbiAgICAgIHsgLi4ucHJvZHVjdCwgcXVhbnRpdHk6IDEgfSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC91c2VyXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH1cclxuKTtcclxuZXhwb3J0IGNvbnN0IGFkZEN1c3RvbVByb2R1Y3QgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiY2FydC9hZGRDdXN0b21Qcm9kdWN0XCIsXHJcbiAgYXN5bmMgKHByb2R1Y3QsIHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgLy8gY29udmVydCBwcm9kdWN0IHRvIGZvcm1kYXRhXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9yIChsZXQga2V5IGluIHByb2R1Y3QpIHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgcHJvZHVjdFtrZXldKTtcclxuICAgIH1cclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC9jdXN0b21cIixcclxuICAgICAgZm9ybURhdGEsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvdXNlclwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcblxyXG5cclxuY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiY2FydFwiLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgY2FydDogW10sXHJcbiAgfSxcclxuICAvLyByZWR1Y2Vyczoge30sXHJcbiAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShpbmNyZW1lbnRRdWFudGl0eS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZGVjcmVtZW50UXVhbnRpdHkuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShyZW1vdmVGcm9tQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZFRvQ2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGl0ZW1FeGlzdHMgPSBzdGF0ZS5jYXJ0LmZpbmQoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChpdGVtRXhpc3RzKSB7XHJcbiAgICAgICAgaXRlbUV4aXN0cy5xdWFudGl0eSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0Q2FydC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGFkZEN1c3RvbVByb2R1Y3QuZnVsZmlsbGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhcnRTbGljZS5yZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwidXNlci9nZXRQcm9maWxlXCIsXHJcbiAgYXN5bmMgKGFyZywgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS91c2VyL3VzZXJJZFwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9maWxlID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcInVzZXIvXCIsXHJcbiAgYXN5bmMgKGFyZywgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS91c2VyL1wiLFxyXG4gICAgICBhcmcsXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcbmNvbnN0IHVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcInVzZXJcIixcclxuICBpbml0aWFsU3RhdGU6IHtcclxuICAgIHVzZXI6IHtcclxuICAgICAgdXNlcklkOiBcIlwiLFxyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgYWRkcmVzc18xOiBcIlwiLFxyXG4gICAgICBhZGRyZXNzXzI6IFwiXCIsXHJcbiAgICAgIHBpbmNvZGU6IFwiXCIsXHJcbiAgICAgIGNpdHk6IFwiXCIsXHJcbiAgICAgIHN0YXRlOiBcIlwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoZ2V0UHJvZmlsZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UodXBkYXRlUHJvZmlsZS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGRlZmF1bHQgdXNlclNsaWNlLnJlZHVjZXI7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNhcnRQYWdlX2NvbnRhaW5lcl9fMTNkaEdcIixcblx0XCJoZWFkZXJcIjogXCJDYXJ0UGFnZV9oZWFkZXJfX25HQXVxXCIsXG5cdFwiYm9keVwiOiBcIkNhcnRQYWdlX2JvZHlfXzJrRjI3XCIsXG5cdFwiaW1hZ2VcIjogXCJDYXJ0UGFnZV9pbWFnZV9fMVZaWThcIixcblx0XCJidXR0b25zXCI6IFwiQ2FydFBhZ2VfYnV0dG9uc19fM3FvQUZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRpdGxlXCI6IFwieW91cmFjY291bnRfdGl0bGVfXzNfRW94XCIsXG5cdFwib3V0dGVyXCI6IFwieW91cmFjY291bnRfb3V0dGVyX193aVZzbVwiLFxuXHRcImlubmVyXCI6IFwieW91cmFjY291bnRfaW5uZXJfXzJfZkZ2XCIsXG5cdFwic3BjXCI6IFwieW91cmFjY291bnRfc3BjX18yMmN4clwiLFxuXHRcImVkaXRcIjogXCJ5b3VyYWNjb3VudF9lZGl0X18yRU5ZLVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmF6b3JwYXlcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=