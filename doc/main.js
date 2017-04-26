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
        null,
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
            'h1',
            null,
            'encoding functions'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])('textarea', { placeholder: 'type text...', type: 'text', onInput: function onInput(e) {
                actions.encode(e.target.value);
            } }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
            'div',
            null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'p',
                null,
                'escape():'
            ),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_hyperapp__["a" /* h */])(
                'p',
                null,
                state.escapeValue
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmRhYzc3YmFmMTQ1ODMwNzM2M2MiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL34vaHlwZXJhcHAvc3JjL2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9oeXBlcmFwcC9zcmMvcm91dGVyLmpzIl0sIm5hbWVzIjpbInN0YXRlIiwiZXNjYXBlVmFsdWUiLCJlbmNvZGVVcmxWYWx1ZSIsImVuY29kZVVybENvbXBWYWx1ZSIsInRlc3QiLCJ2aWV3IiwiYWN0aW9ucyIsImVuY29kZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIk9iamVjdCIsImFzc2lnbiIsImVzY2FwZSIsImVuY29kZVVSSSIsImVuY29kZVVSSUNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJhcHAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBOztBQUVROzs7Ozs7Ozs7O0FDSlI7O0FBRUEsSUFBSUEsUUFBUTtBQUNSQyxpQkFBYSxFQURMO0FBRVJDLG9CQUFnQixFQUZSO0FBR1JDLHdCQUFvQixFQUhaO0FBSVJDLFVBQU07QUFKRSxDQUFaOztBQU9BLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDTCxLQUFELEVBQVFNLE9BQVI7QUFBQSxXQUNMO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FESjtBQUVJLGlHQUFVLGFBQVksY0FBdEIsRUFBcUMsTUFBSyxNQUExQyxFQUFpRCxTQUFTLG9CQUFLO0FBQUNBLHdCQUFRQyxNQUFSLENBQWVDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBeEI7QUFBK0IsYUFBL0YsR0FGSjtBQUdJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUVJO0FBQUE7QUFBQTtBQUFLVixzQkFBTUM7QUFBWDtBQUZKO0FBSEosS0FESztBQUFBLENBQWI7O0FBV0EsSUFBTUssVUFBVTtBQUNaQyxZQUFRLGdCQUFDUCxLQUFELEVBQVFTLE1BQVIsRUFBbUI7QUFDdkJULGdCQUFRVyxPQUFPQyxNQUFQLENBQWNaLEtBQWQsRUFBcUI7QUFDekJDLHlCQUFhWSxPQUFPSixNQUFQLENBRFk7QUFFekJQLDRCQUFnQlksVUFBVUwsTUFBVixDQUZTO0FBR3pCTixnQ0FBb0JZLG1CQUFtQk4sTUFBbkI7QUFISyxTQUFyQixDQUFSO0FBS0FPLGdCQUFRQyxHQUFSLENBQVlqQixLQUFaO0FBQ0EsZUFBT0EsS0FBUDtBQUNIO0FBVFcsQ0FBaEI7O0FBWUEsNEVBQUFrQixDQUFJLEVBQUVsQixZQUFGLEVBQVNLLFVBQVQsRUFBZUMsZ0JBQWYsRUFBSixFOzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtDQUErQyxvQkFBb0I7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLG1EQUFtRDtBQUNuRDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RSQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVzs7QUFFWCwyQkFBMkIsMEJBQTBCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2ZGFjNzdiYWYxNDU4MzA3MzYzYyIsImltcG9ydCBoIGZyb20gXCIuL2hcIlxuaW1wb3J0IGFwcCBmcm9tIFwiLi9hcHBcIlxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIlxuXG5leHBvcnQgeyBoLCBhcHAsIFJvdXRlciB9XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwZXJhcHAvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGgsIGFwcCB9IGZyb20gJ2h5cGVyYXBwJztcblxubGV0IHN0YXRlID0ge1xuICAgIGVzY2FwZVZhbHVlOiAnJyxcbiAgICBlbmNvZGVVcmxWYWx1ZTogJycsXG4gICAgZW5jb2RlVXJsQ29tcFZhbHVlOiAnJyxcbiAgICB0ZXN0OiAnaGVsbG93b3JsZCdcbn07XG5cbmNvbnN0IHZpZXcgPSAoc3RhdGUsIGFjdGlvbnMpID0+IFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxoMT5lbmNvZGluZyBmdW5jdGlvbnM8L2gxPlxuICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwidHlwZSB0ZXh0Li4uXCIgdHlwZT1cInRleHRcIiBvbklucHV0PXtlID0+IHthY3Rpb25zLmVuY29kZShlLnRhcmdldC52YWx1ZSl9fT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5lc2NhcGUoKTo8L3A+XG4gICAgICAgICAgICAgICAgPHA+eyBzdGF0ZS5lc2NhcGVWYWx1ZSB9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbjtcblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBlbmNvZGU6IChzdGF0ZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwge1xuICAgICAgICAgICAgZXNjYXBlVmFsdWU6IGVzY2FwZSh0YXJnZXQpLFxuICAgICAgICAgICAgZW5jb2RlVXJsVmFsdWU6IGVuY29kZVVSSSh0YXJnZXQpLFxuICAgICAgICAgICAgZW5jb2RlVXJsQ29tcFZhbHVlOiBlbmNvZGVVUklDb21wb25lbnQodGFyZ2V0KVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59O1xuXG5hcHAoeyBzdGF0ZSwgdmlldywgYWN0aW9ucyB9KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICB2YXIgc3RhdGUgPSB7fVxuICB2YXIgdmlldyA9IGFwcC52aWV3XG4gIHZhciBhY3Rpb25zID0ge31cbiAgdmFyIGV2ZW50cyA9IHt9XG4gIHZhciBub2RlXG4gIHZhciBlbGVtZW50XG5cbiAgZm9yICh2YXIgaSA9IC0xLCBwbHVnaW5zID0gYXBwLnBsdWdpbnMgfHwgW107IGkgPCBwbHVnaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbaV0gPyBwbHVnaW5zW2ldKGFwcCkgOiBhcHBcblxuICAgIGlmIChwbHVnaW4uc3RhdGUgIT0gbnVsbCkge1xuICAgICAgc3RhdGUgPSBtZXJnZShzdGF0ZSwgcGx1Z2luLnN0YXRlKVxuICAgIH1cblxuICAgIGluaXQoYWN0aW9ucywgcGx1Z2luLmFjdGlvbnMpXG5cbiAgICBPYmplY3Qua2V5cyhwbHVnaW4uZXZlbnRzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgZXZlbnRzW2tleV0gPSAoZXZlbnRzW2tleV0gfHwgW10pLmNvbmNhdChwbHVnaW4uZXZlbnRzW2tleV0pXG4gICAgfSlcbiAgfVxuXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlWzBdICE9PSBcImxcIikge1xuICAgIGxvYWQoKVxuICB9IGVsc2Uge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWQpXG4gIH1cblxuICBmdW5jdGlvbiBpbml0KG5hbWVzcGFjZSwgY2hpbGRyZW4sIGxhc3ROYW1lKSB7XG4gICAgT2JqZWN0LmtleXMoY2hpbGRyZW4gfHwgW10pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgYWN0aW9uID0gY2hpbGRyZW5ba2V5XVxuICAgICAgdmFyIG5hbWUgPSBsYXN0TmFtZSA/IGxhc3ROYW1lICsgXCIuXCIgKyBrZXkgOiBrZXlcblxuICAgICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IGFjdGlvbihzdGF0ZSwgZW1pdChcImFjdGlvblwiLCB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH0pLmRhdGEsIGFjdGlvbnMsIGVtaXQpXG5cbiAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgfHwgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW5kZXIoc3RhdGUgPSBtZXJnZShzdGF0ZSwgZW1pdChcInVwZGF0ZVwiLCByZXN1bHQpKSwgdmlldylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5pdChuYW1lc3BhY2Vba2V5XSB8fCAobmFtZXNwYWNlW2tleV0gPSB7fSksIGFjdGlvbiwgbmFtZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gbG9hZCgpIHtcbiAgICByZW5kZXIoc3RhdGUsIHZpZXcpXG4gICAgZW1pdChcImxvYWRlZFwiLCBlbWl0KVxuICB9XG5cbiAgZnVuY3Rpb24gZW1pdChuYW1lLCBkYXRhKSB7XG4gICAgKGV2ZW50c1tuYW1lXSB8fCBbXSkubWFwKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIHJlc3VsdCA9IGNiKHN0YXRlLCBhY3Rpb25zLCBkYXRhLCBlbWl0KVxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEgPSByZXN1bHRcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlcihzdGF0ZSwgdmlldykge1xuICAgIGVsZW1lbnQgPSBwYXRjaChcbiAgICAgIGFwcC5yb290IHx8IChhcHAucm9vdCA9IGRvY3VtZW50LmJvZHkpLFxuICAgICAgZWxlbWVudCxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlID0gZW1pdChcInJlbmRlclwiLCB2aWV3KShzdGF0ZSwgYWN0aW9ucylcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZShhLCBiKSB7XG4gICAgdmFyIG9iaiA9IHt9XG5cbiAgICBpZiAodHlwZW9mIGIgIT09IFwib2JqZWN0XCIgfHwgQXJyYXkuaXNBcnJheShiKSkge1xuICAgICAgcmV0dXJuIGJcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpIGluIGEpIHtcbiAgICAgIG9ialtpXSA9IGFbaV1cbiAgICB9XG4gICAgZm9yICh2YXIgaSBpbiBiKSB7XG4gICAgICBvYmpbaV0gPSBiW2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIG9ialxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudEZyb20obm9kZSwgaXNTVkcpIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobm9kZSlcblxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgZWxlbWVudCA9IChpc1NWRyA9IGlzU1ZHIHx8IG5vZGUudGFnID09PSBcInN2Z1wiKVxuICAgICAgICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIG5vZGUudGFnKVxuICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcpXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudEZyb20obm9kZS5jaGlsZHJlbltpKytdLCBpc1NWRykpXG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbm9kZS5kYXRhKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcIm9uQ3JlYXRlXCIpIHtcbiAgICAgICAgICBub2RlLmRhdGFbbmFtZV0oZWxlbWVudClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFbGVtZW50RGF0YShlbGVtZW50LCBuYW1lLCBub2RlLmRhdGFbbmFtZV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RWxlbWVudERhdGEoZWxlbWVudCwgbmFtZSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKG5hbWUgPT09IFwia2V5XCIpIHtcbiAgICB9IGVsc2UgaWYgKChuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpKSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICBmb3IgKHZhciBpIGluIG1lcmdlKG9sZFZhbHVlLCB2YWx1ZSA9IHZhbHVlIHx8IHt9KSkge1xuICAgICAgICBlbGVtZW50LnN0eWxlW2ldID0gdmFsdWVbaV0gfHwgXCJcIlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBlbGVtZW50W25hbWVdID0gdmFsdWVcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFbGVtZW50RGF0YShlbGVtZW50LCBvbGREYXRhLCBkYXRhKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBtZXJnZShvbGREYXRhLCBkYXRhKSkge1xuICAgICAgdmFyIHZhbHVlID0gZGF0YVtuYW1lXVxuICAgICAgdmFyIG9sZFZhbHVlID0gb2xkRGF0YVtuYW1lXVxuXG4gICAgICBpZiAobmFtZSA9PT0gXCJvblVwZGF0ZVwiKSB7XG4gICAgICAgIHZhbHVlKGVsZW1lbnQpXG5cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG9sZFZhbHVlIHx8IHZhbHVlICE9PSBlbGVtZW50W25hbWVdKSB7XG4gICAgICAgIHNldEVsZW1lbnREYXRhKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBvbGRWYWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRLZXlGcm9tKG5vZGUpIHtcbiAgICBpZiAobm9kZSAmJiAobm9kZSA9IG5vZGUuZGF0YSkpIHtcbiAgICAgIHJldHVybiBub2RlLmtleVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQocGFyZW50LCBlbGVtZW50LCBub2RlKSB7XG4gICAgaWYgKG5vZGUuZGF0YS5vblJlbW92ZSkge1xuICAgICAgbm9kZS5kYXRhLm9uUmVtb3ZlKGVsZW1lbnQpXG4gICAgfVxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICB9XG5cbiAgZnVuY3Rpb24gcGF0Y2gocGFyZW50LCBlbGVtZW50LCBvbGROb2RlLCBub2RlKSB7XG4gICAgaWYgKG9sZE5vZGUgPT0gbnVsbCkge1xuICAgICAgZWxlbWVudCA9IHBhcmVudC5pbnNlcnRCZWZvcmUoY3JlYXRlRWxlbWVudEZyb20obm9kZSksIGVsZW1lbnQpXG5cbiAgICB9IGVsc2UgaWYgKG5vZGUudGFnICYmIG5vZGUudGFnID09PSBvbGROb2RlLnRhZykge1xuICAgICAgdXBkYXRlRWxlbWVudERhdGEoZWxlbWVudCwgb2xkTm9kZS5kYXRhLCBub2RlLmRhdGEpXG5cbiAgICAgIHZhciBsZW4gPSBub2RlLmNoaWxkcmVuLmxlbmd0aFxuICAgICAgdmFyIG9sZExlbiA9IG9sZE5vZGUuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICB2YXIgcmV1c2FibGVDaGlsZHJlbiA9IHt9XG4gICAgICB2YXIgb2xkRWxlbWVudHMgPSBbXVxuICAgICAgdmFyIG5ld0tleXMgPSB7fVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9sZExlbjsgaSsrKSB7XG4gICAgICAgIHZhciBvbGRFbGVtZW50ID0gZWxlbWVudC5jaGlsZE5vZGVzW2ldXG4gICAgICAgIG9sZEVsZW1lbnRzW2ldID0gb2xkRWxlbWVudFxuXG4gICAgICAgIHZhciBvbGRDaGlsZCA9IG9sZE5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgdmFyIG9sZEtleSA9IGdldEtleUZyb20ob2xkQ2hpbGQpXG5cbiAgICAgICAgaWYgKG51bGwgIT0gb2xkS2V5KSB7XG4gICAgICAgICAgcmV1c2FibGVDaGlsZHJlbltvbGRLZXldID0gW29sZEVsZW1lbnQsIG9sZENoaWxkXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpID0gMFxuICAgICAgdmFyIGogPSAwXG5cbiAgICAgIHdoaWxlIChqIDwgbGVuKSB7XG4gICAgICAgIHZhciBvbGRFbGVtZW50ID0gb2xkRWxlbWVudHNbaV1cbiAgICAgICAgdmFyIG9sZENoaWxkID0gb2xkTm9kZS5jaGlsZHJlbltpXVxuICAgICAgICB2YXIgbmV3Q2hpbGQgPSBub2RlLmNoaWxkcmVuW2pdXG5cbiAgICAgICAgdmFyIG9sZEtleSA9IGdldEtleUZyb20ob2xkQ2hpbGQpXG4gICAgICAgIGlmIChuZXdLZXlzW29sZEtleV0pIHtcbiAgICAgICAgICBpKytcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5ld0tleSA9IGdldEtleUZyb20obmV3Q2hpbGQpXG5cbiAgICAgICAgdmFyIHJldXNhYmxlQ2hpbGQgPSByZXVzYWJsZUNoaWxkcmVuW25ld0tleV1cbiAgICAgICAgdmFyIHJldXNhYmxlRWxlbWVudCA9IDBcbiAgICAgICAgdmFyIHJldXNhYmxlTm9kZSA9IDBcblxuICAgICAgICBpZiAocmV1c2FibGVDaGlsZCkge1xuICAgICAgICAgIHJldXNhYmxlRWxlbWVudCA9IHJldXNhYmxlQ2hpbGRbMF1cbiAgICAgICAgICByZXVzYWJsZU5vZGUgPSByZXVzYWJsZUNoaWxkWzFdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVsbCA9PSBvbGRLZXkgJiYgbnVsbCA9PSBuZXdLZXkpIHtcbiAgICAgICAgICBwYXRjaChlbGVtZW50LCBvbGRFbGVtZW50LCBvbGRDaGlsZCwgbmV3Q2hpbGQpXG4gICAgICAgICAgaisrXG4gICAgICAgICAgaSsrXG5cbiAgICAgICAgfSBlbHNlIGlmIChudWxsID09IG9sZEtleSAmJiBudWxsICE9IG5ld0tleSkge1xuICAgICAgICAgIGlmIChyZXVzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJldXNhYmxlRWxlbWVudCwgb2xkRWxlbWVudClcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIHJldXNhYmxlRWxlbWVudCwgcmV1c2FibGVOb2RlLCBuZXdDaGlsZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0Y2goZWxlbWVudCwgb2xkRWxlbWVudCwgbnVsbCwgbmV3Q2hpbGQpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaisrXG4gICAgICAgICAgbmV3S2V5c1tuZXdLZXldID0gbmV3Q2hpbGRcblxuICAgICAgICB9IGVsc2UgaWYgKG51bGwgIT0gb2xkS2V5ICYmIG51bGwgPT0gbmV3S2V5KSB7XG4gICAgICAgICAgaSsrXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob2xkS2V5ID09PSBuZXdLZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIHJldXNhYmxlRWxlbWVudCwgcmV1c2FibGVOb2RlLCBuZXdDaGlsZClcbiAgICAgICAgICAgIGkrK1xuXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXVzYWJsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKHJldXNhYmxlRWxlbWVudCwgb2xkRWxlbWVudClcbiAgICAgICAgICAgIHBhdGNoKGVsZW1lbnQsIHJldXNhYmxlRWxlbWVudCwgcmV1c2FibGVOb2RlLCBuZXdDaGlsZClcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRjaChlbGVtZW50LCBvbGRFbGVtZW50LCBudWxsLCBuZXdDaGlsZClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqKytcbiAgICAgICAgICBuZXdLZXlzW25ld0tleV0gPSBuZXdDaGlsZFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChpIDwgb2xkTGVuKSB7XG4gICAgICAgIHZhciBvbGRDaGlsZCA9IG9sZE5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgdmFyIG9sZEtleSA9IGdldEtleUZyb20ob2xkQ2hpbGQpXG4gICAgICAgIGlmIChudWxsID09IG9sZEtleSkge1xuICAgICAgICAgIHJlbW92ZUVsZW1lbnQoZWxlbWVudCwgb2xkRWxlbWVudHNbaV0sIG9sZENoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGkrK1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpIGluIHJldXNhYmxlQ2hpbGRyZW4pIHtcbiAgICAgICAgdmFyIHJldXNhYmxlQ2hpbGQgPSByZXVzYWJsZUNoaWxkcmVuW2ldXG4gICAgICAgIHZhciByZXVzYWJsZU5vZGUgPSByZXVzYWJsZUNoaWxkWzFdXG4gICAgICAgIGlmICghbmV3S2V5c1tyZXVzYWJsZU5vZGUuZGF0YS5rZXldKSB7XG4gICAgICAgICAgcmVtb3ZlRWxlbWVudChlbGVtZW50LCByZXVzYWJsZUNoaWxkWzBdLCByZXVzYWJsZU5vZGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUgIT09IG9sZE5vZGUpIHtcbiAgICAgIHZhciBpID0gZWxlbWVudFxuICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbGVtZW50ID0gY3JlYXRlRWxlbWVudEZyb20obm9kZSksIGkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwZXJhcHAvc3JjL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG4gIHZhciBub2RlXG4gIHZhciBjYW5Db25jYXRcbiAgdmFyIG9sZENhbkNvbmNhdFxuXG4gIHZhciBzdGFjayA9IFtdXG4gIHZhciBjaGlsZHJlbiA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGg7IGktLSA+IDI7KSB7XG4gICAgc3RhY2sucHVzaChhcmd1bWVudHNbaV0pXG4gIH1cblxuICB3aGlsZSAoc3RhY2subGVuZ3RoKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSA9IHN0YWNrLnBvcCgpKSkge1xuICAgICAgaSA9IG5vZGUubGVuZ3RoXG5cbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgc3RhY2sucHVzaChub2RlW2ldKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSAhPSBudWxsICYmIG5vZGUgIT09IHRydWUgJiYgbm9kZSAhPT0gZmFsc2UpIHtcbiAgICAgIGkgPSBjaGlsZHJlbi5sZW5ndGhcblxuICAgICAgaWYgKHR5cGVvZiBub2RlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIG5vZGUgPSBub2RlICsgXCJcIlxuICAgICAgfVxuXG4gICAgICBjYW5Db25jYXQgPSB0eXBlb2Ygbm9kZSA9PT0gXCJzdHJpbmdcIlxuXG4gICAgICBpZiAoY2FuQ29uY2F0ICYmIG9sZENhbkNvbmNhdCkge1xuICAgICAgICBjaGlsZHJlbltpIC0gMV0gKz0gbm9kZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGRyZW5baV0gPSBub2RlXG4gICAgICAgIG9sZENhbkNvbmNhdCA9IGNhbkNvbmNhdFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgdGFnID09PSBcInN0cmluZ1wiXG4gICAgPyB7XG4gICAgICB0YWc6IHRhZyxcbiAgICAgIGRhdGE6IGRhdGEgfHwge30sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XG4gICAgOiB0YWcoZGF0YSwgY2hpbGRyZW4pXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaHlwZXJhcHAvc3JjL2guanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFwcCkge1xuICByZXR1cm4ge1xuICAgIGFjdGlvbnM6IHtcbiAgICAgIHJvdXRlcjoge1xuICAgICAgICBtYXRjaDogZnVuY3Rpb24gKHN0YXRlLCBkYXRhLCBhY3Rpb25zLCBlbWl0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvdXRlcjogbWF0Y2goZGF0YSwgZW1pdClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdvOiBmdW5jdGlvbiAoc3RhdGUsIGRhdGEsIGFjdGlvbnMpIHtcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgXCJcIiwgZGF0YSlcbiAgICAgICAgICBhY3Rpb25zLnJvdXRlci5tYXRjaChkYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBldmVudHM6IHtcbiAgICAgIGxvYWRlZDogZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb25zKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYWN0aW9ucy5yb3V0ZXIubWF0Y2gobG9jYXRpb24ucGF0aG5hbWUpXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoc3RhdGUsIGFjdGlvbnMsIHZpZXcsIGVtaXQpIHtcbiAgICAgICAgcmV0dXJuIHZpZXdbKHN0YXRlLnJvdXRlciB8fCAoXG4gICAgICAgICAgc3RhdGUucm91dGVyID0gbWF0Y2gobG9jYXRpb24ucGF0aG5hbWUsIGVtaXQpKSkubWF0Y2hdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2goZGF0YSwgZW1pdCkge1xuICAgIHZhciBtYXRjaFxuICAgIHZhciBwYXJhbXMgPSB7fVxuXG4gICAgZm9yICh2YXIgcm91dGUgaW4gYXBwLnZpZXcpIHtcbiAgICAgIHZhciBrZXlzID0gW11cblxuICAgICAgaWYgKCFtYXRjaCAmJiByb3V0ZSAhPT0gXCIqXCIpIHtcbiAgICAgICAgZGF0YS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIgKyByb3V0ZVxuICAgICAgICAgIC5yZXBsYWNlKC9cXC8vZywgXCJcXFxcL1wiKVxuICAgICAgICAgIC5yZXBsYWNlKC86KFtBLVphLXowLTlfXSspL2csIGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrZXkpXG5cbiAgICAgICAgICAgIHJldHVybiBcIihbLUEtWmEtejAtOV9dKylcIlxuICAgICAgICAgIH0pICsgXCIvPyRcIiwgXCJnXCIpLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7KSB7XG4gICAgICAgICAgICAgIHBhcmFtc1trZXlzLnNoaWZ0KCldID0gYXJndW1lbnRzW2krK11cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2ggPSByb3V0ZVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVtaXQoXCJyb3V0ZVwiLCB7XG4gICAgICBtYXRjaDogbWF0Y2ggfHwgXCIqXCIsXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0pXG4gIH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2h5cGVyYXBwL3NyYy9yb3V0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==