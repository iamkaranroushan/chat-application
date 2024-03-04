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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/styles.css */ \"(app-pages-browser)/./styles/styles.css\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet socket;\nconst getToken = async ()=>{\n    try {\n        const response = await fetch(\"../api/getToken\");\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.message;\n            console.log(token);\n            return token;\n        } else {\n            console.error(\"Failed to fetch token:\", response.data);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error.message);\n        return null;\n    }\n};\nconst getUser = async ()=>{\n    try {\n        const response = axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:8080/user/getUser\");\n        const data = await response.json();\n        console.log(data.user);\n        return data;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\nconst ChatPage = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the input message\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store the chat messages\n    // const [socket, setSocket] = useState(null); // State to store the socket connection\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to track loading status\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ENDPOINT = \"http://localhost:8080\";\n    const scrollToBottom = ()=>{\n        if (messagesEndRef.current) {\n            messagesEndRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // Establish a socket connection when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Connect to the server's WebSocket endpoint\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ENDPOINT);\n        // Listen for incoming messages from the server\n        socket.on(\"message\", (msg)=>{\n            // Update the messages state with the new message\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    msg\n                ]);\n        });\n        const fetchToken = async ()=>{\n            try {\n                const token = await getToken();\n                console.log(token);\n                socket.emit(\"authenticate\", token);\n                socket.emit(\"reconnect\", token);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchToken();\n        // Listen for the \"connect\" event to indicate successful connection\n        socket.on(\"connect\", ()=>{\n            // Set isLoading to false when connected\n            setIsLoading(false);\n        });\n        // Cleanup function to disconnect the socket when the component unmounts\n        return ()=>{\n            socket.disconnect();\n            socket.off();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom(); // Scroll to bottom whenever messages change\n    }, [\n        messages\n    ]);\n    // Function to send a message to the server\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        // Check if the socket connection exists and the message is not empty\n        if (socket && message.trim()) {\n            // Prepare the message data with message content and user ID\n            const messageData = {\n                message: message.trim(),\n                id: socket.id\n            };\n            // Emit the message event to the server with the message data\n            socket.emit(\"message\", messageData);\n            // Clear the input field after sending the message\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Chat Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, undefined) : // Show user ID once connected to the server\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"USER ID: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: socket.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 123,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chat-window\",\n                className: \" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700\",\n                children: [\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-zinc-500\",\n                                    children: [\n                                        msg.id,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                msg.message\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 \",\n                        type: \"text\",\n                        onKeyPress: (e)=>e.key === \"Enter\" ? sendMessage(e) : null,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outline\",\n                        onClick: (e)=>sendMessage(e),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 152,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"available rooms:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                    lineNumber: 157,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 157,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatPage, \"48Eben0/EbEuvfGV2eiWTZ1iKfk=\");\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQTRITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdC9wYWdlLmpzeD9jN2Y1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5cclxuY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi9hcGkvZ2V0VG9rZW5cIik7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBmZXRjaCB0b2tlbjpcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBnZXRVc2VyID0gYXN5bmMoKT0+e1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91c2VyL2dldFVzZXJcIilcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXIpXHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbmNvbnN0IENoYXRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgaW5wdXQgbWVzc2FnZVxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgY2hhdCBtZXNzYWdlc1xyXG4gIFxyXG4gIC8vIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIHNvY2tldCBjb25uZWN0aW9uXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBTdGF0ZSB0byB0cmFjayBsb2FkaW5nIHN0YXR1c1xyXG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IEVORFBPSU5UID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9Cb3R0b20gPSAoKSA9PiB7XHJcbiAgICBpZiAobWVzc2FnZXNFbmRSZWYuY3VycmVudCkge1xyXG4gICAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcbiAgLy8gRXN0YWJsaXNoIGEgc29ja2V0IGNvbm5lY3Rpb24gd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDb25uZWN0IHRvIHRoZSBzZXJ2ZXIncyBXZWJTb2NrZXQgZW5kcG9pbnRcclxuICAgIHNvY2tldCA9IGlvKEVORFBPSU5UKTtcclxuICAgIC8vIExpc3RlbiBmb3IgaW5jb21pbmcgbWVzc2FnZXMgZnJvbSB0aGUgc2VydmVyXHJcbiAgICBzb2NrZXQub24oXCJtZXNzYWdlXCIsIChtc2cpID0+IHtcclxuICAgICAgLy8gVXBkYXRlIHRoZSBtZXNzYWdlcyBzdGF0ZSB3aXRoIHRoZSBuZXcgbWVzc2FnZVxyXG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBtc2ddKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGZldGNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICAgICAgICBzb2NrZXQuZW1pdChcImF1dGhlbnRpY2F0ZVwiLCB0b2tlbik7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoXCJyZWNvbm5lY3RcIiwgdG9rZW4pO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgZmV0Y2hUb2tlbigpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgdGhlIFwiY29ubmVjdFwiIGV2ZW50IHRvIGluZGljYXRlIHN1Y2Nlc3NmdWwgY29ubmVjdGlvblxyXG4gICAgc29ja2V0Lm9uKFwiY29ubmVjdFwiLCAoKSA9PiB7XHJcbiAgICAgIC8vIFNldCBpc0xvYWRpbmcgdG8gZmFsc2Ugd2hlbiBjb25uZWN0ZWRcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byBkaXNjb25uZWN0IHRoZSBzb2NrZXQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICBzb2NrZXQub2ZmKCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKCk7IC8vIFNjcm9sbCB0byBib3R0b20gd2hlbmV2ZXIgbWVzc2FnZXMgY2hhbmdlXHJcbiAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIHNlbmQgYSBtZXNzYWdlIHRvIHRoZSBzZXJ2ZXJcclxuICBjb25zdCBzZW5kTWVzc2FnZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgc29ja2V0IGNvbm5lY3Rpb24gZXhpc3RzIGFuZCB0aGUgbWVzc2FnZSBpcyBub3QgZW1wdHlcclxuICAgIGlmIChzb2NrZXQgJiYgbWVzc2FnZS50cmltKCkpIHtcclxuICAgICAgLy8gUHJlcGFyZSB0aGUgbWVzc2FnZSBkYXRhIHdpdGggbWVzc2FnZSBjb250ZW50IGFuZCB1c2VyIElEXHJcbiAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0ge1xyXG4gICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UudHJpbSgpLFxyXG4gICAgICAgIGlkOiBzb2NrZXQuaWQsIC8vIFNvY2tldCBJRCBpcyB1bmlxdWUgdG8gZWFjaCBjbGllbnRcclxuICAgICAgfTtcclxuICAgICAgLy8gRW1pdCB0aGUgbWVzc2FnZSBldmVudCB0byB0aGUgc2VydmVyIHdpdGggdGhlIG1lc3NhZ2UgZGF0YVxyXG4gICAgICBzb2NrZXQuZW1pdChcIm1lc3NhZ2VcIiwgbWVzc2FnZURhdGEpO1xyXG4gICAgICAvLyBDbGVhciB0aGUgaW5wdXQgZmllbGQgYWZ0ZXIgc2VuZGluZyB0aGUgbWVzc2FnZVxyXG4gICAgICBzZXRNZXNzYWdlKFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcC0xMFwiPlxyXG4gICAgICAgIDxoMT5DaGF0IFJvb208L2gxPlxyXG4gICAgICAgIHsvKiBTaG93IGxvYWRpbmcgbWVzc2FnZSBpZiBzdGlsbCBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXIgKi99XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxwPkxvYWRpbmcuLi48L3A+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIC8vIFNob3cgdXNlciBJRCBvbmNlIGNvbm5lY3RlZCB0byB0aGUgc2VydmVyXHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIFVTRVIgSUQ6IDxzdHJvbmc+e3NvY2tldC5pZH08L3N0cm9uZz5cclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBjaGF0IG1lc3NhZ2VzICovfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgaWQ9XCJjaGF0LXdpbmRvd1wiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIGJnLXppbmMtODAwLzIwIG92ZXJmbG93LWF1dG8gaC1bNDIwcHhdICB3LVs0MjBweF0gIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci16aW5jLTcwMFwiXHJcbiAgICAgID5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtc2csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8cFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciAgdGV4dC16aW5jLTMwMCByb3VuZGVkLXhsIGZvbnQtYm9sZCBiZy1ibGFjayBwLTMgbXQtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwidGV4dC16aW5jLTUwMFwiPnttc2cuaWR9Ojwvc3Ryb25nPiB7bXNnLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAgPGRpdiByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIElucHV0IGZpZWxkIGZvciB0eXBpbmcgbWVzc2FnZXMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgcC0xMFwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC16aW5jLTIwMC84MCAgYmctemluYy00MDAvMjAgcm91bmRlZC1tZCBwLTIgZm9jdXM6b3V0bGluZS1ub25lIGJvcmRlciBmb2N1czpib3JkZXItemluYy02MDAgXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiAoZS5rZXkgPT09IFwiRW50ZXJcIiA/IHNlbmRNZXNzYWdlKGUpIDogbnVsbCl9XHJcbiAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogQnV0dG9uIHRvIHNlbmQgbWVzc2FnZXMgKi99XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIG9uQ2xpY2s9eyhlKSA9PiBzZW5kTWVzc2FnZShlKX0+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj48aDE+YXZhaWxhYmxlIHJvb21zOnt9PC9oMT48L2Rpdj5cclxuXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsImlvIiwiQnV0dG9uIiwiYXhpb3MiLCJzb2NrZXQiLCJnZXRUb2tlbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImRhdGEiLCJqc29uIiwidG9rZW4iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZ2V0VXNlciIsImdldCIsInVzZXIiLCJDaGF0UGFnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZXNFbmRSZWYiLCJFTkRQT0lOVCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJvbiIsIm1zZyIsInByZXZNZXNzYWdlcyIsImZldGNoVG9rZW4iLCJlbWl0IiwiZXJyIiwiZGlzY29ubmVjdCIsIm9mZiIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm1lc3NhZ2VEYXRhIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJoMiIsInN0cm9uZyIsIm1hcCIsImluZGV4IiwicmVmIiwiaW5wdXQiLCJ0eXBlIiwib25LZXlQcmVzcyIsImtleSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YXJpYW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});