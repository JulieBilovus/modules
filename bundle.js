/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__output__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Math__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewResult__ = __webpack_require__(5);




Object(__WEBPACK_IMPORTED_MODULE_0__output__["a" /* viewForm */])();

let buttons = document.forms[0].querySelectorAll('.btn');

buttons.forEach(function(button){
    button.addEventListener('click', function() {
        Object(__WEBPACK_IMPORTED_MODULE_2__viewResult__["a" /* viewResult */])(Object(__WEBPACK_IMPORTED_MODULE_1__Math__["a" /* mathFields */])(this.value, document.querySelector('.firstField').value, document.querySelector('.secondField').value));
    })
})




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = viewForm;

function viewForm() {
    let parentElement = document.getElementById("output");
    let operators = ['+', '-', '*', '/'];

    let firstField = document.createElement('input');
    firstField.className = 'firstField';
    parentElement.appendChild (firstField);

    let secondField = document.createElement('input');
    secondField.className = 'secondField';
    parentElement.appendChild (secondField);

    operators.forEach(function(operator) {
        let btn = document.createElement('input');
        btn.type = 'button';
        btn.value = operator;
        btn.className = 'btn';
        parentElement.appendChild(btn);
    })
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mathFields;
function mathFields(operator, firstField, secondField) {
    let result;
    let x = +firstField;
    let y = +secondField;
    if (operator === '+')
        result =  x + y;
    else if (operator === '-')
        result = x - y;
    else if (operator == '*')
        result = x * y;
    else result = x / y;

    return result;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = viewResult;
function viewResult(element) {
    let viewResult = document.createElement('h1');
    viewResult.innerHTML = element;
    document.querySelector('body').appendChild (viewResult);
}

/***/ })
/******/ ]);