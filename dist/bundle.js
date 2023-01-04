/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://use.fontawesome.com/releases/v6.0.0/css/all.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nbody {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f1f2f5;\n}\n\n.todo-container {\n  width: 40%;\n  min-height: 60vh;\n  margin: 10vh 0;\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  padding-bottom: 50px;\n  position: relative;\n  overflow: hidden;\n}\n\n.todo-group {\n  width: 100%;\n}\n\n.todo-list {\n  height: 50px;\n  width: calc(100% - 40px);\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px #ddd solid;\n  background-color: #fff;\n}\n\n.todo-intro {\n  font-size: 15px;\n}\n\n.todo-intro-title {\n  font-weight: 600;\n  opacity: 0.9;\n  color: #545862;\n}\n\n.todo-intro i {\n  font-size: 17px;\n  opacity: 0.5;\n  color: #333;\n}\n\n.todo-add * {\n  color: #ddd;\n}\n\n.todo-add input {\n  width: 100%;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-size: 18px;\n  font-style: italic;\n  font-weight: 400;\n}\n\n.todo-add input::placeholder {\n  color: #ddd;\n}\n\n.todo-add i {\n  font-size: 12px;\n}\n\n.todo-item {\n  position: relative;\n}\n\n.edit-focus-element {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n}\n\n.checked-icon {\n  color: #2e8ae6;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  z-index: 1;\n}\n\n.unchecked-icon {\n  font-size: 13px;\n  border: 2px #ddd solid;\n  cursor: pointer;\n  color: transparent;\n  border-radius: 3px;\n  position: relative;\n  z-index: 1;\n}\n\n.todo-item input {\n  width: calc(100% - 30px);\n  padding: 0 15px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-size: 15px;\n  font-weight: 100;\n  text-align: start;\n  position: relative;\n  z-index: 1;\n}\n\n.undecoration {\n  color: #000;\n  text-decoration: none;\n}\n\n.decoration {\n  opacity: 0.5;\n  color: #333;\n  text-decoration: line-through;\n}\n\n.delete-icon,\n.more-icon {\n  font-size: 17px;\n  opacity: 0.5;\n  color: #333;\n  cursor: pointer;\n}\n\n.delete-icon {\n  display: none;\n}\n\n.more-icon {\n  display: block;\n}\n\n.clear-todo {\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  bottom: 0;\n  outline: none;\n  border: none;\n  background-color: #f1f2f5;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.clear-todo span {\n  opacity: 0.5;\n  color: #333;\n}\n\n.clear-todo span:hover {\n  opacity: 1;\n  color: #000;\n  text-decoration: underline;\n}\n\n.edit-todo:focus ~ .edit-focus-element {\n  background-color: #fffecb;\n}\n\n.delete-icon:active {\n  display: block;\n}\n\n.edit-todo:focus ~ .delete-icon {\n  display: block;\n}\n\n.edit-todo:focus ~ .more-icon {\n  display: none;\n}\n\n.delete-icon:active ~ .more-icon {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;EACE,SAAA;EACA,UAAA;EACA,uBAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,yBAAA;AAAF;;AAGA;EACE,UAAA;EACA,gBAAA;EACA,cAAA;EACA,sBAAA;EACA,yCAAA;EACA,kBAAA;EACA,oBAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,YAAA;EACA,wBAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,6BAAA;EACA,sBAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,gBAAA;EACA,YAAA;EACA,cAAA;AAAF;;AAGA;EACE,eAAA;EACA,YAAA;EACA,WAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,WAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;EACE,WAAA;AAAF;;AAGA;EACE,eAAA;AAAF;;AAGA;EACE,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,WAAA;EACA,YAAA;EACA,OAAA;EACA,MAAA;EACA,kBAAA;EACA,UAAA;EACA,sBAAA;AAAF;;AAGA;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,UAAA;AAAF;;AAGA;EACE,eAAA;EACA,sBAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;EACA,UAAA;AAAF;;AAGA;EACE,wBAAA;EACA,eAAA;EACA,aAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;AAAF;;AAGA;EACE,WAAA;EACA,qBAAA;AAAF;;AAGA;EACE,YAAA;EACA,WAAA;EACA,6BAAA;AAAF;;AAGA;;EAEE,eAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;EACA,eAAA;AAAF;;AAGA;EACE,YAAA;EACA,WAAA;AAAF;;AAGA;EACE,UAAA;EACA,WAAA;EACA,0BAAA;AAAF;;AAGA;EACE,yBAAA;AAAF;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,cAAA;AAAF;;AAGA;EACE,aAAA;AAAF;;AAGA;EACE,aAAA;AAAF","sourcesContent":["@import url(https://use.fontawesome.com/releases/v6.0.0/css/all.css);\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n\nbody {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #f1f2f5;\n}\n\n.todo-container {\n  width: 40%;\n  min-height: 60vh;\n  margin: 10vh 0;\n  background-color: #fff;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  padding-bottom: 50px;\n  position: relative;\n  overflow: hidden;\n}\n\n.todo-group {\n  width: 100%;\n}\n\n.todo-list {\n  height: 50px;\n  width: calc(100% - 40px);\n  padding: 0 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px #ddd solid;\n  background-color: #fff;\n}\n\n.todo-intro {\n  font-size: 15px;\n}\n\n.todo-intro-title {\n  font-weight: 600;\n  opacity: 0.9;\n  color: #545862;\n}\n\n.todo-intro i {\n  font-size: 17px;\n  opacity: 0.5;\n  color: #333;\n}\n\n.todo-add * {\n  color: #ddd;\n}\n\n.todo-add input {\n  width: 100%;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-size: 18px;\n  font-style: italic;\n  font-weight: 400;\n}\n\n.todo-add input::placeholder {\n  color: #ddd;\n}\n\n.todo-add i {\n  font-size: 12px;\n}\n\n.todo-item {\n  position: relative;\n}\n\n.edit-focus-element {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 0;\n  background-color: #fff;\n}\n\n.checked-icon {\n  color: #2e8ae6;\n  cursor: pointer;\n  font-size: 18px;\n  position: relative;\n  z-index: 1;\n}\n\n.unchecked-icon {\n  font-size: 13px;\n  border: 2px #ddd solid;\n  cursor: pointer;\n  color: transparent;\n  border-radius: 3px;\n  position: relative;\n  z-index: 1;\n}\n\n.todo-item input {\n  width: calc(100% - 30px);\n  padding: 0 15px;\n  outline: none;\n  border: none;\n  background-color: transparent;\n  font-size: 15px;\n  font-weight: 100;\n  text-align: start;\n  position: relative;\n  z-index: 1;\n}\n\n.undecoration {\n  color: #000;\n  text-decoration: none;\n}\n\n.decoration {\n  opacity: 0.5;\n  color: #333;\n  text-decoration: line-through;\n}\n\n.delete-icon,\n.more-icon {\n  font-size: 17px;\n  opacity: 0.5;\n  color: #333;\n  cursor: pointer;\n}\n\n.delete-icon {\n  display: none;\n}\n\n.more-icon {\n  display: block;\n}\n\n.clear-todo {\n  width: 100%;\n  height: 50px;\n  position: absolute;\n  bottom: 0;\n  outline: none;\n  border: none;\n  background-color: #f1f2f5;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n.clear-todo span {\n  opacity: 0.5;\n  color: #333;\n}\n\n.clear-todo span:hover {\n  opacity: 1;\n  color: #000;\n  text-decoration: underline;\n}\n\n.edit-todo:focus ~ .edit-focus-element {\n  background-color: #fffecb;\n}\n\n.delete-icon:active {\n  display: block;\n}\n\n.edit-todo:focus ~ .delete-icon {\n  display: block;\n}\n\n.edit-todo:focus ~ .more-icon {\n  display: none;\n}\n\n.delete-icon:active ~ .more-icon {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addmylist": () => (/* binding */ addmylist),
/* harmony export */   "deletemylist": () => (/* binding */ deletemylist),
/* harmony export */   "editmylist": () => (/* binding */ editmylist),
/* harmony export */   "getmylist": () => (/* binding */ getmylist),
/* harmony export */   "mylist": () => (/* binding */ mylist),
/* harmony export */   "updateUI": () => (/* binding */ updateUI)
/* harmony export */ });
let mylist = JSON.parse(localStorage.getItem('mylist')) || [];// eslint-disable-line

