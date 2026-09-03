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

/***/ "./src/beef-taco.png"
/*!***************************!*\
  !*** ./src/beef-taco.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"de972dacbf49271f1927.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/beef-taco.png?\n}");

/***/ },

/***/ "./src/chicken-taco.png"
/*!******************************!*\
  !*** ./src/chicken-taco.png ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"4721c090de278a9d298f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/chicken-taco.png?\n}");

/***/ },

/***/ "./src/fish-taco.png"
/*!***************************!*\
  !*** ./src/fish-taco.png ***!
  \***************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"88e00c661668e28aa77c.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/fish-taco.png?\n}");

/***/ },

/***/ "./src/taco.png"
/*!**********************!*\
  !*** ./src/taco.png ***!
  \**********************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9999d8da0c6c9bf46a05.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/taco.png?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n  \nconst contactInfo = document.getElementById(\"content\");\n\ncontactInfo.innerHTML = \"\";\n\nconst header = document.createElement(\"h1\");\n\nheader.textContent = \"Contact Us\";\n\ncontactInfo.appendChild(header);\n\nconst phone = document.createElement(\"h2\");\n\nphone.textContent = \"Phone\";\n\ncontactInfo.appendChild(phone);\n\nconst phonePara = document.createElement(\"p\");\n\nphonePara.textContent = \"0131 1234 9876\";\n\ncontactInfo.appendChild(phonePara);\n\nconst address = document.createElement(\"h2\");\naddress.textContent = \"Address\";\n\ncontactInfo.appendChild(address);\n\nconst addressPara = document.createElement(\"p\");\n\naddressPara.textContent = \"3 George Street\\nEdinburgh\\nEH32YX\";\naddressPara.style.whiteSpace = \"pre-line\";\n\ncontactInfo.appendChild(addressPara);\n\nconst email = document.createElement(\"h2\");\n\nemail.textContent = \"Email\";\n\ncontactInfo.appendChild(email);\n\nconst emailPara = document.createElement(\"p\");\n\nemailPara.textContent = \"juanfrancos@hotmail.co.uk\";\n\ncontactInfo.appendChild(emailPara);\n\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst contactButton = document.querySelector(\".contact\");\n\ncontactButton.addEventListener(\"click\", () => {\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});\n\nconst homeButton = document.querySelector(\".home\");\n\nhomeButton.addEventListener(\"click\", () => {\n    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\nconst menuButton = document.querySelector(\".menu\");\n\nmenuButton.addEventListener(\"click\", () => {\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _chicken_taco_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chicken-taco.png */ \"./src/chicken-taco.png\");\n/* harmony import */ var _beef_taco_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./beef-taco.png */ \"./src/beef-taco.png\");\n/* harmony import */ var _fish_taco_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fish-taco.png */ \"./src/fish-taco.png\");\n  \n\n\nfunction menu() {\n    \n    const menu = document.getElementById(\"content\");\n\n    menu.innerHTML = \"\";\n\n    const header = document.createElement(\"h1\");\n\n    header.textContent = \"Menu\";\n\n    menu.appendChild(header);\n\n    const menuItems = document.createElement(\"div\");\n\n    menuItems.classList.add(\"menuItems\");\n\n    \n    const chickenTaco = document.createElement(\"div\");\n    chickenTaco.classList.add(\"chicken-taco\");\n\n    const chickenImg = document.createElement(\"img\");\n    chickenImg.classList.add(\"menu-img\");\n    chickenImg.src =  _chicken_taco_png__WEBPACK_IMPORTED_MODULE_0__;\n    chickenImg.alt = \"Chicken Taco\";\n    chickenImg.classList.add(\"menuItem\");\n\n\n    const chickenTacoHed = document.createElement(\"h2\");\n    chickenTacoHed.textContent = (\"Chicken Taco\");\n\n    const chickenTacoPrice = document.createElement(\"p\");\n    chickenTacoPrice.textContent = \"£5.00\";\n\n    chickenTaco.append(chickenImg, chickenTacoHed, chickenTacoPrice);\n\n    menuItems.appendChild(chickenTaco);\n\n\n     const beefTaco = document.createElement(\"div\");\n     beefTaco.classList.add(\"beef-taco\");\n\n    const beefImg = document.createElement(\"img\");\n    beefImg.classList.add(\"menu-img\");\n    beefImg.src =  _beef_taco_png__WEBPACK_IMPORTED_MODULE_1__;\n    beefImg.alt = \"Beef Taco\";\n    beefImg.classList.add(\"menuItem\");\n\n\n    const beefTacoHed = document.createElement(\"h2\");\n    beefTacoHed.textContent = (\"Beef Taco\");\n\n    const beefTacoPrice = document.createElement(\"p\");\n    beefTacoPrice.textContent = \"£5.00\";\n\n    beefTaco.append(beefImg, beefTacoHed, beefTacoPrice);\n\n    menuItems.appendChild(beefTaco);\n\n\n    const fishTaco = document.createElement(\"div\");\n     fishTaco.classList.add(\"fish-taco\");\n\n    const fishImg = document.createElement(\"img\");\n    fishImg.classList.add(\"menu-img\");\n    fishImg.src =  _fish_taco_png__WEBPACK_IMPORTED_MODULE_2__;\n    fishImg.alt = \"Fish Taco\";\n    fishImg.classList.add(\"menuItem\");\n\n\n    const fishTacoHed = document.createElement(\"h2\");\n    fishTacoHed.textContent = (\"Fish Taco\");\n\n    const fishTacoPrice = document.createElement(\"p\");\n    fishTacoPrice.textContent = \"£5.00\";\n\n    fishTaco.append(fishImg, fishTacoHed, fishTacoPrice);\n\n    menuItems.appendChild(fishTaco);\n\n\n    \n    const veganTaco = document.createElement(\"div\");\n     veganTaco.classList.add(\"fish-taco\");\n\n    const veganImg = document.createElement(\"img\");\n    veganImg.classList.add(\"menu-img\");\n    veganImg.src =  _fish_taco_png__WEBPACK_IMPORTED_MODULE_2__;\n    veganImg.alt = \"Fish Taco\";\n    veganImg.classList.add(\"menuItem\");\n\n\n    const veganTacoHed = document.createElement(\"h2\");\n    veganTacoHed.textContent = (\"Vegan Taco\");\n\n    const veganTacoPrice = document.createElement(\"p\");\n    veganTacoPrice.textContent = \"£5.00\";\n\n    veganTaco.append(veganImg, veganTacoHed, veganTacoPrice);\n\n    menuItems.appendChild(veganTaco);\n\n    menu.appendChild(menuItems);\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ },

