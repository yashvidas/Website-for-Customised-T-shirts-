(function() {
var exports = {};
exports.id = "pages/custom";
exports.ids = ["pages/custom"];
exports.modules = {

/***/ "./pages/custom.js":
/*!*************************!*\
  !*** ./pages/custom.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\yashv\\OneDrive\\Desktop\\priyanka\\myminielvess\\pages\\custom.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Dashboard from '../cuscomponents/dashboard/Dashboard'
// import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';


 // import Display from '../cuscomponents/design/Display'

const Display = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "cuscomponents_design_Display_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../cuscomponents/design/Display */ "./cuscomponents/design/Display.jsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../cuscomponents/design/Display */ "./cuscomponents/design/Display.jsx")],
    modules: ["custom.js -> " + '../cuscomponents/design/Display']
  }
});
const Setting = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/*! import() */ "cuscomponents_design_Setting_jsx").then(__webpack_require__.bind(__webpack_require__, /*! ../cuscomponents/design/Setting */ "./cuscomponents/design/Setting.jsx")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../cuscomponents/design/Setting */ "./cuscomponents/design/Setting.jsx")],
    modules: ["custom.js -> " + '../cuscomponents/design/Setting']
  }
});

class Dashboard extends (react__WEBPACK_IMPORTED_MODULE_3___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      tshirtImage: 'https://res.cloudinary.com/dieyzzi8d/image/upload/v1590212189/mintbluetfront_ld4aqi.jpg',
      upperText: "This is upper text",
      lowerText: 'This is lower text',
      uploadImage: "http://via.placeholder.com/100x100",
      textSize: '30',
      textColor: "black",
      price: 750
    });

    _defineProperty(this, "handleTshirtColor", e => {
      this.setState({
        tshirtImage: e.target.src
      });
    });

    _defineProperty(this, "handleUpperText", e => {
      this.setState({
        upperText: e.target.value
      });
    });

    _defineProperty(this, "handleLowerText", e => {
      this.setState({
        lowerText: e.target.value
      });
    });

    _defineProperty(this, "handleTextColor", e => {
      this.setState({
        textColor: e.target.value
      });
    });

    _defineProperty(this, "handleTextSize", e => {
      this.setState({
        textSize: e.target.value
      });
    });

    _defineProperty(this, "handleUploadImage", async e => {
      e.preventDefault();

      if (e.target.files[0]) {
        const image = e.target.files[0]; // form data

        const formData = new FormData();
        formData.append('image', image);
        const resp = await axios__WEBPACK_IMPORTED_MODULE_2___default().post('https://nestjs-e-back.herokuapp.com/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.setState({
          uploadImage: resp.data
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container py-5",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex",
          paddingLeft: '10%'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Display, {
            display: this.state
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            width: '50%',
            paddingLeft: '10%'
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Setting, {
            upperText: this.handleUpperText,
            lowerText: this.handleLowerText,
            textColor: this.handleTextColor,
            textSize: this.handleTextSize,
            uploadImage: this.handleUploadImage
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

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

/***/ "html2canvas":
/*!******************************!*\
  !*** external "html2canvas" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("html2canvas");;

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

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

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

/***/ "react-component-export-image":
/*!***********************************************!*\
  !*** external "react-component-export-image" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-component-export-image");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/custom.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcGFnZXMvY3VzdG9tLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcImh0bWwyY2FudmFzXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0L2V4dGVybmFsIFwibmV4dC9keW5hbWljXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC9leHRlcm5hbCBcInJlYWN0LWNvbXBvbmVudC1leHBvcnQtaW1hZ2VcIiIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRGlzcGxheSIsImR5bmFtaWMiLCJzc3IiLCJTZXR0aW5nIiwiRGFzaGJvYXJkIiwiUmVhY3QiLCJ0c2hpcnRJbWFnZSIsInVwcGVyVGV4dCIsImxvd2VyVGV4dCIsInVwbG9hZEltYWdlIiwidGV4dFNpemUiLCJ0ZXh0Q29sb3IiLCJwcmljZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInNyYyIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJmaWxlcyIsImltYWdlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3AiLCJheGlvcyIsImhlYWRlcnMiLCJkYXRhIiwicmVuZGVyIiwiZGlzcGxheSIsInBhZGRpbmdMZWZ0Iiwic3RhdGUiLCJ3aWR0aCIsImhhbmRsZVVwcGVyVGV4dCIsImhhbmRsZUxvd2VyVGV4dCIsImhhbmRsZVRleHRDb2xvciIsImhhbmRsZVRleHRTaXplIiwiaGFuZGxlVXBsb2FkSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHQyxtREFBTyxDQUFDLE1BQU0sME1BQVAsRUFDdkI7QUFDSUMsS0FBRyxFQUFFLEtBRFQ7QUFBQTtBQUFBLHdDQURxQywyRUFDckM7QUFBQSxnQ0FEcUMsaUNBQ3JDO0FBQUE7QUFBQSxDQUR1QixDQUF2QjtBQUlBLE1BQU1DLE9BQU8sR0FBR0YsbURBQU8sQ0FBQyxNQUFNLDBNQUFQLEVBQW1EO0FBQ3RFQyxLQUFHLEVBQUUsS0FEaUU7QUFBQTtBQUFBLHdDQUFwQywyRUFBb0M7QUFBQSxnQ0FBcEMsaUNBQW9DO0FBQUE7QUFBQSxDQUFuRCxDQUF2Qjs7QUFLQyxNQUFNRSxTQUFOLFNBQXdCQyx3REFBeEIsQ0FBd0M7QUFBQTtBQUFBOztBQUFBLG1DQUU3QjtBQUNKQyxpQkFBVyxFQUFHLHlGQURWO0FBRUpDLGVBQVMsRUFBRyxvQkFGUjtBQUdKQyxlQUFTLEVBQUcsb0JBSFI7QUFJSkMsaUJBQVcsRUFBRyxvQ0FKVjtBQUtKQyxjQUFRLEVBQUcsSUFMUDtBQU1KQyxlQUFTLEVBQUcsT0FOUjtBQU9KQyxXQUFLLEVBQUU7QUFQSCxLQUY2Qjs7QUFBQSwrQ0FXaEJDLENBQUQsSUFBSztBQUNyQixXQUFL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Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2N1c3RvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY3VzY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaGJvYXJkJ1xyXG4vLyBpbXBvcnQgeyBleHBvcnRDb21wb25lbnRBc0pQRUcsIGV4cG9ydENvbXBvbmVudEFzUERGLCBleHBvcnRDb21wb25lbnRBc1BORyB9IGZyb20gJ3JlYWN0LWNvbXBvbmVudC1leHBvcnQtaW1hZ2UnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgRGlzcGxheSBmcm9tICcuLi9jdXNjb21wb25lbnRzL2Rlc2lnbi9EaXNwbGF5J1xyXG5jb25zdCBEaXNwbGF5ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2N1c2NvbXBvbmVudHMvZGVzaWduL0Rpc3BsYXknKSxcclxue1xyXG4gICAgc3NyOiBmYWxzZVxyXG59KVxyXG5jb25zdCBTZXR0aW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoICcuLi9jdXNjb21wb25lbnRzL2Rlc2lnbi9TZXR0aW5nJykgLHtcclxuICAgIHNzcjogZmFsc2VcclxufSlcclxuXHJcblxyXG4gY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICB0c2hpcnRJbWFnZSA6ICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kaWV5enppOGQvaW1hZ2UvdXBsb2FkL3YxNTkwMjEyMTg5L21pbnRibHVldGZyb250X2xkNGFxaS5qcGcnLFxyXG4gICAgICAgIHVwcGVyVGV4dCA6IFwiVGhpcyBpcyB1cHBlciB0ZXh0XCIsXHJcbiAgICAgICAgbG93ZXJUZXh0IDogJ1RoaXMgaXMgbG93ZXIgdGV4dCcsXHJcbiAgICAgICAgdXBsb2FkSW1hZ2UgOiBcImh0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMHgxMDBcIixcclxuICAgICAgICB0ZXh0U2l6ZSA6ICczMCcsXHJcbiAgICAgICAgdGV4dENvbG9yIDogXCJibGFja1wiLFxyXG4gICAgICAgIHByaWNlOiA3NTAsXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUc2hpcnRDb2xvciA9IChlKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgdHNoaXJ0SW1hZ2UgOiBlLnRhcmdldC5zcmNcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVXBwZXJUZXh0ID0gKGUpPT57XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVwcGVyVGV4dCA6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGhhbmRsZUxvd2VyVGV4dCA9IChlKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsb3dlclRleHQgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVUZXh0Q29sb3IgPSAoZSk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGV4dENvbG9yIDogZS50YXJnZXQudmFsdWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlVGV4dFNpemUgPSAoZSk9PntcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdGV4dFNpemUgOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVVcGxvYWRJbWFnZSA9IGFzeW5jIChlKT0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAvLyBmb3JtIGRhdGFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLGltYWdlKTtcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCAgICAgICAgICAgYXhpb3MucG9zdCgnaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vdXBsb2FkJyxmb3JtRGF0YSx7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzIDoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ211bHRpcGFydC9mb3JtLWRhdGEnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHVwbG9hZEltYWdlIDogcmVzcC5kYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTUnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIixwYWRkaW5nTGVmdDonMTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGlzcGxheSBkaXNwbGF5PXt0aGlzLnN0YXRlfSAgLz5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDonNTAlJyxwYWRkaW5nTGVmdDonMTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmcgXHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cHBlclRleHQ9e3RoaXMuaGFuZGxlVXBwZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlclRleHQ9e3RoaXMuaGFuZGxlTG93ZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9e3RoaXMuaGFuZGxlVGV4dENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U2l6ZT17dGhpcy5oYW5kbGVUZXh0U2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkSW1hZ2UgPSB7dGhpcy5oYW5kbGVVcGxvYWRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHRtbDJjYW52YXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvbXBvbmVudC1leHBvcnQtaW1hZ2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=