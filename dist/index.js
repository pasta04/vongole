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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/config.ts":
/*!****************************!*\
  !*** ./src/main/config.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var electron_json_storage_1 = __importDefault(__webpack_require__(/*! electron-json-storage */ "electron-json-storage"));
var Config = /** @class */ (function () {
    function Config() {
        this.getBoadList = function () {
            electron_json_storage_1.default.get('boardList', function (error, data) {
                var _a;
                globalThis.electron.data.boardList = (_a = data.boardList) !== null && _a !== void 0 ? _a : [];
            });
        };
        /** 板一覧を保存 */
        this.saveBoardList = function (boardList) {
            electron_json_storage_1.default.set('boardList', { boardList: boardList }, function (err) {
                throw err;
            });
        };
        // 設定ファイル読み込み
        electron_json_storage_1.default.setDataPath(path_1.default.resolve(''));
    }
    return Config;
}());
exports.default = new Config();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXdCO0FBQ3hCLGdGQUE0QztBQUc1QztJQUNFO1FBSUEsZ0JBQVcsR0FBRztZQUNaLCtCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQVUsRUFBRSxJQUFTOztnQkFDN0MsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxTQUFHLElBQUksQ0FBQyxTQUFTLG1DQUFJLEVBQUUsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLGFBQWE7UUFDYixrQkFBYSxHQUFHLFVBQUMsU0FBb0Q7WUFDbkUsK0JBQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxXQUFBLEVBQUUsRUFBRSxVQUFDLEdBQUc7Z0JBQzFDLE1BQU0sR0FBRyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFkQSxhQUFhO1FBQ2IsK0JBQU8sQ0FBQyxXQUFXLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFhSCxhQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQUVELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMifQ==

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

/***/ "./src/main/main.ts":
/*!**************************!*\
  !*** ./src/main/main.ts ***!
  \**************************/
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Electronのモジュール
var path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
var electron_1 = __importStar(__webpack_require__(/*! electron */ "electron"));
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "electron-log"));
var util_1 = __webpack_require__(/*! ./util */ "./src/main/util.ts");
var electron_window_state_1 = __importDefault(__webpack_require__(/*! electron-window-state */ "electron-window-state"));
var config_1 = __importDefault(__webpack_require__(/*! ./config */ "./src/main/config.ts"));
var const_1 = __webpack_require__(/*! ./const */ "./src/main/const.ts");
var getRes_1 = __webpack_require__(/*! ./readBBS/getRes */ "./src/main/readBBS/getRes.ts");
var startServer_1 = __webpack_require__(/*! ./startServer */ "./src/main/startServer.ts");
var getRes_2 = __webpack_require__(/*! ./readBBS/getRes */ "./src/main/readBBS/getRes.ts");
console.trace = function () {
    //
};
process.on('uncaughtException', function (err) {
    electron_log_1.default.error(err);
});
// アプリケーションをコントロールするモジュール
var app = electron_1.default.app;
// 多重起動防止
if (!app.requestSingleInstanceLock()) {
    electron_log_1.default.error('[app] It is terminated for multiple launches.');
    app.quit();
}
electron_log_1.default.info('[app] started');
app.allowRendererProcessReuse = true;
var iconPath = path_1.default.resolve(__dirname, '../icon.png');
// サーバー起動モジュール
// eslint-disable-next-line @typescript-eslint/no-var-requires
var ss = __webpack_require__(/*! ./startServer */ "./src/main/startServer.ts");
console.trace(ss);
// ウィンドウを作成するモジュール
var BrowserWindow = electron_1.default.BrowserWindow;
// メインウィンドウはGCされないようにグローバル宣言
globalThis.electron = {
    window: {
        mainWindow: null,
        chatWindow: null,
    },
    data: {
        boardList: [],
        board: {
            url: null,
            threadList: [],
        },
        thread: {
            url: null,
            boardId: null,
            threadNumber: null,
            hostname: null,
            list: [],
        },
    },
};
// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', function () {
    // if (process.platform != 'darwin') {
    app.quit();
    // }
});
// Electronの初期化完了後に実行
app.on('ready', function () {
    var mainWindowState = electron_window_state_1.default({
        defaultWidth: 700,
        defaultHeight: 720,
    });
    // ウィンドウサイズを（フレームサイズを含まない）設定
    var mainWin = new BrowserWindow({
        // 前回起動時のを復元
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height,
        useContentSize: true,
        icon: iconPath,
        webPreferences: {
            nodeIntegration: true,
        },
        skipTaskbar: true,
    });
    globalThis.electron.window.mainWindow = mainWin;
    mainWindowState.manage(mainWin);
    mainWin.setTitle('vongole');
    mainWin.setMenu(null);
    // レンダラーで使用するhtmlファイルを指定する
    mainWin.loadURL('file://' + path_1.default.resolve(__dirname, '../src/html/index.html'));
    // ウィンドウが閉じられたらアプリも終了
    mainWin.on('close', function (event) {
        // 確認ダイアログではいをクリックしたら閉じる
        event.preventDefault();
        electron_1.dialog
            .showMessageBox(mainWin, {
            type: 'question',
            buttons: ['Yes', 'No'],
            // title: '',
            message: '終了しますか？',
        })
            .then(function (value) {
            if (value.response === 0) {
                app.exit();
            }
        });
    });
    mainWin.on('closed', function () {
        electron_log_1.default.info('[app] close');
        app.exit();
    });
    // 開発者ツールを開く
    // mainWin.webContents.openDevTools();
    // タスクトレイの設定
    var tray = null;
    app.whenReady().then(function () {
        tray = new electron_1.Tray(iconPath);
        var contextMenu = electron_1.Menu.buildFromTemplate([
            {
                label: '設定',
                click: function () {
                    mainWin.focus();
                },
            },
            {
                label: 'コメント',
                click: function () {
                    globalThis.electron.window.chatWindow.focus();
                    globalThis.electron.window.chatWindow.show();
                    globalThis.electron.window.chatWindow.restore();
                },
            },
            {
                label: '終了',
                click: function () {
                    mainWin.close();
                },
            },
        ]);
        tray.setToolTip('vongole');
        tray.setContextMenu(contextMenu);
        // タスクトレイクリック時の挙動
        var isDoubleClicked = false;
        tray.on('click', function (event) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isDoubleClicked = false;
                        return [4 /*yield*/, util_1.sleep(200)];
                    case 1:
                        _a.sent();
                        if (isDoubleClicked)
                            return [2 /*return*/];
                        globalThis.electron.window.chatWindow.focus();
                        globalThis.electron.window.chatWindow.show();
                        globalThis.electron.window.chatWindow.restore();
                        return [2 /*return*/];
                }
            });
        }); });
        tray.on('double-click', function (event) {
            isDoubleClicked = true;
            mainWin.focus();
        });
    });
    // 板一覧初期表示
    config_1.default.getBoadList();
    createChatWindow();
});
var createChatWindow = function () {
    var chatWindow = new BrowserWindow({
        width: 400,
        useContentSize: true,
        icon: iconPath,
        webPreferences: {
            nodeIntegration: true,
        },
        // タスクバーに表示しない
        skipTaskbar: true,
        closable: false,
    });
    // 初期表示は非表示
    chatWindow.minimize();
    // レンダラーで使用するhtmlファイルを指定する
    chatWindow.loadURL('file://' + path_1.default.resolve(__dirname, '../src/html/chat.html'));
    chatWindow.setTitle('vongole - thread');
    chatWindow.setMenu(null);
    globalThis.electron.window.chatWindow = chatWindow;
    // chatWindow.webContents.openDevTools();
};
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_GET_ELECTRON_DATA, function (event, message) {
    return globalThis.electron.data;
});
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_SET_ELECTRON_DATA, function (event, message) {
    globalThis.electron.data = message;
    return;
});
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_ADD_BOARDLIST, function (event, message) {
    var _a;
    (_a = globalThis.electron.data.boardList).push.apply(_a, message);
    config_1.default.saveBoardList(globalThis.electron.data.boardList);
    return;
});
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_GET_THREAD_LIST, function (event, message) { return __awaiter(void 0, void 0, void 0, function () {
    var list;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getRes_1.getThreadList(message)];
            case 1:
                list = _a.sent();
                return [2 /*return*/, list];
        }
    });
}); });
electron_1.ipcMain.on(const_1.electronEvent.MAIN_OPEN_THREAD, function (event, url, name) { return __awaiter(void 0, void 0, void 0, function () {
    var hostname, threadNumber, boardId;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                hostname = (_b = (_a = url.match(/https?:\/\/.+?\//)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
                threadNumber = (_d = (_c = url.match(/\/\d+\/$/)) === null || _c === void 0 ? void 0 : _c[0].replace(/\//g, '')) !== null && _d !== void 0 ? _d : '';
                boardId = url.replace(hostname, '').replace("/" + threadNumber + "/", '').replace('test/read.cgi/', '').replace('bbs/read.cgi/', '');
                globalThis.electron.data.thread = {
                    url: url,
                    hostname: hostname,
                    threadNumber: threadNumber,
                    boardId: boardId,
                    list: [],
                };
                electron_log_1.default.info(JSON.stringify(globalThis.electron.data.thread, null, '  '));
                globalThis.electron.window.chatWindow.webContents.send(const_1.electronEvent['clear-comment']);
                globalThis.electron.window.chatWindow.setTitle(name + " - " + url);
                return [4 /*yield*/, startServer_1.updateRes()];
            case 1:
                _e.sent();
                globalThis.electron.window.chatWindow.focus();
                globalThis.electron.window.chatWindow.show();
                globalThis.electron.window.chatWindow.restore();
                return [2 /*return*/];
        }
    });
}); });
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_POST_KAKIKOMI, function (event, message) { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, getRes_2.postResponse(globalThis.electron.data.thread.hostname, globalThis.electron.data.thread.threadNumber, globalThis.electron.data.thread.boardId, message)];
            case 1:
                _a.sent();
                return [4 /*yield*/, startServer_1.updateRes()];
            case 2:
                _a.sent();
                return [2 /*return*/, true];
            case 3:
                e_1 = _a.sent();
                electron_log_1.default.error(e_1);
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2pCLDhDQUF3QjtBQUN4QixtREFBaUU7QUFDakUsOERBQStCO0FBQy9CLCtCQUErQjtBQUMvQixnRkFBc0Q7QUFDdEQsb0RBQThCO0FBQzlCLGlDQUF3QztBQUN4QywyQ0FBaUQ7QUFDakQsNkNBQTBDO0FBQzFDLDJDQUFnRDtBQUVoRCxPQUFPLENBQUMsS0FBSyxHQUFHO0lBQ2QsRUFBRTtBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxHQUFHO0lBQ2xDLHNCQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCO0FBQ3pCLElBQU0sR0FBRyxHQUFHLGtCQUFRLENBQUMsR0FBRyxDQUFDO0FBRXpCLFNBQVM7QUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEVBQUU7SUFDcEMsc0JBQUcsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztJQUMzRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDWjtBQUVELHNCQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTFCLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7QUFFckMsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFeEQsY0FBYztBQUNkLDhEQUE4RDtBQUM5RCxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVsQixrQkFBa0I7QUFD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

/***/ }),

/***/ "./src/main/readBBS/Read5ch.ts":
/*!*************************************!*\
  !*** ./src/main/readBBS/Read5ch.ts ***!
  \*************************************/
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
/**
 * 5ch互換BBS読み込み用モジュール
 */
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var iconv_lite_1 = __importDefault(__webpack_require__(/*! iconv-lite */ "iconv-lite")); // 文字コード変換用パッケージ
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "electron-log"));
var encoding_japanese_1 = __importDefault(__webpack_require__(/*! encoding-japanese */ "encoding-japanese"));
/** ステータスコード304 _NotModified */
var NOT_MODIFIED = '304';
var RANGE_NOT_SATISFIABLE = '416';
/** 最終取得スレッド */
var lastThreadUrl = '';
/** 最終レス番号 */
var lastResNumber = 0;
/** 最終更新日時 */
var lastModified = null;
/** 最終バイト数 */
var lastByte = 0;
/** スレ一覧を読み込む */
exports.readBoard = function (boardUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var requestUrl, list, options, response, str, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestUrl = boardUrl + "subject.txt";
                list = [];
                options = {
                    url: requestUrl,
                    method: 'GET',
                    timeout: 3 * 1000,
                    responseType: 'arraybuffer',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default(options)];
            case 2:
                response = _a.sent();
                str = iconv_lite_1.default.decode(Buffer.from(response.data), 'Shift_JIS');
                // パースして格納
                list.push.apply(list, str
                    .split('\n')
                    .filter(function (item) { return item; })
                    .map(function (line) { return parseThreadList(boardUrl, line); }));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                if (error_1.status == NOT_MODIFIED) {
                    electron_log_1.default.error('[Read5ch.js]5ch系BBS板取得APIリクエストエラー、NOT_MODIFIED');
                }
                else if (error_1.status == RANGE_NOT_SATISFIABLE) {
                    electron_log_1.default.error('[Read5ch.js]5ch系BBS板取得APIリクエストエラー、RANGE_NOT_SATISFIABLE');
                }
                else {
                    electron_log_1.default.error('[Read5ch.js]5ch系BBS板取得APIリクエストエラー、message=' + error_1.message);
                }
                throw new Error('connection error');
            case 4: return [2 /*return*/, list];
        }
    });
}); };
/**
 * レスを投稿する
 * @param hostname ホスト名。https://hogehoge/
 * @param threadNumber スレ番号 12345678
 * @param boardId 板ID pasta04
 * @param message 投稿文
 */
