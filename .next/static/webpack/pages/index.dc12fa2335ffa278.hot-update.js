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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cards_ParallaxBG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/ParallaxBG */ \"./components/cards/ParallaxBG.js\");\n/* harmony import */ var _components_cards_PostPublic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/PostPublic */ \"./components/cards/PostPublic.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar _s1 = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"http://localhost:8000\", {\n    reconnection: true\n});\nfunction index(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = _slicedToArray(useState([]), 2), newsFeed = ref1[0], setNewsFeed = ref1[1];\n    // useEffect(() => {\n    //   // console.log(\"SOCKETIO ON JOIN\", socket);\n    //   socket.on('receive-message', (newMessage) => {\n    //     alert(newMessage);\n    //   })\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        socket.on(\"new-post\", function(newPost) {\n            //\n            setNewsFeed([\n                newPost\n            ].concat(_toConsumableArray(posts)));\n        });\n    }, []);\n    var head = function() {\n        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"MERNCAMP - A social network by devs for devs\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    name: \"description\",\n                    content: \"A social network by devs for devs\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:description\",\n                    content: \"A social network by devs for devs\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:type\",\n                    content: \"website\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:site_name\",\n                    content: \"MERNCAMP\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:url\",\n                    content: \"http://merncamp.com\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:image:secure_url\",\n                    content: \"http://merncamp.com/images/default.jpg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            ]\n        });\n    };\n    var collection = newsFeed.length > 0 ? newsFeed : posts;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            head(),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_ParallaxBG__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                url: \"/images/default.jpg\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"SOCIAL NETWORK\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row pt-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: collection.map(function(post) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-md-4\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/post/view/\".concat(post._id),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_PostPublic__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        post: post,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    }, post._id)\n                                })\n                            })\n                        }, post._id);\n                    })\n                })\n            })\n        ]\n    }));\n}\n_s1(index, \"PK3dcHJUnQ7V4qPwWdp+il3dQ7g=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBWW5ELENBQUM7SUE3RFF2QixLQUFLOztBQXlFZCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFBhcmFsbGF4QkcgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvUGFyYWxsYXhCR1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBQb3N0UHVibGljIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL1Bvc3RQdWJsaWNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuY29uc3Qgc29ja2V0ID0gaW8ocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU09DS0VUSU8sIHtcclxuICByZWNvbm5lY3Rpb246IHRydWUsXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5kZXgoeyBwb3N0cyB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgW25ld3NGZWVkLCBzZXROZXdzRmVlZF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcIlNPQ0tFVElPIE9OIEpPSU5cIiwgc29ja2V0KTtcclxuICAvLyAgIHNvY2tldC5vbigncmVjZWl2ZS1tZXNzYWdlJywgKG5ld01lc3NhZ2UpID0+IHtcclxuICAvLyAgICAgYWxlcnQobmV3TWVzc2FnZSk7XHJcbiAgLy8gICB9KVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbihcIm5ldy1wb3N0XCIsIChuZXdQb3N0KSA9PiB7XHJcbiAgICAgIC8vXHJcbiAgICAgIHNldE5ld3NGZWVkKFtuZXdQb3N0LCAuLi5wb3N0c10pO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5NRVJOQ0FNUCAtIEEgc29jaWFsIG5ldHdvcmsgYnkgZGV2cyBmb3IgZGV2czwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBIHNvY2lhbCBuZXR3b3JrIGJ5IGRldnMgZm9yIGRldnNcIiAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJBIHNvY2lhbCBuZXR3b3JrIGJ5IGRldnMgZm9yIGRldnNcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIk1FUk5DQU1QXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiaHR0cDovL21lcm5jYW1wLmNvbVwiIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCJcclxuICAgICAgICBjb250ZW50PVwiaHR0cDovL21lcm5jYW1wLmNvbS9pbWFnZXMvZGVmYXVsdC5qcGdcIlxyXG4gICAgICAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGNvbGxlY3Rpb24gPSBuZXdzRmVlZC5sZW5ndGggPiAwID8gbmV3c0ZlZWQgOiBwb3N0cztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkKCl9XHJcbiAgICAgIDxQYXJhbGxheEJHIHVybD1cIi9pbWFnZXMvZGVmYXVsdC5qcGdcIj5TT0NJQUwgTkVUV09SSzwvUGFyYWxsYXhCRz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZC1tZXNzYWdlJywgJ1RoaXMgaXMgc29sbycpXHJcbiAgICAgICAgfX0+U2VuZCBtZXNzYWdlPC9idXR0b24+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB0LTVcIj5cclxuICAgICAgICAgIHtjb2xsZWN0aW9uLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXtwb3N0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0L3ZpZXcvJHtwb3N0Ll9pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8UG9zdFB1YmxpYyBrZXk9e3Bvc3QuX2lkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL3Bvc3RzXCIpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0czogZGF0YSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJQYXJhbGxheEJHIiwiUG9zdFB1YmxpYyIsIkhlYWQiLCJMaW5rIiwiaW8iLCJzb2NrZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU09DS0VUSU8iLCJyZWNvbm5lY3Rpb24iLCJpbmRleCIsInBvc3RzIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwibmV3c0ZlZWQiLCJzZXROZXdzRmVlZCIsIm9uIiwibmV3UG9zdCIsImhlYWQiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsInByb3BlcnR5IiwiY29sbGVjdGlvbiIsImxlbmd0aCIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJocmVmIiwiX2lkIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});