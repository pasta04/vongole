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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/renderer/renderer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/electron-log/src/catchErrors.js":
/*!******************************************************!*\
  !*** ./node_modules/electron-log/src/catchErrors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Some ideas from sindresorhus/electron-unhandled
 */

var electronApi = __webpack_require__(/*! ./electronApi */ "./node_modules/electron-log/src/electronApi.js");

var isAttached = false;

module.exports = function catchErrors(options) {
  if (isAttached) return { stop: stop };
  isAttached = true;

  if (process.type === 'renderer') {
    window.addEventListener('error', onRendererError);
    window.addEventListener('unhandledrejection', onRendererRejection);
  } else {
    process.on('uncaughtException', onError);
    process.on('unhandledRejection', onRejection);
  }

  return { stop: stop };

  function onError(e) {
    try {
      if (typeof options.onError === 'function') {
        if (options.onError(e) === false) {
          return;
        }
      }

      options.log(e);

      if (options.showDialog && e.name.indexOf('UnhandledRejection') < 0) {
        var type = process.type || 'main';
        electronApi.showErrorBox(
          'A JavaScript error occurred in the ' + type + ' process',
          e.stack
        );
      }
    } catch (logError) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }

  function onRejection(reason) {
    if (reason instanceof Error) {
      var reasonName = 'UnhandledRejection ' + reason.name;

      var errPrototype = Object.getPrototypeOf(reason);
      var nameProperty = Object.getOwnPropertyDescriptor(errPrototype, 'name');
      if (!nameProperty || !nameProperty.writable) {
        reason = new Error(reason.message);
      }

      reason.name = reasonName;
      onError(reason);
      return;
    }

    var error = new Error(JSON.stringify(reason));
    error.name = 'UnhandledRejection';
    onError(error);
  }

  function onRendererError(event) {
    event.preventDefault();
    onError(event.error);
  }

  function onRendererRejection(event) {
    event.preventDefault();
    onRejection(event.reason);
  }

  function stop() {
    isAttached = false;

    if (process.type === 'renderer') {
      window.removeEventListener('error', onRendererError);
      window.removeEventListener('unhandledrejection', onRendererRejection);
    } else {
      process.removeListener('uncaughtException', onError);
      process.removeListener('unhandledRejection', onRejection);
    }
  }
};


/***/ }),

/***/ "./node_modules/electron-log/src/electronApi.js":
/*!******************************************************!*\
  !*** ./node_modules/electron-log/src/electronApi.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Split Electron API from the main code
 */

var electron;
try {
  // eslint-disable-next-line global-require
  electron = __webpack_require__(/*! electron */ "electron");
} catch (e) {
  electron = null;
}

module.exports = {
  getName: getName,
  getPath: getPath,
  getVersion: getVersion,
  isDev: isDev,
  isElectron: isElectron,
  isIpcChannelListened: isIpcChannelListened,
  loadRemoteModule: loadRemoteModule,
  onIpc: onIpc,
  sendIpc: sendIpc,
  showErrorBox: showErrorBox,
};

function getApp() {
  return getElectronModule('app');
}

function getName() {
  var app = getApp();
  if (!app) return null;

  return 'name' in app ? app.name : app.getName();
}

function getElectronModule(name) {
  if (!electron) {
    return null;
  }

  if (electron[name]) {
    return electron[name];
  }

  if (electron.remote) {
    return electron.remote[name];
  }

  return null;
}

function getIpc() {
  if (process.type === 'browser' && electron && electron.ipcMain) {
    return electron.ipcMain;
  }

  if (process.type === 'renderer' && electron && electron.ipcRenderer) {
    return electron.ipcRenderer;
  }

  return null;
}


function getPath(name) {
  var app = getApp();
  if (!app) return null;

  try {
    return app.getPath(name);
  } catch (e) {
    return null;
  }
}

function getRemote() {
  if (electron && electron.remote) {
    return electron.remote;
  }

  return null;
}

function getVersion() {
  var app = getApp();
  if (!app) return null;

  return 'version' in app ? app.version : app.getVersion();
}

function isDev() {
  // based on sindresorhus/electron-is-dev
  var app = getApp();
  if (!app) return false;

  return !app.isPackaged || process.env.ELECTRON_IS_DEV === '1';
}

function isElectron() {
  return process.type === 'browser' || process.type === 'renderer';
}

/**
 * Return true if the process listens for the IPC channel
 * @param {string} channel
 */
function isIpcChannelListened(channel) {
  var ipc = getIpc();
  return ipc ? ipc.listenerCount(channel) > 0 : false;
}

/**
 * Try to load the module in the opposite process
 * @param {string} moduleName
 */
function loadRemoteModule(moduleName) {
  if (process.type === 'browser') {
    getApp().on('web-contents-created', function (e, contents) {
      var promise = contents.executeJavaScript(
        'try {require("' + moduleName + '")} catch(e){}; void 0;'
      );

      // Do nothing on error, just prevent Unhandled rejection
      if (promise && typeof promise.catch === 'function') {
        promise.catch(function () {});
      }
    });
  } else if (process.type === 'renderer') {
    try {
      getRemote().require(moduleName);
    } catch (e) {
      // Can't be required. Webpack?
    }
  }
}

/**
 * Listen to async messages sent from opposite process
 * @param {string} channel
 * @param {function} listener
 */
function onIpc(channel, listener) {
  var ipc = getIpc();
  if (ipc) {
    ipc.on(channel, listener);
  }
}

/**
 * Sent a message to opposite process
 * @param {string} channel
 * @param {any} message
 */
function sendIpc(channel, message) {
  if (process.type === 'browser') {
    sendIpcToRenderer(channel, message);
  } else if (process.type === 'renderer') {
    sendIpcToMain(channel, message);
  }
}

function sendIpcToMain(channel, message) {
  var ipc = getIpc();
  if (ipc) {
    ipc.send(channel, message);
  }
}

function sendIpcToRenderer(channel, message) {
  if (!electron || !electron.BrowserWindow) {
    return;
  }

  electron.BrowserWindow.getAllWindows().forEach(function (wnd) {
    wnd.webContents && wnd.webContents.send(channel, message);
  });
}

function showErrorBox(title, message) {
  var dialog = getElectronModule('dialog');
  if (!dialog) return;

  dialog.showErrorBox(title, message);
}


/***/ }),

/***/ "./node_modules/electron-log/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/electron-log/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var catchErrors = __webpack_require__(/*! ./catchErrors */ "./node_modules/electron-log/src/catchErrors.js");
var electronApi = __webpack_require__(/*! ./electronApi */ "./node_modules/electron-log/src/electronApi.js");
var log = __webpack_require__(/*! ./log */ "./node_modules/electron-log/src/log.js").log;
var scopeFactory = __webpack_require__(/*! ./scope */ "./node_modules/electron-log/src/scope.js");
var transportConsole = __webpack_require__(/*! ./transports/console */ "./node_modules/electron-log/src/transports/console.js");
var transportFile = __webpack_require__(/*! ./transports/file */ "./node_modules/electron-log/src/transports/file/index.js");
var transportIpc = __webpack_require__(/*! ./transports/ipc */ "./node_modules/electron-log/src/transports/ipc.js");
var transportRemote = __webpack_require__(/*! ./transports/remote */ "./node_modules/electron-log/src/transports/remote.js");

module.exports = create('default');
module.exports.default = module.exports;

/**
 * @param {string} logId
 * @return {ElectronLog.ElectronLog}
 */
function create(logId) {
  /**
   * @type {ElectronLog.ElectronLog}
   */
  var instance = {
    catchErrors: function callCatchErrors(options) {
      var opts = Object.assign({}, {
        log: instance.error,
        showDialog: process.type === 'browser',
      }, options || {});

      catchErrors(opts);
    },
    create: create,
    functions: {},
    hooks: [],
    isDev: electronApi.isDev(),
    levels: ['error', 'warn', 'info', 'verbose', 'debug', 'silly'],
    logId: logId,
    variables: {
      processType: process.type,
    },
  };

  instance.scope = scopeFactory(instance);

  instance.transports = {
    console: transportConsole(instance),
    file: transportFile(instance),
    remote: transportRemote(instance),
    ipc: transportIpc(instance),
  };

  instance.levels.forEach(function (level) {
    instance[level] = log.bind(null, instance, { level: level });
    instance.functions[level] = instance[level];
  });

  instance.log = log.bind(null, instance, { level: 'info' });
  instance.functions.log = instance.log;

  return instance;
}


/***/ }),

/***/ "./node_modules/electron-log/src/log.js":
/*!**********************************************!*\
  !*** ./node_modules/electron-log/src/log.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  compareLevels: compareLevels,
  log: log,
  runTransport: runTransport,
  runTransports: runTransports,
};

function log(electronLog, options) {
  var transports = electronLog.transports;

  var message = {
    data: Array.prototype.slice.call(arguments, 2),
    date: new Date(),
    level: options.level,
    scope: options.scope ? options.scope.toJSON() : null,
    variables: electronLog.variables,
  };

  runTransports(transports, message, electronLog);
}

function runTransports(transports, message, electronLog) {
  for (var i in transports) {
    if (Object.prototype.hasOwnProperty.call(transports, i)) {
      runTransport(transports[i], message, electronLog);
    }
  }
}

function runTransport(transport, message, electronLog) {
  if (typeof transport !== 'function' || transport.level === false) {
    return;
  }

  if (!compareLevels(electronLog.levels, transport.level, message.level)) {
    return;
  }

  message = runHooks(electronLog.hooks, transport, message);

  if (message) {
    transport(message);
  }
}

function compareLevels(levels, passLevel, checkLevel) {
  var pass = levels.indexOf(passLevel);
  var check = levels.indexOf(checkLevel);
  if (check === -1 || pass === -1) {
    return true;
  }

  return check <= pass;
}

function runHooks(hooks, transport, message) {
  if (!hooks || !hooks.length) {
    return message;
  }

  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < hooks.length; i++) {
    message = hooks[i](message, transport);
    if (!message) break;
  }

  return message;
}


/***/ }),

/***/ "./node_modules/electron-log/src/scope.js":
/*!************************************************!*\
  !*** ./node_modules/electron-log/src/scope.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var log = __webpack_require__(/*! ./log */ "./node_modules/electron-log/src/log.js").log;

module.exports = scopeFactory;

/**
 * @param {ElectronLog.ElectronLog} electronLog
 * @return {ElectronLog.Scope}
 */
function scopeFactory(electronLog) {
  scope.labelPadding = true;
  scope.defaultLabel = '';

  /** @private */
  scope.maxLabelLength = 0;

  /**
   * @type {typeof getOptions}
   * @package
   */
  scope.getOptions = getOptions;

  return scope;

  function scope(label) {
    var instance = {
      label: label,
      toJSON: function () {
        return {
          label: this.label,
        };
      },
    };

    electronLog.levels.forEach(function (level) {
      instance[level] = log.bind(null, electronLog, {
        level: level,
        scope: instance,
      });
    });

    instance.log = instance.info;

    scope.maxLabelLength = Math.max(scope.maxLabelLength, label.length);

    return instance;
  }

  function getOptions() {
    return {
      defaultLabel: scope.defaultLabel,
      labelLength: getLabelLength(),
    };
  }

  function getLabelLength() {
    if (scope.labelPadding === true) {
      return scope.maxLabelLength;
    }

    if (scope.labelPadding === false) {
      return 0;
    }

    if (typeof scope.labelPadding === 'number') {
      return scope.labelPadding;
    }

    return 0;
  }
}


/***/ }),

/***/ "./node_modules/electron-log/src/transform/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/electron-log/src/transform/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var object = __webpack_require__(/*! ./object */ "./node_modules/electron-log/src/transform/object.js");
var style = __webpack_require__(/*! ./style */ "./node_modules/electron-log/src/transform/style.js");
var template = __webpack_require__(/*! ./template */ "./node_modules/electron-log/src/transform/template.js");

module.exports = {
  applyAnsiStyles: style.applyAnsiStyles,
  concatFirstStringElements: template.concatFirstStringElements,
  customFormatterFactory: customFormatterFactory,
  maxDepthFactory: object.maxDepthFactory,
  removeStyles: style.removeStyles,
  toJSON: object.toJSON,
  toString: object.toString,
  transform: transform,
};

function customFormatterFactory(customFormat, concatFirst, scopeOptions) {
  if (typeof customFormat === 'string') {
    return function customStringFormatter(data, message) {
      return transform(message, [
        template.templateVariables,
        template.templateScopeFactory(scopeOptions),
        template.templateDate,
        template.templateText,
        concatFirst && template.concatFirstStringElements,
      ], [customFormat].concat(data));
    };
  }

  if (typeof customFormat === 'function') {
    return function customFunctionFormatter(data, message) {
      var modifiedMessage = Object.assign({}, message, { data: data });
      var texts = customFormat(modifiedMessage, data);
      return [].concat(texts);
    };
  }

  return function (data) {
    return [].concat(data);
  };
}

function transform(message, transformers, initialData) {
  return transformers.reduce(function (data, transformer) {
    if (typeof transformer === 'function') {
      return transformer(data, message);
    }

    return data;
  }, initialData || message.data);
}


/***/ }),

/***/ "./node_modules/electron-log/src/transform/object.js":
/*!***********************************************************!*\
  !*** ./node_modules/electron-log/src/transform/object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(/*! util */ "util");

module.exports = {
  maxDepthFactory: maxDepthFactory,
  serialize: serialize,
  toJSON: toJSON,
  toString: toString,
};

function createSerializer() {
  var seen = createWeakSet();

  return function (key, value) {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return undefined;
      }

      seen.add(value);
    }

    return serialize(key, value);
  };
}

/**
 * @return {WeakSet<object>}
 */
function createWeakSet() {
  if (typeof WeakSet !== 'undefined') {
    return new WeakSet();
  }

  var cache = [];
  this.add = function (value) { cache.push(value) };
  this.has = function (value) { return cache.indexOf(value) !== -1 };

  return this;
}

function maxDepth(data, depth) {
  if (!data) {
    return data;
  }

  if (depth < 1) {
    if (data.map) return '[array]';
    if (typeof data === 'object') return '[object]';

    return data;
  }

  if (typeof data.map === 'function') {
    return data.map(function (child) {
      return maxDepth(child, depth - 1);
    });
  }

  if (typeof data !== 'object') {
    return data;
  }

  if (data && typeof data.toISOString === 'function') {
    return data;
  }

  // noinspection PointlessBooleanExpressionJS
  if (data === null) {
    return null;
  }

  if (data instanceof Error) {
    return data;
  }

  var newJson = {};
  for (var i in data) {
    if (!Object.prototype.hasOwnProperty.call(data, i)) continue;
    newJson[i] = maxDepth(data[i], depth - 1);
  }

  return newJson;
}

function maxDepthFactory(depth) {
  depth = depth || 6;

  return function maxDepthFunction(data) {
    return maxDepth(data, depth);
  };
}

function serialize(key, value) {
  if (value instanceof Error) {
    var object = Object.assign(
      {
        constructor: (value.constructor && value.constructor.name) || 'Error',
      },
      value,
      { stack: value.stack }
    );

    if (!object.stack) {
      object.message = value.message;
    }

    if (value.constructor && value.constructor.name) {
      object.constructor = value.constructor.name;
    }

    return object;
  }

  if (!value) {
    return value;
  }

  if (typeof value.toJSON === 'function') {
    return value.toJSON();
  }

  if (typeof value === 'function') {
    return '[function] ' + value.toString();
  }

  return value;
}

function toJSON(data) {
  return JSON.parse(JSON.stringify(data, createSerializer()));
}

function toString(data) {
  var simplifiedData = data.map(function (item) {
    if (item === undefined) {
      return undefined;
    }

    return JSON.parse(JSON.stringify(item, createSerializer(), '  '));
  });

  return util.format.apply(util, simplifiedData);
}


/***/ }),

/***/ "./node_modules/electron-log/src/transform/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/electron-log/src/transform/style.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  applyAnsiStyles: applyAnsiStyles,
  removeStyles: removeStyles,
  transformStyles: transformStyles,
};

var ANSI_COLORS = {
  unset: '\x1b[0m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

function applyAnsiStyles(data) {
  return transformStyles(data, styleToAnsi, resetAnsiStyle);
}

function styleToAnsi(style) {
  var color = style.replace(/color:\s*(\w+).*/, '$1').toLowerCase();
  return ANSI_COLORS[color] || '';
}

function resetAnsiStyle(string) {
  return string + ANSI_COLORS.unset;
}

function removeStyles(data) {
  return transformStyles(data, function () { return '' });
}

function transformStyles(data, onStyleFound, onStyleApplied) {
  var foundStyles = {};

  return data.reduce(function (result, item, index, array) {
    if (foundStyles[index]) {
      return result;
    }

    if (typeof item === 'string') {
      var valueIndex = index;
      var styleApplied = false;

      item = item.replace(/%[1cdfiOos]/g, function (match) {
        valueIndex += 1;

        if (match !== '%c') {
          return match;
        }

        var style = array[valueIndex];
        if (typeof style === 'string') {
          foundStyles[valueIndex] = true;
          styleApplied = true;
          return onStyleFound(style, item);
        }

        return match;
      });

      if (styleApplied && onStyleApplied) {
        item = onStyleApplied(item);
      }
    }

    result.push(item);
    return result;
  }, []);
}


/***/ }),

/***/ "./node_modules/electron-log/src/transform/template.js":
/*!*************************************************************!*\
  !*** ./node_modules/electron-log/src/transform/template.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  concatFirstStringElements: concatFirstStringElements,
  formatDate: formatDate,
  formatTimeZone: formatTimeZone,
  pad: pad,
  padString: padString,
  templateDate: templateDate,
  templateVariables: templateVariables,
  templateScopeFactory: templateScopeFactory,
  templateText: templateText,
};

/**
 * The first argument of console.log may contain templates. In the library
 * the first element is a string related to transports.console.format. So
 * this function concatenates first two elements to make templates like %d
 * work
 * @param {*[]} data
 * @return {*[]}
 */
function concatFirstStringElements(data) {
  if (typeof data[0] !== 'string' || typeof data[1] !== 'string') {
    return data;
  }

  if (data[0].match(/%[1cdfiOos]/)) {
    return data;
  }

  data[1] = data[0] + ' ' + data[1];
  data.shift();

  return data;
}

function formatDate(template, date) {
  return template
    .replace('{y}', String(date.getFullYear()))
    .replace('{m}', pad(date.getMonth() + 1))
    .replace('{d}', pad(date.getDate()))
    .replace('{h}', pad(date.getHours()))
    .replace('{i}', pad(date.getMinutes()))
    .replace('{s}', pad(date.getSeconds()))
    .replace('{ms}', pad(date.getMilliseconds(), 3))
    .replace('{z}', formatTimeZone(date.getTimezoneOffset()))
    .replace('{iso}', date.toISOString());
}

function formatTimeZone(minutesOffset) {
  var m = Math.abs(minutesOffset);
  return (minutesOffset >= 0 ? '-' : '+')
    + pad(Math.floor(m / 60)) + ':'
    + pad(m % 60);
}

function pad(number, zeros) {
  zeros = zeros || 2;
  return (new Array(zeros + 1).join('0') + number).substr(-zeros, zeros);
}

function padString(value, length) {
  length = Math.max(length, value.length);
  var padValue = Array(length + 1).join(' ');
  return (value + padValue).substring(0, length);
}

function templateDate(data, message) {
  var template = data[0];
  if (typeof template !== 'string') {
    return data;
  }

  data[0] = formatDate(template, message.date);
  return data;
}

/**
 * @param {{ labelLength: number, defaultLabel: string }} options
 */
function templateScopeFactory(options) {
  options = options || {};
  var labelLength = options.labelLength || 0;

  return function templateScope(data, message) {
    var template = data[0];
    var label = message.scope && message.scope.label;

    if (!label) {
      label = options.defaultLabel;
    }

    var scopeText;
    if (label === '') {
      scopeText = labelLength > 0 ? padString('', labelLength + 3) : '';
    } else if (typeof label === 'string') {
      scopeText = padString(' (' + label + ')', labelLength + 3);
    } else {
      scopeText = '';
    }

    data[0] = template.replace('{scope}', scopeText);
    return data;
  };
}

