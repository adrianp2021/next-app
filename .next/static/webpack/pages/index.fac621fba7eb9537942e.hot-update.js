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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Quotes.module.scss */ \"./styles/Quotes.module.scss\");\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mountainbox/Desktop/Coding/next-app/components/Quotes.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Quotes = function Quotes() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h2),\n        children: \"Our clients love our work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h4),\n        children: \"But don\\u2019t just take our word for it...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Actions, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Quotes;\n\nvar Actions = function Actions() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      shouldShowActions = _React$useState2[0],\n      setShouldShowActions = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),\n      _React$useState4 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),\n      lastYpos = _React$useState4[0],\n      setLastYPos = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    function handleScroll() {\n      console.log('scrolled');\n      var yPos = window.scrollY;\n      var isScrollingUp = yPos < lastYpos;\n      setShouldShowActions(isScrollingUp);\n      setLastYPos(yPos);\n    }\n\n    window.addEventListener('scroll', handleScroll, false);\n    return function () {\n      window.removeEventListener('scroll', handleScroll, false);\n    };\n  }, [lastYpos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n    className: \"actions\",\n    animate: {\n      opacity: shouldShowActions ? 1 : 0\n    },\n    initial: {\n      opacity: 0\n    },\n    transition: {\n      opacity: {\n        duration: 1\n      }\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"\",\n        children: \"\\u201CABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town\\u201D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"\",\n        children: \"\\u201CI don\\u2019t like people, but I make an exception for ABC Agency. They\\u2019re pretty damn cool.\\u201D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Actions, \"gtZYIZ9VZik4eR4DQMtqswylTiQ=\");\n\n_c2 = Actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quotes);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Quotes\");\n$RefreshReg$(_c2, \"Actions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1b3Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBR25CLHNCQUNFO0FBQVMsYUFBUyxFQUFFRiwyRUFBcEI7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVdFLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FsQkQ7O0tBQU1FOztBQW9CTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLHdCQUFrRFAscURBQUEsQ0FBZSxLQUFmLENBQWxEO0FBQUE7QUFBQSxNQUFPUyxpQkFBUDtBQUFBLE1BQTBCQyxvQkFBMUI7O0FBRUEseUJBQWdDVixxREFBQSxDQUFlLENBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUFaLEVBQUFBLHNEQUFBLENBQWdCLFlBQU07QUFFcEIsYUFBU2MsWUFBVCxHQUF3QjtBQUN0QkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxPQUFwQjtBQUNBLFVBQU1DLGFBQWEsR0FBR0gsSUFBSSxHQUFHTixRQUE3QjtBQUVBRCxNQUFBQSxvQkFBb0IsQ0FBQ1UsYUFBRCxDQUFwQjtBQUNBUixNQUFBQSxXQUFXLENBQUNLLElBQUQsQ0FBWDtBQUNEOztBQUVEQyxJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxZQUFsQyxFQUFnRCxLQUFoRDtBQUVBLFdBQU8sWUFBTTtBQUNYSSxNQUFBQSxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixZQUFyQyxFQUFtRCxLQUFuRDtBQUNELEtBRkQ7QUFJRCxHQWpCRCxFQWlCRyxDQUFDSCxRQUFELENBakJIO0FBbUJBLHNCQUNFLDhEQUFDLHFEQUFEO0FBQVksYUFBUyxFQUFDLFNBQXRCO0FBQWdDLFdBQU8sRUFBRTtBQUFFWSxNQUFBQSxPQUFPLEVBQUVkLGlCQUFpQixHQUFHLENBQUgsR0FBTztBQUFuQyxLQUF6QztBQUFpRixXQUFPLEVBQUU7QUFBRWMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBMUY7QUFBMEcsY0FBVSxFQUFFO0FBQUVBLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFYLEtBQXRIO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRTtBQUFNLGlCQUFTLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFLRTtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVdELENBbkNEOztHQUFNakI7O01BQUFBO0FBcUNOLCtEQUFlSixNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUXVvdGVzLmpzPzA2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBxdW90ZVN0eWxlcyBmcm9tICcuLi9zdHlsZXMvUXVvdGVzLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgUXVvdGVzID0gKCkgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnNlY3Rpb259PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuaDJ9Pk91ciBjbGllbnRzIGxvdmUgb3VyIHdvcms8L2gyPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5oNH0+QnV0IGRvbuKAmXQganVzdCB0YWtlIG91ciB3b3JkIGZvciBpdC4uLjwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID7igJxBQkMgQWdlbmN5IG91ciB0aGUgYmVzdC4gTm90IG9ubHkgZGlkIHRoZXkgZGVsaXZlciBteSB3b3JrIG9uIHRpbWUsIHRoZXkgZXZlbiB3YWxrZWQgbXkgZG9nIHdoZW4gSSB3YXMgb3V0IG9mIHRvd27igJ0gPGJyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5zcGFufT5BIFNtaXRoIOKAkyBOZWlnaGJvdXI8L3NwYW4+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID7igJxJIGRvbuKAmXQgbGlrZSBwZW9wbGUsIGJ1dCBJIG1ha2UgYW4gZXhjZXB0aW9uIGZvciBBQkMgQWdlbmN5LiBUaGV54oCZcmUgcHJldHR5IGRhbW4gY29vbC7igJ0gPGJyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5zcGFufT5CcmlhbiBKb25lcywgIEFtZXJpY2EgQmlnIENvcnBvcmF0aW9uPC9zcGFuPjwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxBY3Rpb25zIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgQWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgW3Nob3VsZFNob3dBY3Rpb25zLCBzZXRTaG91bGRTaG93QWN0aW9uc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBbbGFzdFlwb3MsIHNldExhc3RZUG9zXSA9IFJlYWN0LnVzZVN0YXRlKDApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzY3JvbGxlZCcpXG4gICAgICBjb25zdCB5UG9zID0gd2luZG93LnNjcm9sbFlcbiAgICAgIGNvbnN0IGlzU2Nyb2xsaW5nVXAgPSB5UG9zIDwgbGFzdFlwb3NcblxuICAgICAgc2V0U2hvdWxkU2hvd0FjdGlvbnMoaXNTY3JvbGxpbmdVcClcbiAgICAgIHNldExhc3RZUG9zKHlQb3MpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCwgZmFsc2UpXG4gICAgfVxuXG4gIH0sIFtsYXN0WXBvc10pXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCIgYW5pbWF0ZT17eyBvcGFjaXR5OiBzaG91bGRTaG93QWN0aW9ucyA/IDEgOiAwIH19IGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fSB0cmFuc2l0aW9uPXt7IG9wYWNpdHk6IHsgZHVyYXRpb246IDEgfSB9fT5cbiAgICAgIDxidXR0b24+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPuKAnEFCQyBBZ2VuY3kgb3VyIHRoZSBiZXN0LiBOb3Qgb25seSBkaWQgdGhleSBkZWxpdmVyIG15IHdvcmsgb24gdGltZSwgdGhleSBldmVuIHdhbGtlZCBteSBkb2cgd2hlbiBJIHdhcyBvdXQgb2YgdG93buKAnTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj7igJxJIGRvbuKAmXQgbGlrZSBwZW9wbGUsIGJ1dCBJIG1ha2UgYW4gZXhjZXB0aW9uIGZvciBBQkMgQWdlbmN5LiBUaGV54oCZcmUgcHJldHR5IGRhbW4gY29vbC7igJ08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInF1b3RlU3R5bGVzIiwibW90aW9uIiwiUXVvdGVzIiwic2VjdGlvbiIsImgyIiwiaDQiLCJBY3Rpb25zIiwidXNlU3RhdGUiLCJzaG91bGRTaG93QWN0aW9ucyIsInNldFNob3VsZFNob3dBY3Rpb25zIiwibGFzdFlwb3MiLCJzZXRMYXN0WVBvcyIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ5UG9zIiwid2luZG93Iiwic2Nyb2xsWSIsImlzU2Nyb2xsaW5nVXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wYWNpdHkiLCJkdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Quotes.js\n");

/***/ })

});