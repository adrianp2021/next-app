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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Quotes.module.scss */ \"./styles/Quotes.module.scss\");\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mountainbox/Desktop/Coding/next-app/components/Quotes.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Quotes = function Quotes() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h2),\n        children: \"Our clients love our work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h4),\n        children: \"But don\\u2019t just take our word for it...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Actions, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Quotes;\n\nvar Actions = function Actions(_ref) {\n  _s();\n\n  var isVisible = _ref.isVisible;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      shouldShowActions = _React$useState2[0],\n      setShouldShowActions = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),\n      _React$useState4 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),\n      lastYpos = _React$useState4[0],\n      setLastYPos = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    function handleScroll() {\n      console.log('scrolled');\n      var yPos = window.scrollY;\n      var isScrollingUp = yPos < lastYpos;\n      setShouldShowActions(isScrollingUp);\n      setLastYPos(yPos);\n    }\n\n    window.addEventListener('scroll', handleScroll, false);\n    return function () {\n      window.removeEventListener('scroll', handleScroll, false);\n    };\n  }, [lastYpos]);\n  return (\n    /*#__PURE__*/\n    // <AnimatePresence>\n    //   {(\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n      className: \"actions\",\n      animate: {\n        opacity: shouldShowActions ? 1 : 0\n      },\n      initial: {\n        opacity: 0\n      },\n      transition: {\n        opacity: {\n          duration: 2.2\n        }\n      },\n      exit: {\n        opacity: 0\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().p),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"\",\n          children: \"\\u201CABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town\\u201D\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().p),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          className: \"\",\n          children: \"\\u201CI don\\u2019t like people, but I make an exception for ABC Agency. They\\u2019re pretty damn cool.\\u201D\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this) // )}\n    // </AnimatePresence>\n\n  );\n};\n\n_s(Actions, \"gtZYIZ9VZik4eR4DQMtqswylTiQ=\");\n\n_c2 = Actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quotes);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Quotes\");\n$RefreshReg$(_c2, \"Actions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVvdGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1F1b3Rlcy5tb2R1bGUuc2NzcydcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgUXVvdGVzID0gKCkgPT4ge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnNlY3Rpb259PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuaDJ9Pk91ciBjbGllbnRzIGxvdmUgb3VyIHdvcms8L2gyPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5oNH0+QnV0IGRvbuKAmXQganVzdCB0YWtlIG91ciB3b3JkIGZvciBpdC4uLjwvaDQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID7igJxBQkMgQWdlbmN5IG91ciB0aGUgYmVzdC4gTm90IG9ubHkgZGlkIHRoZXkgZGVsaXZlciBteSB3b3JrIG9uIHRpbWUsIHRoZXkgZXZlbiB3YWxrZWQgbXkgZG9nIHdoZW4gSSB3YXMgb3V0IG9mIHRvd27igJ0gPGJyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5zcGFufT5BIFNtaXRoIOKAkyBOZWlnaGJvdXI8L3NwYW4+PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID7igJxJIGRvbuKAmXQgbGlrZSBwZW9wbGUsIGJ1dCBJIG1ha2UgYW4gZXhjZXB0aW9uIGZvciBBQkMgQWdlbmN5LiBUaGV54oCZcmUgcHJldHR5IGRhbW4gY29vbC7igJ0gPGJyIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5zcGFufT5CcmlhbiBKb25lcywgIEFtZXJpY2EgQmlnIENvcnBvcmF0aW9uPC9zcGFuPjwvcD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxBY3Rpb25zIC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuY29uc3QgQWN0aW9ucyA9ICh7IGlzVmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IFtzaG91bGRTaG93QWN0aW9ucywgc2V0U2hvdWxkU2hvd0FjdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2xhc3RZcG9zLCBzZXRMYXN0WVBvc10gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsZWQnKVxuICAgICAgY29uc3QgeVBvcyA9IHdpbmRvdy5zY3JvbGxZXG4gICAgICBjb25zdCBpc1Njcm9sbGluZ1VwID0geVBvcyA8IGxhc3RZcG9zXG5cbiAgICAgIHNldFNob3VsZFNob3dBY3Rpb25zKGlzU2Nyb2xsaW5nVXApXG4gICAgICBzZXRMYXN0WVBvcyh5UG9zKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxuICAgIH1cblxuICB9LCBbbGFzdFlwb3NdKVxuXG4gIHJldHVybiAoXG4gICAgLy8gPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAvLyAgIHsoXG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFjdGlvbnNcIiBhbmltYXRlPXt7IG9wYWNpdHk6IHNob3VsZFNob3dBY3Rpb25zID8gMSA6IDAgfX0gaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19IHRyYW5zaXRpb249e3sgb3BhY2l0eTogeyBkdXJhdGlvbjogMi4yIH0gfX0gZXhpdD17eyBvcGFjaXR5OiAwIH19PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMucH0gPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+4oCcQUJDIEFnZW5jeSBvdXIgdGhlIGJlc3QuIE5vdCBvbmx5IGRpZCB0aGV5IGRlbGl2ZXIgbXkgd29yayBvbiB0aW1lLCB0aGV5IGV2ZW4gd2Fsa2VkIG15IGRvZyB3aGVuIEkgd2FzIG91dCBvZiB0b3du4oCdPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPuKAnEkgZG9u4oCZdCBsaWtlIHBlb3BsZSwgYnV0IEkgbWFrZSBhbiBleGNlcHRpb24gZm9yIEFCQyBBZ2VuY3kuIFRoZXnigJlyZSBwcmV0dHkgZGFtbiBjb29sLuKAnTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIC8vICl9XG4gICAgLy8gPC9BbmltYXRlUHJlc2VuY2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInF1b3RlU3R5bGVzIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUXVvdGVzIiwic2VjdGlvbiIsImgyIiwiaDQiLCJBY3Rpb25zIiwiaXNWaXNpYmxlIiwidXNlU3RhdGUiLCJzaG91bGRTaG93QWN0aW9ucyIsInNldFNob3VsZFNob3dBY3Rpb25zIiwibGFzdFlwb3MiLCJzZXRMYXN0WVBvcyIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ5UG9zIiwid2luZG93Iiwic2Nyb2xsWSIsImlzU2Nyb2xsaW5nVXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quotes.js\n");

/***/ })

});