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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_button_CardButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/button/CardButton */ \"./components/button/CardButton.tsx\");\n/* harmony import */ var _axios_axios_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../axios/axios.js */ \"./axios/axios.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  /* position */\\n\\n  nav {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 0.2rem 1rem;\\n    /* border:1px solid red; */\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: #202442;\\n  height: 100vh;\\n  width: 100vw;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar ENDPOINT = \"http://localhost:4000\";\nvar User = function(param) {\n    var children = param.children, userData = param.userData;\n    var _this1 = _this;\n    _s();\n    var socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ENDPOINT);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), user = ref[0], setUser = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _axios_axios_js__WEBPACK_IMPORTED_MODULE_4__.axiosSignup.get(\"/getuser\", {\n            headers: {\n                \"auth-token\": localStorage.getItem(\"auth-token\")\n            }\n        }).then(function(response) {\n            return setUser(response.data);\n        }).catch(function(error) {\n            return console.log(error);\n        });\n    }, []);\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), allMessages = ref1[0], setAllMessages = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), render = ref2[0], setRender = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        socket.on('allMessages', function(newMessage) {\n            setAllMessages(newMessage);\n        });\n        console.log(allMessages);\n        return function() {\n            socket.disconnect();\n        };\n    }, [\n        render\n    ]);\n    var routes = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = routes.query.id;\n    var logOutHandler = function() {\n        localStorage.removeItem(\"auth-token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/home/signup\");\n    };\n    var addMessage = function() {\n        socket.emit('addMessage', {\n            message: 'hello',\n            userName: user.user.userName\n        });\n        setRender(render + 1);\n    };\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('number'), type = ref3[0], setType = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"pass\"), pass = ref4[0], setPass = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1234), num = ref5[0], setNum = ref5[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Background, {\n        __source: {\n            fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n            lineNumber: 49,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UserDiv, {\n            __source: {\n                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"nav\", {\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"logo\",\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"user\",\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_button_CardButton__WEBPACK_IMPORTED_MODULE_3__.CardButton, {\n                                title: \"Log Out\",\n                                type: \"\",\n                                onSubmit: logOutHandler,\n                                isLoading: false,\n                                __source: {\n                                    fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            })\n                        })\n                    ]\n                }),\n                \"id \",\n                id,\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: addMessage,\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"lkasjdhgl\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"\",\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: allMessages.map(function(message, index) {\n                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            style: {\n                                color: 'white'\n                            },\n                            __source: {\n                                fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                                lineNumber: 66,\n                                columnNumber: 20\n                            },\n                            __self: _this1,\n                            children: message.message\n                        }, index));\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                    onClick: function() {\n                        return setType(type === \"number\" ? 'password' : 'number');\n                    },\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"type\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        value: type == 'password' ? pass : num,\n                        __source: {\n                            fileName: \"E:\\\\web development\\\\college\\\\new\\\\client\\\\pages\\\\user\\\\[id].tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            ]\n        })\n    }));\n};\n_s(User, \"/MbyF9kkLMXtykOhI80w7uYXZRA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = User;\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\nvar UserDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c1 = UserDiv;\nvar Background = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c2 = Background;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"User\");\n$RefreshReg$(_c1, \"UserDiv\");\n$RefreshReg$(_c2, \"Background\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDaEI7QUFDUztBQUNnQjtBQUNiO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O1FBMEVsQixDQWEzQjs7Ozs7Ozs7O1FBRThCLENBTzlCOzs7Ozs7OztBQS9GQSxHQUFLLENBQUNTLFFBQVEsR0FBRyxDQUF1QjtBQU9qQyxHQUFLLENBQUNDLElBQUksR0FBZSxRQUFRLFFBQW9CLENBQUM7UUFBMUJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7OztJQUNuRCxHQUFLLENBQUNDLE1BQU0sR0FBR0wsNERBQWMsQ0FBQ0MsUUFBUTtJQUN0QyxHQUFLLENBQWtCUCxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxDQUFFLElBQWhDWSxJQUFJLEdBQVlaLEdBQWlCLEtBQTVCYSxPQUFPLEdBQUliLEdBQWlCO0lBQ3RDRCxnREFBUyxDQUFDLFFBQ1osR0FEZ0IsQ0FBQztRQUNYTSw0REFBZSxDQUFDLENBQVUsV0FBRSxDQUFDO1lBQzNCVSxPQUFPLEVBQUUsQ0FBQztnQkFBQyxDQUFZLGFBQUVDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQVk7WUFBRSxDQUFDO1FBQy9ELENBQUMsRUFBRUMsSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQVE7WUFBRU4sTUFBTSxDQUFOQSxPQUFPLENBQUNNLFFBQVEsQ0FBQ0MsSUFBSTtXQUFHQyxLQUFLLENBQUNDLFFBQVEsQ0FBUkEsS0FBSztZQUFFQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLOztJQUM1RSxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBRU4sR0FBSyxDQUFpQ3RCLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBMUN5QixXQUFXLEdBQW9CekIsSUFBWSxLQUE5QjBCLGNBQWMsR0FBSTFCLElBQVk7SUFDbEQsR0FBSyxDQUFzQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBOUIyQixNQUFNLEdBQWMzQixJQUFXLEtBQXhCNEIsU0FBUyxHQUFJNUIsSUFBVztJQUN0Q0QsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZlksTUFBTSxDQUFDa0IsRUFBRSxDQUFDLENBQWEsY0FBQyxRQUFRLENBQVBDLFVBQVUsRUFBRyxDQUFDO1lBQ3JDSixjQUFjLENBQUNJLFVBQVU7UUFDM0IsQ0FBQztRQUNEUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztRQUN2QixNQUFNLENBQUMsUUFBUSxHQUFGLENBQUNkO1lBQUFBLE1BQU0sQ0FBQ29CLFVBQVU7UUFBRSxDQUFDO0lBQ3BDLENBQUMsRUFBRSxDQUFDSjtRQUFBQSxNQUFNO0lBQUEsQ0FBQztJQUVYLEdBQUssQ0FBQ0ssTUFBTSxHQUFHN0Isc0RBQVM7SUFDeEIsR0FBSyxDQUFHOEIsRUFBRSxHQUFLRCxNQUFNLENBQUNFLEtBQUssQ0FBbkJELEVBQUU7SUFDVixHQUFLLENBQUNFLGFBQWEsR0FBRyxRQUN4QixHQUQ4QixDQUFDO1FBQzNCbkIsWUFBWSxDQUFDb0IsVUFBVSxDQUFDLENBQVk7UUFDcENsQyx1REFBVyxDQUFDLENBQWM7SUFDNUIsQ0FBQztJQUdELEdBQUssQ0FBQ29DLFVBQVUsR0FBRyxRQUNuQixHQUR1QixDQUFDO1FBQ3RCM0IsTUFBTSxDQUFDNEIsSUFBSSxDQUFDLENBQVksYUFBQyxDQUFDQztZQUFBQSxPQUFPLEVBQUMsQ0FBTztZQUFDQyxRQUFRLEVBQUM3QixJQUFJLENBQUNBLElBQUksQ0FBQzZCLFFBQVE7UUFBQSxDQUFDO1FBQ3RFYixTQUFTLENBQUNELE1BQU0sR0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxHQUFLLENBQW1CM0IsSUFBa0IsR0FBbEJBLCtDQUFRLENBQUMsQ0FBUSxVQUFqQzBDLElBQUksR0FBWTFDLElBQWtCLEtBQTdCMkMsT0FBTyxHQUFJM0MsSUFBa0I7SUFDMUMsR0FBSyxDQUFtQkEsSUFBZ0IsR0FBaEJBLCtDQUFRLENBQUMsQ0FBTSxRQUEvQjRDLElBQUksR0FBWTVDLElBQWdCLEtBQTNCNkMsT0FBTyxHQUFJN0MsSUFBZ0I7SUFDeEMsR0FBSyxDQUFpQkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBM0I4QyxHQUFHLEdBQVc5QyxJQUFjLEtBQXhCK0MsTUFBTSxHQUFJL0MsSUFBYztJQUNwQyxNQUFNLHNFQUNIZ0QsVUFBVTs7Ozs7Ozt3RkFDUkMsT0FBTzs7Ozs7Ozs7c0ZBQ0xDLENBQUc7Ozs7Ozs7OzZGQUNEQyxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7Ozs7NkZBQ3BCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBTTs7Ozs7OzsyR0FDbEJoRCxxRUFBVTtnQ0FDVGlELEtBQUssRUFBQyxDQUFTO2dDQUNmWCxJQUFJLEVBQUMsQ0FBRTtnQ0FDUFksUUFBUSxFQUFFbkIsYUFBYTtnQ0FDdkJvQixTQUFTLEVBQUUsS0FBSzs7Ozs7Ozs7Ozs7Z0JBR2hCLENBQ0g7Z0JBQUN0QixFQUFFO3FGQUNMdUIsQ0FBTTtvQkFBQ0MsT0FBTyxFQUFFbkIsVUFBVTs7Ozs7Ozs4QkFBRSxDQUFTOztxRkFDckNhLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFFOzs7Ozs7OzhCQUNkM0IsV0FBVyxDQUFDaUMsR0FBRyxDQUFDLFFBQVEsQ0FBUGxCLE9BQU8sRUFBQ21CLEtBQUssRUFBRyxDQUFDO3dCQUNqQyxNQUFNLHNFQUFFQyxDQUFDOzRCQUFhQyxLQUFLLEVBQUUsQ0FBQ0M7Z0NBQUFBLEtBQUssRUFBQyxDQUFPOzRCQUFBLENBQUM7Ozs7Ozs7c0NBQUd0QixPQUFPLENBQUNBLE9BQU87MkJBQS9DbUIsS0FBSztvQkFDdEIsQ0FBQzs7cUZBRUZILENBQU07b0JBQUNDLE9BQU8sRUFBRSxRQUFRO3dCQUFKZCxNQUFNLENBQU5BLE9BQU8sQ0FBQ0QsSUFBSSxLQUFHLENBQVEsVUFBQyxDQUFVLFlBQUMsQ0FBUTs7Ozs7Ozs7OEJBQUcsQ0FBSTs7cUZBQ3RFUyxDQUFHOzs7Ozs7O21HQUNEWSxDQUFLO3dCQUFDckIsSUFBSSxFQUFDLENBQU07d0JBQUNzQixLQUFLLEVBQUV0QixJQUFJLElBQUUsQ0FBVSxZQUFDRSxJQUFJLEdBQUNFLEdBQUc7Ozs7Ozs7Ozs7OztBQUs3RCxDQUFDO0dBOURZdEMsSUFBSTs7UUFtQkFMLGtEQUFTOzs7S0FuQmJLLElBQUk7QUFnRWpCLCtEQUFlQSxJQUFJLEVBQUM7QUFFcEIsR0FBSyxDQUFDeUMsT0FBTyxHQUFHaEQsNkRBQVU7TUFBcEJnRCxPQUFPO0FBZWIsR0FBSyxDQUFDRCxVQUFVLEdBQUcvQyw2REFBVTtNQUF2QitDLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9baWRdLnRzeD9iOGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBSb3V0ZXIsIHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBDYXJkQnV0dG9uIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9uL0NhcmRCdXR0b25cIjtcbmltcG9ydCB7IGF4aW9zU2lnbnVwIH0gZnJvbSBcIi4uLy4uL2F4aW9zL2F4aW9zLmpzXCI7XG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmNvbnN0IEVORFBPSU5UID0gXCJodHRwOi8vbG9jYWxob3N0OjQwMDBcIjtcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNoaWxkcmVuPzogc3RyaW5nO1xuICB1c2VyRGF0YT86IHsgbmFtZTogc3RyaW5nOyBlbWFpbDogc3RyaW5nIH07XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyOiBGQzxJUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHVzZXJEYXRhIH0pID0+IHtcbiAgY29uc3Qgc29ja2V0ID0gc29ja2V0SU9DbGllbnQoRU5EUE9JTlQpO1xuICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlPGFueT4oJycpXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGF4aW9zU2lnbnVwLmdldChcIi9nZXR1c2VyXCIsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiYXV0aC10b2tlblwiOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGgtdG9rZW5cIikgfSxcbiAgICAgICAgfSkudGhlbihyZXNwb25zZT0+c2V0VXNlcihyZXNwb25zZS5kYXRhKSkuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9LFtdKVxuICBcbiAgY29uc3QgW2FsbE1lc3NhZ2VzLCBzZXRBbGxNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtyZW5kZXIsc2V0UmVuZGVyXSA9IHVzZVN0YXRlKDEpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbignYWxsTWVzc2FnZXMnLChuZXdNZXNzYWdlKT0+e1xuICAgICAgc2V0QWxsTWVzc2FnZXMobmV3TWVzc2FnZSlcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGFsbE1lc3NhZ2VzKVxuICAgIHJldHVybiAoKSA9PiB7c29ja2V0LmRpc2Nvbm5lY3QoKX07XG4gIH0sIFtyZW5kZXJdKTtcblxuICBjb25zdCByb3V0ZXMgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVzLnF1ZXJ5O1xuICBjb25zdCBsb2dPdXRIYW5kbGVyID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aC10b2tlblwiKTtcbiAgICBSb3V0ZXIucHVzaChcIi9ob21lL3NpZ251cFwiKTtcbiAgfTtcblxuXG4gIGNvbnN0IGFkZE1lc3NhZ2UgPSAoKT0+e1xuICAgIHNvY2tldC5lbWl0KCdhZGRNZXNzYWdlJyx7bWVzc2FnZTonaGVsbG8nLHVzZXJOYW1lOnVzZXIudXNlci51c2VyTmFtZX0pXG4gICAgc2V0UmVuZGVyKHJlbmRlcisxKVxuICB9XG4gIGNvbnN0IFsgdHlwZSxzZXRUeXBlXSA9IHVzZVN0YXRlKCdudW1iZXInKVxuICBjb25zdCBbIHBhc3Msc2V0UGFzc10gPSB1c2VTdGF0ZShcInBhc3NcIilcbiAgY29uc3QgWyBudW0sc2V0TnVtXSA9IHVzZVN0YXRlKDEyMzQpXG4gIHJldHVybiAoXG4gICAgPEJhY2tncm91bmQ+XG4gICAgICA8VXNlckRpdj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgIDxDYXJkQnV0dG9uXG4gICAgICAgICAgICAgIHRpdGxlPVwiTG9nIE91dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17bG9nT3V0SGFuZGxlcn1cbiAgICAgICAgICAgICAgaXNMb2FkaW5nPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICBpZCB7aWR9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkTWVzc2FnZX0+bGthc2pkaGdsPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAge2FsbE1lc3NhZ2VzLm1hcCgobWVzc2FnZSxpbmRleCk9PntcbiAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBzdHlsZT17e2NvbG9yOid3aGl0ZSd9fT57bWVzc2FnZS5tZXNzYWdlfTwvcD5cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFR5cGUodHlwZT09PVwibnVtYmVyXCI/J3Bhc3N3b3JkJzonbnVtYmVyJyl9PnR5cGU8L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e3R5cGU9PSdwYXNzd29yZCc/cGFzczpudW19Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1VzZXJEaXY+XG4gICAgPC9CYWNrZ3JvdW5kPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcblxuY29uc3QgVXNlckRpdiA9IHN0eWxlZC5kaXZgXG4gIC8qIHBvc2l0aW9uICovXG5cbiAgbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMC4ycmVtIDFyZW07XG4gICAgLyogYm9yZGVyOjFweCBzb2xpZCByZWQ7ICovXG4gIH1cbmA7XG5cbmNvbnN0IEJhY2tncm91bmQgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyNDQyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiUm91dGVyIiwidXNlUm91dGVyIiwiQ2FyZEJ1dHRvbiIsImF4aW9zU2lnbnVwIiwic29ja2V0SU9DbGllbnQiLCJFTkRQT0lOVCIsIlVzZXIiLCJjaGlsZHJlbiIsInVzZXJEYXRhIiwic29ja2V0IiwidXNlciIsInNldFVzZXIiLCJnZXQiLCJoZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFsbE1lc3NhZ2VzIiwic2V0QWxsTWVzc2FnZXMiLCJyZW5kZXIiLCJzZXRSZW5kZXIiLCJvbiIsIm5ld01lc3NhZ2UiLCJkaXNjb25uZWN0Iiwicm91dGVzIiwiaWQiLCJxdWVyeSIsImxvZ091dEhhbmRsZXIiLCJyZW1vdmVJdGVtIiwicHVzaCIsImFkZE1lc3NhZ2UiLCJlbWl0IiwibWVzc2FnZSIsInVzZXJOYW1lIiwidHlwZSIsInNldFR5cGUiLCJwYXNzIiwic2V0UGFzcyIsIm51bSIsInNldE51bSIsIkJhY2tncm91bmQiLCJVc2VyRGl2IiwibmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJvblN1Ym1pdCIsImlzTG9hZGluZyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJpbmRleCIsInAiLCJzdHlsZSIsImNvbG9yIiwiaW5wdXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/[id].tsx\n");

/***/ })

});