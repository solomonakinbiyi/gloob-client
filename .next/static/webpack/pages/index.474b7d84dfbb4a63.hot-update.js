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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cards_ParallaxBG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/ParallaxBG */ \"./components/cards/ParallaxBG.js\");\n/* harmony import */ var _components_cards_PostPublic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/PostPublic */ \"./components/cards/PostPublic.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"http://localhost:8000\", {\n    reconnection: true\n});\nfunction index(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext), state = ref[0], setState = ref[1];\n    // useEffect(() => {\n    //   // console.log(\"SOCKETIO ON JOIN\", socket);\n    //   socket.on('receive-message', (newMessage) => {\n    //     alert(newMessage);\n    //   })\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        socket.on('new-post', function(newPost) {\n        });\n    }, []);\n    var head = function() {\n        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"MERNCAMP - A social network by devs for devs\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    name: \"description\",\n                    content: \"A social network by devs for devs\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:description\",\n                    content: \"A social network by devs for devs\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:type\",\n                    content: \"website\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:site_name\",\n                    content: \"MERNCAMP\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:url\",\n                    content: \"http://merncamp.com\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:image:secure_url\",\n                    content: \"http://merncamp.com/images/default.jpg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            ]\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            head(),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_ParallaxBG__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                url: \"/images/default.jpg\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"SOCIAL NETWORK\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row pt-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: posts.map(function(post) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-md-4\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/post/view/\".concat(post._id),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_PostPublic__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        post: post,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    }, post._id)\n                                })\n                            })\n                        }, post._id);\n                    })\n                })\n            })\n        ]\n    }));\n}\n_s(index, \"fLVqO3p0FcvnEO4nGi6SNKkqK10=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSztBQUNVO0FBRUE7QUFDM0I7QUFDQTtBQUNLOztBQUVqQyxHQUFLLENBQUNRLE1BQU0sR0FBR0QsNERBQUUsQ0FBQ0UsdUJBQWdDLEVBQUUsQ0FBQztJQUNuREcsWUFBWSxFQUFFLElBQUk7QUFDcEIsQ0FBQztTQUVRQyxLQUFLLENBQUMsS0FBUyxFQUFFLENBQUM7UUFBVkMsS0FBSyxHQUFQLEtBQVMsQ0FBUEEsS0FBSzs7O0lBQ3BCLEdBQUssQ0FBcUJiLEdBQXVCLEdBQXZCQSxpREFBVSxDQUFDRCxpREFBVyxHQUF6Q2UsS0FBSyxHQUFjZCxHQUF1QixLQUFuQ2UsUUFBUSxHQUFJZixHQUF1QjtJQUVqRCxFQUFvQjtJQUNwQixFQUFnRDtJQUNoRCxFQUFtRDtJQUNuRCxFQUF5QjtJQUN6QixFQUFPO0lBQ1AsRUFBVTtJQUVWQyxnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZNLE1BQU0sQ0FBQ1MsRUFBRSxDQUFDLENBQVUsV0FBRSxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1FBRXBDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsR0FBSyxDQUFDQyxJQUFJLEdBQUcsUUFBUTtzQkFDbkIsTUFBTSx5REFBTGQsa0RBQUk7Ozs7Ozs7O3FGQUNGZSxDQUFLOzs7Ozs7OzhCQUFDLENBQTRDOztxRkFDbERDLENBQUk7b0JBQUNDLElBQUksRUFBQyxDQUFhO29CQUFDQyxPQUFPLEVBQUMsQ0FBbUM7Ozs7Ozs7O3FGQUNuRUYsQ0FBSTtvQkFDSEcsUUFBUSxFQUFDLENBQWdCO29CQUN6QkQsT0FBTyxFQUFDLENBQW1DOzs7Ozs7OztxRkFFNUNGLENBQUk7b0JBQUNHLFFBQVEsRUFBQyxDQUFTO29CQUFDRCxPQUFPLEVBQUMsQ0FBUzs7Ozs7Ozs7cUZBQ3pDRixDQUFJO29CQUFDRyxRQUFRLEVBQUMsQ0FBYztvQkFBQ0QsT0FBTyxFQUFDLENBQVU7Ozs7Ozs7O3FGQUMvQ0YsQ0FBSTtvQkFBQ0csUUFBUSxFQUFDLENBQVE7b0JBQUNELE9BQU8sRUFBQyxDQUFxQjs7Ozs7Ozs7cUZBQ3BERixDQUFJO29CQUNIRyxRQUFRLEVBQUMsQ0FBcUI7b0JBQzlCRCxPQUFPLEVBQUMsQ0FBd0M7Ozs7Ozs7Ozs7O0lBS3RELE1BQU07O1lBRURKLElBQUk7aUZBQ0poQixvRUFBVTtnQkFBQ3NCLEdBQUcsRUFBQyxDQUFxQjs7Ozs7OzswQkFBQyxDQUFjOztpRkFDbkRDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OytGQUl2QkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OEJBQ3RCYixLQUFLLENBQUNjLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7c0NBQ2QsTUFBTSx3REFBTEgsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7MkdBQ3RCckIsa0RBQUk7Z0NBQUN3QixJQUFJLEVBQUcsQ0FBVyxhQUFXLE9BQVRELElBQUksQ0FBQ0UsR0FBRzs7Ozs7OzsrR0FDL0JDLENBQUM7Ozs7Ozs7bUhBQ0M1QixvRUFBVTt3Q0FBZ0J5QixJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7dUNBQXBCQSxJQUFJLENBQUNFLEdBQUc7OzsyQkFIQUYsSUFBSSxDQUFDRSxHQUFHOzs7Ozs7QUFZbkQsQ0FBQztHQXhEUWxCLEtBQUs7O0FBb0VkLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUGFyYWxsYXhCRyBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkcy9QYXJhbGxheEJHXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFBvc3RQdWJsaWMgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvUG9zdFB1YmxpY1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcblxyXG5jb25zdCBzb2NrZXQgPSBpbyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TT0NLRVRJTywge1xyXG4gIHJlY29ubmVjdGlvbjogdHJ1ZSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbmRleCh7IHBvc3RzIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJTT0NLRVRJTyBPTiBKT0lOXCIsIHNvY2tldCk7XHJcbiAgLy8gICBzb2NrZXQub24oJ3JlY2VpdmUtbWVzc2FnZScsIChuZXdNZXNzYWdlKSA9PiB7XHJcbiAgLy8gICAgIGFsZXJ0KG5ld01lc3NhZ2UpO1xyXG4gIC8vICAgfSlcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzb2NrZXQub24oJ25ldy1wb3N0JywgKG5ld1Bvc3QpID0+IHtcclxuICAgICAgXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5NRVJOQ0FNUCAtIEEgc29jaWFsIG5ldHdvcmsgYnkgZGV2cyBmb3IgZGV2czwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIHNvY2lhbCBuZXR3b3JrIGJ5IGRldnMgZm9yIGRldnNcIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJBIHNvY2lhbCBuZXR3b3JrIGJ5IGRldnMgZm9yIGRldnNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk1FUk5DQU1QXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL21lcm5jYW1wLmNvbVwiIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCJcclxuICAgICAgICBjb250ZW50PVwiaHR0cDovL21lcm5jYW1wLmNvbS9pbWFnZXMvZGVmYXVsdC5qcGdcIlxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7aGVhZCgpfVxyXG4gICAgICA8UGFyYWxsYXhCRyB1cmw9XCIvaW1hZ2VzL2RlZmF1bHQuanBnXCI+U09DSUFMIE5FVFdPUks8L1BhcmFsbGF4Qkc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmQtbWVzc2FnZScsICdUaGlzIGlzIHNvbG8nKVxyXG4gICAgICAgIH19PlNlbmQgbWVzc2FnZTwvYnV0dG9uPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC01XCI+XHJcbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBrZXk9e3Bvc3QuX2lkfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Qvdmlldy8ke3Bvc3QuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxQb3N0UHVibGljIGtleT17cG9zdC5faWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvcG9zdHNcIik7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3RzOiBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIlBhcmFsbGF4QkciLCJQb3N0UHVibGljIiwiSGVhZCIsIkxpbmsiLCJpbyIsInNvY2tldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TT0NLRVRJTyIsInJlY29ubmVjdGlvbiIsImluZGV4IiwicG9zdHMiLCJzdGF0ZSIsInNldFN0YXRlIiwib24iLCJuZXdQb3N0IiwiaGVhZCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwb3N0IiwiaHJlZiIsIl9pZCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});