exports.postRes = function (hostname, threadNumber, boardId, message) { return __awaiter(void 0, void 0, void 0, function () {
    var unicodeArray, i, sjisArray, encodedKeyword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                unicodeArray = [];
                for (i = 0; i < message.length; i++) {
                    unicodeArray.push(message.charCodeAt(i));
                }
                sjisArray = encoding_japanese_1.default.convert(unicodeArray, {
                    to: 'SJIS',
                    from: 'UNICODE',
                });
                encodedKeyword = encoding_japanese_1.default.urlEncode(sjisArray);
                // log.info(encodeURIComponent.toString());
                return [4 /*yield*/, axios_1.default.post(hostname + "test/bbs.cgi", "FROM=&MESSAGE=" + encodedKeyword + "&mail=sage&key=" + threadNumber + "&bbs=" + boardId, {
                        headers: {
                            Accept: '*/*',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept-Encoding': 'gzip, deflate, br',
                        },
                    })];
            case 1:
                // log.info(encodeURIComponent.toString());
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var Read5ch = /** @class */ (function () {
    function Read5ch() {
        var _this = this;
        /**
         * レス読み込み
         * 引数で指定した板からレスを読む
         * レス番号を指定していない場合は最新1件取得
         * @param threadUrl スレURL
         * @param resNum レス番号
         */
        this.read = function (threadUrl, resNum) { return __awaiter(_this, void 0, void 0, function () {
            var rep, requestUrl, range, options, responseJson, response, headers, str, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // log.info(`[Read5ch] threadUrl=${threadUrl} resNum=${resNum}`);
                        // 板や最終日レス番号がかわったら最初からとり直す(lastmodifiと rangeのリセット)
                        if (threadUrl != lastThreadUrl || Number.isNaN(resNum) || resNum < lastResNumber) {
                            lastThreadUrl = threadUrl;
                            lastModified = null;
                            lastByte = 0;
                            console.trace('[Read5ch.js]resete!!!!!!!!!!!!!!!!');
                        }
                        else {
                            console.trace('noresete');
                        }
                        rep = /\/test\/read.cgi(\/.+)(\/.+)\//;
                        requestUrl = threadUrl.replace(rep, '$1/dat$2.dat');
                        range = lastByte;
                        options = {
                            url: requestUrl,
                            method: 'GET',
                            timeout: 3 * 1000,
                            responseType: 'arraybuffer',
                            headers: {
                                'if-modified-since': lastModified,
                                range: 'bytes=' + range + '-',
                            },
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default(options)];
                    case 2:
                        response = _a.sent();
                        headers = response.headers;
                        // LastModifiedとRange更新処理
                        if (headers['last-modified'] != null) {
                            lastModified = headers['last-modified'];
                        }
                        str = iconv_lite_1.default.decode(Buffer.from(response.data), 'Shift_JIS');
                        // レスポンスオブジェクト作成、content-rangeがある場合とない場合で処理を分ける
                        if (headers['content-range'] == null || lastByte == 0) {
                            console.trace('[Read5ch.read]content-range=' + headers['content-range']);
                            responseJson = purseNewResponse(str, resNum);
                        }
                        else {
                            responseJson = purseDiffResponse(str, resNum);
                        }
                        // 取得バイト数表示
                        if (headers['content-length'] != null && responseJson.length > 0) {
                            lastByte = lastByte + parseInt(headers['content-length']) - 1;
                            console.trace('[Read5ch.read]lastByte=' + lastByte);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        responseJson = [];
                        if (error_2.status == NOT_MODIFIED) {
                            electron_log_1.default.error('[Read5ch.js]5ch系BBSレス取得APIリクエストエラー、NOT_MODIFIED');
                        }
                        else if (error_2.status == RANGE_NOT_SATISFIABLE) {
                            electron_log_1.default.error('[Read5ch.js]5ch系BBSレス取得APIリクエストエラー、RANGE_NOT_SATISFIABLE');
                        }
                        else {
                            electron_log_1.default.error('[Read5ch.js]5ch系BBSレス取得APIリクエストエラー、message=' + error_2.message);
                        }
                        throw new Error('connection error');
                    case 4: return [2 /*return*/, responseJson];
                }
            });
        }); };
    }
    return Read5ch;
}());
/**
 * 取得したレスポンス（複数）のパース
 * 戻りとしてパースしたjsonオブジェクトの配列を返す
 * @param res 板から返却されたdat
 * @param resNum リクエストされたレス番号
 */
var purseNewResponse = function (res, resNum) {
    // 結果を格納する配列
    var result = [];
    // レス番号
    var num = 0;
    // 新着レスを改行ごとにSplitする
    var resArray = res.split(/\r\n|\r|\n/);
    // 新着なしなら戻る。
    if (resArray.length === 0) {
        return result;
    }
    // 配列の最後に空の要素が入ることがあるので取り除く
    if (resArray[resArray.length - 1].length === 0) {
        resArray.pop();
    }
    // レス指定なしの場合最後の1件取得
    if (Number.isNaN(resNum) || resNum < 1) {
        num = resArray.length - 1;
    }
    else {
        num = resNum - 1;
    }
    // 1行ごとにパースする
    for (; num < resArray.length; num++) {
        // パースメソッド呼び出し
        if (resArray[num].length > 0) {
            result.push(parseResponse(resArray[num], num + 1));
        }
    }
    lastResNumber = num + 1;
    // パースしたオブジェクトの配列を返却
    return result;
};
/**
 * 取得したレスポンス（複数）のパース
 * 戻りとしてパースしたjsonオブジェクトの配列を返す
 * @param res 板から返却されたdat1行分
 * @param resNum リクエストされたレス番号
 */
var purseDiffResponse = function (res, resNum) {
    //結果を格納する配列
    var result = [];
    // レス番号
    var num = resNum;
    //新着レスを改行ごとにSplitする
    var resArray = res.split(/\r\n|\r|\n/);
    // 新着なしなら戻る。
    if (resArray.length === 0) {
        return result;
    }
    else {
        // 配列の最後に空の要素が入ることがあるので取り除く
        if (resArray[resArray.length - 1].length == 0) {
            resArray.pop();
        }
    }
    console.trace('[Read5ch.purseDiffResponse]取得レス番号=' + num);
    //1行ごとにパースする
    resArray.forEach(function (value) {
        //パースメソッド呼び出し
        if (value.length > 0) {
            result.push(parseResponse(value, num));
            num++;
        }
    });
    // パースしたオブジェクトの配列を返却
    return result;
};
/**
 * スレ一覧のパース
 * @param String // res レスポンス1レス
 * @param Integer // num レス番（0スタート）
 */
var parseThreadList = function (boardUrl, subjectLine) {
    var _a, _b, _c, _d, _e;
    //APIの返却値を<>で分割
    //レスの要素
    //0:dat名
    //1:スレタイ（レス数）
    var splitRes = subjectLine.split('<>');
    console.log(splitRes);
    var datNum = splitRes[0].replace('.dat', '');
    var hostname = (_b = (_a = boardUrl.match(/^https?:\/\/.+?\//)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
    var boardName = boardUrl.replace(hostname, '');
    var url = hostname + "test/read.cgi/" + boardName + datNum + "/";
    var titleTemp = splitRes[1];
    var name = (_d = (_c = titleTemp.match(/(.*?) \(\d+\)$/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '★取得失敗★';
    var resNum = Number((_e = titleTemp.match(/\(\d+\)$/)) === null || _e === void 0 ? void 0 : _e[0].replace(/\(|\)/g, ''));
    // オブジェクトを返却
    return {
        url: url,
        name: name,
        resNum: resNum,
    };
};
/**
 * レスのパース
 * @param String // res レスポンス1レス
 * @param Integer // num レス番（0スタート）
 */
var parseResponse = function (res, num) {
    //APIの返却値を<>で分割
    //レスの要素
    //0:名前
    //1:メアド
    //2:日付とID （2019/11/03(日) 08:55:00 ID:kanikani）みたいに表示
    //3:本文
    //4:スレタイ （1レス目のみ）
    var splitRes = res.split('<>');
    // 日付とID分離処理、' ID:'で区切る
    var dateId = splitRes[2].split(' ID:');
    var date = dateId[0];
    var id = dateId.length === 2 ? dateId[1] : '';
    var resJson = {
        number: num,
        name: splitRes[0],
        email: splitRes[1],
        date: date,
        text: splitRes[3],
        // threadTitle: splitRes[4],
        id: id,
        imgUrl: '',
    };
    // オブジェクトを返却
    return resJson;
};
exports.default = Read5ch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZDVjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWQ1Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILGdEQUFrRDtBQUNsRCwwREFBK0IsQ0FBQyxnQkFBZ0I7QUFDaEQsOERBQStCO0FBQy9CLHdFQUF5QztBQUV6QywrQkFBK0I7QUFDL0IsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLGVBQWU7QUFDZixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDdkIsYUFBYTtBQUNiLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN0QixhQUFhO0FBQ2IsSUFBSSxZQUFZLEdBQWtCLElBQUksQ0FBQztBQUN2QyxhQUFhO0FBQ2IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLGdCQUFnQjtBQUNILFFBQUEsU0FBUyxHQUFHLFVBQU8sUUFBZ0I7Ozs7O2dCQUN4QyxVQUFVLEdBQU0sUUFBUSxnQkFBYSxDQUFDO2dCQUN0QyxJQUFJLEdBQXlDLEVBQUUsQ0FBQztnQkFHaEQsT0FBTyxHQUF1QjtvQkFDbEMsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJO29CQUNqQixZQUFZLEVBQUUsYUFBYTtpQkFDNUIsQ0FBQzs7OztnQkFJaUIscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFBOztnQkFBL0IsUUFBUSxHQUFHLFNBQW9CO2dCQU8vQixHQUFHLEdBQUcsb0JBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLFVBQVU7Z0JBQ1YsSUFBSSxDQUFDLElBQUksT0FBVCxJQUFJLEVBQ0MsR0FBRztxQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNYLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7cUJBQ3RCLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDakQ7Ozs7Z0JBRUYsSUFBSSxPQUFLLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTtvQkFDaEMsc0JBQUcsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztpQkFDN0Q7cUJBQU0sSUFBSSxPQUFLLENBQUMsTUFBTSxJQUFJLHFCQUFxQixFQUFFO29CQUNoRCxzQkFBRyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2lCQUN0RTtxQkFBTTtvQkFDTCxzQkFBRyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsR0FBRyxPQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pFO2dCQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFHdEMsc0JBQU8sSUFBSSxFQUFDOzs7S0FDYixDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ1UsUUFBQSxPQUFPLEdBQUcsVUFBTyxRQUFnQixFQUFFLFlBQW9CLEVBQUUsT0FBZSxFQUFFLE9BQWU7Ozs7O2dCQUU5RixZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztnQkFDSyxTQUFTLEdBQUcsMkJBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO29CQUMvQyxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQyxDQUFDO2dCQUdHLGNBQWMsR0FBRywyQkFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFnQixDQUFDLENBQUM7Z0JBQzVELDJDQUEyQztnQkFFM0MscUJBQU0sZUFBSyxDQUFDLElBQUksQ0FBSSxRQUFRLGlCQUFjLEVBQUUsbUJBQWlCLGNBQWMsdUJBQWtCLFlBQVksYUFBUSxPQUFTLEVBQUU7d0JBQzFILE9BQU8sRUFBRTs0QkFDUCxNQUFNLEVBQUUsS0FBSzs0QkFDYixjQUFjLEVBQUUsbUNBQW1DOzRCQUNuRCxpQkFBaUIsRUFBRSxtQkFBbUI7eUJBQ3ZDO3FCQUNGLENBQUMsRUFBQTs7Z0JBUkYsMkNBQTJDO2dCQUUzQyxTQU1FLENBQUM7Ozs7S0FDSixDQUFDO0FBRUY7SUFBQTtRQUFBLGlCQTBGQztRQXpGQzs7Ozs7O1dBTUc7UUFDSCxTQUFJLEdBQUcsVUFBTyxTQUFpQixFQUFFLE1BQWM7Ozs7O3dCQUM3QyxpRUFBaUU7d0JBQ2pFLGtEQUFrRDt3QkFDbEQsSUFBSSxTQUFTLElBQUksYUFBYSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLGFBQWEsRUFBRTs0QkFDaEYsYUFBYSxHQUFHLFNBQVMsQ0FBQzs0QkFDMUIsWUFBWSxHQUFHLElBQUksQ0FBQzs0QkFDcEIsUUFBUSxHQUFHLENBQUMsQ0FBQzs0QkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7eUJBQ3JEOzZCQUFNOzRCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7eUJBQzNCO3dCQUtLLEdBQUcsR0FBRyxnQ0FBZ0MsQ0FBQzt3QkFDdkMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO3dCQVdwRCxLQUFLLEdBQUcsUUFBUSxDQUFDO3dCQUVqQixPQUFPLEdBQXVCOzRCQUNsQyxHQUFHLEVBQUUsVUFBVTs0QkFDZixNQUFNLEVBQUUsS0FBSzs0QkFDYixPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUk7NEJBQ2pCLFlBQVksRUFBRSxhQUFhOzRCQUMzQixPQUFPLEVBQUU7Z0NBQ1AsbUJBQW1CLEVBQUUsWUFBWTtnQ0FDakMsS0FBSyxFQUFFLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRzs2QkFDOUI7eUJBQ0YsQ0FBQzs7Ozt3QkFLaUIscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBL0IsUUFBUSxHQUFHLFNBQW9CO3dCQUcvQixPQUFPLEdBQThCLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQzVELHlCQUF5Qjt3QkFDekIsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUNwQyxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3lCQUN6Qzt3QkFJSyxHQUFHLEdBQUcsb0JBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7d0JBQ2xFLCtDQUErQzt3QkFDL0MsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7NEJBQ3JELE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7NEJBQ3pFLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQzlDOzZCQUFNOzRCQUNMLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQy9DO3dCQUVELFdBQVc7d0JBQ1gsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxJQUFJLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBQ2hFLFFBQVEsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUM5RCxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxDQUFDO3lCQUNyRDs7Ozt3QkFFRCxZQUFZLEdBQUcsRUFBRSxDQUFDO3dCQUNsQixJQUFJLE9BQUssQ0FBQyxNQUFNLElBQUksWUFBWSxFQUFFOzRCQUNoQyxzQkFBRyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO3lCQUM5RDs2QkFBTSxJQUFJLE9BQUssQ0FBQyxNQUFNLElBQUkscUJBQXFCLEVBQUU7NEJBQ2hELHNCQUFHLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7eUJBQ3ZFOzZCQUFNOzRCQUNMLHNCQUFHLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxHQUFHLE9BQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDMUU7d0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzRCQUd0QyxzQkFBTyxZQUFZLEVBQUM7OzthQUNyQixDQUFDO0lBQ0osQ0FBQztJQUFELGNBQUM7QUFBRCxDQUFDLEFBMUZELElBMEZDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxJQUFNLGdCQUFnQixHQUFHLFVBQUMsR0FBVyxFQUFFLE1BQWM7SUFDbkQsWUFBWTtJQUNaLElBQU0sTUFBTSxHQUF1QyxFQUFFLENBQUM7SUFDdEQsT0FBTztJQUNQLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztJQUVaLG9CQUFvQjtJQUNwQixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLFlBQVk7SUFDWixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFDRCwyQkFBMkI7SUFDM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQzlDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNoQjtJQUVELG1CQUFtQjtJQUNuQixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN0QyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDM0I7U0FBTTtRQUNMLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0lBRUQsYUFBYTtJQUNiLE9BQU8sR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkMsY0FBYztRQUNkLElBQUksUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7SUFDRCxhQUFhLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QixvQkFBb0I7SUFDcEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUY7Ozs7O0dBS0c7QUFDSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsR0FBVyxFQUFFLE1BQWM7SUFDcEQsV0FBVztJQUNYLElBQU0sTUFBTSxHQUF1QyxFQUFFLENBQUM7SUFDdEQsT0FBTztJQUNQLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQztJQUVqQixtQkFBbUI7SUFDbkIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxZQUFZO0lBQ1osSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLE1BQU0sQ0FBQztLQUNmO1NBQU07UUFDTCwyQkFBMkI7UUFDM0IsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzdDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNoQjtLQUNGO0lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMxRCxZQUFZO0lBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7UUFDckIsYUFBYTtRQUNiLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkMsR0FBRyxFQUFFLENBQUM7U0FDUDtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsb0JBQW9CO0lBQ3BCLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLGVBQWUsR0FBRyxVQUFDLFFBQWdCLEVBQUUsV0FBbUI7O0lBQzVELGVBQWU7SUFDZixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFL0MsSUFBTSxRQUFRLGVBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQywwQ0FBRyxDQUFDLG9DQUFLLEVBQUUsQ0FBQztJQUNoRSxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxJQUFNLEdBQUcsR0FBTSxRQUFRLHNCQUFpQixTQUFTLEdBQUcsTUFBTSxNQUFHLENBQUM7SUFFOUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTlCLElBQU0sSUFBSSxlQUFXLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsMENBQUcsQ0FBQyxvQ0FBSyxRQUFRLENBQUM7SUFDeEUsSUFBTSxNQUFNLEdBQUcsTUFBTSxPQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLDBDQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBRTlFLFlBQVk7SUFDWixPQUFPO1FBQ0wsR0FBRyxLQUFBO1FBQ0gsSUFBSSxNQUFBO1FBQ0osTUFBTSxRQUFBO0tBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxJQUFNLGFBQWEsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFXO0lBQzdDLGVBQWU7SUFDZixPQUFPO0lBQ1AsTUFBTTtJQUNOLE9BQU87SUFDUCxvREFBb0Q7SUFDcEQsTUFBTTtJQUNOLGlCQUFpQjtJQUNqQixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLHVCQUF1QjtJQUN2QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QixJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFaEQsSUFBTSxPQUFPLEdBQWdCO1FBQzNCLE1BQU0sRUFBRSxHQUFHO1FBQ1gsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxFQUFFLElBQUk7UUFDVixJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQiw0QkFBNEI7UUFDNUIsRUFBRSxFQUFFLEVBQUU7UUFDTixNQUFNLEVBQUUsRUFBRTtLQUNYLENBQUM7SUFFRixZQUFZO0lBQ1osT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDIn0=

/***/ }),

/***/ "./src/main/readBBS/getRes.ts":
/*!************************************!*\
  !*** ./src/main/readBBS/getRes.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "electron-log"));
var readSitaraba_1 = __importStar(__webpack_require__(/*! ./readSitaraba */ "./src/main/readBBS/readSitaraba.ts")); // したらば読み込み用モジュール
var Read5ch_1 = __importStar(__webpack_require__(/*! ./Read5ch */ "./src/main/readBBS/Read5ch.ts")); // 5ch互換板読み込み用モジュール
var sitaraba = new readSitaraba_1.default();
var read5ch = new Read5ch_1.default();
// 掲示板読み込みモジュール、一度決定したら使いまわすためにグローバル宣言
var bbsModule = null;
/**
 * 掲示板のレスを取得する
 * @param threadUrl スレのURL
 * @param resNum この番号以降を取得する。指定しない場合は最新1件を取得。
 */
exports.getRes = function (threadUrl, resNum) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                // console.log(`[getRes] ${threadUrl} ${resNum}`);
                // リクエストURLを解析し、使用するモジュールを変更する
                bbsModule = analysBBSName(threadUrl);
                return [4 /*yield*/, bbsModule.read(threadUrl, resNum)];
            case 1:
                response = _a.sent();
                // console.log(`[getRes.js] fetch ${threadUrl} resNum = ${resNum}, result = ${response.length}`);
                return [2 /*return*/, response.map(function (res) {
                        return __assign(__assign({}, res), { imgUrl: '' });
                    })];
            case 2:
                e_1 = _a.sent();
                electron_log_1.default.error(e_1);
                return [2 /*return*/, []];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getThreadList = function (boardUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var sitarabaDomain;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sitarabaDomain = 'jbbs.shitaraba.net';
                if (!(boardUrl.indexOf(sitarabaDomain) !== -1)) return [3 /*break*/, 2];
                return [4 /*yield*/, readSitaraba_1.readBoard(boardUrl)];
            case 1: 
            // URLにしたらばドメイン名が入ってればしたらば
            //
            return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, Read5ch_1.readBoard(boardUrl)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.postResponse = function (hostname, threadNumber, boardId, message) { return __awaiter(void 0, void 0, void 0, function () {
    var sitarabaDomain;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                electron_log_1.default.info("[postResponse] " + hostname + " " + threadNumber + " " + boardId);
                sitarabaDomain = 'jbbs.shitaraba.net';
                if (!(hostname.indexOf(sitarabaDomain) !== -1)) return [3 /*break*/, 2];
                return [4 /*yield*/, readSitaraba_1.postRes(hostname, threadNumber, boardId, message)];
            case 1: 
            // URLにしたらばドメイン名が入ってればしたらば
            return [2 /*return*/, _a.sent()];
            case 2: return [4 /*yield*/, Read5ch_1.postRes(hostname, threadNumber, boardId, message)];
            case 3: return [2 /*return*/, _a.sent()];
        }
    });
}); };
/*
 * URLをみてどこのBBSか判定して使用するモジュールを返却する
 */
var analysBBSName = function (threadUrl) {
    // したらばドメイン名
    var sitarabaDomain = 'jbbs.shitaraba.net';
    // こんな感じで必要に応じて増やしていけばいいんじゃね？
    // const dokkanoBBS = 'dokka.bbs.com';
    if (threadUrl.indexOf(sitarabaDomain) !== -1) {
        // URLにしたらばドメイン名が入ってればしたらば
        return sitaraba;
    }
    // どこにも該当しなかったらとりあえず5chで
    // この辺も対応ドメインリストとか作ってちゃんと判定したほうがよさそう
    return read5ch;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBRS9CLDZEQUE0RyxDQUFDLGlCQUFpQjtBQUM5SCxtREFBc0YsQ0FBQyxtQkFBbUI7QUFDMUcsSUFBTSxRQUFRLEdBQUcsSUFBSSxzQkFBWSxFQUFFLENBQUM7QUFDcEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDOUIsc0NBQXNDO0FBQ3RDLElBQUksU0FBUyxHQUFnQyxJQUFXLENBQUM7QUFFekQ7Ozs7R0FJRztBQUNVLFFBQUEsTUFBTSxHQUFHLFVBQU8sU0FBaUIsRUFBRSxNQUFjOzs7Ozs7Z0JBRTFELGtEQUFrRDtnQkFFbEQsOEJBQThCO2dCQUM5QixTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBUSxDQUFDO2dCQUczQixxQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBQTs7Z0JBQWxELFFBQVEsR0FBRyxTQUF1QztnQkFDeEQsaUdBQWlHO2dCQUVqRyxzQkFBTyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRzt3QkFDdEIsNkJBQ0ssR0FBRyxLQUNOLE1BQU0sRUFBRSxFQUFFLElBQ1Y7b0JBQ0osQ0FBQyxDQUFDLEVBQUM7OztnQkFFSCxzQkFBRyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFDYixzQkFBTyxFQUFFLEVBQUM7Ozs7S0FFYixDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsVUFBTyxRQUFnQjs7Ozs7Z0JBQzVDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztxQkFDeEMsQ0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLEVBQXZDLHdCQUF1QztnQkFHbEMscUJBQU0sd0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUE7O1lBRnpDLDBCQUEwQjtZQUMxQixFQUFFO1lBQ0Ysc0JBQU8sU0FBa0MsRUFBQztvQkFFbkMscUJBQU0sbUJBQVksQ0FBQyxRQUFRLENBQUMsRUFBQTtvQkFBbkMsc0JBQU8sU0FBNEIsRUFBQzs7O0tBRXZDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxVQUFPLFFBQWdCLEVBQUUsWUFBb0IsRUFBRSxPQUFlLEVBQUUsT0FBZTs7Ozs7Z0JBQ3pHLHNCQUFHLENBQUMsSUFBSSxDQUFDLG9CQUFrQixRQUFRLFNBQUksWUFBWSxTQUFJLE9BQVMsQ0FBQyxDQUFDO2dCQUU1RCxjQUFjLEdBQUcsb0JBQW9CLENBQUM7cUJBQ3hDLENBQUEsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxFQUF2Qyx3QkFBdUM7Z0JBRWxDLHFCQUFNLHNCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFBOztZQUR2RSwwQkFBMEI7WUFDMUIsc0JBQU8sU0FBZ0UsRUFBQztvQkFFakUscUJBQU0saUJBQVUsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBQTtvQkFBakUsc0JBQU8sU0FBMEQsRUFBQzs7O0tBRXJFLENBQUM7QUFFRjs7R0FFRztBQUNILElBQU0sYUFBYSxHQUFHLFVBQUMsU0FBaUI7SUFDdEMsWUFBWTtJQUNaLElBQU0sY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQzVDLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFFdEMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzVDLDBCQUEwQjtRQUMxQixPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUNELHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=

/***/ }),

/***/ "./src/main/readBBS/readSitaraba.ts":
/*!******************************************!*\
  !*** ./src/main/readBBS/readSitaraba.ts ***!
  \******************************************/
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
/**
 * したらば読み込み用モジュール
 */
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var iconv_lite_1 = __importDefault(__webpack_require__(/*! iconv-lite */ "iconv-lite")); // 文字コード変換用パッケージ
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "electron-log"));
var encoding_japanese_1 = __importDefault(__webpack_require__(/*! encoding-japanese */ "encoding-japanese"));
/** スレ一覧を読み込む */
exports.readBoard = function (boardUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var requestUrl, list, options, response, str, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestUrl = boardUrl + "subject.txt";
                list = [];
                options = {
                    url: requestUrl,
                    method: 'GET',
                    timeout: 3 * 1000,
                    responseType: 'arraybuffer',
                };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default(options)];
            case 2:
                response = _a.sent();
                str = iconv_lite_1.default.decode(Buffer.from(response.data), 'EUC-JP');
                // パースして格納
                list.push.apply(list, str
                    .split('\n')
                    .filter(function (item) { return item; })
                    .map(function (line) { return parseThreadList(boardUrl, line); }));
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                electron_log_1.default.error('[Read5ch.js]5ch系BBS板取得APIリクエストエラー、message=' + error_1.message);
                throw new Error('connection error');
            case 4: return [2 /*return*/, list];
        }
    });
}); };
/**
 * レスを投稿する
 * @param hostname ホスト名。https://hogehoge/
 * @param threadNumber スレ番号 12345678
 * @param boardId 板ID pasta04
 * @param message 投稿文
 */
