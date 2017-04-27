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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTgwOTA2NmY1MWM2NzViOGYzMmQiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL34vaHlwZXJhcHAvc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvcm91dGVyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiZXNjYXBlVmFsdWUiLCJlbmNvZGVVcmxWYWx1ZSIsImVuY29kZVVybENvbXBWYWx1ZSIsInRlc3QiLCJ2aWV3IiwiYWN0aW9ucyIsIm1heFdpZHRoIiwibWFyZ2luIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwiZW5jb2RlIiwiZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsIm1pbkhlaWdodCIsIndvcmRXcmFwIiwid29yZEJyZWFrIiwiT2JqZWN0IiwiYXNzaWduIiwiZXNjYXBlIiwiZW5jb2RlVVJJIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiY29uc29sZSIsImxvZyIsImFwcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNB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QUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLFlBQVk7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0UkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7O0FBRVgsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTgwOTA2NmY1MWM2NzViOGYzMmQiLCJpbXBvcnQgaCBmcm9tIFwiLi9oXCJcbmltcG9ydCBhcHAgZnJvbSBcIi4vYXBwXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4vcm91dGVyXCJcblxuZXhwb3J0IHsgaCwgYXBwLCBSb3V0ZXIgfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h5cGVyYXBwL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBoLCBhcHAgfSBmcm9tICdoeXBlcmFwcCc7XG5cbmxldCBzdGF0ZSA9IHtcbiAgICBlc2NhcGVWYWx1ZTogJycsXG4gICAgZW5jb2RlVXJsVmFsdWU6ICcnLFxuICAgIGVuY29kZVVybENvbXBWYWx1ZTogJycsXG4gICAgdGVzdDogJ2hlbGxvd29ybGQnXG59O1xuXG5jb25zdCB2aWV3ID0gKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgbWF4V2lkdGg6IFwiNDAwcHhcIiwgbWFyZ2luOiBcIjAgYXV0b1wiIH19PlxuICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcIiNkZGRcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19PiMgZW5jb2RpbmcgZnVuY3Rpb25zPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInR5cGUgdGV4dC4uLlwiIFxuICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiB7YWN0aW9ucy5lbmNvZGUoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDpcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMzYwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDAgMzZweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBcIi44XCJcbiAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTZweCA4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjhweCAwXCIsIGNvbG9yOiBcIiNkZGRcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19PiMjIGVzY2FwZSgpOjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjI0cHhcIiwgY29sb3I6IFwiI2ZmZlwiLCBtYXJnaW46IFwiMFwiLCB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsIHdvcmRCcmVhazogXCJicmVhay1hbGxcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19Pnsgc3RhdGUuZXNjYXBlVmFsdWUgfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTZweCA4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjhweCAwXCIsIGNvbG9yOiBcIiNkZGRcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19PiMjIGVuY29kZVVSSSgpOjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjI0cHhcIiwgY29sb3I6IFwiI2ZmZlwiLCBtYXJnaW46IFwiMFwiLCB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsIHdvcmRCcmVhazogXCJicmVhay1hbGxcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19Pnsgc3RhdGUuZW5jb2RlVXJsVmFsdWUgfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc3VsdFwiIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTZweCA4cHhcIiB9fT5cbiAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiBcIjhweCAwXCIsIGNvbG9yOiBcIiNkZGRcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19PiMjIGVuY29kZVVSSUNvbXBvbmVudCgpOjwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWluSGVpZ2h0OiBcIjI0cHhcIiwgY29sb3I6IFwiI2ZmZlwiLCBtYXJnaW46IFwiMFwiLCB3b3JkV3JhcDogXCJicmVhay13b3JkXCIsIHdvcmRCcmVhazogXCJicmVhay1hbGxcIiwgdGV4dFNoYWRvdzpcIjFweCAxcHggMTBweCBibGFja1wiIH19Pnsgc3RhdGUuZW5jb2RlVXJsQ29tcFZhbHVlIH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICk7XG59O1xuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIGVuY29kZTogKHN0YXRlLCB0YXJnZXQpID0+IHtcbiAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHN0YXRlLCB7XG4gICAgICAgICAgICBlc2NhcGVWYWx1ZTogZXNjYXBlKHRhcmdldCksXG4gICAgICAgICAgICBlbmNvZGVVcmxWYWx1ZTogZW5jb2RlVVJJKHRhcmdldCksXG4gICAgICAgICAgICBlbmNvZGVVcmxDb21wVmFsdWU6IGVuY29kZVVSSUNvbXBvbmVudCh0YXJnZXQpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmFwcCh7IHN0YXRlLCB2aWV3LCBhY3Rpb25zIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gIHZhciBzdGF0ZSA9IHt9XG4gIHZhciB2aWV3ID0gYXBwLnZpZXdcbiAgdmFyIGFjdGlvbnMgPSB7fVxuICB2YXIgZXZlbnRzID0ge31cbiAgdmFyIG5vZGVcbiAgdmFyIGVsZW1lbnRcblxuICBmb3IgKHZhciBpID0gLTEsIHBsdWdpbnMgPSBhcHAucGx1Z2lucyB8fCBbXTsgaSA8IHBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tpXSA/IHBsdWdpbnNbaV0oYXBwKSA6IGFwcFxuXG4gICAgaWYgKHBsdWdpbi5zdGF0ZSAhPSBudWxsKSB7XG4gICAgICBzdGF0ZSA9IG1lcmdlKHN0YXRlLCBwbHVnaW4uc3RhdGUpXG4gICAgfVxuXG4gICAgaW5pdChhY3Rpb25zLCBwbHVnaW4uYWN0aW9ucylcblxuICAgIE9iamVjdC5rZXlzKHBsdWdpbi5ldmVudHMgfHwgW10pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBldmVudHNba2V5XSA9IChldmVudHNba2V5XSB8fCBbXSkuY29uY2F0KHBsdWdpbi5ldmVudHNba2V5XSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGVbMF0gIT09IFwibFwiKSB7XG4gICAgbG9hZCgpXG4gIH0gZWxzZSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQobmFtZXNwYWNlLCBjaGlsZHJlbiwgbGFzdE5hbWUpIHtcbiAgICBPYmplY3Qua2V5cyhjaGlsZHJlbiB8fCBbXSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBhY3Rpb24gPSBjaGlsZHJlbltrZXldXG4gICAgICB2YXIgbmFtZSA9IGxhc3ROYW1lID8gbGFzdE5hbWUgKyBcIi5cIiArIGtleSA6IGtleVxuXG4gICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIG5hbWVzcGFjZVtrZXldID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gYWN0aW9uKHN0YXRlLCBlbWl0KFwiYWN0aW9uXCIsIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgfSkuZGF0YSwgYWN0aW9ucywgZW1pdClcblxuICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlcihzdGF0ZSA9IG1lcmdlKHN0YXRlLCBlbWl0KFwidXBkYXRlXCIsIHJlc3VsdCkpLCB2aWV3KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbml0KG5hbWVzcGFjZVtrZXldIHx8IChuYW1lc3BhY2Vba2V5XSA9IHt9KSwgYWN0aW9uLCBuYW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBsb2FkKCkge1xuICAgIHJlbmRlcihzdGF0ZSwgdmlldylcbiAgICBlbWl0KFwibG9hZGVkXCIsIGVtaXQpXG4gIH1cblxuICBmdW5jdGlvbiBlbWl0KG5hbWUsIGRhdGEpIHtcbiAgICAoZXZlbnRzW25hbWVdIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGNiKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gY2Ioc3RhdGUsIGFjdGlvbnMsIGRhdGEsIGVtaXQpXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgZGF0YSA9IHJlc3VsdFxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YVxuICB9XG5cbiAgZnVuY3Rpb24gcmVuZGVyKHN0YXRlLCB2aWV3KSB7XG4gICAgZWxlbWVudCA9IHBhdGNoKFxuICAgICAgYXBwLnJvb3QgfHwgKGFwcC5yb290ID0gZG9jdW1lbnQuYm9keSksXG4gICAgICBlbGVtZW50LFxuICAgICAgbm9kZSxcbiAgICAgIG5vZGUgPSBlbWl0KFwicmVuZGVyXCIsIHZpZXcpKHN0YXRlLCBhY3Rpb25zKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlKGEsIGIpIHtcbiAgICB2YXIgb2JqID0ge31cblxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICByZXR1cm4gYlxuICAgIH1cblxuICAgIGZvciAodmFyIGkgaW4gYSkge1xuICAgICAgb2JqW2ldID0gYVtpXVxuICAgIH1cbiAgICBmb3IgKHZhciBpIGluIGIpIHtcbiAgICAgIG9ialtpXSA9IGJbaV1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqXG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50RnJvbShub2RlLCBpc1NWRykge1xuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlKVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBlbGVtZW50ID0gKGlzU1ZHID0gaXNTVkcgfHwgbm9kZS50YWcgPT09IFwic3ZnXCIpXG4gICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgbm9kZS50YWcpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlLnRhZylcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmNoaWxkcmVuLmxlbmd0aDspIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50RnJvbShub2RlLmNoaWxkcmVuW2krK10sIGlzU1ZHKSlcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgbmFtZSBpbiBub2RlLmRhdGEpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IFwib25DcmVhdGVcIikge1xuICAgICAgICAgIG5vZGUuZGF0YVtuYW1lXShlbGVtZW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldEVsZW1lbnREYXRhKGVsZW1lbnQsIG5hbWUsIG5vZGUuZGF0YVtuYW1lXSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBmdW5jdGlvbiBzZXRFbGVtZW50RGF0YShlbGVtZW50LCBuYW1lLCB2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAobmFtZSA9PT0gXCJrZXlcIikge1xuICAgIH0gZWxzZSBpZiAoKG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCkpID09PSBcInN0eWxlXCIpIHtcbiAgICAgIGZvciAodmFyIGkgaW4gbWVyZ2Uob2xkVmFsdWUsIHZhbHVlID0gdmFsdWUgfHwge30pKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbaV0gPSB2YWx1ZVtpXSB8fCBcIlwiXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVsZW1lbnRbbmFtZV0gPSB2YWx1ZVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnREYXRhKGVsZW1lbnQsIG9sZERhdGEsIGRhdGEpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIG1lcmdlKG9sZERhdGEsIGRhdGEpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBkYXRhW25hbWVdXG4gICAgICB2YXIgb2xkVmFsdWUgPSBvbGREYXRhW25hbWVdXG5cbiAgICAgIGlmIChuYW1lID09PSBcIm9uVXBkYXRlXCIpIHtcbiAgICAgICAgdmFsdWUoZWxlbWVudClcblxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUgfHwgdmFsdWUgIT09IGVsZW1lbnRbbmFtZV0pIHtcbiAgICAgICAgc2V0RWxlbWVudERhdGEoZWxlbWVudCwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEtleUZyb20obm9kZSkge1xuICAgIGlmIChub2RlICYmIChub2RlID0gbm9kZS5kYXRhKSkge1xuICAgICAgcmV0dXJuIG5vZGUua2V5XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChwYXJlbnQsIGVsZW1lbnQsIG5vZGUpIHtcbiAgICBpZiAobm9kZS5kYXRhLm9uUmVtb3ZlKSB7XG4gICAgICBub2RlLmRhdGEub25SZW1vdmUoZWxlbWVudClcbiAgICB9XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gIH1cblxuICBmdW5jdGlvbiBwYXRjaChwYXJlbnQsIGVsZW1lbnQsIG9sZE5vZGUsIG5vZGUpIHtcbiAgICBpZiAob2xkTm9kZSA9PSBudWxsKSB7XG4gICAgICBlbGVtZW50ID0gcGFyZW50Lmluc2VydEJlZm9yZShjcmVhdGVFbGVtZW50RnJvbShub2RlKSwgZWxlbWVudClcblxuICAgIH0gZWxzZSBpZiAobm9kZS50YWcgJiYgbm9kZS50YWcgPT09IG9sZE5vZGUudGFnKSB7XG4gICAgICB1cGRhdGVFbGVtZW50RGF0YShlbGVtZW50LCBvbGROb2RlLmRhdGEsIG5vZGUuZGF0YSlcblxuICAgICAgdmFyIGxlbiA9IG5vZGUuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICB2YXIgb2xkTGVuID0gb2xkTm9kZS5jaGlsZHJlbi5sZW5ndGhcbiAgICAgIHZhciByZXVzYWJsZUNoaWxkcmVuID0ge31cbiAgICAgIHZhciBvbGRFbGVtZW50cyA9IFtdXG4gICAgICB2YXIgbmV3S2V5cyA9IHt9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2xkTGVuOyBpKyspIHtcbiAgICAgICAgdmFyIG9sZEVsZW1lbnQgPSBlbGVtZW50LmNoaWxkTm9kZXNbaV1cbiAgICAgICAgb2xkRWxlbWVudHNbaV0gPSBvbGRFbGVtZW50XG5cbiAgICAgICAgdmFyIG9sZENoaWxkID0gb2xkTm9kZS5jaGlsZHJlbltpXVxuICAgICAgICB2YXIgb2xkS2V5ID0gZ2V0S2V5RnJvbShvbGRDaGlsZClcblxuICAgICAgICBpZiAobnVsbCAhPSBvbGRLZXkpIHtcbiAgICAgICAgICByZXVzYWJsZUNoaWxkcmVuW29sZEtleV0gPSBbb2xkRWxlbWVudCwgb2xkQ2hpbGRdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSAwXG4gICAgICB2YXIgaiA9IDBcblxuICAgICAgd2hpbGUgKGogPCBsZW4pIHtcbiAgICAgICAgdmFyIG9sZEVsZW1lbnQgPSBvbGRFbGVtZW50c1tpXVxuICAgICAgICB2YXIgb2xkQ2hpbGQgPSBvbGROb2RlLmNoaWxkcmVuW2ldXG4gICAgICAgIHZhciBuZXdDaGlsZCA9IG5vZGUuY2hpbGRyZW5bal1cblxuICAgICAgICB2YXIgb2xkS2V5ID0gZ2V0S2V5RnJvbShvbGRDaGlsZClcbiAgICAgICAgaWYgKG5ld0tleXNbb2xkS2V5XSkge1xuICAgICAgICAgIGkrK1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV3S2V5ID0gZ2V0S2V5RnJvbShuZXdDaGlsZClcblxuICAgICAgICB2YXIgcmV1c2FibGVDaGlsZCA9IHJldXNhYmxlQ2hpbGRyZW5bbmV3S2V5XVxuICAgICAgICB2YXIgcmV1c2FibGVFbGVtZW50ID0gMFxuICAgICAgICB2YXIgcmV1c2FibGVOb2RlID0gMFxuXG4gICAgICAgIGlmIChyZXVzYWJsZUNoaWxkKSB7XG4gICAgICAgICAgcmV1c2FibGVFbGVtZW50ID0gcmV1c2FibGVDaGlsZFswXVxuICAgICAgICAgIHJldXNhYmxlTm9kZSA9IHJldXNhYmxlQ2hpbGRbMV1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudWxsID09IG9sZEtleSAmJiBudWxsID09IG5ld0tleSkge1xuICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIG9sZEVsZW1lbnQsIG9sZENoaWxkLCBuZXdDaGlsZClcbiAgICAgICAgICBqKytcbiAgICAgICAgICBpKytcblxuICAgICAgICB9IGVsc2UgaWYgKG51bGwgPT0gb2xkS2V5ICYmIG51bGwgIT0gbmV3S2V5KSB7XG4gICAgICAgICAgaWYgKHJldXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRCZWZvcmUocmV1c2FibGVFbGVtZW50LCBvbGRFbGVtZW50KVxuICAgICAgICAgICAgcGF0Y2goZWxlbWVudCwgcmV1c2FibGVFbGVtZW50LCByZXVzYWJsZU5vZGUsIG5ld0NoaWxkKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRjaChlbGVtZW50LCBvbGRFbGVtZW50LCBudWxsLCBuZXdDaGlsZClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqKytcbiAgICAgICAgICBuZXdLZXlzW25ld0tleV0gPSBuZXdDaGlsZFxuXG4gICAgICAgIH0gZWxzZSBpZiAobnVsbCAhPSBvbGRLZXkgJiYgbnVsbCA9PSBuZXdLZXkpIHtcbiAgICAgICAgICBpKytcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvbGRLZXkgPT09IG5ld0tleSkge1xuICAgICAgICAgICAgcGF0Y2goZWxlbWVudCwgcmV1c2FibGVFbGVtZW50LCByZXVzYWJsZU5vZGUsIG5ld0NoaWxkKVxuICAgICAgICAgICAgaSsrXG5cbiAgICAgICAgICB9IGVsc2UgaWYgKHJldXNhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRCZWZvcmUocmV1c2FibGVFbGVtZW50LCBvbGRFbGVtZW50KVxuICAgICAgICAgICAgcGF0Y2goZWxlbWVudCwgcmV1c2FibGVFbGVtZW50LCByZXVzYWJsZU5vZGUsIG5ld0NoaWxkKVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIG9sZEVsZW1lbnQsIG51bGwsIG5ld0NoaWxkKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGorK1xuICAgICAgICAgIG5ld0tleXNbbmV3S2V5XSA9IG5ld0NoaWxkXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgd2hpbGUgKGkgPCBvbGRMZW4pIHtcbiAgICAgICAgdmFyIG9sZENoaWxkID0gb2xkTm9kZS5jaGlsZHJlbltpXVxuICAgICAgICB2YXIgb2xkS2V5ID0gZ2V0S2V5RnJvbShvbGRDaGlsZClcbiAgICAgICAgaWYgKG51bGwgPT0gb2xkS2V5KSB7XG4gICAgICAgICAgcmVtb3ZlRWxlbWVudChlbGVtZW50LCBvbGRFbGVtZW50c1tpXSwgb2xkQ2hpbGQpXG4gICAgICAgIH1cbiAgICAgICAgaSsrXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgaW4gcmV1c2FibGVDaGlsZHJlbikge1xuICAgICAgICB2YXIgcmV1c2FibGVDaGlsZCA9IHJldXNhYmxlQ2hpbGRyZW5baV1cbiAgICAgICAgdmFyIHJldXNhYmxlTm9kZSA9IHJldXNhYmxlQ2hpbGRbMV1cbiAgICAgICAgaWYgKCFuZXdLZXlzW3JldXNhYmxlTm9kZS5kYXRhLmtleV0pIHtcbiAgICAgICAgICByZW1vdmVFbGVtZW50KGVsZW1lbnQsIHJldXNhYmxlQ2hpbGRbMF0sIHJldXNhYmxlTm9kZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSAhPT0gb2xkTm9kZSkge1xuICAgICAgdmFyIGkgPSBlbGVtZW50XG4gICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50RnJvbShub2RlKSwgaSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG59XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oeXBlcmFwcC9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcbiAgdmFyIG5vZGVcbiAgdmFyIGNhbkNvbmNhdFxuICB2YXIgb2xkQ2FuQ29uY2F0XG5cbiAgdmFyIHN0YWNrID0gW11cbiAgdmFyIGNoaWxkcmVuID0gW11cblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aDsgaS0tID4gMjspIHtcbiAgICBzdGFjay5wdXNoKGFyZ3VtZW50c1tpXSlcbiAgfVxuXG4gIHdoaWxlIChzdGFjay5sZW5ndGgpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlID0gc3RhY2sucG9wKCkpKSB7XG4gICAgICBpID0gbm9kZS5sZW5ndGhcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBzdGFjay5wdXNoKG5vZGVbaV0pXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlICE9IG51bGwgJiYgbm9kZSAhPT0gdHJ1ZSAmJiBub2RlICE9PSBmYWxzZSkge1xuICAgICAgaSA9IGNoaWxkcmVuLmxlbmd0aFxuXG4gICAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUgKyBcIlwiXG4gICAgICB9XG5cbiAgICAgIGNhbkNvbmNhdCA9IHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiXG5cbiAgICAgIGlmIChjYW5Db25jYXQgJiYgb2xkQ2FuQ29uY2F0KSB7XG4gICAgICAgIGNoaWxkcmVuW2kgLSAxXSArPSBub2RlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZHJlbltpXSA9IG5vZGVcbiAgICAgICAgb2xkQ2FuQ29uY2F0ID0gY2FuQ29uY2F0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiB0YWcgPT09IFwic3RyaW5nXCJcbiAgICA/IHtcbiAgICAgIHRhZzogdGFnLFxuICAgICAgZGF0YTogZGF0YSB8fCB7fSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgIH1cbiAgICA6IHRhZyhkYXRhLCBjaGlsZHJlbilcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9oeXBlcmFwcC9zcmMvaC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXBwKSB7XG4gIHJldHVybiB7XG4gICAgYWN0aW9uczoge1xuICAgICAgcm91dGVyOiB7XG4gICAgICAgIG1hdGNoOiBmdW5jdGlvbiAoc3RhdGUsIGRhdGEsIGFjdGlvbnMsIGVtaXQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm91dGVyOiBtYXRjaChkYXRhLCBlbWl0KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ286IGZ1bmN0aW9uIChzdGF0ZSwgZGF0YSwgYWN0aW9ucykge1xuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBkYXRhKVxuICAgICAgICAgIGFjdGlvbnMucm91dGVyLm1hdGNoKGRhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50czoge1xuICAgICAgbG9hZGVkOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbnMpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhY3Rpb25zLnJvdXRlci5tYXRjaChsb2NhdGlvbi5wYXRobmFtZSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uIChzdGF0ZSwgYWN0aW9ucywgdmlldywgZW1pdCkge1xuICAgICAgICByZXR1cm4gdmlld1soc3RhdGUucm91dGVyIHx8IChcbiAgICAgICAgICBzdGF0ZS5yb3V0ZXIgPSBtYXRjaChsb2NhdGlvbi5wYXRobmFtZSwgZW1pdCkpKS5tYXRjaF1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaChkYXRhLCBlbWl0KSB7XG4gICAgdmFyIG1hdGNoXG4gICAgdmFyIHBhcmFtcyA9IHt9XG5cbiAgICBmb3IgKHZhciByb3V0ZSBpbiBhcHAudmlldykge1xuICAgICAgdmFyIGtleXMgPSBbXVxuXG4gICAgICBpZiAoIW1hdGNoICYmIHJvdXRlICE9PSBcIipcIikge1xuICAgICAgICBkYXRhLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIiArIHJvdXRlXG4gICAgICAgICAgLnJlcGxhY2UoL1xcLy9nLCBcIlxcXFwvXCIpXG4gICAgICAgICAgLnJlcGxhY2UoLzooW0EtWmEtejAtOV9dKykvZywgZnVuY3Rpb24gKF8sIGtleSkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGtleSlcblxuICAgICAgICAgICAgcmV0dXJuIFwiKFstQS1aYS16MC05X10rKVwiXG4gICAgICAgICAgfSkgKyBcIi8/JFwiLCBcImdcIiksIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoIC0gMjspIHtcbiAgICAgICAgICAgICAgcGFyYW1zW2tleXMuc2hpZnQoKV0gPSBhcmd1bWVudHNbaSsrXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaCA9IHJvdXRlXG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW1pdChcInJvdXRlXCIsIHtcbiAgICAgIG1hdGNoOiBtYXRjaCB8fCBcIipcIixcbiAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgfSlcbiAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwZXJhcHAvc3JjL3JvdXRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9