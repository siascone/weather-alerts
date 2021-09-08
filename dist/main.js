/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/clickEvents.js":
/*!********************************!*\
  !*** ./scripts/clickEvents.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./scripts/constants.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./scripts/util.js\");\n// let states = document.querySelectorAll('path[class*=\"sm_state\"]');\n\n// let stateRects = document.querySelectorAll('rect')\n\n\n\n\nclass AddStateClicks {\n    constructor() {\n        this.states = document.querySelectorAll('path[class*=sm_state]');\n        this.rects = document.querySelectorAll('rect');\n        this.statesByClass = _constants__WEBPACK_IMPORTED_MODULE_0__.statesByClass\n        this.statesByClassAbreviation = _constants__WEBPACK_IMPORTED_MODULE_0__.statesByClassAbreviation;\n        this.activeStateAlerts = _util__WEBPACK_IMPORTED_MODULE_1__.activeStateAlerts;\n        // this.alerts = document.createElement('div');\n        this.clickEvents.bind(this);\n        this.loadAlerts.bind(this);\n        this.clickEvents()\n    }\n\n    loadAlerts = function(e) {\n        e.preventDefault();\n        e.stopPropagation();\n\n        // debugger\n        // TODO: fix target nameing issues for rects\n        let eventState = e.target\n        const alertBox = document.querySelector('.alert-container');\n        let state = this.statesByClassAbreviation[eventState.classList[0]];\n        // let alerts = this.alerts;\n\n        alertBox.innerText = `Alerts for ${this.statesByClass[eventState.classList[0]]}`\n\n        this.activeStateAlerts(state).then(function(res) {\n            // debugger\n            let alerts = document.createElement('div')\n            alerts.innerText = JSON.stringify(res);\n            alertBox.appendChild(alerts);\n        });\n\n        \n\n        \n    }\n\n    clickEvents() {\n\n        // TODO: add event listener to parent not each state\n        this.states.forEach(state => state.addEventListener('click', (e) => this.loadAlerts(e)));\n        this.rects.forEach(rect => {\n            // debugger\n            if (this.rects.item(0) !== rect) {\n                // debugger\n                rect.addEventListener('click', (e) => this.loadAlerts(e))\n            }\n        })\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddStateClicks);\n\n\n\n//# sourceURL=webpack://weather-alert/./scripts/clickEvents.js?");

/***/ }),

