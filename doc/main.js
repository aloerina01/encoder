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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__h__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__app__["a"]; });
/* unused harmony reexport Router */







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


var state = {
    escapeValue: '',
    encodeUrlValue: '',
    encodeUrlCompValue: '',
    test: 'helloworld'
};

var view = function view(state, actions) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
        'section',
        { style: { maxWidth: "400px", margin: "0 auto" } },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
            'h1',
            { style: { color: "#ddd", textShadow: "1px 1px 10px black" } },
            '# encoding functions'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])('input', { placeholder: 'type text...',
            type: 'text',
            onInput: function onInput(e) {
                actions.encode(e.target.value);
            },
            style: {
                width: "100%",
                maxWidth: "360px",
                boxSizing: "border-box",
                padding: "0 6px",
                height: "46px",
                fontSize: "20px",
                margin: "0 0 36px 0",
                outline: "none",
                backgroundColor: "#fff",
                opacity: ".8"
            } }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
            'div',
            { style: { padding: "16px 8px" } },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'h4',
                { style: { margin: "8px 0", color: "#ddd", textShadow: "1px 1px 10px black" } },
                '## escape():'
            ),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'p',
                { style: { minHeight: "24px", color: "#fff", margin: "0", wordWrap: "break-word", wordBreak: "break-all", textShadow: "1px 1px 10px black" } },
                state.escapeValue
            )
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
            'div',
            { 'class': 'result', style: { padding: "16px 8px" } },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'h4',
                { style: { margin: "8px 0", color: "#ddd", textShadow: "1px 1px 10px black" } },
                '## encodeURI():'
            ),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'p',
                { style: { minHeight: "24px", color: "#fff", margin: "0", wordWrap: "break-word", wordBreak: "break-all", textShadow: "1px 1px 10px black" } },
                state.encodeUrlValue
            )
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
            'div',
            { 'class': 'result', style: { padding: "16px 8px" } },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'h4',
                { style: { margin: "8px 0", color: "#ddd", textShadow: "1px 1px 10px black" } },
                '## encodeURIComponent():'
            ),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'p',
                { style: { minHeight: "24px", color: "#fff", margin: "0", wordWrap: "break-word", wordBreak: "break-all", textShadow: "1px 1px 10px black" } },
                state.encodeUrlCompValue
            )
        )
    );
};

var actions = {
    encode: function encode(state, target) {
        state = Object.assign(state, {
            escapeValue: escape(target),
            encodeUrlValue: encodeURI(target),
            encodeUrlCompValue: encodeURIComponent(target)
        });
        console.log(state);
        return state;
    }
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["b" /* app */])({ state: state, view: view, actions: actions });

