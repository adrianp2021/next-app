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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Quotes.module.scss */ \"./styles/Quotes.module.scss\");\n/* harmony import */ var _styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mountainbox/Desktop/Coding/next-app/components/Quotes.js\",\n    _this = undefined;\n\n\n // import dynamic from 'next/dynamic'\n\n\n\nvar Quotes = function Quotes() {\n  // let current = 0,\n  //     slides = document.getElementsByTagName('p')\n  // setInterval(function () {\n  //   for (var i = 0; i < slides.length; i++) {\n  //     slides[i].style.opacity = 0\n  //   }\n  //   current = (current != slides.length - 1) ? current + 1 : 0\n  //   slides[current].style.opacity = 1\n  // }, 3000)\n  var text = [\"ABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town\", \"I don’t like people, but I make an exception for ABC Agency. They’re pretty damn cool.\"];\n  var counter = 0;\n  var elem = document.getElementById(\"changeText\");\n  var inst = setInterval(change, 1000);\n\n  function change() {\n    elem.innerHTML = text[counter];\n    counter++;\n\n    if (counter >= text.length) {\n      counter = 0; // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle\n    }\n  }\n\n  return (\n    /*#__PURE__*/\n    // <>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n      className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default().section),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n          className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default().h2),\n          children: \"Our clients love our work\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n          className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default().h4),\n          children: \"But don\\u2019t just take our word for it...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default().p),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default().p),\n          children: \"\\u201CABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town\\u201D A Smith \\u2013 Neighbour\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          className: (_styles_Quotes_module_scss__WEBPACK_IMPORTED_MODULE_2___default().p),\n          children: \"\\u201CI don\\u2019t like people, but I make an exception for ABC Agency. They\\u2019re pretty damn cool.\\u201D Brian Jones,  America Big Corporation\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"changeText\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, _this) // </>\n\n  );\n};\n\n_c = Quotes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quotes);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quotes\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1F1b3Rlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0NBRUE7Ozs7QUFFQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBRW5CO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQUlDLElBQUksR0FBRyxDQUFDLG9IQUFELEVBQXVILHdGQUF2SCxDQUFYO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxNQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHQyxXQUFXLENBQUNDLE1BQUQsRUFBUyxJQUFULENBQXRCOztBQUVBLFdBQVNBLE1BQVQsR0FBa0I7QUFDaEJMLElBQUFBLElBQUksQ0FBQ00sU0FBTCxHQUFpQlIsSUFBSSxDQUFDQyxPQUFELENBQXJCO0FBQ0FBLElBQUFBLE9BQU87O0FBQ1AsUUFBSUEsT0FBTyxJQUFJRCxJQUFJLENBQUNTLE1BQXBCLEVBQTRCO0FBQzFCUixNQUFBQSxPQUFPLEdBQUcsQ0FBVixDQUQwQixDQUUxQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFBQTtBQUNFO0FBQ0E7QUFBUyxlQUFTLEVBQUVILDJFQUFwQjtBQUFBLDhCQUNFO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFFQSxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUksbUJBQVMsRUFBRUEsc0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUVBLHFFQUFoQjtBQUFBLGdDQUNFO0FBQUcsbUJBQVMsRUFBRUEscUVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFHRTtBQUFHLG1CQUFTLEVBQUVBLHFFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBWUU7QUFBSyxVQUFFLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsQ0FpQkU7O0FBakJGO0FBbUJELENBOUNEOztLQUFNQztBQStDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1F1b3Rlcy5qcz8wNmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVvdGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL1F1b3Rlcy5tb2R1bGUuc2Nzcydcbi8vIGltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcblxuY29uc3QgUXVvdGVzID0gKCkgPT4ge1xuXG4gIC8vIGxldCBjdXJyZW50ID0gMCxcbiAgLy8gICAgIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylcblxuICAvLyBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIHNsaWRlc1tpXS5zdHlsZS5vcGFjaXR5ID0gMFxuICAvLyAgIH1cbiAgLy8gICBjdXJyZW50ID0gKGN1cnJlbnQgIT0gc2xpZGVzLmxlbmd0aCAtIDEpID8gY3VycmVudCArIDEgOiAwXG4gIC8vICAgc2xpZGVzW2N1cnJlbnRdLnN0eWxlLm9wYWNpdHkgPSAxXG4gIC8vIH0sIDMwMDApXG5cbiAgdmFyIHRleHQgPSBbXCJBQkMgQWdlbmN5IG91ciB0aGUgYmVzdC4gTm90IG9ubHkgZGlkIHRoZXkgZGVsaXZlciBteSB3b3JrIG9uIHRpbWUsIHRoZXkgZXZlbiB3YWxrZWQgbXkgZG9nIHdoZW4gSSB3YXMgb3V0IG9mIHRvd25cIiwgXCJJIGRvbuKAmXQgbGlrZSBwZW9wbGUsIGJ1dCBJIG1ha2UgYW4gZXhjZXB0aW9uIGZvciBBQkMgQWdlbmN5LiBUaGV54oCZcmUgcHJldHR5IGRhbW4gY29vbC5cIl07XG4gIHZhciBjb3VudGVyID0gMDtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZVRleHRcIik7XG4gIHZhciBpbnN0ID0gc2V0SW50ZXJ2YWwoY2hhbmdlLCAxMDAwKTtcblxuICBmdW5jdGlvbiBjaGFuZ2UoKSB7XG4gICAgZWxlbS5pbm5lckhUTUwgPSB0ZXh0W2NvdW50ZXJdO1xuICAgIGNvdW50ZXIrKztcbiAgICBpZiAoY291bnRlciA+PSB0ZXh0Lmxlbmd0aCkge1xuICAgICAgY291bnRlciA9IDA7XG4gICAgICAvLyBjbGVhckludGVydmFsKGluc3QpOyAvLyB1bmNvbW1lbnQgdGhpcyBpZiB5b3Ugd2FudCB0byBzdG9wIHJlZnJlc2hpbmcgYWZ0ZXIgb25lIGN5Y2xlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMuc2VjdGlvbn0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5oMn0+T3VyIGNsaWVudHMgbG92ZSBvdXIgd29yazwvaDI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9e3F1b3RlU3R5bGVzLmg0fT5CdXQgZG9u4oCZdCBqdXN0IHRha2Ugb3VyIHdvcmQgZm9yIGl0Li4uPC9oND5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cXVvdGVTdHlsZXMucH0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17cXVvdGVTdHlsZXMucH0gPuKAnEFCQyBBZ2VuY3kgb3VyIHRoZSBiZXN0LiBOb3Qgb25seSBkaWQgdGhleSBkZWxpdmVyIG15IHdvcmsgb24gdGltZSwgdGhleSBldmVuIHdhbGtlZCBteSBkb2cgd2hlbiBJIHdhcyBvdXQgb2YgdG93buKAnVxuICAgICAgICAgIEEgU21pdGgg4oCTIE5laWdoYm91cjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtxdW90ZVN0eWxlcy5wfSA+4oCcSSBkb27igJl0IGxpa2UgcGVvcGxlLCBidXQgSSBtYWtlIGFuIGV4Y2VwdGlvbiBmb3IgQUJDIEFnZW5jeS4gVGhleeKAmXJlIHByZXR0eSBkYW1uIGNvb2wu4oCdXG4gICAgICAgICAgQnJpYW4gSm9uZXMsICBBbWVyaWNhIEJpZyBDb3Jwb3JhdGlvbjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImNoYW5nZVRleHRcIj48L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbiAgICAvLyA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFF1b3RlczsiXSwibmFtZXMiOlsiUmVhY3QiLCJxdW90ZVN0eWxlcyIsIlF1b3RlcyIsInRleHQiLCJjb3VudGVyIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0Iiwic2V0SW50ZXJ2YWwiLCJjaGFuZ2UiLCJpbm5lckhUTUwiLCJsZW5ndGgiLCJzZWN0aW9uIiwiaDIiLCJoNCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Quotes.js\n");

/***/ })

});