exports.postRes = function (hostname, threadNumber, boardId, message) { return __awaiter(void 0, void 0, void 0, function () {
    var unicodeArray, i, sjisArray, encodedKeyword, dir, bbs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                unicodeArray = [];
                for (i = 0; i < message.length; i++) {
                    unicodeArray.push(message.charCodeAt(i));
                }
                sjisArray = encoding_japanese_1.default.convert(unicodeArray, {
                    to: 'EUCJP',
                    from: 'UNICODE',
                });
                encodedKeyword = encoding_japanese_1.default.urlEncode(sjisArray);
                dir = boardId.split('/')[0];
                bbs = boardId.split('/')[1];
                return [4 /*yield*/, axios_1.default.post(hostname + "bbs/write.cgi/" + boardId + "/" + threadNumber + "/", "dir=" + dir + "&bbs=" + bbs + "&key=" + threadNumber + "&time=" + new Date().getTime() + "&name=&mail=sage&MESSAGE=" + encodedKeyword, {
                        headers: {
                            Accept: '*/*',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept-Encoding': 'gzip, deflate, br',
                            Referer: "" + hostname + boardId + "/",
                        },
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/**
 * コンストラクタ
 */
var ReadSitaraba = /** @class */ (function () {
    function ReadSitaraba() {
        // constructor() {}
        var _this = this;
        /**
         * レス読み込み
         * @description 引数で指定した板からレスを読む。
         * @description レス番号を指定していない場合は最新1件取得
         * @param threadUrl スレURL
         * @param resNum レス番号
         */
        this.read = function (threadUrl, resNum) { return __awaiter(_this, void 0, void 0, function () {
            var requestUrl, options, response, str, responseJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = threadUrl.replace('read.cgi', 'rawmode.cgi');
                        if (resNum > 0) {
                            // レス番号がある場合レス番号以降を取得
                            requestUrl += resNum + '-';
                        }
                        else {
                            // レス番号がない場合最新の1件取得
                            requestUrl += 'l1';
                        }
                        options = {
                            url: requestUrl,
                            method: 'GET',
                            responseType: 'arraybuffer',
                            timeout: 3 * 1000,
                        };
                        return [4 /*yield*/, axios_1.default(options)];
                    case 1:
                        response = _a.sent();
                        str = decodeUnicodeStr(iconv_lite_1.default.decode(Buffer.from(response.data), 'EUC-JP'));
                        responseJson = purseNewResponse(str);
                        return [2 /*return*/, responseJson];
                }
            });
        }); };
    }
    return ReadSitaraba;
}());
/**
 * 取得したレスポンス（複数）のパース
 * @param res
 */
var purseNewResponse = function (res) {
    //結果を格納する配列
    var result = [];
    // 新着レスを改行ごとにSplitする
    var resArray = res.split(/\r\n|\r|\n/);
    // 1行ごとにパースする
    resArray.forEach(function (value) {
        // パースメソッド呼び出し
        if (value.length > 0) {
            result.push(purseResponse(value));
        }
    });
    return result;
};
/**
 * スレ一覧のパース
 * @param String // res レスポンス1レス
 * @param Integer // num レス番（0スタート）
 */
var parseThreadList = function (boardUrl, subjectLine) {
    var _a, _b, _c, _d, _e;
    //APIの返却値を<>で分割
    //レスの要素
    //0:dat名
    //1:スレタイ（レス数）
    var splitRes = subjectLine.split(',');
    // console.log(splitRes);
    var datNum = splitRes[0].replace('.cgi', '');
    var hostname = (_b = (_a = boardUrl.match(/^https?:\/\/.+?\//)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
    var boardName = boardUrl.replace(hostname, '');
    var url = hostname + "bbs/read.cgi/" + boardName + datNum + "/";
    // log.info(`${hostname}  ${boardName} ${datNum}`);
    var titleTemp = splitRes[1];
    var name = (_d = (_c = titleTemp.match(/(.*?)\(\d+\)$/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '★取得失敗★';
    var resNum = Number((_e = titleTemp.match(/\(\d+\)$/)) === null || _e === void 0 ? void 0 : _e[0].replace(/\(|\)/g, ''));
    // オブジェクトを返却
    return {
        url: url,
        name: name,
        resNum: resNum,
    };
};
/**
 * レスポンスのパース
 * Jsonオブジェクトを返却する
 * @param String // res レスポンス1レス
 */
var purseResponse = function (res) {
    //APIの返却値を<>で分割
    //レスの要素
    //0:レス番号
    //1:名前
    //2:メアド
    //3:日付
    //4:本文
    //5:スレタイ
    //6:ID
    var splitRes = res.split('<>');
    var resJson = {
        number: Number(splitRes[0]),
        name: splitRes[1],
        email: splitRes[2],
        date: splitRes[3],
        text: splitRes[4],
        // threadTitle: splitRes[5],
        id: splitRes[6],
        imgUrl: '',
    };
    // オブジェクトを返却
    return resJson;
};
/** したらばだけは全角ダッシュがUnicode文字列として格納されるので変換する */
var decodeUnicodeStr = function (str) {
    return str.replace(/&#65374;/g, '～');
};
exports.default = ReadSitaraba;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZFNpdGFyYWJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVhZFNpdGFyYWJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxnREFBa0Q7QUFDbEQsMERBQStCLENBQUMsZ0JBQWdCO0FBQ2hELDhEQUErQjtBQUUvQix3RUFBeUM7QUFFekMsZ0JBQWdCO0FBQ0gsUUFBQSxTQUFTLEdBQUcsVUFBTyxRQUFnQjs7Ozs7Z0JBQ3hDLFVBQVUsR0FBTSxRQUFRLGdCQUFhLENBQUM7Z0JBQ3RDLElBQUksR0FBeUMsRUFBRSxDQUFDO2dCQUdoRCxPQUFPLEdBQXVCO29CQUNsQyxHQUFHLEVBQUUsVUFBVTtvQkFDZixNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUk7b0JBQ2pCLFlBQVksRUFBRSxhQUFhO2lCQUM1QixDQUFDOzs7O2dCQUlpQixxQkFBTSxlQUFLLENBQUMsT0FBTyxDQUFDLEVBQUE7O2dCQUEvQixRQUFRLEdBQUcsU0FBb0I7Z0JBTy9CLEdBQUcsR0FBRyxvQkFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDL0QsVUFBVTtnQkFDVixJQUFJLENBQUMsSUFBSSxPQUFULElBQUksRUFDQyxHQUFHO3FCQUNILEtBQUssQ0FBQyxJQUFJLENBQUM7cUJBQ1gsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztxQkFDdEIsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxFQUNqRDs7OztnQkFFRixzQkFBRyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsR0FBRyxPQUFLLENBQUMsT0FB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

/***/ }),

/***/ "./src/main/startServer.ts":
/*!*********************************!*\
  !*** ./src/main/startServer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "electron-log"));
var util_1 = __webpack_require__(/*! ./util */ "./src/main/util.ts");
var getRes_1 = __webpack_require__(/*! ./readBBS/getRes */ "./src/main/readBBS/getRes.ts");
var const_1 = __webpack_require__(/*! ./const */ "./src/main/const.ts");
var isGetting = false;
var getResInterval = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!!((_b = (_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.electron) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.thread.url)) return [3 /*break*/, 2];
                return [4 /*yield*/, util_1.sleep(5000)];
            case 1:
                _c.sent();
                getResInterval();
                return [2 /*return*/];
            case 2: return [4 /*yield*/, exports.updateRes()];
            case 3:
                _c.sent();
                return [4 /*yield*/, util_1.sleep(5000)];
            case 4:
                _c.sent();
                getResInterval();
                return [2 /*return*/];
        }
    });
}); };
getResInterval();
exports.updateRes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResNum, lastResNum_1, result, newResult, e_1;
    var _a;
    var _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                if (isGetting)
                    return [2 /*return*/];
                isGetting = true;
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                fetchResNum = (_c = (_b = globalThis.electron.data.thread.list[globalThis.electron.data.thread.list.length - 1]) === null || _b === void 0 ? void 0 : _b.number) !== null && _c !== void 0 ? _c : 1;
                lastResNum_1 = (_e = (_d = globalThis.electron.data.thread.list[globalThis.electron.data.thread.list.length - 1]) === null || _d === void 0 ? void 0 : _d.number) !== null && _e !== void 0 ? _e : 0;
                return [4 /*yield*/, getRes_1.getRes(globalThis.electron.data.thread.url, fetchResNum)];
            case 2:
                result = _f.sent();
                // 指定したレス番は除外対象
                if (result.length > 0 && result[result.length - 1].number) {
                    newResult = result.filter(function (res) { return res.number > lastResNum_1; });
                    (_a = globalThis.electron.data.thread.list).push.apply(_a, newResult);
                    if (newResult.length > 0)
                        sendDomForChatWindow(newResult);
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _f.sent();
                electron_log_1.default.error(e_1);
                return [3 /*break*/, 4];
            case 4:
                isGetting = false;
                return [2 /*return*/];
        }
    });
}); };
exports.createDom = function (message) {
    var domStr = "<li class=\"list-item\">";
    domStr += "<div class=\"content\">";
    // レス番表示
    domStr += "\n      <span class=\"resNumber\">" + message.number + "</span>\n    ";
    // 名前表示
    domStr += "<span class=\"name\">" + message.name + "</span>";
    // 時刻表示
    domStr += "<span class=\"date\">" + message.date + "</span>";
    domStr += '<br/>';
    domStr += "\n    <span class=\"res\">\n      " + message.text
        .replace(/<a .*?>/g, '') // したらばはアンカーをaタグ化している
        .replace(/<\\a>/g, '') + "\n    </span>\n    </div>\n  </li>";
    return domStr;
};
var sendDomForChatWindow = function (messageList) {
    var domStr2 = messageList
        .map(function (message) {
        var imgUrl = message.imgUrl && message.imgUrl.match(/^\./) ? '../../public/' + message.imgUrl : message.imgUrl;
        return __assign(__assign({}, message), { imgUrl: imgUrl });
    })
        .map(function (message) { return exports.createDom(message); })
        .join('\n');
    globalThis.electron.window.chatWindow.webContents.send(const_1.electronEvent['show-comment'], { dom: domStr2 });
};
exports.default = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRTZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwyQ0FBNEQ7QUFDNUQsaUNBQXdDO0FBRXhDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixJQUFNLGNBQWMsR0FBRzs7Ozs7cUJBRWpCLGNBQUMsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsSUFBSSwwQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFBLEVBQXZDLHdCQUF1QztnQkFDekMscUJBQU0sWUFBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBakIsU0FBaUIsQ0FBQztnQkFDbEIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLHNCQUFPO29CQUVULHFCQUFNLGlCQUFTLEVBQUUsRUFBQTs7Z0JBQWpCLFNBQWlCLENBQUM7Z0JBRWxCLHFCQUFNLFlBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQWpCLFNBQWlCLENBQUM7Z0JBQ2xCLGNBQWMsRUFBRSxDQUFDOzs7O0tBQ2xCLENBQUM7QUFDRixjQUFjLEVBQUUsQ0FBQztBQUVKLFFBQUEsU0FBUyxHQUFHOzs7Ozs7O2dCQUN2QixJQUFJLFNBQVM7b0JBQUUsc0JBQU87Z0JBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7Z0JBRVQsV0FBVyxlQUFXLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLDBDQUFFLE1BQU0sbUNBQUksQ0FBQyxDQUFDO2dCQUN6SCwyQkFBYSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQywwQ0FBRSxNQUFNLG1DQUFJLENBQUMsQ0FBQztnQkFFdkcscUJBQU0sZUFBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUE7O2dCQUEvRSxNQUFNLEdBQUcsU0FBc0U7Z0JBQ3JGLGVBQWU7Z0JBQ2YsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ25ELFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUMsR0FBRyxDQUFDLE1BQWlCLEdBQUcsWUFBVSxFQUFuQyxDQUFtQyxDQUFDLENBQUM7b0JBQzlFLENBQUEsS0FBQSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFBLENBQUMsSUFBSSxXQUFJLFNBQVMsRUFBRTtvQkFFeEQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7d0JBQUUsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzNEOzs7O2dCQUVELHNCQUFHLENBQUMsS0FBSyxDQUFDLEdBQUMsQ0FBQyxDQUFDOzs7Z0JBRWYsU0FBUyxHQUFHLEtBQUssQ0FBQzs7OztLQUNuQixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsVUFBQyxPQUFvQjtJQUM1QyxJQUFJLE1BQU0sR0FBRywwQkFBd0IsQ0FBQztJQUV0QyxNQUFNLElBQUkseUJBQXVCLENBQUM7SUFFbEMsUUFBUTtJQUNSLE1BQU0sSUFBSSx1Q0FDb0IsT0FBTyxDQUFDLE1BQU0sa0JBQ3pDLENBQUM7SUFDSixPQUFPO0lBQ1AsTUFBTSxJQUFJLDBCQUFzQixPQUFPLENBQUMsSUFBSSxZQUFTLENBQUM7SUFDdEQsT0FBTztJQUNQLE1BQU0sSUFBSSwwQkFBc0IsT0FBTyxDQUFDLElBQUksWUFBUyxDQUFDO0lBRXRELE1BQU0sSUFBSSxPQUFPLENBQUM7SUFFbEIsTUFBTSxJQUFJLHVDQUVKLE9BQU8sQ0FBQyxJQUFJO1NBQ1gsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7U0FDN0MsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsdUNBR3RCLENBQUM7SUFFUCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixJQUFNLG9CQUFvQixHQUFHLFVBQUMsV0FBMEI7SUFDdEQsSUFBTSxPQUFPLEdBQUcsV0FBVztTQUN4QixHQUFHLENBQUMsVUFBQyxPQUFPO1FBQ1gsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakgsNkJBQ0ssT0FBTyxLQUNWLE1BQU0sUUFBQSxJQUNOO0lBQ0osQ0FBQyxDQUFDO1NBQ0QsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsaUJBQVMsQ0FBQyxPQUFPLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQztTQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxxQkFBYSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDMUcsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsRUFBRSxDQUFDIn0=

/***/ }),

/***/ "./src/main/util.ts":
/*!**************************!*\
  !*** ./src/main/util.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
exports.readWavFiles = function (path) {
    return new Promise(function (resolve, reject) {
        fs_1.default.readdir(path, function (err, files) {
            if (err)
                reject(err);
            var fileList = files.filter(function (file) {
                return isExistFile(path + '/' + file) && /.*\.wav$/.test(file); //絞り込み
            });
            resolve(fileList);
        });
    });
};
var isExistFile = function (file) {
    try {
        fs_1.default.statSync(file).isFile();
        return true;
    }
    catch (err) {
        if (err.code === 'ENOENT')
            return false;
    }
};
exports.sleep = function (msec) { return new Promise(function (resolve) { return setTimeout(resolve, msec); }); };
exports.escapeHtml = function (string) {
    if (typeof string !== 'string') {
        return string;
    }
    return string.replace(/[&'`"<>]/g, function (match) {
        return {
            '&': '&amp;',
            "'": '&#x27;',
            '`': '&#x60;',
            '"': '&quot;',
            '<': '&lt;',
            '>': '&gt;',
        }[match];
    });
};
exports.unescapeHtml = function (str) {
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&#044;/g, ',')
        .replace(/&amp;/g, '&');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwQ0FBb0I7QUFDUCxRQUFBLFlBQVksR0FBRyxVQUFDLElBQVk7SUFDdkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ2pDLFlBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUs7WUFDMUIsSUFBSSxHQUFHO2dCQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSTtnQkFDakMsT0FBTyxXQUFXLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTTtZQUN4RSxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsVUFBQyxJQUFZO0lBQy9CLElBQUk7UUFDRixZQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDekM7QUFDSCxDQUFDLENBQUM7QUFFVyxRQUFBLEtBQUssR0FBRyxVQUFDLElBQVksSUFBSyxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO0FBRTlFLFFBQUEsVUFBVSxHQUFHLFVBQUMsTUFBYztJQUN2QyxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsRUFBRTtRQUM5QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBQ0QsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7UUFDdkMsT0FBUTtZQUNOLEdBQUcsRUFBRSxPQUFPO1lBQ1osR0FBRyxFQUFFLFFBQVE7WUFDYixHQUFHLEVBQUUsUUFBUTtZQUNiLEdBQUcsRUFBRSxRQUFRO1lBQ2IsR0FBRyxFQUFFLE1BQU07WUFDWCxHQUFHLEVBQUUsTUFBTTtTQUNKLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBRyxVQUFDLEdBQVc7SUFDdEMsT0FBTyxHQUFHO1NBQ1AsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUM7U0FDckIsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7U0FDdkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7U0FDdkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUM7U0FDdkIsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUMifQ==

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-json-storage":
/*!****************************************!*\
  !*** external "electron-json-storage" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-json-storage");

/***/ }),

/***/ "electron-log":
/*!*******************************!*\
  !*** external "electron-log" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-log");

/***/ }),

/***/ "electron-window-state":
/*!****************************************!*\
  !*** external "electron-window-state" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-window-state");

/***/ }),

