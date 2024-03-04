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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/styles.css */ \"(app-pages-browser)/./styles/styles.css\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet socket;\nconst getToken = async ()=>{\n    try {\n        const response = await fetch(\"../api/getToken\");\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.message;\n            console.log(token);\n            return token;\n        } else {\n            console.error(\"Failed to fetch token:\", response.data);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error.message);\n        return null;\n    }\n};\nconst getUser = async ()=>{\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost/8080/user/getUser\");\n        const data = await response.json();\n        console.log(data[0]);\n        return data;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\nconst ChatPage = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the input message\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store the chat messages\n    // const [socket, setSocket] = useState(null); // State to store the socket connection\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to track loading status\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ENDPOINT = \"http://localhost:8080\";\n    const scrollToBottom = ()=>{\n        if (messagesEndRef.current) {\n            messagesEndRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // const room1 = getUser(); \n    // Establish a socket connection when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the server's WebSocket endpoint\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ENDPOINT);\n        // Listen for incoming messages from the server\n        socket.on(\"message\", (msg)=>{\n            // Update the messages state with the new message\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    msg\n                ]);\n        });\n        const fetchToken = async ()=>{\n            try {\n                const token = await getToken();\n                console.log(token);\n                socket.emit(\"authenticate\", token);\n                socket.emit(\"reconnect\", token);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchToken();\n        // Listen for the \"connect\" event to indicate successful connection\n        socket.on(\"connect\", ()=>{\n            // Set isLoading to false when connected\n            setIsLoading(false);\n        });\n        // Cleanup function to disconnect the socket when the component unmounts\n        return ()=>{\n            socket.disconnect();\n            socket.off();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom(); // Scroll to bottom whenever messages change\n    }, [\n        messages\n    ]);\n    // Function to send a message to the server\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        // Check if the socket connection exists and the message is not empty\n        if (socket && message.trim()) {\n            // Prepare the message data with message content and user ID\n            const messageData = {\n                message: message.trim(),\n                id: socket.id\n            };\n            // Emit the message event to the server with the message data\n            socket.emit(\"message\", messageData);\n            // Clear the input field after sending the message\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Chat Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined) : // Show user ID once connected to the server\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"USER ID: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: socket.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chat-window\",\n                className: \" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700\",\n                children: [\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-zinc-500\",\n                                    children: [\n                                        msg.id,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                msg.message\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                            lineNumber: 132,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 139,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 \",\n                        type: \"text\",\n                        onKeyPress: (e)=>e.key === \"Enter\" ? sendMessage(e) : null,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outline\",\n                        onClick: (e)=>sendMessage(e),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 151,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"available rooms:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                    lineNumber: 156,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatPage, \"48Eben0/EbEuvfGV2eiWTZ1iKfk=\");\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OztBQUtmO0dBekhNNUI7S0FBQUE7QUEySE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvcGFnZS5qc3g/YzdmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBcIkAvc3R5bGVzL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxubGV0IHNvY2tldDtcclxuXHJcbmNvbnN0IGdldFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiLi4vYXBpL2dldFRva2VuXCIpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbnN0IHRva2VuID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdG9rZW46XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuY29uc3QgZ2V0VXNlciA9IGFzeW5jKCk9PntcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0LzgwODAvdXNlci9nZXRVc2VyXCIpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YVswXSlcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuY29uc3QgQ2hhdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBpbnB1dCBtZXNzYWdlXHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7IC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBjaGF0IG1lc3NhZ2VzXHJcbiAgXHJcbiAgLy8gY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgc29ja2V0IGNvbm5lY3Rpb25cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFN0YXRlIHRvIHRyYWNrIGxvYWRpbmcgc3RhdHVzXHJcbiAgY29uc3QgbWVzc2FnZXNFbmRSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIGlmIChtZXNzYWdlc0VuZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGNvbnN0IHJvb20xID0gZ2V0VXNlcigpOyBcclxuICAvLyBFc3RhYmxpc2ggYSBzb2NrZXQgY29ubmVjdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIENvbm5lY3QgdG8gdGhlIHNlcnZlcidzIFdlYlNvY2tldCBlbmRwb2ludFxyXG4gICAgc29ja2V0ID0gaW8oRU5EUE9JTlQpO1xyXG4gICAgLy8gTGlzdGVuIGZvciBpbmNvbWluZyBtZXNzYWdlcyBmcm9tIHRoZSBzZXJ2ZXJcclxuICAgIHNvY2tldC5vbihcIm1lc3NhZ2VcIiwgKG1zZykgPT4ge1xyXG4gICAgICAvLyBVcGRhdGUgdGhlIG1lc3NhZ2VzIHN0YXRlIHdpdGggdGhlIG5ldyBtZXNzYWdlXHJcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1zZ10pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICAgIHNvY2tldC5lbWl0KFwiYXV0aGVudGljYXRlXCIsIHRva2VuKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcInJlY29ubmVjdFwiLCB0b2tlbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBmZXRjaFRva2VuKCk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciB0aGUgXCJjb25uZWN0XCIgZXZlbnQgdG8gaW5kaWNhdGUgc3VjY2Vzc2Z1bCBjb25uZWN0aW9uXHJcbiAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgLy8gU2V0IGlzTG9hZGluZyB0byBmYWxzZSB3aGVuIGNvbm5lY3RlZFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIGRpc2Nvbm5lY3QgdGhlIHNvY2tldCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oKTsgLy8gU2Nyb2xsIHRvIGJvdHRvbSB3aGVuZXZlciBtZXNzYWdlcyBjaGFuZ2VcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNlcnZlclxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBleGlzdHMgYW5kIHRoZSBtZXNzYWdlIGlzIG5vdCBlbXB0eVxyXG4gICAgaWYgKHNvY2tldCAmJiBtZXNzYWdlLnRyaW0oKSkge1xyXG4gICAgICAvLyBQcmVwYXJlIHRoZSBtZXNzYWdlIGRhdGEgd2l0aCBtZXNzYWdlIGNvbnRlbnQgYW5kIHVzZXIgSURcclxuICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZS50cmltKCksXHJcbiAgICAgICAgaWQ6IHNvY2tldC5pZCwgLy8gU29ja2V0IElEIGlzIHVuaXF1ZSB0byBlYWNoIGNsaWVudFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBFbWl0IHRoZSBtZXNzYWdlIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgd2l0aCB0aGUgbWVzc2FnZSBkYXRhXHJcbiAgICAgIHNvY2tldC5lbWl0KFwibWVzc2FnZVwiLCBtZXNzYWdlRGF0YSk7XHJcbiAgICAgIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBzZW5kaW5nIHRoZSBtZXNzYWdlXHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTEwXCI+XHJcbiAgICAgICAgPGgxPkNoYXQgUm9vbTwvaDE+XHJcbiAgICAgICAgey8qIFNob3cgbG9hZGluZyBtZXNzYWdlIGlmIHN0aWxsIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlciAqL31cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgLy8gU2hvdyB1c2VyIElEIG9uY2UgY29ubmVjdGVkIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgVVNFUiBJRDogPHN0cm9uZz57c29ja2V0LmlkfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIERpc3BsYXkgdGhlIGNoYXQgbWVzc2FnZXMgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImNoYXQtd2luZG93XCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgYmctemluYy04MDAvMjAgb3ZlcmZsb3ctYXV0byBoLVs0MjBweF0gIHctWzQyMHB4XSAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXppbmMtNzAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyICB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGJnLWJsYWNrIHAtMyBtdC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+e21zZy5pZH06PC9zdHJvbmc+IHttc2cubWVzc2FnZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogSW5wdXQgZmllbGQgZm9yIHR5cGluZyBtZXNzYWdlcyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBwLTEwXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMjAwLzgwICBiZy16aW5jLTQwMC8yMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGZvY3VzOmJvcmRlci16aW5jLTYwMCBcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IChlLmtleSA9PT0gXCJFbnRlclwiID8gc2VuZE1lc3NhZ2UoZSkgOiBudWxsKX1cclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBCdXR0b24gdG8gc2VuZCBtZXNzYWdlcyAqL31cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KGUpID0+IHNlbmRNZXNzYWdlKGUpfT5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2PjxoMT5hdmFpbGFibGUgcm9vbXM6e308L2gxPjwvZGl2PlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiaW8iLCJCdXR0b24iLCJheGlvcyIsInNvY2tldCIsImdldFRva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJ0b2tlbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRVc2VyIiwiZ2V0IiwiQ2hhdFBhZ2UiLCJzZXRNZXNzYWdlIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsIm1lc3NhZ2VzRW5kUmVmIiwiRU5EUE9JTlQiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwib24iLCJtc2ciLCJwcmV2TWVzc2FnZXMiLCJmZXRjaFRva2VuIiwiZW1pdCIsImVyciIsImRpc2Nvbm5lY3QiLCJvZmYiLCJzZW5kTWVzc2FnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJtZXNzYWdlRGF0YSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaDIiLCJzdHJvbmciLCJtYXAiLCJpbmRleCIsInJlZiIsImlucHV0IiwidHlwZSIsIm9uS2V5UHJlc3MiLCJrZXkiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});