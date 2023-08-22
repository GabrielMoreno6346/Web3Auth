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
exports.id = "pages/user";
exports.ids = ["pages/user"];
exports.modules = {

/***/ "./pages/user.jsx":
/*!************************!*\
  !*** ./pages/user.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// gets a prop from getServerSideProps\nfunction User({ user  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"User session:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\user.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(user, null, 2)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\user.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)({\n                        redirect: \"/signin\"\n                    }),\n                children: \"Sign out\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\user.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\user.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)(context);\n    // redirect if not authenticated\n    if (!session) {\n        return {\n            redirect: {\n                destination: \"/signin\",\n                permanent: false\n            }\n        };\n    }\n    return {\n        props: {\n            user: session.user\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFzRDtBQUV0RCxzQ0FBc0M7QUFDdEMsU0FBU0UsSUFBSSxDQUFDLEVBQUVDLElBQUksR0FBRSxFQUFFO0lBQ3RCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxlQUFhOzs7OztvQkFBSzswQkFDdEIsOERBQUNDLEtBQUc7MEJBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Ozs7b0JBQU87MEJBQzFDLDhEQUFDTSxRQUFNO2dCQUFDQyxPQUFPLEVBQUUsSUFBTVQsd0RBQU8sQ0FBQzt3QkFBRVUsUUFBUSxFQUFFLFNBQVM7cUJBQUUsQ0FBQzswQkFBRSxVQUFROzs7OztvQkFBUzs7Ozs7O1lBQ3RFLENBQ047QUFDSixDQUFDO0FBRU0sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNQyxPQUFPLEdBQUcsTUFBTWQsMkRBQVUsQ0FBQ2EsT0FBTyxDQUFDO0lBRXpDLGdDQUFnQztJQUNoQyxJQUFJLENBQUNDLE9BQU8sRUFBRTtRQUNaLE9BQU87WUFDTEgsUUFBUSxFQUFFO2dCQUNSSSxXQUFXLEVBQUUsU0FBUztnQkFDdEJDLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxPQUFPO1FBQ0xDLEtBQUssRUFBRTtZQUFFZCxJQUFJLEVBQUVXLE9BQU8sQ0FBQ1gsSUFBSTtTQUFFO0tBQzlCLENBQUM7QUFDSixDQUFDO0FBRUQsaUVBQWVELElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWNrc3RhcnQtbmV4dGpzLy4vcGFnZXMvdXNlci5qc3g/MjI1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuLy8gZ2V0cyBhIHByb3AgZnJvbSBnZXRTZXJ2ZXJTaWRlUHJvcHNcclxuZnVuY3Rpb24gVXNlcih7IHVzZXIgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDQ+VXNlciBzZXNzaW9uOjwvaDQ+XHJcbiAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHVzZXIsIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoeyByZWRpcmVjdDogXCIvc2lnbmluXCIgfSl9PlNpZ24gb3V0PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcclxuXHJcbiAgLy8gcmVkaXJlY3QgaWYgbm90IGF1dGhlbnRpY2F0ZWRcclxuICBpZiAoIXNlc3Npb24pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246IFwiL3NpZ25pblwiLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHVzZXI6IHNlc3Npb24udXNlciB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7Il0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJzaWduT3V0IiwiVXNlciIsInVzZXIiLCJkaXYiLCJoNCIsInByZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJidXR0b24iLCJvbkNsaWNrIiwicmVkaXJlY3QiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic2Vzc2lvbiIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/user.jsx"));
module.exports = __webpack_exports__;

})();