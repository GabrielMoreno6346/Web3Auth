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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moralisweb3/next */ \"@moralisweb3/next\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { requestChallengeAsync  } = (0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__.useAuthRequestChallengeEvm)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.MetaMaskConnector()\n        });\n        const { message  } = await requestChallengeAsync({\n            address: account,\n            chainId: chain.id\n        });\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"moralis-auth\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\r\n     * instead of using signIn(..., redirect: \"/user\")\r\n     * we get the url from callback and push it to the router to avoid page refreshing\r\n     */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Web3 Authentication\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\signin.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAuth,\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\signin.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\gkmz\\\\OneDrive\\\\Documentos\\\\Moralis\\\\Quickstart NextJS\\\\pages\\\\signin.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBOEQ7QUFDckI7QUFDcUM7QUFDdEM7QUFDdUI7QUFFL0QsU0FBU1EsTUFBTSxHQUFHO0lBQ2hCLE1BQU0sRUFBRUMsWUFBWSxHQUFFLEdBQUdOLGlEQUFVLEVBQUU7SUFDckMsTUFBTSxFQUFFTyxlQUFlLEdBQUUsR0FBR0wsb0RBQWEsRUFBRTtJQUMzQyxNQUFNLEVBQUVNLFdBQVcsR0FBRSxHQUFHVCxpREFBVSxFQUFFO0lBQ3BDLE1BQU0sRUFBRVUsZ0JBQWdCLEdBQUUsR0FBR1IscURBQWMsRUFBRTtJQUM3QyxNQUFNLEVBQUVTLHFCQUFxQixHQUFFLEdBQUdOLDZFQUEwQixFQUFFO0lBQzlELE1BQU0sRUFBRU8sSUFBSSxHQUFFLEdBQUdSLHNEQUFTLEVBQUU7SUFFNUIsTUFBTVMsVUFBVSxHQUFHLFVBQVk7UUFDN0IsSUFBSUosV0FBVyxFQUFFO1lBQ2YsTUFBTUQsZUFBZSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELE1BQU0sRUFBRU0sT0FBTyxHQUFFQyxLQUFLLEdBQUUsR0FBRyxNQUFNUixZQUFZLENBQUM7WUFDNUNTLFNBQVMsRUFBRSxJQUFJbEIsd0VBQWlCLEVBQUU7U0FDbkMsQ0FBQztRQUVGLE1BQU0sRUFBRW1CLE9BQU8sR0FBRSxHQUFHLE1BQU1OLHFCQUFxQixDQUFDO1lBQzlDTyxPQUFPLEVBQUVKLE9BQU87WUFDaEJLLE9BQU8sRUFBRUosS0FBSyxDQUFDSyxFQUFFO1NBQ2xCLENBQUM7UUFFRixNQUFNQyxTQUFTLEdBQUcsTUFBTVgsZ0JBQWdCLENBQUM7WUFBRU8sT0FBTztTQUFFLENBQUM7UUFFckQsNkRBQTZEO1FBQzdELE1BQU0sRUFBRUssR0FBRyxHQUFFLEdBQUcsTUFBTXZCLHVEQUFNLENBQUMsY0FBYyxFQUFFO1lBQzNDa0IsT0FBTztZQUNQSSxTQUFTO1lBQ1RFLFFBQVEsRUFBRSxLQUFLO1lBQ2ZDLFdBQVcsRUFBRSxPQUFPO1NBQ3JCLENBQUM7UUFDRjtJQUtGLENBQUM7SUFFRCxxQkFDRSxRQUFDQyxLQUFHOzs7c0ZBQ0U7Ozs7O29CQUF3QjswQkFDNUI7Z0JBQVFHLE9BQU8sRUFBRWY7Ozs7OztvQkFBOEM7Ozs7OztZQUMzRCxDQUNOO0FBQ0osQ0FBQztBQUVELGVBQWVQLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWNrc3RhcnQtbmV4dGpzLy4vcGFnZXMvc2lnbmluLmpzeD8wNTNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFNYXNrQ29ubmVjdG9yIH0gZnJvbSBcIndhZ21pL2Nvbm5lY3RvcnMvbWV0YU1hc2tcIjtcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBY2NvdW50LCB1c2VDb25uZWN0LCB1c2VTaWduTWVzc2FnZSwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQXV0aFJlcXVlc3RDaGFsbGVuZ2VFdm0gfSBmcm9tIFwiQG1vcmFsaXN3ZWIzL25leHRcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCB7IGNvbm5lY3RBc3luYyB9ID0gdXNlQ29ubmVjdCgpO1xyXG4gIGNvbnN0IHsgZGlzY29ubmVjdEFzeW5jIH0gPSB1c2VEaXNjb25uZWN0KCk7XHJcbiAgY29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xyXG4gIGNvbnN0IHsgc2lnbk1lc3NhZ2VBc3luYyB9ID0gdXNlU2lnbk1lc3NhZ2UoKTtcclxuICBjb25zdCB7IHJlcXVlc3RDaGFsbGVuZ2VBc3luYyB9ID0gdXNlQXV0aFJlcXVlc3RDaGFsbGVuZ2VFdm0oKTtcclxuICBjb25zdCB7IHB1c2ggfSA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICAgIGF3YWl0IGRpc2Nvbm5lY3RBc3luYygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgYWNjb3VudCwgY2hhaW4gfSA9IGF3YWl0IGNvbm5lY3RBc3luYyh7XHJcbiAgICAgIGNvbm5lY3RvcjogbmV3IE1ldGFNYXNrQ29ubmVjdG9yKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF3YWl0IHJlcXVlc3RDaGFsbGVuZ2VBc3luYyh7XHJcbiAgICAgIGFkZHJlc3M6IGFjY291bnQsXHJcbiAgICAgIGNoYWluSWQ6IGNoYWluLmlkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgc2lnbk1lc3NhZ2VBc3luYyh7IG1lc3NhZ2UgfSk7XHJcblxyXG4gICAgLy8gcmVkaXJlY3QgdXNlciBhZnRlciBzdWNjZXNzIGF1dGhlbnRpY2F0aW9uIHRvICcvdXNlcicgcGFnZVxyXG4gICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNpZ25JbihcIm1vcmFsaXMtYXV0aFwiLCB7XHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICAgIHNpZ25hdHVyZSxcclxuICAgICAgcmVkaXJlY3Q6IGZhbHNlLFxyXG4gICAgICBjYWxsYmFja1VybDogXCIvdXNlclwiLFxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIGluc3RlYWQgb2YgdXNpbmcgc2lnbkluKC4uLiwgcmVkaXJlY3Q6IFwiL3VzZXJcIilcclxuICAgICAqIHdlIGdldCB0aGUgdXJsIGZyb20gY2FsbGJhY2sgYW5kIHB1c2ggaXQgdG8gdGhlIHJvdXRlciB0byBhdm9pZCBwYWdlIHJlZnJlc2hpbmdcclxuICAgICAqL1xyXG4gICAgcHVzaCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDM+V2ViMyBBdXRoZW50aWNhdGlvbjwvaDM+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQXV0aH0+QXV0aGVudGljYXRlIHZpYSBNZXRhbWFzazwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbkluOyJdLCJuYW1lcyI6WyJNZXRhTWFza0Nvbm5lY3RvciIsInNpZ25JbiIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidXNlU2lnbk1lc3NhZ2UiLCJ1c2VEaXNjb25uZWN0IiwidXNlUm91dGVyIiwidXNlQXV0aFJlcXVlc3RDaGFsbGVuZ2VFdm0iLCJTaWduSW4iLCJjb25uZWN0QXN5bmMiLCJkaXNjb25uZWN0QXN5bmMiLCJpc0Nvbm5lY3RlZCIsInNpZ25NZXNzYWdlQXN5bmMiLCJyZXF1ZXN0Q2hhbGxlbmdlQXN5bmMiLCJwdXNoIiwiaGFuZGxlQXV0aCIsImFjY291bnQiLCJjaGFpbiIsImNvbm5lY3RvciIsIm1lc3NhZ2UiLCJhZGRyZXNzIiwiY2hhaW5JZCIsImlkIiwic2lnbmF0dXJlIiwidXJsIiwicmVkaXJlY3QiLCJjYWxsYmFja1VybCIsImRpdiIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n");

/***/ }),

/***/ "@moralisweb3/next":
/*!************************************!*\
  !*** external "@moralisweb3/next" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/next");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("wagmi/connectors/metaMask");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.jsx"));
module.exports = __webpack_exports__;

})();