function templateVariables(data, message) {
  var template = data[0];
  var variables = message.variables;

  if (typeof template !== 'string' || !message.variables) {
    return data;
  }

  for (var i in variables) {
    if (!Object.prototype.hasOwnProperty.call(variables, i)) continue;
    template = template.replace('{' + i + '}', variables[i]);
  }

  template = template.replace('{level}', message.level);

  data[0] = template;
  return data;
}

function templateText(data) {
  var template = data[0];
  if (typeof template !== 'string') {
    return data;
  }

  var textTplPosition = template.lastIndexOf('{text}');
  if (textTplPosition === template.length - 6) {
    data[0] = template.replace(/\s?{text}/, '');
    if (data[0] === '') {
      data.shift();
    }

    return data;
  }

  var templatePieces = template.split('{text}');
  var result = [];

  if (templatePieces[0] !== '') {
    result.push(templatePieces[0]);
  }

  result = result.concat(data.slice(1));

  if (templatePieces[1] !== '') {
    result.push(templatePieces[1]);
  }

  return result;
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/console.js":
/*!*************************************************************!*\
  !*** ./node_modules/electron-log/src/transports/console.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-multi-spaces, no-console */

var transform = __webpack_require__(/*! ../transform */ "./node_modules/electron-log/src/transform/index.js");

var original = {
  context: console,
  error:   console.error,
  warn:    console.warn,
  info:    console.info,
  verbose: console.verbose,
  debug:   console.debug,
  silly:   console.silly,
  log:     console.log,
};

module.exports = consoleTransportFactory;
module.exports.transformRenderer = transformRenderer;
module.exports.transformMain = transformMain;

var separator = process.platform === 'win32' ? '>' : '›';
var DEFAULT_FORMAT = {
  browser: '%c{h}:{i}:{s}.{ms}{scope}%c ' + separator + ' {text}',
  renderer: '{h}:{i}:{s}.{ms}{scope} › {text}',
  worker: '{h}:{i}:{s}.{ms}{scope} › {text}',
};

function consoleTransportFactory(electronLog) {
  transport.level  = 'silly';
  transport.useStyles = process.env.FORCE_STYLES;
  transport.format = DEFAULT_FORMAT[process.type] || DEFAULT_FORMAT.browser;

  return transport;

  function transport(message) {
    var scopeOptions = electronLog.scope.getOptions();

    var data;
    if (process.type === 'renderer' || process.type === 'worker') {
      data = transformRenderer(message, transport, scopeOptions);
    } else {
      data = transformMain(message, transport, scopeOptions);
    }

    consoleLog(message.level, data);
  }
}

function transformRenderer(message, transport, scopeOptions) {
  return transform.transform(message, [
    transform.customFormatterFactory(transport.format, true, scopeOptions),
  ]);
}

function transformMain(message, transport, scopeOptions) {
  var useStyles = canUseStyles(transport.useStyles, message.level);

  return transform.transform(message, [
    addTemplateColorFactory(transport.format),
    transform.customFormatterFactory(transport.format, false, scopeOptions),
    useStyles ? transform.applyAnsiStyles : transform.removeStyles,
    transform.concatFirstStringElements,
    transform.maxDepthFactory(4),
    transform.toJSON,
  ]);
}

function addTemplateColorFactory(format) {
  return function addTemplateColors(data, message) {
    if (format !== DEFAULT_FORMAT.browser) {
      return data;
    }

    return ['color:' + levelToStyle(message.level), 'color:unset'].concat(data);
  };
}

function canUseStyles(useStyleValue, level) {
  if (useStyleValue === true || useStyleValue === false) {
    return useStyleValue;
  }

  var useStderr = level === 'error' || level === 'warn';
  var stream = useStderr ? process.stderr : process.stdout;
  return stream && stream.isTTY;
}

function consoleLog(level, args) {
  if (original[level]) {
    original[level].apply(original.context, args);
  } else {
    original.log.apply(original.context, args);
  }
}

function levelToStyle(level) {
  switch (level) {
    case 'error': return 'red';
    case 'warn':  return 'yellow';
    case 'info':  return 'cyan';
    default:      return 'unset';
  }
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/file/file.js":
/*!***************************************************************!*\
  !*** ./node_modules/electron-log/src/transports/file/file.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EventEmitter = __webpack_require__(/*! events */ "events");
var fs = __webpack_require__(/*! fs */ "fs");
var os = __webpack_require__(/*! os */ "os");
var path = __webpack_require__(/*! path */ "path");
var util = __webpack_require__(/*! util */ "util");

module.exports = {
  File: File,
  FileRegistry: FileRegistry,
  NullFile: NullFile,
};

/**
 * File manipulations on filesystem
 * @class
 * @extends EventEmitter
 * @property {number} size
 *
 * @constructor
 * @param {string} filePath
 * @param {WriteOptions} [writeOptions]
 * @param {boolean} [writeAsync]
 */
function File(filePath, writeOptions, writeAsync) {
  EventEmitter.call(this);

  /**
   * @type {string}
   * @readonly
   */
  this.path = filePath;

  /**
   * @type {number}
   * @private
   */
  this.initialSize = undefined;

  /**
   * @type {number}
   * @readonly
   */
  this.bytesWritten = 0;

  /**
   * @type {boolean}
   * @private
   */
  this.writeAsync = Boolean(writeAsync);

  /**
   * @type {string[]}
   * @private
   */
  this.asyncWriteQueue = [];

  /**
   * @type {WriteOptions}
   * @private
   */
  this.writeOptions = writeOptions || {
    flag: 'a',
    mode: 438, // 0666
    encoding: 'utf8',
  };

  Object.defineProperty(this, 'size', {
    get: this.getSize.bind(this),
  });
}

util.inherits(File, EventEmitter);

File.prototype.clear = function () {
  try {
    fs.writeFileSync(this.path, '', {
      mode: this.writeOptions.mode,
      flag: 'w',
    });
    this.reset();
    return true;
  } catch (e) {
    if (e.code === 'ENOENT') {
      return true;
    }

    this.emit('error', e, this);
    return false;
  }
};

File.prototype.crop = function (bytesAfter) {
  try {
    var content = readFileSyncFromEnd(this.path, bytesAfter || 4096);
    this.clear();
    this.writeLine('[log cropped]' + os.EOL + content);
  } catch (e) {
    this.emit(
      'error',
      new Error('Couldn\'t crop file ' + this.path + '. ' + e.message),
      this
    );
  }
};

File.prototype.toString = function () {
  return this.path;
};

/**
 * @package
 */
File.prototype.reset = function () {
  this.initialSize = undefined;
  this.bytesWritten = 0;
};

/**
 * @package
 */
File.prototype.writeLine = function (text) {
  text += os.EOL;

  if (this.writeAsync) {
    this.asyncWriteQueue.push(text);
    this.nextAsyncWrite();
    return;
  }

  try {
    fs.writeFileSync(this.path, text, this.writeOptions);
    this.increaseBytesWrittenCounter(text);
  } catch (e) {
    this.emit(
      'error',
      new Error('Couldn\'t write to ' + this.path + '. ' + e.message),
      this
    );
  }
};

/**
 * @return {number}
 * @protected
 */
File.prototype.getSize = function () {
  if (this.initialSize === undefined) {
    try {
      var stats = fs.statSync(this.path);
      this.initialSize = stats.size;
    } catch (e) {
      this.initialSize = 0;
    }
  }

  return this.initialSize + this.bytesWritten;
};

/**
 * @return {boolean}
 * @package
 */
File.prototype.isNull = function () {
  return false;
};

/**
 * @private
 */
File.prototype.increaseBytesWrittenCounter = function (text) {
  this.bytesWritten += Buffer.byteLength(text, this.writeOptions.encoding);
};

/**
 * @private
 */
File.prototype.nextAsyncWrite = function () {
  var file = this;

  if (this.asyncWriteQueue.length < 1) {
    return;
  }

  var text = this.asyncWriteQueue.shift();

  fs.writeFile(this.path, text, this.writeOptions, function (e) {
    if (e) {
      file.emit(
        'error',
        new Error('Couldn\'t write to ' + file.path + '. ' + e.message),
        this
      );
    } else {
      file.increaseBytesWrittenCounter(text);
    }

    file.nextAsyncWrite();
  });
};

/**
 * File manipulations on filesystem
 * @class
 * @property {number} size
 *
 * @constructor
 * @param {string} filePath
 */
function NullFile(filePath) {
  File.call(this, filePath);
}

util.inherits(NullFile, File);

NullFile.prototype.clear = function () {};
NullFile.prototype.crop = function () {};
NullFile.prototype.writeLine = function () {};
NullFile.prototype.getSize = function () { return 0 };
NullFile.prototype.isNull = function () { return true };

/**
 * Collection, key is a file path, value is a File instance
 * @class
 *
 * @constructor
 */
function FileRegistry() {
  EventEmitter.call(this);
  this.store = {};

  this.emitError = this.emitError.bind(this);
}

util.inherits(FileRegistry, EventEmitter);

/**
 * Provide a File object corresponding to the filePath
 * @param {string} filePath
 * @param {WriteOptions} [writeOptions]
 * @param {boolean} [async]
 * @return {File}
 */
FileRegistry.prototype.provide = function (filePath, writeOptions, async) {
  var file;
  try {
    filePath = path.resolve(filePath);

    if (this.store[filePath]) {
      return this.store[filePath];
    }

    file = this.createFile(filePath, writeOptions, Boolean(async));
  } catch (e) {
    file = new NullFile(filePath);
    this.emitError(e, file);
  }

  file.on('error', this.emitError);
  this.store[filePath] = file;
  return file;
};

/**
 * @param {string} filePath
 * @param {WriteOptions} writeOptions
 * @param {boolean} async
 * @return {File}
 * @private
 */
FileRegistry.prototype.createFile = function (filePath, writeOptions, async) {
  this.testFileWriting(filePath);
  return new File(filePath, writeOptions, async);
};

/**
 * @param {Error} error
 * @param {File} file
 * @private
 */
FileRegistry.prototype.emitError = function (error, file) {
  this.emit('error', error, file);
};

/**
 * @param {string} filePath
 * @private
 */
FileRegistry.prototype.testFileWriting = function (filePath) {
  mkDir(path.dirname(filePath));
  fs.writeFileSync(filePath, '', { flag: 'a' });
};

function mkDir(dirPath) {
  if (checkNodeJsVersion(10.12)) {
    fs.mkdirSync(dirPath, { recursive: true });
    return true;
  }

  try {
    fs.mkdirSync(dirPath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return mkDir(path.dirname(dirPath)) && mkDir(dirPath);
    }

    try {
      if (fs.statSync(dirPath).isDirectory()) {
        return true;
      }

      // noinspection ExceptionCaughtLocallyJS
      throw error;
    } catch (e) {
      throw e;
    }
  }
}

function checkNodeJsVersion(version) {
  if (!process.versions) {
    return false;
  }

  var nodeVersion = Number(
    process.version.match(/^v(\d+\.\d+)/)[1].replace(/\.(\d)$/, '.0$1')
  );

  return nodeVersion >= version;
}

function readFileSyncFromEnd(filePath, bytesCount) {
  var buffer = Buffer.alloc(bytesCount);
  var stats = fs.statSync(filePath);

  var readLength = Math.min(stats.size, bytesCount);
  var offset = Math.max(0, stats.size - bytesCount);

  var fd = fs.openSync(filePath, 'r');
  var totalBytes = fs.readSync(fd, buffer, 0, readLength, offset);
  fs.closeSync(fd);

  return buffer.toString('utf8', 0, totalBytes);
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/file/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/electron-log/src/transports/file/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");
var util = __webpack_require__(/*! util */ "util");
var transform = __webpack_require__(/*! ../../transform */ "./node_modules/electron-log/src/transform/index.js");
var FileRegistry = __webpack_require__(/*! ./file */ "./node_modules/electron-log/src/transports/file/file.js").FileRegistry;
var variables = __webpack_require__(/*! ./variables */ "./node_modules/electron-log/src/transports/file/variables.js");

module.exports = fileTransportFactory;

// Shared between multiple file transport instances
var globalRegistry = new FileRegistry();

function fileTransportFactory(electronLog, customRegistry) {
  var pathVariables = variables.getPathVariables(process.platform);

  var registry = customRegistry || globalRegistry;
  registry.on('error', function (e, file) {
    logConsole('Can\'t write to ' + file, e);
  });

  /* eslint-disable no-multi-spaces */
  transport.archiveLog   = archiveLog;
  transport.fileName     = getDefaultFileName();
  transport
    .format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}';
  transport.getFile      = getFile;
  transport.level        = 'silly';
  transport.maxSize      = 1024 * 1024;
  transport.resolvePath  = resolvePath;
  transport.sync         = true;
  transport.writeOptions = {
    flag: 'a',
    mode: 438, // 0666
    encoding: 'utf8',
  };

  initDeprecated();

  return transport;

  function transport(message) {
    var file = getFile(message);

    var needLogRotation = transport.maxSize > 0
      && file.size > transport.maxSize;

    if (needLogRotation) {
      transport.archiveLog(file);
      file.reset();
    }

    var scopeOptions = electronLog.scope.getOptions();
    var content = transform.transform(message, [
      transform.removeStyles,
      transform.customFormatterFactory(transport.format, false, scopeOptions),
      transform.concatFirstStringElements,
      transform.maxDepthFactory(),
      transform.toString,
    ]);

    file.writeLine(content);
  }

  function archiveLog(file) {
    var oldPath = file.toString();
    var inf = path.parse(oldPath);
    try {
      fs.renameSync(oldPath, path.join(inf.dir, inf.name + '.old' + inf.ext));
    } catch (e) {
      logConsole('Could not rotate log', e);
      var quarterOfMaxSize = Math.round(transport.maxSize / 4);
      file.crop(Math.min(quarterOfMaxSize, 256 * 1024));
    }
  }

  function logConsole(message, error) {
    var data = ['electron-log.transports.file: ' + message];

    if (error) {
      data.push(error);
    }

    electronLog.transports.console({
      data: data,
      date: new Date(),
      level: 'warn',
    });
  }

  function getFile(msg) {
    var vars = Object.assign({}, pathVariables, {
      fileName: transport.fileName,
    });

    var filePath = transport.resolvePath(vars, msg);
    return registry.provide(filePath, transport.writeOptions, !transport.sync);
  }

  /**
   * @param {PathVariables} vars
   */
  function resolvePath(vars) {
    return path.join(vars.libraryDefaultDir, vars.fileName);
  }

  function initDeprecated() {
    var isDeprecatedText = ' is deprecated and will be removed in v5.';
    var isDeprecatedProp = ' property' + isDeprecatedText;

    Object.defineProperties(transport, {
      bytesWritten: {
        get: util.deprecate(getBytesWritten, 'bytesWritten' + isDeprecatedProp),
      },

      file: {
        get: util.deprecate(getLogFile, 'file' + isDeprecatedProp),
        set: util.deprecate(setLogFile, 'file' + isDeprecatedProp),
      },

      fileSize: {
        get: util.deprecate(getFileSize, 'file' + isDeprecatedProp),
      },
    });

    transport.clear = util.deprecate(clear, 'clear()' + isDeprecatedText);
    transport.findLogPath = util.deprecate(
      getLogFile,
      'findLogPath()' + isDeprecatedText
    );
    transport.init = util.deprecate(init, 'init()' + isDeprecatedText);

    function getBytesWritten() {
      return getFile().bytesWritten;
    }

    function getLogFile() {
      return getFile().path;
    }

    function setLogFile(filePath) {
      transport.resolvePath = function () {
        return filePath;
      };
    }

    function getFileSize() {
      return getFile().size;
    }

    function clear() {
      getFile().clear();
    }

    function init() {}
  }
}

function getDefaultFileName() {
  switch (process.type) {
    case 'renderer': return 'renderer.log';
    case 'worker': return 'worker.log';
    default: return 'main.log';
  }
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/file/packageJson.js":
/*!**********************************************************************!*\
  !*** ./node_modules/electron-log/src/transports/file/packageJson.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable consistent-return */

var fs = __webpack_require__(/*! fs */ "fs");
var path = __webpack_require__(/*! path */ "path");

module.exports = {
  readPackageJson: readPackageJson,
  tryReadJsonAt: tryReadJsonAt,
};

/**
 * @return {{ name?: string, version?: string}}
 */
function readPackageJson() {
  return tryReadJsonAt(__webpack_require__.c[__webpack_require__.s] && __webpack_require__.c[__webpack_require__.s].filename)
    || tryReadJsonAt(process.resourcesPath, 'app.asar')
    || tryReadJsonAt(process.cwd())
    || { name: null, version: null };
}

/**
 * @param {...string} searchPath
 * @return {{ name?: string, version?: string } | null}
 */
function tryReadJsonAt(searchPath) {
  try {
    searchPath = path.join.apply(path, arguments);
    var fileName = findUp('package.json', searchPath);
    if (!fileName) {
      return null;
    }

    var json = JSON.parse(fs.readFileSync(fileName, 'utf8'));
    var name = json.productName || json.name;
    if (!name || name.toLowerCase() === 'electron') {
      return null;
    }

    if (json.productName || json.name) {
      return {
        name: name,
        version: json.version,
      };
    }
  } catch (e) {
    return null;
  }
}

/**
 * @param {string} fileName
 * @param {string} [cwd]
 * @return {string | null}
 */
function findUp(fileName, cwd) {
  var currentPath = cwd;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    var parsedPath = path.parse(currentPath);
    var root = parsedPath.root;
    var dir = parsedPath.dir;

    if (fs.existsSync(path.join(currentPath, fileName))) {
      return path.resolve(path.join(currentPath, fileName));
    }

    if (currentPath === root) {
      return null;
    }

    currentPath = dir;
  }
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/file/variables.js":
/*!********************************************************************!*\
  !*** ./node_modules/electron-log/src/transports/file/variables.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var os = __webpack_require__(/*! os */ "os");
var path = __webpack_require__(/*! path */ "path");
var electronApi = __webpack_require__(/*! ../../electronApi */ "./node_modules/electron-log/src/electronApi.js");
var packageJson = __webpack_require__(/*! ./packageJson */ "./node_modules/electron-log/src/transports/file/packageJson.js");

module.exports = {
  getAppData: getAppData,
  getLibraryDefaultDir: getLibraryDefaultDir,
  getLibraryTemplate: getLibraryTemplate,
  getNameAndVersion: getNameAndVersion,
  getPathVariables: getPathVariables,
  getUserData: getUserData,
};

function getAppData(platform) {
  var appData = electronApi.getPath('appData');
  if (appData) {
    return appData;
  }

  var home = getHome();

  switch (platform) {
    case 'darwin': {
      return path.join(home, 'Library/Application Support');
    }

    case 'win32': {
      return process.env.APPDATA || path.join(home, 'AppData/Roaming');
    }

    default: {
      return process.env.XDG_CONFIG_HOME || path.join(home, '.config');
    }
  }
}

function getHome() {
  return os.homedir ? os.homedir() : process.env.HOME;
}

function getLibraryDefaultDir(platform, appName) {
  if (platform === 'darwin') {
    return path.join(getHome(), 'Library/Logs', appName);
  }

  return path.join(getUserData(platform, appName), 'logs');
}

function getLibraryTemplate(platform) {
  if (platform === 'darwin') {
    return path.join(getHome(), 'Library/Logs', '{appName}');
  }

  return path.join(getAppData(platform), '{appName}', 'logs');
}

function getNameAndVersion() {
  var name = electronApi.getName();
  var version = electronApi.getVersion();

  if (name && version) {
    return { name: name, version: version };
  }

  var packageValues = packageJson.readPackageJson();
  if (!name) {
    name = packageValues.name;
  }

  if (!version) {
    version = packageValues.version;
  }

  return { name: name, version: version };
}

/**
 * @param {string} platform
 * @return {PathVariables}
 */
function getPathVariables(platform) {
  var nameAndVersion = getNameAndVersion();
  var appName = nameAndVersion.name;
  var appVersion = nameAndVersion.version;

  return {
    appData: getAppData(platform),
    appName: appName,
    appVersion: appVersion,
    electronDefaultDir: electronApi.getPath('logs'),
    home: getHome(),
    libraryDefaultDir: getLibraryDefaultDir(platform, appName),
    libraryTemplate: getLibraryTemplate(platform),
    temp: electronApi.getPath('temp') || os.tmpdir(),
    userData: getUserData(platform, appName),
  };
}

function getUserData(platform, appName) {
  return electronApi.getPath('userData')
    || path.join(getAppData(platform), appName);
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/ipc.js":
/*!*********************************************************!*\
  !*** ./node_modules/electron-log/src/transports/ipc.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var transform = __webpack_require__(/*! ../transform */ "./node_modules/electron-log/src/transform/index.js");
var electronApi = __webpack_require__(/*! ../electronApi */ "./node_modules/electron-log/src/electronApi.js");
var log = __webpack_require__(/*! ../log.js */ "./node_modules/electron-log/src/log.js");

module.exports = ipcTransportFactory;

function ipcTransportFactory(electronLog) {
  transport.eventId = '__ELECTRON_LOG_IPC_' + electronLog.logId + '__';
  transport.level = electronLog.isDev ? 'silly' : false;

  // Prevent problems when there are multiple instances after webpack
  if (electronApi.isIpcChannelListened(transport.eventId)) {
    return function () {};
  }

  electronApi.onIpc(transport.eventId, function (_, message) {
    message.date = new Date(message.date);

    log.runTransport(
      electronLog.transports.console,
      message,
      electronLog
    );
  });

  electronApi.loadRemoteModule('electron-log');

  return electronApi.isElectron() ? transport : null;

  function transport(message) {
    var ipcMessage = Object.assign({}, message, {
      data: transform.transform(message, [
        transform.removeStyles,
        transform.toJSON,
        transform.maxDepthFactory(3),
      ]),
    });

    electronApi.sendIpc(transport.eventId, ipcMessage);
  }
}


/***/ }),