var style = {};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (app) {
  var state = {}
  var view = app.view
  var actions = {}
  var events = {}
  var node
  var element

  for (var i = -1, plugins = app.plugins || []; i < plugins.length; i++) {
    var plugin = plugins[i] ? plugins[i](app) : app

    if (plugin.state != null) {
      state = merge(state, plugin.state)
    }

    init(actions, plugin.actions)

    Object.keys(plugin.events || []).map(function (key) {
      events[key] = (events[key] || []).concat(plugin.events[key])
    })
  }

  if (document.readyState[0] !== "l") {
    load()
  } else {
    addEventListener("DOMContentLoaded", load)
  }

  function init(namespace, children, lastName) {
    Object.keys(children || []).map(function (key) {
      var action = children[key]
      var name = lastName ? lastName + "." + key : key

      if (typeof action === "function") {
        namespace[key] = function (data) {
          var result = action(state, emit("action", {
            name: name,
            data: data
          }).data, actions, emit)

          if (result == null || typeof result.then === "function") {
            return result
          }

          render(state = merge(state, emit("update", result)), view)
        }
      } else {
        init(namespace[key] || (namespace[key] = {}), action, name)
      }
    })
  }

  function load() {
    render(state, view)
    emit("loaded", emit)
  }

  function emit(name, data) {
    (events[name] || []).map(function (cb) {
      var result = cb(state, actions, data, emit)
      if (result != null) {
        data = result
      }
    })

    return data
  }

  function render(state, view) {
    element = patch(
      app.root || (app.root = document.body),
      element,
      node,
      node = emit("render", view)(state, actions)
    )
  }

  function merge(a, b) {
    var obj = {}

    if (typeof b !== "object" || Array.isArray(b)) {
      return b
    }

    for (var i in a) {
      obj[i] = a[i]
    }
    for (var i in b) {
      obj[i] = b[i]
    }

    return obj
  }

  function createElementFrom(node, isSVG) {
    if (typeof node === "string") {
      var element = document.createTextNode(node)

    } else {
      var element = (isSVG = isSVG || node.tag === "svg")
        ? document.createElementNS("http://www.w3.org/2000/svg", node.tag)
        : document.createElement(node.tag)

      for (var i = 0; i < node.children.length;) {
        element.appendChild(createElementFrom(node.children[i++], isSVG))
      }

      for (var name in node.data) {
        if (name === "onCreate") {
          node.data[name](element)
        } else {
          setElementData(element, name, node.data[name])
        }
      }
    }

    return element
  }

  function setElementData(element, name, value, oldValue) {
    if (name === "key") {
    } else if ((name = name.toLowerCase()) === "style") {
      for (var i in merge(oldValue, value = value || {})) {
        element.style[i] = value[i] || ""
      }
    } else {
      try {
        element[name] = value
      } catch (_) {
      }

      if (typeof value !== "function") {
        if (value) {
          element.setAttribute(name, value)
        } else {
          element.removeAttribute(name)
        }
      }
    }
  }

  function updateElementData(element, oldData, data) {
    for (var name in merge(oldData, data)) {
      var value = data[name]
      var oldValue = oldData[name]

      if (name === "onUpdate") {
        value(element)

      } else if (value !== oldValue || value !== element[name]) {
        setElementData(element, name, value, oldValue)
      }
    }
  }

  function getKeyFrom(node) {
    if (node && (node = node.data)) {
      return node.key
    }
  }

  function removeElement(parent, element, node) {
    if (node.data.onRemove) {
      node.data.onRemove(element)
    }
    parent.removeChild(element)
  }

  function patch(parent, element, oldNode, node) {
    if (oldNode == null) {
      element = parent.insertBefore(createElementFrom(node), element)

    } else if (node.tag && node.tag === oldNode.tag) {
      updateElementData(element, oldNode.data, node.data)

      var len = node.children.length
      var oldLen = oldNode.children.length
      var reusableChildren = {}
      var oldElements = []
      var newKeys = {}

      for (var i = 0; i < oldLen; i++) {
        var oldElement = element.childNodes[i]
        oldElements[i] = oldElement

        var oldChild = oldNode.children[i]
        var oldKey = getKeyFrom(oldChild)

        if (null != oldKey) {
          reusableChildren[oldKey] = [oldElement, oldChild]
        }
      }

      var i = 0
      var j = 0

      while (j < len) {
        var oldElement = oldElements[i]
        var oldChild = oldNode.children[i]
        var newChild = node.children[j]

        var oldKey = getKeyFrom(oldChild)
        if (newKeys[oldKey]) {
          i++
          continue
        }

        var newKey = getKeyFrom(newChild)

        var reusableChild = reusableChildren[newKey]
        var reusableElement = 0
        var reusableNode = 0

        if (reusableChild) {
          reusableElement = reusableChild[0]
          reusableNode = reusableChild[1]
        }

        if (null == oldKey && null == newKey) {
          patch(element, oldElement, oldChild, newChild)
          j++
          i++

        } else if (null == oldKey && null != newKey) {
          if (reusableElement) {
            element.insertBefore(reusableElement, oldElement)
            patch(element, reusableElement, reusableNode, newChild)
          } else {
            patch(element, oldElement, null, newChild)
          }

          j++
          newKeys[newKey] = newChild

        } else if (null != oldKey && null == newKey) {
          i++

        } else {
          if (oldKey === newKey) {
            patch(element, reusableElement, reusableNode, newChild)
            i++

          } else if (reusableElement) {
            element.insertBefore(reusableElement, oldElement)
            patch(element, reusableElement, reusableNode, newChild)

          } else {
            patch(element, oldElement, null, newChild)
          }

          j++
          newKeys[newKey] = newChild
        }
      }

      while (i < oldLen) {
        var oldChild = oldNode.children[i]
        var oldKey = getKeyFrom(oldChild)
        if (null == oldKey) {
          removeElement(element, oldElements[i], oldChild)
        }
        i++
      }

      for (var i in reusableChildren) {
        var reusableChild = reusableChildren[i]
        var reusableNode = reusableChild[1]
        if (!newKeys[reusableNode.data.key]) {
          removeElement(element, reusableChild[0], reusableNode)
        }
      }
    } else if (node !== oldNode) {
      var i = element
      parent.replaceChild(element = createElementFrom(node), i)
    }

    return element
  }
});



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (tag, data) {
  var node
  var canConcat
  var oldCanConcat

  var stack = []
  var children = []

  for (var i = arguments.length; i-- > 2;) {
    stack.push(arguments[i])
  }

  while (stack.length) {
    if (Array.isArray(node = stack.pop())) {
      i = node.length

      while (i--) {
        stack.push(node[i])
      }
    } else if (node != null && node !== true && node !== false) {
      i = children.length

      if (typeof node === "number") {
        node = node + ""
      }

      canConcat = typeof node === "string"

      if (canConcat && oldCanConcat) {
        children[i - 1] += node
      } else {
        children[i] = node
        oldCanConcat = canConcat
      }
    }
  }

  return typeof tag === "string"
    ? {
      tag: tag,
      data: data || {},
      children: children
    }
    : tag(data, children)
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function (app) {
  return {
    actions: {
      router: {
        match: function (state, data, actions, emit) {
          return {
            router: match(data, emit)
          }
        },
        go: function (state, data, actions) {
          history.pushState({}, "", data)
          actions.router.match(data)
        }
      }
    },
    events: {
      loaded: function (state, actions) {
        addEventListener("popstate", function () {
          actions.router.match(location.pathname)
        })
      },
      render: function (state, actions, view, emit) {
        return view[(state.router || (
          state.router = match(location.pathname, emit))).match]
      }
    }
  }

  function match(data, emit) {
    var match
    var params = {}

    for (var route in app.view) {
      var keys = []

      if (!match && route !== "*") {
        data.replace(new RegExp("^" + route
          .replace(/\//g, "\\/")
          .replace(/:([A-Za-z0-9_]+)/g, function (_, key) {
            keys.push(key)

            return "([-A-Za-z0-9_]+)"
          }) + "/?$", "g"), function () {

            for (var i = 1; i < arguments.length - 2;) {
              params[keys.shift()] = arguments[i++]
            }

            match = route
          })
      }
    }

    return emit("route", {
      match: match || "*",
      params: params
    })
  }
});



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTE5NWJmMTI0ZTYyNTE3NzdkNzciLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL34vaHlwZXJhcHAvc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvcm91dGVyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiZXNjYXBlVmFsdWUiLCJlbmNvZGVVcmxWYWx1ZSIsImVuY29kZVVybENvbXBWYWx1ZSIsInRlc3QiLCJ2aWV3IiwiYWN0aW9ucyIsIm1heFdpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiZW5jb2RlIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsIm1pbkhlaWdodCIsIndvcmRXcmFwIiwid29yZEJyZWFrIiwiT2JqZWN0IiwiYXNzaWduIiwiZXNjYXBlIiwiZW5jb2RlVVJJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsImFwcCIsInN0eWxlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtB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SztBQUNMLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVM7QUFDVDs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdFJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOztBQUVYLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUxOTViZjEyNGU2MjUxNzc3ZDc3IiwiaW1wb3J0IGggZnJvbSBcIi4vaFwiXG5pbXBvcnQgYXBwIGZyb20gXCIuL2FwcFwiXG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL3JvdXRlclwiXG5cbmV4cG9ydCB7IGgsIGFwcCwgUm91dGVyIH1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oeXBlcmFwcC9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaCwgYXBwIH0gZnJvbSAnaHlwZXJhcHAnO1xuXG5sZXQgc3RhdGUgPSB7XG4gICAgZXNjYXBlVmFsdWU6ICcnLFxuICAgIGVuY29kZVVybFZhbHVlOiAnJyxcbiAgICBlbmNvZGVVcmxDb21wVmFsdWU6ICcnLFxuICAgIHRlc3Q6ICdoZWxsb3dvcmxkJ1xufTtcblxuY29uc3QgdmlldyA9IChzdGF0ZSwgYWN0aW9ucykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9fT5cbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCIjZGRkXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT4jIGVuY29kaW5nIGZ1bmN0aW9uczwvaDE+XG4gICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJ0eXBlIHRleHQuLi5cIiBcbiAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgIG9uSW5wdXQ9e2UgPT4ge2FjdGlvbnMuZW5jb2RlKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6XCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjM2MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCA2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQ2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMCAwIDM2cHggMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCIuOFwiXG4gICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHggOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCI4cHggMFwiLCBjb2xvcjogXCIjZGRkXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT4jIyBlc2NhcGUoKTo8L2g0PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1pbkhlaWdodDogXCIyNHB4XCIsIGNvbG9yOiBcIiNmZmZcIiwgbWFyZ2luOiBcIjBcIiwgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLCB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT57IHN0YXRlLmVzY2FwZVZhbHVlIH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHggOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCI4cHggMFwiLCBjb2xvcjogXCIjZGRkXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT4jIyBlbmNvZGVVUkkoKTo8L2g0PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1pbkhlaWdodDogXCIyNHB4XCIsIGNvbG9yOiBcIiNmZmZcIiwgbWFyZ2luOiBcIjBcIiwgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLCB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT57IHN0YXRlLmVuY29kZVVybFZhbHVlIH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXN1bHRcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjE2cHggOHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogXCI4cHggMFwiLCBjb2xvcjogXCIjZGRkXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT4jIyBlbmNvZGVVUklDb21wb25lbnQoKTo8L2g0PlxuICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1pbkhlaWdodDogXCIyNHB4XCIsIGNvbG9yOiBcIiNmZmZcIiwgbWFyZ2luOiBcIjBcIiwgd29yZFdyYXA6IFwiYnJlYWstd29yZFwiLCB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCIsIHRleHRTaGFkb3c6XCIxcHggMXB4IDEwcHggYmxhY2tcIiB9fT57IHN0YXRlLmVuY29kZVVybENvbXBWYWx1ZSB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBlbmNvZGU6IChzdGF0ZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGVzY2FwZSh0YXJnZXQpLFxuICAgICAgICAgICAgZW5jb2RlVXJsVmFsdWU6IGVuY29kZVVSSSh0YXJnZXQpLFxuICAgICAgICAgICAgZW5jb2RlVXJsQ29tcFZhbHVlOiBlbmNvZGVVUklDb21wb25lbnQodGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5hcHAoeyBzdGF0ZSwgdmlldywgYWN0aW9ucyB9KTtcblxuY29uc3Qgc3R5bGUgPSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICB2YXIgc3RhdGUgPSB7fVxuICB2YXIgdmlldyA9IGFwcC52aWV3XG4gIHZhciBhY3Rpb25zID0ge31cbiAgdmFyIGV2ZW50cyA9IHt9XG4gIHZhciBub2RlXG4gIHZhciBlbGVtZW50XG5cbiAgZm9yICh2YXIgaSA9IC0xLCBwbHVnaW5zID0gYXBwLnBsdWdpbnMgfHwgW107IGkgPCBwbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbaV0gPyBwbHVnaW5zW2ldKGFwcCkgOiBhcHBcblxuICAgIGlmIChwbHVnaW4uc3RhdGUgIT0gbnVsbCkge1xuICAgICAgc3RhdGUgPSBtZXJnZShzdGF0ZSwgcGx1Z2luLnN0YXRlKVxuICAgIH1cblxuICAgIGluaXQoYWN0aW9ucywgcGx1Z2luLmFjdGlvbnMpXG5cbiAgICBPYmplY3Qua2V5cyhwbHVnaW4uZXZlbnRzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgZXZlbnRzW2tleV0gPSAoZXZlbnRzW2tleV0gfHwgW10pLmNvbmNhdChwbHVnaW4uZXZlbnRzW2tleV0pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlWzBdICE9PSBcImxcIikge1xuICAgIGxvYWQoKVxuICB9IGVsc2Uge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWQpXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KG5hbWVzcGFjZSwgY2hpbGRyZW4sIGxhc3ROYW1lKSB7XG4gICAgT2JqZWN0LmtleXMoY2hpbGRyZW4gfHwgW10pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgYWN0aW9uID0gY2hpbGRyZW5ba2V5XVxuICAgICAgdmFyIG5hbWUgPSBsYXN0TmFtZSA/IGxhc3ROYW1lICsgXCIuXCIgKyBrZXkgOiBrZXlcblxuICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGFjdGlvbihzdGF0ZSwgZW1pdChcImFjdGlvblwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pLmRhdGEsIGFjdGlvbnMsIGVtaXQpXG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW5kZXIoc3RhdGUgPSBtZXJnZShzdGF0ZSwgZW1pdChcInVwZGF0ZVwiLCByZXN1bHQpKSwgdmlldylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdChuYW1lc3BhY2Vba2V5XSB8fCAobmFtZXNwYWNlW2tleV0gPSB7fSksIGFjdGlvbiwgbmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICByZW5kZXIoc3RhdGUsIHZpZXcpXG4gICAgZW1pdChcImxvYWRlZFwiLCBlbWl0KVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChuYW1lLCBkYXRhKSB7XG4gICAgKGV2ZW50c1tuYW1lXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIHJlc3VsdCA9IGNiKHN0YXRlLCBhY3Rpb25zLCBkYXRhLCBlbWl0KVxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEgPSByZXN1bHRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSwgdmlldykge1xuICAgIGVsZW1lbnQgPSBwYXRjaChcbiAgICAgIGFwcC5yb290IHx8IChhcHAucm9vdCA9IGRvY3VtZW50LmJvZHkpLFxuICAgICAgZWxlbWVudCxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlID0gZW1pdChcInJlbmRlclwiLCB2aWV3KShzdGF0ZSwgYWN0aW9ucylcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gICAgdmFyIG9iaiA9IHt9XG5cbiAgICBpZiAodHlwZW9mIGIgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgcmV0dXJuIGJcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIGEpIHtcbiAgICAgIG9ialtpXSA9IGFbaV1cbiAgICB9XG4gICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICBvYmpbaV0gPSBiW2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudEZyb20obm9kZSwgaXNTVkcpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSlcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IChpc1NWRyA9IGlzU1ZHIHx8IG5vZGUudGFnID09PSBcInN2Z1wiKVxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG5vZGUudGFnKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcpXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudEZyb20obm9kZS5jaGlsZHJlbltpKytdLCBpc1NWRykpXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5kYXRhKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIm9uQ3JlYXRlXCIpIHtcbiAgICAgICAgICBub2RlLmRhdGFbbmFtZV0oZWxlbWVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFbGVtZW50RGF0YShlbGVtZW50LCBuYW1lLCBub2RlLmRhdGFbbmFtZV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RWxlbWVudERhdGEoZWxlbWVudCwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5hbWUgPT09IFwia2V5XCIpIHtcbiAgICB9IGVsc2UgaWYgKChuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICBmb3IgKHZhciBpIGluIG1lcmdlKG9sZFZhbHVlLCB2YWx1ZSA9IHZhbHVlIHx8IHt9KSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlW2ldID0gdmFsdWVbaV0gfHwgXCJcIlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBlbGVtZW50W25hbWVdID0gdmFsdWVcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50RGF0YShlbGVtZW50LCBvbGREYXRhLCBkYXRhKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBtZXJnZShvbGREYXRhLCBkYXRhKSkge1xuICAgICAgdmFyIHZhbHVlID0gZGF0YVtuYW1lXVxuICAgICAgdmFyIG9sZFZhbHVlID0gb2xkRGF0YVtuYW1lXVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJvblVwZGF0ZVwiKSB7XG4gICAgICAgIHZhbHVlKGVsZW1lbnQpXG5cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG9sZFZhbHVlIHx8IHZhbHVlICE9PSBlbGVtZW50W25hbWVdKSB7XG4gICAgICAgIHNldEVsZW1lbnREYXRhKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRLZXlGcm9tKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiAobm9kZSA9IG5vZGUuZGF0YSkpIHtcbiAgICAgIHJldHVybiBub2RlLmtleVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQocGFyZW50LCBlbGVtZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUuZGF0YS5vblJlbW92ZSkge1xuICAgICAgbm9kZS5kYXRhLm9uUmVtb3ZlKGVsZW1lbnQpXG4gICAgfVxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICB9XG5cbiAgZnVuY3Rpb24gcGF0Y2gocGFyZW50LCBlbGVtZW50LCBvbGROb2RlLCBub2RlKSB7XG4gICAgaWYgKG9sZE5vZGUgPT0gbnVsbCkge1xuICAgICAgZWxlbWVudCA9IHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlRWxlbWVudEZyb20obm9kZSksIGVsZW1lbnQpXG5cbiAgICB9IGVsc2UgaWYgKG5vZGUudGFnICYmIG5vZGUudGFnID09PSBvbGROb2RlLnRhZykge1xuICAgICAgdXBkYXRlRWxlbWVudERhdGEoZWxlbWVudCwgb2xkTm9kZS5kYXRhLCBub2RlLmRhdGEpXG5cbiAgICAgIHZhciBsZW4gPSBub2RlLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgdmFyIG9sZExlbiA9IG9sZE5vZGUuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICB2YXIgcmV1c2FibGVDaGlsZHJlbiA9IHt9XG4gICAgICB2YXIgb2xkRWxlbWVudHMgPSBbXVxuICAgICAgdmFyIG5ld0tleXMgPSB7fVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZExlbjsgaSsrKSB7XG4gICAgICAgIHZhciBvbGRFbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldXG4gICAgICAgIG9sZEVsZW1lbnRzW2ldID0gb2xkRWxlbWVudFxuXG4gICAgICAgIHZhciBvbGRDaGlsZCA9IG9sZE5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgdmFyIG9sZEtleSA9IGdldEtleUZyb20ob2xkQ2hpbGQpXG5cbiAgICAgICAgaWYgKG51bGwgIT0gb2xkS2V5KSB7XG4gICAgICAgICAgcmV1c2FibGVDaGlsZHJlbltvbGRLZXldID0gW29sZEVsZW1lbnQsIG9sZENoaWxkXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpID0gMFxuICAgICAgdmFyIGogPSAwXG5cbiAgICAgIHdoaWxlIChqIDwgbGVuKSB7XG4gICAgICAgIHZhciBvbGRFbGVtZW50ID0gb2xkRWxlbWVudHNbaV1cbiAgICAgICAgdmFyIG9sZENoaWxkID0gb2xkTm9kZS5jaGlsZHJlbltpXVxuICAgICAgICB2YXIgbmV3Q2hpbGQgPSBub2RlLmNoaWxkcmVuW2pdXG5cbiAgICAgICAgdmFyIG9sZEtleSA9IGdldEtleUZyb20ob2xkQ2hpbGQpXG4gICAgICAgIGlmIChuZXdLZXlzW29sZEtleV0pIHtcbiAgICAgICAgICBpKytcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld0tleSA9IGdldEtleUZyb20obmV3Q2hpbGQpXG5cbiAgICAgICAgdmFyIHJldXNhYmxlQ2hpbGQgPSByZXVzYWJsZUNoaWxkcmVuW25ld0tleV1cbiAgICAgICAgdmFyIHJldXNhYmxlRWxlbWVudCA9IDBcbiAgICAgICAgdmFyIHJldXNhYmxlTm9kZSA9IDBcblxuICAgICAgICBpZiAocmV1c2FibGVDaGlsZCkge1xuICAgICAgICAgIHJldXNhYmxlRWxlbWVudCA9IHJldXNhYmxlQ2hpbGRbMF1cbiAgICAgICAgICByZXVzYWJsZU5vZGUgPSByZXVzYWJsZUNoaWxkWzFdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVsbCA9PSBvbGRLZXkgJiYgbnVsbCA9PSBuZXdLZXkpIHtcbiAgICAgICAgICBwYXRjaChlbGVtZW50LCBvbGRFbGVtZW50LCBvbGRDaGlsZCwgbmV3Q2hpbGQpXG4gICAgICAgICAgaisrXG4gICAgICAgICAgaSsrXG5cbiAgICAgICAgfSBlbHNlIGlmIChudWxsID09IG9sZEtleSAmJiBudWxsICE9IG5ld0tleSkge1xuICAgICAgICAgIGlmIChyZXVzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJldXNhYmxlRWxlbWVudCwgb2xkRWxlbWVudClcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIHJldXNhYmxlRWxlbWVudCwgcmV1c2FibGVOb2RlLCBuZXdDaGlsZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0Y2goZWxlbWVudCwgb2xkRWxlbWVudCwgbnVsbCwgbmV3Q2hpbGQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaisrXG4gICAgICAgICAgbmV3S2V5c1tuZXdLZXldID0gbmV3Q2hpbGRcblxuICAgICAgICB9IGVsc2UgaWYgKG51bGwgIT0gb2xkS2V5ICYmIG51bGwgPT0gbmV3S2V5KSB7XG4gICAgICAgICAgaSsrXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2xkS2V5ID09PSBuZXdLZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIHJldXNhYmxlRWxlbWVudCwgcmV1c2FibGVOb2RlLCBuZXdDaGlsZClcbiAgICAgICAgICAgIGkrK1xuXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXVzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJldXNhYmxlRWxlbWVudCwgb2xkRWxlbWVudClcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIHJldXNhYmxlRWxlbWVudCwgcmV1c2FibGVOb2RlLCBuZXdDaGlsZClcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRjaChlbGVtZW50LCBvbGRFbGVtZW50LCBudWxsLCBuZXdDaGlsZClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqKytcbiAgICAgICAgICBuZXdLZXlzW25ld0tleV0gPSBuZXdDaGlsZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChpIDwgb2xkTGVuKSB7XG4gICAgICAgIHZhciBvbGRDaGlsZCA9IG9sZE5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgdmFyIG9sZEtleSA9IGdldEtleUZyb20ob2xkQ2hpbGQpXG4gICAgICAgIGlmIChudWxsID09IG9sZEtleSkge1xuICAgICAgICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudCwgb2xkRWxlbWVudHNbaV0sIG9sZENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGkrK1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpIGluIHJldXNhYmxlQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIHJldXNhYmxlQ2hpbGQgPSByZXVzYWJsZUNoaWxkcmVuW2ldXG4gICAgICAgIHZhciByZXVzYWJsZU5vZGUgPSByZXVzYWJsZUNoaWxkWzFdXG4gICAgICAgIGlmICghbmV3S2V5c1tyZXVzYWJsZU5vZGUuZGF0YS5rZXldKSB7XG4gICAgICAgICAgcmVtb3ZlRWxlbWVudChlbGVtZW50LCByZXVzYWJsZUNoaWxkWzBdLCByZXVzYWJsZU5vZGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUgIT09IG9sZE5vZGUpIHtcbiAgICAgIHZhciBpID0gZWxlbWVudFxuICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbGVtZW50ID0gY3JlYXRlRWxlbWVudEZyb20obm9kZSksIGkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwZXJhcHAvc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG4gIHZhciBub2RlXG4gIHZhciBjYW5Db25jYXRcbiAgdmFyIG9sZENhbkNvbmNhdFxuXG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBjaGlsZHJlbiA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGktLSA+IDI7KSB7XG4gICAgc3RhY2sucHVzaChhcmd1bWVudHNbaV0pXG4gIH1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSA9IHN0YWNrLnBvcCgpKSkge1xuICAgICAgaSA9IG5vZGUubGVuZ3RoXG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgc3RhY2sucHVzaChub2RlW2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSAhPSBudWxsICYmIG5vZGUgIT09IHRydWUgJiYgbm9kZSAhPT0gZmFsc2UpIHtcbiAgICAgIGkgPSBjaGlsZHJlbi5sZW5ndGhcblxuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIG5vZGUgPSBub2RlICsgXCJcIlxuICAgICAgfVxuXG4gICAgICBjYW5Db25jYXQgPSB0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIlxuXG4gICAgICBpZiAoY2FuQ29uY2F0ICYmIG9sZENhbkNvbmNhdCkge1xuICAgICAgICBjaGlsZHJlbltpIC0gMV0gKz0gbm9kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW5baV0gPSBub2RlXG4gICAgICAgIG9sZENhbkNvbmNhdCA9IGNhbkNvbmNhdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiXG4gICAgPyB7XG4gICAgICB0YWc6IHRhZyxcbiAgICAgIGRhdGE6IGRhdGEgfHwge30sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XG4gICAgOiB0YWcoZGF0YSwgY2hpbGRyZW4pXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwZXJhcHAvc3JjL2guanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHJvdXRlcjoge1xuICAgICAgICBtYXRjaDogZnVuY3Rpb24gKHN0YXRlLCBkYXRhLCBhY3Rpb25zLCBlbWl0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdXRlcjogbWF0Y2goZGF0YSwgZW1pdClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdvOiBmdW5jdGlvbiAoc3RhdGUsIGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgZGF0YSlcbiAgICAgICAgICBhY3Rpb25zLnJvdXRlci5tYXRjaChkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIGxvYWRlZDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb25zKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYWN0aW9ucy5yb3V0ZXIubWF0Y2gobG9jYXRpb24ucGF0aG5hbWUpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbnMsIHZpZXcsIGVtaXQpIHtcbiAgICAgICAgcmV0dXJuIHZpZXdbKHN0YXRlLnJvdXRlciB8fCAoXG4gICAgICAgICAgc3RhdGUucm91dGVyID0gbWF0Y2gobG9jYXRpb24ucGF0aG5hbWUsIGVtaXQpKSkubWF0Y2hdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2goZGF0YSwgZW1pdCkge1xuICAgIHZhciBtYXRjaFxuICAgIHZhciBwYXJhbXMgPSB7fVxuXG4gICAgZm9yICh2YXIgcm91dGUgaW4gYXBwLnZpZXcpIHtcbiAgICAgIHZhciBrZXlzID0gW11cblxuICAgICAgaWYgKCFtYXRjaCAmJiByb3V0ZSAhPT0gXCIqXCIpIHtcbiAgICAgICAgZGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyByb3V0ZVxuICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCJcXFxcL1wiKVxuICAgICAgICAgIC5yZXBsYWNlKC86KFtBLVphLXowLTlfXSspL2csIGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpXG5cbiAgICAgICAgICAgIHJldHVybiBcIihbLUEtWmEtejAtOV9dKylcIlxuICAgICAgICAgIH0pICsgXCIvPyRcIiwgXCJnXCIpLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7KSB7XG4gICAgICAgICAgICAgIHBhcmFtc1trZXlzLnNoaWZ0KCldID0gYXJndW1lbnRzW2krK11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2ggPSByb3V0ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtaXQoXCJyb3V0ZVwiLCB7XG4gICAgICBtYXRjaDogbWF0Y2ggfHwgXCIqXCIsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0pXG4gIH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h5cGVyYXBwL3NyYy9yb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==