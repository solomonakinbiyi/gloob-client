"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./components/routes/AdminRoute.js":
/*!*****************************************!*\
  !*** ./components/routes/AdminRoute.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n\n\n\n\n\n\nconst AdminRoute = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const { 0: ok , 1: setOk  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (state && state.token) getCurrentAdmin();\n    }, [\n        state && state.token\n    ]);\n    const getCurrentAdmin = async ()=>{\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/current-admin`);\n            if (data.ok) setOk(true);\n        } catch (error) {\n            router.push(\"/\");\n        }\n    };\n     false && 0;\n    return !ok ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content-center display-1 text-primary p-5\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\components\\\\routes\\\\AdminRoute.js\",\n            lineNumber: 33,\n            columnNumber: 5\n        },\n        __self: undefined\n    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminRoute);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JvdXRlcy9BZG1pblJvdXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDOEI7QUFDaEI7QUFDUztBQUNMO0FBRTNDLEtBQUssQ0FBQ08sVUFBVSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ3BDLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlQLGlEQUFVLENBQUNHLGlEQUFXO0lBRWhELEtBQUssTUFBRUssRUFBRSxNQUFFQyxLQUFLLE1BQUlWLCtDQUFRLENBQUMsS0FBSztJQUNsQyxLQUFLLENBQUNXLE1BQU0sR0FBR1Qsc0RBQVM7SUFFeEJILGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsRUFBRVEsS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQUssRUFBRUMsZUFBZTtJQUMzQyxDQUFDLEVBQUUsQ0FBQ047UUFBQUEsS0FBSyxJQUFJQSxLQUFLLENBQUNLLEtBQUs7SUFBQSxDQUFDO0lBRXpCLEtBQUssQ0FBQ0MsZUFBZSxhQUFlLENBQUM7UUFDbkMsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQ2hCLGdEQUFTLEVBQUUsY0FBYztZQUNoRCxFQUFFLEVBQUVnQixJQUFJLENBQUNMLEVBQUUsRUFBRUMsS0FBSyxDQUFDLElBQUk7UUFDekIsQ0FBQyxDQUFDLEtBQUssRUFBRU0sS0FBSyxFQUFFLENBQUM7WUFDZkwsTUFBTSxDQUFDTSxJQUFJLENBQUMsQ0FBRztRQUNqQixDQUFDO0lBQ0gsQ0FBQztJQUVEQyxNQUNnQixJQUNkRSxDQUVRO0lBRVYsTUFBTSxFQUFFWCxFQUFFLHdFQUNQTiwyREFBWTtRQUNYa0IsSUFBSTtRQUNKQyxTQUFTLEVBQUMsQ0FBMEQ7Ozs7Ozs7O2tCQUduRWhCLFFBQVE7O0FBRWYsQ0FBQztBQUVELGlFQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL3JvdXRlcy9BZG1pblJvdXRlLmpzPzFhNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTeW5jT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5cclxuY29uc3QgQWRtaW5Sb3V0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50b2tlbikgZ2V0Q3VycmVudEFkbWluKCk7XHJcbiAgfSwgW3N0YXRlICYmIHN0YXRlLnRva2VuXSk7XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRBZG1pbiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvY3VycmVudC1hZG1pbmApO1xyXG4gICAgICBpZiAoZGF0YS5vaykgc2V0T2sodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJvY2Vzcy5icm93c2VyICYmXHJcbiAgICBzdGF0ZSA9PT0gbnVsbCAmJlxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGdldEN1cnJlbnRBZG1pbigpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIHJldHVybiAhb2sgPyAoXHJcbiAgICA8U3luY091dGxpbmVkXHJcbiAgICAgIHNwaW5cclxuICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZGlzcGxheS0xIHRleHQtcHJpbWFyeSBwLTVcIlxyXG4gICAgLz5cclxuICApIDogKFxyXG4gICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluUm91dGU7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsIlN5bmNPdXRsaW5lZCIsIlVzZXJDb250ZXh0IiwiQWRtaW5Sb3V0ZSIsImNoaWxkcmVuIiwic3RhdGUiLCJzZXRTdGF0ZSIsIm9rIiwic2V0T2siLCJyb3V0ZXIiLCJ0b2tlbiIsImdldEN1cnJlbnRBZG1pbiIsImRhdGEiLCJnZXQiLCJlcnJvciIsInB1c2giLCJwcm9jZXNzIiwiYnJvd3NlciIsInNldFRpbWVvdXQiLCJzcGluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/routes/AdminRoute.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {\n        },\n        token: \"\"\n    });\n    1;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const token = state && state.token ? state.token : \"\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = \"http://localhost:8000/api\";\n    (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;\n    // Add a response interceptor\n    axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function(response) {\n        // Any status code that lie within the range of 2xx cause this function to trigger\n        // Do something with response data\n        return response;\n    }, function(error) {\n        // Any status codes that falls outside the range of 2xx cause this function to trigger\n        // Do something with response error\n        let res = error.response;\n        if (res.status === 401 && res.config && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        __source: {\n            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\context\\\\index.js\",\n            lineNumber: 45,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ2pDO0FBQ2M7QUFFdkMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN0QyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJVCwrQ0FBUSxDQUFDLENBQUM7UUFDbENVLElBQUksRUFBRSxDQUFDO1FBQUEsQ0FBQztRQUNSQyxLQUFLLEVBQUUsQ0FBRTtJQUNYLENBQUM7SUFBRSxDQUFDO0lBRUpULGdEQUFTLEtBQU8sQ0FBQztRQUNmTyxRQUFRLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU07SUFDeEQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEtBQUssQ0FBQ0MsTUFBTSxHQUFHYixzREFBUztJQUV4QixLQUFLLENBQUNPLEtBQUssR0FBR0gsS0FBSyxJQUFJQSxLQUFLLENBQUNHLEtBQUssR0FBR0gsS0FBSyxDQUFDRyxLQUFLLEdBQUcsQ0FBRTtJQUdyRFIsK0RBQXNCLEdBQUdpQiwyQkFBMkI7SUFDcERqQixvRkFBNkMsSUFBSyxPQUFPLEVBQUVRLEtBQUs7SUFFaEUsRUFBNkI7SUFDN0JSLHNFQUErQixDQUM3QixRQUFRLENBQUV1QixRQUFRLEVBQUUsQ0FBQztRQUNuQixFQUFrRjtRQUNsRixFQUFrQztRQUNsQyxNQUFNLENBQUNBLFFBQVE7SUFDakIsQ0FBQyxFQUNELFFBQVEsQ0FBRUUsS0FBSyxFQUFFLENBQUM7UUFDaEIsRUFBc0Y7UUFDdEYsRUFBbUM7UUFDbkMsR0FBRyxDQUFDQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0YsUUFBUTtRQUN4QixFQUFFLEVBQUVHLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUtGLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3JFdkIsUUFBUSxDQUFDLElBQUk7WUFDYkssTUFBTSxDQUFDQyxZQUFZLENBQUNrQixVQUFVLENBQUMsQ0FBTTtZQUNyQ2hCLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBR0gsTUFBTSxzRUFDSDdCLFdBQVcsQ0FBQzhCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUM1QjtZQUFBQSxLQUFLO1lBQUVDLFFBQVE7UUFBQSxDQUFDOzs7Ozs7O2tCQUMzQ0YsUUFBUTs7QUFHZixDQUFDO0FBRW9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcjoge30sXHJcbiAgICB0b2tlbjogXCJcIixcclxuICB9KTsxXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhcIikpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB0b2tlbiA9IHN0YXRlICYmIHN0YXRlLnRva2VuID8gc3RhdGUudG9rZW4gOiBcIlwiO1xyXG5cclxuXHJcbiAgYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSTtcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuXHJcbiAgLy8gQWRkIGEgcmVzcG9uc2UgaW50ZXJjZXB0b3JcclxuICBheGlvcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIC8vIEFueSBzdGF0dXMgY29kZSB0aGF0IGxpZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDJ4eCBjYXVzZSB0aGlzIGZ1bmN0aW9uIHRvIHRyaWdnZXJcclxuICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggcmVzcG9uc2UgZGF0YVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LFxyXG4gICAgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vIEFueSBzdGF0dXMgY29kZXMgdGhhdCBmYWxscyBvdXRzaWRlIHRoZSByYW5nZSBvZiAyeHggY2F1c2UgdGhpcyBmdW5jdGlvbiB0byB0cmlnZ2VyXHJcbiAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlc3BvbnNlIGVycm9yXHJcbiAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiByZXMuY29uZmlnICYmICFyZXMuY29uZmlnLl9faXNSZXRyeVJlcXVlc3QpIHtcclxuICAgICAgICBzZXRTdGF0ZShudWxsKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoXCIpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBVc2VyQ29udGV4dCwgVXNlclByb3ZpZGVyIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlciIsInRva2VuIiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJvdXRlciIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiY29tbW9uIiwiaW50ZXJjZXB0b3JzIiwicmVzcG9uc2UiLCJ1c2UiLCJlcnJvciIsInJlcyIsInN0YXR1cyIsImNvbmZpZyIsIl9faXNSZXRyeVJlcXVlc3QiLCJyZW1vdmVJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var _components_routes_AdminRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/routes/AdminRoute */ \"./components/routes/AdminRoute.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-render-html */ \"react-render-html\");\n/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst Admin = ()=>{\n    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    // posts\n    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // route\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (state && state.token) {\n            newsFeed();\n        }\n    }, [\n        state && state.token\n    ]);\n    const newsFeed = async ()=>{\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`/posts`);\n            //   console.log(\"user posts => \", data);\n            setPosts(data);\n            console.log(\"user posts => \", posts[0]);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handleDelete = async (post)=>{\n        try {\n            const answer = window.confirm(\"Are you sure?\");\n            if (!answer) return;\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_5___default()[\"delete\"](`/admin/delete-post/${post._id}`);\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Post deleted\");\n            newsFeed();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_routes_AdminRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n            lineNumber: 50,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row py-5 bg-default-image text-light\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            },\n                            __self: undefined,\n                            children: \"ADMIN\"\n                        })\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"row py-4\",\n                    style: {\n                        width: \"100%\",\n                        maxWidth: \"900px\",\n                        marginLeft: \"auto\",\n                        marginRight: \"auto\"\n                    },\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-md-8 offset-md-2\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: posts && posts.map((post)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"d-flex justify-content-between\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                },\n                                __self: undefined,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                        className: \"\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        },\n                                        __self: undefined,\n                                        children: [\n                                            react_render_html__WEBPACK_IMPORTED_MODULE_7___default()(post.content),\n                                            \" - \",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 50\n                                                },\n                                                __self: undefined,\n                                                children: post.postedBy.name\n                                            })\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: \"text-danger\",\n                                        onClick: ()=>handleDelete(post)\n                                        ,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\Solomon Akinbiyi\\\\Documents\\\\Mypersonalwork\\\\mern-projects\\\\merncamp\\\\client\\\\pages\\\\admin\\\\index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 19\n                                        },\n                                        __self: undefined,\n                                        children: \"Delete\"\n                                    })\n                                ]\n                            }, post._id)\n                        )\n                    })\n                })\n            ]\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3lHQUVwRFosQ0FBRzt3Q0FDRkMsU0FBUyxFQUFDLENBQWE7d0NBQ3ZCWSxPQUFPLE1BQVFyQixZQUFZLENBQUNDLElBQUk7Ozs7Ozs7O2tEQUNqQyxDQUVEOzs7K0JBVG1EQSxJQUFJLENBQUNLLEdBQUc7Ozs7Ozs7QUFpQjdFLENBQUM7QUFFRCxpRUFBZW5CLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL2FkbWluL2luZGV4LmpzPzhjMjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0XCI7XHJcbmltcG9ydCBBZG1pblJvdXRlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9BZG1pblJvdXRlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gXCJyZWFjdC1yZW5kZXItaHRtbFwiO1xyXG5cclxuXHJcbmNvbnN0IEFkbWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIC8vIHBvc3RzXHJcbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8vIHJvdXRlXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4pIHtcclxuICAgICAgbmV3c0ZlZWQoKTtcclxuICAgIH1cclxuICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKTtcclxuXHJcbiAgY29uc3QgbmV3c0ZlZWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL3Bvc3RzYCk7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwidXNlciBwb3N0cyA9PiBcIiwgZGF0YSk7XHJcbiAgICAgIHNldFBvc3RzKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgcG9zdHMgPT4gXCIsIHBvc3RzWzBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocG9zdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpO1xyXG4gICAgICBpZiAoIWFuc3dlcikgcmV0dXJuO1xyXG5cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5kZWxldGUoYC9hZG1pbi9kZWxldGUtcG9zdC8ke3Bvc3QuX2lkfWApO1xyXG4gICAgICB0b2FzdC5lcnJvcihcIlBvc3QgZGVsZXRlZFwiKTtcclxuICAgICAgbmV3c0ZlZWQoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QWRtaW5Sb3V0ZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01IGJnLWRlZmF1bHQtaW1hZ2UgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgxPkFETUlOPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBweS00XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiOTAwcHhcIixcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBvZmZzZXQtbWQtMlwiPlxyXG4gICAgICAgICAgICB7cG9zdHMgJiZcclxuICAgICAgICAgICAgICBwb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIga2V5PXtwb3N0Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlbmRlckhUTUwocG9zdC5jb250ZW50KX0gLSA8Yj57cG9zdC5wb3N0ZWRCeS5uYW1lfTwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHBvc3QpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0FkbWluUm91dGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkbWluO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJBZG1pblJvdXRlIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ0b2FzdCIsInJlbmRlckhUTUwiLCJBZG1pbiIsInN0YXRlIiwic2V0U3RhdGUiLCJwb3N0cyIsInNldFBvc3RzIiwicm91dGVyIiwidG9rZW4iLCJuZXdzRmVlZCIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVEZWxldGUiLCJwb3N0IiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZSIsIl9pZCIsImVyciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJ3aWR0aCIsIm1heFdpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFwIiwiY29udGVudCIsImIiLCJwb3N0ZWRCeSIsIm5hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-render-html":
/*!************************************!*\
  !*** external "react-render-html" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-render-html");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/index.js"));
module.exports = __webpack_exports__;

})();