"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Admin = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    // posts\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), posts = ref1[0], setPosts = ref1[1];\n    // route\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) {\n            newsFeed();\n        }\n    }, [\n        state && state.token\n    ]);\n    var newsFeed = _asyncToGenerator(C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/posts\");\n                case 3:\n                    data = _ctx.sent.data;\n                    // console.log(\"user posts => \", data);\n                    setPosts(data);\n                    _ctx.next = 10;\n                    break;\n                case 7:\n                    _ctx.prev = 7;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 10:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                7\n            ]\n        ]);\n    }));\n    var handleDelete = _asyncToGenerator(C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(post) {\n        var answer, data;\n        return C_Users_Solomon_Akinbiyi_Documents_Mypersonalwork_mern_projects_merncamp_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    answer = window.confirm(\"Are you sure?\");\n                    if (answer) {\n                        _ctx.next = 4;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\");\n                case 4:\n                    _ctx.next = 6;\n                    return axios__WEBPACK_IMPORTED_MODULE_6___default()[\"delete\"](\"/admin/delete-post/\".concat(post._id));\n                case 6:\n                    data = _ctx.sent.data;\n                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(\"Post deleted\");\n                    newsFeed();\n                    _ctx.next = 14;\n                    break;\n                case 11:\n                    _ctx.prev = 11;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 14:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                11\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"row py-5 bg-default-image text-light\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"ADMIN\"\n                        })\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \"row py-4\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                        className: \"col-md-8 offset-md-2\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: postsposts.map(function(post) {\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                                className: \"\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                },\n                                __self: _this1,\n                                children: [\n                                    post.content,\n                                    \" - \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"b\", {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 42\n                                        },\n                                        __self: _this1,\n                                        children: \"post.postedBy.name\"\n                                    }),\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"span\", {\n                                        className: \"text-danger\",\n                                        onClick: function() {\n                                            return handleDelete(post);\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 68\n                                        },\n                                        __self: _this1,\n                                        children: \"Delete\"\n                                    })\n                                ]\n                            }, post._id);\n                        })\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(Admin, \"BUV/ivELUpA8kC99iabUkya82Gs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Admin;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Admin);\nvar _c;\n$RefreshReg$(_c, \"Admin\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWdlcy9hZG1pbi9pbmRleC5qcz84YzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5pbXBvcnQgVXNlclJvdXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9Vc2VyUm91dGVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuXHJcblxyXG5jb25zdCBBZG1pbiA9ICgpID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIFxyXG4gIC8vIHBvc3RzXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIFxyXG4gIC8vIHJvdXRlXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4pIHtcclxuICAgICAgbmV3c0ZlZWQoKTtcclxuICAgIH1cclxuICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgY29uc3QgbmV3c0ZlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL3Bvc3RzYCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidXNlciBwb3N0cyA9PiBcIiwgZGF0YSk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChwb3N0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBhbnN3ZXIgPSB3aW5kb3cuY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIik7XHJcbiAgICAgIGlmICghYW5zd2VyKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2FkbWluL2RlbGV0ZS1wb3N0LyR7cG9zdC5faWR9YCk7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiUG9zdCBkZWxldGVkXCIpO1xyXG4gICAgICBuZXdzRmVlZCgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyUm91dGU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNSBiZy1kZWZhdWx0LWltYWdlIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5BRE1JTjwvaDE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggb2Zmc2V0LW1kLTJcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0c3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIga2V5PXtwb3N0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNvbnRlbnR9IC0gPGI+cG9zdC5wb3N0ZWRCeS5uYW1lPC9iPiA8c3BhbiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUocG9zdCl9PkRlbGV0ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9Vc2VyUm91dGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJVc2VyUm91dGUiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsInRvYXN0IiwiQWRtaW4iLCJzdGF0ZSIsInNldFN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInJvdXRlciIsInRva2VuIiwibmV3c0ZlZWQiLCJkYXRhIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZSIsInBvc3QiLCJhbnN3ZXIiLCJ3aW5kb3ciLCJjb25maXJtIiwiZGVsZXRlIiwiX2lkIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInBvc3RzcG9zdHMiLCJtYXAiLCJjb250ZW50IiwiYiIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ })

});