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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_cards_ParallaxBG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/ParallaxBG */ \"./components/cards/ParallaxBG.js\");\n/* harmony import */ var _components_cards_PostPublic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/PostPublic */ \"./components/cards/PostPublic.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _s1 = $RefreshSig$();\nvar socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"http://localhost:8000\", {\n    reconnection: true\n});\nfunction index(param) {\n    var posts = param.posts;\n    var _this = this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = _slicedToArray(useState([]), 2), newsFeed = ref1[0], setNewsFeed = ref1[1];\n    // useEffect(() => {\n    //   // console.log(\"SOCKETIO ON JOIN\", socket);\n    //   socket.on('receive-message', (newMessage) => {\n    //     alert(newMessage);\n    //   })\n    // }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        socket.on('new-post', function(newPost) {\n            // \n            setNewsFeed([\n                newPost, \n            ]);\n        });\n    }, []);\n    var head = function() {\n        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n            __source: {\n                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"MERNCAMP - A social network by devs for devs\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    name: \"description\",\n                    content: \"A social network by devs for devs\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:description\",\n                    content: \"A social network by devs for devs\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:type\",\n                    content: \"website\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:site_name\",\n                    content: \"MERNCAMP\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:url\",\n                    content: \"http://merncamp.com\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                    property: \"og:image:secure_url\",\n                    content: \"http://merncamp.com/images/default.jpg\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 44,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            ]\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            head(),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_ParallaxBG__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                url: \"/images/default.jpg\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"SOCIAL NETWORK\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"container\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row pt-5\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: posts.map(function(post) {\n                        /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"col-md-4\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                href: \"/post/view/\".concat(post._id),\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    },\n                                    __self: _this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_cards_PostPublic__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        post: post,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this\n                                    }, post._id)\n                                })\n                            })\n                        }, post._id);\n                    })\n                })\n            })\n        ]\n    }));\n}\n_s1(index, \"PK3dcHJUnQ7V4qPwWdp+il3dQ7g=\");\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSztBQUNVO0FBRUE7QUFDM0I7QUFDQTtBQUNLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakMsR0FBSyxDQUFDUSxNQUFNLEdBQUdELDREQUFFLENBQUNFLHVCQUFnQyxFQUFFLENBQUM7SUFDbkRHLFlBQVksRUFBRSxJQUFJO0FBQ3BCLENBQUM7U0FFUUMsS0FBSyxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVZDLEtBQUssR0FBUCxLQUFTLENBQVBBLEtBQUs7OztJQUNwQixHQUFLLENBQXFCYixHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0QsaURBQVcsR0FBekNlLEtBQUssR0FBY2QsR0FBdUIsS0FBbkNlLFFBQVEsR0FBSWYsR0FBdUI7SUFFakQsR0FBSyxDQUEyQmdCLElBQVksa0JBQVpBLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBcENDLFFBQVEsR0FBaUJELElBQVksS0FBM0JFLFdBQVcsR0FBSUYsSUFBWTtJQUU1QyxFQUFvQjtJQUNwQixFQUFnRDtJQUNoRCxFQUFtRDtJQUNuRCxFQUF5QjtJQUN6QixFQUFPO0lBQ1AsRUFBVTtJQUVWZixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2ZNLE1BQU0sQ0FBQ1ksRUFBRSxDQUFDLENBQVUsV0FBRSxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1lBQ2xDLEVBQUc7WUFDSEYsV0FBVyxDQUFDLENBQUNFO2dCQUFBQSxPQUFPO1lBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLFFBQVE7c0JBQ25CLE1BQU0seURBQUxqQixrREFBSTs7Ozs7Ozs7cUZBQ0ZrQixDQUFLOzs7Ozs7OzhCQUFDLENBQTRDOztxRkFDbERDLENBQUk7b0JBQUNDLElBQUksRUFBQyxDQUFhO29CQUFDQyxPQUFPLEVBQUMsQ0FBbUM7Ozs7Ozs7O3FGQUNuRUYsQ0FBSTtvQkFDSEcsUUFBUSxFQUFDLENBQWdCO29CQUN6QkQsT0FBTyxFQUFDLENBQW1DOzs7Ozs7OztxRkFFNUNGLENBQUk7b0JBQUNHLFFBQVEsRUFBQyxDQUFTO29CQUFDRCxPQUFPLEVBQUMsQ0FBUzs7Ozs7Ozs7cUZBQ3pDRixDQUFJO29CQUFDRyxRQUFRLEVBQUMsQ0FBYztvQkFBQ0QsT0FBTyxFQUFDLENBQVU7Ozs7Ozs7O3FGQUMvQ0YsQ0FBSTtvQkFBQ0csUUFBUSxFQUFDLENBQVE7b0JBQUNELE9BQU8sRUFBQyxDQUFxQjs7Ozs7Ozs7cUZBQ3BERixDQUFJO29CQUNIRyxRQUFRLEVBQUMsQ0FBcUI7b0JBQzlCRCxPQUFPLEVBQUMsQ0FBd0M7Ozs7Ozs7Ozs7O0lBS3RELE1BQU07O1lBRURKLElBQUk7aUZBQ0puQixvRUFBVTtnQkFBQ3lCLEdBQUcsRUFBQyxDQUFxQjs7Ozs7OzswQkFBQyxDQUFjOztpRkFDbkRDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OytGQUl2QkQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OEJBQ3RCaEIsS0FBSyxDQUFDaUIsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTtzQ0FDZCxNQUFNLHdEQUFMSCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBVTs7Ozs7OzsyR0FDdEJ4QixrREFBSTtnQ0FBQzJCLElBQUksRUFBRyxDQUFXLGFBQVcsT0FBVEQsSUFBSSxDQUFDRSxHQUFHOzs7Ozs7OytHQUMvQkMsQ0FBQzs7Ozs7OzttSEFDQy9CLG9FQUFVO3dDQUFnQjRCLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozt1Q0FBcEJBLElBQUksQ0FBQ0UsR0FBRzs7OzJCQUhBRixJQUFJLENBQUNFLEdBQUc7Ozs7OztBQVluRCxDQUFDO0lBM0RRckIsS0FBSzs7QUF1RWQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQYXJhbGxheEJHIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL1BhcmFsbGF4QkdcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUG9zdFB1YmxpYyBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkcy9Qb3N0UHVibGljXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuXHJcbmNvbnN0IHNvY2tldCA9IGlvKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NPQ0tFVElPLCB7XHJcbiAgcmVjb25uZWN0aW9uOiB0cnVlLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGluZGV4KHsgcG9zdHMgfSkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtuZXdzRmVlZCwgc2V0TmV3c0ZlZWRdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICAvLyBjb25zb2xlLmxvZyhcIlNPQ0tFVElPIE9OIEpPSU5cIiwgc29ja2V0KTtcclxuICAvLyAgIHNvY2tldC5vbigncmVjZWl2ZS1tZXNzYWdlJywgKG5ld01lc3NhZ2UpID0+IHtcclxuICAvLyAgICAgYWxlcnQobmV3TWVzc2FnZSk7XHJcbiAgLy8gICB9KVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNvY2tldC5vbignbmV3LXBvc3QnLCAobmV3UG9zdCkgPT4ge1xyXG4gICAgICAvLyBcclxuICAgICAgc2V0TmV3c0ZlZWQoW25ld1Bvc3QsXSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPk1FUk5DQU1QIC0gQSBzb2NpYWwgbmV0d29yayBieSBkZXZzIGZvciBkZXZzPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkEgc29jaWFsIG5ldHdvcmsgYnkgZGV2cyBmb3IgZGV2c1wiIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD1cIkEgc29jaWFsIG5ldHdvcmsgYnkgZGV2cyBmb3IgZGV2c1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiTUVSTkNBTVBcIiAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwOi8vbWVybmNhbXAuY29tXCIgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIlxyXG4gICAgICAgIGNvbnRlbnQ9XCJodHRwOi8vbWVybmNhbXAuY29tL2ltYWdlcy9kZWZhdWx0LmpwZ1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtoZWFkKCl9XHJcbiAgICAgIDxQYXJhbGxheEJHIHVybD1cIi9pbWFnZXMvZGVmYXVsdC5qcGdcIj5TT0NJQUwgTkVUV09SSzwvUGFyYWxsYXhCRz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZC1tZXNzYWdlJywgJ1RoaXMgaXMgc29sbycpXHJcbiAgICAgICAgfX0+U2VuZCBtZXNzYWdlPC9idXR0b24+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB0LTVcIj5cclxuICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17cG9zdC5faWR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC92aWV3LyR7cG9zdC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPFBvc3RQdWJsaWMga2V5PXtwb3N0Ll9pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9wb3N0c1wiKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdHM6IGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsiVXNlckNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiUGFyYWxsYXhCRyIsIlBvc3RQdWJsaWMiLCJIZWFkIiwiTGluayIsImlvIiwic29ja2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NPQ0tFVElPIiwicmVjb25uZWN0aW9uIiwiaW5kZXgiLCJwb3N0cyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VTdGF0ZSIsIm5ld3NGZWVkIiwic2V0TmV3c0ZlZWQiLCJvbiIsIm5ld1Bvc3QiLCJoZWFkIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInBvc3QiLCJocmVmIiwiX2lkIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});