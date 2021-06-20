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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/hooks */ \"./src/store/hooks.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/attorneyking/Documents/Web/dark-ms-nextjs-ts/src/pages/login.tsx\";\n\n\n\n\n\n\n\nconst LoginPage = () => {\n  const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n  const {\n    0: _username,\n    1: set_username\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n\n  const Start = e => {\n    console.log(\"click\");\n    localStorage.setItem(\"list_message\", `{\"id\":null}`);\n    e.preventDefault();\n\n    if (_username.length > 3) {\n      localStorage.setItem(\"username\", _username);\n      localStorage.setItem(\"id\", (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v1)());\n      next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/message\");\n    } else {\n      dispatch({\n        type: \"ALERT_ERROR\",\n        msg: \"Tài khoản quá ngắn\"\n      });\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      backgroundColor: \"#111\",\n      display: \"flex\",\n      justifyContent: 'center',\n      alignItems: 'center',\n      height: '100vh'\n    },\n    className: \"jsx-1707540289\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      onSubmit: e => Start(e),\n      style: {\n        flexDirection: 'column'\n      },\n      className: \"jsx-1707540289\" + \" \" + \"from-login d-flex justify-content-center align-items-center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n        id: \"standard-basic\",\n        label: \"Username\",\n        onChange: e => set_username(e.target.value.trim())\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-1707540289\" + \" \" + \"p-3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        type: \"submit\",\n        variant: \"contained\",\n        children: \"Start\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n      id: \"1707540289\",\n      children: \".MuiInput-underline:hover{border-bottom:1px solid green !important;}button{outline:0 !important;width:100%;}.MuiFormLabel-root{color:#fff !important;}.MuiInputBase-input{color:#fff !important;}.MuiInput-underline:before{border-bottom:1px solid #fff !important;}.MuiInput-underline:after{border-bottom:1px solid green !important;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hdHRvcm5leWtpbmcvRG9jdW1lbnRzL1dlYi9kYXJrLW1zLW5leHRqcy10cy9zcmMvcGFnZXMvbG9naW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDK0IsQUFHOEQsQUFHcEIsQUFJQyxBQUdBLEFBR2tCLEFBR0MscUJBWjlCLENBSWYsQUFHQSxVQU5BLFFBU0EsQ0FiQSxBQWlCQSIsImZpbGUiOiIvVXNlcnMvYXR0b3JuZXlraW5nL0RvY3VtZW50cy9XZWIvZGFyay1tcy1uZXh0anMtdHMvc3JjL3BhZ2VzL2xvZ2luLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgICB3aXRoU3R5bGVzLFxuICB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQge1RleHRGaWVsZCwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zdG9yZS9ob29rcyc7XG5pbXBvcnQgeyB2MSBhcyB1dWlkdjEgfSBmcm9tICd1dWlkJztcblxuXG5cbmNvbnN0IExvZ2luUGFnZSA9ICgpPT57XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgICBjb25zdCBbX3VzZXJuYW1lLCBzZXRfdXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCBTdGFydCA9IChlKT0+e1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxpc3RfbWVzc2FnZVwiLCBge1wiaWRcIjpudWxsfWApXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKF91c2VybmFtZS5sZW5ndGggPiAzKXtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgX3VzZXJuYW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgdXVpZHYxKCkpXG4gICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9tZXNzYWdlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogXCJBTEVSVF9FUlJPUlwiLCBtc2c6IFwiVMOgaSBraG/huqNuIHF1w6Egbmfhuq9uXCJ9KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcIiMxMTFcIiwgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGhlaWdodDogJzEwMHZoJ319PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT5TdGFydChlKX0gY2xhc3NOYW1lPVwiZnJvbS1sb2dpbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiBzdHlsZT17e2ZsZXhEaXJlY3Rpb246ICdjb2x1bW4nfX0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgbGFiZWw9XCJVc2VybmFtZVwiIG9uQ2hhbmdlPXsoZSk9PnNldF91c2VybmFtZShlLnRhcmdldC52YWx1ZS50cmltKCkpfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgLk11aUlucHV0LXVuZGVybGluZTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLk11aUZvcm1MYWJlbC1yb290e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTXVpSW5wdXRCYXNlLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuTXVpSW5wdXQtdW5kZXJsaW5lOmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLk11aUlucHV0LXVuZGVybGluZTphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il19 */\\n/*@ sourceURL=/Users/attorneyking/Documents/Web/dark-ms-nextjs-ts/src/pages/login.tsx */\"\n    }, void 0, false, void 0, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYXR0ZXJuLW5leHRqcy10cy8uL3NyYy9wYWdlcy9sb2dpbi50c3g/OGQxOSJdLCJuYW1lcyI6WyJMb2dpblBhZ2UiLCJkaXNwYXRjaCIsInVzZUFwcERpc3BhdGNoIiwiX3VzZXJuYW1lIiwic2V0X3VzZXJuYW1lIiwidXNlU3RhdGUiLCJTdGFydCIsImUiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwidXVpZHYxIiwiUm91dGVyIiwidHlwZSIsIm1zZyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJmbGV4RGlyZWN0aW9uIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmltIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsTUFBTUEsU0FBUyxHQUFHLE1BQUk7QUFFbEIsUUFBTUMsUUFBUSxHQUFHQyw0REFBYyxFQUEvQjtBQUVBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsK0NBQVEsQ0FBQyxFQUFELENBQTFDOztBQUVBLFFBQU1DLEtBQUssR0FBSUMsQ0FBRCxJQUFLO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixjQUFyQixFQUFzQyxhQUF0QztBQUNBSixLQUFDLENBQUNLLGNBQUY7O0FBQ0EsUUFBSVQsU0FBUyxDQUFDVSxNQUFWLEdBQW1CLENBQXZCLEVBQXlCO0FBQ3JCSCxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDUixTQUFqQztBQUNBTyxrQkFBWSxDQUFDQyxPQUFiLENBQXFCLElBQXJCLEVBQTJCRyx3Q0FBTSxFQUFqQztBQUNBQyw2REFBQSxDQUFZLFVBQVo7QUFDSCxLQUpELE1BS0k7QUFDQWQsY0FBUSxDQUFDO0FBQUNlLFlBQUksRUFBRSxhQUFQO0FBQXNCQyxXQUFHLEVBQUU7QUFBM0IsT0FBRCxDQUFSO0FBQ0g7QUFDSixHQVpEOztBQWVBLHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUUsTUFBbEI7QUFBMEJDLGFBQU8sRUFBRSxNQUFuQztBQUEyQ0Msb0JBQWMsRUFBRSxRQUEzRDtBQUFxRUMsZ0JBQVUsRUFBRSxRQUFqRjtBQUEyRkMsWUFBTSxFQUFFO0FBQW5HLEtBQVo7QUFBQTtBQUFBLDRCQUVJO0FBQU0sY0FBUSxFQUFHZixDQUFELElBQUtELEtBQUssQ0FBQ0MsQ0FBRCxDQUExQjtBQUF1RyxXQUFLLEVBQUU7QUFBQ2dCLHFCQUFhLEVBQUU7QUFBaEIsT0FBOUc7QUFBQSwwQ0FBeUMsNkRBQXpDO0FBQUEsOEJBQ0ksOERBQUMsd0RBQUQ7QUFBVyxVQUFFLEVBQUMsZ0JBQWQ7QUFBK0IsYUFBSyxFQUFDLFVBQXJDO0FBQWdELGdCQUFRLEVBQUdoQixDQUFELElBQUtILFlBQVksQ0FBQ0csQ0FBQyxDQUFDaUIsTUFBRixDQUFTQyxLQUFULENBQWVDLElBQWYsRUFBRDtBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQSw0Q0FBZTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosZUFHSSw4REFBQyxxREFBRDtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrQ0gsQ0F2REQ7O0FBeURBLCtEQUFlMUIsU0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gICAgd2l0aFN0eWxlcyxcbiAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtUZXh0RmllbGQsIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ0Avc3RvcmUvaG9va3MnO1xuaW1wb3J0IHsgdjEgYXMgdXVpZHYxIH0gZnJvbSAndXVpZCc7XG5cblxuXG5jb25zdCBMb2dpblBhZ2UgPSAoKT0+e1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gICAgY29uc3QgW191c2VybmFtZSwgc2V0X3VzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgU3RhcnQgPSAoZSk9PntcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0X21lc3NhZ2VcIiwgYHtcImlkXCI6bnVsbH1gKVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChfdXNlcm5hbWUubGVuZ3RoID4gMyl7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIF91c2VybmFtZSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIHV1aWR2MSgpKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbWVzc2FnZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6IFwiQUxFUlRfRVJST1JcIiwgbXNnOiBcIlTDoGkga2hv4bqjbiBxdcOhIG5n4bqvblwifSlcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCIjMTExXCIsIGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDB2aCd9fT5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+U3RhcnQoZSl9IGNsYXNzTmFtZT1cImZyb20tbG9naW4gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgc3R5bGU9e3tmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIGxhYmVsPVwiVXNlcm5hbWVcIiBvbkNoYW5nZT17KGUpPT5zZXRfdXNlcm5hbWUoZS50YXJnZXQudmFsdWUudHJpbSgpKX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5TdGFydDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIC5NdWlJbnB1dC11bmRlcmxpbmU6aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5NdWlGb3JtTGFiZWwtcm9vdHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLk11aUlucHV0QmFzZS1pbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLk11aUlucHV0LXVuZGVybGluZTpiZWZvcmV7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5NdWlJbnB1dC11bmRlcmxpbmU6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbiAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

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