/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/bubbles.js":
/*!********************************!*\
  !*** ./src/scripts/bubbles.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/*For this animation to function all you need do is add a div onto the dom with the id 'bubbles */
var runCascadingBubbles = function runCascadingBubbles() {
  var createKeyframes = function createKeyframes() {
    //inserts keyframes and positions the bubble div on the DOM.
    var css = document.styleSheets[0];
    console.log(document.styleSheets);
    css.insertRule("\n    @keyframes bubble-up {\n        from {\n            transform: translateY(0%);\n        }\n    \n        to {\n            transform: translateY(-1500%);\n            opacity: 0;\n        }\n    }", css.cssRules.length);
    css.insertRule("\n    ._cascading-bubbles {\n        position: fixed;\n        bottom: 0px;\n        left: 0;\n        height: 120vh;\n        z-index:-100;\n    }", css.cssRules.length);
  };

  var createBaseDiv = function createBaseDiv() {
    var baseDivForBubbles = document.createElement('div');
    baseDivForBubbles.classList.add('_cascading-bubbles');
    return document.querySelector('body').appendChild(baseDivForBubbles);
  };

  var cascadingBubbles = function cascadingBubbles() {
    //targets dom element creates bubble then appends it.
    var bubble = document.createElement('div'); //determines the size of the bubble and its animation duration.

    var bubbleSize = Math.round(Math.random() * 100);
    var duration = Math.round(Math.random() * 20) + 5;
    var position = Math.floor(Math.random() * 85) + 5; //styles of the bubbles
    //bubble.id = `${Math.round(bubbleSize + position)}POPPING!`

    bubble.style.zIndex = "-99";
    bubble.style.animation = "bubble-up ".concat(duration, "s ease-out");
    bubble.style.position = "fixed";
    bubble.style.left = "".concat(position, "%");
    bubble.style.height = "".concat(bubbleSize, "px");
    bubble.style.width = "".concat(bubbleSize, "px");
    bubble.style.background = "rgba(255, 255, 255, 0.2)";
    bubble.style.border = "1px solid white";
    bubble.style.borderRadius = "50%";
    bubble.style.bottom = "-200px";
    document.querySelector('._cascading-bubbles').appendChild(bubble);

    var removeBubble = function removeBubble() {
      bubble.parentNode.removeChild(bubble);
    };

    setTimeout(cascadingBubbles, 500);
    setTimeout(removeBubble, duration * 1000);
  };

  createKeyframes();
  createBaseDiv();
  cascadingBubbles();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (runCascadingBubbles);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/about_me.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/about_me.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}\n\nsection#about-me {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  margin: 10vh auto 20vh auto;\n}\nsection#about-me header {\n  padding: 3%;\n}\nsection#about-me header h1 {\n  font-size: 2.5rem;\n  border-bottom: black 2px dotted;\n}\nsection#about-me header h3 {\n  font-size: 1.4rem;\n}\nsection#about-me div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: row;\n  width: 85vw;\n  padding: 5vh 1vw;\n}\nsection#about-me div figure {\n  padding: 10px;\n}\nsection#about-me div figure img {\n  border-radius: 50%;\n  width: 25vw;\n  padding: 10px;\n}\nsection#about-me div div#about-me-details {\n  padding: 2%;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n}\nsection#about-me div div#about-me-details h2 {\n  margin-bottom: 2vh;\n  font-size: 2rem;\n}\nsection#about-me div div#about-me-details p {\n  font-size: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  section#about-me {\n    flex-direction: column;\n  }\n  section#about-me div#about-me-cont {\n    flex-direction: column;\n  }\n  section#about-me div#about-me-cont figure img {\n    border-radius: 50%;\n    width: 90vw;\n    padding: 10px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss","webpack://./src/sass/about_me.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n","@use \"styles\";\r\n\r\nsection#about-me {\r\n  @include styles.flexit;\r\n  flex-direction: column;\r\n  margin: 10vh auto 20vh auto;\r\n\r\n  header {\r\n    padding: 3%;\r\n\r\n    h1 {\r\n      font-size: styles.$heading-font-size;\r\n      border-bottom: black 2px dotted;\r\n    }\r\n\r\n    h3 {\r\n      font-size: 1.4rem;\r\n    }\r\n  }\r\n\r\n  div {\r\n    @include styles.flexit;\r\n    flex-direction: row;\r\n    width: 85vw;\r\n    padding: 5vh 1vw;\r\n\r\n    figure {\r\n      padding: 10px;\r\n\r\n      img {\r\n        border-radius: 50%;\r\n        width: 25vw;\r\n        padding: 10px;\r\n      }\r\n    }\r\n\r\n    div#about-me-details {\r\n      padding: 2%;\r\n      border-radius: 5px;\r\n      @include styles.flexit;\r\n      flex-direction: column;\r\n\r\n      h2 {\r\n        margin-bottom: 2vh;\r\n        font-size: 2rem;\r\n      }\r\n\r\n      p {\r\n        font-size: 1.5rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  section#about-me {\r\n    flex-direction: column;\r\n\r\n    div#about-me-cont {\r\n      flex-direction: column;\r\n\r\n      figure img {\r\n        border-radius: 50%;\r\n        width: 90vw;\r\n        padding: 10px;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/contact_me.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/contact_me.scss ***!
  \***************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}\n\nsection#contact-me {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  margin: 25vh 0;\n  height: 50vh;\n}\nsection#contact-me form {\n  margin-top: 3vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: row;\n}\nsection#contact-me form input,\nsection#contact-me form textarea {\n  color: #333;\n  border: none;\n  border-radius: 5px;\n  padding: 2%;\n  width: 25vw;\n  margin: 2vh 5px;\n  margin-bottom: auto;\n}\nsection#contact-me form #inputs {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n}\nsection#contact-me form #textarea-submit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-between;\n}\nsection#contact-me form #textarea-submit textarea {\n  height: 10vh;\n}\nsection#contact-me form #textarea-submit input#submit-btn {\n  font-size: 1.5rem;\n  padding: 0;\n}\n\n@media (max-width: 768px) {\n  section#contact-me form {\n    flex-direction: column;\n  }\n  section#contact-me form input,\nsection#contact-me form textarea,\nsection#contact-me form input#submit-btn {\n    width: 80vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss","webpack://./src/sass/contact_me.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n","@use 'styles';\r\n\r\nsection#contact-me {\r\n    @include styles.flexit;\r\n    flex-direction: column;\r\n    margin: 25vh 0;\r\n    height: 50vh;\r\n\r\n    form {\r\n        margin-top: 3vh;\r\n        @include styles.flexit;\r\n        flex-direction: row;\r\n\r\n\r\n        input,\r\n        textarea {\r\n            color: #333;\r\n            border: none;\r\n            border-radius: 5px;\r\n            padding: 2%;\r\n            width: styles.$contact-me-desktop;\r\n            margin: 2vh 5px;\r\n            margin-bottom: auto;\r\n        }\r\n\r\n        #inputs {\r\n            @include styles.flexit;\r\n            flex-direction: column;\r\n        }\r\n\r\n        #textarea-submit {\r\n            @include styles.flexit;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n\r\n            textarea {\r\n                height: 10vh;\r\n            }\r\n\r\n            input#submit-btn {\r\n                font-size: 1.5rem;\r\n                padding: 0;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    section#contact-me {\r\n        form {\r\n            flex-direction: column;\r\n\r\n            input,\r\n            textarea,\r\n            input#submit-btn {\r\n                width: styles.$contact-me-mobile;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/module.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/module.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}\n\n.module {\n  left: 0;\n  position: fixed;\n  bottom: -100%;\n  height: 100vh;\n  width: 100vw;\n  transition: all 1s;\n  z-index: -10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.module .modules {\n  background: rgba(0, 0, 0, 0.75);\n  border: 2px solid seashell;\n  height: 40vh;\n  width: 40vh;\n  margin: auto;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.module p {\n  margin: 3%;\n  padding: 3%;\n  color: seashell;\n  font-weight: 500;\n  text-align: center;\n}\n\n.module.vis {\n  position: fixed;\n  bottom: 0%;\n  transition: all 1s ease;\n  z-index: 10;\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss","webpack://./src/sass/module.scss"],"names":[],"mappings":"AAiDA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,gDAAA;EACA,kBAAA;AChDF;;ADmDA;EACE,uBAAA;AChDF;;ADmDA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAvBW;EAwBX,kBAAA;AChDF;;ADmDA;EA9DE,8BAAA;EAIA,eAAA;EA4DA,uBAAA;AC/CF;ADhBE;EACE,+BAAA;ACkBJ;ADfE;EACE,cAAA;EACA,gBAAA;ACiBJ;ADfE;EACE,aAAA;ACiBJ;;ADwCA;EApDE,+BAAA;EAIA,gBAAA;EACA,+EAAA;EAiDA,uBAAA;ACnCF;ADlBE;EACE,kCAAA;ACoBJ;ADfE;EACE,aAAA;ACiBJ;ADfE;EACE,cAAA;EACA,WAAA;ACiBJ;;AD4BA;EA/EE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EA8EA,WAAA;EACA,wEAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBA/CW;EAgDX,YAAA;ACtBF;ADwBE;EACE,iBAAA;EACA,WAAA;ACtBJ;;AD0BA;EACE,eAAA;EACA,gBAAA;ACvBF;;AD0BA;EACE,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;ACvBF;;AD0BA;EACE,WAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;ACvBF;;AD2BA;EACE,cAAA;EACA,eAAA;EACA,6BAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;ACxBF;;AD0BA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;ACvBF;;ADyBA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;ACtBF;;AD0BA;EA1IE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAyIA,eAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qCAAA;EACA,YAAA;ACpBF;ADsBE;EACE,gBAAA;EACA,UAAA;ACpBJ;ADsBI;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;ACpBN;;ADyBA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,qCAAA;EACA,0BAAA;EACA,kBAAA;EACA,WAAA;ACtBF;;ADyBA;EACE,+EAAA;ACtBF;;AD0BA;EACE,gBAAA;ACvBF;;ADyBA;EACE,gBAAA;ACtBF;;ADwBA;EACE,aAAA;ACrBF;;ADuBA;EACE,gBAAA;ACpBF;;ADsBA;EACE,gBAAA;ACnBF;;ADqBA;EACE,oBAAA;AClBF;;ADoBA;EACE,gBAAA;ACjBF;;ADmBA;EACE,YAAA;AChBF;;AAzLA;EACE,OAAA;EACA,eAAA;EACA,aAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA4LF;AA1LE;EACE,+BAAA;EACA,0BAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AA4LJ;AAzLE;EACE,UAAA;EACA,WAAA;EACA,eDcS;ECbT,gBAAA;EACA,kBAAA;AA2LJ;;AAvLA;EACE,eAAA;EACA,UAAA;EACA,uBAAA;EACA,WAAA;AA0LF","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n","@use 'styles';\r\n\r\n.module {\r\n  left: 0;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  transition: all 1s;\r\n  z-index: -10;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  .modules {\r\n    background: rgba($color: black, $alpha: 0.75);\r\n    border: 2px solid styles.$font-color;\r\n    height: 40vh;\r\n    width: 40vh;\r\n    margin: auto;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  p {\r\n    margin: 3%;\r\n    padding: 3%;\r\n    color: styles.$font-color;\r\n    font-weight: 500;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.module.vis {\r\n  position: fixed;\r\n  bottom: 0%;\r\n  transition: all 1s ease;\r\n  z-index: 10;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/my_tech_stack.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/my_tech_stack.scss ***!
  \******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}\n\nsection#my-tech-stack {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  width: 85vw;\n  margin: 10vh auto;\n}\nsection#my-tech-stack h2 {\n  font-size: 2.5rem;\n}\nsection#my-tech-stack figure {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-wrap: wrap;\n  width: 35vw;\n  border-radius: 5px;\n  margin: 3vh 0;\n}\nsection#my-tech-stack figure i {\n  width: 5rem;\n  height: 5rem;\n  font-size: 5rem;\n  padding: 1%;\n  margin: 2%;\n}\n\n@media (max-width: 768px) {\n  section#my-tech-stack h2 {\n    margin: 3vh 0;\n  }\n  section#my-tech-stack figure {\n    width: 70vw;\n    flex-direction: row;\n    margin: 1%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss","webpack://./src/sass/my_tech_stack.scss"],"names":[],"mappings":"AAiDA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,gDAAA;EACA,kBAAA;AChDF;;ADmDA;EACE,uBAAA;AChDF;;ADmDA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAvBW;EAwBX,kBAAA;AChDF;;ADmDA;EA9DE,8BAAA;EAIA,eAAA;EA4DA,uBAAA;AC/CF;ADhBE;EACE,+BAAA;ACkBJ;ADfE;EACE,cAAA;EACA,gBAAA;ACiBJ;ADfE;EACE,aAAA;ACiBJ;;ADwCA;EApDE,+BAAA;EAIA,gBAAA;EACA,+EAAA;EAiDA,uBAAA;ACnCF;ADlBE;EACE,kCAAA;ACoBJ;ADfE;EACE,aAAA;ACiBJ;ADfE;EACE,cAAA;EACA,WAAA;ACiBJ;;AD4BA;EA/EE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EA8EA,WAAA;EACA,wEAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBA/CW;EAgDX,YAAA;ACtBF;ADwBE;EACE,iBAAA;EACA,WAAA;ACtBJ;;AD0BA;EACE,eAAA;EACA,gBAAA;ACvBF;;AD0BA;EACE,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;ACvBF;;AD0BA;EACE,WAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;ACvBF;;AD2BA;EACE,cAAA;EACA,eAAA;EACA,6BAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;ACxBF;;AD0BA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;ACvBF;;ADyBA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;ACtBF;;AD0BA;EA1IE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAyIA,eAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qCAAA;EACA,YAAA;ACpBF;ADsBE;EACE,gBAAA;EACA,UAAA;ACpBJ;ADsBI;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;ACpBN;;ADyBA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,qCAAA;EACA,0BAAA;EACA,kBAAA;EACA,WAAA;ACtBF;;ADyBA;EACE,+EAAA;ACtBF;;AD0BA;EACE,gBAAA;ACvBF;;ADyBA;EACE,gBAAA;ACtBF;;ADwBA;EACE,aAAA;ACrBF;;ADuBA;EACE,gBAAA;ACpBF;;ADsBA;EACE,gBAAA;ACnBF;;ADqBA;EACE,oBAAA;AClBF;;ADoBA;EACE,gBAAA;ACjBF;;ADmBA;EACE,YAAA;AChBF;;AAzLA;EDDE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ECAA,sBAAA;EACA,WAAA;EACA,iBAAA;AA+LF;AA7LE;EACE,iBDoCgB;AC2JpB;AA5LE;EDXA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ECUE,eAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;AAiMJ;AA/LI;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,UAAA;AAiMN;;AA5LA;EAEI;IACE,aAAA;EA8LJ;EA3LE;IACE,WAAA;IACA,mBAAA;IACA,UAAA;EA6LJ;AACF","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n","@use \"styles\";\r\n\r\nsection#my-tech-stack {\r\n  @include styles.flexit;\r\n  flex-direction: column;\r\n  width: 85vw;\r\n  margin: 10vh auto;\r\n\r\n  h2 {\r\n    font-size: styles.$heading-font-size;\r\n  }\r\n\r\n  figure {\r\n    @include styles.flexit;\r\n    flex-wrap: wrap;\r\n    width: 35vw;\r\n    border-radius: 5px;\r\n    margin: 3vh 0;\r\n\r\n    i {\r\n      width: 5rem;\r\n      height: 5rem;\r\n      font-size: 5rem;\r\n      padding: 1%;\r\n      margin: 2%;\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  section#my-tech-stack {\r\n    h2 {\r\n      margin: 3vh 0;\r\n    }\r\n\r\n    figure {\r\n      width: 70vw;\r\n      flex-direction: row;\r\n      margin: 1%;\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/navbar.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/navbar.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}\n\nnav {\n  width: 100vw;\n  height: 7vh;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\nnav #navbar-items {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  list-style: none;\n  width: 100%;\n}\nnav #navbar-items #hamburger {\n  display: none;\n}\nnav #navbar-items li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 5px;\n  color: seashell;\n}\nnav #navbar-items li a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-align: center;\n  color: seashell;\n  text-decoration: none;\n}\n@media (max-width: 768px) {\n  nav {\n    height: auto;\n    left: 0;\n  }\n  nav #navbar-items {\n    flex-direction: column;\n  }\n  nav #navbar-items li {\n    opacity: 0;\n    transform: scale(0);\n    transition: all 0.4s ease;\n  }\n  nav #navbar-items #hamburger {\n    display: block;\n    opacity: 1;\n    transform: scale(1);\n    transition: all 0.4s ease;\n  }\n  nav #navbar-items li.vis {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 0.4s ease;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss","webpack://./src/sass/navbar.scss"],"names":[],"mappings":"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","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n","@use \"styles\";\r\n\r\nnav {\r\n  width: 100vw;\r\n  height: 7vh;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 10;\r\n\r\n  #navbar-items {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: flex-end;\r\n    list-style: none;\r\n    width: 100%;\r\n\r\n    #hamburger {\r\n      display: none;\r\n    }\r\n\r\n    li {\r\n      @include styles.flexit;\r\n      padding: 5px;\r\n      color: styles.$font-color;\r\n\r\n      a {\r\n        @include styles.flexit;\r\n        text-align: center;\r\n        color: styles.$font-color;\r\n        text-decoration: none;\r\n      }\r\n    }\r\n    #theme-nav {\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  nav {\r\n    height: auto;\r\n    left: 0;\r\n\r\n    #navbar-items {\r\n      flex-direction: column;\r\n      li {\r\n        opacity: 0;\r\n        transform: scale(0);\r\n        transition: all 0.4s ease;\r\n      }\r\n      #hamburger {\r\n        display: block;\r\n        opacity: 1;\r\n        transform: scale(1);\r\n        transition: all 0.4s ease;\r\n      }\r\n      li.vis {\r\n        opacity: 1;\r\n        transform: scale(1);\r\n        transition: all 0.4s ease;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/project_showcase.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/project_showcase.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}\n\nsection#project-showcase {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  width: 85vw;\n  flex-direction: column;\n  margin: auto;\n}\nsection#project-showcase h2 {\n  font-size: 2.5rem;\n  margin: 3vh 0;\n}\nsection#project-showcase div.projects {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  flex-direction: row;\n}\nsection#project-showcase div.projects figure.project-image {\n  width: 50vw;\n  background: transparent;\n  padding: 1vh 1vw;\n  margin: 2%;\n}\nsection#project-showcase div.projects figure.project-image a {\n  z-index: 100;\n  color: seashell;\n}\nsection#project-showcase div.projects figure.project-image img {\n  width: 100%;\n  max-width: inherit;\n  max-height: 45vw;\n  margin-bottom: 5%;\n  border: 2px solid black;\n}\nsection#project-showcase div.projects figure.project-image img:hover {\n  opacity: 0.8;\n  cursor: pointer;\n  transform: scale(1.03);\n  transition: all 1s ease;\n}\nsection#project-showcase div.projects figure.project-image label {\n  font-size: 1.2rem;\n  font-weight: 400;\n}\nsection#project-showcase div.projects figure.project-image figure.techstack {\n  border-top: 2px black dotted;\n}\nsection#project-showcase div.projects figure.project-image figure.techstack i {\n  font-size: 2rem;\n  margin: 1%;\n}\nsection#project-showcase div.projects figure.project-image a i {\n  font-size: 3rem;\n  margin: 3% 0 0 0;\n}\nsection#project-showcase div.projects figure.project-image a i:hover {\n  transform: translateY(-1vh);\n  color: cyan;\n  transition: all 1s ease;\n}\nsection#project-showcase div.projects div.project-purpose {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 2%;\n  border-radius: 5px;\n  margin: 2%;\n  min-height: 50vh;\n}\nsection#project-showcase div.projects div.project-purpose h3 {\n  font-size: 1.5rem;\n  margin-bottom: 2vh;\n  border-bottom: 1px dotted seashell;\n}\nsection#project-showcase div.projects div.project-purpose ul li {\n  list-style: none;\n  margin: 1vh 0;\n  padding: 1rem;\n}\nsection#project-showcase div.projects div.project-purpose ul li p {\n  text-align: left;\n  font-size: 1rem;\n  max-width: 50vw;\n  line-height: 1.5rem;\n}\nsection#project-showcase div.projects div.project-purpose ul li p span {\n  font-weight: 800;\n}\n\n@media (max-width: 768px) {\n  section#project-showcase {\n    flex-direction: column;\n  }\n  section#project-showcase div.projects {\n    flex-direction: column;\n    width: 95vw;\n  }\n  section#project-showcase div.projects figure.project-image {\n    width: 80vw;\n    flex-direction: column;\n  }\n  section#project-showcase div.projects div.project-purpose {\n    height: auto;\n  }\n  section#project-showcase div.projects div.project-purpose ul li {\n    padding: 1rem 0;\n  }\n  section#project-showcase div.projects div.project-purpose ul li P {\n    max-width: 75vw;\n  }\n\n  input {\n    width: 95vw;\n  }\n  input div#text-areasubmit textarea,\ninput div#text-areasubmit input {\n    width: 80vw;\n  }\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss","webpack://./src/sass/project_showcase.scss"],"names":[],"mappings":"AAiDA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,gDAAA;EACA,kBAAA;AChDF;;ADmDA;EACE,uBAAA;AChDF;;ADmDA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAvBW;EAwBX,kBAAA;AChDF;;ADmDA;EA9DE,8BAAA;EAIA,eAAA;EA4DA,uBAAA;AC/CF;ADhBE;EACE,+BAAA;ACkBJ;ADfE;EACE,cAAA;EACA,gBAAA;ACiBJ;ADfE;EACE,aAAA;ACiBJ;;ADwCA;EApDE,+BAAA;EAIA,gBAAA;EACA,+EAAA;EAiDA,uBAAA;ACnCF;ADlBE;EACE,kCAAA;ACoBJ;ADfE;EACE,aAAA;ACiBJ;ADfE;EACE,cAAA;EACA,WAAA;ACiBJ;;AD4BA;EA/EE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EA8EA,WAAA;EACA,wEAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBA/CW;EAgDX,YAAA;ACtBF;ADwBE;EACE,iBAAA;EACA,WAAA;ACtBJ;;AD0BA;EACE,eAAA;EACA,gBAAA;ACvBF;;AD0BA;EACE,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;ACvBF;;AD0BA;EACE,WAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;ACvBF;;AD2BA;EACE,cAAA;EACA,eAAA;EACA,6BAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;ACxBF;;AD0BA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;ACvBF;;ADyBA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;ACtBF;;AD0BA;EA1IE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAyIA,eAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qCAAA;EACA,YAAA;ACpBF;ADsBE;EACE,gBAAA;EACA,UAAA;ACpBJ;ADsBI;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;ACpBN;;ADyBA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,qCAAA;EACA,0BAAA;EACA,kBAAA;EACA,WAAA;ACtBF;;ADyBA;EACE,+EAAA;ACtBF;;AD0BA;EACE,gBAAA;ACvBF;;ADyBA;EACE,gBAAA;ACtBF;;ADwBA;EACE,aAAA;ACrBF;;ADuBA;EACE,gBAAA;ACpBF;;ADsBA;EACE,gBAAA;ACnBF;;ADqBA;EACE,oBAAA;AClBF;;ADoBA;EACE,gBAAA;ACjBF;;ADmBA;EACE,YAAA;AChBF;;AAzLA;EDDE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ECAA,WAAA;EACA,sBAAA;EACA,YAAA;AA+LF;AA7LE;EACE,iBDoCgB;ECnChB,aAAA;AA+LJ;AA5LE;EDZA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;ECWE,mBAAA;AAiMJ;AA/LI;EACE,WAAA;EACA,uBAAA;EACA,gBAAA;EACA,UAAA;AAiMN;AA/LM;EACE,YAAA;EACA,eDkBK;AC+Kb;AA9LM;EACE,WAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,uBAAA;AAgMR;AA7LM;EACE,YAAA;EACA,eAAA;EACA,sBAAA;EACA,uBAAA;AA+LR;AA5LM;EACE,iBAAA;EACA,gBAAA;AA8LR;AA3LM;EACE,4BAAA;AA6LR;AA3LQ;EACE,eAAA;EACA,UAAA;AA6LV;AAzLM;EACE,eAAA;EACA,gBAAA;AA2LR;AAxLM;EACE,2BAAA;EACA,WAAA;EACA,uBAAA;AA0LR;AAtLI;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;AAwLN;AAtLM;EACE,iBAAA;EACA,kBAAA;EACA,kCAAA;AAwLR;AArLM;EACE,gBAAA;EACA,aAAA;EACA,aAAA;AAuLR;AAtLQ;EAIE,gBAAA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;AAqLV;AA3LU;EACE,gBAAA;AA6LZ;;AAjLA;EACE;IACE,sBAAA;EAoLF;EAlLE;IACE,sBAAA;IACA,WAAA;EAoLJ;EAlLI;IACE,WAAA;IACA,sBAAA;EAoLN;EAjLI;IACE,YAAA;EAmLN;EAjLM;IACE,eAAA;EAmLR;EAlLQ;IACE,eAAA;EAoLV;;EA7KA;IACE,WAAA;EAgLF;EA7KI;;IAEE,WAAA;EA+KN;AACF","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n","@use \"styles\";\r\n\r\nsection#project-showcase {\r\n  @include styles.flexit;\r\n  width: 85vw;\r\n  flex-direction: column;\r\n  margin: auto;\r\n\r\n  h2 {\r\n    font-size: styles.$heading-font-size;\r\n    margin: 3vh 0;\r\n  }\r\n\r\n  div.projects {\r\n    @include styles.flexit;\r\n    flex-direction: row;\r\n\r\n    figure.project-image {\r\n      width: 50vw;\r\n      background: transparent;\r\n      padding: 1vh 1vw;\r\n      margin: 2%;\r\n\r\n      a {\r\n        z-index: 100;\r\n        color: styles.$font-color;\r\n      }\r\n\r\n      img {\r\n        width: 100%;\r\n        max-width: inherit;\r\n        max-height: 45vw;\r\n        margin-bottom: 5%;\r\n        border: 2px solid black;\r\n      }\r\n\r\n      img:hover {\r\n        opacity: 0.8;\r\n        cursor: pointer;\r\n        transform: scale(1.03);\r\n        transition: all 1s ease;\r\n      }\r\n\r\n      label {\r\n        font-size: 1.2rem;\r\n        font-weight: 400;\r\n      }\r\n\r\n      figure.techstack {\r\n        border-top: 2px black dotted;\r\n\r\n        i {\r\n          font-size: 2rem;\r\n          margin: 1%;\r\n        }\r\n      }\r\n\r\n      a i {\r\n        font-size: 3rem;\r\n        margin: 3% 0 0 0;\r\n      }\r\n\r\n      a i:hover {\r\n        transform: translateY(-1vh);\r\n        color: cyan;\r\n        transition: all 1s ease;\r\n      }\r\n    }\r\n\r\n    div.project-purpose {\r\n      display: flex;\r\n      flex-direction: column;\r\n      justify-content: center;\r\n      align-items: center;\r\n      text-align: center;\r\n      padding: 2%;\r\n      border-radius: 5px;\r\n      margin: 2%;\r\n      min-height: 50vh;\r\n\r\n      h3 {\r\n        font-size: 1.5rem;\r\n        margin-bottom: 2vh;\r\n        border-bottom: 1px dotted styles.$font-color;\r\n      }\r\n\r\n      ul li {\r\n        list-style: none;\r\n        margin: 1vh 0;\r\n        padding: 1rem;\r\n        p {\r\n          span {\r\n            font-weight: 800;\r\n          }\r\n          text-align: left;\r\n          font-size: 1rem;\r\n          max-width: 50vw;\r\n          line-height: 1.5rem;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  section#project-showcase {\r\n    flex-direction: column;\r\n\r\n    div.projects {\r\n      flex-direction: column;\r\n      width: 95vw;\r\n\r\n      figure.project-image {\r\n        width: 80vw;\r\n        flex-direction: column;\r\n      }\r\n\r\n      div.project-purpose {\r\n        height: auto;\r\n\r\n        ul li {\r\n          padding: 1rem 0;\r\n          P {\r\n            max-width: 75vw;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  input {\r\n    width: 95vw;\r\n\r\n    div#text-areasubmit {\r\n      textarea,\r\n      input {\r\n        width: 80vw;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! .././img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! .././img/darkBackground.jpg */ "./src/img/darkBackground.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  border-radius: 5px;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  color: seashell;\n  overflow-x: hidden;\n}\n\n.lite {\n  background: rgba(0, 0, 0, 0.3);\n  color: seashell;\n  transition: all 1s ease;\n}\n.lite .text-box {\n  background: rgba(0, 0, 0, 0.35);\n}\n.lite .fa-sun {\n  display: block;\n  color: goldenrod;\n}\n.lite .fa-moon {\n  display: none;\n}\n\n.dark {\n  background: rgba(0, 0, 0, 0.75);\n  color: goldenrod;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  transition: all 1s ease;\n}\n.dark .text-box {\n  background: rgba(35, 42, 78, 0.35);\n}\n.dark .fa-sun {\n  display: none;\n}\n.dark .fa-moon {\n  display: block;\n  color: cyan;\n}\n\n.btn {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #333;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  border-radius: 5px;\n  height: 2.5rem;\n  width: 7rem;\n  padding: 2px;\n  font-weight: 500;\n  font-size: 1.2rem;\n  background: seashell;\n  border: none;\n}\n.btn i {\n  font-size: 1.5rem;\n  margin: 2px;\n}\n\n.btn.dark {\n  color: seashell;\n  background: #333;\n}\n\n.btn.lite:hover {\n  color: #333;\n  background: cyan;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.btn.dark:hover {\n  color: cyan;\n  background: goldenrod;\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n#background {\n  z-index: -1000;\n  position: fixed;\n  background-position-x: center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n}\n\n#background.lite {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#background.dark {\n  background: no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position-x: center;\n  background-size: cover;\n}\n\n#menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  position: fixed;\n  bottom: -100%;\n  margin: 0 auto;\n  height: 50vh;\n  width: 50vh;\n  transition: all 1s;\n  border-radius: 50%;\n  background: rgba(255, 245, 238, 0.35);\n  z-index: -10;\n}\n#menu ul {\n  list-style: none;\n  width: 85%;\n}\n#menu ul li {\n  text-align: left;\n  font-size: 1.1rem;\n  padding: 3px;\n}\n\n#menu.vis {\n  position: fixed;\n  margin: auto;\n  left: auto;\n  bottom: 25%;\n  height: 50vh;\n  width: 50vh;\n  background: rgba(255, 245, 238, 0.35);\n  border: 2px solid seashell;\n  transition: all 1s;\n  z-index: 10;\n}\n\n.techstack .fa-brands {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\ni.fa-react {\n  color: turquoise;\n}\n\ni.fa-bootstrap {\n  color: slateblue;\n}\n\ni.fa-html5 {\n  color: orange;\n}\n\ni.fa-css3-alt {\n  color: steelblue;\n}\n\ni.fa-js {\n  color: goldenrod;\n}\n\ni.fa-sass {\n  color: palevioletred;\n}\n\ni.fa-git-alt {\n  color: orangered;\n}\n\ni.fa-npm {\n  color: green;\n}", "",{"version":3,"sources":["webpack://./src/sass/styles.scss"],"names":[],"mappings":"AAiDA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;EACA,gDAAA;EACA,kBAAA;AAhDF;;AAmDA;EACE,uBAAA;AAhDF;;AAmDA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,eAvBW;EAwBX,kBAAA;AAhDF;;AAmDA;EA9DE,8BAAA;EAIA,eAAA;EA4DA,uBAAA;AA/CF;AAhBE;EACE,+BAAA;AAkBJ;AAfE;EACE,cAAA;EACA,gBAAA;AAiBJ;AAfE;EACE,aAAA;AAiBJ;;AAwCA;EApDE,+BAAA;EAIA,gBAAA;EACA,+EAAA;EAiDA,uBAAA;AAnCF;AAlBE;EACE,kCAAA;AAoBJ;AAfE;EACE,aAAA;AAiBJ;AAfE;EACE,cAAA;EACA,WAAA;AAiBJ;;AA4BA;EA/EE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EA8EA,WAAA;EACA,wEAAA;EACA,kBAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBA/CW;EAgDX,YAAA;AAtBF;AAwBE;EACE,iBAAA;EACA,WAAA;AAtBJ;;AA0BA;EACE,eAAA;EACA,gBAAA;AAvBF;;AA0BA;EACE,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,eAAA;AAvBF;;AA0BA;EACE,WAAA;EACA,qBAAA;EACA,yBAAA;EACA,eAAA;AAvBF;;AA2BA;EACE,cAAA;EACA,eAAA;EACA,6BAAA;EACA,sBAAA;EACA,aAAA;EACA,YAAA;AAxBF;;AA0BA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;AAvBF;;AAyBA;EACE,6DAAA;EACA,6BAAA;EACA,sBAAA;AAtBF;;AA0BA;EA1IE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EAyIA,eAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,qCAAA;EACA,YAAA;AApBF;AAsBE;EACE,gBAAA;EACA,UAAA;AApBJ;AAsBI;EACE,gBAAA;EACA,iBAAA;EACA,YAAA;AApBN;;AAyBA;EACE,eAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,qCAAA;EACA,0BAAA;EACA,kBAAA;EACA,WAAA;AAtBF;;AAyBA;EACE,+EAAA;AAtBF;;AA0BA;EACE,gBAAA;AAvBF;;AAyBA;EACE,gBAAA;AAtBF;;AAwBA;EACE,aAAA;AArBF;;AAuBA;EACE,gBAAA;AApBF;;AAsBA;EACE,gBAAA;AAnBF;;AAqBA;EACE,oBAAA;AAlBF;;AAoBA;EACE,gBAAA;AAjBF;;AAmBA;EACE,YAAA;AAhBF","sourcesContent":["@mixin flexit {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n@mixin lite-theme {\r\n  background: rgba(0, 0, 0, 0.3);\r\n  .text-box {\r\n    background: rgba(0, 0, 0, 0.35);\r\n  }\r\n  color: seashell;\r\n  .fa-sun {\r\n    display: block;\r\n    color: goldenrod;\r\n  }\r\n  .fa-moon {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@mixin dark-theme {\r\n  background: rgba(0, 0, 0, 0.75);\r\n  .text-box {\r\n    background: rgba(35, 42, 78, 0.35);\r\n  }\r\n  color: goldenrod;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n  .fa-sun {\r\n    display: none;\r\n  }\r\n  .fa-moon {\r\n    display: block;\r\n    color: cyan;\r\n  }\r\n}\r\n\r\n$box-color-lite: rgba(0, 0, 0, 0.3);\r\n$border-color-lite: rgba(0, 200, 250, 0.3);\r\n$box-color-dark: rgba(0, 0, 75, 0.9);\r\n$font-color-lite: #333;\r\n$font-color: seashell;\r\n\r\n$heading-font-size: 2.5rem;\r\n$contact-me-desktop: 25vw;\r\n$contact-me-mobile: 80vw;\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  border-radius: 5px;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  width: 100vw;\r\n  color: $font-color;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.lite {\r\n  @include lite-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.dark {\r\n  @include dark-theme();\r\n  transition: all 1s ease;\r\n}\r\n\r\n.btn {\r\n  @include flexit;\r\n  color: #333;\r\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\r\n  border-radius: 5px;\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  padding: 2px;\r\n  font-weight: 500;\r\n  font-size: 1.2rem;\r\n  background: $font-color;\r\n  border: none;\r\n\r\n  i {\r\n    font-size: 1.5rem;\r\n    margin: 2px;\r\n  }\r\n}\r\n\r\n.btn.dark {\r\n  color: seashell;\r\n  background: #333;\r\n}\r\n\r\n.btn.lite:hover {\r\n  color: #333;\r\n  background: cyan;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.btn.dark:hover {\r\n  color: cyan;\r\n  background: goldenrod;\r\n  transition: all 0.4s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n//Background\r\n#background {\r\n  z-index: -1000;\r\n  position: fixed;\r\n  background-position-x: center;\r\n  background-size: cover;\r\n  height: 100vh;\r\n  width: 100vw;\r\n}\r\n#background.lite {\r\n  background: no-repeat url(\".././img/oceanfloor.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n#background.dark {\r\n  background: no-repeat url(\".././img/darkBackground.jpg\");\r\n  background-position-x: center;\r\n  background-size: cover;\r\n}\r\n\r\n//Background Line layer 1\r\n#menu {\r\n  @include flexit;\r\n  position: fixed;\r\n  bottom: -100%;\r\n  margin: 0 auto;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  transition: all 1s;\r\n  border-radius: 50%;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  z-index: -10;\r\n\r\n  ul {\r\n    list-style: none;\r\n    width: 85%;\r\n\r\n    li {\r\n      text-align: left;\r\n      font-size: 1.1rem;\r\n      padding: 3px;\r\n    }\r\n  }\r\n}\r\n\r\n#menu.vis {\r\n  position: fixed;\r\n  margin: auto;\r\n  left: auto;\r\n  bottom: 25%;\r\n  height: 50vh;\r\n  width: 50vh;\r\n  background: rgba($color: $font-color, $alpha: 0.35);\r\n  border: 2px solid $font-color;\r\n  transition: all 1s;\r\n  z-index: 10;\r\n}\r\n\r\n.techstack .fa-brands {\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\r\n    1px 1px 0 #000;\r\n}\r\n\r\ni.fa-react {\r\n  color: turquoise;\r\n}\r\ni.fa-bootstrap {\r\n  color: slateblue;\r\n}\r\ni.fa-html5 {\r\n  color: orange;\r\n}\r\ni.fa-css3-alt {\r\n  color: steelblue;\r\n}\r\ni.fa-js {\r\n  color: goldenrod;\r\n}\r\ni.fa-sass {\r\n  color: palevioletred;\r\n}\r\ni.fa-git-alt {\r\n  color: orangered;\r\n}\r\ni.fa-npm {\r\n  color: green;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/about_me.scss":
