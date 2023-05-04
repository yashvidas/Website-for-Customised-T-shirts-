exports.id = "cuscomponents_design_Display_jsx";
exports.ids = ["cuscomponents_design_Display_jsx"];
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

/***/ "./cuscomponents/design/Display.jsx":
/*!******************************************!*\
  !*** ./cuscomponents/design/Display.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_component_export_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-component-export-image */ "react-component-export-image");
/* harmony import */ var react_component_export_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_component_export_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ "html2canvas");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_cart_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/cart.slice */ "./redux/cart.slice.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\yashv\\OneDrive\\Desktop\\priyanka\\myminielvess\\cuscomponents\\design\\Display.jsx";






 // new

function Display(props) {
  const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: componentRef,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          display: "flex"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              backgroundImage: "url(/tshirt.png)",
              backgroundRepeat: "no-repeat",
              width: "75%",
              height: "80vh"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                paddingTop: '170px'
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  style: {
                    textAlign: "center",
                    color: props.display.textColor,
                    fontSize: props.display.textSize + "px"
                  },
                  children: props.display.upperText
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  paddingLeft: '150px',
                  paddingRight: '150px'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                  src: props.display.uploadImage,
                  alt: "uploadImage",
                  width: 300,
                  height: 300
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  style: {
                    textAlign: "center",
                    color: props.display.textColor,
                    fontSize: props.display.textSize + "px"
                  },
                  children: props.display.lowerText
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        style: {
          width: 700,
          margin: 2,
          padding: 2,
          background: "black",
          border: 2,
          color: "white",
          fontSize: 20
        },
        onClick: async () => {
          const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(componentRef.current, {
            useCORS: true,
            allowTaint: true,
            imageTimeout: 100
          }).then(function (canvas) {
            // console.log("canvas");
            canvas.toBlob(function (blob) {
              dispatch((0,_redux_cart_slice__WEBPACK_IMPORTED_MODULE_5__.addCustomProduct)({
                quantity: 1,
                "price": 350,
                "image": blob,
                "category": "T-shirt",
                "product": "Custom T-shirt",
                "id": randomString
              }));
            }, "image/jpeg");
            alert("Custom T-shirt added to cart");
            router.push('/cart');
          });
        },
        children: " Order Now"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Display);

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

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3Nob3BwaW5nLWNhcnQvLi9jdXNjb21wb25lbnRzL2Rlc2lnbi9EaXNwbGF5LmpzeCIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vc2hvcHBpbmctY2FydC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcmVkdXgvY2FydC5zbGljZS5qcyIsIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiXSwibmFtZXMiOlsiRGlzcGxheSIsInByb3BzIiwiY29tcG9uZW50UmVmIiwidXNlUmVmIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImRpc3BsYXkiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0Iiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nVG9wIiwidGV4dEFsaWduIiwiY29sb3IiLCJ0ZXh0Q29sb3IiLCJmb250U2l6ZSIsInRleHRTaXplIiwidXBwZXJUZXh0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJ1cGxvYWRJbWFnZSIsImxvd2VyVGV4dCIsIm1hcmdpbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwicmFuZG9tU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwiaHRtbDJjYW52YXMiLCJjdXJyZW50IiwidXNlQ09SUyIsImFsbG93VGFpbnQiLCJpbWFnZVRpbWVvdXQiLCJ0aGVuIiwiY2FudmFzIiwidG9CbG9iIiwiYmxvYiIsImFkZEN1c3RvbVByb2R1Y3QiLCJxdWFudGl0eSIsImFsZXJ0IiwicHVzaCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsImxlbmd0aCIsInNtYWxsZXN0UmF0aW8iLCJtaW4iLCJ3aWR0aHMiLCJmaWx0ZXIiLCJzIiwia2luZCIsIlNldCIsIm1hcCIsInciLCJmaW5kIiwicCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0IiwiaSIsImpvaW4iLCJnZXRJbnQiLCJ4IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwiZ2V0Iiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsInJlbW92ZVBsYWNlaG9sZGVyIiwiaW1nIiwicGxhY2Vob2xkZXIiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJsb2FkaW5nIiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW5jbHVkZXMiLCJTdHJpbmciLCJjb25zb2xlIiwid2FybiIsIlZBTElEX0JMVVJfRVhUIiwiaXNMYXp5Iiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJpc05hTiIsIm92ZXJmbG93IiwiaW1nQXR0cmlidXRlcyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJyb2xlIiwidG9CYXNlNjQiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlZiIsImVsZW1lbnQiLCJrZXkiLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInBhcmFtcyIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJVUkwiLCJlcnIiLCJlcnJvciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwidGFnTmFtZSIsIm9ic2VydmUiLCJ1c2VFZmZlY3QiLCJpZGxlQ2FsbGJhY2siLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJnZXRDYXJ0IiwiY3JlYXRlQXN5bmNUaHVuayIsImFyZyIsImdldFN0YXRlIiwicmVzIiwiYXhpb3MiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImF1dGgiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJpbmNyZW1lbnRRdWFudGl0eSIsImRlY3JlbWVudFF1YW50aXR5IiwicmVtb3ZlRnJvbUNhcnQiLCJhZGRUb0NhcnRDYXJ0IiwicHJvZHVjdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJhZGRUb0NhcnQiLCJjYXJ0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwiZnVsZmlsbGVkIiwic3RhdGUiLCJhY3Rpb24iLCJsb2ciLCJwYXlsb2FkIiwiaXRlbUV4aXN0cyIsIml0ZW0iLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwwQjs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVCQUF1QjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3RCLFFBQU1DLFlBQVksR0FBR0MsNkNBQU0sRUFBM0I7QUFDQSxRQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVMLFlBQVY7QUFBQSw2QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFTSxpQkFBTyxFQUFFO0FBQVgsU0FBWjtBQUFBLCtCQUNFO0FBQUEsaUNBQ0U7QUFDRSxpQkFBSyxFQUFFO0FBQ0xDLDZCQUFlLEVBQUUsa0JBRFo7QUFFTEMsOEJBQWdCLEVBQUUsV0FGYjtBQUdMQyxtQkFBSyxFQUFFLEtBSEY7QUFJTEMsb0JBQU0sRUFBRTtBQUpILGFBRFQ7QUFBQSxtQ0FRRTtBQUFLLG1CQUFLLEVBQUU7QUFBRUMsMEJBQVUsRUFBQztBQUFiLGVBQVo7QUFBQSxzQ0FDRTtBQUFBLHVDQUNFO0FBQ0UsdUJBQUssRUFBRTtBQUVMQyw2QkFBUyxFQUFFLFFBRk47QUFHTEMseUJBQUssRUFBRWQsS0FBSyxDQUFDTyxPQUFOLENBQWNRLFNBSGhCO0FBSUxDLDRCQUFRLEVBQUVoQixLQUFLLENBQUNPLE9BQU4sQ0FBY1UsUUFBZCxHQUF5QjtBQUo5QixtQkFEVDtBQUFBLDRCQVFHakIsS0FBSyxDQUFDTyxPQUFOLENBQWNXO0FBUmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBYUU7QUFBSyxxQkFBSyxFQUFFO0FBQUVDLDZCQUFXLEVBQUMsT0FBZDtBQUF1QkMsOEJBQVksRUFBQztBQUFwQyxpQkFBWjtBQUFBLHVDQUNFLDhEQUFDLG1EQUFEO0FBQVEscUJBQUcsRUFBRXBCLEtBQUssQ0FBQ08sT0FBTixDQUFjYyxXQUEzQjtBQUF3QyxxQkFBRyxFQUFDLGFBQTVDO0FBQ0MsdUJBQUssRUFBRSxHQURSO0FBRUUsd0JBQU0sRUFBRTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWJGLGVBbUJFO0FBQUEsdUNBQ0U7QUFDRSx1QkFBSyxFQUFFO0FBRUxSLDZCQUFTLEVBQUUsUUFGTjtBQUdMQyx5QkFBSyxFQUFFZCxLQUFLLENBQUNPLE9BQU4sQ0FBY1EsU0FIaEI7QUFJTEMsNEJBQVEsRUFBRWhCLEtBQUssQ0FBQ08sT0FBTixDQUFjVSxRQUFkLEdBQXlCO0FBSjlCLG1CQURUO0FBQUEsNEJBUUdqQixLQUFLLENBQUNPLE9BQU4sQ0FBY2U7QUFSakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWdERTtBQUFBLDZCQUNBO0FBQVUsYUFBSyxFQUFFO0FBRVhaLGVBQUssRUFBRSxHQUZJO0FBR1hhLGdCQUFNLEVBQUUsQ0FIRztBQUlYQyxpQkFBTyxFQUFFLENBSkU7QUFLWEMsb0JBQVUsRUFBRSxPQUxEO0FBTVhDLGdCQUFNLEVBQUUsQ0FORztBQU9YWixlQUFLLEVBQUUsT0FQSTtBQVFYRSxrQkFBUSxFQUFFO0FBUkMsU0FBakI7QUFTTyxlQUFPLEVBQUUsWUFBVztBQUczQixnQkFBTVcsWUFBWSxHQUFHQyxJQUFJLENBQUNDLE1BQUwsR0FBY0MsUUFBZCxDQUF1QixFQUF2QixFQUEyQkMsU0FBM0IsQ0FBcUMsQ0FBckMsRUFBd0MsRUFBeEMsSUFBOENILElBQUksQ0FBQ0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxTQUEzQixDQUFxQyxDQUFyQyxFQUF3QyxFQUF4QyxDQUFuRTtBQUNBQyw0REFBVyxDQUFDL0IsWUFBWSxDQUFDZ0MsT0FBZCxFQUVUO0FBQ0VDLG1CQUFPLEVBQUUsSUFEWDtBQUVFQyxzQkFBVSxFQUFFLElBRmQ7QUFHRUMsd0JBQVksRUFBRTtBQUhoQixXQUZTLENBQVgsQ0FRSUMsSUFSSixDQVFTLFVBQVVDLE1BQVYsRUFBa0I7QUFDdkI7QUFDQUEsa0JBQU0sQ0FBQ0MsTUFBUCxDQUFjLFVBQVNDLElBQVQsRUFBZTtBQUMzQnJDLHNCQUFRLENBQUNzQyxtRUFBZ0IsQ0FBQztBQUN6QkMsd0JBQVEsRUFBRSxDQURlO0FBRXpCLHlCQUFTLEdBRmdCO0FBR3pCLHlCQUFTRixJQUhnQjtBQUl6Qiw0QkFBWSxTQUphO0FBS3pCLDJCQUFXLGdCQUxjO0FBTXpCLHNCQUFNYjtBQU5tQixlQUFELENBQWpCLENBQVI7QUFRQSxhQVRGLEVBU0ksWUFUSjtBQVVDZ0IsaUJBQUssQ0FBQyw4QkFBRCxDQUFMO0FBQ0N0QyxrQkFBTSxDQUFDdUMsSUFBUCxDQUFZLE9BQVo7QUFDSCxXQXRCSDtBQXdCQyxTQXJDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwRkQ7O0FBRUQsK0RBQWU3QyxPQUFmLEU7Ozs7Ozs7Ozs7O0FDMUdhOztBQUFBLElBQUk4QyxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxvSEFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCQyxLQUFoQjs7QUFBc0IsSUFBSUMsOEJBQThCLEdBQUNKLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLGtJQUFELENBQVIsQ0FBekQ7O0FBQTBILElBQUlJLFNBQVMsR0FBQ0wsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsd0ZBQUQsQ0FBUixDQUFwQzs7QUFBZ0YsSUFBSUssTUFBTSxHQUFDTixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJTSxLQUFLLEdBQUNQLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdEQUFELENBQVIsQ0FBaEM7O0FBQXFFLElBQUlPLE9BQU8sR0FBQ1AsbUJBQU8sQ0FBQyxvRUFBRCxDQUFuQjs7QUFBcUQsSUFBSVEsWUFBWSxHQUFDUixtQkFBTyxDQUFDLDhFQUFELENBQXhCOztBQUErRCxJQUFJUyxnQkFBZ0IsR0FBQ1QsbUJBQU8sQ0FBQywrRUFBRCxDQUE1Qjs7QUFBbUQsVUFBK0I7QUFBQztBQUFDVSxRQUFNLENBQUNDLHFCQUFQLEdBQTZCLElBQTdCO0FBQW1DOztBQUFBLE1BQU1DLG9CQUFvQixHQUFDLENBQUMsTUFBRCxFQUFRLE9BQVIsRUFBZ0JDLFNBQWhCLENBQTNCO0FBQXNELE1BQU1DLE9BQU8sR0FBQyxJQUFJQyxHQUFKLENBQVEsQ0FBQyxDQUFDLE9BQUQsRUFBU0MsV0FBVCxDQUFELEVBQXVCLENBQUMsWUFBRCxFQUFjQyxnQkFBZCxDQUF2QixFQUF1RCxDQUFDLFFBQUQsRUFBVUMsWUFBVixDQUF2RCxFQUErRSxDQUFDLFNBQUQsRUFBV0MsYUFBWCxDQUEvRSxDQUFSLENBQWQ7QUFBaUksTUFBTUMsbUJBQW1CLEdBQUMsQ0FBQyxNQUFELEVBQVEsT0FBUixFQUFnQixXQUFoQixFQUE0QixZQUE1QixFQUF5Q1AsU0FBekMsQ0FBMUI7O0FBQThFLFNBQVNRLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQTZCO0FBQUMsU0FBT0EsR0FBRyxDQUFDQyxPQUFKLEtBQWNWLFNBQXJCO0FBQWdDOztBQUFBLFNBQVNXLGlCQUFULENBQTJCRixHQUEzQixFQUErQjtBQUFDLFNBQU9BLEdBQUcsQ0FBQ0EsR0FBSixLQUFVVCxTQUFqQjtBQUE0Qjs7QUFBQSxTQUFTWSxjQUFULENBQXdCSCxHQUF4QixFQUE0QjtBQUFDLFNBQU8sT0FBT0EsR0FBUCxLQUFhLFFBQWIsS0FBd0JELGVBQWUsQ0FBQ0MsR0FBRCxDQUFmLElBQXNCRSxpQkFBaUIsQ0FBQ0YsR0FBRCxDQUEvRCxDQUFQO0FBQThFOztBQUFBLE1BQUs7QUFBQ0ksYUFBVyxFQUFDQyxpQkFBYjtBQUErQkMsWUFBVSxFQUFDQyxnQkFBMUM7QUFBMkRDLFFBQU0sRUFBQ0MsWUFBbEU7QUFBK0VDLE1BQUksRUFBQ0MsVUFBcEY7QUFBK0ZDLFNBQU8sRUFBQ0M7QUFBdkcsSUFBc0hDLDZPQUFBLElBQStCNUIsWUFBWSxDQUFDNkIsa0JBQXZLLEMsQ0FBMEw7O0FBQ2gyQyxNQUFNQyxRQUFRLEdBQUMsQ0FBQyxHQUFHWCxpQkFBSixFQUFzQixHQUFHRSxnQkFBekIsQ0FBZjtBQUEwREYsaUJBQWlCLENBQUNZLElBQWxCLENBQXVCLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxLQUFPRCxDQUFDLEdBQUNDLENBQWhDO0FBQW1DSCxRQUFRLENBQUNDLElBQVQsQ0FBYyxDQUFDQyxDQUFELEVBQUdDLENBQUgsS0FBT0QsQ0FBQyxHQUFDQyxDQUF2Qjs7QUFBMEIsU0FBU0MsU0FBVCxDQUFtQjlFLEtBQW5CLEVBQXlCK0UsTUFBekIsRUFBZ0NDLEtBQWhDLEVBQXNDO0FBQUMsTUFBR0EsS0FBSyxLQUFHRCxNQUFNLEtBQUcsTUFBVCxJQUFpQkEsTUFBTSxLQUFHLFlBQTdCLENBQVIsRUFBbUQ7QUFBQztBQUNsTixVQUFNRSxlQUFlLEdBQUMsb0JBQXRCO0FBQTJDLFVBQU1DLFlBQVksR0FBQyxFQUFuQjs7QUFBc0IsU0FBSSxJQUFJQyxLQUFSLEVBQWNBLEtBQUssR0FBQ0YsZUFBZSxDQUFDRyxJQUFoQixDQUFxQkosS0FBckIsQ0FBcEIsRUFBZ0RHLEtBQWhELEVBQXNEO0FBQUNELGtCQUFZLENBQUNoRCxJQUFiLENBQWtCbUQsUUFBUSxDQUFDRixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQTFCO0FBQXVDOztBQUFBLFFBQUdELFlBQVksQ0FBQ0ksTUFBaEIsRUFBdUI7QUFBQyxZQUFNQyxhQUFhLEdBQUNyRSxJQUFJLENBQUNzRSxHQUFMLENBQVMsR0FBR04sWUFBWixJQUEwQixJQUE5QztBQUFtRCxhQUFNO0FBQUNPLGNBQU0sRUFBQ2YsUUFBUSxDQUFDZ0IsTUFBVCxDQUFnQkMsQ0FBQyxJQUFFQSxDQUFDLElBQUU1QixpQkFBaUIsQ0FBQyxDQUFELENBQWpCLEdBQXFCd0IsYUFBM0MsQ0FBUjtBQUFrRUssWUFBSSxFQUFDO0FBQXZFLE9BQU47QUFBbUY7O0FBQUEsV0FBTTtBQUFDSCxZQUFNLEVBQUNmLFFBQVI7QUFBaUJrQixVQUFJLEVBQUM7QUFBdEIsS0FBTjtBQUFrQzs7QUFBQSxNQUFHLE9BQU81RixLQUFQLEtBQWUsUUFBZixJQUF5QitFLE1BQU0sS0FBRyxNQUFsQyxJQUEwQ0EsTUFBTSxLQUFHLFlBQXRELEVBQW1FO0FBQUMsV0FBTTtBQUFDVSxZQUFNLEVBQUMxQixpQkFBUjtBQUEwQjZCLFVBQUksRUFBQztBQUEvQixLQUFOO0FBQTJDOztBQUFBLFFBQU1ILE1BQU0sR0FBQyxDQUFDLEdBQUcsSUFBSUksR0FBSixFQUFRO0FBQ3ZlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBQzdGLEtBQUQsRUFBT0EsS0FBSyxHQUFDO0FBQUM7QUFBZCxJQUErQjhGLEdBQS9CLENBQW1DQyxDQUFDLElBQUVyQixRQUFRLENBQUNzQixJQUFULENBQWNDLENBQUMsSUFBRUEsQ0FBQyxJQUFFRixDQUFwQixLQUF3QnJCLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDWSxNQUFULEdBQWdCLENBQWpCLENBQXRFLENBUitkLENBQUosQ0FBYjtBQVFqWCxTQUFNO0FBQUNHLFVBQUQ7QUFBUUcsUUFBSSxFQUFDO0FBQWIsR0FBTjtBQUF5Qjs7QUFBQSxTQUFTTSxnQkFBVCxDQUEwQjtBQUFDeEMsS0FBRDtBQUFLeUMsYUFBTDtBQUFpQnBCLFFBQWpCO0FBQXdCL0UsT0FBeEI7QUFBOEJvRyxTQUE5QjtBQUFzQ3BCLE9BQXRDO0FBQTRDZDtBQUE1QyxDQUExQixFQUE4RTtBQUFDLE1BQUdpQyxXQUFILEVBQWU7QUFBQyxXQUFNO0FBQUN6QyxTQUFEO0FBQUsyQyxZQUFNLEVBQUNwRCxTQUFaO0FBQXNCK0IsV0FBSyxFQUFDL0I7QUFBNUIsS0FBTjtBQUE4Qzs7QUFBQSxRQUFLO0FBQUN3QyxVQUFEO0FBQVFHO0FBQVIsTUFBY2QsU0FBUyxDQUFDOUUsS0FBRCxFQUFPK0UsTUFBUCxFQUFjQyxLQUFkLENBQTVCO0FBQWlELFFBQU1zQixJQUFJLEdBQUNiLE1BQU0sQ0FBQ0gsTUFBUCxHQUFjLENBQXpCO0FBQTJCLFNBQU07QUFBQ04sU0FBSyxFQUFDLENBQUNBLEtBQUQsSUFBUVksSUFBSSxLQUFHLEdBQWYsR0FBbUIsT0FBbkIsR0FBMkJaLEtBQWxDO0FBQXdDcUIsVUFBTSxFQUFDWixNQUFNLENBQUNLLEdBQVAsQ0FBVyxDQUFDQyxDQUFELEVBQUdRLENBQUgsS0FBUSxHQUFFckMsTUFBTSxDQUFDO0FBQUNSLFNBQUQ7QUFBSzBDLGFBQUw7QUFBYXBHLFdBQUssRUFBQytGO0FBQW5CLEtBQUQsQ0FBd0IsSUFBR0gsSUFBSSxLQUFHLEdBQVAsR0FBV0csQ0FBWCxHQUFhUSxDQUFDLEdBQUMsQ0FBRSxHQUFFWCxJQUFLLEVBQTlFLEVBQWlGWSxJQUFqRixDQUFzRixJQUF0RixDQUEvQztBQUEySTtBQUNoZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E5QyxPQUFHLEVBQUNRLE1BQU0sQ0FBQztBQUFDUixTQUFEO0FBQUswQyxhQUFMO0FBQWFwRyxXQUFLLEVBQUN5RixNQUFNLENBQUNhLElBQUQ7QUFBekIsS0FBRDtBQU4yVSxHQUFOO0FBTWhTOztBQUFBLFNBQVNHLE1BQVQsQ0FBZ0JDLENBQWhCLEVBQWtCO0FBQUMsTUFBRyxPQUFPQSxDQUFQLEtBQVcsUUFBZCxFQUF1QjtBQUFDLFdBQU9BLENBQVA7QUFBVTs7QUFBQSxNQUFHLE9BQU9BLENBQVAsS0FBVyxRQUFkLEVBQXVCO0FBQUMsV0FBT3JCLFFBQVEsQ0FBQ3FCLENBQUQsRUFBRyxFQUFILENBQWY7QUFBdUI7O0FBQUEsU0FBT3pELFNBQVA7QUFBa0I7O0FBQUEsU0FBUzBELGtCQUFULENBQTRCQyxXQUE1QixFQUF3QztBQUFDLFFBQU1DLElBQUksR0FBQzNELE9BQU8sQ0FBQzRELEdBQVIsQ0FBWTNDLFlBQVosQ0FBWDs7QUFBcUMsTUFBRzBDLElBQUgsRUFBUTtBQUFDLFdBQU9BLElBQUksQ0FBQyxDQUFDLEdBQUVyRSxTQUFTLENBQUNtQixPQUFiLEVBQXNCO0FBQUNvRCxVQUFJLEVBQUMxQztBQUFOLEtBQXRCLEVBQXdDdUMsV0FBeEMsQ0FBRCxDQUFYO0FBQW1FOztBQUFBLFFBQU0sSUFBSUksS0FBSixDQUFXLHlEQUF3RHBFLFlBQVksQ0FBQ3FFLGFBQWIsQ0FBMkJULElBQTNCLENBQWdDLElBQWhDLENBQXNDLGVBQWNyQyxZQUFhLEVBQXBJLENBQU47QUFBOEksQyxDQUFBO0FBQzdjOzs7QUFDQSxTQUFTK0MsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQStCQyxXQUEvQixFQUEyQztBQUFDLE1BQUdBLFdBQVcsS0FBRyxNQUFkLElBQXNCRCxHQUF6QixFQUE2QjtBQUFDLFVBQU1FLFVBQVUsR0FBQyxNQUFJO0FBQUMsVUFBRyxDQUFDRixHQUFHLENBQUN6RCxHQUFKLENBQVE0RCxVQUFSLENBQW1CLE9BQW5CLENBQUosRUFBZ0M7QUFBQyxjQUFNckIsQ0FBQyxHQUFDLFlBQVdrQixHQUFYLEdBQWVBLEdBQUcsQ0FBQ0ksTUFBSixFQUFmLEdBQTRCQyxPQUFPLENBQUNDLE9BQVIsRUFBcEM7QUFBc0R4QixTQUFDLENBQUN5QixLQUFGLENBQVEsTUFBSSxDQUFFLENBQWQsRUFBZ0IvRixJQUFoQixDQUFxQixNQUFJO0FBQUN3RixhQUFHLENBQUNRLEtBQUosQ0FBVWpDLE1BQVYsR0FBaUIsTUFBakI7QUFBd0J5QixhQUFHLENBQUNRLEtBQUosQ0FBVUMsY0FBVixHQUF5QixNQUF6QjtBQUFnQ1QsYUFBRyxDQUFDUSxLQUFKLENBQVU3SCxlQUFWLEdBQTBCLE1BQTFCO0FBQWtDLFNBQXBIO0FBQXVIO0FBQUMsS0FBck87O0FBQXNPLFFBQUdxSCxHQUFHLENBQUNVLFFBQVAsRUFBZ0I7QUFBQztBQUNqVTtBQUNBO0FBQ0FSLGdCQUFVO0FBQUksS0FIa1MsTUFHOVI7QUFBQ0YsU0FBRyxDQUFDVyxNQUFKLEdBQVdULFVBQVg7QUFBdUI7QUFBQztBQUFDOztBQUFBLFNBQVMvRSxLQUFULENBQWV5RixJQUFmLEVBQW9CO0FBQUMsTUFBRztBQUFDckUsT0FBRDtBQUFLc0IsU0FBTDtBQUFXbUIsZUFBVyxHQUFDLEtBQXZCO0FBQTZCNkIsWUFBUSxHQUFDLEtBQXRDO0FBQTRDQyxXQUE1QztBQUFvREMsYUFBcEQ7QUFBOEQ5QixXQUE5RDtBQUFzRXBHLFNBQXRFO0FBQTRFQyxVQUE1RTtBQUFtRmtJLGFBQW5GO0FBQTZGQyxrQkFBN0Y7QUFBNEdsRSxVQUFNLEdBQUN5QyxrQkFBbkg7QUFBc0lTLGVBQVcsR0FBQyxPQUFsSjtBQUEwSmlCO0FBQTFKLE1BQXVLTixJQUExSztBQUFBLE1BQStLTyxHQUFHLEdBQUMsQ0FBQyxHQUFFL0YsOEJBQThCLENBQUNvQixPQUFsQyxFQUEyQ29FLElBQTNDLEVBQWdELENBQUMsS0FBRCxFQUFPLE9BQVAsRUFBZSxhQUFmLEVBQTZCLFVBQTdCLEVBQXdDLFNBQXhDLEVBQWtELFdBQWxELEVBQThELFNBQTlELEVBQXdFLE9BQXhFLEVBQWdGLFFBQWhGLEVBQXlGLFdBQXpGLEVBQXFHLGdCQUFyRyxFQUFzSCxRQUF0SCxFQUErSCxhQUEvSCxFQUE2SSxhQUE3SSxDQUFoRCxDQUFuTDtBQUFnWSxNQUFJUSxJQUFJLEdBQUNELEdBQVQ7QUFBYSxNQUFJdkQsTUFBTSxHQUFDQyxLQUFLLEdBQUMsWUFBRCxHQUFjLFdBQTlCOztBQUEwQyxNQUFHLFlBQVd1RCxJQUFkLEVBQW1CO0FBQUM7QUFDNWdCLFFBQUdBLElBQUksQ0FBQ3hELE1BQVIsRUFBZUEsTUFBTSxHQUFDd0QsSUFBSSxDQUFDeEQsTUFBWixDQUQ0ZixDQUN6ZTs7QUFDbEMsV0FBT3dELElBQUksQ0FBQyxRQUFELENBQVg7QUFBdUI7O0FBQUEsTUFBSUMsU0FBUyxHQUFDLEVBQWQ7O0FBQWlCLE1BQUczRSxjQUFjLENBQUNILEdBQUQsQ0FBakIsRUFBdUI7QUFBQyxVQUFNK0UsZUFBZSxHQUFDaEYsZUFBZSxDQUFDQyxHQUFELENBQWYsR0FBcUJBLEdBQUcsQ0FBQ0MsT0FBekIsR0FBaUNELEdBQXZEOztBQUEyRCxRQUFHLENBQUMrRSxlQUFlLENBQUMvRSxHQUFwQixFQUF3QjtBQUFDLFlBQU0sSUFBSXNELEtBQUosQ0FBVyw4SUFBNkkwQixJQUFJLENBQUNDLFNBQUwsQ0FBZUYsZUFBZixDQUFnQyxFQUF4TCxDQUFOO0FBQWtNOztBQUFBSixlQUFXLEdBQUNBLFdBQVcsSUFBRUksZUFBZSxDQUFDSixXQUF6QztBQUFxREcsYUFBUyxHQUFDQyxlQUFlLENBQUMvRSxHQUExQjs7QUFBOEIsUUFBRyxDQUFDcUIsTUFBRCxJQUFTQSxNQUFNLEtBQUcsTUFBckIsRUFBNEI7QUFBQzlFLFlBQU0sR0FBQ0EsTUFBTSxJQUFFd0ksZUFBZSxDQUFDeEksTUFBL0I7QUFBc0NELFdBQUssR0FBQ0EsS0FBSyxJQUFFeUksZUFBZSxDQUFDekksS0FBN0I7O0FBQW1DLFVBQUcsQ0FBQ3lJLGVBQWUsQ0FBQ3hJLE1BQWpCLElBQXlCLENBQUN3SSxlQUFlLENBQUN6SSxLQUE3QyxFQUFtRDtBQUFDLGNBQU0sSUFBSWdILEtBQUosQ0FBVywySkFBMEowQixJQUFJLENBQUNDLFNBQUwsQ0FBZUYsZUFBZixDQUFnQyxFQUFyTSxDQUFOO0FBQStNO0FBQUM7QUFBQzs7QUFBQS9FLEtBQUcsR0FBQyxPQUFPQSxHQUFQLEtBQWEsUUFBYixHQUFzQkEsR0FBdEIsR0FBMEI4RSxTQUE5QjtBQUF3QyxRQUFNSSxRQUFRLEdBQUNuQyxNQUFNLENBQUN6RyxLQUFELENBQXJCO0FBQTZCLFFBQU02SSxTQUFTLEdBQUNwQyxNQUFNLENBQUN4RyxNQUFELENBQXRCO0FBQStCLFFBQU02SSxVQUFVLEdBQUNyQyxNQUFNLENBQUNMLE9BQUQsQ0FBdkI7O0FBQWlDLFlBQXVDO0FBQUMsUUFBRyxDQUFDMUMsR0FBSixFQUFRO0FBQUMsWUFBTSxJQUFJc0QsS0FBSixDQUFXLDBIQUF5SDBCLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUMzSSxhQUFEO0FBQU9DLGNBQVA7QUFBY21HO0FBQWQsT0FBZixDQUF1QyxFQUEzSyxDQUFOO0FBQXFMOztBQUFBLFFBQUcsQ0FBQzVDLG1CQUFtQixDQUFDdUYsUUFBcEIsQ0FBNkJoRSxNQUE3QixDQUFKLEVBQXlDO0FBQUMsWUFBTSxJQUFJaUMsS0FBSixDQUFXLG1CQUFrQnRELEdBQUksOENBQTZDcUIsTUFBTyxzQkFBcUJ2QixtQkFBbUIsQ0FBQ3NDLEdBQXBCLENBQXdCa0QsTUFBeEIsRUFBZ0N4QyxJQUFoQyxDQUFxQyxHQUFyQyxDQUEwQyxHQUFwSixDQUFOO0FBQStKOztBQUFBLFFBQUcsQ0FBQ3hELG9CQUFvQixDQUFDK0YsUUFBckIsQ0FBOEJkLE9BQTlCLENBQUosRUFBMkM7QUFBQyxZQUFNLElBQUlqQixLQUFKLENBQVcsbUJBQWtCdEQsR0FBSSwrQ0FBOEN1RSxPQUFRLHNCQUFxQmpGLG9CQUFvQixDQUFDOEMsR0FBckIsQ0FBeUJrRCxNQUF6QixFQUFpQ3hDLElBQWpDLENBQXNDLEdBQXRDLENBQTJDLEdBQXZKLENBQU47QUFBa0s7O0FBQUEsUUFBR3dCLFFBQVEsSUFBRUMsT0FBTyxLQUFHLE1BQXZCLEVBQThCO0FBQUMsWUFBTSxJQUFJakIsS0FBSixDQUFXLG1CQUFrQnRELEdBQUksaUZBQWpDLENBQU47QUFBMEg7O0FBQUEsUUFBRzBELFdBQVcsS0FBRyxNQUFqQixFQUF3QjtBQUFDLFVBQUcsQ0FBQ3dCLFFBQVEsSUFBRSxDQUFYLEtBQWVDLFNBQVMsSUFBRSxDQUExQixJQUE2QixJQUFoQyxFQUFxQztBQUFDSSxlQUFPLENBQUNDLElBQVIsQ0FBYyxtQkFBa0J4RixHQUFJLHNHQUFwQztBQUE0STs7QUFBQSxVQUFHLENBQUMyRSxXQUFKLEVBQWdCO0FBQUMsY0FBTWMsY0FBYyxHQUFDLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBYyxNQUFkLENBQXJCLENBQUQsQ0FBNEM7O0FBQ3Q3RCxjQUFNLElBQUluQyxLQUFKLENBQVcsbUJBQWtCdEQsR0FBSTtBQUN2QztBQUNBO0FBQ0EsbUdBQW1HeUYsY0FBYyxDQUFDM0MsSUFBZixDQUFvQixHQUFwQixDQUF5QjtBQUM1SDtBQUNBLGdGQUxNLENBQU47QUFLbUY7QUFBQztBQUFDOztBQUFBLE1BQUk0QyxNQUFNLEdBQUMsQ0FBQ3BCLFFBQUQsS0FBWUMsT0FBTyxLQUFHLE1BQVYsSUFBa0IsT0FBT0EsT0FBUCxLQUFpQixXQUEvQyxDQUFYOztBQUF1RSxNQUFHdkUsR0FBRyxJQUFFQSxHQUFHLENBQUM0RCxVQUFKLENBQWUsT0FBZixDQUFSLEVBQWdDO0FBQUM7QUFDN0xuQixlQUFXLEdBQUMsSUFBWjtBQUFpQmlELFVBQU0sR0FBQyxLQUFQO0FBQWM7O0FBQUEsUUFBSyxDQUFDQyxNQUFELEVBQVFDLGFBQVIsSUFBdUIsQ0FBQyxHQUFFekcsZ0JBQWdCLENBQUMwRyxlQUFwQixFQUFxQztBQUFDQyxjQUFVLEVBQUMsT0FBWjtBQUFvQkMsWUFBUSxFQUFDLENBQUNMO0FBQTlCLEdBQXJDLENBQTVCO0FBQXdHLFFBQU1NLFNBQVMsR0FBQyxDQUFDTixNQUFELElBQVNFLGFBQXpCO0FBQXVDLE1BQUlLLFlBQUo7QUFBaUIsTUFBSUMsVUFBSjtBQUFlLE1BQUlDLFFBQUo7QUFBYSxNQUFJQyxRQUFRLEdBQUMsQ0FBQyxHQUFFdEgsU0FBUyxDQUFDbUIsT0FBYixFQUFzQjtBQUFDb0csWUFBUSxFQUFDLFVBQVY7QUFBcUJDLE9BQUcsRUFBQyxDQUF6QjtBQUEyQkMsUUFBSSxFQUFDLENBQWhDO0FBQWtDQyxVQUFNLEVBQUMsQ0FBekM7QUFBMkNDLFNBQUssRUFBQyxDQUFqRDtBQUFtREMsYUFBUyxFQUFDLFlBQTdEO0FBQTBFdEosV0FBTyxFQUFDLENBQWxGO0FBQW9GRSxVQUFNLEVBQUMsTUFBM0Y7QUFBa0dILFVBQU0sRUFBQyxNQUF6RztBQUFnSGhCLFdBQU8sRUFBQyxPQUF4SDtBQUFnSUcsU0FBSyxFQUFDLENBQXRJO0FBQXdJQyxVQUFNLEVBQUMsQ0FBL0k7QUFBaUpvSyxZQUFRLEVBQUMsTUFBMUo7QUFBaUtDLFlBQVEsRUFBQyxNQUExSztBQUFpTEMsYUFBUyxFQUFDLE1BQTNMO0FBQWtNQyxhQUFTLEVBQUMsTUFBNU07QUFBbU5yQyxhQUFuTjtBQUE2TkM7QUFBN04sR0FBdEIsRUFBbVFoQixXQUFXLEtBQUcsTUFBZCxHQUFxQjtBQUFDMUIsVUFBTSxFQUFDLFlBQVI7QUFBcUJrQyxrQkFBYyxFQUFDLE9BQXBDO0FBQTRDOUgsbUJBQWUsRUFBRSxRQUFPdUksV0FBWTtBQUFoRixHQUFyQixHQUEwR3BGLFNBQTdXLENBQWI7O0FBQXFZLE1BQUcsT0FBTzJGLFFBQVAsS0FBa0IsV0FBbEIsSUFBK0IsT0FBT0MsU0FBUCxLQUFtQixXQUFsRCxJQUErRDlELE1BQU0sS0FBRyxNQUEzRSxFQUFrRjtBQUFDO0FBQ25yQixVQUFNMEYsUUFBUSxHQUFDNUIsU0FBUyxHQUFDRCxRQUF6QjtBQUFrQyxVQUFNMUksVUFBVSxHQUFDd0ssS0FBSyxDQUFDRCxRQUFELENBQUwsR0FBZ0IsTUFBaEIsR0FBd0IsR0FBRUEsUUFBUSxHQUFDLEdBQUksR0FBeEQ7O0FBQTJELFFBQUcxRixNQUFNLEtBQUcsWUFBWixFQUF5QjtBQUFDO0FBQ3ZINEUsa0JBQVksR0FBQztBQUFDOUosZUFBTyxFQUFDLE9BQVQ7QUFBaUI4SyxnQkFBUSxFQUFDLFFBQTFCO0FBQW1DWixnQkFBUSxFQUFDLFVBQTVDO0FBQXVESyxpQkFBUyxFQUFDLFlBQWpFO0FBQThFdkosY0FBTSxFQUFDO0FBQXJGLE9BQWI7QUFBcUcrSSxnQkFBVSxHQUFDO0FBQUMvSixlQUFPLEVBQUMsT0FBVDtBQUFpQnVLLGlCQUFTLEVBQUMsWUFBM0I7QUFBd0NsSztBQUF4QyxPQUFYO0FBQWdFLEtBRHhFLE1BQzZFLElBQUc2RSxNQUFNLEtBQUcsV0FBWixFQUF3QjtBQUFDO0FBQ25NNEUsa0JBQVksR0FBQztBQUFDOUosZUFBTyxFQUFDLGNBQVQ7QUFBd0J5SyxnQkFBUSxFQUFDLE1BQWpDO0FBQXdDSyxnQkFBUSxFQUFDLFFBQWpEO0FBQTBEWixnQkFBUSxFQUFDLFVBQW5FO0FBQThFSyxpQkFBUyxFQUFDLFlBQXhGO0FBQXFHdkosY0FBTSxFQUFDO0FBQTVHLE9BQWI7QUFBNEgrSSxnQkFBVSxHQUFDO0FBQUNRLGlCQUFTLEVBQUMsWUFBWDtBQUF3QnZLLGVBQU8sRUFBQyxPQUFoQztBQUF3Q3lLLGdCQUFRLEVBQUM7QUFBakQsT0FBWDtBQUFvRVQsY0FBUSxHQUFFLGVBQWNqQixRQUFTLGFBQVlDLFNBQVUsc0RBQXZEO0FBQThHLEtBRHBJLE1BQ3lJLElBQUc5RCxNQUFNLEtBQUcsT0FBWixFQUFvQjtBQUFDO0FBQ3hVNEUsa0JBQVksR0FBQztBQUFDZ0IsZ0JBQVEsRUFBQyxRQUFWO0FBQW1CUCxpQkFBUyxFQUFDLFlBQTdCO0FBQTBDdkssZUFBTyxFQUFDLGNBQWxEO0FBQWlFa0ssZ0JBQVEsRUFBQyxVQUExRTtBQUFxRi9KLGFBQUssRUFBQzRJLFFBQTNGO0FBQW9HM0ksY0FBTSxFQUFDNEk7QUFBM0csT0FBYjtBQUFvSTtBQUFDLEdBSjJkLE1BSXRkLElBQUcsT0FBT0QsUUFBUCxLQUFrQixXQUFsQixJQUErQixPQUFPQyxTQUFQLEtBQW1CLFdBQWxELElBQStEOUQsTUFBTSxLQUFHLE1BQTNFLEVBQWtGO0FBQUM7QUFDN040RSxnQkFBWSxHQUFDO0FBQUM5SixhQUFPLEVBQUMsT0FBVDtBQUFpQjhLLGNBQVEsRUFBQyxRQUExQjtBQUFtQ1osY0FBUSxFQUFDLFVBQTVDO0FBQXVEQyxTQUFHLEVBQUMsQ0FBM0Q7QUFBNkRDLFVBQUksRUFBQyxDQUFsRTtBQUFvRUMsWUFBTSxFQUFDLENBQTNFO0FBQTZFQyxXQUFLLEVBQUMsQ0FBbkY7QUFBcUZDLGVBQVMsRUFBQyxZQUEvRjtBQUE0R3ZKLFlBQU0sRUFBQztBQUFuSCxLQUFiO0FBQW9JLEdBRE0sTUFDRjtBQUFDO0FBQ3pJLGNBQXVDO0FBQUMsWUFBTSxJQUFJbUcsS0FBSixDQUFXLG1CQUFrQnRELEdBQUkseUVBQWpDLENBQU47QUFBa0g7QUFBQzs7QUFBQSxNQUFJa0gsYUFBYSxHQUFDO0FBQUNsSCxPQUFHLEVBQUMsZ0ZBQUw7QUFBc0YyQyxVQUFNLEVBQUNwRCxTQUE3RjtBQUF1RytCLFNBQUssRUFBQy9CO0FBQTdHLEdBQWxCOztBQUEwSSxNQUFHeUcsU0FBSCxFQUFhO0FBQUNrQixpQkFBYSxHQUFDMUUsZ0JBQWdCLENBQUM7QUFBQ3hDLFNBQUQ7QUFBS3lDLGlCQUFMO0FBQWlCcEIsWUFBakI7QUFBd0IvRSxXQUFLLEVBQUM0SSxRQUE5QjtBQUF1Q3hDLGFBQU8sRUFBQzBDLFVBQS9DO0FBQTBEOUQsV0FBMUQ7QUFBZ0VkO0FBQWhFLEtBQUQsQ0FBOUI7QUFBeUc7O0FBQUEsU0FBTSxhQUFhekIsTUFBTSxDQUFDa0IsT0FBUCxDQUFla0gsYUFBZixDQUE2QixLQUE3QixFQUFtQztBQUFDbEQsU0FBSyxFQUFDZ0M7QUFBUCxHQUFuQyxFQUF3REMsVUFBVSxHQUFDLGFBQWFuSCxNQUFNLENBQUNrQixPQUFQLENBQWVrSCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DO0FBQUNsRCxTQUFLLEVBQUNpQztBQUFQLEdBQW5DLEVBQXNEQyxRQUFRLEdBQUMsYUFBYXBILE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZWtILGFBQWYsQ0FBNkIsS0FBN0IsRUFBbUM7QUFBQ2xELFNBQUssRUFBQztBQUFDMkMsY0FBUSxFQUFDLE1BQVY7QUFBaUJ6SyxhQUFPLEVBQUMsT0FBekI7QUFBaUNnQixZQUFNLEVBQUMsQ0FBeEM7QUFBMENHLFlBQU0sRUFBQyxNQUFqRDtBQUF3REYsYUFBTyxFQUFDO0FBQWhFLEtBQVA7QUFBMEVnSyxPQUFHLEVBQUMsRUFBOUU7QUFBaUYsbUJBQWMsSUFBL0Y7QUFBb0dDLFFBQUksRUFBQyxjQUF6RztBQUF3SHJILE9BQUcsRUFBRSw2QkFBNEIsQ0FBQyxHQUFFZixPQUFPLENBQUNxSSxRQUFYLEVBQXFCbkIsUUFBckIsQ0FBK0I7QUFBeEwsR0FBbkMsQ0FBZCxHQUE2TyxJQUEzUyxDQUFkLEdBQStULElBQWpZLEVBQXNZLENBQUNILFNBQUQsSUFBWSxhQUFhakgsTUFBTSxDQUFDa0IsT0FBUCxDQUFla0gsYUFBZixDQUE2QixVQUE3QixFQUF3QyxJQUF4QyxFQUE2QyxhQUFhcEksTUFBTSxDQUFDa0IsT0FBUCxDQUFla0gsYUFBZixDQUE2QixLQUE3QixFQUFtQ0ksTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFpQjNDLElBQWpCLEVBQXNCckMsZ0JBQWdCLENBQUM7QUFBQ3hDLE9BQUQ7QUFBS3lDLGVBQUw7QUFBaUJwQixVQUFqQjtBQUF3Qi9FLFNBQUssRUFBQzRJLFFBQTlCO0FBQXVDeEMsV0FBTyxFQUFDMEMsVUFBL0M7QUFBMEQ5RCxTQUExRDtBQUFnRWQ7QUFBaEUsR0FBRCxDQUF0QyxFQUFnSDtBQUFDUixPQUFHLEVBQUNBLEdBQUw7QUFBU3lILFlBQVEsRUFBQyxPQUFsQjtBQUEwQm5HLFNBQUssRUFBQ0EsS0FBaEM7QUFBc0MyQyxTQUFLLEVBQUNtQyxRQUE1QztBQUFxRDVCLGFBQVMsRUFBQ0E7QUFBL0QsR0FBaEgsQ0FBbkMsQ0FBMUQsQ0FBL1osRUFBeXJCLGFBQWF6RixNQUFNLENBQUNrQixPQUFQLENBQWVrSCxhQUFmLENBQTZCLEtBQTdCLEVBQW1DSSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWlCM0MsSUFBakIsRUFBc0JxQyxhQUF0QixFQUFvQztBQUFDTyxZQUFRLEVBQUMsT0FBVjtBQUFrQmpELGFBQVMsRUFBQ0EsU0FBNUI7QUFBc0NrRCxPQUFHLEVBQUNDLE9BQU8sSUFBRTtBQUFDaEMsWUFBTSxDQUFDZ0MsT0FBRCxDQUFOO0FBQWdCbkUsdUJBQWlCLENBQUNtRSxPQUFELEVBQVNqRSxXQUFULENBQWpCO0FBQXdDLEtBQTVHO0FBQTZHTyxTQUFLLEVBQUNtQztBQUFuSCxHQUFwQyxDQUFuQyxDQUF0c0IsRUFBNDRCOUIsUUFBUTtBQUFDO0FBQWM7QUFDbDFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0F2RixRQUFNLENBQUNrQixPQUFQLENBQWVrSCxhQUFmLENBQTZCbkksS0FBSyxDQUFDaUIsT0FBbkMsRUFBMkMsSUFBM0MsRUFBZ0QsYUFBYWxCLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZWtILGFBQWYsQ0FBNkIsTUFBN0IsRUFBb0M7QUFBQ1MsT0FBRyxFQUFDLFlBQVVWLGFBQWEsQ0FBQ2xILEdBQXhCLEdBQTRCa0gsYUFBYSxDQUFDdkUsTUFBMUMsR0FBaUR1RSxhQUFhLENBQUM1RixLQUFwRTtBQUEwRXVHLE9BQUcsRUFBQyxTQUE5RTtBQUF3RkMsTUFBRSxFQUFDLE9BQTNGO0FBQW1HQyxRQUFJLEVBQUNiLGFBQWEsQ0FBQ3ZFLE1BQWQsR0FBcUJwRCxTQUFyQixHQUErQjJILGFBQWEsQ0FBQ2xILEdBQXJKLENBQXdKO0FBQXhKO0FBQ2hHZ0ksZUFBVyxFQUFDZCxhQUFhLENBQUN2RSxNQURzRSxDQUNoRTtBQURnRTtBQUVoR3NGLGNBQVUsRUFBQ2YsYUFBYSxDQUFDNUY7QUFGdUUsR0FBcEMsQ0FBN0QsQ0FMbTBDLEdBT2h5QyxJQVA0WSxDQUFuQjtBQU9sWCxDLENBQUE7OztBQUMxQyxTQUFTNEcsWUFBVCxDQUFzQmxJLEdBQXRCLEVBQTBCO0FBQUMsU0FBT0EsR0FBRyxDQUFDLENBQUQsQ0FBSCxLQUFTLEdBQVQsR0FBYUEsR0FBRyxDQUFDbUksS0FBSixDQUFVLENBQVYsQ0FBYixHQUEwQm5JLEdBQWpDO0FBQXNDOztBQUFBLFNBQVNOLFdBQVQsQ0FBcUI7QUFBQzJELE1BQUQ7QUFBTXJELEtBQU47QUFBVTFELE9BQVY7QUFBZ0JvRztBQUFoQixDQUFyQixFQUE4QztBQUFDO0FBQ2hILFFBQU0wRixNQUFNLEdBQUMsQ0FBQyxhQUFELEVBQWUsU0FBZixFQUF5QixPQUFLOUwsS0FBOUIsQ0FBYjtBQUFrRCxNQUFJK0wsWUFBWSxHQUFDLEVBQWpCOztBQUFvQixNQUFHM0YsT0FBSCxFQUFXO0FBQUMwRixVQUFNLENBQUM1SixJQUFQLENBQVksT0FBS2tFLE9BQWpCO0FBQTJCOztBQUFBLE1BQUcwRixNQUFNLENBQUN4RyxNQUFWLEVBQWlCO0FBQUN5RyxnQkFBWSxHQUFDLE1BQUlELE1BQU0sQ0FBQ3RGLElBQVAsQ0FBWSxHQUFaLENBQWpCO0FBQW1DOztBQUFBLFNBQU8sR0FBRU8sSUFBSyxHQUFFNkUsWUFBWSxDQUFDbEksR0FBRCxDQUFNLEdBQUVxSSxZQUFhLEVBQWpEO0FBQW9EOztBQUFBLFNBQVN6SSxZQUFULENBQXNCO0FBQUN5RCxNQUFEO0FBQU1yRCxLQUFOO0FBQVUxRDtBQUFWLENBQXRCLEVBQXVDO0FBQUMsU0FBTyxHQUFFK0csSUFBSyxHQUFFNkUsWUFBWSxDQUFDbEksR0FBRCxDQUFNLFlBQVcxRCxLQUFNLEVBQW5EO0FBQXNEOztBQUFBLFNBQVNxRCxnQkFBVCxDQUEwQjtBQUFDMEQsTUFBRDtBQUFNckQsS0FBTjtBQUFVMUQsT0FBVjtBQUFnQm9HO0FBQWhCLENBQTFCLEVBQW1EO0FBQUM7QUFDeFcsUUFBTTBGLE1BQU0sR0FBQyxDQUFDLFFBQUQsRUFBVSxTQUFWLEVBQW9CLE9BQUs5TCxLQUF6QixFQUErQixRQUFNb0csT0FBTyxJQUFFLE1BQWYsQ0FBL0IsQ0FBYjtBQUFvRSxNQUFJMkYsWUFBWSxHQUFDRCxNQUFNLENBQUN0RixJQUFQLENBQVksR0FBWixJQUFpQixHQUFsQztBQUFzQyxTQUFPLEdBQUVPLElBQUssR0FBRWdGLFlBQWEsR0FBRUgsWUFBWSxDQUFDbEksR0FBRCxDQUFNLEVBQWpEO0FBQW9EOztBQUFBLFNBQVNILGFBQVQsQ0FBdUI7QUFBQ3dELE1BQUQ7QUFBTXJELEtBQU47QUFBVTFELE9BQVY7QUFBZ0JvRztBQUFoQixDQUF2QixFQUFnRDtBQUFDLFlBQXVDO0FBQUMsVUFBTTRGLGFBQWEsR0FBQyxFQUFwQixDQUFELENBQXdCOztBQUM5USxRQUFHLENBQUN0SSxHQUFKLEVBQVFzSSxhQUFhLENBQUM5SixJQUFkLENBQW1CLEtBQW5CO0FBQTBCLFFBQUcsQ0FBQ2xDLEtBQUosRUFBVWdNLGFBQWEsQ0FBQzlKLElBQWQsQ0FBbUIsT0FBbkI7O0FBQTRCLFFBQUc4SixhQUFhLENBQUMxRyxNQUFkLEdBQXFCLENBQXhCLEVBQTBCO0FBQUMsWUFBTSxJQUFJMEIsS0FBSixDQUFXLG9DQUFtQ2dGLGFBQWEsQ0FBQ3hGLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsZ0dBQStGa0MsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFBQ2pGLFdBQUQ7QUFBSzFELGFBQUw7QUFBV29HO0FBQVgsT0FBZixDQUFvQyxFQUExTSxDQUFOO0FBQW9OOztBQUFBLFFBQUcxQyxHQUFHLENBQUM0RCxVQUFKLENBQWUsSUFBZixDQUFILEVBQXdCO0FBQUMsWUFBTSxJQUFJTixLQUFKLENBQVcsd0JBQXVCdEQsR0FBSSwwR0FBdEMsQ0FBTjtBQUF3Sjs7QUFBQSxRQUFHLENBQUNBLEdBQUcsQ0FBQzRELFVBQUosQ0FBZSxHQUFmLENBQUQsSUFBc0IvQyxhQUF6QixFQUF1QztBQUFDLFVBQUkwSCxTQUFKOztBQUFjLFVBQUc7QUFBQ0EsaUJBQVMsR0FBQyxJQUFJQyxHQUFKLENBQVF4SSxHQUFSLENBQVY7QUFBd0IsT0FBNUIsQ0FBNEIsT0FBTXlJLEdBQU4sRUFBVTtBQUFDbEQsZUFBTyxDQUFDbUQsS0FBUixDQUFjRCxHQUFkO0FBQW1CLGNBQU0sSUFBSW5GLEtBQUosQ0FBVyx3QkFBdUJ0RCxHQUFJLGlJQUF0QyxDQUFOO0FBQStLOztBQUFBLFVBQUcsQ0FBQ2EsYUFBYSxDQUFDd0UsUUFBZCxDQUF1QmtELFNBQVMsQ0FBQ0ksUUFBakMsQ0FBSixFQUErQztBQUFDLGNBQU0sSUFBSXJGLEtBQUosQ0FBVyxxQkFBb0J0RCxHQUFJLGtDQUFpQ3VJLFNBQVMsQ0FBQ0ksUUFBUywrREFBN0UsR0FBNkksOEVBQXZKLENBQU47QUFBNk87QUFBQztBQUFDOztBQUFBLFNBQU8sR0FBRXRGLElBQUssUUFBT3VGLGtCQUFrQixDQUFDNUksR0FBRCxDQUFNLE1BQUsxRCxLQUFNLE1BQUtvRyxPQUFPLElBQUUsRUFBRyxFQUF6RTtBQUE0RSxDOzs7Ozs7Ozs7OztBQy9Dcm1DOztBQUFBL0Qsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLDBCQUFBLEdBQTJCQSwyQkFBQSxHQUE0QixLQUFLLENBQTVEOztBQUE4RCxNQUFNa0ssbUJBQW1CLEdBQUMsT0FBT0MsSUFBUCxLQUFjLFdBQWQsSUFBMkJBLElBQUksQ0FBQ0QsbUJBQWhDLElBQXFELFVBQVNFLEVBQVQsRUFBWTtBQUFDLE1BQUlDLEtBQUssR0FBQ0MsSUFBSSxDQUFDQyxHQUFMLEVBQVY7QUFBcUIsU0FBT0MsVUFBVSxDQUFDLFlBQVU7QUFBQ0osTUFBRSxDQUFDO0FBQUNLLGdCQUFVLEVBQUMsS0FBWjtBQUFrQkMsbUJBQWEsRUFBQyxZQUFVO0FBQUMsZUFBTzdMLElBQUksQ0FBQzhMLEdBQUwsQ0FBUyxDQUFULEVBQVcsTUFBSUwsSUFBSSxDQUFDQyxHQUFMLEtBQVdGLEtBQWYsQ0FBWCxDQUFQO0FBQTBDO0FBQXJGLEtBQUQsQ0FBRjtBQUE0RixHQUF4RyxFQUF5RyxDQUF6RyxDQUFqQjtBQUE4SCxDQUEvTzs7QUFBZ1BySywyQkFBQSxHQUE0QmtLLG1CQUE1Qjs7QUFBZ0QsTUFBTVUsa0JBQWtCLEdBQUMsT0FBT1QsSUFBUCxLQUFjLFdBQWQsSUFBMkJBLElBQUksQ0FBQ1Msa0JBQWhDLElBQW9ELFVBQVNDLEVBQVQsRUFBWTtBQUFDLFNBQU9DLFlBQVksQ0FBQ0QsRUFBRCxDQUFuQjtBQUF5QixDQUFuSDs7QUFBb0g3SywwQkFBQSxHQUEyQjRLLGtCQUEzQixDOzs7Ozs7Ozs7OztBQ0ExZTs7QUFBQTVLLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSx1QkFBQSxHQUF3QmtILGVBQXhCOztBQUF3QyxJQUFJOUcsTUFBTSxHQUFDTCxtQkFBTyxDQUFDLG9CQUFELENBQWxCOztBQUE0QixJQUFJZ0wsb0JBQW9CLEdBQUNoTCxtQkFBTyxDQUFDLHlGQUFELENBQWhDOztBQUE0RCxNQUFNaUwsdUJBQXVCLEdBQUMsT0FBT0Msb0JBQVAsS0FBOEIsV0FBNUQ7O0FBQXdFLFNBQVMvRCxlQUFULENBQXlCO0FBQUNDLFlBQUQ7QUFBWUM7QUFBWixDQUF6QixFQUErQztBQUFDLFFBQU04RCxVQUFVLEdBQUM5RCxRQUFRLElBQUUsQ0FBQzRELHVCQUE1QjtBQUFvRCxRQUFNRyxTQUFTLEdBQUMsQ0FBQyxHQUFFL0ssTUFBTSxDQUFDakQsTUFBVixHQUFoQjtBQUFvQyxRQUFLLENBQUNpTyxPQUFELEVBQVNDLFVBQVQsSUFBcUIsQ0FBQyxHQUFFakwsTUFBTSxDQUFDa0wsUUFBVixFQUFvQixLQUFwQixDQUExQjtBQUFxRCxRQUFNdEUsTUFBTSxHQUFDLENBQUMsR0FBRTVHLE1BQU0sQ0FBQ21MLFdBQVYsRUFBdUJDLEVBQUUsSUFBRTtBQUFDLFFBQUdMLFNBQVMsQ0FBQ2pNLE9BQWIsRUFBcUI7QUFBQ2lNLGVBQVMsQ0FBQ2pNLE9BQVY7QUFBb0JpTSxlQUFTLENBQUNqTSxPQUFWLEdBQWtCMEIsU0FBbEI7QUFBNkI7O0FBQUEsUUFBR3NLLFVBQVUsSUFBRUUsT0FBZixFQUF1Qjs7QUFBTyxRQUFHSSxFQUFFLElBQUVBLEVBQUUsQ0FBQ0MsT0FBVixFQUFrQjtBQUFDTixlQUFTLENBQUNqTSxPQUFWLEdBQWtCd00sT0FBTyxDQUFDRixFQUFELEVBQUluRSxTQUFTLElBQUVBLFNBQVMsSUFBRWdFLFVBQVUsQ0FBQ2hFLFNBQUQsQ0FBcEMsRUFBZ0Q7QUFBQ0Y7QUFBRCxPQUFoRCxDQUF6QjtBQUF3RjtBQUFDLEdBQTdPLEVBQThPLENBQUMrRCxVQUFELEVBQVkvRCxVQUFaLEVBQXVCaUUsT0FBdkIsQ0FBOU8sQ0FBYjtBQUE0UixHQUFDLEdBQUVoTCxNQUFNLENBQUN1TCxTQUFWLEVBQXFCLE1BQUk7QUFBQyxRQUFHLENBQUNYLHVCQUFKLEVBQTRCO0FBQUMsVUFBRyxDQUFDSSxPQUFKLEVBQVk7QUFBQyxjQUFNUSxZQUFZLEdBQUMsQ0FBQyxHQUFFYixvQkFBb0IsQ0FBQ2IsbUJBQXhCLEVBQTZDLE1BQUltQixVQUFVLENBQUMsSUFBRCxDQUEzRCxDQUFuQjtBQUFzRixlQUFNLE1BQUksQ0FBQyxHQUFFTixvQkFBb0IsQ0FBQ0gsa0JBQXhCLEVBQTRDZ0IsWUFBNUMsQ0FBVjtBQUFxRTtBQUFDO0FBQUMsR0FBak8sRUFBa08sQ0FBQ1IsT0FBRCxDQUFsTztBQUE2TyxTQUFNLENBQUNwRSxNQUFELEVBQVFvRSxPQUFSLENBQU47QUFBd0I7O0FBQUEsU0FBU00sT0FBVCxDQUFpQjFDLE9BQWpCLEVBQXlCNkMsUUFBekIsRUFBa0NDLE9BQWxDLEVBQTBDO0FBQUMsUUFBSztBQUFDakIsTUFBRDtBQUFJa0IsWUFBSjtBQUFhQztBQUFiLE1BQXVCQyxjQUFjLENBQUNILE9BQUQsQ0FBMUM7QUFBb0RFLFVBQVEsQ0FBQ0UsR0FBVCxDQUFhbEQsT0FBYixFQUFxQjZDLFFBQXJCO0FBQStCRSxVQUFRLENBQUNMLE9BQVQsQ0FBaUIxQyxPQUFqQjtBQUEwQixTQUFPLFNBQVNtQyxTQUFULEdBQW9CO0FBQUNhLFlBQVEsQ0FBQ0csTUFBVCxDQUFnQm5ELE9BQWhCO0FBQXlCK0MsWUFBUSxDQUFDWixTQUFULENBQW1CbkMsT0FBbkIsRUFBMUIsQ0FBc0Q7O0FBQ3ByQyxRQUFHZ0QsUUFBUSxDQUFDSSxJQUFULEtBQWdCLENBQW5CLEVBQXFCO0FBQUNMLGNBQVEsQ0FBQ00sVUFBVDtBQUFzQkMsZUFBUyxDQUFDSCxNQUFWLENBQWlCdEIsRUFBakI7QUFBc0I7QUFBQyxHQURnaUM7QUFDOWhDOztBQUFBLE1BQU15QixTQUFTLEdBQUMsSUFBSXhMLEdBQUosRUFBaEI7O0FBQTBCLFNBQVNtTCxjQUFULENBQXdCSCxPQUF4QixFQUFnQztBQUFDLFFBQU1qQixFQUFFLEdBQUNpQixPQUFPLENBQUMzRSxVQUFSLElBQW9CLEVBQTdCO0FBQWdDLE1BQUlvRixRQUFRLEdBQUNELFNBQVMsQ0FBQzdILEdBQVYsQ0FBY29HLEVBQWQsQ0FBYjs7QUFBK0IsTUFBRzBCLFFBQUgsRUFBWTtBQUFDLFdBQU9BLFFBQVA7QUFBaUI7O0FBQUEsUUFBTVAsUUFBUSxHQUFDLElBQUlsTCxHQUFKLEVBQWY7QUFBeUIsUUFBTWlMLFFBQVEsR0FBQyxJQUFJZCxvQkFBSixDQUF5QnVCLE9BQU8sSUFBRTtBQUFDQSxXQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLEtBQUssSUFBRTtBQUFDLFlBQU1iLFFBQVEsR0FBQ0csUUFBUSxDQUFDdkgsR0FBVCxDQUFhaUksS0FBSyxDQUFDQyxNQUFuQixDQUFmO0FBQTBDLFlBQU10RixTQUFTLEdBQUNxRixLQUFLLENBQUNFLGNBQU4sSUFBc0JGLEtBQUssQ0FBQ0csaUJBQU4sR0FBd0IsQ0FBOUQ7O0FBQWdFLFVBQUdoQixRQUFRLElBQUV4RSxTQUFiLEVBQXVCO0FBQUN3RSxnQkFBUSxDQUFDeEUsU0FBRCxDQUFSO0FBQXFCO0FBQUMsS0FBaEw7QUFBbUwsR0FBdE4sRUFBdU55RSxPQUF2TixDQUFmO0FBQStPUSxXQUFTLENBQUNKLEdBQVYsQ0FBY3JCLEVBQWQsRUFBaUIwQixRQUFRLEdBQUM7QUFBQzFCLE1BQUQ7QUFBSWtCLFlBQUo7QUFBYUM7QUFBYixHQUExQjtBQUFrRCxTQUFPTyxRQUFQO0FBQWlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEeGlCO0FBRUE7QUFDTyxNQUFNTyxPQUFPLEdBQUdDLGtFQUFnQixDQUNyQyxjQURxQyxFQUVyQyxPQUFPQyxHQUFQLEVBQVk7QUFBRUM7QUFBRixDQUFaLEtBQTZCO0FBQzNCLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxnREFBQSxDQUFVLCtDQUFWLEVBQTJEO0FBQzNFQyxXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxVQUFTSixRQUFRLEdBQUdLLElBQVgsQ0FBZ0JDLFdBQVk7QUFEOUM7QUFEa0UsR0FBM0QsQ0FBbEI7QUFLQSxTQUFPTCxHQUFHLENBQUNNLElBQVg7QUFDRCxDQVRvQyxDQUFoQztBQVlBLE1BQU1DLGlCQUFpQixHQUFHVixrRUFBZ0IsQ0FDL0Msd0JBRCtDLEVBRS9DLE9BQU9sQyxFQUFQLEVBQVc7QUFBRW9DO0FBQUYsQ0FBWCxLQUE0QjtBQUMxQixRQUFNRSxrREFBQSxDQUNKLHdEQUF3RHRDLEVBRHBELEVBRUosRUFGSSxFQUdKO0FBQ0V1QyxXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxVQUFTSixRQUFRLEdBQUdLLElBQVgsQ0FBZ0JDLFdBQVk7QUFEOUM7QUFEWCxHQUhJLENBQU47QUFTQSxRQUFNTCxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSwrQ0FBVixFQUEyRDtBQUMzRUMsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0osUUFBUSxHQUFHSyxJQUFYLENBQWdCQyxXQUFZO0FBRDlDO0FBRGtFLEdBQTNELENBQWxCO0FBS0EsU0FBT0wsR0FBRyxDQUFDTSxJQUFYO0FBQ0QsQ0FsQjhDLENBQTFDO0FBb0JBLE1BQU1FLGlCQUFpQixHQUFHWCxrRUFBZ0IsQ0FDL0Msd0JBRCtDLEVBRS9DLE9BQU9sQyxFQUFQLEVBQVc7QUFBRW9DO0FBQUYsQ0FBWCxLQUE0QjtBQUMxQixRQUFNRSxrREFBQSxDQUNKLHdEQUF3RHRDLEVBRHBELEVBRUosRUFGSSxFQUdKO0FBQ0V1QyxXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxVQUFTSixRQUFRLEdBQUdLLElBQVgsQ0FBZ0JDLFdBQVk7QUFEOUM7QUFEWCxHQUhJLENBQU47QUFVQSxRQUFNTCxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSwrQ0FBVixFQUEyRDtBQUMzRUMsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0osUUFBUSxHQUFHSyxJQUFYLENBQWdCQyxXQUFZO0FBRDlDO0FBRGtFLEdBQTNELENBQWxCO0FBS0EsU0FBT0wsR0FBRyxDQUFDTSxJQUFYO0FBQ0QsQ0FuQjhDLENBQTFDO0FBcUJBLE1BQU1HLGNBQWMsR0FBR1osa0VBQWdCLENBQzVDLG9CQUQ0QyxFQUU1QyxPQUFPbEMsRUFBUCxFQUFXO0FBQUVvQztBQUFGLENBQVgsS0FBNEI7QUFDMUIsUUFBTUUsbURBQUEsQ0FBYSw4Q0FBOEN0QyxFQUEzRCxFQUErRDtBQUNuRXVDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNKLFFBQVEsR0FBR0ssSUFBWCxDQUFnQkMsV0FBWTtBQUQ5QztBQUQwRCxHQUEvRCxDQUFOO0FBS0EsUUFBTUwsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQVUsK0NBQVYsRUFBMkQ7QUFDM0VDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNKLFFBQVEsR0FBR0ssSUFBWCxDQUFnQkMsV0FBWTtBQUQ5QztBQURrRSxHQUEzRCxDQUFsQjtBQUtBLFNBQU9MLEdBQUcsQ0FBQ00sSUFBWDtBQUNELENBZDJDLENBQXZDO0FBZ0JBLE1BQU1JLGFBQWEsR0FBR2Isa0VBQWdCLENBQzNDLGdCQUQyQyxFQUUzQyxPQUFPYyxPQUFQLEVBQWdCO0FBQUVaO0FBQUYsQ0FBaEIsS0FBaUM7QUFDL0I7QUFDQSxRQUFNYSxRQUFRLEdBQUcsSUFBSUMsUUFBSixFQUFqQjs7QUFDQSxPQUFLLElBQUk5RSxHQUFULElBQWdCNEUsT0FBaEIsRUFBeUI7QUFDdkJDLFlBQVEsQ0FBQ0UsTUFBVCxDQUFnQi9FLEdBQWhCLEVBQXFCNEUsT0FBTyxDQUFDNUUsR0FBRCxDQUE1QjtBQUNEOztBQUNELFFBQU1rRSxpREFBQSxDQUNKLDhDQURJLEVBRUpXLFFBRkksRUFHSjtBQUNFVixXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxVQUFTSixRQUFRLEdBQUdLLElBQVgsQ0FBZ0JDLFdBQVk7QUFEOUM7QUFEWCxHQUhJLENBQU47QUFTQSxRQUFNTCxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSwrQ0FBVixFQUEyRDtBQUMzRUMsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0osUUFBUSxHQUFHSyxJQUFYLENBQWdCQyxXQUFZO0FBRDlDO0FBRGtFLEdBQTNELENBQWxCO0FBS0EsU0FBT0wsR0FBRyxDQUFDTSxJQUFYO0FBQ0QsQ0F2QjBDLENBQXRDO0FBMkJBLE1BQU1TLFNBQVMsR0FBR2xCLGtFQUFnQixDQUN2QyxpQkFEdUMsRUFFdkMsT0FBT2MsT0FBUCxFQUFnQjtBQUFFWjtBQUFGLENBQWhCLEtBQWlDO0FBQy9CLFFBQU1FLGlEQUFBLENBQ0osMkNBREksa0NBRUNVLE9BRkQ7QUFFVWxPLFlBQVEsRUFBRTtBQUZwQixNQUdKO0FBQ0V5TixXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxVQUFTSixRQUFRLEdBQUdLLElBQVgsQ0FBZ0JDLFdBQVk7QUFEOUM7QUFEWCxHQUhJLENBQU47QUFTQSxRQUFNTCxHQUFHLEdBQUcsTUFBTUMsZ0RBQUEsQ0FBVSwrQ0FBVixFQUEyRDtBQUMzRUMsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0osUUFBUSxHQUFHSyxJQUFYLENBQWdCQyxXQUFZO0FBRDlDO0FBRGtFLEdBQTNELENBQWxCO0FBS0EsU0FBT0wsR0FBRyxDQUFDTSxJQUFYO0FBQ0QsQ0FsQnNDLENBQWxDO0FBb0JBLE1BQU05TixnQkFBZ0IsR0FBR3FOLGtFQUFnQixDQUM5Qyx1QkFEOEMsRUFFOUMsT0FBT2MsT0FBUCxFQUFnQjtBQUFFWjtBQUFGLENBQWhCLEtBQWlDO0FBQy9CO0FBQ0EsUUFBTWEsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7O0FBQ0EsT0FBSyxJQUFJOUUsR0FBVCxJQUFnQjRFLE9BQWhCLEVBQXlCO0FBQ3ZCQyxZQUFRLENBQUNFLE1BQVQsQ0FBZ0IvRSxHQUFoQixFQUFxQjRFLE9BQU8sQ0FBQzVFLEdBQUQsQ0FBNUI7QUFDRDs7QUFDRCxRQUFNa0UsaURBQUEsQ0FDSixpREFESSxFQUVKVyxRQUZJLEVBR0o7QUFDRVYsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0osUUFBUSxHQUFHSyxJQUFYLENBQWdCQyxXQUFZO0FBRDlDO0FBRFgsR0FISSxDQUFOO0FBU0EsUUFBTUwsR0FBRyxHQUFHLE1BQU1DLGdEQUFBLENBQVUsK0NBQVYsRUFBMkQ7QUFDM0VDLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNKLFFBQVEsR0FBR0ssSUFBWCxDQUFnQkMsV0FBWTtBQUQ5QztBQURrRSxHQUEzRCxDQUFsQjtBQUtBLFNBQU9MLEdBQUcsQ0FBQ00sSUFBWDtBQUNELENBdkI2QyxDQUF6QztBQTJCUCxNQUFNVSxTQUFTLEdBQUdDLDZEQUFXLENBQUM7QUFDNUJDLE1BQUksRUFBRSxNQURzQjtBQUU1QkMsY0FBWSxFQUFFO0FBQ1pDLFFBQUksRUFBRTtBQURNLEdBRmM7QUFLNUI7QUFDQUMsZUFBYSxFQUFHQyxPQUFELElBQWE7QUFDMUJBLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQmhCLGlCQUFpQixDQUFDaUIsU0FBbEMsRUFBNkMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzlEaEksYUFBTyxDQUFDaUksR0FBUixDQUFZRCxNQUFNLENBQUNFLE9BQW5CO0FBQ0FILFdBQUssQ0FBQ0wsSUFBTixHQUFhTSxNQUFNLENBQUNFLE9BQXBCO0FBQ0QsS0FIRDtBQUlBTixXQUFPLENBQUNDLE9BQVIsQ0FBZ0JmLGlCQUFpQixDQUFDZ0IsU0FBbEMsRUFBNkMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzlERCxXQUFLLENBQUNMLElBQU4sR0FBYU0sTUFBTSxDQUFDRSxPQUFwQjtBQUNELEtBRkQ7QUFHQU4sV0FBTyxDQUFDQyxPQUFSLENBQWdCZCxjQUFjLENBQUNlLFNBQS9CLEVBQTBDLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUMzREQsV0FBSyxDQUFDTCxJQUFOLEdBQWFNLE1BQU0sQ0FBQ0UsT0FBcEI7QUFDRCxLQUZEO0FBR0FOLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQlIsU0FBUyxDQUFDUyxTQUExQixFQUFxQyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDdEQsWUFBTUcsVUFBVSxHQUFHSixLQUFLLENBQUNMLElBQU4sQ0FBVzNLLElBQVgsQ0FDaEJxTCxJQUFELElBQVVBLElBQUksQ0FBQ25FLEVBQUwsS0FBWStELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlakUsRUFEcEIsQ0FBbkI7O0FBR0EsVUFBSWtFLFVBQUosRUFBZ0I7QUFDZEEsa0JBQVUsQ0FBQ3BQLFFBQVg7QUFDRCxPQUZELE1BRU87QUFDTGdQLGFBQUssQ0FBQ0wsSUFBTixHQUFhTSxNQUFNLENBQUNFLE9BQXBCO0FBQ0Q7QUFDRixLQVREO0FBVUFOLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQjNCLE9BQU8sQ0FBQzRCLFNBQXhCLEVBQW1DLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNwREQsV0FBSyxDQUFDTCxJQUFOLEdBQWFNLE1BQU0sQ0FBQ0UsT0FBcEI7QUFDRCxLQUZEO0FBR0FOLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQi9PLGdCQUFnQixDQUFDZ1AsU0FBakMsRUFBNEMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQzdERCxXQUFLLENBQUNMLElBQU4sR0FBYU0sTUFBTSxDQUFDRSxPQUFwQjtBQUNELEtBRkQ7QUFHRDtBQWpDMkIsQ0FBRCxDQUE3QjtBQW9DQSwrREFBZVosU0FBUyxDQUFDZSxPQUF6QixFOzs7Ozs7Ozs7O0FDdExBLDJHQUErQyIsImZpbGUiOiJjdXNjb21wb25lbnRzX2Rlc2lnbl9EaXNwbGF5X2pzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZXhwb3J0Q29tcG9uZW50QXNKUEVHLCBleHBvcnRDb21wb25lbnRBc1BERiwgZXhwb3J0Q29tcG9uZW50QXNQTkcgfSBmcm9tICdyZWFjdC1jb21wb25lbnQtZXhwb3J0LWltYWdlJztcclxuaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgYWRkQ3VzdG9tUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9yZWR1eC9jYXJ0LnNsaWNlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG4vLyBuZXdcclxuZnVuY3Rpb24gRGlzcGxheShwcm9wcykge1xyXG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgcmVmPXtjb21wb25lbnRSZWZ9PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL3RzaGlydC5wbmcpXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiNzUlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiODB2aFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmdUb3A6JzE3MHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuZGlzcGxheS50ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGlzcGxheS50ZXh0U2l6ZSArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpc3BsYXkudXBwZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6JzE1MHB4JywgcGFkZGluZ1JpZ2h0OicxNTBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlICBzcmM9e3Byb3BzLmRpc3BsYXkudXBsb2FkSW1hZ2V9IGFsdD1cInVwbG9hZEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuZGlzcGxheS50ZXh0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogcHJvcHMuZGlzcGxheS50ZXh0U2l6ZSArIFwicHhcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRpc3BsYXkubG93ZXJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gICBzdHlsZT17e1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDcwMCxcclxuICAgICAgICAgICAgbWFyZ2luOiAyLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAyICxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxyXG4gICAgICAgICAgICBib3JkZXI6IDIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgIH19IG9uQ2xpY2s9e2FzeW5jICgpID0+e1xyXG4gICAgICAgIFxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmFuZG9tU3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XHJcbiAgICAgIGh0bWwyY2FudmFzKGNvbXBvbmVudFJlZi5jdXJyZW50LFxyXG4gICAgICAgIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVzZUNPUlM6IHRydWUsXHJcbiAgICAgICAgICBhbGxvd1RhaW50OiB0cnVlLFxyXG4gICAgICAgICAgaW1hZ2VUaW1lb3V0OiAxMDAsXHJcbiAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICApLnRoZW4oZnVuY3Rpb24gKGNhbnZhcykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjYW52YXNcIik7XHJcbiAgICAgICAgICBjYW52YXMudG9CbG9iKGZ1bmN0aW9uKGJsb2IpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goYWRkQ3VzdG9tUHJvZHVjdCh7XHJcbiAgICAgICAgICAgICBxdWFudGl0eTogMSwgXHJcbiAgICAgICAgICAgICBcInByaWNlXCI6IDM1MCxcclxuICAgICAgICAgICAgIFwiaW1hZ2VcIjogYmxvYiwgXHJcbiAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiVC1zaGlydFwiLCBcclxuICAgICAgICAgICAgIFwicHJvZHVjdFwiOiBcIkN1c3RvbSBULXNoaXJ0XCIsXHJcbiAgICAgICAgICAgICBcImlkXCI6IHJhbmRvbVN0cmluZyxcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgfSwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgICAgICAgIGFsZXJ0KFwiQ3VzdG9tIFQtc2hpcnQgYWRkZWQgdG8gY2FydFwiKVxyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2NhcnQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgIH19PiBPcmRlciBOb3c8L2J1dHRvbj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXk7XHJcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9SW1hZ2U7dmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO3ZhciBfdG9CYXNlPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NFwiKTt2YXIgX2ltYWdlQ29uZmlnPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO3ZhciBfdXNlSW50ZXJzZWN0aW9uPXJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXs7Z2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRD10cnVlO31jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUz1bJ2xhenknLCdlYWdlcicsdW5kZWZpbmVkXTtjb25zdCBsb2FkZXJzPW5ldyBNYXAoW1snaW1naXgnLGltZ2l4TG9hZGVyXSxbJ2Nsb3VkaW5hcnknLGNsb3VkaW5hcnlMb2FkZXJdLFsnYWthbWFpJyxha2FtYWlMb2FkZXJdLFsnZGVmYXVsdCcsZGVmYXVsdExvYWRlcl1dKTtjb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTPVsnZmlsbCcsJ2ZpeGVkJywnaW50cmluc2ljJywncmVzcG9uc2l2ZScsdW5kZWZpbmVkXTtmdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKXtyZXR1cm4gc3JjLmRlZmF1bHQhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYyl7cmV0dXJuIHNyYy5zcmMhPT11bmRlZmluZWQ7fWZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYyl7cmV0dXJuIHR5cGVvZiBzcmM9PT0nb2JqZWN0JyYmKGlzU3RhdGljUmVxdWlyZShzcmMpfHxpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTt9Y29uc3R7ZGV2aWNlU2l6ZXM6Y29uZmlnRGV2aWNlU2l6ZXMsaW1hZ2VTaXplczpjb25maWdJbWFnZVNpemVzLGxvYWRlcjpjb25maWdMb2FkZXIscGF0aDpjb25maWdQYXRoLGRvbWFpbnM6Y29uZmlnRG9tYWluc309cHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFN8fF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7Ly8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcz1bLi4uY29uZmlnRGV2aWNlU2l6ZXMsLi4uY29uZmlnSW1hZ2VTaXplc107Y29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSxiKT0+YS1iKTthbGxTaXplcy5zb3J0KChhLGIpPT5hLWIpO2Z1bmN0aW9uIGdldFdpZHRocyh3aWR0aCxsYXlvdXQsc2l6ZXMpe2lmKHNpemVzJiYobGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpKXsvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuY29uc3Qgdmlld3BvcnRXaWR0aFJlPS8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO2NvbnN0IHBlcmNlbnRTaXplcz1bXTtmb3IobGV0IG1hdGNoO21hdGNoPXZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTttYXRjaCl7cGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTt9aWYocGVyY2VudFNpemVzLmxlbmd0aCl7Y29uc3Qgc21hbGxlc3RSYXRpbz1NYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpKjAuMDE7cmV0dXJue3dpZHRoczphbGxTaXplcy5maWx0ZXIocz0+cz49Y29uZmlnRGV2aWNlU2l6ZXNbMF0qc21hbGxlc3RSYXRpbyksa2luZDondyd9O31yZXR1cm57d2lkdGhzOmFsbFNpemVzLGtpbmQ6J3cnfTt9aWYodHlwZW9mIHdpZHRoIT09J251bWJlcid8fGxheW91dD09PSdmaWxsJ3x8bGF5b3V0PT09J3Jlc3BvbnNpdmUnKXtyZXR1cm57d2lkdGhzOmNvbmZpZ0RldmljZVNpemVzLGtpbmQ6J3cnfTt9Y29uc3Qgd2lkdGhzPVsuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4vLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbi8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2Vcbi8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4vLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4vLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbi8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcblt3aWR0aCx3aWR0aCoyLyosIHdpZHRoICogMyovXS5tYXAodz0+YWxsU2l6ZXMuZmluZChwPT5wPj13KXx8YWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoLTFdKSldO3JldHVybnt3aWR0aHMsa2luZDoneCd9O31mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoLHF1YWxpdHksc2l6ZXMsbG9hZGVyfSl7aWYodW5vcHRpbWl6ZWQpe3JldHVybntzcmMsc3JjU2V0OnVuZGVmaW5lZCxzaXplczp1bmRlZmluZWR9O31jb25zdHt3aWR0aHMsa2luZH09Z2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyk7Y29uc3QgbGFzdD13aWR0aHMubGVuZ3RoLTE7cmV0dXJue3NpemVzOiFzaXplcyYma2luZD09PSd3Jz8nMTAwdncnOnNpemVzLHNyY1NldDp3aWR0aHMubWFwKCh3LGkpPT5gJHtsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOnd9KX0gJHtraW5kPT09J3cnP3c6aSsxfSR7a2luZH1gKS5qb2luKCcsICcpLC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4vLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4vLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4vLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4vLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbnNyYzpsb2FkZXIoe3NyYyxxdWFsaXR5LHdpZHRoOndpZHRoc1tsYXN0XX0pfTt9ZnVuY3Rpb24gZ2V0SW50KHgpe2lmKHR5cGVvZiB4PT09J251bWJlcicpe3JldHVybiB4O31pZih0eXBlb2YgeD09PSdzdHJpbmcnKXtyZXR1cm4gcGFyc2VJbnQoeCwxMCk7fXJldHVybiB1bmRlZmluZWQ7fWZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcyl7Y29uc3QgbG9hZD1sb2FkZXJzLmdldChjb25maWdMb2FkZXIpO2lmKGxvYWQpe3JldHVybiBsb2FkKCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm9vdDpjb25maWdQYXRofSxsb2FkZXJQcm9wcykpO310aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7fS8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiByZW1vdmVQbGFjZWhvbGRlcihpbWcscGxhY2Vob2xkZXIpe2lmKHBsYWNlaG9sZGVyPT09J2JsdXInJiZpbWcpe2NvbnN0IGhhbmRsZUxvYWQ9KCk9PntpZighaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKXtjb25zdCBwPSdkZWNvZGUnaW4gaW1nP2ltZy5kZWNvZGUoKTpQcm9taXNlLnJlc29sdmUoKTtwLmNhdGNoKCgpPT57fSkudGhlbigoKT0+e2ltZy5zdHlsZS5maWx0ZXI9J25vbmUnO2ltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZT0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZT0nbm9uZSc7fSk7fX07aWYoaW1nLmNvbXBsZXRlKXsvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbi8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3Jcbi8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG5oYW5kbGVMb2FkKCk7fWVsc2V7aW1nLm9ubG9hZD1oYW5kbGVMb2FkO319fWZ1bmN0aW9uIEltYWdlKF9yZWYpe2xldHtzcmMsc2l6ZXMsdW5vcHRpbWl6ZWQ9ZmFsc2UscHJpb3JpdHk9ZmFsc2UsbG9hZGluZyxjbGFzc05hbWUscXVhbGl0eSx3aWR0aCxoZWlnaHQsb2JqZWN0Rml0LG9iamVjdFBvc2l0aW9uLGxvYWRlcj1kZWZhdWx0SW1hZ2VMb2FkZXIscGxhY2Vob2xkZXI9J2VtcHR5JyxibHVyRGF0YVVSTH09X3JlZixhbGw9KDAsX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsW1wic3JjXCIsXCJzaXplc1wiLFwidW5vcHRpbWl6ZWRcIixcInByaW9yaXR5XCIsXCJsb2FkaW5nXCIsXCJjbGFzc05hbWVcIixcInF1YWxpdHlcIixcIndpZHRoXCIsXCJoZWlnaHRcIixcIm9iamVjdEZpdFwiLFwib2JqZWN0UG9zaXRpb25cIixcImxvYWRlclwiLFwicGxhY2Vob2xkZXJcIixcImJsdXJEYXRhVVJMXCJdKTtsZXQgcmVzdD1hbGw7bGV0IGxheW91dD1zaXplcz8ncmVzcG9uc2l2ZSc6J2ludHJpbnNpYyc7aWYoJ2xheW91dCdpbiByZXN0KXsvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuaWYocmVzdC5sYXlvdXQpbGF5b3V0PXJlc3QubGF5b3V0Oy8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbmRlbGV0ZSByZXN0WydsYXlvdXQnXTt9bGV0IHN0YXRpY1NyYz0nJztpZihpc1N0YXRpY0ltcG9ydChzcmMpKXtjb25zdCBzdGF0aWNJbWFnZURhdGE9aXNTdGF0aWNSZXF1aXJlKHNyYyk/c3JjLmRlZmF1bHQ6c3JjO2lmKCFzdGF0aWNJbWFnZURhdGEuc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fWJsdXJEYXRhVVJMPWJsdXJEYXRhVVJMfHxzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7c3RhdGljU3JjPXN0YXRpY0ltYWdlRGF0YS5zcmM7aWYoIWxheW91dHx8bGF5b3V0IT09J2ZpbGwnKXtoZWlnaHQ9aGVpZ2h0fHxzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O3dpZHRoPXdpZHRofHxzdGF0aWNJbWFnZURhdGEud2lkdGg7aWYoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHR8fCFzdGF0aWNJbWFnZURhdGEud2lkdGgpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7fX19c3JjPXR5cGVvZiBzcmM9PT0nc3RyaW5nJz9zcmM6c3RhdGljU3JjO2NvbnN0IHdpZHRoSW50PWdldEludCh3aWR0aCk7Y29uc3QgaGVpZ2h0SW50PWdldEludChoZWlnaHQpO2NvbnN0IHF1YWxpdHlJbnQ9Z2V0SW50KHF1YWxpdHkpO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZighc3JjKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7d2lkdGgsaGVpZ2h0LHF1YWxpdHl9KX1gKTt9aWYoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTt9aWYoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZihwcmlvcml0eSYmbG9hZGluZz09PSdsYXp5Jyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO31pZihwbGFjZWhvbGRlcj09PSdibHVyJyl7aWYoKHdpZHRoSW50fHwwKSooaGVpZ2h0SW50fHwwKTwxNjAwKXtjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO31pZighYmx1ckRhdGFVUkwpe2NvbnN0IFZBTElEX0JMVVJfRVhUPVsnanBlZycsJ3BuZycsJ3dlYnAnXTsvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbnRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO319fWxldCBpc0xhenk9IXByaW9yaXR5JiYobG9hZGluZz09PSdsYXp5J3x8dHlwZW9mIGxvYWRpbmc9PT0ndW5kZWZpbmVkJyk7aWYoc3JjJiZzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSl7Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbnVub3B0aW1pemVkPXRydWU7aXNMYXp5PWZhbHNlO31jb25zdFtzZXRSZWYsaXNJbnRlcnNlY3RlZF09KDAsX3VzZUludGVyc2VjdGlvbi51c2VJbnRlcnNlY3Rpb24pKHtyb290TWFyZ2luOicyMDBweCcsZGlzYWJsZWQ6IWlzTGF6eX0pO2NvbnN0IGlzVmlzaWJsZT0haXNMYXp5fHxpc0ludGVyc2VjdGVkO2xldCB3cmFwcGVyU3R5bGU7bGV0IHNpemVyU3R5bGU7bGV0IHNpemVyU3ZnO2xldCBpbWdTdHlsZT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe3Bvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxwYWRkaW5nOjAsYm9yZGVyOidub25lJyxtYXJnaW46J2F1dG8nLGRpc3BsYXk6J2Jsb2NrJyx3aWR0aDowLGhlaWdodDowLG1pbldpZHRoOicxMDAlJyxtYXhXaWR0aDonMTAwJScsbWluSGVpZ2h0OicxMDAlJyxtYXhIZWlnaHQ6JzEwMCUnLG9iamVjdEZpdCxvYmplY3RQb3NpdGlvbn0scGxhY2Vob2xkZXI9PT0nYmx1cic/e2ZpbHRlcjonYmx1cigyMHB4KScsYmFja2dyb3VuZFNpemU6J2NvdmVyJyxiYWNrZ3JvdW5kSW1hZ2U6YHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYH06dW5kZWZpbmVkKTtpZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmdHlwZW9mIGhlaWdodEludCE9PSd1bmRlZmluZWQnJiZsYXlvdXQhPT0nZmlsbCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbmNvbnN0IHF1b3RpZW50PWhlaWdodEludC93aWR0aEludDtjb25zdCBwYWRkaW5nVG9wPWlzTmFOKHF1b3RpZW50KT8nMTAwJSc6YCR7cXVvdGllbnQqMTAwfSVgO2lmKGxheW91dD09PSdyZXNwb25zaXZlJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZ1RvcH07fWVsc2UgaWYobGF5b3V0PT09J2ludHJpbnNpYycpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonaW5saW5lLWJsb2NrJyxtYXhXaWR0aDonMTAwJScsb3ZlcmZsb3c6J2hpZGRlbicscG9zaXRpb246J3JlbGF0aXZlJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLG1hcmdpbjowfTtzaXplclN0eWxlPXtib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2Jsb2NrJyxtYXhXaWR0aDonMTAwJSd9O3NpemVyU3ZnPWA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO31lbHNlIGlmKGxheW91dD09PSdmaXhlZCcpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxud3JhcHBlclN0eWxlPXtvdmVyZmxvdzonaGlkZGVuJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLGRpc3BsYXk6J2lubGluZS1ibG9jaycscG9zaXRpb246J3JlbGF0aXZlJyx3aWR0aDp3aWR0aEludCxoZWlnaHQ6aGVpZ2h0SW50fTt9fWVsc2UgaWYodHlwZW9mIHdpZHRoSW50PT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQ9PT0ndW5kZWZpbmVkJyYmbGF5b3V0PT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbndyYXBwZXJTdHlsZT17ZGlzcGxheTonYmxvY2snLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidhYnNvbHV0ZScsdG9wOjAsbGVmdDowLGJvdHRvbTowLHJpZ2h0OjAsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07fWVsc2V7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7fX1sZXQgaW1nQXR0cmlidXRlcz17c3JjOidkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLHNyY1NldDp1bmRlZmluZWQsc2l6ZXM6dW5kZWZpbmVkfTtpZihpc1Zpc2libGUpe2ltZ0F0dHJpYnV0ZXM9Z2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSk7fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOndyYXBwZXJTdHlsZX0sc2l6ZXJTdHlsZT8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzaXplclN0eWxlfSxzaXplclN2Zz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLHtzdHlsZTp7bWF4V2lkdGg6JzEwMCUnLGRpc3BsYXk6J2Jsb2NrJyxtYXJnaW46MCxib3JkZXI6J25vbmUnLHBhZGRpbmc6MH0sYWx0OlwiXCIsXCJhcmlhLWhpZGRlblwiOnRydWUscm9sZTpcInByZXNlbnRhdGlvblwiLHNyYzpgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLF90b0Jhc2UudG9CYXNlNjQpKHNpemVyU3ZnKX1gfSk6bnVsbCk6bnVsbCwhaXNWaXNpYmxlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxnZW5lcmF0ZUltZ0F0dHJzKHtzcmMsdW5vcHRpbWl6ZWQsbGF5b3V0LHdpZHRoOndpZHRoSW50LHF1YWxpdHk6cXVhbGl0eUludCxzaXplcyxsb2FkZXJ9KSx7c3JjOnNyYyxkZWNvZGluZzpcImFzeW5jXCIsc2l6ZXM6c2l6ZXMsc3R5bGU6aW1nU3R5bGUsY2xhc3NOYW1lOmNsYXNzTmFtZX0pKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsaW1nQXR0cmlidXRlcyx7ZGVjb2Rpbmc6XCJhc3luY1wiLGNsYXNzTmFtZTpjbGFzc05hbWUscmVmOmVsZW1lbnQ9PntzZXRSZWYoZWxlbWVudCk7cmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCxwbGFjZWhvbGRlcik7fSxzdHlsZTppbWdTdHlsZX0pKSxwcmlvcml0eT8vKiNfX1BVUkVfXyovIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbi8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuLy9cbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTonX19uaW1nLScraW1nQXR0cmlidXRlcy5zcmMraW1nQXR0cmlidXRlcy5zcmNTZXQraW1nQXR0cmlidXRlcy5zaXplcyxyZWw6XCJwcmVsb2FkXCIsYXM6XCJpbWFnZVwiLGhyZWY6aW1nQXR0cmlidXRlcy5zcmNTZXQ/dW5kZWZpbmVkOmltZ0F0dHJpYnV0ZXMuc3JjLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNyY3NldDppbWdBdHRyaWJ1dGVzLnNyY1NldC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbixpbWFnZXNpemVzOmltZ0F0dHJpYnV0ZXMuc2l6ZXN9KSk6bnVsbCk7fS8vQlVJTFQgSU4gTE9BREVSU1xuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYyl7cmV0dXJuIHNyY1swXT09PScvJz9zcmMuc2xpY2UoMSk6c3JjO31mdW5jdGlvbiBpbWdpeExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pey8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuY29uc3QgcGFyYW1zPVsnYXV0bz1mb3JtYXQnLCdmaXQ9bWF4Jywndz0nK3dpZHRoXTtsZXQgcGFyYW1zU3RyaW5nPScnO2lmKHF1YWxpdHkpe3BhcmFtcy5wdXNoKCdxPScrcXVhbGl0eSk7fWlmKHBhcmFtcy5sZW5ndGgpe3BhcmFtc1N0cmluZz0nPycrcGFyYW1zLmpvaW4oJyYnKTt9cmV0dXJuYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWA7fWZ1bmN0aW9uIGFrYW1haUxvYWRlcih7cm9vdCxzcmMsd2lkdGh9KXtyZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO31mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbmNvbnN0IHBhcmFtcz1bJ2ZfYXV0bycsJ2NfbGltaXQnLCd3Xycrd2lkdGgsJ3FfJysocXVhbGl0eXx8J2F1dG8nKV07bGV0IHBhcmFtc1N0cmluZz1wYXJhbXMuam9pbignLCcpKycvJztyZXR1cm5gJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDt9ZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7cm9vdCxzcmMsd2lkdGgscXVhbGl0eX0pe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBtaXNzaW5nVmFsdWVzPVtdOy8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuaWYoIXNyYyltaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO2lmKCF3aWR0aCltaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7aWYobWlzc2luZ1ZhbHVlcy5sZW5ndGg+MCl7dGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe3NyYyx3aWR0aCxxdWFsaXR5fSl9YCk7fWlmKHNyYy5zdGFydHNXaXRoKCcvLycpKXt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO31pZighc3JjLnN0YXJ0c1dpdGgoJy8nKSYmY29uZmlnRG9tYWlucyl7bGV0IHBhcnNlZFNyYzt0cnl7cGFyc2VkU3JjPW5ldyBVUkwoc3JjKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpe3Rocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCtgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO319fXJldHVybmAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5fHw3NX1gO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjaz12b2lkIDA7Y29uc3QgcmVxdWVzdElkbGVDYWxsYmFjaz10eXBlb2Ygc2VsZiE9PSd1bmRlZmluZWQnJiZzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGNiKXtsZXQgc3RhcnQ9RGF0ZS5ub3coKTtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe2NiKHtkaWRUaW1lb3V0OmZhbHNlLHRpbWVSZW1haW5pbmc6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoMCw1MC0oRGF0ZS5ub3coKS1zdGFydCkpO319KTt9LDEpO307ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVlc3RJZGxlQ2FsbGJhY2s7Y29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrfHxmdW5jdGlvbihpZCl7cmV0dXJuIGNsZWFyVGltZW91dChpZCk7fTtleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjaz1jYW5jZWxJZGxlQ2FsbGJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VJbnRlcnNlY3Rpb249dXNlSW50ZXJzZWN0aW9uO3ZhciBfcmVhY3Q9cmVxdWlyZShcInJlYWN0XCIpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Y29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI9dHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyIT09J3VuZGVmaW5lZCc7ZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHtyb290TWFyZ2luLGRpc2FibGVkfSl7Y29uc3QgaXNEaXNhYmxlZD1kaXNhYmxlZHx8IWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO2NvbnN0IHVub2JzZXJ2ZT0oMCxfcmVhY3QudXNlUmVmKSgpO2NvbnN0W3Zpc2libGUsc2V0VmlzaWJsZV09KDAsX3JlYWN0LnVzZVN0YXRlKShmYWxzZSk7Y29uc3Qgc2V0UmVmPSgwLF9yZWFjdC51c2VDYWxsYmFjaykoZWw9PntpZih1bm9ic2VydmUuY3VycmVudCl7dW5vYnNlcnZlLmN1cnJlbnQoKTt1bm9ic2VydmUuY3VycmVudD11bmRlZmluZWQ7fWlmKGlzRGlzYWJsZWR8fHZpc2libGUpcmV0dXJuO2lmKGVsJiZlbC50YWdOYW1lKXt1bm9ic2VydmUuY3VycmVudD1vYnNlcnZlKGVsLGlzVmlzaWJsZT0+aXNWaXNpYmxlJiZzZXRWaXNpYmxlKGlzVmlzaWJsZSkse3Jvb3RNYXJnaW59KTt9fSxbaXNEaXNhYmxlZCxyb290TWFyZ2luLHZpc2libGVdKTsoMCxfcmVhY3QudXNlRWZmZWN0KSgoKT0+e2lmKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcil7aWYoIXZpc2libGUpe2NvbnN0IGlkbGVDYWxsYmFjaz0oMCxfcmVxdWVzdElkbGVDYWxsYmFjay5yZXF1ZXN0SWRsZUNhbGxiYWNrKSgoKT0+c2V0VmlzaWJsZSh0cnVlKSk7cmV0dXJuKCk9PigwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLmNhbmNlbElkbGVDYWxsYmFjaykoaWRsZUNhbGxiYWNrKTt9fX0sW3Zpc2libGVdKTtyZXR1cm5bc2V0UmVmLHZpc2libGVdO31mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsY2FsbGJhY2ssb3B0aW9ucyl7Y29uc3R7aWQsb2JzZXJ2ZXIsZWxlbWVudHN9PWNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO2VsZW1lbnRzLnNldChlbGVtZW50LGNhbGxiYWNrKTtvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO3JldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKXtlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpOy8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbmlmKGVsZW1lbnRzLnNpemU9PT0wKXtvYnNlcnZlci5kaXNjb25uZWN0KCk7b2JzZXJ2ZXJzLmRlbGV0ZShpZCk7fX07fWNvbnN0IG9ic2VydmVycz1uZXcgTWFwKCk7ZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyl7Y29uc3QgaWQ9b3B0aW9ucy5yb290TWFyZ2lufHwnJztsZXQgaW5zdGFuY2U9b2JzZXJ2ZXJzLmdldChpZCk7aWYoaW5zdGFuY2Upe3JldHVybiBpbnN0YW5jZTt9Y29uc3QgZWxlbWVudHM9bmV3IE1hcCgpO2NvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57Y29uc3QgY2FsbGJhY2s9ZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7Y29uc3QgaXNWaXNpYmxlPWVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wO2lmKGNhbGxiYWNrJiZpc1Zpc2libGUpe2NhbGxiYWNrKGlzVmlzaWJsZSk7fX0pO30sb3B0aW9ucyk7b2JzZXJ2ZXJzLnNldChpZCxpbnN0YW5jZT17aWQsb2JzZXJ2ZXIsZWxlbWVudHN9KTtyZXR1cm4gaW5zdGFuY2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmV4cG9ydCBjb25zdCBnZXRDYXJ0ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImNhcnQvZ2V0Q2FydFwiLFxyXG4gIGFzeW5jIChhcmcsIHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC91c2VyXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJjYXJ0L2luY3JlbWVudFF1YW50aXR5XCIsXHJcbiAgYXN5bmMgKGlkLCB7IGdldFN0YXRlIH0pID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICBcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvaW5jcmVtZW50L1wiICsgaWQsXHJcbiAgICAgIHt9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L3VzZXJcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gIFwiY2FydC9kZWNyZW1lbnRRdWFudGl0eVwiLFxyXG4gIGFzeW5jIChpZCwgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICBhd2FpdCBheGlvcy5wYXRjaChcclxuICAgICAgXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L2RlY3JlbWVudC9cIiArIGlkLFxyXG4gICAgICB7fSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvdXNlclwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ2FydCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJjYXJ0L3JlbW92ZVByb2R1Y3RcIixcclxuICBhc3luYyAoaWQsIHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgYXdhaXQgYXhpb3MuZGVsZXRlKFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC9cIiArIGlkLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vbmVzdGpzLWUtYmFjay5oZXJva3VhcHAuY29tL2NhcnQvdXNlclwiLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0U3RhdGUoKS5hdXRoLmFjY2Vzc1Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbik7XHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnRDYXJ0ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImNhcnQvYWRkVG9DYXJ0XCIsXHJcbiAgYXN5bmMgKHByb2R1Y3QsIHsgZ2V0U3RhdGUgfSkgPT4ge1xyXG4gICAgLy8gcHJvZHVjdCBtYXAgdG8gZm9ybWRhdGFcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBwcm9kdWN0W2tleV0pO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L2FkZFwiLFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC91c2VyXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH1cclxuKTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gY3JlYXRlQXN5bmNUaHVuayhcclxuICBcImNhcnQvYWRkUHJvZHVjdFwiLFxyXG4gIGFzeW5jIChwcm9kdWN0LCB7IGdldFN0YXRlIH0pID0+IHtcclxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgIFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC9cIixcclxuICAgICAgeyAuLi5wcm9kdWN0LCBxdWFudGl0eTogMSB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L3VzZXJcIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldFN0YXRlKCkuYXV0aC5hY2Nlc3NUb2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgfVxyXG4pO1xyXG5leHBvcnQgY29uc3QgYWRkQ3VzdG9tUHJvZHVjdCA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgXCJjYXJ0L2FkZEN1c3RvbVByb2R1Y3RcIixcclxuICBhc3luYyAocHJvZHVjdCwgeyBnZXRTdGF0ZSB9KSA9PiB7XHJcbiAgICAvLyBjb252ZXJ0IHByb2R1Y3QgdG8gZm9ybWRhdGFcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvZHVjdCkge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBwcm9kdWN0W2tleV0pO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgXCJodHRwczovL25lc3Rqcy1lLWJhY2suaGVyb2t1YXBwLmNvbS9jYXJ0L2N1c3RvbVwiLFxyXG4gICAgICBmb3JtRGF0YSxcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9uZXN0anMtZS1iYWNrLmhlcm9rdWFwcC5jb20vY2FydC91c2VyXCIsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRTdGF0ZSgpLmF1dGguYWNjZXNzVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gIH1cclxuKTtcclxuXHJcblxyXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJjYXJ0XCIsXHJcbiAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICBjYXJ0OiBbXSxcclxuICB9LFxyXG4gIC8vIHJlZHVjZXJzOiB7fSxcclxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKGluY3JlbWVudFF1YW50aXR5LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBzdGF0ZS5jYXJ0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShkZWNyZW1lbnRRdWFudGl0eS5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gICAgYnVpbGRlci5hZGRDYXNlKHJlbW92ZUZyb21DYXJ0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkVG9DYXJ0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgaXRlbUV4aXN0cyA9IHN0YXRlLmNhcnQuZmluZChcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuICAgICAgaWYgKGl0ZW1FeGlzdHMpIHtcclxuICAgICAgICBpdGVtRXhpc3RzLnF1YW50aXR5Kys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGJ1aWxkZXIuYWRkQ2FzZShnZXRDYXJ0LmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuY2FydCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSk7XHJcbiAgICBidWlsZGVyLmFkZENhc2UoYWRkQ3VzdG9tUHJvZHVjdC5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLmNhcnQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iXSwic291cmNlUm9vdCI6IiJ9