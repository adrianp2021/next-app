"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Quotes.js":
/*!******************************!*\
  !*** ./components/Quotes.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Quotes.module.scss */ \"./styles/Quotes.module.scss\");\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mountainbox/Desktop/Coding/next-app/components/Quotes.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Quotes = function Quotes() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h2),\n        children: \"Our clients love our work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h4),\n        children: \"But don\\u2019t just take our word for it...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Actions, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Quotes;\n\nvar Actions = function Actions(_ref) {\n  _s();\n\n  var isVisible = _ref.isVisible;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      shouldShowActions = _React$useState2[0],\n      setShouldShowActions = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),\n      _React$useState4 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),\n      lastYpos = _React$useState4[0],\n      setLastYPos = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    function handleScroll() {\n      console.log('scrolled');\n      var yPos = window.scrollY;\n      var isScrollingUp = yPos < lastYpos;\n      setShouldShowActions(isScrollingUp);\n      setLastYPos(yPos);\n    }\n\n    window.addEventListener('scroll', handleScroll, false);\n    return function () {\n      window.removeEventListener('scroll', handleScroll, false);\n    };\n  }, [lastYpos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n      className: \"actions\",\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: .4\n      },\n      transition: {\n        opacity: {\n          duration: 2.2\n        }\n      },\n      exit: {\n        opacity: 0\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().p),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"\",\n          children: \"\\u201CABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town\\u201D\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().p),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"\",\n          children: \"\\u201CI don\\u2019t like people, but I make an exception for ABC Agency. They\\u2019re pretty damn cool.\\u201D\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Actions, \"gtZYIZ9VZik4eR4DQMtqswylTiQ=\");\n\n_c2 = Actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quotes);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Quotes\");\n$RefreshReg$(_c2, \"Actions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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XSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBxdW90ZVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUXVvdGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCBRdW90ZXMgPSAoKSA9PiB7XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5oMn0+T3VyIGNsaWVudHMgbG92ZSBvdXIgd29yazwvaDI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLmg0fT5CdXQgZG9u4oCZdCBqdXN0IHRha2Ugb3VyIHdvcmQgZm9yIGl0Li4uPC9oND5cbiAgICAgIDwvZGl2PlxuICAgICAgPEFjdGlvbnMgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5jb25zdCBBY3Rpb25zID0gKHsgaXNWaXNpYmxlIH0pID0+IHtcbiAgY29uc3QgW3Nob3VsZFNob3dBY3Rpb25zLCBzZXRTaG91bGRTaG93QWN0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbbGFzdFlwb3MsIHNldExhc3RZUG9zXSA9IFJlYWN0LnVzZVN0YXRlKDApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxlZCcpXG4gICAgICBjb25zdCB5UG9zID0gd2luZG93LnNjcm9sbFlcbiAgICAgIGNvbnN0IGlzU2Nyb2xsaW5nVXAgPSB5UG9zIDwgbGFzdFlwb3NcblxuICAgICAgc2V0U2hvdWxkU2hvd0FjdGlvbnMoaXNTY3JvbGxpbmdVcClcbiAgICAgIHNldExhc3RZUG9zKHlQb3MpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpXG4gICAgfVxuXG4gIH0sIFtsYXN0WXBvc10pXG5cbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlID5cbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCIgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IGFuaW1hdGU9e3sgb3BhY2l0eTogLjQgfX0gdHJhbnNpdGlvbj17eyBvcGFjaXR5OiB7IGR1cmF0aW9uOiAyLjIgfSB9fSBleGl0PXt7IG9wYWNpdHk6IDAgfX0+XG4gICAgICA8bW90aW9uLnAgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5wfSA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPuKAnEFCQyBBZ2VuY3kgb3VyIHRoZSBiZXN0LiBOb3Qgb25seSBkaWQgdGhleSBkZWxpdmVyIG15IHdvcmsgb24gdGltZSwgdGhleSBldmVuIHdhbGtlZCBteSBkb2cgd2hlbiBJIHdhcyBvdXQgb2YgdG93buKAnTwvc3Bhbj5cbiAgICAgIDwvbW90aW9uLnA+XG4gICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+4oCcSSBkb27igJl0IGxpa2UgcGVvcGxlLCBidXQgSSBtYWtlIGFuIGV4Y2VwdGlvbiBmb3IgQUJDIEFnZW5jeS4gVGhleeKAmXJlIHByZXR0eSBkYW1uIGNvb2wu4oCdPC9zcGFuPlxuICAgICAgPC9wPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdW90ZXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwicXVvdGVTdHlsZXMiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJRdW90ZXMiLCJzZWN0aW9uIiwiaDIiLCJoNCIsIkFjdGlvbnMiLCJpc1Zpc2libGUiLCJ1c2VTdGF0ZSIsInNob3VsZFNob3dBY3Rpb25zIiwic2V0U2hvdWxkU2hvd0FjdGlvbnMiLCJsYXN0WXBvcyIsInNldExhc3RZUG9zIiwidXNlRWZmZWN0IiwiaGFuZGxlU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsInlQb3MiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiaXNTY3JvbGxpbmdVcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib3BhY2l0eSIsImR1cmF0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quotes.js\n");

/***/ })

});