/*!********************************!*\
  !*** ./src/sass/about_me.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_me_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./about_me.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/about_me.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/contact_me.scss":
/*!**********************************!*\
  !*** ./src/sass/contact_me.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_me_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./contact_me.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/contact_me.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_contact_me_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/module.scss":
/*!******************************!*\
  !*** ./src/sass/module.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/my_tech_stack.scss":
/*!*************************************!*\
  !*** ./src/sass/my_tech_stack.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_tech_stack_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./my_tech_stack.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/my_tech_stack.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_tech_stack_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_tech_stack_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_tech_stack_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_my_tech_stack_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/navbar.scss":
/*!******************************!*\
  !*** ./src/sass/navbar.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./navbar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/navbar.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_navbar_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/project_showcase.scss":
/*!****************************************!*\
  !*** ./src/sass/project_showcase.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_showcase_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./project_showcase.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/project_showcase.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_showcase_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_showcase_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_showcase_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_project_showcase_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/darkBackground.jpg":
/*!************************************!*\
  !*** ./src/img/darkBackground.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fe7ca68caed5dc2635a9.jpg";

/***/ }),

/***/ "./src/img/makesomeflashcards.jpg":
/*!****************************************!*\
  !*** ./src/img/makesomeflashcards.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "464e1d23ad0f6bfcc2bb.jpg";

/***/ }),