/***/ "./node_modules/electron-log/src/transports/remote.js":
/*!************************************************************!*\
  !*** ./node_modules/electron-log/src/transports/remote.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var http = __webpack_require__(/*! http */ "http");
var https = __webpack_require__(/*! https */ "https");
var url = __webpack_require__(/*! url */ "url");
var log = __webpack_require__(/*! ../log */ "./node_modules/electron-log/src/log.js");
var transform = __webpack_require__(/*! ../transform */ "./node_modules/electron-log/src/transform/index.js");

module.exports = remoteTransportFactory;

function remoteTransportFactory(electronLog) {
  transport.client = { name: 'electron-application' };
  transport.depth = 6;
  transport.level = false;
  transport.requestOptions = {};
  transport.url = null;

  return transport;

  function transport(message) {
    if (!transport.url) return;

    var request = post(transport.url, transport.requestOptions, {
      client: transport.client,
      data: transform.transform(message, [
        transform.removeStyles,
        transform.toJSON,
        transform.maxDepthFactory(transport.depth + 1),
      ]),
      date: message.date.getTime(),
      level: message.level,
      variables: message.variables,
    });

    request.on('error', function (error) {
      var errorMessage = {
        data: [
          'electron-log.transports.remote:'
          + ' cannot send HTTP request to ' + transport.url,
          error,
        ],
        date: new Date(),
        level: 'warn',
      };

      var transports = [
        electronLog.transports.console,
        electronLog.transports.ipc,
        electronLog.transports.file,
      ];

      log.runTransports(transports, errorMessage, electronLog);
    });
  }
}

function post(serverUrl, requestOptions, data) {
  var urlObject = url.parse(serverUrl);
  var httpTransport = urlObject.protocol === 'https:' ? https : http;

  var body = JSON.stringify(data);

  var options = {
    hostname: urlObject.hostname,
    port:     urlObject.port,
    path:     urlObject.path,
    method:   'POST',
    headers:  {
      'Content-Length': body.length,
      'Content-Type':   'application/json',
    },
  };

  Object.assign(options, requestOptions);

  var request = httpTransport.request(options);
  request.write(body);
  request.end();

  return request;
}


/***/ }),

/***/ "./src/main/const.ts":
/*!***************************!*\
  !*** ./src/main/const.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.electronEvent = {
    /** サーバー起動 */
    'start-server': 'start-server',
    /** アラート表示 */
    'show-alert': 'show-alert',
    'show-comment': 'show-comment',
    'clear-comment': 'clear-comment',
    /** サーバー起動の返信 */
    'start-server-reply': 'start-server-reply',
    MAIN_GET_ELECTRON_DATA: 'MAIN_GET_ELECTRON_DATA',
    MAIN_SET_ELECTRON_DATA: 'MAIN_SET_ELECTRON_DATA',
    /** 板を追加 */
    MAIN_ADD_BOARDLIST: 'MAIN_ADD_BOARDLIST',
    /** スレ一覧を開く */
    MAIN_GET_THREAD_LIST: 'MAIN_GET_THREAD_LIST',
    /** スレを開く */
    MAIN_OPEN_THREAD: 'MAIN_OPEN_THREAD',
    /** 板一覧表示 */
    SHOW_BOARD_LIST: 'SHOW_BOARD_LIST',
    /** 書き込み */
    MAIN_POST_KAKIKOMI: 'MAIN_POST_KAKIKOMI',
};
exports.keyCode = {
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsYUFBYSxHQUFHO0lBQzNCLGFBQWE7SUFDYixjQUFjLEVBQUUsY0FBYztJQUU5QixhQUFhO0lBQ2IsWUFBWSxFQUFFLFlBQVk7SUFFMUIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsZUFBZSxFQUFFLGVBQWU7SUFFaEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQixFQUFFLG9CQUFvQjtJQUUxQyxzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsc0JBQXNCLEVBQUUsd0JBQXdCO0lBQ2hELFdBQVc7SUFDWCxrQkFBa0IsRUFBRSxvQkFBb0I7SUFFeEMsY0FBYztJQUNkLG9CQUFvQixFQUFFLHNCQUFzQjtJQUU1QyxZQUFZO0lBQ1osZ0JBQWdCLEVBQUUsa0JBQWtCO0lBRXBDLFlBQVk7SUFDWixlQUFlLEVBQUUsaUJBQWlCO0lBRWxDLFdBQVc7SUFDWCxrQkFBa0IsRUFBRSxvQkFBb0I7Q0FDekMsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHO0lBQ3JCLEtBQUssRUFBRSxFQUFFO0lBQ1QsS0FBSyxFQUFFLEVBQUU7SUFDVCxJQUFJLEVBQUUsRUFBRTtDQUNULENBQUMifQ==

/***/ }),

