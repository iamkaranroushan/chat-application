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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/styles.css */ \"(app-pages-browser)/./styles/styles.css\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet socket;\nconst getToken = async ()=>{\n    try {\n        const response = await fetch(\"../api/getToken\");\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.message;\n            console.log(token);\n            return token;\n        } else {\n            console.error(\"Failed to fetch token:\", response.data);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error.message);\n        return null;\n    }\n};\nconst getUser = async ()=>{\n    try {\n        const response = await fetch(\"http://localhost:8080/user/getUser\");\n        const data = await response.json();\n        const user = await data.user;\n        console.log(user);\n        return data;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\nconst ChatPage = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the input message\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store the chat messages\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [socket, setSocket] = useState(null); // State to store the socket connection\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to track loading status\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ENDPOINT = \"http://localhost:8080\";\n    const scrollToBottom = ()=>{\n        if (messagesEndRef.current) {\n            messagesEndRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // Establish a socket connection when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the server's WebSocket endpoint\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ENDPOINT);\n        // Listen for incoming messages from the server\n        socket.on(\"message\", (msg)=>{\n            // Update the messages state with the new message\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    msg\n                ]);\n        });\n        const fetchUser = async ()=>{\n            try {\n                const data = await getUser();\n                console.log(data);\n                setData(data);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchUser();\n        const fetchToken = async ()=>{\n            try {\n                const token = await getToken();\n                console.log(token);\n                socket.emit(\"authenticate\", token);\n                socket.emit(\"reconnect\", token);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchToken();\n        // Listen for the \"connect\" event to indicate successful connection\n        socket.on(\"connect\", ()=>{\n            // Set isLoading to false when connected\n            setIsLoading(false);\n        });\n        // Cleanup function to disconnect the socket when the component unmounts\n        return ()=>{\n            socket.disconnect();\n            socket.off();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom(); // Scroll to bottom whenever messages change\n    }, [\n        messages\n    ]);\n    // Function to send a message to the server\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        // Check if the socket connection exists and the message is not empty\n        if (socket && message.trim()) {\n            // Prepare the message data with message content and user ID\n            const messageData = {\n                message: message.trim(),\n                id: socket.id\n            };\n            // Emit the message event to the server with the message data\n            socket.emit(\"message\", messageData);\n            // Clear the input field after sending the message\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Chat Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined) : // Show user ID once connected to the server\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"USER ID: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: socket.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chat-window\",\n                className: \" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700\",\n                children: [\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-zinc-500\",\n                                    children: [\n                                        msg.id,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                msg.message\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 \",\n                        type: \"text\",\n                        onKeyPress: (e)=>e.key === \"Enter\" ? sendMessage(e) : null,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 154,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outline\",\n                        onClick: (e)=>sendMessage(e),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 162,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 153,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatPage, \"3SOHra+k+NEDa9hxsr1f602KJCA=\");\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1BnRCxVQUFVLENBQUNuQixJQUFNdEIsV0FBV3NCLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FHNUMsOERBQUN6RCx5REFBTUE7d0JBQUM0RCxTQUFRO3dCQUFVQyxTQUFTLENBQUN0QixJQUFNRCxZQUFZQztrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJsRTtHQTVJTXZCO0tBQUFBO0FBOElOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3BhZ2UuanN4P2M3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmxldCBzb2NrZXQ7XHJcblxyXG5jb25zdCBnZXRUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4uL2FwaS9nZXRUb2tlblwiKTtcclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGRhdGEubWVzc2FnZTtcclxuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGZldGNoIHRva2VuOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcbmNvbnN0IGdldFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvdXNlci9nZXRVc2VyXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYXRhLnVzZXJcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xyXG4gIH1cclxufTtcclxuY29uc3QgQ2hhdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBpbnB1dCBtZXNzYWdlXHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBjaGF0IG1lc3NhZ2VzXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgc29ja2V0IGNvbm5lY3Rpb25cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFN0YXRlIHRvIHRyYWNrIGxvYWRpbmcgc3RhdHVzXHJcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIGlmIChtZXNzYWdlc0VuZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIFxyXG4gIC8vIEVzdGFibGlzaCBhIHNvY2tldCBjb25uZWN0aW9uIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgc2VydmVyJ3MgV2ViU29ja2V0IGVuZHBvaW50XHJcbiAgICBzb2NrZXQgPSBpbyhFTkRQT0lOVCk7XHJcbiAgICAvLyBMaXN0ZW4gZm9yIGluY29taW5nIG1lc3NhZ2VzIGZyb20gdGhlIHNlcnZlclxyXG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobXNnKSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgbWVzc2FnZXMgc3RhdGUgd2l0aCB0aGUgbmV3IG1lc3NhZ2VcclxuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbXNnXSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRVc2VyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0RGF0YShkYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoVXNlcigpXHJcblxyXG4gICAgY29uc3QgZmV0Y2hUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwiYXV0aGVudGljYXRlXCIsIHRva2VuKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInJlY29ubmVjdFwiLCB0b2tlbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hUb2tlbigpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgdGhlIFwiY29ubmVjdFwiIGV2ZW50IHRvIGluZGljYXRlIHN1Y2Nlc3NmdWwgY29ubmVjdGlvblxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIC8vIFNldCBpc0xvYWRpbmcgdG8gZmFsc2Ugd2hlbiBjb25uZWN0ZWRcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byBkaXNjb25uZWN0IHRoZSBzb2NrZXQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKCk7IC8vIFNjcm9sbCB0byBib3R0b20gd2hlbmV2ZXIgbWVzc2FnZXMgY2hhbmdlXHJcbiAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gIFxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXJcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgc29ja2V0IGNvbm5lY3Rpb24gZXhpc3RzIGFuZCB0aGUgbWVzc2FnZSBpcyBub3QgZW1wdHlcclxuICAgIGlmIChzb2NrZXQgJiYgbWVzc2FnZS50cmltKCkpIHtcclxuICAgICAgLy8gUHJlcGFyZSB0aGUgbWVzc2FnZSBkYXRhIHdpdGggbWVzc2FnZSBjb250ZW50IGFuZCB1c2VyIElEXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UudHJpbSgpLFxyXG4gICAgICAgIGlkOiBzb2NrZXQuaWQsIC8vIFNvY2tldCBJRCBpcyB1bmlxdWUgdG8gZWFjaCBjbGllbnRcclxuICAgICAgfTtcclxuICAgICAgLy8gRW1pdCB0aGUgbWVzc2FnZSBldmVudCB0byB0aGUgc2VydmVyIHdpdGggdGhlIG1lc3NhZ2UgZGF0YVxyXG4gICAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIiwgbWVzc2FnZURhdGEpO1xyXG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgZmllbGQgYWZ0ZXIgc2VuZGluZyB0aGUgbWVzc2FnZVxyXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0xMFwiPlxyXG4gICAgICAgIDxoMT5DaGF0IFJvb208L2gxPlxyXG4gICAgICAgIHsvKiBTaG93IGxvYWRpbmcgbWVzc2FnZSBpZiBzdGlsbCBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXIgKi99XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIC8vIFNob3cgdXNlciBJRCBvbmNlIGNvbm5lY3RlZCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFVTRVIgSUQ6IDxzdHJvbmc+e3NvY2tldC5pZH08L3N0cm9uZz5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBjaGF0IG1lc3NhZ2VzICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJjaGF0LXdpbmRvd1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIGJnLXppbmMtODAwLzIwIG92ZXJmbG93LWF1dG8gaC1bNDIwcHhdICB3LVs0MjBweF0gIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci16aW5jLTcwMFwiXHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciAgdGV4dC16aW5jLTMwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBiZy1ibGFjayBwLTMgbXQtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC16aW5jLTUwMFwiPnttc2cuaWR9Ojwvc3Ryb25nPiB7bXNnLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIElucHV0IGZpZWxkIGZvciB0eXBpbmcgbWVzc2FnZXMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgcC0xMFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTIwMC84MCAgYmctemluYy00MDAvMjAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBmb2N1czpib3JkZXItemluYy02MDAgXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiAoZS5rZXkgPT09IFwiRW50ZXJcIiA/IHNlbmRNZXNzYWdlKGUpIDogbnVsbCl9XHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogQnV0dG9uIHRvIHNlbmQgbWVzc2FnZXMgKi99XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eyhlKSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gPGgxPlxyXG4gICAgICAgIC8vICAgYXZhaWxhYmxlIHJvb21zOlxyXG4gICAgICAgIC8vICAge2RhdGEgJiYgZGF0YS5tYXAoKHJvb20sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgLy8gICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIiBrZXk9e2luZGV4fT57cm9vbVtpbmRleF0uX2lkfTwvcD5cclxuICAgICAgICAvLyAgICkpfVxyXG4gICAgICAgIC8vIDwvaDE+XHJcbiAgICAgIC8vIDwvZGl2PlxyXG4gICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImlvIiwiQnV0dG9uIiwiYXhpb3MiLCJzb2NrZXQiLCJnZXRUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwidG9rZW4iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0VXNlciIsInVzZXIiLCJDaGF0UGFnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2VzRW5kUmVmIiwiRU5EUE9JTlQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwib24iLCJtc2ciLCJwcmV2TWVzc2FnZXMiLCJmZXRjaFVzZXIiLCJlcnIiLCJmZXRjaFRva2VuIiwiZW1pdCIsImRpc2Nvbm5lY3QiLCJvZmYiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJtZXNzYWdlRGF0YSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaDIiLCJzdHJvbmciLCJtYXAiLCJpbmRleCIsInJlZiIsImlucHV0IiwidHlwZSIsIm9uS2V5UHJlc3MiLCJrZXkiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});