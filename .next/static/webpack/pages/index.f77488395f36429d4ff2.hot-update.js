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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Quotes.module.scss */ \"./styles/Quotes.module.scss\");\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/mountainbox/Desktop/Coding/next-app/components/Quotes.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Quotes = function Quotes() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"section\", {\n    className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().section),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h2),\n        children: \"Our clients love our work\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().h4),\n        children: \"But don\\u2019t just take our word for it...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Actions, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Quotes;\n\nvar Actions = function Actions() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),\n      _React$useState2 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),\n      shouldShowActions = _React$useState2[0],\n      setShouldShowActions = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0),\n      _React$useState4 = (0,_Users_mountainbox_Desktop_Coding_next_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState3, 2),\n      lastYpos = _React$useState4[0],\n      setLastYPos = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function () {\n    function handleScroll() {\n      console.log('scrolled');\n      var yPos = window.scrollY;\n      var isScrollingUp = yPos < lastYpos;\n      setShouldShowActions(isScrollingUp);\n      setLastYPos(yPos);\n    }\n\n    window.addEventListener('scroll', handleScroll, false);\n    return function () {\n      window.removeEventListener('scroll', handleScroll, false);\n    };\n  }, [lastYpos]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n    className: \"actions\",\n    animate: {\n      opacity: shouldShowActions ? 1 : 0\n    },\n    initial: {\n      opacity: 0\n    },\n    transition: {\n      opacity: {\n        duration: 1\n      }\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_3___default().p),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"\",\n        children: \"\\u201CABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town\\u201D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        className: \"\",\n        children: \"\\u201CI don\\u2019t like people, but I make an exception for ABC Agency. They\\u2019re pretty damn cool.\\u201D\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Actions, \"gtZYIZ9VZik4eR4DQMtqswylTiQ=\");\n\n_c2 = Actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quotes);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Quotes\");\n$RefreshReg$(_c2, \"Actions\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1b3Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBR25CLHNCQUNFO0FBQVMsYUFBUyxFQUFFRiwyRUFBcEI7QUFBQSw0QkFDRTtBQUFBLDhCQUNFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUksaUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVdFLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FsQkQ7O0tBQU1FOztBQW9CTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ3BCLHdCQUFrRFAscURBQUEsQ0FBZSxLQUFmLENBQWxEO0FBQUE7QUFBQSxNQUFPUyxpQkFBUDtBQUFBLE1BQTBCQyxvQkFBMUI7O0FBRUEseUJBQWdDVixxREFBQSxDQUFlLENBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9XLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUFaLEVBQUFBLHNEQUFBLENBQWdCLFlBQU07QUFFcEIsYUFBU2MsWUFBVCxHQUF3QjtBQUN0QkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBLFVBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxPQUFwQjtBQUNBLFVBQU1DLGFBQWEsR0FBR0gsSUFBSSxHQUFHTixRQUE3QjtBQUVBRCxNQUFBQSxvQkFBb0IsQ0FBQ1UsYUFBRCxDQUFwQjtBQUNBUixNQUFBQSxXQUFXLENBQUNLLElBQUQsQ0FBWDtBQUNEOztBQUVEQyxJQUFBQSxNQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxZQUFsQyxFQUFnRCxLQUFoRDtBQUVBLFdBQU8sWUFBTTtBQUNYSSxNQUFBQSxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixZQUFyQyxFQUFtRCxLQUFuRDtBQUNELEtBRkQ7QUFJRCxHQWpCRCxFQWlCRyxDQUFDSCxRQUFELENBakJIO0FBbUJBLHNCQUNFLDhEQUFDLHFEQUFEO0FBQVksYUFBUyxFQUFDLFNBQXRCO0FBQWdDLFdBQU8sRUFBRTtBQUFFWSxNQUFBQSxPQUFPLEVBQUVkLGlCQUFpQixHQUFHLENBQUgsR0FBTztBQUFuQyxLQUF6QztBQUFpRixXQUFPLEVBQUU7QUFBRWMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBMUY7QUFBMEcsY0FBVSxFQUFFO0FBQUVBLE1BQUFBLE9BQU8sRUFBRTtBQUFFQyxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUFYLEtBQXRIO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUV2QixxRUFBZDtBQUFBLDZCQUNFO0FBQU0saUJBQVMsRUFBQyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUEsNkJBQ0U7QUFBTSxpQkFBUyxFQUFDLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FuQ0Q7O0dBQU1NOztNQUFBQTtBQXFDTiwrREFBZUosTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1b3Rlcy5qcz8wNmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVvdGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1F1b3Rlcy5tb2R1bGUuc2NzcydcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IFF1b3RlcyA9ICgpID0+IHtcblxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5zZWN0aW9ufT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLmgyfT5PdXIgY2xpZW50cyBsb3ZlIG91ciB3b3JrPC9oMj5cbiAgICAgICAgPGg0IGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuaDR9PkJ1dCBkb27igJl0IGp1c3QgdGFrZSBvdXIgd29yZCBmb3IgaXQuLi48L2g0PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogPGRpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5wfSA+4oCcQUJDIEFnZW5jeSBvdXIgdGhlIGJlc3QuIE5vdCBvbmx5IGRpZCB0aGV5IGRlbGl2ZXIgbXkgd29yayBvbiB0aW1lLCB0aGV5IGV2ZW4gd2Fsa2VkIG15IGRvZyB3aGVuIEkgd2FzIG91dCBvZiB0b3du4oCdIDxiciAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuc3Bhbn0+QSBTbWl0aCDigJMgTmVpZ2hib3VyPC9zcGFuPjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5wfSA+4oCcSSBkb27igJl0IGxpa2UgcGVvcGxlLCBidXQgSSBtYWtlIGFuIGV4Y2VwdGlvbiBmb3IgQUJDIEFnZW5jeS4gVGhleeKAmXJlIHByZXR0eSBkYW1uIGNvb2wu4oCdIDxiciAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuc3Bhbn0+QnJpYW4gSm9uZXMsICBBbWVyaWNhIEJpZyBDb3Jwb3JhdGlvbjwvc3Bhbj48L3A+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8QWN0aW9ucyAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmNvbnN0IEFjdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG91bGRTaG93QWN0aW9ucywgc2V0U2hvdWxkU2hvd0FjdGlvbnNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3QgW2xhc3RZcG9zLCBzZXRMYXN0WVBvc10gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2Nyb2xsZWQnKVxuICAgICAgY29uc3QgeVBvcyA9IHdpbmRvdy5zY3JvbGxZXG4gICAgICBjb25zdCBpc1Njcm9sbGluZ1VwID0geVBvcyA8IGxhc3RZcG9zXG5cbiAgICAgIHNldFNob3VsZFNob3dBY3Rpb25zKGlzU2Nyb2xsaW5nVXApXG4gICAgICBzZXRMYXN0WVBvcyh5UG9zKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwsIGZhbHNlKVxuICAgIH1cblxuICB9LCBbbGFzdFlwb3NdKVxuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiIGFuaW1hdGU9e3sgb3BhY2l0eTogc2hvdWxkU2hvd0FjdGlvbnMgPyAxIDogMCB9fSBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX0gdHJhbnNpdGlvbj17eyBvcGFjaXR5OiB7IGR1cmF0aW9uOiAxIH0gfX0+XG4gICAgICA8cCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLnB9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+4oCcQUJDIEFnZW5jeSBvdXIgdGhlIGJlc3QuIE5vdCBvbmx5IGRpZCB0aGV5IGRlbGl2ZXIgbXkgd29yayBvbiB0aW1lLCB0aGV5IGV2ZW4gd2Fsa2VkIG15IGRvZyB3aGVuIEkgd2FzIG91dCBvZiB0b3du4oCdPC9zcGFuPlxuICAgICAgPC9wPlxuXG4gICAgICA8YnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj7igJxJIGRvbuKAmXQgbGlrZSBwZW9wbGUsIGJ1dCBJIG1ha2UgYW4gZXhjZXB0aW9uIGZvciBBQkMgQWdlbmN5LiBUaGV54oCZcmUgcHJldHR5IGRhbW4gY29vbC7igJ08L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVvdGVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInF1b3RlU3R5bGVzIiwibW90aW9uIiwiUXVvdGVzIiwic2VjdGlvbiIsImgyIiwiaDQiLCJBY3Rpb25zIiwidXNlU3RhdGUiLCJzaG91bGRTaG93QWN0aW9ucyIsInNldFNob3VsZFNob3dBY3Rpb25zIiwibGFzdFlwb3MiLCJzZXRMYXN0WVBvcyIsInVzZUVmZmVjdCIsImhhbmRsZVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ5UG9zIiwid2luZG93Iiwic2Nyb2xsWSIsImlzU2Nyb2xsaW5nVXAiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quotes.js\n");

/***/ })

});