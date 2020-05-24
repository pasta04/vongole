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
var electron_json_storage_1 = __importDefault(__webpack_require__(/*! electron-json-storage */ "electron-json-storage"));
var electron_log_1 = __importDefault(__webpack_require__(/*! electron-log */ "electron-log"));
var electron_1 = __importDefault(__webpack_require__(/*! electron */ "electron"));
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
        var nowPath = electron_1.default.app.getAppPath();
        if (nowPath.includes('Contents/Resources/app.asar')) {
            nowPath = nowPath.replace('app.asar', '') + '../../../';
        }
        // const nowPath = path.resolve('')
        electron_log_1.default.info("[Config] path = " + nowPath);
        electron_json_storage_1.default.setDataPath(nowPath);
    }
    return Config;
}());
exports.default = new Config();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQTRDO0FBQzVDLDhEQUErQjtBQUMvQixzREFBZ0M7QUFFaEM7SUFDRTtRQVVBLGdCQUFXLEdBQUc7WUFDWiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFVLEVBQUUsSUFBUzs7Z0JBQzdDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBRyxJQUFJLENBQUMsU0FBUyxtQ0FBSSxFQUFFLENBQUM7WUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixhQUFhO1FBQ2Isa0JBQWEsR0FBRyxVQUFDLFNBQW9EO1lBQ25FLCtCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLEVBQUUsVUFBQyxHQUFHO2dCQUMxQyxNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBcEJBLGFBQWE7UUFDYixJQUFJLE9BQU8sR0FBRyxrQkFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsRUFBRTtZQUNuRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO1NBQ3pEO1FBQ0QsbUNBQW1DO1FBQ25DLHNCQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFtQixPQUFTLENBQUMsQ0FBQztRQUN2QywrQkFBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBYUgsYUFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUFFRCxrQkFBZSxJQUFJLE1BQU0sRUFBRSxDQUFDIn0=

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZDVjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWQ1Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILGdEQUFrRDtBQUNsRCwwREFBK0IsQ0FBQyxnQkFBZ0I7QUFDaEQsOERBQStCO0FBQy9CLHdFQUF5QztBQUV6QywrQkFBK0I7QUFDL0IsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLGVBQWU7QUFDZixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDdkIsYUFBYTtBQUNiLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUN0QixhQUFhO0FBQ2IsSUFBSSxZQUFZLEdBQWtCLElBQUksQ0FBQztBQUN2QyxhQUFhO0FBQ2IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLGdCQUFnQjtBQUNILFFBQUEsU0FBUyxHQUFHLFVBQU8sUUFBZ0I7Ozs7O2dCQUN4QyxVQUFVLEdBQU0sUUFBUSxnQkFBYSxDQUFDO2dCQUN0QyxJQUFJLEdBQXlDLEVBQUUsQ0FBQztnQkFHaEQsT0FBTyxHQUF1QjtvQkFDbEMsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJO29CQUNqQixZQUFZLEVBQUUsYUFBYTtpQkFDNUIsQ0FBQzs7OztnQkFJaUIscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFBOztnQkFBL0IsUUFBUSxHQUFHLFNBQW9CO2dCQU8vQixHQUFHLEdBQUcsb0JBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLFVBQVU7Z0JBQ1YsSUFBSSxDQUFDLElBQUksT0FBVCxJQUFJLEVBQ0Ms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

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRTZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwyQ0FBNEQ7QUFDNUQsaUNBQXdDO0FBRXhDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixJQUFNLGNBQWMsR0FBRzs7Ozs7cUJBRWpCLGNBQUMsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsSUFBSSwwQ0FBRSxNQUFNLENBQUMsR0FBRyxDQUFBLEVBQXZDLHdCQUF1QztnQkFDekMscUJBQU0sWUFBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBakIsU0FBaUIsQ0FBQztnQkFDbEIsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLHNCQUFPO29CQUVULHFCQUFNLGlCQUFTLEVBQUUsRUFBQTs7Z0JBQWpCLFNBQWlCLENBQUM7Z0JBRWxCLHFCQUFNLFlBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQWpCLFNBQWlCLENBQUM7Z0JBQ2xCLGNBQWMsRUFBRSxDQUFDOzs7O0tBQ2xCLENBQUM7QUFDRixjQUFjLEVBQUUsQ0FBQztBQUVKLFFBQUEsU0FBUyxHQUFHOzs7Ozs7O2dCQUN2QixJQUFJLFNBQVM7b0JBQUUsc0JBQU87Z0JBQ3RCLFNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7Z0JBRVQsV0FBVyxlQUFXLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLDBDQUFFLE1BQU0sbUNBQUksQ0FBQyxDQUFDO2dCQUN6SCwyQkFBYSxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUks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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vcmVhZEJCUy9SZWFkNWNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvZ2V0UmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvcmVhZFNpdGFyYWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N0YXJ0U2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVuY29kaW5nLWphcGFuZXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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N0c7Ozs7Ozs7Ozs7OztBQzlJOUI7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx3Q0FBd0Msa0NBQWtDLEVBQUUsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCO0FBQ0EsMkNBQTJDLHUvRDs7Ozs7Ozs7Ozs7QUNyRDNDLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZWxlY3Ryb25fanNvbl9zdG9yYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiKSk7XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgZWxlY3Ryb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb25cIikpO1xudmFyIENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25maWcoKSB7XG4gICAgICAgIHRoaXMuZ2V0Qm9hZExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LmdldCgnYm9hcmRMaXN0JywgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QgPSAoX2EgPSBkYXRhLmJvYXJkTGlzdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIOadv+S4gOimp+OCkuS/neWtmCAqL1xuICAgICAgICB0aGlzLnNhdmVCb2FyZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRMaXN0KSB7XG4gICAgICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LnNldCgnYm9hcmRMaXN0JywgeyBib2FyZExpc3Q6IGJvYXJkTGlzdCB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIOioreWumuODleOCoeOCpOODq+iqreOBv+i+vOOBv1xuICAgICAgICB2YXIgbm93UGF0aCA9IGVsZWN0cm9uXzEuZGVmYXVsdC5hcHAuZ2V0QXBwUGF0aCgpO1xuICAgICAgICBpZiAobm93UGF0aC5pbmNsdWRlcygnQ29udGVudHMvUmVzb3VyY2VzL2FwcC5hc2FyJykpIHtcbiAgICAgICAgICAgIG5vd1BhdGggPSBub3dQYXRoLnJlcGxhY2UoJ2FwcC5hc2FyJywgJycpICsgJy4uLy4uLy4uLyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc3Qgbm93UGF0aCA9IHBhdGgucmVzb2x2ZSgnJylcbiAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKFwiW0NvbmZpZ10gcGF0aCA9IFwiICsgbm93UGF0aCk7XG4gICAgICAgIGVsZWN0cm9uX2pzb25fc3RvcmFnZV8xLmRlZmF1bHQuc2V0RGF0YVBhdGgobm93UGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBDb25maWc7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IENvbmZpZygpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUTBFc1owWkJRVFJETzBGQlF6VkRMRGhFUVVFclFqdEJRVU12UWl4elJFRkJaME03UVVGRmFFTTdTVUZEUlR0UlFWVkJMR2RDUVVGWExFZEJRVWM3V1VGRFdpd3JRa0ZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzVlVGQlF5eExRVUZWTEVWQlFVVXNTVUZCVXpzN1owSkJRemRETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zVTBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4dFEwRkJTU3hGUVVGRkxFTkJRVU03V1VGRE5VUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU03VVVGRlJpeGhRVUZoTzFGQlEySXNhMEpCUVdFc1IwRkJSeXhWUVVGRExGTkJRVzlFTzFsQlEyNUZMQ3RDUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRk5CUVZNc1YwRkJRU3hGUVVGRkxFVkJRVVVzVlVGQlF5eEhRVUZITzJkQ1FVTXhReXhOUVVGTkxFZEJRVWNzUTBGQlF6dFpRVU5hTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTB3c1EwRkJReXhEUVVGRE8xRkJjRUpCTEdGQlFXRTdVVUZEWWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhyUWtGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRSUVVONFF5eEpRVUZKTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc05rSkJRVFpDTEVOQlFVTXNSVUZCUlR0WlFVTnVSQ3hQUVVGUExFZEJRVWNzVDBGQlR5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETzFOQlEzcEVPMUZCUTBRc2JVTkJRVzFETzFGQlEyNURMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEhGQ1FVRnRRaXhQUVVGVExFTkJRVU1zUTBGQlF6dFJRVU4yUXl3clFrRkJUeXhEUVVGRExGZEJRVmNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0SlFVTXZRaXhEUVVGRE8wbEJZVWdzWVVGQlF6dEJRVUZFTEVOQlFVTXNRVUYyUWtRc1NVRjFRa003UVVGRlJDeHJRa0ZCWlN4SlFVRkpMRTFCUVUwc1JVRkJSU3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZWxlY3Ryb25FdmVudCA9IHtcbiAgICAvKiog44K144O844OQ44O86LW35YuVICovXG4gICAgJ3N0YXJ0LXNlcnZlcic6ICdzdGFydC1zZXJ2ZXInLFxuICAgIC8qKiDjgqLjg6njg7zjg4jooajnpLogKi9cbiAgICAnc2hvdy1hbGVydCc6ICdzaG93LWFsZXJ0JyxcbiAgICAnc2hvdy1jb21tZW50JzogJ3Nob3ctY29tbWVudCcsXG4gICAgJ2NsZWFyLWNvbW1lbnQnOiAnY2xlYXItY29tbWVudCcsXG4gICAgLyoqIOOCteODvOODkOODvOi1t+WLleOBrui/lOS/oSAqL1xuICAgICdzdGFydC1zZXJ2ZXItcmVwbHknOiAnc3RhcnQtc2VydmVyLXJlcGx5JyxcbiAgICBNQUlOX0dFVF9FTEVDVFJPTl9EQVRBOiAnTUFJTl9HRVRfRUxFQ1RST05fREFUQScsXG4gICAgTUFJTl9TRVRfRUxFQ1RST05fREFUQTogJ01BSU5fU0VUX0VMRUNUUk9OX0RBVEEnLFxuICAgIC8qKiDmnb/jgpLov73liqAgKi9cbiAgICBNQUlOX0FERF9CT0FSRExJU1Q6ICdNQUlOX0FERF9CT0FSRExJU1QnLFxuICAgIC8qKiDjgrnjg6zkuIDopqfjgpLplovjgY8gKi9cbiAgICBNQUlOX0dFVF9USFJFQURfTElTVDogJ01BSU5fR0VUX1RIUkVBRF9MSVNUJyxcbiAgICAvKiog44K544Os44KS6ZaL44GPICovXG4gICAgTUFJTl9PUEVOX1RIUkVBRDogJ01BSU5fT1BFTl9USFJFQUQnLFxuICAgIC8qKiDmnb/kuIDopqfooajnpLogKi9cbiAgICBTSE9XX0JPQVJEX0xJU1Q6ICdTSE9XX0JPQVJEX0xJU1QnLFxuICAgIC8qKiDmm7jjgY3ovrzjgb8gKi9cbiAgICBNQUlOX1BPU1RfS0FLSUtPTUk6ICdNQUlOX1BPU1RfS0FLSUtPTUknLFxufTtcbmV4cG9ydHMua2V5Q29kZSA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgU0hJRlQ6IDE2LFxuICAgIENUUkw6IDE3LFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVjM1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmpiMjV6ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZoTEZGQlFVRXNZVUZCWVN4SFFVRkhPMGxCUXpOQ0xHRkJRV0U3U1VGRFlpeGpRVUZqTEVWQlFVVXNZMEZCWXp0SlFVVTVRaXhoUVVGaE8wbEJRMklzV1VGQldTeEZRVUZGTEZsQlFWazdTVUZGTVVJc1kwRkJZeXhGUVVGRkxHTkJRV003U1VGRE9VSXNaVUZCWlN4RlFVRkZMR1ZCUVdVN1NVRkZhRU1zWjBKQlFXZENPMGxCUTJoQ0xHOUNRVUZ2UWl4RlFVRkZMRzlDUVVGdlFqdEpRVVV4UXl4elFrRkJjMElzUlVGQlJTeDNRa0ZCZDBJN1NVRkRhRVFzYzBKQlFYTkNMRVZCUVVVc2QwSkJRWGRDTzBsQlEyaEVMRmRCUVZjN1NVRkRXQ3hyUWtGQmEwSXNSVUZCUlN4dlFrRkJiMEk3U1VGRmVFTXNZMEZCWXp0SlFVTmtMRzlDUVVGdlFpeEZRVUZGTEhOQ1FVRnpRanRKUVVVMVF5eFpRVUZaTzBsQlExb3NaMEpCUVdkQ0xFVkJRVVVzYTBKQlFXdENPMGxCUlhCRExGbEJRVms3U1VGRFdpeGxRVUZsTEVWQlFVVXNhVUpCUVdsQ08wbEJSV3hETEZkQlFWYzdTVUZEV0N4clFrRkJhMElzUlVGQlJTeHZRa0ZCYjBJN1EwRkRla01zUTBGQlF6dEJRVVZYTEZGQlFVRXNUMEZCVHl4SFFVRkhPMGxCUTNKQ0xFdEJRVXNzUlVGQlJTeEZRVUZGTzBsQlExUXNTMEZCU3l4RlFVRkZMRVZCUVVVN1NVRkRWQ3hKUVVGSkxFVkJRVVVzUlVGQlJUdERRVU5VTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gRWxlY3Ryb27jga7jg6Ljgrjjg6Xjg7zjg6tcbnZhciBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xudmFyIGVsZWN0cm9uXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImVsZWN0cm9uXCIpKTtcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIGVsZWN0cm9uX3dpbmRvd19zdGF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi13aW5kb3ctc3RhdGVcIikpO1xudmFyIGNvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbmZpZ1wiKSk7XG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuL2NvbnN0XCIpO1xudmFyIGdldFJlc18xID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XG52YXIgc3RhcnRTZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuL3N0YXJ0U2VydmVyXCIpO1xudmFyIGdldFJlc18yID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XG5jb25zb2xlLnRyYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vXG59O1xucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlcnIpO1xufSk7XG4vLyDjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PjgpLjgrPjg7Pjg4jjg63jg7zjg6vjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcbnZhciBhcHAgPSBlbGVjdHJvbl8xLmRlZmF1bHQuYXBwO1xuLy8g5aSa6YeN6LW35YuV6Ziy5q2iXG5pZiAoIWFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKCkpIHtcbiAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbYXBwXSBJdCBpcyB0ZXJtaW5hdGVkIGZvciBtdWx0aXBsZSBsYXVuY2hlcy4nKTtcbiAgICBhcHAucXVpdCgpO1xufVxuZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKCdbYXBwXSBzdGFydGVkJyk7XG5hcHAuYWxsb3dSZW5kZXJlclByb2Nlc3NSZXVzZSA9IHRydWU7XG52YXIgaWNvblBhdGggPSBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2ljb24ucG5nJyk7XG4vLyDjgrXjg7zjg5Djg7zotbfli5Xjg6Ljgrjjg6Xjg7zjg6tcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG52YXIgc3MgPSByZXF1aXJlKCcuL3N0YXJ0U2VydmVyJyk7XG5jb25zb2xlLnRyYWNlKHNzKTtcbi8vIOOCpuOCo+ODs+ODieOCpuOCkuS9nOaIkOOBmeOCi+ODouOCuOODpeODvOODq1xudmFyIEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbl8xLmRlZmF1bHQuQnJvd3NlcldpbmRvdztcbi8vIOODoeOCpOODs+OCpuOCo+ODs+ODieOCpuOBr0dD44GV44KM44Gq44GE44KI44GG44Gr44Kw44Ot44O844OQ44Or5a6j6KiAXG5nbG9iYWxUaGlzLmVsZWN0cm9uID0ge1xuICAgIHdpbmRvdzoge1xuICAgICAgICBtYWluV2luZG93OiBudWxsLFxuICAgICAgICBjaGF0V2luZG93OiBudWxsLFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBib2FyZExpc3Q6IFtdLFxuICAgICAgICBib2FyZDoge1xuICAgICAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICAgICAgdGhyZWFkTGlzdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIHRocmVhZDoge1xuICAgICAgICAgICAgdXJsOiBudWxsLFxuICAgICAgICAgICAgYm9hcmRJZDogbnVsbCxcbiAgICAgICAgICAgIHRocmVhZE51bWJlcjogbnVsbCxcbiAgICAgICAgICAgIGhvc3RuYW1lOiBudWxsLFxuICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4vLyDlhajjgabjga7jgqbjgqPjg7Pjg4njgqbjgYzplonjgZjjgZ/jgonntYLkuoZcbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gaWYgKHByb2Nlc3MucGxhdGZvcm0gIT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpO1xuICAgIC8vIH1cbn0pO1xuLy8gRWxlY3Ryb27jga7liJ3mnJ/ljJblrozkuoblvozjgavlrp/ooYxcbmFwcC5vbigncmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1haW5XaW5kb3dTdGF0ZSA9IGVsZWN0cm9uX3dpbmRvd19zdGF0ZV8xLmRlZmF1bHQoe1xuICAgICAgICBkZWZhdWx0V2lkdGg6IDcwMCxcbiAgICAgICAgZGVmYXVsdEhlaWdodDogNzIwLFxuICAgIH0pO1xuICAgIC8vIOOCpuOCo+ODs+ODieOCpuOCteOCpOOCuuOCku+8iOODleODrOODvOODoOOCteOCpOOCuuOCkuWQq+OBvuOBquOBhO+8ieioreWumlxuICAgIHZhciBtYWluV2luID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgICAgICAvLyDliY3lm57otbfli5XmmYLjga7jgpLlvqnlhYNcbiAgICAgICAgeDogbWFpbldpbmRvd1N0YXRlLngsXG4gICAgICAgIHk6IG1haW5XaW5kb3dTdGF0ZS55LFxuICAgICAgICB3aWR0aDogbWFpbldpbmRvd1N0YXRlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG1haW5XaW5kb3dTdGF0ZS5oZWlnaHQsXG4gICAgICAgIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxuICAgICAgICBpY29uOiBpY29uUGF0aCxcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2tpcFRhc2tiYXI6IHRydWUsXG4gICAgfSk7XG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cubWFpbldpbmRvdyA9IG1haW5XaW47XG4gICAgbWFpbldpbmRvd1N0YXRlLm1hbmFnZShtYWluV2luKTtcbiAgICBtYWluV2luLnNldFRpdGxlKCd2b25nb2xlJyk7XG4gICAgbWFpbldpbi5zZXRNZW51KG51bGwpO1xuICAgIC8vIOODrOODs+ODgOODqeODvOOBp+S9v+eUqOOBmeOCi2h0bWzjg5XjgqHjgqTjg6vjgpLmjIflrprjgZnjgotcbiAgICBtYWluV2luLmxvYWRVUkwoJ2ZpbGU6Ly8nICsgcGF0aF8xLmRlZmF1bHQucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMvaHRtbC9pbmRleC5odG1sJykpO1xuICAgIC8vIOOCpuOCo+ODs+ODieOCpuOBjOmWieOBmOOCieOCjOOBn+OCieOCouODl+ODquOCgue1guS6hlxuICAgIG1haW5XaW4ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIOeiuuiqjeODgOOCpOOCouODreOCsOOBp+OBr+OBhOOCkuOCr+ODquODg+OCr+OBl+OBn+OCiemWieOBmOOCi1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlbGVjdHJvbl8xLmRpYWxvZ1xuICAgICAgICAgICAgLnNob3dNZXNzYWdlQm94KG1haW5XaW4sIHtcbiAgICAgICAgICAgIHR5cGU6ICdxdWVzdGlvbicsXG4gICAgICAgICAgICBidXR0b25zOiBbJ1llcycsICdObyddLFxuICAgICAgICAgICAgLy8gdGl0bGU6ICcnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ+e1guS6huOBl+OBvuOBmeOBi++8nycsXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yZXNwb25zZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGFwcC5leGl0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIG1haW5XaW4ub24oJ2Nsb3NlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKCdbYXBwXSBjbG9zZScpO1xuICAgICAgICBhcHAuZXhpdCgpO1xuICAgIH0pO1xuICAgIC8vIOmWi+eZuuiAheODhOODvOODq+OCkumWi+OBj1xuICAgIC8vIG1haW5XaW4ud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XG4gICAgLy8g44K/44K544Kv44OI44Os44Kk44Gu6Kit5a6aXG4gICAgdmFyIHRyYXkgPSBudWxsO1xuICAgIGFwcC53aGVuUmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJheSA9IG5ldyBlbGVjdHJvbl8xLlRyYXkoaWNvblBhdGgpO1xuICAgICAgICB2YXIgY29udGV4dE1lbnUgPSBlbGVjdHJvbl8xLk1lbnUuYnVpbGRGcm9tVGVtcGxhdGUoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAn6Kit5a6aJyxcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluV2luLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICfjgrPjg6Hjg7Pjg4gnLFxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAn57WC5LqGJyxcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtYWluV2luLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgICB0cmF5LnNldFRvb2xUaXAoJ3ZvbmdvbGUnKTtcbiAgICAgICAgdHJheS5zZXRDb250ZXh0TWVudShjb250ZXh0TWVudSk7XG4gICAgICAgIC8vIOOCv+OCueOCr+ODiOODrOOCpOOCr+ODquODg+OCr+aZguOBruaMmeWLlVxuICAgICAgICB2YXIgaXNEb3VibGVDbGlja2VkID0gZmFsc2U7XG4gICAgICAgIHRyYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEb3VibGVDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoMjAwKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0RvdWJsZUNsaWNrZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pO1xuICAgICAgICB0cmF5Lm9uKCdkb3VibGUtY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlzRG91YmxlQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBtYWluV2luLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIOadv+S4gOimp+WIneacn+ihqOekulxuICAgIGNvbmZpZ18xLmRlZmF1bHQuZ2V0Qm9hZExpc3QoKTtcbiAgICBjcmVhdGVDaGF0V2luZG93KCk7XG59KTtcbnZhciBjcmVhdGVDaGF0V2luZG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjaGF0V2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICAgICAgaWNvbjogaWNvblBhdGgsXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOOCv+OCueOCr+ODkOODvOOBq+ihqOekuuOBl+OBquOBhFxuICAgICAgICBza2lwVGFza2JhcjogdHJ1ZSxcbiAgICAgICAgY2xvc2FibGU6IGZhbHNlLFxuICAgIH0pO1xuICAgIC8vIOWIneacn+ihqOekuuOBr+mdnuihqOekulxuICAgIGNoYXRXaW5kb3cubWluaW1pemUoKTtcbiAgICAvLyDjg6zjg7Pjg4Djg6njg7zjgafkvb/nlKjjgZnjgotodG1s44OV44Kh44Kk44Or44KS5oyH5a6a44GZ44KLXG4gICAgY2hhdFdpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2h0bWwvY2hhdC5odG1sJykpO1xuICAgIGNoYXRXaW5kb3cuc2V0VGl0bGUoJ3ZvbmdvbGUgLSB0aHJlYWQnKTtcbiAgICBjaGF0V2luZG93LnNldE1lbnUobnVsbCk7XG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdyA9IGNoYXRXaW5kb3c7XG4gICAgLy8gY2hhdFdpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbn07XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9FTEVDVFJPTl9EQVRBLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhO1xufSk7XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX1NFVF9FTEVDVFJPTl9EQVRBLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEgPSBtZXNzYWdlO1xuICAgIHJldHVybjtcbn0pO1xuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9BRERfQk9BUkRMSVNULCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCkucHVzaC5hcHBseShfYSwgbWVzc2FnZSk7XG4gICAgY29uZmlnXzEuZGVmYXVsdC5zYXZlQm9hcmRMaXN0KGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QpO1xuICAgIHJldHVybjtcbn0pO1xuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9HRVRfVEhSRUFEX0xJU1QsIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlzdDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0UmVzXzEuZ2V0VGhyZWFkTGlzdChtZXNzYWdlKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbGlzdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgbGlzdF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5vbihjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9PUEVOX1RIUkVBRCwgZnVuY3Rpb24gKGV2ZW50LCB1cmwsIG5hbWUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQ7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcbiAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGhvc3RuYW1lID0gKF9iID0gKF9hID0gdXJsLm1hdGNoKC9odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgICAgICAgICAgICAgdGhyZWFkTnVtYmVyID0gKF9kID0gKF9jID0gdXJsLm1hdGNoKC9cXC9cXGQrXFwvJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMF0ucmVwbGFjZSgvXFwvL2csICcnKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICAgICAgYm9hcmRJZCA9IHVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJykucmVwbGFjZShcIi9cIiArIHRocmVhZE51bWJlciArIFwiL1wiLCAnJykucmVwbGFjZSgndGVzdC9yZWFkLmNnaS8nLCAnJykucmVwbGFjZSgnYmJzL3JlYWQuY2dpLycsICcnKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkID0ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWU6IGhvc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICB0aHJlYWROdW1iZXI6IHRocmVhZE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRJZDogYm9hcmRJZCxcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oSlNPTi5zdHJpbmdpZnkoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZCwgbnVsbCwgJyAgJykpO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cud2ViQ29udGVudHMuc2VuZChjb25zdF8xLmVsZWN0cm9uRXZlbnRbJ2NsZWFyLWNvbW1lbnQnXSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5zZXRUaXRsZShuYW1lICsgXCIgLSBcIiArIHVybCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RhcnRTZXJ2ZXJfMS51cGRhdGVSZXMoKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnNob3coKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnJlc3RvcmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fUE9TVF9LQUtJS09NSSwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBlXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMi5wb3N0UmVzcG9uc2UoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5ob3N0bmFtZSwgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC50aHJlYWROdW1iZXIsIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQuYm9hcmRJZCwgbWVzc2FnZSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzdGFydFNlcnZlcl8xLnVwZGF0ZVJlcygpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc2FVSkJRV2xDTzBGQlEycENMRGhEUVVGM1FqdEJRVU40UWl4dFJFRkJhVVU3UVVGRGFrVXNPRVJCUVN0Q08wRkJReTlDTEN0Q1FVRXJRanRCUVVNdlFpeG5Sa0ZCYzBRN1FVRkRkRVFzYjBSQlFUaENPMEZCUXpsQ0xHbERRVUYzUXp0QlFVTjRReXd5UTBGQmFVUTdRVUZEYWtRc05rTkJRVEJETzBGQlF6RkRMREpEUVVGblJEdEJRVVZvUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSE8wbEJRMlFzUlVGQlJUdEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1ZVRkJReXhIUVVGSE8wbEJRMnhETEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycENMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVWdzZVVKQlFYbENPMEZCUTNwQ0xFbEJRVTBzUjBGQlJ5eEhRVUZITEd0Q1FVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRE8wRkJSWHBDTEZOQlFWTTdRVUZEVkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRVZCUVVVN1NVRkRjRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdRMEZEV2p0QlFVVkVMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMEZCUlRGQ0xFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRmNrTXNTVUZCVFN4UlFVRlJMRWRCUVVjc1kwRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkZlRVFzWTBGQll6dEJRVU5rTERoRVFVRTRSRHRCUVVNNVJDeEpRVUZOTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UVVGRGNFTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVVZzUWl4clFrRkJhMEk3UVVGRGJFSXNTVUZCVFN4aFFVRmhMRWRCUVVjc2EwSkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTTdRVUZGTjBNc05FSkJRVFJDTzBGQlF6VkNMRlZCUVZVc1EwRkJReXhSUVVGUkxFZEJRVWM3U1VGRGNFSXNUVUZCVFN4RlFVRkZPMUZCUTA0c1ZVRkJWU3hGUVVGRkxFbEJRVmM3VVVGRGRrSXNWVUZCVlN4RlFVRkZMRWxCUVZjN1MwRkRlRUk3U1VGRFJDeEpRVUZKTEVWQlFVVTdVVUZEU2l4VFFVRlRMRVZCUVVVc1JVRkJSVHRSUVVOaUxFdEJRVXNzUlVGQlJUdFpRVU5NTEVkQlFVY3NSVUZCUlN4SlFVRlhPMWxCUTJoQ0xGVkJRVlVzUlVGQlJTeEZRVUZGTzFOQlEyWTdVVUZEUkN4TlFVRk5MRVZCUVVVN1dVRkRUaXhIUVVGSExFVkJRVVVzU1VGQlZ6dFpRVU5vUWl4UFFVRlBMRVZCUVVVc1NVRkJWenRaUVVOd1FpeFpRVUZaTEVWQlFVVXNTVUZCVnp0WlFVTjZRaXhSUVVGUkxFVkJRVVVzU1VGQlZ6dFpRVU55UWl4SlFVRkpMRVZCUVVVc1JVRkJSVHRUUVVOVU8wdEJRMFk3UTBGRFJpeERRVUZETzBGQlJVWXNhMEpCUVd0Q08wRkJRMnhDTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVTdTVUZETVVJc2MwTkJRWE5ETzBsQlEzUkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVsQlFVazdRVUZEVGl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVWSUxIRkNRVUZ4UWp0QlFVTnlRaXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlR0SlFVTmtMRWxCUVUwc1pVRkJaU3hIUVVGSExDdENRVUZwUWl4RFFVRkRPMUZCUTNoRExGbEJRVmtzUlVGQlJTeEhRVUZITzFGQlEycENMR0ZCUVdFc1JVRkJSU3hIUVVGSE8wdEJRMjVDTEVOQlFVTXNRMEZCUXp0SlFVVklMRFJDUVVFMFFqdEpRVU0xUWl4SlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxHRkJRV0VzUTBGQlF6dFJRVU5vUXl4WlFVRlpPMUZCUTFvc1EwRkJReXhGUVVGRkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEzQkNMRU5CUVVNc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dFJRVU53UWl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFdEJRVXM3VVVGRE5VSXNUVUZCVFN4RlFVRkZMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJSVGxDTEdOQlFXTXNSVUZCUlN4SlFVRkpPMUZCUTNCQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTzFGQlEyUXNZMEZCWXl4RlFVRkZPMWxCUTJRc1pVRkJaU3hGUVVGRkxFbEJRVWs3VTBGRGRFSTdVVUZEUkN4WFFVRlhMRVZCUVVVc1NVRkJTVHRMUVVOc1FpeERRVUZETEVOQlFVTTdTVUZEU0N4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTJoRUxHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVNMVFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJSWFJDTERCQ1FVRXdRanRKUVVNeFFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhqUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4M1FrRkJkMElzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGTDBVc2NVSkJRWEZDTzBsQlEzSkNMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFVTXNTMEZCU3p0UlFVTjRRaXgzUWtGQmQwSTdVVUZEZUVJc1MwRkJTeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzFGQlEzWkNMR2xDUVVGTk8yRkJRMGdzWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTjJRaXhKUVVGSkxFVkJRVVVzVlVGQlZUdFpRVU5vUWl4UFFVRlBMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETzFsQlEzUkNMR0ZCUVdFN1dVRkRZaXhQUVVGUExFVkJRVVVzVTBGQlV6dFRRVU51UWl4RFFVRkRPMkZCUTBRc1NVRkJTU3hEUVVGRExGVkJRVU1zUzBGQlN6dFpRVU5XTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzaENMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVU5hTzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5JTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8xRkJRMjVDTEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEzaENMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5pTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlVnc1dVRkJXVHRKUVVOYUxITkRRVUZ6UXp0SlFVVjBReXhaUVVGWk8wbEJRMW9zU1VGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRia0lzU1VGQlNTeEhRVUZITEVsQlFVa3NaVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVMHNWMEZCVnl4SFFVRkhMR1ZCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0WlFVTjZRenRuUWtGRFJTeExRVUZMTEVWQlFVVXNTVUZCU1R0blFrRkRXQ3hMUVVGTExFVkJRVVU3YjBKQlEwd3NUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU5zUWl4RFFVRkRPMkZCUTBZN1dVRkRSRHRuUWtGRFJTeExRVUZMTEVWQlFVVXNUVUZCVFR0blFrRkRZaXhMUVVGTExFVkJRVVU3YjBKQlEwd3NWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMjlDUVVNNVF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdiMEpCUXpkRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVRc1EwRkJRenRoUVVOR08xbEJRMFE3WjBKQlEwVXNTMEZCU3l4RlFVRkZMRWxCUVVrN1owSkJRMWdzUzBGQlN5eEZRVUZGTzI5Q1FVTk1MRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEYkVJc1EwRkJRenRoUVVOR08xTkJRMFlzUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFJRVU16UWl4SlFVRkpMRU5CUVVNc1kwRkJZeXhEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzFGQlEycERMR2xDUVVGcFFqdFJRVU5xUWl4SlFVRkpMR1ZCUVdVc1IwRkJSeXhMUVVGTExFTkJRVU03VVVGRE5VSXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlR5eExRVUZMT3pzN08zZENRVU16UWl4bFFVRmxMRWRCUVVjc1MwRkJTeXhEUVVGRE8zZENRVU40UWl4eFFrRkJUU3haUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVRTdPM2RDUVVGb1FpeFRRVUZuUWl4RFFVRkRPM2RDUVVOcVFpeEpRVUZKTEdWQlFXVTdORUpCUVVVc2MwSkJRVTg3ZDBKQlF6VkNMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenQzUWtGRE9VTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPM2RDUVVNM1F5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdPenM3WVVGRGFrUXNRMEZCUXl4RFFVRkRPMUZCUTBnc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eGpRVUZqTEVWQlFVVXNWVUZCUXl4TFFVRkxPMWxCUXpWQ0xHVkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdXVUZEZGtJc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzFGQlEyeENMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4VlFVRlZPMGxCUTFZc1owSkJRVTBzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVVnlRaXhuUWtGQlowSXNSVUZCUlN4RFFVRkRPMEZCUTNKQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJVZ3NTVUZCVFN4blFrRkJaMElzUjBGQlJ6dEpRVU4yUWl4SlFVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxHRkJRV0VzUTBGQlF6dFJRVU51UXl4TFFVRkxMRVZCUVVVc1IwRkJSenRSUVVOV0xHTkJRV01zUlVGQlJTeEpRVUZKTzFGQlEzQkNMRWxCUVVrc1JVRkJSU3hSUVVGUk8xRkJRMlFzWTBGQll5eEZRVUZGTzFsQlEyUXNaVUZCWlN4RlFVRkZMRWxCUVVrN1UwRkRkRUk3VVVGRFJDeGpRVUZqTzFGQlEyUXNWMEZCVnl4RlFVRkZMRWxCUVVrN1VVRkRha0lzVVVGQlVTeEZRVUZGTEV0QlFVczdTMEZEYUVJc1EwRkJReXhEUVVGRE8wbEJRMGdzVjBGQlZ6dEpRVU5ZTEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRKUVVWMFFpd3dRa0ZCTUVJN1NVRkRNVUlzVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRWRCUVVjc1kwRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNkVUpCUVhWQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJXcEdMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenRKUVVONFF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJSWHBDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTVUZEYmtRc2VVTkJRWGxETzBGQlF6TkRMRU5CUVVNc1EwRkJRenRCUVVWR0xHdENRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMSEZDUVVGaExFTkJRVU1zYzBKQlFYTkNMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVVVzVDBGQlR6dEpRVU5zUlN4UFFVRlBMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEyeERMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMGdzYTBKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2NVSkJRV0VzUTBGQlF5eHpRa0ZCYzBJc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlJTeFBRVUYzUXp0SlFVTnVSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NSMEZCUnl4UFFVRlBMRU5CUVVNN1NVRkRia01zVDBGQlR6dEJRVU5VTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTBnc2EwSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNjVUpCUVdFc1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGclJEczdTVUZEZWtjc1EwRkJRU3hMUVVGQkxGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJRU3hEUVVGRExFbEJRVWtzVjBGQlNTeFBRVUZQTEVWQlFVVTdTVUZEY0VRc1owSkJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEZWtRc1QwRkJUenRCUVVOVUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwZ3NhMEpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4dlFrRkJiMElzUlVGQlJTeFZRVUZQTEV0QlFVc3NSVUZCUlN4UFFVRmxPenM3TzI5Q1FVTnFSU3h4UWtGQlRTeHpRa0ZCWVN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGQk96dG5Ra0ZCYmtNc1NVRkJTU3hIUVVGSExGTkJRVFJDTzJkQ1FVTjZReXh6UWtGQlR5eEpRVUZKTEVWQlFVTTdPenRMUVVOaUxFTkJRVU1zUTBGQlF6dEJRVU5JTEd0Q1FVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExIRkNRVUZoTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzVlVGQlR5eExRVUZMTEVWQlFVVXNSMEZCVnl4RlFVRkZMRWxCUVZrN096czdPenRuUWtGRk1VVXNVVUZCVVN4bFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRM0JFTEZsQlFWa3NaVUZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5d3dRMEZCUnl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeEZRVUZGTEc5RFFVRkxMRVZCUVVVc1EwRkJRenRuUWtGRGJrVXNUMEZCVHl4SFFVRkhMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGSkxGbEJRVmtzVFVGQlJ5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zWlVGQlpTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMmRDUVVWMFNTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWM3YjBKQlEyaERMRWRCUVVjc1MwRkJRVHR2UWtGRFNDeFJRVUZSTEZWQlFVRTdiMEpCUTFJc1dVRkJXU3hqUVVGQk8yOUNRVU5hTEU5QlFVOHNVMEZCUVR0dlFrRkRVQ3hKUVVGSkxFVkJRVVVzUlVGQlJUdHBRa0ZEVkN4RFFVRkRPMmRDUVVOR0xITkNRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVWMFJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJZU3hEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTNaR0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVWtzU1VGQlNTeFhRVUZOTEVkQlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVWdVJTeHhRa0ZCVFN4MVFrRkJVeXhGUVVGRkxFVkJRVUU3TzJkQ1FVRnFRaXhUUVVGcFFpeERRVUZETzJkQ1FVTnNRaXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlF6bERMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRuUWtGRE4wTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPenM3TzB0QlEycEVMRU5CUVVNc1EwRkJRenRCUVVOSUxHdENRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMSEZDUVVGaExFTkJRVU1zYTBKQlFXdENMRVZCUVVVc1ZVRkJUeXhMUVVGTExFVkJRVVVzVDBGQlpUczdPenM3TzJkQ1FVVXhSU3h4UWtGQlRTeHhRa0ZCV1N4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmxCUVZrc1JVRkJSU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eEZRVUZCT3p0blFrRkJOVW9zVTBGQk5Fb3NRMEZCUXp0blFrRkROMG9zY1VKQlFVMHNkVUpCUVZNc1JVRkJSU3hGUVVGQk96dG5Ra0ZCYWtJc1UwRkJhVUlzUTBGQlF6dG5Ra0ZGYkVJc2MwSkJRVThzU1VGQlNTeEZRVUZET3pzN1owSkJSVm9zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJReXhEUVVGRExFTkJRVU03WjBKQlEySXNjMEpCUVU4c1MwRkJTeXhGUVVGRE96czdPMHRCUldoQ0xFTkJRVU1zUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIDVjaOS6kuaPm0JCU+iqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xuICovXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xudmFyIGljb252X2xpdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKSk7IC8vIOaWh+Wtl+OCs+ODvOODieWkieaPm+eUqOODkeODg+OCseODvOOCuFxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIGVuY29kaW5nX2phcGFuZXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVuY29kaW5nLWphcGFuZXNlXCIpKTtcbi8qKiDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4kzMDQgX05vdE1vZGlmaWVkICovXG52YXIgTk9UX01PRElGSUVEID0gJzMwNCc7XG52YXIgUkFOR0VfTk9UX1NBVElTRklBQkxFID0gJzQxNic7XG4vKiog5pyA57WC5Y+W5b6X44K544Os44OD44OJICovXG52YXIgbGFzdFRocmVhZFVybCA9ICcnO1xuLyoqIOacgOe1guODrOOCueeVquWPtyAqL1xudmFyIGxhc3RSZXNOdW1iZXIgPSAwO1xuLyoqIOacgOe1guabtOaWsOaXpeaZgiAqL1xudmFyIGxhc3RNb2RpZmllZCA9IG51bGw7XG4vKiog5pyA57WC44OQ44Kk44OI5pWwICovXG52YXIgbGFzdEJ5dGUgPSAwO1xuLyoqIOOCueODrOS4gOimp+OCkuiqreOBv+i+vOOCgCAqL1xuZXhwb3J0cy5yZWFkQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlcXVlc3RVcmwsIGxpc3QsIG9wdGlvbnMsIHJlc3BvbnNlLCBzdHIsIGVycm9yXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IGJvYXJkVXJsICsgXCJzdWJqZWN0LnR4dFwiO1xuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ1NoaWZ0X0pJUycpO1xuICAgICAgICAgICAgICAgIC8vIOODkeODvOOCueOBl+OBpuagvOe0jVxuICAgICAgICAgICAgICAgIGxpc3QucHVzaC5hcHBseShsaXN0LCBzdHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtOyB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBwYXJzZVRocmVhZExpc3QoYm9hcmRVcmwsIGxpbmUpOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JfMS5zdGF0dXMgPT0gTk9UX01PRElGSUVEKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgU5PVF9NT0RJRklFRCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8xLnN0YXR1cyA9PSBSQU5HRV9OT1RfU0FUSVNGSUFCTEUpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBUkFOR0VfTk9UX1NBVElTRklBQkxFJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8qKlxuICog44Os44K544KS5oqV56i/44GZ44KLXG4gKiBAcGFyYW0gaG9zdG5hbWUg44Ob44K544OI5ZCN44CCaHR0cHM6Ly9ob2dlaG9nZS9cbiAqIEBwYXJhbSB0aHJlYWROdW1iZXIg44K544Os55Wq5Y+3IDEyMzQ1Njc4XG4gKiBAcGFyYW0gYm9hcmRJZCDmnb9JRCBwYXN0YTA0XG4gKiBAcGFyYW0gbWVzc2FnZSDmipXnqL/mlodcbiAqL1xuZXhwb3J0cy5wb3N0UmVzID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVuaWNvZGVBcnJheSwgaSwgc2ppc0FycmF5LCBlbmNvZGVkS2V5d29yZDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkucHVzaChtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzamlzQXJyYXkgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQuY29udmVydCh1bmljb2RlQXJyYXksIHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdTSklTJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ1VOSUNPREUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVuY29kZWRLZXl3b3JkID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LnVybEVuY29kZShzamlzQXJyYXkpO1xuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGVuY29kZVVSSUNvbXBvbmVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQucG9zdChob3N0bmFtZSArIFwidGVzdC9iYnMuY2dpXCIsIFwiRlJPTT0mTUVTU0FHRT1cIiArIGVuY29kZWRLZXl3b3JkICsgXCImbWFpbD1zYWdlJmtleT1cIiArIHRocmVhZE51bWJlciArIFwiJmJicz1cIiArIGJvYXJkSWQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICcqLyonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAsIGRlZmxhdGUsIGJyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhlbmNvZGVVUklDb21wb25lbnQudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG52YXIgUmVhZDVjaCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFkNWNoKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICog44Os44K56Kqt44G/6L6844G/XG4gICAgICAgICAqIOW8leaVsOOBp+aMh+WumuOBl+OBn+adv+OBi+OCieODrOOCueOCkuiqreOCgFxuICAgICAgICAgKiDjg6zjgrnnlarlj7fjgpLmjIflrprjgZfjgabjgYTjgarjgYTloLTlkIjjga/mnIDmlrAx5Lu25Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSB0aHJlYWRVcmwg44K544OsVVJMXG4gICAgICAgICAqIEBwYXJhbSByZXNOdW0g44Os44K555Wq5Y+3XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWQgPSBmdW5jdGlvbiAodGhyZWFkVXJsLCByZXNOdW0pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXAsIHJlcXVlc3RVcmwsIHJhbmdlLCBvcHRpb25zLCByZXNwb25zZUpzb24sIHJlc3BvbnNlLCBoZWFkZXJzLCBzdHIsIGVycm9yXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhgW1JlYWQ1Y2hdIHRocmVhZFVybD0ke3RocmVhZFVybH0gcmVzTnVtPSR7cmVzTnVtfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2/44KE5pyA57WC5pel44Os44K555Wq5Y+344GM44GL44KP44Gj44Gf44KJ5pyA5Yid44GL44KJ44Go44KK55u044GZKGxhc3Rtb2RpZmnjgaggcmFuZ2Xjga7jg6rjgrvjg4Pjg4gpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkVXJsICE9IGxhc3RUaHJlYWRVcmwgfHwgTnVtYmVyLmlzTmFOKHJlc051bSkgfHwgcmVzTnVtIDwgbGFzdFJlc051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RUaHJlYWRVcmwgPSB0aHJlYWRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qnl0ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2guanNdcmVzZXRlISEhISEhISEhISEhISEhIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgnbm9yZXNldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcCA9IC9cXC90ZXN0XFwvcmVhZC5jZ2koXFwvLispKFxcLy4rKVxcLy87XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gdGhyZWFkVXJsLnJlcGxhY2UocmVwLCAnJDEvZGF0JDIuZGF0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZSA9IGxhc3RCeXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWYtbW9kaWZpZWQtc2luY2UnOiBsYXN0TW9kaWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiAnYnl0ZXM9JyArIHJhbmdlICsgJy0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhc3RNb2RpZmllZOOBqFJhbmdl5pu05paw5Yem55CGXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snbGFzdC1tb2RpZmllZCddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQgPSBoZWFkZXJzWydsYXN0LW1vZGlmaWVkJ107XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdTaGlmdF9KSVMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOOCueODneODs+OCueOCquODluOCuOOCp+OCr+ODiOS9nOaIkOOAgWNvbnRlbnQtcmFuZ2XjgYzjgYLjgovloLTlkIjjgajjgarjgYTloLTlkIjjgaflh6bnkIbjgpLliIbjgZHjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzWydjb250ZW50LXJhbmdlJ10gPT0gbnVsbCB8fCBsYXN0Qnl0ZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucmVhZF1jb250ZW50LXJhbmdlPScgKyBoZWFkZXJzWydjb250ZW50LXJhbmdlJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSnNvbiA9IHB1cnNlTmV3UmVzcG9uc2Uoc3RyLCByZXNOdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VEaWZmUmVzcG9uc2Uoc3RyLCByZXNOdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+W5b6X44OQ44Kk44OI5pWw6KGo56S6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSAhPSBudWxsICYmIHJlc3BvbnNlSnNvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEJ5dGUgPSBsYXN0Qnl0ZSArIHBhcnNlSW50KGhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5yZWFkXWxhc3RCeXRlPScgKyBsYXN0Qnl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSnNvbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yXzIuc3RhdHVzID09IE5PVF9NT0RJRklFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+ODrOOCueWPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgU5PVF9NT0RJRklFRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMi5zdGF0dXMgPT0gUkFOR0VfTk9UX1NBVElTRklBQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT44Os44K55Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBUkFOR0VfTk9UX1NBVElTRklBQkxFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPjg6zjgrnlj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlSnNvbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgIH1cbiAgICByZXR1cm4gUmVhZDVjaDtcbn0oKSk7XG4vKipcbiAqIOWPluW+l+OBl+OBn+ODrOOCueODneODs+OCue+8iOikh+aVsO+8ieOBruODkeODvOOCuVxuICog5oi744KK44Go44GX44Gm44OR44O844K544GX44GfanNvbuOCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOOBmVxuICogQHBhcmFtIHJlcyDmnb/jgYvjgonov5TljbTjgZXjgozjgZ9kYXRcbiAqIEBwYXJhbSByZXNOdW0g44Oq44Kv44Ko44K544OI44GV44KM44Gf44Os44K555Wq5Y+3XG4gKi9cbnZhciBwdXJzZU5ld1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlcywgcmVzTnVtKSB7XG4gICAgLy8g57WQ5p6c44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIOODrOOCueeVquWPt1xuICAgIHZhciBudW0gPSAwO1xuICAgIC8vIOaWsOedgOODrOOCueOCkuaUueihjOOBlOOBqOOBq1NwbGl044GZ44KLXG4gICAgdmFyIHJlc0FycmF5ID0gcmVzLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuICAgIC8vIOaWsOedgOOBquOBl+OBquOCieaIu+OCi+OAglxuICAgIGlmIChyZXNBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy8g6YWN5YiX44Gu5pyA5b6M44Gr56m644Gu6KaB57Sg44GM5YWl44KL44GT44Go44GM44GC44KL44Gu44Gn5Y+W44KK6Zmk44GPXG4gICAgaWYgKHJlc0FycmF5W3Jlc0FycmF5Lmxlbmd0aCAtIDFdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXNBcnJheS5wb3AoKTtcbiAgICB9XG4gICAgLy8g44Os44K55oyH5a6a44Gq44GX44Gu5aC05ZCI5pyA5b6M44GuMeS7tuWPluW+l1xuICAgIGlmIChOdW1iZXIuaXNOYU4ocmVzTnVtKSB8fCByZXNOdW0gPCAxKSB7XG4gICAgICAgIG51bSA9IHJlc0FycmF5Lmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBudW0gPSByZXNOdW0gLSAxO1xuICAgIH1cbiAgICAvLyAx6KGM44GU44Go44Gr44OR44O844K544GZ44KLXG4gICAgZm9yICg7IG51bSA8IHJlc0FycmF5Lmxlbmd0aDsgbnVtKyspIHtcbiAgICAgICAgLy8g44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXG4gICAgICAgIGlmIChyZXNBcnJheVtudW1dLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlUmVzcG9uc2UocmVzQXJyYXlbbnVtXSwgbnVtICsgMSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxhc3RSZXNOdW1iZXIgPSBudW0gKyAxO1xuICAgIC8vIOODkeODvOOCueOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOWNtFxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcbiAqIOaIu+OCiuOBqOOBl+OBpuODkeODvOOCueOBl+OBn2pzb27jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TjgZlcbiAqIEBwYXJhbSByZXMg5p2/44GL44KJ6L+U5Y2044GV44KM44GfZGF0MeihjOWIhlxuICogQHBhcmFtIHJlc051bSDjg6rjgq/jgqjjgrnjg4jjgZXjgozjgZ/jg6zjgrnnlarlj7dcbiAqL1xudmFyIHB1cnNlRGlmZlJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcywgcmVzTnVtKSB7XG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8g44Os44K555Wq5Y+3XG4gICAgdmFyIG51bSA9IHJlc051bTtcbiAgICAvL+aWsOedgOODrOOCueOCkuaUueihjOOBlOOBqOOBq1NwbGl044GZ44KLXG4gICAgdmFyIHJlc0FycmF5ID0gcmVzLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuICAgIC8vIOaWsOedgOOBquOBl+OBquOCieaIu+OCi+OAglxuICAgIGlmIChyZXNBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIOmFjeWIl+OBruacgOW+jOOBq+epuuOBruimgee0oOOBjOWFpeOCi+OBk+OBqOOBjOOBguOCi+OBruOBp+WPluOCiumZpOOBj1xuICAgICAgICBpZiAocmVzQXJyYXlbcmVzQXJyYXkubGVuZ3RoIC0gMV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJlc0FycmF5LnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnB1cnNlRGlmZlJlc3BvbnNlXeWPluW+l+ODrOOCueeVquWPtz0nICsgbnVtKTtcbiAgICAvLzHooYzjgZTjgajjgavjg5Hjg7zjgrnjgZnjgotcbiAgICByZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvL+ODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VSZXNwb25zZSh2YWx1ZSwgbnVtKSk7XG4gICAgICAgICAgICBudW0rKztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOODkeODvOOCueOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOWNtFxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiDjgrnjg6zkuIDopqfjga7jg5Hjg7zjgrlcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcbiAqIEBwYXJhbSBJbnRlZ2VyIC8vIG51bSDjg6zjgrnnlarvvIgw44K544K/44O844OI77yJXG4gKi9cbnZhciBwYXJzZVRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwsIHN1YmplY3RMaW5lKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXG4gICAgLy/jg6zjgrnjga7opoHntKBcbiAgICAvLzA6ZGF05ZCNXG4gICAgLy8xOuOCueODrOOCv+OCpO+8iOODrOOCueaVsO+8iVxuICAgIHZhciBzcGxpdFJlcyA9IHN1YmplY3RMaW5lLnNwbGl0KCc8PicpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0UmVzKTtcbiAgICB2YXIgZGF0TnVtID0gc3BsaXRSZXNbMF0ucmVwbGFjZSgnLmRhdCcsICcnKTtcbiAgICB2YXIgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSBib2FyZFVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICB2YXIgYm9hcmROYW1lID0gYm9hcmRVcmwucmVwbGFjZShob3N0bmFtZSwgJycpO1xuICAgIHZhciB1cmwgPSBob3N0bmFtZSArIFwidGVzdC9yZWFkLmNnaS9cIiArIGJvYXJkTmFtZSArIGRhdE51bSArIFwiL1wiO1xuICAgIHZhciB0aXRsZVRlbXAgPSBzcGxpdFJlc1sxXTtcbiAgICB2YXIgbmFtZSA9IChfZCA9IChfYyA9IHRpdGxlVGVtcC5tYXRjaCgvKC4qPykgXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzFdKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAn4piF5Y+W5b6X5aSx5pWX4piFJztcbiAgICB2YXIgcmVzTnVtID0gTnVtYmVyKChfZSA9IHRpdGxlVGVtcC5tYXRjaCgvXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lWzBdLnJlcGxhY2UoL1xcKHxcXCkvZywgJycpKTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcmVzTnVtOiByZXNOdW0sXG4gICAgfTtcbn07XG4vKipcbiAqIOODrOOCueOBruODkeODvOOCuVxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcbiAqL1xudmFyIHBhcnNlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCBudW0pIHtcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXG4gICAgLy/jg6zjgrnjga7opoHntKBcbiAgICAvLzA65ZCN5YmNXG4gICAgLy8xOuODoeOCouODiVxuICAgIC8vMjrml6Xku5jjgahJRCDvvIgyMDE5LzExLzAzKOaXpSkgMDg6NTU6MDAgSUQ6a2FuaWthbmnvvInjgb/jgZ/jgYTjgavooajnpLpcbiAgICAvLzM65pys5paHXG4gICAgLy80OuOCueODrOOCv+OCpCDvvIgx44Os44K555uu44Gu44G/77yJXG4gICAgdmFyIHNwbGl0UmVzID0gcmVzLnNwbGl0KCc8PicpO1xuICAgIC8vIOaXpeS7mOOBqElE5YiG6Zui5Yem55CG44CBJyBJRDon44Gn5Yy65YiH44KLXG4gICAgdmFyIGRhdGVJZCA9IHNwbGl0UmVzWzJdLnNwbGl0KCcgSUQ6Jyk7XG4gICAgdmFyIGRhdGUgPSBkYXRlSWRbMF07XG4gICAgdmFyIGlkID0gZGF0ZUlkLmxlbmd0aCA9PT0gMiA/IGRhdGVJZFsxXSA6ICcnO1xuICAgIHZhciByZXNKc29uID0ge1xuICAgICAgICBudW1iZXI6IG51bSxcbiAgICAgICAgbmFtZTogc3BsaXRSZXNbMF0sXG4gICAgICAgIGVtYWlsOiBzcGxpdFJlc1sxXSxcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbM10sXG4gICAgICAgIC8vIHRocmVhZFRpdGxlOiBzcGxpdFJlc1s0XSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbWdVcmw6ICcnLFxuICAgIH07XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XG4gICAgcmV0dXJuIHJlc0pzb247XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVhZDVjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVmhaRFZqYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEpsWVdRMVkyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEdkRVFVRnJSRHRCUVVOc1JDd3dSRUZCSzBJc1EwRkJReXhuUWtGQlowSTdRVUZEYUVRc09FUkJRU3RDTzBGQlF5OUNMSGRGUVVGNVF6dEJRVVY2UXl3clFrRkJLMEk3UVVGREwwSXNTVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRek5DTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlJYQkRMR1ZCUVdVN1FVRkRaaXhKUVVGSkxHRkJRV0VzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZGtJc1lVRkJZVHRCUVVOaUxFbEJRVWtzWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjBRaXhoUVVGaE8wRkJRMklzU1VGQlNTeFpRVUZaTEVkQlFXdENMRWxCUVVrc1EwRkJRenRCUVVOMlF5eGhRVUZoTzBGQlEySXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSV3BDTEdkQ1FVRm5RanRCUVVOSUxGRkJRVUVzVTBGQlV5eEhRVUZITEZWQlFVOHNVVUZCWjBJN096czdPMmRDUVVONFF5eFZRVUZWTEVkQlFVMHNVVUZCVVN4blFrRkJZU3hEUVVGRE8yZENRVU4wUXl4SlFVRkpMRWRCUVhsRExFVkJRVVVzUTBGQlF6dG5Ra0ZIYUVRc1QwRkJUeXhIUVVGMVFqdHZRa0ZEYkVNc1IwRkJSeXhGUVVGRkxGVkJRVlU3YjBKQlEyWXNUVUZCVFN4RlFVRkZMRXRCUVVzN2IwSkJRMklzVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpPMjlDUVVOcVFpeFpRVUZaTEVWQlFVVXNZVUZCWVR0cFFrRkROVUlzUTBGQlF6czdPenRuUWtGSmFVSXNjVUpCUVUwc1pVRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZCT3p0blFrRkJMMElzVVVGQlVTeEhRVUZITEZOQlFXOUNPMmRDUVU4dlFpeEhRVUZITEVkQlFVY3NiMEpCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTJ4RkxGVkJRVlU3WjBKQlExWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1QwRkJWQ3hKUVVGSkxFVkJRME1zUjBGQlJ6dHhRa0ZEU0N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE8zRkNRVU5ZTEUxQlFVMHNRMEZCUXl4VlFVRkRMRWxCUVVrc1NVRkJTeXhQUVVGQkxFbEJRVWtzUlVGQlNpeERRVUZKTEVOQlFVTTdjVUpCUTNSQ0xFZEJRVWNzUTBGQlF5eFZRVUZETEVsQlFVa3NTVUZCU3l4UFFVRkJMR1ZCUVdVc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFTOUNMRU5CUVN0Q0xFTkJRVU1zUlVGRGFrUTdPenM3WjBKQlJVWXNTVUZCU1N4UFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxGbEJRVmtzUlVGQlJUdHZRa0ZEYUVNc2MwSkJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNaMFJCUVdkRUxFTkJRVU1zUTBGQlF6dHBRa0ZETjBRN2NVSkJRVTBzU1VGQlNTeFBRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTm9SQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4NVJFRkJlVVFzUTBGQlF5eERRVUZETzJsQ1FVTjBSVHR4UWtGQlRUdHZRa0ZEVEN4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5dzBRMEZCTkVNc1IwRkJSeXhQUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdhVUpCUTNwRk8yZENRVU5FTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0dlFrRkhkRU1zYzBKQlFVOHNTVUZCU1N4RlFVRkRPenM3UzBGRFlpeERRVUZETzBGQlJVWTdPenM3T3p0SFFVMUhPMEZCUTFVc1VVRkJRU3hQUVVGUExFZEJRVWNzVlVGQlR5eFJRVUZuUWl4RlFVRkZMRmxCUVc5Q0xFVkJRVVVzVDBGQlpTeEZRVUZGTEU5QlFXVTdPenM3TzJkQ1FVVTVSaXhaUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjRRaXhMUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNaRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTXhRenRuUWtGRFN5eFRRVUZUTEVkQlFVY3NNa0pCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzI5Q1FVTXZReXhGUVVGRkxFVkJRVVVzVFVGQlRUdHZRa0ZEVml4SlFVRkpMRVZCUVVVc1UwRkJVenRwUWtGRGFFSXNRMEZCUXl4RFFVRkRPMmRDUVVkSExHTkJRV01zUjBGQlJ5d3lRa0ZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGblFpeERRVUZETEVOQlFVTTdaMEpCUXpWRUxESkRRVUV5UXp0blFrRkZNME1zY1VKQlFVMHNaVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJTU3hSUVVGUkxHbENRVUZqTEVWQlFVVXNiVUpCUVdsQ0xHTkJRV01zZFVKQlFXdENMRmxCUVZrc1lVRkJVU3hQUVVGVExFVkJRVVU3ZDBKQlF6RklMRTlCUVU4c1JVRkJSVHMwUWtGRFVDeE5RVUZOTEVWQlFVVXNTMEZCU3pzMFFrRkRZaXhqUVVGakxFVkJRVVVzYlVOQlFXMURPelJDUVVOdVJDeHBRa0ZCYVVJc1JVRkJSU3h0UWtGQmJVSTdlVUpCUTNaRE8zRkNRVU5HTEVOQlFVTXNSVUZCUVRzN1owSkJVa1lzTWtOQlFUSkRPMmRDUVVVelF5eFRRVTFGTEVOQlFVTTdPenM3UzBGRFNpeERRVUZETzBGQlJVWTdTVUZCUVR0UlFVRkJMR2xDUVRCR1F6dFJRWHBHUXpzN096czdPMWRCVFVjN1VVRkRTQ3hUUVVGSkxFZEJRVWNzVlVGQlR5eFRRVUZwUWl4RlFVRkZMRTFCUVdNN096czdPM2RDUVVNM1F5eHBSVUZCYVVVN2QwSkJRMnBGTEd0RVFVRnJSRHQzUWtGRGJFUXNTVUZCU1N4VFFVRlRMRWxCUVVrc1lVRkJZU3hKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExHRkJRV0VzUlVGQlJUczBRa0ZEYUVZc1lVRkJZU3hIUVVGSExGTkJRVk1zUTBGQlF6czBRa0ZETVVJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6czBRa0ZEY0VJc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6czBRa0ZEWWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN2VVSkJRM0pFT3paQ1FVRk5PelJDUVVOTUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN2VVSkJRek5DTzNkQ1FVdExMRWRCUVVjc1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0M1FrRkRka01zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzNkQ1FWZHdSQ3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETzNkQ1FVVnFRaXhQUVVGUExFZEJRWFZDT3pSQ1FVTnNReXhIUVVGSExFVkJRVVVzVlVGQlZUczBRa0ZEWml4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrN05FSkJRMnBDTEZsQlFWa3NSVUZCUlN4aFFVRmhPelJDUVVNelFpeFBRVUZQTEVWQlFVVTdaME5CUTFBc2JVSkJRVzFDTEVWQlFVVXNXVUZCV1R0blEwRkRha01zUzBGQlN5eEZRVUZGTEZGQlFWRXNSMEZCUnl4TFFVRkxMRWRCUVVjc1IwRkJSenMyUWtGRE9VSTdlVUpCUTBZc1EwRkJRenM3T3p0M1FrRkxhVUlzY1VKQlFVMHNaVUZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGQk96dDNRa0ZCTDBJc1VVRkJVU3hIUVVGSExGTkJRVzlDTzNkQ1FVY3ZRaXhQUVVGUExFZEJRVGhDTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN2QwSkJRelZFTEhsQ1FVRjVRanQzUWtGRGVrSXNTVUZCU1N4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGT3pSQ1FVTndReXhaUVVGWkxFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPM2xDUVVONlF6dDNRa0ZKU3l4SFFVRkhMRWRCUVVjc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN2QwSkJRMnhGTEN0RFFVRXJRenQzUWtGREwwTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEZGQlFWRXNTVUZCU1N4RFFVRkRMRVZCUVVVN05FSkJRM0pFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc09FSkJRVGhDTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEzcEZMRmxCUVZrc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03ZVVKQlF6bERPelpDUVVGTk96UkNRVU5NTEZsQlFWa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN2VVSkJReTlETzNkQ1FVVkVMRmRCUVZjN2QwSkJRMWdzU1VGQlNTeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3TkVKQlEyaEZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPelJDUVVNNVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMSGxDUVVGNVFpeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRPM2xDUVVOeVJEczdPenQzUWtGRlJDeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPM2RDUVVOc1FpeEpRVUZKTEU5QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hGUVVGRk96UkNRVU5vUXl4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eHBSRUZCYVVRc1EwRkJReXhEUVVGRE8zbENRVU01UkRzMlFrRkJUU3hKUVVGSkxFOUJRVXNzUTBGQlF5eE5RVUZOTEVsQlFVa3NjVUpCUVhGQ0xFVkJRVVU3TkVKQlEyaEVMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETERCRVFVRXdSQ3hEUVVGRExFTkJRVU03ZVVKQlEzWkZPelpDUVVGTk96UkNRVU5NTEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExEWkRRVUUyUXl4SFFVRkhMRTlCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dDVRa0ZETVVVN2QwSkJRMFFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZET3pSQ1FVZDBReXh6UWtGQlR5eFpRVUZaTEVWQlFVTTdPenRoUVVOeVFpeERRVUZETzBsQlEwb3NRMEZCUXp0SlFVRkVMR05CUVVNN1FVRkJSQ3hEUVVGRExFRkJNVVpFTEVsQk1FWkRPMEZCUlVRN096czdPMGRCUzBjN1FVRkRTQ3hKUVVGTkxHZENRVUZuUWl4SFFVRkhMRlZCUVVNc1IwRkJWeXhGUVVGRkxFMUJRV003U1VGRGJrUXNXVUZCV1R0SlFVTmFMRWxCUVUwc1RVRkJUU3hIUVVGMVF5eEZRVUZGTEVOQlFVTTdTVUZEZEVRc1QwRkJUenRKUVVOUUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVVmFMRzlDUVVGdlFqdEpRVU53UWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExGbEJRVms3U1VGRFdpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM3BDTEU5QlFVOHNUVUZCVFN4RFFVRkRPMHRCUTJZN1NVRkRSQ3d5UWtGQk1rSTdTVUZETTBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlF6bERMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU5vUWp0SlFVVkVMRzFDUVVGdFFqdEpRVU51UWl4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVOMFF5eEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRE0wSTdVMEZCVFR0UlFVTk1MRWRCUVVjc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEyeENPMGxCUlVRc1lVRkJZVHRKUVVOaUxFOUJRVThzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3VVVGRGJrTXNZMEZCWXp0UlFVTmtMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JFTzB0QlEwWTdTVUZEUkN4aFFVRmhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU40UWl4dlFrRkJiMEk3U1VGRGNFSXNUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRhRUlzUTBGQlF5eERRVUZETzBGQlJVWTdPenM3TzBkQlMwYzdRVUZEU0N4SlFVRk5MR2xDUVVGcFFpeEhRVUZITEZWQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdNN1NVRkRjRVFzVjBGQlZ6dEpRVU5ZTEVsQlFVMHNUVUZCVFN4SFFVRjFReXhGUVVGRkxFTkJRVU03U1VGRGRFUXNUMEZCVHp0SlFVTlFMRWxCUVVrc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVVZxUWl4dFFrRkJiVUk3U1VGRGJrSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhaUVVGWk8wbEJRMW9zU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVONlFpeFBRVUZQTEUxQlFVMHNRMEZCUXp0TFFVTm1PMU5CUVUwN1VVRkRUQ3d5UWtGQk1rSTdVVUZETTBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU5vUWp0TFFVTkdPMGxCUlVRc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eHZRMEZCYjBNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU14UkN4WlFVRlpPMGxCUTFvc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZETEV0QlFVczdVVUZEY2tJc1lVRkJZVHRSUVVOaUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtNc1IwRkJSeXhGUVVGRkxFTkJRVU03VTBGRFVEdEpRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlVnc2IwSkJRVzlDTzBsQlEzQkNMRTlCUVU4c1RVRkJUU3hEUVVGRE8wRkJRMmhDTEVOQlFVTXNRMEZCUXp0QlFVVkdPenM3TzBkQlNVYzdRVUZEU0N4SlFVRk5MR1ZCUVdVc1IwRkJSeXhWUVVGRExGRkJRV2RDTEVWQlFVVXNWMEZCYlVJN08wbEJRelZFTEdWQlFXVTdTVUZEWml4UFFVRlBPMGxCUTFBc1VVRkJVVHRKUVVOU0xHRkJRV0U3U1VGRFlpeEpRVUZOTEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzcERMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEZEVJc1NVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGTDBNc1NVRkJUU3hSUVVGUkxHVkJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5d3dRMEZCUnl4RFFVRkRMRzlEUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5vUlN4SlFVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOcVJDeEpRVUZOTEVkQlFVY3NSMEZCVFN4UlFVRlJMSE5DUVVGcFFpeFRRVUZUTEVkQlFVY3NUVUZCVFN4TlFVRkhMRU5CUVVNN1NVRkZPVVFzU1VGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVGxDTEVsQlFVMHNTVUZCU1N4bFFVRlhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4UlFVRlJMRU5CUVVNN1NVRkRlRVVzU1VGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4UFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETERCRFFVRkhMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlRsRkxGbEJRVms3U1VGRFdpeFBRVUZQTzFGQlEwd3NSMEZCUnl4TFFVRkJPMUZCUTBnc1NVRkJTU3hOUVVGQk8xRkJRMG9zVFVGQlRTeFJRVUZCTzB0QlExQXNRMEZCUXp0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVWR096czdPMGRCU1VjN1FVRkRTQ3hKUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZETEVkQlFWY3NSVUZCUlN4SFFVRlhPMGxCUXpkRExHVkJRV1U3U1VGRFppeFBRVUZQTzBsQlExQXNUVUZCVFR0SlFVTk9MRTlCUVU4N1NVRkRVQ3h2UkVGQmIwUTdTVUZEY0VRc1RVRkJUVHRKUVVOT0xHbENRVUZwUWp0SlFVTnFRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnBETEhWQ1FVRjFRanRKUVVOMlFpeEpRVUZOTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNwRExFbEJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMlFpeEpRVUZOTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZGYUVRc1NVRkJUU3hQUVVGUExFZEJRV2RDTzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSE8xRkJRMWdzU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha0lzUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeEZRVUZGTEVsQlFVazdVVUZEVml4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUWl3MFFrRkJORUk3VVVGRE5VSXNSVUZCUlN4RlFVRkZMRVZCUVVVN1VVRkRUaXhOUVVGTkxFVkJRVVVzUlVGQlJUdExRVU5ZTEVOQlFVTTdTVUZGUml4WlFVRlpPMGxCUTFvc1QwRkJUeXhQUVVGUExFTkJRVU03UVVGRGFrSXNRMEZCUXl4RFFVRkRPMEZCUlVZc2EwSkJRV1VzVDBGQlR5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgcmVhZFNpdGFyYWJhXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZFNpdGFyYWJhXCIpKTsgLy8g44GX44Gf44KJ44Gw6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXG52YXIgUmVhZDVjaF8xID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1JlYWQ1Y2hcIikpOyAvLyA1Y2jkupLmj5vmnb/oqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcbnZhciBzaXRhcmFiYSA9IG5ldyByZWFkU2l0YXJhYmFfMS5kZWZhdWx0KCk7XG52YXIgcmVhZDVjaCA9IG5ldyBSZWFkNWNoXzEuZGVmYXVsdCgpO1xuLy8g5o6y56S65p2/6Kqt44G/6L6844G/44Oi44K444Ol44O844Or44CB5LiA5bqm5rG65a6a44GX44Gf44KJ5L2/44GE44G+44KP44GZ44Gf44KB44Gr44Kw44Ot44O844OQ44Or5a6j6KiAXG52YXIgYmJzTW9kdWxlID0gbnVsbDtcbi8qKlxuICog5o6y56S65p2/44Gu44Os44K544KS5Y+W5b6X44GZ44KLXG4gKiBAcGFyYW0gdGhyZWFkVXJsIOOCueODrOOBrlVSTFxuICogQHBhcmFtIHJlc051bSDjgZPjga7nlarlj7fku6XpmY3jgpLlj5blvpfjgZnjgovjgILmjIflrprjgZfjgarjgYTloLTlkIjjga/mnIDmlrAx5Lu244KS5Y+W5b6X44CCXG4gKi9cbmV4cG9ydHMuZ2V0UmVzID0gZnVuY3Rpb24gKHRocmVhZFVybCwgcmVzTnVtKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXNwb25zZSwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFtnZXRSZXNdICR7dGhyZWFkVXJsfSAke3Jlc051bX1gKTtcbiAgICAgICAgICAgICAgICAvLyDjg6rjgq/jgqjjgrnjg4hVUkzjgpLop6PmnpDjgZfjgIHkvb/nlKjjgZnjgovjg6Ljgrjjg6Xjg7zjg6vjgpLlpInmm7TjgZnjgotcbiAgICAgICAgICAgICAgICBiYnNNb2R1bGUgPSBhbmFseXNCQlNOYW1lKHRocmVhZFVybCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmJzTW9kdWxlLnJlYWQodGhyZWFkVXJsLCByZXNOdW0pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgW2dldFJlcy5qc10gZmV0Y2ggJHt0aHJlYWRVcmx9IHJlc051bSA9ICR7cmVzTnVtfSwgcmVzdWx0ID0gJHtyZXNwb25zZS5sZW5ndGh9YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLm1hcChmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlcyksIHsgaW1nVXJsOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFtdXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydHMuZ2V0VGhyZWFkTGlzdCA9IGZ1bmN0aW9uIChib2FyZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2l0YXJhYmFEb21haW47XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcbiAgICAgICAgICAgICAgICBpZiAoIShib2FyZFVybC5pbmRleE9mKHNpdGFyYWJhRG9tYWluKSAhPT0gLTEpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWFkU2l0YXJhYmFfMS5yZWFkQm9hcmQoYm9hcmRVcmwpXTtcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICAvLyBVUkzjgavjgZfjgZ/jgonjgbDjg4njg6HjgqTjg7PlkI3jgYzlhaXjgaPjgabjgozjgbDjgZfjgZ/jgonjgbBcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0IC8qeWllbGQqLywgUmVhZDVjaF8xLnJlYWRCb2FyZChib2FyZFVybCldO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLnBvc3RSZXNwb25zZSA9IGZ1bmN0aW9uIChob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaXRhcmFiYURvbWFpbjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oXCJbcG9zdFJlc3BvbnNlXSBcIiArIGhvc3RuYW1lICsgXCIgXCIgKyB0aHJlYWROdW1iZXIgKyBcIiBcIiArIGJvYXJkSWQpO1xuICAgICAgICAgICAgICAgIHNpdGFyYWJhRG9tYWluID0gJ2piYnMuc2hpdGFyYWJhLm5ldCc7XG4gICAgICAgICAgICAgICAgaWYgKCEoaG9zdG5hbWUuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVhZFNpdGFyYWJhXzEucG9zdFJlcyhob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKV07XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0IC8qeWllbGQqLywgUmVhZDVjaF8xLnBvc3RSZXMoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSldO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vKlxuICogVVJM44KS44G/44Gm44Gp44GT44GuQkJT44GL5Yik5a6a44GX44Gm5L2/55So44GZ44KL44Oi44K444Ol44O844Or44KS6L+U5Y2044GZ44KLXG4gKi9cbnZhciBhbmFseXNCQlNOYW1lID0gZnVuY3Rpb24gKHRocmVhZFVybCkge1xuICAgIC8vIOOBl+OBn+OCieOBsOODieODoeOCpOODs+WQjVxuICAgIHZhciBzaXRhcmFiYURvbWFpbiA9ICdqYmJzLnNoaXRhcmFiYS5uZXQnO1xuICAgIC8vIOOBk+OCk+OBquaEn+OBmOOBp+W/heimgeOBq+W/nOOBmOOBpuWil+OChOOBl+OBpuOBhOOBkeOBsOOBhOOBhOOCk+OBmOOCg+OBre+8n1xuICAgIC8vIGNvbnN0IGRva2thbm9CQlMgPSAnZG9ra2EuYmJzLmNvbSc7XG4gICAgaWYgKHRocmVhZFVybC5pbmRleE9mKHNpdGFyYWJhRG9tYWluKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXG4gICAgICAgIHJldHVybiBzaXRhcmFiYTtcbiAgICB9XG4gICAgLy8g44Gp44GT44Gr44KC6Kmy5b2T44GX44Gq44GL44Gj44Gf44KJ44Go44KK44GC44GI44GaNWNo44GnXG4gICAgLy8g44GT44Gu6L6644KC5a++5b+c44OJ44Oh44Kk44Oz44Oq44K544OI44Go44GL5L2c44Gj44Gm44Gh44KD44KT44Go5Yik5a6a44GX44Gf44G744GG44GM44KI44GV44Gd44GGXG4gICAgcmV0dXJuIHJlYWQ1Y2g7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWjJWMFVtVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVoyVjBVbVZ6TG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc09FUkJRU3RDTzBGQlJTOUNMRFpFUVVFMFJ5eERRVUZETEdsQ1FVRnBRanRCUVVNNVNDeHRSRUZCYzBZc1EwRkJReXh0UWtGQmJVSTdRVUZETVVjc1NVRkJUU3hSUVVGUkxFZEJRVWNzU1VGQlNTeHpRa0ZCV1N4RlFVRkZMRU5CUVVNN1FVRkRjRU1zU1VGQlRTeFBRVUZQTEVkQlFVY3NTVUZCU1N4cFFrRkJUeXhGUVVGRkxFTkJRVU03UVVGRE9VSXNjME5CUVhORE8wRkJRM1JETEVsQlFVa3NVMEZCVXl4SFFVRm5ReXhKUVVGWExFTkJRVU03UVVGRmVrUTdPenM3UjBGSlJ6dEJRVU5WTEZGQlFVRXNUVUZCVFN4SFFVRkhMRlZCUVU4c1UwRkJhVUlzUlVGQlJTeE5RVUZqT3pzN096czdaMEpCUlRGRUxHdEVRVUZyUkR0blFrRkZiRVFzT0VKQlFUaENPMmRDUVVNNVFpeFRRVUZUTEVkQlFVY3NZVUZCWVN4RFFVRkRMRk5CUVZNc1EwRkJVU3hEUVVGRE8yZENRVWN6UWl4eFFrRkJUU3hUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1JVRkJRVHM3WjBKQlFXeEVMRkZCUVZFc1IwRkJSeXhUUVVGMVF6dG5Ra0ZEZUVRc2FVZEJRV2xITzJkQ1FVVnFSeXh6UWtGQlR5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVVNc1IwRkJSenQzUWtGRGRFSXNOa0pCUTBzc1IwRkJSeXhMUVVOT0xFMUJRVTBzUlVGQlJTeEZRVUZGTEVsQlExWTdiMEpCUTBvc1EwRkJReXhEUVVGRExFVkJRVU03T3p0blFrRkZTQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFlpeHpRa0ZCVHl4RlFVRkZMRVZCUVVNN096czdTMEZGWWl4RFFVRkRPMEZCUlZjc1VVRkJRU3hoUVVGaExFZEJRVWNzVlVGQlR5eFJRVUZuUWpzN096czdaMEpCUXpWRExHTkJRV01zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenR4UWtGRGVFTXNRMEZCUVN4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkJMRVZCUVhaRExIZENRVUYxUXp0blFrRkhiRU1zY1VKQlFVMHNkMEpCUVd0Q0xFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVRTdPMWxCUm5wRExEQkNRVUV3UWp0WlFVTXhRaXhGUVVGRk8xbEJRMFlzYzBKQlFVOHNVMEZCYTBNc1JVRkJRenR2UWtGRmJrTXNjVUpCUVUwc2JVSkJRVmtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUVR0dlFrRkJia01zYzBKQlFVOHNVMEZCTkVJc1JVRkJRenM3TzB0QlJYWkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxGbEJRVmtzUjBGQlJ5eFZRVUZQTEZGQlFXZENMRVZCUVVVc1dVRkJiMElzUlVGQlJTeFBRVUZsTEVWQlFVVXNUMEZCWlRzN096czdaMEpCUTNwSExITkNRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRzlDUVVGclFpeFJRVUZSTEZOQlFVa3NXVUZCV1N4VFFVRkpMRTlCUVZNc1EwRkJReXhEUVVGRE8yZENRVVUxUkN4alFVRmpMRWRCUVVjc2IwSkJRVzlDTEVOQlFVTTdjVUpCUTNoRExFTkJRVUVzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlFTeEZRVUYyUXl4M1FrRkJkVU03WjBKQlJXeERMSEZDUVVGTkxITkNRVUZuUWl4RFFVRkRMRkZCUVZFc1JVRkJSU3haUVVGWkxFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RlFVRkJPenRaUVVSMlJTd3dRa0ZCTUVJN1dVRkRNVUlzYzBKQlFVOHNVMEZCWjBVc1JVRkJRenR2UWtGRmFrVXNjVUpCUVUwc2FVSkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNXVUZCV1N4RlFVRkZMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlFUdHZRa0ZCYWtVc2MwSkJRVThzVTBGQk1FUXNSVUZCUXpzN08wdEJSWEpGTEVOQlFVTTdRVUZGUmpzN1IwRkZSenRCUVVOSUxFbEJRVTBzWVVGQllTeEhRVUZITEZWQlFVTXNVMEZCYVVJN1NVRkRkRU1zV1VGQldUdEpRVU5hTEVsQlFVMHNZMEZCWXl4SFFVRkhMRzlDUVVGdlFpeERRVUZETzBsQlF6VkRMRFpDUVVFMlFqdEpRVU0zUWl4elEwRkJjME03U1VGRmRFTXNTVUZCU1N4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPMUZCUXpWRExEQkNRVUV3UWp0UlFVTXhRaXhQUVVGUExGRkJRVkVzUTBGQlF6dExRVU5xUWp0SlFVTkVMSGRDUVVGM1FqdEpRVU40UWl4dlEwRkJiME03U1VGRGNFTXNUMEZCVHl4UFFVRlBMRU5CUVVNN1FVRkRha0lzUTBGQlF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICog44GX44Gf44KJ44Gw6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXG4gKi9cbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XG52YXIgaWNvbnZfbGl0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpY29udi1saXRlXCIpKTsgLy8g5paH5a2X44Kz44O844OJ5aSJ5o+b55So44OR44OD44Kx44O844K4XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgZW5jb2RpbmdfamFwYW5lc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW5jb2RpbmctamFwYW5lc2VcIikpO1xuLyoqIOOCueODrOS4gOimp+OCkuiqreOBv+i+vOOCgCAqL1xuZXhwb3J0cy5yZWFkQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlcXVlc3RVcmwsIGxpc3QsIG9wdGlvbnMsIHJlc3BvbnNlLCBzdHIsIGVycm9yXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IGJvYXJkVXJsICsgXCJzdWJqZWN0LnR4dFwiO1xuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ0VVQy1KUCcpO1xuICAgICAgICAgICAgICAgIC8vIOODkeODvOOCueOBl+OBpuagvOe0jVxuICAgICAgICAgICAgICAgIGxpc3QucHVzaC5hcHBseShsaXN0LCBzdHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtOyB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBwYXJzZVRocmVhZExpc3QoYm9hcmRVcmwsIGxpbmUpOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8xLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgbGlzdF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLyoqXG4gKiDjg6zjgrnjgpLmipXnqL/jgZnjgotcbiAqIEBwYXJhbSBob3N0bmFtZSDjg5vjgrnjg4jlkI3jgIJodHRwczovL2hvZ2Vob2dlL1xuICogQHBhcmFtIHRocmVhZE51bWJlciDjgrnjg6znlarlj7cgMTIzNDU2NzhcbiAqIEBwYXJhbSBib2FyZElkIOadv0lEIHBhc3RhMDRcbiAqIEBwYXJhbSBtZXNzYWdlIOaKleeov+aWh1xuICovXG5leHBvcnRzLnBvc3RSZXMgPSBmdW5jdGlvbiAoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdW5pY29kZUFycmF5LCBpLCBzamlzQXJyYXksIGVuY29kZWRLZXl3b3JkLCBkaXIsIGJicztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkucHVzaChtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzamlzQXJyYXkgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQuY29udmVydCh1bmljb2RlQXJyYXksIHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdFVUNKUCcsXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdVTklDT0RFJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbmNvZGVkS2V5d29yZCA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC51cmxFbmNvZGUoc2ppc0FycmF5KTtcbiAgICAgICAgICAgICAgICBkaXIgPSBib2FyZElkLnNwbGl0KCcvJylbMF07XG4gICAgICAgICAgICAgICAgYmJzID0gYm9hcmRJZC5zcGxpdCgnLycpWzFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdC5wb3N0KGhvc3RuYW1lICsgXCJiYnMvd3JpdGUuY2dpL1wiICsgYm9hcmRJZCArIFwiL1wiICsgdGhyZWFkTnVtYmVyICsgXCIvXCIsIFwiZGlyPVwiICsgZGlyICsgXCImYmJzPVwiICsgYmJzICsgXCIma2V5PVwiICsgdGhyZWFkTnVtYmVyICsgXCImdGltZT1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCImbmFtZT0mbWFpbD1zYWdlJk1FU1NBR0U9XCIgKyBlbmNvZGVkS2V5d29yZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJyovKicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnZ3ppcCwgZGVmbGF0ZSwgYnInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZmVyZXI6IFwiXCIgKyBob3N0bmFtZSArIGJvYXJkSWQgKyBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8qKlxuICog44Kz44Oz44K544OI44Op44Kv44K/XG4gKi9cbnZhciBSZWFkU2l0YXJhYmEgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVhZFNpdGFyYWJhKCkge1xuICAgICAgICAvLyBjb25zdHJ1Y3RvcigpIHt9XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjgrnoqq3jgb/ovrzjgb9cbiAgICAgICAgICogQGRlc2NyaXB0aW9uIOW8leaVsOOBp+aMh+WumuOBl+OBn+adv+OBi+OCieODrOOCueOCkuiqreOCgOOAglxuICAgICAgICAgKiBAZGVzY3JpcHRpb24g44Os44K555Wq5Y+344KS5oyH5a6a44GX44Gm44GE44Gq44GE5aC05ZCI44Gv5pyA5pawMeS7tuWPluW+l1xuICAgICAgICAgKiBAcGFyYW0gdGhyZWFkVXJsIOOCueODrFVSTFxuICAgICAgICAgKiBAcGFyYW0gcmVzTnVtIOODrOOCueeVquWPt1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWFkID0gZnVuY3Rpb24gKHRocmVhZFVybCwgcmVzTnVtKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdFVybCwgb3B0aW9ucywgcmVzcG9uc2UsIHN0ciwgcmVzcG9uc2VKc29uO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IHRocmVhZFVybC5yZXBsYWNlKCdyZWFkLmNnaScsICdyYXdtb2RlLmNnaScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc051bSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjgrnnlarlj7fjgYzjgYLjgovloLTlkIjjg6zjgrnnlarlj7fku6XpmY3jgpLlj5blvpdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsICs9IHJlc051bSArICctJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOOCueeVquWPt+OBjOOBquOBhOWgtOWQiOacgOaWsOOBrjHku7blj5blvpdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsICs9ICdsMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGRlY29kZVVuaWNvZGVTdHIoaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpLCAnRVVDLUpQJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VOZXdSZXNwb25zZShzdHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlSnNvbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgIH1cbiAgICByZXR1cm4gUmVhZFNpdGFyYWJhO1xufSgpKTtcbi8qKlxuICog5Y+W5b6X44GX44Gf44Os44K544Od44Oz44K577yI6KSH5pWw77yJ44Gu44OR44O844K5XG4gKiBAcGFyYW0gcmVzXG4gKi9cbnZhciBwdXJzZU5ld1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlcykge1xuICAgIC8v57WQ5p6c44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIC8vIOaWsOedgOODrOOCueOCkuaUueihjOOBlOOBqOOBq1NwbGl044GZ44KLXG4gICAgdmFyIHJlc0FycmF5ID0gcmVzLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuICAgIC8vIDHooYzjgZTjgajjgavjg5Hjg7zjgrnjgZnjgotcbiAgICByZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvLyDjg5Hjg7zjgrnjg6Hjgr3jg4Pjg4nlkbzjgbPlh7rjgZdcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHB1cnNlUmVzcG9uc2UodmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiDjgrnjg6zkuIDopqfjga7jg5Hjg7zjgrlcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcbiAqIEBwYXJhbSBJbnRlZ2VyIC8vIG51bSDjg6zjgrnnlarvvIgw44K544K/44O844OI77yJXG4gKi9cbnZhciBwYXJzZVRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwsIHN1YmplY3RMaW5lKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXG4gICAgLy/jg6zjgrnjga7opoHntKBcbiAgICAvLzA6ZGF05ZCNXG4gICAgLy8xOuOCueODrOOCv+OCpO+8iOODrOOCueaVsO+8iVxuICAgIHZhciBzcGxpdFJlcyA9IHN1YmplY3RMaW5lLnNwbGl0KCcsJyk7XG4gICAgLy8gY29uc29sZS5sb2coc3BsaXRSZXMpO1xuICAgIHZhciBkYXROdW0gPSBzcGxpdFJlc1swXS5yZXBsYWNlKCcuY2dpJywgJycpO1xuICAgIHZhciBob3N0bmFtZSA9IChfYiA9IChfYSA9IGJvYXJkVXJsLm1hdGNoKC9eaHR0cHM/OlxcL1xcLy4rP1xcLy8pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIHZhciBib2FyZE5hbWUgPSBib2FyZFVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJyk7XG4gICAgdmFyIHVybCA9IGhvc3RuYW1lICsgXCJiYnMvcmVhZC5jZ2kvXCIgKyBib2FyZE5hbWUgKyBkYXROdW0gKyBcIi9cIjtcbiAgICAvLyBsb2cuaW5mbyhgJHtob3N0bmFtZX0gICR7Ym9hcmROYW1lfSAke2RhdE51bX1gKTtcbiAgICB2YXIgdGl0bGVUZW1wID0gc3BsaXRSZXNbMV07XG4gICAgdmFyIG5hbWUgPSAoX2QgPSAoX2MgPSB0aXRsZVRlbXAubWF0Y2goLyguKj8pXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzFdKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAn4piF5Y+W5b6X5aSx5pWX4piFJztcbiAgICB2YXIgcmVzTnVtID0gTnVtYmVyKChfZSA9IHRpdGxlVGVtcC5tYXRjaCgvXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lWzBdLnJlcGxhY2UoL1xcKHxcXCkvZywgJycpKTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcmVzTnVtOiByZXNOdW0sXG4gICAgfTtcbn07XG4vKipcbiAqIOODrOOCueODneODs+OCueOBruODkeODvOOCuVxuICogSnNvbuOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtOOBmeOCi1xuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxuICovXG52YXIgcHVyc2VSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXG4gICAgLy/jg6zjgrnjga7opoHntKBcbiAgICAvLzA644Os44K555Wq5Y+3XG4gICAgLy8xOuWQjeWJjVxuICAgIC8vMjrjg6HjgqLjg4lcbiAgICAvLzM65pel5LuYXG4gICAgLy80OuacrOaWh1xuICAgIC8vNTrjgrnjg6zjgr/jgqRcbiAgICAvLzY6SURcbiAgICB2YXIgc3BsaXRSZXMgPSByZXMuc3BsaXQoJzw+Jyk7XG4gICAgdmFyIHJlc0pzb24gPSB7XG4gICAgICAgIG51bWJlcjogTnVtYmVyKHNwbGl0UmVzWzBdKSxcbiAgICAgICAgbmFtZTogc3BsaXRSZXNbMV0sXG4gICAgICAgIGVtYWlsOiBzcGxpdFJlc1syXSxcbiAgICAgICAgZGF0ZTogc3BsaXRSZXNbM10sXG4gICAgICAgIHRleHQ6IHNwbGl0UmVzWzRdLFxuICAgICAgICAvLyB0aHJlYWRUaXRsZTogc3BsaXRSZXNbNV0sXG4gICAgICAgIGlkOiBzcGxpdFJlc1s2XSxcbiAgICAgICAgaW1nVXJsOiAnJyxcbiAgICB9O1xuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxuICAgIHJldHVybiByZXNKc29uO1xufTtcbi8qKiDjgZfjgZ/jgonjgbDjgaDjgZHjga/lhajop5Ljg4Djg4Pjgrfjg6XjgYxVbmljb2Rl5paH5a2X5YiX44Go44GX44Gm5qC857SN44GV44KM44KL44Gu44Gn5aSJ5o+b44GZ44KLICovXG52YXIgZGVjb2RlVW5pY29kZVN0ciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjNjUzNzQ7L2csICfvvZ4nKTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkU2l0YXJhYmE7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljbVZoWkZOcGRHRnlZV0poTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2ljbVZoWkZOcGRHRnlZV0poTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFN08wZEJSVWM3UVVGRFNDeG5SRUZCYTBRN1FVRkRiRVFzTUVSQlFTdENMRU5CUVVNc1owSkJRV2RDTzBGQlEyaEVMRGhFUVVFclFqdEJRVVV2UWl4M1JVRkJlVU03UVVGRmVrTXNaMEpCUVdkQ08wRkJRMGdzVVVGQlFTeFRRVUZUTEVkQlFVY3NWVUZCVHl4UlFVRm5RanM3T3pzN1owSkJRM2hETEZWQlFWVXNSMEZCVFN4UlFVRlJMR2RDUVVGaExFTkJRVU03WjBKQlEzUkRMRWxCUVVrc1IwRkJlVU1zUlVGQlJTeERRVUZETzJkQ1FVZG9SQ3hQUVVGUExFZEJRWFZDTzI5Q1FVTnNReXhIUVVGSExFVkJRVVVzVlVGQlZUdHZRa0ZEWml4TlFVRk5MRVZCUVVVc1MwRkJTenR2UWtGRFlpeFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrN2IwSkJRMnBDTEZsQlFWa3NSVUZCUlN4aFFVRmhPMmxDUVVNMVFpeERRVUZET3pzN08yZENRVWxwUWl4eFFrRkJUU3hsUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVRTdPMmRDUVVFdlFpeFJRVUZSTEVkQlFVY3NVMEZCYjBJN1owSkJUeTlDTEVkQlFVY3NSMEZCUnl4dlFrRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0blFrRkRMMFFzVlVGQlZUdG5Ra0ZEVml4SlFVRkpMRU5CUVVNc1NVRkJTU3hQUVVGVUxFbEJRVWtzUlVGRFF5eEhRVUZITzNGQ1FVTklMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU03Y1VKQlExZ3NUVUZCVFN4RFFVRkRMRlZCUVVNc1NVRkJTU3hKUVVGTExFOUJRVUVzU1VGQlNTeEZRVUZLTEVOQlFVa3NRMEZCUXp0eFFrRkRkRUlzUjBGQlJ5eERRVUZETEZWQlFVTXNTVUZCU1N4SlFVRkxMRTlCUVVFc1pVRkJaU3hEUVVGRExGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNSVUZCTDBJc1EwRkJLMElzUTBGQlF5eEZRVU5xUkRzN096dG5Ra0ZGUml4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5dzBRMEZCTkVNc1IwRkJSeXhQUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdaMEpCUTNoRkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dHZRa0ZIZEVNc2MwSkJRVThzU1VGQlNTeEZRVUZET3pzN1MwRkRZaXhEUVVGRE8wRkJSVVk3T3pzN096dEhRVTFITzBGQlExVXNVVUZCUVN4UFFVRlBMRWRCUVVjc1ZVRkJUeXhSUVVGblFpeEZRVUZGTEZsQlFXOUNMRVZCUVVVc1QwRkJaU3hGUVVGRkxFOUJRV1U3T3pzN08yZENRVVU1Uml4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZENRVU40UWl4TFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3YjBKQlEzWkRMRmxCUVZrc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8ybENRVU14UXp0blFrRkRTeXhUUVVGVExFZEJRVWNzTWtKQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRk8yOUNRVU12UXl4RlFVRkZMRVZCUVVVc1QwRkJUenR2UWtGRFdDeEpRVUZKTEVWQlFVVXNVMEZCVXp0cFFrRkRhRUlzUTBGQlF5eERRVUZETzJkQ1FVTkhMR05CUVdNc1IwRkJSeXd5UWtGQlVTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRm5RaXhEUVVGRExFTkJRVU03WjBKQlIzUkVMRWRCUVVjc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVVUxUWl4SFFVRkhMRWRCUVVjc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRmJFTXNjVUpCUVUwc1pVRkJTeXhEUVVGRExFbEJRVWtzUTBGRFdDeFJRVUZSTEhOQ1FVRnBRaXhQUVVGUExGTkJRVWtzV1VGQldTeE5RVUZITEVWQlEzUkVMRk5CUVU4c1IwRkJSeXhoUVVGUkxFZEJRVWNzWVVGQlVTeFpRVUZaTEdOQlFWTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzYVVOQlFUUkNMR05CUVdkQ0xFVkJRMnhJTzNkQ1FVTkZMRTlCUVU4c1JVRkJSVHMwUWtGRFVDeE5RVUZOTEVWQlFVVXNTMEZCU3pzMFFrRkRZaXhqUVVGakxFVkJRVVVzYlVOQlFXMURPelJDUVVOdVJDeHBRa0ZCYVVJc1JVRkJSU3h0UWtGQmJVSTdORUpCUTNSRExFOUJRVThzUlVGQlJTeExRVUZITEZGQlFWRXNSMEZCUnl4UFFVRlBMRTFCUVVjN2VVSkJRMnhETzNGQ1FVTkdMRU5CUTBZc1JVRkJRVHM3WjBKQldFUXNVMEZYUXl4RFFVRkRPenM3TzB0QlEwZ3NRMEZCUXp0QlFVVkdPenRIUVVWSE8wRkJRMGc3U1VGQlFUdFJRVU5GTEcxQ1FVRnRRanRSUVVSeVFpeHBRa0Y1UTBNN1VVRjBRME03T3pzN096dFhRVTFITzFGQlEwZ3NVMEZCU1N4SFFVRkhMRlZCUVU4c1UwRkJhVUlzUlVGQlJTeE5RVUZqT3pzN096dDNRa0ZOZWtNc1ZVRkJWU3hIUVVGSExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8zZENRVU01UkN4SlFVRkpMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3TkVKQlEyUXNjVUpCUVhGQ096UkNRVU55UWl4VlFVRlZMRWxCUVVrc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF6dDVRa0ZETlVJN05rSkJRVTA3TkVKQlEwd3NiVUpCUVcxQ096UkNRVU51UWl4VlFVRlZMRWxCUVVrc1NVRkJTU3hEUVVGRE8zbENRVU53UWp0M1FrRkpTeXhQUVVGUExFZEJRWFZDT3pSQ1FVTnNReXhIUVVGSExFVkJRVVVzVlVGQlZUczBRa0ZEWml4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeFpRVUZaTEVWQlFVVXNZVUZCWVRzMFFrRkRNMElzVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpPM2xDUVVOc1FpeERRVUZETzNkQ1FVTmxMSEZDUVVGTkxHVkJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCUVRzN2QwSkJRUzlDTEZGQlFWRXNSMEZCUnl4VFFVRnZRanQzUWtGRkwwSXNSMEZCUnl4SFFVRkhMR2RDUVVGblFpeERRVUZETEc5Q1FVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdkMEpCUlRORkxGbEJRVmtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dDNRa0ZGTTBNc2MwSkJRVThzV1VGQldTeEZRVUZET3pzN1lVRkRja0lzUTBGQlF6dEpRVU5LTEVOQlFVTTdTVUZCUkN4dFFrRkJRenRCUVVGRUxFTkJRVU1zUVVGNlEwUXNTVUY1UTBNN1FVRkZSRHM3TzBkQlIwYzdRVUZEU0N4SlFVRk5MR2RDUVVGblFpeEhRVUZITEZWQlFVTXNSMEZCVnp0SlFVTnVReXhYUVVGWE8wbEJRMWdzU1VGQlRTeE5RVUZOTEVkQlFYVkRMRVZCUVVVc1EwRkJRenRKUVVWMFJDeHZRa0ZCYjBJN1NVRkRjRUlzU1VGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFTkJRVU1zUTBGQlF6dEpRVU42UXl4aFFVRmhPMGxCUTJJc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZETEV0QlFVczdVVUZEY2tJc1kwRkJZenRSUVVOa0xFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dFRRVU51UXp0SlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eE5RVUZOTEVOQlFVTTdRVUZEYUVJc1EwRkJReXhEUVVGRE8wRkJSVVk3T3pzN1IwRkpSenRCUVVOSUxFbEJRVTBzWlVGQlpTeEhRVUZITEZWQlFVTXNVVUZCWjBJc1JVRkJSU3hYUVVGdFFqczdTVUZETlVRc1pVRkJaVHRKUVVObUxFOUJRVTg3U1VGRFVDeFJRVUZSTzBsQlExSXNZVUZCWVR0SlFVTmlMRWxCUVUwc1VVRkJVU3hIUVVGSExGZEJRVmNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRlRU1zZVVKQlFYbENPMGxCUTNwQ0xFbEJRVTBzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUlM5RExFbEJRVTBzVVVGQlVTeGxRVUZITEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNNRU5CUVVjc1EwRkJReXh2UTBGQlN5eEZRVUZGTEVOQlFVTTdTVUZEYUVVc1NVRkJUU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03U1VGRGFrUXNTVUZCVFN4SFFVRkhMRWRCUVUwc1VVRkJVU3h4UWtGQlowSXNVMEZCVXl4SFFVRkhMRTFCUVUwc1RVRkJSeXhEUVVGRE8wbEJRemRFTEcxRVFVRnRSRHRKUVVWdVJDeEpRVUZOTEZOQlFWTXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRk9VSXNTVUZCVFN4SlFVRkpMR1ZCUVZjc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eGxRVUZsTEVOQlFVTXNNRU5CUVVjc1EwRkJReXh2UTBGQlN5eFJRVUZSTEVOQlFVTTdTVUZEZGtVc1NVRkJUU3hOUVVGTkxFZEJRVWNzVFVGQlRTeFBRVUZETEZOQlFWTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExEQkRRVUZITEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETzBsQlJUbEZMRmxCUVZrN1NVRkRXaXhQUVVGUE8xRkJRMHdzUjBGQlJ5eExRVUZCTzFGQlEwZ3NTVUZCU1N4TlFVRkJPMUZCUTBvc1RVRkJUU3hSUVVGQk8wdEJRMUFzUTBGQlF6dEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFVVkdPenM3TzBkQlNVYzdRVUZEU0N4SlFVRk5MR0ZCUVdFc1IwRkJSeXhWUVVGRExFZEJRVmM3U1VGRGFFTXNaVUZCWlR0SlFVTm1MRTlCUVU4N1NVRkRVQ3hSUVVGUk8wbEJRMUlzVFVGQlRUdEpRVU5PTEU5QlFVODdTVUZEVUN4TlFVRk5PMGxCUTA0c1RVRkJUVHRKUVVOT0xGRkJRVkU3U1VGRFVpeE5RVUZOTzBsQlEwNHNTVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVTnFReXhKUVVGTkxFOUJRVThzUjBGQlJ6dFJRVU5rTEUxQlFVMHNSVUZCUlN4TlFVRk5MRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFGQlF6TkNMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycENMRXRCUVVzc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyeENMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycENMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEycENMRFJDUVVFMFFqdFJRVU0xUWl4RlFVRkZMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5tTEUxQlFVMHNSVUZCUlN4RlFVRkZPMHRCUTFnc1EwRkJRenRKUVVOR0xGbEJRVms3U1VGRFdpeFBRVUZQTEU5QlFVOHNRMEZCUXp0QlFVTnFRaXhEUVVGRExFTkJRVU03UVVGRlJpdzJRMEZCTmtNN1FVRkROME1zU1VGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhWUVVGRExFZEJRVmM3U1VGRGJrTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjJReXhEUVVGRExFTkJRVU03UVVGRlJpeHJRa0ZCWlN4WlFVRlpMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgZ2V0UmVzXzEgPSByZXF1aXJlKFwiLi9yZWFkQkJTL2dldFJlc1wiKTtcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3RcIik7XG52YXIgaXNHZXR0aW5nID0gZmFsc2U7XG52YXIgZ2V0UmVzSW50ZXJ2YWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKCEhKChfYiA9IChfYSA9IGdsb2JhbFRoaXMgPT09IG51bGwgfHwgZ2xvYmFsVGhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsVGhpcy5lbGVjdHJvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50aHJlYWQudXJsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDUwMDApXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgZ2V0UmVzSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIGV4cG9ydHMudXBkYXRlUmVzKCldO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoNTAwMCldO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBnZXRSZXNJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5nZXRSZXNJbnRlcnZhbCgpO1xuZXhwb3J0cy51cGRhdGVSZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBmZXRjaFJlc051bSwgbGFzdFJlc051bV8xLCByZXN1bHQsIG5ld1Jlc3VsdCwgZV8xO1xuICAgIHZhciBfYTtcbiAgICB2YXIgX2IsIF9jLCBfZCwgX2U7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xuICAgICAgICBzd2l0Y2ggKF9mLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKGlzR2V0dGluZylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIGlzR2V0dGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgX2YubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9mLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZXNOdW0gPSAoX2MgPSAoX2IgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3RbZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0Lmxlbmd0aCAtIDFdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubnVtYmVyKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAxO1xuICAgICAgICAgICAgICAgIGxhc3RSZXNOdW1fMSA9IChfZSA9IChfZCA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGlzdFtnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3QubGVuZ3RoIC0gMV0pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5udW1iZXIpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0UmVzXzEuZ2V0UmVzKGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQudXJsLCBmZXRjaFJlc051bSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9mLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDmjIflrprjgZfjgZ/jg6zjgrnnlarjga/pmaTlpJblr77osaFcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXS5udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UmVzdWx0ID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMubnVtYmVyID4gbGFzdFJlc051bV8xOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0KS5wdXNoLmFwcGx5KF9hLCBuZXdSZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3UmVzdWx0Lmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kRG9tRm9yQ2hhdFdpbmRvdyhuZXdSZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlXzEgPSBfZi5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGlzR2V0dGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLmNyZWF0ZURvbSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgdmFyIGRvbVN0ciA9IFwiPGxpIGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiPlwiO1xuICAgIGRvbVN0ciArPSBcIjxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlwiO1xuICAgIC8vIOODrOOCueeVquihqOekulxuICAgIGRvbVN0ciArPSBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZXNOdW1iZXJcXFwiPlwiICsgbWVzc2FnZS5udW1iZXIgKyBcIjwvc3Bhbj5cXG4gICAgXCI7XG4gICAgLy8g5ZCN5YmN6KGo56S6XG4gICAgZG9tU3RyICs9IFwiPHNwYW4gY2xhc3M9XFxcIm5hbWVcXFwiPlwiICsgbWVzc2FnZS5uYW1lICsgXCI8L3NwYW4+XCI7XG4gICAgLy8g5pmC5Yi76KGo56S6XG4gICAgZG9tU3RyICs9IFwiPHNwYW4gY2xhc3M9XFxcImRhdGVcXFwiPlwiICsgbWVzc2FnZS5kYXRlICsgXCI8L3NwYW4+XCI7XG4gICAgZG9tU3RyICs9ICc8YnIvPic7XG4gICAgZG9tU3RyICs9IFwiXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJyZXNcXFwiPlxcbiAgICAgIFwiICsgbWVzc2FnZS50ZXh0XG4gICAgICAgIC5yZXBsYWNlKC88YSAuKj8+L2csICcnKSAvLyDjgZfjgZ/jgonjgbDjga/jgqLjg7Pjgqvjg7zjgpJh44K/44Kw5YyW44GX44Gm44GE44KLXG4gICAgICAgIC5yZXBsYWNlKC88XFxcXGE+L2csICcnKSArIFwiXFxuICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICA8L2xpPlwiO1xuICAgIHJldHVybiBkb21TdHI7XG59O1xudmFyIHNlbmREb21Gb3JDaGF0V2luZG93ID0gZnVuY3Rpb24gKG1lc3NhZ2VMaXN0KSB7XG4gICAgdmFyIGRvbVN0cjIgPSBtZXNzYWdlTGlzdFxuICAgICAgICAubWFwKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHZhciBpbWdVcmwgPSBtZXNzYWdlLmltZ1VybCAmJiBtZXNzYWdlLmltZ1VybC5tYXRjaCgvXlxcLi8pID8gJy4uLy4uL3B1YmxpYy8nICsgbWVzc2FnZS5pbWdVcmwgOiBtZXNzYWdlLmltZ1VybDtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBtZXNzYWdlKSwgeyBpbWdVcmw6IGltZ1VybCB9KTtcbiAgICB9KVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBleHBvcnRzLmNyZWF0ZURvbShtZXNzYWdlKTsgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cud2ViQ29udGVudHMuc2VuZChjb25zdF8xLmVsZWN0cm9uRXZlbnRbJ3Nob3ctY29tbWVudCddLCB7IGRvbTogZG9tU3RyMiB9KTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUmhjblJUWlhKMlpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKemRHRnlkRk5sY25abGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzT0VSQlFTdENPMEZCUXk5Q0xDdENRVUVyUWp0QlFVTXZRaXd5UTBGQk5FUTdRVUZETlVRc2FVTkJRWGRETzBGQlJYaERMRWxCUVVrc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU4wUWl4SlFVRk5MR05CUVdNc1IwRkJSenM3T3pzN2NVSkJSV3BDTEdOQlFVTXNWVUZCVlN4aFFVRldMRlZCUVZVc2RVSkJRVllzVlVGQlZTeERRVUZGTEZGQlFWRXNNRU5CUVVVc1NVRkJTU3d3UTBGQlJTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkJMRVZCUVhaRExIZENRVUYxUXp0blFrRkRla01zY1VKQlFVMHNXVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGQk96dG5Ra0ZCYWtJc1UwRkJhVUlzUTBGQlF6dG5Ra0ZEYkVJc1kwRkJZeXhGUVVGRkxFTkJRVU03WjBKQlEycENMSE5DUVVGUE8yOUNRVVZVTEhGQ1FVRk5MR2xDUVVGVExFVkJRVVVzUlVGQlFUczdaMEpCUVdwQ0xGTkJRV2xDTEVOQlFVTTdaMEpCUld4Q0xIRkNRVUZOTEZsQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJRVHM3WjBKQlFXcENMRk5CUVdsQ0xFTkJRVU03WjBKQlEyeENMR05CUVdNc1JVRkJSU3hEUVVGRE96czdPMHRCUTJ4Q0xFTkJRVU03UVVGRFJpeGpRVUZqTEVWQlFVVXNRMEZCUXp0QlFVVktMRkZCUVVFc1UwRkJVeXhIUVVGSE96czdPenM3TzJkQ1FVTjJRaXhKUVVGSkxGTkJRVk03YjBKQlFVVXNjMEpCUVU4N1owSkJRM1JDTEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNN096czdaMEpCUlZRc1YwRkJWeXhsUVVGWExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMREJEUVVGRkxFMUJRVTBzYlVOQlFVa3NRMEZCUXl4RFFVRkRPMmRDUVVONlNDd3lRa0ZCWVN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5d3dRMEZCUlN4TlFVRk5MRzFEUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZGZGtjc2NVSkJRVTBzWlVGQll5eERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVFN08yZENRVUV2UlN4TlFVRk5MRWRCUVVjc1UwRkJjMFU3WjBKQlEzSkdMR1ZCUVdVN1owSkJRMllzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEyNUVMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFVTXNSMEZCUnl4SlFVRkxMRTlCUVVNc1IwRkJSeXhEUVVGRExFMUJRV2xDTEVkQlFVY3NXVUZCVlN4RlFVRnVReXhEUVVGdFF5eERRVUZETEVOQlFVTTdiMEpCUXpsRkxFTkJRVUVzUzBGQlFTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZCTEVOQlFVTXNTVUZCU1N4WFFVRkpMRk5CUVZNc1JVRkJSVHR2UWtGRmVFUXNTVUZCU1N4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU03ZDBKQlFVVXNiMEpCUVc5Q0xFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdhVUpCUXpORU96czdPMmRDUVVWRUxITkNRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRE96czdaMEpCUldZc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF6czdPenRMUVVOdVFpeERRVUZETzBGQlJWY3NVVUZCUVN4VFFVRlRMRWRCUVVjc1ZVRkJReXhQUVVGdlFqdEpRVU0xUXl4SlFVRkpMRTFCUVUwc1IwRkJSeXd3UWtGQmQwSXNRMEZCUXp0SlFVVjBReXhOUVVGTkxFbEJRVWtzZVVKQlFYVkNMRU5CUVVNN1NVRkZiRU1zVVVGQlVUdEpRVU5TTEUxQlFVMHNTVUZCU1N4MVEwRkRiMElzVDBGQlR5eERRVUZETEUxQlFVMHNhMEpCUTNwRExFTkJRVU03U1VGRFNpeFBRVUZQTzBsQlExQXNUVUZCVFN4SlFVRkpMREJDUVVGelFpeFBRVUZQTEVOQlFVTXNTVUZCU1N4WlFVRlRMRU5CUVVNN1NVRkRkRVFzVDBGQlR6dEpRVU5RTEUxQlFVMHNTVUZCU1N3d1FrRkJjMElzVDBGQlR5eERRVUZETEVsQlFVa3NXVUZCVXl4RFFVRkRPMGxCUlhSRUxFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTTdTVUZGYkVJc1RVRkJUU3hKUVVGSkxIVkRRVVZLTEU5QlFVOHNRMEZCUXl4SlFVRkpPMU5CUTFnc1QwRkJUeXhEUVVGRExGVkJRVlVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4eFFrRkJjVUk3VTBGRE4wTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zZFVOQlIzUkNMRU5CUVVNN1NVRkZVQ3hQUVVGUExFMUJRVTBzUTBGQlF6dEJRVU5vUWl4RFFVRkRMRU5CUVVNN1FVRkZSaXhKUVVGTkxHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1YwRkJNRUk3U1VGRGRFUXNTVUZCVFN4UFFVRlBMRWRCUVVjc1YwRkJWenRUUVVONFFpeEhRVUZITEVOQlFVTXNWVUZCUXl4UFFVRlBPMUZCUTFnc1NVRkJUU3hOUVVGTkxFZEJRVWNzVDBGQlR5eERRVUZETEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1pVRkJaU3hIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU03VVVGRGFrZ3NOa0pCUTBzc1QwRkJUeXhMUVVOV0xFMUJRVTBzVVVGQlFTeEpRVU5PTzBsQlEwb3NRMEZCUXl4RFFVRkRPMU5CUTBRc1IwRkJSeXhEUVVGRExGVkJRVU1zVDBGQlR5eEpRVUZMTEU5QlFVRXNhVUpCUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQmJFSXNRMEZCYTBJc1EwRkJRenRUUVVOd1F5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRaQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhGUVVGRkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEU5QlFVOHNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRNVWNzUTBGQlF5eERRVUZETzBGQlJVWXNhMEpCUVdVc1JVRkJSU3hEUVVGREluMD0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBmc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJmc1wiKSk7XG5leHBvcnRzLnJlYWRXYXZGaWxlcyA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LnJlYWRkaXIocGF0aCwgZnVuY3Rpb24gKGVyciwgZmlsZXMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB2YXIgZmlsZUxpc3QgPSBmaWxlcy5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNFeGlzdEZpbGUocGF0aCArICcvJyArIGZpbGUpICYmIC8uKlxcLndhdiQvLnRlc3QoZmlsZSk7IC8v57We44KK6L6844G/XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc29sdmUoZmlsZUxpc3QpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG52YXIgaXNFeGlzdEZpbGUgPSBmdW5jdGlvbiAoZmlsZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGZzXzEuZGVmYXVsdC5zdGF0U3luYyhmaWxlKS5pc0ZpbGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnRU5PRU5UJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZXhwb3J0cy5zbGVlcCA9IGZ1bmN0aW9uIChtc2VjKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtc2VjKTsgfSk7IH07XG5leHBvcnRzLmVzY2FwZUh0bWwgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWyYnYFwiPD5dL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJyYnOiAnJmFtcDsnLFxuICAgICAgICAgICAgXCInXCI6ICcmI3gyNzsnLFxuICAgICAgICAgICAgJ2AnOiAnJiN4NjA7JyxcbiAgICAgICAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgICAgICAgJzwnOiAnJmx0OycsXG4gICAgICAgICAgICAnPic6ICcmZ3Q7JyxcbiAgICAgICAgfVttYXRjaF07XG4gICAgfSk7XG59O1xuZXhwb3J0cy51bmVzY2FwZUh0bWwgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAgICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxuICAgICAgICAucmVwbGFjZSgvJiMwMzk7L2csIFwiJ1wiKVxuICAgICAgICAucmVwbGFjZSgvJiMwNDQ7L2csICcsJylcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pZFhScGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW5WMGFXd3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN1FVRkJRU3d3UTBGQmIwSTdRVUZEVUN4UlFVRkJMRmxCUVZrc1IwRkJSeXhWUVVGRExFbEJRVms3U1VGRGRrTXNUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhWUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTzFGQlEycERMRmxCUVVVc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEZWQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzN1dVRkRNVUlzU1VGQlNTeEhRVUZITzJkQ1FVRkZMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFpRVU55UWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFVTXNTVUZCU1R0blFrRkRha01zVDBGQlR5eFhRVUZYTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeFZRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zVFVGQlRUdFpRVU40UlN4RFFVRkRMRU5CUVVNc1EwRkJRenRaUVVOSUxFOUJRVThzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTB3c1EwRkJReXhEUVVGRE8wRkJSVVlzU1VGQlRTeFhRVUZYTEVkQlFVY3NWVUZCUXl4SlFVRlpPMGxCUXk5Q0xFbEJRVWs3VVVGRFJpeFpRVUZGTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETzFGQlF6TkNMRTlCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMkk3U1VGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlR0UlFVTmFMRWxCUVVrc1IwRkJSeXhEUVVGRExFbEJRVWtzUzBGQlN5eFJRVUZSTzFsQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNN1MwRkRla003UVVGRFNDeERRVUZETEVOQlFVTTdRVUZGVnl4UlFVRkJMRXRCUVVzc1IwRkJSeXhWUVVGRExFbEJRVmtzU1VGQlN5eFBRVUZCTEVsQlFVa3NUMEZCVHl4RFFVRkRMRlZCUVVNc1QwRkJUeXhKUVVGTExFOUJRVUVzVlVGQlZTeERRVUZETEU5QlFVOHNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJla0lzUTBGQmVVSXNRMEZCUXl4RlFVRnVSQ3hEUVVGdFJDeERRVUZETzBGQlJUbEZMRkZCUVVFc1ZVRkJWU3hIUVVGSExGVkJRVU1zVFVGQll6dEpRVU4yUXl4SlFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGRkJRVkVzUlVGQlJUdFJRVU01UWl4UFFVRlBMRTFCUVUwc1EwRkJRenRMUVVObU8wbEJRMFFzVDBGQlR5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmRCUVZjc1JVRkJSU3hWUVVGRExFdEJRVXM3VVVGRGRrTXNUMEZCVVR0WlFVTk9MRWRCUVVjc1JVRkJSU3hQUVVGUE8xbEJRMW9zUjBGQlJ5eEZRVUZGTEZGQlFWRTdXVUZEWWl4SFFVRkhMRVZCUVVVc1VVRkJVVHRaUVVOaUxFZEJRVWNzUlVGQlJTeFJRVUZSTzFsQlEySXNSMEZCUnl4RlFVRkZMRTFCUVUwN1dVRkRXQ3hIUVVGSExFVkJRVVVzVFVGQlRUdFRRVU5LTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1NVRkRia0lzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEVEN4RFFVRkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxGbEJRVmtzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEZEVNc1QwRkJUeXhIUVVGSE8xTkJRMUFzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRja0lzVDBGQlR5eERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRja0lzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRka0lzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRka0lzVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNN1UwRkRka0lzVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVNMVFpeERRVUZETEVOQlFVTWlmUT09IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24tanNvbi1zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvbi13aW5kb3ctc3RhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZW5jb2RpbmctamFwYW5lc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=