const listGroup = document.querySelector('.todo-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const getmylist = () => {
  const mylistElement = mylist.map((item) => `
        <li class="todo-list todo-item" id=${item.index}>
          ${item.completed === true ? `
            <i class="fa-solid fa-check checked-icon"></i>`
    : '<i class="fa-solid fa-square unchecked-icon"></i>'}
          <input type="text" class=${item.completed === true ? 'decoration edit-todo' : ' edit-todo'}  value="${item.description}">
          <span class="edit-focus-element"></span>
          <i class="fa-solid fa-save save-icon"></i>

          <i class="fa-solid fa-trash-can delete-icon"></i>

          <i class="fa-solid fa-ellipsis-vertical more-icon"></i>
        </li>`).join('');
  listGroup.innerHTML = mylistElement;
  return listGroup;
};

const updateUI = (data) => {
  mylist = data;
  getmylist();
};

const addmylist = (event) => {
  if (newTask.value === '') return;
  if (event.key === 'Enter' || event === 'clicked') {
    const todoElement = {
      description: newTask.value,
      completed: false,
      index: mylist.length + 1,
    };
    newTask.value = '';
    mylist = [...mylist, todoElement];
    localStorage.setItem('mylist', JSON.stringify(mylist));
    getmylist();
  }
};

const editmylist = ({ index, event }) => {
  if (event.target.value === '') return;
  if (event.key === 'Enter') {
    event.preventDefault();
    mylist[index - 1].description = event.target.value;
    localStorage.setItem('mylist', JSON.stringify(mylist));
  }
};

