"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Nav() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), current = ref[0], setCurrent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n         true && setCurrent(window.location.pathname);\n    }, [\n         true && window.location.pathname\n    ]);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var logout = function() {\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        router.push(\"/login\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n        className: \"nav bg-primary d-flex justify-content-between\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n            lineNumber: 25,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"a\", {\n                    className: \"nav-link text-light logo \".concat(current === \"/\" && \"active\"),\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                            src: \"/images/logo.png\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        }),\n                        \" MERNCAMP\"\n                    ]\n                })\n            }),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"dropdown\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"btn dropdown-toggle text-light\",\n                            type: \"button\",\n                            id: \"dropdownMenuButton1\",\n                            \"data-bs-toggle\": \"dropdown\",\n                            \"aria-expanded\": \"false\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: state && state.user && state.user.name\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n                            className: \"dropdown-menu\",\n                            \"aria-labelledby\": \"dropdownMenuButton1\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/user/dashboard\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item \".concat(current === \"/user/dashboard\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Dashboard\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/user/profile/update\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item \".concat(current === \"/user/profile/update\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 60,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: \"Profile\"\n                                        })\n                                    })\n                                }),\n                                state.user.role === \"Admin\" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/admin\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                            className: \"nav-link dropdown-item \".concat(current === \"/user/profile/update\" && \"active\"),\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            },\n                                            __self: this,\n                                            children: \"ProfilAdmine\"\n                                        })\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        onClick: logout,\n                                        className: \"nav-link\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: \"Logout\"\n                                    })\n                                })\n                            ]\n                        })\n                    ]\n                })\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/login\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(current === \"/login\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"Login\"\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/register\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            className: \"nav-link text-light \".concat(current === \"/register\" && \"active\"),\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\Nav.js\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"Register\"\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(Nav, \"KqNesKIc0k4iBoid1HeQHHrhzGk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRXBCLE1BQU07d0NBQUVLLFNBQVMsRUFBQyxDQUFVOzs7Ozs7O2tEQUFDLENBRXpDOzs7Ozs7Ozs7eUZBT0x4QixrREFBSTt3QkFBQ3lCLElBQUksRUFBQyxDQUFROzs7Ozs7O3VHQUNoQkMsQ0FBQzs0QkFDQUYsU0FBUyxFQUFHLENBQW9CLHNCQUUvQixPQURDZixPQUFPLEtBQUssQ0FBUSxXQUFJLENBQVE7Ozs7Ozs7c0NBRW5DLENBRUQ7Ozt5RkFFRFQsa0RBQUk7d0JBQUN5QixJQUFJLEVBQUMsQ0FBVzs7Ozs7Ozt1R0FDbkJDLENBQUM7NEJBQ0FGLFNBQVMsRUFBRyxDQUFvQixzQkFFL0IsT0FEQ2YsT0FBTyxLQUFLLENBQVcsY0FBSSxDQUFROzs7Ozs7O3NDQUV0QyxDQUVEOzs7Ozs7O0FBTVosQ0FBQztHQTNHUUQsR0FBRzs7UUFTS0gsa0RBQVM7OztLQVRqQkcsR0FBRztBQTZHWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5mdW5jdGlvbiBOYXYoKSB7XHJcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xyXG4gIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgc2V0U3RhdGUobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXYgYmctcHJpbWFyeSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC1saWdodCBsb2dvICR7Y3VycmVudCA9PT0gXCIvXCIgJiYgXCJhY3RpdmVcIn1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBdmF0YXIgc3JjPVwiL2ltYWdlcy9sb2dvLnBuZ1wiIC8+IE1FUk5DQU1QXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7c3RhdGUgIT09IG51bGwgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gZHJvcGRvd24tdG9nZ2xlIHRleHQtbGlnaHRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGlkPVwiZHJvcGRvd25NZW51QnV0dG9uMVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJkcm9wZG93blwiXHJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzdGF0ZSAmJiBzdGF0ZS51c2VyICYmIHN0YXRlLnVzZXIubmFtZX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvbjFcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgZHJvcGRvd24taXRlbSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvdXNlci9kYXNoYm9hcmRcIiAmJiBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL3Byb2ZpbGUvdXBkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgZHJvcGRvd24taXRlbSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PT0gXCIvdXNlci9wcm9maWxlL3VwZGF0ZVwiICYmIFwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAge3N0YXRlLnVzZXIucm9sZSA9PT0gXCJBZG1pblwiICYmIChcclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayBkcm9wZG93bi1pdGVtICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3VzZXIvcHJvZmlsZS91cGRhdGVcIiAmJiBcImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9maWxBZG1pbmVcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtbGlnaHQgJHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL2xvZ2luXCIgJiYgXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtbGlnaHQgJHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPT09IFwiL3JlZ2lzdGVyXCIgJiYgXCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVnaXN0ZXJcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiQXZhdGFyIiwiTGlzdCIsIk5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInByb2Nlc3MiLCJicm93c2VyIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJvdXRlciIsImxvZ291dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwibmF2IiwiY2xhc3NOYW1lIiwiaHJlZiIsImEiLCJzcmMiLCJkaXYiLCJ0eXBlIiwiaWQiLCJkYXRhLWJzLXRvZ2dsZSIsImFyaWEtZXhwYW5kZWQiLCJ1c2VyIiwibmFtZSIsInVsIiwiYXJpYS1sYWJlbGxlZGJ5IiwibGkiLCJyb2xlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

});