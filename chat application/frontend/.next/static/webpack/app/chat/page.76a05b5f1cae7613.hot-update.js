"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/chat/page.jsx":
/*!***************************!*\
  !*** ./app/chat/page.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/styles.css */ \"(app-pages-browser)/./styles/styles.css\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet socket;\nconst getToken = async ()=>{\n    try {\n        const response = await fetch(\"../api/getToken\");\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.message;\n            console.log(token);\n            return token;\n        } else {\n            console.error(\"Failed to fetch token:\", response.data);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error.message);\n        return null;\n    }\n};\nconst getUser = async ()=>{\n    try {\n        const response = await fetch(\"http://localhost:8080/user/getUser\");\n        const data = await response.json();\n        console.log(data.user);\n        return data;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\nconst ChatPage = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the input message\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store the chat messages\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [socket, setSocket] = useState(null); // State to store the socket connection\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to track loading status\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ENDPOINT = \"http://localhost:8080\";\n    const scrollToBottom = ()=>{\n        if (messagesEndRef.current) {\n            messagesEndRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // Establish a socket connection when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the server's WebSocket endpoint\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ENDPOINT);\n        // Listen for incoming messages from the server\n        socket.on(\"message\", (msg)=>{\n            // Update the messages state with the new message\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    msg\n                ]);\n        });\n        const fetchUser = async ()=>{\n            try {\n                const data = await getUser();\n                console.log(data);\n                setData(data);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        const fetchToken = async ()=>{\n            try {\n                const token = await getToken();\n                console.log(token);\n                socket.emit(\"authenticate\", token);\n                socket.emit(\"reconnect\", token);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchToken();\n        // Listen for the \"connect\" event to indicate successful connection\n        socket.on(\"connect\", ()=>{\n            // Set isLoading to false when connected\n            setIsLoading(false);\n        });\n        // Cleanup function to disconnect the socket when the component unmounts\n        return ()=>{\n            socket.disconnect();\n            socket.off();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom(); // Scroll to bottom whenever messages change\n    }, [\n        messages\n    ]);\n    // Function to send a message to the server\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        // Check if the socket connection exists and the message is not empty\n        if (socket && message.trim()) {\n            // Prepare the message data with message content and user ID\n            const messageData = {\n                message: message.trim(),\n                id: socket.id\n            };\n            // Emit the message event to the server with the message data\n            socket.emit(\"message\", messageData);\n            // Clear the input field after sending the message\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Chat Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined) : // Show user ID once connected to the server\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"USER ID: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: socket.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 130,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chat-window\",\n                className: \" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700\",\n                children: [\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-zinc-500\",\n                                    children: [\n                                        msg.id,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                msg.message\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                            lineNumber: 140,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 \",\n                        type: \"text\",\n                        onKeyPress: (e)=>e.key === \"Enter\" ? sendMessage(e) : null,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outline\",\n                        onClick: (e)=>sendMessage(e),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 159,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 150,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"available rooms:\",\n                        data && data.map((room, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"room[index]._id\"\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                    lineNumber: 165,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 164,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatPage, \"3SOHra+k+NEDa9hxsr1f602KJCA=\");\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0IsRUFBRW9CLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUc1Qyw4REFBQ3pELHlEQUFNQTt3QkFBQzRELFNBQVE7d0JBQVVDLFNBQVMsQ0FBQ3RCLElBQU1ELFlBQVlDO2tDQUFJOzs7Ozs7Ozs7Ozs7MEJBSzVELDhEQUFDSzswQkFDQyw0RUFBQ0U7O3dCQUFHO3dCQUVEdkMsUUFBUUEsS0FBSzJDLEdBQUcsQ0FBQyxDQUFDWSxNQUFNWCxzQkFDdkIsOERBQUNKOzBDQUFjOytCQUFQSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQjtHQXhJTW5DO0tBQUFBO0FBMElOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3BhZ2UuanN4P2M3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmxldCBzb2NrZXQ7XHJcblxyXG5jb25zdCBnZXRUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2FwaS9nZXRUb2tlblwiKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGRhdGEubWVzc2FnZTtcclxuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHRva2VuOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci9nZXRVc2VyXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEudXNlcik7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBDaGF0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIGlucHV0IG1lc3NhZ2VcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIGNoYXQgbWVzc2FnZXNcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUobnVsbCk7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBzb2NrZXQgY29ubmVjdGlvblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTsgLy8gU3RhdGUgdG8gdHJhY2sgbG9hZGluZyBzdGF0dXNcclxuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBFTkRQT0lOVCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xyXG4gICAgaWYgKG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQpIHtcclxuICAgICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcblxyXG4gIC8vIEVzdGFibGlzaCBhIHNvY2tldCBjb25uZWN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgc2VydmVyJ3MgV2ViU29ja2V0IGVuZHBvaW50XHJcbiAgICBzb2NrZXQgPSBpbyhFTkRQT0lOVCk7XHJcbiAgICAvLyBMaXN0ZW4gZm9yIGluY29taW5nIG1lc3NhZ2VzIGZyb20gdGhlIHNlcnZlclxyXG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobXNnKSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgbWVzc2FnZXMgc3RhdGUgd2l0aCB0aGUgbmV3IG1lc3NhZ2VcclxuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbXNnXSk7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VXNlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldERhdGEoZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBmZXRjaFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJhdXRoZW50aWNhdGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVjb25uZWN0XCIsIHRva2VuKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRva2VuKCk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciB0aGUgXCJjb25uZWN0XCIgZXZlbnQgdG8gaW5kaWNhdGUgc3VjY2Vzc2Z1bCBjb25uZWN0aW9uXHJcbiAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgLy8gU2V0IGlzTG9hZGluZyB0byBmYWxzZSB3aGVuIGNvbm5lY3RlZFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIGRpc2Nvbm5lY3QgdGhlIHNvY2tldCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oKTsgLy8gU2Nyb2xsIHRvIGJvdHRvbSB3aGVuZXZlciBtZXNzYWdlcyBjaGFuZ2VcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNlcnZlclxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBleGlzdHMgYW5kIHRoZSBtZXNzYWdlIGlzIG5vdCBlbXB0eVxyXG4gICAgaWYgKHNvY2tldCAmJiBtZXNzYWdlLnRyaW0oKSkge1xyXG4gICAgICAvLyBQcmVwYXJlIHRoZSBtZXNzYWdlIGRhdGEgd2l0aCBtZXNzYWdlIGNvbnRlbnQgYW5kIHVzZXIgSURcclxuICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZS50cmltKCksXHJcbiAgICAgICAgaWQ6IHNvY2tldC5pZCwgLy8gU29ja2V0IElEIGlzIHVuaXF1ZSB0byBlYWNoIGNsaWVudFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBFbWl0IHRoZSBtZXNzYWdlIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgd2l0aCB0aGUgbWVzc2FnZSBkYXRhXHJcbiAgICAgIHNvY2tldC5lbWl0KFwibWVzc2FnZVwiLCBtZXNzYWdlRGF0YSk7XHJcbiAgICAgIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBzZW5kaW5nIHRoZSBtZXNzYWdlXHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTEwXCI+XHJcbiAgICAgICAgPGgxPkNoYXQgUm9vbTwvaDE+XHJcbiAgICAgICAgey8qIFNob3cgbG9hZGluZyBtZXNzYWdlIGlmIHN0aWxsIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlciAqL31cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgLy8gU2hvdyB1c2VyIElEIG9uY2UgY29ubmVjdGVkIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgVVNFUiBJRDogPHN0cm9uZz57c29ja2V0LmlkfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIERpc3BsYXkgdGhlIGNoYXQgbWVzc2FnZXMgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImNoYXQtd2luZG93XCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgYmctemluYy04MDAvMjAgb3ZlcmZsb3ctYXV0byBoLVs0MjBweF0gIHctWzQyMHB4XSAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXppbmMtNzAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyICB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGJnLWJsYWNrIHAtMyBtdC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+e21zZy5pZH06PC9zdHJvbmc+IHttc2cubWVzc2FnZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogSW5wdXQgZmllbGQgZm9yIHR5cGluZyBtZXNzYWdlcyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBwLTEwXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMjAwLzgwICBiZy16aW5jLTQwMC8yMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGZvY3VzOmJvcmRlci16aW5jLTYwMCBcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IChlLmtleSA9PT0gXCJFbnRlclwiID8gc2VuZE1lc3NhZ2UoZSkgOiBudWxsKX1cclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBCdXR0b24gdG8gc2VuZCBtZXNzYWdlcyAqL31cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KGUpID0+IHNlbmRNZXNzYWdlKGUpfT5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgIGF2YWlsYWJsZSByb29tczpcclxuICAgICAgICAgIHtkYXRhICYmIGRhdGEubWFwKChyb29tLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8cCBrZXk9e2luZGV4fT5yb29tW2luZGV4XS5faWQ8L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJpbyIsIkJ1dHRvbiIsImF4aW9zIiwic29ja2V0IiwiZ2V0VG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsInRva2VuIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldFVzZXIiLCJ1c2VyIiwiQ2hhdFBhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtZXNzYWdlc0VuZFJlZiIsIkVORFBPSU5UIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm9uIiwibXNnIiwicHJldk1lc3NhZ2VzIiwiZmV0Y2hVc2VyIiwiZXJyIiwiZmV0Y2hUb2tlbiIsImVtaXQiLCJkaXNjb25uZWN0Iiwib2ZmIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibWVzc2FnZURhdGEiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImgyIiwic3Ryb25nIiwibWFwIiwiaW5kZXgiLCJyZWYiLCJpbnB1dCIsInR5cGUiLCJvbktleVByZXNzIiwia2V5IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhcmlhbnQiLCJvbkNsaWNrIiwicm9vbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});