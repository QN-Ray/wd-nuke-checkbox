// {"framework" : "Rax"}
define("docs/basic", function(require) {/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _index = __webpack_require__(16);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(15);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(38);

	var _index6 = _interopRequireDefault(_index5);

	var _wdNukeCheckbox = __webpack_require__(33);

	var _wdNukeCheckbox2 = _interopRequireDefault(_wdNukeCheckbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	/** @jsx createElement */


	var App = function (_Component) {
	    _inherits(NukeDemoIndex, _Component);

	    function NukeDemoIndex() {
	        _classCallCheck(this, NukeDemoIndex);

	        var _this = _possibleConstructorReturn(this, (NukeDemoIndex.__proto__ || Object.getPrototypeOf(NukeDemoIndex)).call(this));

	        _this.state = {
	            checked: true,
	            checked2: true,
	            checked3: 'indeterminate'
	        };
	        return _this;
	    }

	    _createClass(NukeDemoIndex, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return (0, _rax.createElement)(
	                _index6.default,
	                { title: '\u65FA\u5E97CheckBox' },
	                (0, _rax.createElement)(_index6.default.Intro, { main: '\u57FA\u7840\u4F7F\u7528' }),
	                (0, _rax.createElement)(
	                    _index2.default,
	                    { style: [styles.wrapMargin, styles.wrapRow] },
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'medium', style: styles.ml24, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'large', style: styles.ml24, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } })
	                ),
	                (0, _rax.createElement)(_index6.default.Intro, { main: 'disabled' }),
	                (0, _rax.createElement)(
	                    _index2.default,
	                    { style: [styles.wrapMargin, styles.wrapRow] },
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { checked: this.state.checked2, disabled: true }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'medium', style: styles.ml24, checked: this.state.checked2, disabled: true }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'large', style: styles.ml24, checked: this.state.checked2, disabled: true })
	                ),
	                (0, _rax.createElement)(_index6.default.Intro, { main: '\u4E2D\u95F4\u72B6\u6001' }),
	                (0, _rax.createElement)(
	                    _index2.default,
	                    { style: [styles.wrapMargin, styles.wrapRow] },
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { checked: this.state.checked3 }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'medium', style: styles.ml24, checked: this.state.checked3 }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'large', style: styles.ml24, checked: this.state.checked3 })
	                ),
	                (0, _rax.createElement)(_index6.default.Intro, { main: '\u8BBE\u7F6E\u989C\u8272' }),
	                (0, _rax.createElement)(
	                    _index2.default,
	                    { style: [styles.wrapMargin, styles.wrapRow] },
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { activeStyle: { backgroundColor: '#ff0000' }, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'medium', style: styles.ml24, activeStyle: { backgroundColor: '#00ff00' }, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'large', style: styles.ml24, activeStyle: { backgroundColor: '#ffff00' }, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } })
	                ),
	                (0, _rax.createElement)(_index6.default.Intro, { main: '\u6B63\u65B9\u5F62' }),
	                (0, _rax.createElement)(
	                    _index2.default,
	                    { style: [styles.wrapMargin, styles.wrapRow] },
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { rect: true, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'medium', style: styles.ml24, rect: true, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } }),
	                    (0, _rax.createElement)(_wdNukeCheckbox2.default, { size: 'large', style: styles.ml24, rect: true, checked: this.state.checked, onPress: function onPress() {
	                            _this2.setState({ checked: !_this2.state.checked });
	                        } })
	                )
	            );
	        }
	    }]);

	    return NukeDemoIndex;
	}(_rax.Component);
	var styles = {
	    btnWithMargin: {
	        marginTop: '30rem',
	        marginBottom: '50rem',
	        marginLeft: '42rem',
	        marginRight: '42rem'
	    },
	    wrapMargin: {
	        marginTop: '24rem',
	        marginBottom: '24rem',
	        marginLeft: '42rem',
	        marginRight: '42rem'
	    },
	    btnLine: {
	        marginTop: '30rem',
	        marginBottom: '50rem',
	        paddingLeft: '42rem',
	        paddingRight: '42rem' //#1170bc;
	    },
	    wrapRow: {
	        flexDirection: 'row'
	    },
	    ml24: {
	        marginLeft: '24rem'
	    }
	};
	(0, _rax.render)((0, _rax.createElement)(App, null));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.version = exports.setNativeProps = exports.findComponentInstance = exports.unmountComponentAtNode = exports.findDOMNode = exports.render = exports.PropTypes = exports.PureComponent = exports.Component = exports.createFactory = exports.isValidElement = exports.cloneElement = exports.createElement = undefined;

	var _element = __webpack_require__(23);

	Object.defineProperty(exports, 'createElement', {
	  enumerable: true,
	  get: function get() {
	    return _element.createElement;
	  }
	});
	Object.defineProperty(exports, 'cloneElement', {
	  enumerable: true,
	  get: function get() {
	    return _element.cloneElement;
	  }
	});
	Object.defineProperty(exports, 'isValidElement', {
	  enumerable: true,
	  get: function get() {
	    return _element.isValidElement;
	  }
	});
	Object.defineProperty(exports, 'createFactory', {
	  enumerable: true,
	  get: function get() {
	    return _element.createFactory;
	  }
	});

	__webpack_require__(61);

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	var _purecomponent = __webpack_require__(67);

	var _purecomponent2 = _interopRequireDefault(_purecomponent);

	var _proptypes = __webpack_require__(66);

	var _proptypes2 = _interopRequireDefault(_proptypes);

	var _render2 = __webpack_require__(68);

	var _render3 = _interopRequireDefault(_render2);

	var _findDOMNode2 = __webpack_require__(24);

	var _findDOMNode3 = _interopRequireDefault(_findDOMNode2);

	var _unmountComponentAtNode2 = __webpack_require__(26);

	var _unmountComponentAtNode3 = _interopRequireDefault(_unmountComponentAtNode2);

	var _findComponentInstance2 = __webpack_require__(64);

	var _findComponentInstance3 = _interopRequireDefault(_findComponentInstance2);

	var _setNativeProps2 = __webpack_require__(25);

	var _setNativeProps3 = _interopRequireDefault(_setNativeProps2);

	var _version2 = __webpack_require__(78);

	var _version3 = _interopRequireDefault(_version2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.Component = _component2.default;
	exports.PureComponent = _purecomponent2.default;
	exports.PropTypes = _proptypes2.default;
	exports.render = _render3.default;
	exports.findDOMNode = _findDOMNode3.default;
	exports.unmountComponentAtNode = _unmountComponentAtNode3.default;
	exports.findComponentInstance = _findComponentInstance3.default;
	exports.setNativeProps = _setNativeProps3.default;
	exports.version = _version3.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Stateful things in runtime
	 */
	exports.default = {
	  component: null,
	  mountID: 1,
	  sandbox: true,
	  // Roots
	  rootComponents: {},
	  rootInstances: {},
	  // Inject
	  hook: null,
	  driver: null,
	  monitor: null
	};
	module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) {
	    return [];
	};

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _nukeVars = __webpack_require__(59);

	var _nukeVars2 = _interopRequireDefault(_nukeVars);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	_nukeVars2.default._nuke_custom_vars = _nukeVars2.default._nuke_custom_vars || {};

	module.exports = {
	    varsLoader: function varsLoader(config) {
	        return _extends(config, _nukeVars2.default._nuke_custom_vars);
	    },
	    varLoader: function varLoader(key, value) {
	        if (key in _nukeVars2.default._nuke_custom_vars) {
	            return _nukeVars2.default._nuke_custom_vars[key];
	        };
	        return value;
	    },
	    setVars: function setVars(config) {
	        _extends(_nukeVars2.default._nuke_custom_vars, config);
	    },
	    setVar: function setVar(key, value) {
	        _nukeVars2.default._nuke_custom_vars[key] = value;
	    },
	    getVar: function getVar(key) {
	        return _nukeVars2.default._nuke_custom_vars[key];
	    },
	    androidVar: function androidVar(config) {
	        var style = {};
	        for (var i in config) {
	            style['android-' + i] = config[i];
	        }
	        return varLoader(style);
	    },
	    iosVar: function iosVar(config) {
	        var style = {};
	        for (var i in config) {
	            style['ios-' + i] = config[i];
	        }
	        return varLoader(style);
	    }
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _raxView = __webpack_require__(14);

	var _raxView2 = _interopRequireDefault(_raxView);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _raxView2.default;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _element = __webpack_require__(23);

	var _unmountComponentAtNode = __webpack_require__(26);

	var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

	var _instantiateComponent = __webpack_require__(9);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _shouldUpdateComponent = __webpack_require__(12);

	var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

	var _root = __webpack_require__(73);

	var _root2 = _interopRequireDefault(_root);

	var _universalEnv = __webpack_require__(13);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	/**
	 * Instance manager
	 */
	var KEY = '$$instance';

	exports.default = {
	  set: function set(node, instance) {
	    if (!node[KEY]) {
	      node[KEY] = instance;
	      // Record root instance to roots map
	      if (instance.rootID) {
	        _host2.default.rootInstances[instance.rootID] = instance;
	        _host2.default.rootComponents[instance.rootID] = instance._internal;
	      }
	    }
	  },
	  get: function get(node) {
	    return node[KEY];
	  },
	  remove: function remove(node) {
	    var instance = this.get(node);
	    if (instance) {
	      node[KEY] = null;
	      if (instance.rootID) {
	        delete _host2.default.rootComponents[instance.rootID];
	        delete _host2.default.rootInstances[instance.rootID];
	      }
	    }
	  },
	  render: function render(element, container) {
	    if (process.env.NODE_ENV !== 'production') {
	      _host2.default.measurer && _host2.default.measurer.beforeRender();
	    }

	    // Before render callback
	    _host2.default.driver.beforeRender && _host2.default.driver.beforeRender();

	    // Real native root node is body
	    if (container == null) {
	      container = _host2.default.driver.createBody();
	    }

	    var prevRootInstance = this.get(container);
	    var hasPrevRootInstance = prevRootInstance && prevRootInstance.isRootComponent;

	    if (hasPrevRootInstance) {
	      var prevRenderedComponent = prevRootInstance.getRenderedComponent();
	      var prevElement = prevRenderedComponent._currentElement;
	      if ((0, _shouldUpdateComponent2.default)(prevElement, element)) {
	        var prevUnmaskedContext = prevRenderedComponent._context;
	        prevRenderedComponent.updateComponent(prevElement, element, prevUnmaskedContext, prevUnmaskedContext);

	        return prevRootInstance;
	      } else {
	        _host2.default.hook.Reconciler.unmountComponent(prevRootInstance);
	        (0, _unmountComponentAtNode2.default)(container);
	      }
	    }

	    // Handle server rendered element
	    if (_universalEnv.isWeb && container.childNodes) {
	      // Clone childNodes, Because removeChild will causing change in childNodes length
	      var childNodes = [].concat(_toConsumableArray(container.childNodes));

	      for (var i = 0; i < childNodes.length; i++) {
	        var rootChildNode = childNodes[i];
	        if (rootChildNode.hasAttribute && rootChildNode.hasAttribute('data-rendered')) {
	          _host2.default.driver.removeChild(rootChildNode, container);
	        }
	      }
	    }

	    var wrappedElement = (0, _element.createElement)(_root2.default, null, element);
	    var renderedComponent = (0, _instantiateComponent2.default)(wrappedElement);
	    var defaultContext = {};
	    var rootInstance = renderedComponent.mountComponent(container, defaultContext);
	    this.set(container, rootInstance);

	    // After render callback
	    _host2.default.driver.afterRender && _host2.default.driver.afterRender(rootInstance);

	    // Devtool render new root hook
	    _host2.default.hook.Mount._renderNewRootComponent(rootInstance._internal);

	    if (process.env.NODE_ENV !== 'production') {
	      _host2.default.measurer && _host2.default.measurer.afterRender();
	    }

	    return rootInstance;
	  }
	};
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _universalEnv = __webpack_require__(34);

	var _ua = __webpack_require__(48);

	var _ua2 = _interopRequireDefault(_ua);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var nukeEnv = {
	    isWeb: _universalEnv.isWeb,
	    isNode: _universalEnv.isNode,
	    isWeex: _universalEnv.isWeex,
	    isReactNative: _universalEnv.isReactNative
	};

	var isQNWeb = false,
	    isQNWeex = false,
	    appInfo = "",
	    params = {},
	    runtimeInfo = {};

	if (_universalEnv.isWeex) {
	    var WeexEnv = typeof window !== 'undefined' && window.hasOwnProperty('__weex_env__') ? _extends({}, window.__weex_env__) : _extends({}, WXEnvironment);
	    isQNWeb = false;
	    isQNWeex = WeexEnv.appName === 'QN';
	    appInfo = _extends({}, WeexEnv);
	    params = typeof __weex_data__ !== 'undefined' ? __weex_data__ : {};
	    runtimeInfo = typeof __weex_options__ !== 'undefined' ? __weex_options__ : {};
	} else {
	    isQNWeex = false;
	    appInfo = (0, _ua2.default)();
	    isQNWeb = appInfo.appName === 'QN';
	    if (location.search) {
	        var searchString = location.search.substring(1),
	            i,
	            val,
	            paramsArr = searchString.split("&");
	        for (i = 0; i < paramsArr.length; i++) {
	            val = paramsArr[i].split("=");
	            params[val[0]] = decodeURIComponent(val[1]);
	        }
	    }
	}
	nukeEnv.isQNWeb = isQNWeb;
	nukeEnv.isQNWeex = isQNWeex;
	nukeEnv.appInfo = appInfo;
	nukeEnv.params = params;
	nukeEnv.runtimeInfo = runtimeInfo;
	exports.default = nukeEnv;
	module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _raxText = __webpack_require__(36);

	var _raxText2 = _interopRequireDefault(_raxText);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Text = function (_Component) {
	    _inherits(Text, _Component);

	    function Text(props) {
	        _classCallCheck(this, Text);

	        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, props));
	    }

	    _createClass(Text, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                _props$encrypt = _props.encrypt,
	                encrypt = _props$encrypt === undefined ? false : _props$encrypt,
	                encryptFormat = _props.encryptFormat,
	                searchEncryptFormat = _props.searchEncryptFormat,
	                encryptSeckeyType = _props.encryptSeckeyType,
	                onPress = _props.onPress,
	                onClick = _props.onClick;

	            var encryptAttrs = {
	                encrypt: encrypt,
	                encryptFormat: encryptFormat,
	                searchEncryptFormat: searchEncryptFormat,
	                encryptSeckeyType: encryptSeckeyType
	            };
	            return _rax.createElement(_raxText2.default, _extends({}, this.props, encryptAttrs, { onClick: onPress || onClick }));
	        }
	    }]);

	    return Text;
	}(_rax.Component);

	exports.default = Text;
	module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function instantiateComponent(element) {
	  var instance = void 0;

	  if (element === undefined || element === null || element === false || element === true) {
	    instance = new _host2.default.EmptyComponent();
	  } else if (Array.isArray(element)) {
	    instance = new _host2.default.FragmentComponent(element);
	  } else if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.type) {
	    // Special case string values
	    if (typeof element.type === 'string') {
	      instance = new _host2.default.NativeComponent(element);
	    } else {
	      instance = new _host2.default.CompositeComponent(element);
	    }
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    instance = new _host2.default.TextComponent(element);
	  } else {
	    throw Error('Invalid element type ' + JSON.stringify(element));
	  }

	  instance._mountIndex = 0;

	  return instance;
	}

	exports.default = instantiateComponent;
	module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	var isWeex = exports.isWeex = typeof callNative === 'function';
	var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Base component class.
	 */
	var Component = function () {
	  function Component(props, context, updater) {
	    _classCallCheck(this, Component);

	    this.props = props;
	    this.context = context;
	    this.refs = {};
	    this.updater = updater;
	  }

	  _createClass(Component, [{
	    key: "isComponentClass",
	    value: function isComponentClass() {}
	  }, {
	    key: "setState",
	    value: function setState(partialState, callback) {
	      this.updater.setState(this, partialState, callback);
	    }
	  }, {
	    key: "forceUpdate",
	    value: function forceUpdate(callback) {
	      this.updater.forceUpdate(this, callback);
	    }
	  }]);

	  return Component;
	}();

	exports.default = Component;
	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	function shouldUpdateComponent(prevElement, nextElement) {
	  // TODO: prevElement and nextElement could be array
	  var prevEmpty = prevElement === null;
	  var nextEmpty = nextElement === null;
	  if (prevEmpty || nextEmpty) {
	    return prevEmpty === nextEmpty;
	  }

	  var prevType = typeof prevElement === 'undefined' ? 'undefined' : _typeof(prevElement);
	  var nextType = typeof nextElement === 'undefined' ? 'undefined' : _typeof(nextElement);
	  if (prevType === 'string' || prevType === 'number') {
	    return nextType === 'string' || nextType === 'number';
	  } else {
	    return prevType === 'object' && nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
	  }
	}

	exports.default = shouldUpdateComponent;
	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	var isWeex = exports.isWeex = typeof callNative === 'function';
	var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var View = (_temp = _class = function (_Component) {
	  _inherits(View, _Component);

	  function View() {
	    _classCallCheck(this, View);

	    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
	  }

	  _createClass(View, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      if (_universalEnv.isWeex) {
	        // TODO: do not pass object value in props
	        return (0, _rax.createElement)('div', props);
	      } else {
	        var styleProps = _extends({}, styles.initial, props.style);
	        return (0, _rax.createElement)('div', _extends({}, props, { style: styleProps }));
	      }
	    }
	  }]);

	  return View;
	}(_rax.Component), _class.propTypes = {}, _temp);

	var styles = {
	  initial: {
	    border: '0 solid black',
	    position: 'relative',
	    boxSizing: 'border-box',
	    display: 'flex',
	    flexDirection: 'column',
	    alignContent: 'flex-start',
	    flexShrink: 0
	  }
	};

	exports.default = View;
	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(5);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	////
	/// @group Variables 变量
	/// @module color: 颜色
	/// @type Color
	/// @category style
	////


	/// B1
	/// 可用变量: `$color-b1-1 - $color-b1-10`

	/// B1-1
	/// @export
	var colorB11 = (0, _nukeVarLoader.varLoader)('color-b1-1', '#e4f0fd');
	/// B1-2
	var colorB12 = (0, _nukeVarLoader.varLoader)('color-b1-2', '#ffe3d1');
	/// B1-3
	var colorB13 = (0, _nukeVarLoader.varLoader)('color-b1-3', '#ffc8a3');
	/// B1-4
	var colorB14 = (0, _nukeVarLoader.varLoader)('color-b1-4', '#ffac75');
	/// B1-5
	var colorB15 = (0, _nukeVarLoader.varLoader)('color-b1-5', '#ff8b3d');
	/// B1-6
	/// @export
	var colorB16 = (0, _nukeVarLoader.varLoader)('color-b1-6', '#3089dc');
	/// B1-7
	var colorB17 = (0, _nukeVarLoader.varLoader)('color-b1-7', '#f75f00');
	/// B1-8
	var colorB18 = (0, _nukeVarLoader.varLoader)('color-b1-8', '#f05800');
	/// B1-9
	/// @export
	var colorB19 = (0, _nukeVarLoader.varLoader)('color-b1-9', '#1170bc');
	/// B1-10
	var colorB110 = (0, _nukeVarLoader.varLoader)('color-b1-10', '#d64f00');

	/// B2
	/// 可用变量: `$color-b2-1 - $color-b2-10`

	/// B2-1
	/// @export
	var colorB21 = (0, _nukeVarLoader.varLoader)('color-b2-1', '#e8f6ff');
	/// B2-2
	/// @export
	var colorB22 = (0, _nukeVarLoader.varLoader)('color-b2-2', '#d3e9f7');
	/// B2-3
	/// @export
	var colorB23 = (0, _nukeVarLoader.varLoader)('color-b2-3', '#a6d3f0');
	/// B2-4
	var colorB24 = (0, _nukeVarLoader.varLoader)('color-b2-4', '#7abee8');
	/// B2-5
	var colorB25 = (0, _nukeVarLoader.varLoader)('color-b2-5', '#4da8e1');
	/// B2-6
	/// @export
	var colorB26 = (0, _nukeVarLoader.varLoader)('color-b2-6', '#2192d9');
	/// B2-7
	var colorB27 = (0, _nukeVarLoader.varLoader)('color-b2-7', '#1587d1');
	/// B2-8
	var colorB28 = (0, _nukeVarLoader.varLoader)('color-b2-8', '#0a7ec9');
	/// B2-9
	var colorB29 = (0, _nukeVarLoader.varLoader)('color-b2-9', '#0073bd');
	/// B2-10
	var colorB210 = (0, _nukeVarLoader.varLoader)('color-b2-10', '#006ab0');

	/// B3
	/// 可用变量: `$color-b3-1 - $color-b3-10`

	/// B3-1
	var colorB31 = (0, _nukeVarLoader.varLoader)('color-b3-1', '#ffe2db');
	/// B3-2
	var colorB32 = (0, _nukeVarLoader.varLoader)('color-b3-2', '#ffc8bf');
	/// B3-3
	var colorB33 = (0, _nukeVarLoader.varLoader)('color-b3-3', '#f7a394');
	/// B3-4
	var colorB34 = (0, _nukeVarLoader.varLoader)('color-b3-4', '#ed8472');
	/// B3-5
	var colorB35 = (0, _nukeVarLoader.varLoader)('color-b3-5', '#e3715d');
	/// B3-6
	var colorB36 = (0, _nukeVarLoader.varLoader)('color-b3-6', '#d9624e');
	/// B3-7
	var colorB37 = (0, _nukeVarLoader.varLoader)('color-b3-7', '#d15241');
	/// B3-8
	var colorB38 = (0, _nukeVarLoader.varLoader)('color-b3-8', '#c43f31');
	/// B3-9
	var colorB39 = (0, _nukeVarLoader.varLoader)('color-b3-9', '#bd3224');
	/// B3-10
	var colorB310 = (0, _nukeVarLoader.varLoader)('color-b3-10', '#b32018');

	/// B4
	/// 可用变量: `$color-b4-1 - $color-b4-10`

	/// B4-1
	var colorB41 = (0, _nukeVarLoader.varLoader)('color-b4-1', '#e7f5e5');
	/// B4-2
	var colorB42 = (0, _nukeVarLoader.varLoader)('color-b4-2', '#cdebc8');
	/// B4-3
	var colorB43 = (0, _nukeVarLoader.varLoader)('color-b4-3', '#b0dea9');
	/// B4-4
	var colorB44 = (0, _nukeVarLoader.varLoader)('color-b4-4', '#92cc86');
	/// B4-5
	var colorB45 = (0, _nukeVarLoader.varLoader)('color-b4-5', '#70b564');
	/// B4-6
	var colorB46 = (0, _nukeVarLoader.varLoader)('color-b4-6', '#55a344');
	/// B4-7
	var colorB47 = (0, _nukeVarLoader.varLoader)('color-b4-7', '#479635');
	/// B4-8
	var colorB48 = (0, _nukeVarLoader.varLoader)('color-b4-8', '#3b8f28');
	/// B4-9
	var colorB49 = (0, _nukeVarLoader.varLoader)('color-b4-9', '#358723');
	/// B4-10
	var colorB410 = (0, _nukeVarLoader.varLoader)('color-b4-10', '#257d12');

	/// B5
	/// 可用变量: `$color-b5-1 - $color-b5-10`

	/// B5-1
	var colorB51 = (0, _nukeVarLoader.varLoader)('color-b5-1', '#fef7da');
	/// B5-2
	var colorB52 = (0, _nukeVarLoader.varLoader)('color-b5-2', '#fff2c2');
	/// B5-3
	var colorB53 = (0, _nukeVarLoader.varLoader)('color-b5-3', '#fde89d');
	/// B5-4
	var colorB54 = (0, _nukeVarLoader.varLoader)('color-b5-4', '#ffe27d');
	/// B5-5
	var colorB55 = (0, _nukeVarLoader.varLoader)('color-b5-5', '#fbd653');
	/// B5-6
	var colorB56 = (0, _nukeVarLoader.varLoader)('color-b5-6', '#face32');
	/// B5-7
	var colorB57 = (0, _nukeVarLoader.varLoader)('color-b5-7', '#f7bf25');
	/// B5-8
	var colorB58 = (0, _nukeVarLoader.varLoader)('color-b5-8', '#f2b211');
	/// B5-9
	var colorB59 = (0, _nukeVarLoader.varLoader)('color-b5-9', '#eda807');
	/// B5-10
	var colorB510 = (0, _nukeVarLoader.varLoader)('color-b5-10', '#e89a00');

	/// B6
	/// 可用变量: `$color-b6-1 - $color-b6-10`

	/// B6-1
	var colorB61 = (0, _nukeVarLoader.varLoader)('color-b6-1', '#e9e6fa');
	/// B6-2
	var colorB62 = (0, _nukeVarLoader.varLoader)('color-b6-2', '#d5cff7');
	/// B6-3
	var colorB63 = (0, _nukeVarLoader.varLoader)('color-b6-3', '#b8afed');
	/// B6-4
	var colorB64 = (0, _nukeVarLoader.varLoader)('color-b6-4', '#9f94e8');
	/// B6-5
	var colorB65 = (0, _nukeVarLoader.varLoader)('color-b6-5', '#887be3');
	/// B6-6
	var colorB66 = (0, _nukeVarLoader.varLoader)('color-b6-6', '#6d5cdb');
	/// B6-7
	var colorB67 = (0, _nukeVarLoader.varLoader)('color-b6-7', '#5f4dd1');
	/// B6-8
	var colorB68 = (0, _nukeVarLoader.varLoader)('color-b6-8', '#5240c7');
	/// B6-9
	var colorB69 = (0, _nukeVarLoader.varLoader)('color-b6-9', '#4634bf');
	/// B6-10
	var colorB610 = (0, _nukeVarLoader.varLoader)('color-b6-10', '#3a27b5');

	/// B7
	/// 可用变量: `$color-b7-1 - $color-b7-10`

	/// B7-1
	var colorB71 = (0, _nukeVarLoader.varLoader)('color-b7-1', '#e3eaf7');
	/// B7-2
	var colorB72 = (0, _nukeVarLoader.varLoader)('color-b7-2', '#ccd9f0');
	/// B7-3
	var colorB73 = (0, _nukeVarLoader.varLoader)('color-b7-3', '#aabee0');
	/// B7-4
	var colorB74 = (0, _nukeVarLoader.varLoader)('color-b7-4', '#84a1d1');
	/// B7-5
	var colorB75 = (0, _nukeVarLoader.varLoader)('color-b7-5', '#6d8cc2');
	/// B7-6
	/// @export
	var colorB76 = (0, _nukeVarLoader.varLoader)('color-b7-6', '#4f74b3');
	/// B7-7
	var colorB77 = (0, _nukeVarLoader.varLoader)('color-b7-7', '#4369ab');
	/// B7-8
	var colorB78 = (0, _nukeVarLoader.varLoader)('color-b7-8', '#375ea3');
	/// B7-9
	/// @export
	var colorB79 = (0, _nukeVarLoader.varLoader)('color-b7-9', '#2d559c');
	/// B7-10
	var colorB710 = (0, _nukeVarLoader.varLoader)('color-b7-10', '#224b94');

	/// B8
	/// 可用变量: `$color-b8-1 - $color-b8-10`

	/// B8-1
	var colorB81 = (0, _nukeVarLoader.varLoader)('color-b8-1', '#ffebee');
	/// B8-2
	var colorB82 = (0, _nukeVarLoader.varLoader)('color-b8-2', '#ffd9e0');
	/// B8-3
	var colorB83 = (0, _nukeVarLoader.varLoader)('color-b8-3', '#ffc2ce');
	/// B8-4
	var colorB84 = (0, _nukeVarLoader.varLoader)('color-b8-4', '#ffa3b6');
	/// B8-5
	var colorB85 = (0, _nukeVarLoader.varLoader)('color-b8-5', '#ff89a1');
	/// B8-6
	var colorB86 = (0, _nukeVarLoader.varLoader)('color-b8-6', '#f96985');
	/// B8-7
	var colorB87 = (0, _nukeVarLoader.varLoader)('color-b8-7', '#f54e70');
	/// B8-8
	var colorB88 = (0, _nukeVarLoader.varLoader)('color-b8-8', '#ed395d');
	/// B8-9
	var colorB89 = (0, _nukeVarLoader.varLoader)('color-b8-9', '#de284c');
	/// B8-10
	var colorB810 = (0, _nukeVarLoader.varLoader)('color-b8-10', '#d1173f');

	/// 界面色
	/// 可用变量: `$color-n1-1 - $color-n1-9`

	/// N1-1
	/// @export
	var colorN11 = (0, _nukeVarLoader.varLoader)('color-n1-1', '#ffffff');
	/// N1-2
	/// @export
	var colorN12 = (0, _nukeVarLoader.varLoader)('color-n1-2', '#f7f8fa');
	/// N1-3
	/// @export
	var colorN13 = (0, _nukeVarLoader.varLoader)('color-n1-3', '#f2f3f7');
	/// N1-4
	/// @export
	var colorN14 = (0, _nukeVarLoader.varLoader)('color-n1-4', '#ebecf0');
	/// N1-5
	/// @export
	var colorN15 = (0, _nukeVarLoader.varLoader)('color-n1-5', '#e6e7eb');
	/// N1-6
	/// @export
	var colorN16 = (0, _nukeVarLoader.varLoader)('color-n1-6', '#dcdee3');
	/// N1-7
	/// @export
	var colorN17 = (0, _nukeVarLoader.varLoader)('color-n1-7', '#c4c6cf');
	/// N1-8
	/// @export
	var colorN18 = (0, _nukeVarLoader.varLoader)('color-n1-8', '#a0a2ad');
	/// N1-9
	/// @export
	var colorN19 = (0, _nukeVarLoader.varLoader)('color-n1-9', '#000000');
	/// N1-10
	var colorN110 = (0, _nukeVarLoader.varLoader)('color-n1-10', 'transparent');

	/// 文字色
	/// 可用变量: `$color-n2-1 - $color-n2-4`

	/// N2-1
	/// @export
	var colorN21 = (0, _nukeVarLoader.varLoader)('color-n2-1', '#cccccc');
	/// N2-2
	/// @export
	var colorN22 = (0, _nukeVarLoader.varLoader)('color-n2-2', '#999999');
	/// N2-3
	/// @export
	var colorN23 = (0, _nukeVarLoader.varLoader)('color-n2-3', '#5f646e');
	/// N2-4
	/// @export
	var colorN24 = (0, _nukeVarLoader.varLoader)('color-n2-4', '#3d4145');
	/// N2-5
	var colorN25 = (0, _nukeVarLoader.varLoader)('color-n2-5', 'transparent');
	/// N2-6
	var colorN26 = (0, _nukeVarLoader.varLoader)('color-n2-6', 'transparent');
	/// N2-7
	var colorN27 = (0, _nukeVarLoader.varLoader)('color-n2-7', 'transparent');
	/// N2-8
	var colorN28 = (0, _nukeVarLoader.varLoader)('color-n2-8', 'transparent');
	/// N2-9
	var colorN29 = (0, _nukeVarLoader.varLoader)('color-n2-9', 'transparent');
	/// N2-10
	var colorN210 = (0, _nukeVarLoader.varLoader)('color-n2-10', 'transparent');

	/// 强调, 着重说明
	/// 可用变量: `$color-f1-1, $color-f1-2`

	/// F1-1
	/// @export
	var colorF11 = (0, _nukeVarLoader.varLoader)('color-f1-1', '#ffa033');
	/// F1-2
	/// @export
	var colorF12 = (0, _nukeVarLoader.varLoader)('color-f1-2', '#fff1e8');
	/// F1-3
	/// @export
	var colorF13 = (0, _nukeVarLoader.varLoader)('color-f1-3', '#eb7e10');
	/// F1-4
	var colorF14 = (0, _nukeVarLoader.varLoader)('color-f1-4', 'transparent');
	/// F1-5
	var colorF15 = (0, _nukeVarLoader.varLoader)('color-f1-5', 'transparent');
	/// F1-6
	var colorF16 = (0, _nukeVarLoader.varLoader)('color-f1-6', 'transparent');
	/// F1-7
	var colorF17 = (0, _nukeVarLoader.varLoader)('color-f1-7', 'transparent');
	/// F1-8
	var colorF18 = (0, _nukeVarLoader.varLoader)('color-f1-8', 'transparent');
	/// F1-9
	var colorF19 = (0, _nukeVarLoader.varLoader)('color-f1-9', 'transparent');
	/// F1-10
	var colorF110 = (0, _nukeVarLoader.varLoader)('color-f1-10', 'transparent');

	/// 错误, 警告
	/// 可用变量: `$color-f2-1, $color-f2-2`

	/// F2-1
	/// @export
	var colorF21 = (0, _nukeVarLoader.varLoader)('color-f2-1', '#ff3333');
	/// F2-2
	/// @export
	var colorF22 = (0, _nukeVarLoader.varLoader)('color-f2-2', '#fae7e7');
	/// F2-3
	/// @export
	var colorF23 = (0, _nukeVarLoader.varLoader)('color-f2-3', '#e61c1c');
	/// F2-4
	var colorF24 = (0, _nukeVarLoader.varLoader)('color-f2-4', 'transparent');
	/// F2-5
	var colorF25 = (0, _nukeVarLoader.varLoader)('color-f2-5', 'transparent');
	/// F2-6
	var colorF26 = (0, _nukeVarLoader.varLoader)('color-f2-6', 'transparent');
	/// F2-7
	var colorF27 = (0, _nukeVarLoader.varLoader)('color-f2-7', 'transparent');
	/// F2-8
	var colorF28 = (0, _nukeVarLoader.varLoader)('color-f2-8', 'transparent');
	/// F2-9
	var colorF29 = (0, _nukeVarLoader.varLoader)('color-f2-9', 'transparent');
	/// F2-10
	var colorF210 = (0, _nukeVarLoader.varLoader)('color-f2-10', 'transparent');

	/// 成功, 正向积极
	/// 可用变量: `$color-f3-1, $color-f3-2`

	/// F3-1
	/// @export
	var colorF31 = (0, _nukeVarLoader.varLoader)('color-f3-1', '#1dc11d');
	/// F3-2
	/// @export
	var colorF32 = (0, _nukeVarLoader.varLoader)('color-f3-2', '#e8f9e8');
	/// F3-3
	/// @export
	var colorF33 = (0, _nukeVarLoader.varLoader)('color-f3-3', '#0da80d');
	/// F3-4
	var colorF34 = (0, _nukeVarLoader.varLoader)('color-f3-4', 'transparent');
	/// F3-5
	var colorF35 = (0, _nukeVarLoader.varLoader)('color-f3-5', 'transparent');
	/// F3-6
	var colorF36 = (0, _nukeVarLoader.varLoader)('color-f3-6', 'transparent');
	/// F3-7
	var colorF37 = (0, _nukeVarLoader.varLoader)('color-f3-7', 'transparent');
	/// F3-8
	var colorF38 = (0, _nukeVarLoader.varLoader)('color-f3-8', 'transparent');
	/// F3-9
	var colorF39 = (0, _nukeVarLoader.varLoader)('color-f3-9', 'transparent');
	/// F3-10
	var colorF310 = (0, _nukeVarLoader.varLoader)('color-f3-10', 'transparent');

	/// link 链接专用色
	/// 可用变量: `$color-f4-1 - $color-f4-3`

	/// F4-1
	/// @export
	var colorF41 = (0, _nukeVarLoader.varLoader)('color-f4-1', '#3089dc');
	/// F4-2
	var colorF42 = (0, _nukeVarLoader.varLoader)('color-f4-2', '#9a65a6');
	/// F4-3
	/// @export
	var colorF43 = (0, _nukeVarLoader.varLoader)('color-f4-3', '#1170bc');
	/// F4-4
	var colorF44 = (0, _nukeVarLoader.varLoader)('color-f4-4', 'transparent');
	/// F4-5
	var colorF45 = (0, _nukeVarLoader.varLoader)('color-f4-5', 'transparent');
	/// F4-6
	var colorF46 = (0, _nukeVarLoader.varLoader)('color-f4-6', 'transparent');
	/// F4-7
	var colorF47 = (0, _nukeVarLoader.varLoader)('color-f4-7', 'transparent');
	/// F4-8
	var colorF48 = (0, _nukeVarLoader.varLoader)('color-f4-8', 'transparent');
	/// F4-9
	var colorF49 = (0, _nukeVarLoader.varLoader)('color-f4-9', 'transparent');
	/// F4-10
	var colorF410 = (0, _nukeVarLoader.varLoader)('color-f4-10', 'transparent');

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 'color-b1-1', colorB11), _defineProperty(_module$exports, 'color-b1-2', colorB12), _defineProperty(_module$exports, 'color-b1-3', colorB13), _defineProperty(_module$exports, 'color-b1-4', colorB14), _defineProperty(_module$exports, 'color-b1-5', colorB15), _defineProperty(_module$exports, 'color-b1-6', colorB16), _defineProperty(_module$exports, 'color-b1-7', colorB17), _defineProperty(_module$exports, 'color-b1-8', colorB18), _defineProperty(_module$exports, 'color-b1-9', colorB19), _defineProperty(_module$exports, 'color-b1-10', colorB110), _defineProperty(_module$exports, 'color-b2-1', colorB21), _defineProperty(_module$exports, 'color-b2-2', colorB22), _defineProperty(_module$exports, 'color-b2-3', colorB23), _defineProperty(_module$exports, 'color-b2-4', colorB24), _defineProperty(_module$exports, 'color-b2-5', colorB25), _defineProperty(_module$exports, 'color-b2-6', colorB26), _defineProperty(_module$exports, 'color-b2-7', colorB27), _defineProperty(_module$exports, 'color-b2-8', colorB28), _defineProperty(_module$exports, 'color-b2-9', colorB29), _defineProperty(_module$exports, 'color-b2-10', colorB210), _defineProperty(_module$exports, 'color-b3-1', colorB31), _defineProperty(_module$exports, 'color-b3-2', colorB32), _defineProperty(_module$exports, 'color-b3-3', colorB33), _defineProperty(_module$exports, 'color-b3-4', colorB34), _defineProperty(_module$exports, 'color-b3-5', colorB35), _defineProperty(_module$exports, 'color-b3-6', colorB36), _defineProperty(_module$exports, 'color-b3-7', colorB37), _defineProperty(_module$exports, 'color-b3-8', colorB38), _defineProperty(_module$exports, 'color-b3-9', colorB39), _defineProperty(_module$exports, 'color-b3-10', colorB310), _defineProperty(_module$exports, 'color-b4-1', colorB41), _defineProperty(_module$exports, 'color-b4-2', colorB42), _defineProperty(_module$exports, 'color-b4-3', colorB43), _defineProperty(_module$exports, 'color-b4-4', colorB44), _defineProperty(_module$exports, 'color-b4-5', colorB45), _defineProperty(_module$exports, 'color-b4-6', colorB46), _defineProperty(_module$exports, 'color-b4-7', colorB47), _defineProperty(_module$exports, 'color-b4-8', colorB48), _defineProperty(_module$exports, 'color-b4-9', colorB49), _defineProperty(_module$exports, 'color-b4-10', colorB410), _defineProperty(_module$exports, 'color-b5-1', colorB51), _defineProperty(_module$exports, 'color-b5-2', colorB52), _defineProperty(_module$exports, 'color-b5-3', colorB53), _defineProperty(_module$exports, 'color-b5-4', colorB54), _defineProperty(_module$exports, 'color-b5-5', colorB55), _defineProperty(_module$exports, 'color-b5-6', colorB56), _defineProperty(_module$exports, 'color-b5-7', colorB57), _defineProperty(_module$exports, 'color-b5-8', colorB58), _defineProperty(_module$exports, 'color-b5-9', colorB59), _defineProperty(_module$exports, 'color-b5-10', colorB510), _defineProperty(_module$exports, 'color-b6-1', colorB61), _defineProperty(_module$exports, 'color-b6-2', colorB62), _defineProperty(_module$exports, 'color-b6-3', colorB63), _defineProperty(_module$exports, 'color-b6-4', colorB64), _defineProperty(_module$exports, 'color-b6-5', colorB65), _defineProperty(_module$exports, 'color-b6-6', colorB66), _defineProperty(_module$exports, 'color-b6-7', colorB67), _defineProperty(_module$exports, 'color-b6-8', colorB68), _defineProperty(_module$exports, 'color-b6-9', colorB69), _defineProperty(_module$exports, 'color-b6-10', colorB610), _defineProperty(_module$exports, 'color-b7-1', colorB71), _defineProperty(_module$exports, 'color-b7-2', colorB72), _defineProperty(_module$exports, 'color-b7-3', colorB73), _defineProperty(_module$exports, 'color-b7-4', colorB74), _defineProperty(_module$exports, 'color-b7-5', colorB75), _defineProperty(_module$exports, 'color-b7-6', colorB76), _defineProperty(_module$exports, 'color-b7-7', colorB77), _defineProperty(_module$exports, 'color-b7-8', colorB78), _defineProperty(_module$exports, 'color-b7-9', colorB79), _defineProperty(_module$exports, 'color-b7-10', colorB710), _defineProperty(_module$exports, 'color-b8-1', colorB81), _defineProperty(_module$exports, 'color-b8-2', colorB82), _defineProperty(_module$exports, 'color-b8-3', colorB83), _defineProperty(_module$exports, 'color-b8-4', colorB84), _defineProperty(_module$exports, 'color-b8-5', colorB85), _defineProperty(_module$exports, 'color-b8-6', colorB86), _defineProperty(_module$exports, 'color-b8-7', colorB87), _defineProperty(_module$exports, 'color-b8-8', colorB88), _defineProperty(_module$exports, 'color-b8-9', colorB89), _defineProperty(_module$exports, 'color-b8-10', colorB810), _defineProperty(_module$exports, 'color-n1-1', colorN11), _defineProperty(_module$exports, 'color-n1-2', colorN12), _defineProperty(_module$exports, 'color-n1-3', colorN13), _defineProperty(_module$exports, 'color-n1-4', colorN14), _defineProperty(_module$exports, 'color-n1-5', colorN15), _defineProperty(_module$exports, 'color-n1-6', colorN16), _defineProperty(_module$exports, 'color-n1-7', colorN17), _defineProperty(_module$exports, 'color-n1-8', colorN18), _defineProperty(_module$exports, 'color-n1-9', colorN19), _defineProperty(_module$exports, 'color-n1-10', colorN110), _defineProperty(_module$exports, 'color-n2-1', colorN21), _defineProperty(_module$exports, 'color-n2-2', colorN22), _defineProperty(_module$exports, 'color-n2-3', colorN23), _defineProperty(_module$exports, 'color-n2-4', colorN24), _defineProperty(_module$exports, 'color-n2-5', colorN25), _defineProperty(_module$exports, 'color-n2-6', colorN26), _defineProperty(_module$exports, 'color-n2-7', colorN27), _defineProperty(_module$exports, 'color-n2-8', colorN28), _defineProperty(_module$exports, 'color-n2-9', colorN29), _defineProperty(_module$exports, 'color-n2-10', colorN210), _defineProperty(_module$exports, 'color-f1-1', colorF11), _defineProperty(_module$exports, 'color-f1-2', colorF12), _defineProperty(_module$exports, 'color-f1-3', colorF13), _defineProperty(_module$exports, 'color-f1-4', colorF14), _defineProperty(_module$exports, 'color-f1-5', colorF15), _defineProperty(_module$exports, 'color-f1-6', colorF16), _defineProperty(_module$exports, 'color-f1-7', colorF17), _defineProperty(_module$exports, 'color-f1-8', colorF18), _defineProperty(_module$exports, 'color-f1-9', colorF19), _defineProperty(_module$exports, 'color-f1-10', colorF110), _defineProperty(_module$exports, 'color-f2-1', colorF21), _defineProperty(_module$exports, 'color-f2-2', colorF22), _defineProperty(_module$exports, 'color-f2-3', colorF23), _defineProperty(_module$exports, 'color-f2-4', colorF24), _defineProperty(_module$exports, 'color-f2-5', colorF25), _defineProperty(_module$exports, 'color-f2-6', colorF26), _defineProperty(_module$exports, 'color-f2-7', colorF27), _defineProperty(_module$exports, 'color-f2-8', colorF28), _defineProperty(_module$exports, 'color-f2-9', colorF29), _defineProperty(_module$exports, 'color-f2-10', colorF210), _defineProperty(_module$exports, 'color-f3-1', colorF31), _defineProperty(_module$exports, 'color-f3-2', colorF32), _defineProperty(_module$exports, 'color-f3-3', colorF33), _defineProperty(_module$exports, 'color-f3-4', colorF34), _defineProperty(_module$exports, 'color-f3-5', colorF35), _defineProperty(_module$exports, 'color-f3-6', colorF36), _defineProperty(_module$exports, 'color-f3-7', colorF37), _defineProperty(_module$exports, 'color-f3-8', colorF38), _defineProperty(_module$exports, 'color-f3-9', colorF39), _defineProperty(_module$exports, 'color-f3-10', colorF310), _defineProperty(_module$exports, 'color-f4-1', colorF41), _defineProperty(_module$exports, 'color-f4-2', colorF42), _defineProperty(_module$exports, 'color-f4-3', colorF43), _defineProperty(_module$exports, 'color-f4-4', colorF44), _defineProperty(_module$exports, 'color-f4-5', colorF45), _defineProperty(_module$exports, 'color-f4-6', colorF46), _defineProperty(_module$exports, 'color-f4-7', colorF47), _defineProperty(_module$exports, 'color-f4-8', colorF48), _defineProperty(_module$exports, 'color-f4-9', colorF49), _defineProperty(_module$exports, 'color-f4-10', colorF410), _module$exports);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	////
	/// @group Variables 变量
	/// @module global: 全局基础样式
	/// @category style
	////


	/// S0
	/// @export length
	/// @unconfigurable
	/// @type {String}
	var s0 = (0, _nukeVarLoader.varLoader)('s0', 0);

	/// S1
	/// @export length
	/// @type {String}
	var s1 = (0, _nukeVarLoader.varLoader)('s1', 8);

	/// S2
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s2 = (0, _nukeVarLoader.varLoader)('s2', s1 * 2);

	/// S3
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s3 = (0, _nukeVarLoader.varLoader)('s3', s1 * 3);

	/// S4
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s4 = (0, _nukeVarLoader.varLoader)('s4', s1 * 4);

	/// S5
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s5 = (0, _nukeVarLoader.varLoader)('s5', s1 * 5);

	/// S6
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s6 = (0, _nukeVarLoader.varLoader)('s6', s1 * 6);

	/// S7
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s7 = (0, _nukeVarLoader.varLoader)('s7', s1 * 7);

	/// S8
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s8 = (0, _nukeVarLoader.varLoader)('s8', s1 * 8);

	/// S9
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s9 = (0, _nukeVarLoader.varLoader)('s9', s1 * 9);

	/// S10
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s10 = (0, _nukeVarLoader.varLoader)('s10', s1 * 10);

	/// S11
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s11 = (0, _nukeVarLoader.varLoader)('s11', s1 * 11);

	/// S12
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s12 = (0, _nukeVarLoader.varLoader)('s12', s1 * 12);

	/// S13
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s13 = (0, _nukeVarLoader.varLoader)('s13', s1 * 13);

	/// S14
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s14 = (0, _nukeVarLoader.varLoader)('s14', s1 * 14);

	/// S15
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s15 = (0, _nukeVarLoader.varLoader)('s15', s1 * 15);

	/// S16
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s16 = (0, _nukeVarLoader.varLoader)('s16', s1 * 16);

	/// S17
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s17 = (0, _nukeVarLoader.varLoader)('s17', s1 * 17);

	/// S18
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s18 = (0, _nukeVarLoader.varLoader)('s18', s1 * 18);

	/// S19
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s19 = (0, _nukeVarLoader.varLoader)('s19', s1 * 19);

	/// S20
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s20 = (0, _nukeVarLoader.varLoader)('s20', s1 * 20);

	/// S21
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s21 = (0, _nukeVarLoader.varLoader)('s21', s1 * 21);

	/// S22
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s22 = (0, _nukeVarLoader.varLoader)('s22', s1 * 22);

	/// S23
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s23 = (0, _nukeVarLoader.varLoader)('s23', s1 * 23);

	/// S24
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s24 = (0, _nukeVarLoader.varLoader)('s24', s1 * 24);

	/// S25
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s25 = (0, _nukeVarLoader.varLoader)('s25', s1 * 25);

	/// S26
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s26 = (0, _nukeVarLoader.varLoader)('s26', s1 * 26);

	/// S27
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s27 = (0, _nukeVarLoader.varLoader)('s27', s1 * 27);

	/// S28
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s28 = (0, _nukeVarLoader.varLoader)('s28', s1 * 28);

	/// S29
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s29 = (0, _nukeVarLoader.varLoader)('s29', s1 * 29);

	/// S30
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s30 = (0, _nukeVarLoader.varLoader)('s30', s1 * 30);

	/// S31
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s31 = (0, _nukeVarLoader.varLoader)('s31', s1 * 31);

	/// S32
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s32 = (0, _nukeVarLoader.varLoader)('s32', s1 * 32);

	/// S33
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s33 = (0, _nukeVarLoader.varLoader)('s33', s1 * 33);

	/// S34
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s34 = (0, _nukeVarLoader.varLoader)('s34', s1 * 34);

	/// S35
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s35 = (0, _nukeVarLoader.varLoader)('s35', s1 * 35);

	/// S36
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s36 = (0, _nukeVarLoader.varLoader)('s36', s1 * 36);

	/// S37
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s37 = (0, _nukeVarLoader.varLoader)('s37', s1 * 37);

	/// S38
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s38 = (0, _nukeVarLoader.varLoader)('s38', s1 * 38);

	/// S39
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s39 = (0, _nukeVarLoader.varLoader)('s39', s1 * 39);

	/// S40
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s40 = (0, _nukeVarLoader.varLoader)('s40', s1 * 40);

	/// S41
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s41 = (0, _nukeVarLoader.varLoader)('s41', s1 * 41);

	/// S42
	/// @export length
	/// @type {String}
	/// @unconfigurable
	var s42 = (0, _nukeVarLoader.varLoader)('s42', s1 * 42);

	var typoMarginBottom = (0, _nukeVarLoader.varLoader)('typo-margin-bottom', '0.5');

	var zBadge = (0, _nukeVarLoader.varLoader)('z-badge', '89');
	var zMenu = (0, _nukeVarLoader.varLoader)('z-menu', '99');
	var zSelect = (0, _nukeVarLoader.varLoader)('z-select', '109');
	var zBalloon = (0, _nukeVarLoader.varLoader)('z-balloon', '199');
	var zMask = (0, _nukeVarLoader.varLoader)('z-mask', '299');
	var zSlip = (0, _nukeVarLoader.varLoader)('z-slip', '399');
	var zDialog = (0, _nukeVarLoader.varLoader)('z-dialog', '499');
	var zFeedback = (0, _nukeVarLoader.varLoader)('z-feedback', '599');

	var prefixForWebkit = (0, _nukeVarLoader.varLoader)('prefix-for-webkit', 'true');

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 's0', s0), _defineProperty(_module$exports, 's1', s1), _defineProperty(_module$exports, 's2', s2), _defineProperty(_module$exports, 's3', s3), _defineProperty(_module$exports, 's4', s4), _defineProperty(_module$exports, 's5', s5), _defineProperty(_module$exports, 's6', s6), _defineProperty(_module$exports, 's7', s7), _defineProperty(_module$exports, 's8', s8), _defineProperty(_module$exports, 's9', s9), _defineProperty(_module$exports, 's10', s10), _defineProperty(_module$exports, 's11', s11), _defineProperty(_module$exports, 's12', s12), _defineProperty(_module$exports, 's13', s13), _defineProperty(_module$exports, 's14', s14), _defineProperty(_module$exports, 's15', s15), _defineProperty(_module$exports, 's16', s16), _defineProperty(_module$exports, 's17', s17), _defineProperty(_module$exports, 's18', s18), _defineProperty(_module$exports, 's19', s19), _defineProperty(_module$exports, 's20', s20), _defineProperty(_module$exports, 's21', s21), _defineProperty(_module$exports, 's22', s22), _defineProperty(_module$exports, 's23', s23), _defineProperty(_module$exports, 's24', s24), _defineProperty(_module$exports, 's25', s25), _defineProperty(_module$exports, 's26', s26), _defineProperty(_module$exports, 's27', s27), _defineProperty(_module$exports, 's28', s28), _defineProperty(_module$exports, 's29', s29), _defineProperty(_module$exports, 's30', s30), _defineProperty(_module$exports, 's31', s31), _defineProperty(_module$exports, 's32', s32), _defineProperty(_module$exports, 's33', s33), _defineProperty(_module$exports, 's34', s34), _defineProperty(_module$exports, 's35', s35), _defineProperty(_module$exports, 's36', s36), _defineProperty(_module$exports, 's37', s37), _defineProperty(_module$exports, 's38', s38), _defineProperty(_module$exports, 's39', s39), _defineProperty(_module$exports, 's40', s40), _defineProperty(_module$exports, 's41', s41), _defineProperty(_module$exports, 's42', s42), _defineProperty(_module$exports, 'typo-margin-bottom', typoMarginBottom), _defineProperty(_module$exports, 'z-badge', zBadge), _defineProperty(_module$exports, 'z-menu', zMenu), _defineProperty(_module$exports, 'z-select', zSelect), _defineProperty(_module$exports, 'z-balloon', zBalloon), _defineProperty(_module$exports, 'z-mask', zMask), _defineProperty(_module$exports, 'z-slip', zSlip), _defineProperty(_module$exports, 'z-dialog', zDialog), _defineProperty(_module$exports, 'z-feedback', zFeedback), _defineProperty(_module$exports, 'prefix-for-webkit', prefixForWebkit), _module$exports);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var styles = {
	    container: {
	        width: 750,
	        backgroundColor: '#f7f8fa',
	        paddingTop: 70
	    },
	    title: {
	        width: 750,
	        alignItems: 'center'
	    },
	    title_wrap: {
	        width: 220,
	        alignItems: 'center',
	        borderBottomStyle: 'solid',
	        borderBottomColor: '#d2d4db',
	        borderBottomWidth: 1,
	        paddingBottom: 22
	    },
	    title_text: {
	        fontSize: 28,
	        color: '#999999'
	    },
	    intro: {
	        width: 750,
	        paddingLeft: 42,
	        marginTop: 30
	    },
	    intro_text: {
	        fontSize: 28,
	        color: '#3d4145'
	    },
	    intro_text_sub: {
	        color: '#999999'
	    }
	};
	exports.default = styles;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _nukeEnv = __webpack_require__(7);

	var _nukeEnv2 = _interopRequireDefault(_nukeEnv);

	var _nukeView = __webpack_require__(5);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	var _nukeRefreshControl = __webpack_require__(57);

	var _nukeRefreshControl2 = _interopRequireDefault(_nukeRefreshControl);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var WebPullToRefresh = void 0;
	var isWeex = _nukeEnv2.default.isWeex,
	    isWeb = _nukeEnv2.default.isWeb;

	if (isWeb) {
	    WebPullToRefresh = __webpack_require__(58);
	}
	var DEFAULT_END_REACHED_THRESHOLD = 500;
	var DEFAULT_SCROLL_CALLBACK_THROTTLE = 50;
	var FULL_WIDTH = 750;

	var ScrollViewTest = function (_Component) {
	    _inherits(ScrollViewTest, _Component);

	    function ScrollViewTest(props) {
	        _classCallCheck(this, ScrollViewTest);

	        var _this = _possibleConstructorReturn(this, (ScrollViewTest.__proto__ || Object.getPrototypeOf(ScrollViewTest)).call(this, props));

	        _this.lastScrollDistance = 0;
	        _this.lastScrollContentSize = 0;
	        _this.loadmoreretry = 1;

	        _this.handleScroll = function (e) {
	            if (isWeb) {
	                if (_this.props.onScroll) {
	                    e.nativeEvent = {
	                        get contentOffset() {
	                            return {
	                                x: e.target.scrollLeft,
	                                y: e.target.scrollTop
	                            };
	                        }
	                    };
	                    _this.props.onScroll(e);
	                }

	                if (_this.props.onEndReached) {
	                    if (!_this.scrollerNode) {
	                        _this.scrollerNode = (0, _rax.findDOMNode)(_this.refs.scroller);
	                        _this.scrollerContentNode = (0, _rax.findDOMNode)(_this.refs.contentContainer);

	                        _this.scrollerNodeSize = _this.props.horizontal ? _this.scrollerNode.offsetWidth : _this.scrollerNode.offsetHeight;
	                    }

	                    // NOTE：in iOS7/8 offsetHeight/Width is is inaccurate （ use scrollHeight/Width ）
	                    var scrollContentSize = _this.props.horizontal ? _this.scrollerNode.scrollWidth : _this.scrollerNode.scrollHeight;
	                    var scrollDistance = _this.props.horizontal ? _this.scrollerNode.scrollLeft : _this.scrollerNode.scrollTop;
	                    var isEndReached = scrollContentSize - scrollDistance - _this.scrollerNodeSize < _this.props.onEndReachedThreshold;

	                    var isScrollToEnd = scrollDistance > _this.lastScrollDistance;
	                    var isLoadedMoreContent = scrollContentSize != _this.lastScrollContentSize;

	                    if (isEndReached && isScrollToEnd && isLoadedMoreContent) {
	                        _this.lastScrollContentSize = scrollContentSize;
	                        _this.props.onEndReached(e);
	                    }

	                    _this.lastScrollDistance = scrollDistance;
	                }
	            }
	            if (isWeex) {
	                e.nativeEvent = {
	                    contentOffset: {
	                        // HACK: weex scroll event value is opposite of web
	                        x: -e.contentOffset.x,
	                        y: -e.contentOffset.y
	                    }
	                };
	                _this.props.onScroll(e);
	            }
	        };

	        _this.resetScroll = function () {
	            if (isWeb) {
	                _this.lastScrollContentSize = 0;
	                _this.lastScrollDistance = 0;
	            } else {
	                _this.setState({
	                    loadmoreretry: _this.loadmoreretry++
	                });
	            }
	        };

	        _this.scrollTo = function (options) {
	            var x = parseInt(options.x);
	            var y = parseInt(options.y);

	            if (isWeex) {
	                var dom = __webpack_require__(32);
	                var contentContainer = (0, _rax.findDOMNode)(_this.refs.contentContainer);
	                dom.scrollToElement(contentContainer.ref, {
	                    offset: x || y || 0
	                });
	            } else {
	                var pixelRatio = document.documentElement.clientWidth / FULL_WIDTH;

	                if (x >= 0) {
	                    (0, _rax.findDOMNode)(_this.refs.scroller).scrollLeft = pixelRatio * x;
	                }

	                if (y >= 0) {
	                    (0, _rax.findDOMNode)(_this.refs.scroller).scrollTop = pixelRatio * y;
	                }
	            }
	        };

	        _this.handleRefresh = function () {
	            return new Promise(function (resolve, reject) {
	                _this.onRefresh && _this.onRefresh(resolve, reject);
	            });
	        };

	        _this.resetLoadmore = function () {
	            if (isWeex) {
	                _this.refs.scroller.resetLoadmore();
	            }
	        };

	        _this.state = {
	            loadmoreretry: 0,
	            initializedWptr: false
	        };
	        _this.onRefresh = null;
	        return _this;
	    }

	    _createClass(ScrollViewTest, [{
	        key: 'initWeb',
	        value: function initWeb() {
	            if (isWeb && !this.state.initializedWptr) {
	                WebPullToRefresh().init({
	                    bodyEl: this.refs.scroller,
	                    ptrEl: this.refs.refreshX,
	                    contentEl: this.refs.contentContainer,
	                    distanceToRefresh: this.props.distanceToRefresh || undefined,
	                    loadingFunction: this.handleRefresh,
	                    resistance: this.props.resistance || undefined,
	                    hammerOptions: this.props.hammerOptions || { touchAction: 'auto' }
	                });
	                this.setState({
	                    initializedWptr: true
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (!this.props.disabledPtr) {
	                this.initWeb();
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (!this.props.disabledPtr) {
	                this.initWeb();
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                id = _props.id,
	                style = _props.style,
	                scrollEventThrottle = _props.scrollEventThrottle,
	                showsHorizontalScrollIndicator = _props.showsHorizontalScrollIndicator,
	                showsVerticalScrollIndicator = _props.showsVerticalScrollIndicator,
	                onEndReached = _props.onEndReached,
	                onEndReachedThreshold = _props.onEndReachedThreshold,
	                onScroll = _props.onScroll,
	                children = _props.children;

	            // In weex must be int value

	            onEndReachedThreshold = parseInt(onEndReachedThreshold, 10);

	            var contentContainerStyle = [this.props.horizontal && styles.contentContainerHorizontal, this.props.contentContainerStyle];

	            // bugfix: fix scrollview flex in ios 78
	            if (!isWeex && !this.props.horizontal) {
	                contentContainerStyle.push(styles.containerWebStyle);
	            }

	            if (this.props.style) {
	                var childLayoutProps = ['alignItems', 'justifyContent'].filter(function (prop) {
	                    return _this2.props.style[prop] !== undefined;
	                });

	                if (childLayoutProps.length !== 0) {}
	            }

	            var refreshContainer = _rax.createElement(_nukeView2.default, null),
	                contentChild = void 0;
	            if (Array.isArray(children)) {
	                contentChild = children.map(function (child, index) {
	                    if (child && child.type == _nukeRefreshControl2.default) {
	                        refreshContainer = child;
	                        _this2.onRefresh = child.props.onRefresh;
	                    } else {
	                        return child;
	                    }
	                });
	            } else {
	                contentChild = children;
	            }

	            var contentContainer = _rax.createElement(_nukeView2.default, {
	                ref: 'contentContainer',
	                style: contentContainerStyle }, contentChild);

	            var baseStyle = this.props.horizontal ? styles.baseHorizontal : styles.baseVertical;

	            var scrollerStyle = _extends({}, baseStyle, this.props.style);

	            var showsScrollIndicator = this.props.horizontal ? showsHorizontalScrollIndicator : showsVerticalScrollIndicator;

	            if (isWeex) {
	                return _rax.createElement('scroller', _extends({}, this.props, {
	                    ref: 'scroller',
	                    style: scrollerStyle,
	                    showScrollbar: showsScrollIndicator,
	                    onLoadmore: onEndReached,
	                    onScroll: onScroll ? this.handleScroll : null,
	                    loadmoreoffset: onEndReachedThreshold,
	                    loadmoreretry: this.state.loadmoreretry,
	                    scrollDirection: this.props.horizontal ? 'horizontal' : 'vertical'
	                }), refreshContainer, contentContainer);
	            } else {
	                var _Object$assign;

	                var handleScroll = this.handleScroll;
	                if (scrollEventThrottle) {
	                    handleScroll = throttle(handleScroll, scrollEventThrottle);
	                }

	                if (!showsScrollIndicator && !document.getElementById('rax-scrollview-style')) {
	                    var styleNode = document.createElement('style');
	                    styleNode.id = 'rax-scrollview-style';
	                    document.head.appendChild(styleNode);
	                    styleNode.innerHTML = '.' + this.props.className + '::-webkit-scrollbar{display: none;}';
	                }

	                scrollerStyle.webkitOverflowScrolling = 'touch';
	                scrollerStyle.overflow = 'scroll';

	                var webProps = _extends({}, this.props, {
	                    ref: 'scroller',
	                    style: scrollerStyle,
	                    onScroll: handleScroll
	                });
	                delete webProps.onEndReachedThreshold;
	                if (this.props.disabledPtr) {
	                    return _rax.createElement(_nukeView2.default, webProps, contentContainer);
	                }
	                return _rax.createElement(_nukeView2.default, webProps, (0, _rax.cloneElement)(refreshContainer, {
	                    ref: "refreshX",
	                    className: "ptr-element",
	                    style: _extends2((_Object$assign = { position: 'absolute', top: 0, left: 0, width: 750, color: '#aaaaaa' }, _defineProperty(_Object$assign, 'z-index', 10), _defineProperty(_Object$assign, 'textAlign', 'center'), _Object$assign), refreshContainer.props.style)
	                }), contentContainer);
	            }
	        }
	    }]);

	    return ScrollViewTest;
	}(_rax.Component);

	ScrollViewTest.defaultProps = {
	    scrollEventThrottle: DEFAULT_SCROLL_CALLBACK_THROTTLE,
	    onEndReachedThreshold: DEFAULT_END_REACHED_THRESHOLD,
	    showsHorizontalScrollIndicator: true,
	    showsVerticalScrollIndicator: true,
	    className: 'rax-scrollview'
	};

	function throttle(func, wait) {
	    var ctx, args, rtn, timeoutID;
	    var last = 0;

	    function call() {
	        timeoutID = 0;
	        last = +new Date();
	        rtn = func.apply(ctx, args);
	        ctx = null;
	        args = null;
	    }

	    return function throttled() {
	        ctx = this;
	        args = arguments;
	        var delta = new Date() - last;
	        if (!timeoutID) if (delta >= wait) call();else timeoutID = setTimeout(call, wait - delta);
	        return rtn;
	    };
	}

	var styles = {
	    baseVertical: {
	        flex: 1,
	        flexDirection: 'column'
	    },
	    baseHorizontal: {
	        flex: 1,
	        flexDirection: 'row'
	    },
	    contentContainerHorizontal: {
	        flexDirection: 'row'
	    },
	    containerWebStyle: {
	        display: 'block'
	    }
	};

	exports.default = ScrollViewTest;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* @jsx createElement */

	'use strict';

	var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _nukeEnv = __webpack_require__(7);

	var _nukeView = __webpack_require__(5);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Touchable = function (_Component) {
	    _inherits(Touchable, _Component);

	    function Touchable() {
	        _classCallCheck(this, Touchable);

	        return _possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));
	    }

	    _createClass(Touchable, [{
	        key: 'calculatedStyle',
	        value: function calculatedStyle(activeStyle) {

	            var obj = {};
	            for (var k in activeStyle) {
	                obj[k + ':active'] = activeStyle[k];
	            }
	            return obj;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var props = _extends({}, this.props, {
	                style: _extends({}, this.props.style),
	                onClick: this.props.onPress
	            });
	            var activeStyle = this.props.activeStyle;
	            props.style = _extends2(props.style, this.calculatedStyle(activeStyle));

	            delete props.onPress;
	            delete props.activeStyle;

	            return (0, _rax.createElement)(_nukeView2.default, props);
	        }
	    }]);

	    return Touchable;
	}(_rax.Component);

	var styles = {
	    initial: {
	        cursor: 'pointer'
	    }
	};

	exports.default = Touchable;
	module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(6);

	var _instance2 = _interopRequireDefault(_instance);

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  ComponentTree: {
	    getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
	      return _instance2.default.get(node);
	    },
	    getNodeFromInstance: function getNodeFromInstance(inst) {
	      // inst is an internal instance (but could be a composite)
	      while (inst._renderedComponent) {
	        inst = inst._renderedComponent;
	      }

	      if (inst) {
	        return inst._nativeNode;
	      } else {
	        return null;
	      }
	    }
	  },
	  Mount: {
	    _instancesByReactRootID: _host2.default.rootComponents,

	    // Stub - React DevTools expects to find this method and replace it
	    // with a wrapper in order to observe new root components being added
	    _renderNewRootComponent: function _renderNewRootComponent() {}
	  },
	  Reconciler: {
	    // Stubs - React DevTools expects to find these methods and replace them
	    // with wrappers in order to observe components being mounted, updated and
	    // unmounted
	    mountComponent: function mountComponent() {},
	    receiveComponent: function receiveComponent() {},
	    unmountComponent: function unmountComponent() {}
	  },
	  // monitor the info of all components
	  monitor: null
	};
	module.exports = exports['default'];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.createElement = createElement;
	exports.createFactory = createFactory;
	exports.cloneElement = cloneElement;
	exports.isValidElement = isValidElement;

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _universalEnv = __webpack_require__(13);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};

	function getRenderErrorInfo() {
	  if (_host2.default.component) {
	    var name = _host2.default.component.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	var Element = function Element(type, key, ref, props, owner) {
	  props = filterProps(type, props);

	  return {
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	};

	exports.default = Element;

	function traverseChildren(children, result) {
	  if (Array.isArray(children)) {
	    for (var i = 0, l = children.length; i < l; i++) {
	      traverseChildren(children[i], result);
	    }
	  } else {
	    result.push(children);
	  }
	}

	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  traverseChildren(children, result);

	  if (result.length === 1) {
	    result = result[0];
	  }

	  return result;
	}

	function flattenStyle(style) {
	  if (!style) {
	    return undefined;
	  }

	  if (!Array.isArray(style)) {
	    return style;
	  } else {
	    var result = {};
	    for (var i = 0; i < style.length; ++i) {
	      var computedStyle = flattenStyle(style[i]);
	      if (computedStyle) {
	        for (var key in computedStyle) {
	          result[key] = computedStyle[key];
	        }
	      }
	    }
	    return result;
	  }
	}

	// TODO: so hack
	function filterProps(type, props) {
	  // Only for weex text
	  if (_universalEnv.isWeex && type === 'text') {
	    var value = props.children;
	    if (value) {
	      if (Array.isArray(value)) {
	        value = value.join('');
	      }
	      props.children = null;
	      props.value = value;
	    }
	  }
	  return props;
	}

	function createElement(type, config) {
	  if (type == null) {
	    throw Error('createElement: type should not be null or undefined.' + getRenderErrorInfo());
	  }
	  // Reserved names are extracted
	  var props = {};
	  var propName = void 0;
	  var key = null;
	  var ref = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : String(config.key);
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  if (children.length) {
	    props.children = flattenChildren(children);
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  if (props.style && (Array.isArray(props.style) || _typeof(props.style) === 'object')) {
	    props.style = flattenStyle(props.style);
	  }

	  return new Element(type, key, ref, props, _host2.default.component);
	}

	function createFactory(type) {
	  var factory = createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  factory.type = type;
	  return factory;
	}

	function cloneElement(element, config) {
	  // Original props are copied
	  var props = _extends({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config) {
	    // Should reset ref and owner if has a new ref
	    if (config.ref !== undefined) {
	      ref = config.ref;
	      owner = _host2.default.component;
	    }

	    if (config.key !== undefined) {
	      key = String(config.key);
	    }

	    // Resolve default props
	    var defaultProps = void 0;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    // Remaining properties override existing props
	    var propName = void 0;
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    children[_key2 - 2] = arguments[_key2];
	  }

	  if (children.length) {
	    props.children = flattenChildren(children);
	  }

	  return new Element(element.type, key, ref, props, owner);
	};

	function isValidElement(object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.type && object.props;
	}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function findDOMNode(instance) {
	  if (instance == null) {
	    return null;
	  }

	  // If a native node, weex may not export ownerDocument property
	  if (instance.ownerDocument || instance.nodeType) {
	    return instance;
	  }

	  // Native component
	  if (instance._nativeNode) {
	    return instance._nativeNode;
	  }

	  if (typeof instance == 'string') {
	    return _host2.default.driver.getElementById(instance);
	  }

	  if (typeof instance.render !== 'function') {
	    throw new Error('Appears to be neither Component nor DOMNode.');
	  }

	  // Composite component
	  var internal = instance._internal;

	  if (internal) {
	    while (!internal._nativeNode) {
	      internal = internal._renderedComponent;
	      // If not mounted
	      if (internal == null) {
	        return null;
	      }
	    }
	    return internal._nativeNode;
	  } else {
	    throw new Error('findDOMNode was called on an unmounted component.');
	  }
	}

	exports.default = findDOMNode;
	module.exports = exports['default'];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setNativeProps;

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _findDOMNode = __webpack_require__(24);

	var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var STYLE = 'style';
	var CHILDREN = 'children';
	var EVENT_PREFIX_REGEXP = /on[A-Z]/;

	function setNativeProps(node, props, disableSetStyles) {
	  node = (0, _findDOMNode2.default)(node);

	  for (var prop in props) {
	    var value = props[prop];
	    if (prop === CHILDREN) {
	      continue;
	    }

	    if (value != null) {
	      if (prop === STYLE) {
	        if (disableSetStyles) {
	          continue;
	        }
	        _host2.default.driver.setStyles(node, value);
	      } else if (EVENT_PREFIX_REGEXP.test(prop)) {
	        var eventName = prop.slice(2).toLowerCase();
	        _host2.default.driver.addEventListener(node, eventName, value);
	      } else {
	        _host2.default.driver.setAttribute(node, prop, value);
	      }
	    }
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unmountComponentAtNode;

	var _instance = __webpack_require__(6);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function unmountComponentAtNode(node) {
	  var component = _instance2.default.get(node);

	  if (!component) {
	    return false;
	  }

	  _instance2.default.remove(node);
	  component._internal.unmountComponent();

	  return true;
	};
	module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (children, element, index) {
	  var elementKey = element && element.key;
	  var hasKey = typeof elementKey === 'string';
	  var defaultName = '.' + index.toString(36);

	  if (hasKey) {
	    var keyName = '$' + elementKey;
	    // Child keys must be unique.
	    var keyUnique = children[keyName] === undefined;
	    // Only the first child will be used when encountered two children with the same key
	    if (!keyUnique) console.warn('Encountered two children with the same key "' + elementKey + '".');

	    return keyUnique ? keyName : defaultName;
	  } else {
	    return defaultName;
	  }
	};

	module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _ref = __webpack_require__(29);

	var _ref2 = _interopRequireDefault(_ref);

	var _instantiateComponent = __webpack_require__(9);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _shouldUpdateComponent = __webpack_require__(12);

	var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

	var _getElementKeyName = __webpack_require__(27);

	var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

	var _instance = __webpack_require__(6);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var STYLE = 'style';
	var CHILDREN = 'children';
	var TREE = 'tree';
	var EVENT_PREFIX_REGEXP = /on[A-Z]/;

	/**
	 * Native Component
	 */

	var NativeComponent = function () {
	  function NativeComponent(element) {
	    _classCallCheck(this, NativeComponent);

	    this._currentElement = element;
	  }

	  _createClass(NativeComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      // Parent native element
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;

	      var props = this._currentElement.props;
	      var type = this._currentElement.type;
	      var instance = {
	        _internal: this,
	        type: type,
	        props: props
	      };
	      var appendType = props.append; // Default is node

	      this._instance = instance;

	      // Clone a copy for style diff
	      this._prevStyleCopy = _extends({}, props.style);

	      var nativeNode = this.getNativeNode();

	      if (appendType !== TREE) {
	        if (childMounter) {
	          childMounter(nativeNode, parent);
	        } else {
	          _host2.default.driver.appendChild(nativeNode, parent);
	        }
	      }

	      if (this._currentElement && this._currentElement.ref) {
	        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
	      }

	      // Process children
	      var children = props.children;
	      if (children != null) {
	        this.mountChildren(children, context);
	      }

	      if (appendType === TREE) {
	        if (childMounter) {
	          childMounter(nativeNode, parent);
	        } else {
	          _host2.default.driver.appendChild(nativeNode, parent);
	        }
	      }

	      _host2.default.hook.Reconciler.mountComponent(this);

	      return instance;
	    }
	  }, {
	    key: 'mountChildren',
	    value: function mountChildren(children, context) {
	      var _this = this;

	      if (!Array.isArray(children)) {
	        children = [children];
	      }

	      var renderedChildren = {};

	      var renderedChildrenImage = children.map(function (element, index) {
	        var renderedChild = (0, _instantiateComponent2.default)(element);
	        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
	        renderedChildren[name] = renderedChild;
	        renderedChild._mountIndex = index;
	        // Mount
	        var mountImage = renderedChild.mountComponent(_this.getNativeNode(), context);
	        return mountImage;
	      });

	      this._renderedChildren = renderedChildren;

	      return renderedChildrenImage;
	    }
	  }, {
	    key: 'unmountChildren',
	    value: function unmountChildren(notRemoveChild) {
	      var renderedChildren = this._renderedChildren;

	      if (renderedChildren) {
	        for (var name in renderedChildren) {
	          var renderedChild = renderedChildren[name];
	          renderedChild.unmountComponent(notRemoveChild);
	        }
	        this._renderedChildren = null;
	      }
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(notRemoveChild) {
	      if (this._nativeNode) {
	        var ref = this._currentElement.ref;
	        if (ref) {
	          _ref2.default.detach(this._currentElement._owner, ref, this);
	        }

	        _instance2.default.remove(this._nativeNode);
	        if (!notRemoveChild) {
	          _host2.default.driver.removeChild(this._nativeNode, this._parent);
	        }
	        _host2.default.driver.removeAllEventListeners(this._nativeNode);
	      }

	      this.unmountChildren(notRemoveChild);

	      _host2.default.hook.Reconciler.unmountComponent(this);

	      this._currentElement = null;
	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	      this._instance = null;
	      this._prevStyleCopy = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
	      // Replace current element
	      this._currentElement = nextElement;

	      _ref2.default.update(prevElement, nextElement, this);

	      var prevProps = prevElement.props;
	      var nextProps = nextElement.props;

	      this.updateProperties(prevProps, nextProps);
	      this.updateChildren(nextProps.children, nextContext);

	      _host2.default.hook.Reconciler.receiveComponent(this);
	    }
	  }, {
	    key: 'updateProperties',
	    value: function updateProperties(prevProps, nextProps) {
	      var propKey = void 0;
	      var styleName = void 0;
	      var styleUpdates = void 0;
	      for (propKey in prevProps) {
	        if (propKey === CHILDREN || nextProps.hasOwnProperty(propKey) || !prevProps.hasOwnProperty(propKey) || prevProps[propKey] == null) {
	          continue;
	        }
	        if (propKey === STYLE) {
	          var lastStyle = this._prevStyleCopy;
	          for (styleName in lastStyle) {
	            if (lastStyle.hasOwnProperty(styleName)) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          this._prevStyleCopy = null;
	        } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
	          if (typeof prevProps[propKey] === 'function') {
	            _host2.default.driver.removeEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), prevProps[propKey]);
	          }
	        } else {
	          _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
	        }
	      }

	      for (propKey in nextProps) {
	        var nextProp = nextProps[propKey];
	        var prevProp = propKey === STYLE ? this._prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined;
	        if (propKey === CHILDREN || !nextProps.hasOwnProperty(propKey) || nextProp === prevProp || nextProp == null && prevProp == null) {
	          continue;
	        }
	        // Update style
	        if (propKey === STYLE) {
	          if (nextProp) {
	            // Clone property
	            nextProp = this._prevStyleCopy = _extends({}, nextProp);
	          } else {
	            this._prevStyleCopy = null;
	          }

	          if (prevProp != null) {
	            // Unset styles on `prevProp` but not on `nextProp`.
	            for (styleName in prevProp) {
	              if (prevProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	                styleUpdates = styleUpdates || {};
	                styleUpdates[styleName] = '';
	              }
	            }
	            // Update styles that changed since `prevProp`.
	            for (styleName in nextProp) {
	              if (nextProp.hasOwnProperty(styleName) && prevProp[styleName] !== nextProp[styleName]) {
	                styleUpdates = styleUpdates || {};
	                styleUpdates[styleName] = nextProp[styleName];
	              }
	            }
	          } else {
	            // Assign next prop when prev style is null
	            styleUpdates = nextProp;
	          }

	          // Update event binding
	        } else if (EVENT_PREFIX_REGEXP.test(propKey)) {
	          if (typeof prevProp === 'function') {
	            _host2.default.driver.removeEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), prevProp);
	          }

	          if (typeof nextProp === 'function') {
	            _host2.default.driver.addEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), nextProp);
	          }
	          // Update other property
	        } else {
	          var payload = {};
	          payload[propKey] = nextProp;
	          if (nextProp != null) {
	            _host2.default.driver.setAttribute(this.getNativeNode(), propKey, nextProp);
	          } else {
	            _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
	          }
	          if (process.env.NODE_ENV !== 'production') {
	            _host2.default.measurer && _host2.default.measurer.recordOperation({
	              instanceID: this._mountID,
	              type: 'update attribute',
	              payload: payload
	            });
	          }
	        }
	      }

	      if (styleUpdates) {
	        if (process.env.NODE_ENV !== 'production') {
	          _host2.default.measurer && _host2.default.measurer.recordOperation({
	            instanceID: this._mountID,
	            type: 'update style',
	            payload: styleUpdates
	          });
	        }
	        _host2.default.driver.setStyles(this.getNativeNode(), styleUpdates);
	      }
	    }
	  }, {
	    key: 'updateChildren',
	    value: function updateChildren(nextChildrenElements, context) {
	      var _this2 = this;

	      // prev rendered children
	      var prevChildren = this._renderedChildren;

	      if (nextChildrenElements == null && prevChildren == null) {
	        return;
	      }

	      var nextChildren = {};
	      var oldNodes = {};

	      if (nextChildrenElements != null) {
	        if (!Array.isArray(nextChildrenElements)) {
	          nextChildrenElements = [nextChildrenElements];
	        }

	        // Update next children elements
	        for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
	          var nextElement = nextChildrenElements[index];
	          var name = (0, _getElementKeyName2.default)(nextChildren, nextElement, index);
	          var prevChild = prevChildren && prevChildren[name];
	          var prevElement = prevChild && prevChild._currentElement;

	          if (prevChild != null && (0, _shouldUpdateComponent2.default)(prevElement, nextElement)) {
	            // Pass the same context when updating chidren
	            prevChild.updateComponent(prevElement, nextElement, context, context);
	            nextChildren[name] = prevChild;
	          } else {
	            // Unmount the prevChild when nextChild is different element type.
	            if (prevChild) {
	              var oldNativeNode = prevChild.getNativeNode();
	              // Delay remove child
	              prevChild.unmountComponent(true);
	              oldNodes[name] = oldNativeNode;
	            }
	            // The child must be instantiated before it's mounted.
	            nextChildren[name] = (0, _instantiateComponent2.default)(nextElement);
	          }
	        }
	      }

	      var firstPrevChild = void 0;
	      var delayRemoveFirstPrevChild = void 0;
	      // Unmount children that are no longer present.
	      if (prevChildren != null) {
	        for (var _name in prevChildren) {
	          if (!prevChildren.hasOwnProperty(_name)) {
	            continue;
	          }

	          var _prevChild = prevChildren[_name];
	          var shouldRemove = !nextChildren[_name];

	          // Store old first child ref for append node ahead and maybe delay remove it
	          if (!firstPrevChild) {
	            firstPrevChild = _prevChild;
	            delayRemoveFirstPrevChild = shouldRemove;
	          } else if (shouldRemove) {
	            _prevChild.unmountComponent();
	          }
	        }
	      }

	      if (nextChildren != null) {
	        (function () {
	          // `nextIndex` will increment for each child in `nextChildren`, but
	          // `lastIndex` will be the last index visited in `prevChildren`.
	          var lastIndex = 0;
	          var nextIndex = 0;
	          var lastPlacedNode = null;
	          var nextNativeNode = [];

	          var _loop = function _loop(_name2) {
	            if (!nextChildren.hasOwnProperty(_name2)) {
	              return 'continue';
	            }

	            var nextChild = nextChildren[_name2];
	            var prevChild = prevChildren && prevChildren[_name2];

	            if (prevChild === nextChild) {
	              var prevChildNativeNode = prevChild.getNativeNode();
	              // Convert to array type
	              if (!Array.isArray(prevChildNativeNode)) {
	                prevChildNativeNode = [prevChildNativeNode];
	              }

	              // If the index of `child` is less than `lastIndex`, then it needs to
	              // be moved. Otherwise, we do not need to move it because a child will be
	              // inserted or moved before `child`.
	              if (prevChild._mountIndex < lastIndex) {
	                // Get the last child
	                if (Array.isArray(lastPlacedNode)) {
	                  lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
	                }

	                for (var _i = prevChildNativeNode.length - 1; _i >= 0; _i--) {
	                  _host2.default.driver.insertAfter(prevChildNativeNode[_i], lastPlacedNode);
	                }
	              }

	              nextNativeNode = nextNativeNode.concat(prevChildNativeNode);

	              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	              prevChild._mountIndex = nextIndex;
	            } else {
	              if (prevChild != null) {
	                // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	              }

	              var parent = _this2.getNativeNode();
	              // Fragment extended native component, so if parent is fragment should get this._parent
	              if (Array.isArray(parent)) {
	                parent = _this2._parent;
	              }

	              nextChild.mountComponent(parent, context, function (newChild, parent) {
	                // TODO: Rework the duplicate code
	                var oldChild = oldNodes[_name2];
	                if (!Array.isArray(newChild)) {
	                  newChild = [newChild];
	                }

	                if (oldChild) {
	                  // The oldChild or newChild all maybe fragment
	                  if (!Array.isArray(oldChild)) {
	                    oldChild = [oldChild];
	                  }

	                  // If newChild count large then oldChild
	                  var lastNewChild = void 0;
	                  for (var _i2 = 0; _i2 < newChild.length; _i2++) {
	                    var child = newChild[_i2];
	                    if (oldChild[_i2]) {
	                      _host2.default.driver.replaceChild(child, oldChild[_i2]);
	                    } else {
	                      _host2.default.driver.insertAfter(child, lastNewChild);
	                    }
	                    lastNewChild = child;
	                  }

	                  // If newChild count less then oldChild
	                  if (newChild.length < oldChild.length) {
	                    for (var _i3 = newChild.length; _i3 < oldChild.length; _i3++) {
	                      _host2.default.driver.removeChild(oldChild[_i3]);
	                    }
	                  }
	                } else {
	                  // Insert child at a specific index

	                  // Get the last child
	                  if (Array.isArray(lastPlacedNode)) {
	                    lastPlacedNode = lastPlacedNode[lastPlacedNode.length - 1];
	                  }

	                  var prevFirstNativeNode = void 0;

	                  if (firstPrevChild && !lastPlacedNode) {
	                    prevFirstNativeNode = firstPrevChild.getNativeNode();
	                    if (Array.isArray(prevFirstNativeNode)) {
	                      prevFirstNativeNode = prevFirstNativeNode[0];
	                    }
	                  }

	                  for (var _i4 = newChild.length - 1; _i4 >= 0; _i4--) {
	                    var _child = newChild[_i4];
	                    if (lastPlacedNode) {
	                      _host2.default.driver.insertAfter(_child, lastPlacedNode);
	                    } else if (prevFirstNativeNode) {
	                      _host2.default.driver.insertBefore(_child, prevFirstNativeNode);
	                    } else {
	                      _host2.default.driver.appendChild(_child, parent);
	                    }
	                  }
	                }

	                nextNativeNode = nextNativeNode.concat(newChild);
	              });
	              nextChild._mountIndex = nextIndex;
	            }

	            nextIndex++;
	            lastPlacedNode = nextChild.getNativeNode();
	          };

	          for (var _name2 in nextChildren) {
	            var _ret2 = _loop(_name2);

	            if (_ret2 === 'continue') continue;
	          }

	          // Sync update native refs
	          if (Array.isArray(_this2._nativeNode)) {
	            // Clear all and push the new array
	            _this2._nativeNode.splice(0, _this2._nativeNode.length);
	            for (var i = 0; i < nextNativeNode.length; i++) {
	              _this2._nativeNode.push(nextNativeNode[i]);
	            }
	          }
	        })();
	      }

	      if (delayRemoveFirstPrevChild) {
	        firstPrevChild.unmountComponent();
	      }

	      this._renderedChildren = nextChildren;
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createElement(this._instance);
	        _instance2.default.set(this._nativeNode, this._instance);
	      }

	      return this._nativeNode;
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      return this.getNativeNode();
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      return this._currentElement.type;
	    }
	  }]);

	  return NativeComponent;
	}();

	exports.default = NativeComponent;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Ref manager
	 */

	exports.default = {
	  update: function update(prevElement, nextElement, component) {
	    var prevRef = prevElement != null && prevElement.ref;
	    var nextRef = nextElement != null && nextElement.ref;

	    // Update refs in owner component
	    if (prevRef !== nextRef) {
	      // Detach prev RenderedElement's ref
	      prevRef != null && this.detach(prevElement._owner, prevRef, component);
	      // Attach next RenderedElement's ref
	      nextRef != null && this.attach(nextElement._owner, nextRef, component);
	    }
	  },
	  attach: function attach(ownerComponent, ref, component) {
	    if (!ownerComponent) {
	      throw new Error('You might be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of Rax loaded.');
	    }

	    var instance = component.getPublicInstance();
	    if (typeof ref === 'function') {
	      ref(instance);
	    } else {
	      ownerComponent._instance.refs[ref] = instance;
	    }
	  },
	  detach: function detach(ownerComponent, ref, component) {
	    if (typeof ref === 'function') {
	      // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
	      ref(null);
	    } else {
	      // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
	      var instance = component.getPublicInstance();
	      if (ownerComponent._instance.refs[ref] === instance) {
	        delete ownerComponent._instance.refs[ref];
	      }
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isRem = isRem;
	exports.calcRem = calcRem;
	exports.getRem = getRem;
	exports.setRem = setRem;
	exports.isUnitNumber = isUnitNumber;
	exports.convertUnit = convertUnit;
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var UNITLESS_NUMBER_PROPS = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  // We make lineHeight default is px that is diff with w3c spec
	  // lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	  // Weex only
	  lines: true
	};
	var SUFFIX = 'rem';
	var REM_REG = /[-+]?\d*\.?\d+rem/g;

	var defaultRem = void 0;

	/**
	 * Is string contains rem
	 * @param {String} str
	 * @returns {Boolean}
	 */
	function isRem(str) {
	  return typeof str === 'string' && str.indexOf(SUFFIX) !== -1;
	}

	/**
	 * Calculate rem to pixels: '1.2rem' => 1.2 * rem
	 * @param {String} str
	 * @param {Number} rem
	 * @returns {number}
	 */
	function calcRem(str) {
	  var rem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRem;

	  return str.replace(REM_REG, function (remValue) {
	    return parseFloat(remValue) * rem + 'px';
	  });
	}

	function getRem() {
	  return defaultRem;
	}

	function setRem(rem) {
	  defaultRem = rem;
	}

	function isUnitNumber(val, prop) {
	  return typeof val === 'number' && !UNITLESS_NUMBER_PROPS[prop];
	}

	function convertUnit(val, prop) {
	  if (prop && isUnitNumber(val, prop)) {
	    return val * defaultRem + 'px';
	  } else if (isRem(val)) {
	    return calcRem(val);
	  }

	  return val;
	}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.transformPropsAttrsToStyle = transformPropsAttrsToStyle;
	exports.renamePropsAttr = renamePropsAttr;
	/**
	 * transformPropAttrsToStyle
	 *
	 * @param {Object} props
	 * @param {Array} attrs
	 */
	function transformPropsAttrsToStyle(props, attrs) {
	  props.style = props.style || {};

	  attrs.forEach(function (attr) {
	    if (props[attr] && !props.style[attr]) {
	      props.style[attr] = props[attr];
	      delete props[attr];
	    }
	  });

	  return props;
	};

	/**
	 * renamePropsAttr
	 *
	 * @param {Object} props
	 * @param {String} originalAttrName
	 * @param {String} newAttrName
	 */
	function renamePropsAttr(props, originalAttrName, newAttrName) {
	  if (props[originalAttrName] && !props[newAttrName]) {
	    props[newAttrName] = props[originalAttrName];
	    delete props[originalAttrName];
	  }

	  return props;
	}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = require("@weex-module/dom");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _index = __webpack_require__(37);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(16);

	var _index4 = _interopRequireDefault(_index3);

	var _index5 = __webpack_require__(15);

	var _index6 = _interopRequireDefault(_index5);

	var _index7 = __webpack_require__(39);

	var _index8 = _interopRequireDefault(_index7);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var css = {
	    container: {
	        width: '40rem',
	        height: '40rem',
	        alignItems: 'center',
	        justifyContent: 'center',
	        backgroundColor: '#3089dc',
	        borderRadius: '20rem'
	    },
	    small: {
	        width: '40rem',
	        height: '40rem',
	        borderRadius: '20rem'
	    },
	    medium: {
	        width: '48rem',
	        height: '48rem',
	        borderRadius: '24rem'
	    },
	    large: {
	        width: '56rem',
	        height: '56rem',
	        borderRadius: '28rem'
	    },
	    empty: {
	        backgroundColor: '#ffffff',
	        borderWidth: '1rem',
	        borderStyle: 'solid',
	        borderColor: '#cccccc'
	    },
	    text: {
	        fontSize: '28rem',
	        color: '#ffffff',
	        fontWeight: 'bold'
	    },
	    icon: {
	        fontSize: '28rem',
	        color: '#ffffff',
	        marginTop: '5rem'
	    },

	    smallIcon: {
	        fontSize: '28rem'
	    },

	    mediumIcon: {
	        fontSize: '32rem'
	    },

	    largeIcon: {
	        fontSize: '36rem'
	    },

	    disabled: {
	        borderWidth: '2rem',
	        borderStyle: 'solid',
	        borderColor: '#bbbbbb',
	        backgroundColor: '#dddddd'
	    },
	    disabledIcon: {
	        color: '#bbbbbb'
	    }
	};

	var CheckBox = function (_Component) {
	    _inherits(CheckBox, _Component);

	    function CheckBox(props) {
	        _classCallCheck(this, CheckBox);

	        var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));

	        _this.value = '';
	        return _this;
	    }

	    _createClass(CheckBox, [{
	        key: 'getContent',
	        value: function getContent(checked, disabled) {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                onPress = _props.onPress,
	                style = _props.style,
	                disabled = _props.disabled,
	                checked = _props.checked,
	                size = _props.size,
	                activeStyle = _props.activeStyle,
	                rect = _props.rect;

	            var disStyle = disabled ? css.disabled : null;

	            var disIconStyle = disabled ? css.disabledIcon : null;

	            var basicStyle = _extends({}, css.container, disStyle, css[size], style);

	            var iconStyle = _extends({}, css.icon, css[size + 'Icon'], disIconStyle);

	            if (rect) {
	                basicStyle['borderRadius'] = 0;
	                iconStyle['color'] = basicStyle['backgroundColor'];
	                basicStyle = _extends({}, basicStyle, css.empty);
	            }

	            if (checked === 'indeterminate') {
	                return (0, _rax.createElement)(_index8.default, { onPress: onPress, style: [basicStyle] }, (0, _rax.createElement)(_index2.default, { style: [iconStyle, { fontWeight: 'bold' }], name: 'minus' }));
	            }

	            if (checked === true) {
	                return (0, _rax.createElement)(_index8.default, { onPress: onPress, style: [basicStyle, activeStyle] }, (0, _rax.createElement)(_index2.default, { style: [iconStyle], name: 'select' }));
	            }

	            if (checked === false) {
	                return (0, _rax.createElement)(_index8.default, { onPress: onPress, style: [basicStyle, css.empty] });
	            }
	        }
	    }]);

	    return CheckBox;
	}(_rax.Component);

	exports.default = CheckBox;

	CheckBox.propTypes = {
	    checked: _rax.PropTypes.oneOf([true, false, 'indeterminate']),
	    disabled: _rax.PropTypes.bool,
	    onPress: _rax.PropTypes.func,
	    size: _rax.PropTypes.oneOf(['small', 'medium', 'large'])
	};

	CheckBox.defaultProps = {
	    checked: false,
	    disabled: false,
	    size: 'small',
	    onPress: function onPress() {}
	};
	module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	var isWeex = exports.isWeex = typeof callNative === 'function';
	var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var RefreshControl = function (_Component) {
	  _inherits(RefreshControl, _Component);

	  function RefreshControl() {
	    _classCallCheck(this, RefreshControl);

	    return _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments));
	  }

	  _createClass(RefreshControl, [{
	    key: 'render',
	    value: function render() {
	      if (_universalEnv.isWeex) {
	        var displayRefresh = this.props.refreshing ? 'show' : 'hide';
	        return (0, _rax.createElement)('refresh', _extends({}, this.props, { display: displayRefresh }), this.props.children);
	      } else {
	        return null;
	      }
	    }
	  }]);

	  return RefreshControl;
	}(_rax.Component);

	exports.default = RefreshControl;
	module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp2;

	var _rax = __webpack_require__(1);

	var _universalEnv = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Text = (_temp2 = _class = function (_Component) {
	  _inherits(Text, _Component);

	  function Text() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Text);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _this.renderText = function () {
	      var props = _this.props;
	      var nativeProps = _extends({}, props, {
	        style: props.style || {}
	      });

	      var textString = '';
	      if (props.children != null) {
	        if (!Array.isArray(props.children)) {
	          textString = props.children.toString();
	        } else {
	          textString = props.children.join('');
	        }
	      }

	      if (_this.context.isInAParentText) {
	        return (0, _rax.createElement)('span', nativeProps, textString);
	      }

	      if (props.onPress) {
	        nativeProps.onClick = props.onPress;
	      }

	      if (_universalEnv.isWeex) {
	        if (props.numberOfLines) {
	          nativeProps.style.lines = props.numberOfLines;
	        }

	        nativeProps.value = textString;

	        return (0, _rax.createElement)('text', nativeProps);
	      } else {
	        var styleProps = _extends({}, styles.text, nativeProps.style);
	        var numberOfLines = props.numberOfLines;
	        if (numberOfLines) {
	          if (parseInt(numberOfLines) === 1) {
	            styleProps.whiteSpace = 'nowrap';
	          } else {
	            styleProps.display = '-webkit-box';
	            styleProps.webkitBoxOrient = 'vertical';
	            styleProps.webkitLineClamp = String(numberOfLines);
	          }

	          styleProps.overflow = 'hidden';
	        }

	        return (0, _rax.createElement)('span', _extends({}, nativeProps, { style: styleProps }), textString);
	      }
	    }, _this.renderRichText = function () {
	      var props = _this.props;
	      var children = props.children;

	      var nativeProps = _extends({}, props, {
	        style: props.style || {}
	      });
	      var styleProps = _extends({}, styles.richtext, nativeProps.style);

	      if (_universalEnv.isWeex) {
	        children = transformChildren(children, _this);
	      }

	      return (0, _rax.createElement)('p', _extends({}, nativeProps, { style: styleProps }), children);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Text, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        isInAParentText: true
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var children = props.children;

	      if (!Array.isArray(children)) {
	        children = [children];
	      }

	      var nested = false;
	      for (var i = 0; i < children.length; i++) {
	        var child = children[i];
	        if (child && (typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
	          nested = true;
	          break;
	        }
	      }

	      return nested ? this.renderRichText() : this.renderText();
	    }
	  }]);

	  return Text;
	}(_rax.Component), _class.propTypes = {}, _class.contextTypes = {
	  isInAParentText: _rax.PropTypes.bool
	}, _class.childContextTypes = {
	  isInAParentText: _rax.PropTypes.bool
	}, _temp2);

	function transformChild(child, instance) {
	  var Com = child.type,
	      props = child.props;
	  var children = props.children;

	  if (typeof type === 'function') {
	    var childInstance = new Com();
	    childInstance.props = props;
	    if (children) {
	      childInstance.props.children = transformChildren(children, instance);
	    }
	    childInstance.context = instance.getChildContext();

	    return childInstance.render();
	  } else {
	    return child;
	  }
	}

	function transformChildren(children, instance) {
	  var elements = [];
	  if (!Array.isArray(children)) {
	    children = [children];
	  }

	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (typeof child === 'string') {
	      elements.push(child);
	    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
	      elements.push(transformChild(child, instance));
	    }
	  }

	  return elements;
	}

	var styles = {
	  text: {
	    border: '0 solid black',
	    position: 'relative',
	    boxSizing: 'border-box',
	    display: 'block',
	    flexDirection: 'column',
	    alignContent: 'flex-start',
	    flexShrink: 0,
	    fontSize: 32
	  },
	  richtext: {
	    marginTop: 0,
	    marginBottom: 0
	  }
	};

	exports.default = Text;
	module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(49);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(55);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(21);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	// Mixins & Functions

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	// Variables;


	var _functions2 = __webpack_require__(41);

	var _functions3 = _interopRequireDefault(_functions2);

	var _mixins2 = __webpack_require__(42);

	var _mixins3 = _interopRequireDefault(_mixins2);

	var _global2 = __webpack_require__(18);

	var _global3 = _interopRequireDefault(_global2);

	var _color2 = __webpack_require__(17);

	var _color3 = _interopRequireDefault(_color2);

	var _corner2 = __webpack_require__(43);

	var _corner3 = _interopRequireDefault(_corner2);

	var _font2 = __webpack_require__(44);

	var _font3 = _interopRequireDefault(_font2);

	var _line2 = __webpack_require__(46);

	var _line3 = _interopRequireDefault(_line2);

	var _shadow2 = __webpack_require__(47);

	var _shadow3 = _interopRequireDefault(_shadow2);

	var _icon2 = __webpack_require__(45);

	var _icon3 = _interopRequireDefault(_icon2);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	module.exports = _extends({}, _functions3.default, _mixins3.default, _global3.default, _color3.default, _corner3.default, _font3.default, _line3.default, _shadow3.default, _icon3.default);

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	'use strict';

	// ////
	// /// @group Utils 工具
	// ////

	// /// 去除数值单位的方法
	// ///
	// /// @param {String} $value
	// ///   带单位的数值
	// ///
	// /// @example.rxscss -.rxscss 用法
	// ///   $dimension: strip-units(10px);
	// ///
	// /// @example css - CSS 输出
	// ///   $dimension: 10;
	// ///
	// /// @return {Number}
	// function stripUnits(value) {
	//     return (value / (value * 0 + 1));
	// }

	// /// 检查一个值是否为合法的CSS长度
	// ///
	// /// @param {String} $value
	// /// @return {Number}
	// function isLength(value) {
	//     @return typeOf(value) != "null" and (strSlice(value + "", 1, 4) == "calc" // 是calc函数来计算的长度
	//     or typeOf(index(auto inherit initial 0, value)) == 'number'
	//     or (typeOf(value) == "number" and not(unitless(value))));
	// }

	// /// 将pixel单位转换为em单位
	// ///
	// /// @param {Number} $pxval
	// ///   pixel单位下的数值
	// ///
	// /// @param {Number} $base
	// ///   全局基础pixel单位下的字号
	// ///
	// /// @example.rxscss -.rxscss 用法
	// ///   .element {
	// ///     font-size: em(12, 14);
	// ///   }
	// ///
	// /// @example css - CSS 输出
	// ///   .element {
	// ///     font-size: 0.85714em;
	// ///   }
	// /// @require {function} strip-units
	// /// @require {variable} $font-size-base-body1
	// ///
	// /// @return {String}

	// function em(pxval, base: fontSizeBaseBody1) {
	//     @if not unitless(pxval) {
	//         pxval: stripUnits(pxval);
	//     }
	//     @if not unitless(base) {
	//         base: stripUnits(base);
	//     }
	//     @return (pxval / base) * 1em;
	// }

	// /// 将pixel单位转换为rem单位
	// ///
	// /// @param {Number} $pxval
	// ///   pixel单位下的数值
	// ///
	// /// @param {Number} $base
	// ///   全局基础pixel单位下的宽高或者字号
	// ///
	// /// @example.rxscss -.rxscss 用法
	// ///   .element {
	// ///     font-size: dp2rem(375);
	// ///   }
	// ///
	// /// @example css - CSS 输出
	// ///   .element {
	// ///     font-size: 10rem;
	// /// @require {function} strip-units
	// /// @require {variable} $rem-base
	// ///
	// /// @return {String}
	// function dp2rem(dp) {
	//     @if (unit(dp) == rem) {
	//         @return dp;
	//     } @else {
	//         @return stripUnits(dp) / remBase * 1rem;
	//     }
	// }


	// /// 转化为四值属性的方法，该属性可以有 1 到 4 个值，如：margin, padding, position
	// ///
	// /// @param {List} $shorthand
	// ///
	// /// @example.rxscss -.rxscss 用法
	// ///   .element {
	// ///     margin: unpack(1em 2em);
	// ///     padding: unpack(1em 2em 2em);
	// ///   }
	// ///
	// /// @example css - CSS 输出
	// ///   .element {
	// ///     margin: 1em 2em 1em 2em;
	// ///     padding: 1em 2em 2em 2em;
	// ///   }
	// ///
	// /// @return {List}
	// function unpack(shorthand) {
	//     @if length(shorthand) == 1 {
	//         @return nth(shorthand, 1) nth(shorthand, 1) nth(shorthand, 1) nth(shorthand, 1);
	//     } @else if length(shorthand) == 2 {
	//         @return nth(shorthand, 1) nth(shorthand, 2) nth(shorthand, 1) nth(shorthand, 2);
	//     } @else if length(shorthand) == 3 {
	//         @return nth(shorthand, 1) nth(shorthand, 2) nth(shorthand, 3) nth(shorthand, 2);
	//     } @else {
	//         @return shorthand;
	//     }
	// }

	/// 圆角生成器
	///
	/// @access private
	///
	/// @param {String} $side [$corner-sides-base] - 需要加圆角的面
	/// @param {String} $radius [$corner-radius-base] - 圆角曲率
	///
	/// @example.rxscss -.rxscss 用法
	///   .element {
	///     border-radius: corner-maker();
	///   }
	///
	/// @example css - CSS 输出
	///   .element {
	///     border-radius: 3px 3px 3px 3px;
	///   }
	///
	/// @return {List}


	module.exports = {
	    // stripUnits,
	    // isLength,
	    // em,
	    // dp2rem,
	    // unpack,
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';

	// ////
	// /// @group Utils 工具
	// ////

	// /// 清除浮动
	// ///
	// /// @link http://cssmojo.com/latest_new_clearfix_so_far/
	// ///
	// /// @example.rxscss
	// ///   .wrapper {
	// ///      @include clearfix;
	// ///   }
	// ///

	// /// pixel转换为rem
	// ///
	// /// @example.rxscss
	// ///   .element {
	// ///      @include dp2rem(left, 75px);
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///     left: 2rem;
	// ///   }
	// function dp2rem(k, v) {
	//     #{k}: dp2rem(v);
	// }

	// /// 单行截取文字，添加『...』结尾
	// ///
	// /// @param {Number | String} $width [100%] - 最大宽度，CSS长度，包括calc方法定义的表达式
	// ///
	// /// @example.rxscss - 使用
	// ///   .element {
	// ///     @include ellipsis;
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///     display: inline-block;
	// ///     max-width: 100%;
	// ///     overflow: hidden;
	// ///     text-overflow: ellipsis;
	// ///     white-space: nowrap;
	// ///     word-wrap: normal;
	// ///   }
	// function ellipsis(width: '100%') {
	//     return {
	//         display: 'inlineBlock';
	//         maxWidth: width;
	//         overflow: 'hidden';
	//         textOverflow: 'ellipsis';
	//         whiteSpace: 'nowrap';
	//         wordWrap: 'normal';
	//     }

	// }

	// /// 多行截取文字，添加『...』结尾
	// ///
	// /// @param {Number | String} $line-height [1.2em] - 行高
	// /// @param {Number} $line-count [2] - 行数, 超出行数开始截取
	// /// @param {Color} $bg-color [#fff] - 文本背景色
	// ///
	// /// @example.rxscss - 使用
	// ///   .element {
	// ///     @include multi-line-ellipsis(1.2em, 3, #fff);
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///     overflow: hidden;
	// ///     position: relative;
	// ///     line-height: 1.2em;
	// ///     max-height: 3.6em;
	// ///     text-align: justify;
	// ///     padding-right: 0em;
	// ///   }
	// ///
	// ///   .element:before {
	// ///     content: '...';
	// ///     position: absolute;
	// ///     right: 0;
	// ///     bottom: 0;
	// ///     background: #fff;
	// ///   }
	// ///
	// ///   .element:after {
	// ///     content: '';
	// ///     position: absolute;
	// ///     right: 0;
	// ///     width: 1em;
	// ///     height: 1em;
	// ///     margin-top: 0.2em;
	// ///     background: #fff;
	// ///   }
	// function multiLineEllipsis(
	//     lineHeight: 1.2em,
	//     lineCount: 2,
	//     bgColor: #fff
	// ) {
	//     overflow: hidden;
	//     position: relative;
	//     lineHeight: lineHeight;
	//     maxHeight: lineHeight * lineCount;
	//     textAlign: justify;
	//     paddingRight: 0em;

	//     &:before {
	//         content: '...';
	//         position: absolute;
	//         right: 0;
	//         bottom: 0;
	//         background: bgColor;
	//     }

	//     &:after {
	//         content: '';
	//         position: absolute;
	//         right: 0;
	//         width: 1em;
	//         height: 1em;
	//         marginTop: 0.2em;
	//         background: bgColor;
	//     }
	// }

	// /// 隐藏文字
	// ///
	// /// 『text-indent: -9999px』Hack 的替代版本
	// ///
	// /// @link http://nicolasgallagher.com/another-css-image-replacement-technique
	// ///
	// /// @example.rxscss
	// ///   .element {
	// ///      @include hide-text;
	// ///      background: url(logo.png);
	// ///   }
	// ///
	// @mixin hideText {
	//     font: 0/0 a;
	//     textShadow: none;
	//     color: transparent;
	// }

	// /// 将元素垂直(水平)居中 (transform 版本)
	// ///
	// /// @param {String} $inner-selector ['.inner'] - 直接子选择器名称
	// /// @param {Bool} $horizontal [true] - 是否水平居中
	// ///
	// /// @example.rxscss - 使用
	// ///   .element {
	// ///      @include center-tl;
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///       position: relative;
	// ///   }
	// ///
	// ///   .element > .inner {
	// ///       position: absolute;
	// ///       top: 50%;
	// ///       left: 50%;
	// ///       transform: translate(-50%, -50%);
	// ///   }
	// ///
	// function centerTl(
	//     innerSelector: '.inner',
	//     horizontal: true
	// ) {

	//     position: relative;
	//     innerSelector: unquote(innerSelector);

	//     & > #{innerSelector} {
	//         position: absolute;
	//         top: 50%;
	//         translateVal: translatey(50%);

	//         @if horizontal {
	//             left: 50%;
	//             translateVal: translate(50%, 50%);
	//         }

	//         transform: translateVal;
	//     }

	// }

	// /// 将元素垂直(水平)居中 (table 版本)
	// ///
	// /// @param {String} $inner-selector ['.inner'] - 直接子选择器名称
	// /// @param {Bool} $horizontal [true] - 是否水平居中
	// ///
	// /// @example.rxscss - 使用
	// ///   .element {
	// ///      @include center-td;
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///       text-align: center;
	// ///       display: table;
	// ///   }
	// ///
	// ///   .element > .inner {
	// ///       display: table-cell;
	// ///       vertical-align: middle;
	// ///   }
	// ///
	// function centerTd (
	//     innerSelector: '.inner',
	//     horizontal: true
	// ) {

	//     @if horizontal {
	//         textAlign: center;
	//     }

	//     display: table;
	//     innerSelector: unquote(innerSelector);

	//     & > #{innerSelector} {
	//         display: tableCell;
	//         verticalAlign: middle;
	//     }

	// }

	// /// 快捷设置元素width,height的方法
	// ///
	// /// @param {String | List} $size - CSS尺寸长度
	// ///
	// /// @example.rxscss - 使用
	// ///   .element {
	// ///     @include size(2em 4em);
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///     width: 2em;
	// ///     height: 4em;
	// ///   }
	// ///
	// function size(size) {

	//     @if length(size) == 1 {
	//         width: size;
	//         height: size;
	//     } @else if length(size) == 2 {
	//         width: nth(size, 1);
	//         height: nth(size, 2);
	//     }

	// }

	// /// 快捷设置元素postion的方法 (传入null参数可略过一个方位)
	// ///
	// /// @param {String} $position [relative]
	// ///   CSS position属性值
	// ///
	// /// @param {List} $coordinates [null null null null]
	// ///   上、右、下、左 四个边值，可以传入1 ~ 4个值
	// ///
	// /// @example.rxscss - 使用
	// ///   .element {
	// ///     @include position(absolute, 0 null null 10px);
	// ///   }
	// ///
	// /// @example css - 输出
	// ///   .element {
	// ///     position: absolute;
	// ///     left: 10px;
	// ///     top: 0;
	// ///   }
	// ///
	// /// @require {function} is-length
	// /// @require {function} unpack
	// function position(position: relative, coordinates: null null null null) {

	//     // 如果参数是数组
	//     @if typeOf(position) == list {
	//         coordinates: position;
	//         position: relative;
	//     }

	//     coordinates: unpack(coordinates);

	//     offsets: (
	//         top: nth(coordinates, 1),
	//         right: nth(coordinates, 2),
	//         bottom: nth(coordinates, 3),
	//         left: nth(coordinates, 4)
	//     );

	//     position: position;

	//     @each offset, value in offsets {

	//         // 如果是合法长度
	//         @if isLength(value) {
	//             #{offset}: value;
	//         }
	//     }
	// }


	// // 三角型生成器(8种形态)
	// //
	// // @param {number | list} size
	// //   三角形尺寸
	// //   传入一个参数，生成等宽高三角形；传入数组且长度为2，第一个设置宽度，第二个设置高度
	// //
	// // @param {string | list} color
	// //   传入一个参数，设置三角形颜色；传入数组且长度为2，第一个设置三角形颜色，第二个设置背景色
	// //
	// // @param {string} direction
	// //   三角形朝向，可传参数：up | down | right | left | upRight | upLeft | downRight | downLeft | insetUp | insetDown | insetLeft | insetRight
	// //
	// // @example.rxscss  使用
	// //   .element {
	// //     &:before {
	// //       content: " ";
	// //       @include triangle(100px 200px, blue, up);
	// //     }
	// //   }
	// //
	// // @example css  输出
	// //   .example:before {
	// //     content: " ";
	// //     height: 0;
	// //     width: 0;
	// //     borderBottom: 200px solid blue;
	// //     borderLeft: 50px solid transparent;
	// //     borderRight: 50px solid transparent;
	// //   }
	// //
	// function triangle(size, color, direction) {
	//     width: nth(size, 1);
	//     height: nth(size, length(size));
	//     foregroundColor: nth(color, 1);
	//     backgroundColor: if(length(color) == 2, nth(color, 2), transparent);
	//     height: 0;
	//     width: 0;

	//     @if (direction == up) or (direction == down) or (direction == right) or (direction == left) {
	//         width: width / 2;
	//         height: if(length(size) > 1, height, height/2);

	//         @if direction == up {
	//             borderBottom: height solid foregroundColor;
	//             borderLeft: width solid backgroundColor;
	//             borderRight: width solid backgroundColor;
	//         } @else if direction == right {
	//             borderBottom: width solid backgroundColor;
	//             borderLeft: height solid foregroundColor;
	//             borderTop: width solid backgroundColor;
	//         } @else if direction == down {
	//             borderLeft: width solid backgroundColor;
	//             borderRight: width solid backgroundColor;
	//             borderTop: height solid foregroundColor;
	//         } @else if direction == left {
	//             borderBottom: width solid backgroundColor;
	//             borderRight: height solid foregroundColor;
	//             borderTop: width solid backgroundColor;
	//         }
	//     } @else if (direction == upRight) or (direction == upLeft) {
	//         borderTop: height solid foregroundColor;

	//         @if direction == upRight {
	//             borderLeft: width solid backgroundColor;
	//         } @else if direction == upLeft {
	//             borderRight: width solid backgroundColor;
	//         }
	//     } @else if (direction == downRight) or (direction == downLeft) {
	//         borderBottom: height solid foregroundColor;

	//         @if direction == downRight {
	//             borderLeft: width solid backgroundColor;
	//         } @else if direction == downLeft {
	//             borderRight: width solid backgroundColor;
	//         }
	//     } @else if (direction == insetUp) {
	//         borderColor: backgroundColor backgroundColor foregroundColor;
	//         borderStyle: solid;
	//         borderWidth: height width;
	//     } @else if (direction == insetDown) {
	//         borderColor: foregroundColor backgroundColor backgroundColor;
	//         borderStyle: solid;
	//         borderWidth: height width;
	//     } @else if (direction == insetRight) {
	//         borderColor: backgroundColor backgroundColor backgroundColor foregroundColor;
	//         borderStyle: solid;
	//         borderWidth: width height;
	//     } @else if (direction == insetLeft) {
	//         borderColor: backgroundColor foregroundColor backgroundColor backgroundColor;
	//         borderStyle: solid;
	//         borderWidth: width height;
	//     }
	// }

	// // flex布局的box部分
	// function flexbox(vertical: flexStart, horizontal: flexStart) {
	//     display: flex;
	//     display: WebkitBox;
	//     @include justifyContent(horizontal);
	//     @include alignItems(vertical);
	// }

	// // flex布局的内容部分
	// function flex(value: 1) {
	//     display: block;
	//     flex: value;
	//     WebkitBoxFlex: value;
	// }

	// // flex布局的box部分, inline
	// function flexboxInline(vertical: flexStart, horizontal: flexStart) {
	//     display: inlineFlex;
	//     display: WebkitInlineBox;

	//     @include justifyContent(horizontal);
	//     @include alignItems(vertical);
	// }

	// //flex布局下, 水平对齐方式
	// function justifyContent(value: flexStart){
	//     boxPack: value;

	//     @if(value == flexStart){
	//         boxPack: start;
	//     }@else if(value == flexEnd){
	//         boxPack: end;
	//     }@else if(value == spaceBetween){
	//         boxPack: justify;
	//     }

	//     justifyContent: value;
	//     WebkitBoxPack: boxPack;
	// }

	// //处理flexDirection, 仅支持水平和垂直, 其它值无法匹配
	// function flexDirection(value: row){
	//     @if(value == column){
	//         flexDirection: value;
	//         WebkitBoxOrient: vertical;
	//     }@else{
	//         flexDirection: value;
	//         WebkitBoxOrient: horizontal;
	//     }
	// }

	// //flex布局下, 垂直对齐方式
	// function alignItems(value: flexStart){
	//     boxAlign: value;

	//     @if(value == flexStart){
	//         boxAlign: start;
	//     }@else if(value == flexEnd){
	//         boxAlign: end;
	//     }

	//     alignItems: value;
	//     WebkitBoxAlign: boxAlign;
	// }


	// function transform(t) {
	//     WebkitTransform: t;
	//     transform: t ;
	// }

	// function boxPack(p: center) {
	//     WebkitBoxPack: p;
	// }

	// function boxAlign(a: center) {
	//     WebkitBoxAlign: a;
	// }

	// function overflowScroll(d: y) {
	//     overflow#{d}: auto;
	//     WebkitOverflowScrolling: touch;
	// }

	// // 快捷方式
	// function fontSize(v) {
	//     @include dp2rem(fontSize, v);
	// }

	// function width(v) {
	//     @include dp2rem(width, v);
	// }

	// function height(v) {
	//     @include dp2rem(height, v);
	// }

	// function lineHeight(v) {
	//     @include dp2rem(lineHeight, v);
	// }

	// function minWidth(v) {
	//     @include dp2rem(minWidth, v);
	// }

	// function maxWidth(v) {
	//     @include dp2rem(maxWidth, v);
	// }

	// function minHeight(v) {
	//     @include dp2rem(minWidth, v);
	// }

	// function maxHeight(v) {
	//     @include dp2rem(maxWidth, v);
	// }

	// function top(v) {
	//     @include dp2rem(top, v);
	// }

	// function right(v) {
	//     @include dp2rem(right, v);
	// }

	// function bottom(v) {
	//     @include dp2rem(bottom, v);
	// }

	// function left(v) {
	//     @include dp2rem(left, v);
	// }

	// function paddingTop(v) {
	//     @include dp2rem(paddingTop, v);
	// }

	// function paddingRight(v) {
	//     @include dp2rem(paddingRight, v);
	// }

	// function paddingBottom(v) {
	//     @include dp2rem(paddingBottom, v);
	// }

	// function paddingLeft(v) {
	//     @include dp2rem(paddingLeft, v);
	// }

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function padding() {
	    var pt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var pr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pt;
	    var pb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pt;
	    var pl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : pr;

	    return {
	        paddingTop: pt,
	        paddingRight: pr,
	        paddingBottom: pb,
	        paddingLeft: pl
	    };
	}
	function margin() {
	    var pt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	    var pr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : pt;
	    var pb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pt;
	    var pl = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : pr;

	    return {
	        marginTop: pt,
	        marginRight: pr,
	        marginBottom: pb,
	        marginLeft: pl
	    };
	}

	function border() {
	    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'solid';
	    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#ffffff';
	    var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	    if (typeof width == 'string' && width.indexOf('px') > -1) {
	        width = width.split('px')[0] * 2;
	    }
	    if (direction) {
	        var _ref;

	        var x = direction[0].toUpperCase() + direction.slice(1);
	        return _ref = {}, _defineProperty(_ref, 'border' + x + 'Width', width), _defineProperty(_ref, 'border' + x + 'Style', style), _defineProperty(_ref, 'border' + x + 'Color', color), _ref;
	    } else {
	        return {
	            borderWidth: width,
	            borderStyle: style,
	            borderColor: color
	        };
	    }
	}
	// function marginTop(v) {
	//     @include dp2rem(marginTop, v);
	// }

	// function marginRight(v) {
	//     @include dp2rem(marginRight, v);
	// }

	// function marginBottom(v) {
	//     @include dp2rem(marginBottom, v);
	// }

	// function marginLeft(v) {
	//     @include dp2rem(marginLeft, v);
	// }

	// function margin(mt: 0, mr: mt, mb: mt, ml: mr) {
	//     margin: dp2rem(mt) dp2rem(mr) dp2rem(mb) dp2rem(ml);
	// }

	// function hairlines(k: border, w: 0.5px, s: solid, c: #c4c6cf) {
	//     stripd: stripUnits(w);

	//     @if (stripd == 0.5) {
	//         #{k}: w * 2 s c;
	//         .#{cssPrefix}hairlines & {
	//             borderWidth: w;
	//         }
	//     } @else {
	//         #{k}: w s c;
	//     }
	// }

	// function border(w: 0.5px, s: solid, c: #c4c6cf) {
	//     @include hairlines(border, w, s, c);
	// }

	// function borderTop(w: 0.5px, s: solid, c: #c4c6cf) {
	//     @include hairlines(borderTop, w, s, c);
	// }

	// function borderRight(w: 0.5px, s: solid, c: #c4c6cf) {
	//     @include hairlines(borderRight, w, s, c);
	// }

	// function borderBottom(w: 0.5px, s: solid, c: #c4c6cf) {
	//     @include hairlines(borderBottom, w, s, c);
	// }

	// function borderLeft(w: 0.5px, s: solid, c: #c4c6cf) {
	//     @include hairlines(borderLeft, w, s, c);
	// }

	// function borderRadius(v) {
	//     @include dp2rem(borderRadius, v);
	// }

	// function borderTopLeftRadius(v) {
	//     @include dp2rem(borderTopLeftRadius, v);
	// }

	// function borderTopRightRadius(v) {
	//     @include dp2rem(borderTopRightRadius, v);
	// }

	// function borderBottomRightRadius(v) {
	//     @include dp2rem(borderBottomRightRadius, v);
	// }

	// function borderBottomLeftRadius(v) {
	//     @include dp2rem(borderBottomLeftRadius, v);
	// }

	// function borderWidth(v: '0.5px') {
	//     stripd: stripUnits(v);

	//     @if (stripd == 0.5) {
	//         borderWidth: v * 2;
	//         .#{cssPrefix}hairlines & {
	//             borderWidth: v;
	//         }
	//     } @else {
	//         borderWidth: v;
	//     }
	// }

	module.exports = {
	    // dp2rem,
	    // ellipsis,
	    // multiLineEllipsis,
	    // centerTl,
	    // centerTd ,
	    // size,
	    // position,
	    // triangle,
	    // flexbox,
	    // flex,
	    // flexboxInline,
	    // justifyContent,
	    // flexDirection,
	    // alignItems,
	    // transform,
	    // boxPack,
	    // boxAlign,
	    // overflowScroll,
	    // fontSize,
	    // width,
	    // height,
	    // lineHeight,
	    // minWidth,
	    // maxWidth,
	    // minHeight,
	    // maxHeight,
	    // top,
	    // right,
	    // bottom,
	    // left,
	    // paddingTop,
	    // paddingRight,
	    // paddingBottom,
	    // paddingLeft,
	    padding: padding,
	    margin: margin,
	    border: border
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	////
	/// @group Variables 变量
	/// @module corner: 边角
	/// @category style
	////


	var cornerRadiusBase = (0, _nukeVarLoader.varLoader)('corner-radius-base', '8');

	/// Radius 0
	/// @export
	/// @type String
	var cornerRadiusR0 = (0, _nukeVarLoader.varLoader)('corner-radius-r0', '0');

	/// Radius 1
	/// @export
	/// @type String
	var cornerRadiusR1 = (0, _nukeVarLoader.varLoader)('corner-radius-r1', '8');

	/// Radius 2
	/// @export
	/// @type String
	var cornerRadiusR2 = (0, _nukeVarLoader.varLoader)('corner-radius-r2', '4');

	/// Radius Half
	/// @export
	var cornerRadiusHalf = (0, _nukeVarLoader.varLoader)('corner-radius-half', '50%');

	/// Radius Circle
	/// @export
	var cornerRadiusCircle = (0, _nukeVarLoader.varLoader)('corner-radius-circle', '100%');

	var cornerSidesBase = (0, _nukeVarLoader.varLoader)('corner-sides-base', "base");
	var cornerSidesTop = (0, _nukeVarLoader.varLoader)('corner-sides-top', "top");
	var cornerSidesRight = (0, _nukeVarLoader.varLoader)('corner-sides-right', "right");
	var cornerSidesBottom = (0, _nukeVarLoader.varLoader)('corner-sides-bottom', "bottom");
	var cornerSidesLeft = (0, _nukeVarLoader.varLoader)('corner-sides-left', "left");
	var cornerSidesTl = (0, _nukeVarLoader.varLoader)('corner-sides-tl', "topLeft");
	var cornerSidesTr = (0, _nukeVarLoader.varLoader)('corner-sides-tr', "topRight");
	var cornerSidesBl = (0, _nukeVarLoader.varLoader)('corner-sides-bl', "bottomLeft");
	var cornerSidesBr = (0, _nukeVarLoader.varLoader)('corner-sides-br', "bottomRight");

	/// Corner R0
	/// @access private
	/// @unconfigurable
	var cornerR0 = (0, _nukeVarLoader.varLoader)('corner-r0', cornerMaker(cornerRadiusBase, cornerRadiusR0));

	/// Corner R0 (top)
	/// @access private
	/// @unconfigurable
	var cornerR0Top = (0, _nukeVarLoader.varLoader)('corner-r0-top', cornerMaker(cornerSidesTop, cornerRadiusR0));

	/// Corner R0 (right)
	/// @access private
	/// @unconfigurable
	var cornerR0Right = (0, _nukeVarLoader.varLoader)('corner-r0-right', cornerMaker(cornerSidesRight, cornerRadiusR0));

	/// Corner R0 (bottom)
	/// @access private
	/// @unconfigurable
	var cornerR0Bottom = (0, _nukeVarLoader.varLoader)('corner-r0-bottom', cornerMaker(cornerSidesBottom, cornerRadiusR0));

	/// Corner R0 (left)
	/// @access private
	/// @unconfigurable
	var cornerR0Left = (0, _nukeVarLoader.varLoader)('corner-r0-left', cornerMaker(cornerSidesLeft, cornerRadiusR0));

	/// Corner R1
	/// @unconfigurable
	/// @access private
	var cornerR1 = (0, _nukeVarLoader.varLoader)('corner-r1', cornerMaker());

	/// Corner R1 (top)
	/// @access private
	/// @unconfigurable
	var cornerR1Top = (0, _nukeVarLoader.varLoader)('corner-r1-top', cornerMaker(cornerSidesTop));

	/// Corner R1 (right)
	/// @access private
	/// @unconfigurable
	var cornerR1Right = (0, _nukeVarLoader.varLoader)('corner-r1-right', cornerMaker(cornerSidesRight));

	/// Corner R1 (bottom)
	/// @access private
	/// @unconfigurable
	var cornerR1Bottom = (0, _nukeVarLoader.varLoader)('corner-r1-bottom', cornerMaker(cornerSidesBottom));

	/// Corner R1 (left)
	/// @access private
	/// @unconfigurable
	var cornerR1Left = (0, _nukeVarLoader.varLoader)('corner-r1-left', cornerMaker(cornerSidesLeft));

	/// Corner R2
	/// @access private
	/// @unconfigurable
	var cornerR2 = (0, _nukeVarLoader.varLoader)('corner-r2', cornerMaker(cornerRadiusBase, cornerRadiusR2));

	/// Corner R2 (top)
	/// @access private
	/// @unconfigurable
	var cornerR2Top = (0, _nukeVarLoader.varLoader)('corner-r2-top', cornerMaker(cornerSidesTop, cornerRadiusR2));

	/// Corner R2 (right)
	/// @access private
	/// @unconfigurable
	var cornerR2Right = (0, _nukeVarLoader.varLoader)('corner-r2-right', cornerMaker(cornerSidesRight, cornerRadiusR2));

	/// Corner R2 (bottom)
	/// @access private
	/// @unconfigurable
	var cornerR2Bottom = (0, _nukeVarLoader.varLoader)('corner-r2-bottom', cornerMaker(cornerSidesBottom, cornerRadiusR2));

	/// Corner R2 (left)
	/// @access private
	/// @unconfigurable
	var cornerR2Left = (0, _nukeVarLoader.varLoader)('corner-r2-left', cornerMaker(cornerSidesLeft, cornerRadiusR2));

	/// Corner Half
	/// @access private
	/// @unconfigurable
	var cornerRHalf = (0, _nukeVarLoader.varLoader)('corner-r-half', cornerMaker(cornerRadiusBase, cornerRadiusHalf));

	/// Corner Half (top)
	/// @access private
	/// @unconfigurable
	var cornerRHalfTop = (0, _nukeVarLoader.varLoader)('corner-r-half-top', cornerMaker(cornerSidesTop, cornerRadiusHalf));

	/// Corner Half (right)
	/// @access private
	/// @unconfigurable
	var cornerRHalfRight = (0, _nukeVarLoader.varLoader)('corner-r-half-right', cornerMaker(cornerSidesRight, cornerRadiusHalf));

	/// Corner Half (bottom)
	/// @access private
	/// @unconfigurable
	var cornerRHalfBottom = (0, _nukeVarLoader.varLoader)('corner-r-half-bottom', cornerMaker(cornerSidesBottom, cornerRadiusHalf));

	/// Corner Half (left)
	/// @access private
	/// @unconfigurable
	var cornerRHalfLeft = (0, _nukeVarLoader.varLoader)('corner-r-half-left', cornerMaker(cornerSidesLeft, cornerRadiusHalf));

	/// Corner Circle
	/// @access private
	/// @unconfigurable
	var cornerRCircle = (0, _nukeVarLoader.varLoader)('corner-r-circle', cornerMaker(cornerRadiusBase, cornerRadiusCircle));

	/// Corner Circle (top)
	/// @access private
	/// @unconfigurable
	var cornerRCircleTop = (0, _nukeVarLoader.varLoader)('corner-r-circle-top', cornerMaker(cornerSidesTop, cornerRadiusCircle));

	/// Corner Circle (right)
	/// @access private
	/// @unconfigurable
	var cornerRCircleRight = (0, _nukeVarLoader.varLoader)('corner-r-circle-right', cornerMaker(cornerSidesRight, cornerRadiusCircle));

	/// Corner Circle (bottom)
	/// @access private
	/// @unconfigurable
	var cornerRCircleBottom = (0, _nukeVarLoader.varLoader)('corner-r-circle-bottom', cornerMaker(cornerSidesBottom, cornerRadiusCircle));

	/// Corner Circle (left)
	/// @access private
	/// @unconfigurable
	var cornerRCircleLeft = (0, _nukeVarLoader.varLoader)('corner-r-circle-left', cornerMaker(cornerSidesLeft, cornerRadiusCircle));

	/// 圆角生成器
	///
	/// @access private
	///
	/// @param {String} $side [$corner-sides-base] - 需要加圆角的面
	/// @param {String} $radius [$corner-radius-base] - 圆角曲率
	///
	/// @example.rxscss -.rxscss 用法
	///   .element {
	///     border-radius: corner-maker();
	///   }
	///
	/// @example css - CSS 输出
	///   .element {
	///     border-radius: 3px 3px 3px 3px;
	///   }
	///
	/// @return {List}

	function cornerMaker() {
	    var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : cornerSidesBase;
	    var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cornerRadiusBase;

	    var tl = radius;
	    var tr = radius;
	    var bl = radius;
	    var br = radius;

	    if (side == 'top') {
	        br = 0;
	        bl = 0;
	    } else if (side == 'right') {
	        tl = 0;
	        bl = 0;
	    } else if (side == 'down') {
	        tr = 0;
	        tl = 0;
	    } else if (side == 'left') {
	        tr = 0;
	        br = 0;
	    }

	    return tl + ' ' + tr + ' ' + br + ' ' + bl;
	}

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 'corner-radius-base', cornerRadiusBase), _defineProperty(_module$exports, 'corner-radius-r0', cornerRadiusR0), _defineProperty(_module$exports, 'corner-radius-r1', cornerRadiusR1), _defineProperty(_module$exports, 'corner-radius-r2', cornerRadiusR2), _defineProperty(_module$exports, 'corner-radius-half', cornerRadiusHalf), _defineProperty(_module$exports, 'corner-radius-circle', cornerRadiusCircle), _defineProperty(_module$exports, 'corner-sides-base', cornerSidesBase), _defineProperty(_module$exports, 'corner-sides-top', cornerSidesTop), _defineProperty(_module$exports, 'corner-sides-right', cornerSidesRight), _defineProperty(_module$exports, 'corner-sides-bottom', cornerSidesBottom), _defineProperty(_module$exports, 'corner-sides-left', cornerSidesLeft), _defineProperty(_module$exports, 'corner-sides-tl', cornerSidesTl), _defineProperty(_module$exports, 'corner-sides-tr', cornerSidesTr), _defineProperty(_module$exports, 'corner-sides-bl', cornerSidesBl), _defineProperty(_module$exports, 'corner-sides-br', cornerSidesBr), _defineProperty(_module$exports, 'corner-r0', cornerR0), _defineProperty(_module$exports, 'corner-r0-top', cornerR0Top), _defineProperty(_module$exports, 'corner-r0-right', cornerR0Right), _defineProperty(_module$exports, 'corner-r0-bottom', cornerR0Bottom), _defineProperty(_module$exports, 'corner-r0-left', cornerR0Left), _defineProperty(_module$exports, 'corner-r1', cornerR1), _defineProperty(_module$exports, 'corner-r1-top', cornerR1Top), _defineProperty(_module$exports, 'corner-r1-right', cornerR1Right), _defineProperty(_module$exports, 'corner-r1-bottom', cornerR1Bottom), _defineProperty(_module$exports, 'corner-r1-left', cornerR1Left), _defineProperty(_module$exports, 'corner-r2', cornerR2), _defineProperty(_module$exports, 'corner-r2-top', cornerR2Top), _defineProperty(_module$exports, 'corner-r2-right', cornerR2Right), _defineProperty(_module$exports, 'corner-r2-bottom', cornerR2Bottom), _defineProperty(_module$exports, 'corner-r2-left', cornerR2Left), _defineProperty(_module$exports, 'corner-r-half', cornerRHalf), _defineProperty(_module$exports, 'corner-r-half-top', cornerRHalfTop), _defineProperty(_module$exports, 'corner-r-half-right', cornerRHalfRight), _defineProperty(_module$exports, 'corner-r-half-bottom', cornerRHalfBottom), _defineProperty(_module$exports, 'corner-r-half-left', cornerRHalfLeft), _defineProperty(_module$exports, 'corner-r-circle', cornerRCircle), _defineProperty(_module$exports, 'corner-r-circle-top', cornerRCircleTop), _defineProperty(_module$exports, 'corner-r-circle-right', cornerRCircleRight), _defineProperty(_module$exports, 'corner-r-circle-bottom', cornerRCircleBottom), _defineProperty(_module$exports, 'corner-r-circle-left', cornerRCircleLeft), _defineProperty(_module$exports, 'cornerMaker', cornerMaker), _module$exports);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	////
	/// @group Variables 变量
	/// @module font: 字体
	/// @type String
	/// @category style
	/// @export
	////


	/// Light
	/// @export weightcore
	/// @unconfigurable
	var fontWeightCoreLight = (0, _nukeVarLoader.varLoader)('font-weight-core-light', 'lighter');

	/// Thin
	/// @export weightcore
	/// @unconfigurable
	var fontWeightCoreThin = (0, _nukeVarLoader.varLoader)('font-weight-core-thin', '200');

	/// Regular
	/// @export weightcore
	/// @unconfigurable
	var fontWeightCoreRegular = (0, _nukeVarLoader.varLoader)('font-weight-core-regular', 'normal');

	/// Medium
	/// @export weightcore
	/// @unconfigurable
	var fontWeightCoreMedium = (0, _nukeVarLoader.varLoader)('font-weight-core-medium', '500');

	/// Bold
	/// @export weightcore
	/// @unconfigurable
	var fontWeightCoreBold = (0, _nukeVarLoader.varLoader)('font-weight-core-bold', 'bold');

	/// Bolder
	/// @export weightcore
	/// @unconfigurable
	var fontWeightCoreBolder = (0, _nukeVarLoader.varLoader)('font-weight-core-bolder', 'bolder');

	var fontFamilyBase = (0, _nukeVarLoader.varLoader)('font-family-base', 'roboto, "helvetica neue", helvetica, tahoma, arial, "microsoft yahei", "pingfang sc"');
	var fontFamilyEn = (0, _nukeVarLoader.varLoader)('font-family-en', 'roboto, "helvetica neue", helvetica, tahoma, arial');
	var fontFamilyZh = (0, _nukeVarLoader.varLoader)('font-family-zh', '"microsoft yahei", simsun, arial');

	var fontCustomPath = (0, _nukeVarLoader.varLoader)('font-custom-path', "//i.alicdn.com/artascopeFont/20160419204543/font/");
	var fontCustomName = (0, _nukeVarLoader.varLoader)('font-custom-name', 'roboto');
	var fontNameThin = (0, _nukeVarLoader.varLoader)('font-name-thin', 'robotoThin');
	var fontNameLight = (0, _nukeVarLoader.varLoader)('font-name-light', 'robotoLight');
	var fontNameRegular = (0, _nukeVarLoader.varLoader)('font-name-regular', 'robotoRegular');
	var fontNameMedium = (0, _nukeVarLoader.varLoader)('font-name-medium', 'robotoMedium');
	var fontNameBold = (0, _nukeVarLoader.varLoader)('font-name-bold', 'robotoBold');
	var fontNameBolder = (0, _nukeVarLoader.varLoader)('font-name-bolder', 'robotoBolder');
	var fontLineheightBase = (0, _nukeVarLoader.varLoader)('font-lineheight-base', '1.2');

	/// Display3 Size
	/// @export size
	var fontSizeBaseDisplay3 = (0, _nukeVarLoader.varLoader)('font-size-base-display3', '112');
	/// Display2 Size
	/// @export size
	var fontSizeBaseDisplay2 = (0, _nukeVarLoader.varLoader)('font-size-base-display2', '96');
	/// Display1 Size
	/// @export size
	var fontSizeBaseDisplay1 = (0, _nukeVarLoader.varLoader)('font-size-base-display1', '72');
	/// Headline Size
	/// @export size
	var fontSizeBaseHeadline = (0, _nukeVarLoader.varLoader)('font-size-base-headline', '36');
	var fontSizeBaseTitle = (0, _nukeVarLoader.varLoader)('font-size-base-title', '36');
	/// Subhead Size
	/// @export size
	var fontSizeBaseSubhead = (0, _nukeVarLoader.varLoader)('font-size-base-subhead', '32');
	/// Body2 Size
	/// @export size
	var fontSizeBaseBody2 = (0, _nukeVarLoader.varLoader)('font-size-base-body2', '28');
	/// Body1 Size
	/// @export size
	var fontSizeBaseBody1 = (0, _nukeVarLoader.varLoader)('font-size-base-body1', '28');
	/// Caption Size
	/// @export size
	var fontSizeBaseCaption = (0, _nukeVarLoader.varLoader)('font-size-base-caption', '24');
	/// Footnote Size
	/// @export size
	var fontSizeBaseFootnote = (0, _nukeVarLoader.varLoader)('font-size-base-footnote', '20');

	/// Display3 Weight
	/// @export weight
	var fontWeightBaseDisplay3 = (0, _nukeVarLoader.varLoader)('font-weight-base-display3', fontWeightCoreRegular);
	/// Display2 Weight
	/// @export weight
	var fontWeightBaseDisplay2 = (0, _nukeVarLoader.varLoader)('font-weight-base-display2', fontWeightCoreRegular);
	/// Display1 Weight
	/// @export weight
	var fontWeightBaseDisplay1 = (0, _nukeVarLoader.varLoader)('font-weight-base-display1', fontWeightCoreRegular);
	/// Headline Weight
	/// @export weight
	var fontWeightBaseHeadline = (0, _nukeVarLoader.varLoader)('font-weight-base-headline', fontWeightCoreMedium);
	var fontWeightBaseTitle = (0, _nukeVarLoader.varLoader)('font-weight-base-title', fontWeightCoreMedium);
	/// Subhead Weight
	/// @export weight
	var fontWeightBaseSubhead = (0, _nukeVarLoader.varLoader)('font-weight-base-subhead', fontWeightCoreRegular);
	/// Body2 Weight
	/// @export weight
	var fontWeightBaseBody2 = (0, _nukeVarLoader.varLoader)('font-weight-base-body2', fontWeightCoreMedium);
	/// Body1 Weight
	/// @export weight
	var fontWeightBaseBody1 = (0, _nukeVarLoader.varLoader)('font-weight-base-body1', fontWeightCoreRegular);
	/// Caption Weight
	/// @export weight
	var fontWeightBaseCaption = (0, _nukeVarLoader.varLoader)('font-weight-base-caption', fontWeightCoreRegular);
	/// Footnote Weight
	/// @export weight
	var fontWeightBaseFootnote = (0, _nukeVarLoader.varLoader)('font-weight-base-footnote', fontWeightCoreRegular);

	/// Display3 Line Height
	/// @export lineheight
	var fontLineheightBaseDisplay3 = (0, _nukeVarLoader.varLoader)('font-lineheight-base-display3', '124');
	/// Display2 Line Height
	/// @export lineheight
	var fontLineheightBaseDisplay2 = (0, _nukeVarLoader.varLoader)('font-lineheight-base-display2', '102');
	/// Display1 Line Height
	/// @export lineheight
	var fontLineheightBaseDisplay1 = (0, _nukeVarLoader.varLoader)('font-lineheight-base-display1', '78');
	/// Headline Line Height
	/// @export lineheight
	var fontLineheightBaseHeadline = (0, _nukeVarLoader.varLoader)('font-lineheight-base-headline', '42');
	var fontLineheightBaseTitle = (0, _nukeVarLoader.varLoader)('font-lineheight-base-title', '42');
	/// Subhead Line Height
	/// @export lineheight
	var fontLineheightBaseSubhead = (0, _nukeVarLoader.varLoader)('font-lineheight-base-subhead', '38');
	/// Body2 Line Height
	/// @export lineheight
	var fontLineheightBaseBody2 = (0, _nukeVarLoader.varLoader)('font-lineheight-base-body2', '34');
	/// Body1 Line Height
	/// @export lineheight
	var fontLineheightBaseBody1 = (0, _nukeVarLoader.varLoader)('font-lineheight-base-body1', '34');
	/// Caption Line Height
	/// @export lineheight
	var fontLineheightBaseCaption = (0, _nukeVarLoader.varLoader)('font-lineheight-base-caption', '30');
	/// Footnote Line Height
	/// @export lineheight
	var fontLineheightBaseFootnote = (0, _nukeVarLoader.varLoader)('font-lineheight-base-footnote', '26');

	/// Display3 Size
	/// @export size
	var fontSizeEnDisplay3 = (0, _nukeVarLoader.varLoader)('font-size-en-display3', '112');
	/// Display2 Size
	/// @export size
	var fontSizeEnDisplay2 = (0, _nukeVarLoader.varLoader)('font-size-en-display2', '96');
	/// Display1 size
	/// @export size
	var fontSizeEnDisplay1 = (0, _nukeVarLoader.varLoader)('font-size-en-display1', '72');
	/// Headline size
	/// @export size
	var fontSizeEnHeadline = (0, _nukeVarLoader.varLoader)('font-size-en-headline', '36');
	var fontSizeEnTitle = (0, _nukeVarLoader.varLoader)('font-size-en-title', '36');
	/// Subhead size
	/// @export size
	var fontSizeEnSubhead = (0, _nukeVarLoader.varLoader)('font-size-en-subhead', '32');
	/// Body2 size
	/// @export size
	var fontSizeEnBody2 = (0, _nukeVarLoader.varLoader)('font-size-en-body2', '28');
	/// Body1 size
	/// @export size
	var fontSizeEnBody1 = (0, _nukeVarLoader.varLoader)('font-size-en-body1', '28');
	/// Caption size
	/// @export size
	var fontSizeEnCaption = (0, _nukeVarLoader.varLoader)('font-size-en-caption', '24');
	/// Footnote size
	/// @export size
	var fontSizeEnFootnote = (0, _nukeVarLoader.varLoader)('font-size-en-footnote', '20');

	/// Display3 Weight
	/// @export weight
	var fontWeightEnDisplay3 = (0, _nukeVarLoader.varLoader)('font-weight-en-display3', fontWeightCoreRegular);
	/// Display2 Weight
	/// @export weight
	var fontWeightEnDisplay2 = (0, _nukeVarLoader.varLoader)('font-weight-en-display2', fontWeightCoreRegular);
	/// Display1 Weight
	/// @export weight
	var fontWeightEnDisplay1 = (0, _nukeVarLoader.varLoader)('font-weight-en-display1', fontWeightCoreRegular);
	/// Headline Weight
	/// @export weight
	var fontWeightEnHeadline = (0, _nukeVarLoader.varLoader)('font-weight-en-headline', fontWeightCoreMedium);
	var fontWeightEnTitle = (0, _nukeVarLoader.varLoader)('font-weight-en-title', fontWeightCoreMedium);
	/// Subhead Weight
	/// @export weight
	var fontWeightEnSubhead = (0, _nukeVarLoader.varLoader)('font-weight-en-subhead', fontWeightCoreRegular);
	/// Body2 Weight
	/// @export weight
	var fontWeightEnBody2 = (0, _nukeVarLoader.varLoader)('font-weight-en-body2', fontWeightCoreMedium);
	/// Body1 Weight
	/// @export weight
	var fontWeightEnBody1 = (0, _nukeVarLoader.varLoader)('font-weight-en-body1', fontWeightCoreRegular);
	/// Caption Weight
	/// @export weight
	var fontWeightEnCaption = (0, _nukeVarLoader.varLoader)('font-weight-en-caption', fontWeightCoreRegular);
	/// Footnote Weight
	/// @export weight
	var fontWeightEnFootnote = (0, _nukeVarLoader.varLoader)('font-weight-en-footnote', fontWeightCoreRegular);

	/// Display3 Line Height
	/// @export lineheight
	var fontLineheightEnDisplay3 = (0, _nukeVarLoader.varLoader)('font-lineheight-en-display3', '120');
	/// Display2 Line Height
	/// @export lineheight
	var fontLineheightEnDisplay2 = (0, _nukeVarLoader.varLoader)('font-lineheight-en-display2', '102');
	/// Display1 Line Height
	/// @export lineheight
	var fontLineheightEnDisplay1 = (0, _nukeVarLoader.varLoader)('font-lineheight-en-display1', '78');
	/// Headline Line Height
	/// @export lineheight
	var fontLineheightEnHeadline = (0, _nukeVarLoader.varLoader)('font-lineheight-en-headline', '42');
	var fontLineheightEnTitle = (0, _nukeVarLoader.varLoader)('font-lineheight-en-title', '42');
	/// Subhead Line Height
	/// @export lineheight
	var fontLineheightEnSubhead = (0, _nukeVarLoader.varLoader)('font-lineheight-en-subhead', '39');
	/// Body2 Line Height
	/// @export lineheight
	var fontLineheightEnBody2 = (0, _nukeVarLoader.varLoader)('font-lineheight-en-body2', '34');
	/// Body1 Line Height
	/// @export lineheight
	var fontLineheightEnBody1 = (0, _nukeVarLoader.varLoader)('font-lineheight-en-body1', '34');
	/// Caption Line Height
	/// @export lineheight
	var fontLineheightEnCaption = (0, _nukeVarLoader.varLoader)('font-lineheight-en-caption', '30');
	/// Footnote Line Height
	/// @export lineheight
	var fontLineheightEnFootnote = (0, _nukeVarLoader.varLoader)('font-lineheight-en-footnote', '20');

	/// Display3 Size
	/// @export size
	var fontSizeZhDisplay3 = (0, _nukeVarLoader.varLoader)('font-size-zh-display3', '112');
	/// Display2 Size
	/// @export size
	var fontSizeZhDisplay2 = (0, _nukeVarLoader.varLoader)('font-size-zh-display2', '96');
	/// Display1 size
	/// @export size
	var fontSizeZhDisplay1 = (0, _nukeVarLoader.varLoader)('font-size-zh-display1', '72');
	/// Headline size
	/// @export size
	var fontSizeZhHeadline = (0, _nukeVarLoader.varLoader)('font-size-zh-headline', '36');
	var fontSizeZhTitle = (0, _nukeVarLoader.varLoader)('font-size-zh-title', '36');
	/// Subhead size
	/// @export size
	var fontSizeZhSubhead = (0, _nukeVarLoader.varLoader)('font-size-zh-subhead', '32');
	/// Body2 size
	/// @export size
	var fontSizeZhBody2 = (0, _nukeVarLoader.varLoader)('font-size-zh-body2', '28');
	/// Body1 size
	/// @export size
	var fontSizeZhBody1 = (0, _nukeVarLoader.varLoader)('font-size-zh-body1', '28');
	/// Caption size
	/// @export size
	var fontSizeZhCaption = (0, _nukeVarLoader.varLoader)('font-size-zh-caption', '24');
	/// Footnote size
	/// @export size
	var fontSizeZhFootnote = (0, _nukeVarLoader.varLoader)('font-size-zh-footnote', '20');

	/// Display3 Weight
	/// @export weight
	var fontWeightZhDisplay3 = (0, _nukeVarLoader.varLoader)('font-weight-zh-display3', fontWeightCoreRegular);
	/// Display2 Weight
	/// @export weight
	var fontWeightZhDisplay2 = (0, _nukeVarLoader.varLoader)('font-weight-zh-display2', fontWeightCoreRegular);
	/// Display1 Weight
	/// @export weight
	var fontWeightZhDisplay1 = (0, _nukeVarLoader.varLoader)('font-weight-zh-display1', fontWeightCoreRegular);
	/// Headline Weight
	/// @export weight
	var fontWeightZhHeadline = (0, _nukeVarLoader.varLoader)('font-weight-zh-headline', fontWeightCoreMedium);
	var fontWeightZhTitle = (0, _nukeVarLoader.varLoader)('font-weight-zh-title', fontWeightCoreMedium);
	/// Subhead Weight
	/// @export weight
	var fontWeightZhSubhead = (0, _nukeVarLoader.varLoader)('font-weight-zh-subhead', fontWeightCoreRegular);
	/// Body2 Weight
	/// @export weight
	var fontWeightZhBody2 = (0, _nukeVarLoader.varLoader)('font-weight-zh-body2', fontWeightCoreMedium);
	/// Body1 Weight
	/// @export weight
	var fontWeightZhBody1 = (0, _nukeVarLoader.varLoader)('font-weight-zh-body1', fontWeightCoreRegular);
	/// Caption Weight
	/// @export weight
	var fontWeightZhCaption = (0, _nukeVarLoader.varLoader)('font-weight-zh-caption', fontWeightCoreRegular);
	/// Footnote Weight
	/// @export weight
	var fontWeightZhFootnote = (0, _nukeVarLoader.varLoader)('font-weight-zh-footnote', fontWeightCoreRegular);

	/// Display3 Line Height
	/// @export lineheight
	var fontLineheightZhDisplay3 = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-display3', '124');
	/// Display2 Line Height
	/// @export lineheight
	var fontLineheightZhDisplay2 = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-display2', '102');
	/// Display1 Line Height
	/// @export lineheight
	var fontLineheightZhDisplay1 = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-display1', '78');
	/// Headline Line Height
	/// @export lineheight
	var fontLineheightZhHeadline = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-headline', '42');
	var fontLineheightZhTitle = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-title', '42');
	/// Subhead Line Height
	/// @export lineheight
	var fontLineheightZhSubhead = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-subhead', '39');
	/// Body2 Line Height
	/// @export lineheight
	var fontLineheightZhBody2 = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-body2', '34');
	/// Body1 Line Height
	/// @export lineheight
	var fontLineheightZhBody1 = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-body1', '34');
	/// Caption Line Height
	/// @export lineheight
	var fontLineheightZhCaption = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-caption', '30');
	/// Footnote Line Height
	/// @export lineheight
	var fontLineheightZhFootnote = (0, _nukeVarLoader.varLoader)('font-lineheight-zh-footnote', '26');

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 'font-weight-core-light', fontWeightCoreLight), _defineProperty(_module$exports, 'font-weight-core-thin', fontWeightCoreThin), _defineProperty(_module$exports, 'font-weight-core-regular', fontWeightCoreRegular), _defineProperty(_module$exports, 'font-weight-core-medium', fontWeightCoreMedium), _defineProperty(_module$exports, 'font-weight-core-bold', fontWeightCoreBold), _defineProperty(_module$exports, 'font-weight-core-bolder', fontWeightCoreBolder), _defineProperty(_module$exports, 'font-family-base', fontFamilyBase), _defineProperty(_module$exports, 'font-family-en', fontFamilyEn), _defineProperty(_module$exports, 'font-family-zh', fontFamilyZh), _defineProperty(_module$exports, 'font-custom-path', fontCustomPath), _defineProperty(_module$exports, 'font-custom-name', fontCustomName), _defineProperty(_module$exports, 'font-name-thin', fontNameThin), _defineProperty(_module$exports, 'font-name-light', fontNameLight), _defineProperty(_module$exports, 'font-name-regular', fontNameRegular), _defineProperty(_module$exports, 'font-name-medium', fontNameMedium), _defineProperty(_module$exports, 'font-name-bold', fontNameBold), _defineProperty(_module$exports, 'font-name-bolder', fontNameBolder), _defineProperty(_module$exports, 'font-lineheight-base', fontLineheightBase), _defineProperty(_module$exports, 'font-size-base-display3', fontSizeBaseDisplay3), _defineProperty(_module$exports, 'font-size-base-display2', fontSizeBaseDisplay2), _defineProperty(_module$exports, 'font-size-base-display1', fontSizeBaseDisplay1), _defineProperty(_module$exports, 'font-size-base-headline', fontSizeBaseHeadline), _defineProperty(_module$exports, 'font-size-base-title', fontSizeBaseTitle), _defineProperty(_module$exports, 'font-size-base-subhead', fontSizeBaseSubhead), _defineProperty(_module$exports, 'font-size-base-body2', fontSizeBaseBody2), _defineProperty(_module$exports, 'font-size-base-body1', fontSizeBaseBody1), _defineProperty(_module$exports, 'font-size-base-caption', fontSizeBaseCaption), _defineProperty(_module$exports, 'font-size-base-footnote', fontSizeBaseFootnote), _defineProperty(_module$exports, 'font-weight-base-display3', fontWeightBaseDisplay3), _defineProperty(_module$exports, 'font-weight-base-display2', fontWeightBaseDisplay2), _defineProperty(_module$exports, 'font-weight-base-display1', fontWeightBaseDisplay1), _defineProperty(_module$exports, 'font-weight-base-headline', fontWeightBaseHeadline), _defineProperty(_module$exports, 'font-weight-base-title', fontWeightBaseTitle), _defineProperty(_module$exports, 'font-weight-base-subhead', fontWeightBaseSubhead), _defineProperty(_module$exports, 'font-weight-base-body2', fontWeightBaseBody2), _defineProperty(_module$exports, 'font-weight-base-body1', fontWeightBaseBody1), _defineProperty(_module$exports, 'font-weight-base-caption', fontWeightBaseCaption), _defineProperty(_module$exports, 'font-weight-base-footnote', fontWeightBaseFootnote), _defineProperty(_module$exports, 'font-lineheight-base-display3', fontLineheightBaseDisplay3), _defineProperty(_module$exports, 'font-lineheight-base-display2', fontLineheightBaseDisplay2), _defineProperty(_module$exports, 'font-lineheight-base-display1', fontLineheightBaseDisplay1), _defineProperty(_module$exports, 'font-lineheight-base-headline', fontLineheightBaseHeadline), _defineProperty(_module$exports, 'font-lineheight-base-title', fontLineheightBaseTitle), _defineProperty(_module$exports, 'font-lineheight-base-subhead', fontLineheightBaseSubhead), _defineProperty(_module$exports, 'font-lineheight-base-body2', fontLineheightBaseBody2), _defineProperty(_module$exports, 'font-lineheight-base-body1', fontLineheightBaseBody1), _defineProperty(_module$exports, 'font-lineheight-base-caption', fontLineheightBaseCaption), _defineProperty(_module$exports, 'font-lineheight-base-footnote', fontLineheightBaseFootnote), _defineProperty(_module$exports, 'font-size-en-display3', fontSizeEnDisplay3), _defineProperty(_module$exports, 'font-size-en-display2', fontSizeEnDisplay2), _defineProperty(_module$exports, 'font-size-en-display1', fontSizeEnDisplay1), _defineProperty(_module$exports, 'font-size-en-headline', fontSizeEnHeadline), _defineProperty(_module$exports, 'font-size-en-title', fontSizeEnTitle), _defineProperty(_module$exports, 'font-size-en-subhead', fontSizeEnSubhead), _defineProperty(_module$exports, 'font-size-en-body2', fontSizeEnBody2), _defineProperty(_module$exports, 'font-size-en-body1', fontSizeEnBody1), _defineProperty(_module$exports, 'font-size-en-caption', fontSizeEnCaption), _defineProperty(_module$exports, 'font-size-en-footnote', fontSizeEnFootnote), _defineProperty(_module$exports, 'font-weight-en-display3', fontWeightEnDisplay3), _defineProperty(_module$exports, 'font-weight-en-display2', fontWeightEnDisplay2), _defineProperty(_module$exports, 'font-weight-en-display1', fontWeightEnDisplay1), _defineProperty(_module$exports, 'font-weight-en-headline', fontWeightEnHeadline), _defineProperty(_module$exports, 'font-weight-en-title', fontWeightEnTitle), _defineProperty(_module$exports, 'font-weight-en-subhead', fontWeightEnSubhead), _defineProperty(_module$exports, 'font-weight-en-body2', fontWeightEnBody2), _defineProperty(_module$exports, 'font-weight-en-body1', fontWeightEnBody1), _defineProperty(_module$exports, 'font-weight-en-caption', fontWeightEnCaption), _defineProperty(_module$exports, 'font-weight-en-footnote', fontWeightEnFootnote), _defineProperty(_module$exports, 'font-lineheight-en-display3', fontLineheightEnDisplay3), _defineProperty(_module$exports, 'font-lineheight-en-display2', fontLineheightEnDisplay2), _defineProperty(_module$exports, 'font-lineheight-en-display1', fontLineheightEnDisplay1), _defineProperty(_module$exports, 'font-lineheight-en-headline', fontLineheightEnHeadline), _defineProperty(_module$exports, 'font-lineheight-en-title', fontLineheightEnTitle), _defineProperty(_module$exports, 'font-lineheight-en-subhead', fontLineheightEnSubhead), _defineProperty(_module$exports, 'font-lineheight-en-body2', fontLineheightEnBody2), _defineProperty(_module$exports, 'font-lineheight-en-body1', fontLineheightEnBody1), _defineProperty(_module$exports, 'font-lineheight-en-caption', fontLineheightEnCaption), _defineProperty(_module$exports, 'font-lineheight-en-footnote', fontLineheightEnFootnote), _defineProperty(_module$exports, 'font-size-zh-display3', fontSizeZhDisplay3), _defineProperty(_module$exports, 'font-size-zh-display2', fontSizeZhDisplay2), _defineProperty(_module$exports, 'font-size-zh-display1', fontSizeZhDisplay1), _defineProperty(_module$exports, 'font-size-zh-headline', fontSizeZhHeadline), _defineProperty(_module$exports, 'font-size-zh-title', fontSizeZhTitle), _defineProperty(_module$exports, 'font-size-zh-subhead', fontSizeZhSubhead), _defineProperty(_module$exports, 'font-size-zh-body2', fontSizeZhBody2), _defineProperty(_module$exports, 'font-size-zh-body1', fontSizeZhBody1), _defineProperty(_module$exports, 'font-size-zh-caption', fontSizeZhCaption), _defineProperty(_module$exports, 'font-size-zh-footnote', fontSizeZhFootnote), _defineProperty(_module$exports, 'font-weight-zh-display3', fontWeightZhDisplay3), _defineProperty(_module$exports, 'font-weight-zh-display2', fontWeightZhDisplay2), _defineProperty(_module$exports, 'font-weight-zh-display1', fontWeightZhDisplay1), _defineProperty(_module$exports, 'font-weight-zh-headline', fontWeightZhHeadline), _defineProperty(_module$exports, 'font-weight-zh-title', fontWeightZhTitle), _defineProperty(_module$exports, 'font-weight-zh-subhead', fontWeightZhSubhead), _defineProperty(_module$exports, 'font-weight-zh-body2', fontWeightZhBody2), _defineProperty(_module$exports, 'font-weight-zh-body1', fontWeightZhBody1), _defineProperty(_module$exports, 'font-weight-zh-caption', fontWeightZhCaption), _defineProperty(_module$exports, 'font-weight-zh-footnote', fontWeightZhFootnote), _defineProperty(_module$exports, 'font-lineheight-zh-display3', fontLineheightZhDisplay3), _defineProperty(_module$exports, 'font-lineheight-zh-display2', fontLineheightZhDisplay2), _defineProperty(_module$exports, 'font-lineheight-zh-display1', fontLineheightZhDisplay1), _defineProperty(_module$exports, 'font-lineheight-zh-headline', fontLineheightZhHeadline), _defineProperty(_module$exports, 'font-lineheight-zh-title', fontLineheightZhTitle), _defineProperty(_module$exports, 'font-lineheight-zh-subhead', fontLineheightZhSubhead), _defineProperty(_module$exports, 'font-lineheight-zh-body2', fontLineheightZhBody2), _defineProperty(_module$exports, 'font-lineheight-zh-body1', fontLineheightZhBody1), _defineProperty(_module$exports, 'font-lineheight-zh-caption', fontLineheightZhCaption), _defineProperty(_module$exports, 'font-lineheight-zh-footnote', fontLineheightZhFootnote), _module$exports);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	var _global = __webpack_require__(18);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	////
	/// @group Variables 变量
	/// @module icon: 图标
	/// @type String
	/// @category style
	////


	/// icon font path 字体路径
	var iconFontPath = (0, _nukeVarLoader.varLoader)('icon-font-path', "//at.alicdn.com/t/font_1465717286_116059");

	/// icon font name 自定义的icon font 名称
	var iconFontName = (0, _nukeVarLoader.varLoader)('icon-font-name', "icon");

	var iconFontFamily = (0, _nukeVarLoader.varLoader)('icon-font-family', 'mexticon');

	/// Icon XXS
	/// @export
	var iconXxs = (0, _nukeVarLoader.varLoader)('icon-xxs', _global.s2);

	/// Icon XS
	/// @export
	var iconXs = (0, _nukeVarLoader.varLoader)('icon-xs', _global.s3);

	/// Icon S
	/// @export
	var iconS = (0, _nukeVarLoader.varLoader)('icon-s', _global.s4);

	/// Icon M
	/// @export
	var iconM = (0, _nukeVarLoader.varLoader)('icon-m', _global.s5);

	/// Icon L
	/// @export
	var iconL = (0, _nukeVarLoader.varLoader)('icon-l', _global.s6);

	/// Icon XL
	/// @export
	var iconXl = (0, _nukeVarLoader.varLoader)('icon-xl', _global.s8);

	/// Icon XXL
	/// @export
	var iconXxl = (0, _nukeVarLoader.varLoader)('icon-xxl', _global.s12);

	/// Icon XXXL
	/// @export
	var iconXxxl = (0, _nukeVarLoader.varLoader)('icon-xxxl', _global.s16);

	var iconContentAll = (0, _nukeVarLoader.varLoader)('icon-content-all', "\e600");
	var iconContentCart = (0, _nukeVarLoader.varLoader)('icon-content-cart', "\e602");
	var iconContentComments = (0, _nukeVarLoader.varLoader)('icon-content-comments', "\e605");
	var iconContentCry = (0, _nukeVarLoader.varLoader)('icon-content-cry', "\e606");
	var iconContentEmail = (0, _nukeVarLoader.varLoader)('icon-content-email', "\e609");
	var iconContentFavorite = (0, _nukeVarLoader.varLoader)('icon-content-favorite', "\e60a");
	var iconContentFolder = (0, _nukeVarLoader.varLoader)('icon-content-folder', "\e60b");
	var iconContentForm = (0, _nukeVarLoader.varLoader)('icon-content-form', "\e60c");
	var iconContentHelp = (0, _nukeVarLoader.varLoader)('icon-content-help', "\e60d");
	var iconContentRefresh = (0, _nukeVarLoader.varLoader)('icon-content-refresh', "\e614");
	var iconContentSet = (0, _nukeVarLoader.varLoader)('icon-content-set', "\e618");
	var iconContentSurvey = (0, _nukeVarLoader.varLoader)('icon-content-survey', "\e61b");
	var iconContentTraining = (0, _nukeVarLoader.varLoader)('icon-content-training', "\e61c");
	var iconContentAccount = (0, _nukeVarLoader.varLoader)('icon-content-account', "\e621");
	var iconContentAtm = (0, _nukeVarLoader.varLoader)('icon-content-atm', "\e623");
	var iconContentClock = (0, _nukeVarLoader.varLoader)('icon-content-clock', "\e624");
	var iconContentAttachment = (0, _nukeVarLoader.varLoader)('icon-content-attachment', "\e627");
	var iconContent3column = (0, _nukeVarLoader.varLoader)('icon-content-3column', "\e628");
	var iconContent4column = (0, _nukeVarLoader.varLoader)('icon-content-4column', "\e629");
	var iconContentDiscount = (0, _nukeVarLoader.varLoader)('icon-content-discount', "\e62a");
	var iconContentService = (0, _nukeVarLoader.varLoader)('icon-content-service', "\e62b");
	var iconContentPrint = (0, _nukeVarLoader.varLoader)('icon-content-print', "\e62c");
	var iconContentBox = (0, _nukeVarLoader.varLoader)('icon-content-box', "\e62d");
	var iconContentProcess = (0, _nukeVarLoader.varLoader)('icon-content-process', "\e62e");
	var iconContentBags = (0, _nukeVarLoader.varLoader)('icon-content-bags', "\e62f");
	var iconContentElectronics = (0, _nukeVarLoader.varLoader)('icon-content-electronics', "\e633");
	var iconContentGifts = (0, _nukeVarLoader.varLoader)('icon-content-gifts', "\e634");
	var iconContentLights = (0, _nukeVarLoader.varLoader)('icon-content-lights', "\e636");
	var iconContentAuto = (0, _nukeVarLoader.varLoader)('icon-content-auto', "\e639");
	var iconContentBrowse = (0, _nukeVarLoader.varLoader)('icon-content-browse', "\e63c");
	var iconContentAtmAway = (0, _nukeVarLoader.varLoader)('icon-content-atm-away', "\e63f");
	var iconContentScanning = (0, _nukeVarLoader.varLoader)('icon-content-scanning', "\e641");
	var iconContentCompare = (0, _nukeVarLoader.varLoader)('icon-content-compare', "\e642");
	var iconContentFilter = (0, _nukeVarLoader.varLoader)('icon-content-filter', "\e643");
	var iconContentPin = (0, _nukeVarLoader.varLoader)('icon-content-pin', "\e644");
	var iconContentHistory = (0, _nukeVarLoader.varLoader)('icon-content-history', "\e645");
	var iconContentSimilarProduct = (0, _nukeVarLoader.varLoader)('icon-content-similar-product', "\e648");
	var iconContentLink = (0, _nukeVarLoader.varLoader)('icon-content-link', "\e649");
	var iconContentCut = (0, _nukeVarLoader.varLoader)('icon-content-cut', "\e64a");
	var iconContentTable = (0, _nukeVarLoader.varLoader)('icon-content-table', "\e64b");
	var iconContentNavList = (0, _nukeVarLoader.varLoader)('icon-content-nav-list', "\e64c");
	var iconContentImageText = (0, _nukeVarLoader.varLoader)('icon-content-image-text', "\e64d");
	var iconContentText = (0, _nukeVarLoader.varLoader)('icon-content-text', "\e64e");
	var iconContentMove = (0, _nukeVarLoader.varLoader)('icon-content-move', "\e64f");
	var iconContentSubtract = (0, _nukeVarLoader.varLoader)('icon-content-subtract', "\e650");
	var iconContentDollar = (0, _nukeVarLoader.varLoader)('icon-content-dollar', "\e651");
	var iconContentOffice = (0, _nukeVarLoader.varLoader)('icon-content-office', "\e653");
	var iconContentOperation = (0, _nukeVarLoader.varLoader)('icon-content-operation', "\e65a");
	var iconContentDownload = (0, _nukeVarLoader.varLoader)('icon-content-download', "\e65c");
	var iconContentMap = (0, _nukeVarLoader.varLoader)('icon-content-map', "\e65d");
	var iconContentBad = (0, _nukeVarLoader.varLoader)('icon-content-bad', "\e65e");
	var iconContentGood = (0, _nukeVarLoader.varLoader)('icon-content-good', "\e65f");
	var iconContentSkip = (0, _nukeVarLoader.varLoader)('icon-content-skip', "\e660");
	var iconContentPlay = (0, _nukeVarLoader.varLoader)('icon-content-play', "\e661");
	var iconContentStop = (0, _nukeVarLoader.varLoader)('icon-content-stop', "\e662");
	var iconContentCompass = (0, _nukeVarLoader.varLoader)('icon-content-compass', "\e663");
	var iconContentSecurity = (0, _nukeVarLoader.varLoader)('icon-content-security', "\e664");
	var iconContentShare = (0, _nukeVarLoader.varLoader)('icon-content-share', "\e665");
	var iconContentStore = (0, _nukeVarLoader.varLoader)('icon-content-store', "\e666");
	var iconContentPhone = (0, _nukeVarLoader.varLoader)('icon-content-phone', "\e669");
	var iconContentEllipsis = (0, _nukeVarLoader.varLoader)('icon-content-ellipsis', "\e674");
	var iconContentEmailFilling = (0, _nukeVarLoader.varLoader)('icon-content-email-filling', "\e66d");
	var iconContentFavoritesFilling = (0, _nukeVarLoader.varLoader)('icon-content-favorites-filling', "\e66e");
	var iconContentAccountFilling = (0, _nukeVarLoader.varLoader)('icon-content-account-filling', "\e66f");
	var iconContentCreditLevel = (0, _nukeVarLoader.varLoader)('icon-content-credit-level', "\e671");
	var iconContentCreditLevelFilling = (0, _nukeVarLoader.varLoader)('icon-content-credit-level-filling', "\e672");
	var iconContentMobilePhone = (0, _nukeVarLoader.varLoader)('icon-content-mobile-phone', "\e675");
	var iconContentSmile = (0, _nukeVarLoader.varLoader)('icon-content-smile', "\e61f");
	var iconContentPersonalCenter = (0, _nukeVarLoader.varLoader)('icon-content-personal-center', "\e681");
	var iconContentArrowUpFilling = (0, _nukeVarLoader.varLoader)('icon-content-arrow-up-filling', "\e601");
	var iconContentArrowRight = (0, _nukeVarLoader.varLoader)('icon-content-arrow-right', "\e603");
	var iconContentArrowLeft = (0, _nukeVarLoader.varLoader)('icon-content-arrow-left', "\e604");
	var iconContentArrowDown = (0, _nukeVarLoader.varLoader)('icon-content-arrow-down', "\e607");
	var iconContentArrowUp = (0, _nukeVarLoader.varLoader)('icon-content-arrow-up', "\e60e");
	var iconContentAdd = (0, _nukeVarLoader.varLoader)('icon-content-add', "\e60f");
	var iconContentMinus = (0, _nukeVarLoader.varLoader)('icon-content-minus', "\e610");
	var iconContentDeleteFilling = (0, _nukeVarLoader.varLoader)('icon-content-delete-filling', "\e611");
	var iconContentEdit = (0, _nukeVarLoader.varLoader)('icon-content-edit', "\e613");
	var iconContentLoading = (0, _nukeVarLoader.varLoader)('icon-content-loading', "\e615");
	var iconContentError = (0, _nukeVarLoader.varLoader)('icon-content-error', "\e619");
	var iconContentSelect = (0, _nukeVarLoader.varLoader)('icon-content-select', "\e61d");
	var iconContentAshbin = (0, _nukeVarLoader.varLoader)('icon-content-ashbin', "\e61e");
	var iconContentCalendar = (0, _nukeVarLoader.varLoader)('icon-content-calendar', "\e620");
	var iconContentTime = (0, _nukeVarLoader.varLoader)('icon-content-time', "\e622");
	var iconContentSuccess = (0, _nukeVarLoader.varLoader)('icon-content-success', "\e617");
	var iconContentWarning = (0, _nukeVarLoader.varLoader)('icon-content-warning', "\e63d");
	var iconContentSearch = (0, _nukeVarLoader.varLoader)('icon-content-search', "\e656");
	var iconContentDisplay = (0, _nukeVarLoader.varLoader)('icon-content-display', "\e657");
	var iconContentCategory = (0, _nukeVarLoader.varLoader)('icon-content-category', "\e658");
	var iconContentPrompt = (0, _nukeVarLoader.varLoader)('icon-content-prompt', "\e659");
	var iconContentArrowDownFilling = (0, _nukeVarLoader.varLoader)('icon-content-arrow-down-filling', "\e65b");
	var iconContentSorting = (0, _nukeVarLoader.varLoader)('icon-content-sorting', "\e676");
	var iconContentAscending = (0, _nukeVarLoader.varLoader)('icon-content-ascending', "\e66a");
	var iconContentDescending = (0, _nukeVarLoader.varLoader)('icon-content-descending', "\e66c");
	var iconContentSuccessFilling = (0, _nukeVarLoader.varLoader)('icon-content-success-filling', "\e670");
	var iconContentPicture = (0, _nukeVarLoader.varLoader)('icon-content-picture', "\e616");
	var iconContentClose = (0, _nukeVarLoader.varLoader)('icon-content-close', "\e608");
	var iconContentSemiSelect = (0, _nukeVarLoader.varLoader)('icon-content-semi-select', "\e612");
	var iconContentTagSubscript = (0, _nukeVarLoader.varLoader)('icon-content-tag-subscript', "\e61a");

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 'icon-font-path', iconFontPath), _defineProperty(_module$exports, 'icon-font-name', iconFontName), _defineProperty(_module$exports, 'icon-font-family', iconFontFamily), _defineProperty(_module$exports, 'icon-xxs', iconXxs), _defineProperty(_module$exports, 'icon-xs', iconXs), _defineProperty(_module$exports, 'icon-s', iconS), _defineProperty(_module$exports, 'icon-m', iconM), _defineProperty(_module$exports, 'icon-l', iconL), _defineProperty(_module$exports, 'icon-xl', iconXl), _defineProperty(_module$exports, 'icon-xxl', iconXxl), _defineProperty(_module$exports, 'icon-xxxl', iconXxxl), _defineProperty(_module$exports, 'icon-content-all', iconContentAll), _defineProperty(_module$exports, 'icon-content-cart', iconContentCart), _defineProperty(_module$exports, 'icon-content-comments', iconContentComments), _defineProperty(_module$exports, 'icon-content-cry', iconContentCry), _defineProperty(_module$exports, 'icon-content-email', iconContentEmail), _defineProperty(_module$exports, 'icon-content-favorite', iconContentFavorite), _defineProperty(_module$exports, 'icon-content-folder', iconContentFolder), _defineProperty(_module$exports, 'icon-content-form', iconContentForm), _defineProperty(_module$exports, 'icon-content-help', iconContentHelp), _defineProperty(_module$exports, 'icon-content-refresh', iconContentRefresh), _defineProperty(_module$exports, 'icon-content-set', iconContentSet), _defineProperty(_module$exports, 'icon-content-survey', iconContentSurvey), _defineProperty(_module$exports, 'icon-content-training', iconContentTraining), _defineProperty(_module$exports, 'icon-content-account', iconContentAccount), _defineProperty(_module$exports, 'icon-content-atm', iconContentAtm), _defineProperty(_module$exports, 'icon-content-clock', iconContentClock), _defineProperty(_module$exports, 'icon-content-attachment', iconContentAttachment), _defineProperty(_module$exports, 'icon-content-3column', iconContent3column), _defineProperty(_module$exports, 'icon-content-4column', iconContent4column), _defineProperty(_module$exports, 'icon-content-discount', iconContentDiscount), _defineProperty(_module$exports, 'icon-content-service', iconContentService), _defineProperty(_module$exports, 'icon-content-print', iconContentPrint), _defineProperty(_module$exports, 'icon-content-box', iconContentBox), _defineProperty(_module$exports, 'icon-content-process', iconContentProcess), _defineProperty(_module$exports, 'icon-content-bags', iconContentBags), _defineProperty(_module$exports, 'icon-content-electronics', iconContentElectronics), _defineProperty(_module$exports, 'icon-content-gifts', iconContentGifts), _defineProperty(_module$exports, 'icon-content-lights', iconContentLights), _defineProperty(_module$exports, 'icon-content-auto', iconContentAuto), _defineProperty(_module$exports, 'icon-content-browse', iconContentBrowse), _defineProperty(_module$exports, 'icon-content-atm-away', iconContentAtmAway), _defineProperty(_module$exports, 'icon-content-scanning', iconContentScanning), _defineProperty(_module$exports, 'icon-content-compare', iconContentCompare), _defineProperty(_module$exports, 'icon-content-filter', iconContentFilter), _defineProperty(_module$exports, 'icon-content-pin', iconContentPin), _defineProperty(_module$exports, 'icon-content-history', iconContentHistory), _defineProperty(_module$exports, 'icon-content-similar-product', iconContentSimilarProduct), _defineProperty(_module$exports, 'icon-content-link', iconContentLink), _defineProperty(_module$exports, 'icon-content-cut', iconContentCut), _defineProperty(_module$exports, 'icon-content-table', iconContentTable), _defineProperty(_module$exports, 'icon-content-nav-list', iconContentNavList), _defineProperty(_module$exports, 'icon-content-image-text', iconContentImageText), _defineProperty(_module$exports, 'icon-content-text', iconContentText), _defineProperty(_module$exports, 'icon-content-move', iconContentMove), _defineProperty(_module$exports, 'icon-content-subtract', iconContentSubtract), _defineProperty(_module$exports, 'icon-content-dollar', iconContentDollar), _defineProperty(_module$exports, 'icon-content-office', iconContentOffice), _defineProperty(_module$exports, 'icon-content-operation', iconContentOperation), _defineProperty(_module$exports, 'icon-content-download', iconContentDownload), _defineProperty(_module$exports, 'icon-content-map', iconContentMap), _defineProperty(_module$exports, 'icon-content-bad', iconContentBad), _defineProperty(_module$exports, 'icon-content-good', iconContentGood), _defineProperty(_module$exports, 'icon-content-skip', iconContentSkip), _defineProperty(_module$exports, 'icon-content-play', iconContentPlay), _defineProperty(_module$exports, 'icon-content-stop', iconContentStop), _defineProperty(_module$exports, 'icon-content-compass', iconContentCompass), _defineProperty(_module$exports, 'icon-content-security', iconContentSecurity), _defineProperty(_module$exports, 'icon-content-share', iconContentShare), _defineProperty(_module$exports, 'icon-content-store', iconContentStore), _defineProperty(_module$exports, 'icon-content-phone', iconContentPhone), _defineProperty(_module$exports, 'icon-content-ellipsis', iconContentEllipsis), _defineProperty(_module$exports, 'icon-content-email-filling', iconContentEmailFilling), _defineProperty(_module$exports, 'icon-content-favorites-filling', iconContentFavoritesFilling), _defineProperty(_module$exports, 'icon-content-account-filling', iconContentAccountFilling), _defineProperty(_module$exports, 'icon-content-credit-level', iconContentCreditLevel), _defineProperty(_module$exports, 'icon-content-credit-level-filling', iconContentCreditLevelFilling), _defineProperty(_module$exports, 'icon-content-mobile-phone', iconContentMobilePhone), _defineProperty(_module$exports, 'icon-content-smile', iconContentSmile), _defineProperty(_module$exports, 'icon-content-personal-center', iconContentPersonalCenter), _defineProperty(_module$exports, 'icon-content-arrow-up-filling', iconContentArrowUpFilling), _defineProperty(_module$exports, 'icon-content-arrow-right', iconContentArrowRight), _defineProperty(_module$exports, 'icon-content-arrow-left', iconContentArrowLeft), _defineProperty(_module$exports, 'icon-content-arrow-down', iconContentArrowDown), _defineProperty(_module$exports, 'icon-content-arrow-up', iconContentArrowUp), _defineProperty(_module$exports, 'icon-content-add', iconContentAdd), _defineProperty(_module$exports, 'icon-content-minus', iconContentMinus), _defineProperty(_module$exports, 'icon-content-delete-filling', iconContentDeleteFilling), _defineProperty(_module$exports, 'icon-content-edit', iconContentEdit), _defineProperty(_module$exports, 'icon-content-loading', iconContentLoading), _defineProperty(_module$exports, 'icon-content-error', iconContentError), _defineProperty(_module$exports, 'icon-content-select', iconContentSelect), _defineProperty(_module$exports, 'icon-content-ashbin', iconContentAshbin), _defineProperty(_module$exports, 'icon-content-calendar', iconContentCalendar), _defineProperty(_module$exports, 'icon-content-time', iconContentTime), _defineProperty(_module$exports, 'icon-content-success', iconContentSuccess), _defineProperty(_module$exports, 'icon-content-warning', iconContentWarning), _defineProperty(_module$exports, 'icon-content-search', iconContentSearch), _defineProperty(_module$exports, 'icon-content-display', iconContentDisplay), _defineProperty(_module$exports, 'icon-content-category', iconContentCategory), _defineProperty(_module$exports, 'icon-content-prompt', iconContentPrompt), _defineProperty(_module$exports, 'icon-content-arrow-down-filling', iconContentArrowDownFilling), _defineProperty(_module$exports, 'icon-content-sorting', iconContentSorting), _defineProperty(_module$exports, 'icon-content-ascending', iconContentAscending), _defineProperty(_module$exports, 'icon-content-descending', iconContentDescending), _defineProperty(_module$exports, 'icon-content-success-filling', iconContentSuccessFilling), _defineProperty(_module$exports, 'icon-content-picture', iconContentPicture), _defineProperty(_module$exports, 'icon-content-close', iconContentClose), _defineProperty(_module$exports, 'icon-content-semi-select', iconContentSemiSelect), _defineProperty(_module$exports, 'icon-content-tag-subscript', iconContentTagSubscript), _module$exports);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}

	////
	/// @group Variables 变量
	/// @module line: 线条
	/// @type String
	/// @category style
	////


	/// Line0
	/// @export width
	var line0Width = (0, _nukeVarLoader.varLoader)('line-0-width', 0);

	/// Line1
	/// @export width
	var line1Width = (0, _nukeVarLoader.varLoader)('line-1-width', 1);

	/// Line2
	/// @export width
	var line2Width = (0, _nukeVarLoader.varLoader)('line-2-width', 2);

	/// Line3
	/// @export width
	var line3Width = (0, _nukeVarLoader.varLoader)('line-3-width', 8);

	/// Solid
	/// @export style
	/// @unconfigurable
	var lineSolid = (0, _nukeVarLoader.varLoader)('line-solid', 'solid');
	/// Dashed
	/// @export style
	/// @unconfigurable
	var lineDashed = (0, _nukeVarLoader.varLoader)('line-dashed', 'dashed');
	/// Dotted
	/// @export style
	/// @unconfigurable
	var lineDotted = (0, _nukeVarLoader.varLoader)('line-dotted', 'dotted');

	var line0 = (0, _nukeVarLoader.varLoader)('line0', line0Width + ' ' + lineSolid);
	var line0Dashed = (0, _nukeVarLoader.varLoader)('line0-dashed', line0Width + ' ' + lineDashed);
	var line0Dotted = (0, _nukeVarLoader.varLoader)('line0-dotted', line0Width + ' ' + lineDotted);

	var line1 = (0, _nukeVarLoader.varLoader)('line1', line1Width + ' ' + lineSolid);
	var line1Dashed = (0, _nukeVarLoader.varLoader)('line1-dashed', line1Width + ' ' + lineDashed);
	var line1Dotted = (0, _nukeVarLoader.varLoader)('line1-dotted', line1Width + ' ' + lineDotted);

	var line2 = (0, _nukeVarLoader.varLoader)('line2', line2Width + ' ' + lineSolid);
	var line2Dashed = (0, _nukeVarLoader.varLoader)('line2-dashed', line2Width + ' ' + lineDashed);
	var line2Dotted = (0, _nukeVarLoader.varLoader)('line2-dotted', line2Width + ' ' + lineDotted);

	var line3 = (0, _nukeVarLoader.varLoader)('line3', line3Width + ' ' + lineSolid);
	var line3Dashed = (0, _nukeVarLoader.varLoader)('line3-dashed', line3Width + ' ' + lineDashed);
	var line3Dotted = (0, _nukeVarLoader.varLoader)('line3-dotted', line3Width + ' ' + lineDotted);

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 'line-0-width', line0Width), _defineProperty(_module$exports, 'line-1-width', line1Width), _defineProperty(_module$exports, 'line-2-width', line2Width), _defineProperty(_module$exports, 'line-3-width', line3Width), _defineProperty(_module$exports, 'line-solid', lineSolid), _defineProperty(_module$exports, 'line-dashed', lineDashed), _defineProperty(_module$exports, 'line-dotted', lineDotted), _defineProperty(_module$exports, 'line0', line0), _defineProperty(_module$exports, 'line0-dashed', line0Dashed), _defineProperty(_module$exports, 'line0-dotted', line0Dotted), _defineProperty(_module$exports, 'line1', line1), _defineProperty(_module$exports, 'line1-dashed', line1Dashed), _defineProperty(_module$exports, 'line1-dotted', line1Dotted), _defineProperty(_module$exports, 'line2', line2), _defineProperty(_module$exports, 'line2-dashed', line2Dashed), _defineProperty(_module$exports, 'line2-dotted', line2Dotted), _defineProperty(_module$exports, 'line3', line3), _defineProperty(_module$exports, 'line3-dashed', line3Dashed), _defineProperty(_module$exports, 'line3-dotted', line3Dotted), _module$exports);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeVarLoader = __webpack_require__(4);

	var _color = __webpack_require__(17);

	var _color2 = _interopRequireDefault(_color);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	////
	/// @group Variables 变量
	/// @module shadow: 阴影
	/// @category style
	////


	/// 阴影x方向常规值
	/// @unconfigurable
	/// @access private
	/// @type {Number}
	var shadowX = (0, _nukeVarLoader.varLoader)('shadow-x', 1);

	/// 阴影y方向常规值
	/// @unconfigurable
	/// @access private
	/// @type {Number}
	var shadowY = (0, _nukeVarLoader.varLoader)('shadow-y', shadowX);

	/// Distance 1
	/// @type {Number}
	var shadowDistanceSd1 = (0, _nukeVarLoader.varLoader)('shadow-distance-sd1', '1');
	/// Distance 2
	/// @type {Number}
	var shadowDistanceSd2 = (0, _nukeVarLoader.varLoader)('shadow-distance-sd2', '2');
	/// Distance 3
	/// @type {Number}
	var shadowDistanceSd3 = (0, _nukeVarLoader.varLoader)('shadow-distance-sd3', '3');
	/// Distance 4
	/// @type {Number}
	var shadowDistanceSd4 = (0, _nukeVarLoader.varLoader)('shadow-distance-sd4', '4');
	/// Distance 5
	/// @type {Number}
	var shadowDistanceSd5 = (0, _nukeVarLoader.varLoader)('shadow-distance-sd5', '5');

	/// Opacity 1
	/// @type {Number}
	var shadowOpacitySd1 = (0, _nukeVarLoader.varLoader)('shadow-opacity-sd1', '0.32');
	/// Opacity 2
	/// @type {Number}
	var shadowOpacitySd2 = (0, _nukeVarLoader.varLoader)('shadow-opacity-sd2', '0.32');
	/// Opacity 3
	/// @type {Number}
	var shadowOpacitySd3 = (0, _nukeVarLoader.varLoader)('shadow-opacity-sd3', '0.32');
	/// Opacity 4
	/// @type {Number}
	var shadowOpacitySd4 = (0, _nukeVarLoader.varLoader)('shadow-opacity-sd4', '0.32');
	/// Opacity 4
	/// @type {Number}
	var shadowOpacitySd5 = (0, _nukeVarLoader.varLoader)('shadow-opacity-sd5', '0.32');

	/// Color 1
	/// @type {Color}
	var shadowColorSd1 = (0, _nukeVarLoader.varLoader)('shadow-color-sd1', _color2.default['color-n1-9']);

	/// Color 2
	/// @type {Color}
	var shadowColorSd2 = (0, _nukeVarLoader.varLoader)('shadow-color-sd2', _color2.default['color-n1-9']);

	/// Color 3
	/// @type {Color}
	var shadowColorSd3 = (0, _nukeVarLoader.varLoader)('shadow-color-sd3', _color2.default['color-n1-9']);

	/// Color 4
	/// @type {Color}
	var shadowColorSd4 = (0, _nukeVarLoader.varLoader)('shadow-color-sd4', _color2.default['color-n1-9']);

	/// Color 5
	/// @type {Color}
	var shadowColorSd5 = (0, _nukeVarLoader.varLoader)('shadow-color-sd5', _color2.default['color-n1-9']);

	var shadowColorOpacitySd1 = (0, _nukeVarLoader.varLoader)('shadow-color-opacity-sd1', 'rgba(' + shadowColorSd1 + ', ' + shadowOpacitySd1 + ')');
	var shadowColorOpacitySd2 = (0, _nukeVarLoader.varLoader)('shadow-color-opacity-sd2', 'rgba(' + shadowColorSd2 + ', ' + shadowOpacitySd2 + ')');
	var shadowColorOpacitySd3 = (0, _nukeVarLoader.varLoader)('shadow-color-opacity-sd3', 'rgba(' + shadowColorSd3 + ', ' + shadowOpacitySd3 + ')');
	var shadowColorOpacitySd4 = (0, _nukeVarLoader.varLoader)('shadow-color-opacity-sd4', 'rgba(' + shadowColorSd4 + ', ' + shadowOpacitySd4 + ')');
	var shadowColorOpacitySd5 = (0, _nukeVarLoader.varLoader)('shadow-color-opacity-sd5', 'rgba(' + shadowColorSd5 + ', ' + shadowOpacitySd5 + ')');

	var shadowSidesBase = (0, _nukeVarLoader.varLoader)('shadow-sides-base', "base");
	var shadowSidesUp = (0, _nukeVarLoader.varLoader)('shadow-sides-up', "up");
	var shadowSidesRight = (0, _nukeVarLoader.varLoader)('shadow-sides-right', "right");
	var shadowSidesDown = (0, _nukeVarLoader.varLoader)('shadow-sides-down', "down");
	var shadowSidesLeft = (0, _nukeVarLoader.varLoader)('shadow-sides-left', "left");

	/// Blur 1
	/// @type {Number}
	var shadowElevationSd1 = (0, _nukeVarLoader.varLoader)('shadow-elevation-sd1', '3');

	/// Blur 2
	/// @type {Number}
	var shadowElevationSd2 = (0, _nukeVarLoader.varLoader)('shadow-elevation-sd2', '3');

	/// Blur 3
	/// @type {Number}
	var shadowElevationSd3 = (0, _nukeVarLoader.varLoader)('shadow-elevation-sd3', '5');

	/// Blur 4
	/// @type {Number}
	var shadowElevationSd4 = (0, _nukeVarLoader.varLoader)('shadow-elevation-sd4', '7');

	/// Blur 5
	/// @type {Number}
	var shadowElevationSd5 = (0, _nukeVarLoader.varLoader)('shadow-elevation-sd5', '10');

	/// Shadow 0
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd0 = (0, _nukeVarLoader.varLoader)('shadow-sd0', shadowMaker(shadowSidesBase, 0, 1, 0, 0));

	/// Shadow 1
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd1 = (0, _nukeVarLoader.varLoader)('shadow-sd1', shadowMaker(shadowSidesBase, shadowElevationSd1, shadowColorOpacitySd1, shadowDistanceSd1, shadowDistanceSd1));

	/// Shadow 1 (Up)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd1Up = (0, _nukeVarLoader.varLoader)('shadow-sd1-up', shadowMaker(shadowSidesUp, shadowElevationSd1, shadowColorOpacitySd1, shadowDistanceSd1, shadowDistanceSd1));

	/// Shadow 1 (Right)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd1Right = (0, _nukeVarLoader.varLoader)('shadow-sd1-right', shadowMaker(shadowSidesRight, shadowElevationSd1, shadowColorOpacitySd1, shadowDistanceSd1, shadowDistanceSd1));

	/// Shadow 1 (Down)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd1Down = (0, _nukeVarLoader.varLoader)('shadow-sd1-down', shadowMaker(shadowSidesDown, shadowElevationSd1, shadowColorOpacitySd1, shadowDistanceSd1, shadowDistanceSd1));

	/// Shadow 1 (Left)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd1Left = (0, _nukeVarLoader.varLoader)('shadow-sd1-left', shadowMaker(shadowSidesLeft, shadowElevationSd1, shadowColorOpacitySd1, shadowDistanceSd1, shadowDistanceSd1));

	/// Shadow 2
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd2 = (0, _nukeVarLoader.varLoader)('shadow-sd2', shadowMaker(shadowSidesBase, shadowElevationSd2, shadowColorOpacitySd2, shadowDistanceSd2, shadowDistanceSd2));
	/// Shadow 2 (Up)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd2Up = (0, _nukeVarLoader.varLoader)('shadow-sd2-up', shadowMaker(shadowSidesUp, shadowElevationSd2, shadowColorOpacitySd2, shadowDistanceSd2, shadowDistanceSd2));
	/// Shadow 2 (Right)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd2Right = (0, _nukeVarLoader.varLoader)('shadow-sd2-right', shadowMaker(shadowSidesRight, shadowElevationSd2, shadowColorOpacitySd2, shadowDistanceSd2, shadowDistanceSd2));
	/// Shadow 2 (Down)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd2Down = (0, _nukeVarLoader.varLoader)('shadow-sd2-down', shadowMaker(shadowSidesDown, shadowElevationSd2, shadowColorOpacitySd2, shadowDistanceSd2, shadowDistanceSd2));
	/// Shadow 2 (Left)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd2Left = (0, _nukeVarLoader.varLoader)('shadow-sd2-left', shadowMaker(shadowSidesLeft, shadowElevationSd2, shadowColorOpacitySd2, shadowDistanceSd2, shadowDistanceSd2));

	/// Shadow 3
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd3 = (0, _nukeVarLoader.varLoader)('shadow-sd3', shadowMaker(shadowSidesBase, shadowElevationSd3, shadowColorOpacitySd3, shadowDistanceSd3, shadowDistanceSd3));
	/// Shadow 3 (Up)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd3Up = (0, _nukeVarLoader.varLoader)('shadow-sd3-up', shadowMaker(shadowSidesUp, shadowElevationSd3, shadowColorOpacitySd3, shadowDistanceSd3, shadowDistanceSd3));
	/// Shadow 3 (Right)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd3Right = (0, _nukeVarLoader.varLoader)('shadow-sd3-right', shadowMaker(shadowSidesRight, shadowElevationSd3, shadowColorOpacitySd3, shadowDistanceSd3, shadowDistanceSd3));
	/// Shadow 3 (Down)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd3Down = (0, _nukeVarLoader.varLoader)('shadow-sd3-down', shadowMaker(shadowSidesDown, shadowElevationSd3, shadowColorOpacitySd3, shadowDistanceSd3, shadowDistanceSd3));
	/// Shadow 3 (Left)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd3Left = (0, _nukeVarLoader.varLoader)('shadow-sd3-left', shadowMaker(shadowSidesLeft, shadowElevationSd3, shadowColorOpacitySd3, shadowDistanceSd3, shadowDistanceSd3));

	/// Shadow 4
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd4 = (0, _nukeVarLoader.varLoader)('shadow-sd4', shadowMaker(shadowSidesBase, shadowElevationSd4, shadowColorOpacitySd4, shadowDistanceSd4, shadowDistanceSd4));
	/// Shadow 4 (Up)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd4Up = (0, _nukeVarLoader.varLoader)('shadow-sd4-up', shadowMaker(shadowSidesUp, shadowElevationSd4, shadowColorOpacitySd4, shadowDistanceSd4, shadowDistanceSd4));
	/// Shadow 4 (Right)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd4Right = (0, _nukeVarLoader.varLoader)('shadow-sd4-right', shadowMaker(shadowSidesRight, shadowElevationSd4, shadowColorOpacitySd4, shadowDistanceSd4, shadowDistanceSd4));
	/// Shadow 4 (Down)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd4Down = (0, _nukeVarLoader.varLoader)('shadow-sd4-down', shadowMaker(shadowSidesDown, shadowElevationSd4, shadowColorOpacitySd4, shadowDistanceSd4, shadowDistanceSd4));
	/// Shadow 4 (Left)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd4Left = (0, _nukeVarLoader.varLoader)('shadow-sd4-left', shadowMaker(shadowSidesLeft, shadowElevationSd4, shadowColorOpacitySd4, shadowDistanceSd4, shadowDistanceSd4));

	/// Shadow 5
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd5 = (0, _nukeVarLoader.varLoader)('shadow-sd5', shadowMaker(shadowSidesBase, shadowElevationSd5, shadowColorOpacitySd5, shadowDistanceSd5, shadowDistanceSd5));
	/// Shadow 5 (Up)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd5Up = (0, _nukeVarLoader.varLoader)('shadow-sd5-up', shadowMaker(shadowSidesUp, shadowElevationSd5, shadowColorOpacitySd5, shadowDistanceSd5, shadowDistanceSd5));
	/// Shadow 5 (Right)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd5Right = (0, _nukeVarLoader.varLoader)('shadow-sd5-right', shadowMaker(shadowSidesRight, shadowElevationSd5, shadowColorOpacitySd5, shadowDistanceSd5, shadowDistanceSd5));
	/// Shadow 5 (Down)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd5Down = (0, _nukeVarLoader.varLoader)('shadow-sd5-down', shadowMaker(shadowSidesDown, shadowElevationSd5, shadowColorOpacitySd5, shadowDistanceSd5, shadowDistanceSd5));
	/// Shadow 5 (Left)
	/// @export
	/// @access private
	/// @unconfigurable
	var shadowSd5Left = (0, _nukeVarLoader.varLoader)('shadow-sd5-left', shadowMaker(shadowSidesLeft, shadowElevationSd5, shadowColorOpacitySd5, shadowDistanceSd5, shadowDistanceSd5));

	function shadowMaker() {
	    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : shadowSidesBase;
	    var elevation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : shadowElevationSd1;
	    var shadowColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : shadowColorOpacitySd1;
	    var shadowX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : shadowX;
	    var shadowY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : shadowY;

	    var x = shadowX;
	    var y = shadowY;
	    var e = elevation;
	    var c = shadowColor;

	    if (e == 0) {
	        return '0 0 0 #ffffff';
	    }

	    if (direction == shadowSidesUp) {
	        x = 0;
	        y = shadowY;
	    } else if (direction == shadowSidesRight) {
	        y = 0;
	    } else if (direction == shadowSidesDown) {
	        x = 0;
	    } else if (direction == shadowSidesLeft) {
	        x = shadowX;
	        y = 0;
	    }

	    return x + 'px ' + y + 'px ' + e + 'px ' + c;
	}

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, 'shadow-x', shadowX), _defineProperty(_module$exports, 'shadow-y', shadowY), _defineProperty(_module$exports, 'shadow-distance-sd1', shadowDistanceSd1), _defineProperty(_module$exports, 'shadow-distance-sd2', shadowDistanceSd2), _defineProperty(_module$exports, 'shadow-distance-sd3', shadowDistanceSd3), _defineProperty(_module$exports, 'shadow-distance-sd4', shadowDistanceSd4), _defineProperty(_module$exports, 'shadow-distance-sd5', shadowDistanceSd5), _defineProperty(_module$exports, 'shadow-opacity-sd1', shadowOpacitySd1), _defineProperty(_module$exports, 'shadow-opacity-sd2', shadowOpacitySd2), _defineProperty(_module$exports, 'shadow-opacity-sd3', shadowOpacitySd3), _defineProperty(_module$exports, 'shadow-opacity-sd4', shadowOpacitySd4), _defineProperty(_module$exports, 'shadow-opacity-sd5', shadowOpacitySd5), _defineProperty(_module$exports, 'shadow-color-sd1', shadowColorSd1), _defineProperty(_module$exports, 'shadow-color-sd2', shadowColorSd2), _defineProperty(_module$exports, 'shadow-color-sd3', shadowColorSd3), _defineProperty(_module$exports, 'shadow-color-sd4', shadowColorSd4), _defineProperty(_module$exports, 'shadow-color-sd5', shadowColorSd5), _defineProperty(_module$exports, 'shadow-color-opacity-sd1', shadowColorOpacitySd1), _defineProperty(_module$exports, 'shadow-color-opacity-sd2', shadowColorOpacitySd2), _defineProperty(_module$exports, 'shadow-color-opacity-sd3', shadowColorOpacitySd3), _defineProperty(_module$exports, 'shadow-color-opacity-sd4', shadowColorOpacitySd4), _defineProperty(_module$exports, 'shadow-color-opacity-sd5', shadowColorOpacitySd5), _defineProperty(_module$exports, 'shadow-sides-base', shadowSidesBase), _defineProperty(_module$exports, 'shadow-sides-up', shadowSidesUp), _defineProperty(_module$exports, 'shadow-sides-right', shadowSidesRight), _defineProperty(_module$exports, 'shadow-sides-down', shadowSidesDown), _defineProperty(_module$exports, 'shadow-sides-left', shadowSidesLeft), _defineProperty(_module$exports, 'shadow-elevation-sd1', shadowElevationSd1), _defineProperty(_module$exports, 'shadow-elevation-sd2', shadowElevationSd2), _defineProperty(_module$exports, 'shadow-elevation-sd3', shadowElevationSd3), _defineProperty(_module$exports, 'shadow-elevation-sd4', shadowElevationSd4), _defineProperty(_module$exports, 'shadow-elevation-sd5', shadowElevationSd5), _defineProperty(_module$exports, 'shadow-sd0', shadowSd0), _defineProperty(_module$exports, 'shadow-sd1', shadowSd1), _defineProperty(_module$exports, 'shadow-sd1-up', shadowSd1Up), _defineProperty(_module$exports, 'shadow-sd1-right', shadowSd1Right), _defineProperty(_module$exports, 'shadow-sd1-down', shadowSd1Down), _defineProperty(_module$exports, 'shadow-sd1-left', shadowSd1Left), _defineProperty(_module$exports, 'shadow-sd2', shadowSd2), _defineProperty(_module$exports, 'shadow-sd2-up', shadowSd2Up), _defineProperty(_module$exports, 'shadow-sd2-right', shadowSd2Right), _defineProperty(_module$exports, 'shadow-sd2-down', shadowSd2Down), _defineProperty(_module$exports, 'shadow-sd2-left', shadowSd2Left), _defineProperty(_module$exports, 'shadow-sd3', shadowSd3), _defineProperty(_module$exports, 'shadow-sd3-up', shadowSd3Up), _defineProperty(_module$exports, 'shadow-sd3-right', shadowSd3Right), _defineProperty(_module$exports, 'shadow-sd3-down', shadowSd3Down), _defineProperty(_module$exports, 'shadow-sd3-left', shadowSd3Left), _defineProperty(_module$exports, 'shadow-sd4', shadowSd4), _defineProperty(_module$exports, 'shadow-sd4-up', shadowSd4Up), _defineProperty(_module$exports, 'shadow-sd4-right', shadowSd4Right), _defineProperty(_module$exports, 'shadow-sd4-down', shadowSd4Down), _defineProperty(_module$exports, 'shadow-sd4-left', shadowSd4Left), _defineProperty(_module$exports, 'shadow-sd5', shadowSd5), _defineProperty(_module$exports, 'shadow-sd5-up', shadowSd5Up), _defineProperty(_module$exports, 'shadow-sd5-right', shadowSd5Right), _defineProperty(_module$exports, 'shadow-sd5-down', shadowSd5Down), _defineProperty(_module$exports, 'shadow-sd5-left', shadowSd5Left), _defineProperty(_module$exports, 'shadowMaker', shadowMaker), _module$exports);

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @namespace ua for h5
	 */
	function UAparser() {
	    //某些奇葩的Android手机拿userAgent会为空,或者有权限问题
	    var userAgent = "";
	    var unKnown = false;
	    var appInfo = {};
	    try {
	        userAgent = navigator.userAgent.toLowerCase();
	        if (!userAgent || userAgent == "") {
	            unKnown = true;
	        }
	    } catch (e) {
	        unKnown = true;
	    }
	    var OS = {
	        ios: /iPhone|iPod|iPad|IOS/i.test(userAgent),
	        iphone: /iPhone/i.test(userAgent),
	        ipod: /iPod/i.test(userAgent),
	        ipad: /iPad/i.test(userAgent),
	        iphoneVersion: (userAgent.match(/.+(?:iphone\ os)[\/: ]([\d_]+)/) || [0, 0])[1].toString().split('_').join('.'),
	        ipadVersion: (userAgent.match(/.+(?:cpu\ os)[\/: ]([\d_]+)/) || [0, 0])[1].toString().split('_').join('.'),

	        android: /Android/i.test(userAgent),
	        androidPhone: /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i.test(userAgent),
	        androidPad: /Android/i.test(userAgent) && !/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i.test(userAgent),
	        androidVersion: (userAgent.match(/.+(?:android)[\/: ]([\d.]+)/) || [0, 0])[1]
	    };

	    var ver = 0,
	        osname = 'Unknown';
	    if (OS.iphone) {
	        osname = 'iphone';
	        ver = OS.iphoneVersion;
	    } else if (OS.ipod) {
	        osname = 'ipod';
	        ver = OS.iphoneVersion;
	    } else if (OS.ipad) {
	        osname = 'ipad';
	        ver = OS.ipadVersion;
	    } else if (OS.android) {
	        osname = OS.androidPhone ? 'androidPhone' : 'androidPad';
	        ver = OS.androidVersion;
	    }

	    appInfo.osVersion = ver;

	    // appInfo.platform = osname;

	    appInfo.iphone = userAgent.match(/iphone os/i) == "iphone os" || OS.iphone || OS.ipod;

	    appInfo.ipad = userAgent.match(/ipad/i) == "ipad" || OS.ipad;

	    appInfo.android = 'unKnown' || userAgent.match(/android/i) == "android" || OS.android || OS.androidPhone || OS.androidPad;

	    appInfo.ios = appInfo.iphone || appInfo.ipad;

	    appInfo.appName = /AliApp\(QN\//i.test(userAgent) ? 'QN' : 'unKnown';

	    appInfo.platform = appInfo.ios ? 'iOS' : appInfo.android === true ? 'android' : 'unKnown';

	    appInfo.isInAliApp = /AliApp/i.test(userAgent);

	    appInfo.appVersion = appInfo.appName === 'QN' ? (userAgent.match(/AliApp\(QN\/(\d+(\.\d+){0,3})?\)/i) || [])[1] : 'unKnown';
	    // alert( (userAgent.match(/AliApp\(QN\/(\d+(\.\d+){0,2})?\)/i) || [])[1]);
	    return appInfo;
	};
	exports.default = UAparser;
	module.exports = exports["default"];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _nukeView = __webpack_require__(5);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	var _nukeText = __webpack_require__(8);

	var _nukeText2 = _interopRequireDefault(_nukeText);

	var _nukeTouchable = __webpack_require__(21);

	var _nukeTouchable2 = _interopRequireDefault(_nukeTouchable);

	var _nukeImage = __webpack_require__(53);

	var _nukeImage2 = _interopRequireDefault(_nukeImage);

	var _nukeIconfont = __webpack_require__(52);

	var _nukeIconfont2 = _interopRequireDefault(_nukeIconfont);

	var _styles = __webpack_require__(51);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	        if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var ICON_TYPES = {
	    'xs': _styles2.default['nuke-icon-xs'],
	    'medium': _styles2.default['nuke-icon-medium'],
	    'large': _styles2.default['nuke-icon-large'],
	    'small': _styles2.default['nuke-icon-small']
	};
	var iconCodes = {
	    all: "\uE623",
	    email: "\uE612",
	    account: "\uE60D",
	    emailFilling: "\uE627",
	    favoritesFilling: "\uE617",
	    accountFilling: "\uE618",
	    smile: "\uE613",
	    personalCenter: "\uE619",
	    back: "\uE600",
	    arrowDown: "\uE61A",
	    arrowUp: "\uE625",
	    add: "\uE601",
	    minus: "\uE614",
	    errorFilling: "\uE602",
	    error: "\uE603",
	    select: "\uE609",
	    success: "\uE606",
	    warning: "\uE607",
	    display: "\uE604",
	    prompt: "\uE608",
	    successFilling: "\uE60A",
	    close: "\uE61C",
	    semiSelect: "\uE60B",
	    loading: "\uE60C",
	    navMore: "\uE610",
	    search: "\uE611",
	    arrowRight: "\uE616",
	    favorites: "\uE628",
	    deleteFilling: "\uE605",
	    arrowLeft: "\uE60E",
	    radio: "\uE60F",
	    checkbox: "\uE615",
	    play: "\uE635",
	    right: "\uE639"
	};

	var Icon = function (_Component) {
	    _inherits(Icon, _Component);

	    function Icon(props) {
	        _classCallCheck(this, Icon);

	        var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Icon, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            (0, _nukeIconfont2.default)({ name: "nukeIcons", url: "https://at.alicdn.com/t/font_tirbeh9ly833di.ttf" });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                size = _props.size,
	                _props$style = _props.style,
	                style = _props$style === undefined ? {} : _props$style,
	                _props$type = _props.type,
	                type = _props$type === undefined ? '' : _props$type,
	                _props$onPress = _props.onPress,
	                onPress = _props$onPress === undefined ? function () {} : _props$onPress,
	                others = _objectWithoutProperties(_props, ['size', 'style', 'type', 'onPress']);

	            if ('name' in this.props) {
	                var textStyle = _extends2({}, style, { fontFamily: 'nukeIcons' });
	                return (0, _rax.createElement)(_nukeText2.default, _extends({}, others, { style: textStyle }), iconCodes[this.props.name]);
	            } else {
	                var wrapStyle = _extends2({}, _styles2.default['nuke-icon'], style);
	                var sizeStyle = ICON_TYPES[size];
	                return (0, _rax.createElement)(_nukeTouchable2.default, _extends({ onPress: this.props.onPress, style: wrapStyle }, others), (0, _rax.createElement)(_nukeImage2.default, { source: { uri: this.props.src }, style: sizeStyle, resizeMode: 'cover' }));
	            }
	        }
	    }]);

	    return Icon;
	}(_rax.Component);

	Icon.defaultProps = {
	    size: 'medium'
	};
	Icon.propTypes = {
	    size: _rax.PropTypes.oneOf(['xs', 'small', 'medium', 'large'])
	};
	exports.default = Icon;
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// icon mixins
	// --------------------------------------------------

	var mixin = {
	    iconSize: function iconSize(size) {
	        return {
	            width: size,
	            height: size
	        };
	    }

	};
	exports.default = mixin;
	module.exports = exports["default"];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _module$exports;

	var _nukeCore = __webpack_require__(40);

	var _nukeCore2 = _interopRequireDefault(_nukeCore);

	var _mixin = __webpack_require__(50);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	var iconPrefix = "nuke-icon";

	module.exports = (_module$exports = {}, _defineProperty(_module$exports, iconPrefix, {
	    flexDirection: 'row',
	    alignSelf: 'center',
	    alignItems: 'center'
	}), _defineProperty(_module$exports, iconPrefix + '-xs', (0, _mixin.iconSize)(_nukeCore2.default['icon-xs'])), _defineProperty(_module$exports, iconPrefix + '-small', (0, _mixin.iconSize)(_nukeCore2.default['icon-s'])), _defineProperty(_module$exports, iconPrefix + '-medium', (0, _mixin.iconSize)(_nukeCore2.default['icon-m'])), _defineProperty(_module$exports, iconPrefix + '-large', (0, _mixin.iconSize)(_nukeCore2.default['icon-l'])), _module$exports);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	/**
	 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
	 * All rights reserved.
	 *
	 * @providesModule
	 */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _nukeEnv = __webpack_require__(7);

	function Iconfont(options) {
	    var url = options.url,
	        name = options.name;

	    if (!url || !name) return;
	    var urlFit = url;
	    if (_nukeEnv.isWeex) {
	        if (url.indexOf('//at.alicdn.com') === 0) {
	            urlFit = 'https:' + urlFit;
	        }
	        var domModule = __webpack_require__(32);
	        domModule.addRule('fontFace', {
	            'fontFamily': name,
	            'src': "url('" + urlFit + "')"
	        });
	    } else {

	        var css = "@font-face {font-family: '" + name + "';src: url('" + urlFit + "');}",
	            head = document.head || document.getElementsByTagName('head')[0],
	            style = document.createElement('style');

	        style.type = 'text/css';
	        if (style.styleSheet) {
	            style.styleSheet.cssText = css;
	        } else {
	            style.appendChild(document.createTextNode(css));
	        }

	        head.appendChild(style);
	    }
	}

	exports.default = Iconfont;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	/* @jsx createElement */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _nukeEnv = __webpack_require__(7);

	var _nukeView = __webpack_require__(54);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Image = function (_Component) {
	    _inherits(Image, _Component);

	    function Image(props) {
	        _classCallCheck(this, Image);

	        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

	        _this.load = function (e) {
	            var width = void 0,
	                height = void 0;
	            if (_nukeEnv.isWeex) {
	                if (e.size && e.size.naturalWidth > 0 && e.size.naturalHeight > 0) {
	                    width = _this.convertToRem(e.target.naturalWidth);
	                    height = _this.convertToRem(e.target.naturalHeight);
	                }
	            } else {
	                if (e.target) {
	                    width = _this.convertToRem(e.target.naturalWidth);
	                    height = _this.convertToRem(e.target.naturalHeight);
	                    e.size = {
	                        naturalWidth: width,
	                        naturalHeight: height
	                    };
	                }
	            }
	            if (_this.props.autoFit && width && height) {
	                _this.setState({
	                    width: width,
	                    height: height
	                });
	            }

	            _this.props.onLoad && _this.props.onLoad(e);
	        };

	        _this.state = {
	            width: 1,
	            height: 1
	        };
	        return _this;
	    }

	    _createClass(Image, [{
	        key: 'convertToRem',
	        value: function convertToRem(num) {
	            var pxWidth = void 0;
	            if (_nukeEnv.isWeex) {
	                pxWidth = WXEnvironment.deviceWidth;
	            } else {
	                pxWidth = document.documentElement.clientWidth * devicePixelRatio;
	            }
	            return Math.round(num * 750 / pxWidth);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var nativeProps = _extends({}, this.props);

	            var src = nativeProps.src,
	                _nativeProps$source = nativeProps.source,
	                source = _nativeProps$source === undefined ? {} : _nativeProps$source;

	            if (src || source.uri) {
	                nativeProps.src = src || source.uri;
	                var width = source.width,
	                    height = source.height;

	                nativeProps.style = _extends({
	                    width: width || 1,
	                    height: height || 1
	                }, nativeProps.style);
	                if (this.props.autoFit) {
	                    nativeProps.style.width = this.state.width;
	                    nativeProps.style.height = this.state.height;
	                }

	                delete nativeProps.source;

	                var ImageElement = void 0;
	                if (_nukeEnv.isWeex) {
	                    ImageElement = 'image';
	                } else {
	                    ImageElement = 'img';
	                }

	                // for cover and contain
	                var propsResizeMode = nativeProps.resizeMode || nativeProps.style.resizeMode;
	                if (propsResizeMode) {
	                    if (_nukeEnv.isWeex) {
	                        nativeProps.resize = propsResizeMode;
	                        nativeProps.style.resizeMode = propsResizeMode;
	                    } else {
	                        nativeProps.style.objectFit = propsResizeMode;
	                    }
	                }

	                if (nativeProps.children) {
	                    var imageProps = _extends({}, nativeProps, {
	                        style: _extends({}, nativeProps.style, styles.absoluteImage)
	                    });

	                    return (0, _rax.createElement)(_nukeView2.default, { style: nativeProps.style }, (0, _rax.createElement)(ImageElement, imageProps), this.props.children);
	                } else {
	                    return (0, _rax.createElement)(ImageElement, _extends({}, nativeProps, { onLoad: this.load }));
	                }
	            }
	            return null;
	        }
	    }]);

	    return Image;
	}(_rax.Component);

	Image.resizeMode = {
	    contain: 'contain',
	    cover: 'cover',
	    stretch: 'stretch',
	    center: 'center',
	    repeat: 'repeat'
	};

	var styles = {
	    absoluteImage: {
	        left: 0,
	        right: 0,
	        top: 0,
	        bottom: 0,
	        position: 'absolute'
	    }
	};

	exports.default = Image;
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _raxView = __webpack_require__(14);

	var _raxView2 = _interopRequireDefault(_raxView);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _raxView2.default;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _nukeView = __webpack_require__(5);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	var _nukeText = __webpack_require__(8);

	var _nukeText2 = _interopRequireDefault(_nukeText);

	var _nukeScrollView = __webpack_require__(20);

	var _nukeScrollView2 = _interopRequireDefault(_nukeScrollView);

	var _styles = __webpack_require__(19);

	var _styles2 = _interopRequireDefault(_styles);

	var _item = __webpack_require__(56);

	var _item2 = _interopRequireDefault(_item);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var Page = function (_PureComponent) {
	    _inherits(Page, _PureComponent);

	    function Page(props) {
	        _classCallCheck(this, Page);

	        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
	    }

	    _createClass(Page, [{
	        key: 'render',
	        value: function render() {
	            return _rax.createElement(_nukeScrollView2.default, { style: _styles2.default.container }, _rax.createElement(_nukeView2.default, { style: _styles2.default.title, className: 'nuke-border-bottom-fix-1' }, _rax.createElement(_nukeView2.default, { style: _styles2.default.title_wrap }, _rax.createElement(_nukeText2.default, { style: _styles2.default.title_text }, this.props.title))), this.props.children);
	        }
	    }]);

	    return Page;
	}(_rax.PureComponent);

	Page.Intro = _item2.default;
	exports.default = Page;
	module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	/**
	 * Copyright (c) 2015-present, Alibaba Group Holding Limited.
	 * All rights reserved.
	 *
	 * @providesModule rx-Button
	 */
	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _rax = __webpack_require__(1);

	var _nukeView = __webpack_require__(5);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	var _nukeText = __webpack_require__(8);

	var _nukeText2 = _interopRequireDefault(_nukeText);

	var _nukeScrollView = __webpack_require__(20);

	var _nukeScrollView2 = _interopRequireDefault(_nukeScrollView);

	var _styles = __webpack_require__(19);

	var _styles2 = _interopRequireDefault(_styles);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var BizIntro = function (_PureComponent) {
	    _inherits(BizIntro, _PureComponent);

	    function BizIntro(props) {
	        _classCallCheck(this, BizIntro);

	        return _possibleConstructorReturn(this, (BizIntro.__proto__ || Object.getPrototypeOf(BizIntro)).call(this, props));
	    }

	    _createClass(BizIntro, [{
	        key: 'render',
	        value: function render() {
	            var sub_style = [_styles2.default.intro_text, _styles2.default.intro_text_sub];
	            if (this.props.main) sub_style.push({ marginTop: 16 });
	            return (0, _rax.createElement)(_nukeView2.default, { style: _styles2.default.intro }, (0, _rax.createElement)(_nukeText2.default, { style: _styles2.default.intro_text }, this.props.main), (0, _rax.createElement)(_nukeText2.default, { style: sub_style }, this.props.sub));
	        }
	    }]);

	    return BizIntro;
	}(_rax.PureComponent);

	exports.default = BizIntro;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _rax = __webpack_require__(1);

	var _nukeEnv = __webpack_require__(7);

	var _nukeEnv2 = _interopRequireDefault(_nukeEnv);

	var _raxRefreshcontrol = __webpack_require__(35);

	var _raxRefreshcontrol2 = _interopRequireDefault(_raxRefreshcontrol);

	var _nukeView = __webpack_require__(5);

	var _nukeView2 = _interopRequireDefault(_nukeView);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	} /* @jsx createElement */

	var isWeex = _nukeEnv2.default.isWeex,
	    isWeb = _nukeEnv2.default.isWeb;

	var RefreshControl = function (_Component) {
	  _inherits(RefreshControl, _Component);

	  function RefreshControl() {
	    _classCallCheck(this, RefreshControl);

	    return _possibleConstructorReturn(this, (RefreshControl.__proto__ || Object.getPrototypeOf(RefreshControl)).apply(this, arguments));
	  }

	  _createClass(RefreshControl, [{
	    key: 'render',
	    value: function render() {
	      if (isWeex) {
	        return (0, _rax.createElement)(_raxRefreshcontrol2.default, this.props);
	      } else {
	        return (0, _rax.createElement)(_nukeView2.default, this.props);
	      }
	    }
	  }]);

	  return RefreshControl;
	}(_rax.Component);

	exports.default = RefreshControl;
	module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/** @jsx createElement */
	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = WebPullToRefresh;

	var _hammerjs = __webpack_require__(60);

	var _hammerjs2 = _interopRequireDefault(_hammerjs);

	var _rax = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function WebPullToRefresh() {

	    /**
	     * Hold all of the default parameters for the module
	     * @type {object}
	     */
	    var defaults = {
	        // ID of the element holding pannable content area
	        contentEl: 'content',

	        // ID of the element holding pull to refresh loading area
	        ptrEl: 'ptr',

	        // wrapper element holding scollable
	        bodyEl: document.body,

	        // Number of pixels of panning until refresh
	        distanceToRefresh: 70,

	        // Pointer to function that does the loading and returns a promise
	        loadingFunction: false,

	        // Dragging resistance level
	        resistance: 2.5
	    };

	    /**
	     * Hold all of the merged parameter and default module options
	     * @type {object}
	     */
	    var options = {};

	    /**
	     * Pan event parameters
	     * @type {object}
	     */
	    var pan = {
	        enabled: false,
	        distance: 0,
	        startingPositionY: 0
	    };

	    /**
	     * Easy shortener for handling adding and removing body classes.
	     */
	    var bodyClass = defaults.bodyEl.classList;

	    /**
	     * Initialize pull to refresh, hammer, and bind pan events.
	     *
	     * @param {object=} params - Setup parameters for pull to refresh
	     */
	    var init = function init(params) {
	        params = params || {};
	        options = {
	            contentEl: (0, _rax.findDOMNode)(params.contentEl) || document.getElementById(defaults.contentEl),
	            ptrEl: (0, _rax.findDOMNode)(params.ptrEl) || document.getElementById(defaults.ptrEl),
	            bodyEl: (0, _rax.findDOMNode)(params.bodyEl) || defaults.bodyEl,
	            distanceToRefresh: params.distanceToRefresh || defaults.distanceToRefresh,
	            loadingFunction: params.loadingFunction || defaults.loadingFunction,
	            resistance: params.resistance || defaults.resistance,
	            hammerOptions: params.hammerOptions || {}
	        };

	        if (!options.contentEl || !options.ptrEl) {
	            return false;
	        }

	        bodyClass = options.bodyEl.classList;

	        var h = new _hammerjs2.default((0, _rax.findDOMNode)(options.contentEl), options.hammerOptions);

	        h.get('pan').set({ direction: _hammerjs2.default.DIRECTION_VERTICAL });

	        h.on('panstart', _panStart);
	        h.on('pandown', _panDown);
	        h.on('panup', _panUp);
	        h.on('panend', _panEnd);
	    };

	    /**
	     * Determine whether pan events should apply based on scroll position on panstart
	     *
	     * @param {object} e - Event object
	     */
	    var _panStart = function _panStart(e) {
	        pan.startingPositionY = options.bodyEl.scrollTop;

	        if (pan.startingPositionY === 0) {
	            pan.enabled = true;
	        }
	    };

	    /**
	     * Handle element on screen movement when the pandown events is firing.
	     *
	     * @param {object} e - Event object
	     */
	    var _panDown = function _panDown(e) {
	        if (!pan.enabled) {
	            return;
	        }

	        e.preventDefault();
	        pan.distance = e.distance / options.resistance;

	        _setContentPan();
	        _setBodyClass();
	    };

	    /**
	     * Handle element on screen movement when the pandown events is firing.
	     *
	     * @param {object} e - Event object
	     */
	    var _panUp = function _panUp(e) {
	        if (!pan.enabled || pan.distance === 0) {
	            return;
	        }

	        e.preventDefault();

	        if (pan.distance < e.distance / options.resistance) {
	            pan.distance = 0;
	        } else {
	            pan.distance = e.distance / options.resistance;
	        }

	        _setContentPan();
	        _setBodyClass();
	    };

	    /**
	     * Set the CSS transform on the content element to move it on the screen.
	     */
	    var _setContentPan = function _setContentPan() {
	        // Use transforms to smoothly animate elements on desktop and mobile devices
	        options.contentEl.style.transform = options.contentEl.style.webkitTransform = 'translate3d( 0, ' + pan.distance + 'px, 0 )';
	        options.ptrEl.style.transform = options.ptrEl.style.webkitTransform = 'translate3d( 0, ' + (pan.distance - options.ptrEl.offsetHeight) + 'px, 0 )';
	    };

	    /**
	     * Set/remove the loading body class to show or hide the loading indicator after pull down.
	     */
	    var _setBodyClass = function _setBodyClass() {
	        if (pan.distance > options.distanceToRefresh) {
	            bodyClass.add('ptr-refresh');
	        } else {
	            bodyClass.remove('ptr-refresh');
	        }
	    };

	    /**
	     * Determine how to animate and position elements when the panend event fires.
	     *
	     * @param {object} e - Event object
	     */
	    var _panEnd = function _panEnd(e) {
	        if (!pan.enabled) {
	            return;
	        }

	        e.preventDefault();

	        options.contentEl.style.transform = options.contentEl.style.webkitTransform = '';
	        options.ptrEl.style.transform = options.ptrEl.style.webkitTransform = '';

	        if (options.bodyEl.classList.contains('ptr-refresh')) {
	            _doLoading();
	        } else {
	            _doReset();
	        }

	        pan.distance = 0;
	        pan.enabled = false;
	    };

	    /**
	     * Position content and refresh elements to show that loading is taking place.
	     */
	    var _doLoading = function _doLoading() {
	        bodyClass.add('ptr-loading');

	        // If no valid loading function exists, just reset elements
	        if (!options.loadingFunction) {
	            return _doReset();
	        }

	        // The loading function should return a promise
	        var loadingPromise = options.loadingFunction();

	        // For UX continuity, make sure we show loading for at least one second before resetting
	        setTimeout(function () {
	            // Once actual loading is complete, reset pull to refresh
	            loadingPromise.then(_doReset);
	        }, 1000);
	    };

	    /**
	     * Reset all elements to their starting positions before any paning took place.
	     */
	    var _doReset = function _doReset() {
	        bodyClass.remove('ptr-loading');
	        bodyClass.remove('ptr-refresh');
	        bodyClass.add('ptr-reset');

	        var bodyClassRemove = function bodyClassRemove() {
	            bodyClass.remove('ptr-reset');
	            options.bodyEl.removeEventListener('transitionend', bodyClassRemove, false);
	        };

	        options.bodyEl.addEventListener('transitionend', bodyClassRemove, false);
	    };

	    return {
	        init: init
	    };
	}
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NukeGlobal = {};

	exports.default = NukeGlobal;
	module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function (window, document, exportName, undefined) {
	    'use strict';

	    var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	    var TEST_ELEMENT = document.createElement('div');

	    var TYPE_FUNCTION = 'function';

	    var round = Math.round;
	    var abs = Math.abs;
	    var now = Date.now;

	    /**
	     * set a timeout with a given scope
	     * @param {Function} fn
	     * @param {Number} timeout
	     * @param {Object} context
	     * @returns {number}
	     */
	    function setTimeoutContext(fn, timeout, context) {
	        return setTimeout(bindFn(fn, context), timeout);
	    }

	    /**
	     * if the argument is an array, we want to execute the fn on each entry
	     * if it aint an array we don't want to do a thing.
	     * this is used by all the methods that accept a single and array argument.
	     * @param {*|Array} arg
	     * @param {String} fn
	     * @param {Object} [context]
	     * @returns {Boolean}
	     */
	    function invokeArrayArg(arg, fn, context) {
	        if (Array.isArray(arg)) {
	            each(arg, context[fn], context);
	            return true;
	        }
	        return false;
	    }

	    /**
	     * walk objects and arrays
	     * @param {Object} obj
	     * @param {Function} iterator
	     * @param {Object} context
	     */
	    function each(obj, iterator, context) {
	        var i;

	        if (!obj) {
	            return;
	        }

	        if (obj.forEach) {
	            obj.forEach(iterator, context);
	        } else if (obj.length !== undefined) {
	            i = 0;
	            while (i < obj.length) {
	                iterator.call(context, obj[i], i, obj);
	                i++;
	            }
	        } else {
	            for (i in obj) {
	                obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	            }
	        }
	    }

	    /**
	     * wrap a method with a deprecation warning and stack trace
	     * @param {Function} method
	     * @param {String} name
	     * @param {String} message
	     * @returns {Function} A new function wrapping the supplied method.
	     */
	    function deprecate(method, name, message) {
	        var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
	        return function () {
	            var e = new Error('get-stack-trace');
	            var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '').replace(/^\s+at\s+/gm, '').replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

	            var log = window.console && (window.console.warn || window.console.log);
	            if (log) {
	                log.call(window.console, deprecationMessage, stack);
	            }
	            return method.apply(this, arguments);
	        };
	    }

	    /**
	     * extend object.
	     * means that properties in dest will be overwritten by the ones in src.
	     * @param {Object} target
	     * @param {...Object} objects_to_assign
	     * @returns {Object} target
	     */
	    var assign;
	    if (typeof Object.assign !== 'function') {
	        assign = function assign(target) {
	            if (target === undefined || target === null) {
	                throw new TypeError('Cannot convert undefined or null to object');
	            }

	            var output = Object(target);
	            for (var index = 1; index < arguments.length; index++) {
	                var source = arguments[index];
	                if (source !== undefined && source !== null) {
	                    for (var nextKey in source) {
	                        if (source.hasOwnProperty(nextKey)) {
	                            output[nextKey] = source[nextKey];
	                        }
	                    }
	                }
	            }
	            return output;
	        };
	    } else {
	        assign = Object.assign;
	    }

	    /**
	     * extend object.
	     * means that properties in dest will be overwritten by the ones in src.
	     * @param {Object} dest
	     * @param {Object} src
	     * @param {Boolean} [merge=false]
	     * @returns {Object} dest
	     */
	    var extend = deprecate(function extend(dest, src, merge) {
	        var keys = Object.keys(src);
	        var i = 0;
	        while (i < keys.length) {
	            if (!merge || merge && dest[keys[i]] === undefined) {
	                dest[keys[i]] = src[keys[i]];
	            }
	            i++;
	        }
	        return dest;
	    }, 'extend', 'Use `assign`.');

	    /**
	     * merge the values from src in the dest.
	     * means that properties that exist in dest will not be overwritten by src
	     * @param {Object} dest
	     * @param {Object} src
	     * @returns {Object} dest
	     */
	    var merge = deprecate(function merge(dest, src) {
	        return extend(dest, src, true);
	    }, 'merge', 'Use `assign`.');

	    /**
	     * simple class inheritance
	     * @param {Function} child
	     * @param {Function} base
	     * @param {Object} [properties]
	     */
	    function inherit(child, base, properties) {
	        var baseP = base.prototype,
	            childP;

	        childP = child.prototype = Object.create(baseP);
	        childP.constructor = child;
	        childP._super = baseP;

	        if (properties) {
	            assign(childP, properties);
	        }
	    }

	    /**
	     * simple function bind
	     * @param {Function} fn
	     * @param {Object} context
	     * @returns {Function}
	     */
	    function bindFn(fn, context) {
	        return function boundFn() {
	            return fn.apply(context, arguments);
	        };
	    }

	    /**
	     * let a boolean value also be a function that must return a boolean
	     * this first item in args will be used as the context
	     * @param {Boolean|Function} val
	     * @param {Array} [args]
	     * @returns {Boolean}
	     */
	    function boolOrFn(val, args) {
	        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) == TYPE_FUNCTION) {
	            return val.apply(args ? args[0] || undefined : undefined, args);
	        }
	        return val;
	    }

	    /**
	     * use the val2 when val1 is undefined
	     * @param {*} val1
	     * @param {*} val2
	     * @returns {*}
	     */
	    function ifUndefined(val1, val2) {
	        return val1 === undefined ? val2 : val1;
	    }

	    /**
	     * addEventListener with multiple events at once
	     * @param {EventTarget} target
	     * @param {String} types
	     * @param {Function} handler
	     */
	    function addEventListeners(target, types, handler) {
	        each(splitStr(types), function (type) {
	            target.addEventListener(type, handler, false);
	        });
	    }

	    /**
	     * removeEventListener with multiple events at once
	     * @param {EventTarget} target
	     * @param {String} types
	     * @param {Function} handler
	     */
	    function removeEventListeners(target, types, handler) {
	        each(splitStr(types), function (type) {
	            target.removeEventListener(type, handler, false);
	        });
	    }

	    /**
	     * find if a node is in the given parent
	     * @method hasParent
	     * @param {HTMLElement} node
	     * @param {HTMLElement} parent
	     * @return {Boolean} found
	     */
	    function hasParent(node, parent) {
	        while (node) {
	            if (node == parent) {
	                return true;
	            }
	            node = node.parentNode;
	        }
	        return false;
	    }

	    /**
	     * small indexOf wrapper
	     * @param {String} str
	     * @param {String} find
	     * @returns {Boolean} found
	     */
	    function inStr(str, find) {
	        return str.indexOf(find) > -1;
	    }

	    /**
	     * split string on whitespace
	     * @param {String} str
	     * @returns {Array} words
	     */
	    function splitStr(str) {
	        return str.trim().split(/\s+/g);
	    }

	    /**
	     * find if a array contains the object using indexOf or a simple polyFill
	     * @param {Array} src
	     * @param {String} find
	     * @param {String} [findByKey]
	     * @return {Boolean|Number} false when not found, or the index
	     */
	    function inArray(src, find, findByKey) {
	        if (src.indexOf && !findByKey) {
	            return src.indexOf(find);
	        } else {
	            var i = 0;
	            while (i < src.length) {
	                if (findByKey && src[i][findByKey] == find || !findByKey && src[i] === find) {
	                    return i;
	                }
	                i++;
	            }
	            return -1;
	        }
	    }

	    /**
	     * convert array-like objects to real arrays
	     * @param {Object} obj
	     * @returns {Array}
	     */
	    function toArray(obj) {
	        return Array.prototype.slice.call(obj, 0);
	    }

	    /**
	     * unique array with objects based on a key (like 'id') or just by the array's value
	     * @param {Array} src [{id:1},{id:2},{id:1}]
	     * @param {String} [key]
	     * @param {Boolean} [sort=False]
	     * @returns {Array} [{id:1},{id:2}]
	     */
	    function uniqueArray(src, key, sort) {
	        var results = [];
	        var values = [];
	        var i = 0;

	        while (i < src.length) {
	            var val = key ? src[i][key] : src[i];
	            if (inArray(values, val) < 0) {
	                results.push(src[i]);
	            }
	            values[i] = val;
	            i++;
	        }

	        if (sort) {
	            if (!key) {
	                results = results.sort();
	            } else {
	                results = results.sort(function sortUniqueArray(a, b) {
	                    return a[key] > b[key];
	                });
	            }
	        }

	        return results;
	    }

	    /**
	     * get the prefixed property
	     * @param {Object} obj
	     * @param {String} property
	     * @returns {String|Undefined} prefixed
	     */
	    function prefixed(obj, property) {
	        var prefix, prop;
	        var camelProp = property[0].toUpperCase() + property.slice(1);

	        var i = 0;
	        while (i < VENDOR_PREFIXES.length) {
	            prefix = VENDOR_PREFIXES[i];
	            prop = prefix ? prefix + camelProp : property;

	            if (prop in obj) {
	                return prop;
	            }
	            i++;
	        }
	        return undefined;
	    }

	    /**
	     * get a unique id
	     * @returns {number} uniqueId
	     */
	    var _uniqueId = 1;
	    function uniqueId() {
	        return _uniqueId++;
	    }

	    /**
	     * get the window object of an element
	     * @param {HTMLElement} element
	     * @returns {DocumentView|Window}
	     */
	    function getWindowForElement(element) {
	        var doc = element.ownerDocument || element;
	        return doc.defaultView || doc.parentWindow || window;
	    }

	    var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	    var SUPPORT_TOUCH = 'ontouchstart' in window;
	    var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	    var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	    var INPUT_TYPE_TOUCH = 'touch';
	    var INPUT_TYPE_PEN = 'pen';
	    var INPUT_TYPE_MOUSE = 'mouse';
	    var INPUT_TYPE_KINECT = 'kinect';

	    var COMPUTE_INTERVAL = 25;

	    var INPUT_START = 1;
	    var INPUT_MOVE = 2;
	    var INPUT_END = 4;
	    var INPUT_CANCEL = 8;

	    var DIRECTION_NONE = 1;
	    var DIRECTION_LEFT = 2;
	    var DIRECTION_RIGHT = 4;
	    var DIRECTION_UP = 8;
	    var DIRECTION_DOWN = 16;

	    var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	    var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	    var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	    var PROPS_XY = ['x', 'y'];
	    var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	    /**
	     * create new input type manager
	     * @param {Manager} manager
	     * @param {Function} callback
	     * @returns {Input}
	     * @constructor
	     */
	    function Input(manager, callback) {
	        var self = this;
	        this.manager = manager;
	        this.callback = callback;
	        this.element = manager.element;
	        this.target = manager.options.inputTarget;

	        // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	        // so when disabled the input events are completely bypassed.
	        this.domHandler = function (ev) {
	            if (boolOrFn(manager.options.enable, [manager])) {
	                self.handler(ev);
	            }
	        };

	        this.init();
	    }

	    Input.prototype = {
	        /**
	         * should handle the inputEvent data and trigger the callback
	         * @virtual
	         */
	        handler: function handler() {},

	        /**
	         * bind the events
	         */
	        init: function init() {
	            this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	            this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	            this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	        },

	        /**
	         * unbind the events
	         */
	        destroy: function destroy() {
	            this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	            this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	            this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	        }
	    };

	    /**
	     * create new input type manager
	     * called by the Manager constructor
	     * @param {Hammer} manager
	     * @returns {Input}
	     */
	    function createInputInstance(manager) {
	        var Type;
	        var inputClass = manager.options.inputClass;

	        if (inputClass) {
	            Type = inputClass;
	        } else if (SUPPORT_POINTER_EVENTS) {
	            Type = PointerEventInput;
	        } else if (SUPPORT_ONLY_TOUCH) {
	            Type = TouchInput;
	        } else if (!SUPPORT_TOUCH) {
	            Type = MouseInput;
	        } else {
	            Type = TouchMouseInput;
	        }
	        return new Type(manager, inputHandler);
	    }

	    /**
	     * handle input events
	     * @param {Manager} manager
	     * @param {String} eventType
	     * @param {Object} input
	     */
	    function inputHandler(manager, eventType, input) {
	        var pointersLen = input.pointers.length;
	        var changedPointersLen = input.changedPointers.length;
	        var isFirst = eventType & INPUT_START && pointersLen - changedPointersLen === 0;
	        var isFinal = eventType & (INPUT_END | INPUT_CANCEL) && pointersLen - changedPointersLen === 0;

	        input.isFirst = !!isFirst;
	        input.isFinal = !!isFinal;

	        if (isFirst) {
	            manager.session = {};
	        }

	        // source event is the normalized value of the domEvents
	        // like 'touchstart, mouseup, pointerdown'
	        input.eventType = eventType;

	        // compute scale, rotation etc
	        computeInputData(manager, input);

	        // emit secret event
	        manager.emit('hammer.input', input);

	        manager.recognize(input);
	        manager.session.prevInput = input;
	    }

	    /**
	     * extend the data with some usable properties like scale, rotate, velocity etc
	     * @param {Object} manager
	     * @param {Object} input
	     */
	    function computeInputData(manager, input) {
	        var session = manager.session;
	        var pointers = input.pointers;
	        var pointersLength = pointers.length;

	        // store the first input to calculate the distance and direction
	        if (!session.firstInput) {
	            session.firstInput = simpleCloneInputData(input);
	        }

	        // to compute scale and rotation we need to store the multiple touches
	        if (pointersLength > 1 && !session.firstMultiple) {
	            session.firstMultiple = simpleCloneInputData(input);
	        } else if (pointersLength === 1) {
	            session.firstMultiple = false;
	        }

	        var firstInput = session.firstInput;
	        var firstMultiple = session.firstMultiple;
	        var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	        var center = input.center = getCenter(pointers);
	        input.timeStamp = now();
	        input.deltaTime = input.timeStamp - firstInput.timeStamp;

	        input.angle = getAngle(offsetCenter, center);
	        input.distance = getDistance(offsetCenter, center);

	        computeDeltaXY(session, input);
	        input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	        var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
	        input.overallVelocityX = overallVelocity.x;
	        input.overallVelocityY = overallVelocity.y;
	        input.overallVelocity = abs(overallVelocity.x) > abs(overallVelocity.y) ? overallVelocity.x : overallVelocity.y;

	        input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	        input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	        input.maxPointers = !session.prevInput ? input.pointers.length : input.pointers.length > session.prevInput.maxPointers ? input.pointers.length : session.prevInput.maxPointers;

	        computeIntervalInputData(session, input);

	        // find the correct target
	        var target = manager.element;
	        if (hasParent(input.srcEvent.target, target)) {
	            target = input.srcEvent.target;
	        }
	        input.target = target;
	    }

	    function computeDeltaXY(session, input) {
	        var center = input.center;
	        var offset = session.offsetDelta || {};
	        var prevDelta = session.prevDelta || {};
	        var prevInput = session.prevInput || {};

	        if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	            prevDelta = session.prevDelta = {
	                x: prevInput.deltaX || 0,
	                y: prevInput.deltaY || 0
	            };

	            offset = session.offsetDelta = {
	                x: center.x,
	                y: center.y
	            };
	        }

	        input.deltaX = prevDelta.x + (center.x - offset.x);
	        input.deltaY = prevDelta.y + (center.y - offset.y);
	    }

	    /**
	     * velocity is calculated every x ms
	     * @param {Object} session
	     * @param {Object} input
	     */
	    function computeIntervalInputData(session, input) {
	        var last = session.lastInterval || input,
	            deltaTime = input.timeStamp - last.timeStamp,
	            velocity,
	            velocityX,
	            velocityY,
	            direction;

	        if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	            var deltaX = input.deltaX - last.deltaX;
	            var deltaY = input.deltaY - last.deltaY;

	            var v = getVelocity(deltaTime, deltaX, deltaY);
	            velocityX = v.x;
	            velocityY = v.y;
	            velocity = abs(v.x) > abs(v.y) ? v.x : v.y;
	            direction = getDirection(deltaX, deltaY);

	            session.lastInterval = input;
	        } else {
	            // use latest velocity info if it doesn't overtake a minimum period
	            velocity = last.velocity;
	            velocityX = last.velocityX;
	            velocityY = last.velocityY;
	            direction = last.direction;
	        }

	        input.velocity = velocity;
	        input.velocityX = velocityX;
	        input.velocityY = velocityY;
	        input.direction = direction;
	    }

	    /**
	     * create a simple clone from the input used for storage of firstInput and firstMultiple
	     * @param {Object} input
	     * @returns {Object} clonedInputData
	     */
	    function simpleCloneInputData(input) {
	        // make a simple copy of the pointers because we will get a reference if we don't
	        // we only need clientXY for the calculations
	        var pointers = [];
	        var i = 0;
	        while (i < input.pointers.length) {
	            pointers[i] = {
	                clientX: round(input.pointers[i].clientX),
	                clientY: round(input.pointers[i].clientY)
	            };
	            i++;
	        }

	        return {
	            timeStamp: now(),
	            pointers: pointers,
	            center: getCenter(pointers),
	            deltaX: input.deltaX,
	            deltaY: input.deltaY
	        };
	    }

	    /**
	     * get the center of all the pointers
	     * @param {Array} pointers
	     * @return {Object} center contains `x` and `y` properties
	     */
	    function getCenter(pointers) {
	        var pointersLength = pointers.length;

	        // no need to loop when only one touch
	        if (pointersLength === 1) {
	            return {
	                x: round(pointers[0].clientX),
	                y: round(pointers[0].clientY)
	            };
	        }

	        var x = 0,
	            y = 0,
	            i = 0;
	        while (i < pointersLength) {
	            x += pointers[i].clientX;
	            y += pointers[i].clientY;
	            i++;
	        }

	        return {
	            x: round(x / pointersLength),
	            y: round(y / pointersLength)
	        };
	    }

	    /**
	     * calculate the velocity between two points. unit is in px per ms.
	     * @param {Number} deltaTime
	     * @param {Number} x
	     * @param {Number} y
	     * @return {Object} velocity `x` and `y`
	     */
	    function getVelocity(deltaTime, x, y) {
	        return {
	            x: x / deltaTime || 0,
	            y: y / deltaTime || 0
	        };
	    }

	    /**
	     * get the direction between two points
	     * @param {Number} x
	     * @param {Number} y
	     * @return {Number} direction
	     */
	    function getDirection(x, y) {
	        if (x === y) {
	            return DIRECTION_NONE;
	        }

	        if (abs(x) >= abs(y)) {
	            return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	        }
	        return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	    }

	    /**
	     * calculate the absolute distance between two points
	     * @param {Object} p1 {x, y}
	     * @param {Object} p2 {x, y}
	     * @param {Array} [props] containing x and y keys
	     * @return {Number} distance
	     */
	    function getDistance(p1, p2, props) {
	        if (!props) {
	            props = PROPS_XY;
	        }
	        var x = p2[props[0]] - p1[props[0]],
	            y = p2[props[1]] - p1[props[1]];

	        return Math.sqrt(x * x + y * y);
	    }

	    /**
	     * calculate the angle between two coordinates
	     * @param {Object} p1
	     * @param {Object} p2
	     * @param {Array} [props] containing x and y keys
	     * @return {Number} angle
	     */
	    function getAngle(p1, p2, props) {
	        if (!props) {
	            props = PROPS_XY;
	        }
	        var x = p2[props[0]] - p1[props[0]],
	            y = p2[props[1]] - p1[props[1]];
	        return Math.atan2(y, x) * 180 / Math.PI;
	    }

	    /**
	     * calculate the rotation degrees between two pointersets
	     * @param {Array} start array of pointers
	     * @param {Array} end array of pointers
	     * @return {Number} rotation
	     */
	    function getRotation(start, end) {
	        return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	    }

	    /**
	     * calculate the scale factor between two pointersets
	     * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	     * @param {Array} start array of pointers
	     * @param {Array} end array of pointers
	     * @return {Number} scale
	     */
	    function getScale(start, end) {
	        return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	    }

	    var MOUSE_INPUT_MAP = {
	        mousedown: INPUT_START,
	        mousemove: INPUT_MOVE,
	        mouseup: INPUT_END
	    };

	    var MOUSE_ELEMENT_EVENTS = 'mousedown';
	    var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	    /**
	     * Mouse events input
	     * @constructor
	     * @extends Input
	     */
	    function MouseInput() {
	        this.evEl = MOUSE_ELEMENT_EVENTS;
	        this.evWin = MOUSE_WINDOW_EVENTS;

	        this.pressed = false; // mousedown state

	        Input.apply(this, arguments);
	    }

	    inherit(MouseInput, Input, {
	        /**
	         * handle mouse events
	         * @param {Object} ev
	         */
	        handler: function MEhandler(ev) {
	            var eventType = MOUSE_INPUT_MAP[ev.type];

	            // on start we want to have the left mouse button down
	            if (eventType & INPUT_START && ev.button === 0) {
	                this.pressed = true;
	            }

	            if (eventType & INPUT_MOVE && ev.which !== 1) {
	                eventType = INPUT_END;
	            }

	            // mouse must be down
	            if (!this.pressed) {
	                return;
	            }

	            if (eventType & INPUT_END) {
	                this.pressed = false;
	            }

	            this.callback(this.manager, eventType, {
	                pointers: [ev],
	                changedPointers: [ev],
	                pointerType: INPUT_TYPE_MOUSE,
	                srcEvent: ev
	            });
	        }
	    });

	    var POINTER_INPUT_MAP = {
	        pointerdown: INPUT_START,
	        pointermove: INPUT_MOVE,
	        pointerup: INPUT_END,
	        pointercancel: INPUT_CANCEL,
	        pointerout: INPUT_CANCEL
	    };

	    // in IE10 the pointer types is defined as an enum
	    var IE10_POINTER_TYPE_ENUM = {
	        2: INPUT_TYPE_TOUCH,
	        3: INPUT_TYPE_PEN,
	        4: INPUT_TYPE_MOUSE,
	        5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	    };

	    var POINTER_ELEMENT_EVENTS = 'pointerdown';
	    var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	    // IE10 has prefixed support, and case-sensitive
	    if (window.MSPointerEvent && !window.PointerEvent) {
	        POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	        POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	    }

	    /**
	     * Pointer events input
	     * @constructor
	     * @extends Input
	     */
	    function PointerEventInput() {
	        this.evEl = POINTER_ELEMENT_EVENTS;
	        this.evWin = POINTER_WINDOW_EVENTS;

	        Input.apply(this, arguments);

	        this.store = this.manager.session.pointerEvents = [];
	    }

	    inherit(PointerEventInput, Input, {
	        /**
	         * handle mouse events
	         * @param {Object} ev
	         */
	        handler: function PEhandler(ev) {
	            var store = this.store;
	            var removePointer = false;

	            var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	            var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	            var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	            var isTouch = pointerType == INPUT_TYPE_TOUCH;

	            // get index of the event in the store
	            var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	            // start and mouse must be down
	            if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	                if (storeIndex < 0) {
	                    store.push(ev);
	                    storeIndex = store.length - 1;
	                }
	            } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	                removePointer = true;
	            }

	            // it not found, so the pointer hasn't been down (so it's probably a hover)
	            if (storeIndex < 0) {
	                return;
	            }

	            // update the event in the store
	            store[storeIndex] = ev;

	            this.callback(this.manager, eventType, {
	                pointers: store,
	                changedPointers: [ev],
	                pointerType: pointerType,
	                srcEvent: ev
	            });

	            if (removePointer) {
	                // remove from the store
	                store.splice(storeIndex, 1);
	            }
	        }
	    });

	    var SINGLE_TOUCH_INPUT_MAP = {
	        touchstart: INPUT_START,
	        touchmove: INPUT_MOVE,
	        touchend: INPUT_END,
	        touchcancel: INPUT_CANCEL
	    };

	    var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	    var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	    /**
	     * Touch events input
	     * @constructor
	     * @extends Input
	     */
	    function SingleTouchInput() {
	        this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	        this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	        this.started = false;

	        Input.apply(this, arguments);
	    }

	    inherit(SingleTouchInput, Input, {
	        handler: function TEhandler(ev) {
	            var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	            // should we handle the touch events?
	            if (type === INPUT_START) {
	                this.started = true;
	            }

	            if (!this.started) {
	                return;
	            }

	            var touches = normalizeSingleTouches.call(this, ev, type);

	            // when done, reset the started state
	            if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	                this.started = false;
	            }

	            this.callback(this.manager, type, {
	                pointers: touches[0],
	                changedPointers: touches[1],
	                pointerType: INPUT_TYPE_TOUCH,
	                srcEvent: ev
	            });
	        }
	    });

	    /**
	     * @this {TouchInput}
	     * @param {Object} ev
	     * @param {Number} type flag
	     * @returns {undefined|Array} [all, changed]
	     */
	    function normalizeSingleTouches(ev, type) {
	        var all = toArray(ev.touches);
	        var changed = toArray(ev.changedTouches);

	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            all = uniqueArray(all.concat(changed), 'identifier', true);
	        }

	        return [all, changed];
	    }

	    var TOUCH_INPUT_MAP = {
	        touchstart: INPUT_START,
	        touchmove: INPUT_MOVE,
	        touchend: INPUT_END,
	        touchcancel: INPUT_CANCEL
	    };

	    var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	    /**
	     * Multi-user touch events input
	     * @constructor
	     * @extends Input
	     */
	    function TouchInput() {
	        this.evTarget = TOUCH_TARGET_EVENTS;
	        this.targetIds = {};

	        Input.apply(this, arguments);
	    }

	    inherit(TouchInput, Input, {
	        handler: function MTEhandler(ev) {
	            var type = TOUCH_INPUT_MAP[ev.type];
	            var touches = getTouches.call(this, ev, type);
	            if (!touches) {
	                return;
	            }

	            this.callback(this.manager, type, {
	                pointers: touches[0],
	                changedPointers: touches[1],
	                pointerType: INPUT_TYPE_TOUCH,
	                srcEvent: ev
	            });
	        }
	    });

	    /**
	     * @this {TouchInput}
	     * @param {Object} ev
	     * @param {Number} type flag
	     * @returns {undefined|Array} [all, changed]
	     */
	    function getTouches(ev, type) {
	        var allTouches = toArray(ev.touches);
	        var targetIds = this.targetIds;

	        // when there is only one touch, the process can be simplified
	        if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	            targetIds[allTouches[0].identifier] = true;
	            return [allTouches, allTouches];
	        }

	        var i,
	            targetTouches,
	            changedTouches = toArray(ev.changedTouches),
	            changedTargetTouches = [],
	            target = this.target;

	        // get target touches from touches
	        targetTouches = allTouches.filter(function (touch) {
	            return hasParent(touch.target, target);
	        });

	        // collect touches
	        if (type === INPUT_START) {
	            i = 0;
	            while (i < targetTouches.length) {
	                targetIds[targetTouches[i].identifier] = true;
	                i++;
	            }
	        }

	        // filter changed touches to only contain touches that exist in the collected target ids
	        i = 0;
	        while (i < changedTouches.length) {
	            if (targetIds[changedTouches[i].identifier]) {
	                changedTargetTouches.push(changedTouches[i]);
	            }

	            // cleanup removed touches
	            if (type & (INPUT_END | INPUT_CANCEL)) {
	                delete targetIds[changedTouches[i].identifier];
	            }
	            i++;
	        }

	        if (!changedTargetTouches.length) {
	            return;
	        }

	        return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true), changedTargetTouches];
	    }

	    /**
	     * Combined touch and mouse input
	     *
	     * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	     * This because touch devices also emit mouse events while doing a touch.
	     *
	     * @constructor
	     * @extends Input
	     */

	    var DEDUP_TIMEOUT = 2500;
	    var DEDUP_DISTANCE = 25;

	    function TouchMouseInput() {
	        Input.apply(this, arguments);

	        var handler = bindFn(this.handler, this);
	        this.touch = new TouchInput(this.manager, handler);
	        this.mouse = new MouseInput(this.manager, handler);

	        this.primaryTouch = null;
	        this.lastTouches = [];
	    }

	    inherit(TouchMouseInput, Input, {
	        /**
	         * handle mouse and touch events
	         * @param {Hammer} manager
	         * @param {String} inputEvent
	         * @param {Object} inputData
	         */
	        handler: function TMEhandler(manager, inputEvent, inputData) {
	            var isTouch = inputData.pointerType == INPUT_TYPE_TOUCH,
	                isMouse = inputData.pointerType == INPUT_TYPE_MOUSE;

	            if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
	                return;
	            }

	            // when we're in a touch event, record touches to  de-dupe synthetic mouse event
	            if (isTouch) {
	                recordTouches.call(this, inputEvent, inputData);
	            } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
	                return;
	            }

	            this.callback(manager, inputEvent, inputData);
	        },

	        /**
	         * remove the event listeners
	         */
	        destroy: function destroy() {
	            this.touch.destroy();
	            this.mouse.destroy();
	        }
	    });

	    function recordTouches(eventType, eventData) {
	        if (eventType & INPUT_START) {
	            this.primaryTouch = eventData.changedPointers[0].identifier;
	            setLastTouch.call(this, eventData);
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            setLastTouch.call(this, eventData);
	        }
	    }

	    function setLastTouch(eventData) {
	        var touch = eventData.changedPointers[0];

	        if (touch.identifier === this.primaryTouch) {
	            var lastTouch = { x: touch.clientX, y: touch.clientY };
	            this.lastTouches.push(lastTouch);
	            var lts = this.lastTouches;
	            var removeLastTouch = function removeLastTouch() {
	                var i = lts.indexOf(lastTouch);
	                if (i > -1) {
	                    lts.splice(i, 1);
	                }
	            };
	            setTimeout(removeLastTouch, DEDUP_TIMEOUT);
	        }
	    }

	    function isSyntheticEvent(eventData) {
	        var x = eventData.srcEvent.clientX,
	            y = eventData.srcEvent.clientY;
	        for (var i = 0; i < this.lastTouches.length; i++) {
	            var t = this.lastTouches[i];
	            var dx = Math.abs(x - t.x),
	                dy = Math.abs(y - t.y);
	            if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
	                return true;
	            }
	        }
	        return false;
	    }

	    var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	    var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	    // magical touchAction value
	    var TOUCH_ACTION_COMPUTE = 'compute';
	    var TOUCH_ACTION_AUTO = 'auto';
	    var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	    var TOUCH_ACTION_NONE = 'none';
	    var TOUCH_ACTION_PAN_X = 'pan-x';
	    var TOUCH_ACTION_PAN_Y = 'pan-y';
	    var TOUCH_ACTION_MAP = getTouchActionProps();

	    /**
	     * Touch Action
	     * sets the touchAction property or uses the js alternative
	     * @param {Manager} manager
	     * @param {String} value
	     * @constructor
	     */
	    function TouchAction(manager, value) {
	        this.manager = manager;
	        this.set(value);
	    }

	    TouchAction.prototype = {
	        /**
	         * set the touchAction value on the element or enable the polyfill
	         * @param {String} value
	         */
	        set: function set(value) {
	            // find out the touch-action by the event handlers
	            if (value == TOUCH_ACTION_COMPUTE) {
	                value = this.compute();
	            }

	            if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
	                this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	            }
	            this.actions = value.toLowerCase().trim();
	        },

	        /**
	         * just re-set the touchAction value
	         */
	        update: function update() {
	            this.set(this.manager.options.touchAction);
	        },

	        /**
	         * compute the value for the touchAction property based on the recognizer's settings
	         * @returns {String} value
	         */
	        compute: function compute() {
	            var actions = [];
	            each(this.manager.recognizers, function (recognizer) {
	                if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                    actions = actions.concat(recognizer.getTouchAction());
	                }
	            });
	            return cleanTouchActions(actions.join(' '));
	        },

	        /**
	         * this method is called on each input cycle and provides the preventing of the browser behavior
	         * @param {Object} input
	         */
	        preventDefaults: function preventDefaults(input) {
	            var srcEvent = input.srcEvent;
	            var direction = input.offsetDirection;

	            // if the touch action did prevented once this session
	            if (this.manager.session.prevented) {
	                srcEvent.preventDefault();
	                return;
	            }

	            var actions = this.actions;
	            var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
	            var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
	            var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

	            if (hasNone) {
	                //do not prevent defaults if this is a tap gesture

	                var isTapPointer = input.pointers.length === 1;
	                var isTapMovement = input.distance < 2;
	                var isTapTouchTime = input.deltaTime < 250;

	                if (isTapPointer && isTapMovement && isTapTouchTime) {
	                    return;
	                }
	            }

	            if (hasPanX && hasPanY) {
	                // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
	                return;
	            }

	            if (hasNone || hasPanY && direction & DIRECTION_HORIZONTAL || hasPanX && direction & DIRECTION_VERTICAL) {
	                return this.preventSrc(srcEvent);
	            }
	        },

	        /**
	         * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	         * @param {Object} srcEvent
	         */
	        preventSrc: function preventSrc(srcEvent) {
	            this.manager.session.prevented = true;
	            srcEvent.preventDefault();
	        }
	    };

	    /**
	     * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	     * @param {String} actions
	     * @returns {*}
	     */
	    function cleanTouchActions(actions) {
	        // none
	        if (inStr(actions, TOUCH_ACTION_NONE)) {
	            return TOUCH_ACTION_NONE;
	        }

	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	        // if both pan-x and pan-y are set (different recognizers
	        // for different directions, e.g. horizontal pan but vertical swipe?)
	        // we need none (as otherwise with pan-x pan-y combined none of these
	        // recognizers will work, since the browser would handle all panning
	        if (hasPanX && hasPanY) {
	            return TOUCH_ACTION_NONE;
	        }

	        // pan-x OR pan-y
	        if (hasPanX || hasPanY) {
	            return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	        }

	        // manipulation
	        if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	            return TOUCH_ACTION_MANIPULATION;
	        }

	        return TOUCH_ACTION_AUTO;
	    }

	    function getTouchActionProps() {
	        if (!NATIVE_TOUCH_ACTION) {
	            return false;
	        }
	        var touchMap = {};
	        var cssSupports = window.CSS && window.CSS.supports;
	        ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function (val) {

	            // If css.supports is not supported but there is native touch-action assume it supports
	            // all values. This is the case for IE 10 and 11.
	            touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
	        });
	        return touchMap;
	    }

	    /**
	     * Recognizer flow explained; *
	     * All recognizers have the initial state of POSSIBLE when a input session starts.
	     * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	     * Example session for mouse-input: mousedown -> mousemove -> mouseup
	     *
	     * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	     * which determines with state it should be.
	     *
	     * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	     * POSSIBLE to give it another change on the next cycle.
	     *
	     *               Possible
	     *                  |
	     *            +-----+---------------+
	     *            |                     |
	     *      +-----+-----+               |
	     *      |           |               |
	     *   Failed      Cancelled          |
	     *                          +-------+------+
	     *                          |              |
	     *                      Recognized       Began
	     *                                         |
	     *                                      Changed
	     *                                         |
	     *                                  Ended/Recognized
	     */
	    var STATE_POSSIBLE = 1;
	    var STATE_BEGAN = 2;
	    var STATE_CHANGED = 4;
	    var STATE_ENDED = 8;
	    var STATE_RECOGNIZED = STATE_ENDED;
	    var STATE_CANCELLED = 16;
	    var STATE_FAILED = 32;

	    /**
	     * Recognizer
	     * Every recognizer needs to extend from this class.
	     * @constructor
	     * @param {Object} options
	     */
	    function Recognizer(options) {
	        this.options = assign({}, this.defaults, options || {});

	        this.id = uniqueId();

	        this.manager = null;

	        // default is enable true
	        this.options.enable = ifUndefined(this.options.enable, true);

	        this.state = STATE_POSSIBLE;

	        this.simultaneous = {};
	        this.requireFail = [];
	    }

	    Recognizer.prototype = {
	        /**
	         * @virtual
	         * @type {Object}
	         */
	        defaults: {},

	        /**
	         * set options
	         * @param {Object} options
	         * @return {Recognizer}
	         */
	        set: function set(options) {
	            assign(this.options, options);

	            // also update the touchAction, in case something changed about the directions/enabled state
	            this.manager && this.manager.touchAction.update();
	            return this;
	        },

	        /**
	         * recognize simultaneous with an other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        recognizeWith: function recognizeWith(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	                return this;
	            }

	            var simultaneous = this.simultaneous;
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            if (!simultaneous[otherRecognizer.id]) {
	                simultaneous[otherRecognizer.id] = otherRecognizer;
	                otherRecognizer.recognizeWith(this);
	            }
	            return this;
	        },

	        /**
	         * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        dropRecognizeWith: function dropRecognizeWith(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	                return this;
	            }

	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            delete this.simultaneous[otherRecognizer.id];
	            return this;
	        },

	        /**
	         * recognizer can only run when an other is failing
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        requireFailure: function requireFailure(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	                return this;
	            }

	            var requireFail = this.requireFail;
	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            if (inArray(requireFail, otherRecognizer) === -1) {
	                requireFail.push(otherRecognizer);
	                otherRecognizer.requireFailure(this);
	            }
	            return this;
	        },

	        /**
	         * drop the requireFailure link. it does not remove the link on the other recognizer.
	         * @param {Recognizer} otherRecognizer
	         * @returns {Recognizer} this
	         */
	        dropRequireFailure: function dropRequireFailure(otherRecognizer) {
	            if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	                return this;
	            }

	            otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	            var index = inArray(this.requireFail, otherRecognizer);
	            if (index > -1) {
	                this.requireFail.splice(index, 1);
	            }
	            return this;
	        },

	        /**
	         * has require failures boolean
	         * @returns {boolean}
	         */
	        hasRequireFailures: function hasRequireFailures() {
	            return this.requireFail.length > 0;
	        },

	        /**
	         * if the recognizer can recognize simultaneous with an other recognizer
	         * @param {Recognizer} otherRecognizer
	         * @returns {Boolean}
	         */
	        canRecognizeWith: function canRecognizeWith(otherRecognizer) {
	            return !!this.simultaneous[otherRecognizer.id];
	        },

	        /**
	         * You should use `tryEmit` instead of `emit` directly to check
	         * that all the needed recognizers has failed before emitting.
	         * @param {Object} input
	         */
	        emit: function emit(input) {
	            var self = this;
	            var state = this.state;

	            function emit(event) {
	                self.manager.emit(event, input);
	            }

	            // 'panstart' and 'panmove'
	            if (state < STATE_ENDED) {
	                emit(self.options.event + stateStr(state));
	            }

	            emit(self.options.event); // simple 'eventName' events

	            if (input.additionalEvent) {
	                // additional event(panleft, panright, pinchin, pinchout...)
	                emit(input.additionalEvent);
	            }

	            // panend and pancancel
	            if (state >= STATE_ENDED) {
	                emit(self.options.event + stateStr(state));
	            }
	        },

	        /**
	         * Check that all the require failure recognizers has failed,
	         * if true, it emits a gesture event,
	         * otherwise, setup the state to FAILED.
	         * @param {Object} input
	         */
	        tryEmit: function tryEmit(input) {
	            if (this.canEmit()) {
	                return this.emit(input);
	            }
	            // it's failing anyway
	            this.state = STATE_FAILED;
	        },

	        /**
	         * can we emit?
	         * @returns {boolean}
	         */
	        canEmit: function canEmit() {
	            var i = 0;
	            while (i < this.requireFail.length) {
	                if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                    return false;
	                }
	                i++;
	            }
	            return true;
	        },

	        /**
	         * update the recognizer
	         * @param {Object} inputData
	         */
	        recognize: function recognize(inputData) {
	            // make a new copy of the inputData
	            // so we can change the inputData without messing up the other recognizers
	            var inputDataClone = assign({}, inputData);

	            // is is enabled and allow recognizing?
	            if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	                this.reset();
	                this.state = STATE_FAILED;
	                return;
	            }

	            // reset when we've reached the end
	            if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	                this.state = STATE_POSSIBLE;
	            }

	            this.state = this.process(inputDataClone);

	            // the recognizer has recognized a gesture
	            // so trigger an event
	            if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	                this.tryEmit(inputDataClone);
	            }
	        },

	        /**
	         * return the state of the recognizer
	         * the actual recognizing happens in this method
	         * @virtual
	         * @param {Object} inputData
	         * @returns {Const} STATE
	         */
	        process: function process(inputData) {}, // jshint ignore:line

	        /**
	         * return the preferred touch-action
	         * @virtual
	         * @returns {Array}
	         */
	        getTouchAction: function getTouchAction() {},

	        /**
	         * called when the gesture isn't allowed to recognize
	         * like when another is being recognized or it is disabled
	         * @virtual
	         */
	        reset: function reset() {}
	    };

	    /**
	     * get a usable string, used as event postfix
	     * @param {Const} state
	     * @returns {String} state
	     */
	    function stateStr(state) {
	        if (state & STATE_CANCELLED) {
	            return 'cancel';
	        } else if (state & STATE_ENDED) {
	            return 'end';
	        } else if (state & STATE_CHANGED) {
	            return 'move';
	        } else if (state & STATE_BEGAN) {
	            return 'start';
	        }
	        return '';
	    }

	    /**
	     * direction cons to string
	     * @param {Const} direction
	     * @returns {String}
	     */
	    function directionStr(direction) {
	        if (direction == DIRECTION_DOWN) {
	            return 'down';
	        } else if (direction == DIRECTION_UP) {
	            return 'up';
	        } else if (direction == DIRECTION_LEFT) {
	            return 'left';
	        } else if (direction == DIRECTION_RIGHT) {
	            return 'right';
	        }
	        return '';
	    }

	    /**
	     * get a recognizer by name if it is bound to a manager
	     * @param {Recognizer|String} otherRecognizer
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer}
	     */
	    function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	        var manager = recognizer.manager;
	        if (manager) {
	            return manager.get(otherRecognizer);
	        }
	        return otherRecognizer;
	    }

	    /**
	     * This recognizer is just used as a base for the simple attribute recognizers.
	     * @constructor
	     * @extends Recognizer
	     */
	    function AttrRecognizer() {
	        Recognizer.apply(this, arguments);
	    }

	    inherit(AttrRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof AttrRecognizer
	         */
	        defaults: {
	            /**
	             * @type {Number}
	             * @default 1
	             */
	            pointers: 1
	        },

	        /**
	         * Used to check if it the recognizer receives valid input, like input.distance > 10.
	         * @memberof AttrRecognizer
	         * @param {Object} input
	         * @returns {Boolean} recognized
	         */
	        attrTest: function attrTest(input) {
	            var optionPointers = this.options.pointers;
	            return optionPointers === 0 || input.pointers.length === optionPointers;
	        },

	        /**
	         * Process the input and return the state for the recognizer
	         * @memberof AttrRecognizer
	         * @param {Object} input
	         * @returns {*} State
	         */
	        process: function process(input) {
	            var state = this.state;
	            var eventType = input.eventType;

	            var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	            var isValid = this.attrTest(input);

	            // on cancel input and we've recognized before, return STATE_CANCELLED
	            if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	                return state | STATE_CANCELLED;
	            } else if (isRecognized || isValid) {
	                if (eventType & INPUT_END) {
	                    return state | STATE_ENDED;
	                } else if (!(state & STATE_BEGAN)) {
	                    return STATE_BEGAN;
	                }
	                return state | STATE_CHANGED;
	            }
	            return STATE_FAILED;
	        }
	    });

	    /**
	     * Pan
	     * Recognized when the pointer is down and moved in the allowed direction.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function PanRecognizer() {
	        AttrRecognizer.apply(this, arguments);

	        this.pX = null;
	        this.pY = null;
	    }

	    inherit(PanRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof PanRecognizer
	         */
	        defaults: {
	            event: 'pan',
	            threshold: 10,
	            pointers: 1,
	            direction: DIRECTION_ALL
	        },

	        getTouchAction: function getTouchAction() {
	            var direction = this.options.direction;
	            var actions = [];
	            if (direction & DIRECTION_HORIZONTAL) {
	                actions.push(TOUCH_ACTION_PAN_Y);
	            }
	            if (direction & DIRECTION_VERTICAL) {
	                actions.push(TOUCH_ACTION_PAN_X);
	            }
	            return actions;
	        },

	        directionTest: function directionTest(input) {
	            var options = this.options;
	            var hasMoved = true;
	            var distance = input.distance;
	            var direction = input.direction;
	            var x = input.deltaX;
	            var y = input.deltaY;

	            // lock to axis?
	            if (!(direction & options.direction)) {
	                if (options.direction & DIRECTION_HORIZONTAL) {
	                    direction = x === 0 ? DIRECTION_NONE : x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                    hasMoved = x != this.pX;
	                    distance = Math.abs(input.deltaX);
	                } else {
	                    direction = y === 0 ? DIRECTION_NONE : y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	                    hasMoved = y != this.pY;
	                    distance = Math.abs(input.deltaY);
	                }
	            }
	            input.direction = direction;
	            return hasMoved && distance > options.threshold && direction & options.direction;
	        },

	        attrTest: function attrTest(input) {
	            return AttrRecognizer.prototype.attrTest.call(this, input) && (this.state & STATE_BEGAN || !(this.state & STATE_BEGAN) && this.directionTest(input));
	        },

	        emit: function emit(input) {

	            this.pX = input.deltaX;
	            this.pY = input.deltaY;

	            var direction = directionStr(input.direction);

	            if (direction) {
	                input.additionalEvent = this.options.event + direction;
	            }
	            this._super.emit.call(this, input);
	        }
	    });

	    /**
	     * Pinch
	     * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function PinchRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }

	    inherit(PinchRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof PinchRecognizer
	         */
	        defaults: {
	            event: 'pinch',
	            threshold: 0,
	            pointers: 2
	        },

	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_NONE];
	        },

	        attrTest: function attrTest(input) {
	            return this._super.attrTest.call(this, input) && (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	        },

	        emit: function emit(input) {
	            if (input.scale !== 1) {
	                var inOut = input.scale < 1 ? 'in' : 'out';
	                input.additionalEvent = this.options.event + inOut;
	            }
	            this._super.emit.call(this, input);
	        }
	    });

	    /**
	     * Press
	     * Recognized when the pointer is down for x ms without any movement.
	     * @constructor
	     * @extends Recognizer
	     */
	    function PressRecognizer() {
	        Recognizer.apply(this, arguments);

	        this._timer = null;
	        this._input = null;
	    }

	    inherit(PressRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof PressRecognizer
	         */
	        defaults: {
	            event: 'press',
	            pointers: 1,
	            time: 251, // minimal time of the pointer to be pressed
	            threshold: 9 // a minimal movement is ok, but keep it low
	        },

	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_AUTO];
	        },

	        process: function process(input) {
	            var options = this.options;
	            var validPointers = input.pointers.length === options.pointers;
	            var validMovement = input.distance < options.threshold;
	            var validTime = input.deltaTime > options.time;

	            this._input = input;

	            // we only allow little movement
	            // and we've reached an end event, so a tap is possible
	            if (!validMovement || !validPointers || input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime) {
	                this.reset();
	            } else if (input.eventType & INPUT_START) {
	                this.reset();
	                this._timer = setTimeoutContext(function () {
	                    this.state = STATE_RECOGNIZED;
	                    this.tryEmit();
	                }, options.time, this);
	            } else if (input.eventType & INPUT_END) {
	                return STATE_RECOGNIZED;
	            }
	            return STATE_FAILED;
	        },

	        reset: function reset() {
	            clearTimeout(this._timer);
	        },

	        emit: function emit(input) {
	            if (this.state !== STATE_RECOGNIZED) {
	                return;
	            }

	            if (input && input.eventType & INPUT_END) {
	                this.manager.emit(this.options.event + 'up', input);
	            } else {
	                this._input.timeStamp = now();
	                this.manager.emit(this.options.event, this._input);
	            }
	        }
	    });

	    /**
	     * Rotate
	     * Recognized when two or more pointer are moving in a circular motion.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function RotateRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }

	    inherit(RotateRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof RotateRecognizer
	         */
	        defaults: {
	            event: 'rotate',
	            threshold: 0,
	            pointers: 2
	        },

	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_NONE];
	        },

	        attrTest: function attrTest(input) {
	            return this._super.attrTest.call(this, input) && (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	        }
	    });

	    /**
	     * Swipe
	     * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	     * @constructor
	     * @extends AttrRecognizer
	     */
	    function SwipeRecognizer() {
	        AttrRecognizer.apply(this, arguments);
	    }

	    inherit(SwipeRecognizer, AttrRecognizer, {
	        /**
	         * @namespace
	         * @memberof SwipeRecognizer
	         */
	        defaults: {
	            event: 'swipe',
	            threshold: 10,
	            velocity: 0.3,
	            direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	            pointers: 1
	        },

	        getTouchAction: function getTouchAction() {
	            return PanRecognizer.prototype.getTouchAction.call(this);
	        },

	        attrTest: function attrTest(input) {
	            var direction = this.options.direction;
	            var velocity;

	            if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	                velocity = input.overallVelocity;
	            } else if (direction & DIRECTION_HORIZONTAL) {
	                velocity = input.overallVelocityX;
	            } else if (direction & DIRECTION_VERTICAL) {
	                velocity = input.overallVelocityY;
	            }

	            return this._super.attrTest.call(this, input) && direction & input.offsetDirection && input.distance > this.options.threshold && input.maxPointers == this.options.pointers && abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	        },

	        emit: function emit(input) {
	            var direction = directionStr(input.offsetDirection);
	            if (direction) {
	                this.manager.emit(this.options.event + direction, input);
	            }

	            this.manager.emit(this.options.event, input);
	        }
	    });

	    /**
	     * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	     * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	     * a single tap.
	     *
	     * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	     * multi-taps being recognized.
	     * @constructor
	     * @extends Recognizer
	     */
	    function TapRecognizer() {
	        Recognizer.apply(this, arguments);

	        // previous time and center,
	        // used for tap counting
	        this.pTime = false;
	        this.pCenter = false;

	        this._timer = null;
	        this._input = null;
	        this.count = 0;
	    }

	    inherit(TapRecognizer, Recognizer, {
	        /**
	         * @namespace
	         * @memberof PinchRecognizer
	         */
	        defaults: {
	            event: 'tap',
	            pointers: 1,
	            taps: 1,
	            interval: 300, // max time between the multi-tap taps
	            time: 250, // max time of the pointer to be down (like finger on the screen)
	            threshold: 9, // a minimal movement is ok, but keep it low
	            posThreshold: 10 // a multi-tap can be a bit off the initial position
	        },

	        getTouchAction: function getTouchAction() {
	            return [TOUCH_ACTION_MANIPULATION];
	        },

	        process: function process(input) {
	            var options = this.options;

	            var validPointers = input.pointers.length === options.pointers;
	            var validMovement = input.distance < options.threshold;
	            var validTouchTime = input.deltaTime < options.time;

	            this.reset();

	            if (input.eventType & INPUT_START && this.count === 0) {
	                return this.failTimeout();
	            }

	            // we only allow little movement
	            // and we've reached an end event, so a tap is possible
	            if (validMovement && validTouchTime && validPointers) {
	                if (input.eventType != INPUT_END) {
	                    return this.failTimeout();
	                }

	                var validInterval = this.pTime ? input.timeStamp - this.pTime < options.interval : true;
	                var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	                this.pTime = input.timeStamp;
	                this.pCenter = input.center;

	                if (!validMultiTap || !validInterval) {
	                    this.count = 1;
	                } else {
	                    this.count += 1;
	                }

	                this._input = input;

	                // if tap count matches we have recognized it,
	                // else it has began recognizing...
	                var tapCount = this.count % options.taps;
	                if (tapCount === 0) {
	                    // no failing requirements, immediately trigger the tap event
	                    // or wait as long as the multitap interval to trigger
	                    if (!this.hasRequireFailures()) {
	                        return STATE_RECOGNIZED;
	                    } else {
	                        this._timer = setTimeoutContext(function () {
	                            this.state = STATE_RECOGNIZED;
	                            this.tryEmit();
	                        }, options.interval, this);
	                        return STATE_BEGAN;
	                    }
	                }
	            }
	            return STATE_FAILED;
	        },

	        failTimeout: function failTimeout() {
	            this._timer = setTimeoutContext(function () {
	                this.state = STATE_FAILED;
	            }, this.options.interval, this);
	            return STATE_FAILED;
	        },

	        reset: function reset() {
	            clearTimeout(this._timer);
	        },

	        emit: function emit() {
	            if (this.state == STATE_RECOGNIZED) {
	                this._input.tapCount = this.count;
	                this.manager.emit(this.options.event, this._input);
	            }
	        }
	    });

	    /**
	     * Simple way to create a manager with a default set of recognizers.
	     * @param {HTMLElement} element
	     * @param {Object} [options]
	     * @constructor
	     */
	    function Hammer(element, options) {
	        options = options || {};
	        options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	        return new Manager(element, options);
	    }

	    /**
	     * @const {string}
	     */
	    Hammer.VERSION = '2.0.7';

	    /**
	     * default settings
	     * @namespace
	     */
	    Hammer.defaults = {
	        /**
	         * set if DOM events are being triggered.
	         * But this is slower and unused by simple implementations, so disabled by default.
	         * @type {Boolean}
	         * @default false
	         */
	        domEvents: false,

	        /**
	         * The value for the touchAction property/fallback.
	         * When set to `compute` it will magically set the correct value based on the added recognizers.
	         * @type {String}
	         * @default compute
	         */
	        touchAction: TOUCH_ACTION_COMPUTE,

	        /**
	         * @type {Boolean}
	         * @default true
	         */
	        enable: true,

	        /**
	         * EXPERIMENTAL FEATURE -- can be removed/changed
	         * Change the parent input target element.
	         * If Null, then it is being set the to main element.
	         * @type {Null|EventTarget}
	         * @default null
	         */
	        inputTarget: null,

	        /**
	         * force an input class
	         * @type {Null|Function}
	         * @default null
	         */
	        inputClass: null,

	        /**
	         * Default recognizer setup when calling `Hammer()`
	         * When creating a new Manager these will be skipped.
	         * @type {Array}
	         */
	        preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, { enable: false }], [PinchRecognizer, { enable: false }, ['rotate']], [SwipeRecognizer, { direction: DIRECTION_HORIZONTAL }], [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']], [TapRecognizer], [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']], [PressRecognizer]],

	        /**
	         * Some CSS properties can be used to improve the working of Hammer.
	         * Add them to this method and they will be set when creating a new Manager.
	         * @namespace
	         */
	        cssProps: {
	            /**
	             * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	             * @type {String}
	             * @default 'none'
	             */
	            userSelect: 'none',

	            /**
	             * Disable the Windows Phone grippers when pressing an element.
	             * @type {String}
	             * @default 'none'
	             */
	            touchSelect: 'none',

	            /**
	             * Disables the default callout shown when you touch and hold a touch target.
	             * On iOS, when you touch and hold a touch target such as a link, Safari displays
	             * a callout containing information about the link. This property allows you to disable that callout.
	             * @type {String}
	             * @default 'none'
	             */
	            touchCallout: 'none',

	            /**
	             * Specifies whether zooming is enabled. Used by IE10>
	             * @type {String}
	             * @default 'none'
	             */
	            contentZooming: 'none',

	            /**
	             * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	             * @type {String}
	             * @default 'none'
	             */
	            userDrag: 'none',

	            /**
	             * Overrides the highlight color shown when the user taps a link or a JavaScript
	             * clickable element in iOS. This property obeys the alpha value, if specified.
	             * @type {String}
	             * @default 'rgba(0,0,0,0)'
	             */
	            tapHighlightColor: 'rgba(0,0,0,0)'
	        }
	    };

	    var STOP = 1;
	    var FORCED_STOP = 2;

	    /**
	     * Manager
	     * @param {HTMLElement} element
	     * @param {Object} [options]
	     * @constructor
	     */
	    function Manager(element, options) {
	        this.options = assign({}, Hammer.defaults, options || {});

	        this.options.inputTarget = this.options.inputTarget || element;

	        this.handlers = {};
	        this.session = {};
	        this.recognizers = [];
	        this.oldCssProps = {};

	        this.element = element;
	        this.input = createInputInstance(this);
	        this.touchAction = new TouchAction(this, this.options.touchAction);

	        toggleCssProps(this, true);

	        each(this.options.recognizers, function (item) {
	            var recognizer = this.add(new item[0](item[1]));
	            item[2] && recognizer.recognizeWith(item[2]);
	            item[3] && recognizer.requireFailure(item[3]);
	        }, this);
	    }

	    Manager.prototype = {
	        /**
	         * set options
	         * @param {Object} options
	         * @returns {Manager}
	         */
	        set: function set(options) {
	            assign(this.options, options);

	            // Options that need a little more setup
	            if (options.touchAction) {
	                this.touchAction.update();
	            }
	            if (options.inputTarget) {
	                // Clean up existing event listeners and reinitialize
	                this.input.destroy();
	                this.input.target = options.inputTarget;
	                this.input.init();
	            }
	            return this;
	        },

	        /**
	         * stop recognizing for this session.
	         * This session will be discarded, when a new [input]start event is fired.
	         * When forced, the recognizer cycle is stopped immediately.
	         * @param {Boolean} [force]
	         */
	        stop: function stop(force) {
	            this.session.stopped = force ? FORCED_STOP : STOP;
	        },

	        /**
	         * run the recognizers!
	         * called by the inputHandler function on every movement of the pointers (touches)
	         * it walks through all the recognizers and tries to detect the gesture that is being made
	         * @param {Object} inputData
	         */
	        recognize: function recognize(inputData) {
	            var session = this.session;
	            if (session.stopped) {
	                return;
	            }

	            // run the touch-action polyfill
	            this.touchAction.preventDefaults(inputData);

	            var recognizer;
	            var recognizers = this.recognizers;

	            // this holds the recognizer that is being recognized.
	            // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	            // if no recognizer is detecting a thing, it is set to `null`
	            var curRecognizer = session.curRecognizer;

	            // reset when the last recognizer is recognized
	            // or when we're in a new session
	            if (!curRecognizer || curRecognizer && curRecognizer.state & STATE_RECOGNIZED) {
	                curRecognizer = session.curRecognizer = null;
	            }

	            var i = 0;
	            while (i < recognizers.length) {
	                recognizer = recognizers[i];

	                // find out if we are allowed try to recognize the input for this one.
	                // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	                // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	                //      that is being recognized.
	                // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	                //      this can be setup with the `recognizeWith()` method on the recognizer.
	                if (session.stopped !== FORCED_STOP && ( // 1
	                !curRecognizer || recognizer == curRecognizer || // 2
	                recognizer.canRecognizeWith(curRecognizer))) {
	                    // 3
	                    recognizer.recognize(inputData);
	                } else {
	                    recognizer.reset();
	                }

	                // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	                // current active recognizer. but only if we don't already have an active recognizer
	                if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                    curRecognizer = session.curRecognizer = recognizer;
	                }
	                i++;
	            }
	        },

	        /**
	         * get a recognizer by its event name.
	         * @param {Recognizer|String} recognizer
	         * @returns {Recognizer|Null}
	         */
	        get: function get(recognizer) {
	            if (recognizer instanceof Recognizer) {
	                return recognizer;
	            }

	            var recognizers = this.recognizers;
	            for (var i = 0; i < recognizers.length; i++) {
	                if (recognizers[i].options.event == recognizer) {
	                    return recognizers[i];
	                }
	            }
	            return null;
	        },

	        /**
	         * add a recognizer to the manager
	         * existing recognizers with the same event name will be removed
	         * @param {Recognizer} recognizer
	         * @returns {Recognizer|Manager}
	         */
	        add: function add(recognizer) {
	            if (invokeArrayArg(recognizer, 'add', this)) {
	                return this;
	            }

	            // remove existing
	            var existing = this.get(recognizer.options.event);
	            if (existing) {
	                this.remove(existing);
	            }

	            this.recognizers.push(recognizer);
	            recognizer.manager = this;

	            this.touchAction.update();
	            return recognizer;
	        },

	        /**
	         * remove a recognizer by name or instance
	         * @param {Recognizer|String} recognizer
	         * @returns {Manager}
	         */
	        remove: function remove(recognizer) {
	            if (invokeArrayArg(recognizer, 'remove', this)) {
	                return this;
	            }

	            recognizer = this.get(recognizer);

	            // let's make sure this recognizer exists
	            if (recognizer) {
	                var recognizers = this.recognizers;
	                var index = inArray(recognizers, recognizer);

	                if (index !== -1) {
	                    recognizers.splice(index, 1);
	                    this.touchAction.update();
	                }
	            }

	            return this;
	        },

	        /**
	         * bind event
	         * @param {String} events
	         * @param {Function} handler
	         * @returns {EventEmitter} this
	         */
	        on: function on(events, handler) {
	            if (events === undefined) {
	                return;
	            }
	            if (handler === undefined) {
	                return;
	            }

	            var handlers = this.handlers;
	            each(splitStr(events), function (event) {
	                handlers[event] = handlers[event] || [];
	                handlers[event].push(handler);
	            });
	            return this;
	        },

	        /**
	         * unbind event, leave emit blank to remove all handlers
	         * @param {String} events
	         * @param {Function} [handler]
	         * @returns {EventEmitter} this
	         */
	        off: function off(events, handler) {
	            if (events === undefined) {
	                return;
	            }

	            var handlers = this.handlers;
	            each(splitStr(events), function (event) {
	                if (!handler) {
	                    delete handlers[event];
	                } else {
	                    handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
	                }
	            });
	            return this;
	        },

	        /**
	         * emit event to the listeners
	         * @param {String} event
	         * @param {Object} data
	         */
	        emit: function emit(event, data) {
	            // we also want to trigger dom events
	            if (this.options.domEvents) {
	                triggerDomEvent(event, data);
	            }

	            // no handlers, so skip it all
	            var handlers = this.handlers[event] && this.handlers[event].slice();
	            if (!handlers || !handlers.length) {
	                return;
	            }

	            data.type = event;
	            data.preventDefault = function () {
	                data.srcEvent.preventDefault();
	            };

	            var i = 0;
	            while (i < handlers.length) {
	                handlers[i](data);
	                i++;
	            }
	        },

	        /**
	         * destroy the manager and unbinds all events
	         * it doesn't unbind dom events, that is the user own responsibility
	         */
	        destroy: function destroy() {
	            this.element && toggleCssProps(this, false);

	            this.handlers = {};
	            this.session = {};
	            this.input.destroy();
	            this.element = null;
	        }
	    };

	    /**
	     * add/remove the css properties as defined in manager.options.cssProps
	     * @param {Manager} manager
	     * @param {Boolean} add
	     */
	    function toggleCssProps(manager, add) {
	        var element = manager.element;
	        if (!element.style) {
	            return;
	        }
	        var prop;
	        each(manager.options.cssProps, function (value, name) {
	            prop = prefixed(element.style, name);
	            if (add) {
	                manager.oldCssProps[prop] = element.style[prop];
	                element.style[prop] = value;
	            } else {
	                element.style[prop] = manager.oldCssProps[prop] || '';
	            }
	        });
	        if (!add) {
	            manager.oldCssProps = {};
	        }
	    }

	    /**
	     * trigger dom event
	     * @param {String} event
	     * @param {Object} data
	     */
	    function triggerDomEvent(event, data) {
	        var gestureEvent = document.createEvent('Event');
	        gestureEvent.initEvent(event, true, true);
	        gestureEvent.gesture = data;
	        data.target.dispatchEvent(gestureEvent);
	    }

	    assign(Hammer, {
	        INPUT_START: INPUT_START,
	        INPUT_MOVE: INPUT_MOVE,
	        INPUT_END: INPUT_END,
	        INPUT_CANCEL: INPUT_CANCEL,

	        STATE_POSSIBLE: STATE_POSSIBLE,
	        STATE_BEGAN: STATE_BEGAN,
	        STATE_CHANGED: STATE_CHANGED,
	        STATE_ENDED: STATE_ENDED,
	        STATE_RECOGNIZED: STATE_RECOGNIZED,
	        STATE_CANCELLED: STATE_CANCELLED,
	        STATE_FAILED: STATE_FAILED,

	        DIRECTION_NONE: DIRECTION_NONE,
	        DIRECTION_LEFT: DIRECTION_LEFT,
	        DIRECTION_RIGHT: DIRECTION_RIGHT,
	        DIRECTION_UP: DIRECTION_UP,
	        DIRECTION_DOWN: DIRECTION_DOWN,
	        DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	        DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	        DIRECTION_ALL: DIRECTION_ALL,

	        Manager: Manager,
	        Input: Input,
	        TouchAction: TouchAction,

	        TouchInput: TouchInput,
	        MouseInput: MouseInput,
	        PointerEventInput: PointerEventInput,
	        TouchMouseInput: TouchMouseInput,
	        SingleTouchInput: SingleTouchInput,

	        Recognizer: Recognizer,
	        AttrRecognizer: AttrRecognizer,
	        Tap: TapRecognizer,
	        Pan: PanRecognizer,
	        Swipe: SwipeRecognizer,
	        Pinch: PinchRecognizer,
	        Rotate: RotateRecognizer,
	        Press: PressRecognizer,

	        on: addEventListeners,
	        off: removeEventListeners,
	        each: each,
	        merge: merge,
	        extend: extend,
	        assign: assign,
	        inherit: inherit,
	        bindFn: bindFn,
	        prefixed: prefixed
	    });

	    // this prevents errors when Hammer is loaded in the presence of an AMD
	    //  style loader but by script tag, not by the loader.
	    var freeGlobal = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : {}; // jshint ignore:line
	    freeGlobal.Hammer = Hammer;

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return Hammer;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module != 'undefined' && module.exports) {
	        module.exports = Hammer;
	    } else {
	        window[exportName] = Hammer;
	    }
	})(window, document, 'Hammer');

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _hook = __webpack_require__(22);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(_hook2.default);
	}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _setNativeProps = __webpack_require__(25);

	var _setNativeProps2 = _interopRequireDefault(_setNativeProps);

	var _styleUnit = __webpack_require__(30);

	var _flexbox = __webpack_require__(69);

	var _flexbox2 = _interopRequireDefault(_flexbox);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var FULL_WIDTH_REM = 750; /**
	                           * Web Browser driver
	                           **/

	var STYLE = 'style';
	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';
	var CLASS_NAME = 'className';
	var CLASS = 'class';

	var Driver = {
	  getElementById: function getElementById(id) {
	    return document.getElementById(id);
	  },
	  getParentNode: function getParentNode(node) {
	    return node.parentNode;
	  },
	  createBody: function createBody() {
	    return document.body;
	  },
	  createComment: function createComment(content) {
	    return document.createComment(content);
	  },
	  createEmpty: function createEmpty() {
	    return this.createComment(' empty ');
	  },
	  createText: function createText(text) {
	    return document.createTextNode(text);
	  },
	  updateText: function updateText(node, text) {
	    var textContentAttr = 'textContent' in document ? 'textContent' : 'nodeValue';
	    node[textContentAttr] = text;
	  },
	  createElement: function createElement(component) {
	    var node = document.createElement(component.type);
	    var props = component.props;

	    (0, _setNativeProps2.default)(node, props);

	    return node;
	  },
	  appendChild: function appendChild(node, parent) {
	    return parent.appendChild(node);
	  },
	  removeChild: function removeChild(node, parent) {
	    parent = parent || node.parentNode;
	    // Maybe has been removed when remove child
	    if (parent) {
	      parent.removeChild(node);
	    }
	  },
	  replaceChild: function replaceChild(newChild, oldChild, parent) {
	    parent = parent || oldChild.parentNode;
	    parent.replaceChild(newChild, oldChild);
	  },
	  insertAfter: function insertAfter(node, after, parent) {
	    parent = parent || after.parentNode;
	    var nextSibling = after.nextSibling;
	    if (nextSibling) {
	      parent.insertBefore(node, nextSibling);
	    } else {
	      parent.appendChild(node);
	    }
	  },
	  insertBefore: function insertBefore(node, before, parent) {
	    parent = parent || before.parentNode;
	    parent.insertBefore(node, before);
	  },
	  addEventListener: function addEventListener(node, eventName, eventHandler) {
	    return node.addEventListener(eventName, eventHandler);
	  },
	  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
	    return node.removeEventListener(eventName, eventHandler);
	  },
	  removeAllEventListeners: function removeAllEventListeners(node) {
	    // noop
	  },
	  removeAttribute: function removeAttribute(node, propKey) {
	    if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      return node.innerHTML = null;
	    }

	    if (propKey === CLASS_NAME) {
	      propKey = CLASS;
	    }

	    if (propKey in node) {
	      node[propKey] = null;
	    }

	    node.removeAttribute(propKey);
	  },
	  setAttribute: function setAttribute(node, propKey, propValue) {
	    if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      return node.innerHTML = propValue.__html;
	    }

	    if (propKey === CLASS_NAME) {
	      propKey = CLASS;
	    }

	    if (propKey in node) {
	      node[propKey] = propValue;
	    } else {
	      node.setAttribute(propKey, propValue);
	    }
	  },
	  setStyles: function setStyles(node, styles) {
	    var tranformedStyles = {};

	    for (var prop in styles) {
	      var val = styles[prop];
	      if (_flexbox2.default.isFlexProp(prop)) {
	        _flexbox2.default[prop](val, tranformedStyles);
	      } else {
	        tranformedStyles[prop] = (0, _styleUnit.convertUnit)(val, prop);
	      }
	    }

	    for (var _prop in tranformedStyles) {
	      var transformValue = tranformedStyles[_prop];
	      // hack handle compatibility issue
	      if (Array.isArray(transformValue)) {
	        for (var i = 0; i < transformValue.length; i++) {
	          node.style[_prop] = transformValue[i];
	        }
	      } else {
	        node.style[_prop] = transformValue;
	      }
	    }
	  },
	  beforeRender: function beforeRender() {
	    // Init rem unit
	    (0, _styleUnit.setRem)(this.getWindowWidth() / FULL_WIDTH_REM);
	  },
	  getWindowWidth: function getWindowWidth() {
	    return document.documentElement.clientWidth;
	  }
	};

	exports.default = Driver;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	                                         value: true
	});
	exports.default = undefined;

	var _weexDriver = __webpack_require__(88);

	var _weexDriver2 = _interopRequireDefault(_weexDriver);

	function _interopRequireDefault(obj) {
	                                         return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _weexDriver2.default; /**
	                                         * Weex driver
	                                         **/

	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(6);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function findComponentInstance(node) {
	  if (node == null) {
	    return null;
	  }
	  return _instance2.default.get(node);
	}

	exports.default = findComponentInstance;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = inject;

	var _universalEnv = __webpack_require__(13);

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _empty = __webpack_require__(71);

	var _empty2 = _interopRequireDefault(_empty);

	var _native = __webpack_require__(28);

	var _native2 = _interopRequireDefault(_native);

	var _text = __webpack_require__(76);

	var _text2 = _interopRequireDefault(_text);

	var _composite = __webpack_require__(70);

	var _composite2 = _interopRequireDefault(_composite);

	var _fragment = __webpack_require__(72);

	var _fragment2 = _interopRequireDefault(_fragment);

	var _weex = __webpack_require__(63);

	var _weex2 = _interopRequireDefault(_weex);

	var _browser = __webpack_require__(62);

	var _browser2 = _interopRequireDefault(_browser);

	var _hook = __webpack_require__(22);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function inject(_ref) {
	  var driver = _ref.driver,
	      hook = _ref.hook,
	      measurer = _ref.measurer;

	  // Inject component class
	  _host2.default.EmptyComponent = _empty2.default;
	  _host2.default.NativeComponent = _native2.default;
	  _host2.default.TextComponent = _text2.default;
	  _host2.default.FragmentComponent = _fragment2.default;
	  _host2.default.CompositeComponent = _composite2.default;
	  // Inject devtool hook
	  _host2.default.hook = hook || _hook2.default;

	  // Inject performance measurer
	  _host2.default.measurer = measurer;

	  // Inject render driver
	  if (!_host2.default.driver) {
	    if (!driver) {
	      if (_universalEnv.isWeex) {
	        driver = _weex2.default;
	      } else if (_universalEnv.isWeb) {
	        driver = _browser2.default;
	      } else {
	        throw Error('No builtin driver matched');
	      }
	    }

	    _host2.default.driver = driver;
	  }
	}
	module.exports = exports['default'];

/***/ }),
/* 66 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Current PropTypes only export some api with react, not validate in runtime.
	 */

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    return typeChecker;
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    // Noop
	  }
	  return createChainableTypeChecker(validate);
	}

	var typeChecker = createTypeChecker();

	exports.default = {
	  array: typeChecker,
	  bool: typeChecker,
	  func: typeChecker,
	  number: typeChecker,
	  object: typeChecker,
	  string: typeChecker,
	  symbol: typeChecker,
	  element: typeChecker,
	  node: typeChecker,
	  any: typeChecker,
	  arrayOf: typeChecker,
	  instanceOf: typeChecker,
	  objectOf: typeChecker,
	  oneOf: typeChecker,
	  oneOfType: typeChecker,
	  shape: typeChecker
	};
	module.exports = exports["default"];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	/**
	 * Pure component class.
	 */
	var PureComponent = function (_Component) {
	  _inherits(PureComponent, _Component);

	  function PureComponent(props, context) {
	    _classCallCheck(this, PureComponent);

	    return _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call(this, props, context));
	  }

	  _createClass(PureComponent, [{
	    key: 'isPureComponentClass',
	    value: function isPureComponentClass() {}
	  }]);

	  return PureComponent;
	}(_component2.default);

	exports.default = PureComponent;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inject = __webpack_require__(65);

	var _inject2 = _interopRequireDefault(_inject);

	var _instance = __webpack_require__(6);

	var _instance2 = _interopRequireDefault(_instance);

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function render(element, container, options, callback) {
	  // Compatible with `render(element, container, callback)`
	  if (typeof options === 'function') {
	    callback = options;
	    options = null;
	  }

	  // Init inject
	  (0, _inject2.default)(options || {});

	  var rootComponent = _instance2.default.render(element, container);
	  var component = rootComponent.getPublicInstance();

	  if (callback) {
	    callback.call(component);
	  }

	  return component;
	}

	exports.default = render;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BOX_ALIGN = {
	  stretch: 'stretch',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  center: 'center'
	};

	var BOX_ORIENT = {
	  row: 'horizontal',
	  column: 'vertical'
	};

	var BOX_PACK = {
	  'flex-start': 'start',
	  'flex-end': 'end',
	  center: 'center',
	  'space-between': 'justify',
	  'space-around': 'justify' // Just same as `space-between`
	};

	var FLEX_PROPS = {
	  display: true,
	  flex: true,
	  alignItems: true,
	  alignSelf: true,
	  flexDirection: true,
	  justifyContent: true,
	  flexWrap: true
	};

	var Flexbox = {
	  isFlexProp: function isFlexProp(prop) {
	    return FLEX_PROPS[prop];
	  },
	  display: function display(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (value === 'flex') {
	      style.display = ['-webkit-box', '-webkit-flex', 'flex'];
	    } else {
	      style.display = value;
	    }

	    return style;
	  },
	  flex: function flex(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxFlex = value;
	    style.webkitFlex = value;
	    style.flex = value;
	    return style;
	  },
	  flexWrap: function flexWrap(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.flexWrap = value;
	    return style;
	  },
	  alignItems: function alignItems(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxAlign = BOX_ALIGN[value];
	    style.webkitAlignItems = value;
	    style.alignItems = value;
	    return style;
	  },
	  alignSelf: function alignSelf(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitAlignSelf = value;
	    style.alignSelf = value;
	    return style;
	  },
	  flexDirection: function flexDirection(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxOrient = BOX_ORIENT[value];
	    style.webkitFlexDirection = value;
	    style.flexDirection = value;
	    return style;
	  },
	  justifyContent: function justifyContent(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxPack = BOX_PACK[value];
	    style.webkitJustifyContent = value;
	    style.justifyContent = value;
	    return style;
	  }
	};

	exports.default = Flexbox;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _stateless = __webpack_require__(75);

	var _stateless2 = _interopRequireDefault(_stateless);

	var _updater = __webpack_require__(77);

	var _updater2 = _interopRequireDefault(_updater);

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _ref = __webpack_require__(29);

	var _ref2 = _interopRequireDefault(_ref);

	var _instantiateComponent = __webpack_require__(9);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _shouldUpdateComponent = __webpack_require__(12);

	var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

	var _shallowEqual = __webpack_require__(74);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function performInSandbox(fn, handleError) {
	  try {
	    return fn();
	  } catch (e) {
	    if (handleError) {
	      handleError(e);
	    } else {
	      if (_host2.default.sandbox) {
	        setTimeout(function () {
	          throw e;
	        }, 0);
	      } else {
	        throw e;
	      }
	    }
	  }
	}

	var measureLifeCycle = void 0;
	if (process.env.NODE_ENV !== 'production') {
	  measureLifeCycle = function measureLifeCycle(callback, instanceID, type) {
	    _host2.default.measurer && _host2.default.measurer.beforeLifeCycle(instanceID, type);
	    performInSandbox(callback);
	    _host2.default.measurer && _host2.default.measurer.afterLifeCycle(instanceID, type);
	  };
	}

	/**
	 * Composite Component
	 */

	var CompositeComponent = function () {
	  function CompositeComponent(element) {
	    _classCallCheck(this, CompositeComponent);

	    this._currentElement = element;
	  }

	  _createClass(CompositeComponent, [{
	    key: 'getName',
	    value: function getName() {
	      var type = this._currentElement.type;
	      var constructor = this._instance && this._instance.constructor;
	      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
	    }
	  }, {
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      var _this = this;

	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;
	      this._updateCount = 0;

	      if (process.env.NODE_ENV !== 'production') {
	        _host2.default.measurer && _host2.default.measurer.beforeMountComponent(this._mountID, this);
	      }

	      var Component = this._currentElement.type;
	      var publicProps = this._currentElement.props;
	      var isClass = Component.prototype;
	      var isComponentClass = isClass && Component.prototype.isComponentClass;
	      // Class stateless component without state but have lifecycles
	      var isStatelessClass = isClass && Component.prototype.render;

	      // Context process
	      var publicContext = this._processContext(context);

	      // Initialize the public class
	      var instance = void 0;
	      var renderedElement = void 0;

	      if (isComponentClass || isStatelessClass) {
	        // Component instance
	        instance = new Component(publicProps, publicContext, _updater2.default);
	      } else if (typeof Component === 'function') {
	        // Functional stateless component without state and lifecycles
	        instance = new _stateless2.default(Component);
	      } else {
	        throw Error('Invalid component type ' + JSON.stringify(Component));
	      }

	      // These should be set up in the constructor, but as a convenience for
	      // simpler class abstractions, we set them up after the fact.
	      instance.props = publicProps;
	      instance.context = publicContext;
	      instance.refs = {};

	      // Inject the updater into instance
	      instance.updater = _updater2.default;
	      instance._internal = this;
	      this._instance = instance;

	      // Init state, must be set to an object or null
	      var initialState = instance.state;
	      if (initialState === undefined) {
	        // TODO clone the state?
	        instance.state = initialState = null;
	      }

	      performInSandbox(function () {
	        if (instance.componentWillMount) {
	          if (process.env.NODE_ENV !== 'production') {
	            measureLifeCycle(function () {
	              instance.componentWillMount();
	            }, _this._mountID, 'componentWillMount');
	          } else {
	            instance.componentWillMount();
	          }
	        }
	      });

	      if (renderedElement == null) {
	        _host2.default.component = this;
	        // Process pending state when call setState in componentWillMount
	        instance.state = this._processPendingState(publicProps, publicContext);

	        // FIXME: handleError should named as lifecycles
	        var handleError = void 0;
	        if (typeof instance.handleError === 'function') {
	          handleError = function handleError(e) {
	            instance.handleError(e);
	          };
	        }

	        performInSandbox(function () {
	          if (process.env.NODE_ENV !== 'production') {
	            measureLifeCycle(function () {
	              renderedElement = instance.render();
	            }, _this._mountID, 'render');
	          } else {
	            renderedElement = instance.render();
	          }
	        }, handleError);

	        _host2.default.component = null;
	      }

	      this._renderedComponent = (0, _instantiateComponent2.default)(renderedElement);
	      this._renderedComponent.mountComponent(this._parent, this._processChildContext(context), childMounter);

	      if (this._currentElement && this._currentElement.ref) {
	        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
	      }

	      performInSandbox(function () {
	        if (instance.componentDidMount) {
	          if (process.env.NODE_ENV !== 'production') {
	            measureLifeCycle(function () {
	              instance.componentDidMount();
	            }, _this._mountID, 'componentDidMount');
	          } else {
	            instance.componentDidMount();
	          }
	        }
	      });

	      _host2.default.hook.Reconciler.mountComponent(this);

	      if (process.env.NODE_ENV !== 'production') {
	        _host2.default.measurer && _host2.default.measurer.afterMountComponent(this._mountID);
	      }

	      return instance;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(notRemoveChild) {
	      var instance = this._instance;

	      performInSandbox(function () {
	        if (instance.componentWillUnmount) {
	          instance.componentWillUnmount();
	        }
	      });

	      _host2.default.hook.Reconciler.unmountComponent(this);

	      instance._internal = null;

	      if (this._renderedComponent != null) {
	        var ref = this._currentElement.ref;
	        if (ref) {
	          _ref2.default.detach(this._currentElement._owner, ref, this);
	        }

	        this._renderedComponent.unmountComponent(notRemoveChild);
	        this._renderedComponent = null;
	        this._instance = null;
	      }

	      this._currentElement = null;

	      // Reset pending fields
	      // Even if this component is scheduled for another update in ReactUpdates,
	      // it would still be ignored because these fields are reset.
	      this._pendingStateQueue = null;
	      this._pendingForceUpdate = false;

	      // These fields do not really need to be reset since this object is no
	      // longer accessible.
	      this._context = null;
	    }

	    /**
	     * Filters the context object to only contain keys specified in
	     * `contextTypes`
	     */

	  }, {
	    key: '_processContext',
	    value: function _processContext(context) {
	      var Component = this._currentElement.type;
	      var contextTypes = Component.contextTypes;
	      if (!contextTypes) {
	        return {};
	      }
	      var maskedContext = {};
	      for (var contextName in contextTypes) {
	        maskedContext[contextName] = context[contextName];
	      }
	      return maskedContext;
	    }
	  }, {
	    key: '_processChildContext',
	    value: function _processChildContext(currentContext) {
	      var instance = this._instance;
	      var childContext = instance.getChildContext && instance.getChildContext();
	      if (childContext) {
	        return _extends({}, currentContext, childContext);
	      }
	      return currentContext;
	    }
	  }, {
	    key: '_processPendingState',
	    value: function _processPendingState(props, context) {
	      var instance = this._instance;
	      var queue = this._pendingStateQueue;
	      if (!queue) {
	        return instance.state;
	      }
	      // Reset pending queue
	      this._pendingStateQueue = null;
	      var nextState = _extends({}, instance.state);
	      for (var i = 0; i < queue.length; i++) {
	        var partial = queue[i];
	        _extends(nextState, typeof partial === 'function' ? partial.call(instance, nextState, props, context) : partial);
	      }

	      return nextState;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
	      var instance = this._instance;

	      if (process.env.NODE_ENV !== 'production') {
	        _host2.default.measurer && _host2.default.measurer.beforeUpdateComponent(this._mountID, this);
	      }

	      if (!instance) {
	        console.error('Update component \'' + this.getName() + '\' that has already been unmounted (or failed to mount).');
	      }

	      var willReceive = false;
	      var nextContext = void 0;
	      var nextProps = void 0;

	      // Determine if the context has changed or not
	      if (this._context === nextUnmaskedContext) {
	        nextContext = instance.context;
	      } else {
	        nextContext = this._processContext(nextUnmaskedContext);
	        willReceive = true;
	      }

	      // Distinguish between a props update versus a simple state update
	      if (prevElement === nextElement) {
	        // Skip checking prop types again -- we don't read component.props to avoid
	        // warning for DOM component props in this upgrade
	        nextProps = nextElement.props;
	      } else {
	        nextProps = nextElement.props;
	        willReceive = true;
	      }

	      var hasReceived = willReceive && instance.componentWillReceiveProps;

	      if (hasReceived) {
	        // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
	        this._pendingState = true;
	        performInSandbox(function () {
	          instance.componentWillReceiveProps(nextProps, nextContext);
	        });
	        this._pendingState = false;
	      }

	      // Update refs
	      _ref2.default.update(prevElement, nextElement, this);

	      // Shoud update always default
	      var shouldUpdate = true;
	      var prevProps = instance.props;
	      var prevState = instance.state;
	      // TODO: could delay execution processPendingState
	      var nextState = this._processPendingState(nextProps, nextContext);

	      // ShouldComponentUpdate is not called when forceUpdate is used
	      if (!this._pendingForceUpdate) {
	        if (instance.shouldComponentUpdate) {
	          shouldUpdate = performInSandbox(function () {
	            return instance.shouldComponentUpdate(nextProps, nextState, nextContext);
	          });
	        } else if (instance.isPureComponentClass) {
	          shouldUpdate = !(0, _shallowEqual2.default)(prevProps, nextProps) || !(0, _shallowEqual2.default)(prevState, nextState);
	        }
	      }

	      if (shouldUpdate) {
	        this._pendingForceUpdate = false;
	        // Will set `this.props`, `this.state` and `this.context`.
	        var prevContext = instance.context;

	        // Cannot use this.setState() in componentWillUpdate.
	        // If need to update state in response to a prop change, use componentWillReceiveProps instead.
	        performInSandbox(function () {
	          if (instance.componentWillUpdate) {
	            instance.componentWillUpdate(nextProps, nextState, nextContext);
	          }
	        });

	        // Replace with next
	        this._currentElement = nextElement;
	        this._context = nextUnmaskedContext;
	        instance.props = nextProps;
	        instance.state = nextState;
	        instance.context = nextContext;

	        this._updateRenderedComponent(nextUnmaskedContext);

	        performInSandbox(function () {
	          if (instance.componentDidUpdate) {
	            instance.componentDidUpdate(prevProps, prevState, prevContext);
	          }
	        });

	        this._updateCount++;
	      } else {
	        // If it's determined that a component should not update, we still want
	        // to set props and state but we shortcut the rest of the update.
	        this._currentElement = nextElement;
	        this._context = nextUnmaskedContext;
	        instance.props = nextProps;
	        instance.state = nextState;
	        instance.context = nextContext;
	      }

	      // Flush setState callbacks set in componentWillReceiveProps
	      if (hasReceived) {
	        var callbacks = this._pendingCallbacks;
	        this._pendingCallbacks = null;
	        _updater2.default.runCallbacks(callbacks, instance);
	      }

	      if (process.env.NODE_ENV !== 'production') {
	        _host2.default.measurer && _host2.default.measurer.afterUpdateComponent(this._mountID);
	      }

	      _host2.default.hook.Reconciler.receiveComponent(this);
	    }

	    /**
	     * Call the component's `render` method and update the DOM accordingly.
	     */

	  }, {
	    key: '_updateRenderedComponent',
	    value: function _updateRenderedComponent(context) {
	      var _this2 = this;

	      var prevRenderedComponent = this._renderedComponent;
	      var prevRenderedElement = prevRenderedComponent._currentElement;

	      var instance = this._instance;
	      var nextRenderedElement = void 0;

	      _host2.default.component = this;

	      performInSandbox(function () {
	        if (process.env.NODE_ENV !== 'production') {
	          measureLifeCycle(function () {
	            nextRenderedElement = instance.render();
	          }, _this2._mountID, 'render');
	        } else {
	          nextRenderedElement = instance.render();
	        }
	      });

	      _host2.default.component = null;

	      if ((0, _shouldUpdateComponent2.default)(prevRenderedElement, nextRenderedElement)) {
	        prevRenderedComponent.updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedComponent._context, this._processChildContext(context));
	        if (process.env.NODE_ENV !== 'production') {
	          _host2.default.measurer && _host2.default.measurer.recordOperation({
	            instanceID: this._mountID,
	            type: 'update component',
	            payload: {}
	          });
	        }
	      } else {
	        var oldChild = prevRenderedComponent.getNativeNode();
	        prevRenderedComponent.unmountComponent(true);

	        this._renderedComponent = (0, _instantiateComponent2.default)(nextRenderedElement);
	        this._renderedComponent.mountComponent(this._parent, this._processChildContext(context), function (newChild, parent) {
	          // TODO: Duplicate code in native component file
	          if (!Array.isArray(newChild)) {
	            newChild = [newChild];
	          }

	          // oldChild or newChild all maybe fragment
	          if (!Array.isArray(oldChild)) {
	            oldChild = [oldChild];
	          }

	          // If newChild count large then oldChild
	          var lastNewChild = void 0;
	          for (var i = 0; i < newChild.length; i++) {
	            var child = newChild[i];
	            if (oldChild[i]) {
	              _host2.default.driver.replaceChild(child, oldChild[i]);
	            } else {
	              _host2.default.driver.insertAfter(child, lastNewChild);
	            }
	            lastNewChild = child;
	          }

	          // If newChild count less then oldChild
	          if (newChild.length < oldChild.length) {
	            for (var _i = newChild.length; _i < oldChild.length; _i++) {
	              _host2.default.driver.removeChild(oldChild[_i]);
	            }
	          }
	        });
	      }
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      var renderedComponent = this._renderedComponent;
	      if (renderedComponent) {
	        return renderedComponent.getNativeNode();
	      }
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      var instance = this._instance;
	      // The Stateless components cannot be given refs
	      if (instance instanceof _stateless2.default) {
	        return null;
	      }
	      return instance;
	    }
	  }]);

	  return CompositeComponent;
	}();

	exports.default = CompositeComponent;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Empty Component
	 */
	var EmptyComponent = function () {
	  function EmptyComponent() {
	    _classCallCheck(this, EmptyComponent);

	    this._currentElement = null;
	  }

	  _createClass(EmptyComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      this._parent = parent;
	      this._context = context;

	      var instance = {
	        _internal: this
	      };

	      var nativeNode = this.getNativeNode();
	      if (childMounter) {
	        childMounter(nativeNode, parent);
	      } else {
	        _host2.default.driver.appendChild(nativeNode, parent);
	      }

	      return instance;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(notRemoveChild) {
	      if (this._nativeNode && !notRemoveChild) {
	        _host2.default.driver.removeChild(this._nativeNode, this._parent);
	      }

	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent() {
	      // Noop
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      // Weex native node
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createEmpty();
	      }

	      return this._nativeNode;
	    }
	  }]);

	  return EmptyComponent;
	}();

	exports.default = EmptyComponent;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	var _native = __webpack_require__(28);

	var _native2 = _interopRequireDefault(_native);

	var _instance = __webpack_require__(6);

	var _instance2 = _interopRequireDefault(_instance);

	var _instantiateComponent = __webpack_require__(9);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _getElementKeyName = __webpack_require__(27);

	var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	/**
	 * Fragment Component
	 */
	var FragmentComponent = function (_NativeComponent) {
	  _inherits(FragmentComponent, _NativeComponent);

	  function FragmentComponent(element) {
	    _classCallCheck(this, FragmentComponent);

	    return _possibleConstructorReturn(this, (FragmentComponent.__proto__ || Object.getPrototypeOf(FragmentComponent)).call(this, element));
	  }

	  _createClass(FragmentComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      // Parent native element
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;

	      var instance = {
	        _internal: this
	      };
	      this._instance = instance;

	      var fragment = this.getNativeNode();
	      var children = this._currentElement;

	      // Process children
	      this.mountChildren(children, context);

	      if (childMounter) {
	        childMounter(fragment, parent);
	      } else {
	        var isFragmentParent = Array.isArray(parent);
	        for (var i = 0; i < fragment.length; i++) {
	          var child = fragment[i];
	          // When the parent is also a fragment
	          if (isFragmentParent) {
	            parent.push(child);
	          } else {
	            _host2.default.driver.appendChild(child, parent);
	          }
	        }
	      }

	      return instance;
	    }
	  }, {
	    key: 'mountChildren',
	    value: function mountChildren(children, context) {
	      var _this2 = this;

	      var renderedChildren = {};
	      var fragment = this.getNativeNode();

	      var renderedChildrenImage = children.map(function (element, index) {
	        var renderedChild = (0, _instantiateComponent2.default)(element);
	        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
	        renderedChildren[name] = renderedChild;
	        renderedChild._mountIndex = index;
	        // Mount
	        var mountImage = renderedChild.mountComponent(_this2._parent, context, function (nativeNode) {
	          if (Array.isArray(nativeNode)) {
	            for (var i = 0; i < nativeNode.length; i++) {
	              fragment.push(nativeNode[i]);
	            }
	          } else {
	            fragment.push(nativeNode);
	          }
	        });
	        return mountImage;
	      });

	      this._renderedChildren = renderedChildren;

	      return renderedChildrenImage;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(notRemoveChild) {
	      if (this._nativeNode) {
	        _instance2.default.remove(this._nativeNode);
	        if (!notRemoveChild) {
	          for (var i = 0; i < this._nativeNode.length; i++) {
	            _host2.default.driver.removeChild(this._nativeNode[i]);
	          }
	        }
	      }

	      // Do not need remove child when their parent is removed
	      this.unmountChildren(true);

	      this._currentElement = null;
	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	      this._instance = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
	      // Replace current element
	      this._currentElement = nextElement;
	      this.updateChildren(this._currentElement, nextContext);
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      if (this._nativeNode == null) {
	        this._nativeNode = [];
	      }

	      return this._nativeNode;
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      return this.getNativeNode();
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      return 'fragment';
	    }
	  }]);

	  return FragmentComponent;
	}(_native2.default);

	exports.default = FragmentComponent;
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _component = __webpack_require__(11);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass);
	}

	var rootCounter = 1;

	var Root = function (_Component) {
	  _inherits(Root, _Component);

	  function Root() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Root);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Root.__proto__ || Object.getPrototypeOf(Root)).call.apply(_ref, [this].concat(args))), _this), _this.rootID = rootCounter++, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Root, [{
	    key: 'isRootComponent',
	    value: function isRootComponent() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      return this.getRenderedComponent().getPublicInstance();
	    }
	  }, {
	    key: 'getRenderedComponent',
	    value: function getRenderedComponent() {
	      return this._internal._renderedComponent;
	    }
	  }]);

	  return Root;
	}(_component2.default);

	exports.default = Root;
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	exports.default = shallowEqual;
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Stateless Component Class Wrapper
	 */
	var StatelessComponent = function () {
	  function StatelessComponent(pureRender) {
	    _classCallCheck(this, StatelessComponent);

	    // A stateless function
	    this.pureRender = pureRender;
	  }

	  _createClass(StatelessComponent, [{
	    key: 'render',
	    value: function render() {
	      if (process.env.NODE_ENV !== 'production') {
	        _host2.default.measurer && _host2.default.measurer.beforeRender();
	      }

	      return this.pureRender(this.props, this.context);
	    }
	  }]);

	  return StatelessComponent;
	}();

	exports.default = StatelessComponent;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _host = __webpack_require__(2);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	/**
	 * Text Component
	 */
	var TextComponent = function () {
	  function TextComponent(element) {
	    _classCallCheck(this, TextComponent);

	    this._currentElement = element;
	    this._stringText = String(element);
	  }

	  _createClass(TextComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;

	      // Weex dom operation
	      var nativeNode = this.getNativeNode();

	      if (childMounter) {
	        childMounter(nativeNode, parent);
	      } else {
	        _host2.default.driver.appendChild(nativeNode, parent);
	      }

	      var instance = {
	        _internal: this
	      };

	      _host2.default.hook.Reconciler.mountComponent(this);

	      return instance;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(notRemoveChild) {
	      if (this._nativeNode && !notRemoveChild) {
	        _host2.default.driver.removeChild(this._nativeNode, this._parent);
	      }

	      _host2.default.hook.Reconciler.unmountComponent(this);

	      this._currentElement = null;
	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	      this._stringText = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, context) {
	      // If some text do noting
	      if (prevElement !== nextElement) {
	        // Replace current element
	        this._currentElement = nextElement;
	        // Devtool read the latest stringText value
	        this._stringText = String(nextElement);
	        _host2.default.driver.updateText(this.getNativeNode(), nextElement);
	        _host2.default.hook.Reconciler.receiveComponent(this);
	      }
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createText(this._stringText);
	      }
	      return this._nativeNode;
	    }
	  }]);

	  return TextComponent;
	}();

	exports.default = TextComponent;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function enqueueCallback(internal, callback) {
	  if (callback) {
	    var callbackQueue = internal._pendingCallbacks || (internal._pendingCallbacks = []);
	    callbackQueue.push(callback);
	  }
	}

	function enqueueState(internal, partialState) {
	  if (partialState) {
	    var stateQueue = internal._pendingStateQueue || (internal._pendingStateQueue = []);
	    stateQueue.push(partialState);
	  }
	}

	var Updater = {
	  setState: function setState(component, partialState, callback) {
	    var internal = component._internal;

	    if (!internal) {
	      return;
	    }

	    enqueueState(internal, partialState);
	    enqueueCallback(internal, callback);

	    if (!internal._pendingState) {
	      this.runUpdate(component);
	    }
	  },

	  forceUpdate: function forceUpdate(component, callback) {
	    var internal = component._internal;

	    if (!internal) {
	      return;
	    }

	    internal._pendingForceUpdate = true;

	    enqueueCallback(internal, callback);
	    this.runUpdate(component);
	  },

	  runUpdate: function runUpdate(component) {
	    var internal = component._internal;

	    if (!internal || !internal._renderedComponent) {
	      return;
	    }

	    // If updateComponent happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = internal._pendingCallbacks;
	    internal._pendingCallbacks = null;

	    var prevElement = internal._currentElement;
	    var prevUnmaskedContext = internal._context;

	    if (internal._pendingStateQueue || internal._pendingForceUpdate) {
	      internal.updateComponent(prevElement, prevElement, prevUnmaskedContext, prevUnmaskedContext);
	    }

	    this.runCallbacks(callbacks, component);
	  },

	  runCallbacks: function runCallbacks(callbacks, context) {
	    if (callbacks) {
	      for (var i = 0; i < callbacks.length; i++) {
	        callbacks[i].call(context);
	      }
	    }
	  }
	};

	exports.default = Updater;
	module.exports = exports["default"];

/***/ }),
/* 78 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '0.2.11';
	module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  /**
	   * parse w3c attrs to weex module attrs
	   *
	   * @param {Object} w3c component data
	   * @return {Object} weex component data
	   */
	  parse: function parse(component) {
	    component.type = 'div';
	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	/**
	 * weex button
	 *
	 * props: disabled, style
	 */

	exports.default = {
	  parse: function parse(component) {
	    var props = component.props;

	    component.type = 'text';

	    var style = props.style,
	        disabled = props.disabled,
	        children = props.children;

	    var textStyle = _extends({
	      textAlign: 'center',
	      fontSize: 22,
	      paddingTop: 4,
	      paddingRight: 12,
	      paddingBottom: 6,
	      paddingLeft: 12,
	      borderWidth: 4,
	      borderStyle: 'solid',
	      borderColor: '#000000',
	      backgroudColor: '#c0c0c0'
	    }, style);

	    if (disabled) {
	      props.onClick = null;
	      textStyle = _extends({}, textStyle, {
	        color: '#7f7f7f',
	        borderColor: '#7f7f7f'
	      });
	    }

	    if (typeof children === 'string') {
	      props.value = children;
	      props.children = null;
	    }

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 81 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var BASE_FONT_SIZE = 28;

	function generateHeadingStyle(baseFontSize, fontMultiplier, marginMultiplier) {
	  return {
	    fontSize: baseFontSize * fontMultiplier,
	    marginTop: baseFontSize * fontMultiplier * marginMultiplier,
	    marginBottom: baseFontSize * fontMultiplier * marginMultiplier,
	    fontWeight: 'bold'
	  };
	}

	var HeadingElements = {
	  h1: generateHeadingStyle(BASE_FONT_SIZE, 2, 0.67),
	  h2: generateHeadingStyle(BASE_FONT_SIZE, 1.5, 0.83),
	  h3: generateHeadingStyle(BASE_FONT_SIZE, 1.17, 1),
	  h4: generateHeadingStyle(BASE_FONT_SIZE, 1, 1.33),
	  h5: generateHeadingStyle(BASE_FONT_SIZE, 0.83, 1.67),
	  h6: generateHeadingStyle(BASE_FONT_SIZE, 0.67, 2.33)
	};

	exports.default = {
	  parse: function parse(component) {
	    var type = component.type,
	        props = component.props;

	    component.type = 'text';
	    props.style = _extends({}, HeadingElements[type] || HeadingElements.h6, props.style);

	    if (typeof props.children === 'string' && !props.value) {
	      props.value = props.children;
	      props.children = null;
	    }

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseProps = __webpack_require__(31);

	exports.default = {

	  /**
	   * parse w3c attrs to weex module attrs
	   *
	   * @param {Object} w3c component data
	   * @return {Object} weex component data
	   */
	  parse: function parse(component) {
	    var props = component.props;

	    component.type = 'image';

	    // modify props
	    component.props = (0, _parseProps.transformPropsAttrsToStyle)(props, ['width', 'height']);

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _img = __webpack_require__(82);

	var _img2 = _interopRequireDefault(_img);

	var _video = __webpack_require__(87);

	var _video2 = _interopRequireDefault(_video);

	var _textarea = __webpack_require__(86);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _span = __webpack_require__(85);

	var _span2 = _interopRequireDefault(_span);

	var _p = __webpack_require__(84);

	var _p2 = _interopRequireDefault(_p);

	var _button = __webpack_require__(80);

	var _button2 = _interopRequireDefault(_button);

	var _heading = __webpack_require__(81);

	var _heading2 = _interopRequireDefault(_heading);

	var _block = __webpack_require__(79);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = {
	  span: _span2.default,
	  p: _p2.default,
	  img: _img2.default,
	  button: _button2.default,
	  video: _video2.default,
	  textarea: _textarea2.default,
	  h1: _heading2.default,
	  h2: _heading2.default,
	  h3: _heading2.default,
	  h4: _heading2.default,
	  h5: _heading2.default,
	  h6: _heading2.default,
	  nav: _block2.default,
	  article: _block2.default,
	  section: _block2.default,
	  // Conflict with weex header tag
	  // header: block,
	  footer: _block2.default,
	  aside: _block2.default,
	  main: _block2.default
	};
	module.exports = exports['default'];

/***/ }),
/* 84 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var BASE_FONT_SIZE = 28;

	var defaultParagraphStyle = {
	  fontSize: BASE_FONT_SIZE,
	  marginTop: BASE_FONT_SIZE,
	  marginBottom: BASE_FONT_SIZE
	};

	var TypographyElements = {
	  u: {
	    textDecoration: 'underline'
	  },
	  s: {
	    textDecoration: 'line-through'
	  },
	  i: {
	    fontStyle: 'italic'
	  },
	  b: {
	    fontWeight: 'bold'
	  },
	  del: {
	    textDecoration: 'line-through'
	  },
	  em: {
	    fontStyle: 'italic'
	  },
	  strong: {
	    fontWeight: 'bold'
	  },
	  big: {
	    fontSize: BASE_FONT_SIZE * 1.2
	  },
	  small: {
	    fontSize: BASE_FONT_SIZE * 0.8
	  }
	};

	function transformString(string) {
	  return {
	    type: 'span',
	    attr: {
	      value: string
	    }
	  };
	}

	function transformChild(child) {
	  var type = child.type;
	  var props = child.props;
	  var style = props.style;
	  var nestedChildren = props.children;
	  // Alias img tag
	  if (type === 'img') {
	    type = 'image';
	  }

	  // Transfrom to span
	  if (TypographyElements[type]) {
	    style = _extends({}, TypographyElements[type], style);
	    type = 'span';
	  }

	  props.style = null;
	  props.children = null;

	  var element = {
	    type: type,
	    style: style,
	    attr: props || {}
	  };

	  if (nestedChildren) {
	    if (type === 'span' && typeof nestedChildren === 'string') {
	      element.attr.value = nestedChildren;
	    } else {
	      element.children = transformChildren(nestedChildren);
	    }
	  }

	  return element;
	}

	function transformChildren(children) {
	  var elements = [];
	  if (!Array.isArray(children)) {
	    children = [children];
	  }

	  for (var i = 0; i < children.length; i++) {
	    var child = children[i];
	    if (typeof child === 'string') {
	      elements.push(transformString(child));
	    } else if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object') {
	      elements.push(transformChild(child));
	    }
	  }

	  return elements;
	}

	exports.default = {
	  parse: function parse(component) {
	    var props = component.props;

	    var children = props.children;

	    component.type = 'richtext';

	    props.style = _extends({}, defaultParagraphStyle, props.style);

	    props.value = transformChildren(children);;
	    props.children = null;

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 85 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  parse: function parse(component) {
	    var props = component.props;

	    component.type = 'text';

	    if (typeof props.children === 'string' && !props.value) {
	      props.value = props.children;
	      props.children = null;
	    }

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  /**
	   * parse w3c attrs to weex module attrs
	   *
	   * @param {Object} w3c component data
	   * @return {Object} weex component data
	   */
	  parse: function parse(component) {
	    var props = component.props;

	    if (typeof props.children === 'string' && !props.value) {
	      props.value = props.children;
	      props.children = null;
	    }

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _parseProps = __webpack_require__(31);

	exports.default = {

	  /**
	   * parse w3c attrs to weex module attrs
	   *
	   * @param {Object} w3c component data
	   * @return {Object} weex component data
	   */
	  parse: function parse(component) {
	    var props = component.props;

	    // modify props

	    component.props = (0, _parseProps.transformPropsAttrsToStyle)(props, ['width', 'height']);
	    component.props = (0, _parseProps.renamePropsAttr)(props, 'autoplay', 'auto-play');

	    return component;
	  }
	};
	module.exports = exports['default'];

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	}; /**
	    * Weex driver
	    */

	var _styleUnit = __webpack_require__(30);

	var _elements = __webpack_require__(83);

	var _elements2 = _interopRequireDefault(_elements);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var STYLE = 'style';
	var ID = 'id';
	var TEXT = 'text';
	var CHILDREN = 'children';
	var EVENT_PREFIX_REGEXP = /on[A-Z]/;
	var FULL_WIDTH_REM = 750;

	var nodeMaps = {};
	/* global __weex_document__ */
	var document = (typeof __weex_document__ === 'undefined' ? 'undefined' : _typeof(__weex_document__)) === 'object' ? __weex_document__ : (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document : null;

	var Driver = {
	  getElementById: function getElementById(id) {
	    return nodeMaps[id];
	  },
	  getParentNode: function getParentNode(node) {
	    return node.parentNode;
	  },
	  createBody: function createBody() {
	    if (document.body) {
	      return document.body;
	    }

	    var documentElement = document.documentElement;
	    var body = document.createBody();
	    documentElement.appendChild(body);

	    return body;
	  },
	  createComment: function createComment(content) {
	    return document.createComment(content);
	  },
	  createEmpty: function createEmpty() {
	    return this.createComment(' empty ');
	  },
	  createText: function createText(text) {
	    return Driver.createElement({
	      type: TEXT,
	      props: {
	        value: text
	      }
	    });
	  },
	  updateText: function updateText(node, content) {
	    this.setAttribute(node, 'value', content);
	  },
	  createElement: function createElement(component) {
	    var htmlElement = _elements2.default[component.type];
	    if (htmlElement) {
	      component = htmlElement.parse(component);
	    }

	    var props = component.props;
	    var events = [];
	    var style = {};
	    var originStyle = props[STYLE];
	    for (var prop in originStyle) {
	      style[prop] = (0, _styleUnit.convertUnit)(originStyle[prop], prop);
	    }

	    var node = document.createElement(component.type, {
	      style: style
	    });

	    this.setNativeProps(node, props);

	    return node;
	  },
	  appendChild: function appendChild(node, parent) {
	    return parent.appendChild(node);
	  },
	  removeChild: function removeChild(node, parent) {
	    parent = parent || node.parentNode;
	    var id = node.attr && node.attr[ID];
	    if (id != null) {
	      nodeMaps[id] = null;
	    }
	    return parent.removeChild(node);
	  },
	  replaceChild: function replaceChild(newChild, oldChild, parent) {
	    parent = parent || oldChild.parentNode;
	    var previousSibling = oldChild.previousSibling;
	    var nextSibling = oldChild.nextSibling;
	    this.removeChild(oldChild, parent);

	    if (previousSibling) {
	      this.insertAfter(newChild, previousSibling, parent);
	    } else if (nextSibling) {
	      this.insertBefore(newChild, nextSibling, parent);
	    } else {
	      this.appendChild(newChild, parent);
	    }
	  },
	  insertAfter: function insertAfter(node, after, parent) {
	    parent = parent || after.parentNode;
	    return parent.insertAfter(node, after);
	  },
	  insertBefore: function insertBefore(node, before, parent) {
	    parent = parent || before.parentNode;
	    return parent.insertBefore(node, before);
	  },
	  addEventListener: function addEventListener(node, eventName, eventHandler) {
	    return node.addEvent(eventName, eventHandler);
	  },
	  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
	    return node.removeEvent(eventName, eventHandler);
	  },
	  removeAllEventListeners: function removeAllEventListeners(node) {
	    // Noop
	  },
	  removeAttribute: function removeAttribute(node, propKey, propValue) {
	    if (propKey == ID) {
	      nodeMaps[propValue] = null;
	    }
	    // Weex native will crash when pass null value
	    return node.setAttr(propKey, undefined, false);
	  },
	  setAttribute: function setAttribute(node, propKey, propValue) {
	    if (propKey == ID) {
	      nodeMaps[propValue] = node;
	    }

	    return node.setAttr(propKey, propValue, false);
	  },
	  setStyles: function setStyles(node, styles) {
	    // TODO if more then one style update, call setStyles will be better performance
	    for (var key in styles) {
	      var val = styles[key];
	      val = (0, _styleUnit.convertUnit)(val, key);
	      node.setStyle(key, val);
	    }
	  },
	  beforeRender: function beforeRender() {
	    // Turn off batched updates
	    document.open();

	    // Init rem unit
	    (0, _styleUnit.setRem)(this.getWindowWidth() / FULL_WIDTH_REM);
	  },
	  afterRender: function afterRender() {
	    if (document.listener && document.listener.createFinish) {
	      document.listener.createFinish();
	    }

	    // Turn on batched updates
	    document.close();
	  },
	  getWindowWidth: function getWindowWidth() {
	    return FULL_WIDTH_REM;
	  },
	  setNativeProps: function setNativeProps(node, props) {
	    for (var prop in props) {
	      var value = props[prop];
	      if (prop === CHILDREN) {
	        continue;
	      }

	      if (value != null) {
	        if (EVENT_PREFIX_REGEXP.test(prop)) {
	          var eventName = prop.slice(2).toLowerCase();
	          this.addEventListener(node, eventName, value);
	        } else {
	          this.setAttribute(node, prop, value);
	        }
	      }
	    }
	  }
	};

	exports.default = Driver;
	module.exports = exports['default'];

/***/ })
/******/ ])}); require("docs/basic");;