/***/ "./src/img/oceanfloor.jpg":
/*!********************************!*\
  !*** ./src/img/oceanfloor.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "86748ae7910f3c656f68.jpg";

/***/ }),

/***/ "./src/img/portrait.jpg":
/*!******************************!*\
  !*** ./src/img/portrait.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6237cb0def8cd4d6d3e.jpg";

/***/ }),

/***/ "./src/img/weather_project.jpg":
/*!*************************************!*\
  !*** ./src/img/weather_project.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f1db9f6c6fe20ddf0a37.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ "./src/sass/styles.scss");
/* harmony import */ var _sass_about_me_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/about_me.scss */ "./src/sass/about_me.scss");
/* harmony import */ var _sass_my_tech_stack_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sass/my_tech_stack.scss */ "./src/sass/my_tech_stack.scss");
/* harmony import */ var _sass_navbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/navbar.scss */ "./src/sass/navbar.scss");
/* harmony import */ var _sass_project_showcase_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/project_showcase.scss */ "./src/sass/project_showcase.scss");
/* harmony import */ var _sass_contact_me_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sass/contact_me.scss */ "./src/sass/contact_me.scss");
/* harmony import */ var _sass_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sass/module.scss */ "./src/sass/module.scss");
/* harmony import */ var _bubbles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bubbles */ "./src/scripts/bubbles.js");
/* harmony import */ var _img_oceanfloor_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/oceanfloor.jpg */ "./src/img/oceanfloor.jpg");
/* harmony import */ var _img_makesomeflashcards_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/makesomeflashcards.jpg */ "./src/img/makesomeflashcards.jpg");
/* harmony import */ var _img_portrait_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/portrait.jpg */ "./src/img/portrait.jpg");
/* harmony import */ var _img_weather_project_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/weather_project.jpg */ "./src/img/weather_project.jpg");
//sass






 //scripts

 //images