/***/ "encoding-japanese":
/*!************************************!*\
  !*** external "encoding-japanese" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("encoding-japanese");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "iconv-lite":
/*!*****************************!*\
  !*** external "iconv-lite" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("iconv-lite");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vcmVhZEJCUy9SZWFkNWNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvZ2V0UmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvcmVhZFNpdGFyYWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N0YXJ0U2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVuY29kaW5nLWphcGFuZXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDZCQUE2QixtQkFBTyxDQUFDLGtCQUFNO0FBQzNDLDhDQUE4QyxtQkFBTyxDQUFDLG9EQUF1QjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOERBQThELHVCQUF1QjtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkNBQTJDLCsxQjs7Ozs7Ozs7Ozs7O0FDM0I5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxteEI7Ozs7Ozs7Ozs7OztBQzdCOUI7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsNkJBQTZCLG1CQUFPLENBQUMsa0JBQU07QUFDM0MsOEJBQThCLG1CQUFPLENBQUMsMEJBQVU7QUFDaEQscUNBQXFDLG1CQUFPLENBQUMsa0NBQWM7QUFDM0QsYUFBYSxtQkFBTyxDQUFDLGtDQUFRO0FBQzdCLDhDQUE4QyxtQkFBTyxDQUFDLG9EQUF1QjtBQUM3RSwrQkFBK0IsbUJBQU8sQ0FBQyxzQ0FBVTtBQUNqRCxjQUFjLG1CQUFPLENBQUMsb0NBQVM7QUFDL0IsZUFBZSxtQkFBTyxDQUFDLHNEQUFrQjtBQUN6QyxvQkFBb0IsbUJBQU8sQ0FBQyxnREFBZTtBQUMzQyxlQUFlLG1CQUFPLENBQUMsc0RBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLGdEQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFD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O0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx3Q0FBd0Msa0NBQWtDLEVBQUUsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCO0FBQ0EsMkNBQTJDLHUvRDs7Ozs7Ozs7Ozs7QUNyRDNDLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcbnZhciBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tanNvbi1zdG9yYWdlXCIpKTtcbnZhciBDb25maWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29uZmlnKCkge1xuICAgICAgICB0aGlzLmdldEJvYWRMaXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWxlY3Ryb25fanNvbl9zdG9yYWdlXzEuZGVmYXVsdC5nZXQoJ2JvYXJkTGlzdCcsIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0ID0gKF9hID0gZGF0YS5ib2FyZExpc3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKiDmnb/kuIDopqfjgpLkv53lrZggKi9cbiAgICAgICAgdGhpcy5zYXZlQm9hcmRMaXN0ID0gZnVuY3Rpb24gKGJvYXJkTGlzdCkge1xuICAgICAgICAgICAgZWxlY3Ryb25fanNvbl9zdG9yYWdlXzEuZGVmYXVsdC5zZXQoJ2JvYXJkTGlzdCcsIHsgYm9hcmRMaXN0OiBib2FyZExpc3QgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvLyDoqK3lrprjg5XjgqHjgqTjg6voqq3jgb/ovrzjgb9cbiAgICAgICAgZWxlY3Ryb25fanNvbl9zdG9yYWdlXzEuZGVmYXVsdC5zZXREYXRhUGF0aChwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKCcnKSk7XG4gICAgfVxuICAgIHJldHVybiBDb25maWc7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IENvbmZpZygpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFc09FTkJRWGRDTzBGQlEzaENMR2RHUVVFMFF6dEJRVWMxUXp0SlFVTkZPMUZCU1VFc1owSkJRVmNzUjBGQlJ6dFpRVU5hTEN0Q1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZETEV0QlFWVXNSVUZCUlN4SlFVRlRPenRuUWtGRE4wTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eFRRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRzFEUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU0xUkN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOTUxFTkJRVU1zUTBGQlF6dFJRVVZHTEdGQlFXRTdVVUZEWWl4clFrRkJZU3hIUVVGSExGVkJRVU1zVTBGQmIwUTdXVUZEYmtVc0swSkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1UwRkJVeXhYUVVGQkxFVkJRVVVzUlVGQlJTeFZRVUZETEVkQlFVYzdaMEpCUXpGRExFMUJRVTBzUjBGQlJ5eERRVUZETzFsQlExb3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU03VVVGa1FTeGhRVUZoTzFGQlEySXNLMEpCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zWTBGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZoU0N4aFFVRkRPMEZCUVVRc1EwRkJReXhCUVdwQ1JDeEpRV2xDUXp0QlFVVkVMR3RDUVVGbExFbEJRVWtzVFVGQlRTeEZRVUZGTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmVsZWN0cm9uRXZlbnQgPSB7XG4gICAgLyoqIOOCteODvOODkOODvOi1t+WLlSAqL1xuICAgICdzdGFydC1zZXJ2ZXInOiAnc3RhcnQtc2VydmVyJyxcbiAgICAvKiog44Ki44Op44O844OI6KGo56S6ICovXG4gICAgJ3Nob3ctYWxlcnQnOiAnc2hvdy1hbGVydCcsXG4gICAgJ3Nob3ctY29tbWVudCc6ICdzaG93LWNvbW1lbnQnLFxuICAgICdjbGVhci1jb21tZW50JzogJ2NsZWFyLWNvbW1lbnQnLFxuICAgIC8qKiDjgrXjg7zjg5Djg7zotbfli5Xjga7ov5Tkv6EgKi9cbiAgICAnc3RhcnQtc2VydmVyLXJlcGx5JzogJ3N0YXJ0LXNlcnZlci1yZXBseScsXG4gICAgTUFJTl9HRVRfRUxFQ1RST05fREFUQTogJ01BSU5fR0VUX0VMRUNUUk9OX0RBVEEnLFxuICAgIE1BSU5fU0VUX0VMRUNUUk9OX0RBVEE6ICdNQUlOX1NFVF9FTEVDVFJPTl9EQVRBJyxcbiAgICAvKiog5p2/44KS6L+95YqgICovXG4gICAgTUFJTl9BRERfQk9BUkRMSVNUOiAnTUFJTl9BRERfQk9BUkRMSVNUJyxcbiAgICAvKiog44K544Os5LiA6Kan44KS6ZaL44GPICovXG4gICAgTUFJTl9HRVRfVEhSRUFEX0xJU1Q6ICdNQUlOX0dFVF9USFJFQURfTElTVCcsXG4gICAgLyoqIOOCueODrOOCkumWi+OBjyAqL1xuICAgIE1BSU5fT1BFTl9USFJFQUQ6ICdNQUlOX09QRU5fVEhSRUFEJyxcbiAgICAvKiog5p2/5LiA6Kan6KGo56S6ICovXG4gICAgU0hPV19CT0FSRF9MSVNUOiAnU0hPV19CT0FSRF9MSVNUJyxcbiAgICAvKiog5pu444GN6L6844G/ICovXG4gICAgTUFJTl9QT1NUX0tBS0lLT01JOiAnTUFJTl9QT1NUX0tBS0lLT01JJyxcbn07XG5leHBvcnRzLmtleUNvZGUgPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjI1emRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGaExGRkJRVUVzWVVGQllTeEhRVUZITzBsQlF6TkNMR0ZCUVdFN1NVRkRZaXhqUVVGakxFVkJRVVVzWTBGQll6dEpRVVU1UWl4aFFVRmhPMGxCUTJJc1dVRkJXU3hGUVVGRkxGbEJRVms3U1VGRk1VSXNZMEZCWXl4RlFVRkZMR05CUVdNN1NVRkRPVUlzWlVGQlpTeEZRVUZGTEdWQlFXVTdTVUZGYUVNc1owSkJRV2RDTzBsQlEyaENMRzlDUVVGdlFpeEZRVUZGTEc5Q1FVRnZRanRKUVVVeFF5eHpRa0ZCYzBJc1JVRkJSU3gzUWtGQmQwSTdTVUZEYUVRc2MwSkJRWE5DTEVWQlFVVXNkMEpCUVhkQ08wbEJRMmhFTEZkQlFWYzdTVUZEV0N4clFrRkJhMElzUlVGQlJTeHZRa0ZCYjBJN1NVRkZlRU1zWTBGQll6dEpRVU5rTEc5Q1FVRnZRaXhGUVVGRkxITkNRVUZ6UWp0SlFVVTFReXhaUVVGWk8wbEJRMW9zWjBKQlFXZENMRVZCUVVVc2EwSkJRV3RDTzBsQlJYQkRMRmxCUVZrN1NVRkRXaXhsUVVGbExFVkJRVVVzYVVKQlFXbENPMGxCUld4RExGZEJRVmM3U1VGRFdDeHJRa0ZCYTBJc1JVRkJSU3h2UWtGQmIwSTdRMEZEZWtNc1EwRkJRenRCUVVWWExGRkJRVUVzVDBGQlR5eEhRVUZITzBsQlEzSkNMRXRCUVVzc1JVRkJSU3hGUVVGRk8wbEJRMVFzUzBGQlN5eEZRVUZGTEVWQlFVVTdTVUZEVkN4SlFVRkpMRVZCUVVVc1JVRkJSVHREUVVOVUxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIEVsZWN0cm9u44Gu44Oi44K444Ol44O844OrXG52YXIgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcbnZhciBlbGVjdHJvbl8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJlbGVjdHJvblwiKSk7XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBlbGVjdHJvbl93aW5kb3dfc3RhdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24td2luZG93LXN0YXRlXCIpKTtcbnZhciBjb25maWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9jb25maWdcIikpO1xudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi9jb25zdFwiKTtcbnZhciBnZXRSZXNfMSA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xudmFyIHN0YXJ0U2VydmVyXzEgPSByZXF1aXJlKFwiLi9zdGFydFNlcnZlclwiKTtcbnZhciBnZXRSZXNfMiA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xuY29uc29sZS50cmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvL1xufTtcbnByb2Nlc3Mub24oJ3VuY2F1Z2h0RXhjZXB0aW9uJywgZnVuY3Rpb24gKGVycikge1xuICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoZXJyKTtcbn0pO1xuLy8g44Ki44OX44Oq44Kx44O844K344On44Oz44KS44Kz44Oz44OI44Ot44O844Or44GZ44KL44Oi44K444Ol44O844OrXG52YXIgYXBwID0gZWxlY3Ryb25fMS5kZWZhdWx0LmFwcDtcbi8vIOWkmumHjei1t+WLlemYsuatolxuaWYgKCFhcHAucmVxdWVzdFNpbmdsZUluc3RhbmNlTG9jaygpKSB7XG4gICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW2FwcF0gSXQgaXMgdGVybWluYXRlZCBmb3IgbXVsdGlwbGUgbGF1bmNoZXMuJyk7XG4gICAgYXBwLnF1aXQoKTtcbn1cbmVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbygnW2FwcF0gc3RhcnRlZCcpO1xuYXBwLmFsbG93UmVuZGVyZXJQcm9jZXNzUmV1c2UgPSB0cnVlO1xudmFyIGljb25QYXRoID0gcGF0aF8xLmRlZmF1bHQucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9pY29uLnBuZycpO1xuLy8g44K144O844OQ44O86LW35YuV44Oi44K444Ol44O844OrXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xudmFyIHNzID0gcmVxdWlyZSgnLi9zdGFydFNlcnZlcicpO1xuY29uc29sZS50cmFjZShzcyk7XG4vLyDjgqbjgqPjg7Pjg4njgqbjgpLkvZzmiJDjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcbnZhciBCcm93c2VyV2luZG93ID0gZWxlY3Ryb25fMS5kZWZhdWx0LkJyb3dzZXJXaW5kb3c7XG4vLyDjg6HjgqTjg7PjgqbjgqPjg7Pjg4njgqbjga9HQ+OBleOCjOOBquOBhOOCiOOBhuOBq+OCsOODreODvOODkOODq+Wuo+iogFxuZ2xvYmFsVGhpcy5lbGVjdHJvbiA9IHtcbiAgICB3aW5kb3c6IHtcbiAgICAgICAgbWFpbldpbmRvdzogbnVsbCxcbiAgICAgICAgY2hhdFdpbmRvdzogbnVsbCxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYm9hcmRMaXN0OiBbXSxcbiAgICAgICAgYm9hcmQ6IHtcbiAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgIHRocmVhZExpc3Q6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB0aHJlYWQ6IHtcbiAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgIGJvYXJkSWQ6IG51bGwsXG4gICAgICAgICAgICB0aHJlYWROdW1iZXI6IG51bGwsXG4gICAgICAgICAgICBob3N0bmFtZTogbnVsbCxcbiAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuLy8g5YWo44Gm44Gu44Km44Kj44Oz44OJ44Km44GM6ZaJ44GY44Gf44KJ57WC5LqGXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9ICdkYXJ3aW4nKSB7XG4gICAgYXBwLnF1aXQoKTtcbiAgICAvLyB9XG59KTtcbi8vIEVsZWN0cm9u44Gu5Yid5pyf5YyW5a6M5LqG5b6M44Gr5a6f6KGMXG5hcHAub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYWluV2luZG93U3RhdGUgPSBlbGVjdHJvbl93aW5kb3dfc3RhdGVfMS5kZWZhdWx0KHtcbiAgICAgICAgZGVmYXVsdFdpZHRoOiA3MDAsXG4gICAgICAgIGRlZmF1bHRIZWlnaHQ6IDcyMCxcbiAgICB9KTtcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjgrXjgqTjgrrjgpLvvIjjg5Xjg6zjg7zjg6DjgrXjgqTjgrrjgpLlkKvjgb7jgarjgYTvvInoqK3lrppcbiAgICB2YXIgbWFpbldpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICAgICAgLy8g5YmN5Zue6LW35YuV5pmC44Gu44KS5b6p5YWDXG4gICAgICAgIHg6IG1haW5XaW5kb3dTdGF0ZS54LFxuICAgICAgICB5OiBtYWluV2luZG93U3RhdGUueSxcbiAgICAgICAgd2lkdGg6IG1haW5XaW5kb3dTdGF0ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBtYWluV2luZG93U3RhdGUuaGVpZ2h0LFxuICAgICAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICAgICAgaWNvbjogaWNvblBhdGgsXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNraXBUYXNrYmFyOiB0cnVlLFxuICAgIH0pO1xuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93Lm1haW5XaW5kb3cgPSBtYWluV2luO1xuICAgIG1haW5XaW5kb3dTdGF0ZS5tYW5hZ2UobWFpbldpbik7XG4gICAgbWFpbldpbi5zZXRUaXRsZSgndm9uZ29sZScpO1xuICAgIG1haW5XaW4uc2V0TWVudShudWxsKTtcbiAgICAvLyDjg6zjg7Pjg4Djg6njg7zjgafkvb/nlKjjgZnjgotodG1s44OV44Kh44Kk44Or44KS5oyH5a6a44GZ44KLXG4gICAgbWFpbldpbi5sb2FkVVJMKCdmaWxlOi8vJyArIHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2h0bWwvaW5kZXguaHRtbCcpKTtcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjgYzplonjgZjjgonjgozjgZ/jgonjgqLjg5fjg6rjgoLntYLkuoZcbiAgICBtYWluV2luLm9uKCdjbG9zZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyDnorroqo3jg4DjgqTjgqLjg63jgrDjgafjga/jgYTjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgonplonjgZjjgotcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxlY3Ryb25fMS5kaWFsb2dcbiAgICAgICAgICAgIC5zaG93TWVzc2FnZUJveChtYWluV2luLCB7XG4gICAgICAgICAgICB0eXBlOiAncXVlc3Rpb24nLFxuICAgICAgICAgICAgYnV0dG9uczogWydZZXMnLCAnTm8nXSxcbiAgICAgICAgICAgIC8vIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfntYLkuobjgZfjgb7jgZnjgYvvvJ8nLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUucmVzcG9uc2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhcHAuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtYWluV2luLm9uKCdjbG9zZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbygnW2FwcF0gY2xvc2UnKTtcbiAgICAgICAgYXBwLmV4aXQoKTtcbiAgICB9KTtcbiAgICAvLyDplovnmbrogIXjg4Tjg7zjg6vjgpLplovjgY9cbiAgICAvLyBtYWluV2luLndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xuICAgIC8vIOOCv+OCueOCr+ODiOODrOOCpOOBruioreWumlxuICAgIHZhciB0cmF5ID0gbnVsbDtcbiAgICBhcHAud2hlblJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyYXkgPSBuZXcgZWxlY3Ryb25fMS5UcmF5KGljb25QYXRoKTtcbiAgICAgICAgdmFyIGNvbnRleHRNZW51ID0gZWxlY3Ryb25fMS5NZW51LmJ1aWxkRnJvbVRlbXBsYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+ioreWumicsXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbldpbi5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAn44Kz44Oh44Oz44OIJyxcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+e1guS6hicsXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbldpbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgdHJheS5zZXRUb29sVGlwKCd2b25nb2xlJyk7XG4gICAgICAgIHRyYXkuc2V0Q29udGV4dE1lbnUoY29udGV4dE1lbnUpO1xuICAgICAgICAvLyDjgr/jgrnjgq/jg4jjg6zjgqTjgq/jg6rjg4Pjgq/mmYLjga7mjJnli5VcbiAgICAgICAgdmFyIGlzRG91YmxlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0cmF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRG91YmxlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDIwMCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEb3VibGVDbGlja2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9KTtcbiAgICAgICAgdHJheS5vbignZG91YmxlLWNsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpc0RvdWJsZUNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgbWFpbldpbi5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyDmnb/kuIDopqfliJ3mnJ/ooajnpLpcbiAgICBjb25maWdfMS5kZWZhdWx0LmdldEJvYWRMaXN0KCk7XG4gICAgY3JlYXRlQ2hhdFdpbmRvdygpO1xufSk7XG52YXIgY3JlYXRlQ2hhdFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hhdFdpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgdXNlQ29udGVudFNpemU6IHRydWUsXG4gICAgICAgIGljb246IGljb25QYXRoLFxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICAvLyDjgr/jgrnjgq/jg5Djg7zjgavooajnpLrjgZfjgarjgYRcbiAgICAgICAgc2tpcFRhc2tiYXI6IHRydWUsXG4gICAgICAgIGNsb3NhYmxlOiBmYWxzZSxcbiAgICB9KTtcbiAgICAvLyDliJ3mnJ/ooajnpLrjga/pnZ7ooajnpLpcbiAgICBjaGF0V2luZG93Lm1pbmltaXplKCk7XG4gICAgLy8g44Os44Oz44OA44Op44O844Gn5L2/55So44GZ44KLaHRtbOODleOCoeOCpOODq+OCkuaMh+WumuOBmeOCi1xuICAgIGNoYXRXaW5kb3cubG9hZFVSTCgnZmlsZTovLycgKyBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9odG1sL2NoYXQuaHRtbCcpKTtcbiAgICBjaGF0V2luZG93LnNldFRpdGxlKCd2b25nb2xlIC0gdGhyZWFkJyk7XG4gICAgY2hhdFdpbmRvdy5zZXRNZW51KG51bGwpO1xuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cgPSBjaGF0V2luZG93O1xuICAgIC8vIGNoYXRXaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XG59O1xuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9HRVRfRUxFQ1RST05fREFUQSwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YTtcbn0pO1xuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9TRVRfRUxFQ1RST05fREFUQSwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhID0gbWVzc2FnZTtcbiAgICByZXR1cm47XG59KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fQUREX0JPQVJETElTVCwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QpLnB1c2guYXBwbHkoX2EsIG1lc3NhZ2UpO1xuICAgIGNvbmZpZ18xLmRlZmF1bHQuc2F2ZUJvYXJkTGlzdChnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0KTtcbiAgICByZXR1cm47XG59KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fR0VUX1RIUkVBRF9MSVNULCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpc3Q7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18xLmdldFRocmVhZExpc3QobWVzc2FnZSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGxpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5lbGVjdHJvbl8xLmlwY01haW4ub24oY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fT1BFTl9USFJFQUQsIGZ1bmN0aW9uIChldmVudCwgdXJsLCBuYW1lKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkO1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XG4gICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBob3N0bmFtZSA9IChfYiA9IChfYSA9IHVybC5tYXRjaCgvaHR0cHM/OlxcL1xcLy4rP1xcLy8pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgICAgICAgICAgICAgIHRocmVhZE51bWJlciA9IChfZCA9IChfYyA9IHVybC5tYXRjaCgvXFwvXFxkK1xcLyQvKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdLnJlcGxhY2UoL1xcLy9nLCAnJykpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xuICAgICAgICAgICAgICAgIGJvYXJkSWQgPSB1cmwucmVwbGFjZShob3N0bmFtZSwgJycpLnJlcGxhY2UoXCIvXCIgKyB0aHJlYWROdW1iZXIgKyBcIi9cIiwgJycpLnJlcGxhY2UoJ3Rlc3QvcmVhZC5jZ2kvJywgJycpLnJlcGxhY2UoJ2Jicy9yZWFkLmNnaS8nLCAnJyk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lOiBob3N0bmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkTnVtYmVyOiB0aHJlYWROdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkSWQ6IGJvYXJkSWQsXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKEpTT04uc3RyaW5naWZ5KGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQsIG51bGwsICcgICcpKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LndlYkNvbnRlbnRzLnNlbmQoY29uc3RfMS5lbGVjdHJvbkV2ZW50WydjbGVhci1jb21tZW50J10pO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuc2V0VGl0bGUobmFtZSArIFwiIC0gXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0YXJ0U2VydmVyXzEudXBkYXRlUmVzKCldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5zaG93KCk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX1BPU1RfS0FLSUtPTUksIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0UmVzXzIucG9zdFJlc3BvbnNlKGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQuaG9zdG5hbWUsIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQudGhyZWFkTnVtYmVyLCBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmJvYXJkSWQsIG1lc3NhZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RhcnRTZXJ2ZXJfMS51cGRhdGVSZXMoKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0cnVlXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYldGcGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW0xaGFXNHVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNhVUpCUVdsQ08wRkJRMnBDTERoRFFVRjNRanRCUVVONFFpeHRSRUZCYVVVN1FVRkRha1VzT0VSQlFTdENPMEZCUXk5Q0xDdENRVUVyUWp0QlFVTXZRaXhuUmtGQmMwUTdRVUZEZEVRc2IwUkJRVGhDTzBGQlF6bENMR2xEUVVGM1F6dEJRVU40UXl3eVEwRkJhVVE3UVVGRGFrUXNOa05CUVRCRE8wRkJRekZETERKRFFVRm5SRHRCUVVWb1JDeFBRVUZQTEVOQlFVTXNTMEZCU3l4SFFVRkhPMGxCUTJRc1JVRkJSVHRCUVVOS0xFTkJRVU1zUTBGQlF6dEJRVVZHTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVXNWVUZCUXl4SFFVRkhPMGxCUTJ4RExITkNRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMnBDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUlVnc2VVSkJRWGxDTzBGQlEzcENMRWxCUVUwc1IwRkJSeXhIUVVGSExHdENRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRPMEZCUlhwQ0xGTkJRVk03UVVGRFZDeEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMSGxDUVVGNVFpeEZRVUZGTEVWQlFVVTdTVUZEY0VNc2MwSkJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNLME5CUVN0RExFTkJRVU1zUTBGQlF6dEpRVU16UkN4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03UTBGRFdqdEJRVVZFTEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzBGQlJURkNMRWRCUVVjc1EwRkJReXg1UWtGQmVVSXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkZja01zU1VGQlRTeFJRVUZSTEVkQlFVY3NZMEZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdRVUZGZUVRc1kwRkJZenRCUVVOa0xEaEVRVUU0UkR0QlFVTTVSQ3hKUVVGTkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNN1FVRkRjRU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVWc1FpeHJRa0ZCYTBJN1FVRkRiRUlzU1VGQlRTeGhRVUZoTEVkQlFVY3NhMEpCUVZFc1EwRkJReXhoUVVGaExFTkJRVU03UVVGRk4wTXNORUpCUVRSQ08wRkJRelZDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRWRCUVVjN1NVRkRjRUlzVFVGQlRTeEZRVUZGTzFGQlEwNHNWVUZCVlN4RlFVRkZMRWxCUVZjN1VVRkRka0lzVlVGQlZTeEZRVUZGTEVsQlFWYzdTMEZEZUVJN1NVRkRSQ3hKUVVGSkxFVkJRVVU3VVVGRFNpeFRRVUZUTEVWQlFVVXNSVUZCUlR0UlFVTmlMRXRCUVVzc1JVRkJSVHRaUVVOTUxFZEJRVWNzUlVGQlJTeEpRVUZYTzFsQlEyaENMRlZCUVZVc1JVRkJSU3hGUVVGRk8xTkJRMlk3VVVGRFJDeE5RVUZOTEVWQlFVVTdXVUZEVGl4SFFVRkhMRVZCUVVVc1NVRkJWenRaUVVOb1FpeFBRVUZQTEVWQlFVVXNTVUZCVnp0WlFVTndRaXhaUVVGWkxFVkJRVVVzU1VGQlZ6dFpRVU42UWl4UlFVRlJMRVZCUVVVc1NVRkJWenRaUVVOeVFpeEpRVUZKTEVWQlFVVXNSVUZCUlR0VFFVTlVPMHRCUTBZN1EwRkRSaXhEUVVGRE8wRkJSVVlzYTBKQlFXdENPMEZCUTJ4Q0xFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3U1VGRE1VSXNjME5CUVhORE8wbEJRM1JETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOWUxFbEJRVWs3UVVGRFRpeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVVklMSEZDUVVGeFFqdEJRVU55UWl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJUdEpRVU5rTEVsQlFVMHNaVUZCWlN4SFFVRkhMQ3RDUVVGcFFpeERRVUZETzFGQlEzaERMRmxCUVZrc1JVRkJSU3hIUVVGSE8xRkJRMnBDTEdGQlFXRXNSVUZCUlN4SFFVRkhPMHRCUTI1Q0xFTkJRVU1zUTBGQlF6dEpRVVZJTERSQ1FVRTBRanRKUVVNMVFpeEpRVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMR0ZCUVdFc1EwRkJRenRSUVVOb1F5eFpRVUZaTzFGQlExb3NRMEZCUXl4RlFVRkZMR1ZCUVdVc1EwRkJReXhEUVVGRE8xRkJRM0JDTEVOQlFVTXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVOd1FpeExRVUZMTEVWQlFVVXNaVUZCWlN4RFFVRkRMRXRCUVVzN1VVRkROVUlzVFVGQlRTeEZRVUZGTEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUlRsQ0xHTkJRV01zUlVGQlJTeEpRVUZKTzFGQlEzQkNMRWxCUVVrc1JVRkJSU3hSUVVGUk8xRkJRMlFzWTBGQll5eEZRVUZGTzFsQlEyUXNaVUZCWlN4RlFVRkZMRWxCUVVrN1UwRkRkRUk3VVVGRFJDeFhRVUZYTEVWQlFVVXNTVUZCU1R0TFFVTnNRaXhEUVVGRExFTkJRVU03U1VGRFNDeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETzBsQlEyaEVMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZGYUVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUlhSQ0xEQkNRVUV3UWp0SlFVTXhRaXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4alFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeDNRa0ZCZDBJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRkwwVXNjVUpCUVhGQ08wbEJRM0pDTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVU1zUzBGQlN6dFJRVU40UWl4M1FrRkJkMEk3VVVGRGVFSXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEdsQ1FVRk5PMkZCUTBnc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU4yUWl4SlFVRkpMRVZCUVVVc1ZVRkJWVHRaUVVOb1FpeFBRVUZQTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRE8xbEJRM1JDTEdGQlFXRTdXVUZEWWl4UFFVRlBMRVZCUVVVc1UwRkJVenRUUVVOdVFpeERRVUZETzJGQlEwUXNTVUZCU1N4RFFVRkRMRlZCUVVNc1MwRkJTenRaUVVOV0xFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM2hDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVOYU8xRkJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOSUxFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xITkNRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM2hDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJVZ3NXVUZCV1R0SlFVTmFMSE5EUVVGelF6dEpRVVYwUXl4WlFVRlpPMGxCUTFvc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEyaENMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hIUVVGSExFbEJRVWtzWlVGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVTBzVjBGQlZ5eEhRVUZITEdWQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dFpRVU42UXp0blFrRkRSU3hMUVVGTExFVkJRVVVzU1VGQlNUdG5Ra0ZEV0N4TFFVRkxMRVZCUVVVN2IwSkJRMHdzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVOc1FpeERRVUZETzJGQlEwWTdXVUZEUkR0blFrRkRSU3hMUVVGTExFVkJRVVVzVFVGQlRUdG5Ra0ZEWWl4TFFVRkxMRVZCUVVVN2IwSkJRMHdzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzI5Q1FVTTVReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03YjBKQlF6ZERMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRuUWtGRGJFUXNRMEZCUXp0aFFVTkdPMWxCUTBRN1owSkJRMFVzUzBGQlN5eEZRVUZGTEVsQlFVazdaMEpCUTFnc1MwRkJTeXhGUVVGRk8yOUNRVU5NTEU5QlFVOHNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRuUWtGRGJFSXNRMEZCUXp0aFFVTkdPMU5CUTBZc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRSUVVNelFpeEpRVUZKTEVOQlFVTXNZMEZCWXl4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8xRkJRMnBETEdsQ1FVRnBRanRSUVVOcVFpeEpRVUZKTEdWQlFXVXNSMEZCUnl4TFFVRkxMRU5CUVVNN1VVRkROVUlzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1ZVRkJUeXhMUVVGTE96czdPM2RDUVVNelFpeGxRVUZsTEVkQlFVY3NTMEZCU3l4RFFVRkRPM2RDUVVONFFpeHhRa0ZCVFN4WlFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVUU3TzNkQ1FVRm9RaXhUUVVGblFpeERRVUZETzNkQ1FVTnFRaXhKUVVGSkxHVkJRV1U3TkVKQlFVVXNjMEpCUVU4N2QwSkJRelZDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0M1FrRkRPVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzNkQ1FVTTNReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhGUVVGRkxFTkJRVU03T3pzN1lVRkRha1FzUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhqUVVGakxFVkJRVVVzVlVGQlF5eExRVUZMTzFsQlF6VkNMR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGRrSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03U1VGRlNDeFZRVUZWTzBsQlExWXNaMEpCUVUwc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEpRVVZ5UWl4blFrRkJaMElzUlVGQlJTeERRVUZETzBGQlEzSkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVWdzU1VGQlRTeG5Ra0ZCWjBJc1IwRkJSenRKUVVOMlFpeEpRVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMR0ZCUVdFc1EwRkJRenRSUVVOdVF5eExRVUZMTEVWQlFVVXNSMEZCUnp0UlFVTldMR05CUVdNc1JVRkJSU3hKUVVGSk8xRkJRM0JDTEVsQlFVa3NSVUZCUlN4UlFVRlJPMUZCUTJRc1kwRkJZeXhGUVVGRk8xbEJRMlFzWlVGQlpTeEZRVUZGTEVsQlFVazdVMEZEZEVJN1VVRkRSQ3hqUVVGak8xRkJRMlFzVjBGQlZ5eEZRVUZGTEVsQlFVazdVVUZEYWtJc1VVRkJVU3hGUVVGRkxFdEJRVXM3UzBGRGFFSXNRMEZCUXl4RFFVRkRPMGxCUTBnc1YwRkJWenRKUVVOWUxGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXd3UWtGQk1FSTdTVUZETVVJc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVkQlFVY3NZMEZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFVkJRVVVzZFVKQlFYVkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSV3BHTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0SlFVTjRReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUlhwQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU03U1VGRGJrUXNlVU5CUVhsRE8wRkJRek5ETEVOQlFVTXNRMEZCUXp0QlFVVkdMR3RDUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEhGQ1FVRmhMRU5CUVVNc2MwSkJRWE5DTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUenRKUVVOc1JTeFBRVUZQTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRMnhETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTBnc2EwSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNjVUpCUVdFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGM1F6dEpRVU51Unl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTTdTVUZEYmtNc1QwRkJUenRCUVVOVUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwZ3NhMEpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4clFrRkJhMElzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4UFFVRnJSRHM3U1VGRGVrY3NRMEZCUVN4TFFVRkJMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUVN4RFFVRkRMRWxCUVVrc1YwRkJTU3hQUVVGUExFVkJRVVU3U1VGRGNFUXNaMEpCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGVrUXNUMEZCVHp0QlFVTlVMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMGdzYTBKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2NVSkJRV0VzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hWUVVGUExFdEJRVXNzUlVGQlJTeFBRVUZsT3pzN08yOUNRVU5xUlN4eFFrRkJUU3h6UWtGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQmJrTXNTVUZCU1N4SFFVRkhMRk5CUVRSQ08yZENRVU42UXl4elFrRkJUeXhKUVVGSkxFVkJRVU03T3p0TFFVTmlMRU5CUVVNc1EwRkJRenRCUVVOSUxHdENRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMSEZDUVVGaExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1ZVRkJUeXhMUVVGTExFVkJRVVVzUjBGQlZ5eEZRVUZGTEVsQlFWazdPenM3T3p0blFrRkZNVVVzVVVGQlVTeGxRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNNRU5CUVVjc1EwRkJReXh2UTBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTNCRUxGbEJRVmtzWlVGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXd3UTBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxHOURRVUZMTEVWQlFVVXNRMEZCUXp0blFrRkRia1VzVDBGQlR5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRkpMRmxCUVZrc1RVRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVVjBTU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjN2IwSkJRMmhETEVkQlFVY3NTMEZCUVR0dlFrRkRTQ3hSUVVGUkxGVkJRVUU3YjBKQlExSXNXVUZCV1N4alFVRkJPMjlDUVVOYUxFOUJRVThzVTBGQlFUdHZRa0ZEVUN4SlFVRkpMRVZCUVVVc1JVRkJSVHRwUWtGRFZDeERRVUZETzJkQ1FVTkdMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVjBSU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlEzWkdMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVrc1NVRkJTU3hYUVVGTkxFZEJRVXNzUTBGQlF5eERRVUZETzJkQ1FVVnVSU3h4UWtGQlRTeDFRa0ZCVXl4RlFVRkZMRVZCUVVFN08yZENRVUZxUWl4VFFVRnBRaXhEUVVGRE8yZENRVU5zUWl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRemxETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0blFrRkROME1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZET3pzN08wdEJRMnBFTEVOQlFVTXNRMEZCUXp0QlFVTklMR3RDUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEhGQ1FVRmhMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNWVUZCVHl4TFFVRkxMRVZCUVVVc1QwRkJaVHM3T3pzN08yZENRVVV4UlN4eFFrRkJUU3h4UWtGQldTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZsQlFWa3NSVUZCUlN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGQk96dG5Ra0ZCTlVvc1UwRkJORW9zUTBGQlF6dG5Ra0ZETjBvc2NVSkJRVTBzZFVKQlFWTXNSVUZCUlN4RlFVRkJPenRuUWtGQmFrSXNVMEZCYVVJc1EwRkJRenRuUWtGRmJFSXNjMEpCUVU4c1NVRkJTU3hGUVVGRE96czdaMEpCUlZvc2MwSkJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRMklzYzBKQlFVOHNTMEZCU3l4RlFVRkRPenM3TzB0QlJXaENMRU5CUVVNc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiA1Y2jkupLmj5tCQlPoqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcbiAqL1xudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcbnZhciBpY29udl9saXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImljb252LWxpdGVcIikpOyAvLyDmloflrZfjgrPjg7zjg4nlpInmj5vnlKjjg5Hjg4PjgrHjg7zjgrhcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciBlbmNvZGluZ19qYXBhbmVzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKSk7XG4vKiog44K544OG44O844K/44K544Kz44O844OJMzA0IF9Ob3RNb2RpZmllZCAqL1xudmFyIE5PVF9NT0RJRklFRCA9ICczMDQnO1xudmFyIFJBTkdFX05PVF9TQVRJU0ZJQUJMRSA9ICc0MTYnO1xuLyoqIOacgOe1guWPluW+l+OCueODrOODg+ODiSAqL1xudmFyIGxhc3RUaHJlYWRVcmwgPSAnJztcbi8qKiDmnIDntYLjg6zjgrnnlarlj7cgKi9cbnZhciBsYXN0UmVzTnVtYmVyID0gMDtcbi8qKiDmnIDntYLmm7TmlrDml6XmmYIgKi9cbnZhciBsYXN0TW9kaWZpZWQgPSBudWxsO1xuLyoqIOacgOe1guODkOOCpOODiOaVsCAqL1xudmFyIGxhc3RCeXRlID0gMDtcbi8qKiDjgrnjg6zkuIDopqfjgpLoqq3jgb/ovrzjgoAgKi9cbmV4cG9ydHMucmVhZEJvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXF1ZXN0VXJsLCBsaXN0LCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSBib2FyZFVybCArIFwic3ViamVjdC50eHRcIjtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdTaGlmdF9KSVMnKTtcbiAgICAgICAgICAgICAgICAvLyDjg5Hjg7zjgrnjgZfjgabmoLzntI1cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2guYXBwbHkobGlzdCwgc3RyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gcGFyc2VUaHJlYWRMaXN0KGJvYXJkVXJsLCBsaW5lKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yXzEuc3RhdHVzID09IE5PVF9NT0RJRklFRCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFOT1RfTU9ESUZJRUQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMS5zdGF0dXMgPT0gUkFOR0VfTk9UX1NBVElTRklBQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgVJBTkdFX05PVF9TQVRJU0ZJQUJMRScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBbWVzc2FnZT0nICsgZXJyb3JfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBsaXN0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vKipcbiAqIOODrOOCueOCkuaKleeov+OBmeOCi1xuICogQHBhcmFtIGhvc3RuYW1lIOODm+OCueODiOWQjeOAgmh0dHBzOi8vaG9nZWhvZ2UvXG4gKiBAcGFyYW0gdGhyZWFkTnVtYmVyIOOCueODrOeVquWPtyAxMjM0NTY3OFxuICogQHBhcmFtIGJvYXJkSWQg5p2/SUQgcGFzdGEwNFxuICogQHBhcmFtIG1lc3NhZ2Ug5oqV56i/5paHXG4gKi9cbmV4cG9ydHMucG9zdFJlcyA9IGZ1bmN0aW9uIChob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1bmljb2RlQXJyYXksIGksIHNqaXNBcnJheSwgZW5jb2RlZEtleXdvcmQ7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdW5pY29kZUFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pY29kZUFycmF5LnB1c2gobWVzc2FnZS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2ppc0FycmF5ID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LmNvbnZlcnQodW5pY29kZUFycmF5LCB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnU0pJUycsXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdVTklDT0RFJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbmNvZGVkS2V5d29yZCA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC51cmxFbmNvZGUoc2ppc0FycmF5KTtcbiAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhlbmNvZGVVUklDb21wb25lbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0LnBvc3QoaG9zdG5hbWUgKyBcInRlc3QvYmJzLmNnaVwiLCBcIkZST009Jk1FU1NBR0U9XCIgKyBlbmNvZGVkS2V5d29yZCArIFwiJm1haWw9c2FnZSZrZXk9XCIgKyB0aHJlYWROdW1iZXIgKyBcIiZiYnM9XCIgKyBib2FyZElkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnKi8qJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwLCBkZWZsYXRlLCBicicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oZW5jb2RlVVJJQ29tcG9uZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xudmFyIFJlYWQ1Y2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVhZDVjaCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOOCueiqreOBv+i+vOOBv1xuICAgICAgICAgKiDlvJXmlbDjgafmjIflrprjgZfjgZ/mnb/jgYvjgonjg6zjgrnjgpLoqq3jgoBcbiAgICAgICAgICog44Os44K555Wq5Y+344KS5oyH5a6a44GX44Gm44GE44Gq44GE5aC05ZCI44Gv5pyA5pawMeS7tuWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gdGhyZWFkVXJsIOOCueODrFVSTFxuICAgICAgICAgKiBAcGFyYW0gcmVzTnVtIOODrOOCueeVquWPt1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkID0gZnVuY3Rpb24gKHRocmVhZFVybCwgcmVzTnVtKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVwLCByZXF1ZXN0VXJsLCByYW5nZSwgb3B0aW9ucywgcmVzcG9uc2VKc29uLCByZXNwb25zZSwgaGVhZGVycywgc3RyLCBlcnJvcl8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oYFtSZWFkNWNoXSB0aHJlYWRVcmw9JHt0aHJlYWRVcmx9IHJlc051bT0ke3Jlc051bX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv+OChOacgOe1guaXpeODrOOCueeVquWPt+OBjOOBi+OCj+OBo+OBn+OCieacgOWIneOBi+OCieOBqOOCiuebtOOBmShsYXN0bW9kaWZp44GoIHJhbmdl44Gu44Oq44K744OD44OIKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZFVybCAhPSBsYXN0VGhyZWFkVXJsIHx8IE51bWJlci5pc05hTihyZXNOdW0pIHx8IHJlc051bSA8IGxhc3RSZXNOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0VGhyZWFkVXJsID0gdGhyZWFkVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJ5dGUgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLmpzXXJlc2V0ZSEhISEhISEhISEhISEhISEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ25vcmVzZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXAgPSAvXFwvdGVzdFxcL3JlYWQuY2dpKFxcLy4rKShcXC8uKylcXC8vO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IHRocmVhZFVybC5yZXBsYWNlKHJlcCwgJyQxL2RhdCQyLmRhdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBsYXN0Qnl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lmLW1vZGlmaWVkLXNpbmNlJzogbGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYW5nZTogJ2J5dGVzPScgKyByYW5nZSArICctJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdChvcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA9IHJlc3BvbnNlLmhlYWRlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXN0TW9kaWZpZWTjgahSYW5nZeabtOaWsOWHpueQhlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnNbJ2xhc3QtbW9kaWZpZWQnXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkID0gaGVhZGVyc1snbGFzdC1tb2RpZmllZCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpLCAnU2hpZnRfSklTJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjgrnjg53jg7Pjgrnjgqrjg5bjgrjjgqfjgq/jg4jkvZzmiJDjgIFjb250ZW50LXJhbmdl44GM44GC44KL5aC05ZCI44Go44Gq44GE5aC05ZCI44Gn5Yem55CG44KS5YiG44GR44KLXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snY29udGVudC1yYW5nZSddID09IG51bGwgfHwgbGFzdEJ5dGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnJlYWRdY29udGVudC1yYW5nZT0nICsgaGVhZGVyc1snY29udGVudC1yYW5nZSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBwdXJzZU5ld1Jlc3BvbnNlKHN0ciwgcmVzTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSnNvbiA9IHB1cnNlRGlmZlJlc3BvbnNlKHN0ciwgcmVzTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPluW+l+ODkOOCpOODiOaVsOihqOekulxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10gIT0gbnVsbCAmJiByZXNwb25zZUpzb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCeXRlID0gbGFzdEJ5dGUgKyBwYXJzZUludChoZWFkZXJzWydjb250ZW50LWxlbmd0aCddKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucmVhZF1sYXN0Qnl0ZT0nICsgbGFzdEJ5dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8yLnN0YXR1cyA9PSBOT1RfTU9ESUZJRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPjg6zjgrnlj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFOT1RfTU9ESUZJRUQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yXzIuc3RhdHVzID09IFJBTkdFX05PVF9TQVRJU0ZJQUJMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+ODrOOCueWPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgVJBTkdFX05PVF9TQVRJU0ZJQUJMRScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT44Os44K55Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBbWVzc2FnZT0nICsgZXJyb3JfMi5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZUpzb25dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWQ1Y2g7XG59KCkpO1xuLyoqXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcbiAqIOaIu+OCiuOBqOOBl+OBpuODkeODvOOCueOBl+OBn2pzb27jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TjgZlcbiAqIEBwYXJhbSByZXMg5p2/44GL44KJ6L+U5Y2044GV44KM44GfZGF0XG4gKiBAcGFyYW0gcmVzTnVtIOODquOCr+OCqOOCueODiOOBleOCjOOBn+ODrOOCueeVquWPt1xuICovXG52YXIgcHVyc2VOZXdSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIHJlc051bSkge1xuICAgIC8vIOe1kOaenOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyDjg6zjgrnnlarlj7dcbiAgICB2YXIgbnVtID0gMDtcbiAgICAvLyDmlrDnnYDjg6zjgrnjgpLmlLnooYzjgZTjgajjgatTcGxpdOOBmeOCi1xuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcbiAgICAvLyDmlrDnnYDjgarjgZfjgarjgonmiLvjgovjgIJcbiAgICBpZiAocmVzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vIOmFjeWIl+OBruacgOW+jOOBq+epuuOBruimgee0oOOBjOWFpeOCi+OBk+OBqOOBjOOBguOCi+OBruOBp+WPluOCiumZpOOBj1xuICAgIGlmIChyZXNBcnJheVtyZXNBcnJheS5sZW5ndGggLSAxXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmVzQXJyYXkucG9wKCk7XG4gICAgfVxuICAgIC8vIOODrOOCueaMh+WumuOBquOBl+OBruWgtOWQiOacgOW+jOOBrjHku7blj5blvpdcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHJlc051bSkgfHwgcmVzTnVtIDwgMSkge1xuICAgICAgICBudW0gPSByZXNBcnJheS5sZW5ndGggLSAxO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbnVtID0gcmVzTnVtIC0gMTtcbiAgICB9XG4gICAgLy8gMeihjOOBlOOBqOOBq+ODkeODvOOCueOBmeOCi1xuICAgIGZvciAoOyBudW0gPCByZXNBcnJheS5sZW5ndGg7IG51bSsrKSB7XG4gICAgICAgIC8vIOODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xuICAgICAgICBpZiAocmVzQXJyYXlbbnVtXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZVJlc3BvbnNlKHJlc0FycmF5W251bV0sIG51bSArIDEpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsYXN0UmVzTnVtYmVyID0gbnVtICsgMTtcbiAgICAvLyDjg5Hjg7zjgrnjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TljbRcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICog5Y+W5b6X44GX44Gf44Os44K544Od44Oz44K577yI6KSH5pWw77yJ44Gu44OR44O844K5XG4gKiDmiLvjgorjgajjgZfjgabjg5Hjg7zjgrnjgZfjgZ9qc29u44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U44GZXG4gKiBAcGFyYW0gcmVzIOadv+OBi+OCiei/lOWNtOOBleOCjOOBn2RhdDHooYzliIZcbiAqIEBwYXJhbSByZXNOdW0g44Oq44Kv44Ko44K544OI44GV44KM44Gf44Os44K555Wq5Y+3XG4gKi9cbnZhciBwdXJzZURpZmZSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIHJlc051bSkge1xuICAgIC8v57WQ5p6c44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIOODrOOCueeVquWPt1xuICAgIHZhciBudW0gPSByZXNOdW07XG4gICAgLy/mlrDnnYDjg6zjgrnjgpLmlLnooYzjgZTjgajjgatTcGxpdOOBmeOCi1xuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcbiAgICAvLyDmlrDnnYDjgarjgZfjgarjgonmiLvjgovjgIJcbiAgICBpZiAocmVzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyDphY3liJfjga7mnIDlvozjgavnqbrjga7opoHntKDjgYzlhaXjgovjgZPjgajjgYzjgYLjgovjga7jgaflj5bjgorpmaTjgY9cbiAgICAgICAgaWYgKHJlc0FycmF5W3Jlc0FycmF5Lmxlbmd0aCAtIDFdLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXNBcnJheS5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5wdXJzZURpZmZSZXNwb25zZV3lj5blvpfjg6zjgrnnlarlj7c9JyArIG51bSk7XG4gICAgLy8x6KGM44GU44Go44Gr44OR44O844K544GZ44KLXG4gICAgcmVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy/jg5Hjg7zjgrnjg6Hjgr3jg4Pjg4nlkbzjgbPlh7rjgZdcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlUmVzcG9uc2UodmFsdWUsIG51bSkpO1xuICAgICAgICAgICAgbnVtKys7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDjg5Hjg7zjgrnjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TljbRcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICog44K544Os5LiA6Kan44Gu44OR44O844K5XG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XG4gKiBAcGFyYW0gSW50ZWdlciAvLyBudW0g44Os44K555Wq77yIMOOCueOCv+ODvOODiO+8iVxuICovXG52YXIgcGFyc2VUaHJlYWRMaXN0ID0gZnVuY3Rpb24gKGJvYXJkVXJsLCBzdWJqZWN0TGluZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgLy9BUEnjga7ov5TljbTlgKTjgpI8PuOBp+WIhuWJslxuICAgIC8v44Os44K544Gu6KaB57SgXG4gICAgLy8wOmRhdOWQjVxuICAgIC8vMTrjgrnjg6zjgr/jgqTvvIjjg6zjgrnmlbDvvIlcbiAgICB2YXIgc3BsaXRSZXMgPSBzdWJqZWN0TGluZS5zcGxpdCgnPD4nKTtcbiAgICBjb25zb2xlLmxvZyhzcGxpdFJlcyk7XG4gICAgdmFyIGRhdE51bSA9IHNwbGl0UmVzWzBdLnJlcGxhY2UoJy5kYXQnLCAnJyk7XG4gICAgdmFyIGhvc3RuYW1lID0gKF9iID0gKF9hID0gYm9hcmRVcmwubWF0Y2goL15odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgdmFyIGJvYXJkTmFtZSA9IGJvYXJkVXJsLnJlcGxhY2UoaG9zdG5hbWUsICcnKTtcbiAgICB2YXIgdXJsID0gaG9zdG5hbWUgKyBcInRlc3QvcmVhZC5jZ2kvXCIgKyBib2FyZE5hbWUgKyBkYXROdW0gKyBcIi9cIjtcbiAgICB2YXIgdGl0bGVUZW1wID0gc3BsaXRSZXNbMV07XG4gICAgdmFyIG5hbWUgPSAoX2QgPSAoX2MgPSB0aXRsZVRlbXAubWF0Y2goLyguKj8pIFxcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1sxXSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJ+KYheWPluW+l+WkseaVl+KYhSc7XG4gICAgdmFyIHJlc051bSA9IE51bWJlcigoX2UgPSB0aXRsZVRlbXAubWF0Y2goL1xcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVswXS5yZXBsYWNlKC9cXCh8XFwpL2csICcnKSk7XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHJlc051bTogcmVzTnVtLFxuICAgIH07XG59O1xuLyoqXG4gKiDjg6zjgrnjga7jg5Hjg7zjgrlcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcbiAqIEBwYXJhbSBJbnRlZ2VyIC8vIG51bSDjg6zjgrnnlarvvIgw44K544K/44O844OI77yJXG4gKi9cbnZhciBwYXJzZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcywgbnVtKSB7XG4gICAgLy9BUEnjga7ov5TljbTlgKTjgpI8PuOBp+WIhuWJslxuICAgIC8v44Os44K544Gu6KaB57SgXG4gICAgLy8wOuWQjeWJjVxuICAgIC8vMTrjg6HjgqLjg4lcbiAgICAvLzI65pel5LuY44GoSUQg77yIMjAxOS8xMS8wMyjml6UpIDA4OjU1OjAwIElEOmthbmlrYW5p77yJ44G/44Gf44GE44Gr6KGo56S6XG4gICAgLy8zOuacrOaWh1xuICAgIC8vNDrjgrnjg6zjgr/jgqQg77yIMeODrOOCueebruOBruOBv++8iVxuICAgIHZhciBzcGxpdFJlcyA9IHJlcy5zcGxpdCgnPD4nKTtcbiAgICAvLyDml6Xku5jjgahJROWIhumbouWHpueQhuOAgScgSUQ6J+OBp+WMuuWIh+OCi1xuICAgIHZhciBkYXRlSWQgPSBzcGxpdFJlc1syXS5zcGxpdCgnIElEOicpO1xuICAgIHZhciBkYXRlID0gZGF0ZUlkWzBdO1xuICAgIHZhciBpZCA9IGRhdGVJZC5sZW5ndGggPT09IDIgPyBkYXRlSWRbMV0gOiAnJztcbiAgICB2YXIgcmVzSnNvbiA9IHtcbiAgICAgICAgbnVtYmVyOiBudW0sXG4gICAgICAgIG5hbWU6IHNwbGl0UmVzWzBdLFxuICAgICAgICBlbWFpbDogc3BsaXRSZXNbMV0sXG4gICAgICAgIGRhdGU6IGRhdGUsXG4gICAgICAgIHRleHQ6IHNwbGl0UmVzWzNdLFxuICAgICAgICAvLyB0aHJlYWRUaXRsZTogc3BsaXRSZXNbNF0sXG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgaW1nVXJsOiAnJyxcbiAgICB9O1xuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxuICAgIHJldHVybiByZXNKc29uO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWQ1Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lVbVZoWkRWamFDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSWxKbFlXUTFZMmd1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZCUVRzN1IwRkZSenRCUVVOSUxHZEVRVUZyUkR0QlFVTnNSQ3d3UkVGQkswSXNRMEZCUXl4blFrRkJaMEk3UVVGRGFFUXNPRVJCUVN0Q08wRkJReTlDTEhkRlFVRjVRenRCUVVWNlF5d3JRa0ZCSzBJN1FVRkRMMElzU1VGQlRTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUXpOQ0xFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJSWEJETEdWQlFXVTdRVUZEWml4SlFVRkpMR0ZCUVdFc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRrSXNZVUZCWVR0QlFVTmlMRWxCUVVrc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4wUWl4aFFVRmhPMEZCUTJJc1NVRkJTU3haUVVGWkxFZEJRV3RDTEVsQlFVa3NRMEZCUXp0QlFVTjJReXhoUVVGaE8wRkJRMklzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUldwQ0xHZENRVUZuUWp0QlFVTklMRkZCUVVFc1UwRkJVeXhIUVVGSExGVkJRVThzVVVGQlowSTdPenM3TzJkQ1FVTjRReXhWUVVGVkxFZEJRVTBzVVVGQlVTeG5Ra0ZCWVN4RFFVRkRPMmRDUVVOMFF5eEpRVUZKTEVkQlFYbERMRVZCUVVVc1EwRkJRenRuUWtGSGFFUXNUMEZCVHl4SFFVRjFRanR2UWtGRGJFTXNSMEZCUnl4RlFVRkZMRlZCUVZVN2IwSkJRMllzVFVGQlRTeEZRVUZGTEV0QlFVczdiMEpCUTJJc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTzI5Q1FVTnFRaXhaUVVGWkxFVkJRVVVzWVVGQllUdHBRa0ZETlVJc1EwRkJRenM3T3p0blFrRkphVUlzY1VKQlFVMHNaVUZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGQk96dG5Ra0ZCTDBJc1VVRkJVU3hIUVVGSExGTkJRVzlDTzJkQ1FVOHZRaXhIUVVGSExFZEJRVWNzYjBKQlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03WjBKQlEyeEZMRlZCUVZVN1owSkJRMVlzU1VGQlNTeERRVUZETEVsQlFVa3NUMEZCVkN4SlFVRkpMRVZCUTBNc1IwRkJSenR4UWtGRFNDeExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRPM0ZDUVVOWUxFMUJRVTBzUTBGQlF5eFZRVUZETEVsQlFVa3NTVUZCU3l4UFFVRkJMRWxCUVVrc1JVRkJTaXhEUVVGSkxFTkJRVU03Y1VKQlEzUkNMRWRCUVVjc1EwRkJReXhWUVVGRExFbEJRVWtzU1VGQlN5eFBRVUZCTEdWQlFXVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFVkJRUzlDTEVOQlFTdENMRU5CUVVNc1JVRkRha1E3T3pzN1owSkJSVVlzU1VGQlNTeFBRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMRmxCUVZrc1JVRkJSVHR2UWtGRGFFTXNjMEpCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zWjBSQlFXZEVMRU5CUVVNc1EwRkJRenRwUWtGRE4wUTdjVUpCUVUwc1NVRkJTU3hQUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEhGQ1FVRnhRaXhGUVVGRk8yOUNRVU5vUkN4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eDVSRUZCZVVRc1EwRkJReXhEUVVGRE8ybENRVU4wUlR0eFFrRkJUVHR2UWtGRFRDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXcwUTBGQk5FTXNSMEZCUnl4UFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03YVVKQlEzcEZPMmRDUVVORUxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dHZRa0ZIZEVNc2MwSkJRVThzU1VGQlNTeEZRVUZET3pzN1MwRkRZaXhEUVVGRE8wRkJSVVk3T3pzN096dEhRVTFITzBGQlExVXNVVUZCUVN4UFFVRlBMRWRCUVVjc1ZVRkJUeXhSUVVGblFpeEZRVUZGTEZsQlFXOUNMRVZCUVVVc1QwRkJaU3hGUVVGRkxFOUJRV1U3T3pzN08yZENRVVU1Uml4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU40UWl4TFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlEzWkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU14UXp0blFrRkRTeXhUUVVGVExFZEJRVWNzTWtKQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRk8yOUNRVU12UXl4RlFVRkZMRVZCUVVVc1RVRkJUVHR2UWtGRFZpeEpRVUZKTEVWQlFVVXNVMEZCVXp0cFFrRkRhRUlzUTBGQlF5eERRVUZETzJkQ1FVZEhMR05CUVdNc1IwRkJSeXd5UWtGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRm5RaXhEUVVGRExFTkJRVU03WjBKQlF6VkVMREpEUVVFeVF6dG5Ra0ZGTTBNc2NVSkJRVTBzWlVGQlN5eERRVUZETEVsQlFVa3NRMEZCU1N4UlFVRlJMR2xDUVVGakxFVkJRVVVzYlVKQlFXbENMR05CUVdNc2RVSkJRV3RDTEZsQlFWa3NZVUZCVVN4UFFVRlRMRVZCUVVVN2QwSkJRekZJTEU5QlFVOHNSVUZCUlRzMFFrRkRVQ3hOUVVGTkxFVkJRVVVzUzBGQlN6czBRa0ZEWWl4alFVRmpMRVZCUVVVc2JVTkJRVzFET3pSQ1FVTnVSQ3hwUWtGQmFVSXNSVUZCUlN4dFFrRkJiVUk3ZVVKQlEzWkRPM0ZDUVVOR0xFTkJRVU1zUlVGQlFUczdaMEpCVWtZc01rTkJRVEpETzJkQ1FVVXpReXhUUVUxRkxFTkJRVU03T3pzN1MwRkRTaXhEUVVGRE8wRkJSVVk3U1VGQlFUdFJRVUZCTEdsQ1FUQkdRenRSUVhwR1F6czdPenM3TzFkQlRVYzdVVUZEU0N4VFFVRkpMRWRCUVVjc1ZVRkJUeXhUUVVGcFFpeEZRVUZGTEUxQlFXTTdPenM3TzNkQ1FVTTNReXhwUlVGQmFVVTdkMEpCUTJwRkxHdEVRVUZyUkR0M1FrRkRiRVFzU1VGQlNTeFRRVUZUTEVsQlFVa3NZVUZCWVN4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMR0ZCUVdFc1JVRkJSVHMwUWtGRGFFWXNZVUZCWVN4SFFVRkhMRk5CUVZNc1EwRkJRenMwUWtGRE1VSXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenMwUWtGRGNFSXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenMwUWtGRFlpeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRzlEUVVGdlF5eERRVUZETEVOQlFVTTdlVUpCUTNKRU96WkNRVUZOT3pSQ1FVTk1MRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdlVUpCUXpOQ08zZENRVXRMTEVkQlFVY3NSMEZCUnl4blEwRkJaME1zUTBGQlF6dDNRa0ZEZGtNc1ZVRkJWU3hIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRE8zZENRVmR3UkN4TFFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRE8zZENRVVZxUWl4UFFVRlBMRWRCUVhWQ096UkNRVU5zUXl4SFFVRkhMRVZCUVVVc1ZVRkJWVHMwUWtGRFppeE5RVUZOTEVWQlFVVXNTMEZCU3pzMFFrRkRZaXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVazdORUpCUTJwQ0xGbEJRVmtzUlVGQlJTeGhRVUZoT3pSQ1FVTXpRaXhQUVVGUExFVkJRVVU3WjBOQlExQXNiVUpCUVcxQ0xFVkJRVVVzV1VGQldUdG5RMEZEYWtNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVkQlFVY3NSMEZCUnpzMlFrRkRPVUk3ZVVKQlEwWXNRMEZCUXpzN096dDNRa0ZMYVVJc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenQzUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08zZENRVWN2UWl4UFFVRlBMRWRCUVRoQ0xGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdkMEpCUXpWRUxIbENRVUY1UWp0M1FrRkRla0lzU1VGQlNTeFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRk96UkNRVU53UXl4WlFVRlpMRWRCUVVjc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETzNsQ1FVTjZRenQzUWtGSlN5eEhRVUZITEVkQlFVY3NiMEpCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdkMEpCUTJ4RkxDdERRVUVyUXp0M1FrRkRMME1zU1VGQlNTeFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxGRkJRVkVzU1VGQlNTeERRVUZETEVWQlFVVTdORUpCUTNKRUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNPRUpCUVRoQ0xFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNN05FSkJRM3BGTEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN2VVSkJRemxET3paQ1FVRk5PelJDUVVOTUxGbEJRVmtzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdlVUpCUXk5RE8zZENRVVZFTEZkQlFWYzdkMEpCUTFnc1NVRkJTU3hQUVVGUExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1NVRkJTU3hKUVVGSkxFbEJRVWtzV1VGQldTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN05FSkJRMmhGTEZGQlFWRXNSMEZCUnl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTTVSQ3hQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEhsQ1FVRjVRaXhIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETzNsQ1FVTnlSRHM3T3p0M1FrRkZSQ3haUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzNkQ1FVTnNRaXhKUVVGSkxFOUJRVXNzUTBGQlF5eE5RVUZOTEVsQlFVa3NXVUZCV1N4RlFVRkZPelJDUVVOb1F5eHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhwUkVGQmFVUXNRMEZCUXl4RFFVRkRPM2xDUVVNNVJEczJRa0ZCVFN4SlFVRkpMRTlCUVVzc1EwRkJReXhOUVVGTkxFbEJRVWtzY1VKQlFYRkNMRVZCUVVVN05FSkJRMmhFTEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExEQkVRVUV3UkN4RFFVRkRMRU5CUVVNN2VVSkJRM1pGT3paQ1FVRk5PelJDUVVOTUxITkNRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRFpEUVVFMlF5eEhRVUZITEU5QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenQ1UWtGRE1VVTdkMEpCUTBRc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhEUVVGRE96UkNRVWQwUXl4elFrRkJUeXhaUVVGWkxFVkJRVU03T3p0aFFVTnlRaXhEUVVGRE8wbEJRMG9zUTBGQlF6dEpRVUZFTEdOQlFVTTdRVUZCUkN4RFFVRkRMRUZCTVVaRUxFbEJNRVpETzBGQlJVUTdPenM3TzBkQlMwYzdRVUZEU0N4SlFVRk5MR2RDUVVGblFpeEhRVUZITEZWQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdNN1NVRkRia1FzV1VGQldUdEpRVU5hTEVsQlFVMHNUVUZCVFN4SFFVRjFReXhGUVVGRkxFTkJRVU03U1VGRGRFUXNUMEZCVHp0SlFVTlFMRWxCUVVrc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVVZhTEc5Q1FVRnZRanRKUVVOd1FpeEpRVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQlEzcERMRmxCUVZrN1NVRkRXaXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTNwQ0xFOUJRVThzVFVGQlRTeERRVUZETzB0QlEyWTdTVUZEUkN3eVFrRkJNa0k3U1VGRE0wSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRemxETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRMUVVOb1FqdEpRVVZFTEcxQ1FVRnRRanRKUVVOdVFpeEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0UlFVTjBReXhIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRNMEk3VTBGQlRUdFJRVU5NTEVkQlFVY3NSMEZCUnl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRMnhDTzBsQlJVUXNZVUZCWVR0SlFVTmlMRTlCUVU4c1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4RlFVRkZMRVZCUVVVN1VVRkRia01zWTBGQll6dFJRVU5rTEVsQlFVa3NVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZETlVJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTNCRU8wdEJRMFk3U1VGRFJDeGhRVUZoTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVONFFpeHZRa0ZCYjBJN1NVRkRjRUlzVDBGQlR5eE5RVUZOTEVOQlFVTTdRVUZEYUVJc1EwRkJReXhEUVVGRE8wRkJSVVk3T3pzN08wZEJTMGM3UVVGRFNDeEpRVUZOTEdsQ1FVRnBRaXhIUVVGSExGVkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFXTTdTVUZEY0VRc1YwRkJWenRKUVVOWUxFbEJRVTBzVFVGQlRTeEhRVUYxUXl4RlFVRkZMRU5CUVVNN1NVRkRkRVFzVDBGQlR6dEpRVU5RTEVsQlFVa3NSMEZCUnl4SFFVRkhMRTFCUVUwc1EwRkJRenRKUVVWcVFpeHRRa0ZCYlVJN1NVRkRia0lzU1VGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEpRVU42UXl4WlFVRlpPMGxCUTFvc1NVRkJTU3hSUVVGUkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNSVUZCUlR0UlFVTjZRaXhQUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tTzFOQlFVMDdVVUZEVEN3eVFrRkJNa0k3VVVGRE0wSXNTVUZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJReXhGUVVGRk8xbEJRemRETEZGQlFWRXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOb1FqdExRVU5HTzBsQlJVUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXh2UTBGQmIwTXNSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVNeFJDeFpRVUZaTzBsQlExb3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExFdEJRVXM3VVVGRGNrSXNZVUZCWVR0UlFVTmlMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGRrTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1UwRkRVRHRKUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJVZ3NiMEpCUVc5Q08wbEJRM0JDTEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJoQ0xFTkJRVU1zUTBGQlF6dEJRVVZHT3pzN08wZEJTVWM3UVVGRFNDeEpRVUZOTEdWQlFXVXNSMEZCUnl4VlFVRkRMRkZCUVdkQ0xFVkJRVVVzVjBGQmJVSTdPMGxCUXpWRUxHVkJRV1U3U1VGRFppeFBRVUZQTzBsQlExQXNVVUZCVVR0SlFVTlNMR0ZCUVdFN1NVRkRZaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRM3BETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03U1VGRGRFSXNTVUZCVFN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRkwwTXNTVUZCVFN4UlFVRlJMR1ZCUVVjc1VVRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXd3UTBGQlJ5eERRVUZETEc5RFFVRkxMRVZCUVVVc1EwRkJRenRKUVVOb1JTeEpRVUZOTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVTnFSQ3hKUVVGTkxFZEJRVWNzUjBGQlRTeFJRVUZSTEhOQ1FVRnBRaXhUUVVGVExFZEJRVWNzVFVGQlRTeE5RVUZITEVOQlFVTTdTVUZGT1VRc1NVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlRsQ0xFbEJRVTBzU1VGQlNTeGxRVUZYTEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNNRU5CUVVjc1EwRkJReXh2UTBGQlN5eFJRVUZSTEVOQlFVTTdTVUZEZUVVc1NVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeFBRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExEQkRRVUZITEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJUbEZMRmxCUVZrN1NVRkRXaXhQUVVGUE8xRkJRMHdzUjBGQlJ5eExRVUZCTzFGQlEwZ3NTVUZCU1N4TlFVRkJPMUZCUTBvc1RVRkJUU3hSUVVGQk8wdEJRMUFzUTBGQlF6dEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFVVkdPenM3TzBkQlNVYzdRVUZEU0N4SlFVRk5MR0ZCUVdFc1IwRkJSeXhWUVVGRExFZEJRVmNzUlVGQlJTeEhRVUZYTzBsQlF6ZERMR1ZCUVdVN1NVRkRaaXhQUVVGUE8wbEJRMUFzVFVGQlRUdEpRVU5PTEU5QlFVODdTVUZEVUN4dlJFRkJiMFE3U1VGRGNFUXNUVUZCVFR0SlFVTk9MR2xDUVVGcFFqdEpRVU5xUWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTJwRExIVkNRVUYxUWp0SlFVTjJRaXhKUVVGTkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzBsQlEzcERMRWxCUVUwc1NVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTjJRaXhKUVVGTkxFVkJRVVVzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03U1VGRmFFUXNTVUZCVFN4UFFVRlBMRWRCUVdkQ08xRkJRek5DTEUxQlFVMHNSVUZCUlN4SFFVRkhPMUZCUTFnc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hGUVVGRkxFbEJRVWs3VVVGRFZpeEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOcVFpdzBRa0ZCTkVJN1VVRkROVUlzUlVGQlJTeEZRVUZGTEVWQlFVVTdVVUZEVGl4TlFVRk5MRVZCUVVVc1JVRkJSVHRMUVVOWUxFTkJRVU03U1VGRlJpeFpRVUZaTzBsQlExb3NUMEZCVHl4UFFVRlBMRU5CUVVNN1FVRkRha0lzUTBGQlF5eERRVUZETzBGQlJVWXNhMEpCUVdVc1QwRkJUeXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIHJlYWRTaXRhcmFiYV8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlYWRTaXRhcmFiYVwiKSk7IC8vIOOBl+OBn+OCieOBsOiqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xudmFyIFJlYWQ1Y2hfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9SZWFkNWNoXCIpKTsgLy8gNWNo5LqS5o+b5p2/6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXG52YXIgc2l0YXJhYmEgPSBuZXcgcmVhZFNpdGFyYWJhXzEuZGVmYXVsdCgpO1xudmFyIHJlYWQ1Y2ggPSBuZXcgUmVhZDVjaF8xLmRlZmF1bHQoKTtcbi8vIOaOsuekuuadv+iqreOBv+i+vOOBv+ODouOCuOODpeODvOODq+OAgeS4gOW6puaxuuWumuOBl+OBn+OCieS9v+OBhOOBvuOCj+OBmeOBn+OCgeOBq+OCsOODreODvOODkOODq+Wuo+iogFxudmFyIGJic01vZHVsZSA9IG51bGw7XG4vKipcbiAqIOaOsuekuuadv+OBruODrOOCueOCkuWPluW+l+OBmeOCi1xuICogQHBhcmFtIHRocmVhZFVybCDjgrnjg6zjga5VUkxcbiAqIEBwYXJhbSByZXNOdW0g44GT44Gu55Wq5Y+35Lul6ZmN44KS5Y+W5b6X44GZ44KL44CC5oyH5a6a44GX44Gq44GE5aC05ZCI44Gv5pyA5pawMeS7tuOCkuWPluW+l+OAglxuICovXG5leHBvcnRzLmdldFJlcyA9IGZ1bmN0aW9uICh0aHJlYWRVcmwsIHJlc051bSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2UsIGVfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBbZ2V0UmVzXSAke3RocmVhZFVybH0gJHtyZXNOdW19YCk7XG4gICAgICAgICAgICAgICAgLy8g44Oq44Kv44Ko44K544OIVVJM44KS6Kej5p6Q44GX44CB5L2/55So44GZ44KL44Oi44K444Ol44O844Or44KS5aSJ5pu044GZ44KLXG4gICAgICAgICAgICAgICAgYmJzTW9kdWxlID0gYW5hbHlzQkJTTmFtZSh0aHJlYWRVcmwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJic01vZHVsZS5yZWFkKHRocmVhZFVybCwgcmVzTnVtKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFtnZXRSZXMuanNdIGZldGNoICR7dGhyZWFkVXJsfSByZXNOdW0gPSAke3Jlc051bX0sIHJlc3VsdCA9ICR7cmVzcG9uc2UubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZS5tYXAoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXMpLCB7IGltZ1VybDogJycgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbXV07XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLmdldFRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNpdGFyYWJhRG9tYWluO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHNpdGFyYWJhRG9tYWluID0gJ2piYnMuc2hpdGFyYWJhLm5ldCc7XG4gICAgICAgICAgICAgICAgaWYgKCEoYm9hcmRVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVhZFNpdGFyYWJhXzEucmVhZEJvYXJkKGJvYXJkVXJsKV07XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIFJlYWQ1Y2hfMS5yZWFkQm9hcmQoYm9hcmRVcmwpXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0cy5wb3N0UmVzcG9uc2UgPSBmdW5jdGlvbiAoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2l0YXJhYmFEb21haW47XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKFwiW3Bvc3RSZXNwb25zZV0gXCIgKyBob3N0bmFtZSArIFwiIFwiICsgdGhyZWFkTnVtYmVyICsgXCIgXCIgKyBib2FyZElkKTtcbiAgICAgICAgICAgICAgICBzaXRhcmFiYURvbWFpbiA9ICdqYmJzLnNoaXRhcmFiYS5uZXQnO1xuICAgICAgICAgICAgICAgIGlmICghKGhvc3RuYW1lLmluZGV4T2Yoc2l0YXJhYmFEb21haW4pICE9PSAtMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlYWRTaXRhcmFiYV8xLnBvc3RSZXMoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSldO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgIC8vIFVSTOOBq+OBl+OBn+OCieOBsOODieODoeOCpOODs+WQjeOBjOWFpeOBo+OBpuOCjOOBsOOBl+OBn+OCieOBsFxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIFJlYWQ1Y2hfMS5wb3N0UmVzKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLypcbiAqIFVSTOOCkuOBv+OBpuOBqeOBk+OBrkJCU+OBi+WIpOWumuOBl+OBpuS9v+eUqOOBmeOCi+ODouOCuOODpeODvOODq+OCkui/lOWNtOOBmeOCi1xuICovXG52YXIgYW5hbHlzQkJTTmFtZSA9IGZ1bmN0aW9uICh0aHJlYWRVcmwpIHtcbiAgICAvLyDjgZfjgZ/jgonjgbDjg4njg6HjgqTjg7PlkI1cbiAgICB2YXIgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcbiAgICAvLyDjgZPjgpPjgarmhJ/jgZjjgaflv4XopoHjgavlv5zjgZjjgablopfjgoTjgZfjgabjgYTjgZHjgbDjgYTjgYTjgpPjgZjjgoPjga3vvJ9cbiAgICAvLyBjb25zdCBkb2trYW5vQkJTID0gJ2Rva2thLmJicy5jb20nO1xuICAgIGlmICh0aHJlYWRVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSB7XG4gICAgICAgIC8vIFVSTOOBq+OBl+OBn+OCieOBsOODieODoeOCpOODs+WQjeOBjOWFpeOBo+OBpuOCjOOBsOOBl+OBn+OCieOBsFxuICAgICAgICByZXR1cm4gc2l0YXJhYmE7XG4gICAgfVxuICAgIC8vIOOBqeOBk+OBq+OCguipsuW9k+OBl+OBquOBi+OBo+OBn+OCieOBqOOCiuOBguOBiOOBmjVjaOOBp1xuICAgIC8vIOOBk+OBrui+uuOCguWvvuW/nOODieODoeOCpOODs+ODquOCueODiOOBqOOBi+S9nOOBo+OBpuOBoeOCg+OCk+OBqOWIpOWumuOBl+OBn+OBu+OBhuOBjOOCiOOBleOBneOBhlxuICAgIHJldHVybiByZWFkNWNoO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyVjBVbVZ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laMlYwVW1WekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNPRVJCUVN0Q08wRkJSUzlDTERaRVFVRTBSeXhEUVVGRExHbENRVUZwUWp0QlFVTTVTQ3h0UkVGQmMwWXNRMEZCUXl4dFFrRkJiVUk3UVVGRE1VY3NTVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3h6UWtGQldTeEZRVUZGTEVOQlFVTTdRVUZEY0VNc1NVRkJUU3hQUVVGUExFZEJRVWNzU1VGQlNTeHBRa0ZCVHl4RlFVRkZMRU5CUVVNN1FVRkRPVUlzYzBOQlFYTkRPMEZCUTNSRExFbEJRVWtzVTBGQlV5eEhRVUZuUXl4SlFVRlhMRU5CUVVNN1FVRkZla1E3T3pzN1IwRkpSenRCUVVOVkxGRkJRVUVzVFVGQlRTeEhRVUZITEZWQlFVOHNVMEZCYVVJc1JVRkJSU3hOUVVGak96czdPenM3WjBKQlJURkVMR3RFUVVGclJEdG5Ra0ZGYkVRc09FSkJRVGhDTzJkQ1FVTTVRaXhUUVVGVExFZEJRVWNzWVVGQllTeERRVUZETEZOQlFWTXNRMEZCVVN4RFFVRkRPMmRDUVVjelFpeHhRa0ZCVFN4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUlVGQlJTeE5RVUZOTEVOQlFVTXNSVUZCUVRzN1owSkJRV3hFTEZGQlFWRXNSMEZCUnl4VFFVRjFRenRuUWtGRGVFUXNhVWRCUVdsSE8yZENRVVZxUnl4elFrRkJUeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFVTXNSMEZCUnp0M1FrRkRkRUlzTmtKQlEwc3NSMEZCUnl4TFFVTk9MRTFCUVUwc1JVRkJSU3hGUVVGRkxFbEJRMVk3YjBKQlEwb3NRMEZCUXl4RFFVRkRMRVZCUVVNN096dG5Ra0ZGU0N4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRZaXh6UWtGQlR5eEZRVUZGTEVWQlFVTTdPenM3UzBGRllpeERRVUZETzBGQlJWY3NVVUZCUVN4aFFVRmhMRWRCUVVjc1ZVRkJUeXhSUVVGblFqczdPenM3WjBKQlF6VkRMR05CUVdNc1IwRkJSeXh2UWtGQmIwSXNRMEZCUXp0eFFrRkRlRU1zUTBGQlFTeFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZCTEVWQlFYWkRMSGRDUVVGMVF6dG5Ra0ZIYkVNc2NVSkJRVTBzZDBKQlFXdENMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVUU3TzFsQlJucERMREJDUVVFd1FqdFpRVU14UWl4RlFVRkZPMWxCUTBZc2MwSkJRVThzVTBGQmEwTXNSVUZCUXp0dlFrRkZia01zY1VKQlFVMHNiVUpCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlFUdHZRa0ZCYmtNc2MwSkJRVThzVTBGQk5FSXNSVUZCUXpzN08wdEJSWFpETEVOQlFVTTdRVUZGVnl4UlFVRkJMRmxCUVZrc1IwRkJSeXhWUVVGUExGRkJRV2RDTEVWQlFVVXNXVUZCYjBJc1JVRkJSU3hQUVVGbExFVkJRVVVzVDBGQlpUczdPenM3WjBKQlEzcEhMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEc5Q1FVRnJRaXhSUVVGUkxGTkJRVWtzV1VGQldTeFRRVUZKTEU5QlFWTXNRMEZCUXl4RFFVRkRPMmRDUVVVMVJDeGpRVUZqTEVkQlFVY3NiMEpCUVc5Q0xFTkJRVU03Y1VKQlEzaERMRU5CUVVFc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZqTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRU3hGUVVGMlF5eDNRa0ZCZFVNN1owSkJSV3hETEhGQ1FVRk5MSE5DUVVGblFpeERRVUZETEZGQlFWRXNSVUZCUlN4WlFVRlpMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eEZRVUZCT3p0WlFVUjJSU3d3UWtGQk1FSTdXVUZETVVJc2MwSkJRVThzVTBGQlowVXNSVUZCUXp0dlFrRkZha1VzY1VKQlFVMHNhVUpCUVZVc1EwRkJReXhSUVVGUkxFVkJRVVVzV1VGQldTeEZRVUZGTEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1JVRkJRVHR2UWtGQmFrVXNjMEpCUVU4c1UwRkJNRVFzUlVGQlF6czdPMHRCUlhKRkxFTkJRVU03UVVGRlJqczdSMEZGUnp0QlFVTklMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zVTBGQmFVSTdTVUZEZEVNc1dVRkJXVHRKUVVOYUxFbEJRVTBzWTBGQll5eEhRVUZITEc5Q1FVRnZRaXhEUVVGRE8wbEJRelZETERaQ1FVRTJRanRKUVVNM1FpeHpRMEZCYzBNN1NVRkZkRU1zU1VGQlNTeFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTzFGQlF6VkRMREJDUVVFd1FqdFJRVU14UWl4UFFVRlBMRkZCUVZFc1EwRkJRenRMUVVOcVFqdEpRVU5FTEhkQ1FVRjNRanRKUVVONFFpeHZRMEZCYjBNN1NVRkRjRU1zVDBGQlR5eFBRVUZQTEVOQlFVTTdRVUZEYWtJc1EwRkJReXhEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIOOBl+OBn+OCieOBsOiqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xuICovXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xudmFyIGljb252X2xpdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKSk7IC8vIOaWh+Wtl+OCs+ODvOODieWkieaPm+eUqOODkeODg+OCseODvOOCuFxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIGVuY29kaW5nX2phcGFuZXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVuY29kaW5nLWphcGFuZXNlXCIpKTtcbi8qKiDjgrnjg6zkuIDopqfjgpLoqq3jgb/ovrzjgoAgKi9cbmV4cG9ydHMucmVhZEJvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXF1ZXN0VXJsLCBsaXN0LCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSBib2FyZFVybCArIFwic3ViamVjdC50eHRcIjtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdFVUMtSlAnKTtcbiAgICAgICAgICAgICAgICAvLyDjg5Hjg7zjgrnjgZfjgabmoLzntI1cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2guYXBwbHkobGlzdCwgc3RyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gcGFyc2VUaHJlYWRMaXN0KGJvYXJkVXJsLCBsaW5lKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBbWVzc2FnZT0nICsgZXJyb3JfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8qKlxuICog44Os44K544KS5oqV56i/44GZ44KLXG4gKiBAcGFyYW0gaG9zdG5hbWUg44Ob44K544OI5ZCN44CCaHR0cHM6Ly9ob2dlaG9nZS9cbiAqIEBwYXJhbSB0aHJlYWROdW1iZXIg44K544Os55Wq5Y+3IDEyMzQ1Njc4XG4gKiBAcGFyYW0gYm9hcmRJZCDmnb9JRCBwYXN0YTA0XG4gKiBAcGFyYW0gbWVzc2FnZSDmipXnqL/mlodcbiAqL1xuZXhwb3J0cy5wb3N0UmVzID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVuaWNvZGVBcnJheSwgaSwgc2ppc0FycmF5LCBlbmNvZGVkS2V5d29yZCwgZGlyLCBiYnM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdW5pY29kZUFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdW5pY29kZUFycmF5LnB1c2gobWVzc2FnZS5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2ppc0FycmF5ID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LmNvbnZlcnQodW5pY29kZUFycmF5LCB7XG4gICAgICAgICAgICAgICAgICAgIHRvOiAnRVVDSlAnLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAnVU5JQ09ERScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZW5jb2RlZEtleXdvcmQgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQudXJsRW5jb2RlKHNqaXNBcnJheSk7XG4gICAgICAgICAgICAgICAgZGlyID0gYm9hcmRJZC5zcGxpdCgnLycpWzBdO1xuICAgICAgICAgICAgICAgIGJicyA9IGJvYXJkSWQuc3BsaXQoJy8nKVsxXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQucG9zdChob3N0bmFtZSArIFwiYmJzL3dyaXRlLmNnaS9cIiArIGJvYXJkSWQgKyBcIi9cIiArIHRocmVhZE51bWJlciArIFwiL1wiLCBcImRpcj1cIiArIGRpciArIFwiJmJicz1cIiArIGJicyArIFwiJmtleT1cIiArIHRocmVhZE51bWJlciArIFwiJnRpbWU9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFwiJm5hbWU9Jm1haWw9c2FnZSZNRVNTQUdFPVwiICsgZW5jb2RlZEtleXdvcmQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICcqLyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAsIGRlZmxhdGUsIGJyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWZlcmVyOiBcIlwiICsgaG9zdG5hbWUgKyBib2FyZElkICsgXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vKipcbiAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICovXG52YXIgUmVhZFNpdGFyYWJhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWRTaXRhcmFiYSgpIHtcbiAgICAgICAgLy8gY29uc3RydWN0b3IoKSB7fVxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICog44Os44K56Kqt44G/6L6844G/XG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiDlvJXmlbDjgafmjIflrprjgZfjgZ/mnb/jgYvjgonjg6zjgrnjgpLoqq3jgoDjgIJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIOODrOOCueeVquWPt+OCkuaMh+WumuOBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+acgOaWsDHku7blj5blvpdcbiAgICAgICAgICogQHBhcmFtIHRocmVhZFVybCDjgrnjg6xVUkxcbiAgICAgICAgICogQHBhcmFtIHJlc051bSDjg6zjgrnnlarlj7dcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uICh0aHJlYWRVcmwsIHJlc051bSkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcXVlc3RVcmwsIG9wdGlvbnMsIHJlc3BvbnNlLCBzdHIsIHJlc3BvbnNlSnNvbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB0aHJlYWRVcmwucmVwbGFjZSgncmVhZC5jZ2knLCAncmF3bW9kZS5jZ2knKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNOdW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K555Wq5Y+344GM44GC44KL5aC05ZCI44Os44K555Wq5Y+35Lul6ZmN44KS5Y+W5b6XXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCArPSByZXNOdW0gKyAnLSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjgrnnlarlj7fjgYzjgarjgYTloLTlkIjmnIDmlrDjga4x5Lu25Y+W5b6XXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCArPSAnbDEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBkZWNvZGVVbmljb2RlU3RyKGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ0VVQy1KUCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSnNvbiA9IHB1cnNlTmV3UmVzcG9uc2Uoc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZUpzb25dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWRTaXRhcmFiYTtcbn0oKSk7XG4vKipcbiAqIOWPluW+l+OBl+OBn+ODrOOCueODneODs+OCue+8iOikh+aVsO+8ieOBruODkeODvOOCuVxuICogQHBhcmFtIHJlc1xuICovXG52YXIgcHVyc2VOZXdSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAvL+e1kOaenOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyDmlrDnnYDjg6zjgrnjgpLmlLnooYzjgZTjgajjgatTcGxpdOOBmeOCi1xuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcbiAgICAvLyAx6KGM44GU44Go44Gr44OR44O844K544GZ44KLXG4gICAgcmVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgLy8g44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwdXJzZVJlc3BvbnNlKHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICog44K544Os5LiA6Kan44Gu44OR44O844K5XG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XG4gKiBAcGFyYW0gSW50ZWdlciAvLyBudW0g44Os44K555Wq77yIMOOCueOCv+ODvOODiO+8iVxuICovXG52YXIgcGFyc2VUaHJlYWRMaXN0ID0gZnVuY3Rpb24gKGJvYXJkVXJsLCBzdWJqZWN0TGluZSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgLy9BUEnjga7ov5TljbTlgKTjgpI8PuOBp+WIhuWJslxuICAgIC8v44Os44K544Gu6KaB57SgXG4gICAgLy8wOmRhdOWQjVxuICAgIC8vMTrjgrnjg6zjgr/jgqTvvIjjg6zjgrnmlbDvvIlcbiAgICB2YXIgc3BsaXRSZXMgPSBzdWJqZWN0TGluZS5zcGxpdCgnLCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHNwbGl0UmVzKTtcbiAgICB2YXIgZGF0TnVtID0gc3BsaXRSZXNbMF0ucmVwbGFjZSgnLmNnaScsICcnKTtcbiAgICB2YXIgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSBib2FyZFVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICB2YXIgYm9hcmROYW1lID0gYm9hcmRVcmwucmVwbGFjZShob3N0bmFtZSwgJycpO1xuICAgIHZhciB1cmwgPSBob3N0bmFtZSArIFwiYmJzL3JlYWQuY2dpL1wiICsgYm9hcmROYW1lICsgZGF0TnVtICsgXCIvXCI7XG4gICAgLy8gbG9nLmluZm8oYCR7aG9zdG5hbWV9ICAke2JvYXJkTmFtZX0gJHtkYXROdW19YCk7XG4gICAgdmFyIHRpdGxlVGVtcCA9IHNwbGl0UmVzWzFdO1xuICAgIHZhciBuYW1lID0gKF9kID0gKF9jID0gdGl0bGVUZW1wLm1hdGNoKC8oLio/KVxcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1sxXSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJ+KYheWPluW+l+WkseaVl+KYhSc7XG4gICAgdmFyIHJlc051bSA9IE51bWJlcigoX2UgPSB0aXRsZVRlbXAubWF0Y2goL1xcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVswXS5yZXBsYWNlKC9cXCh8XFwpL2csICcnKSk7XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHJlc051bTogcmVzTnVtLFxuICAgIH07XG59O1xuLyoqXG4gKiDjg6zjgrnjg53jg7Pjgrnjga7jg5Hjg7zjgrlcbiAqIEpzb27jgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbTjgZnjgotcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcbiAqL1xudmFyIHB1cnNlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgLy9BUEnjga7ov5TljbTlgKTjgpI8PuOBp+WIhuWJslxuICAgIC8v44Os44K544Gu6KaB57SgXG4gICAgLy8wOuODrOOCueeVquWPt1xuICAgIC8vMTrlkI3liY1cbiAgICAvLzI644Oh44Ki44OJXG4gICAgLy8zOuaXpeS7mFxuICAgIC8vNDrmnKzmlodcbiAgICAvLzU644K544Os44K/44KkXG4gICAgLy82OklEXG4gICAgdmFyIHNwbGl0UmVzID0gcmVzLnNwbGl0KCc8PicpO1xuICAgIHZhciByZXNKc29uID0ge1xuICAgICAgICBudW1iZXI6IE51bWJlcihzcGxpdFJlc1swXSksXG4gICAgICAgIG5hbWU6IHNwbGl0UmVzWzFdLFxuICAgICAgICBlbWFpbDogc3BsaXRSZXNbMl0sXG4gICAgICAgIGRhdGU6IHNwbGl0UmVzWzNdLFxuICAgICAgICB0ZXh0OiBzcGxpdFJlc1s0XSxcbiAgICAgICAgLy8gdGhyZWFkVGl0bGU6IHNwbGl0UmVzWzVdLFxuICAgICAgICBpZDogc3BsaXRSZXNbNl0sXG4gICAgICAgIGltZ1VybDogJycsXG4gICAgfTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcbiAgICByZXR1cm4gcmVzSnNvbjtcbn07XG4vKiog44GX44Gf44KJ44Gw44Gg44GR44Gv5YWo6KeS44OA44OD44K344Ol44GMVW5pY29kZeaWh+Wtl+WIl+OBqOOBl+OBpuagvOe0jeOBleOCjOOCi+OBruOBp+WkieaPm+OBmeOCiyAqL1xudmFyIGRlY29kZVVuaWNvZGVTdHIgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIzY1Mzc0Oy9nLCAn772eJyk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVhZFNpdGFyYWJhO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WaFpGTnBkR0Z5WVdKaExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY21WaFpGTnBkR0Z5WVdKaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRTdPMGRCUlVjN1FVRkRTQ3huUkVGQmEwUTdRVUZEYkVRc01FUkJRU3RDTEVOQlFVTXNaMEpCUVdkQ08wRkJRMmhFTERoRVFVRXJRanRCUVVVdlFpeDNSVUZCZVVNN1FVRkZla01zWjBKQlFXZENPMEZCUTBnc1VVRkJRU3hUUVVGVExFZEJRVWNzVlVGQlR5eFJRVUZuUWpzN096czdaMEpCUTNoRExGVkJRVlVzUjBGQlRTeFJRVUZSTEdkQ1FVRmhMRU5CUVVNN1owSkJRM1JETEVsQlFVa3NSMEZCZVVNc1JVRkJSU3hEUVVGRE8yZENRVWRvUkN4UFFVRlBMRWRCUVhWQ08yOUNRVU5zUXl4SFFVRkhMRVZCUVVVc1ZVRkJWVHR2UWtGRFppeE5RVUZOTEVWQlFVVXNTMEZCU3p0dlFrRkRZaXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVazdiMEpCUTJwQ0xGbEJRVmtzUlVGQlJTeGhRVUZoTzJsQ1FVTTFRaXhEUVVGRE96czdPMmRDUVVscFFpeHhRa0ZCVFN4bFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVUU3TzJkQ1FVRXZRaXhSUVVGUkxFZEJRVWNzVTBGQmIwSTdaMEpCVHk5Q0xFZEJRVWNzUjBGQlJ5eHZRa0ZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc1ZVRkJWVHRuUWtGRFZpeEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlVMRWxCUVVrc1JVRkRReXhIUVVGSE8zRkNRVU5JTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN2NVSkJRMWdzVFVGQlRTeERRVUZETEZWQlFVTXNTVUZCU1N4SlFVRkxMRTlCUVVFc1NVRkJTU3hGUVVGS0xFTkJRVWtzUTBGQlF6dHhRa0ZEZEVJc1IwRkJSeXhEUVVGRExGVkJRVU1zU1VGQlNTeEpRVUZMTEU5QlFVRXNaVUZCWlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQkwwSXNRMEZCSzBJc1EwRkJReXhGUVVOcVJEczdPenRuUWtGRlJpeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXcwUTBGQk5FTXNSMEZCUnl4UFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEzaEZMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenR2UWtGSGRFTXNjMEpCUVU4c1NVRkJTU3hGUVVGRE96czdTMEZEWWl4RFFVRkRPMEZCUlVZN096czdPenRIUVUxSE8wRkJRMVVzVVVGQlFTeFBRVUZQTEVkQlFVY3NWVUZCVHl4UlFVRm5RaXhGUVVGRkxGbEJRVzlDTEVWQlFVVXNUMEZCWlN4RlFVRkZMRTlCUVdVN096czdPMmRDUVVVNVJpeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVONFFpeExRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM1pETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFF6dG5Ra0ZEU3l4VFFVRlRMRWRCUVVjc01rSkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMjlDUVVNdlF5eEZRVUZGTEVWQlFVVXNUMEZCVHp0dlFrRkRXQ3hKUVVGSkxFVkJRVVVzVTBGQlV6dHBRa0ZEYUVJc1EwRkJReXhEUVVGRE8yZENRVU5ITEdOQlFXTXNSMEZCUnl3eVFrRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJSM1JFTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVVMVFpeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZiRU1zY1VKQlFVMHNaVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkRXQ3hSUVVGUkxITkNRVUZwUWl4UFFVRlBMRk5CUVVrc1dVRkJXU3hOUVVGSExFVkJRM1JFTEZOQlFVOHNSMEZCUnl4aFFVRlJMRWRCUVVjc1lVRkJVU3haUVVGWkxHTkJRVk1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc2FVTkJRVFJDTEdOQlFXZENMRVZCUTJ4SU8zZENRVU5GTEU5QlFVOHNSVUZCUlRzMFFrRkRVQ3hOUVVGTkxFVkJRVVVzUzBGQlN6czBRa0ZEWWl4alFVRmpMRVZCUVVVc2JVTkJRVzFET3pSQ1FVTnVSQ3hwUWtGQmFVSXNSVUZCUlN4dFFrRkJiVUk3TkVKQlEzUkRMRTlCUVU4c1JVRkJSU3hMUVVGSExGRkJRVkVzUjBGQlJ5eFBRVUZQTEUxQlFVYzdlVUpCUTJ4RE8zRkNRVU5HTEVOQlEwWXNSVUZCUVRzN1owSkJXRVFzVTBGWFF5eERRVUZET3pzN08wdEJRMGdzUTBGQlF6dEJRVVZHT3p0SFFVVkhPMEZCUTBnN1NVRkJRVHRSUVVORkxHMUNRVUZ0UWp0UlFVUnlRaXhwUWtGNVEwTTdVVUYwUTBNN096czdPenRYUVUxSE8xRkJRMGdzVTBGQlNTeEhRVUZITEZWQlFVOHNVMEZCYVVJc1JVRkJSU3hOUVVGak96czdPenQzUWtGTmVrTXNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEdGQlFXRXNRMEZCUXl4RFFVRkRPM2RDUVVNNVJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN05FSkJRMlFzY1VKQlFYRkNPelJDUVVOeVFpeFZRVUZWTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJRenQ1UWtGRE5VSTdOa0pCUVUwN05FSkJRMHdzYlVKQlFXMUNPelJDUVVOdVFpeFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRPM2xDUVVOd1FqdDNRa0ZKU3l4UFFVRlBMRWRCUVhWQ096UkNRVU5zUXl4SFFVRkhMRVZCUVVVc1ZVRkJWVHMwUWtGRFppeE5RVUZOTEVWQlFVVXNTMEZCU3pzMFFrRkRZaXhaUVVGWkxFVkJRVVVzWVVGQllUczBRa0ZETTBJc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTzNsQ1FVTnNRaXhEUVVGRE8zZENRVU5sTEhGQ1FVRk5MR1ZCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlFUczdkMEpCUVM5Q0xGRkJRVkVzUjBGQlJ5eFRRVUZ2UWp0M1FrRkZMMElzUjBGQlJ5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHOUNRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlJUTkZMRmxCUVZrc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRk0wTXNjMEpCUVU4c1dVRkJXU3hGUVVGRE96czdZVUZEY2tJc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGQlJDeHRRa0ZCUXp0QlFVRkVMRU5CUVVNc1FVRjZRMFFzU1VGNVEwTTdRVUZGUkRzN08wZEJSMGM3UVVGRFNDeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zUjBGQlZ6dEpRVU51UXl4WFFVRlhPMGxCUTFnc1NVRkJUU3hOUVVGTkxFZEJRWFZETEVWQlFVVXNRMEZCUXp0SlFVVjBSQ3h2UWtGQmIwSTdTVUZEY0VJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVONlF5eGhRVUZoTzBsQlEySXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExFdEJRVXM3VVVGRGNrSXNZMEZCWXp0UlFVTmtMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOdVF6dEpRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTBnc1QwRkJUeXhOUVVGTkxFTkJRVU03UVVGRGFFSXNRMEZCUXl4RFFVRkRPMEZCUlVZN096czdSMEZKUnp0QlFVTklMRWxCUVUwc1pVRkJaU3hIUVVGSExGVkJRVU1zVVVGQlowSXNSVUZCUlN4WFFVRnRRanM3U1VGRE5VUXNaVUZCWlR0SlFVTm1MRTlCUVU4N1NVRkRVQ3hSUVVGUk8wbEJRMUlzWVVGQllUdEpRVU5pTEVsQlFVMHNVVUZCVVN4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZUVNc2VVSkJRWGxDTzBsQlEzcENMRWxCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlJTOURMRWxCUVUwc1VVRkJVU3hsUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFFVXNTVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1FzU1VGQlRTeEhRVUZITEVkQlFVMHNVVUZCVVN4eFFrRkJaMElzVTBGQlV5eEhRVUZITEUxQlFVMHNUVUZCUnl4RFFVRkRPMGxCUXpkRUxHMUVRVUZ0UkR0SlFVVnVSQ3hKUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZPVUlzU1VGQlRTeEpRVUZKTEdWQlFWY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhSUVVGUkxFTkJRVU03U1VGRGRrVXNTVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hQUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMREJEUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSVGxGTEZsQlFWazdTVUZEV2l4UFFVRlBPMUZCUTB3c1IwRkJSeXhMUVVGQk8xRkJRMGdzU1VGQlNTeE5RVUZCTzFGQlEwb3NUVUZCVFN4UlFVRkJPMHRCUTFBc1EwRkJRenRCUVVOS0xFTkJRVU1zUTBGQlF6dEJRVVZHT3pzN08wZEJTVWM3UVVGRFNDeEpRVUZOTEdGQlFXRXNSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRhRU1zWlVGQlpUdEpRVU5tTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1RVRkJUVHRKUVVOT0xFOUJRVTg3U1VGRFVDeE5RVUZOTzBsQlEwNHNUVUZCVFR0SlFVTk9MRkZCUVZFN1NVRkRVaXhOUVVGTk8wbEJRMDRzU1VGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUXl4SlFVRk5MRTlCUVU4c1IwRkJSenRSUVVOa0xFMUJRVTBzUlVGQlJTeE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRek5DTEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTEV0QlFVc3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnhDTEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTERSQ1FVRTBRanRSUVVNMVFpeEZRVUZGTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVObUxFMUJRVTBzUlVGQlJTeEZRVUZGTzB0QlExZ3NRMEZCUXp0SlFVTkdMRmxCUVZrN1NVRkRXaXhQUVVGUExFOUJRVThzUTBGQlF6dEJRVU5xUWl4RFFVRkRMRU5CUVVNN1FVRkZSaXcyUTBGQk5rTTdRVUZETjBNc1NVRkJUU3huUWtGQlowSXNSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRia01zVDBGQlR5eEhRVUZITEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4RFFVRkRMRU5CUVVNN1FVRkZSaXhyUWtGQlpTeFpRVUZaTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIGdldFJlc18xID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuL2NvbnN0XCIpO1xudmFyIGlzR2V0dGluZyA9IGZhbHNlO1xudmFyIGdldFJlc0ludGVydmFsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmICghISgoX2IgPSAoX2EgPSBnbG9iYWxUaGlzID09PSBudWxsIHx8IGdsb2JhbFRoaXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdsb2JhbFRoaXMuZWxlY3Ryb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGhyZWFkLnVybCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWxfMS5zbGVlcCg1MDAwKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgIGdldFJlc0ludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBleHBvcnRzLnVwZGF0ZVJlcygpXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDUwMDApXTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgZ2V0UmVzSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZ2V0UmVzSW50ZXJ2YWwoKTtcbmV4cG9ydHMudXBkYXRlUmVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmV0Y2hSZXNOdW0sIGxhc3RSZXNOdW1fMSwgcmVzdWx0LCBuZXdSZXN1bHQsIGVfMTtcbiAgICB2YXIgX2E7XG4gICAgdmFyIF9iLCBfYywgX2QsIF9lO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGlmIChpc0dldHRpbmcpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICBpc0dldHRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfZi50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIGZldGNoUmVzTnVtID0gKF9jID0gKF9iID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0W2dsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGlzdC5sZW5ndGggLSAxXSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm51bWJlcikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogMTtcbiAgICAgICAgICAgICAgICBsYXN0UmVzTnVtXzEgPSAoX2UgPSAoX2QgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3RbZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0Lmxlbmd0aCAtIDFdKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QubnVtYmVyKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18xLmdldFJlcyhnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLnVybCwgZmV0Y2hSZXNOdW0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfZi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g5oyH5a6a44GX44Gf44Os44K555Wq44Gv6Zmk5aSW5a++6LGhXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwICYmIHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0ubnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Jlc3VsdCA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLm51bWJlciA+IGxhc3RSZXNOdW1fMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGlzdCkucHVzaC5hcHBseShfYSwgbmV3UmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Jlc3VsdC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERvbUZvckNoYXRXaW5kb3cobmV3UmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZV8xID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoZV8xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBpc0dldHRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0cy5jcmVhdGVEb20gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgIHZhciBkb21TdHIgPSBcIjxsaSBjbGFzcz1cXFwibGlzdC1pdGVtXFxcIj5cIjtcbiAgICBkb21TdHIgKz0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cIjtcbiAgICAvLyDjg6zjgrnnlarooajnpLpcbiAgICBkb21TdHIgKz0gXCJcXG4gICAgICA8c3BhbiBjbGFzcz1cXFwicmVzTnVtYmVyXFxcIj5cIiArIG1lc3NhZ2UubnVtYmVyICsgXCI8L3NwYW4+XFxuICAgIFwiO1xuICAgIC8vIOWQjeWJjeihqOekulxuICAgIGRvbVN0ciArPSBcIjxzcGFuIGNsYXNzPVxcXCJuYW1lXFxcIj5cIiArIG1lc3NhZ2UubmFtZSArIFwiPC9zcGFuPlwiO1xuICAgIC8vIOaZguWIu+ihqOekulxuICAgIGRvbVN0ciArPSBcIjxzcGFuIGNsYXNzPVxcXCJkYXRlXFxcIj5cIiArIG1lc3NhZ2UuZGF0ZSArIFwiPC9zcGFuPlwiO1xuICAgIGRvbVN0ciArPSAnPGJyLz4nO1xuICAgIGRvbVN0ciArPSBcIlxcbiAgICA8c3BhbiBjbGFzcz1cXFwicmVzXFxcIj5cXG4gICAgICBcIiArIG1lc3NhZ2UudGV4dFxuICAgICAgICAucmVwbGFjZSgvPGEgLio/Pi9nLCAnJykgLy8g44GX44Gf44KJ44Gw44Gv44Ki44Oz44Kr44O844KSYeOCv+OCsOWMluOBl+OBpuOBhOOCi1xuICAgICAgICAucmVwbGFjZSgvPFxcXFxhPi9nLCAnJykgKyBcIlxcbiAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9saT5cIjtcbiAgICByZXR1cm4gZG9tU3RyO1xufTtcbnZhciBzZW5kRG9tRm9yQ2hhdFdpbmRvdyA9IGZ1bmN0aW9uIChtZXNzYWdlTGlzdCkge1xuICAgIHZhciBkb21TdHIyID0gbWVzc2FnZUxpc3RcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICB2YXIgaW1nVXJsID0gbWVzc2FnZS5pbWdVcmwgJiYgbWVzc2FnZS5pbWdVcmwubWF0Y2goL15cXC4vKSA/ICcuLi8uLi9wdWJsaWMvJyArIG1lc3NhZ2UuaW1nVXJsIDogbWVzc2FnZS5pbWdVcmw7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbWVzc2FnZSksIHsgaW1nVXJsOiBpbWdVcmwgfSk7XG4gICAgfSlcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobWVzc2FnZSkgeyByZXR1cm4gZXhwb3J0cy5jcmVhdGVEb20obWVzc2FnZSk7IH0pXG4gICAgICAgIC5qb2luKCdcXG4nKTtcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LndlYkNvbnRlbnRzLnNlbmQoY29uc3RfMS5lbGVjdHJvbkV2ZW50WydzaG93LWNvbW1lbnQnXSwgeyBkb206IGRvbVN0cjIgfSk7XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0ge307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1JoY25SVFpYSjJaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnpkR0Z5ZEZObGNuWmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc09FUkJRU3RDTzBGQlF5OUNMQ3RDUVVFclFqdEJRVU12UWl3eVEwRkJORVE3UVVGRE5VUXNhVU5CUVhkRE8wRkJSWGhETEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVOMFFpeEpRVUZOTEdOQlFXTXNSMEZCUnpzN096czdjVUpCUldwQ0xHTkJRVU1zVlVGQlZTeGhRVUZXTEZWQlFWVXNkVUpCUVZZc1ZVRkJWU3hEUVVGRkxGRkJRVkVzTUVOQlFVVXNTVUZCU1N3d1EwRkJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZCTEVWQlFYWkRMSGRDUVVGMVF6dG5Ra0ZEZWtNc2NVSkJRVTBzV1VGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkJPenRuUWtGQmFrSXNVMEZCYVVJc1EwRkJRenRuUWtGRGJFSXNZMEZCWXl4RlFVRkZMRU5CUVVNN1owSkJRMnBDTEhOQ1FVRlBPMjlDUVVWVUxIRkNRVUZOTEdsQ1FVRlRMRVZCUVVVc1JVRkJRVHM3WjBKQlFXcENMRk5CUVdsQ0xFTkJRVU03WjBKQlJXeENMSEZDUVVGTkxGbEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUVRzN1owSkJRV3BDTEZOQlFXbENMRU5CUVVNN1owSkJRMnhDTEdOQlFXTXNSVUZCUlN4RFFVRkRPenM3TzB0QlEyeENMRU5CUVVNN1FVRkRSaXhqUVVGakxFVkJRVVVzUTBGQlF6dEJRVVZLTEZGQlFVRXNVMEZCVXl4SFFVRkhPenM3T3pzN08yZENRVU4yUWl4SlFVRkpMRk5CUVZNN2IwSkJRVVVzYzBKQlFVODdaMEpCUTNSQ0xGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdPenM3WjBKQlJWUXNWMEZCVnl4bFFVRlhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETERCRFFVRkZMRTFCUVUwc2JVTkJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTjZTQ3d5UWtGQllTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXd3UTBGQlJTeE5RVUZOTEcxRFFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRmRrY3NjVUpCUVUwc1pVRkJZeXhEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVRTdPMmRDUVVFdlJTeE5RVUZOTEVkQlFVY3NVMEZCYzBVN1owSkJRM0pHTEdWQlFXVTdaMEpCUTJZc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRMjVFTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVU1zUjBGQlJ5eEpRVUZMTEU5QlFVTXNSMEZCUnl4RFFVRkRMRTFCUVdsQ0xFZEJRVWNzV1VGQlZTeEZRVUZ1UXl4RFFVRnRReXhEUVVGRExFTkJRVU03YjBKQlF6bEZMRU5CUVVFc1MwRkJRU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGQkxFTkJRVU1zU1VGQlNTeFhRVUZKTEZOQlFWTXNSVUZCUlR0dlFrRkZlRVFzU1VGQlNTeFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNN2QwSkJRVVVzYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YVVKQlF6TkVPenM3TzJkQ1FVVkVMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRPenM3WjBKQlJXWXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenM3T3p0TFFVTnVRaXhEUVVGRE8wRkJSVmNzVVVGQlFTeFRRVUZUTEVkQlFVY3NWVUZCUXl4UFFVRnZRanRKUVVNMVF5eEpRVUZKTEUxQlFVMHNSMEZCUnl3d1FrRkJkMElzUTBGQlF6dEpRVVYwUXl4TlFVRk5MRWxCUVVrc2VVSkJRWFZDTEVOQlFVTTdTVUZGYkVNc1VVRkJVVHRKUVVOU0xFMUJRVTBzU1VGQlNTeDFRMEZEYjBJc1QwRkJUeXhEUVVGRExFMUJRVTBzYTBKQlEzcERMRU5CUVVNN1NVRkRTaXhQUVVGUE8wbEJRMUFzVFVGQlRTeEpRVUZKTERCQ1FVRnpRaXhQUVVGUExFTkJRVU1zU1VGQlNTeFpRVUZUTEVOQlFVTTdTVUZEZEVRc1QwRkJUenRKUVVOUUxFMUJRVTBzU1VGQlNTd3dRa0ZCYzBJc1QwRkJUeXhEUVVGRExFbEJRVWtzV1VGQlV5eERRVUZETzBsQlJYUkVMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU03U1VGRmJFSXNUVUZCVFN4SlFVRkpMSFZEUVVWS0xFOUJRVThzUTBGQlF5eEpRVUZKTzFOQlExZ3NUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eHhRa0ZCY1VJN1UwRkROME1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc2RVTkJSM1JDTEVOQlFVTTdTVUZGVUN4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOb1FpeERRVUZETEVOQlFVTTdRVUZGUml4SlFVRk5MRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNWMEZCTUVJN1NVRkRkRVFzU1VGQlRTeFBRVUZQTEVkQlFVY3NWMEZCVnp0VFFVTjRRaXhIUVVGSExFTkJRVU1zVlVGQlF5eFBRVUZQTzFGQlExZ3NTVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRha2dzTmtKQlEwc3NUMEZCVHl4TFFVTldMRTFCUVUwc1VVRkJRU3hKUVVOT08wbEJRMG9zUTBGQlF5eERRVUZETzFOQlEwUXNSMEZCUnl4RFFVRkRMRlZCUVVNc1QwRkJUeXhKUVVGTExFOUJRVUVzYVVKQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJiRUlzUTBGQmEwSXNRMEZCUXp0VFFVTndReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEWkN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETVVjc1EwRkJReXhEUVVGRE8wRkJSVVlzYTBKQlFXVXNSVUZCUlN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZnNcIikpO1xuZXhwb3J0cy5yZWFkV2F2RmlsZXMgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZzXzEuZGVmYXVsdC5yZWFkZGlyKHBhdGgsIGZ1bmN0aW9uIChlcnIsIGZpbGVzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgdmFyIGZpbGVMaXN0ID0gZmlsZXMuZmlsdGVyKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRXhpc3RGaWxlKHBhdGggKyAnLycgKyBmaWxlKSAmJiAvLipcXC53YXYkLy50ZXN0KGZpbGUpOyAvL+e1nuOCiui+vOOBv1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNvbHZlKGZpbGVMaXN0KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59O1xudmFyIGlzRXhpc3RGaWxlID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICB0cnkge1xuICAgICAgICBmc18xLmRlZmF1bHQuc3RhdFN5bmMoZmlsZSkuaXNGaWxlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufTtcbmV4cG9ydHMuc2xlZXAgPSBmdW5jdGlvbiAobXNlYykgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgbXNlYyk7IH0pOyB9O1xuZXhwb3J0cy5lc2NhcGVIdG1sID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1smJ2BcIjw+XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICAgICAgIFwiJ1wiOiAnJiN4Mjc7JyxcbiAgICAgICAgICAgICdgJzogJyYjeDYwOycsXG4gICAgICAgICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgICAgICAgICc8JzogJyZsdDsnLFxuICAgICAgICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAgIH1bbWF0Y2hdO1xuICAgIH0pO1xufTtcbmV4cG9ydHMudW5lc2NhcGVIdG1sID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXG4gICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAgICAgLnJlcGxhY2UoLyYjMDM5Oy9nLCBcIidcIilcbiAgICAgICAgLnJlcGxhY2UoLyYjMDQ0Oy9nLCAnLCcpXG4gICAgICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWRYUnBiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkluVjBhV3d1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdRVUZCUVN3d1EwRkJiMEk3UVVGRFVDeFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRkRMRWxCUVZrN1NVRkRka01zVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4VlFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTk8xRkJRMnBETEZsQlFVVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hGUVVGRkxGVkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVczdXVUZETVVJc1NVRkJTU3hIUVVGSE8yZENRVUZGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRaUVVOeVFpeEpRVUZOTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVU1zU1VGQlNUdG5Ra0ZEYWtNc1QwRkJUeXhYUVVGWExFTkJRVU1zU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUVHRaUVVONFJTeERRVUZETEVOQlFVTXNRMEZCUXp0WlFVTklMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dFJRVU53UWl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwd3NRMEZCUXl4RFFVRkRPMEZCUlVZc1NVRkJUU3hYUVVGWExFZEJRVWNzVlVGQlF5eEpRVUZaTzBsQlF5OUNMRWxCUVVrN1VVRkRSaXhaUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRTFCUVUwc1JVRkJSU3hEUVVGRE8xRkJRek5DTEU5QlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJJN1NVRkJReXhQUVVGUExFZEJRVWNzUlVGQlJUdFJRVU5hTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhSUVVGUk8xbEJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTTdTMEZEZWtNN1FVRkRTQ3hEUVVGRExFTkJRVU03UVVGRlZ5eFJRVUZCTEV0QlFVc3NSMEZCUnl4VlFVRkRMRWxCUVZrc1NVRkJTeXhQUVVGQkxFbEJRVWtzVDBGQlR5eERRVUZETEZWQlFVTXNUMEZCVHl4SlFVRkxMRTlCUVVFc1ZVRkJWU3hEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCZWtJc1EwRkJlVUlzUTBGQlF5eEZRVUZ1UkN4RFFVRnRSQ3hEUVVGRE8wRkJSVGxGTEZGQlFVRXNWVUZCVlN4SFFVRkhMRlZCUVVNc1RVRkJZenRKUVVOMlF5eEpRVUZKTEU5QlFVOHNUVUZCVFN4TFFVRkxMRkZCUVZFc1JVRkJSVHRSUVVNNVFpeFBRVUZQTEUxQlFVMHNRMEZCUXp0TFFVTm1PMGxCUTBRc1QwRkJUeXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlN4VlFVRkRMRXRCUVVzN1VVRkRka01zVDBGQlVUdFpRVU5PTEVkQlFVY3NSVUZCUlN4UFFVRlBPMWxCUTFvc1IwRkJSeXhGUVVGRkxGRkJRVkU3V1VGRFlpeEhRVUZITEVWQlFVVXNVVUZCVVR0WlFVTmlMRWRCUVVjc1JVRkJSU3hSUVVGUk8xbEJRMklzUjBGQlJ5eEZRVUZGTEUxQlFVMDdXVUZEV0N4SFFVRkhMRVZCUVVVc1RVRkJUVHRUUVVOS0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdTVUZEYmtJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFRDeERRVUZETEVOQlFVTTdRVUZGVnl4UlFVRkJMRmxCUVZrc1IwRkJSeXhWUVVGRExFZEJRVmM3U1VGRGRFTXNUMEZCVHl4SFFVRkhPMU5CUTFBc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZEY2tJc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZEY2tJc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZEZGtJc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZEZGtJc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVOQlFVTTdVMEZEZGtJc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFRaXhEUVVGRExFTkJRVU1pZlE9PSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24td2luZG93LXN0YXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVuY29kaW5nLWphcGFuZXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImljb252LWxpdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9