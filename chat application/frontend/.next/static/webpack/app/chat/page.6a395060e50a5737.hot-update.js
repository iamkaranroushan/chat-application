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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/styles.css */ \"(app-pages-browser)/./styles/styles.css\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet socket;\nconst getToken = async ()=>{\n    try {\n        const response = await fetch(\"../api/getToken\");\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.message;\n            console.log(token);\n            return token;\n        } else {\n            console.error(\"Failed to fetch token:\", response.data);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error.message);\n        return null;\n    }\n};\nconst getUser = async ()=>{\n    try {\n        const response = await fetch(\"http://localhost:8080/user/getUser\");\n        const data = await response.json();\n        console.log(data.user);\n        return data;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\nconst ChatPage = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the input message\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store the chat messages\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [socket, setSocket] = useState(null); // State to store the socket connection\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to track loading status\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ENDPOINT = \"http://localhost:8080\";\n    const scrollToBottom = ()=>{\n        if (messagesEndRef.current) {\n            messagesEndRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // Establish a socket connection when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the server's WebSocket endpoint\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ENDPOINT);\n        // Listen for incoming messages from the server\n        socket.on(\"message\", (msg)=>{\n            // Update the messages state with the new message\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    msg\n                ]);\n        });\n        const fetchUser = async ()=>{\n            try {\n                const data = await getUser();\n                console.log(data);\n                setData(data.user);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        const fetchToken = async ()=>{\n            try {\n                const token = await getToken();\n                console.log(token);\n                socket.emit(\"authenticate\", token);\n                socket.emit(\"reconnect\", token);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchToken();\n        // Listen for the \"connect\" event to indicate successful connection\n        socket.on(\"connect\", ()=>{\n            // Set isLoading to false when connected\n            setIsLoading(false);\n        });\n        // Cleanup function to disconnect the socket when the component unmounts\n        return ()=>{\n            socket.disconnect();\n            socket.off();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom(); // Scroll to bottom whenever messages change\n    }, [\n        messages\n    ]);\n    console.log(data.user);\n    // Function to send a message to the server\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        // Check if the socket connection exists and the message is not empty\n        if (socket && message.trim()) {\n            // Prepare the message data with message content and user ID\n            const messageData = {\n                message: message.trim(),\n                id: socket.id\n            };\n            // Emit the message event to the server with the message data\n            socket.emit(\"message\", messageData);\n            // Clear the input field after sending the message\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Chat Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 11\n                    }, undefined) : // Show user ID once connected to the server\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"USER ID: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: socket.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 131,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chat-window\",\n                className: \" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700\",\n                children: [\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-zinc-500\",\n                                    children: [\n                                        msg.id,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                msg.message\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                            lineNumber: 141,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 \",\n                        type: \"text\",\n                        onKeyPress: (e)=>e.key === \"Enter\" ? sendMessage(e) : null,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outline\",\n                        onClick: (e)=>sendMessage(e),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 151,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"available rooms:\",\n                        data && data.user.map((room, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-white\",\n                                children: room[index]._id\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 169,\n                                columnNumber: 13\n                            }, undefined))\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                    lineNumber: 166,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 165,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatPage, \"3SOHra+k+NEDa9hxsr1f602KJCA=\");\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQ3pEa0IsT0FBTy9DO3dCQUNQZ0QsVUFBVSxDQUFDbkIsSUFBTXRCLFdBQVdzQixFQUFFb0IsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRzVDLDhEQUFDekQseURBQU1BO3dCQUFDNEQsU0FBUTt3QkFBVUMsU0FBUyxDQUFDdEIsSUFBTUQsWUFBWUM7a0NBQUk7Ozs7Ozs7Ozs7OzswQkFLNUQsOERBQUNLOzBCQUNDLDRFQUFDRTs7d0JBQUc7d0JBRUR2QyxRQUFRQSxLQUFLUSxJQUFJLENBQUNtQyxHQUFHLENBQUMsQ0FBQ1ksTUFBTVgsc0JBQzVCLDhEQUFDSjtnQ0FBRUYsV0FBVTswQ0FBMEJpQixJQUFJLENBQUNYLE1BQU0sQ0FBQ1ksR0FBRzsrQkFBdkJaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNDO0dBeklNbkM7S0FBQUE7QUEySU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvcGFnZS5qc3g/YzdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxubGV0IHNvY2tldDtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vYXBpL2dldFRva2VuXCIpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdG9rZW46XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VyL2dldFVzZXJcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YS51c2VyKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICB9XHJcbn07XHJcbmNvbnN0IENoYXRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgaW5wdXQgbWVzc2FnZVxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgY2hhdCBtZXNzYWdlc1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIHNvY2tldCBjb25uZWN0aW9uXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBTdGF0ZSB0byB0cmFjayBsb2FkaW5nIHN0YXR1c1xyXG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IEVORFBPSU5UID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XHJcbiAgICBpZiAobWVzc2FnZXNFbmRSZWYuY3VycmVudCkge1xyXG4gICAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBcclxuICAvLyBFc3RhYmxpc2ggYSBzb2NrZXQgY29ubmVjdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENvbm5lY3QgdG8gdGhlIHNlcnZlcidzIFdlYlNvY2tldCBlbmRwb2ludFxyXG4gICAgc29ja2V0ID0gaW8oRU5EUE9JTlQpO1xyXG4gICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtZXNzYWdlcyBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgIHNvY2tldC5vbihcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIG1lc3NhZ2VzIHN0YXRlIHdpdGggdGhlIG5ldyBtZXNzYWdlXHJcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1zZ10pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0VXNlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldERhdGEoZGF0YS51c2VyKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmZXRjaFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJhdXRoZW50aWNhdGVcIiwgdG9rZW4pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwicmVjb25uZWN0XCIsIHRva2VuKTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFRva2VuKCk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciB0aGUgXCJjb25uZWN0XCIgZXZlbnQgdG8gaW5kaWNhdGUgc3VjY2Vzc2Z1bCBjb25uZWN0aW9uXHJcbiAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgLy8gU2V0IGlzTG9hZGluZyB0byBmYWxzZSB3aGVuIGNvbm5lY3RlZFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIGRpc2Nvbm5lY3QgdGhlIHNvY2tldCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oKTsgLy8gU2Nyb2xsIHRvIGJvdHRvbSB3aGVuZXZlciBtZXNzYWdlcyBjaGFuZ2VcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc29sZS5sb2coZGF0YS51c2VyKVxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXJcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgc29ja2V0IGNvbm5lY3Rpb24gZXhpc3RzIGFuZCB0aGUgbWVzc2FnZSBpcyBub3QgZW1wdHlcclxuICAgIGlmIChzb2NrZXQgJiYgbWVzc2FnZS50cmltKCkpIHtcclxuICAgICAgLy8gUHJlcGFyZSB0aGUgbWVzc2FnZSBkYXRhIHdpdGggbWVzc2FnZSBjb250ZW50IGFuZCB1c2VyIElEXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UudHJpbSgpLFxyXG4gICAgICAgIGlkOiBzb2NrZXQuaWQsIC8vIFNvY2tldCBJRCBpcyB1bmlxdWUgdG8gZWFjaCBjbGllbnRcclxuICAgICAgfTtcclxuICAgICAgLy8gRW1pdCB0aGUgbWVzc2FnZSBldmVudCB0byB0aGUgc2VydmVyIHdpdGggdGhlIG1lc3NhZ2UgZGF0YVxyXG4gICAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIiwgbWVzc2FnZURhdGEpO1xyXG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgZmllbGQgYWZ0ZXIgc2VuZGluZyB0aGUgbWVzc2FnZVxyXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0xMFwiPlxyXG4gICAgICAgIDxoMT5DaGF0IFJvb208L2gxPlxyXG4gICAgICAgIHsvKiBTaG93IGxvYWRpbmcgbWVzc2FnZSBpZiBzdGlsbCBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXIgKi99XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIC8vIFNob3cgdXNlciBJRCBvbmNlIGNvbm5lY3RlZCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFVTRVIgSUQ6IDxzdHJvbmc+e3NvY2tldC5pZH08L3N0cm9uZz5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBjaGF0IG1lc3NhZ2VzICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJjaGF0LXdpbmRvd1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIGJnLXppbmMtODAwLzIwIG92ZXJmbG93LWF1dG8gaC1bNDIwcHhdICB3LVs0MjBweF0gIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci16aW5jLTcwMFwiXHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciAgdGV4dC16aW5jLTMwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBiZy1ibGFjayBwLTMgbXQtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC16aW5jLTUwMFwiPnttc2cuaWR9Ojwvc3Ryb25nPiB7bXNnLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIElucHV0IGZpZWxkIGZvciB0eXBpbmcgbWVzc2FnZXMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgcC0xMFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTIwMC84MCAgYmctemluYy00MDAvMjAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBmb2N1czpib3JkZXItemluYy02MDAgXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiAoZS5rZXkgPT09IFwiRW50ZXJcIiA/IHNlbmRNZXNzYWdlKGUpIDogbnVsbCl9XHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogQnV0dG9uIHRvIHNlbmQgbWVzc2FnZXMgKi99XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eyhlKSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICBhdmFpbGFibGUgcm9vbXM6XHJcbiAgICAgICAgICB7ZGF0YSAmJiBkYXRhLnVzZXIubWFwKChyb29tLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIga2V5PXtpbmRleH0+e3Jvb21baW5kZXhdLl9pZH08L3A+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0UGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJpbyIsIkJ1dHRvbiIsImF4aW9zIiwic29ja2V0IiwiZ2V0VG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJkYXRhIiwianNvbiIsInRva2VuIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldFVzZXIiLCJ1c2VyIiwiQ2hhdFBhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJtZXNzYWdlc0VuZFJlZiIsIkVORFBPSU5UIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsIm9uIiwibXNnIiwicHJldk1lc3NhZ2VzIiwiZmV0Y2hVc2VyIiwiZXJyIiwiZmV0Y2hUb2tlbiIsImVtaXQiLCJkaXNjb25uZWN0Iiwib2ZmIiwic2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwibWVzc2FnZURhdGEiLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImgyIiwic3Ryb25nIiwibWFwIiwiaW5kZXgiLCJyZWYiLCJpbnB1dCIsInR5cGUiLCJvbktleVByZXNzIiwia2V5IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhcmlhbnQiLCJvbkNsaWNrIiwicm9vbSIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});