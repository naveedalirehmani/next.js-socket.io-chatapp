"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/[id]",{

/***/ "./pages/user/[id].tsx":
/*!*****************************!*\
  !*** ./pages/user/[id].tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_button_CardButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/CardButton */ \"./components/button/CardButton.tsx\");\n/* harmony import */ var _axios_axios_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../axios/axios.js */ \"./axios/axios.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  /* position */\\n\\n  nav {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0.2rem 1rem;\\n    /* border:1px solid red; */\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #0a0d20;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ENDPOINT = \"http://localhost:4000\";\nvar User = function(param) {\n    var children = param.children, userData = param.userData;\n    _s();\n    var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ENDPOINT);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _axios_axios_js__WEBPACK_IMPORTED_MODULE_4__.axiosSignup.get(\"/getuser\", {\n            headers: {\n                \"auth-token\": localStorage.getItem(\"auth-token\")\n            }\n        }).then(function(response) {\n            return setUser(response.data);\n        }).catch(function(error) {\n            return console.log(error);\n        });\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), allMessages1 = ref1[0], setAllMessages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), render = ref2[0], setRender = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        socket.on('allMessages', function(allMessages) {\n            console.log(allMessages);\n            setAllMessages(allMessages);\n        });\n        return function() {\n            socket.disconnect();\n        };\n    }, [\n        render\n    ]);\n    var routes = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = routes.query.id;\n    var logOutHandler = function() {\n        localStorage.removeItem(\"auth-token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/home/signup\");\n    };\n    var addMessage = function() {\n        socket.emit('addMessage', {\n            message: 'hello',\n            userName: user.user.userName\n        });\n        setRender(render + 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Background, {\n        __source: {\n            fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n            lineNumber: 47,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UserDiv, {\n            __source: {\n                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"logo\",\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"user\",\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_CardButton__WEBPACK_IMPORTED_MODULE_3__.CardButton, {\n                                title: \"Log Out\",\n                                type: \"\",\n                                onSubmit: logOutHandler,\n                                isLoading: false,\n                                __source: {\n                                    fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                }),\n                \"id \",\n                id,\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: addMessage,\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"lkasjdhgl\"\n                })\n            ]\n        })\n    }));\n};\n_s(User, \"hv4qugMW6UH2etl3MJLo91uMBWI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar UserDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = UserDiv;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = Background;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"User\");\n$RefreshReg$(_c1, \"UserDiv\");\n$RefreshReg$(_c2, \"Background\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUMEMsS0FBSyxFQUFDLENBQVM7Z0NBQ2ZDLElBQUksRUFBQyxDQUFFO2dDQUNQQyxRQUFRLEVBQUVkLGFBQWE7Z0NBQ3ZCZSxTQUFTLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Z0JBR2hCLENBQ0g7Z0JBQUNqQixFQUFFO3FGQUNMa0IsQ0FBTTtvQkFBQ0MsT0FBTyxFQUFFZCxVQUFVOzs7Ozs7OzhCQUFFLENBQVM7Ozs7O0FBSTlDLENBQUM7R0FuRFk3QixJQUFJOztRQW1CQUwsa0RBQVM7OztLQW5CYkssSUFBSTtBQXFEakIsK0RBQWVBLElBQUksRUFBQztBQUVwQixHQUFLLENBQUNrQyxPQUFPLEdBQUd6Qyw2REFBVTtNQUFwQnlDLE9BQU87QUFlYixHQUFLLENBQUNELFVBQVUsR0FBR3hDLDZEQUFVO01BQXZCd0MsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyL1tpZF0udHN4P2I4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENhcmRCdXR0b24gfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9idXR0b24vQ2FyZEJ1dHRvblwiO1xuaW1wb3J0IHsgYXhpb3NTaWdudXAgfSBmcm9tIFwiLi4vLi4vYXhpb3MvYXhpb3MuanNcIjtcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2hpbGRyZW4/OiBzdHJpbmc7XG4gIHVzZXJEYXRhPzogeyBuYW1lOiBzdHJpbmc7IGVtYWlsOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXI6IEZDPElQcm9wcz4gPSAoeyBjaGlsZHJlbiwgdXNlckRhdGEgfSkgPT4ge1xuICBjb25zdCBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChFTkRQT0lOVCk7XG4gIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGU8YW55PignJylcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgYXhpb3NTaWdudXAuZ2V0KFwiL2dldHVzZXJcIiwge1xuICAgICAgICAgIGhlYWRlcnM6IHsgXCJhdXRoLXRva2VuXCI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aC10b2tlblwiKSB9LFxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlPT5zZXRVc2VyKHJlc3BvbnNlLmRhdGEpKS5jYXRjaChlcnJvcj0+Y29uc29sZS5sb2coZXJyb3IpKVxuICAgIH0sW10pXG4gIFxuICBjb25zdCBbYWxsTWVzc2FnZXMsIHNldEFsbE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVuZGVyLHNldFJlbmRlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ2FsbE1lc3NhZ2VzJywoYWxsTWVzc2FnZXMpPT57XG4gICAgICBjb25zb2xlLmxvZyhhbGxNZXNzYWdlcylcbiAgICAgIHNldEFsbE1lc3NhZ2VzKGFsbE1lc3NhZ2VzKVxuICAgIH0pXG4gICAgcmV0dXJuICgpID0+IHtzb2NrZXQuZGlzY29ubmVjdCgpfTtcbiAgfSwgW3JlbmRlcl0pO1xuXG4gIGNvbnN0IHJvdXRlcyA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXMucXVlcnk7XG4gIGNvbnN0IGxvZ091dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoLXRva2VuXCIpO1xuICAgIFJvdXRlci5wdXNoKFwiL2hvbWUvc2lnbnVwXCIpO1xuICB9O1xuXG5cbiAgY29uc3QgYWRkTWVzc2FnZSA9ICgpPT57XG4gICAgc29ja2V0LmVtaXQoJ2FkZE1lc3NhZ2UnLHttZXNzYWdlOidoZWxsbycsdXNlck5hbWU6dXNlci51c2VyLnVzZXJOYW1lfSlcbiAgICBzZXRSZW5kZXIocmVuZGVyKzEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCYWNrZ3JvdW5kPlxuICAgICAgPFVzZXJEaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyXCI+XG4gICAgICAgICAgICA8Q2FyZEJ1dHRvblxuICAgICAgICAgICAgICB0aXRsZT1cIkxvZyBPdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwiXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2xvZ091dEhhbmRsZXJ9XG4gICAgICAgICAgICAgIGlzTG9hZGluZz17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgaWQge2lkfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZE1lc3NhZ2V9PmxrYXNqZGhnbDwvYnV0dG9uPlxuICAgICAgPC9Vc2VyRGl2PlxuICAgIDwvQmFja2dyb3VuZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG5cbmNvbnN0IFVzZXJEaXYgPSBzdHlsZWQuZGl2YFxuICAvKiBwb3NpdGlvbiAqL1xuXG4gIG5hdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuICAgIC8qIGJvcmRlcjoxcHggc29saWQgcmVkOyAqL1xuICB9XG5gO1xuXG5jb25zdCBCYWNrZ3JvdW5kID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGQyMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsIlJvdXRlciIsInVzZVJvdXRlciIsIkNhcmRCdXR0b24iLCJheGlvc1NpZ251cCIsInNvY2tldElPQ2xpZW50IiwiRU5EUE9JTlQiLCJVc2VyIiwiY2hpbGRyZW4iLCJ1c2VyRGF0YSIsInNvY2tldCIsInVzZXIiLCJzZXRVc2VyIiwiZ2V0IiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbGxNZXNzYWdlcyIsInNldEFsbE1lc3NhZ2VzIiwicmVuZGVyIiwic2V0UmVuZGVyIiwib24iLCJkaXNjb25uZWN0Iiwicm91dGVzIiwiaWQiLCJxdWVyeSIsImxvZ091dEhhbmRsZXIiLCJyZW1vdmVJdGVtIiwicHVzaCIsImFkZE1lc3NhZ2UiLCJlbWl0IiwibWVzc2FnZSIsInVzZXJOYW1lIiwiQmFja2dyb3VuZCIsIlVzZXJEaXYiLCJuYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInR5cGUiLCJvblN1Ym1pdCIsImlzTG9hZGluZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ })

});