const deletemylist = (targetIndex) => {
  const filterList = mylist.filter((item) => +item.index !== +targetIndex);
  const newmylist = filterList.map((item, index) => ({
    description: item.description,
    completed: item.completed,
    index: index + 1,
  }));
  localStorage.setItem('mylist', JSON.stringify(newmylist));
  mylist = newmylist;
  getmylist();
};



/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTodoStatus": () => (/* binding */ changeTodoStatus),
/* harmony export */   "removeCompletedTodos": () => (/* binding */ removeCompletedTodos)
/* harmony export */ });
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ "./src/list.js");


const changeTodoStatus = ({ index, status }) => {
  _list_js__WEBPACK_IMPORTED_MODULE_0__.mylist[index - 1].completed = status;
  localStorage.setItem('mylist', JSON.stringify(_list_js__WEBPACK_IMPORTED_MODULE_0__.mylist));
  (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.getmylist)();
};
const removeCompletedTodos = () => {
  const uncompletedTodos = _list_js__WEBPACK_IMPORTED_MODULE_0__.mylist.filter((element) => element.completed !== true);
  const newTodos = uncompletedTodos.map((element, index) => {
    element.index = index + 1;
    return element;
  });
  localStorage.setItem('mylist', JSON.stringify(newTodos));
  (0,_list_js__WEBPACK_IMPORTED_MODULE_0__.updateUI)(newTodos);
};



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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status.js */ "./src/status.js");





const listGroup = document.querySelector('.todo-group');
const newTask = document.querySelector('.todo-add').querySelector('input');
const submitIcon = document.querySelector('.todo-add').querySelector('i');
newTask.addEventListener('keypress', (event) => (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.addmylist)(event));
submitIcon.addEventListener('click', () => (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.addmylist)('clicked'));

listGroup.addEventListener('click', (event) => {
  const clickedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (clickedItem === 'delete-icon') (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.deletemylist)(li.id);
  if (clickedItem === 'checked-icon') (0,_status_js__WEBPACK_IMPORTED_MODULE_2__.changeTodoStatus)({ index: li.id, status: false });
  if (clickedItem === 'unchecked-icon') (0,_status_js__WEBPACK_IMPORTED_MODULE_2__.changeTodoStatus)({ index: li.id, status: true });
});

listGroup.addEventListener('keypress', (event) => {
  const pressedItem = event.target.classList[event.target.classList.length - 1];
  const li = event.target.parentElement;
  if (pressedItem === 'edit-todo') (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.editmylist)({ index: li.id, event });
});

const clearCompleted = document.querySelector('.clear-todo');
clearCompleted.addEventListener('click', _status_js__WEBPACK_IMPORTED_MODULE_2__.removeCompletedTodos);

window.addEventListener('load', () => { (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.getmylist)(); });

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map