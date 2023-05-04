(function() {
var exports = {};
exports.id = "pages/category";
exports.ids = ["pages/category"];
exports.modules = {

/***/ "./pages/category/index.js":
/*!*********************************!*\
  !*** ./pages/category/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({
      message: `Method ${req.method} is not allowed`
    });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/category/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcGFnZXMvY2F0ZWdvcnkvaW5kZXguanMiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNldEhlYWRlciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDeEMsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsS0FBbkIsRUFBMEI7QUFDeEJELE9BQUcsQ0FBQ0UsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0FGLE9BQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRyxVQUFTTixHQUFHLENBQUNFLE1BQU87QUFBaEMsS0FBckI7QUFDRCxHQUhELE1BR087QUFDTCxVQUFNSyxRQUFRLEdBQUdDLFdBQVcsRUFBNUI7QUFDQVAsT0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJFLFFBQXJCO0FBQ0Q7QUFDRixDIiwiZmlsZSI6InBhZ2VzL2NhdGVnb3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdHRVQnKSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBgTWV0aG9kICR7cmVxLm1ldGhvZH0gaXMgbm90IGFsbG93ZWRgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IGdldFByb2R1Y3RzKCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9kdWN0cyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=