/***/ "./scripts/constants.js":
/*!******************************!*\
  !*** ./scripts/constants.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"statesByClass\": () => (/* binding */ statesByClass),\n/* harmony export */   \"statesByClassAbreviation\": () => (/* binding */ statesByClassAbreviation)\n/* harmony export */ });\nconst statesByClass = {\n    sm_state_HI: 'Hawaii',\n    sm_state_AK: 'Alaska',\n    sm_state_FL: 'Florida',\n    sm_state_NH: 'New Hampshire',\n    sm_state_VT: 'Vermont',\n    sm_state_ME: 'Maine',\n    sm_state_RI: 'Rhode Island',\n    sm_state_NY: 'New York',\n    sm_state_PA: 'Pennsylvania',\n    sm_state_NJ: 'New Jersey',\n    sm_state_DE: 'Delaware',\n    sm_state_MD: 'Maryland',\n    sm_state_VA: 'Virginia',\n    sm_state_WV: 'West Verginia',\n    sm_state_OH: 'Ohio',\n    sm_state_IN: 'Indiana',\n    sm_state_IL: 'Illinois',\n    sm_state_CT: 'Connecticut',\n    sm_state_WI: 'Wisconsin',\n    sm_state_NC: 'North Carolina',\n    sm_state_MA: 'Massachusetts',\n    sm_state_TN: 'Tennessee',\n    sm_state_AR: 'Arkansas',\n    sm_state_MO: 'Missouri',\n    sm_state_GA: 'Georgia',\n    sm_state_SC: 'South Carolina',\n    sm_state_KY: 'Kentucky',\n    sm_state_AL: 'Alabama',\n    sm_state_LA: 'Louisiana',\n    sm_state_MS: 'Mississippi',\n    sm_state_IA: 'Iowa',\n    sm_state_MN: 'Minnesota',\n    sm_state_OK: 'Oklahoma',\n    sm_state_TX: 'Texas',\n    sm_state_NM: 'New Mexico',\n    sm_state_KS: 'Kansas',\n    sm_state_NE: 'Nebraska',\n    sm_state_SD: 'South Dakota',\n    sm_state_ND: 'North Dakota',\n    sm_state_WY: 'Wyoming',\n    sm_state_MT: 'Montana',\n    sm_state_CO: 'Colorado',\n    sm_state_UT: 'Utah',\n    sm_state_AZ: 'Arizona',\n    sm_state_NV: 'Nevada',\n    sm_state_OR: 'Oregon',\n    sm_state_WA: 'Washington',\n    sm_state_CA: 'California',\n    sm_state_MI: 'Michigan',\n    sm_state_ID: 'Idaho'\n}\n\nconst statesByClassAbreviation = {\n    sm_state_HI: 'HI',\n    sm_state_AK: 'AK',\n    sm_state_FL: 'FL',\n    sm_state_NH: 'NH',\n    sm_state_VT: 'VT',\n    sm_state_ME: 'ME',\n    sm_state_RI: 'RI',\n    sm_state_NY: 'NY',\n    sm_state_PA: 'PA',\n    sm_state_NJ: 'NJ',\n    sm_state_DE: 'DE',\n    sm_state_MD: 'MD',\n    sm_state_VA: 'VA',\n    sm_state_WV: 'WV',\n    sm_state_OH: 'OH',\n    sm_state_IN: 'IN',\n    sm_state_IL: 'IL',\n    sm_state_CT: 'CT',\n    sm_state_WI: 'WI',\n    sm_state_NC: 'NC',\n    sm_state_MA: 'MA',\n    sm_state_TN: 'TN',\n    sm_state_AR: 'AR',\n    sm_state_MO: 'MO',\n    sm_state_GA: 'GA',\n    sm_state_SC: 'SC',\n    sm_state_KY: 'KY',\n    sm_state_AL: 'AL',\n    sm_state_LA: 'LA',\n    sm_state_MS: 'MS',\n    sm_state_IA: 'IA',\n    sm_state_MN: 'MN',\n    sm_state_OK: 'OK',\n    sm_state_TX: 'TX',\n    sm_state_NM: 'NM',\n    sm_state_KS: 'KN',\n    sm_state_NE: 'NE',\n    sm_state_SD: 'SD',\n    sm_state_ND: 'ND',\n    sm_state_WY: 'WY',\n    sm_state_MT: 'MT',\n    sm_state_CO: 'CO',\n    sm_state_UT: 'UT',\n    sm_state_AZ: 'AZ',\n    sm_state_NV: 'NA',\n    sm_state_OR: 'OR',\n    sm_state_WA: 'WA',\n    sm_state_CA: 'CA',\n    sm_state_MI: 'MI',\n    sm_state_ID: 'ID'\n}\n\n//# sourceURL=webpack://weather-alert/./scripts/constants.js?");

/***/ }),

/***/ "./scripts/util.js":
/*!*************************!*\
  !*** ./scripts/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeStateAlerts\": () => (/* binding */ activeStateAlerts)\n/* harmony export */ });\n\nconst activeStateAlerts = function (state) {\n    return (\n        $.ajax({\n            url: `https://api.weather.gov/alerts/active/area/${state}`,\n            method: 'GET',\n        })\n    )\n}\n// export const activeAlerts = function () {\n//     return (\n//         $.ajax({\n//             url: 'https://api.weather.gov/alerts/active',\n//             method: 'GET',\n\n//         })\n//     )\n// }\n\n//# sourceURL=webpack://weather-alert/./scripts/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_clickEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/clickEvents */ \"./scripts/clickEvents.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let map = document.getElementById('map');\n    \n    const stateClicks = function() {\n        new _scripts_clickEvents__WEBPACK_IMPORTED_MODULE_0__.default();\n    }\n\n    if (!map.innerHTML) {\n        setTimeout(stateClicks, 1000);\n    }\n\n});\n\n\n\n\n//# sourceURL=webpack://weather-alert/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;