/***/ "./src/renderer/renderer.ts":
/*!**********************************!*\
  !*** ./src/renderer/renderer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = __importDefault(__webpack_require__(/*! electron */ "electron"));
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "./node_modules/electron-log/src/index.js"));
var const_1 = __webpack_require__(/*! ../main/const */ "./src/main/const.ts");
var ipcRenderer = electron_1.default.ipcRenderer;
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addBoard').onclick = addBoard;
    document.getElementById('dialog-add-board-button-cancel').onclick = dialogAddBoardButtonCancel;
    document.getElementById('dialog-add-board-button-ok').onclick = dialogAddBoardButtonOk;
    showBoardList();
    console.debug('[renderer.js]DOM Content Loaded');
});
var addBoard = function () {
    console.log('[addBoard]');
    // 掲示板追加ダイアログを表示
    var alertDialog = document.getElementById('dialog-add-board');
    alertDialog.showModal();
};
var dialogAddBoardButtonCancel = function () { return document.getElementById('dialog-add-board').close(); };
var dialogAddBoardButtonOk = function () { return __awaiter(void 0, void 0, void 0, function () {
    var name, url;
    return __generator(this, function (_a) {
        name = document.getElementById('dialog-add-board-name').value;
        url = document.getElementById('dialog-add-board-url').value;
        if (!name || !url)
            return [2 /*return*/];
        if (!url.match(/^http.+\/$/))
            return [2 /*return*/];
        // const data: typeof globalThis.electron.data = await ipcRenderer.invoke(electronEvent.MAIN_GET_ELECTRON_DATA);
        ipcRenderer.invoke(const_1.electronEvent.MAIN_ADD_BOARDLIST, [{ name: name, url: url }]);
        // 名前とURLを抜き出して登録処理に回す
        showBoardList();
        document.getElementById('dialog-add-board').close();
        return [2 /*return*/];
    });
}); };
var showBoardList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, boardList, listul, domStr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ipcRenderer.invoke(const_1.electronEvent.MAIN_GET_ELECTRON_DATA)];
            case 1:
                data = _a.sent();
                boardList = data.boardList;
                electron_log_1.default.info("[showBoardList] \u677F\u6570\uFF1A" + boardList.length);
                listul = document.getElementById('boardList');
                domStr = boardList
                    .map(function (item, index) {
                    return "<button class=\"boardItem mdl-button mdl-js-button\">\n                <div id=\"board_item_" + index + "\" data-url=\"" + item.url + "\">" + item.name + "</div>\n                <div class=\"mdl-tooltip\" data-mdl-for=\"board_item_" + index + "\">\n                  " + item.url + "\n                </div>\n              </button>";
                })
                    .join('');
                listul.innerHTML = domStr;
                listul.childNodes.forEach(function (item, key) {
                    console.log(item);
                    console.log(key);
                    item.onclick = function () {
                        // 板を開く
                        var url = boardList[key].url;
                        console.log("open: " + url);
                        showBoard(url);
                    };
                });
                return [2 /*return*/];
        }
    });
}); };
var showBoard = function (boardUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var list, listul, domStr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ipcRenderer.invoke(const_1.electronEvent.MAIN_GET_THREAD_LIST, boardUrl)];
            case 1:
                list = _a.sent();
                listul = document.getElementById('threadList');
                domStr = list
                    .map(function (item, index) {
                    return "<button class=\"boardItem mdl-button mdl-js-button\">\n                <div id=\"board_item_" + index + "\">" + item.name + "</div>\n              </button>";
                })
                    .join('');
                listul.innerHTML = domStr;
                listul.childNodes.forEach(function (item, key) {
                    console.log(item);
                    console.log(key);
                    item.onclick = function () {
                        // 板を開く
                        var url = list[key].url;
                        var name = list[key].name;
                        console.log("open: " + url);
                        ipcRenderer.send(const_1.electronEvent.MAIN_OPEN_THREAD, url, name);
                    };
                });
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFnQztBQUNoQyw4REFBK0I7QUFDL0IsdUNBQThDO0FBRTlDLElBQU0sV0FBVyxHQUFHLGtCQUFRLENBQUMsV0FBVyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUMzQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzVFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0NBQWdDLENBQXNCLENBQUMsT0FBTyxHQUFHLDBCQUEwQixDQUFDO0lBQ3BILFFBQVEsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLENBQXNCLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO0lBRTdHLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUMsQ0FBQztBQUVILElBQU0sUUFBUSxHQUFHO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUUxQixnQkFBZ0I7SUFDaEIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztJQUM5RSxXQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLElBQU0sMEJBQTBCLEdBQUcsY0FBTSxPQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBNUQsQ0FBNEQsQ0FBQztBQUN0RyxJQUFNLHNCQUFzQixHQUFHOzs7UUFDdkIsSUFBSSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQXNCLENBQUMsS0FBSyxD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

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvZWxlY3Ryb25BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3Njb3BlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc2Zvcm0vb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zZm9ybS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc2Zvcm0vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvdHJhbnNwb3J0cy9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zcG9ydHMvZmlsZS9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zcG9ydHMvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc3BvcnRzL2ZpbGUvcGFja2FnZUpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvdHJhbnNwb3J0cy9maWxlL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc3BvcnRzL2lwYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc3BvcnRzL3JlbW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEphOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDMUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsR0FBRztBQUNsQixlQUFlLEVBQUU7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSCwyQ0FBMkMsKzdIOzs7Ozs7Ozs7OztBQ3ZJM0MscUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9yZW5kZXJlci9yZW5kZXJlci50c1wiKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTb21lIGlkZWFzIGZyb20gc2luZHJlc29yaHVzL2VsZWN0cm9uLXVuaGFuZGxlZFxuICovXG5cbnZhciBlbGVjdHJvbkFwaSA9IHJlcXVpcmUoJy4vZWxlY3Ryb25BcGknKTtcblxudmFyIGlzQXR0YWNoZWQgPSBmYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjYXRjaEVycm9ycyhvcHRpb25zKSB7XG4gIGlmIChpc0F0dGFjaGVkKSByZXR1cm4geyBzdG9wOiBzdG9wIH07XG4gIGlzQXR0YWNoZWQgPSB0cnVlO1xuXG4gIGlmIChwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblJlbmRlcmVyRXJyb3IpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBvblJlbmRlcmVyUmVqZWN0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIG9uRXJyb3IpO1xuICAgIHByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIG9uUmVqZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiB7IHN0b3A6IHN0b3AgfTtcblxuICBmdW5jdGlvbiBvbkVycm9yKGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLm9uRXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMub25FcnJvcihlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5sb2coZSk7XG5cbiAgICAgIGlmIChvcHRpb25zLnNob3dEaWFsb2cgJiYgZS5uYW1lLmluZGV4T2YoJ1VuaGFuZGxlZFJlamVjdGlvbicpIDwgMCkge1xuICAgICAgICB2YXIgdHlwZSA9IHByb2Nlc3MudHlwZSB8fCAnbWFpbic7XG4gICAgICAgIGVsZWN0cm9uQXBpLnNob3dFcnJvckJveChcbiAgICAgICAgICAnQSBKYXZhU2NyaXB0IGVycm9yIG9jY3VycmVkIGluIHRoZSAnICsgdHlwZSArICcgcHJvY2VzcycsXG4gICAgICAgICAgZS5zdGFja1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGxvZ0Vycm9yKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAocmVhc29uIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHZhciByZWFzb25OYW1lID0gJ1VuaGFuZGxlZFJlamVjdGlvbiAnICsgcmVhc29uLm5hbWU7XG5cbiAgICAgIHZhciBlcnJQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocmVhc29uKTtcbiAgICAgIHZhciBuYW1lUHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGVyclByb3RvdHlwZSwgJ25hbWUnKTtcbiAgICAgIGlmICghbmFtZVByb3BlcnR5IHx8ICFuYW1lUHJvcGVydHkud3JpdGFibGUpIHtcbiAgICAgICAgcmVhc29uID0gbmV3IEVycm9yKHJlYXNvbi5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgcmVhc29uLm5hbWUgPSByZWFzb25OYW1lO1xuICAgICAgb25FcnJvcihyZWFzb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihKU09OLnN0cmluZ2lmeShyZWFzb24pKTtcbiAgICBlcnJvci5uYW1lID0gJ1VuaGFuZGxlZFJlamVjdGlvbic7XG4gICAgb25FcnJvcihlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBvblJlbmRlcmVyRXJyb3IoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG9uRXJyb3IoZXZlbnQuZXJyb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25SZW5kZXJlclJlamVjdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25SZWplY3Rpb24oZXZlbnQucmVhc29uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgaXNBdHRhY2hlZCA9IGZhbHNlO1xuXG4gICAgaWYgKHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgb25SZW5kZXJlckVycm9yKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmhhbmRsZWRyZWplY3Rpb24nLCBvblJlbmRlcmVyUmVqZWN0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5jYXVnaHRFeGNlcHRpb24nLCBvbkVycm9yKTtcbiAgICAgIHByb2Nlc3MucmVtb3ZlTGlzdGVuZXIoJ3VuaGFuZGxlZFJlamVjdGlvbicsIG9uUmVqZWN0aW9uKTtcbiAgICB9XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3BsaXQgRWxlY3Ryb24gQVBJIGZyb20gdGhlIG1haW4gY29kZVxuICovXG5cbnZhciBlbGVjdHJvbjtcbnRyeSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBnbG9iYWwtcmVxdWlyZVxuICBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG59IGNhdGNoIChlKSB7XG4gIGVsZWN0cm9uID0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldE5hbWU6IGdldE5hbWUsXG4gIGdldFBhdGg6IGdldFBhdGgsXG4gIGdldFZlcnNpb246IGdldFZlcnNpb24sXG4gIGlzRGV2OiBpc0RldixcbiAgaXNFbGVjdHJvbjogaXNFbGVjdHJvbixcbiAgaXNJcGNDaGFubmVsTGlzdGVuZWQ6IGlzSXBjQ2hhbm5lbExpc3RlbmVkLFxuICBsb2FkUmVtb3RlTW9kdWxlOiBsb2FkUmVtb3RlTW9kdWxlLFxuICBvbklwYzogb25JcGMsXG4gIHNlbmRJcGM6IHNlbmRJcGMsXG4gIHNob3dFcnJvckJveDogc2hvd0Vycm9yQm94LFxufTtcblxuZnVuY3Rpb24gZ2V0QXBwKCkge1xuICByZXR1cm4gZ2V0RWxlY3Ryb25Nb2R1bGUoJ2FwcCcpO1xufVxuXG5mdW5jdGlvbiBnZXROYW1lKCkge1xuICB2YXIgYXBwID0gZ2V0QXBwKCk7XG4gIGlmICghYXBwKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gJ25hbWUnIGluIGFwcCA/IGFwcC5uYW1lIDogYXBwLmdldE5hbWUoKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlY3Ryb25Nb2R1bGUobmFtZSkge1xuICBpZiAoIWVsZWN0cm9uKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZWxlY3Ryb25bbmFtZV0pIHtcbiAgICByZXR1cm4gZWxlY3Ryb25bbmFtZV07XG4gIH1cblxuICBpZiAoZWxlY3Ryb24ucmVtb3RlKSB7XG4gICAgcmV0dXJuIGVsZWN0cm9uLnJlbW90ZVtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRJcGMoKSB7XG4gIGlmIChwcm9jZXNzLnR5cGUgPT09ICdicm93c2VyJyAmJiBlbGVjdHJvbiAmJiBlbGVjdHJvbi5pcGNNYWluKSB7XG4gICAgcmV0dXJuIGVsZWN0cm9uLmlwY01haW47XG4gIH1cblxuICBpZiAocHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInICYmIGVsZWN0cm9uICYmIGVsZWN0cm9uLmlwY1JlbmRlcmVyKSB7XG4gICAgcmV0dXJuIGVsZWN0cm9uLmlwY1JlbmRlcmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cblxuZnVuY3Rpb24gZ2V0UGF0aChuYW1lKSB7XG4gIHZhciBhcHAgPSBnZXRBcHAoKTtcbiAgaWYgKCFhcHApIHJldHVybiBudWxsO1xuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGFwcC5nZXRQYXRoKG5hbWUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UmVtb3RlKCkge1xuICBpZiAoZWxlY3Ryb24gJiYgZWxlY3Ryb24ucmVtb3RlKSB7XG4gICAgcmV0dXJuIGVsZWN0cm9uLnJlbW90ZTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRWZXJzaW9uKCkge1xuICB2YXIgYXBwID0gZ2V0QXBwKCk7XG4gIGlmICghYXBwKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gJ3ZlcnNpb24nIGluIGFwcCA/IGFwcC52ZXJzaW9uIDogYXBwLmdldFZlcnNpb24oKTtcbn1cblxuZnVuY3Rpb24gaXNEZXYoKSB7XG4gIC8vIGJhc2VkIG9uIHNpbmRyZXNvcmh1cy9lbGVjdHJvbi1pcy1kZXZcbiAgdmFyIGFwcCA9IGdldEFwcCgpO1xuICBpZiAoIWFwcCkgcmV0dXJuIGZhbHNlO1xuXG4gIHJldHVybiAhYXBwLmlzUGFja2FnZWQgfHwgcHJvY2Vzcy5lbnYuRUxFQ1RST05fSVNfREVWID09PSAnMSc7XG59XG5cbmZ1bmN0aW9uIGlzRWxlY3Ryb24oKSB7XG4gIHJldHVybiBwcm9jZXNzLnR5cGUgPT09ICdicm93c2VyJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcic7XG59XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIHByb2Nlc3MgbGlzdGVucyBmb3IgdGhlIElQQyBjaGFubmVsXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICovXG5mdW5jdGlvbiBpc0lwY0NoYW5uZWxMaXN0ZW5lZChjaGFubmVsKSB7XG4gIHZhciBpcGMgPSBnZXRJcGMoKTtcbiAgcmV0dXJuIGlwYyA/IGlwYy5saXN0ZW5lckNvdW50KGNoYW5uZWwpID4gMCA6IGZhbHNlO1xufVxuXG4vKipcbiAqIFRyeSB0byBsb2FkIHRoZSBtb2R1bGUgaW4gdGhlIG9wcG9zaXRlIHByb2Nlc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb2R1bGVOYW1lXG4gKi9cbmZ1bmN0aW9uIGxvYWRSZW1vdGVNb2R1bGUobW9kdWxlTmFtZSkge1xuICBpZiAocHJvY2Vzcy50eXBlID09PSAnYnJvd3NlcicpIHtcbiAgICBnZXRBcHAoKS5vbignd2ViLWNvbnRlbnRzLWNyZWF0ZWQnLCBmdW5jdGlvbiAoZSwgY29udGVudHMpIHtcbiAgICAgIHZhciBwcm9taXNlID0gY29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoXG4gICAgICAgICd0cnkge3JlcXVpcmUoXCInICsgbW9kdWxlTmFtZSArICdcIil9IGNhdGNoKGUpe307IHZvaWQgMDsnXG4gICAgICApO1xuXG4gICAgICAvLyBEbyBub3RoaW5nIG9uIGVycm9yLCBqdXN0IHByZXZlbnQgVW5oYW5kbGVkIHJlamVjdGlvblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UuY2F0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgdHJ5IHtcbiAgICAgIGdldFJlbW90ZSgpLnJlcXVpcmUobW9kdWxlTmFtZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gQ2FuJ3QgYmUgcmVxdWlyZWQuIFdlYnBhY2s/XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTGlzdGVuIHRvIGFzeW5jIG1lc3NhZ2VzIHNlbnQgZnJvbSBvcHBvc2l0ZSBwcm9jZXNzXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhbm5lbFxuICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXJcbiAqL1xuZnVuY3Rpb24gb25JcGMoY2hhbm5lbCwgbGlzdGVuZXIpIHtcbiAgdmFyIGlwYyA9IGdldElwYygpO1xuICBpZiAoaXBjKSB7XG4gICAgaXBjLm9uKGNoYW5uZWwsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG4vKipcbiAqIFNlbnQgYSBtZXNzYWdlIHRvIG9wcG9zaXRlIHByb2Nlc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXG4gKiBAcGFyYW0ge2FueX0gbWVzc2FnZVxuICovXG5mdW5jdGlvbiBzZW5kSXBjKGNoYW5uZWwsIG1lc3NhZ2UpIHtcbiAgaWYgKHByb2Nlc3MudHlwZSA9PT0gJ2Jyb3dzZXInKSB7XG4gICAgc2VuZElwY1RvUmVuZGVyZXIoY2hhbm5lbCwgbWVzc2FnZSk7XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgc2VuZElwY1RvTWFpbihjaGFubmVsLCBtZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kSXBjVG9NYWluKGNoYW5uZWwsIG1lc3NhZ2UpIHtcbiAgdmFyIGlwYyA9IGdldElwYygpO1xuICBpZiAoaXBjKSB7XG4gICAgaXBjLnNlbmQoY2hhbm5lbCwgbWVzc2FnZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VuZElwY1RvUmVuZGVyZXIoY2hhbm5lbCwgbWVzc2FnZSkge1xuICBpZiAoIWVsZWN0cm9uIHx8ICFlbGVjdHJvbi5Ccm93c2VyV2luZG93KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZWxlY3Ryb24uQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCkuZm9yRWFjaChmdW5jdGlvbiAod25kKSB7XG4gICAgd25kLndlYkNvbnRlbnRzICYmIHduZC53ZWJDb250ZW50cy5zZW5kKGNoYW5uZWwsIG1lc3NhZ2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yQm94KHRpdGxlLCBtZXNzYWdlKSB7XG4gIHZhciBkaWFsb2cgPSBnZXRFbGVjdHJvbk1vZHVsZSgnZGlhbG9nJyk7XG4gIGlmICghZGlhbG9nKSByZXR1cm47XG5cbiAgZGlhbG9nLnNob3dFcnJvckJveCh0aXRsZSwgbWVzc2FnZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYXRjaEVycm9ycyA9IHJlcXVpcmUoJy4vY2F0Y2hFcnJvcnMnKTtcbnZhciBlbGVjdHJvbkFwaSA9IHJlcXVpcmUoJy4vZWxlY3Ryb25BcGknKTtcbnZhciBsb2cgPSByZXF1aXJlKCcuL2xvZycpLmxvZztcbnZhciBzY29wZUZhY3RvcnkgPSByZXF1aXJlKCcuL3Njb3BlJyk7XG52YXIgdHJhbnNwb3J0Q29uc29sZSA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9jb25zb2xlJyk7XG52YXIgdHJhbnNwb3J0RmlsZSA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9maWxlJyk7XG52YXIgdHJhbnNwb3J0SXBjID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2lwYycpO1xudmFyIHRyYW5zcG9ydFJlbW90ZSA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9yZW1vdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoJ2RlZmF1bHQnKTtcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9nSWRcbiAqIEByZXR1cm4ge0VsZWN0cm9uTG9nLkVsZWN0cm9uTG9nfVxuICovXG5mdW5jdGlvbiBjcmVhdGUobG9nSWQpIHtcbiAgLyoqXG4gICAqIEB0eXBlIHtFbGVjdHJvbkxvZy5FbGVjdHJvbkxvZ31cbiAgICovXG4gIHZhciBpbnN0YW5jZSA9IHtcbiAgICBjYXRjaEVycm9yczogZnVuY3Rpb24gY2FsbENhdGNoRXJyb3JzKG9wdGlvbnMpIHtcbiAgICAgIHZhciBvcHRzID0gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBsb2c6IGluc3RhbmNlLmVycm9yLFxuICAgICAgICBzaG93RGlhbG9nOiBwcm9jZXNzLnR5cGUgPT09ICdicm93c2VyJyxcbiAgICAgIH0sIG9wdGlvbnMgfHwge30pO1xuXG4gICAgICBjYXRjaEVycm9ycyhvcHRzKTtcbiAgICB9LFxuICAgIGNyZWF0ZTogY3JlYXRlLFxuICAgIGZ1bmN0aW9uczoge30sXG4gICAgaG9va3M6IFtdLFxuICAgIGlzRGV2OiBlbGVjdHJvbkFwaS5pc0RldigpLFxuICAgIGxldmVsczogWydlcnJvcicsICd3YXJuJywgJ2luZm8nLCAndmVyYm9zZScsICdkZWJ1ZycsICdzaWxseSddLFxuICAgIGxvZ0lkOiBsb2dJZCxcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIHByb2Nlc3NUeXBlOiBwcm9jZXNzLnR5cGUsXG4gICAgfSxcbiAgfTtcblxuICBpbnN0YW5jZS5zY29wZSA9IHNjb3BlRmFjdG9yeShpbnN0YW5jZSk7XG5cbiAgaW5zdGFuY2UudHJhbnNwb3J0cyA9IHtcbiAgICBjb25zb2xlOiB0cmFuc3BvcnRDb25zb2xlKGluc3RhbmNlKSxcbiAgICBmaWxlOiB0cmFuc3BvcnRGaWxlKGluc3RhbmNlKSxcbiAgICByZW1vdGU6IHRyYW5zcG9ydFJlbW90ZShpbnN0YW5jZSksXG4gICAgaXBjOiB0cmFuc3BvcnRJcGMoaW5zdGFuY2UpLFxuICB9O1xuXG4gIGluc3RhbmNlLmxldmVscy5mb3JFYWNoKGZ1bmN0aW9uIChsZXZlbCkge1xuICAgIGluc3RhbmNlW2xldmVsXSA9IGxvZy5iaW5kKG51bGwsIGluc3RhbmNlLCB7IGxldmVsOiBsZXZlbCB9KTtcbiAgICBpbnN0YW5jZS5mdW5jdGlvbnNbbGV2ZWxdID0gaW5zdGFuY2VbbGV2ZWxdO1xuICB9KTtcblxuICBpbnN0YW5jZS5sb2cgPSBsb2cuYmluZChudWxsLCBpbnN0YW5jZSwgeyBsZXZlbDogJ2luZm8nIH0pO1xuICBpbnN0YW5jZS5mdW5jdGlvbnMubG9nID0gaW5zdGFuY2UubG9nO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBhcmVMZXZlbHM6IGNvbXBhcmVMZXZlbHMsXG4gIGxvZzogbG9nLFxuICBydW5UcmFuc3BvcnQ6IHJ1blRyYW5zcG9ydCxcbiAgcnVuVHJhbnNwb3J0czogcnVuVHJhbnNwb3J0cyxcbn07XG5cbmZ1bmN0aW9uIGxvZyhlbGVjdHJvbkxvZywgb3B0aW9ucykge1xuICB2YXIgdHJhbnNwb3J0cyA9IGVsZWN0cm9uTG9nLnRyYW5zcG9ydHM7XG5cbiAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSxcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgIGxldmVsOiBvcHRpb25zLmxldmVsLFxuICAgIHNjb3BlOiBvcHRpb25zLnNjb3BlID8gb3B0aW9ucy5zY29wZS50b0pTT04oKSA6IG51bGwsXG4gICAgdmFyaWFibGVzOiBlbGVjdHJvbkxvZy52YXJpYWJsZXMsXG4gIH07XG5cbiAgcnVuVHJhbnNwb3J0cyh0cmFuc3BvcnRzLCBtZXNzYWdlLCBlbGVjdHJvbkxvZyk7XG59XG5cbmZ1bmN0aW9uIHJ1blRyYW5zcG9ydHModHJhbnNwb3J0cywgbWVzc2FnZSwgZWxlY3Ryb25Mb2cpIHtcbiAgZm9yICh2YXIgaSBpbiB0cmFuc3BvcnRzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0cmFuc3BvcnRzLCBpKSkge1xuICAgICAgcnVuVHJhbnNwb3J0KHRyYW5zcG9ydHNbaV0sIG1lc3NhZ2UsIGVsZWN0cm9uTG9nKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcnVuVHJhbnNwb3J0KHRyYW5zcG9ydCwgbWVzc2FnZSwgZWxlY3Ryb25Mb2cpIHtcbiAgaWYgKHR5cGVvZiB0cmFuc3BvcnQgIT09ICdmdW5jdGlvbicgfHwgdHJhbnNwb3J0LmxldmVsID09PSBmYWxzZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29tcGFyZUxldmVscyhlbGVjdHJvbkxvZy5sZXZlbHMsIHRyYW5zcG9ydC5sZXZlbCwgbWVzc2FnZS5sZXZlbCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtZXNzYWdlID0gcnVuSG9va3MoZWxlY3Ryb25Mb2cuaG9va3MsIHRyYW5zcG9ydCwgbWVzc2FnZSk7XG5cbiAgaWYgKG1lc3NhZ2UpIHtcbiAgICB0cmFuc3BvcnQobWVzc2FnZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZUxldmVscyhsZXZlbHMsIHBhc3NMZXZlbCwgY2hlY2tMZXZlbCkge1xuICB2YXIgcGFzcyA9IGxldmVscy5pbmRleE9mKHBhc3NMZXZlbCk7XG4gIHZhciBjaGVjayA9IGxldmVscy5pbmRleE9mKGNoZWNrTGV2ZWwpO1xuICBpZiAoY2hlY2sgPT09IC0xIHx8IHBhc3MgPT09IC0xKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gY2hlY2sgPD0gcGFzcztcbn1cblxuZnVuY3Rpb24gcnVuSG9va3MoaG9va3MsIHRyYW5zcG9ydCwgbWVzc2FnZSkge1xuICBpZiAoIWhvb2tzIHx8ICFob29rcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgbWVzc2FnZSA9IGhvb2tzW2ldKG1lc3NhZ2UsIHRyYW5zcG9ydCk7XG4gICAgaWYgKCFtZXNzYWdlKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbG9nID0gcmVxdWlyZSgnLi9sb2cnKS5sb2c7XG5cbm1vZHVsZS5leHBvcnRzID0gc2NvcGVGYWN0b3J5O1xuXG4vKipcbiAqIEBwYXJhbSB7RWxlY3Ryb25Mb2cuRWxlY3Ryb25Mb2d9IGVsZWN0cm9uTG9nXG4gKiBAcmV0dXJuIHtFbGVjdHJvbkxvZy5TY29wZX1cbiAqL1xuZnVuY3Rpb24gc2NvcGVGYWN0b3J5KGVsZWN0cm9uTG9nKSB7XG4gIHNjb3BlLmxhYmVsUGFkZGluZyA9IHRydWU7XG4gIHNjb3BlLmRlZmF1bHRMYWJlbCA9ICcnO1xuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBzY29wZS5tYXhMYWJlbExlbmd0aCA9IDA7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHt0eXBlb2YgZ2V0T3B0aW9uc31cbiAgICogQHBhY2thZ2VcbiAgICovXG4gIHNjb3BlLmdldE9wdGlvbnMgPSBnZXRPcHRpb25zO1xuXG4gIHJldHVybiBzY29wZTtcblxuICBmdW5jdGlvbiBzY29wZShsYWJlbCkge1xuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgIHRvSlNPTjogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9O1xuXG4gICAgZWxlY3Ryb25Mb2cubGV2ZWxzLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgICBpbnN0YW5jZVtsZXZlbF0gPSBsb2cuYmluZChudWxsLCBlbGVjdHJvbkxvZywge1xuICAgICAgICBsZXZlbDogbGV2ZWwsXG4gICAgICAgIHNjb3BlOiBpbnN0YW5jZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UubG9nID0gaW5zdGFuY2UuaW5mbztcblxuICAgIHNjb3BlLm1heExhYmVsTGVuZ3RoID0gTWF0aC5tYXgoc2NvcGUubWF4TGFiZWxMZW5ndGgsIGxhYmVsLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0TGFiZWw6IHNjb3BlLmRlZmF1bHRMYWJlbCxcbiAgICAgIGxhYmVsTGVuZ3RoOiBnZXRMYWJlbExlbmd0aCgpLFxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBnZXRMYWJlbExlbmd0aCgpIHtcbiAgICBpZiAoc2NvcGUubGFiZWxQYWRkaW5nID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gc2NvcGUubWF4TGFiZWxMZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHNjb3BlLmxhYmVsUGFkZGluZyA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2NvcGUubGFiZWxQYWRkaW5nID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHNjb3BlLmxhYmVsUGFkZGluZztcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0ID0gcmVxdWlyZSgnLi9vYmplY3QnKTtcbnZhciBzdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGUnKTtcbnZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVtcGxhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFwcGx5QW5zaVN0eWxlczogc3R5bGUuYXBwbHlBbnNpU3R5bGVzLFxuICBjb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzOiB0ZW1wbGF0ZS5jb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzLFxuICBjdXN0b21Gb3JtYXR0ZXJGYWN0b3J5OiBjdXN0b21Gb3JtYXR0ZXJGYWN0b3J5LFxuICBtYXhEZXB0aEZhY3Rvcnk6IG9iamVjdC5tYXhEZXB0aEZhY3RvcnksXG4gIHJlbW92ZVN0eWxlczogc3R5bGUucmVtb3ZlU3R5bGVzLFxuICB0b0pTT046IG9iamVjdC50b0pTT04sXG4gIHRvU3RyaW5nOiBvYmplY3QudG9TdHJpbmcsXG4gIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxufTtcblxuZnVuY3Rpb24gY3VzdG9tRm9ybWF0dGVyRmFjdG9yeShjdXN0b21Gb3JtYXQsIGNvbmNhdEZpcnN0LCBzY29wZU9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21Gb3JtYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGN1c3RvbVN0cmluZ0Zvcm1hdHRlcihkYXRhLCBtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gdHJhbnNmb3JtKG1lc3NhZ2UsIFtcbiAgICAgICAgdGVtcGxhdGUudGVtcGxhdGVWYXJpYWJsZXMsXG4gICAgICAgIHRlbXBsYXRlLnRlbXBsYXRlU2NvcGVGYWN0b3J5KHNjb3BlT3B0aW9ucyksXG4gICAgICAgIHRlbXBsYXRlLnRlbXBsYXRlRGF0ZSxcbiAgICAgICAgdGVtcGxhdGUudGVtcGxhdGVUZXh0LFxuICAgICAgICBjb25jYXRGaXJzdCAmJiB0ZW1wbGF0ZS5jb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzLFxuICAgICAgXSwgW2N1c3RvbUZvcm1hdF0uY29uY2F0KGRhdGEpKTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjdXN0b21Gb3JtYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3VzdG9tRnVuY3Rpb25Gb3JtYXR0ZXIoZGF0YSwgbWVzc2FnZSkge1xuICAgICAgdmFyIG1vZGlmaWVkTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UsIHsgZGF0YTogZGF0YSB9KTtcbiAgICAgIHZhciB0ZXh0cyA9IGN1c3RvbUZvcm1hdChtb2RpZmllZE1lc3NhZ2UsIGRhdGEpO1xuICAgICAgcmV0dXJuIFtdLmNvbmNhdCh0ZXh0cyk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBbXS5jb25jYXQoZGF0YSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybShtZXNzYWdlLCB0cmFuc2Zvcm1lcnMsIGluaXRpYWxEYXRhKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1lcnMucmVkdWNlKGZ1bmN0aW9uIChkYXRhLCB0cmFuc2Zvcm1lcikge1xuICAgIGlmICh0eXBlb2YgdHJhbnNmb3JtZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm1lcihkYXRhLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSwgaW5pdGlhbERhdGEgfHwgbWVzc2FnZS5kYXRhKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYXhEZXB0aEZhY3Rvcnk6IG1heERlcHRoRmFjdG9yeSxcbiAgc2VyaWFsaXplOiBzZXJpYWxpemUsXG4gIHRvSlNPTjogdG9KU09OLFxuICB0b1N0cmluZzogdG9TdHJpbmcsXG59O1xuXG5mdW5jdGlvbiBjcmVhdGVTZXJpYWxpemVyKCkge1xuICB2YXIgc2VlbiA9IGNyZWF0ZVdlYWtTZXQoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHNlZW4uaGFzKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBzZWVuLmFkZCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlcmlhbGl6ZShrZXksIHZhbHVlKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAcmV0dXJuIHtXZWFrU2V0PG9iamVjdD59XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVdlYWtTZXQoKSB7XG4gIGlmICh0eXBlb2YgV2Vha1NldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFdlYWtTZXQoKTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IFtdO1xuICB0aGlzLmFkZCA9IGZ1bmN0aW9uICh2YWx1ZSkgeyBjYWNoZS5wdXNoKHZhbHVlKSB9O1xuICB0aGlzLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gY2FjaGUuaW5kZXhPZih2YWx1ZSkgIT09IC0xIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIG1heERlcHRoKGRhdGEsIGRlcHRoKSB7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRlcHRoIDwgMSkge1xuICAgIGlmIChkYXRhLm1hcCkgcmV0dXJuICdbYXJyYXldJztcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSByZXR1cm4gJ1tvYmplY3RdJztcblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhLm1hcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBkYXRhLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHJldHVybiBtYXhEZXB0aChjaGlsZCwgZGVwdGggLSAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvLyBub2luc3BlY3Rpb24gUG9pbnRsZXNzQm9vbGVhbkV4cHJlc3Npb25KU1xuICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIG5ld0pzb24gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGF0YSwgaSkpIGNvbnRpbnVlO1xuICAgIG5ld0pzb25baV0gPSBtYXhEZXB0aChkYXRhW2ldLCBkZXB0aCAtIDEpO1xuICB9XG5cbiAgcmV0dXJuIG5ld0pzb247XG59XG5cbmZ1bmN0aW9uIG1heERlcHRoRmFjdG9yeShkZXB0aCkge1xuICBkZXB0aCA9IGRlcHRoIHx8IDY7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIG1heERlcHRoRnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBtYXhEZXB0aChkYXRhLCBkZXB0aCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShrZXksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiAodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSkgfHwgJ0Vycm9yJyxcbiAgICAgIH0sXG4gICAgICB2YWx1ZSxcbiAgICAgIHsgc3RhY2s6IHZhbHVlLnN0YWNrIH1cbiAgICApO1xuXG4gICAgaWYgKCFvYmplY3Quc3RhY2spIHtcbiAgICAgIG9iamVjdC5tZXNzYWdlID0gdmFsdWUubWVzc2FnZTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUuY29uc3RydWN0b3IgJiYgdmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgb2JqZWN0LmNvbnN0cnVjdG9yID0gdmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlLnRvSlNPTigpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiAnW2Z1bmN0aW9uXSAnICsgdmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gdG9KU09OKGRhdGEpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSwgY3JlYXRlU2VyaWFsaXplcigpKSk7XG59XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKGRhdGEpIHtcbiAgdmFyIHNpbXBsaWZpZWREYXRhID0gZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAoaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGl0ZW0sIGNyZWF0ZVNlcmlhbGl6ZXIoKSwgJyAgJykpO1xuICB9KTtcblxuICByZXR1cm4gdXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgc2ltcGxpZmllZERhdGEpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlBbnNpU3R5bGVzOiBhcHBseUFuc2lTdHlsZXMsXG4gIHJlbW92ZVN0eWxlczogcmVtb3ZlU3R5bGVzLFxuICB0cmFuc2Zvcm1TdHlsZXM6IHRyYW5zZm9ybVN0eWxlcyxcbn07XG5cbnZhciBBTlNJX0NPTE9SUyA9IHtcbiAgdW5zZXQ6ICdcXHgxYlswbScsXG4gIGJsYWNrOiAnXFx4MWJbMzBtJyxcbiAgcmVkOiAnXFx4MWJbMzFtJyxcbiAgZ3JlZW46ICdcXHgxYlszMm0nLFxuICB5ZWxsb3c6ICdcXHgxYlszM20nLFxuICBibHVlOiAnXFx4MWJbMzRtJyxcbiAgbWFnZW50YTogJ1xceDFiWzM1bScsXG4gIGN5YW46ICdcXHgxYlszNm0nLFxuICB3aGl0ZTogJ1xceDFiWzM3bScsXG59O1xuXG5mdW5jdGlvbiBhcHBseUFuc2lTdHlsZXMoZGF0YSkge1xuICByZXR1cm4gdHJhbnNmb3JtU3R5bGVzKGRhdGEsIHN0eWxlVG9BbnNpLCByZXNldEFuc2lTdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlVG9BbnNpKHN0eWxlKSB7XG4gIHZhciBjb2xvciA9IHN0eWxlLnJlcGxhY2UoL2NvbG9yOlxccyooXFx3KykuKi8sICckMScpLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBBTlNJX0NPTE9SU1tjb2xvcl0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlc2V0QW5zaVN0eWxlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nICsgQU5TSV9DT0xPUlMudW5zZXQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlcyhkYXRhKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1TdHlsZXMoZGF0YSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gJycgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVN0eWxlcyhkYXRhLCBvblN0eWxlRm91bmQsIG9uU3R5bGVBcHBsaWVkKSB7XG4gIHZhciBmb3VuZFN0eWxlcyA9IHt9O1xuXG4gIHJldHVybiBkYXRhLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBpdGVtLCBpbmRleCwgYXJyYXkpIHtcbiAgICBpZiAoZm91bmRTdHlsZXNbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciB2YWx1ZUluZGV4ID0gaW5kZXg7XG4gICAgICB2YXIgc3R5bGVBcHBsaWVkID0gZmFsc2U7XG5cbiAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoLyVbMWNkZmlPb3NdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICB2YWx1ZUluZGV4ICs9IDE7XG5cbiAgICAgICAgaWYgKG1hdGNoICE9PSAnJWMnKSB7XG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN0eWxlID0gYXJyYXlbdmFsdWVJbmRleF07XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgZm91bmRTdHlsZXNbdmFsdWVJbmRleF0gPSB0cnVlO1xuICAgICAgICAgIHN0eWxlQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIG9uU3R5bGVGb3VuZChzdHlsZSwgaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHN0eWxlQXBwbGllZCAmJiBvblN0eWxlQXBwbGllZCkge1xuICAgICAgICBpdGVtID0gb25TdHlsZUFwcGxpZWQoaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgW10pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29uY2F0Rmlyc3RTdHJpbmdFbGVtZW50czogY29uY2F0Rmlyc3RTdHJpbmdFbGVtZW50cyxcbiAgZm9ybWF0RGF0ZTogZm9ybWF0RGF0ZSxcbiAgZm9ybWF0VGltZVpvbmU6IGZvcm1hdFRpbWVab25lLFxuICBwYWQ6IHBhZCxcbiAgcGFkU3RyaW5nOiBwYWRTdHJpbmcsXG4gIHRlbXBsYXRlRGF0ZTogdGVtcGxhdGVEYXRlLFxuICB0ZW1wbGF0ZVZhcmlhYmxlczogdGVtcGxhdGVWYXJpYWJsZXMsXG4gIHRlbXBsYXRlU2NvcGVGYWN0b3J5OiB0ZW1wbGF0ZVNjb3BlRmFjdG9yeSxcbiAgdGVtcGxhdGVUZXh0OiB0ZW1wbGF0ZVRleHQsXG59O1xuXG4vKipcbiAqIFRoZSBmaXJzdCBhcmd1bWVudCBvZiBjb25zb2xlLmxvZyBtYXkgY29udGFpbiB0ZW1wbGF0ZXMuIEluIHRoZSBsaWJyYXJ5XG4gKiB0aGUgZmlyc3QgZWxlbWVudCBpcyBhIHN0cmluZyByZWxhdGVkIHRvIHRyYW5zcG9ydHMuY29uc29sZS5mb3JtYXQuIFNvXG4gKiB0aGlzIGZ1bmN0aW9uIGNvbmNhdGVuYXRlcyBmaXJzdCB0d28gZWxlbWVudHMgdG8gbWFrZSB0ZW1wbGF0ZXMgbGlrZSAlZFxuICogd29ya1xuICogQHBhcmFtIHsqW119IGRhdGFcbiAqIEByZXR1cm4geypbXX1cbiAqL1xuZnVuY3Rpb24gY29uY2F0Rmlyc3RTdHJpbmdFbGVtZW50cyhkYXRhKSB7XG4gIGlmICh0eXBlb2YgZGF0YVswXSAhPT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGFbMV0gIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGF0YVswXS5tYXRjaCgvJVsxY2RmaU9vc10vKSkge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZGF0YVsxXSA9IGRhdGFbMF0gKyAnICcgKyBkYXRhWzFdO1xuICBkYXRhLnNoaWZ0KCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUodGVtcGxhdGUsIGRhdGUpIHtcbiAgcmV0dXJuIHRlbXBsYXRlXG4gICAgLnJlcGxhY2UoJ3t5fScsIFN0cmluZyhkYXRlLmdldEZ1bGxZZWFyKCkpKVxuICAgIC5yZXBsYWNlKCd7bX0nLCBwYWQoZGF0ZS5nZXRNb250aCgpICsgMSkpXG4gICAgLnJlcGxhY2UoJ3tkfScsIHBhZChkYXRlLmdldERhdGUoKSkpXG4gICAgLnJlcGxhY2UoJ3tofScsIHBhZChkYXRlLmdldEhvdXJzKCkpKVxuICAgIC5yZXBsYWNlKCd7aX0nLCBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpKVxuICAgIC5yZXBsYWNlKCd7c30nLCBwYWQoZGF0ZS5nZXRTZWNvbmRzKCkpKVxuICAgIC5yZXBsYWNlKCd7bXN9JywgcGFkKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCksIDMpKVxuICAgIC5yZXBsYWNlKCd7en0nLCBmb3JtYXRUaW1lWm9uZShkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpKVxuICAgIC5yZXBsYWNlKCd7aXNvfScsIGRhdGUudG9JU09TdHJpbmcoKSk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWVab25lKG1pbnV0ZXNPZmZzZXQpIHtcbiAgdmFyIG0gPSBNYXRoLmFicyhtaW51dGVzT2Zmc2V0KTtcbiAgcmV0dXJuIChtaW51dGVzT2Zmc2V0ID49IDAgPyAnLScgOiAnKycpXG4gICAgKyBwYWQoTWF0aC5mbG9vcihtIC8gNjApKSArICc6J1xuICAgICsgcGFkKG0gJSA2MCk7XG59XG5cbmZ1bmN0aW9uIHBhZChudW1iZXIsIHplcm9zKSB7XG4gIHplcm9zID0gemVyb3MgfHwgMjtcbiAgcmV0dXJuIChuZXcgQXJyYXkoemVyb3MgKyAxKS5qb2luKCcwJykgKyBudW1iZXIpLnN1YnN0cigtemVyb3MsIHplcm9zKTtcbn1cblxuZnVuY3Rpb24gcGFkU3RyaW5nKHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCB2YWx1ZS5sZW5ndGgpO1xuICB2YXIgcGFkVmFsdWUgPSBBcnJheShsZW5ndGggKyAxKS5qb2luKCcgJyk7XG4gIHJldHVybiAodmFsdWUgKyBwYWRWYWx1ZSkuc3Vic3RyaW5nKDAsIGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIHRlbXBsYXRlRGF0ZShkYXRhLCBtZXNzYWdlKSB7XG4gIHZhciB0ZW1wbGF0ZSA9IGRhdGFbMF07XG4gIGlmICh0eXBlb2YgdGVtcGxhdGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBkYXRhWzBdID0gZm9ybWF0RGF0ZSh0ZW1wbGF0ZSwgbWVzc2FnZS5kYXRlKTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogQHBhcmFtIHt7IGxhYmVsTGVuZ3RoOiBudW1iZXIsIGRlZmF1bHRMYWJlbDogc3RyaW5nIH19IG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gdGVtcGxhdGVTY29wZUZhY3Rvcnkob3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxhYmVsTGVuZ3RoID0gb3B0aW9ucy5sYWJlbExlbmd0aCB8fCAwO1xuXG4gIHJldHVybiBmdW5jdGlvbiB0ZW1wbGF0ZVNjb3BlKGRhdGEsIG1lc3NhZ2UpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSBkYXRhWzBdO1xuICAgIHZhciBsYWJlbCA9IG1lc3NhZ2Uuc2NvcGUgJiYgbWVzc2FnZS5zY29wZS5sYWJlbDtcblxuICAgIGlmICghbGFiZWwpIHtcbiAgICAgIGxhYmVsID0gb3B0aW9ucy5kZWZhdWx0TGFiZWw7XG4gICAgfVxuXG4gICAgdmFyIHNjb3BlVGV4dDtcbiAgICBpZiAobGFiZWwgPT09ICcnKSB7XG4gICAgICBzY29wZVRleHQgPSBsYWJlbExlbmd0aCA+IDAgPyBwYWRTdHJpbmcoJycsIGxhYmVsTGVuZ3RoICsgMykgOiAnJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHNjb3BlVGV4dCA9IHBhZFN0cmluZygnICgnICsgbGFiZWwgKyAnKScsIGxhYmVsTGVuZ3RoICsgMyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjb3BlVGV4dCA9ICcnO1xuICAgIH1cblxuICAgIGRhdGFbMF0gPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7c2NvcGV9Jywgc2NvcGVUZXh0KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGVtcGxhdGVWYXJpYWJsZXMoZGF0YSwgbWVzc2FnZSkge1xuICB2YXIgdGVtcGxhdGUgPSBkYXRhWzBdO1xuICB2YXIgdmFyaWFibGVzID0gbWVzc2FnZS52YXJpYWJsZXM7XG5cbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycgfHwgIW1lc3NhZ2UudmFyaWFibGVzKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBmb3IgKHZhciBpIGluIHZhcmlhYmxlcykge1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhcmlhYmxlcywgaSkpIGNvbnRpbnVlO1xuICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZSgneycgKyBpICsgJ30nLCB2YXJpYWJsZXNbaV0pO1xuICB9XG5cbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7bGV2ZWx9JywgbWVzc2FnZS5sZXZlbCk7XG5cbiAgZGF0YVswXSA9IHRlbXBsYXRlO1xuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gdGVtcGxhdGVUZXh0KGRhdGEpIHtcbiAgdmFyIHRlbXBsYXRlID0gZGF0YVswXTtcbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciB0ZXh0VHBsUG9zaXRpb24gPSB0ZW1wbGF0ZS5sYXN0SW5kZXhPZigne3RleHR9Jyk7XG4gIGlmICh0ZXh0VHBsUG9zaXRpb24gPT09IHRlbXBsYXRlLmxlbmd0aCAtIDYpIHtcbiAgICBkYXRhWzBdID0gdGVtcGxhdGUucmVwbGFjZSgvXFxzP3t0ZXh0fS8sICcnKTtcbiAgICBpZiAoZGF0YVswXSA9PT0gJycpIHtcbiAgICAgIGRhdGEuc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciB0ZW1wbGF0ZVBpZWNlcyA9IHRlbXBsYXRlLnNwbGl0KCd7dGV4dH0nKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICh0ZW1wbGF0ZVBpZWNlc1swXSAhPT0gJycpIHtcbiAgICByZXN1bHQucHVzaCh0ZW1wbGF0ZVBpZWNlc1swXSk7XG4gIH1cblxuICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGRhdGEuc2xpY2UoMSkpO1xuXG4gIGlmICh0ZW1wbGF0ZVBpZWNlc1sxXSAhPT0gJycpIHtcbiAgICByZXN1bHQucHVzaCh0ZW1wbGF0ZVBpZWNlc1sxXSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1zcGFjZXMsIG5vLWNvbnNvbGUgKi9cblxudmFyIHRyYW5zZm9ybSA9IHJlcXVpcmUoJy4uL3RyYW5zZm9ybScpO1xuXG52YXIgb3JpZ2luYWwgPSB7XG4gIGNvbnRleHQ6IGNvbnNvbGUsXG4gIGVycm9yOiAgIGNvbnNvbGUuZXJyb3IsXG4gIHdhcm46ICAgIGNvbnNvbGUud2FybixcbiAgaW5mbzogICAgY29uc29sZS5pbmZvLFxuICB2ZXJib3NlOiBjb25zb2xlLnZlcmJvc2UsXG4gIGRlYnVnOiAgIGNvbnNvbGUuZGVidWcsXG4gIHNpbGx5OiAgIGNvbnNvbGUuc2lsbHksXG4gIGxvZzogICAgIGNvbnNvbGUubG9nLFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb25zb2xlVHJhbnNwb3J0RmFjdG9yeTtcbm1vZHVsZS5leHBvcnRzLnRyYW5zZm9ybVJlbmRlcmVyID0gdHJhbnNmb3JtUmVuZGVyZXI7XG5tb2R1bGUuZXhwb3J0cy50cmFuc2Zvcm1NYWluID0gdHJhbnNmb3JtTWFpbjtcblxudmFyIHNlcGFyYXRvciA9IHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicgPyAnPicgOiAn4oC6JztcbnZhciBERUZBVUxUX0ZPUk1BVCA9IHtcbiAgYnJvd3NlcjogJyVje2h9OntpfTp7c30ue21zfXtzY29wZX0lYyAnICsgc2VwYXJhdG9yICsgJyB7dGV4dH0nLFxuICByZW5kZXJlcjogJ3tofTp7aX06e3N9Lnttc317c2NvcGV9IOKAuiB7dGV4dH0nLFxuICB3b3JrZXI6ICd7aH06e2l9OntzfS57bXN9e3Njb3BlfSDigLoge3RleHR9Jyxcbn07XG5cbmZ1bmN0aW9uIGNvbnNvbGVUcmFuc3BvcnRGYWN0b3J5KGVsZWN0cm9uTG9nKSB7XG4gIHRyYW5zcG9ydC5sZXZlbCAgPSAnc2lsbHknO1xuICB0cmFuc3BvcnQudXNlU3R5bGVzID0gcHJvY2Vzcy5lbnYuRk9SQ0VfU1RZTEVTO1xuICB0cmFuc3BvcnQuZm9ybWF0ID0gREVGQVVMVF9GT1JNQVRbcHJvY2Vzcy50eXBlXSB8fCBERUZBVUxUX0ZPUk1BVC5icm93c2VyO1xuXG4gIHJldHVybiB0cmFuc3BvcnQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNwb3J0KG1lc3NhZ2UpIHtcbiAgICB2YXIgc2NvcGVPcHRpb25zID0gZWxlY3Ryb25Mb2cuc2NvcGUuZ2V0T3B0aW9ucygpO1xuXG4gICAgdmFyIGRhdGE7XG4gICAgaWYgKHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCBwcm9jZXNzLnR5cGUgPT09ICd3b3JrZXInKSB7XG4gICAgICBkYXRhID0gdHJhbnNmb3JtUmVuZGVyZXIobWVzc2FnZSwgdHJhbnNwb3J0LCBzY29wZU9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdHJhbnNmb3JtTWFpbihtZXNzYWdlLCB0cmFuc3BvcnQsIHNjb3BlT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgY29uc29sZUxvZyhtZXNzYWdlLmxldmVsLCBkYXRhKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1SZW5kZXJlcihtZXNzYWdlLCB0cmFuc3BvcnQsIHNjb3BlT3B0aW9ucykge1xuICByZXR1cm4gdHJhbnNmb3JtLnRyYW5zZm9ybShtZXNzYWdlLCBbXG4gICAgdHJhbnNmb3JtLmN1c3RvbUZvcm1hdHRlckZhY3RvcnkodHJhbnNwb3J0LmZvcm1hdCwgdHJ1ZSwgc2NvcGVPcHRpb25zKSxcbiAgXSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1haW4obWVzc2FnZSwgdHJhbnNwb3J0LCBzY29wZU9wdGlvbnMpIHtcbiAgdmFyIHVzZVN0eWxlcyA9IGNhblVzZVN0eWxlcyh0cmFuc3BvcnQudXNlU3R5bGVzLCBtZXNzYWdlLmxldmVsKTtcblxuICByZXR1cm4gdHJhbnNmb3JtLnRyYW5zZm9ybShtZXNzYWdlLCBbXG4gICAgYWRkVGVtcGxhdGVDb2xvckZhY3RvcnkodHJhbnNwb3J0LmZvcm1hdCksXG4gICAgdHJhbnNmb3JtLmN1c3RvbUZvcm1hdHRlckZhY3RvcnkodHJhbnNwb3J0LmZvcm1hdCwgZmFsc2UsIHNjb3BlT3B0aW9ucyksXG4gICAgdXNlU3R5bGVzID8gdHJhbnNmb3JtLmFwcGx5QW5zaVN0eWxlcyA6IHRyYW5zZm9ybS5yZW1vdmVTdHlsZXMsXG4gICAgdHJhbnNmb3JtLmNvbmNhdEZpcnN0U3RyaW5nRWxlbWVudHMsXG4gICAgdHJhbnNmb3JtLm1heERlcHRoRmFjdG9yeSg0KSxcbiAgICB0cmFuc2Zvcm0udG9KU09OLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkVGVtcGxhdGVDb2xvckZhY3RvcnkoZm9ybWF0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBhZGRUZW1wbGF0ZUNvbG9ycyhkYXRhLCBtZXNzYWdlKSB7XG4gICAgaWYgKGZvcm1hdCAhPT0gREVGQVVMVF9GT1JNQVQuYnJvd3Nlcikge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsnY29sb3I6JyArIGxldmVsVG9TdHlsZShtZXNzYWdlLmxldmVsKSwgJ2NvbG9yOnVuc2V0J10uY29uY2F0KGRhdGEpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjYW5Vc2VTdHlsZXModXNlU3R5bGVWYWx1ZSwgbGV2ZWwpIHtcbiAgaWYgKHVzZVN0eWxlVmFsdWUgPT09IHRydWUgfHwgdXNlU3R5bGVWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gdXNlU3R5bGVWYWx1ZTtcbiAgfVxuXG4gIHZhciB1c2VTdGRlcnIgPSBsZXZlbCA9PT0gJ2Vycm9yJyB8fCBsZXZlbCA9PT0gJ3dhcm4nO1xuICB2YXIgc3RyZWFtID0gdXNlU3RkZXJyID8gcHJvY2Vzcy5zdGRlcnIgOiBwcm9jZXNzLnN0ZG91dDtcbiAgcmV0dXJuIHN0cmVhbSAmJiBzdHJlYW0uaXNUVFk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVMb2cobGV2ZWwsIGFyZ3MpIHtcbiAgaWYgKG9yaWdpbmFsW2xldmVsXSkge1xuICAgIG9yaWdpbmFsW2xldmVsXS5hcHBseShvcmlnaW5hbC5jb250ZXh0LCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICBvcmlnaW5hbC5sb2cuYXBwbHkob3JpZ2luYWwuY29udGV4dCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGV2ZWxUb1N0eWxlKGxldmVsKSB7XG4gIHN3aXRjaCAobGV2ZWwpIHtcbiAgICBjYXNlICdlcnJvcic6IHJldHVybiAncmVkJztcbiAgICBjYXNlICd3YXJuJzogIHJldHVybiAneWVsbG93JztcbiAgICBjYXNlICdpbmZvJzogIHJldHVybiAnY3lhbic7XG4gICAgZGVmYXVsdDogICAgICByZXR1cm4gJ3Vuc2V0JztcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIG9zID0gcmVxdWlyZSgnb3MnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBGaWxlOiBGaWxlLFxuICBGaWxlUmVnaXN0cnk6IEZpbGVSZWdpc3RyeSxcbiAgTnVsbEZpbGU6IE51bGxGaWxlLFxufTtcblxuLyoqXG4gKiBGaWxlIG1hbmlwdWxhdGlvbnMgb24gZmlsZXN5c3RlbVxuICogQGNsYXNzXG4gKiBAZXh0ZW5kcyBFdmVudEVtaXR0ZXJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGhcbiAqIEBwYXJhbSB7V3JpdGVPcHRpb25zfSBbd3JpdGVPcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbd3JpdGVBc3luY11cbiAqL1xuZnVuY3Rpb24gRmlsZShmaWxlUGF0aCwgd3JpdGVPcHRpb25zLCB3cml0ZUFzeW5jKSB7XG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHRoaXMucGF0aCA9IGZpbGVQYXRoO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5pbml0aWFsU2l6ZSA9IHVuZGVmaW5lZDtcblxuICAvKipcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICB0aGlzLmJ5dGVzV3JpdHRlbiA9IDA7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy53cml0ZUFzeW5jID0gQm9vbGVhbih3cml0ZUFzeW5jKTtcblxuICAvKipcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5hc3luY1dyaXRlUXVldWUgPSBbXTtcblxuICAvKipcbiAgICogQHR5cGUge1dyaXRlT3B0aW9uc31cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHRoaXMud3JpdGVPcHRpb25zID0gd3JpdGVPcHRpb25zIHx8IHtcbiAgICBmbGFnOiAnYScsXG4gICAgbW9kZTogNDM4LCAvLyAwNjY2XG4gICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgfTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3NpemUnLCB7XG4gICAgZ2V0OiB0aGlzLmdldFNpemUuYmluZCh0aGlzKSxcbiAgfSk7XG59XG5cbnV0aWwuaW5oZXJpdHMoRmlsZSwgRXZlbnRFbWl0dGVyKTtcblxuRmlsZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgZnMud3JpdGVGaWxlU3luYyh0aGlzLnBhdGgsICcnLCB7XG4gICAgICBtb2RlOiB0aGlzLndyaXRlT3B0aW9ucy5tb2RlLFxuICAgICAgZmxhZzogJ3cnLFxuICAgIH0pO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlLmNvZGUgPT09ICdFTk9FTlQnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZSwgdGhpcyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG5GaWxlLnByb3RvdHlwZS5jcm9wID0gZnVuY3Rpb24gKGJ5dGVzQWZ0ZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudCA9IHJlYWRGaWxlU3luY0Zyb21FbmQodGhpcy5wYXRoLCBieXRlc0FmdGVyIHx8IDQwOTYpO1xuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB0aGlzLndyaXRlTGluZSgnW2xvZyBjcm9wcGVkXScgKyBvcy5FT0wgKyBjb250ZW50KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMuZW1pdChcbiAgICAgICdlcnJvcicsXG4gICAgICBuZXcgRXJyb3IoJ0NvdWxkblxcJ3QgY3JvcCBmaWxlICcgKyB0aGlzLnBhdGggKyAnLiAnICsgZS5tZXNzYWdlKSxcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG59O1xuXG5GaWxlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMucGF0aDtcbn07XG5cbi8qKlxuICogQHBhY2thZ2VcbiAqL1xuRmlsZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuaW5pdGlhbFNpemUgPSB1bmRlZmluZWQ7XG4gIHRoaXMuYnl0ZXNXcml0dGVuID0gMDtcbn07XG5cbi8qKlxuICogQHBhY2thZ2VcbiAqL1xuRmlsZS5wcm90b3R5cGUud3JpdGVMaW5lID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgdGV4dCArPSBvcy5FT0w7XG5cbiAgaWYgKHRoaXMud3JpdGVBc3luYykge1xuICAgIHRoaXMuYXN5bmNXcml0ZVF1ZXVlLnB1c2godGV4dCk7XG4gICAgdGhpcy5uZXh0QXN5bmNXcml0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZnMud3JpdGVGaWxlU3luYyh0aGlzLnBhdGgsIHRleHQsIHRoaXMud3JpdGVPcHRpb25zKTtcbiAgICB0aGlzLmluY3JlYXNlQnl0ZXNXcml0dGVuQ291bnRlcih0ZXh0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMuZW1pdChcbiAgICAgICdlcnJvcicsXG4gICAgICBuZXcgRXJyb3IoJ0NvdWxkblxcJ3Qgd3JpdGUgdG8gJyArIHRoaXMucGF0aCArICcuICcgKyBlLm1lc3NhZ2UpLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cbn07XG5cbi8qKlxuICogQHJldHVybiB7bnVtYmVyfVxuICogQHByb3RlY3RlZFxuICovXG5GaWxlLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5pbml0aWFsU2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBzdGF0cyA9IGZzLnN0YXRTeW5jKHRoaXMucGF0aCk7XG4gICAgICB0aGlzLmluaXRpYWxTaXplID0gc3RhdHMuc2l6ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmluaXRpYWxTaXplID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5pbml0aWFsU2l6ZSArIHRoaXMuYnl0ZXNXcml0dGVuO1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHBhY2thZ2VcbiAqL1xuRmlsZS5wcm90b3R5cGUuaXNOdWxsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbkZpbGUucHJvdG90eXBlLmluY3JlYXNlQnl0ZXNXcml0dGVuQ291bnRlciA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIHRoaXMuYnl0ZXNXcml0dGVuICs9IEJ1ZmZlci5ieXRlTGVuZ3RoKHRleHQsIHRoaXMud3JpdGVPcHRpb25zLmVuY29kaW5nKTtcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuRmlsZS5wcm90b3R5cGUubmV4dEFzeW5jV3JpdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBmaWxlID0gdGhpcztcblxuICBpZiAodGhpcy5hc3luY1dyaXRlUXVldWUubGVuZ3RoIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0ZXh0ID0gdGhpcy5hc3luY1dyaXRlUXVldWUuc2hpZnQoKTtcblxuICBmcy53cml0ZUZpbGUodGhpcy5wYXRoLCB0ZXh0LCB0aGlzLndyaXRlT3B0aW9ucywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZmlsZS5lbWl0KFxuICAgICAgICAnZXJyb3InLFxuICAgICAgICBuZXcgRXJyb3IoJ0NvdWxkblxcJ3Qgd3JpdGUgdG8gJyArIGZpbGUucGF0aCArICcuICcgKyBlLm1lc3NhZ2UpLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWxlLmluY3JlYXNlQnl0ZXNXcml0dGVuQ291bnRlcih0ZXh0KTtcbiAgICB9XG5cbiAgICBmaWxlLm5leHRBc3luY1dyaXRlKCk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBGaWxlIG1hbmlwdWxhdGlvbnMgb24gZmlsZXN5c3RlbVxuICogQGNsYXNzXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2l6ZVxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gKi9cbmZ1bmN0aW9uIE51bGxGaWxlKGZpbGVQYXRoKSB7XG4gIEZpbGUuY2FsbCh0aGlzLCBmaWxlUGF0aCk7XG59XG5cbnV0aWwuaW5oZXJpdHMoTnVsbEZpbGUsIEZpbGUpO1xuXG5OdWxsRmlsZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7fTtcbk51bGxGaWxlLnByb3RvdHlwZS5jcm9wID0gZnVuY3Rpb24gKCkge307XG5OdWxsRmlsZS5wcm90b3R5cGUud3JpdGVMaW5lID0gZnVuY3Rpb24gKCkge307XG5OdWxsRmlsZS5wcm90b3R5cGUuZ2V0U2l6ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcbk51bGxGaWxlLnByb3RvdHlwZS5pc051bGwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH07XG5cbi8qKlxuICogQ29sbGVjdGlvbiwga2V5IGlzIGEgZmlsZSBwYXRoLCB2YWx1ZSBpcyBhIEZpbGUgaW5zdGFuY2VcbiAqIEBjbGFzc1xuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBGaWxlUmVnaXN0cnkoKSB7XG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpO1xuICB0aGlzLnN0b3JlID0ge307XG5cbiAgdGhpcy5lbWl0RXJyb3IgPSB0aGlzLmVtaXRFcnJvci5iaW5kKHRoaXMpO1xufVxuXG51dGlsLmluaGVyaXRzKEZpbGVSZWdpc3RyeSwgRXZlbnRFbWl0dGVyKTtcblxuLyoqXG4gKiBQcm92aWRlIGEgRmlsZSBvYmplY3QgY29ycmVzcG9uZGluZyB0byB0aGUgZmlsZVBhdGhcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aFxuICogQHBhcmFtIHtXcml0ZU9wdGlvbnN9IFt3cml0ZU9wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc3luY11cbiAqIEByZXR1cm4ge0ZpbGV9XG4gKi9cbkZpbGVSZWdpc3RyeS5wcm90b3R5cGUucHJvdmlkZSA9IGZ1bmN0aW9uIChmaWxlUGF0aCwgd3JpdGVPcHRpb25zLCBhc3luYykge1xuICB2YXIgZmlsZTtcbiAgdHJ5IHtcbiAgICBmaWxlUGF0aCA9IHBhdGgucmVzb2x2ZShmaWxlUGF0aCk7XG5cbiAgICBpZiAodGhpcy5zdG9yZVtmaWxlUGF0aF0pIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3JlW2ZpbGVQYXRoXTtcbiAgICB9XG5cbiAgICBmaWxlID0gdGhpcy5jcmVhdGVGaWxlKGZpbGVQYXRoLCB3cml0ZU9wdGlvbnMsIEJvb2xlYW4oYXN5bmMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGZpbGUgPSBuZXcgTnVsbEZpbGUoZmlsZVBhdGgpO1xuICAgIHRoaXMuZW1pdEVycm9yKGUsIGZpbGUpO1xuICB9XG5cbiAgZmlsZS5vbignZXJyb3InLCB0aGlzLmVtaXRFcnJvcik7XG4gIHRoaXMuc3RvcmVbZmlsZVBhdGhdID0gZmlsZTtcbiAgcmV0dXJuIGZpbGU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aFxuICogQHBhcmFtIHtXcml0ZU9wdGlvbnN9IHdyaXRlT3B0aW9uc1xuICogQHBhcmFtIHtib29sZWFufSBhc3luY1xuICogQHJldHVybiB7RmlsZX1cbiAqIEBwcml2YXRlXG4gKi9cbkZpbGVSZWdpc3RyeS5wcm90b3R5cGUuY3JlYXRlRmlsZSA9IGZ1bmN0aW9uIChmaWxlUGF0aCwgd3JpdGVPcHRpb25zLCBhc3luYykge1xuICB0aGlzLnRlc3RGaWxlV3JpdGluZyhmaWxlUGF0aCk7XG4gIHJldHVybiBuZXcgRmlsZShmaWxlUGF0aCwgd3JpdGVPcHRpb25zLCBhc3luYyk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gKiBAcGFyYW0ge0ZpbGV9IGZpbGVcbiAqIEBwcml2YXRlXG4gKi9cbkZpbGVSZWdpc3RyeS5wcm90b3R5cGUuZW1pdEVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBmaWxlKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvciwgZmlsZSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aFxuICogQHByaXZhdGVcbiAqL1xuRmlsZVJlZ2lzdHJ5LnByb3RvdHlwZS50ZXN0RmlsZVdyaXRpbmcgPSBmdW5jdGlvbiAoZmlsZVBhdGgpIHtcbiAgbWtEaXIocGF0aC5kaXJuYW1lKGZpbGVQYXRoKSk7XG4gIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsICcnLCB7IGZsYWc6ICdhJyB9KTtcbn07XG5cbmZ1bmN0aW9uIG1rRGlyKGRpclBhdGgpIHtcbiAgaWYgKGNoZWNrTm9kZUpzVmVyc2lvbigxMC4xMikpIHtcbiAgICBmcy5ta2RpclN5bmMoZGlyUGF0aCwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB0cnkge1xuICAgIGZzLm1rZGlyU3luYyhkaXJQYXRoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgIHJldHVybiBta0RpcihwYXRoLmRpcm5hbWUoZGlyUGF0aCkpICYmIG1rRGlyKGRpclBhdGgpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpZiAoZnMuc3RhdFN5bmMoZGlyUGF0aCkuaXNEaXJlY3RvcnkoKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEV4Y2VwdGlvbkNhdWdodExvY2FsbHlKU1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tOb2RlSnNWZXJzaW9uKHZlcnNpb24pIHtcbiAgaWYgKCFwcm9jZXNzLnZlcnNpb25zKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIG5vZGVWZXJzaW9uID0gTnVtYmVyKFxuICAgIHByb2Nlc3MudmVyc2lvbi5tYXRjaCgvXnYoXFxkK1xcLlxcZCspLylbMV0ucmVwbGFjZSgvXFwuKFxcZCkkLywgJy4wJDEnKVxuICApO1xuXG4gIHJldHVybiBub2RlVmVyc2lvbiA+PSB2ZXJzaW9uO1xufVxuXG5mdW5jdGlvbiByZWFkRmlsZVN5bmNGcm9tRW5kKGZpbGVQYXRoLCBieXRlc0NvdW50KSB7XG4gIHZhciBidWZmZXIgPSBCdWZmZXIuYWxsb2MoYnl0ZXNDb3VudCk7XG4gIHZhciBzdGF0cyA9IGZzLnN0YXRTeW5jKGZpbGVQYXRoKTtcblxuICB2YXIgcmVhZExlbmd0aCA9IE1hdGgubWluKHN0YXRzLnNpemUsIGJ5dGVzQ291bnQpO1xuICB2YXIgb2Zmc2V0ID0gTWF0aC5tYXgoMCwgc3RhdHMuc2l6ZSAtIGJ5dGVzQ291bnQpO1xuXG4gIHZhciBmZCA9IGZzLm9wZW5TeW5jKGZpbGVQYXRoLCAncicpO1xuICB2YXIgdG90YWxCeXRlcyA9IGZzLnJlYWRTeW5jKGZkLCBidWZmZXIsIDAsIHJlYWRMZW5ndGgsIG9mZnNldCk7XG4gIGZzLmNsb3NlU3luYyhmZCk7XG5cbiAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygndXRmOCcsIDAsIHRvdGFsQnl0ZXMpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciB0cmFuc2Zvcm0gPSByZXF1aXJlKCcuLi8uLi90cmFuc2Zvcm0nKTtcbnZhciBGaWxlUmVnaXN0cnkgPSByZXF1aXJlKCcuL2ZpbGUnKS5GaWxlUmVnaXN0cnk7XG52YXIgdmFyaWFibGVzID0gcmVxdWlyZSgnLi92YXJpYWJsZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaWxlVHJhbnNwb3J0RmFjdG9yeTtcblxuLy8gU2hhcmVkIGJldHdlZW4gbXVsdGlwbGUgZmlsZSB0cmFuc3BvcnQgaW5zdGFuY2VzXG52YXIgZ2xvYmFsUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KCk7XG5cbmZ1bmN0aW9uIGZpbGVUcmFuc3BvcnRGYWN0b3J5KGVsZWN0cm9uTG9nLCBjdXN0b21SZWdpc3RyeSkge1xuICB2YXIgcGF0aFZhcmlhYmxlcyA9IHZhcmlhYmxlcy5nZXRQYXRoVmFyaWFibGVzKHByb2Nlc3MucGxhdGZvcm0pO1xuXG4gIHZhciByZWdpc3RyeSA9IGN1c3RvbVJlZ2lzdHJ5IHx8IGdsb2JhbFJlZ2lzdHJ5O1xuICByZWdpc3RyeS5vbignZXJyb3InLCBmdW5jdGlvbiAoZSwgZmlsZSkge1xuICAgIGxvZ0NvbnNvbGUoJ0NhblxcJ3Qgd3JpdGUgdG8gJyArIGZpbGUsIGUpO1xuICB9KTtcblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1zcGFjZXMgKi9cbiAgdHJhbnNwb3J0LmFyY2hpdmVMb2cgICA9IGFyY2hpdmVMb2c7XG4gIHRyYW5zcG9ydC5maWxlTmFtZSAgICAgPSBnZXREZWZhdWx0RmlsZU5hbWUoKTtcbiAgdHJhbnNwb3J0XG4gICAgLmZvcm1hdCA9ICdbe3l9LXttfS17ZH0ge2h9OntpfTp7c30ue21zfV0gW3tsZXZlbH1de3Njb3BlfSB7dGV4dH0nO1xuICB0cmFuc3BvcnQuZ2V0RmlsZSAgICAgID0gZ2V0RmlsZTtcbiAgdHJhbnNwb3J0LmxldmVsICAgICAgICA9ICdzaWxseSc7XG4gIHRyYW5zcG9ydC5tYXhTaXplICAgICAgPSAxMDI0ICogMTAyNDtcbiAgdHJhbnNwb3J0LnJlc29sdmVQYXRoICA9IHJlc29sdmVQYXRoO1xuICB0cmFuc3BvcnQuc3luYyAgICAgICAgID0gdHJ1ZTtcbiAgdHJhbnNwb3J0LndyaXRlT3B0aW9ucyA9IHtcbiAgICBmbGFnOiAnYScsXG4gICAgbW9kZTogNDM4LCAvLyAwNjY2XG4gICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgfTtcblxuICBpbml0RGVwcmVjYXRlZCgpO1xuXG4gIHJldHVybiB0cmFuc3BvcnQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNwb3J0KG1lc3NhZ2UpIHtcbiAgICB2YXIgZmlsZSA9IGdldEZpbGUobWVzc2FnZSk7XG5cbiAgICB2YXIgbmVlZExvZ1JvdGF0aW9uID0gdHJhbnNwb3J0Lm1heFNpemUgPiAwXG4gICAgICAmJiBmaWxlLnNpemUgPiB0cmFuc3BvcnQubWF4U2l6ZTtcblxuICAgIGlmIChuZWVkTG9nUm90YXRpb24pIHtcbiAgICAgIHRyYW5zcG9ydC5hcmNoaXZlTG9nKGZpbGUpO1xuICAgICAgZmlsZS5yZXNldCgpO1xuICAgIH1cblxuICAgIHZhciBzY29wZU9wdGlvbnMgPSBlbGVjdHJvbkxvZy5zY29wZS5nZXRPcHRpb25zKCk7XG4gICAgdmFyIGNvbnRlbnQgPSB0cmFuc2Zvcm0udHJhbnNmb3JtKG1lc3NhZ2UsIFtcbiAgICAgIHRyYW5zZm9ybS5yZW1vdmVTdHlsZXMsXG4gICAgICB0cmFuc2Zvcm0uY3VzdG9tRm9ybWF0dGVyRmFjdG9yeSh0cmFuc3BvcnQuZm9ybWF0LCBmYWxzZSwgc2NvcGVPcHRpb25zKSxcbiAgICAgIHRyYW5zZm9ybS5jb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzLFxuICAgICAgdHJhbnNmb3JtLm1heERlcHRoRmFjdG9yeSgpLFxuICAgICAgdHJhbnNmb3JtLnRvU3RyaW5nLFxuICAgIF0pO1xuXG4gICAgZmlsZS53cml0ZUxpbmUoY29udGVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcmNoaXZlTG9nKGZpbGUpIHtcbiAgICB2YXIgb2xkUGF0aCA9IGZpbGUudG9TdHJpbmcoKTtcbiAgICB2YXIgaW5mID0gcGF0aC5wYXJzZShvbGRQYXRoKTtcbiAgICB0cnkge1xuICAgICAgZnMucmVuYW1lU3luYyhvbGRQYXRoLCBwYXRoLmpvaW4oaW5mLmRpciwgaW5mLm5hbWUgKyAnLm9sZCcgKyBpbmYuZXh0KSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbG9nQ29uc29sZSgnQ291bGQgbm90IHJvdGF0ZSBsb2cnLCBlKTtcbiAgICAgIHZhciBxdWFydGVyT2ZNYXhTaXplID0gTWF0aC5yb3VuZCh0cmFuc3BvcnQubWF4U2l6ZSAvIDQpO1xuICAgICAgZmlsZS5jcm9wKE1hdGgubWluKHF1YXJ0ZXJPZk1heFNpemUsIDI1NiAqIDEwMjQpKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2dDb25zb2xlKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgdmFyIGRhdGEgPSBbJ2VsZWN0cm9uLWxvZy50cmFuc3BvcnRzLmZpbGU6ICcgKyBtZXNzYWdlXTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgZGF0YS5wdXNoKGVycm9yKTtcbiAgICB9XG5cbiAgICBlbGVjdHJvbkxvZy50cmFuc3BvcnRzLmNvbnNvbGUoe1xuICAgICAgZGF0YTogZGF0YSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICBsZXZlbDogJ3dhcm4nLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RmlsZShtc2cpIHtcbiAgICB2YXIgdmFycyA9IE9iamVjdC5hc3NpZ24oe30sIHBhdGhWYXJpYWJsZXMsIHtcbiAgICAgIGZpbGVOYW1lOiB0cmFuc3BvcnQuZmlsZU5hbWUsXG4gICAgfSk7XG5cbiAgICB2YXIgZmlsZVBhdGggPSB0cmFuc3BvcnQucmVzb2x2ZVBhdGgodmFycywgbXNnKTtcbiAgICByZXR1cm4gcmVnaXN0cnkucHJvdmlkZShmaWxlUGF0aCwgdHJhbnNwb3J0LndyaXRlT3B0aW9ucywgIXRyYW5zcG9ydC5zeW5jKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhdGhWYXJpYWJsZXN9IHZhcnNcbiAgICovXG4gIGZ1bmN0aW9uIHJlc29sdmVQYXRoKHZhcnMpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKHZhcnMubGlicmFyeURlZmF1bHREaXIsIHZhcnMuZmlsZU5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdERlcHJlY2F0ZWQoKSB7XG4gICAgdmFyIGlzRGVwcmVjYXRlZFRleHQgPSAnIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB2NS4nO1xuICAgIHZhciBpc0RlcHJlY2F0ZWRQcm9wID0gJyBwcm9wZXJ0eScgKyBpc0RlcHJlY2F0ZWRUZXh0O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModHJhbnNwb3J0LCB7XG4gICAgICBieXRlc1dyaXR0ZW46IHtcbiAgICAgICAgZ2V0OiB1dGlsLmRlcHJlY2F0ZShnZXRCeXRlc1dyaXR0ZW4sICdieXRlc1dyaXR0ZW4nICsgaXNEZXByZWNhdGVkUHJvcCksXG4gICAgICB9LFxuXG4gICAgICBmaWxlOiB7XG4gICAgICAgIGdldDogdXRpbC5kZXByZWNhdGUoZ2V0TG9nRmlsZSwgJ2ZpbGUnICsgaXNEZXByZWNhdGVkUHJvcCksXG4gICAgICAgIHNldDogdXRpbC5kZXByZWNhdGUoc2V0TG9nRmlsZSwgJ2ZpbGUnICsgaXNEZXByZWNhdGVkUHJvcCksXG4gICAgICB9LFxuXG4gICAgICBmaWxlU2l6ZToge1xuICAgICAgICBnZXQ6IHV0aWwuZGVwcmVjYXRlKGdldEZpbGVTaXplLCAnZmlsZScgKyBpc0RlcHJlY2F0ZWRQcm9wKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0cmFuc3BvcnQuY2xlYXIgPSB1dGlsLmRlcHJlY2F0ZShjbGVhciwgJ2NsZWFyKCknICsgaXNEZXByZWNhdGVkVGV4dCk7XG4gICAgdHJhbnNwb3J0LmZpbmRMb2dQYXRoID0gdXRpbC5kZXByZWNhdGUoXG4gICAgICBnZXRMb2dGaWxlLFxuICAgICAgJ2ZpbmRMb2dQYXRoKCknICsgaXNEZXByZWNhdGVkVGV4dFxuICAgICk7XG4gICAgdHJhbnNwb3J0LmluaXQgPSB1dGlsLmRlcHJlY2F0ZShpbml0LCAnaW5pdCgpJyArIGlzRGVwcmVjYXRlZFRleHQpO1xuXG4gICAgZnVuY3Rpb24gZ2V0Qnl0ZXNXcml0dGVuKCkge1xuICAgICAgcmV0dXJuIGdldEZpbGUoKS5ieXRlc1dyaXR0ZW47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TG9nRmlsZSgpIHtcbiAgICAgIHJldHVybiBnZXRGaWxlKCkucGF0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRMb2dGaWxlKGZpbGVQYXRoKSB7XG4gICAgICB0cmFuc3BvcnQucmVzb2x2ZVBhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmaWxlUGF0aDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RmlsZVNpemUoKSB7XG4gICAgICByZXR1cm4gZ2V0RmlsZSgpLnNpemU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBnZXRGaWxlKCkuY2xlYXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0KCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0RmlsZU5hbWUoKSB7XG4gIHN3aXRjaCAocHJvY2Vzcy50eXBlKSB7XG4gICAgY2FzZSAncmVuZGVyZXInOiByZXR1cm4gJ3JlbmRlcmVyLmxvZyc7XG4gICAgY2FzZSAnd29ya2VyJzogcmV0dXJuICd3b3JrZXIubG9nJztcbiAgICBkZWZhdWx0OiByZXR1cm4gJ21haW4ubG9nJztcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuXG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICByZWFkUGFja2FnZUpzb246IHJlYWRQYWNrYWdlSnNvbixcbiAgdHJ5UmVhZEpzb25BdDogdHJ5UmVhZEpzb25BdCxcbn07XG5cbi8qKlxuICogQHJldHVybiB7eyBuYW1lPzogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nfX1cbiAqL1xuZnVuY3Rpb24gcmVhZFBhY2thZ2VKc29uKCkge1xuICByZXR1cm4gdHJ5UmVhZEpzb25BdChyZXF1aXJlLm1haW4gJiYgcmVxdWlyZS5tYWluLmZpbGVuYW1lKVxuICAgIHx8IHRyeVJlYWRKc29uQXQocHJvY2Vzcy5yZXNvdXJjZXNQYXRoLCAnYXBwLmFzYXInKVxuICAgIHx8IHRyeVJlYWRKc29uQXQocHJvY2Vzcy5jd2QoKSlcbiAgICB8fCB7IG5hbWU6IG51bGwsIHZlcnNpb246IG51bGwgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gey4uLnN0cmluZ30gc2VhcmNoUGF0aFxuICogQHJldHVybiB7eyBuYW1lPzogc3RyaW5nLCB2ZXJzaW9uPzogc3RyaW5nIH0gfCBudWxsfVxuICovXG5mdW5jdGlvbiB0cnlSZWFkSnNvbkF0KHNlYXJjaFBhdGgpIHtcbiAgdHJ5IHtcbiAgICBzZWFyY2hQYXRoID0gcGF0aC5qb2luLmFwcGx5KHBhdGgsIGFyZ3VtZW50cyk7XG4gICAgdmFyIGZpbGVOYW1lID0gZmluZFVwKCdwYWNrYWdlLmpzb24nLCBzZWFyY2hQYXRoKTtcbiAgICBpZiAoIWZpbGVOYW1lKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVOYW1lLCAndXRmOCcpKTtcbiAgICB2YXIgbmFtZSA9IGpzb24ucHJvZHVjdE5hbWUgfHwganNvbi5uYW1lO1xuICAgIGlmICghbmFtZSB8fCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdlbGVjdHJvbicpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChqc29uLnByb2R1Y3ROYW1lIHx8IGpzb24ubmFtZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgdmVyc2lvbjoganNvbi52ZXJzaW9uLFxuICAgICAgfTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IFtjd2RdXG4gKiBAcmV0dXJuIHtzdHJpbmcgfCBudWxsfVxuICovXG5mdW5jdGlvbiBmaW5kVXAoZmlsZU5hbWUsIGN3ZCkge1xuICB2YXIgY3VycmVudFBhdGggPSBjd2Q7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgcGFyc2VkUGF0aCA9IHBhdGgucGFyc2UoY3VycmVudFBhdGgpO1xuICAgIHZhciByb290ID0gcGFyc2VkUGF0aC5yb290O1xuICAgIHZhciBkaXIgPSBwYXJzZWRQYXRoLmRpcjtcblxuICAgIGlmIChmcy5leGlzdHNTeW5jKHBhdGguam9pbihjdXJyZW50UGF0aCwgZmlsZU5hbWUpKSkge1xuICAgICAgcmV0dXJuIHBhdGgucmVzb2x2ZShwYXRoLmpvaW4oY3VycmVudFBhdGgsIGZpbGVOYW1lKSk7XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXRoID09PSByb290KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjdXJyZW50UGF0aCA9IGRpcjtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZWxlY3Ryb25BcGkgPSByZXF1aXJlKCcuLi8uLi9lbGVjdHJvbkFwaScpO1xudmFyIHBhY2thZ2VKc29uID0gcmVxdWlyZSgnLi9wYWNrYWdlSnNvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0QXBwRGF0YTogZ2V0QXBwRGF0YSxcbiAgZ2V0TGlicmFyeURlZmF1bHREaXI6IGdldExpYnJhcnlEZWZhdWx0RGlyLFxuICBnZXRMaWJyYXJ5VGVtcGxhdGU6IGdldExpYnJhcnlUZW1wbGF0ZSxcbiAgZ2V0TmFtZUFuZFZlcnNpb246IGdldE5hbWVBbmRWZXJzaW9uLFxuICBnZXRQYXRoVmFyaWFibGVzOiBnZXRQYXRoVmFyaWFibGVzLFxuICBnZXRVc2VyRGF0YTogZ2V0VXNlckRhdGEsXG59O1xuXG5mdW5jdGlvbiBnZXRBcHBEYXRhKHBsYXRmb3JtKSB7XG4gIHZhciBhcHBEYXRhID0gZWxlY3Ryb25BcGkuZ2V0UGF0aCgnYXBwRGF0YScpO1xuICBpZiAoYXBwRGF0YSkge1xuICAgIHJldHVybiBhcHBEYXRhO1xuICB9XG5cbiAgdmFyIGhvbWUgPSBnZXRIb21lKCk7XG5cbiAgc3dpdGNoIChwbGF0Zm9ybSkge1xuICAgIGNhc2UgJ2Rhcndpbic6IHtcbiAgICAgIHJldHVybiBwYXRoLmpvaW4oaG9tZSwgJ0xpYnJhcnkvQXBwbGljYXRpb24gU3VwcG9ydCcpO1xuICAgIH1cblxuICAgIGNhc2UgJ3dpbjMyJzoge1xuICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LkFQUERBVEEgfHwgcGF0aC5qb2luKGhvbWUsICdBcHBEYXRhL1JvYW1pbmcnKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuWERHX0NPTkZJR19IT01FIHx8IHBhdGguam9pbihob21lLCAnLmNvbmZpZycpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIb21lKCkge1xuICByZXR1cm4gb3MuaG9tZWRpciA/IG9zLmhvbWVkaXIoKSA6IHByb2Nlc3MuZW52LkhPTUU7XG59XG5cbmZ1bmN0aW9uIGdldExpYnJhcnlEZWZhdWx0RGlyKHBsYXRmb3JtLCBhcHBOYW1lKSB7XG4gIGlmIChwbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKGdldEhvbWUoKSwgJ0xpYnJhcnkvTG9ncycsIGFwcE5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIHBhdGguam9pbihnZXRVc2VyRGF0YShwbGF0Zm9ybSwgYXBwTmFtZSksICdsb2dzJyk7XG59XG5cbmZ1bmN0aW9uIGdldExpYnJhcnlUZW1wbGF0ZShwbGF0Zm9ybSkge1xuICBpZiAocGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgcmV0dXJuIHBhdGguam9pbihnZXRIb21lKCksICdMaWJyYXJ5L0xvZ3MnLCAne2FwcE5hbWV9Jyk7XG4gIH1cblxuICByZXR1cm4gcGF0aC5qb2luKGdldEFwcERhdGEocGxhdGZvcm0pLCAne2FwcE5hbWV9JywgJ2xvZ3MnKTtcbn1cblxuZnVuY3Rpb24gZ2V0TmFtZUFuZFZlcnNpb24oKSB7XG4gIHZhciBuYW1lID0gZWxlY3Ryb25BcGkuZ2V0TmFtZSgpO1xuICB2YXIgdmVyc2lvbiA9IGVsZWN0cm9uQXBpLmdldFZlcnNpb24oKTtcblxuICBpZiAobmFtZSAmJiB2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIHsgbmFtZTogbmFtZSwgdmVyc2lvbjogdmVyc2lvbiB9O1xuICB9XG5cbiAgdmFyIHBhY2thZ2VWYWx1ZXMgPSBwYWNrYWdlSnNvbi5yZWFkUGFja2FnZUpzb24oKTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgbmFtZSA9IHBhY2thZ2VWYWx1ZXMubmFtZTtcbiAgfVxuXG4gIGlmICghdmVyc2lvbikge1xuICAgIHZlcnNpb24gPSBwYWNrYWdlVmFsdWVzLnZlcnNpb247XG4gIH1cblxuICByZXR1cm4geyBuYW1lOiBuYW1lLCB2ZXJzaW9uOiB2ZXJzaW9uIH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHBsYXRmb3JtXG4gKiBAcmV0dXJuIHtQYXRoVmFyaWFibGVzfVxuICovXG5mdW5jdGlvbiBnZXRQYXRoVmFyaWFibGVzKHBsYXRmb3JtKSB7XG4gIHZhciBuYW1lQW5kVmVyc2lvbiA9IGdldE5hbWVBbmRWZXJzaW9uKCk7XG4gIHZhciBhcHBOYW1lID0gbmFtZUFuZFZlcnNpb24ubmFtZTtcbiAgdmFyIGFwcFZlcnNpb24gPSBuYW1lQW5kVmVyc2lvbi52ZXJzaW9uO1xuXG4gIHJldHVybiB7XG4gICAgYXBwRGF0YTogZ2V0QXBwRGF0YShwbGF0Zm9ybSksXG4gICAgYXBwTmFtZTogYXBwTmFtZSxcbiAgICBhcHBWZXJzaW9uOiBhcHBWZXJzaW9uLFxuICAgIGVsZWN0cm9uRGVmYXVsdERpcjogZWxlY3Ryb25BcGkuZ2V0UGF0aCgnbG9ncycpLFxuICAgIGhvbWU6IGdldEhvbWUoKSxcbiAgICBsaWJyYXJ5RGVmYXVsdERpcjogZ2V0TGlicmFyeURlZmF1bHREaXIocGxhdGZvcm0sIGFwcE5hbWUpLFxuICAgIGxpYnJhcnlUZW1wbGF0ZTogZ2V0TGlicmFyeVRlbXBsYXRlKHBsYXRmb3JtKSxcbiAgICB0ZW1wOiBlbGVjdHJvbkFwaS5nZXRQYXRoKCd0ZW1wJykgfHwgb3MudG1wZGlyKCksXG4gICAgdXNlckRhdGE6IGdldFVzZXJEYXRhKHBsYXRmb3JtLCBhcHBOYW1lKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckRhdGEocGxhdGZvcm0sIGFwcE5hbWUpIHtcbiAgcmV0dXJuIGVsZWN0cm9uQXBpLmdldFBhdGgoJ3VzZXJEYXRhJylcbiAgICB8fCBwYXRoLmpvaW4oZ2V0QXBwRGF0YShwbGF0Zm9ybSksIGFwcE5hbWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vdHJhbnNmb3JtJyk7XG52YXIgZWxlY3Ryb25BcGkgPSByZXF1aXJlKCcuLi9lbGVjdHJvbkFwaScpO1xudmFyIGxvZyA9IHJlcXVpcmUoJy4uL2xvZy5qcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlwY1RyYW5zcG9ydEZhY3Rvcnk7XG5cbmZ1bmN0aW9uIGlwY1RyYW5zcG9ydEZhY3RvcnkoZWxlY3Ryb25Mb2cpIHtcbiAgdHJhbnNwb3J0LmV2ZW50SWQgPSAnX19FTEVDVFJPTl9MT0dfSVBDXycgKyBlbGVjdHJvbkxvZy5sb2dJZCArICdfXyc7XG4gIHRyYW5zcG9ydC5sZXZlbCA9IGVsZWN0cm9uTG9nLmlzRGV2ID8gJ3NpbGx5JyA6IGZhbHNlO1xuXG4gIC8vIFByZXZlbnQgcHJvYmxlbXMgd2hlbiB0aGVyZSBhcmUgbXVsdGlwbGUgaW5zdGFuY2VzIGFmdGVyIHdlYnBhY2tcbiAgaWYgKGVsZWN0cm9uQXBpLmlzSXBjQ2hhbm5lbExpc3RlbmVkKHRyYW5zcG9ydC5ldmVudElkKSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7fTtcbiAgfVxuXG4gIGVsZWN0cm9uQXBpLm9uSXBjKHRyYW5zcG9ydC5ldmVudElkLCBmdW5jdGlvbiAoXywgbWVzc2FnZSkge1xuICAgIG1lc3NhZ2UuZGF0ZSA9IG5ldyBEYXRlKG1lc3NhZ2UuZGF0ZSk7XG5cbiAgICBsb2cucnVuVHJhbnNwb3J0KFxuICAgICAgZWxlY3Ryb25Mb2cudHJhbnNwb3J0cy5jb25zb2xlLFxuICAgICAgbWVzc2FnZSxcbiAgICAgIGVsZWN0cm9uTG9nXG4gICAgKTtcbiAgfSk7XG5cbiAgZWxlY3Ryb25BcGkubG9hZFJlbW90ZU1vZHVsZSgnZWxlY3Ryb24tbG9nJyk7XG5cbiAgcmV0dXJuIGVsZWN0cm9uQXBpLmlzRWxlY3Ryb24oKSA/IHRyYW5zcG9ydCA6IG51bGw7XG5cbiAgZnVuY3Rpb24gdHJhbnNwb3J0KG1lc3NhZ2UpIHtcbiAgICB2YXIgaXBjTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UsIHtcbiAgICAgIGRhdGE6IHRyYW5zZm9ybS50cmFuc2Zvcm0obWVzc2FnZSwgW1xuICAgICAgICB0cmFuc2Zvcm0ucmVtb3ZlU3R5bGVzLFxuICAgICAgICB0cmFuc2Zvcm0udG9KU09OLFxuICAgICAgICB0cmFuc2Zvcm0ubWF4RGVwdGhGYWN0b3J5KDMpLFxuICAgICAgXSksXG4gICAgfSk7XG5cbiAgICBlbGVjdHJvbkFwaS5zZW5kSXBjKHRyYW5zcG9ydC5ldmVudElkLCBpcGNNZXNzYWdlKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbnZhciBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyk7XG52YXIgdXJsID0gcmVxdWlyZSgndXJsJyk7XG52YXIgbG9nID0gcmVxdWlyZSgnLi4vbG9nJyk7XG52YXIgdHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vdHJhbnNmb3JtJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3RlVHJhbnNwb3J0RmFjdG9yeTtcblxuZnVuY3Rpb24gcmVtb3RlVHJhbnNwb3J0RmFjdG9yeShlbGVjdHJvbkxvZykge1xuICB0cmFuc3BvcnQuY2xpZW50ID0geyBuYW1lOiAnZWxlY3Ryb24tYXBwbGljYXRpb24nIH07XG4gIHRyYW5zcG9ydC5kZXB0aCA9IDY7XG4gIHRyYW5zcG9ydC5sZXZlbCA9IGZhbHNlO1xuICB0cmFuc3BvcnQucmVxdWVzdE9wdGlvbnMgPSB7fTtcbiAgdHJhbnNwb3J0LnVybCA9IG51bGw7XG5cbiAgcmV0dXJuIHRyYW5zcG9ydDtcblxuICBmdW5jdGlvbiB0cmFuc3BvcnQobWVzc2FnZSkge1xuICAgIGlmICghdHJhbnNwb3J0LnVybCkgcmV0dXJuO1xuXG4gICAgdmFyIHJlcXVlc3QgPSBwb3N0KHRyYW5zcG9ydC51cmwsIHRyYW5zcG9ydC5yZXF1ZXN0T3B0aW9ucywge1xuICAgICAgY2xpZW50OiB0cmFuc3BvcnQuY2xpZW50LFxuICAgICAgZGF0YTogdHJhbnNmb3JtLnRyYW5zZm9ybShtZXNzYWdlLCBbXG4gICAgICAgIHRyYW5zZm9ybS5yZW1vdmVTdHlsZXMsXG4gICAgICAgIHRyYW5zZm9ybS50b0pTT04sXG4gICAgICAgIHRyYW5zZm9ybS5tYXhEZXB0aEZhY3RvcnkodHJhbnNwb3J0LmRlcHRoICsgMSksXG4gICAgICBdKSxcbiAgICAgIGRhdGU6IG1lc3NhZ2UuZGF0ZS5nZXRUaW1lKCksXG4gICAgICBsZXZlbDogbWVzc2FnZS5sZXZlbCxcbiAgICAgIHZhcmlhYmxlczogbWVzc2FnZS52YXJpYWJsZXMsXG4gICAgfSk7XG5cbiAgICByZXF1ZXN0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IHtcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgICdlbGVjdHJvbi1sb2cudHJhbnNwb3J0cy5yZW1vdGU6J1xuICAgICAgICAgICsgJyBjYW5ub3Qgc2VuZCBIVFRQIHJlcXVlc3QgdG8gJyArIHRyYW5zcG9ydC51cmwsXG4gICAgICAgICAgZXJyb3IsXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIGxldmVsOiAnd2FybicsXG4gICAgICB9O1xuXG4gICAgICB2YXIgdHJhbnNwb3J0cyA9IFtcbiAgICAgICAgZWxlY3Ryb25Mb2cudHJhbnNwb3J0cy5jb25zb2xlLFxuICAgICAgICBlbGVjdHJvbkxvZy50cmFuc3BvcnRzLmlwYyxcbiAgICAgICAgZWxlY3Ryb25Mb2cudHJhbnNwb3J0cy5maWxlLFxuICAgICAgXTtcblxuICAgICAgbG9nLnJ1blRyYW5zcG9ydHModHJhbnNwb3J0cywgZXJyb3JNZXNzYWdlLCBlbGVjdHJvbkxvZyk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9zdChzZXJ2ZXJVcmwsIHJlcXVlc3RPcHRpb25zLCBkYXRhKSB7XG4gIHZhciB1cmxPYmplY3QgPSB1cmwucGFyc2Uoc2VydmVyVXJsKTtcbiAgdmFyIGh0dHBUcmFuc3BvcnQgPSB1cmxPYmplY3QucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwO1xuXG4gIHZhciBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cbiAgdmFyIG9wdGlvbnMgPSB7XG4gICAgaG9zdG5hbWU6IHVybE9iamVjdC5ob3N0bmFtZSxcbiAgICBwb3J0OiAgICAgdXJsT2JqZWN0LnBvcnQsXG4gICAgcGF0aDogICAgIHVybE9iamVjdC5wYXRoLFxuICAgIG1ldGhvZDogICAnUE9TVCcsXG4gICAgaGVhZGVyczogIHtcbiAgICAgICdDb250ZW50LUxlbmd0aCc6IGJvZHkubGVuZ3RoLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihvcHRpb25zLCByZXF1ZXN0T3B0aW9ucyk7XG5cbiAgdmFyIHJlcXVlc3QgPSBodHRwVHJhbnNwb3J0LnJlcXVlc3Qob3B0aW9ucyk7XG4gIHJlcXVlc3Qud3JpdGUoYm9keSk7XG4gIHJlcXVlc3QuZW5kKCk7XG5cbiAgcmV0dXJuIHJlcXVlc3Q7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmVsZWN0cm9uRXZlbnQgPSB7XHJcbiAgICAvKiog44K144O844OQ44O86LW35YuVICovXHJcbiAgICAnc3RhcnQtc2VydmVyJzogJ3N0YXJ0LXNlcnZlcicsXHJcbiAgICAvKiog44Ki44Op44O844OI6KGo56S6ICovXHJcbiAgICAnc2hvdy1hbGVydCc6ICdzaG93LWFsZXJ0JyxcclxuICAgICdzaG93LWNvbW1lbnQnOiAnc2hvdy1jb21tZW50JyxcclxuICAgICdjbGVhci1jb21tZW50JzogJ2NsZWFyLWNvbW1lbnQnLFxyXG4gICAgLyoqIOOCteODvOODkOODvOi1t+WLleOBrui/lOS/oSAqL1xyXG4gICAgJ3N0YXJ0LXNlcnZlci1yZXBseSc6ICdzdGFydC1zZXJ2ZXItcmVwbHknLFxyXG4gICAgTUFJTl9HRVRfRUxFQ1RST05fREFUQTogJ01BSU5fR0VUX0VMRUNUUk9OX0RBVEEnLFxyXG4gICAgTUFJTl9TRVRfRUxFQ1RST05fREFUQTogJ01BSU5fU0VUX0VMRUNUUk9OX0RBVEEnLFxyXG4gICAgLyoqIOadv+OCkui/veWKoCAqL1xyXG4gICAgTUFJTl9BRERfQk9BUkRMSVNUOiAnTUFJTl9BRERfQk9BUkRMSVNUJyxcclxuICAgIC8qKiDjgrnjg6zkuIDopqfjgpLplovjgY8gKi9cclxuICAgIE1BSU5fR0VUX1RIUkVBRF9MSVNUOiAnTUFJTl9HRVRfVEhSRUFEX0xJU1QnLFxyXG4gICAgLyoqIOOCueODrOOCkumWi+OBjyAqL1xyXG4gICAgTUFJTl9PUEVOX1RIUkVBRDogJ01BSU5fT1BFTl9USFJFQUQnLFxyXG4gICAgLyoqIOadv+S4gOimp+ihqOekuiAqL1xyXG4gICAgU0hPV19CT0FSRF9MSVNUOiAnU0hPV19CT0FSRF9MSVNUJyxcclxuICAgIC8qKiDmm7jjgY3ovrzjgb8gKi9cclxuICAgIE1BSU5fUE9TVF9LQUtJS09NSTogJ01BSU5fUE9TVF9LQUtJS09NSScsXHJcbn07XHJcbmV4cG9ydHMua2V5Q29kZSA9IHtcclxuICAgIEVOVEVSOiAxMyxcclxuICAgIFNISUZUOiAxNixcclxuICAgIENUUkw6IDE3LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjI1emRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGaExGRkJRVUVzWVVGQllTeEhRVUZITzBsQlF6TkNMR0ZCUVdFN1NVRkRZaXhqUVVGakxFVkJRVVVzWTBGQll6dEpRVVU1UWl4aFFVRmhPMGxCUTJJc1dVRkJXU3hGUVVGRkxGbEJRVms3U1VGRk1VSXNZMEZCWXl4RlFVRkZMR05CUVdNN1NVRkRPVUlzWlVGQlpTeEZRVUZGTEdWQlFXVTdTVUZGYUVNc1owSkJRV2RDTzBsQlEyaENMRzlDUVVGdlFpeEZRVUZGTEc5Q1FVRnZRanRKUVVVeFF5eHpRa0ZCYzBJc1JVRkJSU3gzUWtGQmQwSTdTVUZEYUVRc2MwSkJRWE5DTEVWQlFVVXNkMEpCUVhkQ08wbEJRMmhFTEZkQlFWYzdTVUZEV0N4clFrRkJhMElzUlVGQlJTeHZRa0ZCYjBJN1NVRkZlRU1zWTBGQll6dEpRVU5rTEc5Q1FVRnZRaXhGUVVGRkxITkNRVUZ6UWp0SlFVVTFReXhaUVVGWk8wbEJRMW9zWjBKQlFXZENMRVZCUVVVc2EwSkJRV3RDTzBsQlJYQkRMRmxCUVZrN1NVRkRXaXhsUVVGbExFVkJRVVVzYVVKQlFXbENPMGxCUld4RExGZEJRVmM3U1VGRFdDeHJRa0ZCYTBJc1JVRkJSU3h2UWtGQmIwSTdRMEZEZWtNc1EwRkJRenRCUVVWWExGRkJRVUVzVDBGQlR5eEhRVUZITzBsQlEzSkNMRXRCUVVzc1JVRkJSU3hGUVVGRk8wbEJRMVFzUzBGQlN5eEZRVUZGTEVWQlFVVTdTVUZEVkN4SlFVRkpMRVZCUVVVc1JVRkJSVHREUVVOVUxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZWxlY3Ryb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb25cIikpO1xyXG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4uL21haW4vY29uc3RcIik7XHJcbnZhciBpcGNSZW5kZXJlciA9IGVsZWN0cm9uXzEuZGVmYXVsdC5pcGNSZW5kZXJlcjtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCb2FyZCcpLm9uY2xpY2sgPSBhZGRCb2FyZDtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctYWRkLWJvYXJkLWJ1dHRvbi1jYW5jZWwnKS5vbmNsaWNrID0gZGlhbG9nQWRkQm9hcmRCdXR0b25DYW5jZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZC1idXR0b24tb2snKS5vbmNsaWNrID0gZGlhbG9nQWRkQm9hcmRCdXR0b25PaztcclxuICAgIHNob3dCb2FyZExpc3QoKTtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1tyZW5kZXJlci5qc11ET00gQ29udGVudCBMb2FkZWQnKTtcclxufSk7XHJcbnZhciBhZGRCb2FyZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdbYWRkQm9hcmRdJyk7XHJcbiAgICAvLyDmjrLnpLrmnb/ov73liqDjg4DjgqTjgqLjg63jgrDjgpLooajnpLpcclxuICAgIHZhciBhbGVydERpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctYWRkLWJvYXJkJyk7XHJcbiAgICBhbGVydERpYWxvZy5zaG93TW9kYWwoKTtcclxufTtcclxudmFyIGRpYWxvZ0FkZEJvYXJkQnV0dG9uQ2FuY2VsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQnKS5jbG9zZSgpOyB9O1xyXG52YXIgZGlhbG9nQWRkQm9hcmRCdXR0b25PayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbmFtZSwgdXJsO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZC1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQtdXJsJykudmFsdWU7XHJcbiAgICAgICAgaWYgKCFuYW1lIHx8ICF1cmwpXHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICBpZiAoIXVybC5tYXRjaCgvXmh0dHAuK1xcLyQvKSlcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGE6IHR5cGVvZiBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEgPSBhd2FpdCBpcGNSZW5kZXJlci5pbnZva2UoZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9FTEVDVFJPTl9EQVRBKTtcclxuICAgICAgICBpcGNSZW5kZXJlci5pbnZva2UoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fQUREX0JPQVJETElTVCwgW3sgbmFtZTogbmFtZSwgdXJsOiB1cmwgfV0pO1xyXG4gICAgICAgIC8vIOWQjeWJjeOBqFVSTOOCkuaKnOOBjeWHuuOBl+OBpueZu+mMsuWHpueQhuOBq+WbnuOBmVxyXG4gICAgICAgIHNob3dCb2FyZExpc3QoKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZCcpLmNsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG52YXIgc2hvd0JvYXJkTGlzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0YSwgYm9hcmRMaXN0LCBsaXN0dWwsIGRvbVN0cjtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgaXBjUmVuZGVyZXIuaW52b2tlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9FTEVDVFJPTl9EQVRBKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBib2FyZExpc3QgPSBkYXRhLmJvYXJkTGlzdDtcclxuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbyhcIltzaG93Qm9hcmRMaXN0XSBcXHU2NzdGXFx1NjU3MFxcdUZGMUFcIiArIGJvYXJkTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgbGlzdHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkTGlzdCcpO1xyXG4gICAgICAgICAgICAgICAgZG9tU3RyID0gYm9hcmRMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGNsYXNzPVxcXCJib2FyZEl0ZW0gbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9hcmRfaXRlbV9cIiArIGluZGV4ICsgXCJcXFwiIGRhdGEtdXJsPVxcXCJcIiArIGl0ZW0udXJsICsgXCJcXFwiPlwiICsgaXRlbS5uYW1lICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWRsLXRvb2x0aXBcXFwiIGRhdGEtbWRsLWZvcj1cXFwiYm9hcmRfaXRlbV9cIiArIGluZGV4ICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgIFwiICsgaXRlbS51cmwgKyBcIlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBsaXN0dWwuaW5uZXJIVE1MID0gZG9tU3RyO1xyXG4gICAgICAgICAgICAgICAgbGlzdHVsLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv+OCkumWi+OBj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gYm9hcmRMaXN0W2tleV0udXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW46IFwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0JvYXJkKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxudmFyIHNob3dCb2FyZCA9IGZ1bmN0aW9uIChib2FyZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBsaXN0LCBsaXN0dWwsIGRvbVN0cjtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgaXBjUmVuZGVyZXIuaW52b2tlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9USFJFQURfTElTVCwgYm9hcmRVcmwpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgbGlzdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGxpc3R1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aHJlYWRMaXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBkb21TdHIgPSBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8YnV0dG9uIGNsYXNzPVxcXCJib2FyZEl0ZW0gbWRsLWJ1dHRvbiBtZGwtanMtYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9hcmRfaXRlbV9cIiArIGluZGV4ICsgXCJcXFwiPlwiICsgaXRlbS5uYW1lICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlwiO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignJyk7XHJcbiAgICAgICAgICAgICAgICBsaXN0dWwuaW5uZXJIVE1MID0gZG9tU3RyO1xyXG4gICAgICAgICAgICAgICAgbGlzdHVsLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv+OCkumWi+OBj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gbGlzdFtrZXldLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBsaXN0W2tleV0ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcGVuOiBcIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlwY1JlbmRlcmVyLnNlbmQoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fT1BFTl9USFJFQUQsIHVybCwgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnlaVzVrWlhKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkJMSE5FUVVGblF6dEJRVU5vUXl3NFJFRkJLMEk3UVVGREwwSXNkVU5CUVRoRE8wRkJSVGxETEVsQlFVMHNWMEZCVnl4SFFVRkhMR3RDUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETzBGQlJYcERMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4clFrRkJhMElzUlVGQlJUdEpRVU16UXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGVkJRVlVzUTBGQmMwSXNRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRelZGTEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1owTkJRV2RETEVOQlFYTkNMRU5CUVVNc1QwRkJUeXhIUVVGSExEQkNRVUV3UWl4RFFVRkRPMGxCUTNCSUxGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNORUpCUVRSQ0xFTkJRWE5DTEVOQlFVTXNUMEZCVHl4SFFVRkhMSE5DUVVGelFpeERRVUZETzBsQlJUZEhMR0ZCUVdFc1JVRkJSU3hEUVVGRE8wbEJRMmhDTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc2FVTkJRV2xETEVOQlFVTXNRMEZCUXp0QlFVTnVSQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZJTEVsQlFVMHNVVUZCVVN4SFFVRkhPMGxCUTJZc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVVXhRaXhuUWtGQlowSTdTVUZEYUVJc1NVRkJUU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4clFrRkJhMElzUTBGQlowSXNRMEZCUXp0SlFVTTVSU3hYUVVGdFFpeERRVUZETEZOQlFWTXNSVUZCUlN4RFFVRkRPMEZCUTI1RExFTkJRVU1zUTBGQlF6dEJRVVZHTEVsQlFVMHNNRUpCUVRCQ0xFZEJRVWNzWTBGQlRTeFBRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2EwSkJRV3RDTEVOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJOVVFzUTBGQk5FUXNRMEZCUXp0QlFVTjBSeXhKUVVGTkxITkNRVUZ6UWl4SFFVRkhPenM3VVVGRGRrSXNTVUZCU1N4SFFVRkpMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zZFVKQlFYVkNMRU5CUVhOQ0xFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzQkdMRWRCUVVjc1IwRkJTU3hSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEhOQ1FVRnpRaXhEUVVGelFpeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVVjRSaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnp0WlFVRkZMSE5DUVVGUE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFpRVUZGTEhOQ1FVRlBPMUZCUlhKRExHZElRVUZuU0R0UlFVTm9TQ3hYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEhGQ1FVRmhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1RVRkJRU3hGUVVGRkxFZEJRVWNzUzBGQlFTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUlhSRkxITkNRVUZ6UWp0UlFVTjBRaXhoUVVGaExFVkJRVVVzUTBGQlF6dFJRVU5tTEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2EwSkJRV3RDTEVOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenM3TzB0QlF6bEVMRU5CUVVNN1FVRkZSaXhKUVVGTkxHRkJRV0VzUjBGQlJ6czdPenR2UWtGRE1FSXNjVUpCUVUwc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMSE5DUVVGelFpeERRVUZETEVWQlFVRTdPMmRDUVVGMFJ5eEpRVUZKTEVkQlFXOURMRk5CUVRoRU8yZENRVU4wUnl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF6dG5Ra0ZEYWtNc2MwSkJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNkVU5CUVhOQ0xGTkJRVk1zUTBGQlF5eE5RVUZSTEVOQlFVTXNRMEZCUXp0blFrRkZOME1zVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGblFpeERRVUZETzJkQ1FVTTNSQ3hOUVVGTkxFZEJRVWNzVTBGQlV6dHhRa0ZEY2tJc1IwRkJSeXhEUVVGRExGVkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVczdiMEpCUTJZc1QwRkJUeXhwUjBGRGVVSXNTMEZCU3l4elFrRkJaU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eFhRVUZMTEVsQlFVa3NRMEZCUXl4SlFVRkpMSEZHUVVOYUxFdEJRVXNzSzBKQlEzSkVMRWxCUVVrc1EwRkJReXhIUVVGSExITkVRVVZLTEVOQlFVTTdaMEpCUTNKQ0xFTkJRVU1zUTBGQlF6dHhRa0ZEUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlJWb3NUVUZCVFN4RFFVRkRMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlJURkNMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVZjN2IwSkJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEyeENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTJoQ0xFbEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhPM2RDUVVNNVFpeFBRVUZQTzNkQ1FVTlFMRWxCUVUwc1IwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN2QwSkJReTlDTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJVeXhIUVVGTExFTkJRVU1zUTBGQlF6dDNRa0ZETlVJc1UwRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzI5Q1FVTnFRaXhEUVVGRExFTkJRVU03WjBKQlEwb3NRMEZCUXl4RFFVRkRMRU5CUVVNN096czdTMEZEU2l4RFFVRkRPMEZCUlVZc1NVRkJUU3hUUVVGVExFZEJRVWNzVlVGQlR5eFJRVUZuUWpzN096dHZRa0ZOYWtNc2NVSkJRVTBzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJZU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGQk96dG5Ra0ZLZEVVc1NVRkJTU3hIUVVsS0xGTkJRWE5GTzJkQ1FVZDBSU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRU5CUVdkQ0xFTkJRVU03WjBKQlF6bEVMRTFCUVUwc1IwRkJSeXhKUVVGSk8zRkNRVU5vUWl4SFFVRkhMRU5CUVVNc1ZVRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN6dHZRa0ZEWml4UFFVRlBMR2xIUVVONVFpeExRVUZMTEZkQlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc2IwTkJRMnBETEVOQlFVTTdaMEpCUTNKQ0xFTkJRVU1zUTBGQlF6dHhRa0ZEUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlJWb3NUVUZCVFN4RFFVRkRMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlJURkNMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVZjN2IwSkJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEyeENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTJoQ0xFbEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhPM2RDUVVNNVFpeFBRVUZQTzNkQ1FVTlFMRWxCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN2QwSkJRekZDTEVsQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdkMEpCUXpWQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVXl4SFFVRkxMRU5CUVVNc1EwRkJRenQzUWtGRE5VSXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRPVVFzUTBGQlF5eERRVUZETzJkQ1FVTktMRU5CUVVNc1EwRkJReXhEUVVGRE96czdPMHRCUTBvc1EwRkJReUo5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9