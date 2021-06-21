/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/attorneyking/Documents/Web/dark-ms-nextjs-ts/src/pages/login.tsx\";\n\n\n\n\n\n\n\nconst LoginPage = () => {\n  const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n  const {\n    0: _username,\n    1: set_username\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n\n  const Start = e => {\n    console.log(\"click\");\n    localStorage.clear();\n    localStorage.setItem(\"list_message\", `{\"id\":null}`);\n    e.preventDefault();\n\n    if (_username.length > 3) {\n      localStorage.setItem(\"username\", _username);\n      localStorage.setItem(\"id\", (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v1)());\n      next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/message\");\n    } else {\n      dispatch({\n        type: \"ALERT_ERROR\",\n        msg: \"Tài khoản quá ngắn\"\n      });\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      backgroundColor: \"#111\",\n      display: \"flex\",\n      justifyContent: 'center',\n      alignItems: 'center',\n      height: '100vh'\n    },\n    className: \"jsx-1707540289\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: e => Start(e),\n      style: {\n        flexDirection: 'column'\n      },\n      className: \"jsx-1707540289\" + \" \" + \"from-login d-flex justify-content-center align-items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n        id: \"standard-basic\",\n        label: \"Username\",\n        onChange: e => set_username(e.target.value.trim())\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1707540289\" + \" \" + \"p-3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        type: \"submit\",\n        variant: \"contained\",\n        children: \"Start\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"1707540289\",\n      children: \".MuiInput-underline:hover{border-bottom:1px solid green !important;}button{outline:0 !important;width:100%;}.MuiFormLabel-root{color:#fff !important;}.MuiInputBase-input{color:#fff !important;}.MuiInput-underline:before{border-bottom:1px solid #fff !important;}.MuiInput-underline:after{border-bottom:1px solid green !important;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHRvcm5leWtpbmcvRG9jdW1lbnRzL1dlYi9kYXJrLW1zLW5leHRqcy10cy9zcmMvcGFnZXMvbG9naW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDK0IsQUFHOEQsQUFHcEIsQUFJQyxBQUdBLEFBR2tCLEFBR0MscUJBWjlCLENBSWYsQUFHQSxVQU5BLFFBU0EsQ0FiQSxBQWlCQSIsImZpbGUiOiIvVXNlcnMvYXR0b3JuZXlraW5nL0RvY3VtZW50cy9XZWIvZGFyay1tcy1uZXh0anMtdHMvc3JjL3BhZ2VzL2xvZ2luLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgICB3aXRoU3R5bGVzLFxuICB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1RleHRGaWVsZCwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zdG9yZS9ob29rcyc7XG5pbXBvcnQgeyB2MSBhcyB1dWlkdjEgfSBmcm9tICd1dWlkJztcblxuXG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpPT57XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBbX3VzZXJuYW1lLCBzZXRfdXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBTdGFydCA9IChlKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0X21lc3NhZ2VcIiwgYHtcImlkXCI6bnVsbH1gKVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKF91c2VybmFtZS5sZW5ndGggPiAzKXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgX3VzZXJuYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgdXVpZHYxKCkpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9tZXNzYWdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBTEVSVF9FUlJPUlwiLCBtc2c6IFwiVMOgaSBraG/huqNuIHF1w6Egbmfhuq9uXCJ9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiMxMTFcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJ319PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT5TdGFydChlKX0gY2xhc3NOYW1lPVwiZnJvbS1sb2dpbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgbGFiZWw9XCJVc2VybmFtZVwiIG9uQ2hhbmdlPXsoZSk9PnNldF91c2VybmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgLk11aUlucHV0LXVuZGVybGluZTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLk11aUZvcm1MYWJlbC1yb290e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTXVpSW5wdXRCYXNlLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTXVpSW5wdXQtdW5kZXJsaW5lOmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLk11aUlucHV0LXVuZGVybGluZTphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il19 */\\n/*@ sourceURL=/Users/attorneyking/Documents/Web/dark-ms-nextjs-ts/src/pages/login.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXR0ZXJuLW5leHRqcy10cy8uL3NyYy9wYWdlcy9sb2dpbi50c3g/OGQxOSJdLCJuYW1lcyI6WyJMb2dpblBhZ2UiLCJkaXNwYXRjaCIsInVzZUFwcERpc3BhdGNoIiwiX3VzZXJuYW1lIiwic2V0X3VzZXJuYW1lIiwidXNlU3RhdGUiLCJTdGFydCIsImUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJzZXRJdGVtIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJ1dWlkdjEiLCJSb3V0ZXIiLCJ0eXBlIiwibXNnIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImZsZXhEaXJlY3Rpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxNQUFNQSxTQUFTLEdBQUcsTUFBSTtBQUVsQixRQUFNQyxRQUFRLEdBQUdDLDREQUFjLEVBQS9CO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7O0FBRUEsUUFBTUMsS0FBSyxHQUFJQyxDQUFELElBQUs7QUFDZkMsV0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBQyxnQkFBWSxDQUFDQyxLQUFiO0FBQ0FELGdCQUFZLENBQUNFLE9BQWIsQ0FBcUIsY0FBckIsRUFBc0MsYUFBdEM7QUFFQUwsS0FBQyxDQUFDTSxjQUFGOztBQUNBLFFBQUlWLFNBQVMsQ0FBQ1csTUFBVixHQUFtQixDQUF2QixFQUF5QjtBQUNyQkosa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixVQUFyQixFQUFpQ1QsU0FBakM7QUFDQU8sa0JBQVksQ0FBQ0UsT0FBYixDQUFxQixJQUFyQixFQUEyQkcsd0NBQU0sRUFBakM7QUFDQUMsNkRBQUEsQ0FBWSxVQUFaO0FBQ0gsS0FKRCxNQUtJO0FBQ0FmLGNBQVEsQ0FBQztBQUFDZ0IsWUFBSSxFQUFFLGFBQVA7QUFBc0JDLFdBQUcsRUFBRTtBQUEzQixPQUFELENBQVI7QUFDSDtBQUNKLEdBZEQ7O0FBaUJBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUUsTUFBbEI7QUFBMEJDLGFBQU8sRUFBRSxNQUFuQztBQUEyQ0Msb0JBQWMsRUFBRSxRQUEzRDtBQUFxRUMsZ0JBQVUsRUFBRSxRQUFqRjtBQUEyRkMsWUFBTSxFQUFFO0FBQW5HLEtBQVo7QUFBQTtBQUFBLDRCQUVJO0FBQU0sY0FBUSxFQUFHaEIsQ0FBRCxJQUFLRCxLQUFLLENBQUNDLENBQUQsQ0FBMUI7QUFBdUcsV0FBSyxFQUFFO0FBQUNpQixxQkFBYSxFQUFFO0FBQWhCLE9BQTlHO0FBQUEsMENBQXlDLDZEQUF6QztBQUFBLDhCQUNJLDhEQUFDLHdEQUFEO0FBQVcsVUFBRSxFQUFDLGdCQUFkO0FBQStCLGFBQUssRUFBQyxVQUFyQztBQUFnRCxnQkFBUSxFQUFHakIsQ0FBRCxJQUFLSCxZQUFZLENBQUNHLENBQUMsQ0FBQ2tCLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxJQUFmLEVBQUQ7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsNENBQWU7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBR0ksOERBQUMscURBQUQ7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixlQUFPLEVBQUMsV0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBa0NILENBekREOztBQTJEQSwrREFBZTNCLFNBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICAgIHdpdGhTdHlsZXMsXG4gIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7VGV4dEZpZWxkLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3N0b3JlL2hvb2tzJztcbmltcG9ydCB7IHYxIGFzIHV1aWR2MSB9IGZyb20gJ3V1aWQnO1xuXG5cblxuY29uc3QgTG9naW5QYWdlID0gKCk9PntcblxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICAgIGNvbnN0IFtfdXNlcm5hbWUsIHNldF91c2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IFN0YXJ0ID0gKGUpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tcIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RfbWVzc2FnZVwiLCBge1wiaWRcIjpudWxsfWApXG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoX3VzZXJuYW1lLmxlbmd0aCA+IDMpe1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCBfdXNlcm5hbWUpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpZFwiLCB1dWlkdjEoKSlcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL21lc3NhZ2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiBcIkFMRVJUX0VSUk9SXCIsIG1zZzogXCJUw6BpIGtob+G6o24gcXXDoSBuZ+G6r25cIn0pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiIzExMVwiLCBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgaGVpZ2h0OiAnMTAwdmgnfX0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PlN0YXJ0KGUpfSBjbGFzc05hbWU9XCJmcm9tLWxvZ2luIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlclwiIHN0eWxlPXt7ZmxleERpcmVjdGlvbjogJ2NvbHVtbid9fT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwic3RhbmRhcmQtYmFzaWNcIiBsYWJlbD1cIlVzZXJuYW1lXCIgb25DaGFuZ2U9eyhlKT0+c2V0X3VzZXJuYW1lKGUudGFyZ2V0LnZhbHVlLnRyaW0oKSl9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+U3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAuTXVpSW5wdXQtdW5kZXJsaW5lOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTXVpRm9ybUxhYmVsLXJvb3R7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5NdWlJbnB1dEJhc2UtaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5NdWlJbnB1dC11bmRlcmxpbmU6YmVmb3Jle1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTXVpSW5wdXQtdW5kZXJsaW5lOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "./src/store/hooks.ts":
/*!****************************!*\
  !*** ./src/store/hooks.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": function() { return /* binding */ useAppDispatch; },\n/* harmony export */   \"useAppSelector\": function() { return /* binding */ useAppSelector; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXR0ZXJuLW5leHRqcy10cy8uL3NyYy9zdG9yZS9ob29rcy50cz82NjVjIl0sIm5hbWVzIjpbInVzZUFwcERpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInVzZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFHTyxNQUFNQSxjQUFjLEdBQUcsTUFBTUMsd0RBQVcsRUFBeEM7QUFDQSxNQUFNQyxjQUErQyxHQUFHQyxvREFBeEQiLCJmaWxlIjoiLi9zcmMvc3RvcmUvaG9va3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLydcblxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/hooks.ts\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();