/***/ "./src/page-load.js"
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomeContent)\n/* harmony export */ });\n/* harmony import */ var _taco_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taco.png */ \"./src/taco.png\");\n\n\nconst nav = document.querySelector(\"nav\");\n\n\nconst restaurantName = document.createElement(\"h1\");\n\nrestaurantName.textContent = \"Juanfranco's Taqueria\";\n\nnav.prepend(restaurantName);\n\n\nfunction loadHomeContent() {\n\n\nconst content = document.getElementById(\"content\");\n\ncontent.innerHTML = \"\";\n\n\nconst para1 = document.createElement(\"p\");\n\npara1.textContent = \"We serve the best darn tacos around. They rule!\";\n\ncontent.appendChild(para1);\n\nconst tacoImage = document.createElement(\"img\");\ncontent.appendChild(tacoImage);\n\ntacoImage.classList.add(\"tacoImage\");\n\ntacoImage.src = _taco_png__WEBPACK_IMPORTED_MODULE_0__;\ntacoImage.alt = \"A plate of tacos\";\n\ntacoImage.width = 400;\ntacoImage.height = 300;\n\n\n}\n\nconst footer = document.createElement(\"footer\");\ndocument.body.appendChild(footer);\n\nfooter.textContent = \"© Juanfrancos Taqueria\"\n\n\n\n\n\n  \n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;