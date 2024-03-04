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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"(app-pages-browser)/./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/styles.css */ \"(app-pages-browser)/./styles/styles.css\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import getToken from \"./getToken\";\nlet socket;\nconst getToken = async ()=>{\n    try {\n        const response = await fetch(\"../api/getToken\");\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.message;\n            console.log(token);\n            return token;\n        } else {\n            console.error(\"Failed to fetch token:\", response.data);\n            return null;\n        }\n    } catch (error) {\n        console.error(\"Error:\", error.message);\n        return null;\n    }\n};\nconst ChatPage = ()=>{\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // State to store the input message\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // State to store the chat messages\n    // const [socket, setSocket] = useState(null); // State to store the socket connection\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State to track loading status\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const ENDPOINT = \"http://localhost:8080\";\n    const scrollToBottom = ()=>{\n        if (messagesEndRef.current) {\n            messagesEndRef.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    };\n    // Establish a socket connection when the component mounts\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchToken = async ()=>{\n            try {\n                const token = await getToken();\n            // socket.emit(\"authenticate\", token);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        const token = fetchToken();\n        console.log(token);\n        // Connect to the server's WebSocket endpoint\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ENDPOINT, {\n            auth: {\n                token: token\n            }\n        });\n        // Listen for incoming messages from the server\n        socket.on(\"message\", (msg)=>{\n            // Update the messages state with the new message\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    msg\n                ]);\n        });\n        // Listen for the \"connect\" event to indicate successful connection\n        socket.on(\"connect\", ()=>{\n            // Set isLoading to false when connected\n            setIsLoading(false);\n        });\n        // Cleanup function to disconnect the socket when the component unmounts\n        return ()=>{\n            socket.disconnect();\n            socket.off();\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom(); // Scroll to bottom whenever messages change\n    }, [\n        messages\n    ]);\n    // Function to send a message to the server\n    const sendMessage = (e)=>{\n        e.preventDefault();\n        // Check if the socket connection exists and the message is not empty\n        if (socket && message.trim()) {\n            // Prepare the message data with message content and user ID\n            const messageData = {\n                message: message.trim(),\n                id: socket.id\n            };\n            // Emit the message event to the server with the message data\n            socket.emit(\"message\", messageData);\n            // Clear the input field after sending the message\n            setMessage(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Chat Room\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined),\n                    isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, undefined) : // Show user ID once connected to the server\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"USER ID: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: socket.id\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"chat-window\",\n                className: \" bg-zinc-800/20 overflow-auto h-[420px]  w-[420px]  rounded-lg border border-zinc-700\",\n                children: [\n                    messages.map((msg, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center  text-zinc-300 rounded-xl font-bold bg-black p-3 mt-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    className: \"text-zinc-500\",\n                                    children: [\n                                        msg.id,\n                                        \":\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                                    lineNumber: 129,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                msg.message\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: messagesEndRef\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-2 p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-zinc-200/80  bg-zinc-400/20 rounded-md p-2 focus:outline-none border focus:border-zinc-600 \",\n                        type: \"text\",\n                        onKeyPress: (e)=>e.key === \"Enter\" ? sendMessage(e) : null,\n                        value: message,\n                        onChange: (e)=>setMessage(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"outline\",\n                        onClick: (e)=>sendMessage(e),\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\91776\\\\Desktop\\\\projects\\\\chat application\\\\frontend\\\\app\\\\chat\\\\page.jsx\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatPage, \"48Eben0/EbEuvfGV2eiWTZ1iKfk=\");\n_c = ChatPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatPage);\nvar _c;\n$RefreshReg$(_c, \"ChatPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyRDtBQUN6QjtBQUNMO0FBQ21CO0FBQ3RCO0FBQzFCLHFDQUFxQztBQUVyQyxJQUFJTztBQUVKLE1BQU1DLFdBQVc7SUFDZixJQUFJO1FBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1FBQzdCLElBQUlELFNBQVNFLEVBQUUsRUFBRTtZQUNmLE1BQU1DLE9BQU8sTUFBTUgsU0FBU0ksSUFBSTtZQUNoQyxNQUFNQyxRQUFRRixLQUFLRyxPQUFPO1lBQzFCQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1osT0FBT0E7UUFDVCxPQUFPO1lBQ0xFLFFBQVFFLEtBQUssQ0FBQywwQkFBMEJULFNBQVNHLElBQUk7WUFDckQsT0FBTztRQUNUO0lBQ0YsRUFBRSxPQUFPTSxPQUFPO1FBQ2RGLFFBQVFFLEtBQUssQ0FBQyxVQUFVQSxNQUFNSCxPQUFPO1FBQ3JDLE9BQU87SUFDVDtBQUNGO0FBRUEsTUFBTUksV0FBVzs7SUFDZixNQUFNLENBQUNKLFNBQVNLLFdBQVcsR0FBR25CLCtDQUFRQSxDQUFDLEtBQUssbUNBQW1DO0lBQy9FLE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDLEVBQUUsR0FBRyxtQ0FBbUM7SUFDakYsc0ZBQXNGO0lBQ3RGLE1BQU0sQ0FBQ3NCLFdBQVdDLGFBQWEsR0FBR3ZCLCtDQUFRQSxDQUFDLE9BQU8sZ0NBQWdDO0lBQ2xGLE1BQU13QixpQkFBaUJ0Qiw2Q0FBTUEsQ0FBQztJQUM5QixNQUFNdUIsV0FBVztJQUNqQixNQUFNQyxpQkFBaUI7UUFDckIsSUFBSUYsZUFBZUcsT0FBTyxFQUFFO1lBQzFCSCxlQUFlRyxPQUFPLENBQUNDLGNBQWMsQ0FBQztnQkFBRUMsVUFBVTtZQUFTO1FBQzdEO0lBQ0Y7SUFFQSwwREFBMEQ7SUFDMUQ1QixnREFBU0EsQ0FBQztRQUNSLE1BQU02QixhQUFhO1lBQ2pCLElBQUc7Z0JBQ0QsTUFBTWpCLFFBQVEsTUFBTU47WUFDcEIsc0NBQXNDO1lBQ3hDLEVBQUMsT0FBTXdCLEtBQUk7Z0JBQ1RoQixRQUFRQyxHQUFHLENBQUNlO1lBQ2Q7UUFDRjtRQUVBLE1BQU1sQixRQUFRaUI7UUFDZGYsUUFBUUMsR0FBRyxDQUFDSDtRQUNaLDZDQUE2QztRQUM3Q1AsU0FBU0gsNERBQUVBLENBQUNzQixVQUFTO1lBQ25CTyxNQUFNO2dCQUNKbkIsT0FBTUE7WUFDUjtRQUNGO1FBQ0EsK0NBQStDO1FBQy9DUCxPQUFPMkIsRUFBRSxDQUFDLFdBQVcsQ0FBQ0M7WUFDcEIsaURBQWlEO1lBQ2pEYixZQUFZLENBQUNjLGVBQWlCO3VCQUFJQTtvQkFBY0Q7aUJBQUk7UUFDdEQ7UUFNQSxtRUFBbUU7UUFDbkU1QixPQUFPMkIsRUFBRSxDQUFDLFdBQVc7WUFDbkIsd0NBQXdDO1lBQ3hDVixhQUFhO1FBQ2Y7UUFDQSx3RUFBd0U7UUFDeEUsT0FBTztZQUNMakIsT0FBTzhCLFVBQVU7WUFDakI5QixPQUFPK0IsR0FBRztRQUNaO0lBQ0YsR0FBRyxFQUFFO0lBRUxwQyxnREFBU0EsQ0FBQztRQUNSeUIsa0JBQWtCLDRDQUE0QztJQUNoRSxHQUFHO1FBQUNOO0tBQVM7SUFFYiwyQ0FBMkM7SUFDM0MsTUFBTWtCLGNBQWMsQ0FBQ0M7UUFDbkJBLEVBQUVDLGNBQWM7UUFDaEIscUVBQXFFO1FBQ3JFLElBQUlsQyxVQUFVUSxRQUFRMkIsSUFBSSxJQUFJO1lBQzVCLDREQUE0RDtZQUM1RCxNQUFNQyxjQUFjO2dCQUNsQjVCLFNBQVNBLFFBQVEyQixJQUFJO2dCQUNyQkUsSUFBSXJDLE9BQU9xQyxFQUFFO1lBQ2Y7WUFDQSw2REFBNkQ7WUFDN0RyQyxPQUFPc0MsSUFBSSxDQUFDLFdBQVdGO1lBQ3ZCLGtEQUFrRDtZQUNsRHZCLFdBQVc7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O29CQUVIekIsMEJBQ0MsOERBQUMwQjtrQ0FBRTs7Ozs7b0NBRUgsNENBQTRDO2tDQUM1Qyw4REFBQ0M7OzRCQUFHOzBDQUNPLDhEQUFDQzswQ0FBUTVDLE9BQU9xQyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2pDLDhEQUFDRTtnQkFDQ0YsSUFBRztnQkFDSEcsV0FBVTs7b0JBRVQxQixTQUFTK0IsR0FBRyxDQUFDLENBQUNqQixLQUFLa0Isc0JBQ2xCLDhEQUFDSjs0QkFFQ0YsV0FBVTs7OENBRVYsOERBQUNJO29DQUFPSixXQUFVOzt3Q0FBaUJaLElBQUlTLEVBQUU7d0NBQUM7Ozs7Ozs7Z0NBQVU7Z0NBQUVULElBQUlwQixPQUFPOzsyQkFINURzQzs7Ozs7a0NBTVQsOERBQUNQO3dCQUFJUSxLQUFLN0I7Ozs7Ozs7Ozs7OzswQkFHWiw4REFBQ3FCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQ0NSLFdBQVU7d0JBQ1ZTLE1BQUs7d0JBQ0xDLFlBQVksQ0FBQ2pCLElBQU9BLEVBQUVrQixHQUFHLEtBQUssVUFBVW5CLFlBQVlDLEtBQUs7d0JBQ3pEbUIsT0FBTzVDO3dCQUNQNkMsVUFBVSxDQUFDcEIsSUFBTXBCLFdBQVdvQixFQUFFcUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRzVDLDhEQUFDdEQseURBQU1BO3dCQUFDeUQsU0FBUTt3QkFBVUMsU0FBUyxDQUFDdkIsSUFBTUQsWUFBWUM7a0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRTtHQXhITXJCO0tBQUFBO0FBMEhOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3BhZ2UuanN4P2M3ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuLy8gaW1wb3J0IGdldFRva2VuIGZyb20gXCIuL2dldFRva2VuXCI7XHJcblxyXG5sZXQgc29ja2V0O1xyXG5cclxuY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIuLi9hcGkvZ2V0VG9rZW5cIik7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29uc3QgdG9rZW4gPSBkYXRhLm1lc3NhZ2VcclxuICAgICAgY29uc29sZS5sb2codG9rZW4pXHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggdG9rZW46XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IENoYXRQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgaW5wdXQgbWVzc2FnZVxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pOyAvLyBTdGF0ZSB0byBzdG9yZSB0aGUgY2hhdCBtZXNzYWdlc1xyXG4gIC8vIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZShudWxsKTsgLy8gU3RhdGUgdG8gc3RvcmUgdGhlIHNvY2tldCBjb25uZWN0aW9uXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpOyAvLyBTdGF0ZSB0byB0cmFjayBsb2FkaW5nIHN0YXR1c1xyXG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IEVORFBPSU5UID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIjtcclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIGlmIChtZXNzYWdlc0VuZFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBFc3RhYmxpc2ggYSBzb2NrZXQgY29ubmVjdGlvbiB3aGVuIHRoZSBjb21wb25lbnQgbW91bnRzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoVG9rZW4gPSBhc3luYygpPT57XHJcbiAgICAgIHRyeXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKClcclxuICAgICAgICAvLyBzb2NrZXQuZW1pdChcImF1dGhlbnRpY2F0ZVwiLCB0b2tlbik7XHJcbiAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGZldGNoVG9rZW4oKVxyXG4gICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgc2VydmVyJ3MgV2ViU29ja2V0IGVuZHBvaW50XHJcbiAgICBzb2NrZXQgPSBpbyhFTkRQT0lOVCx7XHJcbiAgICAgIGF1dGg6IHtcclxuICAgICAgICB0b2tlbjp0b2tlbixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBMaXN0ZW4gZm9yIGluY29taW5nIG1lc3NhZ2VzIGZyb20gdGhlIHNlcnZlclxyXG4gICAgc29ja2V0Lm9uKFwibWVzc2FnZVwiLCAobXNnKSA9PiB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgbWVzc2FnZXMgc3RhdGUgd2l0aCB0aGUgbmV3IG1lc3NhZ2VcclxuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbXNnXSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciB0aGUgXCJjb25uZWN0XCIgZXZlbnQgdG8gaW5kaWNhdGUgc3VjY2Vzc2Z1bCBjb25uZWN0aW9uXHJcbiAgICBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuICAgICAgLy8gU2V0IGlzTG9hZGluZyB0byBmYWxzZSB3aGVuIGNvbm5lY3RlZFxyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIGRpc2Nvbm5lY3QgdGhlIHNvY2tldCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgIHNvY2tldC5vZmYoKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oKTsgLy8gU2Nyb2xsIHRvIGJvdHRvbSB3aGVuZXZlciBtZXNzYWdlcyBjaGFuZ2VcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gc2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNlcnZlclxyXG4gIGNvbnN0IHNlbmRNZXNzYWdlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIENoZWNrIGlmIHRoZSBzb2NrZXQgY29ubmVjdGlvbiBleGlzdHMgYW5kIHRoZSBtZXNzYWdlIGlzIG5vdCBlbXB0eVxyXG4gICAgaWYgKHNvY2tldCAmJiBtZXNzYWdlLnRyaW0oKSkge1xyXG4gICAgICAvLyBQcmVwYXJlIHRoZSBtZXNzYWdlIGRhdGEgd2l0aCBtZXNzYWdlIGNvbnRlbnQgYW5kIHVzZXIgSURcclxuICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZS50cmltKCksXHJcbiAgICAgICAgaWQ6IHNvY2tldC5pZCwgLy8gU29ja2V0IElEIGlzIHVuaXF1ZSB0byBlYWNoIGNsaWVudFxyXG4gICAgICB9O1xyXG4gICAgICAvLyBFbWl0IHRoZSBtZXNzYWdlIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgd2l0aCB0aGUgbWVzc2FnZSBkYXRhXHJcbiAgICAgIHNvY2tldC5lbWl0KFwibWVzc2FnZVwiLCBtZXNzYWdlRGF0YSk7XHJcbiAgICAgIC8vIENsZWFyIHRoZSBpbnB1dCBmaWVsZCBhZnRlciBzZW5kaW5nIHRoZSBtZXNzYWdlXHJcbiAgICAgIHNldE1lc3NhZ2UoXCJcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTEwXCI+XHJcbiAgICAgICAgPGgxPkNoYXQgUm9vbTwvaDE+XHJcbiAgICAgICAgey8qIFNob3cgbG9hZGluZyBtZXNzYWdlIGlmIHN0aWxsIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlciAqL31cclxuICAgICAgICB7aXNMb2FkaW5nID8gKFxyXG4gICAgICAgICAgPHA+TG9hZGluZy4uLjwvcD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgLy8gU2hvdyB1c2VyIElEIG9uY2UgY29ubmVjdGVkIHRvIHRoZSBzZXJ2ZXJcclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgVVNFUiBJRDogPHN0cm9uZz57c29ja2V0LmlkfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIERpc3BsYXkgdGhlIGNoYXQgbWVzc2FnZXMgKi99XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBpZD1cImNoYXQtd2luZG93XCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgYmctemluYy04MDAvMjAgb3ZlcmZsb3ctYXV0byBoLVs0MjBweF0gIHctWzQyMHB4XSAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXppbmMtNzAwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1zZywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyICB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgZm9udC1ib2xkIGJnLWJsYWNrIHAtMyBtdC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCI+e21zZy5pZH06PC9zdHJvbmc+IHttc2cubWVzc2FnZX1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogSW5wdXQgZmllbGQgZm9yIHR5cGluZyBtZXNzYWdlcyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMiBwLTEwXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMjAwLzgwICBiZy16aW5jLTQwMC8yMCByb3VuZGVkLW1kIHAtMiBmb2N1czpvdXRsaW5lLW5vbmUgYm9yZGVyIGZvY3VzOmJvcmRlci16aW5jLTYwMCBcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IChlLmtleSA9PT0gXCJFbnRlclwiID8gc2VuZE1lc3NhZ2UoZSkgOiBudWxsKX1cclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiBCdXR0b24gdG8gc2VuZCBtZXNzYWdlcyAqL31cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgb25DbGljaz17KGUpID0+IHNlbmRNZXNzYWdlKGUpfT5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdFBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiaW8iLCJCdXR0b24iLCJheGlvcyIsInNvY2tldCIsImdldFRva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJ0b2tlbiIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJDaGF0UGFnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwibWVzc2FnZXNFbmRSZWYiLCJFTkRQT0lOVCIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJmZXRjaFRva2VuIiwiZXJyIiwiYXV0aCIsIm9uIiwibXNnIiwicHJldk1lc3NhZ2VzIiwiZGlzY29ubmVjdCIsIm9mZiIsInNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsIm1lc3NhZ2VEYXRhIiwiaWQiLCJlbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaDIiLCJzdHJvbmciLCJtYXAiLCJpbmRleCIsInJlZiIsImlucHV0IiwidHlwZSIsIm9uS2V5UHJlc3MiLCJrZXkiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFyaWFudCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/page.jsx\n"));

/***/ })

});