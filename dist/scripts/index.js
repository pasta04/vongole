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
    /** スレURLを元に板情報を取得 */
    MAIN_FETCH_BOARDINFO: 'MAIN_FETCH_BOARDINFO',
    /** 板を追加 */
    MAIN_ADD_BOARDLIST: 'MAIN_ADD_BOARDLIST',
    /** 板を削除 */
    MAIN_DELETE_BOARDLIST: 'MAIN_DELETE_BOARDLIST',
    /** スレ一覧を開く */
    MAIN_GET_THREAD_LIST: 'MAIN_GET_THREAD_LIST',
    /** スレを開く */
    MAIN_OPEN_THREAD: 'MAIN_OPEN_THREAD',
    /** 板一覧表示 */
    SHOW_BOARD_LIST: 'SHOW_BOARD_LIST',
    /** 書き込み */
    MAIN_POST_KAKIKOMI: 'MAIN_POST_KAKIKOMI',
    /** レスウィンドウの初期化 */
    CHAT_INIT: 'CHAT_INIT',
};
exports.keyCode = {
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsYUFBYSxHQUFHO0lBQzNCLGFBQWE7SUFDYixjQUFjLEVBQUUsY0FBYztJQUU5QixhQUFhO0lBQ2IsWUFBWSxFQUFFLFlBQVk7SUFFMUIsY0FBYyxFQUFFLGNBQWM7SUFDOUIsZUFBZSxFQUFFLGVBQWU7SUFFaEMsZ0JBQWdCO0lBQ2hCLG9CQUFvQixFQUFFLG9CQUFvQjtJQUUxQyxzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsc0JBQXNCLEVBQUUsd0JBQXdCO0lBRWhELHFCQUFxQjtJQUNyQixvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsV0FBVztJQUNYLGtCQUFrQixFQUFFLG9CQUFvQjtJQUN4QyxXQUFXO0lBQ1gscUJBQXFCLEVBQUUsdUJBQXVCO0lBRTlDLGNBQWM7SUFDZCxvQkFBb0IsRUFBRSxzQkFBc0I7SUFFNUMsWUFBWTtJQUNaLGdCQUFnQixFQUFFLGtCQUFrQjtJQUVwQyxZQUFZO0lBQ1osZUFBZSxFQUFFLGlCQUFpQjtJQUVsQyxXQUFXO0lBQ1gsa0JBQWtCLEVBQUUsb0JBQW9CO0lBRXhDLGtCQUFrQjtJQUNsQixTQUFTLEVBQUUsV0FBVztDQUN2QixDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUc7SUFDckIsS0FBSyxFQUFFLEVBQUU7SUFDVCxLQUFLLEVBQUUsRUFBRTtJQUNULElBQUksRUFBRSxFQUFFO0NBQ1QsQ0FBQyJ9

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
    // 掲示板追加ダイアログのボタン
    document.getElementById('dialog-add-board-button-cancel').onclick = dialogAddBoardButtonCancel;
    document.getElementById('dialog-add-board-button-ok').onclick = dialogAddBoardButtonOk;
    document.getElementById('dialog-add-board-button-fetchBoard').onclick = dialogAddBoardButtonFetchBoard;
    // 掲示板削除ダイアログのボタン
    document.getElementById('dialog-delete-board-button-cancel').onclick = dialogdeleteBoardButtonCancel;
    document.getElementById('dialog-delete-board-button-ok').onclick = dialogdialogdeleteBoardButtonOk;
    showBoardList();
    console.debug('[renderer.js]DOM Content Loaded');
});
/** 板追加ボタンクリック */
var addBoard = function () {
    console.log('[addBoard]');
    // 掲示板追加ダイアログを表示
    var alertDialog = document.getElementById('dialog-add-board');
    document.getElementById('dialog-add-board-name').value = '';
    document.getElementById('dialog-add-board-url').value = '';
    alertDialog.showModal();
};
// 掲示板追加ダイアログでの操作
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
        ipcRenderer.invoke(const_1.electronEvent.MAIN_ADD_BOARDLIST, { name: name, url: url });
        // 名前とURLを抜き出して登録処理に回す
        showBoardList();
        document.getElementById('dialog-add-board').close();
        return [2 /*return*/];
    });
}); };
/** 板追加ダイアログの板情報取得 */
var dialogAddBoardButtonFetchBoard = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = document.getElementById('dialog-add-board-url').value;
                if (!url)
                    return [2 /*return*/];
                if (!url.match(/^http.+$/))
                    return [2 /*return*/];
                return [4 /*yield*/, ipcRenderer.invoke(const_1.electronEvent.MAIN_FETCH_BOARDINFO, url)];
            case 1:
                result = _a.sent();
                // 板情報をセット
                if (result.status === 'ok') {
                    document.getElementById('dialog-add-board-name').value = result.boardName;
                    document.getElementById('dialog-add-board-url').value = result.boardUrl;
                }
                return [2 /*return*/];
        }
    });
}); };
/** 板一覧表示 */
var showBoardList = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, boardList, listul, domStr, keyIndex;
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
                    return "<div class=\"boardItem\">\n                <button class=\"boardName mdl-button mdl-js-button\">\n                  <div id=\"board_item_" + index + "\" data-url=\"" + item.url + "\">" + item.name + "</div>\n                  <div class=\"mdl-tooltip\" data-mdl-for=\"board_item_" + index + "\">\n                    " + item.url + "\n                  </div>\n                </button>\n                <button>x</button>\n              </div>\n              ";
                })
                    .join('');
                listul.innerHTML = domStr;
                keyIndex = 0;
                listul.childNodes.forEach(function (item, key) {
                    // console.log(item);
                    // console.log(key);
                    // console.log(item.childNodes);
                    if (item.tagName === 'DIV') {
                        var num_1 = 0;
                        item.childNodes.forEach(function (value, index) {
                            var tagName = value.tagName;
                            if (tagName === 'BUTTON') {
                                var url_1 = boardList[keyIndex].url;
                                if (num_1 === 0) {
                                    value.onclick = function () { return showBoard(url_1); };
                                    num_1++;
                                }
                                else {
                                    value.onclick = function () { return showDeleteBoardDialog(url_1); };
                                }
                            }
                        });
                        keyIndex++;
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
/** スレ一覧を表示 */
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
/** 掲示板削除ダイアログ */
var showDeleteBoardDialog = function (boardUrl) {
    //
    document.getElementById('dialog-delete-board-url').value = boardUrl;
    var alertDialog = document.getElementById('dialog-delete-board');
    alertDialog.showModal();
};
var dialogdeleteBoardButtonCancel = function () { return document.getElementById('dialog-delete-board').close(); };
var dialogdialogdeleteBoardButtonOk = function () { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        console.log('[dialogdialogdeleteBoardButtonOk]');
        url = document.getElementById('dialog-delete-board-url').value;
        console.log(url + " \u3092\u524A\u9664");
        ipcRenderer.invoke(const_1.electronEvent.MAIN_DELETE_BOARDLIST, url);
        showBoardList();
        document.getElementById('dialog-delete-board').close();
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFnQztBQUNoQyw4REFBK0I7QUFDL0IsdUNBQThDO0FBRTlDLElBQU0sV0FBVyxHQUFHLGtCQUFRLENBQUMsV0FBVyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUMzQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBc0IsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzdFLGlCQUFpQjtJQUNoQixRQUFRLENBQUMsY0FBYyxDQUFDLGdDQUFnQyxDQUFzQixDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztJQUNwSCxRQUFRLENBQUMsY0FBYyxDQUFDLDRCQUE0QixDQUFzQixDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztJQUM1RyxRQUFRLENBQUMsY0FBYyxDQUFDLG9DQUFvQyxDQUFzQixDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQztJQUU3SCxpQkFBaUI7SUFDaEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQ0FBbUMsQ0FBc0IsQ0FBQyxPQUFPLEdBQUcsNkJBQTZCLENBQUM7SUFDMUgsUUFBUSxDQUFDLGNBQWMsQ0FBQywrQkFBK0IsQ0FBc0IsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7SUFFekgsYUFBYSxFQUFFLENBQUM7SUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ25ELENBQUMsQ0FBQyxDQUFDO0FBRUgsaUJBQWlCO0FBQ2pCLElBQU0sUUFBUSxHQUFHO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUUxQixnQkFBZ0I7SUFDaEIsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztJQUM5RSxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFzQixDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBc0IsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2hGLFdBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCO0FBQ2pCLElBQU0sMEJBQTBCLEdBQUcsY0FBTSxPQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBNUQsQ0FBNEQsQ0FBQztBQUN0RyxJQUFNLHNCQUFzQixHQUFHOzs7UUFDdkIsSUFBSSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQXNCLENBQUMsS0FBSyxDQUFDO1FBQ3BGLEdBQUcsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFzQixDQUFDLEtBQUssQ0FBQztRQUV4RixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRztZQUFFLHNCQUFPO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUFFLHNCQUFPO1FBRXJDLGdIQUFnSDtRQUNoSCxXQUFXLENBQUMsTUFBTSxDQUFDLHFCQUFhLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7UUFFcEUsc0JBQXNCO1FBQ3RCLGFBQWEsRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7S0FDOUQsQ0FBQztBQUVGLHFCQUFxQjtBQUNyQixJQUFNLDhCQUE4QixHQUFHOzs7OztnQkFDL0IsR0FBRyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQXNCLENBQUMsS0FBSyxDQUFDO2dCQUN4RixJQUFJLENBQUMsR0FBRztvQkFBRSxzQkFBTztnQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO29CQUFFLHNCQUFPO2dCQUVwQixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLHFCQUFhLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLEVBQUE7O2dCQUExRSxNQUFNLEdBQUcsU0FBaUU7Z0JBRWhGLFVBQVU7Z0JBQ1YsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtvQkFDekIsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBc0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDL0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBc0IsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztpQkFDL0Y7Ozs7S0FDRixDQUFDO0FBRUYsWUFBWTtBQUNaLElBQU0sYUFBYSxHQUFHOzs7O29CQUMwQixxQkFBTSxXQUFXLENBQUMsTUFBTSxDQUFDLHFCQUFhLENBQUMsc0JBQXNCLENBQUMsRUFBQTs7Z0JBQXRHLElBQUksR0FBb0MsU0FBOEQ7Z0JBQ3RHLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxzQkFBRyxDQUFDLElBQUksQ0FBQyx1Q0FBc0IsU0FBUyxDQUFDLE1BQVEsQ0FBQyxDQUFDO2dCQUU3QyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQWdCLENBQUM7Z0JBRTdELE1BQU0sR0FBRyxTQUFTO3FCQUNyQixHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztvQkFDZixPQUFPLDhJQUUyQixLQUFLLHNCQUFlLElBQUksQ0FBQyxHQUFHLFdBQUssSUFBSSxDQUFDLElBQUksdUZBQ1osS0FBSyxpQ0FDckQsSUFBSSxDQUFDLEdBQUcsb0lBS2YsQ0FBQztnQkFDWixDQUFDLENBQUM7cUJBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVaLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO2dCQUV0QixRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFXO29CQUMxQyxxQkFBcUI7b0JBQ3JCLG9CQUFvQjtvQkFDcEIsZ0NBQWdDO29CQUVoQyxJQUFLLElBQW9CLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTt3QkFDM0MsSUFBSSxLQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7NEJBQ25DLElBQU0sT0FBTyxHQUFJLEtBQXFCLENBQUMsT0FBTyxDQUFDOzRCQUMvQyxJQUFJLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0NBQ3hCLElBQU0sS0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0NBQ3BDLElBQUksS0FBRyxLQUFLLENBQUMsRUFBRTtvQ0FDWixLQUFxQixDQUFDLE9BQU8sR0FBRyxjQUFNLE9BQUEsU0FBUyxDQUFDLEtBQUcsQ0FBQyxFQUFkLENBQWMsQ0FBQztvQ0FDdEQsS0FBRyxFQUFFLENBQUM7aUNBQ1A7cUNBQU07b0NBQ0osS0FBcUIsQ0FBQyxPQUFPLEdBQUcsY0FBTSxPQUFBLHFCQUFxQixDQUFDLEtBQUcsQ0FBQyxFQUExQixDQUEwQixDQUFDO2lDQUNuRTs2QkFDRjt3QkFDSCxDQUFDLENBQUMsQ0FBQzt3QkFFSCxRQUFRLEVBQUUsQ0FBQztxQkFDWjtnQkFDSCxDQUFDLENBQUMsQ0FBQzs7OztLQUNKLENBQUM7QUFFRixjQUFjO0FBQ2QsSUFBTSxTQUFTLEdBQUcsVUFBTyxRQUFnQjs7OztvQkFNakMscUJBQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxxQkFBYSxDQUFDLG9CQUFvQixFQUFFLFFBQVEsQ0FBQyxFQUFBOztnQkFKdEUsSUFBSSxHQUlKLFNBQXNFO2dCQUd0RSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQWdCLENBQUM7Z0JBQzlELE1BQU0sR0FBRyxJQUFJO3FCQUNoQixHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztvQkFDZixPQUFPLGlHQUN5QixLQUFLLFdBQUssSUFBSSxDQUFDLElBQUksb0NBQ2pDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQztxQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBRVosTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBRTFCLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQVc7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2hCLElBQW9CLENBQUMsT0FBTyxHQUFHO3dCQUM5QixPQUFPO3dCQUNQLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7d0JBQzFCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxHQUFLLENBQUMsQ0FBQzt3QkFDNUIsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBYSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUQsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDOzs7O0tBQ0osQ0FBQztBQUVGLGlCQUFpQjtBQUNqQixJQUFNLHFCQUFxQixHQUFHLFVBQUMsUUFBZ0I7SUFDN0MsRUFBRTtJQUNELFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQXNCLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUMxRixJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFnQixDQUFDO0lBQ2pGLFdBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUYsSUFBTSw2QkFBNkIsR0FBRyxjQUFNLE9BQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBUyxDQUFDLEtBQUssRUFBRSxFQUEvRCxDQUErRCxDQUFDO0FBQzVHLElBQU0sK0JBQStCLEdBQUc7OztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFFM0MsR0FBRyxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQXNCLENBQUMsS0FBSyxDQUFDO1FBRTNGLE9BQU8sQ0FBQyxHQUFHLENBQUksR0FBRyx3QkFBTSxDQUFDLENBQUM7UUFDMUIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxxQkFBYSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdELGFBQWEsRUFBRSxDQUFDO1FBQ2YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDOzs7S0FDakUsQ0FBQyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvZWxlY3Ryb25BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3Njb3BlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc2Zvcm0vb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zZm9ybS9zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc2Zvcm0vdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvdHJhbnNwb3J0cy9jb25zb2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zcG9ydHMvZmlsZS9maWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1sb2cvc3JjL3RyYW5zcG9ydHMvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc3BvcnRzL2ZpbGUvcGFja2FnZUpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvZy9zcmMvdHJhbnNwb3J0cy9maWxlL3ZhcmlhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc3BvcnRzL2lwYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9nL3NyYy90cmFuc3BvcnRzL3JlbW90ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyZXIvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZWxlY3Ryb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJldmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEphOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDMUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsR0FBRztBQUNsQixlQUFlLEVBQUU7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Ozs7O0FDMU0zQyxxQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3JlbmRlcmVyL3JlbmRlcmVyLnRzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNvbWUgaWRlYXMgZnJvbSBzaW5kcmVzb3JodXMvZWxlY3Ryb24tdW5oYW5kbGVkXG4gKi9cblxudmFyIGVsZWN0cm9uQXBpID0gcmVxdWlyZSgnLi9lbGVjdHJvbkFwaScpO1xuXG52YXIgaXNBdHRhY2hlZCA9IGZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhdGNoRXJyb3JzKG9wdGlvbnMpIHtcbiAgaWYgKGlzQXR0YWNoZWQpIHJldHVybiB7IHN0b3A6IHN0b3AgfTtcbiAgaXNBdHRhY2hlZCA9IHRydWU7XG5cbiAgaWYgKHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uUmVuZGVyZXJFcnJvcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIG9uUmVuZGVyZXJSZWplY3Rpb24pO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgb25FcnJvcik7XG4gICAgcHJvY2Vzcy5vbigndW5oYW5kbGVkUmVqZWN0aW9uJywgb25SZWplY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIHsgc3RvcDogc3RvcCB9O1xuXG4gIGZ1bmN0aW9uIG9uRXJyb3IoZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMub25FcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAob3B0aW9ucy5vbkVycm9yKGUpID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvcHRpb25zLmxvZyhlKTtcblxuICAgICAgaWYgKG9wdGlvbnMuc2hvd0RpYWxvZyAmJiBlLm5hbWUuaW5kZXhPZignVW5oYW5kbGVkUmVqZWN0aW9uJykgPCAwKSB7XG4gICAgICAgIHZhciB0eXBlID0gcHJvY2Vzcy50eXBlIHx8ICdtYWluJztcbiAgICAgICAgZWxlY3Ryb25BcGkuc2hvd0Vycm9yQm94KFxuICAgICAgICAgICdBIEphdmFTY3JpcHQgZXJyb3Igb2NjdXJyZWQgaW4gdGhlICcgKyB0eXBlICsgJyBwcm9jZXNzJyxcbiAgICAgICAgICBlLnN0YWNrXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAobG9nRXJyb3IpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmIChyZWFzb24gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgdmFyIHJlYXNvbk5hbWUgPSAnVW5oYW5kbGVkUmVqZWN0aW9uICcgKyByZWFzb24ubmFtZTtcblxuICAgICAgdmFyIGVyclByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihyZWFzb24pO1xuICAgICAgdmFyIG5hbWVQcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZXJyUHJvdG90eXBlLCAnbmFtZScpO1xuICAgICAgaWYgKCFuYW1lUHJvcGVydHkgfHwgIW5hbWVQcm9wZXJ0eS53cml0YWJsZSkge1xuICAgICAgICByZWFzb24gPSBuZXcgRXJyb3IocmVhc29uLm1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICByZWFzb24ubmFtZSA9IHJlYXNvbk5hbWU7XG4gICAgICBvbkVycm9yKHJlYXNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGVycm9yID0gbmV3IEVycm9yKEpTT04uc3RyaW5naWZ5KHJlYXNvbikpO1xuICAgIGVycm9yLm5hbWUgPSAnVW5oYW5kbGVkUmVqZWN0aW9uJztcbiAgICBvbkVycm9yKGVycm9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUmVuZGVyZXJFcnJvcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgb25FcnJvcihldmVudC5lcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBvblJlbmRlcmVyUmVqZWN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBvblJlamVjdGlvbihldmVudC5yZWFzb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpc0F0dGFjaGVkID0gZmFsc2U7XG5cbiAgICBpZiAocHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvblJlbmRlcmVyRXJyb3IpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VuaGFuZGxlZHJlamVjdGlvbicsIG9uUmVuZGVyZXJSZWplY3Rpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLnJlbW92ZUxpc3RlbmVyKCd1bmNhdWdodEV4Y2VwdGlvbicsIG9uRXJyb3IpO1xuICAgICAgcHJvY2Vzcy5yZW1vdmVMaXN0ZW5lcigndW5oYW5kbGVkUmVqZWN0aW9uJywgb25SZWplY3Rpb24pO1xuICAgIH1cbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTcGxpdCBFbGVjdHJvbiBBUEkgZnJvbSB0aGUgbWFpbiBjb2RlXG4gKi9cblxudmFyIGVsZWN0cm9uO1xudHJ5IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGdsb2JhbC1yZXF1aXJlXG4gIGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbn0gY2F0Y2ggKGUpIHtcbiAgZWxlY3Ryb24gPSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0TmFtZTogZ2V0TmFtZSxcbiAgZ2V0UGF0aDogZ2V0UGF0aCxcbiAgZ2V0VmVyc2lvbjogZ2V0VmVyc2lvbixcbiAgaXNEZXY6IGlzRGV2LFxuICBpc0VsZWN0cm9uOiBpc0VsZWN0cm9uLFxuICBpc0lwY0NoYW5uZWxMaXN0ZW5lZDogaXNJcGNDaGFubmVsTGlzdGVuZWQsXG4gIGxvYWRSZW1vdGVNb2R1bGU6IGxvYWRSZW1vdGVNb2R1bGUsXG4gIG9uSXBjOiBvbklwYyxcbiAgc2VuZElwYzogc2VuZElwYyxcbiAgc2hvd0Vycm9yQm94OiBzaG93RXJyb3JCb3gsXG59O1xuXG5mdW5jdGlvbiBnZXRBcHAoKSB7XG4gIHJldHVybiBnZXRFbGVjdHJvbk1vZHVsZSgnYXBwJyk7XG59XG5cbmZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gIHZhciBhcHAgPSBnZXRBcHAoKTtcbiAgaWYgKCFhcHApIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAnbmFtZScgaW4gYXBwID8gYXBwLm5hbWUgOiBhcHAuZ2V0TmFtZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVjdHJvbk1vZHVsZShuYW1lKSB7XG4gIGlmICghZWxlY3Ryb24pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmIChlbGVjdHJvbltuYW1lXSkge1xuICAgIHJldHVybiBlbGVjdHJvbltuYW1lXTtcbiAgfVxuXG4gIGlmIChlbGVjdHJvbi5yZW1vdGUpIHtcbiAgICByZXR1cm4gZWxlY3Ryb24ucmVtb3RlW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldElwYygpIHtcbiAgaWYgKHByb2Nlc3MudHlwZSA9PT0gJ2Jyb3dzZXInICYmIGVsZWN0cm9uICYmIGVsZWN0cm9uLmlwY01haW4pIHtcbiAgICByZXR1cm4gZWxlY3Ryb24uaXBjTWFpbjtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgJiYgZWxlY3Ryb24gJiYgZWxlY3Ryb24uaXBjUmVuZGVyZXIpIHtcbiAgICByZXR1cm4gZWxlY3Ryb24uaXBjUmVuZGVyZXI7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG5mdW5jdGlvbiBnZXRQYXRoKG5hbWUpIHtcbiAgdmFyIGFwcCA9IGdldEFwcCgpO1xuICBpZiAoIWFwcCkgcmV0dXJuIG51bGw7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gYXBwLmdldFBhdGgobmFtZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRSZW1vdGUoKSB7XG4gIGlmIChlbGVjdHJvbiAmJiBlbGVjdHJvbi5yZW1vdGUpIHtcbiAgICByZXR1cm4gZWxlY3Ryb24ucmVtb3RlO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldFZlcnNpb24oKSB7XG4gIHZhciBhcHAgPSBnZXRBcHAoKTtcbiAgaWYgKCFhcHApIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAndmVyc2lvbicgaW4gYXBwID8gYXBwLnZlcnNpb24gOiBhcHAuZ2V0VmVyc2lvbigpO1xufVxuXG5mdW5jdGlvbiBpc0RldigpIHtcbiAgLy8gYmFzZWQgb24gc2luZHJlc29yaHVzL2VsZWN0cm9uLWlzLWRldlxuICB2YXIgYXBwID0gZ2V0QXBwKCk7XG4gIGlmICghYXBwKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuICFhcHAuaXNQYWNrYWdlZCB8fCBwcm9jZXNzLmVudi5FTEVDVFJPTl9JU19ERVYgPT09ICcxJztcbn1cblxuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcbiAgcmV0dXJuIHByb2Nlc3MudHlwZSA9PT0gJ2Jyb3dzZXInIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJztcbn1cblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgcHJvY2VzcyBsaXN0ZW5zIGZvciB0aGUgSVBDIGNoYW5uZWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXG4gKi9cbmZ1bmN0aW9uIGlzSXBjQ2hhbm5lbExpc3RlbmVkKGNoYW5uZWwpIHtcbiAgdmFyIGlwYyA9IGdldElwYygpO1xuICByZXR1cm4gaXBjID8gaXBjLmxpc3RlbmVyQ291bnQoY2hhbm5lbCkgPiAwIDogZmFsc2U7XG59XG5cbi8qKlxuICogVHJ5IHRvIGxvYWQgdGhlIG1vZHVsZSBpbiB0aGUgb3Bwb3NpdGUgcHJvY2Vzc1xuICogQHBhcmFtIHtzdHJpbmd9IG1vZHVsZU5hbWVcbiAqL1xuZnVuY3Rpb24gbG9hZFJlbW90ZU1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIGlmIChwcm9jZXNzLnR5cGUgPT09ICdicm93c2VyJykge1xuICAgIGdldEFwcCgpLm9uKCd3ZWItY29udGVudHMtY3JlYXRlZCcsIGZ1bmN0aW9uIChlLCBjb250ZW50cykge1xuICAgICAgdmFyIHByb21pc2UgPSBjb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChcbiAgICAgICAgJ3RyeSB7cmVxdWlyZShcIicgKyBtb2R1bGVOYW1lICsgJ1wiKX0gY2F0Y2goZSl7fTsgdm9pZCAwOydcbiAgICAgICk7XG5cbiAgICAgIC8vIERvIG5vdGhpbmcgb24gZXJyb3IsIGp1c3QgcHJldmVudCBVbmhhbmRsZWQgcmVqZWN0aW9uXG4gICAgICBpZiAocHJvbWlzZSAmJiB0eXBlb2YgcHJvbWlzZS5jYXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLmNhdGNoKGZ1bmN0aW9uICgpIHt9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIGlmIChwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICB0cnkge1xuICAgICAgZ2V0UmVtb3RlKCkucmVxdWlyZShtb2R1bGVOYW1lKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBDYW4ndCBiZSByZXF1aXJlZC4gV2VicGFjaz9cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBMaXN0ZW4gdG8gYXN5bmMgbWVzc2FnZXMgc2VudCBmcm9tIG9wcG9zaXRlIHByb2Nlc3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaGFubmVsXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lclxuICovXG5mdW5jdGlvbiBvbklwYyhjaGFubmVsLCBsaXN0ZW5lcikge1xuICB2YXIgaXBjID0gZ2V0SXBjKCk7XG4gIGlmIChpcGMpIHtcbiAgICBpcGMub24oY2hhbm5lbCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbi8qKlxuICogU2VudCBhIG1lc3NhZ2UgdG8gb3Bwb3NpdGUgcHJvY2Vzc1xuICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxcbiAqIEBwYXJhbSB7YW55fSBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIHNlbmRJcGMoY2hhbm5lbCwgbWVzc2FnZSkge1xuICBpZiAocHJvY2Vzcy50eXBlID09PSAnYnJvd3NlcicpIHtcbiAgICBzZW5kSXBjVG9SZW5kZXJlcihjaGFubmVsLCBtZXNzYWdlKTtcbiAgfSBlbHNlIGlmIChwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICBzZW5kSXBjVG9NYWluKGNoYW5uZWwsIG1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRJcGNUb01haW4oY2hhbm5lbCwgbWVzc2FnZSkge1xuICB2YXIgaXBjID0gZ2V0SXBjKCk7XG4gIGlmIChpcGMpIHtcbiAgICBpcGMuc2VuZChjaGFubmVsLCBtZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZW5kSXBjVG9SZW5kZXJlcihjaGFubmVsLCBtZXNzYWdlKSB7XG4gIGlmICghZWxlY3Ryb24gfHwgIWVsZWN0cm9uLkJyb3dzZXJXaW5kb3cpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVjdHJvbi5Ccm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh3bmQpIHtcbiAgICB3bmQud2ViQ29udGVudHMgJiYgd25kLndlYkNvbnRlbnRzLnNlbmQoY2hhbm5lbCwgbWVzc2FnZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3JCb3godGl0bGUsIG1lc3NhZ2UpIHtcbiAgdmFyIGRpYWxvZyA9IGdldEVsZWN0cm9uTW9kdWxlKCdkaWFsb2cnKTtcbiAgaWYgKCFkaWFsb2cpIHJldHVybjtcblxuICBkaWFsb2cuc2hvd0Vycm9yQm94KHRpdGxlLCBtZXNzYWdlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNhdGNoRXJyb3JzID0gcmVxdWlyZSgnLi9jYXRjaEVycm9ycycpO1xudmFyIGVsZWN0cm9uQXBpID0gcmVxdWlyZSgnLi9lbGVjdHJvbkFwaScpO1xudmFyIGxvZyA9IHJlcXVpcmUoJy4vbG9nJykubG9nO1xudmFyIHNjb3BlRmFjdG9yeSA9IHJlcXVpcmUoJy4vc2NvcGUnKTtcbnZhciB0cmFuc3BvcnRDb25zb2xlID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2NvbnNvbGUnKTtcbnZhciB0cmFuc3BvcnRGaWxlID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2ZpbGUnKTtcbnZhciB0cmFuc3BvcnRJcGMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaXBjJyk7XG52YXIgdHJhbnNwb3J0UmVtb3RlID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL3JlbW90ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSgnZGVmYXVsdCcpO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2dJZFxuICogQHJldHVybiB7RWxlY3Ryb25Mb2cuRWxlY3Ryb25Mb2d9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZShsb2dJZCkge1xuICAvKipcbiAgICogQHR5cGUge0VsZWN0cm9uTG9nLkVsZWN0cm9uTG9nfVxuICAgKi9cbiAgdmFyIGluc3RhbmNlID0ge1xuICAgIGNhdGNoRXJyb3JzOiBmdW5jdGlvbiBjYWxsQ2F0Y2hFcnJvcnMob3B0aW9ucykge1xuICAgICAgdmFyIG9wdHMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIGxvZzogaW5zdGFuY2UuZXJyb3IsXG4gICAgICAgIHNob3dEaWFsb2c6IHByb2Nlc3MudHlwZSA9PT0gJ2Jyb3dzZXInLFxuICAgICAgfSwgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICAgIGNhdGNoRXJyb3JzKG9wdHMpO1xuICAgIH0sXG4gICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgZnVuY3Rpb25zOiB7fSxcbiAgICBob29rczogW10sXG4gICAgaXNEZXY6IGVsZWN0cm9uQXBpLmlzRGV2KCksXG4gICAgbGV2ZWxzOiBbJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICd2ZXJib3NlJywgJ2RlYnVnJywgJ3NpbGx5J10sXG4gICAgbG9nSWQ6IGxvZ0lkLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgcHJvY2Vzc1R5cGU6IHByb2Nlc3MudHlwZSxcbiAgICB9LFxuICB9O1xuXG4gIGluc3RhbmNlLnNjb3BlID0gc2NvcGVGYWN0b3J5KGluc3RhbmNlKTtcblxuICBpbnN0YW5jZS50cmFuc3BvcnRzID0ge1xuICAgIGNvbnNvbGU6IHRyYW5zcG9ydENvbnNvbGUoaW5zdGFuY2UpLFxuICAgIGZpbGU6IHRyYW5zcG9ydEZpbGUoaW5zdGFuY2UpLFxuICAgIHJlbW90ZTogdHJhbnNwb3J0UmVtb3RlKGluc3RhbmNlKSxcbiAgICBpcGM6IHRyYW5zcG9ydElwYyhpbnN0YW5jZSksXG4gIH07XG5cbiAgaW5zdGFuY2UubGV2ZWxzLmZvckVhY2goZnVuY3Rpb24gKGxldmVsKSB7XG4gICAgaW5zdGFuY2VbbGV2ZWxdID0gbG9nLmJpbmQobnVsbCwgaW5zdGFuY2UsIHsgbGV2ZWw6IGxldmVsIH0pO1xuICAgIGluc3RhbmNlLmZ1bmN0aW9uc1tsZXZlbF0gPSBpbnN0YW5jZVtsZXZlbF07XG4gIH0pO1xuXG4gIGluc3RhbmNlLmxvZyA9IGxvZy5iaW5kKG51bGwsIGluc3RhbmNlLCB7IGxldmVsOiAnaW5mbycgfSk7XG4gIGluc3RhbmNlLmZ1bmN0aW9ucy5sb2cgPSBpbnN0YW5jZS5sb2c7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcGFyZUxldmVsczogY29tcGFyZUxldmVscyxcbiAgbG9nOiBsb2csXG4gIHJ1blRyYW5zcG9ydDogcnVuVHJhbnNwb3J0LFxuICBydW5UcmFuc3BvcnRzOiBydW5UcmFuc3BvcnRzLFxufTtcblxuZnVuY3Rpb24gbG9nKGVsZWN0cm9uTG9nLCBvcHRpb25zKSB7XG4gIHZhciB0cmFuc3BvcnRzID0gZWxlY3Ryb25Mb2cudHJhbnNwb3J0cztcblxuICB2YXIgbWVzc2FnZSA9IHtcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxuICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgbGV2ZWw6IG9wdGlvbnMubGV2ZWwsXG4gICAgc2NvcGU6IG9wdGlvbnMuc2NvcGUgPyBvcHRpb25zLnNjb3BlLnRvSlNPTigpIDogbnVsbCxcbiAgICB2YXJpYWJsZXM6IGVsZWN0cm9uTG9nLnZhcmlhYmxlcyxcbiAgfTtcblxuICBydW5UcmFuc3BvcnRzKHRyYW5zcG9ydHMsIG1lc3NhZ2UsIGVsZWN0cm9uTG9nKTtcbn1cblxuZnVuY3Rpb24gcnVuVHJhbnNwb3J0cyh0cmFuc3BvcnRzLCBtZXNzYWdlLCBlbGVjdHJvbkxvZykge1xuICBmb3IgKHZhciBpIGluIHRyYW5zcG9ydHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRyYW5zcG9ydHMsIGkpKSB7XG4gICAgICBydW5UcmFuc3BvcnQodHJhbnNwb3J0c1tpXSwgbWVzc2FnZSwgZWxlY3Ryb25Mb2cpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBydW5UcmFuc3BvcnQodHJhbnNwb3J0LCBtZXNzYWdlLCBlbGVjdHJvbkxvZykge1xuICBpZiAodHlwZW9mIHRyYW5zcG9ydCAhPT0gJ2Z1bmN0aW9uJyB8fCB0cmFuc3BvcnQubGV2ZWwgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFjb21wYXJlTGV2ZWxzKGVsZWN0cm9uTG9nLmxldmVscywgdHJhbnNwb3J0LmxldmVsLCBtZXNzYWdlLmxldmVsKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1lc3NhZ2UgPSBydW5Ib29rcyhlbGVjdHJvbkxvZy5ob29rcywgdHJhbnNwb3J0LCBtZXNzYWdlKTtcblxuICBpZiAobWVzc2FnZSkge1xuICAgIHRyYW5zcG9ydChtZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlTGV2ZWxzKGxldmVscywgcGFzc0xldmVsLCBjaGVja0xldmVsKSB7XG4gIHZhciBwYXNzID0gbGV2ZWxzLmluZGV4T2YocGFzc0xldmVsKTtcbiAgdmFyIGNoZWNrID0gbGV2ZWxzLmluZGV4T2YoY2hlY2tMZXZlbCk7XG4gIGlmIChjaGVjayA9PT0gLTEgfHwgcGFzcyA9PT0gLTEpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBjaGVjayA8PSBwYXNzO1xufVxuXG5mdW5jdGlvbiBydW5Ib29rcyhob29rcywgdHJhbnNwb3J0LCBtZXNzYWdlKSB7XG4gIGlmICghaG9va3MgfHwgIWhvb2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBsdXNwbHVzXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBtZXNzYWdlID0gaG9va3NbaV0obWVzc2FnZSwgdHJhbnNwb3J0KTtcbiAgICBpZiAoIW1lc3NhZ2UpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBsb2cgPSByZXF1aXJlKCcuL2xvZycpLmxvZztcblxubW9kdWxlLmV4cG9ydHMgPSBzY29wZUZhY3Rvcnk7XG5cbi8qKlxuICogQHBhcmFtIHtFbGVjdHJvbkxvZy5FbGVjdHJvbkxvZ30gZWxlY3Ryb25Mb2dcbiAqIEByZXR1cm4ge0VsZWN0cm9uTG9nLlNjb3BlfVxuICovXG5mdW5jdGlvbiBzY29wZUZhY3RvcnkoZWxlY3Ryb25Mb2cpIHtcbiAgc2NvcGUubGFiZWxQYWRkaW5nID0gdHJ1ZTtcbiAgc2NvcGUuZGVmYXVsdExhYmVsID0gJyc7XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHNjb3BlLm1heExhYmVsTGVuZ3RoID0gMDtcblxuICAvKipcbiAgICogQHR5cGUge3R5cGVvZiBnZXRPcHRpb25zfVxuICAgKiBAcGFja2FnZVxuICAgKi9cbiAgc2NvcGUuZ2V0T3B0aW9ucyA9IGdldE9wdGlvbnM7XG5cbiAgcmV0dXJuIHNjb3BlO1xuXG4gIGZ1bmN0aW9uIHNjb3BlKGxhYmVsKSB7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgdG9KU09OOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBlbGVjdHJvbkxvZy5sZXZlbHMuZm9yRWFjaChmdW5jdGlvbiAobGV2ZWwpIHtcbiAgICAgIGluc3RhbmNlW2xldmVsXSA9IGxvZy5iaW5kKG51bGwsIGVsZWN0cm9uTG9nLCB7XG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgc2NvcGU6IGluc3RhbmNlLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5sb2cgPSBpbnN0YW5jZS5pbmZvO1xuXG4gICAgc2NvcGUubWF4TGFiZWxMZW5ndGggPSBNYXRoLm1heChzY29wZS5tYXhMYWJlbExlbmd0aCwgbGFiZWwubGVuZ3RoKTtcblxuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRMYWJlbDogc2NvcGUuZGVmYXVsdExhYmVsLFxuICAgICAgbGFiZWxMZW5ndGg6IGdldExhYmVsTGVuZ3RoKCksXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExhYmVsTGVuZ3RoKCkge1xuICAgIGlmIChzY29wZS5sYWJlbFBhZGRpbmcgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBzY29wZS5tYXhMYWJlbExlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAoc2NvcGUubGFiZWxQYWRkaW5nID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzY29wZS5sYWJlbFBhZGRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gc2NvcGUubGFiZWxQYWRkaW5nO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3QgPSByZXF1aXJlKCcuL29iamVjdCcpO1xudmFyIHN0eWxlID0gcmVxdWlyZSgnLi9zdHlsZScpO1xudmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZW1wbGF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlBbnNpU3R5bGVzOiBzdHlsZS5hcHBseUFuc2lTdHlsZXMsXG4gIGNvbmNhdEZpcnN0U3RyaW5nRWxlbWVudHM6IHRlbXBsYXRlLmNvbmNhdEZpcnN0U3RyaW5nRWxlbWVudHMsXG4gIGN1c3RvbUZvcm1hdHRlckZhY3Rvcnk6IGN1c3RvbUZvcm1hdHRlckZhY3RvcnksXG4gIG1heERlcHRoRmFjdG9yeTogb2JqZWN0Lm1heERlcHRoRmFjdG9yeSxcbiAgcmVtb3ZlU3R5bGVzOiBzdHlsZS5yZW1vdmVTdHlsZXMsXG4gIHRvSlNPTjogb2JqZWN0LnRvSlNPTixcbiAgdG9TdHJpbmc6IG9iamVjdC50b1N0cmluZyxcbiAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG59O1xuXG5mdW5jdGlvbiBjdXN0b21Gb3JtYXR0ZXJGYWN0b3J5KGN1c3RvbUZvcm1hdCwgY29uY2F0Rmlyc3QsIHNjb3BlT3B0aW9ucykge1xuICBpZiAodHlwZW9mIGN1c3RvbUZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gY3VzdG9tU3RyaW5nRm9ybWF0dGVyKGRhdGEsIG1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0obWVzc2FnZSwgW1xuICAgICAgICB0ZW1wbGF0ZS50ZW1wbGF0ZVZhcmlhYmxlcyxcbiAgICAgICAgdGVtcGxhdGUudGVtcGxhdGVTY29wZUZhY3Rvcnkoc2NvcGVPcHRpb25zKSxcbiAgICAgICAgdGVtcGxhdGUudGVtcGxhdGVEYXRlLFxuICAgICAgICB0ZW1wbGF0ZS50ZW1wbGF0ZVRleHQsXG4gICAgICAgIGNvbmNhdEZpcnN0ICYmIHRlbXBsYXRlLmNvbmNhdEZpcnN0U3RyaW5nRWxlbWVudHMsXG4gICAgICBdLCBbY3VzdG9tRm9ybWF0XS5jb25jYXQoZGF0YSkpO1xuICAgIH07XG4gIH1cblxuICBpZiAodHlwZW9mIGN1c3RvbUZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmdW5jdGlvbiBjdXN0b21GdW5jdGlvbkZvcm1hdHRlcihkYXRhLCBtZXNzYWdlKSB7XG4gICAgICB2YXIgbW9kaWZpZWRNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSwgeyBkYXRhOiBkYXRhIH0pO1xuICAgICAgdmFyIHRleHRzID0gY3VzdG9tRm9ybWF0KG1vZGlmaWVkTWVzc2FnZSwgZGF0YSk7XG4gICAgICByZXR1cm4gW10uY29uY2F0KHRleHRzKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChkYXRhKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKG1lc3NhZ2UsIHRyYW5zZm9ybWVycywgaW5pdGlhbERhdGEpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVycy5yZWR1Y2UoZnVuY3Rpb24gKGRhdGEsIHRyYW5zZm9ybWVyKSB7XG4gICAgaWYgKHR5cGVvZiB0cmFuc2Zvcm1lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyKGRhdGEsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9LCBpbml0aWFsRGF0YSB8fCBtZXNzYWdlLmRhdGEpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1heERlcHRoRmFjdG9yeTogbWF4RGVwdGhGYWN0b3J5LFxuICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgdG9KU09OOiB0b0pTT04sXG4gIHRvU3RyaW5nOiB0b1N0cmluZyxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlcmlhbGl6ZXIoKSB7XG4gIHZhciBzZWVuID0gY3JlYXRlV2Vha1NldCgpO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc2Vlbi5oYXModmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHNlZW4uYWRkKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VyaWFsaXplKGtleSwgdmFsdWUpO1xuICB9O1xufVxuXG4vKipcbiAqIEByZXR1cm4ge1dlYWtTZXQ8b2JqZWN0Pn1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlV2Vha1NldCgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrU2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgV2Vha1NldCgpO1xuICB9XG5cbiAgdmFyIGNhY2hlID0gW107XG4gIHRoaXMuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7IGNhY2hlLnB1c2godmFsdWUpIH07XG4gIHRoaXMuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBjYWNoZS5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfTtcblxuICByZXR1cm4gdGhpcztcbn1cblxuZnVuY3Rpb24gbWF4RGVwdGgoZGF0YSwgZGVwdGgpIHtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAoZGVwdGggPCAxKSB7XG4gICAgaWYgKGRhdGEubWFwKSByZXR1cm4gJ1thcnJheV0nO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcpIHJldHVybiAnW29iamVjdF0nO1xuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBpZiAodHlwZW9mIGRhdGEubWFwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGRhdGEubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIG1heERlcHRoKGNoaWxkLCBkZXB0aCAtIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgaWYgKGRhdGEgJiYgdHlwZW9mIGRhdGEudG9JU09TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIC8vIG5vaW5zcGVjdGlvbiBQb2ludGxlc3NCb29sZWFuRXhwcmVzc2lvbkpTXG4gIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICB2YXIgbmV3SnNvbiA9IHt9O1xuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBpKSkgY29udGludWU7XG4gICAgbmV3SnNvbltpXSA9IG1heERlcHRoKGRhdGFbaV0sIGRlcHRoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gbmV3SnNvbjtcbn1cblxuZnVuY3Rpb24gbWF4RGVwdGhGYWN0b3J5KGRlcHRoKSB7XG4gIGRlcHRoID0gZGVwdGggfHwgNjtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF4RGVwdGhGdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIG1heERlcHRoKGRhdGEsIGRlcHRoKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplKGtleSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHtcbiAgICAgICAgY29uc3RydWN0b3I6ICh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnRXJyb3InLFxuICAgICAgfSxcbiAgICAgIHZhbHVlLFxuICAgICAgeyBzdGFjazogdmFsdWUuc3RhY2sgfVxuICAgICk7XG5cbiAgICBpZiAoIW9iamVjdC5zdGFjaykge1xuICAgICAgb2JqZWN0Lm1lc3NhZ2UgPSB2YWx1ZS5tZXNzYWdlO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jb25zdHJ1Y3RvciAmJiB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICBvYmplY3QuY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZS50b0pTT04gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdmFsdWUudG9KU09OKCk7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuICdbZnVuY3Rpb25dICcgKyB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b0pTT04oZGF0YSkge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhLCBjcmVhdGVTZXJpYWxpemVyKCkpKTtcbn1cblxuZnVuY3Rpb24gdG9TdHJpbmcoZGF0YSkge1xuICB2YXIgc2ltcGxpZmllZERhdGEgPSBkYXRhLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSwgY3JlYXRlU2VyaWFsaXplcigpLCAnICAnKSk7XG4gIH0pO1xuXG4gIHJldHVybiB1dGlsLmZvcm1hdC5hcHBseSh1dGlsLCBzaW1wbGlmaWVkRGF0YSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhcHBseUFuc2lTdHlsZXM6IGFwcGx5QW5zaVN0eWxlcyxcbiAgcmVtb3ZlU3R5bGVzOiByZW1vdmVTdHlsZXMsXG4gIHRyYW5zZm9ybVN0eWxlczogdHJhbnNmb3JtU3R5bGVzLFxufTtcblxudmFyIEFOU0lfQ09MT1JTID0ge1xuICB1bnNldDogJ1xceDFiWzBtJyxcbiAgYmxhY2s6ICdcXHgxYlszMG0nLFxuICByZWQ6ICdcXHgxYlszMW0nLFxuICBncmVlbjogJ1xceDFiWzMybScsXG4gIHllbGxvdzogJ1xceDFiWzMzbScsXG4gIGJsdWU6ICdcXHgxYlszNG0nLFxuICBtYWdlbnRhOiAnXFx4MWJbMzVtJyxcbiAgY3lhbjogJ1xceDFiWzM2bScsXG4gIHdoaXRlOiAnXFx4MWJbMzdtJyxcbn07XG5cbmZ1bmN0aW9uIGFwcGx5QW5zaVN0eWxlcyhkYXRhKSB7XG4gIHJldHVybiB0cmFuc2Zvcm1TdHlsZXMoZGF0YSwgc3R5bGVUb0Fuc2ksIHJlc2V0QW5zaVN0eWxlKTtcbn1cblxuZnVuY3Rpb24gc3R5bGVUb0Fuc2koc3R5bGUpIHtcbiAgdmFyIGNvbG9yID0gc3R5bGUucmVwbGFjZSgvY29sb3I6XFxzKihcXHcrKS4qLywgJyQxJykudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIEFOU0lfQ09MT1JTW2NvbG9yXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVzZXRBbnNpU3R5bGUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcgKyBBTlNJX0NPTE9SUy51bnNldDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKGRhdGEpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybVN0eWxlcyhkYXRhLCBmdW5jdGlvbiAoKSB7IHJldHVybiAnJyB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3R5bGVzKGRhdGEsIG9uU3R5bGVGb3VuZCwgb25TdHlsZUFwcGxpZWQpIHtcbiAgdmFyIGZvdW5kU3R5bGVzID0ge307XG5cbiAgcmV0dXJuIGRhdGEucmVkdWNlKGZ1bmN0aW9uIChyZXN1bHQsIGl0ZW0sIGluZGV4LCBhcnJheSkge1xuICAgIGlmIChmb3VuZFN0eWxlc1tpbmRleF0pIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgdmFyIHZhbHVlSW5kZXggPSBpbmRleDtcbiAgICAgIHZhciBzdHlsZUFwcGxpZWQgPSBmYWxzZTtcblxuICAgICAgaXRlbSA9IGl0ZW0ucmVwbGFjZSgvJVsxY2RmaU9vc10vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHZhbHVlSW5kZXggKz0gMTtcblxuICAgICAgICBpZiAobWF0Y2ggIT09ICclYycpIHtcbiAgICAgICAgICByZXR1cm4gbWF0Y2g7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3R5bGUgPSBhcnJheVt2YWx1ZUluZGV4XTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBmb3VuZFN0eWxlc1t2YWx1ZUluZGV4XSA9IHRydWU7XG4gICAgICAgICAgc3R5bGVBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gb25TdHlsZUZvdW5kKHN0eWxlLCBpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3R5bGVBcHBsaWVkICYmIG9uU3R5bGVBcHBsaWVkKSB7XG4gICAgICAgIGl0ZW0gPSBvblN0eWxlQXBwbGllZChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCBbXSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzOiBjb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzLFxuICBmb3JtYXREYXRlOiBmb3JtYXREYXRlLFxuICBmb3JtYXRUaW1lWm9uZTogZm9ybWF0VGltZVpvbmUsXG4gIHBhZDogcGFkLFxuICBwYWRTdHJpbmc6IHBhZFN0cmluZyxcbiAgdGVtcGxhdGVEYXRlOiB0ZW1wbGF0ZURhdGUsXG4gIHRlbXBsYXRlVmFyaWFibGVzOiB0ZW1wbGF0ZVZhcmlhYmxlcyxcbiAgdGVtcGxhdGVTY29wZUZhY3Rvcnk6IHRlbXBsYXRlU2NvcGVGYWN0b3J5LFxuICB0ZW1wbGF0ZVRleHQ6IHRlbXBsYXRlVGV4dCxcbn07XG5cbi8qKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IG9mIGNvbnNvbGUubG9nIG1heSBjb250YWluIHRlbXBsYXRlcy4gSW4gdGhlIGxpYnJhcnlcbiAqIHRoZSBmaXJzdCBlbGVtZW50IGlzIGEgc3RyaW5nIHJlbGF0ZWQgdG8gdHJhbnNwb3J0cy5jb25zb2xlLmZvcm1hdC4gU29cbiAqIHRoaXMgZnVuY3Rpb24gY29uY2F0ZW5hdGVzIGZpcnN0IHR3byBlbGVtZW50cyB0byBtYWtlIHRlbXBsYXRlcyBsaWtlICVkXG4gKiB3b3JrXG4gKiBAcGFyYW0geypbXX0gZGF0YVxuICogQHJldHVybiB7KltdfVxuICovXG5mdW5jdGlvbiBjb25jYXRGaXJzdFN0cmluZ0VsZW1lbnRzKGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBkYXRhWzBdICE9PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0YVsxXSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhWzBdLm1hdGNoKC8lWzFjZGZpT29zXS8pKSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBkYXRhWzFdID0gZGF0YVswXSArICcgJyArIGRhdGFbMV07XG4gIGRhdGEuc2hpZnQoKTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZSh0ZW1wbGF0ZSwgZGF0ZSkge1xuICByZXR1cm4gdGVtcGxhdGVcbiAgICAucmVwbGFjZSgne3l9JywgU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSkpXG4gICAgLnJlcGxhY2UoJ3ttfScsIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKSlcbiAgICAucmVwbGFjZSgne2R9JywgcGFkKGRhdGUuZ2V0RGF0ZSgpKSlcbiAgICAucmVwbGFjZSgne2h9JywgcGFkKGRhdGUuZ2V0SG91cnMoKSkpXG4gICAgLnJlcGxhY2UoJ3tpfScsIHBhZChkYXRlLmdldE1pbnV0ZXMoKSkpXG4gICAgLnJlcGxhY2UoJ3tzfScsIHBhZChkYXRlLmdldFNlY29uZHMoKSkpXG4gICAgLnJlcGxhY2UoJ3ttc30nLCBwYWQoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMykpXG4gICAgLnJlcGxhY2UoJ3t6fScsIGZvcm1hdFRpbWVab25lKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSkpXG4gICAgLnJlcGxhY2UoJ3tpc299JywgZGF0ZS50b0lTT1N0cmluZygpKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZVpvbmUobWludXRlc09mZnNldCkge1xuICB2YXIgbSA9IE1hdGguYWJzKG1pbnV0ZXNPZmZzZXQpO1xuICByZXR1cm4gKG1pbnV0ZXNPZmZzZXQgPj0gMCA/ICctJyA6ICcrJylcbiAgICArIHBhZChNYXRoLmZsb29yKG0gLyA2MCkpICsgJzonXG4gICAgKyBwYWQobSAlIDYwKTtcbn1cblxuZnVuY3Rpb24gcGFkKG51bWJlciwgemVyb3MpIHtcbiAgemVyb3MgPSB6ZXJvcyB8fCAyO1xuICByZXR1cm4gKG5ldyBBcnJheSh6ZXJvcyArIDEpLmpvaW4oJzAnKSArIG51bWJlcikuc3Vic3RyKC16ZXJvcywgemVyb3MpO1xufVxuXG5mdW5jdGlvbiBwYWRTdHJpbmcodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBNYXRoLm1heChsZW5ndGgsIHZhbHVlLmxlbmd0aCk7XG4gIHZhciBwYWRWYWx1ZSA9IEFycmF5KGxlbmd0aCArIDEpLmpvaW4oJyAnKTtcbiAgcmV0dXJuICh2YWx1ZSArIHBhZFZhbHVlKS5zdWJzdHJpbmcoMCwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gdGVtcGxhdGVEYXRlKGRhdGEsIG1lc3NhZ2UpIHtcbiAgdmFyIHRlbXBsYXRlID0gZGF0YVswXTtcbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGRhdGFbMF0gPSBmb3JtYXREYXRlKHRlbXBsYXRlLCBtZXNzYWdlLmRhdGUpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3sgbGFiZWxMZW5ndGg6IG51bWJlciwgZGVmYXVsdExhYmVsOiBzdHJpbmcgfX0gb3B0aW9uc1xuICovXG5mdW5jdGlvbiB0ZW1wbGF0ZVNjb3BlRmFjdG9yeShvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgbGFiZWxMZW5ndGggPSBvcHRpb25zLmxhYmVsTGVuZ3RoIHx8IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHRlbXBsYXRlU2NvcGUoZGF0YSwgbWVzc2FnZSkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGRhdGFbMF07XG4gICAgdmFyIGxhYmVsID0gbWVzc2FnZS5zY29wZSAmJiBtZXNzYWdlLnNjb3BlLmxhYmVsO1xuXG4gICAgaWYgKCFsYWJlbCkge1xuICAgICAgbGFiZWwgPSBvcHRpb25zLmRlZmF1bHRMYWJlbDtcbiAgICB9XG5cbiAgICB2YXIgc2NvcGVUZXh0O1xuICAgIGlmIChsYWJlbCA9PT0gJycpIHtcbiAgICAgIHNjb3BlVGV4dCA9IGxhYmVsTGVuZ3RoID4gMCA/IHBhZFN0cmluZygnJywgbGFiZWxMZW5ndGggKyAzKSA6ICcnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgc2NvcGVUZXh0ID0gcGFkU3RyaW5nKCcgKCcgKyBsYWJlbCArICcpJywgbGFiZWxMZW5ndGggKyAzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NvcGVUZXh0ID0gJyc7XG4gICAgfVxuXG4gICAgZGF0YVswXSA9IHRlbXBsYXRlLnJlcGxhY2UoJ3tzY29wZX0nLCBzY29wZVRleHQpO1xuICAgIHJldHVybiBkYXRhO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZVZhcmlhYmxlcyhkYXRhLCBtZXNzYWdlKSB7XG4gIHZhciB0ZW1wbGF0ZSA9IGRhdGFbMF07XG4gIHZhciB2YXJpYWJsZXMgPSBtZXNzYWdlLnZhcmlhYmxlcztcblxuICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJyB8fCAhbWVzc2FnZS52YXJpYWJsZXMpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGZvciAodmFyIGkgaW4gdmFyaWFibGVzKSB7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFyaWFibGVzLCBpKSkgY29udGludWU7XG4gICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKCd7JyArIGkgKyAnfScsIHZhcmlhYmxlc1tpXSk7XG4gIH1cblxuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoJ3tsZXZlbH0nLCBtZXNzYWdlLmxldmVsKTtcblxuICBkYXRhWzBdID0gdGVtcGxhdGU7XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZVRleHQoZGF0YSkge1xuICB2YXIgdGVtcGxhdGUgPSBkYXRhWzBdO1xuICBpZiAodHlwZW9mIHRlbXBsYXRlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIHRleHRUcGxQb3NpdGlvbiA9IHRlbXBsYXRlLmxhc3RJbmRleE9mKCd7dGV4dH0nKTtcbiAgaWYgKHRleHRUcGxQb3NpdGlvbiA9PT0gdGVtcGxhdGUubGVuZ3RoIC0gNikge1xuICAgIGRhdGFbMF0gPSB0ZW1wbGF0ZS5yZXBsYWNlKC9cXHM/e3RleHR9LywgJycpO1xuICAgIGlmIChkYXRhWzBdID09PSAnJykge1xuICAgICAgZGF0YS5zaGlmdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIHRlbXBsYXRlUGllY2VzID0gdGVtcGxhdGUuc3BsaXQoJ3t0ZXh0fScpO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgaWYgKHRlbXBsYXRlUGllY2VzWzBdICE9PSAnJykge1xuICAgIHJlc3VsdC5wdXNoKHRlbXBsYXRlUGllY2VzWzBdKTtcbiAgfVxuXG4gIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZGF0YS5zbGljZSgxKSk7XG5cbiAgaWYgKHRlbXBsYXRlUGllY2VzWzFdICE9PSAnJykge1xuICAgIHJlc3VsdC5wdXNoKHRlbXBsYXRlUGllY2VzWzFdKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLXNwYWNlcywgbm8tY29uc29sZSAqL1xuXG52YXIgdHJhbnNmb3JtID0gcmVxdWlyZSgnLi4vdHJhbnNmb3JtJyk7XG5cbnZhciBvcmlnaW5hbCA9IHtcbiAgY29udGV4dDogY29uc29sZSxcbiAgZXJyb3I6ICAgY29uc29sZS5lcnJvcixcbiAgd2FybjogICAgY29uc29sZS53YXJuLFxuICBpbmZvOiAgICBjb25zb2xlLmluZm8sXG4gIHZlcmJvc2U6IGNvbnNvbGUudmVyYm9zZSxcbiAgZGVidWc6ICAgY29uc29sZS5kZWJ1ZyxcbiAgc2lsbHk6ICAgY29uc29sZS5zaWxseSxcbiAgbG9nOiAgICAgY29uc29sZS5sb2csXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnNvbGVUcmFuc3BvcnRGYWN0b3J5O1xubW9kdWxlLmV4cG9ydHMudHJhbnNmb3JtUmVuZGVyZXIgPSB0cmFuc2Zvcm1SZW5kZXJlcjtcbm1vZHVsZS5leHBvcnRzLnRyYW5zZm9ybU1haW4gPSB0cmFuc2Zvcm1NYWluO1xuXG52YXIgc2VwYXJhdG9yID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJyA/ICc+JyA6ICfigLonO1xudmFyIERFRkFVTFRfRk9STUFUID0ge1xuICBicm93c2VyOiAnJWN7aH06e2l9OntzfS57bXN9e3Njb3BlfSVjICcgKyBzZXBhcmF0b3IgKyAnIHt0ZXh0fScsXG4gIHJlbmRlcmVyOiAne2h9OntpfTp7c30ue21zfXtzY29wZX0g4oC6IHt0ZXh0fScsXG4gIHdvcmtlcjogJ3tofTp7aX06e3N9Lnttc317c2NvcGV9IOKAuiB7dGV4dH0nLFxufTtcblxuZnVuY3Rpb24gY29uc29sZVRyYW5zcG9ydEZhY3RvcnkoZWxlY3Ryb25Mb2cpIHtcbiAgdHJhbnNwb3J0LmxldmVsICA9ICdzaWxseSc7XG4gIHRyYW5zcG9ydC51c2VTdHlsZXMgPSBwcm9jZXNzLmVudi5GT1JDRV9TVFlMRVM7XG4gIHRyYW5zcG9ydC5mb3JtYXQgPSBERUZBVUxUX0ZPUk1BVFtwcm9jZXNzLnR5cGVdIHx8IERFRkFVTFRfRk9STUFULmJyb3dzZXI7XG5cbiAgcmV0dXJuIHRyYW5zcG9ydDtcblxuICBmdW5jdGlvbiB0cmFuc3BvcnQobWVzc2FnZSkge1xuICAgIHZhciBzY29wZU9wdGlvbnMgPSBlbGVjdHJvbkxvZy5zY29wZS5nZXRPcHRpb25zKCk7XG5cbiAgICB2YXIgZGF0YTtcbiAgICBpZiAocHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHByb2Nlc3MudHlwZSA9PT0gJ3dvcmtlcicpIHtcbiAgICAgIGRhdGEgPSB0cmFuc2Zvcm1SZW5kZXJlcihtZXNzYWdlLCB0cmFuc3BvcnQsIHNjb3BlT3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0cmFuc2Zvcm1NYWluKG1lc3NhZ2UsIHRyYW5zcG9ydCwgc2NvcGVPcHRpb25zKTtcbiAgICB9XG5cbiAgICBjb25zb2xlTG9nKG1lc3NhZ2UubGV2ZWwsIGRhdGEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVJlbmRlcmVyKG1lc3NhZ2UsIHRyYW5zcG9ydCwgc2NvcGVPcHRpb25zKSB7XG4gIHJldHVybiB0cmFuc2Zvcm0udHJhbnNmb3JtKG1lc3NhZ2UsIFtcbiAgICB0cmFuc2Zvcm0uY3VzdG9tRm9ybWF0dGVyRmFjdG9yeSh0cmFuc3BvcnQuZm9ybWF0LCB0cnVlLCBzY29wZU9wdGlvbnMpLFxuICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtTWFpbihtZXNzYWdlLCB0cmFuc3BvcnQsIHNjb3BlT3B0aW9ucykge1xuICB2YXIgdXNlU3R5bGVzID0gY2FuVXNlU3R5bGVzKHRyYW5zcG9ydC51c2VTdHlsZXMsIG1lc3NhZ2UubGV2ZWwpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm0udHJhbnNmb3JtKG1lc3NhZ2UsIFtcbiAgICBhZGRUZW1wbGF0ZUNvbG9yRmFjdG9yeSh0cmFuc3BvcnQuZm9ybWF0KSxcbiAgICB0cmFuc2Zvcm0uY3VzdG9tRm9ybWF0dGVyRmFjdG9yeSh0cmFuc3BvcnQuZm9ybWF0LCBmYWxzZSwgc2NvcGVPcHRpb25zKSxcbiAgICB1c2VTdHlsZXMgPyB0cmFuc2Zvcm0uYXBwbHlBbnNpU3R5bGVzIDogdHJhbnNmb3JtLnJlbW92ZVN0eWxlcyxcbiAgICB0cmFuc2Zvcm0uY29uY2F0Rmlyc3RTdHJpbmdFbGVtZW50cyxcbiAgICB0cmFuc2Zvcm0ubWF4RGVwdGhGYWN0b3J5KDQpLFxuICAgIHRyYW5zZm9ybS50b0pTT04sXG4gIF0pO1xufVxuXG5mdW5jdGlvbiBhZGRUZW1wbGF0ZUNvbG9yRmFjdG9yeShmb3JtYXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGFkZFRlbXBsYXRlQ29sb3JzKGRhdGEsIG1lc3NhZ2UpIHtcbiAgICBpZiAoZm9ybWF0ICE9PSBERUZBVUxUX0ZPUk1BVC5icm93c2VyKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICByZXR1cm4gWydjb2xvcjonICsgbGV2ZWxUb1N0eWxlKG1lc3NhZ2UubGV2ZWwpLCAnY29sb3I6dW5zZXQnXS5jb25jYXQoZGF0YSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhblVzZVN0eWxlcyh1c2VTdHlsZVZhbHVlLCBsZXZlbCkge1xuICBpZiAodXNlU3R5bGVWYWx1ZSA9PT0gdHJ1ZSB8fCB1c2VTdHlsZVZhbHVlID09PSBmYWxzZSkge1xuICAgIHJldHVybiB1c2VTdHlsZVZhbHVlO1xuICB9XG5cbiAgdmFyIHVzZVN0ZGVyciA9IGxldmVsID09PSAnZXJyb3InIHx8IGxldmVsID09PSAnd2Fybic7XG4gIHZhciBzdHJlYW0gPSB1c2VTdGRlcnIgPyBwcm9jZXNzLnN0ZGVyciA6IHByb2Nlc3Muc3Rkb3V0O1xuICByZXR1cm4gc3RyZWFtICYmIHN0cmVhbS5pc1RUWTtcbn1cblxuZnVuY3Rpb24gY29uc29sZUxvZyhsZXZlbCwgYXJncykge1xuICBpZiAob3JpZ2luYWxbbGV2ZWxdKSB7XG4gICAgb3JpZ2luYWxbbGV2ZWxdLmFwcGx5KG9yaWdpbmFsLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIG9yaWdpbmFsLmxvZy5hcHBseShvcmlnaW5hbC5jb250ZXh0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsZXZlbFRvU3R5bGUobGV2ZWwpIHtcbiAgc3dpdGNoIChsZXZlbCkge1xuICAgIGNhc2UgJ2Vycm9yJzogcmV0dXJuICdyZWQnO1xuICAgIGNhc2UgJ3dhcm4nOiAgcmV0dXJuICd5ZWxsb3cnO1xuICAgIGNhc2UgJ2luZm8nOiAgcmV0dXJuICdjeWFuJztcbiAgICBkZWZhdWx0OiAgICAgIHJldHVybiAndW5zZXQnO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZpbGU6IEZpbGUsXG4gIEZpbGVSZWdpc3RyeTogRmlsZVJlZ2lzdHJ5LFxuICBOdWxsRmlsZTogTnVsbEZpbGUsXG59O1xuXG4vKipcbiAqIEZpbGUgbWFuaXB1bGF0aW9ucyBvbiBmaWxlc3lzdGVtXG4gKiBAY2xhc3NcbiAqIEBleHRlbmRzIEV2ZW50RW1pdHRlclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNpemVcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aFxuICogQHBhcmFtIHtXcml0ZU9wdGlvbnN9IFt3cml0ZU9wdGlvbnNdXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt3cml0ZUFzeW5jXVxuICovXG5mdW5jdGlvbiBGaWxlKGZpbGVQYXRoLCB3cml0ZU9wdGlvbnMsIHdyaXRlQXN5bmMpIHtcbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgdGhpcy5wYXRoID0gZmlsZVBhdGg7XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLmluaXRpYWxTaXplID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHRoaXMuYnl0ZXNXcml0dGVuID0gMDtcblxuICAvKipcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLndyaXRlQXN5bmMgPSBCb29sZWFuKHdyaXRlQXN5bmMpO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB0aGlzLmFzeW5jV3JpdGVRdWV1ZSA9IFtdO1xuXG4gIC8qKlxuICAgKiBAdHlwZSB7V3JpdGVPcHRpb25zfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy53cml0ZU9wdGlvbnMgPSB3cml0ZU9wdGlvbnMgfHwge1xuICAgIGZsYWc6ICdhJyxcbiAgICBtb2RlOiA0MzgsIC8vIDA2NjZcbiAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICB9O1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2l6ZScsIHtcbiAgICBnZXQ6IHRoaXMuZ2V0U2l6ZS5iaW5kKHRoaXMpLFxuICB9KTtcbn1cblxudXRpbC5pbmhlcml0cyhGaWxlLCBFdmVudEVtaXR0ZXIpO1xuXG5GaWxlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBmcy53cml0ZUZpbGVTeW5jKHRoaXMucGF0aCwgJycsIHtcbiAgICAgIG1vZGU6IHRoaXMud3JpdGVPcHRpb25zLm1vZGUsXG4gICAgICBmbGFnOiAndycsXG4gICAgfSk7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VOT0VOVCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlLCB0aGlzKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbkZpbGUucHJvdG90eXBlLmNyb3AgPSBmdW5jdGlvbiAoYnl0ZXNBZnRlcikge1xuICB0cnkge1xuICAgIHZhciBjb250ZW50ID0gcmVhZEZpbGVTeW5jRnJvbUVuZCh0aGlzLnBhdGgsIGJ5dGVzQWZ0ZXIgfHwgNDA5Nik7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMud3JpdGVMaW5lKCdbbG9nIGNyb3BwZWRdJyArIG9zLkVPTCArIGNvbnRlbnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5lbWl0KFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIG5ldyBFcnJvcignQ291bGRuXFwndCBjcm9wIGZpbGUgJyArIHRoaXMucGF0aCArICcuICcgKyBlLm1lc3NhZ2UpLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cbn07XG5cbkZpbGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcy5wYXRoO1xufTtcblxuLyoqXG4gKiBAcGFja2FnZVxuICovXG5GaWxlLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbml0aWFsU2l6ZSA9IHVuZGVmaW5lZDtcbiAgdGhpcy5ieXRlc1dyaXR0ZW4gPSAwO1xufTtcblxuLyoqXG4gKiBAcGFja2FnZVxuICovXG5GaWxlLnByb3RvdHlwZS53cml0ZUxpbmUgPSBmdW5jdGlvbiAodGV4dCkge1xuICB0ZXh0ICs9IG9zLkVPTDtcblxuICBpZiAodGhpcy53cml0ZUFzeW5jKSB7XG4gICAgdGhpcy5hc3luY1dyaXRlUXVldWUucHVzaCh0ZXh0KTtcbiAgICB0aGlzLm5leHRBc3luY1dyaXRlKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBmcy53cml0ZUZpbGVTeW5jKHRoaXMucGF0aCwgdGV4dCwgdGhpcy53cml0ZU9wdGlvbnMpO1xuICAgIHRoaXMuaW5jcmVhc2VCeXRlc1dyaXR0ZW5Db3VudGVyKHRleHQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5lbWl0KFxuICAgICAgJ2Vycm9yJyxcbiAgICAgIG5ldyBFcnJvcignQ291bGRuXFwndCB3cml0ZSB0byAnICsgdGhpcy5wYXRoICsgJy4gJyArIGUubWVzc2FnZSksXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiBAcHJvdGVjdGVkXG4gKi9cbkZpbGUucHJvdG90eXBlLmdldFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmluaXRpYWxTaXplID09PSB1bmRlZmluZWQpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIHN0YXRzID0gZnMuc3RhdFN5bmModGhpcy5wYXRoKTtcbiAgICAgIHRoaXMuaW5pdGlhbFNpemUgPSBzdGF0cy5zaXplO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuaW5pdGlhbFNpemUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmluaXRpYWxTaXplICsgdGhpcy5ieXRlc1dyaXR0ZW47XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAcGFja2FnZVxuICovXG5GaWxlLnByb3RvdHlwZS5pc051bGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuRmlsZS5wcm90b3R5cGUuaW5jcmVhc2VCeXRlc1dyaXR0ZW5Db3VudGVyID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgdGhpcy5ieXRlc1dyaXR0ZW4gKz0gQnVmZmVyLmJ5dGVMZW5ndGgodGV4dCwgdGhpcy53cml0ZU9wdGlvbnMuZW5jb2RpbmcpO1xufTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5GaWxlLnByb3RvdHlwZS5uZXh0QXN5bmNXcml0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGZpbGUgPSB0aGlzO1xuXG4gIGlmICh0aGlzLmFzeW5jV3JpdGVRdWV1ZS5sZW5ndGggPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHRleHQgPSB0aGlzLmFzeW5jV3JpdGVRdWV1ZS5zaGlmdCgpO1xuXG4gIGZzLndyaXRlRmlsZSh0aGlzLnBhdGgsIHRleHQsIHRoaXMud3JpdGVPcHRpb25zLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBmaWxlLmVtaXQoXG4gICAgICAgICdlcnJvcicsXG4gICAgICAgIG5ldyBFcnJvcignQ291bGRuXFwndCB3cml0ZSB0byAnICsgZmlsZS5wYXRoICsgJy4gJyArIGUubWVzc2FnZSksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGUuaW5jcmVhc2VCeXRlc1dyaXR0ZW5Db3VudGVyKHRleHQpO1xuICAgIH1cblxuICAgIGZpbGUubmV4dEFzeW5jV3JpdGUoKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEZpbGUgbWFuaXB1bGF0aW9ucyBvbiBmaWxlc3lzdGVtXG4gKiBAY2xhc3NcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaXplXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGhcbiAqL1xuZnVuY3Rpb24gTnVsbEZpbGUoZmlsZVBhdGgpIHtcbiAgRmlsZS5jYWxsKHRoaXMsIGZpbGVQYXRoKTtcbn1cblxudXRpbC5pbmhlcml0cyhOdWxsRmlsZSwgRmlsZSk7XG5cbk51bGxGaWxlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHt9O1xuTnVsbEZpbGUucHJvdG90eXBlLmNyb3AgPSBmdW5jdGlvbiAoKSB7fTtcbk51bGxGaWxlLnByb3RvdHlwZS53cml0ZUxpbmUgPSBmdW5jdGlvbiAoKSB7fTtcbk51bGxGaWxlLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMCB9O1xuTnVsbEZpbGUucHJvdG90eXBlLmlzTnVsbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfTtcblxuLyoqXG4gKiBDb2xsZWN0aW9uLCBrZXkgaXMgYSBmaWxlIHBhdGgsIHZhbHVlIGlzIGEgRmlsZSBpbnN0YW5jZVxuICogQGNsYXNzXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEZpbGVSZWdpc3RyeSgpIHtcbiAgRXZlbnRFbWl0dGVyLmNhbGwodGhpcyk7XG4gIHRoaXMuc3RvcmUgPSB7fTtcblxuICB0aGlzLmVtaXRFcnJvciA9IHRoaXMuZW1pdEVycm9yLmJpbmQodGhpcyk7XG59XG5cbnV0aWwuaW5oZXJpdHMoRmlsZVJlZ2lzdHJ5LCBFdmVudEVtaXR0ZXIpO1xuXG4vKipcbiAqIFByb3ZpZGUgYSBGaWxlIG9iamVjdCBjb3JyZXNwb25kaW5nIHRvIHRoZSBmaWxlUGF0aFxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gKiBAcGFyYW0ge1dyaXRlT3B0aW9uc30gW3dyaXRlT3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2FzeW5jXVxuICogQHJldHVybiB7RmlsZX1cbiAqL1xuRmlsZVJlZ2lzdHJ5LnByb3RvdHlwZS5wcm92aWRlID0gZnVuY3Rpb24gKGZpbGVQYXRoLCB3cml0ZU9wdGlvbnMsIGFzeW5jKSB7XG4gIHZhciBmaWxlO1xuICB0cnkge1xuICAgIGZpbGVQYXRoID0gcGF0aC5yZXNvbHZlKGZpbGVQYXRoKTtcblxuICAgIGlmICh0aGlzLnN0b3JlW2ZpbGVQYXRoXSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVbZmlsZVBhdGhdO1xuICAgIH1cblxuICAgIGZpbGUgPSB0aGlzLmNyZWF0ZUZpbGUoZmlsZVBhdGgsIHdyaXRlT3B0aW9ucywgQm9vbGVhbihhc3luYykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZmlsZSA9IG5ldyBOdWxsRmlsZShmaWxlUGF0aCk7XG4gICAgdGhpcy5lbWl0RXJyb3IoZSwgZmlsZSk7XG4gIH1cblxuICBmaWxlLm9uKCdlcnJvcicsIHRoaXMuZW1pdEVycm9yKTtcbiAgdGhpcy5zdG9yZVtmaWxlUGF0aF0gPSBmaWxlO1xuICByZXR1cm4gZmlsZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gKiBAcGFyYW0ge1dyaXRlT3B0aW9uc30gd3JpdGVPcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGFzeW5jXG4gKiBAcmV0dXJuIHtGaWxlfVxuICogQHByaXZhdGVcbiAqL1xuRmlsZVJlZ2lzdHJ5LnByb3RvdHlwZS5jcmVhdGVGaWxlID0gZnVuY3Rpb24gKGZpbGVQYXRoLCB3cml0ZU9wdGlvbnMsIGFzeW5jKSB7XG4gIHRoaXMudGVzdEZpbGVXcml0aW5nKGZpbGVQYXRoKTtcbiAgcmV0dXJuIG5ldyBGaWxlKGZpbGVQYXRoLCB3cml0ZU9wdGlvbnMsIGFzeW5jKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAqIEBwYXJhbSB7RmlsZX0gZmlsZVxuICogQHByaXZhdGVcbiAqL1xuRmlsZVJlZ2lzdHJ5LnByb3RvdHlwZS5lbWl0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGZpbGUpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yLCBmaWxlKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoXG4gKiBAcHJpdmF0ZVxuICovXG5GaWxlUmVnaXN0cnkucHJvdG90eXBlLnRlc3RGaWxlV3JpdGluZyA9IGZ1bmN0aW9uIChmaWxlUGF0aCkge1xuICBta0RpcihwYXRoLmRpcm5hbWUoZmlsZVBhdGgpKTtcbiAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwgJycsIHsgZmxhZzogJ2EnIH0pO1xufTtcblxuZnVuY3Rpb24gbWtEaXIoZGlyUGF0aCkge1xuICBpZiAoY2hlY2tOb2RlSnNWZXJzaW9uKDEwLjEyKSkge1xuICAgIGZzLm1rZGlyU3luYyhkaXJQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgZnMubWtkaXJTeW5jKGRpclBhdGgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgcmV0dXJuIG1rRGlyKHBhdGguZGlybmFtZShkaXJQYXRoKSkgJiYgbWtEaXIoZGlyUGF0aCk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChmcy5zdGF0U3luYyhkaXJQYXRoKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBub2luc3BlY3Rpb24gRXhjZXB0aW9uQ2F1Z2h0TG9jYWxseUpTXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja05vZGVKc1ZlcnNpb24odmVyc2lvbikge1xuICBpZiAoIXByb2Nlc3MudmVyc2lvbnMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbm9kZVZlcnNpb24gPSBOdW1iZXIoXG4gICAgcHJvY2Vzcy52ZXJzaW9uLm1hdGNoKC9edihcXGQrXFwuXFxkKykvKVsxXS5yZXBsYWNlKC9cXC4oXFxkKSQvLCAnLjAkMScpXG4gICk7XG5cbiAgcmV0dXJuIG5vZGVWZXJzaW9uID49IHZlcnNpb247XG59XG5cbmZ1bmN0aW9uIHJlYWRGaWxlU3luY0Zyb21FbmQoZmlsZVBhdGgsIGJ5dGVzQ291bnQpIHtcbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvYyhieXRlc0NvdW50KTtcbiAgdmFyIHN0YXRzID0gZnMuc3RhdFN5bmMoZmlsZVBhdGgpO1xuXG4gIHZhciByZWFkTGVuZ3RoID0gTWF0aC5taW4oc3RhdHMuc2l6ZSwgYnl0ZXNDb3VudCk7XG4gIHZhciBvZmZzZXQgPSBNYXRoLm1heCgwLCBzdGF0cy5zaXplIC0gYnl0ZXNDb3VudCk7XG5cbiAgdmFyIGZkID0gZnMub3BlblN5bmMoZmlsZVBhdGgsICdyJyk7XG4gIHZhciB0b3RhbEJ5dGVzID0gZnMucmVhZFN5bmMoZmQsIGJ1ZmZlciwgMCwgcmVhZExlbmd0aCwgb2Zmc2V0KTtcbiAgZnMuY2xvc2VTeW5jKGZkKTtcblxuICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCd1dGY4JywgMCwgdG90YWxCeXRlcyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIHRyYW5zZm9ybSA9IHJlcXVpcmUoJy4uLy4uL3RyYW5zZm9ybScpO1xudmFyIEZpbGVSZWdpc3RyeSA9IHJlcXVpcmUoJy4vZmlsZScpLkZpbGVSZWdpc3RyeTtcbnZhciB2YXJpYWJsZXMgPSByZXF1aXJlKCcuL3ZhcmlhYmxlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbGVUcmFuc3BvcnRGYWN0b3J5O1xuXG4vLyBTaGFyZWQgYmV0d2VlbiBtdWx0aXBsZSBmaWxlIHRyYW5zcG9ydCBpbnN0YW5jZXNcbnZhciBnbG9iYWxSZWdpc3RyeSA9IG5ldyBGaWxlUmVnaXN0cnkoKTtcblxuZnVuY3Rpb24gZmlsZVRyYW5zcG9ydEZhY3RvcnkoZWxlY3Ryb25Mb2csIGN1c3RvbVJlZ2lzdHJ5KSB7XG4gIHZhciBwYXRoVmFyaWFibGVzID0gdmFyaWFibGVzLmdldFBhdGhWYXJpYWJsZXMocHJvY2Vzcy5wbGF0Zm9ybSk7XG5cbiAgdmFyIHJlZ2lzdHJ5ID0gY3VzdG9tUmVnaXN0cnkgfHwgZ2xvYmFsUmVnaXN0cnk7XG4gIHJlZ2lzdHJ5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlLCBmaWxlKSB7XG4gICAgbG9nQ29uc29sZSgnQ2FuXFwndCB3cml0ZSB0byAnICsgZmlsZSwgZSk7XG4gIH0pO1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLXNwYWNlcyAqL1xuICB0cmFuc3BvcnQuYXJjaGl2ZUxvZyAgID0gYXJjaGl2ZUxvZztcbiAgdHJhbnNwb3J0LmZpbGVOYW1lICAgICA9IGdldERlZmF1bHRGaWxlTmFtZSgpO1xuICB0cmFuc3BvcnRcbiAgICAuZm9ybWF0ID0gJ1t7eX0te219LXtkfSB7aH06e2l9OntzfS57bXN9XSBbe2xldmVsfV17c2NvcGV9IHt0ZXh0fSc7XG4gIHRyYW5zcG9ydC5nZXRGaWxlICAgICAgPSBnZXRGaWxlO1xuICB0cmFuc3BvcnQubGV2ZWwgICAgICAgID0gJ3NpbGx5JztcbiAgdHJhbnNwb3J0Lm1heFNpemUgICAgICA9IDEwMjQgKiAxMDI0O1xuICB0cmFuc3BvcnQucmVzb2x2ZVBhdGggID0gcmVzb2x2ZVBhdGg7XG4gIHRyYW5zcG9ydC5zeW5jICAgICAgICAgPSB0cnVlO1xuICB0cmFuc3BvcnQud3JpdGVPcHRpb25zID0ge1xuICAgIGZsYWc6ICdhJyxcbiAgICBtb2RlOiA0MzgsIC8vIDA2NjZcbiAgICBlbmNvZGluZzogJ3V0ZjgnLFxuICB9O1xuXG4gIGluaXREZXByZWNhdGVkKCk7XG5cbiAgcmV0dXJuIHRyYW5zcG9ydDtcblxuICBmdW5jdGlvbiB0cmFuc3BvcnQobWVzc2FnZSkge1xuICAgIHZhciBmaWxlID0gZ2V0RmlsZShtZXNzYWdlKTtcblxuICAgIHZhciBuZWVkTG9nUm90YXRpb24gPSB0cmFuc3BvcnQubWF4U2l6ZSA+IDBcbiAgICAgICYmIGZpbGUuc2l6ZSA+IHRyYW5zcG9ydC5tYXhTaXplO1xuXG4gICAgaWYgKG5lZWRMb2dSb3RhdGlvbikge1xuICAgICAgdHJhbnNwb3J0LmFyY2hpdmVMb2coZmlsZSk7XG4gICAgICBmaWxlLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgdmFyIHNjb3BlT3B0aW9ucyA9IGVsZWN0cm9uTG9nLnNjb3BlLmdldE9wdGlvbnMoKTtcbiAgICB2YXIgY29udGVudCA9IHRyYW5zZm9ybS50cmFuc2Zvcm0obWVzc2FnZSwgW1xuICAgICAgdHJhbnNmb3JtLnJlbW92ZVN0eWxlcyxcbiAgICAgIHRyYW5zZm9ybS5jdXN0b21Gb3JtYXR0ZXJGYWN0b3J5KHRyYW5zcG9ydC5mb3JtYXQsIGZhbHNlLCBzY29wZU9wdGlvbnMpLFxuICAgICAgdHJhbnNmb3JtLmNvbmNhdEZpcnN0U3RyaW5nRWxlbWVudHMsXG4gICAgICB0cmFuc2Zvcm0ubWF4RGVwdGhGYWN0b3J5KCksXG4gICAgICB0cmFuc2Zvcm0udG9TdHJpbmcsXG4gICAgXSk7XG5cbiAgICBmaWxlLndyaXRlTGluZShjb250ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFyY2hpdmVMb2coZmlsZSkge1xuICAgIHZhciBvbGRQYXRoID0gZmlsZS50b1N0cmluZygpO1xuICAgIHZhciBpbmYgPSBwYXRoLnBhcnNlKG9sZFBhdGgpO1xuICAgIHRyeSB7XG4gICAgICBmcy5yZW5hbWVTeW5jKG9sZFBhdGgsIHBhdGguam9pbihpbmYuZGlyLCBpbmYubmFtZSArICcub2xkJyArIGluZi5leHQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBsb2dDb25zb2xlKCdDb3VsZCBub3Qgcm90YXRlIGxvZycsIGUpO1xuICAgICAgdmFyIHF1YXJ0ZXJPZk1heFNpemUgPSBNYXRoLnJvdW5kKHRyYW5zcG9ydC5tYXhTaXplIC8gNCk7XG4gICAgICBmaWxlLmNyb3AoTWF0aC5taW4ocXVhcnRlck9mTWF4U2l6ZSwgMjU2ICogMTAyNCkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ0NvbnNvbGUobWVzc2FnZSwgZXJyb3IpIHtcbiAgICB2YXIgZGF0YSA9IFsnZWxlY3Ryb24tbG9nLnRyYW5zcG9ydHMuZmlsZTogJyArIG1lc3NhZ2VdO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBkYXRhLnB1c2goZXJyb3IpO1xuICAgIH1cblxuICAgIGVsZWN0cm9uTG9nLnRyYW5zcG9ydHMuY29uc29sZSh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIGxldmVsOiAnd2FybicsXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGaWxlKG1zZykge1xuICAgIHZhciB2YXJzID0gT2JqZWN0LmFzc2lnbih7fSwgcGF0aFZhcmlhYmxlcywge1xuICAgICAgZmlsZU5hbWU6IHRyYW5zcG9ydC5maWxlTmFtZSxcbiAgICB9KTtcblxuICAgIHZhciBmaWxlUGF0aCA9IHRyYW5zcG9ydC5yZXNvbHZlUGF0aCh2YXJzLCBtc2cpO1xuICAgIHJldHVybiByZWdpc3RyeS5wcm92aWRlKGZpbGVQYXRoLCB0cmFuc3BvcnQud3JpdGVPcHRpb25zLCAhdHJhbnNwb3J0LnN5bmMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGF0aFZhcmlhYmxlc30gdmFyc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVzb2x2ZVBhdGgodmFycykge1xuICAgIHJldHVybiBwYXRoLmpvaW4odmFycy5saWJyYXJ5RGVmYXVsdERpciwgdmFycy5maWxlTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0RGVwcmVjYXRlZCgpIHtcbiAgICB2YXIgaXNEZXByZWNhdGVkVGV4dCA9ICcgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHY1Lic7XG4gICAgdmFyIGlzRGVwcmVjYXRlZFByb3AgPSAnIHByb3BlcnR5JyArIGlzRGVwcmVjYXRlZFRleHQ7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0cmFuc3BvcnQsIHtcbiAgICAgIGJ5dGVzV3JpdHRlbjoge1xuICAgICAgICBnZXQ6IHV0aWwuZGVwcmVjYXRlKGdldEJ5dGVzV3JpdHRlbiwgJ2J5dGVzV3JpdHRlbicgKyBpc0RlcHJlY2F0ZWRQcm9wKSxcbiAgICAgIH0sXG5cbiAgICAgIGZpbGU6IHtcbiAgICAgICAgZ2V0OiB1dGlsLmRlcHJlY2F0ZShnZXRMb2dGaWxlLCAnZmlsZScgKyBpc0RlcHJlY2F0ZWRQcm9wKSxcbiAgICAgICAgc2V0OiB1dGlsLmRlcHJlY2F0ZShzZXRMb2dGaWxlLCAnZmlsZScgKyBpc0RlcHJlY2F0ZWRQcm9wKSxcbiAgICAgIH0sXG5cbiAgICAgIGZpbGVTaXplOiB7XG4gICAgICAgIGdldDogdXRpbC5kZXByZWNhdGUoZ2V0RmlsZVNpemUsICdmaWxlJyArIGlzRGVwcmVjYXRlZFByb3ApLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRyYW5zcG9ydC5jbGVhciA9IHV0aWwuZGVwcmVjYXRlKGNsZWFyLCAnY2xlYXIoKScgKyBpc0RlcHJlY2F0ZWRUZXh0KTtcbiAgICB0cmFuc3BvcnQuZmluZExvZ1BhdGggPSB1dGlsLmRlcHJlY2F0ZShcbiAgICAgIGdldExvZ0ZpbGUsXG4gICAgICAnZmluZExvZ1BhdGgoKScgKyBpc0RlcHJlY2F0ZWRUZXh0XG4gICAgKTtcbiAgICB0cmFuc3BvcnQuaW5pdCA9IHV0aWwuZGVwcmVjYXRlKGluaXQsICdpbml0KCknICsgaXNEZXByZWNhdGVkVGV4dCk7XG5cbiAgICBmdW5jdGlvbiBnZXRCeXRlc1dyaXR0ZW4oKSB7XG4gICAgICByZXR1cm4gZ2V0RmlsZSgpLmJ5dGVzV3JpdHRlbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMb2dGaWxlKCkge1xuICAgICAgcmV0dXJuIGdldEZpbGUoKS5wYXRoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldExvZ0ZpbGUoZmlsZVBhdGgpIHtcbiAgICAgIHRyYW5zcG9ydC5yZXNvbHZlUGF0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZpbGVQYXRoO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGaWxlU2l6ZSgpIHtcbiAgICAgIHJldHVybiBnZXRGaWxlKCkuc2l6ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIGdldEZpbGUoKS5jbGVhcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRGaWxlTmFtZSgpIHtcbiAgc3dpdGNoIChwcm9jZXNzLnR5cGUpIHtcbiAgICBjYXNlICdyZW5kZXJlcic6IHJldHVybiAncmVuZGVyZXIubG9nJztcbiAgICBjYXNlICd3b3JrZXInOiByZXR1cm4gJ3dvcmtlci5sb2cnO1xuICAgIGRlZmF1bHQ6IHJldHVybiAnbWFpbi5sb2cnO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5cbnZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlYWRQYWNrYWdlSnNvbjogcmVhZFBhY2thZ2VKc29uLFxuICB0cnlSZWFkSnNvbkF0OiB0cnlSZWFkSnNvbkF0LFxufTtcblxuLyoqXG4gKiBAcmV0dXJuIHt7IG5hbWU/OiBzdHJpbmcsIHZlcnNpb24/OiBzdHJpbmd9fVxuICovXG5mdW5jdGlvbiByZWFkUGFja2FnZUpzb24oKSB7XG4gIHJldHVybiB0cnlSZWFkSnNvbkF0KHJlcXVpcmUubWFpbiAmJiByZXF1aXJlLm1haW4uZmlsZW5hbWUpXG4gICAgfHwgdHJ5UmVhZEpzb25BdChwcm9jZXNzLnJlc291cmNlc1BhdGgsICdhcHAuYXNhcicpXG4gICAgfHwgdHJ5UmVhZEpzb25BdChwcm9jZXNzLmN3ZCgpKVxuICAgIHx8IHsgbmFtZTogbnVsbCwgdmVyc2lvbjogbnVsbCB9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBzZWFyY2hQYXRoXG4gKiBAcmV0dXJuIHt7IG5hbWU/OiBzdHJpbmcsIHZlcnNpb24/OiBzdHJpbmcgfSB8IG51bGx9XG4gKi9cbmZ1bmN0aW9uIHRyeVJlYWRKc29uQXQoc2VhcmNoUGF0aCkge1xuICB0cnkge1xuICAgIHNlYXJjaFBhdGggPSBwYXRoLmpvaW4uYXBwbHkocGF0aCwgYXJndW1lbnRzKTtcbiAgICB2YXIgZmlsZU5hbWUgPSBmaW5kVXAoJ3BhY2thZ2UuanNvbicsIHNlYXJjaFBhdGgpO1xuICAgIGlmICghZmlsZU5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBqc29uID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoZmlsZU5hbWUsICd1dGY4JykpO1xuICAgIHZhciBuYW1lID0ganNvbi5wcm9kdWN0TmFtZSB8fCBqc29uLm5hbWU7XG4gICAgaWYgKCFuYW1lIHx8IG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2VsZWN0cm9uJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGpzb24ucHJvZHVjdE5hbWUgfHwganNvbi5uYW1lKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICB2ZXJzaW9uOiBqc29uLnZlcnNpb24sXG4gICAgICB9O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gW2N3ZF1cbiAqIEByZXR1cm4ge3N0cmluZyB8IG51bGx9XG4gKi9cbmZ1bmN0aW9uIGZpbmRVcChmaWxlTmFtZSwgY3dkKSB7XG4gIHZhciBjdXJyZW50UGF0aCA9IGN3ZDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnN0YW50LWNvbmRpdGlvblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBwYXJzZWRQYXRoID0gcGF0aC5wYXJzZShjdXJyZW50UGF0aCk7XG4gICAgdmFyIHJvb3QgPSBwYXJzZWRQYXRoLnJvb3Q7XG4gICAgdmFyIGRpciA9IHBhcnNlZFBhdGguZGlyO1xuXG4gICAgaWYgKGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGN1cnJlbnRQYXRoLCBmaWxlTmFtZSkpKSB7XG4gICAgICByZXR1cm4gcGF0aC5yZXNvbHZlKHBhdGguam9pbihjdXJyZW50UGF0aCwgZmlsZU5hbWUpKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBhdGggPT09IHJvb3QpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGN1cnJlbnRQYXRoID0gZGlyO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcyA9IHJlcXVpcmUoJ29zJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBlbGVjdHJvbkFwaSA9IHJlcXVpcmUoJy4uLy4uL2VsZWN0cm9uQXBpJyk7XG52YXIgcGFja2FnZUpzb24gPSByZXF1aXJlKCcuL3BhY2thZ2VKc29uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRBcHBEYXRhOiBnZXRBcHBEYXRhLFxuICBnZXRMaWJyYXJ5RGVmYXVsdERpcjogZ2V0TGlicmFyeURlZmF1bHREaXIsXG4gIGdldExpYnJhcnlUZW1wbGF0ZTogZ2V0TGlicmFyeVRlbXBsYXRlLFxuICBnZXROYW1lQW5kVmVyc2lvbjogZ2V0TmFtZUFuZFZlcnNpb24sXG4gIGdldFBhdGhWYXJpYWJsZXM6IGdldFBhdGhWYXJpYWJsZXMsXG4gIGdldFVzZXJEYXRhOiBnZXRVc2VyRGF0YSxcbn07XG5cbmZ1bmN0aW9uIGdldEFwcERhdGEocGxhdGZvcm0pIHtcbiAgdmFyIGFwcERhdGEgPSBlbGVjdHJvbkFwaS5nZXRQYXRoKCdhcHBEYXRhJyk7XG4gIGlmIChhcHBEYXRhKSB7XG4gICAgcmV0dXJuIGFwcERhdGE7XG4gIH1cblxuICB2YXIgaG9tZSA9IGdldEhvbWUoKTtcblxuICBzd2l0Y2ggKHBsYXRmb3JtKSB7XG4gICAgY2FzZSAnZGFyd2luJzoge1xuICAgICAgcmV0dXJuIHBhdGguam9pbihob21lLCAnTGlicmFyeS9BcHBsaWNhdGlvbiBTdXBwb3J0Jyk7XG4gICAgfVxuXG4gICAgY2FzZSAnd2luMzInOiB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5lbnYuQVBQREFUQSB8fCBwYXRoLmpvaW4oaG9tZSwgJ0FwcERhdGEvUm9hbWluZycpO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBwcm9jZXNzLmVudi5YREdfQ09ORklHX0hPTUUgfHwgcGF0aC5qb2luKGhvbWUsICcuY29uZmlnJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEhvbWUoKSB7XG4gIHJldHVybiBvcy5ob21lZGlyID8gb3MuaG9tZWRpcigpIDogcHJvY2Vzcy5lbnYuSE9NRTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlicmFyeURlZmF1bHREaXIocGxhdGZvcm0sIGFwcE5hbWUpIHtcbiAgaWYgKHBsYXRmb3JtID09PSAnZGFyd2luJykge1xuICAgIHJldHVybiBwYXRoLmpvaW4oZ2V0SG9tZSgpLCAnTGlicmFyeS9Mb2dzJywgYXBwTmFtZSk7XG4gIH1cblxuICByZXR1cm4gcGF0aC5qb2luKGdldFVzZXJEYXRhKHBsYXRmb3JtLCBhcHBOYW1lKSwgJ2xvZ3MnKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlicmFyeVRlbXBsYXRlKHBsYXRmb3JtKSB7XG4gIGlmIChwbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcbiAgICByZXR1cm4gcGF0aC5qb2luKGdldEhvbWUoKSwgJ0xpYnJhcnkvTG9ncycsICd7YXBwTmFtZX0nKTtcbiAgfVxuXG4gIHJldHVybiBwYXRoLmpvaW4oZ2V0QXBwRGF0YShwbGF0Zm9ybSksICd7YXBwTmFtZX0nLCAnbG9ncycpO1xufVxuXG5mdW5jdGlvbiBnZXROYW1lQW5kVmVyc2lvbigpIHtcbiAgdmFyIG5hbWUgPSBlbGVjdHJvbkFwaS5nZXROYW1lKCk7XG4gIHZhciB2ZXJzaW9uID0gZWxlY3Ryb25BcGkuZ2V0VmVyc2lvbigpO1xuXG4gIGlmIChuYW1lICYmIHZlcnNpb24pIHtcbiAgICByZXR1cm4geyBuYW1lOiBuYW1lLCB2ZXJzaW9uOiB2ZXJzaW9uIH07XG4gIH1cblxuICB2YXIgcGFja2FnZVZhbHVlcyA9IHBhY2thZ2VKc29uLnJlYWRQYWNrYWdlSnNvbigpO1xuICBpZiAoIW5hbWUpIHtcbiAgICBuYW1lID0gcGFja2FnZVZhbHVlcy5uYW1lO1xuICB9XG5cbiAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IHBhY2thZ2VWYWx1ZXMudmVyc2lvbjtcbiAgfVxuXG4gIHJldHVybiB7IG5hbWU6IG5hbWUsIHZlcnNpb246IHZlcnNpb24gfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcGxhdGZvcm1cbiAqIEByZXR1cm4ge1BhdGhWYXJpYWJsZXN9XG4gKi9cbmZ1bmN0aW9uIGdldFBhdGhWYXJpYWJsZXMocGxhdGZvcm0pIHtcbiAgdmFyIG5hbWVBbmRWZXJzaW9uID0gZ2V0TmFtZUFuZFZlcnNpb24oKTtcbiAgdmFyIGFwcE5hbWUgPSBuYW1lQW5kVmVyc2lvbi5uYW1lO1xuICB2YXIgYXBwVmVyc2lvbiA9IG5hbWVBbmRWZXJzaW9uLnZlcnNpb247XG5cbiAgcmV0dXJuIHtcbiAgICBhcHBEYXRhOiBnZXRBcHBEYXRhKHBsYXRmb3JtKSxcbiAgICBhcHBOYW1lOiBhcHBOYW1lLFxuICAgIGFwcFZlcnNpb246IGFwcFZlcnNpb24sXG4gICAgZWxlY3Ryb25EZWZhdWx0RGlyOiBlbGVjdHJvbkFwaS5nZXRQYXRoKCdsb2dzJyksXG4gICAgaG9tZTogZ2V0SG9tZSgpLFxuICAgIGxpYnJhcnlEZWZhdWx0RGlyOiBnZXRMaWJyYXJ5RGVmYXVsdERpcihwbGF0Zm9ybSwgYXBwTmFtZSksXG4gICAgbGlicmFyeVRlbXBsYXRlOiBnZXRMaWJyYXJ5VGVtcGxhdGUocGxhdGZvcm0pLFxuICAgIHRlbXA6IGVsZWN0cm9uQXBpLmdldFBhdGgoJ3RlbXAnKSB8fCBvcy50bXBkaXIoKSxcbiAgICB1c2VyRGF0YTogZ2V0VXNlckRhdGEocGxhdGZvcm0sIGFwcE5hbWUpLFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyRGF0YShwbGF0Zm9ybSwgYXBwTmFtZSkge1xuICByZXR1cm4gZWxlY3Ryb25BcGkuZ2V0UGF0aCgndXNlckRhdGEnKVxuICAgIHx8IHBhdGguam9pbihnZXRBcHBEYXRhKHBsYXRmb3JtKSwgYXBwTmFtZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0cmFuc2Zvcm0gPSByZXF1aXJlKCcuLi90cmFuc2Zvcm0nKTtcbnZhciBlbGVjdHJvbkFwaSA9IHJlcXVpcmUoJy4uL2VsZWN0cm9uQXBpJyk7XG52YXIgbG9nID0gcmVxdWlyZSgnLi4vbG9nLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXBjVHJhbnNwb3J0RmFjdG9yeTtcblxuZnVuY3Rpb24gaXBjVHJhbnNwb3J0RmFjdG9yeShlbGVjdHJvbkxvZykge1xuICB0cmFuc3BvcnQuZXZlbnRJZCA9ICdfX0VMRUNUUk9OX0xPR19JUENfJyArIGVsZWN0cm9uTG9nLmxvZ0lkICsgJ19fJztcbiAgdHJhbnNwb3J0LmxldmVsID0gZWxlY3Ryb25Mb2cuaXNEZXYgPyAnc2lsbHknIDogZmFsc2U7XG5cbiAgLy8gUHJldmVudCBwcm9ibGVtcyB3aGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMgYWZ0ZXIgd2VicGFja1xuICBpZiAoZWxlY3Ryb25BcGkuaXNJcGNDaGFubmVsTGlzdGVuZWQodHJhbnNwb3J0LmV2ZW50SWQpKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHt9O1xuICB9XG5cbiAgZWxlY3Ryb25BcGkub25JcGModHJhbnNwb3J0LmV2ZW50SWQsIGZ1bmN0aW9uIChfLCBtZXNzYWdlKSB7XG4gICAgbWVzc2FnZS5kYXRlID0gbmV3IERhdGUobWVzc2FnZS5kYXRlKTtcblxuICAgIGxvZy5ydW5UcmFuc3BvcnQoXG4gICAgICBlbGVjdHJvbkxvZy50cmFuc3BvcnRzLmNvbnNvbGUsXG4gICAgICBtZXNzYWdlLFxuICAgICAgZWxlY3Ryb25Mb2dcbiAgICApO1xuICB9KTtcblxuICBlbGVjdHJvbkFwaS5sb2FkUmVtb3RlTW9kdWxlKCdlbGVjdHJvbi1sb2cnKTtcblxuICByZXR1cm4gZWxlY3Ryb25BcGkuaXNFbGVjdHJvbigpID8gdHJhbnNwb3J0IDogbnVsbDtcblxuICBmdW5jdGlvbiB0cmFuc3BvcnQobWVzc2FnZSkge1xuICAgIHZhciBpcGNNZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7fSwgbWVzc2FnZSwge1xuICAgICAgZGF0YTogdHJhbnNmb3JtLnRyYW5zZm9ybShtZXNzYWdlLCBbXG4gICAgICAgIHRyYW5zZm9ybS5yZW1vdmVTdHlsZXMsXG4gICAgICAgIHRyYW5zZm9ybS50b0pTT04sXG4gICAgICAgIHRyYW5zZm9ybS5tYXhEZXB0aEZhY3RvcnkoMyksXG4gICAgICBdKSxcbiAgICB9KTtcblxuICAgIGVsZWN0cm9uQXBpLnNlbmRJcGModHJhbnNwb3J0LmV2ZW50SWQsIGlwY01lc3NhZ2UpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xudmFyIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKTtcbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbnZhciBsb2cgPSByZXF1aXJlKCcuLi9sb2cnKTtcbnZhciB0cmFuc2Zvcm0gPSByZXF1aXJlKCcuLi90cmFuc2Zvcm0nKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZW1vdGVUcmFuc3BvcnRGYWN0b3J5O1xuXG5mdW5jdGlvbiByZW1vdGVUcmFuc3BvcnRGYWN0b3J5KGVsZWN0cm9uTG9nKSB7XG4gIHRyYW5zcG9ydC5jbGllbnQgPSB7IG5hbWU6ICdlbGVjdHJvbi1hcHBsaWNhdGlvbicgfTtcbiAgdHJhbnNwb3J0LmRlcHRoID0gNjtcbiAgdHJhbnNwb3J0LmxldmVsID0gZmFsc2U7XG4gIHRyYW5zcG9ydC5yZXF1ZXN0T3B0aW9ucyA9IHt9O1xuICB0cmFuc3BvcnQudXJsID0gbnVsbDtcblxuICByZXR1cm4gdHJhbnNwb3J0O1xuXG4gIGZ1bmN0aW9uIHRyYW5zcG9ydChtZXNzYWdlKSB7XG4gICAgaWYgKCF0cmFuc3BvcnQudXJsKSByZXR1cm47XG5cbiAgICB2YXIgcmVxdWVzdCA9IHBvc3QodHJhbnNwb3J0LnVybCwgdHJhbnNwb3J0LnJlcXVlc3RPcHRpb25zLCB7XG4gICAgICBjbGllbnQ6IHRyYW5zcG9ydC5jbGllbnQsXG4gICAgICBkYXRhOiB0cmFuc2Zvcm0udHJhbnNmb3JtKG1lc3NhZ2UsIFtcbiAgICAgICAgdHJhbnNmb3JtLnJlbW92ZVN0eWxlcyxcbiAgICAgICAgdHJhbnNmb3JtLnRvSlNPTixcbiAgICAgICAgdHJhbnNmb3JtLm1heERlcHRoRmFjdG9yeSh0cmFuc3BvcnQuZGVwdGggKyAxKSxcbiAgICAgIF0pLFxuICAgICAgZGF0ZTogbWVzc2FnZS5kYXRlLmdldFRpbWUoKSxcbiAgICAgIGxldmVsOiBtZXNzYWdlLmxldmVsLFxuICAgICAgdmFyaWFibGVzOiBtZXNzYWdlLnZhcmlhYmxlcyxcbiAgICB9KTtcblxuICAgIHJlcXVlc3Qub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgZXJyb3JNZXNzYWdlID0ge1xuICAgICAgICBkYXRhOiBbXG4gICAgICAgICAgJ2VsZWN0cm9uLWxvZy50cmFuc3BvcnRzLnJlbW90ZTonXG4gICAgICAgICAgKyAnIGNhbm5vdCBzZW5kIEhUVFAgcmVxdWVzdCB0byAnICsgdHJhbnNwb3J0LnVybCxcbiAgICAgICAgICBlcnJvcixcbiAgICAgICAgXSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgbGV2ZWw6ICd3YXJuJyxcbiAgICAgIH07XG5cbiAgICAgIHZhciB0cmFuc3BvcnRzID0gW1xuICAgICAgICBlbGVjdHJvbkxvZy50cmFuc3BvcnRzLmNvbnNvbGUsXG4gICAgICAgIGVsZWN0cm9uTG9nLnRyYW5zcG9ydHMuaXBjLFxuICAgICAgICBlbGVjdHJvbkxvZy50cmFuc3BvcnRzLmZpbGUsXG4gICAgICBdO1xuXG4gICAgICBsb2cucnVuVHJhbnNwb3J0cyh0cmFuc3BvcnRzLCBlcnJvck1lc3NhZ2UsIGVsZWN0cm9uTG9nKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb3N0KHNlcnZlclVybCwgcmVxdWVzdE9wdGlvbnMsIGRhdGEpIHtcbiAgdmFyIHVybE9iamVjdCA9IHVybC5wYXJzZShzZXJ2ZXJVcmwpO1xuICB2YXIgaHR0cFRyYW5zcG9ydCA9IHVybE9iamVjdC5wcm90b2NvbCA9PT0gJ2h0dHBzOicgPyBodHRwcyA6IGh0dHA7XG5cbiAgdmFyIGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBob3N0bmFtZTogdXJsT2JqZWN0Lmhvc3RuYW1lLFxuICAgIHBvcnQ6ICAgICB1cmxPYmplY3QucG9ydCxcbiAgICBwYXRoOiAgICAgdXJsT2JqZWN0LnBhdGgsXG4gICAgbWV0aG9kOiAgICdQT1NUJyxcbiAgICBoZWFkZXJzOiAge1xuICAgICAgJ0NvbnRlbnQtTGVuZ3RoJzogYm9keS5sZW5ndGgsXG4gICAgICAnQ29udGVudC1UeXBlJzogICAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHJlcXVlc3RPcHRpb25zKTtcblxuICB2YXIgcmVxdWVzdCA9IGh0dHBUcmFuc3BvcnQucmVxdWVzdChvcHRpb25zKTtcbiAgcmVxdWVzdC53cml0ZShib2R5KTtcbiAgcmVxdWVzdC5lbmQoKTtcblxuICByZXR1cm4gcmVxdWVzdDtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZWxlY3Ryb25FdmVudCA9IHtcclxuICAgIC8qKiDjgrXjg7zjg5Djg7zotbfli5UgKi9cclxuICAgICdzdGFydC1zZXJ2ZXInOiAnc3RhcnQtc2VydmVyJyxcclxuICAgIC8qKiDjgqLjg6njg7zjg4jooajnpLogKi9cclxuICAgICdzaG93LWFsZXJ0JzogJ3Nob3ctYWxlcnQnLFxyXG4gICAgJ3Nob3ctY29tbWVudCc6ICdzaG93LWNvbW1lbnQnLFxyXG4gICAgJ2NsZWFyLWNvbW1lbnQnOiAnY2xlYXItY29tbWVudCcsXHJcbiAgICAvKiog44K144O844OQ44O86LW35YuV44Gu6L+U5L+hICovXHJcbiAgICAnc3RhcnQtc2VydmVyLXJlcGx5JzogJ3N0YXJ0LXNlcnZlci1yZXBseScsXHJcbiAgICBNQUlOX0dFVF9FTEVDVFJPTl9EQVRBOiAnTUFJTl9HRVRfRUxFQ1RST05fREFUQScsXHJcbiAgICBNQUlOX1NFVF9FTEVDVFJPTl9EQVRBOiAnTUFJTl9TRVRfRUxFQ1RST05fREFUQScsXHJcbiAgICAvKiog44K544OsVVJM44KS5YWD44Gr5p2/5oOF5aCx44KS5Y+W5b6XICovXHJcbiAgICBNQUlOX0ZFVENIX0JPQVJESU5GTzogJ01BSU5fRkVUQ0hfQk9BUkRJTkZPJyxcclxuICAgIC8qKiDmnb/jgpLov73liqAgKi9cclxuICAgIE1BSU5fQUREX0JPQVJETElTVDogJ01BSU5fQUREX0JPQVJETElTVCcsXHJcbiAgICAvKiog5p2/44KS5YmK6ZmkICovXHJcbiAgICBNQUlOX0RFTEVURV9CT0FSRExJU1Q6ICdNQUlOX0RFTEVURV9CT0FSRExJU1QnLFxyXG4gICAgLyoqIOOCueODrOS4gOimp+OCkumWi+OBjyAqL1xyXG4gICAgTUFJTl9HRVRfVEhSRUFEX0xJU1Q6ICdNQUlOX0dFVF9USFJFQURfTElTVCcsXHJcbiAgICAvKiog44K544Os44KS6ZaL44GPICovXHJcbiAgICBNQUlOX09QRU5fVEhSRUFEOiAnTUFJTl9PUEVOX1RIUkVBRCcsXHJcbiAgICAvKiog5p2/5LiA6Kan6KGo56S6ICovXHJcbiAgICBTSE9XX0JPQVJEX0xJU1Q6ICdTSE9XX0JPQVJEX0xJU1QnLFxyXG4gICAgLyoqIOabuOOBjei+vOOBvyAqL1xyXG4gICAgTUFJTl9QT1NUX0tBS0lLT01JOiAnTUFJTl9QT1NUX0tBS0lLT01JJyxcclxuICAgIC8qKiDjg6zjgrnjgqbjgqPjg7Pjg4njgqbjga7liJ3mnJ/ljJYgKi9cclxuICAgIENIQVRfSU5JVDogJ0NIQVRfSU5JVCcsXHJcbn07XHJcbmV4cG9ydHMua2V5Q29kZSA9IHtcclxuICAgIEVOVEVSOiAxMyxcclxuICAgIFNISUZUOiAxNixcclxuICAgIENUUkw6IDE3LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjI1emRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGaExGRkJRVUVzWVVGQllTeEhRVUZITzBsQlF6TkNMR0ZCUVdFN1NVRkRZaXhqUVVGakxFVkJRVVVzWTBGQll6dEpRVVU1UWl4aFFVRmhPMGxCUTJJc1dVRkJXU3hGUVVGRkxGbEJRVms3U1VGRk1VSXNZMEZCWXl4RlFVRkZMR05CUVdNN1NVRkRPVUlzWlVGQlpTeEZRVUZGTEdWQlFXVTdTVUZGYUVNc1owSkJRV2RDTzBsQlEyaENMRzlDUVVGdlFpeEZRVUZGTEc5Q1FVRnZRanRKUVVVeFF5eHpRa0ZCYzBJc1JVRkJSU3gzUWtGQmQwSTdTVUZEYUVRc2MwSkJRWE5DTEVWQlFVVXNkMEpCUVhkQ08wbEJSV2hFTEhGQ1FVRnhRanRKUVVOeVFpeHZRa0ZCYjBJc1JVRkJSU3h6UWtGQmMwSTdTVUZETlVNc1YwRkJWenRKUVVOWUxHdENRVUZyUWl4RlFVRkZMRzlDUVVGdlFqdEpRVU40UXl4WFFVRlhPMGxCUTFnc2NVSkJRWEZDTEVWQlFVVXNkVUpCUVhWQ08wbEJSVGxETEdOQlFXTTdTVUZEWkN4dlFrRkJiMElzUlVGQlJTeHpRa0ZCYzBJN1NVRkZOVU1zV1VGQldUdEpRVU5hTEdkQ1FVRm5RaXhGUVVGRkxHdENRVUZyUWp0SlFVVndReXhaUVVGWk8wbEJRMW9zWlVGQlpTeEZRVUZGTEdsQ1FVRnBRanRKUVVWc1F5eFhRVUZYTzBsQlExZ3NhMEpCUVd0Q0xFVkJRVVVzYjBKQlFXOUNPMGxCUlhoRExHdENRVUZyUWp0SlFVTnNRaXhUUVVGVExFVkJRVVVzVjBGQlZ6dERRVU4yUWl4RFFVRkRPMEZCUlZjc1VVRkJRU3hQUVVGUExFZEJRVWM3U1VGRGNrSXNTMEZCU3l4RlFVRkZMRVZCUVVVN1NVRkRWQ3hMUVVGTExFVkJRVVVzUlVGQlJUdEpRVU5VTEVsQlFVa3NSVUZCUlN4RlFVRkZPME5CUTFRc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbGVjdHJvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvblwiKSk7XHJcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi4vbWFpbi9jb25zdFwiKTtcclxudmFyIGlwY1JlbmRlcmVyID0gZWxlY3Ryb25fMS5kZWZhdWx0LmlwY1JlbmRlcmVyO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJvYXJkJykub25jbGljayA9IGFkZEJvYXJkO1xyXG4gICAgLy8g5o6y56S65p2/6L+95Yqg44OA44Kk44Ki44Ot44Kw44Gu44Oc44K/44OzXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZC1idXR0b24tY2FuY2VsJykub25jbGljayA9IGRpYWxvZ0FkZEJvYXJkQnV0dG9uQ2FuY2VsO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQtYnV0dG9uLW9rJykub25jbGljayA9IGRpYWxvZ0FkZEJvYXJkQnV0dG9uT2s7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZC1idXR0b24tZmV0Y2hCb2FyZCcpLm9uY2xpY2sgPSBkaWFsb2dBZGRCb2FyZEJ1dHRvbkZldGNoQm9hcmQ7XHJcbiAgICAvLyDmjrLnpLrmnb/liYrpmaTjg4DjgqTjgqLjg63jgrDjga7jg5zjgr/jg7NcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctZGVsZXRlLWJvYXJkLWJ1dHRvbi1jYW5jZWwnKS5vbmNsaWNrID0gZGlhbG9nZGVsZXRlQm9hcmRCdXR0b25DYW5jZWw7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWRlbGV0ZS1ib2FyZC1idXR0b24tb2snKS5vbmNsaWNrID0gZGlhbG9nZGlhbG9nZGVsZXRlQm9hcmRCdXR0b25PaztcclxuICAgIHNob3dCb2FyZExpc3QoKTtcclxuICAgIGNvbnNvbGUuZGVidWcoJ1tyZW5kZXJlci5qc11ET00gQ29udGVudCBMb2FkZWQnKTtcclxufSk7XHJcbi8qKiDmnb/ov73liqDjg5zjgr/jg7Pjgq/jg6rjg4Pjgq8gKi9cclxudmFyIGFkZEJvYXJkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJ1thZGRCb2FyZF0nKTtcclxuICAgIC8vIOaOsuekuuadv+i/veWKoOODgOOCpOOCouODreOCsOOCkuihqOekulxyXG4gICAgdmFyIGFsZXJ0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQnKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctYWRkLWJvYXJkLW5hbWUnKS52YWx1ZSA9ICcnO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQtdXJsJykudmFsdWUgPSAnJztcclxuICAgIGFsZXJ0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG59O1xyXG4vLyDmjrLnpLrmnb/ov73liqDjg4DjgqTjgqLjg63jgrDjgafjga7mk43kvZxcclxudmFyIGRpYWxvZ0FkZEJvYXJkQnV0dG9uQ2FuY2VsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQnKS5jbG9zZSgpOyB9O1xyXG52YXIgZGlhbG9nQWRkQm9hcmRCdXR0b25PayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbmFtZSwgdXJsO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZC1uYW1lJykudmFsdWU7XHJcbiAgICAgICAgdXJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQtdXJsJykudmFsdWU7XHJcbiAgICAgICAgaWYgKCFuYW1lIHx8ICF1cmwpXHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICBpZiAoIXVybC5tYXRjaCgvXmh0dHAuK1xcLyQvKSlcclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGE6IHR5cGVvZiBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEgPSBhd2FpdCBpcGNSZW5kZXJlci5pbnZva2UoZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9FTEVDVFJPTl9EQVRBKTtcclxuICAgICAgICBpcGNSZW5kZXJlci5pbnZva2UoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fQUREX0JPQVJETElTVCwgeyBuYW1lOiBuYW1lLCB1cmw6IHVybCB9KTtcclxuICAgICAgICAvLyDlkI3liY3jgahVUkzjgpLmipzjgY3lh7rjgZfjgabnmbvpjLLlh6bnkIbjgavlm57jgZlcclxuICAgICAgICBzaG93Qm9hcmRMaXN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1hZGQtYm9hcmQnKS5jbG9zZSgpO1xyXG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgIH0pO1xyXG59KTsgfTtcclxuLyoqIOadv+i/veWKoOODgOOCpOOCouODreOCsOOBruadv+aDheWgseWPluW+lyAqL1xyXG52YXIgZGlhbG9nQWRkQm9hcmRCdXR0b25GZXRjaEJvYXJkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmwsIHJlc3VsdDtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctYWRkLWJvYXJkLXVybCcpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1cmwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1cmwubWF0Y2goL15odHRwLiskLykpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaXBjUmVuZGVyZXIuaW52b2tlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0ZFVENIX0JPQVJESU5GTywgdXJsKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIC8vIOadv+aDheWgseOCkuOCu+ODg+ODiFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWFkZC1ib2FyZC1uYW1lJykudmFsdWUgPSByZXN1bHQuYm9hcmROYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctYWRkLWJvYXJkLXVybCcpLnZhbHVlID0gcmVzdWx0LmJvYXJkVXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuLyoqIOadv+S4gOimp+ihqOekuiAqL1xyXG52YXIgc2hvd0JvYXJkTGlzdCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGF0YSwgYm9hcmRMaXN0LCBsaXN0dWwsIGRvbVN0ciwga2V5SW5kZXg7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGlwY1JlbmRlcmVyLmludm9rZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9HRVRfRUxFQ1RST05fREFUQSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgYm9hcmRMaXN0ID0gZGF0YS5ib2FyZExpc3Q7XHJcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oXCJbc2hvd0JvYXJkTGlzdF0gXFx1Njc3RlxcdTY1NzBcXHVGRjFBXCIgKyBib2FyZExpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGxpc3R1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZExpc3QnKTtcclxuICAgICAgICAgICAgICAgIGRvbVN0ciA9IGJvYXJkTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiYm9hcmRJdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYm9hcmROYW1lIG1kbC1idXR0b24gbWRsLWpzLWJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiYm9hcmRfaXRlbV9cIiArIGluZGV4ICsgXCJcXFwiIGRhdGEtdXJsPVxcXCJcIiArIGl0ZW0udXJsICsgXCJcXFwiPlwiICsgaXRlbS5uYW1lICsgXCI8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZGwtdG9vbHRpcFxcXCIgZGF0YS1tZGwtZm9yPVxcXCJib2FyZF9pdGVtX1wiICsgaW5kZXggKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICBcIiArIGl0ZW0udXJsICsgXCJcXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDxidXR0b24+eDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpO1xyXG4gICAgICAgICAgICAgICAgbGlzdHVsLmlubmVySFRNTCA9IGRvbVN0cjtcclxuICAgICAgICAgICAgICAgIGtleUluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGxpc3R1bC5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbS5jaGlsZE5vZGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50YWdOYW1lID09PSAnRElWJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbnVtXzEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IHZhbHVlLnRhZ05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ0JVVFRPTicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsXzEgPSBib2FyZExpc3Rba2V5SW5kZXhdLnVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtXzEgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUub25jbGljayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNob3dCb2FyZCh1cmxfMSk7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bV8xKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5vbmNsaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2hvd0RlbGV0ZUJvYXJkRGlhbG9nKHVybF8xKTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuLyoqIOOCueODrOS4gOimp+OCkuihqOekuiAqL1xyXG52YXIgc2hvd0JvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxpc3QsIGxpc3R1bCwgZG9tU3RyO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBpcGNSZW5kZXJlci5pbnZva2UoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fR0VUX1RIUkVBRF9MSVNULCBib2FyZFVybCldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgbGlzdHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RocmVhZExpc3QnKTtcclxuICAgICAgICAgICAgICAgIGRvbVN0ciA9IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIjxidXR0b24gY2xhc3M9XFxcImJvYXJkSXRlbSBtZGwtYnV0dG9uIG1kbC1qcy1idXR0b25cXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJib2FyZF9pdGVtX1wiICsgaW5kZXggKyBcIlxcXCI+XCIgKyBpdGVtLm5hbWUgKyBcIjwvZGl2PlxcbiAgICAgICAgICAgICAgPC9idXR0b24+XCI7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgIGxpc3R1bC5pbm5lckhUTUwgPSBkb21TdHI7XHJcbiAgICAgICAgICAgICAgICBsaXN0dWwuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2/44KS6ZaL44GPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBsaXN0W2tleV0udXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGxpc3Rba2V5XS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wZW46IFwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXBjUmVuZGVyZXIuc2VuZChjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9PUEVOX1RIUkVBRCwgdXJsLCBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG4vKiog5o6y56S65p2/5YmK6Zmk44OA44Kk44Ki44Ot44KwICovXHJcbnZhciBzaG93RGVsZXRlQm9hcmREaWFsb2cgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHtcclxuICAgIC8vXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWRlbGV0ZS1ib2FyZC11cmwnKS52YWx1ZSA9IGJvYXJkVXJsO1xyXG4gICAgdmFyIGFsZXJ0RGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1kZWxldGUtYm9hcmQnKTtcclxuICAgIGFsZXJ0RGlhbG9nLnNob3dNb2RhbCgpO1xyXG59O1xyXG52YXIgZGlhbG9nZGVsZXRlQm9hcmRCdXR0b25DYW5jZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlhbG9nLWRlbGV0ZS1ib2FyZCcpLmNsb3NlKCk7IH07XHJcbnZhciBkaWFsb2dkaWFsb2dkZWxldGVCb2FyZEJ1dHRvbk9rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB1cmw7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1tkaWFsb2dkaWFsb2dkZWxldGVCb2FyZEJ1dHRvbk9rXScpO1xyXG4gICAgICAgIHVybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaWFsb2ctZGVsZXRlLWJvYXJkLXVybCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVybCArIFwiIFxcdTMwOTJcXHU1MjRBXFx1OTY2NFwiKTtcclxuICAgICAgICBpcGNSZW5kZXJlci5pbnZva2UoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fREVMRVRFX0JPQVJETElTVCwgdXJsKTtcclxuICAgICAgICBzaG93Qm9hcmRMaXN0KCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpYWxvZy1kZWxldGUtYm9hcmQnKS5jbG9zZSgpO1xyXG4gICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgIH0pO1xyXG59KTsgfTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WdVpHVnlaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnlaVzVrWlhKbGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkJMSE5FUVVGblF6dEJRVU5vUXl3NFJFRkJLMEk3UVVGREwwSXNkVU5CUVRoRE8wRkJSVGxETEVsQlFVMHNWMEZCVnl4SFFVRkhMR3RDUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETzBGQlJYcERMRkZCUVZFc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4clFrRkJhMElzUlVGQlJUdEpRVU16UXl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExGVkJRVlVzUTBGQmMwSXNRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hEUVVGRE8wbEJRemRGTEdsQ1FVRnBRanRKUVVOb1FpeFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMR2REUVVGblF5eERRVUZ6UWl4RFFVRkRMRTlCUVU4c1IwRkJSeXd3UWtGQk1FSXNRMEZCUXp0SlFVTndTQ3hSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETERSQ1FVRTBRaXhEUVVGelFpeERRVUZETEU5QlFVOHNSMEZCUnl4elFrRkJjMElzUTBGQlF6dEpRVU0xUnl4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExHOURRVUZ2UXl4RFFVRnpRaXhEUVVGRExFOUJRVThzUjBGQlJ5dzRRa0ZCT0VJc1EwRkJRenRKUVVVM1NDeHBRa0ZCYVVJN1NVRkRhRUlzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4dFEwRkJiVU1zUTBGQmMwSXNRMEZCUXl4UFFVRlBMRWRCUVVjc05rSkJRVFpDTEVOQlFVTTdTVUZETVVnc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5d3JRa0ZCSzBJc1EwRkJjMElzUTBGQlF5eFBRVUZQTEVkQlFVY3NLMEpCUVN0Q0xFTkJRVU03U1VGRmVrZ3NZVUZCWVN4RlFVRkZMRU5CUVVNN1NVRkRhRUlzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4cFEwRkJhVU1zUTBGQlF5eERRVUZETzBGQlEyNUVMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVWdzYVVKQlFXbENPMEZCUTJwQ0xFbEJRVTBzVVVGQlVTeEhRVUZITzBsQlEyWXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEpRVVV4UWl4blFrRkJaMEk3U1VGRGFFSXNTVUZCVFN4WFFVRlhMRWRCUVVjc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eHJRa0ZCYTBJc1EwRkJaMElzUTBGQlF6dEpRVU01UlN4UlFVRlJMRU5CUVVNc1kwRkJZeXhEUVVGRExIVkNRVUYxUWl4RFFVRnpRaXhEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdTVUZEYWtZc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eHpRa0ZCYzBJc1EwRkJjMElzUTBGQlF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPMGxCUTJoR0xGZEJRVzFDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1FVRkRia01zUTBGQlF5eERRVUZETzBGQlJVWXNhVUpCUVdsQ08wRkJRMnBDTEVsQlFVMHNNRUpCUVRCQ0xFZEJRVWNzWTBGQlRTeFBRVUZETEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2EwSkJRV3RDTEVOQlFWTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1JVRkJOVVFzUTBGQk5FUXNRMEZCUXp0QlFVTjBSeXhKUVVGTkxITkNRVUZ6UWl4SFFVRkhPenM3VVVGRGRrSXNTVUZCU1N4SFFVRkpMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zZFVKQlFYVkNMRU5CUVhOQ0xFTkJRVU1zUzBGQlN5eERRVUZETzFGQlEzQkdMRWRCUVVjc1IwRkJTU3hSUVVGUkxFTkJRVU1zWTBGQll5eERRVUZETEhOQ1FVRnpRaXhEUVVGelFpeERRVUZETEV0QlFVc3NRMEZCUXp0UlFVVjRSaXhKUVVGSkxFTkJRVU1zU1VGQlNTeEpRVUZKTEVOQlFVTXNSMEZCUnp0WlFVRkZMSE5DUVVGUE8xRkJRekZDTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF6dFpRVUZGTEhOQ1FVRlBPMUZCUlhKRExHZElRVUZuU0R0UlFVTm9TQ3hYUVVGWExFTkJRVU1zVFVGQlRTeERRVUZETEhGQ1FVRmhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4SlFVRkpMRTFCUVVFc1JVRkJSU3hIUVVGSExFdEJRVUVzUlVGQlJTeERRVUZETEVOQlFVTTdVVUZGY0VVc2MwSkJRWE5DTzFGQlEzUkNMR0ZCUVdFc1JVRkJSU3hEUVVGRE8xRkJRMllzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4clFrRkJhMElzUTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPenM3UzBGRE9VUXNRMEZCUXp0QlFVVkdMSEZDUVVGeFFqdEJRVU55UWl4SlFVRk5MRGhDUVVFNFFpeEhRVUZIT3pzN096dG5Ra0ZETDBJc1IwRkJSeXhIUVVGSkxGRkJRVkVzUTBGQlF5eGpRVUZqTEVOQlFVTXNjMEpCUVhOQ0xFTkJRWE5DTEVOQlFVTXNTMEZCU3l4RFFVRkRPMmRDUVVONFJpeEpRVUZKTEVOQlFVTXNSMEZCUnp0dlFrRkJSU3h6UWtGQlR6dG5Ra0ZEYWtJc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRPMjlDUVVGRkxITkNRVUZQTzJkQ1FVVndRaXh4UWtGQlRTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMSEZDUVVGaExFTkJRVU1zYjBKQlFXOUNMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVUU3TzJkQ1FVRXhSU3hOUVVGTkxFZEJRVWNzVTBGQmFVVTdaMEpCUldoR0xGVkJRVlU3WjBKQlExWXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hMUVVGTExFbEJRVWtzUlVGQlJUdHZRa0ZEZWtJc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eDFRa0ZCZFVJc1EwRkJjMElzUTBGQlF5eExRVUZMTEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJRenR2UWtGREwwWXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXh6UWtGQmMwSXNRMEZCYzBJc1EwRkJReXhMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEZGQlFWRXNRMEZCUXp0cFFrRkRMMFk3T3pzN1MwRkRSaXhEUVVGRE8wRkJSVVlzV1VGQldUdEJRVU5hTEVsQlFVMHNZVUZCWVN4SFFVRkhPenM3TzI5Q1FVTXdRaXh4UWtGQlRTeFhRVUZYTEVOQlFVTXNUVUZCVFN4RFFVRkRMSEZDUVVGaExFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1JVRkJRVHM3WjBKQlFYUkhMRWxCUVVrc1IwRkJiME1zVTBGQk9FUTdaMEpCUTNSSExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRPMmRDUVVOcVF5eHpRa0ZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXgxUTBGQmMwSXNVMEZCVXl4RFFVRkRMRTFCUVZFc1EwRkJReXhEUVVGRE8yZENRVVUzUXl4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExHTkJRV01zUTBGQlF5eFhRVUZYTEVOQlFXZENMRU5CUVVNN1owSkJSVGRFTEUxQlFVMHNSMEZCUnl4VFFVRlRPM0ZDUVVOeVFpeEhRVUZITEVOQlFVTXNWVUZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTenR2UWtGRFppeFBRVUZQTERoSlFVVXlRaXhMUVVGTExITkNRVUZsTEVsQlFVa3NRMEZCUXl4SFFVRkhMRmRCUVVzc1NVRkJTU3hEUVVGRExFbEJRVWtzZFVaQlExb3NTMEZCU3l4cFEwRkRja1FzU1VGQlNTeERRVUZETEVkQlFVY3NiMGxCUzJZc1EwRkJRenRuUWtGRFdpeERRVUZETEVOQlFVTTdjVUpCUTBRc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVVmFMRTFCUVUwc1EwRkJReXhUUVVGVExFZEJRVWNzVFVGQlRTeERRVUZETzJkQ1FVVjBRaXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVTnFRaXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRWxCUVVrc1JVRkJSU3hIUVVGWE8yOUNRVU14UXl4eFFrRkJjVUk3YjBKQlEzSkNMRzlDUVVGdlFqdHZRa0ZEY0VJc1owTkJRV2RETzI5Q1FVVm9ReXhKUVVGTExFbEJRVzlDTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1JVRkJSVHQzUWtGRE0wTXNTVUZCU1N4TFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8zZENRVU5hTEVsQlFVa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVU1zUzBGQlN5eEZRVUZGTEV0QlFVczdORUpCUTI1RExFbEJRVTBzVDBGQlR5eEhRVUZKTEV0QlFYRkNMRU5CUVVNc1QwRkJUeXhEUVVGRE96UkNRVU12UXl4SlFVRkpMRTlCUVU4c1MwRkJTeXhSUVVGUkxFVkJRVVU3WjBOQlEzaENMRWxCUVUwc1MwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1owTkJRM0JETEVsQlFVa3NTMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSVHR2UTBGRFdpeExRVUZ4UWl4RFFVRkRMRTlCUVU4c1IwRkJSeXhqUVVGTkxFOUJRVUVzVTBGQlV5eERRVUZETEV0QlFVY3NRMEZCUXl4RlFVRmtMRU5CUVdNc1EwRkJRenR2UTBGRGRFUXNTMEZCUnl4RlFVRkZMRU5CUVVNN2FVTkJRMUE3Y1VOQlFVMDdiME5CUTBvc1MwRkJjVUlzUTBGQlF5eFBRVUZQTEVkQlFVY3NZMEZCVFN4UFFVRkJMSEZDUVVGeFFpeERRVUZETEV0QlFVY3NRMEZCUXl4RlFVRXhRaXhEUVVFd1FpeERRVUZETzJsRFFVTnVSVHMyUWtGRFJqdDNRa0ZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenQzUWtGRlNDeFJRVUZSTEVWQlFVVXNRMEZCUXp0eFFrRkRXanRuUWtGRFNDeERRVUZETEVOQlFVTXNRMEZCUXpzN096dExRVU5LTEVOQlFVTTdRVUZGUml4alFVRmpPMEZCUTJRc1NVRkJUU3hUUVVGVExFZEJRVWNzVlVGQlR5eFJRVUZuUWpzN096dHZRa0ZOYWtNc2NVSkJRVTBzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJZU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZMRkZCUVZFc1EwRkJReXhGUVVGQk96dG5Ra0ZLZEVVc1NVRkJTU3hIUVVsS0xGTkJRWE5GTzJkQ1FVZDBSU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRU5CUVdkQ0xFTkJRVU03WjBKQlF6bEVMRTFCUVUwc1IwRkJSeXhKUVVGSk8zRkNRVU5vUWl4SFFVRkhMRU5CUVVNc1ZVRkJReXhKUVVGSkxFVkJRVVVzUzBGQlN6dHZRa0ZEWml4UFFVRlBMR2xIUVVONVFpeExRVUZMTEZkQlFVc3NTVUZCU1N4RFFVRkRMRWxCUVVrc2IwTkJRMnBETEVOQlFVTTdaMEpCUTNKQ0xFTkJRVU1zUTBGQlF6dHhRa0ZEUkN4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlJWb3NUVUZCVFN4RFFVRkRMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU03WjBKQlJURkNMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNTVUZCU1N4RlFVRkZMRWRCUVZjN2IwSkJRekZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03YjBKQlEyeENMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdiMEpCUTJoQ0xFbEJRVzlDTEVOQlFVTXNUMEZCVHl4SFFVRkhPM2RDUVVNNVFpeFBRVUZQTzNkQ1FVTlFMRWxCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN2QwSkJRekZDTEVsQlFVMHNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTTdkMEpCUXpWQ0xFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVXl4SFFVRkxMRU5CUVVNc1EwRkJRenQzUWtGRE5VSXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFZEJRVWNzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXp0dlFrRkRPVVFzUTBGQlF5eERRVUZETzJkQ1FVTktMRU5CUVVNc1EwRkJReXhEUVVGRE96czdPMHRCUTBvc1EwRkJRenRCUVVWR0xHbENRVUZwUWp0QlFVTnFRaXhKUVVGTkxIRkNRVUZ4UWl4SFFVRkhMRlZCUVVNc1VVRkJaMEk3U1VGRE4wTXNSVUZCUlR0SlFVTkVMRkZCUVZFc1EwRkJReXhqUVVGakxFTkJRVU1zZVVKQlFYbENMRU5CUVhOQ0xFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXp0SlFVTXhSaXhKUVVGTkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMSEZDUVVGeFFpeERRVUZuUWl4RFFVRkRPMGxCUTJwR0xGZEJRVzFDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRU5CUVVNN1FVRkRia01zUTBGQlF5eERRVUZETzBGQlJVWXNTVUZCVFN3MlFrRkJOa0lzUjBGQlJ5eGpRVUZOTEU5QlFVTXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXh4UWtGQmNVSXNRMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVFdlJDeERRVUVyUkN4RFFVRkRPMEZCUXpWSExFbEJRVTBzSzBKQlFTdENMRWRCUVVjN096dFJRVU4wUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExHMURRVUZ0UXl4RFFVRkRMRU5CUVVNN1VVRkZNME1zUjBGQlJ5eEhRVUZKTEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc2VVSkJRWGxDTEVOQlFYTkNMRU5CUVVNc1MwRkJTeXhEUVVGRE8xRkJSVE5HTEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVrc1IwRkJSeXgzUWtGQlRTeERRVUZETEVOQlFVTTdVVUZETVVJc1YwRkJWeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMSEZDUVVGeFFpeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMUZCUlRkRUxHRkJRV0VzUlVGQlJTeERRVUZETzFGQlEyWXNVVUZCVVN4RFFVRkRMR05CUVdNc1EwRkJReXh4UWtGQmNVSXNRMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE96czdTMEZEYWtVc1EwRkJReUo5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9