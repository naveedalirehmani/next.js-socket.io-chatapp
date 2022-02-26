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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_button_CardButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/CardButton */ \"./components/button/CardButton.tsx\");\n/* harmony import */ var _axios_axios_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../axios/axios.js */ \"./axios/axios.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  /* position */\\n\\n  nav {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0.2rem 1rem;\\n    /* border:1px solid red; */\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #202442;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ENDPOINT = \"http://localhost:4000\";\nvar User = function(param) {\n    var children = param.children, userData = param.userData;\n    var _this1 = _this;\n    _s();\n    var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ENDPOINT);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _axios_axios_js__WEBPACK_IMPORTED_MODULE_4__.axiosSignup.get(\"/getuser\", {\n            headers: {\n                \"auth-token\": localStorage.getItem(\"auth-token\")\n            }\n        }).then(function(response) {\n            return setUser(response.data);\n        }).catch(function(error) {\n            return console.log(error);\n        });\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), allMessages = ref1[0], setAllMessages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), render = ref2[0], setRender = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        socket.on('allMessages', function(newMessage) {\n            setAllMessages(newMessage);\n        });\n        console.log(allMessages);\n        return function() {\n            socket.disconnect();\n        };\n    }, [\n        render\n    ]);\n    var routes = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = routes.query.id;\n    var logOutHandler = function() {\n        localStorage.removeItem(\"auth-token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/home/signup\");\n    };\n    var addMessage = function() {\n        socket.emit('addMessage', {\n            message: 'hello',\n            userName: user.user.userName\n        });\n        setRender(render + 1);\n    };\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('number'), type = ref3[0], setType = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        1\n    ]), num = ref4[0], setNum = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), pass = ref5[0], setPass = ref5[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var data = num === null || num === void 0 ? void 0 : num.split('').map(function(element) {\n            if (element === '-') {\n                return '-';\n            } else {\n                return '*';\n            }\n        });\n        setPass(data.join(''));\n    }, [\n        type\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Background, {\n        __source: {\n            fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n            lineNumber: 59,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UserDiv, {\n            __source: {\n                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"logo\",\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"user\",\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_CardButton__WEBPACK_IMPORTED_MODULE_3__.CardButton, {\n                                title: \"Log Out\",\n                                type: \"\",\n                                onSubmit: logOutHandler,\n                                isLoading: false,\n                                __source: {\n                                    fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                }),\n                \"id \",\n                id,\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: addMessage,\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"lkasjdhgl\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"\",\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: allMessages.map(function(message, index) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            style: {\n                                color: 'white'\n                            },\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 76,\n                                columnNumber: 20\n                            },\n                            __self: _this1,\n                            children: message.message\n                        }, index));\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: function() {\n                        return setType(type == \"number\" ? \"password\" : 'number');\n                    },\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"type\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        value: type == \"number\" ? num : pass,\n                        onChange: function(e) {\n                            return setNum(e.target.value.toString());\n                        },\n                        __source: {\n                            fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(User, \"K38bAqryGSSlU88HJm+X4uc9l2Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar UserDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = UserDiv;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = Background;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"User\");\n$RefreshReg$(_c1, \"UserDiv\");\n$RefreshReg$(_c2, \"Background\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OEJBQUUsQ0FBUzs7cUZBQ3JDaUIsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQUU7Ozs7Ozs7OEJBQ2QvQixXQUFXLENBQUN3QixHQUFHLENBQUMsUUFBUSxDQUFQVCxPQUFPLEVBQUNzQixLQUFLLEVBQUcsQ0FBQzt3QkFDakMsTUFBTSxzRUFBRUMsQ0FBQzs0QkFBYUMsS0FBSyxFQUFFLENBQUNDO2dDQUFBQSxLQUFLLEVBQUMsQ0FBTzs0QkFBQSxDQUFDOzs7Ozs7O3NDQUFHekIsT0FBTyxDQUFDQSxPQUFPOzJCQUEvQ3NCLEtBQUs7b0JBQ3RCLENBQUM7O3FGQUVGRixDQUFNO29CQUFDQyxPQUFPLEVBQUUsUUFBUTt3QkFBSmxCLE1BQU0sQ0FBTkEsT0FBTyxDQUFDRCxJQUFJLElBQUUsQ0FBUSxVQUFDLENBQVUsWUFBQyxDQUFROzs7Ozs7Ozs4QkFBRyxDQUFJOztxRkFDckVhLENBQUc7Ozs7Ozs7bUdBQ0RXLENBQUs7d0JBQUN4QixJQUFJLEVBQUMsQ0FBTTt3QkFBQ3lCLEtBQUssRUFBRXpCLElBQUksSUFBRSxDQUFRLFVBQUNFLEdBQUcsR0FBQ0UsSUFBSTt3QkFBRXNCLFFBQVEsRUFBRSxRQUFRLENBQVBDLENBQUM7NEJBQUd4QixNQUFNLENBQU5BLE1BQU0sQ0FBQ3dCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDSCxLQUFLLENBQUNJLFFBQVE7Ozs7Ozs7Ozs7Ozs7QUFLMUcsQ0FBQztHQXhFWS9ELElBQUk7O1FBbUJBTCxrREFBUzs7O0tBbkJiSyxJQUFJO0FBMEVqQiwrREFBZUEsSUFBSSxFQUFDO0FBRXBCLEdBQUssQ0FBQzZDLE9BQU8sR0FBR3BELDZEQUFVO01BQXBCb0QsT0FBTztBQWViLEdBQUssQ0FBQ0QsVUFBVSxHQUFHbkQsNkRBQVU7TUFBdkJtRCxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXIvW2lkXS50c3g/YjhjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgQ2FyZEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2J1dHRvbi9DYXJkQnV0dG9uXCI7XG5pbXBvcnQgeyBheGlvc1NpZ251cCB9IGZyb20gXCIuLi8uLi9heGlvcy9heGlvcy5qc1wiO1xuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5jb25zdCBFTkRQT0lOVCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBjaGlsZHJlbj86IHN0cmluZztcbiAgdXNlckRhdGE/OiB7IG5hbWU6IHN0cmluZzsgZW1haWw6IHN0cmluZyB9O1xufVxuXG5leHBvcnQgY29uc3QgVXNlcjogRkM8SVByb3BzPiA9ICh7IGNoaWxkcmVuLCB1c2VyRGF0YSB9KSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IHNvY2tldElPQ2xpZW50KEVORFBPSU5UKTtcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZTxhbnk+KCcnKVxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBheGlvc1NpZ251cC5nZXQoXCIvZ2V0dXNlclwiLCB7XG4gICAgICAgICAgaGVhZGVyczogeyBcImF1dGgtdG9rZW5cIjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoLXRva2VuXCIpIH0sXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2U9PnNldFVzZXIocmVzcG9uc2UuZGF0YSkpLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfSxbXSlcbiAgXG4gIGNvbnN0IFthbGxNZXNzYWdlcywgc2V0QWxsTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcmVuZGVyLHNldFJlbmRlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXQub24oJ2FsbE1lc3NhZ2VzJywobmV3TWVzc2FnZSk9PntcbiAgICAgIHNldEFsbE1lc3NhZ2VzKG5ld01lc3NhZ2UpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhhbGxNZXNzYWdlcylcbiAgICByZXR1cm4gKCkgPT4ge3NvY2tldC5kaXNjb25uZWN0KCl9O1xuICB9LCBbcmVuZGVyXSk7XG5cbiAgY29uc3Qgcm91dGVzID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlcy5xdWVyeTtcbiAgY29uc3QgbG9nT3V0SGFuZGxlciA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImF1dGgtdG9rZW5cIik7XG4gICAgUm91dGVyLnB1c2goXCIvaG9tZS9zaWdudXBcIik7XG4gIH07XG5cblxuICBjb25zdCBhZGRNZXNzYWdlID0gKCk9PntcbiAgICBzb2NrZXQuZW1pdCgnYWRkTWVzc2FnZScse21lc3NhZ2U6J2hlbGxvJyx1c2VyTmFtZTp1c2VyLnVzZXIudXNlck5hbWV9KVxuICAgIHNldFJlbmRlcihyZW5kZXIrMSlcbiAgfVxuICBjb25zdCBbIHR5cGUsc2V0VHlwZV0gPSB1c2VTdGF0ZSgnbnVtYmVyJylcbmNvbnN0IFtudW0sc2V0TnVtXSA9IHVzZVN0YXRlPGFueT4oWzFdKVxuY29uc3QgW3Bhc3Msc2V0UGFzc10gPSB1c2VTdGF0ZTxhbnk+KCcnKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBkYXRhID0gbnVtPy5zcGxpdCgnJykubWFwKGVsZW1lbnQ9PntcbiAgICAgIGlmKGVsZW1lbnQgPT09ICctJykge1xuICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHJldHVybiAnKidcbiAgICAgIH1cbiAgICB9KVxuICAgIHNldFBhc3MoZGF0YS5qb2luKCcnKSlcbiAgfSxbdHlwZV0pXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmQ+XG4gICAgICA8VXNlckRpdj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgIDxDYXJkQnV0dG9uXG4gICAgICAgICAgICAgIHRpdGxlPVwiTG9nIE91dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17bG9nT3V0SGFuZGxlcn1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICBpZCB7aWR9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkTWVzc2FnZX0+bGthc2pkaGdsPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAge2FsbE1lc3NhZ2VzLm1hcCgobWVzc2FnZSxpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT57bWVzc2FnZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFR5cGUodHlwZT09XCJudW1iZXJcIj9cInBhc3N3b3JkXCI6J251bWJlcicpfT50eXBlPC9idXR0b24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0eXBlPT1cIm51bWJlclwiP251bTpwYXNzfSBvbkNoYW5nZT17KGUpPT5zZXROdW0oZS50YXJnZXQudmFsdWUudG9TdHJpbmcoKSl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1VzZXJEaXY+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuY29uc3QgVXNlckRpdiA9IHN0eWxlZC5kaXZgXG4gIC8qIHBvc2l0aW9uICovXG5cbiAgbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCByZWQ7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNDQyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiUm91dGVyIiwidXNlUm91dGVyIiwiQ2FyZEJ1dHRvbiIsImF4aW9zU2lnbnVwIiwic29ja2V0SU9DbGllbnQiLCJFTkRQT0lOVCIsIlVzZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwic29ja2V0IiwidXNlciIsInNldFVzZXIiLCJnZXQiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFsbE1lc3NhZ2VzIiwic2V0QWxsTWVzc2FnZXMiLCJyZW5kZXIiLCJzZXRSZW5kZXIiLCJvbiIsIm5ld01lc3NhZ2UiLCJkaXNjb25uZWN0Iiwicm91dGVzIiwiaWQiLCJxdWVyeSIsImxvZ091dEhhbmRsZXIiLCJyZW1vdmVJdGVtIiwicHVzaCIsImFkZE1lc3NhZ2UiLCJlbWl0IiwibWVzc2FnZSIsInVzZXJOYW1lIiwidHlwZSIsInNldFR5cGUiLCJudW0iLCJzZXROdW0iLCJwYXNzIiwic2V0UGFzcyIsInNwbGl0IiwibWFwIiwiZWxlbWVudCIsImpvaW4iLCJCYWNrZ3JvdW5kIiwiVXNlckRpdiIsIm5hdiIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwib25TdWJtaXQiLCJpc0xvYWRpbmciLCJidXR0b24iLCJvbkNsaWNrIiwiaW5kZXgiLCJwIiwic3R5bGUiLCJjb2xvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0b1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ })

});