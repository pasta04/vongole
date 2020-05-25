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
        // let nowPath = electron.app.getAppPath();
        // if (nowPath.includes('Contents/Resources/app.asar')) {
        //   nowPath = nowPath.replace('app.asar', '') + '../../../';
        // }
        // const nowPath = path.resolve('')
        var nowPath = electron_1.default.app.getPath('userData');
        electron_log_1.default.info("[Config] path = " + nowPath);
        electron_json_storage_1.default.setDataPath(nowPath);
    }
    return Config;
}());
exports.default = new Config();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsZ0ZBQTRDO0FBQzVDLDhEQUErQjtBQUMvQixzREFBZ0M7QUFFaEM7SUFDRTtRQVdBLGdCQUFXLEdBQUc7WUFDWiwrQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFVLEVBQUUsSUFBUzs7Z0JBQzdDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBRyxJQUFJLENBQUMsU0FBUyxtQ0FBSSxFQUFFLENBQUM7WUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUM7UUFFRixhQUFhO1FBQ2Isa0JBQWEsR0FBRyxVQUFDLFNBQW9EO1lBQ25FLCtCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLEVBQUUsVUFBQyxHQUFHO2dCQUMxQyxNQUFNLEdBQUcsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBckJBLGFBQWE7UUFDYiwyQ0FBMkM7UUFDM0MseURBQXlEO1FBQ3pELDZEQUE2RDtRQUM3RCxJQUFJO1FBQ0osbUNBQW1DO1FBQ25DLElBQU0sT0FBTyxHQUFHLGtCQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxzQkFBRyxDQUFDLElBQUksQ0FBQyxxQkFBbUIsT0FBUyxDQUFDLENBQUM7UUFDdkMsK0JBQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQWFILGFBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBRUQsa0JBQWUsSUFBSSxNQUFNLEVBQUUsQ0FBQyJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vcmVhZEJCUy9SZWFkNWNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvZ2V0UmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvcmVhZFNpdGFyYWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N0YXJ0U2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVuY29kaW5nLWphcGFuZXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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QTJDLG03Rzs7Ozs7Ozs7Ozs7O0FDOUk5QjtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsMkJBQTJCLG1CQUFPLENBQUMsY0FBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0UsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdDQUF3QyxrQ0FBa0MsRUFBRSxFQUFFO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0Qix3QkFBd0I7QUFDeEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix1QkFBdUI7QUFDdkI7QUFDQSwyQ0FBMkMsdS9EOzs7Ozs7Ozs7OztBQ3JEM0Msa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluL21haW4udHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tanNvbi1zdG9yYWdlXCIpKTtcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciBlbGVjdHJvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvblwiKSk7XG52YXIgQ29uZmlnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbmZpZygpIHtcbiAgICAgICAgdGhpcy5nZXRCb2FkTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGVsZWN0cm9uX2pzb25fc3RvcmFnZV8xLmRlZmF1bHQuZ2V0KCdib2FyZExpc3QnLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCA9IChfYSA9IGRhdGEuYm9hcmRMaXN0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICAvKiog5p2/5LiA6Kan44KS5L+d5a2YICovXG4gICAgICAgIHRoaXMuc2F2ZUJvYXJkTGlzdCA9IGZ1bmN0aW9uIChib2FyZExpc3QpIHtcbiAgICAgICAgICAgIGVsZWN0cm9uX2pzb25fc3RvcmFnZV8xLmRlZmF1bHQuc2V0KCdib2FyZExpc3QnLCB7IGJvYXJkTGlzdDogYm9hcmRMaXN0IH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6Kit5a6a44OV44Kh44Kk44Or6Kqt44G/6L6844G/XG4gICAgICAgIC8vIGxldCBub3dQYXRoID0gZWxlY3Ryb24uYXBwLmdldEFwcFBhdGgoKTtcbiAgICAgICAgLy8gaWYgKG5vd1BhdGguaW5jbHVkZXMoJ0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhcicpKSB7XG4gICAgICAgIC8vICAgbm93UGF0aCA9IG5vd1BhdGgucmVwbGFjZSgnYXBwLmFzYXInLCAnJykgKyAnLi4vLi4vLi4vJztcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zdCBub3dQYXRoID0gcGF0aC5yZXNvbHZlKCcnKVxuICAgICAgICB2YXIgbm93UGF0aCA9IGVsZWN0cm9uXzEuZGVmYXVsdC5hcHAuZ2V0UGF0aCgndXNlckRhdGEnKTtcbiAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKFwiW0NvbmZpZ10gcGF0aCA9IFwiICsgbm93UGF0aCk7XG4gICAgICAgIGVsZWN0cm9uX2pzb25fc3RvcmFnZV8xLmRlZmF1bHQuc2V0RGF0YVBhdGgobm93UGF0aCk7XG4gICAgfVxuICAgIHJldHVybiBDb25maWc7XG59KCkpO1xuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IENvbmZpZygpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUTBFc1owWkJRVFJETzBGQlF6VkRMRGhFUVVFclFqdEJRVU12UWl4elJFRkJaME03UVVGRmFFTTdTVUZEUlR0UlFWZEJMR2RDUVVGWExFZEJRVWM3V1VGRFdpd3JRa0ZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzVlVGQlF5eExRVUZWTEVWQlFVVXNTVUZCVXpzN1owSkJRemRETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zVTBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4dFEwRkJTU3hGUVVGRkxFTkJRVU03V1VGRE5VUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU03VVVGRlJpeGhRVUZoTzFGQlEySXNhMEpCUVdFc1IwRkJSeXhWUVVGRExGTkJRVzlFTzFsQlEyNUZMQ3RDUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEZkQlFWY3NSVUZCUlN4RlFVRkZMRk5CUVZNc1YwRkJRU3hGUVVGRkxFVkJRVVVzVlVGQlF5eEhRVUZITzJkQ1FVTXhReXhOUVVGTkxFZEJRVWNzUTBGQlF6dFpRVU5hTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTB3c1EwRkJReXhEUVVGRE8xRkJja0pCTEdGQlFXRTdVVUZEWWl3eVEwRkJNa003VVVGRE0wTXNlVVJCUVhsRU8xRkJRM3BFTERaRVFVRTJSRHRSUVVNM1JDeEpRVUZKTzFGQlEwb3NiVU5CUVcxRE8xRkJRMjVETEVsQlFVMHNUMEZCVHl4SFFVRkhMR3RDUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenRSUVVOcVJDeHpRa0ZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQmJVSXNUMEZCVXl4RFFVRkRMRU5CUVVNN1VVRkRka01zSzBKQlFVOHNRMEZCUXl4WFFVRlhMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGREwwSXNRMEZCUXp0SlFXRklMR0ZCUVVNN1FVRkJSQ3hEUVVGRExFRkJlRUpFTEVsQmQwSkRPMEZCUlVRc2EwSkJRV1VzU1VGQlNTeE5RVUZOTEVWQlFVVXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5lbGVjdHJvbkV2ZW50ID0ge1xuICAgIC8qKiDjgrXjg7zjg5Djg7zotbfli5UgKi9cbiAgICAnc3RhcnQtc2VydmVyJzogJ3N0YXJ0LXNlcnZlcicsXG4gICAgLyoqIOOCouODqeODvOODiOihqOekuiAqL1xuICAgICdzaG93LWFsZXJ0JzogJ3Nob3ctYWxlcnQnLFxuICAgICdzaG93LWNvbW1lbnQnOiAnc2hvdy1jb21tZW50JyxcbiAgICAnY2xlYXItY29tbWVudCc6ICdjbGVhci1jb21tZW50JyxcbiAgICAvKiog44K144O844OQ44O86LW35YuV44Gu6L+U5L+hICovXG4gICAgJ3N0YXJ0LXNlcnZlci1yZXBseSc6ICdzdGFydC1zZXJ2ZXItcmVwbHknLFxuICAgIE1BSU5fR0VUX0VMRUNUUk9OX0RBVEE6ICdNQUlOX0dFVF9FTEVDVFJPTl9EQVRBJyxcbiAgICBNQUlOX1NFVF9FTEVDVFJPTl9EQVRBOiAnTUFJTl9TRVRfRUxFQ1RST05fREFUQScsXG4gICAgLyoqIOadv+OCkui/veWKoCAqL1xuICAgIE1BSU5fQUREX0JPQVJETElTVDogJ01BSU5fQUREX0JPQVJETElTVCcsXG4gICAgLyoqIOOCueODrOS4gOimp+OCkumWi+OBjyAqL1xuICAgIE1BSU5fR0VUX1RIUkVBRF9MSVNUOiAnTUFJTl9HRVRfVEhSRUFEX0xJU1QnLFxuICAgIC8qKiDjgrnjg6zjgpLplovjgY8gKi9cbiAgICBNQUlOX09QRU5fVEhSRUFEOiAnTUFJTl9PUEVOX1RIUkVBRCcsXG4gICAgLyoqIOadv+S4gOimp+ihqOekuiAqL1xuICAgIFNIT1dfQk9BUkRfTElTVDogJ1NIT1dfQk9BUkRfTElTVCcsXG4gICAgLyoqIOabuOOBjei+vOOBvyAqL1xuICAgIE1BSU5fUE9TVF9LQUtJS09NSTogJ01BSU5fUE9TVF9LQUtJS09NSScsXG59O1xuZXhwb3J0cy5rZXlDb2RlID0ge1xuICAgIEVOVEVSOiAxMyxcbiAgICBTSElGVDogMTYsXG4gICAgQ1RSTDogMTcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWMzUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKamIyNXpkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRmhMRkZCUVVFc1lVRkJZU3hIUVVGSE8wbEJRek5DTEdGQlFXRTdTVUZEWWl4alFVRmpMRVZCUVVVc1kwRkJZenRKUVVVNVFpeGhRVUZoTzBsQlEySXNXVUZCV1N4RlFVRkZMRmxCUVZrN1NVRkZNVUlzWTBGQll5eEZRVUZGTEdOQlFXTTdTVUZET1VJc1pVRkJaU3hGUVVGRkxHVkJRV1U3U1VGRmFFTXNaMEpCUVdkQ08wbEJRMmhDTEc5Q1FVRnZRaXhGUVVGRkxHOUNRVUZ2UWp0SlFVVXhReXh6UWtGQmMwSXNSVUZCUlN4M1FrRkJkMEk3U1VGRGFFUXNjMEpCUVhOQ0xFVkJRVVVzZDBKQlFYZENPMGxCUTJoRUxGZEJRVmM3U1VGRFdDeHJRa0ZCYTBJc1JVRkJSU3h2UWtGQmIwSTdTVUZGZUVNc1kwRkJZenRKUVVOa0xHOUNRVUZ2UWl4RlFVRkZMSE5DUVVGelFqdEpRVVUxUXl4WlFVRlpPMGxCUTFvc1owSkJRV2RDTEVWQlFVVXNhMEpCUVd0Q08wbEJSWEJETEZsQlFWazdTVUZEV2l4bFFVRmxMRVZCUVVVc2FVSkJRV2xDTzBsQlJXeERMRmRCUVZjN1NVRkRXQ3hyUWtGQmEwSXNSVUZCUlN4dlFrRkJiMEk3UTBGRGVrTXNRMEZCUXp0QlFVVlhMRkZCUVVFc1QwRkJUeXhIUVVGSE8wbEJRM0pDTEV0QlFVc3NSVUZCUlN4RlFVRkZPMGxCUTFRc1MwRkJTeXhGUVVGRkxFVkJRVVU3U1VGRFZDeEpRVUZKTEVWQlFVVXNSVUZCUlR0RFFVTlVMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xuICAgIHJlc3VsdFtcImRlZmF1bHRcIl0gPSBtb2Q7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vLyBFbGVjdHJvbuOBruODouOCuOODpeODvOODq1xudmFyIHBhdGhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGF0aFwiKSk7XG52YXIgZWxlY3Ryb25fMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiZWxlY3Ryb25cIikpO1xudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG52YXIgZWxlY3Ryb25fd2luZG93X3N0YXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiKSk7XG52YXIgY29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29uZmlnXCIpKTtcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3RcIik7XG52YXIgZ2V0UmVzXzEgPSByZXF1aXJlKFwiLi9yZWFkQkJTL2dldFJlc1wiKTtcbnZhciBzdGFydFNlcnZlcl8xID0gcmVxdWlyZShcIi4vc3RhcnRTZXJ2ZXJcIik7XG52YXIgZ2V0UmVzXzIgPSByZXF1aXJlKFwiLi9yZWFkQkJTL2dldFJlc1wiKTtcbmNvbnNvbGUudHJhY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9cbn07XG5wcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVycik7XG59KTtcbi8vIOOCouODl+ODquOCseODvOOCt+ODp+ODs+OCkuOCs+ODs+ODiOODreODvOODq+OBmeOCi+ODouOCuOODpeODvOODq1xudmFyIGFwcCA9IGVsZWN0cm9uXzEuZGVmYXVsdC5hcHA7XG4vLyDlpJrph43otbfli5XpmLLmraJcbmlmICghYXBwLnJlcXVlc3RTaW5nbGVJbnN0YW5jZUxvY2soKSkge1xuICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1thcHBdIEl0IGlzIHRlcm1pbmF0ZWQgZm9yIG11bHRpcGxlIGxhdW5jaGVzLicpO1xuICAgIGFwcC5xdWl0KCk7XG59XG5lbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oJ1thcHBdIHN0YXJ0ZWQnKTtcbmFwcC5hbGxvd1JlbmRlcmVyUHJvY2Vzc1JldXNlID0gdHJ1ZTtcbnZhciBpY29uUGF0aCA9IHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vaWNvbi5wbmcnKTtcbi8vIOOCteODvOODkOODvOi1t+WLleODouOCuOODpeODvOODq1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcbnZhciBzcyA9IHJlcXVpcmUoJy4vc3RhcnRTZXJ2ZXInKTtcbmNvbnNvbGUudHJhY2Uoc3MpO1xuLy8g44Km44Kj44Oz44OJ44Km44KS5L2c5oiQ44GZ44KL44Oi44K444Ol44O844OrXG52YXIgQnJvd3NlcldpbmRvdyA9IGVsZWN0cm9uXzEuZGVmYXVsdC5Ccm93c2VyV2luZG93O1xuLy8g44Oh44Kk44Oz44Km44Kj44Oz44OJ44Km44GvR0PjgZXjgozjgarjgYTjgojjgYbjgavjgrDjg63jg7zjg5Djg6vlrqPoqIBcbmdsb2JhbFRoaXMuZWxlY3Ryb24gPSB7XG4gICAgd2luZG93OiB7XG4gICAgICAgIG1haW5XaW5kb3c6IG51bGwsXG4gICAgICAgIGNoYXRXaW5kb3c6IG51bGwsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGJvYXJkTGlzdDogW10sXG4gICAgICAgIGJvYXJkOiB7XG4gICAgICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgICAgICB0aHJlYWRMaXN0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgdGhyZWFkOiB7XG4gICAgICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgICAgICBib2FyZElkOiBudWxsLFxuICAgICAgICAgICAgdGhyZWFkTnVtYmVyOiBudWxsLFxuICAgICAgICAgICAgaG9zdG5hbWU6IG51bGwsXG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbi8vIOWFqOOBpuOBruOCpuOCo+ODs+ODieOCpuOBjOmWieOBmOOBn+OCiee1guS6hlxuYXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPSAnZGFyd2luJykge1xuICAgIGFwcC5xdWl0KCk7XG4gICAgLy8gfVxufSk7XG4vLyBFbGVjdHJvbuOBruWIneacn+WMluWujOS6huW+jOOBq+Wun+ihjFxuYXBwLm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWFpbldpbmRvd1N0YXRlID0gZWxlY3Ryb25fd2luZG93X3N0YXRlXzEuZGVmYXVsdCh7XG4gICAgICAgIGRlZmF1bHRXaWR0aDogNzAwLFxuICAgICAgICBkZWZhdWx0SGVpZ2h0OiA3MjAsXG4gICAgfSk7XG4gICAgLy8g44Km44Kj44Oz44OJ44Km44K144Kk44K644KS77yI44OV44Os44O844Og44K144Kk44K644KS5ZCr44G+44Gq44GE77yJ6Kit5a6aXG4gICAgdmFyIG1haW5XaW4gPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgICAgIC8vIOWJjeWbnui1t+WLleaZguOBruOCkuW+qeWFg1xuICAgICAgICB4OiBtYWluV2luZG93U3RhdGUueCxcbiAgICAgICAgeTogbWFpbldpbmRvd1N0YXRlLnksXG4gICAgICAgIHdpZHRoOiBtYWluV2luZG93U3RhdGUud2lkdGgsXG4gICAgICAgIGhlaWdodDogbWFpbldpbmRvd1N0YXRlLmhlaWdodCxcbiAgICAgICAgdXNlQ29udGVudFNpemU6IHRydWUsXG4gICAgICAgIGljb246IGljb25QYXRoLFxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBza2lwVGFza2JhcjogdHJ1ZSxcbiAgICB9KTtcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5tYWluV2luZG93ID0gbWFpbldpbjtcbiAgICBtYWluV2luZG93U3RhdGUubWFuYWdlKG1haW5XaW4pO1xuICAgIG1haW5XaW4uc2V0VGl0bGUoJ3ZvbmdvbGUnKTtcbiAgICBtYWluV2luLnNldE1lbnUobnVsbCk7XG4gICAgLy8g44Os44Oz44OA44Op44O844Gn5L2/55So44GZ44KLaHRtbOODleOCoeOCpOODq+OCkuaMh+WumuOBmeOCi1xuICAgIG1haW5XaW4ubG9hZFVSTCgnZmlsZTovLycgKyBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9odG1sL2luZGV4Lmh0bWwnKSk7XG4gICAgLy8g44Km44Kj44Oz44OJ44Km44GM6ZaJ44GY44KJ44KM44Gf44KJ44Ki44OX44Oq44KC57WC5LqGXG4gICAgbWFpbldpbi5vbignY2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8g56K66KqN44OA44Kk44Ki44Ot44Kw44Gn44Gv44GE44KS44Kv44Oq44OD44Kv44GX44Gf44KJ6ZaJ44GY44KLXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGVsZWN0cm9uXzEuZGlhbG9nXG4gICAgICAgICAgICAuc2hvd01lc3NhZ2VCb3gobWFpbldpbiwge1xuICAgICAgICAgICAgdHlwZTogJ3F1ZXN0aW9uJyxcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnWWVzJywgJ05vJ10sXG4gICAgICAgICAgICAvLyB0aXRsZTogJycsXG4gICAgICAgICAgICBtZXNzYWdlOiAn57WC5LqG44GX44G+44GZ44GL77yfJyxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLnJlc3BvbnNlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYXBwLmV4aXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWFpbldpbi5vbignY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oJ1thcHBdIGNsb3NlJyk7XG4gICAgICAgIGFwcC5leGl0KCk7XG4gICAgfSk7XG4gICAgLy8g6ZaL55m66ICF44OE44O844Or44KS6ZaL44GPXG4gICAgLy8gbWFpbldpbi53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgICAvLyDjgr/jgrnjgq/jg4jjg6zjgqTjga7oqK3lrppcbiAgICB2YXIgdHJheSA9IG51bGw7XG4gICAgYXBwLndoZW5SZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICB0cmF5ID0gbmV3IGVsZWN0cm9uXzEuVHJheShpY29uUGF0aCk7XG4gICAgICAgIHZhciBjb250ZXh0TWVudSA9IGVsZWN0cm9uXzEuTWVudS5idWlsZEZyb21UZW1wbGF0ZShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICfoqK3lrponLFxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5XaW4uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+OCs+ODoeODs+ODiCcsXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICfntYLkuoYnLFxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5XaW4uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICAgIHRyYXkuc2V0VG9vbFRpcCgndm9uZ29sZScpO1xuICAgICAgICB0cmF5LnNldENvbnRleHRNZW51KGNvbnRleHRNZW51KTtcbiAgICAgICAgLy8g44K/44K544Kv44OI44Os44Kk44Kv44Oq44OD44Kv5pmC44Gu5oyZ5YuVXG4gICAgICAgIHZhciBpc0RvdWJsZUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgdHJheS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RvdWJsZUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWxfMS5zbGVlcCgyMDApXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG91YmxlQ2xpY2tlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfSk7XG4gICAgICAgIHRyYXkub24oJ2RvdWJsZS1jbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaXNEb3VibGVDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIG1haW5XaW4uZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8g5p2/5LiA6Kan5Yid5pyf6KGo56S6XG4gICAgY29uZmlnXzEuZGVmYXVsdC5nZXRCb2FkTGlzdCgpO1xuICAgIGNyZWF0ZUNoYXRXaW5kb3coKTtcbn0pO1xudmFyIGNyZWF0ZUNoYXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoYXRXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxuICAgICAgICBpY29uOiBpY29uUGF0aCxcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g44K/44K544Kv44OQ44O844Gr6KGo56S644GX44Gq44GEXG4gICAgICAgIHNraXBUYXNrYmFyOiB0cnVlLFxuICAgICAgICBjbG9zYWJsZTogZmFsc2UsXG4gICAgfSk7XG4gICAgLy8g5Yid5pyf6KGo56S644Gv6Z2e6KGo56S6XG4gICAgY2hhdFdpbmRvdy5taW5pbWl6ZSgpO1xuICAgIC8vIOODrOODs+ODgOODqeODvOOBp+S9v+eUqOOBmeOCi2h0bWzjg5XjgqHjgqTjg6vjgpLmjIflrprjgZnjgotcbiAgICBjaGF0V2luZG93LmxvYWRVUkwoJ2ZpbGU6Ly8nICsgcGF0aF8xLmRlZmF1bHQucmVzb2x2ZShfX2Rpcm5hbWUsICcuLi9zcmMvaHRtbC9jaGF0Lmh0bWwnKSk7XG4gICAgY2hhdFdpbmRvdy5zZXRUaXRsZSgndm9uZ29sZSAtIHRocmVhZCcpO1xuICAgIGNoYXRXaW5kb3cuc2V0TWVudShudWxsKTtcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93ID0gY2hhdFdpbmRvdztcbiAgICAvLyBjaGF0V2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xufTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fR0VUX0VMRUNUUk9OX0RBVEEsIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGE7XG59KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fU0VUX0VMRUNUUk9OX0RBVEEsIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkge1xuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YSA9IG1lc3NhZ2U7XG4gICAgcmV0dXJuO1xufSk7XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0FERF9CT0FSRExJU1QsIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0KS5wdXNoLmFwcGx5KF9hLCBtZXNzYWdlKTtcbiAgICBjb25maWdfMS5kZWZhdWx0LnNhdmVCb2FyZExpc3QoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCk7XG4gICAgcmV0dXJuO1xufSk7XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9USFJFQURfTElTVCwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaXN0O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMS5nZXRUaHJlYWRMaXN0KG1lc3NhZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBsaXN0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBsaXN0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuZWxlY3Ryb25fMS5pcGNNYWluLm9uKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX09QRU5fVEhSRUFELCBmdW5jdGlvbiAoZXZlbnQsIHVybCwgbmFtZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZDtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSB1cmwubWF0Y2goL2h0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICAgICAgICAgICAgICB0aHJlYWROdW1iZXIgPSAoX2QgPSAoX2MgPSB1cmwubWF0Y2goL1xcL1xcZCtcXC8kLykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXS5yZXBsYWNlKC9cXC8vZywgJycpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcbiAgICAgICAgICAgICAgICBib2FyZElkID0gdXJsLnJlcGxhY2UoaG9zdG5hbWUsICcnKS5yZXBsYWNlKFwiL1wiICsgdGhyZWFkTnVtYmVyICsgXCIvXCIsICcnKS5yZXBsYWNlKCd0ZXN0L3JlYWQuY2dpLycsICcnKS5yZXBsYWNlKCdiYnMvcmVhZC5jZ2kvJywgJycpO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogaG9zdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZE51bWJlcjogdGhyZWFkTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBib2FyZElkOiBib2FyZElkLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbyhKU09OLnN0cmluZ2lmeShnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLCBudWxsLCAnICAnKSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy53ZWJDb250ZW50cy5zZW5kKGNvbnN0XzEuZWxlY3Ryb25FdmVudFsnY2xlYXItY29tbWVudCddKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnNldFRpdGxlKG5hbWUgKyBcIiAtIFwiICsgdXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzdGFydFNlcnZlcl8xLnVwZGF0ZVJlcygpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuc2hvdygpO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9QT1NUX0tBS0lLT01JLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGVfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18yLnBvc3RSZXNwb25zZShnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmhvc3RuYW1lLCBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLnRocmVhZE51bWJlciwgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5ib2FyZElkLCBtZXNzYWdlKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0YXJ0U2VydmVyXzEudXBkYXRlUmVzKCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoZV8xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnBiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltMWhhVzR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzYVVKQlFXbENPMEZCUTJwQ0xEaERRVUYzUWp0QlFVTjRRaXh0UkVGQmFVVTdRVUZEYWtVc09FUkJRU3RDTzBGQlF5OUNMQ3RDUVVFclFqdEJRVU12UWl4blJrRkJjMFE3UVVGRGRFUXNiMFJCUVRoQ08wRkJRemxDTEdsRFFVRjNRenRCUVVONFF5d3lRMEZCYVVRN1FVRkRha1FzTmtOQlFUQkRPMEZCUXpGRExESkRRVUZuUkR0QlFVVm9SQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEhRVUZITzBsQlEyUXNSVUZCUlR0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVWR0xFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzVlVGQlF5eEhRVUZITzBsQlEyeERMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJVZ3NlVUpCUVhsQ08wRkJRM3BDTEVsQlFVMHNSMEZCUnl4SFFVRkhMR3RDUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETzBGQlJYcENMRk5CUVZNN1FVRkRWQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFVkJRVVU3U1VGRGNFTXNjMEpCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zSzBOQlFTdERMRU5CUVVNc1EwRkJRenRKUVVNelJDeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1EwRkRXanRCUVVWRUxITkNRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8wRkJSVEZDTEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZGY2tNc1NVRkJUU3hSUVVGUkxFZEJRVWNzWTBGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGRmVFUXNZMEZCWXp0QlFVTmtMRGhFUVVFNFJEdEJRVU01UkN4SlFVRk5MRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZEY0VNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVVnNRaXhyUWtGQmEwSTdRVUZEYkVJc1NVRkJUU3hoUVVGaExFZEJRVWNzYTBKQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNN1FVRkZOME1zTkVKQlFUUkNPMEZCUXpWQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVYzdTVUZEY0VJc1RVRkJUU3hGUVVGRk8xRkJRMDRzVlVGQlZTeEZRVUZGTEVsQlFWYzdVVUZEZGtJc1ZVRkJWU3hGUVVGRkxFbEJRVmM3UzBGRGVFSTdTVUZEUkN4SlFVRkpMRVZCUVVVN1VVRkRTaXhUUVVGVExFVkJRVVVzUlVGQlJUdFJRVU5pTEV0QlFVc3NSVUZCUlR0WlFVTk1MRWRCUVVjc1JVRkJSU3hKUVVGWE8xbEJRMmhDTEZWQlFWVXNSVUZCUlN4RlFVRkZPMU5CUTJZN1VVRkRSQ3hOUVVGTkxFVkJRVVU3V1VGRFRpeEhRVUZITEVWQlFVVXNTVUZCVnp0WlFVTm9RaXhQUVVGUExFVkJRVVVzU1VGQlZ6dFpRVU53UWl4WlFVRlpMRVZCUVVVc1NVRkJWenRaUVVONlFpeFJRVUZSTEVWQlFVVXNTVUZCVnp0WlFVTnlRaXhKUVVGSkxFVkJRVVVzUlVGQlJUdFRRVU5VTzB0QlEwWTdRMEZEUml4RFFVRkRPMEZCUlVZc2EwSkJRV3RDTzBGQlEyeENMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVN1NVRkRNVUlzYzBOQlFYTkRPMGxCUTNSRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTllMRWxCUVVrN1FVRkRUaXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVVZJTEhGQ1FVRnhRanRCUVVOeVFpeEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHRKUVVOa0xFbEJRVTBzWlVGQlpTeEhRVUZITEN0Q1FVRnBRaXhEUVVGRE8xRkJRM2hETEZsQlFWa3NSVUZCUlN4SFFVRkhPMUZCUTJwQ0xHRkJRV0VzUlVGQlJTeEhRVUZITzB0QlEyNUNMRU5CUVVNc1EwRkJRenRKUVVWSUxEUkNRVUUwUWp0SlFVTTFRaXhKUVVGTkxFOUJRVThzUjBGQlJ5eEpRVUZKTEdGQlFXRXNRMEZCUXp0UlFVTm9ReXhaUVVGWk8xRkJRMW9zUTBGQlF5eEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkRPMUZCUTNCQ0xFTkJRVU1zUlVGQlJTeGxRVUZsTEVOQlFVTXNRMEZCUXp0UlFVTndRaXhMUVVGTExFVkJRVVVzWlVGQlpTeERRVUZETEV0QlFVczdVVUZETlVJc1RVRkJUU3hGUVVGRkxHVkJRV1VzUTBGQlF5eE5RVUZOTzFGQlJUbENMR05CUVdNc1JVRkJSU3hKUVVGSk8xRkJRM0JDTEVsQlFVa3NSVUZCUlN4UlFVRlJPMUZCUTJRc1kwRkJZeXhGUVVGRk8xbEJRMlFzWlVGQlpTeEZRVUZGTEVsQlFVazdVMEZEZEVJN1VVRkRSQ3hYUVVGWExFVkJRVVVzU1VGQlNUdExRVU5zUWl4RFFVRkRMRU5CUVVNN1NVRkRTQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRWRCUVVjc1QwRkJUeXhEUVVGRE8wbEJRMmhFTEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03U1VGRmFFTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEpRVU0xUWl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlJYUkNMREJDUVVFd1FqdEpRVU14UWl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUjBGQlJ5eGpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3gzUWtGQmQwSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZMMFVzY1VKQlFYRkNPMGxCUTNKQ0xFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMRlZCUVVNc1MwRkJTenRSUVVONFFpeDNRa0ZCZDBJN1VVRkRlRUlzUzBGQlN5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMUZCUTNaQ0xHbENRVUZOTzJGQlEwZ3NZMEZCWXl4RFFVRkRMRTlCUVU4c1JVRkJSVHRaUVVOMlFpeEpRVUZKTEVWQlFVVXNWVUZCVlR0WlFVTm9RaXhQUVVGUExFVkJRVVVzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRPMWxCUTNSQ0xHRkJRV0U3V1VGRFlpeFBRVUZQTEVWQlFVVXNVMEZCVXp0VFFVTnVRaXhEUVVGRE8yRkJRMFFzU1VGQlNTeERRVUZETEZWQlFVTXNTMEZCU3p0WlFVTldMRWxCUVVrc1MwRkJTeXhEUVVGRExGRkJRVkVzUzBGQlN5eERRVUZETEVWQlFVVTdaMEpCUTNoQ0xFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0aFFVTmFPMUZCUTBnc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRFVDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTklMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zVVVGQlVTeEZRVUZGTzFGQlEyNUNMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkRPMUZCUTNoQ0xFZEJRVWNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0SlFVTmlMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVWdzV1VGQldUdEpRVU5hTEhORFFVRnpRenRKUVVWMFF5eFpRVUZaTzBsQlExb3NTVUZCU1N4SlFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wbEJRMmhDTEVkQlFVY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1EwRkJReXhKUVVGSkxFTkJRVU03VVVGRGJrSXNTVUZCU1N4SFFVRkhMRWxCUVVrc1pVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzFGQlF6RkNMRWxCUVUwc1YwRkJWeXhIUVVGSExHVkJRVWtzUTBGQlF5eHBRa0ZCYVVJc1EwRkJRenRaUVVONlF6dG5Ra0ZEUlN4TFFVRkxMRVZCUVVVc1NVRkJTVHRuUWtGRFdDeExRVUZMTEVWQlFVVTdiMEpCUTB3c1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTnNRaXhEUVVGRE8yRkJRMFk3V1VGRFJEdG5Ra0ZEUlN4TFFVRkxMRVZCUVVVc1RVRkJUVHRuUWtGRFlpeExRVUZMTEVWQlFVVTdiMEpCUTB3c1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yOUNRVU01UXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2IwSkJRemRETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0blFrRkRiRVFzUTBGQlF6dGhRVU5HTzFsQlEwUTdaMEpCUTBVc1MwRkJTeXhGUVVGRkxFbEJRVWs3WjBKQlExZ3NTMEZCU3l4RlFVRkZPMjlDUVVOTUxFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0blFrRkRiRUlzUTBGQlF6dGhRVU5HTzFOQlEwWXNRMEZCUXl4RFFVRkRPMUZCUTBnc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0UlFVTXpRaXhKUVVGSkxFTkJRVU1zWTBGQll5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMUZCUTJwRExHbENRVUZwUWp0UlFVTnFRaXhKUVVGSkxHVkJRV1VzUjBGQlJ5eExRVUZMTEVOQlFVTTdVVUZETlVJc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNWVUZCVHl4TFFVRkxPenM3TzNkQ1FVTXpRaXhsUVVGbExFZEJRVWNzUzBGQlN5eERRVUZETzNkQ1FVTjRRaXh4UWtGQlRTeFpRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVFN08zZENRVUZvUWl4VFFVRm5RaXhEUVVGRE8zZENRVU5xUWl4SlFVRkpMR1ZCUVdVN05FSkJRVVVzYzBKQlFVODdkMEpCUXpWQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dDNRa0ZET1VNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8zZENRVU0zUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN096czdZVUZEYWtRc1EwRkJReXhEUVVGRE8xRkJRMGdzU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4alFVRmpMRVZCUVVVc1ZVRkJReXhMUVVGTE8xbEJRelZDTEdWQlFXVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1dVRkRka0lzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMUZCUTJ4Q0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZTQ3hWUVVGVk8wbEJRMVlzWjBKQlFVMHNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJRenRKUVVWeVFpeG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8wRkJRM0pDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUlVnc1NVRkJUU3huUWtGQlowSXNSMEZCUnp0SlFVTjJRaXhKUVVGTkxGVkJRVlVzUjBGQlJ5eEpRVUZKTEdGQlFXRXNRMEZCUXp0UlFVTnVReXhMUVVGTExFVkJRVVVzUjBGQlJ6dFJRVU5XTEdOQlFXTXNSVUZCUlN4SlFVRkpPMUZCUTNCQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTzFGQlEyUXNZMEZCWXl4RlFVRkZPMWxCUTJRc1pVRkJaU3hGUVVGRkxFbEJRVWs3VTBGRGRFSTdVVUZEUkN4alFVRmpPMUZCUTJRc1YwRkJWeXhGUVVGRkxFbEJRVWs3VVVGRGFrSXNVVUZCVVN4RlFVRkZMRXRCUVVzN1MwRkRhRUlzUTBGQlF5eERRVUZETzBsQlEwZ3NWMEZCVnp0SlFVTllMRlZCUVZVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dEpRVVYwUWl3d1FrRkJNRUk3U1VGRE1VSXNWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFZEJRVWNzWTBGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc2RVSkJRWFZDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUldwR0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dEpRVU40UXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlJYcENMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNSMEZCUnl4VlFVRlZMRU5CUVVNN1NVRkRia1FzZVVOQlFYbERPMEZCUXpORExFTkJRVU1zUTBGQlF6dEJRVVZHTEd0Q1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExIRkNRVUZoTEVOQlFVTXNjMEpCUVhOQ0xFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHp0SlFVTnNSU3hQUVVGUExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUTJ4RExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwZ3NhMEpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4UFFVRjNRenRKUVVOdVJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU03U1VGRGJrTXNUMEZCVHp0QlFVTlVMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMGdzYTBKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2NVSkJRV0VzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZyUkRzN1NVRkRla2NzUTBGQlFTeExRVUZCTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlFTeERRVUZETEVsQlFVa3NWMEZCU1N4UFFVRlBMRVZCUVVVN1NVRkRjRVFzWjBKQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRla1FzVDBGQlR6dEJRVU5VTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTBnc2EwSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNjVUpCUVdFc1EwRkJReXh2UWtGQmIwSXNSVUZCUlN4VlFVRlBMRXRCUVVzc1JVRkJSU3hQUVVGbE96czdPMjlDUVVOcVJTeHhRa0ZCVFN4elFrRkJZU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZCT3p0blFrRkJia01zU1VGQlNTeEhRVUZITEZOQlFUUkNPMmRDUVVONlF5eHpRa0ZCVHl4SlFVRkpMRVZCUVVNN096dExRVU5pTEVOQlFVTXNRMEZCUXp0QlFVTklMR3RDUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEhGQ1FVRmhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWVUZCVHl4TFFVRkxMRVZCUVVVc1IwRkJWeXhGUVVGRkxFbEJRVms3T3pzN096dG5Ra0ZGTVVVc1VVRkJVU3hsUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEzQkVMRmxCUVZrc1pVRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl3d1EwRkJSeXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRzlEUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEYmtVc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZKTEZsQlFWa3NUVUZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVVYwU1N4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVYzdiMEpCUTJoRExFZEJRVWNzUzBGQlFUdHZRa0ZEU0N4UlFVRlJMRlZCUVVFN2IwSkJRMUlzV1VGQldTeGpRVUZCTzI5Q1FVTmFMRTlCUVU4c1UwRkJRVHR2UWtGRFVDeEpRVUZKTEVWQlFVVXNSVUZCUlR0cFFrRkRWQ3hEUVVGRE8yZENRVU5HTEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8yZENRVVYwUlN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1owSkJRM1pHTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVa3NTVUZCU1N4WFFVRk5MRWRCUVVzc1EwRkJReXhEUVVGRE8yZENRVVZ1UlN4eFFrRkJUU3gxUWtGQlV5eEZRVUZGTEVWQlFVRTdPMmRDUVVGcVFpeFRRVUZwUWl4RFFVRkRPMmRDUVVOc1FpeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUXpsRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dG5Ra0ZETjBNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE96czdPMHRCUTJwRUxFTkJRVU1zUTBGQlF6dEJRVU5JTEd0Q1FVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExIRkNRVUZoTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzVlVGQlR5eExRVUZMTEVWQlFVVXNUMEZCWlRzN096czdPMmRDUVVVeFJTeHhRa0ZCVFN4eFFrRkJXU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGbEJRVmtzUlVGQlJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQk5Vb3NVMEZCTkVvc1EwRkJRenRuUWtGRE4wb3NjVUpCUVUwc2RVSkJRVk1zUlVGQlJTeEZRVUZCT3p0blFrRkJha0lzVTBGQmFVSXNRMEZCUXp0blFrRkZiRUlzYzBKQlFVOHNTVUZCU1N4RlFVRkRPenM3WjBKQlJWb3NjMEpCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlF5eERRVUZETEVOQlFVTTdaMEpCUTJJc2MwSkJRVThzUzBGQlN5eEZRVUZET3pzN08wdEJSV2hDTEVOQlFVTXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogNWNo5LqS5o+bQkJT6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXG4gKi9cbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XG52YXIgaWNvbnZfbGl0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpY29udi1saXRlXCIpKTsgLy8g5paH5a2X44Kz44O844OJ5aSJ5o+b55So44OR44OD44Kx44O844K4XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgZW5jb2RpbmdfamFwYW5lc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW5jb2RpbmctamFwYW5lc2VcIikpO1xuLyoqIOOCueODhuODvOOCv+OCueOCs+ODvOODiTMwNCBfTm90TW9kaWZpZWQgKi9cbnZhciBOT1RfTU9ESUZJRUQgPSAnMzA0JztcbnZhciBSQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSAnNDE2Jztcbi8qKiDmnIDntYLlj5blvpfjgrnjg6zjg4Pjg4kgKi9cbnZhciBsYXN0VGhyZWFkVXJsID0gJyc7XG4vKiog5pyA57WC44Os44K555Wq5Y+3ICovXG52YXIgbGFzdFJlc051bWJlciA9IDA7XG4vKiog5pyA57WC5pu05paw5pel5pmCICovXG52YXIgbGFzdE1vZGlmaWVkID0gbnVsbDtcbi8qKiDmnIDntYLjg5DjgqTjg4jmlbAgKi9cbnZhciBsYXN0Qnl0ZSA9IDA7XG4vKiog44K544Os5LiA6Kan44KS6Kqt44G/6L6844KAICovXG5leHBvcnRzLnJlYWRCb2FyZCA9IGZ1bmN0aW9uIChib2FyZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVxdWVzdFVybCwgbGlzdCwgb3B0aW9ucywgcmVzcG9uc2UsIHN0ciwgZXJyb3JfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gYm9hcmRVcmwgKyBcInN1YmplY3QudHh0XCI7XG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdChvcHRpb25zKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgc3RyID0gaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpLCAnU2hpZnRfSklTJyk7XG4gICAgICAgICAgICAgICAgLy8g44OR44O844K544GX44Gm5qC857SNXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoLmFwcGx5KGxpc3QsIHN0clxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW07IH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxpbmUpIHsgcmV0dXJuIHBhcnNlVGhyZWFkTGlzdChib2FyZFVybCwgbGluZSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcl8xLnN0YXR1cyA9PSBOT1RfTU9ESUZJRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBTk9UX01PRElGSUVEJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yXzEuc3RhdHVzID09IFJBTkdFX05PVF9TQVRJU0ZJQUJMRSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFSQU5HRV9OT1RfU0FUSVNGSUFCTEUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgW1lc3NhZ2U9JyArIGVycm9yXzEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgbGlzdF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLyoqXG4gKiDjg6zjgrnjgpLmipXnqL/jgZnjgotcbiAqIEBwYXJhbSBob3N0bmFtZSDjg5vjgrnjg4jlkI3jgIJodHRwczovL2hvZ2Vob2dlL1xuICogQHBhcmFtIHRocmVhZE51bWJlciDjgrnjg6znlarlj7cgMTIzNDU2NzhcbiAqIEBwYXJhbSBib2FyZElkIOadv0lEIHBhc3RhMDRcbiAqIEBwYXJhbSBtZXNzYWdlIOaKleeov+aWh1xuICovXG5leHBvcnRzLnBvc3RSZXMgPSBmdW5jdGlvbiAoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdW5pY29kZUFycmF5LCBpLCBzamlzQXJyYXksIGVuY29kZWRLZXl3b3JkO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheS5wdXNoKG1lc3NhZ2UuY2hhckNvZGVBdChpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNqaXNBcnJheSA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC5jb252ZXJ0KHVuaWNvZGVBcnJheSwge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ1NKSVMnLFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAnVU5JQ09ERScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZW5jb2RlZEtleXdvcmQgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQudXJsRW5jb2RlKHNqaXNBcnJheSk7XG4gICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oZW5jb2RlVVJJQ29tcG9uZW50LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdC5wb3N0KGhvc3RuYW1lICsgXCJ0ZXN0L2Jicy5jZ2lcIiwgXCJGUk9NPSZNRVNTQUdFPVwiICsgZW5jb2RlZEtleXdvcmQgKyBcIiZtYWlsPXNhZ2Uma2V5PVwiICsgdGhyZWFkTnVtYmVyICsgXCImYmJzPVwiICsgYm9hcmRJZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJyovKicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnZ3ppcCwgZGVmbGF0ZSwgYnInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGVuY29kZVVSSUNvbXBvbmVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBSZWFkNWNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWQ1Y2goKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjgrnoqq3jgb/ovrzjgb9cbiAgICAgICAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf5p2/44GL44KJ44Os44K544KS6Kqt44KAXG4gICAgICAgICAqIOODrOOCueeVquWPt+OCkuaMh+WumuOBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+acgOaWsDHku7blj5blvpdcbiAgICAgICAgICogQHBhcmFtIHRocmVhZFVybCDjgrnjg6xVUkxcbiAgICAgICAgICogQHBhcmFtIHJlc051bSDjg6zjgrnnlarlj7dcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uICh0aHJlYWRVcmwsIHJlc051bSkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcCwgcmVxdWVzdFVybCwgcmFuZ2UsIG9wdGlvbnMsIHJlc3BvbnNlSnNvbiwgcmVzcG9uc2UsIGhlYWRlcnMsIHN0ciwgZXJyb3JfMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGBbUmVhZDVjaF0gdGhyZWFkVXJsPSR7dGhyZWFkVXJsfSByZXNOdW09JHtyZXNOdW19YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnb/jgoTmnIDntYLml6Xjg6zjgrnnlarlj7fjgYzjgYvjgo/jgaPjgZ/jgonmnIDliJ3jgYvjgonjgajjgornm7TjgZkobGFzdG1vZGlmaeOBqCByYW5nZeOBruODquOCu+ODg+ODiClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aHJlYWRVcmwgIT0gbGFzdFRocmVhZFVybCB8fCBOdW1iZXIuaXNOYU4ocmVzTnVtKSB8fCByZXNOdW0gPCBsYXN0UmVzTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRocmVhZFVybCA9IHRocmVhZFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCeXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5qc11yZXNldGUhISEhISEhISEhISEhISEhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdub3Jlc2V0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwID0gL1xcL3Rlc3RcXC9yZWFkLmNnaShcXC8uKykoXFwvLispXFwvLztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB0aHJlYWRVcmwucmVwbGFjZShyZXAsICckMS9kYXQkMi5kYXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlID0gbGFzdEJ5dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpZi1tb2RpZmllZC1zaW5jZSc6IGxhc3RNb2RpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6ICdieXRlcz0nICsgcmFuZ2UgKyAnLScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGFzdE1vZGlmaWVk44GoUmFuZ2Xmm7TmlrDlh6bnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzWydsYXN0LW1vZGlmaWVkJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZCA9IGhlYWRlcnNbJ2xhc3QtbW9kaWZpZWQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ1NoaWZ0X0pJUycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K544Od44Oz44K544Kq44OW44K444Kn44Kv44OI5L2c5oiQ44CBY29udGVudC1yYW5nZeOBjOOBguOCi+WgtOWQiOOBqOOBquOBhOWgtOWQiOOBp+WHpueQhuOCkuWIhuOBkeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnNbJ2NvbnRlbnQtcmFuZ2UnXSA9PSBudWxsIHx8IGxhc3RCeXRlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5yZWFkXWNvbnRlbnQtcmFuZ2U9JyArIGhlYWRlcnNbJ2NvbnRlbnQtcmFuZ2UnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VOZXdSZXNwb25zZShzdHIsIHJlc051bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBwdXJzZURpZmZSZXNwb25zZShzdHIsIHJlc051bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlj5blvpfjg5DjgqTjg4jmlbDooajnpLpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzWydjb250ZW50LWxlbmd0aCddICE9IG51bGwgJiYgcmVzcG9uc2VKc29uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qnl0ZSA9IGxhc3RCeXRlICsgcGFyc2VJbnQoaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnJlYWRdbGFzdEJ5dGU9JyArIGxhc3RCeXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JfMi5zdGF0dXMgPT0gTk9UX01PRElGSUVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT44Os44K55Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBTk9UX01PRElGSUVEJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8yLnN0YXR1cyA9PSBSQU5HRV9OT1RfU0FUSVNGSUFCTEUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPjg6zjgrnlj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFSQU5HRV9OT1RfU0FUSVNGSUFCTEUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+ODrOOCueWPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgW1lc3NhZ2U9JyArIGVycm9yXzIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VKc29uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgfVxuICAgIHJldHVybiBSZWFkNWNoO1xufSgpKTtcbi8qKlxuICog5Y+W5b6X44GX44Gf44Os44K544Od44Oz44K577yI6KSH5pWw77yJ44Gu44OR44O844K5XG4gKiDmiLvjgorjgajjgZfjgabjg5Hjg7zjgrnjgZfjgZ9qc29u44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U44GZXG4gKiBAcGFyYW0gcmVzIOadv+OBi+OCiei/lOWNtOOBleOCjOOBn2RhdFxuICogQHBhcmFtIHJlc051bSDjg6rjgq/jgqjjgrnjg4jjgZXjgozjgZ/jg6zjgrnnlarlj7dcbiAqL1xudmFyIHB1cnNlTmV3UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCByZXNOdW0pIHtcbiAgICAvLyDntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8g44Os44K555Wq5Y+3XG4gICAgdmFyIG51bSA9IDA7XG4gICAgLy8g5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcbiAgICB2YXIgcmVzQXJyYXkgPSByZXMuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XG4gICAgLy8g5paw552A44Gq44GX44Gq44KJ5oi744KL44CCXG4gICAgaWYgKHJlc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvLyDphY3liJfjga7mnIDlvozjgavnqbrjga7opoHntKDjgYzlhaXjgovjgZPjgajjgYzjgYLjgovjga7jgaflj5bjgorpmaTjgY9cbiAgICBpZiAocmVzQXJyYXlbcmVzQXJyYXkubGVuZ3RoIC0gMV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlc0FycmF5LnBvcCgpO1xuICAgIH1cbiAgICAvLyDjg6zjgrnmjIflrprjgarjgZfjga7loLTlkIjmnIDlvozjga4x5Lu25Y+W5b6XXG4gICAgaWYgKE51bWJlci5pc05hTihyZXNOdW0pIHx8IHJlc051bSA8IDEpIHtcbiAgICAgICAgbnVtID0gcmVzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIG51bSA9IHJlc051bSAtIDE7XG4gICAgfVxuICAgIC8vIDHooYzjgZTjgajjgavjg5Hjg7zjgrnjgZnjgotcbiAgICBmb3IgKDsgbnVtIDwgcmVzQXJyYXkubGVuZ3RoOyBudW0rKykge1xuICAgICAgICAvLyDjg5Hjg7zjgrnjg6Hjgr3jg4Pjg4nlkbzjgbPlh7rjgZdcbiAgICAgICAgaWYgKHJlc0FycmF5W251bV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VSZXNwb25zZShyZXNBcnJheVtudW1dLCBudW0gKyAxKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGFzdFJlc051bWJlciA9IG51bSArIDE7XG4gICAgLy8g44OR44O844K544GX44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U5Y20XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIOWPluW+l+OBl+OBn+ODrOOCueODneODs+OCue+8iOikh+aVsO+8ieOBruODkeODvOOCuVxuICog5oi744KK44Go44GX44Gm44OR44O844K544GX44GfanNvbuOCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOOBmVxuICogQHBhcmFtIHJlcyDmnb/jgYvjgonov5TljbTjgZXjgozjgZ9kYXQx6KGM5YiGXG4gKiBAcGFyYW0gcmVzTnVtIOODquOCr+OCqOOCueODiOOBleOCjOOBn+ODrOOCueeVquWPt1xuICovXG52YXIgcHVyc2VEaWZmUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCByZXNOdW0pIHtcbiAgICAvL+e1kOaenOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyDjg6zjgrnnlarlj7dcbiAgICB2YXIgbnVtID0gcmVzTnVtO1xuICAgIC8v5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcbiAgICB2YXIgcmVzQXJyYXkgPSByZXMuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XG4gICAgLy8g5paw552A44Gq44GX44Gq44KJ5oi744KL44CCXG4gICAgaWYgKHJlc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8g6YWN5YiX44Gu5pyA5b6M44Gr56m644Gu6KaB57Sg44GM5YWl44KL44GT44Go44GM44GC44KL44Gu44Gn5Y+W44KK6Zmk44GPXG4gICAgICAgIGlmIChyZXNBcnJheVtyZXNBcnJheS5sZW5ndGggLSAxXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmVzQXJyYXkucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucHVyc2VEaWZmUmVzcG9uc2Vd5Y+W5b6X44Os44K555Wq5Y+3PScgKyBudW0pO1xuICAgIC8vMeihjOOBlOOBqOOBq+ODkeODvOOCueOBmeOCi1xuICAgIHJlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8v44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZVJlc3BvbnNlKHZhbHVlLCBudW0pKTtcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8g44OR44O844K544GX44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U5Y20XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIOOCueODrOS4gOimp+OBruODkeODvOOCuVxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcbiAqL1xudmFyIHBhcnNlVGhyZWFkTGlzdCA9IGZ1bmN0aW9uIChib2FyZFVybCwgc3ViamVjdExpbmUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcbiAgICAvL+ODrOOCueOBruimgee0oFxuICAgIC8vMDpkYXTlkI1cbiAgICAvLzE644K544Os44K/44Kk77yI44Os44K55pWw77yJXG4gICAgdmFyIHNwbGl0UmVzID0gc3ViamVjdExpbmUuc3BsaXQoJzw+Jyk7XG4gICAgY29uc29sZS5sb2coc3BsaXRSZXMpO1xuICAgIHZhciBkYXROdW0gPSBzcGxpdFJlc1swXS5yZXBsYWNlKCcuZGF0JywgJycpO1xuICAgIHZhciBob3N0bmFtZSA9IChfYiA9IChfYSA9IGJvYXJkVXJsLm1hdGNoKC9eaHR0cHM/OlxcL1xcLy4rP1xcLy8pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgIHZhciBib2FyZE5hbWUgPSBib2FyZFVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJyk7XG4gICAgdmFyIHVybCA9IGhvc3RuYW1lICsgXCJ0ZXN0L3JlYWQuY2dpL1wiICsgYm9hcmROYW1lICsgZGF0TnVtICsgXCIvXCI7XG4gICAgdmFyIHRpdGxlVGVtcCA9IHNwbGl0UmVzWzFdO1xuICAgIHZhciBuYW1lID0gKF9kID0gKF9jID0gdGl0bGVUZW1wLm1hdGNoKC8oLio/KSBcXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICfimIXlj5blvpflpLHmlZfimIUnO1xuICAgIHZhciByZXNOdW0gPSBOdW1iZXIoKF9lID0gdGl0bGVUZW1wLm1hdGNoKC9cXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VbMF0ucmVwbGFjZSgvXFwofFxcKS9nLCAnJykpO1xuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICByZXNOdW06IHJlc051bSxcbiAgICB9O1xufTtcbi8qKlxuICog44Os44K544Gu44OR44O844K5XG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XG4gKiBAcGFyYW0gSW50ZWdlciAvLyBudW0g44Os44K555Wq77yIMOOCueOCv+ODvOODiO+8iVxuICovXG52YXIgcGFyc2VSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIG51bSkge1xuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcbiAgICAvL+ODrOOCueOBruimgee0oFxuICAgIC8vMDrlkI3liY1cbiAgICAvLzE644Oh44Ki44OJXG4gICAgLy8yOuaXpeS7mOOBqElEIO+8iDIwMTkvMTEvMDMo5pelKSAwODo1NTowMCBJRDprYW5pa2Fuae+8ieOBv+OBn+OBhOOBq+ihqOekulxuICAgIC8vMzrmnKzmlodcbiAgICAvLzQ644K544Os44K/44KkIO+8iDHjg6zjgrnnm67jga7jgb/vvIlcbiAgICB2YXIgc3BsaXRSZXMgPSByZXMuc3BsaXQoJzw+Jyk7XG4gICAgLy8g5pel5LuY44GoSUTliIbpm6Llh6bnkIbjgIEnIElEOifjgafljLrliIfjgotcbiAgICB2YXIgZGF0ZUlkID0gc3BsaXRSZXNbMl0uc3BsaXQoJyBJRDonKTtcbiAgICB2YXIgZGF0ZSA9IGRhdGVJZFswXTtcbiAgICB2YXIgaWQgPSBkYXRlSWQubGVuZ3RoID09PSAyID8gZGF0ZUlkWzFdIDogJyc7XG4gICAgdmFyIHJlc0pzb24gPSB7XG4gICAgICAgIG51bWJlcjogbnVtLFxuICAgICAgICBuYW1lOiBzcGxpdFJlc1swXSxcbiAgICAgICAgZW1haWw6IHNwbGl0UmVzWzFdLFxuICAgICAgICBkYXRlOiBkYXRlLFxuICAgICAgICB0ZXh0OiBzcGxpdFJlc1szXSxcbiAgICAgICAgLy8gdGhyZWFkVGl0bGU6IHNwbGl0UmVzWzRdLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGltZ1VybDogJycsXG4gICAgfTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcbiAgICByZXR1cm4gcmVzSnNvbjtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkNWNoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pVW1WaFpEVmphQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYklsSmxZV1ExWTJndWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGQlFUczdSMEZGUnp0QlFVTklMR2RFUVVGclJEdEJRVU5zUkN3d1JFRkJLMElzUTBGQlF5eG5Ra0ZCWjBJN1FVRkRhRVFzT0VSQlFTdENPMEZCUXk5Q0xIZEZRVUY1UXp0QlFVVjZReXdyUWtGQkswSTdRVUZETDBJc1NVRkJUU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETzBGQlF6TkNMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUlhCRExHVkJRV1U3UVVGRFppeEpRVUZKTEdGQlFXRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRka0lzWVVGQllUdEJRVU5pTEVsQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMFFpeGhRVUZoTzBGQlEySXNTVUZCU1N4WlFVRlpMRWRCUVd0Q0xFbEJRVWtzUTBGQlF6dEJRVU4yUXl4aFFVRmhPMEZCUTJJc1NVRkJTU3hSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlJXcENMR2RDUVVGblFqdEJRVU5JTEZGQlFVRXNVMEZCVXl4SFFVRkhMRlZCUVU4c1VVRkJaMEk3T3pzN08yZENRVU40UXl4VlFVRlZMRWRCUVUwc1VVRkJVU3huUWtGQllTeERRVUZETzJkQ1FVTjBReXhKUVVGSkxFZEJRWGxETEVWQlFVVXNRMEZCUXp0blFrRkhhRVFzVDBGQlR5eEhRVUYxUWp0dlFrRkRiRU1zUjBGQlJ5eEZRVUZGTEZWQlFWVTdiMEpCUTJZc1RVRkJUU3hGUVVGRkxFdEJRVXM3YjBKQlEySXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSk8yOUNRVU5xUWl4WlFVRlpMRVZCUVVVc1lVRkJZVHRwUWtGRE5VSXNRMEZCUXpzN096dG5Ra0ZKYVVJc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08yZENRVTh2UWl4SFFVRkhMRWRCUVVjc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRMnhGTEZWQlFWVTdaMEpCUTFZc1NVRkJTU3hEUVVGRExFbEJRVWtzVDBGQlZDeEpRVUZKTEVWQlEwTXNSMEZCUnp0eFFrRkRTQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzNGQ1FVTllMRTFCUVUwc1EwRkJReXhWUVVGRExFbEJRVWtzU1VGQlN5eFBRVUZCTEVsQlFVa3NSVUZCU2l4RFFVRkpMRU5CUVVNN2NVSkJRM1JDTEVkQlFVY3NRMEZCUXl4VlFVRkRMRWxCUVVrc1NVRkJTeXhQUVVGQkxHVkJRV1VzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVM5Q0xFTkJRU3RDTEVOQlFVTXNSVUZEYWtRN096czdaMEpCUlVZc1NVRkJTU3hQUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NSVUZCUlR0dlFrRkRhRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0cFFrRkROMFE3Y1VKQlFVMHNTVUZCU1N4UFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxIRkNRVUZ4UWl4RlFVRkZPMjlDUVVOb1JDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXg1UkVGQmVVUXNRMEZCUXl4RFFVRkRPMmxDUVVOMFJUdHhRa0ZCVFR0dlFrRkRUQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM3BGTzJkQ1FVTkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenR2UWtGSGRFTXNjMEpCUVU4c1NVRkJTU3hGUVVGRE96czdTMEZEWWl4RFFVRkRPMEZCUlVZN096czdPenRIUVUxSE8wRkJRMVVzVVVGQlFTeFBRVUZQTEVkQlFVY3NWVUZCVHl4UlFVRm5RaXhGUVVGRkxGbEJRVzlDTEVWQlFVVXNUMEZCWlN4RlFVRkZMRTlCUVdVN096czdPMmRDUVVVNVJpeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVONFFpeExRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM1pETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFF6dG5Ra0ZEU3l4VFFVRlRMRWRCUVVjc01rSkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMjlDUVVNdlF5eEZRVUZGTEVWQlFVVXNUVUZCVFR0dlFrRkRWaXhKUVVGSkxFVkJRVVVzVTBGQlV6dHBRa0ZEYUVJc1EwRkJReXhEUVVGRE8yZENRVWRITEdOQlFXTXNSMEZCUnl3eVFrRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJRelZFTERKRFFVRXlRenRuUWtGRk0wTXNjVUpCUVUwc1pVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNTeFJRVUZSTEdsQ1FVRmpMRVZCUVVVc2JVSkJRV2xDTEdOQlFXTXNkVUpCUVd0Q0xGbEJRVmtzWVVGQlVTeFBRVUZUTEVWQlFVVTdkMEpCUXpGSUxFOUJRVThzUlVGQlJUczBRa0ZEVUN4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeGpRVUZqTEVWQlFVVXNiVU5CUVcxRE96UkNRVU51UkN4cFFrRkJhVUlzUlVGQlJTeHRRa0ZCYlVJN2VVSkJRM1pETzNGQ1FVTkdMRU5CUVVNc1JVRkJRVHM3WjBKQlVrWXNNa05CUVRKRE8yZENRVVV6UXl4VFFVMUZMRU5CUVVNN096czdTMEZEU2l4RFFVRkRPMEZCUlVZN1NVRkJRVHRSUVVGQkxHbENRVEJHUXp0UlFYcEdRenM3T3pzN08xZEJUVWM3VVVGRFNDeFRRVUZKTEVkQlFVY3NWVUZCVHl4VFFVRnBRaXhGUVVGRkxFMUJRV003T3pzN08zZENRVU0zUXl4cFJVRkJhVVU3ZDBKQlEycEZMR3RFUVVGclJEdDNRa0ZEYkVRc1NVRkJTU3hUUVVGVExFbEJRVWtzWVVGQllTeEpRVUZKTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzVFVGQlRTeEhRVUZITEdGQlFXRXNSVUZCUlRzMFFrRkRhRVlzWVVGQllTeEhRVUZITEZOQlFWTXNRMEZCUXpzMFFrRkRNVUlzV1VGQldTeEhRVUZITEVsQlFVa3NRMEZCUXpzMFFrRkRjRUlzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUXpzMFFrRkRZaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03ZVVKQlEzSkVPelpDUVVGTk96UkNRVU5NTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03ZVVKQlF6TkNPM2RDUVV0TExFZEJRVWNzUjBGQlJ5eG5RMEZCWjBNc1EwRkJRenQzUWtGRGRrTXNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPM2RDUVZkd1JDeExRVUZMTEVkQlFVY3NVVUZCVVN4RFFVRkRPM2RDUVVWcVFpeFBRVUZQTEVkQlFYVkNPelJDUVVOc1F5eEhRVUZITEVWQlFVVXNWVUZCVlRzMFFrRkRaaXhOUVVGTkxFVkJRVVVzUzBGQlN6czBRa0ZEWWl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWs3TkVKQlEycENMRmxCUVZrc1JVRkJSU3hoUVVGaE96UkNRVU16UWl4UFFVRlBMRVZCUVVVN1owTkJRMUFzYlVKQlFXMUNMRVZCUVVVc1dVRkJXVHRuUTBGRGFrTXNTMEZCU3l4RlFVRkZMRkZCUVZFc1IwRkJSeXhMUVVGTExFZEJRVWNzUjBGQlJ6czJRa0ZET1VJN2VVSkJRMFlzUTBGQlF6czdPenQzUWtGTGFVSXNjVUpCUVUwc1pVRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZCT3p0M1FrRkJMMElzVVVGQlVTeEhRVUZITEZOQlFXOUNPM2RDUVVjdlFpeFBRVUZQTEVkQlFUaENMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03ZDBKQlF6VkVMSGxDUVVGNVFqdDNRa0ZEZWtJc1NVRkJTU3hQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZPelJDUVVOd1F5eFpRVUZaTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8zbENRVU42UXp0M1FrRkpTeXhIUVVGSExFZEJRVWNzYjBKQlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03ZDBKQlEyeEZMQ3REUVVFclF6dDNRa0ZETDBNc1NVRkJTU3hQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVsQlFVa3NTVUZCU1N4SlFVRkpMRkZCUVZFc1NVRkJTU3hEUVVGRExFVkJRVVU3TkVKQlEzSkVMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zT0VKQlFUaENMRWRCUVVjc1QwRkJUeXhEUVVGRExHVkJRV1VzUTBGQlF5eERRVUZETEVOQlFVTTdORUpCUTNwRkxGbEJRVmtzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhIUVVGSExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdlVUpCUXpsRE96WkNRVUZOT3pSQ1FVTk1MRmxCUVZrc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03ZVVKQlF5OURPM2RDUVVWRUxGZEJRVmM3ZDBKQlExZ3NTVUZCU1N4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1dVRkJXU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdORUpCUTJoRkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96UkNRVU01UkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRE8zbENRVU55UkRzN096dDNRa0ZGUkN4WlFVRlpMRWRCUVVjc1JVRkJSU3hEUVVGRE8zZENRVU5zUWl4SlFVRkpMRTlCUVVzc1EwRkJReXhOUVVGTkxFbEJRVWtzV1VGQldTeEZRVUZGT3pSQ1FVTm9ReXh6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4cFJFRkJhVVFzUTBGQlF5eERRVUZETzNsQ1FVTTVSRHMyUWtGQlRTeEpRVUZKTEU5QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc2NVSkJRWEZDTEVWQlFVVTdORUpCUTJoRUxITkNRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMREJFUVVFd1JDeERRVUZETEVOQlFVTTdlVUpCUTNaRk96WkNRVUZOT3pSQ1FVTk1MSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETERaRFFVRTJReXhIUVVGSExFOUJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0NVFrRkRNVVU3ZDBKQlEwUXNUVUZCVFN4SlFVRkpMRXRCUVVzc1EwRkJReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkRPelJDUVVkMFF5eHpRa0ZCVHl4WlFVRlpMRVZCUVVNN096dGhRVU55UWl4RFFVRkRPMGxCUTBvc1EwRkJRenRKUVVGRUxHTkJRVU03UVVGQlJDeERRVUZETEVGQk1VWkVMRWxCTUVaRE8wRkJSVVE3T3pzN08wZEJTMGM3UVVGRFNDeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zUjBGQlZ5eEZRVUZGTEUxQlFXTTdTVUZEYmtRc1dVRkJXVHRKUVVOYUxFbEJRVTBzVFVGQlRTeEhRVUYxUXl4RlFVRkZMRU5CUVVNN1NVRkRkRVFzVDBGQlR6dEpRVU5RTEVsQlFVa3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVWYUxHOUNRVUZ2UWp0SlFVTndRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRE8wbEJRM3BETEZsQlFWazdTVUZEV2l4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlEzcENMRTlCUVU4c1RVRkJUU3hEUVVGRE8wdEJRMlk3U1VGRFJDd3lRa0ZCTWtJN1NVRkRNMElzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUXpsRExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0TFFVTm9RanRKUVVWRUxHMUNRVUZ0UWp0SlFVTnVRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExFTkJRVU1zUlVGQlJUdFJRVU4wUXl4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZETTBJN1UwRkJUVHRSUVVOTUxFZEJRVWNzUjBGQlJ5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUTJ4Q08wbEJSVVFzWVVGQllUdEpRVU5pTEU5QlFVOHNSMEZCUnl4SFFVRkhMRkZCUVZFc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdVVUZEYmtNc1kwRkJZenRSUVVOa0xFbEJRVWtzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRE5VSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzQkVPMHRCUTBZN1NVRkRSQ3hoUVVGaExFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTjRRaXh2UWtGQmIwSTdTVUZEY0VJc1QwRkJUeXhOUVVGTkxFTkJRVU03UVVGRGFFSXNRMEZCUXl4RFFVRkRPMEZCUlVZN096czdPMGRCUzBjN1FVRkRTQ3hKUVVGTkxHbENRVUZwUWl4SFFVRkhMRlZCUVVNc1IwRkJWeXhGUVVGRkxFMUJRV003U1VGRGNFUXNWMEZCVnp0SlFVTllMRWxCUVUwc1RVRkJUU3hIUVVGMVF5eEZRVUZGTEVOQlFVTTdTVUZEZEVRc1QwRkJUenRKUVVOUUxFbEJRVWtzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXp0SlFVVnFRaXh0UWtGQmJVSTdTVUZEYmtJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVONlF5eFpRVUZaTzBsQlExb3NTVUZCU1N4UlFVRlJMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU42UWl4UFFVRlBMRTFCUVUwc1EwRkJRenRMUVVObU8xTkJRVTA3VVVGRFRDd3lRa0ZCTWtJN1VVRkRNMElzU1VGQlNTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVsQlFVa3NRMEZCUXl4RlFVRkZPMWxCUXpkRExGRkJRVkVzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0VFFVTm9RanRMUVVOR08wbEJSVVFzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4dlEwRkJiME1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVTXhSQ3haUVVGWk8wbEJRMW9zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRXRCUVVzN1VVRkRja0lzWVVGQllUdFJRVU5pTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRka01zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEVUR0SlFVTklMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVWdzYjBKQlFXOUNPMGxCUTNCQ0xFOUJRVThzVFVGQlRTeERRVUZETzBGQlEyaENMRU5CUVVNc1EwRkJRenRCUVVWR096czdPMGRCU1VjN1FVRkRTQ3hKUVVGTkxHVkJRV1VzUjBGQlJ5eFZRVUZETEZGQlFXZENMRVZCUVVVc1YwRkJiVUk3TzBsQlF6VkVMR1ZCUVdVN1NVRkRaaXhQUVVGUE8wbEJRMUFzVVVGQlVUdEpRVU5TTEdGQlFXRTdTVUZEWWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1NVRkRkRUlzU1VGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkZMME1zU1VGQlRTeFJRVUZSTEdWQlFVY3NVVUZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl3d1EwRkJSeXhEUVVGRExHOURRVUZMTEVWQlFVVXNRMEZCUXp0SlFVTm9SU3hKUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVU5xUkN4SlFVRk5MRWRCUVVjc1IwRkJUU3hSUVVGUkxITkNRVUZwUWl4VFFVRlRMRWRCUVVjc1RVRkJUU3hOUVVGSExFTkJRVU03U1VGRk9VUXNTVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJUbENMRWxCUVUwc1NVRkJTU3hsUVVGWExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhSUVVGUkxFTkJRVU03U1VGRGVFVXNTVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hQUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMREJEUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSVGxGTEZsQlFWazdTVUZEV2l4UFFVRlBPMUZCUTB3c1IwRkJSeXhMUVVGQk8xRkJRMGdzU1VGQlNTeE5RVUZCTzFGQlEwb3NUVUZCVFN4UlFVRkJPMHRCUTFBc1EwRkJRenRCUVVOS0xFTkJRVU1zUTBGQlF6dEJRVVZHT3pzN08wZEJTVWM3UVVGRFNDeEpRVUZOTEdGQlFXRXNSMEZCUnl4VlFVRkRMRWRCUVZjc1JVRkJSU3hIUVVGWE8wbEJRemRETEdWQlFXVTdTVUZEWml4UFFVRlBPMGxCUTFBc1RVRkJUVHRKUVVOT0xFOUJRVTg3U1VGRFVDeHZSRUZCYjBRN1NVRkRjRVFzVFVGQlRUdEpRVU5PTEdsQ1FVRnBRanRKUVVOcVFpeEpRVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEycERMSFZDUVVGMVFqdEpRVU4yUWl4SlFVRk5MRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wbEJRM3BETEVsQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU4yUWl4SlFVRk5MRVZCUVVVc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1NVRkZhRVFzU1VGQlRTeFBRVUZQTEVkQlFXZENPMUZCUXpOQ0xFMUJRVTBzUlVGQlJTeEhRVUZITzFGQlExZ3NTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrSXNTMEZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGJFSXNTVUZCU1N4RlFVRkZMRWxCUVVrN1VVRkRWaXhKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFRaXcwUWtGQk5FSTdVVUZETlVJc1JVRkJSU3hGUVVGRkxFVkJRVVU3VVVGRFRpeE5RVUZOTEVWQlFVVXNSVUZCUlR0TFFVTllMRU5CUVVNN1NVRkZSaXhaUVVGWk8wbEJRMW9zVDBGQlR5eFBRVUZQTEVOQlFVTTdRVUZEYWtJc1EwRkJReXhEUVVGRE8wRkJSVVlzYTBKQlFXVXNUMEZCVHl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciByZWFkU2l0YXJhYmFfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkU2l0YXJhYmFcIikpOyAvLyDjgZfjgZ/jgonjgbDoqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcbnZhciBSZWFkNWNoXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUmVhZDVjaFwiKSk7IC8vIDVjaOS6kuaPm+adv+iqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xudmFyIHNpdGFyYWJhID0gbmV3IHJlYWRTaXRhcmFiYV8xLmRlZmF1bHQoKTtcbnZhciByZWFkNWNoID0gbmV3IFJlYWQ1Y2hfMS5kZWZhdWx0KCk7XG4vLyDmjrLnpLrmnb/oqq3jgb/ovrzjgb/jg6Ljgrjjg6Xjg7zjg6vjgIHkuIDluqbmsbrlrprjgZfjgZ/jgonkvb/jgYTjgb7jgo/jgZnjgZ/jgoHjgavjgrDjg63jg7zjg5Djg6vlrqPoqIBcbnZhciBiYnNNb2R1bGUgPSBudWxsO1xuLyoqXG4gKiDmjrLnpLrmnb/jga7jg6zjgrnjgpLlj5blvpfjgZnjgotcbiAqIEBwYXJhbSB0aHJlYWRVcmwg44K544Os44GuVVJMXG4gKiBAcGFyYW0gcmVzTnVtIOOBk+OBrueVquWPt+S7pemZjeOCkuWPluW+l+OBmeOCi+OAguaMh+WumuOBl+OBquOBhOWgtOWQiOOBr+acgOaWsDHku7bjgpLlj5blvpfjgIJcbiAqL1xuZXhwb3J0cy5nZXRSZXMgPSBmdW5jdGlvbiAodGhyZWFkVXJsLCByZXNOdW0pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlLCBlXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgW2dldFJlc10gJHt0aHJlYWRVcmx9ICR7cmVzTnVtfWApO1xuICAgICAgICAgICAgICAgIC8vIOODquOCr+OCqOOCueODiFVSTOOCkuino+aekOOBl+OAgeS9v+eUqOOBmeOCi+ODouOCuOODpeODvOODq+OCkuWkieabtOOBmeOCi1xuICAgICAgICAgICAgICAgIGJic01vZHVsZSA9IGFuYWx5c0JCU05hbWUodGhyZWFkVXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBiYnNNb2R1bGUucmVhZCh0aHJlYWRVcmwsIHJlc051bSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBbZ2V0UmVzLmpzXSBmZXRjaCAke3RocmVhZFVybH0gcmVzTnVtID0gJHtyZXNOdW19LCByZXN1bHQgPSAke3Jlc3BvbnNlLmxlbmd0aH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UubWFwKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzKSwgeyBpbWdVcmw6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoZV8xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgW11dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0cy5nZXRUaHJlYWRMaXN0ID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzaXRhcmFiYURvbWFpbjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBzaXRhcmFiYURvbWFpbiA9ICdqYmJzLnNoaXRhcmFiYS5uZXQnO1xuICAgICAgICAgICAgICAgIGlmICghKGJvYXJkVXJsLmluZGV4T2Yoc2l0YXJhYmFEb21haW4pICE9PSAtMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlYWRTaXRhcmFiYV8xLnJlYWRCb2FyZChib2FyZFVybCldO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgIC8vIFVSTOOBq+OBl+OBn+OCieOBsOODieODoeOCpOODs+WQjeOBjOWFpeOBo+OBpuOCjOOBsOOBl+OBn+OCieOBsFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBSZWFkNWNoXzEucmVhZEJvYXJkKGJvYXJkVXJsKV07XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydHMucG9zdFJlc3BvbnNlID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNpdGFyYWJhRG9tYWluO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbyhcIltwb3N0UmVzcG9uc2VdIFwiICsgaG9zdG5hbWUgKyBcIiBcIiArIHRocmVhZE51bWJlciArIFwiIFwiICsgYm9hcmRJZCk7XG4gICAgICAgICAgICAgICAgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcbiAgICAgICAgICAgICAgICBpZiAoIShob3N0bmFtZS5pbmRleE9mKHNpdGFyYWJhRG9tYWluKSAhPT0gLTEpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWFkU2l0YXJhYmFfMS5wb3N0UmVzKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgMTogXG4gICAgICAgICAgICAvLyBVUkzjgavjgZfjgZ/jgonjgbDjg4njg6HjgqTjg7PlkI3jgYzlhaXjgaPjgabjgozjgbDjgZfjgZ/jgonjgbBcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBSZWFkNWNoXzEucG9zdFJlcyhob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKV07XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8qXG4gKiBVUkzjgpLjgb/jgabjganjgZPjga5CQlPjgYvliKTlrprjgZfjgabkvb/nlKjjgZnjgovjg6Ljgrjjg6Xjg7zjg6vjgpLov5TljbTjgZnjgotcbiAqL1xudmFyIGFuYWx5c0JCU05hbWUgPSBmdW5jdGlvbiAodGhyZWFkVXJsKSB7XG4gICAgLy8g44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCNXG4gICAgdmFyIHNpdGFyYWJhRG9tYWluID0gJ2piYnMuc2hpdGFyYWJhLm5ldCc7XG4gICAgLy8g44GT44KT44Gq5oSf44GY44Gn5b+F6KaB44Gr5b+c44GY44Gm5aKX44KE44GX44Gm44GE44GR44Gw44GE44GE44KT44GY44KD44Gt77yfXG4gICAgLy8gY29uc3QgZG9ra2Fub0JCUyA9ICdkb2trYS5iYnMuY29tJztcbiAgICBpZiAodGhyZWFkVXJsLmluZGV4T2Yoc2l0YXJhYmFEb21haW4pICE9PSAtMSkge1xuICAgICAgICAvLyBVUkzjgavjgZfjgZ/jgonjgbDjg4njg6HjgqTjg7PlkI3jgYzlhaXjgaPjgabjgozjgbDjgZfjgZ/jgonjgbBcbiAgICAgICAgcmV0dXJuIHNpdGFyYWJhO1xuICAgIH1cbiAgICAvLyDjganjgZPjgavjgoLoqbLlvZPjgZfjgarjgYvjgaPjgZ/jgonjgajjgorjgYLjgYjjgZo1Y2jjgadcbiAgICAvLyDjgZPjga7ovrrjgoLlr77lv5zjg4njg6HjgqTjg7Pjg6rjgrnjg4jjgajjgYvkvZzjgaPjgabjgaHjgoPjgpPjgajliKTlrprjgZfjgZ/jgbvjgYbjgYzjgojjgZXjgZ3jgYZcbiAgICByZXR1cm4gcmVhZDVjaDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laMlYwVW1WekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWjJWMFVtVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzT0VSQlFTdENPMEZCUlM5Q0xEWkVRVUUwUnl4RFFVRkRMR2xDUVVGcFFqdEJRVU01U0N4dFJFRkJjMFlzUTBGQlF5eHRRa0ZCYlVJN1FVRkRNVWNzU1VGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4elFrRkJXU3hGUVVGRkxFTkJRVU03UVVGRGNFTXNTVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hwUWtGQlR5eEZRVUZGTEVOQlFVTTdRVUZET1VJc2MwTkJRWE5ETzBGQlEzUkRMRWxCUVVrc1UwRkJVeXhIUVVGblF5eEpRVUZYTEVOQlFVTTdRVUZGZWtRN096czdSMEZKUnp0QlFVTlZMRkZCUVVFc1RVRkJUU3hIUVVGSExGVkJRVThzVTBGQmFVSXNSVUZCUlN4TlFVRmpPenM3T3pzN1owSkJSVEZFTEd0RVFVRnJSRHRuUWtGRmJFUXNPRUpCUVRoQ08yZENRVU01UWl4VFFVRlRMRWRCUVVjc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlVTeERRVUZETzJkQ1FVY3pRaXh4UWtGQlRTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlFUczdaMEpCUVd4RUxGRkJRVkVzUjBGQlJ5eFRRVUYxUXp0blFrRkRlRVFzYVVkQlFXbEhPMmRDUVVWcVJ5eHpRa0ZCVHl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVU1zUjBGQlJ6dDNRa0ZEZEVJc05rSkJRMHNzUjBGQlJ5eExRVU5PTEUxQlFVMHNSVUZCUlN4RlFVRkZMRWxCUTFZN2IwSkJRMG9zUTBGQlF5eERRVUZETEVWQlFVTTdPenRuUWtGRlNDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4elFrRkJUeXhGUVVGRkxFVkJRVU03T3pzN1MwRkZZaXhEUVVGRE8wRkJSVmNzVVVGQlFTeGhRVUZoTEVkQlFVY3NWVUZCVHl4UlFVRm5RanM3T3pzN1owSkJRelZETEdOQlFXTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dHhRa0ZEZUVNc1EwRkJRU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQkxFVkJRWFpETEhkQ1FVRjFRenRuUWtGSGJFTXNjVUpCUVUwc2QwSkJRV3RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVFN08xbEJSbnBETERCQ1FVRXdRanRaUVVNeFFpeEZRVUZGTzFsQlEwWXNjMEpCUVU4c1UwRkJhME1zUlVGQlF6dHZRa0ZGYmtNc2NVSkJRVTBzYlVKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJRVHR2UWtGQmJrTXNjMEpCUVU4c1UwRkJORUlzUlVGQlF6czdPMHRCUlhaRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRlBMRkZCUVdkQ0xFVkJRVVVzV1VGQmIwSXNSVUZCUlN4UFFVRmxMRVZCUVVVc1QwRkJaVHM3T3pzN1owSkJRM3BITEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZyUWl4UlFVRlJMRk5CUVVrc1dVRkJXU3hUUVVGSkxFOUJRVk1zUTBGQlF5eERRVUZETzJkQ1FVVTFSQ3hqUVVGakxFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN2NVSkJRM2hETEVOQlFVRXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVN4RlFVRjJReXgzUWtGQmRVTTdaMEpCUld4RExIRkNRVUZOTEhOQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGQk96dFpRVVIyUlN3d1FrRkJNRUk3V1VGRE1VSXNjMEpCUVU4c1UwRkJaMFVzUlVGQlF6dHZRa0ZGYWtVc2NVSkJRVTBzYVVKQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUVR0dlFrRkJha1VzYzBKQlFVOHNVMEZCTUVRc1JVRkJRenM3TzB0QlJYSkZMRU5CUVVNN1FVRkZSanM3UjBGRlJ6dEJRVU5JTEVsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVVNc1UwRkJhVUk3U1VGRGRFTXNXVUZCV1R0SlFVTmFMRWxCUVUwc1kwRkJZeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMGxCUXpWRExEWkNRVUUyUWp0SlFVTTNRaXh6UTBGQmMwTTdTVUZGZEVNc1NVRkJTU3hUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRelZETERCQ1FVRXdRanRSUVVNeFFpeFBRVUZQTEZGQlFWRXNRMEZCUXp0TFFVTnFRanRKUVVORUxIZENRVUYzUWp0SlFVTjRRaXh2UTBGQmIwTTdTVUZEY0VNc1QwRkJUeXhQUVVGUExFTkJRVU03UVVGRGFrSXNRMEZCUXl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiDjgZfjgZ/jgonjgbDoqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcbiAqL1xudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcbnZhciBpY29udl9saXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImljb252LWxpdGVcIikpOyAvLyDmloflrZfjgrPjg7zjg4nlpInmj5vnlKjjg5Hjg4PjgrHjg7zjgrhcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciBlbmNvZGluZ19qYXBhbmVzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKSk7XG4vKiog44K544Os5LiA6Kan44KS6Kqt44G/6L6844KAICovXG5leHBvcnRzLnJlYWRCb2FyZCA9IGZ1bmN0aW9uIChib2FyZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVxdWVzdFVybCwgbGlzdCwgb3B0aW9ucywgcmVzcG9uc2UsIHN0ciwgZXJyb3JfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gYm9hcmRVcmwgKyBcInN1YmplY3QudHh0XCI7XG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdChvcHRpb25zKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgc3RyID0gaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpLCAnRVVDLUpQJyk7XG4gICAgICAgICAgICAgICAgLy8g44OR44O844K544GX44Gm5qC857SNXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoLmFwcGx5KGxpc3QsIHN0clxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW07IH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxpbmUpIHsgcmV0dXJuIHBhcnNlVGhyZWFkTGlzdChib2FyZFVybCwgbGluZSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgW1lc3NhZ2U9JyArIGVycm9yXzEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBsaXN0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vKipcbiAqIOODrOOCueOCkuaKleeov+OBmeOCi1xuICogQHBhcmFtIGhvc3RuYW1lIOODm+OCueODiOWQjeOAgmh0dHBzOi8vaG9nZWhvZ2UvXG4gKiBAcGFyYW0gdGhyZWFkTnVtYmVyIOOCueODrOeVquWPtyAxMjM0NTY3OFxuICogQHBhcmFtIGJvYXJkSWQg5p2/SUQgcGFzdGEwNFxuICogQHBhcmFtIG1lc3NhZ2Ug5oqV56i/5paHXG4gKi9cbmV4cG9ydHMucG9zdFJlcyA9IGZ1bmN0aW9uIChob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1bmljb2RlQXJyYXksIGksIHNqaXNBcnJheSwgZW5jb2RlZEtleXdvcmQsIGRpciwgYmJzO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheS5wdXNoKG1lc3NhZ2UuY2hhckNvZGVBdChpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNqaXNBcnJheSA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC5jb252ZXJ0KHVuaWNvZGVBcnJheSwge1xuICAgICAgICAgICAgICAgICAgICB0bzogJ0VVQ0pQJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ1VOSUNPREUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVuY29kZWRLZXl3b3JkID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LnVybEVuY29kZShzamlzQXJyYXkpO1xuICAgICAgICAgICAgICAgIGRpciA9IGJvYXJkSWQuc3BsaXQoJy8nKVswXTtcbiAgICAgICAgICAgICAgICBiYnMgPSBib2FyZElkLnNwbGl0KCcvJylbMV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0LnBvc3QoaG9zdG5hbWUgKyBcImJicy93cml0ZS5jZ2kvXCIgKyBib2FyZElkICsgXCIvXCIgKyB0aHJlYWROdW1iZXIgKyBcIi9cIiwgXCJkaXI9XCIgKyBkaXIgKyBcIiZiYnM9XCIgKyBiYnMgKyBcIiZrZXk9XCIgKyB0aHJlYWROdW1iZXIgKyBcIiZ0aW1lPVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBcIiZuYW1lPSZtYWlsPXNhZ2UmTUVTU0FHRT1cIiArIGVuY29kZWRLZXl3b3JkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnKi8qJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwLCBkZWZsYXRlLCBicicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVmZXJlcjogXCJcIiArIGhvc3RuYW1lICsgYm9hcmRJZCArIFwiL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLyoqXG4gKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAqL1xudmFyIFJlYWRTaXRhcmFiYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFkU2l0YXJhYmEoKSB7XG4gICAgICAgIC8vIGNvbnN0cnVjdG9yKCkge31cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOOCueiqreOBv+i+vOOBv1xuICAgICAgICAgKiBAZGVzY3JpcHRpb24g5byV5pWw44Gn5oyH5a6a44GX44Gf5p2/44GL44KJ44Os44K544KS6Kqt44KA44CCXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiDjg6zjgrnnlarlj7fjgpLmjIflrprjgZfjgabjgYTjgarjgYTloLTlkIjjga/mnIDmlrAx5Lu25Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSB0aHJlYWRVcmwg44K544OsVVJMXG4gICAgICAgICAqIEBwYXJhbSByZXNOdW0g44Os44K555Wq5Y+3XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWQgPSBmdW5jdGlvbiAodGhyZWFkVXJsLCByZXNOdW0pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0VXJsLCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCByZXNwb25zZUpzb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gdGhyZWFkVXJsLnJlcGxhY2UoJ3JlYWQuY2dpJywgJ3Jhd21vZGUuY2dpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOOCueeVquWPt+OBjOOBguOCi+WgtOWQiOODrOOCueeVquWPt+S7pemZjeOCkuWPluW+l1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgKz0gcmVzTnVtICsgJy0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K555Wq5Y+344GM44Gq44GE5aC05ZCI5pyA5paw44GuMeS7tuWPluW+l1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgKz0gJ2wxJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdChvcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gZGVjb2RlVW5pY29kZVN0cihpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdFVUMtSlAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBwdXJzZU5ld1Jlc3BvbnNlKHN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VKc29uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgfVxuICAgIHJldHVybiBSZWFkU2l0YXJhYmE7XG59KCkpO1xuLyoqXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcbiAqIEBwYXJhbSByZXNcbiAqL1xudmFyIHB1cnNlTmV3UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8g5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcbiAgICB2YXIgcmVzQXJyYXkgPSByZXMuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XG4gICAgLy8gMeihjOOBlOOBqOOBq+ODkeODvOOCueOBmeOCi1xuICAgIHJlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIOODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHVyc2VSZXNwb25zZSh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIOOCueODrOS4gOimp+OBruODkeODvOOCuVxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcbiAqL1xudmFyIHBhcnNlVGhyZWFkTGlzdCA9IGZ1bmN0aW9uIChib2FyZFVybCwgc3ViamVjdExpbmUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcbiAgICAvL+ODrOOCueOBruimgee0oFxuICAgIC8vMDpkYXTlkI1cbiAgICAvLzE644K544Os44K/44Kk77yI44Os44K55pWw77yJXG4gICAgdmFyIHNwbGl0UmVzID0gc3ViamVjdExpbmUuc3BsaXQoJywnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzcGxpdFJlcyk7XG4gICAgdmFyIGRhdE51bSA9IHNwbGl0UmVzWzBdLnJlcGxhY2UoJy5jZ2knLCAnJyk7XG4gICAgdmFyIGhvc3RuYW1lID0gKF9iID0gKF9hID0gYm9hcmRVcmwubWF0Y2goL15odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgdmFyIGJvYXJkTmFtZSA9IGJvYXJkVXJsLnJlcGxhY2UoaG9zdG5hbWUsICcnKTtcbiAgICB2YXIgdXJsID0gaG9zdG5hbWUgKyBcImJicy9yZWFkLmNnaS9cIiArIGJvYXJkTmFtZSArIGRhdE51bSArIFwiL1wiO1xuICAgIC8vIGxvZy5pbmZvKGAke2hvc3RuYW1lfSAgJHtib2FyZE5hbWV9ICR7ZGF0TnVtfWApO1xuICAgIHZhciB0aXRsZVRlbXAgPSBzcGxpdFJlc1sxXTtcbiAgICB2YXIgbmFtZSA9IChfZCA9IChfYyA9IHRpdGxlVGVtcC5tYXRjaCgvKC4qPylcXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICfimIXlj5blvpflpLHmlZfimIUnO1xuICAgIHZhciByZXNOdW0gPSBOdW1iZXIoKF9lID0gdGl0bGVUZW1wLm1hdGNoKC9cXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VbMF0ucmVwbGFjZSgvXFwofFxcKS9nLCAnJykpO1xuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICByZXNOdW06IHJlc051bSxcbiAgICB9O1xufTtcbi8qKlxuICog44Os44K544Od44Oz44K544Gu44OR44O844K5XG4gKiBKc29u44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y2044GZ44KLXG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XG4gKi9cbnZhciBwdXJzZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcykge1xuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcbiAgICAvL+ODrOOCueOBruimgee0oFxuICAgIC8vMDrjg6zjgrnnlarlj7dcbiAgICAvLzE65ZCN5YmNXG4gICAgLy8yOuODoeOCouODiVxuICAgIC8vMzrml6Xku5hcbiAgICAvLzQ65pys5paHXG4gICAgLy81OuOCueODrOOCv+OCpFxuICAgIC8vNjpJRFxuICAgIHZhciBzcGxpdFJlcyA9IHJlcy5zcGxpdCgnPD4nKTtcbiAgICB2YXIgcmVzSnNvbiA9IHtcbiAgICAgICAgbnVtYmVyOiBOdW1iZXIoc3BsaXRSZXNbMF0pLFxuICAgICAgICBuYW1lOiBzcGxpdFJlc1sxXSxcbiAgICAgICAgZW1haWw6IHNwbGl0UmVzWzJdLFxuICAgICAgICBkYXRlOiBzcGxpdFJlc1szXSxcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbNF0sXG4gICAgICAgIC8vIHRocmVhZFRpdGxlOiBzcGxpdFJlc1s1XSxcbiAgICAgICAgaWQ6IHNwbGl0UmVzWzZdLFxuICAgICAgICBpbWdVcmw6ICcnLFxuICAgIH07XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XG4gICAgcmV0dXJuIHJlc0pzb247XG59O1xuLyoqIOOBl+OBn+OCieOBsOOBoOOBkeOBr+WFqOinkuODgOODg+OCt+ODpeOBjFVuaWNvZGXmloflrZfliJfjgajjgZfjgabmoLzntI3jgZXjgozjgovjga7jgaflpInmj5vjgZnjgosgKi9cbnZhciBkZWNvZGVVbmljb2RlU3RyID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiM2NTM3NDsvZywgJ++9nicpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRTaXRhcmFiYTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVmhaRk5wZEdGeVlXSmhMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNtVmhaRk5wZEdGeVlXSmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUU3TzBkQlJVYzdRVUZEU0N4blJFRkJhMFE3UVVGRGJFUXNNRVJCUVN0Q0xFTkJRVU1zWjBKQlFXZENPMEZCUTJoRUxEaEVRVUVyUWp0QlFVVXZRaXgzUlVGQmVVTTdRVUZGZWtNc1owSkJRV2RDTzBGQlEwZ3NVVUZCUVN4VFFVRlRMRWRCUVVjc1ZVRkJUeXhSUVVGblFqczdPenM3WjBKQlEzaERMRlZCUVZVc1IwRkJUU3hSUVVGUkxHZENRVUZoTEVOQlFVTTdaMEpCUTNSRExFbEJRVWtzUjBGQmVVTXNSVUZCUlN4RFFVRkRPMmRDUVVkb1JDeFBRVUZQTEVkQlFYVkNPMjlDUVVOc1F5eEhRVUZITEVWQlFVVXNWVUZCVlR0dlFrRkRaaXhOUVVGTkxFVkJRVVVzUzBGQlN6dHZRa0ZEWWl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWs3YjBKQlEycENMRmxCUVZrc1JVRkJSU3hoUVVGaE8ybENRVU0xUWl4RFFVRkRPenM3TzJkQ1FVbHBRaXh4UWtGQlRTeGxRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVFN08yZENRVUV2UWl4UlFVRlJMRWRCUVVjc1UwRkJiMEk3WjBKQlR5OUNMRWRCUVVjc1IwRkJSeXh2UWtGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGREwwUXNWVUZCVlR0blFrRkRWaXhKUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZVTEVsQlFVa3NSVUZEUXl4SFFVRkhPM0ZDUVVOSUxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTTdjVUpCUTFnc1RVRkJUU3hEUVVGRExGVkJRVU1zU1VGQlNTeEpRVUZMTEU5QlFVRXNTVUZCU1N4RlFVRktMRU5CUVVrc1EwRkJRenR4UWtGRGRFSXNSMEZCUnl4RFFVRkRMRlZCUVVNc1NVRkJTU3hKUVVGTExFOUJRVUVzWlVGQlpTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJMMElzUTBGQkswSXNRMEZCUXl4RlFVTnFSRHM3T3p0blFrRkZSaXh6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM2hGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0dlFrRkhkRU1zYzBKQlFVOHNTVUZCU1N4RlFVRkRPenM3UzBGRFlpeERRVUZETzBGQlJVWTdPenM3T3p0SFFVMUhPMEZCUTFVc1VVRkJRU3hQUVVGUExFZEJRVWNzVlVGQlR5eFJRVUZuUWl4RlFVRkZMRmxCUVc5Q0xFVkJRVVVzVDBGQlpTeEZRVUZGTEU5QlFXVTdPenM3TzJkQ1FVVTVSaXhaUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjRRaXhMUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNaRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTXhRenRuUWtGRFN5eFRRVUZUTEVkQlFVY3NNa0pCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzI5Q1FVTXZReXhGUVVGRkxFVkJRVVVzVDBGQlR6dHZRa0ZEV0N4SlFVRkpMRVZCUVVVc1UwRkJVenRwUWtGRGFFSXNRMEZCUXl4RFFVRkRPMmRDUVVOSExHTkJRV01zUjBGQlJ5d3lRa0ZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGblFpeERRVUZETEVOQlFVTTdaMEpCUjNSRUxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVTFRaXhIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZGYkVNc2NVSkJRVTBzWlVGQlN5eERRVUZETEVsQlFVa3NRMEZEV0N4UlFVRlJMSE5DUVVGcFFpeFBRVUZQTEZOQlFVa3NXVUZCV1N4TlFVRkhMRVZCUTNSRUxGTkJRVThzUjBGQlJ5eGhRVUZSTEVkQlFVY3NZVUZCVVN4WlFVRlpMR05CUVZNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVU5CUVRSQ0xHTkJRV2RDTEVWQlEyeElPM2RDUVVORkxFOUJRVThzUlVGQlJUczBRa0ZEVUN4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeGpRVUZqTEVWQlFVVXNiVU5CUVcxRE96UkNRVU51UkN4cFFrRkJhVUlzUlVGQlJTeHRRa0ZCYlVJN05FSkJRM1JETEU5QlFVOHNSVUZCUlN4TFFVRkhMRkZCUVZFc1IwRkJSeXhQUVVGUExFMUJRVWM3ZVVKQlEyeERPM0ZDUVVOR0xFTkJRMFlzUlVGQlFUczdaMEpCV0VRc1UwRlhReXhEUVVGRE96czdPMHRCUTBnc1EwRkJRenRCUVVWR096dEhRVVZITzBGQlEwZzdTVUZCUVR0UlFVTkZMRzFDUVVGdFFqdFJRVVJ5UWl4cFFrRjVRME03VVVGMFEwTTdPenM3T3p0WFFVMUhPMUZCUTBnc1UwRkJTU3hIUVVGSExGVkJRVThzVTBGQmFVSXNSVUZCUlN4TlFVRmpPenM3T3p0M1FrRk5la01zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHRkJRV0VzUTBGQlF5eERRVUZETzNkQ1FVTTVSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdORUpCUTJRc2NVSkJRWEZDT3pSQ1FVTnlRaXhWUVVGVkxFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXp0NVFrRkROVUk3TmtKQlFVMDdORUpCUTB3c2JVSkJRVzFDT3pSQ1FVTnVRaXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETzNsQ1FVTndRanQzUWtGSlN5eFBRVUZQTEVkQlFYVkNPelJDUVVOc1F5eEhRVUZITEVWQlFVVXNWVUZCVlRzMFFrRkRaaXhOUVVGTkxFVkJRVVVzUzBGQlN6czBRa0ZEWWl4WlFVRlpMRVZCUVVVc1lVRkJZVHMwUWtGRE0wSXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSk8zbENRVU5zUWl4RFFVRkRPM2RDUVVObExIRkNRVUZOTEdWQlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJRVHM3ZDBKQlFTOUNMRkZCUVZFc1IwRkJSeXhUUVVGdlFqdDNRa0ZGTDBJc1IwRkJSeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMRzlDUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJSVE5GTEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkZNME1zYzBKQlFVOHNXVUZCV1N4RlFVRkRPenM3WVVGRGNrSXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkJSQ3h0UWtGQlF6dEJRVUZFTEVOQlFVTXNRVUY2UTBRc1NVRjVRME03UVVGRlJEczdPMGRCUjBjN1FVRkRTQ3hKUVVGTkxHZENRVUZuUWl4SFFVRkhMRlZCUVVNc1IwRkJWenRKUVVOdVF5eFhRVUZYTzBsQlExZ3NTVUZCVFN4TlFVRk5MRWRCUVhWRExFVkJRVVVzUTBGQlF6dEpRVVYwUkN4dlFrRkJiMEk3U1VGRGNFSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhoUVVGaE8wbEJRMklzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRXRCUVVzN1VVRkRja0lzWTBGQll6dFJRVU5rTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnVRenRKUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRhRUlzUTBGQlF5eERRVUZETzBGQlJVWTdPenM3UjBGSlJ6dEJRVU5JTEVsQlFVMHNaVUZCWlN4SFFVRkhMRlZCUVVNc1VVRkJaMElzUlVGQlJTeFhRVUZ0UWpzN1NVRkROVVFzWlVGQlpUdEpRVU5tTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1lVRkJZVHRKUVVOaUxFbEJRVTBzVVVGQlVTeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGVFTXNlVUpCUVhsQ08wbEJRM3BDTEVsQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJSUzlETEVsQlFVMHNVVUZCVVN4bFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRhRVVzU1VGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtRc1NVRkJUU3hIUVVGSExFZEJRVTBzVVVGQlVTeHhRa0ZCWjBJc1UwRkJVeXhIUVVGSExFMUJRVTBzVFVGQlJ5eERRVUZETzBsQlF6ZEVMRzFFUVVGdFJEdEpRVVZ1UkN4SlFVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGT1VJc1NVRkJUU3hKUVVGSkxHVkJRVmNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4UlFVRlJMRU5CUVVNN1NVRkRka1VzU1VGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4UFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETERCRFFVRkhMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlRsRkxGbEJRVms3U1VGRFdpeFBRVUZQTzFGQlEwd3NSMEZCUnl4TFFVRkJPMUZCUTBnc1NVRkJTU3hOUVVGQk8xRkJRMG9zVFVGQlRTeFJRVUZCTzB0QlExQXNRMEZCUXp0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVWR096czdPMGRCU1VjN1FVRkRTQ3hKUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEYUVNc1pVRkJaVHRKUVVObUxFOUJRVTg3U1VGRFVDeFJRVUZSTzBsQlExSXNUVUZCVFR0SlFVTk9MRTlCUVU4N1NVRkRVQ3hOUVVGTk8wbEJRMDRzVFVGQlRUdEpRVU5PTEZGQlFWRTdTVUZEVWl4TlFVRk5PMGxCUTA0c1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVF5eEpRVUZOTEU5QlFVOHNSMEZCUnp0UlFVTmtMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xEUkNRVUUwUWp0UlFVTTFRaXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1JVRkJSU3hGUVVGRk8wdEJRMWdzUTBGQlF6dEpRVU5HTEZsQlFWazdTVUZEV2l4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOcVFpeERRVUZETEVOQlFVTTdRVUZGUml3MlEwRkJOa003UVVGRE4wTXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEYmtNc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eERRVUZETEVOQlFVTTdRVUZGUml4clFrRkJaU3haUVVGWkxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBnZXRSZXNfMSA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi9jb25zdFwiKTtcbnZhciBpc0dldHRpbmcgPSBmYWxzZTtcbnZhciBnZXRSZXNJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoISEoKF9iID0gKF9hID0gZ2xvYmFsVGhpcyA9PT0gbnVsbCB8fCBnbG9iYWxUaGlzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnbG9iYWxUaGlzLmVsZWN0cm9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGF0YSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRocmVhZC51cmwpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoNTAwMCldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBnZXRSZXNJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0IC8qeWllbGQqLywgZXhwb3J0cy51cGRhdGVSZXMoKV07XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWxfMS5zbGVlcCg1MDAwKV07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgIGdldFJlc0ludGVydmFsKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmdldFJlc0ludGVydmFsKCk7XG5leHBvcnRzLnVwZGF0ZVJlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZldGNoUmVzTnVtLCBsYXN0UmVzTnVtXzEsIHJlc3VsdCwgbmV3UmVzdWx0LCBlXzE7XG4gICAgdmFyIF9hO1xuICAgIHZhciBfYiwgX2MsIF9kLCBfZTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XG4gICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBpZiAoaXNHZXR0aW5nKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgaXNHZXR0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2YudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBmZXRjaFJlc051bSA9IChfYyA9IChfYiA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGlzdFtnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3QubGVuZ3RoIC0gMV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5udW1iZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDE7XG4gICAgICAgICAgICAgICAgbGFzdFJlc051bV8xID0gKF9lID0gKF9kID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0W2dsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGlzdC5sZW5ndGggLSAxXSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLm51bWJlcikgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogMDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMS5nZXRSZXMoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC51cmwsIGZldGNoUmVzTnVtKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOaMh+WumuOBl+OBn+ODrOOCueeVquOBr+mZpOWkluWvvuixoVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLm51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdSZXN1bHQgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1iZXIgPiBsYXN0UmVzTnVtXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3QpLnB1c2guYXBwbHkoX2EsIG5ld1Jlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdSZXN1bHQubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmREb21Gb3JDaGF0V2luZG93KG5ld1Jlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9mLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaXNHZXR0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydHMuY3JlYXRlRG9tID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB2YXIgZG9tU3RyID0gXCI8bGkgY2xhc3M9XFxcImxpc3QtaXRlbVxcXCI+XCI7XG4gICAgZG9tU3RyICs9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XCI7XG4gICAgLy8g44Os44K555Wq6KGo56S6XG4gICAgZG9tU3RyICs9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInJlc051bWJlclxcXCI+XCIgKyBtZXNzYWdlLm51bWJlciArIFwiPC9zcGFuPlxcbiAgICBcIjtcbiAgICAvLyDlkI3liY3ooajnpLpcbiAgICBkb21TdHIgKz0gXCI8c3BhbiBjbGFzcz1cXFwibmFtZVxcXCI+XCIgKyBtZXNzYWdlLm5hbWUgKyBcIjwvc3Bhbj5cIjtcbiAgICAvLyDmmYLliLvooajnpLpcbiAgICBkb21TdHIgKz0gXCI8c3BhbiBjbGFzcz1cXFwiZGF0ZVxcXCI+XCIgKyBtZXNzYWdlLmRhdGUgKyBcIjwvc3Bhbj5cIjtcbiAgICBkb21TdHIgKz0gJzxici8+JztcbiAgICBkb21TdHIgKz0gXCJcXG4gICAgPHNwYW4gY2xhc3M9XFxcInJlc1xcXCI+XFxuICAgICAgXCIgKyBtZXNzYWdlLnRleHRcbiAgICAgICAgLnJlcGxhY2UoLzxhIC4qPz4vZywgJycpIC8vIOOBl+OBn+OCieOBsOOBr+OCouODs+OCq+ODvOOCkmHjgr/jgrDljJbjgZfjgabjgYTjgotcbiAgICAgICAgLnJlcGxhY2UoLzxcXFxcYT4vZywgJycpICsgXCJcXG4gICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvbGk+XCI7XG4gICAgcmV0dXJuIGRvbVN0cjtcbn07XG52YXIgc2VuZERvbUZvckNoYXRXaW5kb3cgPSBmdW5jdGlvbiAobWVzc2FnZUxpc3QpIHtcbiAgICB2YXIgZG9tU3RyMiA9IG1lc3NhZ2VMaXN0XG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGltZ1VybCA9IG1lc3NhZ2UuaW1nVXJsICYmIG1lc3NhZ2UuaW1nVXJsLm1hdGNoKC9eXFwuLykgPyAnLi4vLi4vcHVibGljLycgKyBtZXNzYWdlLmltZ1VybCA6IG1lc3NhZ2UuaW1nVXJsO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG1lc3NhZ2UpLCB7IGltZ1VybDogaW1nVXJsIH0pO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIGV4cG9ydHMuY3JlYXRlRG9tKG1lc3NhZ2UpOyB9KVxuICAgICAgICAuam9pbignXFxuJyk7XG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy53ZWJDb250ZW50cy5zZW5kKGNvbnN0XzEuZWxlY3Ryb25FdmVudFsnc2hvdy1jb21tZW50J10sIHsgZG9tOiBkb21TdHIyIH0pO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IHt9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSaGNuUlRaWEoyWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6ZEdGeWRGTmxjblpsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNPRVJCUVN0Q08wRkJReTlDTEN0Q1FVRXJRanRCUVVNdlFpd3lRMEZCTkVRN1FVRkROVVFzYVVOQlFYZERPMEZCUlhoRExFbEJRVWtzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVTjBRaXhKUVVGTkxHTkJRV01zUjBGQlJ6czdPenM3Y1VKQlJXcENMR05CUVVNc1ZVRkJWU3hoUVVGV0xGVkJRVlVzZFVKQlFWWXNWVUZCVlN4RFFVRkZMRkZCUVZFc01FTkJRVVVzU1VGQlNTd3dRMEZCUlN4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGQkxFVkJRWFpETEhkQ1FVRjFRenRuUWtGRGVrTXNjVUpCUVUwc1dVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZCT3p0blFrRkJha0lzVTBGQmFVSXNRMEZCUXp0blFrRkRiRUlzWTBGQll5eEZRVUZGTEVOQlFVTTdaMEpCUTJwQ0xITkNRVUZQTzI5Q1FVVlVMSEZDUVVGTkxHbENRVUZUTEVWQlFVVXNSVUZCUVRzN1owSkJRV3BDTEZOQlFXbENMRU5CUVVNN1owSkJSV3hDTEhGQ1FVRk5MRmxCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUlVGQlFUczdaMEpCUVdwQ0xGTkJRV2xDTEVOQlFVTTdaMEpCUTJ4Q0xHTkJRV01zUlVGQlJTeERRVUZET3pzN08wdEJRMnhDTEVOQlFVTTdRVUZEUml4alFVRmpMRVZCUVVVc1EwRkJRenRCUVVWS0xGRkJRVUVzVTBGQlV5eEhRVUZIT3pzN096czdPMmRDUVVOMlFpeEpRVUZKTEZOQlFWTTdiMEpCUVVVc2MwSkJRVTg3WjBKQlEzUkNMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU03T3pzN1owSkJSVlFzVjBGQlZ5eGxRVUZYTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRExEQkRRVUZGTEUxQlFVMHNiVU5CUVVrc1EwRkJReXhEUVVGRE8yZENRVU42U0N3eVFrRkJZU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl3d1EwRkJSU3hOUVVGTkxHMURRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkZka2NzY1VKQlFVMHNaVUZCWXl4RFFVRkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVUU3TzJkQ1FVRXZSU3hOUVVGTkxFZEJRVWNzVTBGQmMwVTdaMEpCUTNKR0xHVkJRV1U3WjBKQlEyWXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTI1RUxGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1IwRkJSeXhKUVVGTExFOUJRVU1zUjBGQlJ5eERRVUZETEUxQlFXbENMRWRCUVVjc1dVRkJWU3hGUVVGdVF5eERRVUZ0UXl4RFFVRkRMRU5CUVVNN2IwSkJRemxGTEVOQlFVRXNTMEZCUVN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkJMRU5CUVVNc1NVRkJTU3hYUVVGSkxGTkJRVk1zUlVGQlJUdHZRa0ZGZUVRc1NVRkJTU3hUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTTdkMEpCUVVVc2IwSkJRVzlDTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN2FVSkJRek5FT3pzN08yZENRVVZFTEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVU1zUTBGQlF5eERRVUZET3pzN1owSkJSV1lzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXpzN096dExRVU51UWl4RFFVRkRPMEZCUlZjc1VVRkJRU3hUUVVGVExFZEJRVWNzVlVGQlF5eFBRVUZ2UWp0SlFVTTFReXhKUVVGSkxFMUJRVTBzUjBGQlJ5d3dRa0ZCZDBJc1EwRkJRenRKUVVWMFF5eE5RVUZOTEVsQlFVa3NlVUpCUVhWQ0xFTkJRVU03U1VGRmJFTXNVVUZCVVR0SlFVTlNMRTFCUVUwc1NVRkJTU3gxUTBGRGIwSXNUMEZCVHl4RFFVRkRMRTFCUVUwc2EwSkJRM3BETEVOQlFVTTdTVUZEU2l4UFFVRlBPMGxCUTFBc1RVRkJUU3hKUVVGSkxEQkNRVUZ6UWl4UFFVRlBMRU5CUVVNc1NVRkJTU3haUVVGVExFTkJRVU03U1VGRGRFUXNUMEZCVHp0SlFVTlFMRTFCUVUwc1NVRkJTU3d3UWtGQmMwSXNUMEZCVHl4RFFVRkRMRWxCUVVrc1dVRkJVeXhEUVVGRE8wbEJSWFJFTEUxQlFVMHNTVUZCU1N4UFFVRlBMRU5CUVVNN1NVRkZiRUlzVFVGQlRTeEpRVUZKTEhWRFFVVktMRTlCUVU4c1EwRkJReXhKUVVGSk8xTkJRMWdzVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXh4UWtGQmNVSTdVMEZETjBNc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVOQlFVTXNkVU5CUjNSQ0xFTkJRVU03U1VGRlVDeFBRVUZQTEUxQlFVMHNRMEZCUXp0QlFVTm9RaXhEUVVGRExFTkJRVU03UVVGRlJpeEpRVUZOTEc5Q1FVRnZRaXhIUVVGSExGVkJRVU1zVjBGQk1FSTdTVUZEZEVRc1NVRkJUU3hQUVVGUExFZEJRVWNzVjBGQlZ6dFRRVU40UWl4SFFVRkhMRU5CUVVNc1ZVRkJReXhQUVVGUE8xRkJRMWdzU1VGQlRTeE5RVUZOTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zWlVGQlpTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdVVUZEYWtnc05rSkJRMHNzVDBGQlR5eExRVU5XTEUxQlFVMHNVVUZCUVN4SlFVTk9PMGxCUTBvc1EwRkJReXhEUVVGRE8xTkJRMFFzUjBGQlJ5eERRVUZETEZWQlFVTXNUMEZCVHl4SlFVRkxMRTlCUVVFc2FVSkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSVUZCYkVJc1EwRkJhMElzUTBGQlF6dFRRVU53UXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRFpDeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJZU3hEUVVGRExHTkJRV01zUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE1VY3NRMEZCUXl4RFFVRkRPMEZCUlVZc2EwSkJRV1VzUlVGQlJTeERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcbmV4cG9ydHMucmVhZFdhdkZpbGVzID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmc18xLmRlZmF1bHQucmVhZGRpcihwYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xuICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0V4aXN0RmlsZShwYXRoICsgJy8nICsgZmlsZSkgJiYgLy4qXFwud2F2JC8udGVzdChmaWxlKTsgLy/ntZ7jgorovrzjgb9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzb2x2ZShmaWxlTGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbnZhciBpc0V4aXN0RmlsZSA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LnN0YXRTeW5jKGZpbGUpLmlzRmlsZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnRzLnNsZWVwID0gZnVuY3Rpb24gKG1zZWMpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zZWMpOyB9KTsgfTtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bJidgXCI8Pl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXG4gICAgICAgICAgICBcIidcIjogJyYjeDI3OycsXG4gICAgICAgICAgICAnYCc6ICcmI3g2MDsnLFxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgICAgICc+JzogJyZndDsnLFxuICAgICAgICB9W21hdGNoXTtcbiAgICB9KTtcbn07XG5leHBvcnRzLnVuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgICAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXG4gICAgICAgIC5yZXBsYWNlKC8mIzAzOTsvZywgXCInXCIpXG4gICAgICAgIC5yZXBsYWNlKC8mIzA0NDsvZywgJywnKVxuICAgICAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblYwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTd3dRMEZCYjBJN1FVRkRVQ3hSUVVGQkxGbEJRVmtzUjBGQlJ5eFZRVUZETEVsQlFWazdTVUZEZGtNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5PMUZCUTJwRExGbEJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXM3V1VGRE1VSXNTVUZCU1N4SFFVRkhPMmRDUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1NVRkJTVHRuUWtGRGFrTXNUMEZCVHl4WFFVRlhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0WlFVTjRSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNTVUZCVFN4WFFVRlhMRWRCUVVjc1ZVRkJReXhKUVVGWk8wbEJReTlDTEVsQlFVazdVVUZEUml4WlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOYUxFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJPMWxCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGVrTTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxFdEJRVXNzUjBGQlJ5eFZRVUZETEVsQlFWa3NTVUZCU3l4UFFVRkJMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVU1zVDBGQlR5eEpRVUZMTEU5QlFVRXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQmVrSXNRMEZCZVVJc1EwRkJReXhGUVVGdVJDeERRVUZ0UkN4RFFVRkRPMEZCUlRsRkxGRkJRVUVzVlVGQlZTeEhRVUZITEZWQlFVTXNUVUZCWXp0SlFVTjJReXhKUVVGSkxFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tTzBsQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZETEV0QlFVczdVVUZEZGtNc1QwRkJVVHRaUVVOT0xFZEJRVWNzUlVGQlJTeFBRVUZQTzFsQlExb3NSMEZCUnl4RlFVRkZMRkZCUVZFN1dVRkRZaXhIUVVGSExFVkJRVVVzVVVGQlVUdFpRVU5pTEVkQlFVY3NSVUZCUlN4UlFVRlJPMWxCUTJJc1IwRkJSeXhGUVVGRkxFMUJRVTA3V1VGRFdDeEhRVUZITEVWQlFVVXNUVUZCVFR0VFFVTktMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRUQ3hEUVVGRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRkRU1zVDBGQlR5eEhRVUZITzFOQlExQXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU0xUWl4RFFVRkRMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvbi1qc29uLXN0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpY29udi1saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==