(function () {
  var populateImages = function populateImages() {
    var myPortrait = document.getElementById("my-image").src = _img_portrait_jpg__WEBPACK_IMPORTED_MODULE_10__;
    var project1 = document.getElementById("project1-img").src = _img_weather_project_jpg__WEBPACK_IMPORTED_MODULE_11__;
    var project2 = document.getElementById("project2-img").src = _img_makesomeflashcards_jpg__WEBPACK_IMPORTED_MODULE_9__;
  }; // TOggle functions


  var switchClass = function switchClass(element, remove, add) {
    element.classList.add(add);
    element.classList.remove(remove);
    return;
  };

  var toggleVis = function toggleVis(elements) {
    var toggleVisClass = function toggleVisClass(el) {
      if (!el.contains("vis")) return el.add("vis");
      return el.remove("vis");
    };

    if (elements.type === "all") {
      var elementToMakeVis = document.querySelectorAll(elements.target);
      elementToMakeVis.forEach(function (el) {
        toggleVisClass(el.classList);
      });
    }

    if (elements.type === "single") {
      var _elementToMakeVis = document.querySelector(elements.target).classList;
      toggleVisClass(_elementToMakeVis);
    }
  };

  var toggleTheme = function toggleTheme(theme) {
    var elementToMakeVis = document.querySelectorAll(theme.target);
    elementToMakeVis.forEach(function (el) {
      console.log(el);
      if (theme.target === ".lite") return switchClass(el, "lite", "dark");
      return switchClass(el, "dark", "lite");
    });
  }; //


  var hamburger = document.querySelector("#hamburger").addEventListener("click", function () {
    return toggleVis({
      type: "all",
      target: ".nav-btn"
    });
  });
  var theme = document.querySelector("#theme-nav").addEventListener("click", function () {
    var ifLite = document.querySelector(".lite");
    if (ifLite !== null) return toggleTheme({
      target: ".lite"
    });
    return toggleTheme({
      target: ".dark"
    });
  });
  var moduleContactMe = document.getElementById("contact-me-form").addEventListener("submit", function (event) {
    var module = ".module";
    document.forms["contact-me-form"].reset();
    toggleVis(module);
  });
  (0,_bubbles__WEBPACK_IMPORTED_MODULE_7__["default"])();
  populateImages();
})();
})();

/******/ })()
;
//# sourceMappingURL=main879d7015a62582f5c6a4.js.map