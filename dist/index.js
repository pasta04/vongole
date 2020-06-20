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
        chatWindow: [],
    },
    data: {
        boardList: [],
        board: {
            url: null,
            threadList: [],
        },
        thread: [],
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
                    globalThis.electron.window.chatWindow.map(function (win) {
                        win.focus();
                        win.show();
                        win.restore();
                    });
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
                        globalThis.electron.window.chatWindow.map(function (win) {
                            win.focus();
                            win.show();
                            win.restore();
                        });
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
        closable: true,
    });
    // 初期表示は非表示
    chatWindow.minimize();
    // レンダラーで使用するhtmlファイルを指定する
    chatWindow.loadURL('file://' + path_1.default.resolve(__dirname, '../src/html/chat.html'));
    chatWindow.setTitle('vongole - thread');
    chatWindow.setMenu(null);
    chatWindow.on('close', function (event) {
        // console.log(event);
        var title = chatWindow.getTitle();
        var targetIndex = 0;
        globalThis.electron.data.thread = globalThis.electron.data.thread.filter(function (thread, index) {
            if (title.includes(thread.url))
                targetIndex = index;
            return !title.includes(thread.url);
        });
        globalThis.electron.window.chatWindow = globalThis.electron.window.chatWindow.filter(function (win, index) {
            return index !== targetIndex;
        });
    });
    // chatWindow.webContents.openDevTools();
    return chatWindow;
};
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_GET_ELECTRON_DATA, function (event, message) {
    return globalThis.electron.data;
});
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_SET_ELECTRON_DATA, function (event, message) {
    globalThis.electron.data = message;
    return;
});
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_FETCH_BOARDINFO, function (event, url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getRes_1.threadUrlToBoardInfo(url)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); });
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_ADD_BOARDLIST, function (event, message) {
    var index = globalThis.electron.data.boardList.findIndex(function (board) { return board.url === message.url; });
    if (index > -1) {
        // 上書き
        globalThis.electron.data.boardList[index].name = message.name;
    }
    else {
        // 新規
        globalThis.electron.data.boardList.push(message);
    }
    config_1.default.saveBoardList(globalThis.electron.data.boardList);
    return;
});
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_DELETE_BOARDLIST, function (event, boardUrl) {
    globalThis.electron.data.boardList = globalThis.electron.data.boardList.filter(function (board) { return board.url !== boardUrl; });
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
    var hostname, threadNumber, boardId, windowIndex, filtered, i, chatWindow;
    var _a, _b, _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                hostname = (_b = (_a = url.match(/https?:\/\/.+?\//)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : '';
                threadNumber = (_d = (_c = url.match(/\/\d+\/$/)) === null || _c === void 0 ? void 0 : _c[0].replace(/\//g, '')) !== null && _d !== void 0 ? _d : '';
                boardId = url.replace(hostname, '').replace("/" + threadNumber + "/", '').replace('test/read.cgi/', '').replace('bbs/read.cgi/', '');
                windowIndex = 0;
                filtered = globalThis.electron.data.thread.filter(function (thread) { return thread.boardId === boardId; });
                if (!(filtered.length > 0)) return [3 /*break*/, 1];
                for (i = 0; i < globalThis.electron.data.thread.length; i++) {
                    if (globalThis.electron.data.thread[i].boardId === boardId) {
                        globalThis.electron.data.thread[i] = {
                            url: url,
                            hostname: hostname,
                            threadNumber: threadNumber,
                            boardId: boardId,
                            list: [],
                            getRes: getRes_1.analysBBSName(url),
                        };
                        windowIndex = i;
                    }
                }
                return [3 /*break*/, 3];
            case 1:
                globalThis.electron.data.thread.push({
                    url: url,
                    hostname: hostname,
                    threadNumber: threadNumber,
                    boardId: boardId,
                    list: [],
                    getRes: getRes_1.analysBBSName(url),
                });
                windowIndex = globalThis.electron.data.thread.length - 1;
                chatWindow = createChatWindow();
                globalThis.electron.window.chatWindow.push(chatWindow);
                return [4 /*yield*/, util_1.sleep(200)];
            case 2:
                _e.sent();
                globalThis.electron.window.chatWindow[windowIndex].webContents.send(const_1.electronEvent.CHAT_INIT, { boardId: boardId });
                _e.label = 3;
            case 3:
                electron_log_1.default.info(JSON.stringify(globalThis.electron.data.thread[windowIndex], null, '  '));
                globalThis.electron.window.chatWindow[windowIndex].webContents.send(const_1.electronEvent['clear-comment']);
                globalThis.electron.window.chatWindow[windowIndex].setTitle(name + " - " + url);
                return [4 /*yield*/, startServer_1.updateRes(globalThis.electron.data.thread[windowIndex], windowIndex)];
            case 4:
                _e.sent();
                globalThis.electron.window.chatWindow[windowIndex].focus();
                globalThis.electron.window.chatWindow[windowIndex].show();
                globalThis.electron.window.chatWindow[windowIndex].restore();
                return [2 /*return*/];
        }
    });
}); });
electron_1.ipcMain.handle(const_1.electronEvent.MAIN_POST_KAKIKOMI, function (event, args) { return __awaiter(void 0, void 0, void 0, function () {
    var index, thread, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                index = globalThis.electron.data.thread.findIndex(function (thread) { return thread.boardId === args.boardId; });
                if (index === -1)
                    return [2 /*return*/];
                thread = globalThis.electron.data.thread[index];
                return [4 /*yield*/, getRes_2.postResponse(thread.hostname, thread.threadNumber, thread.boardId, args.message)];
            case 1:
                _a.sent();
                return [4 /*yield*/, startServer_1.updateRes(thread, index)];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2pCLDhDQUFxQztBQUNyQyxtREFBaUU7QUFDakUsOERBQStCO0FBQy9CLCtCQUErQjtBQUMvQixnRkFBc0Q7QUFDdEQsb0RBQThCO0FBQzlCLGlDQUF3QztBQUN4QywyQ0FBc0Y7QUFDdEYsNkNBQTBDO0FBQzFDLDJDQUFnRDtBQUVoRCxPQUFPLENBQUMsS0FBSyxHQUFHO0lBQ2QsRUFBRTtBQUNKLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsVUFBQyxHQUFHO0lBQ2xDLHNCQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCO0FBQ3pCLElBQU0sR0FBRyxHQUFHLGtCQUFRLENBQUMsR0FBRyxDQUFDO0FBRXpCLFNBQVM7QUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEVBQUU7SUFDcEMsc0JBQUcsQ0FBQyxLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQztJQUMzRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDWjtBQUVELHNCQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTFCLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUM7QUFFckMsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFeEQsY0FBYztBQUNkLDhEQUE4RDtBQUM5RCxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVsQixrQkFBa0I7QUFD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

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
            var rep, requestUrl, range, options, responseJson, response, headers, str, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // log.info(`[Read5ch] threadUrl=${threadUrl} resNum=${resNum}`);
                        // 板や最終日レス番号がかわったら最初からとり直す(lastmodifiと rangeのリセット)
                        if (threadUrl != this.lastThreadUrl || Number.isNaN(resNum) || resNum < this.lastResNumber) {
                            this.lastThreadUrl = threadUrl;
                            this.lastModified = null;
                            this.lastByte = 0;
                            console.trace('[Read5ch.js]resete!!!!!!!!!!!!!!!!');
                        }
                        else {
                            console.trace('noresete');
                        }
                        rep = /\/test\/read.cgi(\/.+)(\/.+)\//;
                        requestUrl = threadUrl.replace(rep, '$1/dat$2.dat');
                        range = this.lastByte;
                        options = {
                            url: requestUrl,
                            method: 'GET',
                            timeout: 3 * 1000,
                            responseType: 'arraybuffer',
                            headers: {
                                'if-modified-since': this.lastModified,
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
                            this.lastModified = headers['last-modified'];
                        }
                        str = iconv_lite_1.default.decode(Buffer.from(response.data), 'Shift_JIS');
                        // レスポンスオブジェクト作成、content-rangeがある場合とない場合で処理を分ける
                        if (headers['content-range'] == null || this.lastByte == 0) {
                            console.trace('[Read5ch.read]content-range=' + headers['content-range']);
                            result = purseNewResponse(str, resNum);
                            responseJson = result.result;
                            this.lastResNumber = result.lastResNumber;
                        }
                        else {
                            responseJson = purseDiffResponse(str, resNum);
                        }
                        // 取得バイト数表示
                        if (headers['content-length'] != null && responseJson.length > 0) {
                            this.lastByte = this.lastByte + parseInt(headers['content-length']) - 1;
                            console.trace('[Read5ch.read]lastByte=' + this.lastByte);
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
        this.lastThreadUrl = '';
        this.lastResNumber = 0;
        this.lastModified = null;
        this.lastByte = 0;
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
        return { result: result, lastResNumber: resNum };
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
    // log.info(`num = ${num}  resArrayLength = ${resArray.length}   ${resArray[num]}`);
    // 1行ごとにパースする
    for (; num < resArray.length; num++) {
        // パースメソッド呼び出し
        if (resArray[num].length > 0) {
            result.push(parseResponse(resArray[num], num + 1));
        }
    }
    // パースしたオブジェクトの配列を返却
    return { result: result, lastResNumber: num + 1 };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZDVjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWQ1Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILGdEQUFrRDtBQUNsRCwwREFBK0IsQ0FBQyxnQkFBZ0I7QUFDaEQsOERBQStCO0FBQy9CLHdFQUF5QztBQUV6QywrQkFBK0I7QUFDL0IsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLGdCQUFnQjtBQUNILFFBQUEsU0FBUyxHQUFHLFVBQU8sUUFBZ0I7Ozs7O2dCQUN4QyxVQUFVLEdBQU0sUUFBUSxnQkFBYSxDQUFDO2dCQUN0QyxJQUFJLEdBQXlDLEVBQUUsQ0FBQztnQkFHaEQsT0FBTyxHQUF1QjtvQkFDbEMsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJO29CQUNqQixZQUFZLEVBQUUsYUFBYTtpQkFDNUIsQ0FBQzs7OztnQkFJaUIscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFBOztnQkFBL0IsUUFBUSxHQUFHLFNBQW9CO2dCQU8vQixHQUFHLEdBQUcsb0JBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLFVBQVU7Z0JBQ1YsSUFBSSxDQUFDLElBQUksT0FBVCxJQUFJLEVBQ0MsR0FBRztxQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNYLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7cUJBQ3RCLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQS9CLENBQStCLENBQUMsRUFDakQ7Ozs7Z0JBRUYsSUFBSSxPQUFLLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTtvQkFDaEMsc0JBQUcsQ0FBQyxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztpQkFDN0Q7cUJBQU0sSUFBSSxPQUFLLENBQUMsTUFBTSxJQUFJLHFCQUFxQixFQUFFO29CQUNoRCxzQkFBRyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO2lCQUN0RTtxQkFBTTtvQkFDTCxzQkFBRyxDQUFDLEtBQUssQ0FBQyw0Q0FBNEMsR0FBRyxPQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pFO2dCQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFHdEMsc0JBQU8sSUFBSSxFQUFDOzs7S0FDYixDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ1UsUUFBQSxPQUFPLEdBQUcsVUFBTyxRQUFnQixFQUFFLFlBQW9CLEVBQUUsT0FBZSxFQUFFLE9BQWU7Ozs7O2dCQUU5RixZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN4QixLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQztnQkFDSyxTQUFTLEdBQUcsMkJBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO29CQUMvQyxFQUFFLEVBQUUsTUFBTTtvQkFDVixJQUFJLEVBQUUsU0FBUztpQkFDaEIsQ0FBQyxDQUFDO2dCQUdHLGNBQWMsR0FBRywyQkFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFnQixDQUFDLENBQUM7Z0JBQzVELDJDQUEyQztnQkFFM0MscUJBQU0sZUFBSyxDQUFDLElBQUksQ0FBSSxRQUFRLGlCQUFjLEVBQUUsbUJBQWlCLGNBQWMsdUJBQWtCLFlBQVksYUFBUSxPQUFTLEVBQUU7d0JBQzFILE9BQU8sRUFBRTs0QkFDUCxNQUFNLEVBQUUsS0FBSzs0QkFDYixjQUFjLEVBQUUsbUNBQW1DOzRCQUNuRCxpQkFBaUIsRUFBRSxtQkFBbUI7eUJBQ3ZDO3FCQUNGLENBQUMsRUFBQTs7Z0JBUkYsMkNBQTJDO2dCQUUzQyxTQU1FLENBQUM7Ozs7S0FDSixDQUFDO0FBRUY7SUFVRTtRQUFBLGlCQUtDO1FBRUQ7Ozs7OztXQU1HO1FBQ0gsU0FBSSxHQUFHLFVBQU8sU0FBaUIsRUFBRSxNQUFjOzs7Ozt3QkFDN0MsaUVBQWlFO3dCQUNqRSxrREFBa0Q7d0JBQ2xELElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDMUYsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7NEJBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOzRCQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO3lCQUNyRDs2QkFBTTs0QkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3lCQUMzQjt3QkFLSyxHQUFHLEdBQUcsZ0NBQWdDLENBQUM7d0JBQ3ZDLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQzt3QkFZcEQsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBRXRCLE9BQU8sR0FBdUI7NEJBQ2xDLEdBQUcsRUFBRSxVQUFVOzRCQUNmLE1BQU0sRUFBRSxLQUFLOzRCQUNiLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSTs0QkFDakIsWUFBWSxFQUFFLGFBQWE7NEJBQzNCLE9BQU8sRUFBRTtnQ0FDUCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsWUFBWTtnQ0FDdEMsS0FBSyxFQUFFLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRzs2QkFDOUI7eUJBQ0YsQ0FBQzs7Ozt3QkFLaUIscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBL0IsUUFBUSxHQUFHLFNBQW9CO3dCQUcvQixPQUFPLEdBQThCLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQzVELHlCQUF5Qjt3QkFDekIsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzt5QkFDOUM7d0JBSUssR0FBRyxHQUFHLG9CQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO3dCQUNsRSwrQ0FBK0M7d0JBQy9DLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTs0QkFDMUQsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzs0QkFDbkUsTUFBTSxHQUFHLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzs0QkFDN0MsWUFBWSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQzt5QkFDM0M7NkJBQU07NEJBQ0wsWUFBWSxHQUFHLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDL0M7d0JBRUQsV0FBVzt3QkFDWCxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs0QkFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDeEUsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQzFEOzs7O3dCQUVELFlBQVksR0FBRyxFQUFFLENBQUM7d0JBQ2xCLElBQUksT0FBSyxDQUFDLE1BQU0sSUFBSSxZQUFZLEVBQUU7NEJBQ2hDLHNCQUFHLENBQUMsS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7eUJBQzlEOzZCQUFNLElBQUksT0FBSyxDQUFDLE1BQU0sSUFBSSxxQkFBcUIsRUFBRTs0QkFDaEQsc0JBQUcsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQzt5QkFDdkU7NkJBQU07NEJBQ0wsc0JBQUcsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLEdBQUcsT0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUMxRTt3QkFDRCxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7NEJBR3RDLHNCQUFPLFlBQVksRUFBQzs7O2FBQ3JCLENBQUM7UUFqR0EsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQThGSCxjQUFDO0FBQUQsQ0FBQyxBQTdHRCxJQTZHQztBQUVEOzs7OztHQUtHO0FBQ0gsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEdBQVcsRUFBRSxNQUFjO0lBQ25ELFlBQVk7SUFDWixJQUFNLE1BQU0sR0FBdUMsRUFBRSxDQUFDO0lBQ3RELE9BQU87SUFDUCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFWixvQkFBb0I7SUFDcEIsSUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxZQUFZO0lBQ1osSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN6QixPQUFPLEVBQUUsTUFBTSxRQUFBLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDO0tBQzFDO0lBQ0QsMkJBQTJCO0lBQzNCLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUM5QyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDaEI7SUFFRCxtQkFBbUI7SUFDbkIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdEMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQzNCO1NBQU07UUFDTCxHQUFHLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztLQUNsQjtJQUVELG9GQUFvRjtJQUNwRixhQUFhO0lBQ2IsT0FBTyxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUNuQyxjQUFjO1FBQ2QsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7S0FDRjtJQUNELG9CQUFvQjtJQUNwQixPQUFPLEVBQUUsTUFBTSxRQUFBLEVBQUUsYUFBYSxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNILElBQU0saUJBQWlCLEdBQUcsVUFBQyxHQUFXLEVBQUUsTUFBYztJQUNwRCxXQUFXO0lBQ1gsSUFBTSxNQUFNLEdBQXVDLEVBQUUsQ0FBQztJQUN0RCxPQUFPO0lBQ1AsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBRWpCLG1CQUFtQjtJQUNuQixJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLFlBQVk7SUFDWixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7U0FBTTtRQUNMLDJCQUEyQjtRQUMzQixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDN0MsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO0tBQ0Y7SUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFELFlBQVk7SUFDWixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztRQUNyQixhQUFhO1FBQ2IsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN2QyxHQUFHLEVBQUUsQ0FBQztTQUNQO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxvQkFBb0I7SUFDcEIsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILElBQU0sZUFBZSxHQUFHLFVBQUMsUUFBZ0IsRUFBRSxXQUFtQjs7SUFDNUQsZUFBZTtJQUNmLE9BQU87SUFDUCxRQUFRO0lBQ1IsYUFBYTtJQUNiLElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUvQyxJQUFNLFFBQVEsZUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLDBDQUFHLENBQUMsb0NBQUssRUFBRSxDQUFDO0lBQ2hFLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELElBQU0sR0FBRyxHQUFNLFFBQVEsc0JBQWlCLFNBQVMsR0FBRyxNQUFNLE1BQUcsQ0FBQztJQUU5RCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUIsSUFBTSxJQUFJLGVBQVcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQywwQ0FBRyxDQUFDLG9DQUFLLFFBQVEsQ0FBQztJQUN4RSxJQUFNLE1BQU0sR0FBRyxNQUFNLE9BQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsMENBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFFOUUsWUFBWTtJQUNaLE9BQU87UUFDTCxHQUFHLEtBQUE7UUFDSCxJQUFJLE1BQUE7UUFDSixNQUFNLFFBQUE7S0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILElBQU0sYUFBYSxHQUFHLFVBQUMsR0FBVyxFQUFFLEdBQVc7SUFDN0MsZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sT0FBTztJQUNQLG9EQUFvRDtJQUNwRCxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLElBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsdUJBQXVCO0lBQ3ZCLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVoRCxJQUFNLE9BQU8sR0FBZ0I7UUFDM0IsTUFBTSxFQUFFLEdBQUc7UUFDWCxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLDRCQUE0QjtRQUM1QixFQUFFLEVBQUUsRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO0tBQ1gsQ0FBQztJQUVGLFlBQVk7SUFDWixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==

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
var axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
var iconv_lite_1 = __importDefault(__webpack_require__(/*! iconv-lite */ "iconv-lite")); // 文字コード変換用パッケージ
var readSitaraba_1 = __importStar(__webpack_require__(/*! ./readSitaraba */ "./src/main/readBBS/readSitaraba.ts")); // したらば読み込み用モジュール
var Read5ch_1 = __importStar(__webpack_require__(/*! ./Read5ch */ "./src/main/readBBS/Read5ch.ts")); // 5ch互換板読み込み用モジュール
/**
 * 掲示板のレスを取得する
 * @param threadUrl スレのURL
 * @param resNum この番号以降を取得する。指定しない場合は最新1件を取得。
 */
exports.getRes = function (bbsModule, threadUrl, resNum) { return __awaiter(void 0, void 0, void 0, function () {
    var response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
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
exports.analysBBSName = function (threadUrl) {
    // したらばドメイン名
    var sitarabaDomain = 'jbbs.shitaraba.net';
    if (threadUrl.indexOf(sitarabaDomain) !== -1) {
        // URLにしたらばドメイン名が入ってればしたらば
        var sitaraba = new readSitaraba_1.default();
        return sitaraba;
    }
    // どこにも該当しなかったらとりあえず5chで
    // この辺も対応ドメインリストとか作ってちゃんと判定したほうがよさそう
    var read5ch = new Read5ch_1.default();
    return read5ch;
};
/** スレのURLから板情報を取得 */
exports.threadUrlToBoardInfo = function (threadUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var sitarabaDomain, result, boardUrl, tempUrl, encoding, options, response, str, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sitarabaDomain = 'jbbs.shitaraba.net';
                result = {
                    status: 'ng',
                    boardUrl: threadUrl,
                    boardName: '★取得失敗★',
                };
                boardUrl = '';
                tempUrl = threadUrl;
                tempUrl = tempUrl.replace(/\/l\d+$/, '/');
                if (!tempUrl.match(/.*\/$/)) {
                    tempUrl += '/';
                }
                encoding = '';
                if (tempUrl.indexOf(sitarabaDomain) !== -1) {
                    // スレ: https://jbbs.shitaraba.net/bbs/read.cgi/game/51638/1581839266/
                    // 板: https://jbbs.shitaraba.net/game/51638/
                    // 設定: https://jbbs.shitaraba.net/bbs/api/setting.cgi/game/51638/
                    encoding = 'EUC-JP';
                    // 板かスレか判定
                    if (tempUrl.match('read.cgi')) {
                        // スレ
                        tempUrl = tempUrl.replace('jbbs.shitaraba.net/bbs/read.cgi/', '').replace(/https?:\/\//, '');
                        tempUrl = tempUrl.match(/(.+)\/.+\/$/)[1] + '/';
                        boardUrl = "http://jbbs.shitaraba.net/" + tempUrl;
                        tempUrl = "http://jbbs.shitaraba.net/bbs/api/setting.cgi/" + tempUrl;
                    }
                    else {
                        // 板
                        boardUrl = tempUrl;
                        tempUrl = tempUrl.replace('jbbs.shitaraba.net/', '').replace(/https?:\/\//, '');
                        tempUrl = "http://jbbs.shitaraba.net/bbs/api/setting.cgi/" + tempUrl;
                    }
                }
                else {
                    // スレ: https://bbs.jpnkn.com/test/read.cgi/pasta04/1586794623/
                    // 板: https://bbs.jpnkn.com/pasta04/
                    // 設定: https://bbs.jpnkn.com/pasta04/SETTING.TXT
                    encoding = 'SHIFT-JIS';
                    // 板かスレか判定
                    if (tempUrl.match(/test\/read.cgi\/.+\/.+\//)) {
                        // スレ
                        tempUrl = tempUrl.replace('test/read.cgi/', '').match(/(.+)\/.+\/$/)[1] + "/";
                        boardUrl = tempUrl;
                        tempUrl = tempUrl + "SETTING.TXT";
                    }
                    else {
                        // 板
                        boardUrl = tempUrl;
                        tempUrl = tempUrl + "SETTING.TXT";
                    }
                }
                console.log("[tempUrl] " + tempUrl + " [boardUrl] " + boardUrl);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                options = {
                    url: tempUrl,
                    method: 'GET',
                    timeout: 3 * 1000,
                    responseType: 'arraybuffer',
                };
                return [4 /*yield*/, axios_1.default(options)];
            case 2:
                response = _a.sent();
                if (response.status < 400) {
                    str = iconv_lite_1.default.decode(Buffer.from(response.data), encoding);
                    str.split(/\n/g).map(function (text) {
                        var matched = text.match(/BBS_TITLE=(.+)/);
                        if (matched) {
                            result.boardName = matched[1];
                            result.boardUrl = boardUrl;
                            result.status = 'ok';
                        }
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                electron_log_1.default.error('なんかエラー');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, result];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLGdEQUFrRDtBQUNsRCwwREFBK0IsQ0FBQyxnQkFBZ0I7QUFFaEQsNkRBQTRHLENBQUMsaUJBQWlCO0FBQzlILG1EQUFzRixDQUFDLG1CQUFtQjtBQUUxRzs7OztHQUlHO0FBQ1UsUUFBQSxNQUFNLEdBQUcsVUFBTyxTQUFzQyxFQUFFLFNBQWlCLEVBQUUsTUFBYzs7Ozs7O2dCQUdqRixxQkFBTSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsRUFBQTs7Z0JBQWxELFFBQVEsR0FBRyxTQUF1QztnQkFDeEQsaUdBQWlHO2dCQUVqRyxzQkFBTyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRzt3QkFDdEIsNkJBQ0ssR0FBRyxLQUNOLE1BQU0sRUFBRSxFQUFFLElBQ1Y7b0JBQ0osQ0FBQyxDQUFDLEVBQUM7OztnQkFFSCxzQkFBRyxDQUFDLEtBQUssQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFDYixzQkFBTyxFQUFFLEVBQUM7Ozs7S0FFYixDQUFDO0FBRVcsUUFBQSxhQUFhLEdBQUcsVUFBTyxRQUFnQjs7Ozs7Z0JBQzVDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztxQkFDeEMsQ0FBQSxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLEVBQXZDLHdCQUF1QztnQkFHbEMscUJBQU0sd0JBQWtCLENBQUMsUUFBUSxDQUFDLEVBQUE7O1lBRnpDLDBCQUEwQjtZQUMxQixFQUFFO1lBQ0Ysc0JBQU8sU0FBa0MsRUFBQztvQkFFbkMscUJBQU0sbUJBQVksQ0FBQyxRQUFRLENBQUMsRUFBQTtvQkFBbkMsc0JBQU8sU0FBNEIsRUFBQzs7O0tB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

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
                return [4 /*yield*/, axios_1.default.post(hostname + "bbs/write.cgi/" + boardId + "/" + threadNumber + "/", "dir=" + dir + "&bbs=" + bbs + "&key=" + threadNumber + "&time=" + new Date().getTime() + "&name=&MAIL=sage&MESSAGE=" + encodedKeyword, {
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
var isGetting = {};
var getResInterval = function () { return __awaiter(void 0, void 0, void 0, function () {
    var task;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                if (!(!((_a = globalThis === null || globalThis === void 0 ? void 0 : globalThis.electron) === null || _a === void 0 ? void 0 : _a.data) || ((_c = (_b = globalThis === null || globalThis === void 0 ? void 0 : globalThis.electron) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.thread.length) === 0)) return [3 /*break*/, 2];
                return [4 /*yield*/, util_1.sleep(5000)];
            case 1:
                _d.sent();
                getResInterval();
                return [2 /*return*/];
            case 2:
                task = globalThis.electron.data.thread.map(function (thread, index) {
                    // console.log(thread.url);
                    return exports.updateRes(thread, index);
                });
                return [4 /*yield*/, Promise.all(task)];
            case 3:
                _d.sent();
                return [4 /*yield*/, util_1.sleep(5000)];
            case 4:
                _d.sent();
                getResInterval();
                return [2 /*return*/];
        }
    });
}); };
getResInterval();
exports.updateRes = function (thread, index) { return __awaiter(void 0, void 0, void 0, function () {
    var fetchResNum, lastResNum_1, result, newResult, e_1;
    var _a;
    var _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                // log.info(`[updateRes] ${thread.url}  ${index}`);
                if (isGetting[thread.url])
                    return [2 /*return*/];
                isGetting[thread.url] = true;
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                fetchResNum = (_c = (_b = thread.list[thread.list.length - 1]) === null || _b === void 0 ? void 0 : _b.number) !== null && _c !== void 0 ? _c : 1;
                lastResNum_1 = (_e = (_d = thread.list[thread.list.length - 1]) === null || _d === void 0 ? void 0 : _d.number) !== null && _e !== void 0 ? _e : 0;
                return [4 /*yield*/, getRes_1.getRes(thread.getRes, thread.url, fetchResNum)];
            case 2:
                result = _f.sent();
                // 指定したレス番は除外対象
                if (result.length > 0 && result[result.length - 1].number) {
                    newResult = result.filter(function (res) { return res.number > lastResNum_1; });
                    (_a = thread.list).push.apply(_a, newResult);
                    if (newResult.length > 0)
                        sendDomForChatWindow(newResult, index);
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _f.sent();
                electron_log_1.default.error(e_1);
                return [3 /*break*/, 4];
            case 4:
                isGetting[thread.url] = false;
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
var sendDomForChatWindow = function (messageList, index) {
    // log.info(`[sendDomForChatWindow] ${index}`);
    var domStr2 = messageList
        .map(function (message) {
        var imgUrl = message.imgUrl && message.imgUrl.match(/^\./) ? '../../public/' + message.imgUrl : message.imgUrl;
        return __assign(__assign({}, message), { imgUrl: imgUrl });
    })
        .map(function (message) { return exports.createDom(message); })
        .join('\n');
    globalThis.electron.window.chatWindow[index].webContents.send(const_1.electronEvent['show-comment'], { dom: domStr2 });
};
exports.default = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRTZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFydFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQStCO0FBQy9CLCtCQUErQjtBQUMvQiwyQ0FBNEQ7QUFDNUQsaUNBQXdDO0FBRXhDLElBQU0sU0FBUyxHQUErQixFQUFFLENBQUM7QUFDakQsSUFBTSxjQUFjLEdBQUc7Ozs7OztxQkFFakIsQ0FBQSxRQUFDLFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxRQUFRLDBDQUFFLElBQUksQ0FBQSxJQUFJLGFBQUEsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLFFBQVEsMENBQUUsSUFBSSwwQ0FBRSxNQUFNLENBQUMsTUFBTSxNQUFLLENBQUMsQ0FBQSxFQUE5RSx3QkFBOEU7Z0JBQ2hGLHFCQUFNLFlBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQWpCLFNBQWlCLENBQUM7Z0JBQ2xCLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixzQkFBTzs7Z0JBR0gsSUFBSSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLEVBQUUsS0FBSztvQkFDN0QsMkJBQTJCO29CQUMzQixPQUFPLGlCQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBdkIsU0FBdUIsQ0FBQztnQkFFeEIscUJBQU0sWUFBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztnQkFBakIsU0FBaUIsQ0FBQztnQkFDbEIsY0FBYyxFQUFFLENBQUM7Ozs7S0FDbEIsQ0FBQztBQUNGLGNBQWMsRUFBRSxDQUFDO0FBRUosUUFBQSxTQUFTLEdB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

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vcmVhZEJCUy9SZWFkNWNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvZ2V0UmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvcmVhZFNpdGFyYWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N0YXJ0U2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVuY29kaW5nLWphcGFuZXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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IiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVsZWN0cm9uX2pzb25fc3RvcmFnZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1qc29uLXN0b3JhZ2VcIikpO1xyXG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XHJcbnZhciBlbGVjdHJvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvblwiKSk7XHJcbnZhciBDb25maWcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRCb2FkTGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlY3Ryb25fanNvbl9zdG9yYWdlXzEuZGVmYXVsdC5nZXQoJ2JvYXJkTGlzdCcsIGZ1bmN0aW9uIChlcnJvciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCA9IChfYSA9IGRhdGEuYm9hcmRMaXN0KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKiog5p2/5LiA6Kan44KS5L+d5a2YICovXHJcbiAgICAgICAgdGhpcy5zYXZlQm9hcmRMaXN0ID0gZnVuY3Rpb24gKGJvYXJkTGlzdCkge1xyXG4gICAgICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LnNldCgnYm9hcmRMaXN0JywgeyBib2FyZExpc3Q6IGJvYXJkTGlzdCB9LCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8g6Kit5a6a44OV44Kh44Kk44Or6Kqt44G/6L6844G/XHJcbiAgICAgICAgLy8gbGV0IG5vd1BhdGggPSBlbGVjdHJvbi5hcHAuZ2V0QXBwUGF0aCgpO1xyXG4gICAgICAgIC8vIGlmIChub3dQYXRoLmluY2x1ZGVzKCdDb250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXInKSkge1xyXG4gICAgICAgIC8vICAgbm93UGF0aCA9IG5vd1BhdGgucmVwbGFjZSgnYXBwLmFzYXInLCAnJykgKyAnLi4vLi4vLi4vJztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc3Qgbm93UGF0aCA9IHBhdGgucmVzb2x2ZSgnJylcclxuICAgICAgICB2YXIgbm93UGF0aCA9IGVsZWN0cm9uXzEuZGVmYXVsdC5hcHAuZ2V0UGF0aCgndXNlckRhdGEnKTtcclxuICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oXCJbQ29uZmlnXSBwYXRoID0gXCIgKyBub3dQYXRoKTtcclxuICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LnNldERhdGFQYXRoKG5vd1BhdGgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIENvbmZpZztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gbmV3IENvbmZpZygpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1Wm1sbkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWTI5dVptbG5MblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRMEVzWjBaQlFUUkRPMEZCUXpWRExEaEVRVUVyUWp0QlFVTXZRaXh6UkVGQlowTTdRVUZGYUVNN1NVRkRSVHRSUVZkQkxHZENRVUZYTEVkQlFVYzdXVUZEV2l3clFrRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCUXl4TFFVRlZMRVZCUVVVc1NVRkJVenM3WjBKQlF6ZERMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNVMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXh0UTBGQlNTeEZRVUZGTEVOQlFVTTdXVUZETlVRc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRFRDeERRVUZETEVOQlFVTTdVVUZGUml4aFFVRmhPMUZCUTJJc2EwSkJRV0VzUjBGQlJ5eFZRVUZETEZOQlFXOUVPMWxCUTI1RkxDdENRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmRCUVZjc1JVRkJSU3hGUVVGRkxGTkJRVk1zVjBGQlFTeEZRVUZGTEVWQlFVVXNWVUZCUXl4SFFVRkhPMmRDUVVNeFF5eE5RVUZOTEVkQlFVY3NRMEZCUXp0WlFVTmFMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMHdzUTBGQlF5eERRVUZETzFGQmNrSkJMR0ZCUVdFN1VVRkRZaXd5UTBGQk1rTTdVVUZETTBNc2VVUkJRWGxFTzFGQlEzcEVMRFpFUVVFMlJEdFJRVU0zUkN4SlFVRkpPMUZCUTBvc2JVTkJRVzFETzFGQlEyNURMRWxCUVUwc1QwRkJUeXhIUVVGSExHdENRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dFJRVU5xUkN4elFrRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eHhRa0ZCYlVJc1QwRkJVeXhEUVVGRExFTkJRVU03VVVGRGRrTXNLMEpCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZETDBJc1EwRkJRenRKUVdGSUxHRkJRVU03UVVGQlJDeERRVUZETEVGQmVFSkVMRWxCZDBKRE8wRkJSVVFzYTBKQlFXVXNTVUZCU1N4TlFVRk5MRVZCUVVVc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5lbGVjdHJvbkV2ZW50ID0ge1xyXG4gICAgLyoqIOOCteODvOODkOODvOi1t+WLlSAqL1xyXG4gICAgJ3N0YXJ0LXNlcnZlcic6ICdzdGFydC1zZXJ2ZXInLFxyXG4gICAgLyoqIOOCouODqeODvOODiOihqOekuiAqL1xyXG4gICAgJ3Nob3ctYWxlcnQnOiAnc2hvdy1hbGVydCcsXHJcbiAgICAnc2hvdy1jb21tZW50JzogJ3Nob3ctY29tbWVudCcsXHJcbiAgICAnY2xlYXItY29tbWVudCc6ICdjbGVhci1jb21tZW50JyxcclxuICAgIC8qKiDjgrXjg7zjg5Djg7zotbfli5Xjga7ov5Tkv6EgKi9cclxuICAgICdzdGFydC1zZXJ2ZXItcmVwbHknOiAnc3RhcnQtc2VydmVyLXJlcGx5JyxcclxuICAgIE1BSU5fR0VUX0VMRUNUUk9OX0RBVEE6ICdNQUlOX0dFVF9FTEVDVFJPTl9EQVRBJyxcclxuICAgIE1BSU5fU0VUX0VMRUNUUk9OX0RBVEE6ICdNQUlOX1NFVF9FTEVDVFJPTl9EQVRBJyxcclxuICAgIC8qKiDjgrnjg6xVUkzjgpLlhYPjgavmnb/mg4XloLHjgpLlj5blvpcgKi9cclxuICAgIE1BSU5fRkVUQ0hfQk9BUkRJTkZPOiAnTUFJTl9GRVRDSF9CT0FSRElORk8nLFxyXG4gICAgLyoqIOadv+OCkui/veWKoCAqL1xyXG4gICAgTUFJTl9BRERfQk9BUkRMSVNUOiAnTUFJTl9BRERfQk9BUkRMSVNUJyxcclxuICAgIC8qKiDmnb/jgpLliYrpmaQgKi9cclxuICAgIE1BSU5fREVMRVRFX0JPQVJETElTVDogJ01BSU5fREVMRVRFX0JPQVJETElTVCcsXHJcbiAgICAvKiog44K544Os5LiA6Kan44KS6ZaL44GPICovXHJcbiAgICBNQUlOX0dFVF9USFJFQURfTElTVDogJ01BSU5fR0VUX1RIUkVBRF9MSVNUJyxcclxuICAgIC8qKiDjgrnjg6zjgpLplovjgY8gKi9cclxuICAgIE1BSU5fT1BFTl9USFJFQUQ6ICdNQUlOX09QRU5fVEhSRUFEJyxcclxuICAgIC8qKiDmnb/kuIDopqfooajnpLogKi9cclxuICAgIFNIT1dfQk9BUkRfTElTVDogJ1NIT1dfQk9BUkRfTElTVCcsXHJcbiAgICAvKiog5pu444GN6L6844G/ICovXHJcbiAgICBNQUlOX1BPU1RfS0FLSUtPTUk6ICdNQUlOX1BPU1RfS0FLSUtPTUknLFxyXG4gICAgLyoqIOODrOOCueOCpuOCo+ODs+ODieOCpuOBruWIneacn+WMliAqL1xyXG4gICAgQ0hBVF9JTklUOiAnQ0hBVF9JTklUJyxcclxufTtcclxuZXhwb3J0cy5rZXlDb2RlID0ge1xyXG4gICAgRU5URVI6IDEzLFxyXG4gICAgU0hJRlQ6IDE2LFxyXG4gICAgQ1RSTDogMTcsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVjM1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SmpiMjV6ZEM1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZoTEZGQlFVRXNZVUZCWVN4SFFVRkhPMGxCUXpOQ0xHRkJRV0U3U1VGRFlpeGpRVUZqTEVWQlFVVXNZMEZCWXp0SlFVVTVRaXhoUVVGaE8wbEJRMklzV1VGQldTeEZRVUZGTEZsQlFWazdTVUZGTVVJc1kwRkJZeXhGUVVGRkxHTkJRV003U1VGRE9VSXNaVUZCWlN4RlFVRkZMR1ZCUVdVN1NVRkZhRU1zWjBKQlFXZENPMGxCUTJoQ0xHOUNRVUZ2UWl4RlFVRkZMRzlDUVVGdlFqdEpRVVV4UXl4elFrRkJjMElzUlVGQlJTeDNRa0ZCZDBJN1NVRkRhRVFzYzBKQlFYTkNMRVZCUVVVc2QwSkJRWGRDTzBsQlJXaEVMSEZDUVVGeFFqdEpRVU55UWl4dlFrRkJiMElzUlVGQlJTeHpRa0ZCYzBJN1NVRkROVU1zVjBGQlZ6dEpRVU5ZTEd0Q1FVRnJRaXhGUVVGRkxHOUNRVUZ2UWp0SlFVTjRReXhYUVVGWE8wbEJRMWdzY1VKQlFYRkNMRVZCUVVVc2RVSkJRWFZDTzBsQlJUbERMR05CUVdNN1NVRkRaQ3h2UWtGQmIwSXNSVUZCUlN4elFrRkJjMEk3U1VGRk5VTXNXVUZCV1R0SlFVTmFMR2RDUVVGblFpeEZRVUZGTEd0Q1FVRnJRanRKUVVWd1F5eFpRVUZaTzBsQlExb3NaVUZCWlN4RlFVRkZMR2xDUVVGcFFqdEpRVVZzUXl4WFFVRlhPMGxCUTFnc2EwSkJRV3RDTEVWQlFVVXNiMEpCUVc5Q08wbEJSWGhETEd0Q1FVRnJRanRKUVVOc1FpeFRRVUZUTEVWQlFVVXNWMEZCVnp0RFFVTjJRaXhEUVVGRE8wRkJSVmNzVVVGQlFTeFBRVUZQTEVkQlFVYzdTVUZEY2tJc1MwRkJTeXhGUVVGRkxFVkJRVVU3U1VGRFZDeExRVUZMTEVWQlFVVXNSVUZCUlR0SlFVTlVMRWxCUVVrc1JVRkJSU3hGUVVGRk8wTkJRMVFzUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyBFbGVjdHJvbuOBruODouOCuOODpeODvOODq1xyXG52YXIgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcclxudmFyIGVsZWN0cm9uXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImVsZWN0cm9uXCIpKTtcclxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxudmFyIGVsZWN0cm9uX3dpbmRvd19zdGF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi13aW5kb3ctc3RhdGVcIikpO1xyXG52YXIgY29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29uZmlnXCIpKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi9jb25zdFwiKTtcclxudmFyIGdldFJlc18xID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XHJcbnZhciBzdGFydFNlcnZlcl8xID0gcmVxdWlyZShcIi4vc3RhcnRTZXJ2ZXJcIik7XHJcbnZhciBnZXRSZXNfMiA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xyXG5jb25zb2xlLnRyYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy9cclxufTtcclxucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVycik7XHJcbn0pO1xyXG4vLyDjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PjgpLjgrPjg7Pjg4jjg63jg7zjg6vjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcclxudmFyIGFwcCA9IGVsZWN0cm9uXzEuZGVmYXVsdC5hcHA7XHJcbi8vIOWkmumHjei1t+WLlemYsuatolxyXG5pZiAoIWFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKCkpIHtcclxuICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1thcHBdIEl0IGlzIHRlcm1pbmF0ZWQgZm9yIG11bHRpcGxlIGxhdW5jaGVzLicpO1xyXG4gICAgYXBwLnF1aXQoKTtcclxufVxyXG5lbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oJ1thcHBdIHN0YXJ0ZWQnKTtcclxuYXBwLmFsbG93UmVuZGVyZXJQcm9jZXNzUmV1c2UgPSB0cnVlO1xyXG52YXIgaWNvblBhdGggPSBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2ljb24ucG5nJyk7XHJcbi8vIOOCteODvOODkOODvOi1t+WLleODouOCuOODpeODvOODq1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xyXG52YXIgc3MgPSByZXF1aXJlKCcuL3N0YXJ0U2VydmVyJyk7XHJcbmNvbnNvbGUudHJhY2Uoc3MpO1xyXG4vLyDjgqbjgqPjg7Pjg4njgqbjgpLkvZzmiJDjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcclxudmFyIEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbl8xLmRlZmF1bHQuQnJvd3NlcldpbmRvdztcclxuLy8g44Oh44Kk44Oz44Km44Kj44Oz44OJ44Km44GvR0PjgZXjgozjgarjgYTjgojjgYbjgavjgrDjg63jg7zjg5Djg6vlrqPoqIBcclxuZ2xvYmFsVGhpcy5lbGVjdHJvbiA9IHtcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICAgIG1haW5XaW5kb3c6IG51bGwsXHJcbiAgICAgICAgY2hhdFdpbmRvdzogW10sXHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGJvYXJkTGlzdDogW10sXHJcbiAgICAgICAgYm9hcmQ6IHtcclxuICAgICAgICAgICAgdXJsOiBudWxsLFxyXG4gICAgICAgICAgICB0aHJlYWRMaXN0OiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRocmVhZDogW10sXHJcbiAgICB9LFxyXG59O1xyXG4vLyDlhajjgabjga7jgqbjgqPjg7Pjg4njgqbjgYzplonjgZjjgZ/jgonntYLkuoZcclxuYXBwLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9ICdkYXJ3aW4nKSB7XHJcbiAgICBhcHAucXVpdCgpO1xyXG4gICAgLy8gfVxyXG59KTtcclxuLy8gRWxlY3Ryb27jga7liJ3mnJ/ljJblrozkuoblvozjgavlrp/ooYxcclxuYXBwLm9uKCdyZWFkeScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBtYWluV2luZG93U3RhdGUgPSBlbGVjdHJvbl93aW5kb3dfc3RhdGVfMS5kZWZhdWx0KHtcclxuICAgICAgICBkZWZhdWx0V2lkdGg6IDcwMCxcclxuICAgICAgICBkZWZhdWx0SGVpZ2h0OiA3MjAsXHJcbiAgICB9KTtcclxuICAgIC8vIOOCpuOCo+ODs+ODieOCpuOCteOCpOOCuuOCku+8iOODleODrOODvOODoOOCteOCpOOCuuOCkuWQq+OBvuOBquOBhO+8ieioreWumlxyXG4gICAgdmFyIG1haW5XaW4gPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICAgICAgLy8g5YmN5Zue6LW35YuV5pmC44Gu44KS5b6p5YWDXHJcbiAgICAgICAgeDogbWFpbldpbmRvd1N0YXRlLngsXHJcbiAgICAgICAgeTogbWFpbldpbmRvd1N0YXRlLnksXHJcbiAgICAgICAgd2lkdGg6IG1haW5XaW5kb3dTdGF0ZS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IG1haW5XaW5kb3dTdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgdXNlQ29udGVudFNpemU6IHRydWUsXHJcbiAgICAgICAgaWNvbjogaWNvblBhdGgsXHJcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2tpcFRhc2tiYXI6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93Lm1haW5XaW5kb3cgPSBtYWluV2luO1xyXG4gICAgbWFpbldpbmRvd1N0YXRlLm1hbmFnZShtYWluV2luKTtcclxuICAgIG1haW5XaW4uc2V0VGl0bGUoJ3ZvbmdvbGUnKTtcclxuICAgIG1haW5XaW4uc2V0TWVudShudWxsKTtcclxuICAgIC8vIOODrOODs+ODgOODqeODvOOBp+S9v+eUqOOBmeOCi2h0bWzjg5XjgqHjgqTjg6vjgpLmjIflrprjgZnjgotcclxuICAgIG1haW5XaW4ubG9hZFVSTCgnZmlsZTovLycgKyBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9odG1sL2luZGV4Lmh0bWwnKSk7XHJcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjgYzplonjgZjjgonjgozjgZ/jgonjgqLjg5fjg6rjgoLntYLkuoZcclxuICAgIG1haW5XaW4ub24oJ2Nsb3NlJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8g56K66KqN44OA44Kk44Ki44Ot44Kw44Gn44Gv44GE44KS44Kv44Oq44OD44Kv44GX44Gf44KJ6ZaJ44GY44KLXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlbGVjdHJvbl8xLmRpYWxvZ1xyXG4gICAgICAgICAgICAuc2hvd01lc3NhZ2VCb3gobWFpbldpbiwge1xyXG4gICAgICAgICAgICB0eXBlOiAncXVlc3Rpb24nLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbJ1llcycsICdObyddLFxyXG4gICAgICAgICAgICAvLyB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfntYLkuobjgZfjgb7jgZnjgYvvvJ8nLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUucmVzcG9uc2UgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFwcC5leGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgbWFpbldpbi5vbignY2xvc2VkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbygnW2FwcF0gY2xvc2UnKTtcclxuICAgICAgICBhcHAuZXhpdCgpO1xyXG4gICAgfSk7XHJcbiAgICAvLyDplovnmbrogIXjg4Tjg7zjg6vjgpLplovjgY9cclxuICAgIC8vIG1haW5XaW4ud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XHJcbiAgICAvLyDjgr/jgrnjgq/jg4jjg6zjgqTjga7oqK3lrppcclxuICAgIHZhciB0cmF5ID0gbnVsbDtcclxuICAgIGFwcC53aGVuUmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cmF5ID0gbmV3IGVsZWN0cm9uXzEuVHJheShpY29uUGF0aCk7XHJcbiAgICAgICAgdmFyIGNvbnRleHRNZW51ID0gZWxlY3Ryb25fMS5NZW51LmJ1aWxkRnJvbVRlbXBsYXRlKFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICfoqK3lrponLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluV2luLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+OCs+ODoeODs+ODiCcsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cubWFwKGZ1bmN0aW9uICh3aW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbi5yZXN0b3JlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+e1guS6hicsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5XaW4uY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdHJheS5zZXRUb29sVGlwKCd2b25nb2xlJyk7XHJcbiAgICAgICAgdHJheS5zZXRDb250ZXh0TWVudShjb250ZXh0TWVudSk7XHJcbiAgICAgICAgLy8g44K/44K544Kv44OI44Os44Kk44Kv44Oq44OD44Kv5pmC44Gu5oyZ5YuVXHJcbiAgICAgICAgdmFyIGlzRG91YmxlQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRyYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RvdWJsZUNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDIwMCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEb3VibGVDbGlja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93Lm1hcChmdW5jdGlvbiAod2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW4ucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgdHJheS5vbignZG91YmxlLWNsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlzRG91YmxlQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG1haW5XaW4uZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgLy8g5p2/5LiA6Kan5Yid5pyf6KGo56S6XHJcbiAgICBjb25maWdfMS5kZWZhdWx0LmdldEJvYWRMaXN0KCk7XHJcbn0pO1xyXG52YXIgY3JlYXRlQ2hhdFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjaGF0V2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgICAgIHdpZHRoOiA0MDAsXHJcbiAgICAgICAgdXNlQ29udGVudFNpemU6IHRydWUsXHJcbiAgICAgICAgaWNvbjogaWNvblBhdGgsXHJcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g44K/44K544Kv44OQ44O844Gr6KGo56S644GX44Gq44GEXHJcbiAgICAgICAgc2tpcFRhc2tiYXI6IHRydWUsXHJcbiAgICAgICAgY2xvc2FibGU6IHRydWUsXHJcbiAgICB9KTtcclxuICAgIC8vIOWIneacn+ihqOekuuOBr+mdnuihqOekulxyXG4gICAgY2hhdFdpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgLy8g44Os44Oz44OA44Op44O844Gn5L2/55So44GZ44KLaHRtbOODleOCoeOCpOODq+OCkuaMh+WumuOBmeOCi1xyXG4gICAgY2hhdFdpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2h0bWwvY2hhdC5odG1sJykpO1xyXG4gICAgY2hhdFdpbmRvdy5zZXRUaXRsZSgndm9uZ29sZSAtIHRocmVhZCcpO1xyXG4gICAgY2hhdFdpbmRvdy5zZXRNZW51KG51bGwpO1xyXG4gICAgY2hhdFdpbmRvdy5vbignY2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gY2hhdFdpbmRvdy5nZXRUaXRsZSgpO1xyXG4gICAgICAgIHZhciB0YXJnZXRJbmRleCA9IDA7XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZCA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQuZmlsdGVyKGZ1bmN0aW9uICh0aHJlYWQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmICh0aXRsZS5pbmNsdWRlcyh0aHJlYWQudXJsKSlcclxuICAgICAgICAgICAgICAgIHRhcmdldEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybiAhdGl0bGUuaW5jbHVkZXModGhyZWFkLnVybCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdyA9IGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cuZmlsdGVyKGZ1bmN0aW9uICh3aW4sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAhPT0gdGFyZ2V0SW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIGNoYXRXaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XHJcbiAgICByZXR1cm4gY2hhdFdpbmRvdztcclxufTtcclxuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9HRVRfRUxFQ1RST05fREFUQSwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhO1xyXG59KTtcclxuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9TRVRfRUxFQ1RST05fREFUQSwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7XHJcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEgPSBtZXNzYWdlO1xyXG4gICAgcmV0dXJuO1xyXG59KTtcclxuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9GRVRDSF9CT0FSRElORk8sIGZ1bmN0aW9uIChldmVudCwgdXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMS50aHJlYWRVcmxUb0JvYXJkSW5mbyh1cmwpXTtcclxuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH0pO1xyXG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0FERF9CT0FSRExJU1QsIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIGluZGV4ID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGJvYXJkKSB7IHJldHVybiBib2FyZC51cmwgPT09IG1lc3NhZ2UudXJsOyB9KTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgLy8g5LiK5pu444GNXHJcbiAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdFtpbmRleF0ubmFtZSA9IG1lc3NhZ2UubmFtZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIOaWsOimj1xyXG4gICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QucHVzaChtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNvbmZpZ18xLmRlZmF1bHQuc2F2ZUJvYXJkTGlzdChnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0KTtcclxuICAgIHJldHVybjtcclxufSk7XHJcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fREVMRVRFX0JPQVJETElTVCwgZnVuY3Rpb24gKGV2ZW50LCBib2FyZFVybCkge1xyXG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QuZmlsdGVyKGZ1bmN0aW9uIChib2FyZCkgeyByZXR1cm4gYm9hcmQudXJsICE9PSBib2FyZFVybDsgfSk7XHJcbiAgICBjb25maWdfMS5kZWZhdWx0LnNhdmVCb2FyZExpc3QoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCk7XHJcbiAgICByZXR1cm47XHJcbn0pO1xyXG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9USFJFQURfTElTVCwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxpc3Q7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18xLmdldFRocmVhZExpc3QobWVzc2FnZSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbmVsZWN0cm9uXzEuaXBjTWFpbi5vbihjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9PUEVOX1RIUkVBRCwgZnVuY3Rpb24gKGV2ZW50LCB1cmwsIG5hbWUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgd2luZG93SW5kZXgsIGZpbHRlcmVkLCBpLCBjaGF0V2luZG93O1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSB1cmwubWF0Y2goL2h0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcclxuICAgICAgICAgICAgICAgIHRocmVhZE51bWJlciA9IChfZCA9IChfYyA9IHVybC5tYXRjaCgvXFwvXFxkK1xcLyQvKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdLnJlcGxhY2UoL1xcLy9nLCAnJykpICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgYm9hcmRJZCA9IHVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJykucmVwbGFjZShcIi9cIiArIHRocmVhZE51bWJlciArIFwiL1wiLCAnJykucmVwbGFjZSgndGVzdC9yZWFkLmNnaS8nLCAnJykucmVwbGFjZSgnYmJzL3JlYWQuY2dpLycsICcnKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvd0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5maWx0ZXIoZnVuY3Rpb24gKHRocmVhZCkgeyByZXR1cm4gdGhyZWFkLmJvYXJkSWQgPT09IGJvYXJkSWQ7IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyZWQubGVuZ3RoID4gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZFtpXS5ib2FyZElkID09PSBib2FyZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWRbaV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lOiBob3N0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZE51bWJlcjogdGhyZWFkTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRJZDogYm9hcmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVzOiBnZXRSZXNfMS5hbmFseXNCQlNOYW1lKHVybCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd0luZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogaG9zdG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhyZWFkTnVtYmVyOiB0aHJlYWROdW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRJZDogYm9hcmRJZCxcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRSZXM6IGdldFJlc18xLmFuYWx5c0JCU05hbWUodXJsKSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgd2luZG93SW5kZXggPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICBjaGF0V2luZG93ID0gY3JlYXRlQ2hhdFdpbmRvdygpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5wdXNoKGNoYXRXaW5kb3cpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDIwMCldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBfZS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W3dpbmRvd0luZGV4XS53ZWJDb250ZW50cy5zZW5kKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5DSEFUX0lOSVQsIHsgYm9hcmRJZDogYm9hcmRJZCB9KTtcclxuICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKEpTT04uc3RyaW5naWZ5KGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWRbd2luZG93SW5kZXhdLCBudWxsLCAnICAnKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W3dpbmRvd0luZGV4XS53ZWJDb250ZW50cy5zZW5kKGNvbnN0XzEuZWxlY3Ryb25FdmVudFsnY2xlYXItY29tbWVudCddKTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3dbd2luZG93SW5kZXhdLnNldFRpdGxlKG5hbWUgKyBcIiAtIFwiICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0YXJ0U2VydmVyXzEudXBkYXRlUmVzKGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWRbd2luZG93SW5kZXhdLCB3aW5kb3dJbmRleCldO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBfZS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W3dpbmRvd0luZGV4XS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvd1t3aW5kb3dJbmRleF0uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvd1t3aW5kb3dJbmRleF0ucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fUE9TVF9LQUtJS09NSSwgZnVuY3Rpb24gKGV2ZW50LCBhcmdzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGluZGV4LCB0aHJlYWQsIGVfMTtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQuZmluZEluZGV4KGZ1bmN0aW9uICh0aHJlYWQpIHsgcmV0dXJuIHRocmVhZC5ib2FyZElkID09PSBhcmdzLmJvYXJkSWQ7IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18yLnBvc3RSZXNwb25zZSh0aHJlYWQuaG9zdG5hbWUsIHRocmVhZC50aHJlYWROdW1iZXIsIHRocmVhZC5ib2FyZElkLCBhcmdzLm1lc3NhZ2UpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc3RhcnRTZXJ2ZXJfMS51cGRhdGVSZXModGhyZWFkLCBpbmRleCldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoZV8xKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWJXRnBiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6SWpwYkltMWhhVzR1ZEhNaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzYVVKQlFXbENPMEZCUTJwQ0xEaERRVUZ4UXp0QlFVTnlReXh0UkVGQmFVVTdRVUZEYWtVc09FUkJRU3RDTzBGQlF5OUNMQ3RDUVVFclFqdEJRVU12UWl4blJrRkJjMFE3UVVGRGRFUXNiMFJCUVRoQ08wRkJRemxDTEdsRFFVRjNRenRCUVVONFF5d3lRMEZCYzBZN1FVRkRkRVlzTmtOQlFUQkRPMEZCUXpGRExESkRRVUZuUkR0QlFVVm9SQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEhRVUZITzBsQlEyUXNSVUZCUlR0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVWR0xFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVVzVlVGQlF5eEhRVUZITzBsQlEyeERMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xFTkJRVU1zUTBGQlF5eERRVUZETzBGQlJVZ3NlVUpCUVhsQ08wRkJRM3BDTEVsQlFVMHNSMEZCUnl4SFFVRkhMR3RDUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETzBGQlJYcENMRk5CUVZNN1FVRkRWQ3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEhsQ1FVRjVRaXhGUVVGRkxFVkJRVVU3U1VGRGNFTXNjMEpCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zSzBOQlFTdERMRU5CUVVNc1EwRkJRenRKUVVNelJDeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1EwRkRXanRCUVVWRUxITkNRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8wRkJSVEZDTEVkQlFVY3NRMEZCUXl4NVFrRkJlVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZGY2tNc1NVRkJUU3hSUVVGUkxFZEJRVWNzWTBGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRVZCUVVVc1lVRkJZU3hEUVVGRExFTkJRVU03UVVGRmVFUXNZMEZCWXp0QlFVTmtMRGhFUVVFNFJEdEJRVU01UkN4SlFVRk5MRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTTdRVUZEY0VNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVVnNRaXhyUWtGQmEwSTdRVUZEYkVJc1NVRkJUU3hoUVVGaExFZEJRVWNzYTBKQlFWRXNRMEZCUXl4aFFVRmhMRU5CUVVNN1FVRkZOME1zTkVKQlFUUkNPMEZCUXpWQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVYzdTVUZEY0VJc1RVRkJUU3hGUVVGRk8xRkJRMDRzVlVGQlZTeEZRVUZGTEVsQlFWYzdVVUZEZGtJc1ZVRkJWU3hGUVVGRkxFVkJRVVU3UzBGRFpqdEpRVU5FTEVsQlFVa3NSVUZCUlR0UlFVTktMRk5CUVZNc1JVRkJSU3hGUVVGRk8xRkJRMklzUzBGQlN5eEZRVUZGTzFsQlEwd3NSMEZCUnl4RlFVRkZMRWxCUVZjN1dVRkRhRUlzVlVGQlZTeEZRVUZGTEVWQlFVVTdVMEZEWmp0UlFVTkVMRTFCUVUwc1JVRkJSU3hGUVVGRk8wdEJRMWc3UTBGRFJpeERRVUZETzBGQlJVWXNhMEpCUVd0Q08wRkJRMnhDTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVTdTVUZETVVJc2MwTkJRWE5ETzBsQlEzUkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVsQlFVazdRVUZEVGl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVWSUxIRkNRVUZ4UWp0QlFVTnlRaXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlR0SlFVTmtMRWxCUVUwc1pVRkJaU3hIUVVGSExDdENRVUZwUWl4RFFVRkRPMUZCUTNoRExGbEJRVmtzUlVGQlJTeEhRVUZITzFGQlEycENMR0ZCUVdFc1JVRkJSU3hIUVVGSE8wdEJRMjVDTEVOQlFVTXNRMEZCUXp0SlFVVklMRFJDUVVFMFFqdEpRVU0xUWl4SlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxHRkJRV0VzUTBGQlF6dFJRVU5vUXl4WlFVRlpPMUZCUTFvc1EwRkJReXhGUVVGRkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEzQkNMRU5CUVVNc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dFJRVU53UWl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFdEJRVXM3VVVGRE5VSXNUVUZCVFN4RlFVRkZMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJSVGxDTEdOQlFXTXNSVUZCUlN4SlFVRkpPMUZCUTNCQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTzFGQlEyUXNZMEZCWXl4RlFVRkZPMWxCUTJRc1pVRkJaU3hGUVVGRkxFbEJRVWs3VTBGRGRFSTdVVUZEUkN4WFFVRlhMRVZCUVVVc1NVRkJTVHRMUVVOc1FpeERRVUZETEVOQlFVTTdTVUZEU0N4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTJoRUxHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVNMVFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJSWFJDTERCQ1FVRXdRanRKUVVNeFFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1IwRkJSeXhqUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4M1FrRkJkMElzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGTDBVc2NVSkJRWEZDTzBsQlEzSkNMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFVTXNTMEZCU3p0UlFVTjRRaXgzUWtGQmQwSTdVVUZEZUVJc1MwRkJTeXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzFGQlEzWkNMR2xDUVVGTk8yRkJRMGdzWTBGQll5eERRVUZETEU5QlFVOHNSVUZCUlR0WlFVTjJRaXhKUVVGSkxFVkJRVVVzVlVGQlZUdFpRVU5vUWl4UFFVRlBMRVZCUVVVc1EwRkJReXhMUVVGTExFVkJRVVVzU1VGQlNTeERRVUZETzFsQlEzUkNMR0ZCUVdFN1dVRkRZaXhQUVVGUExFVkJRVVVzVTBGQlV6dFRRVU51UWl4RFFVRkRPMkZCUTBRc1NVRkJTU3hEUVVGRExGVkJRVU1zUzBGQlN6dFpRVU5XTEVsQlFVa3NTMEZCU3l4RFFVRkRMRkZCUVZFc1MwRkJTeXhEUVVGRExFVkJRVVU3WjBKQlEzaENMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVU5hTzFGQlEwZ3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRVQ3hEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5JTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRk8xRkJRMjVDTEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzFGQlEzaENMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5pTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlVnc1dVRkJXVHRKUVVOYUxITkRRVUZ6UXp0SlFVVjBReXhaUVVGWk8wbEJRMW9zU1VGQlNTeEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRPMGxCUTJoQ0xFZEJRVWNzUTBGQlF5eFRRVUZUTEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNN1VVRkRia0lzU1VGQlNTeEhRVUZITEVsQlFVa3NaVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8xRkJRekZDTEVsQlFVMHNWMEZCVnl4SFFVRkhMR1ZCUVVrc1EwRkJReXhwUWtGQmFVSXNRMEZCUXp0WlFVTjZRenRuUWtGRFJTeExRVUZMTEVWQlFVVXNTVUZCU1R0blFrRkRXQ3hMUVVGTExFVkJRVVU3YjBKQlEwd3NUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU5zUWl4RFFVRkRPMkZCUTBZN1dVRkRSRHRuUWtGRFJTeExRVUZMTEVWQlFVVXNUVUZCVFR0blFrRkRZaXhMUVVGTExFVkJRVVU3YjBKQlEwd3NWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRkRMRWRCUVVjN2QwSkJRelZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenQzUWtGRFdpeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN2QwSkJRMWdzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMjlDUVVOb1FpeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRUQ3hEUVVGRE8yRkJRMFk3V1VGRFJEdG5Ra0ZEUlN4TFFVRkxMRVZCUVVVc1NVRkJTVHRuUWtGRFdDeExRVUZMTEVWQlFVVTdiMEpCUTB3c1QwRkJUeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTnNRaXhEUVVGRE8yRkJRMFk3VTBGRFJpeERRVUZETEVOQlFVTTdVVUZEU0N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzFGQlF6TkNMRWxCUVVrc1EwRkJReXhqUVVGakxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTTdVVUZEYWtNc2FVSkJRV2xDTzFGQlEycENMRWxCUVVrc1pVRkJaU3hIUVVGSExFdEJRVXNzUTBGQlF6dFJRVU0xUWl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZQTEV0QlFVczdPenM3ZDBKQlF6TkNMR1ZCUVdVc1IwRkJSeXhMUVVGTExFTkJRVU03ZDBKQlEzaENMSEZDUVVGTkxGbEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUVRzN2QwSkJRV2hDTEZOQlFXZENMRU5CUVVNN2QwSkJRMnBDTEVsQlFVa3NaVUZCWlRzMFFrRkJSU3h6UWtGQlR6dDNRa0ZETlVJc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGRExFZEJRVWM3TkVKQlF6VkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6czBRa0ZEV2l4SFFVRkhMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03TkVKQlExZ3NSMEZCUnl4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8zZENRVU5vUWl4RFFVRkRMRU5CUVVNc1EwRkJRenM3T3p0aFFVTktMRU5CUVVNc1EwRkJRenRSUVVOSUxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNZMEZCWXl4RlFVRkZMRlZCUVVNc1MwRkJTenRaUVVNMVFpeGxRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMWxCUTNaQ0xFOUJRVThzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0UlFVTnNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVU5NTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlVnc1ZVRkJWVHRKUVVOV0xHZENRVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNN1FVRkRka0lzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZGU0N4SlFVRk5MR2RDUVVGblFpeEhRVUZITzBsQlEzWkNMRWxCUVUwc1ZVRkJWU3hIUVVGSExFbEJRVWtzWVVGQllTeERRVUZETzFGQlEyNURMRXRCUVVzc1JVRkJSU3hIUVVGSE8xRkJRMVlzWTBGQll5eEZRVUZGTEVsQlFVazdVVUZEY0VJc1NVRkJTU3hGUVVGRkxGRkJRVkU3VVVGRFpDeGpRVUZqTEVWQlFVVTdXVUZEWkN4bFFVRmxMRVZCUVVVc1NVRkJTVHRUUVVOMFFqdFJRVU5FTEdOQlFXTTdVVUZEWkN4WFFVRlhMRVZCUVVVc1NVRkJTVHRSUVVOcVFpeFJRVUZSTEVWQlFVVXNTVUZCU1R0TFFVTm1MRU5CUVVNc1EwRkJRenRKUVVOSUxGZEJRVmM3U1VGRFdDeFZRVUZWTEVOQlFVTXNVVUZCVVN4RlFVRkZMRU5CUVVNN1NVRkZkRUlzTUVKQlFUQkNPMGxCUXpGQ0xGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4SFFVRkhMR05CUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEhWQ1FVRjFRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZxUml4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN1NVRkRlRU1zVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVWNlFpeFZRVUZWTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGRExFdEJRVXM3VVVGRE0wSXNjMEpCUVhOQ08xRkJRM1JDTEVsQlFVMHNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF6dFJRVVZ3UXl4SlFVRkpMRmRCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03VVVGRGNFSXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTenRaUVVOeVJpeEpRVUZKTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6dG5Ra0ZCUlN4WFFVRlhMRWRCUVVjc1MwRkJTeXhEUVVGRE8xbEJRM0JFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0UlFVTnlReXhEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5JTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFVTXNSMEZCUnl4RlFVRkZMRXRCUVVzN1dVRkRPVVlzVDBGQlR5eExRVUZMTEV0QlFVc3NWMEZCVnl4RFFVRkRPMUZCUXk5Q0xFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwd3NRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZTQ3g1UTBGQmVVTTdTVUZGZWtNc1QwRkJUeXhWUVVGVkxFTkJRVU03UVVGRGNFSXNRMEZCUXl4RFFVRkRPMEZCUlVZc2EwSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNjVUpCUVdFc1EwRkJReXh6UWtGQmMwSXNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUE8wbEJRMnhGTEU5QlFVOHNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU03UVVGRGJFTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRTQ3hyUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJZU3hEUVVGRExITkNRVUZ6UWl4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGRkxFOUJRWGRETzBsQlEyNUhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXp0SlFVTnVReXhQUVVGUE8wRkJRMVFzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEU0N4clFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMRzlDUVVGdlFpeEZRVUZGTEZWQlFVOHNTMEZCU3l4RlFVRkZMRWRCUVZjN096dHZRa0ZEYmtVc2NVSkJRVTBzTmtKQlFXOUNMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVUU3YjBKQlFYUkRMSE5DUVVGUExGTkJRU3RDTEVWQlFVTTdPenRMUVVONFF5eERRVUZETEVOQlFVTTdRVUZEU0N4clFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVhGRU8wbEJRelZITEVsQlFVMHNTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1ZVRkJReXhMUVVGTExFbEJRVXNzVDBGQlFTeExRVUZMTEVOQlFVTXNSMEZCUnl4TFFVRkxMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRWHBDTEVOQlFYbENMRU5CUVVNc1EwRkJRenRKUVVOcVJ5eEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHRSUVVOa0xFMUJRVTA3VVVGRFRpeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU03UzBGREwwUTdVMEZCVFR0UlFVTk1MRXRCUVVzN1VVRkRUQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETzB0QlEyeEVPMGxCUTBRc1owSkJRVTBzUTBGQlF5eGhRVUZoTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdTVUZEZWtRc1QwRkJUenRCUVVOVUxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEwZ3NhMEpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4eFFrRkJjVUlzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4UlFVRm5RanRKUVVNeFJTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZETEV0QlFVc3NTVUZCU3l4UFFVRkJMRXRCUVVzc1EwRkJReXhIUVVGSExFdEJRVXNzVVVGQlVTeEZRVUYwUWl4RFFVRnpRaXhEUVVGRExFTkJRVU03U1VGRGJFZ3NaMEpCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGVrUXNUMEZCVHp0QlFVTlVMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMGdzYTBKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2NVSkJRV0VzUTBGQlF5eHZRa0ZCYjBJc1JVRkJSU3hWUVVGUExFdEJRVXNzUlVGQlJTeFBRVUZsT3pzN08yOUNRVU5xUlN4eFFrRkJUU3h6UWtGQllTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQmJrTXNTVUZCU1N4SFFVRkhMRk5CUVRSQ08yZENRVU42UXl4elFrRkJUeXhKUVVGSkxFVkJRVU03T3p0TFFVTmlMRU5CUVVNc1EwRkJRenRCUVVOSUxHdENRVUZQTEVOQlFVTXNSVUZCUlN4RFFVRkRMSEZDUVVGaExFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1ZVRkJUeXhMUVVGTExFVkJRVVVzUjBGQlZ5eEZRVUZGTEVsQlFWazdPenM3T3p0blFrRkZNVVVzVVVGQlVTeGxRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNNRU5CUVVjc1EwRkJReXh2UTBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTNCRUxGbEJRVmtzWlVGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXd3UTBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRkxHOURRVUZMTEVWQlFVVXNRMEZCUXp0blFrRkRia1VzVDBGQlR5eEhRVUZITEVkQlFVY3NRMEZCUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRkpMRmxCUVZrc1RVRkJSeXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1pVRkJaU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzJkQ1FVVnNTU3hYUVVGWExFZEJRVWNzUTBGQlF5eERRVUZETzJkQ1FVZGtMRkZCUVZFc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVU1zVFVGQlRTeEpRVUZMTEU5QlFVRXNUVUZCVFN4RFFVRkRMRTlCUVU4c1MwRkJTeXhQUVVGUExFVkJRVEZDTEVOQlFUQkNMRU5CUVVNc1EwRkJRenR4UWtGRk5VWXNRMEZCUVN4UlFVRlJMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlFTeEZRVUZ1UWl4M1FrRkJiVUk3WjBKQlEzSkNMRXRCUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHR2UWtGREwwUXNTVUZCU1N4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhMUVVGTExFOUJRVThzUlVGQlJUdDNRa0ZETVVRc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSE96UkNRVU51UXl4SFFVRkhMRXRCUVVFN05FSkJRMGdzVVVGQlVTeFZRVUZCT3pSQ1FVTlNMRmxCUVZrc1kwRkJRVHMwUWtGRFdpeFBRVUZQTEZOQlFVRTdORUpCUTFBc1NVRkJTU3hGUVVGRkxFVkJRVVU3TkVKQlExSXNUVUZCVFN4RlFVRkZMSE5DUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETzNsQ1FVTXpRaXhEUVVGRE8zZENRVU5HTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2NVSkJRMnBDTzJsQ1FVTkdPenM3WjBKQlJVUXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXp0dlFrRkRia01zUjBGQlJ5eExRVUZCTzI5Q1FVTklMRkZCUVZFc1ZVRkJRVHR2UWtGRFVpeFpRVUZaTEdOQlFVRTdiMEpCUTFvc1QwRkJUeXhUUVVGQk8yOUNRVU5RTEVsQlFVa3NSVUZCUlN4RlFVRkZPMjlDUVVOU0xFMUJRVTBzUlVGQlJTeHpRa0ZCWVN4RFFVRkRMRWRCUVVjc1EwRkJRenRwUWtGRE0wSXNRMEZCUXl4RFFVRkRPMmRDUVVWSUxGZEJRVmNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXp0blFrRkZia1FzVlVGQlZTeEhRVUZITEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03WjBKQlEzUkRMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03WjBKQlJYWkVMSEZDUVVGTkxGbEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUVRzN1owSkJRV2hDTEZOQlFXZENMRU5CUVVNN1owSkJRMnBDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExIRkNRVUZoTEVOQlFVTXNVMEZCVXl4RlFVRkZMRVZCUVVVc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdPenRuUWtGSGNrZ3NjMEpCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdaMEpCUlc1R0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMSEZDUVVGaExFTkJRVU1zWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRjRWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETEZGQlFWRXNRMEZCU1N4SlFVRkpMRmRCUVUwc1IwRkJTeXhEUVVGRExFTkJRVU03WjBKQlJXaEdMSEZDUVVGTkxIVkNRVUZUTEVOQlFVTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEZkQlFWY3NRMEZCUXl4RlFVRkZMRmRCUVZjc1EwRkJReXhGUVVGQk96dG5Ra0ZCTVVVc1UwRkJNRVVzUTBGQlF6dG5Ra0ZETTBVc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTXpSQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdaMEpCUXpGRUxGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXpzN096dExRVU01UkN4RFFVRkRMRU5CUVVNN1FVRkZTQ3hyUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJZU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRlZCUVU4c1MwRkJTeXhGUVVGRkxFbEJRVEJET3pzN096czdaMEpCUlM5R0xFdEJRVXNzUjBGQlJ5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEZWQlFVTXNUVUZCVFN4SlFVRkxMRTlCUVVFc1RVRkJUU3hEUVVGRExFOUJRVThzUzBGQlN5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRXZRaXhEUVVFclFpeERRVUZETEVOQlFVTTdaMEpCUTNKSExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXp0dlFrRkJSU3h6UWtGQlR6dG5Ra0ZEYmtJc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dG5Ra0ZGZEVRc2NVSkJRVTBzY1VKQlFWa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxFMUJRVTBzUTBGQlF5eFpRVUZaTEVWQlFVVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVRTdPMmRDUVVGMFJpeFRRVUZ6Uml4RFFVRkRPMmRDUVVOMlJpeHhRa0ZCVFN4MVFrRkJVeXhEUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUVRzN1owSkJRVGxDTEZOQlFUaENMRU5CUVVNN1owSkJSUzlDTEhOQ1FVRlBMRWxCUVVrc1JVRkJRenM3TzJkQ1FVVmFMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVOaUxITkNRVUZQTEV0QlFVc3NSVUZCUXpzN096dExRVVZvUWl4RFFVRkRMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIDVjaOS6kuaPm0JCU+iqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xyXG4gKi9cclxudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcclxudmFyIGljb252X2xpdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKSk7IC8vIOaWh+Wtl+OCs+ODvOODieWkieaPm+eUqOODkeODg+OCseODvOOCuFxyXG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XHJcbnZhciBlbmNvZGluZ19qYXBhbmVzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKSk7XHJcbi8qKiDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4kzMDQgX05vdE1vZGlmaWVkICovXHJcbnZhciBOT1RfTU9ESUZJRUQgPSAnMzA0JztcclxudmFyIFJBTkdFX05PVF9TQVRJU0ZJQUJMRSA9ICc0MTYnO1xyXG4vKiog44K544Os5LiA6Kan44KS6Kqt44G/6L6844KAICovXHJcbmV4cG9ydHMucmVhZEJvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlcXVlc3RVcmwsIGxpc3QsIG9wdGlvbnMsIHJlc3BvbnNlLCBzdHIsIGVycm9yXzE7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gYm9hcmRVcmwgKyBcInN1YmplY3QudHh0XCI7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ1NoaWZ0X0pJUycpO1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44O844K544GX44Gm5qC857SNXHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2guYXBwbHkobGlzdCwgc3RyXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW07IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gcGFyc2VUaHJlYWRMaXN0KGJvYXJkVXJsLCBsaW5lKTsgfSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JfMS5zdGF0dXMgPT0gTk9UX01PRElGSUVEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBTk9UX01PRElGSUVEJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlcnJvcl8xLnN0YXR1cyA9PSBSQU5HRV9OT1RfU0FUSVNGSUFCTEUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFSQU5HRV9OT1RfU0FUSVNGSUFCTEUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgW1lc3NhZ2U9JyArIGVycm9yXzEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgbGlzdF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG4vKipcclxuICog44Os44K544KS5oqV56i/44GZ44KLXHJcbiAqIEBwYXJhbSBob3N0bmFtZSDjg5vjgrnjg4jlkI3jgIJodHRwczovL2hvZ2Vob2dlL1xyXG4gKiBAcGFyYW0gdGhyZWFkTnVtYmVyIOOCueODrOeVquWPtyAxMjM0NTY3OFxyXG4gKiBAcGFyYW0gYm9hcmRJZCDmnb9JRCBwYXN0YTA0XHJcbiAqIEBwYXJhbSBtZXNzYWdlIOaKleeov+aWh1xyXG4gKi9cclxuZXhwb3J0cy5wb3N0UmVzID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdW5pY29kZUFycmF5LCBpLCBzamlzQXJyYXksIGVuY29kZWRLZXl3b3JkO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdW5pY29kZUFycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheS5wdXNoKG1lc3NhZ2UuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzamlzQXJyYXkgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQuY29udmVydCh1bmljb2RlQXJyYXksIHtcclxuICAgICAgICAgICAgICAgICAgICB0bzogJ1NKSVMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdVTklDT0RFJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZW5jb2RlZEtleXdvcmQgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQudXJsRW5jb2RlKHNqaXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhlbmNvZGVVUklDb21wb25lbnQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQucG9zdChob3N0bmFtZSArIFwidGVzdC9iYnMuY2dpXCIsIFwiRlJPTT0mTUVTU0FHRT1cIiArIGVuY29kZWRLZXl3b3JkICsgXCImbWFpbD1zYWdlJmtleT1cIiArIHRocmVhZE51bWJlciArIFwiJmJicz1cIiArIGJvYXJkSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnKi8qJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnZ3ppcCwgZGVmbGF0ZSwgYnInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oZW5jb2RlVVJJQ29tcG9uZW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxudmFyIFJlYWQ1Y2ggPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWFkNWNoKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog44Os44K56Kqt44G/6L6844G/XHJcbiAgICAgICAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf5p2/44GL44KJ44Os44K544KS6Kqt44KAXHJcbiAgICAgICAgICog44Os44K555Wq5Y+344KS5oyH5a6a44GX44Gm44GE44Gq44GE5aC05ZCI44Gv5pyA5pawMeS7tuWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSB0aHJlYWRVcmwg44K544OsVVJMXHJcbiAgICAgICAgICogQHBhcmFtIHJlc051bSDjg6zjgrnnlarlj7dcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlYWQgPSBmdW5jdGlvbiAodGhyZWFkVXJsLCByZXNOdW0pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlcCwgcmVxdWVzdFVybCwgcmFuZ2UsIG9wdGlvbnMsIHJlc3BvbnNlSnNvbiwgcmVzcG9uc2UsIGhlYWRlcnMsIHN0ciwgcmVzdWx0LCBlcnJvcl8yO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhgW1JlYWQ1Y2hdIHRocmVhZFVybD0ke3RocmVhZFVybH0gcmVzTnVtPSR7cmVzTnVtfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnb/jgoTmnIDntYLml6Xjg6zjgrnnlarlj7fjgYzjgYvjgo/jgaPjgZ/jgonmnIDliJ3jgYvjgonjgajjgornm7TjgZkobGFzdG1vZGlmaeOBqCByYW5nZeOBruODquOCu+ODg+ODiClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZFVybCAhPSB0aGlzLmxhc3RUaHJlYWRVcmwgfHwgTnVtYmVyLmlzTmFOKHJlc051bSkgfHwgcmVzTnVtIDwgdGhpcy5sYXN0UmVzTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaHJlYWRVcmwgPSB0aHJlYWRVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RpZmllZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCeXRlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLmpzXXJlc2V0ZSEhISEhISEhISEhISEhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ25vcmVzZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwID0gL1xcL3Rlc3RcXC9yZWFkLmNnaShcXC8uKykoXFwvLispXFwvLztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IHRocmVhZFVybC5yZXBsYWNlKHJlcCwgJyQxL2RhdCQyLmRhdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYW5nZSA9IHRoaXMubGFzdEJ5dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lmLW1vZGlmaWVkLXNpbmNlJzogdGhpcy5sYXN0TW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6ICdieXRlcz0nICsgcmFuZ2UgKyAnLScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXN0TW9kaWZpZWTjgahSYW5nZeabtOaWsOWHpueQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snbGFzdC1tb2RpZmllZCddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vZGlmaWVkID0gaGVhZGVyc1snbGFzdC1tb2RpZmllZCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ1NoaWZ0X0pJUycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjgrnjg53jg7Pjgrnjgqrjg5bjgrjjgqfjgq/jg4jkvZzmiJDjgIFjb250ZW50LXJhbmdl44GM44GC44KL5aC05ZCI44Go44Gq44GE5aC05ZCI44Gn5Yem55CG44KS5YiG44GR44KLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzWydjb250ZW50LXJhbmdlJ10gPT0gbnVsbCB8fCB0aGlzLmxhc3RCeXRlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnJlYWRdY29udGVudC1yYW5nZT0nICsgaGVhZGVyc1snY29udGVudC1yYW5nZSddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHB1cnNlTmV3UmVzcG9uc2Uoc3RyLCByZXNOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcmVzdWx0LnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFJlc051bWJlciA9IHJlc3VsdC5sYXN0UmVzTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VEaWZmUmVzcG9uc2Uoc3RyLCByZXNOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPluW+l+ODkOOCpOODiOaVsOihqOekulxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSAhPSBudWxsICYmIHJlc3BvbnNlSnNvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCeXRlID0gdGhpcy5sYXN0Qnl0ZSArIHBhcnNlSW50KGhlYWRlcnNbJ2NvbnRlbnQtbGVuZ3RoJ10pIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnJlYWRdbGFzdEJ5dGU9JyArIHRoaXMubGFzdEJ5dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcl8yLnN0YXR1cyA9PSBOT1RfTU9ESUZJRUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+ODrOOCueWPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgU5PVF9NT0RJRklFRCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVycm9yXzIuc3RhdHVzID09IFJBTkdFX05PVF9TQVRJU0ZJQUJMRSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT44Os44K55Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBUkFOR0VfTk9UX1NBVElTRklBQkxFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPjg6zjgrnlj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29ubmVjdGlvbiBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlSnNvbl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIHRoaXMubGFzdFRocmVhZFVybCA9ICcnO1xyXG4gICAgICAgIHRoaXMubGFzdFJlc051bWJlciA9IDA7XHJcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdEJ5dGUgPSAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlYWQ1Y2g7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcclxuICog5oi744KK44Go44GX44Gm44OR44O844K544GX44GfanNvbuOCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOOBmVxyXG4gKiBAcGFyYW0gcmVzIOadv+OBi+OCiei/lOWNtOOBleOCjOOBn2RhdFxyXG4gKiBAcGFyYW0gcmVzTnVtIOODquOCr+OCqOOCueODiOOBleOCjOOBn+ODrOOCueeVquWPt1xyXG4gKi9cclxudmFyIHB1cnNlTmV3UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCByZXNOdW0pIHtcclxuICAgIC8vIOe1kOaenOOCkuagvOe0jeOBmeOCi+mFjeWIl1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgLy8g44Os44K555Wq5Y+3XHJcbiAgICB2YXIgbnVtID0gMDtcclxuICAgIC8vIOaWsOedgOODrOOCueOCkuaUueihjOOBlOOBqOOBq1NwbGl044GZ44KLXHJcbiAgICB2YXIgcmVzQXJyYXkgPSByZXMuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XHJcbiAgICAvLyDmlrDnnYDjgarjgZfjgarjgonmiLvjgovjgIJcclxuICAgIGlmIChyZXNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdCwgbGFzdFJlc051bWJlcjogcmVzTnVtIH07XHJcbiAgICB9XHJcbiAgICAvLyDphY3liJfjga7mnIDlvozjgavnqbrjga7opoHntKDjgYzlhaXjgovjgZPjgajjgYzjgYLjgovjga7jgaflj5bjgorpmaTjgY9cclxuICAgIGlmIChyZXNBcnJheVtyZXNBcnJheS5sZW5ndGggLSAxXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXNBcnJheS5wb3AoKTtcclxuICAgIH1cclxuICAgIC8vIOODrOOCueaMh+WumuOBquOBl+OBruWgtOWQiOacgOW+jOOBrjHku7blj5blvpdcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocmVzTnVtKSB8fCByZXNOdW0gPCAxKSB7XHJcbiAgICAgICAgbnVtID0gcmVzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG51bSA9IHJlc051bSAtIDE7XHJcbiAgICB9XHJcbiAgICAvLyBsb2cuaW5mbyhgbnVtID0gJHtudW19ICByZXNBcnJheUxlbmd0aCA9ICR7cmVzQXJyYXkubGVuZ3RofSAgICR7cmVzQXJyYXlbbnVtXX1gKTtcclxuICAgIC8vIDHooYzjgZTjgajjgavjg5Hjg7zjgrnjgZnjgotcclxuICAgIGZvciAoOyBudW0gPCByZXNBcnJheS5sZW5ndGg7IG51bSsrKSB7XHJcbiAgICAgICAgLy8g44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXHJcbiAgICAgICAgaWYgKHJlc0FycmF5W251bV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZVJlc3BvbnNlKHJlc0FycmF5W251bV0sIG51bSArIDEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDjg5Hjg7zjgrnjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TljbRcclxuICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0LCBsYXN0UmVzTnVtYmVyOiBudW0gKyAxIH07XHJcbn07XHJcbi8qKlxyXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcclxuICog5oi744KK44Go44GX44Gm44OR44O844K544GX44GfanNvbuOCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOOBmVxyXG4gKiBAcGFyYW0gcmVzIOadv+OBi+OCiei/lOWNtOOBleOCjOOBn2RhdDHooYzliIZcclxuICogQHBhcmFtIHJlc051bSDjg6rjgq/jgqjjgrnjg4jjgZXjgozjgZ/jg6zjgrnnlarlj7dcclxuICovXHJcbnZhciBwdXJzZURpZmZSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIHJlc051bSkge1xyXG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIC8vIOODrOOCueeVquWPt1xyXG4gICAgdmFyIG51bSA9IHJlc051bTtcclxuICAgIC8v5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcclxuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcclxuICAgIC8vIOaWsOedgOOBquOBl+OBquOCieaIu+OCi+OAglxyXG4gICAgaWYgKHJlc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyDphY3liJfjga7mnIDlvozjgavnqbrjga7opoHntKDjgYzlhaXjgovjgZPjgajjgYzjgYLjgovjga7jgaflj5bjgorpmaTjgY9cclxuICAgICAgICBpZiAocmVzQXJyYXlbcmVzQXJyYXkubGVuZ3RoIC0gMV0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmVzQXJyYXkucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucHVyc2VEaWZmUmVzcG9uc2Vd5Y+W5b6X44Os44K555Wq5Y+3PScgKyBudW0pO1xyXG4gICAgLy8x6KGM44GU44Go44Gr44OR44O844K544GZ44KLXHJcbiAgICByZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIC8v44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VSZXNwb25zZSh2YWx1ZSwgbnVtKSk7XHJcbiAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g44OR44O844K544GX44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U5Y20XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4vKipcclxuICog44K544Os5LiA6Kan44Gu44OR44O844K5XHJcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcclxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcclxuICovXHJcbnZhciBwYXJzZVRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwsIHN1YmplY3RMaW5lKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgLy9BUEnjga7ov5TljbTlgKTjgpI8PuOBp+WIhuWJslxyXG4gICAgLy/jg6zjgrnjga7opoHntKBcclxuICAgIC8vMDpkYXTlkI1cclxuICAgIC8vMTrjgrnjg6zjgr/jgqTvvIjjg6zjgrnmlbDvvIlcclxuICAgIHZhciBzcGxpdFJlcyA9IHN1YmplY3RMaW5lLnNwbGl0KCc8PicpO1xyXG4gICAgY29uc29sZS5sb2coc3BsaXRSZXMpO1xyXG4gICAgdmFyIGRhdE51bSA9IHNwbGl0UmVzWzBdLnJlcGxhY2UoJy5kYXQnLCAnJyk7XHJcbiAgICB2YXIgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSBib2FyZFVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcclxuICAgIHZhciBib2FyZE5hbWUgPSBib2FyZFVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJyk7XHJcbiAgICB2YXIgdXJsID0gaG9zdG5hbWUgKyBcInRlc3QvcmVhZC5jZ2kvXCIgKyBib2FyZE5hbWUgKyBkYXROdW0gKyBcIi9cIjtcclxuICAgIHZhciB0aXRsZVRlbXAgPSBzcGxpdFJlc1sxXTtcclxuICAgIHZhciBuYW1lID0gKF9kID0gKF9jID0gdGl0bGVUZW1wLm1hdGNoKC8oLio/KSBcXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICfimIXlj5blvpflpLHmlZfimIUnO1xyXG4gICAgdmFyIHJlc051bSA9IE51bWJlcigoX2UgPSB0aXRsZVRlbXAubWF0Y2goL1xcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVswXS5yZXBsYWNlKC9cXCh8XFwpL2csICcnKSk7XHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICByZXNOdW06IHJlc051bSxcclxuICAgIH07XHJcbn07XHJcbi8qKlxyXG4gKiDjg6zjgrnjga7jg5Hjg7zjgrlcclxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxyXG4gKiBAcGFyYW0gSW50ZWdlciAvLyBudW0g44Os44K555Wq77yIMOOCueOCv+ODvOODiO+8iVxyXG4gKi9cclxudmFyIHBhcnNlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCBudW0pIHtcclxuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcclxuICAgIC8v44Os44K544Gu6KaB57SgXHJcbiAgICAvLzA65ZCN5YmNXHJcbiAgICAvLzE644Oh44Ki44OJXHJcbiAgICAvLzI65pel5LuY44GoSUQg77yIMjAxOS8xMS8wMyjml6UpIDA4OjU1OjAwIElEOmthbmlrYW5p77yJ44G/44Gf44GE44Gr6KGo56S6XHJcbiAgICAvLzM65pys5paHXHJcbiAgICAvLzQ644K544Os44K/44KkIO+8iDHjg6zjgrnnm67jga7jgb/vvIlcclxuICAgIHZhciBzcGxpdFJlcyA9IHJlcy5zcGxpdCgnPD4nKTtcclxuICAgIC8vIOaXpeS7mOOBqElE5YiG6Zui5Yem55CG44CBJyBJRDon44Gn5Yy65YiH44KLXHJcbiAgICB2YXIgZGF0ZUlkID0gc3BsaXRSZXNbMl0uc3BsaXQoJyBJRDonKTtcclxuICAgIHZhciBkYXRlID0gZGF0ZUlkWzBdO1xyXG4gICAgdmFyIGlkID0gZGF0ZUlkLmxlbmd0aCA9PT0gMiA/IGRhdGVJZFsxXSA6ICcnO1xyXG4gICAgdmFyIHJlc0pzb24gPSB7XHJcbiAgICAgICAgbnVtYmVyOiBudW0sXHJcbiAgICAgICAgbmFtZTogc3BsaXRSZXNbMF0sXHJcbiAgICAgICAgZW1haWw6IHNwbGl0UmVzWzFdLFxyXG4gICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbM10sXHJcbiAgICAgICAgLy8gdGhyZWFkVGl0bGU6IHNwbGl0UmVzWzRdLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBpbWdVcmw6ICcnLFxyXG4gICAgfTtcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxyXG4gICAgcmV0dXJuIHJlc0pzb247XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWQ1Y2g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVmhaRFZqYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEpsWVdRMVkyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEdkRVFVRnJSRHRCUVVOc1JDd3dSRUZCSzBJc1EwRkJReXhuUWtGQlowSTdRVUZEYUVRc09FUkJRU3RDTzBGQlF5OUNMSGRGUVVGNVF6dEJRVVY2UXl3clFrRkJLMEk3UVVGREwwSXNTVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRek5DTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlJYQkRMR2RDUVVGblFqdEJRVU5JTEZGQlFVRXNVMEZCVXl4SFFVRkhMRlZCUVU4c1VVRkJaMEk3T3pzN08yZENRVU40UXl4VlFVRlZMRWRCUVUwc1VVRkJVU3huUWtGQllTeERRVUZETzJkQ1FVTjBReXhKUVVGSkxFZEJRWGxETEVWQlFVVXNRMEZCUXp0blFrRkhhRVFzVDBGQlR5eEhRVUYxUWp0dlFrRkRiRU1zUjBGQlJ5eEZRVUZGTEZWQlFWVTdiMEpCUTJZc1RVRkJUU3hGUVVGRkxFdEJRVXM3YjBKQlEySXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSk8yOUNRVU5xUWl4WlFVRlpMRVZCUVVVc1lVRkJZVHRwUWtGRE5VSXNRMEZCUXpzN096dG5Ra0ZKYVVJc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08yZENRVTh2UWl4SFFVRkhMRWRCUVVjc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRMnhGTEZWQlFWVTdaMEpCUTFZc1NVRkJTU3hEUVVGRExFbEJRVWtzVDBGQlZDeEpRVUZKTEVWQlEwTXNSMEZCUnp0eFFrRkRTQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzNGQ1FVTllMRTFCUVUwc1EwRkJReXhWUVVGRExFbEJRVWtzU1VGQlN5eFBRVUZCTEVsQlFVa3NSVUZCU2l4RFFVRkpMRU5CUVVNN2NVSkJRM1JDTEVkQlFVY3NRMEZCUXl4VlFVRkRMRWxCUVVrc1NVRkJTeXhQUVVGQkxHVkJRV1VzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVM5Q0xFTkJRU3RDTEVOQlFVTXNSVUZEYWtRN096czdaMEpCUlVZc1NVRkJTU3hQUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NSVUZCUlR0dlFrRkRhRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0cFFrRkROMFE3Y1VKQlFVMHNTVUZCU1N4UFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxIRkNRVUZ4UWl4RlFVRkZPMjlDUVVOb1JDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXg1UkVGQmVVUXNRMEZCUXl4RFFVRkRPMmxDUVVOMFJUdHhRa0ZCVFR0dlFrRkRUQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM3BGTzJkQ1FVTkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenR2UWtGSGRFTXNjMEpCUVU4c1NVRkJTU3hGUVVGRE96czdTMEZEWWl4RFFVRkRPMEZCUlVZN096czdPenRIUVUxSE8wRkJRMVVzVVVGQlFTeFBRVUZQTEVkQlFVY3NWVUZCVHl4UlFVRm5RaXhGUVVGRkxGbEJRVzlDTEVWQlFVVXNUMEZCWlN4RlFVRkZMRTlCUVdVN096czdPMmRDUVVVNVJpeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVONFFpeExRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM1pETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFF6dG5Ra0ZEU3l4VFFVRlRMRWRCUVVjc01rSkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMjlDUVVNdlF5eEZRVUZGTEVWQlFVVXNUVUZCVFR0dlFrRkRWaXhKUVVGSkxFVkJRVVVzVTBGQlV6dHBRa0ZEYUVJc1EwRkJReXhEUVVGRE8yZENRVWRITEdOQlFXTXNSMEZCUnl3eVFrRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJRelZFTERKRFFVRXlRenRuUWtGRk0wTXNjVUpCUVUwc1pVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNTeFJRVUZSTEdsQ1FVRmpMRVZCUVVVc2JVSkJRV2xDTEdOQlFXTXNkVUpCUVd0Q0xGbEJRVmtzWVVGQlVTeFBRVUZUTEVWQlFVVTdkMEpCUXpGSUxFOUJRVThzUlVGQlJUczBRa0ZEVUN4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeGpRVUZqTEVWQlFVVXNiVU5CUVcxRE96UkNRVU51UkN4cFFrRkJhVUlzUlVGQlJTeHRRa0ZCYlVJN2VVSkJRM1pETzNGQ1FVTkdMRU5CUVVNc1JVRkJRVHM3WjBKQlVrWXNNa05CUVRKRE8yZENRVVV6UXl4VFFVMUZMRU5CUVVNN096czdTMEZEU2l4RFFVRkRPMEZCUlVZN1NVRlZSVHRSUVVGQkxHbENRVXRETzFGQlJVUTdPenM3T3p0WFFVMUhPMUZCUTBnc1UwRkJTU3hIUVVGSExGVkJRVThzVTBGQmFVSXNSVUZCUlN4TlFVRmpPenM3T3p0M1FrRkROME1zYVVWQlFXbEZPM2RDUVVOcVJTeHJSRUZCYTBRN2QwSkJRMnhFTEVsQlFVa3NVMEZCVXl4SlFVRkpMRWxCUVVrc1EwRkJReXhoUVVGaExFbEJRVWtzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlRzMFFrRkRNVVlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4VFFVRlRMRU5CUVVNN05FSkJReTlDTEVsQlFVa3NRMEZCUXl4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE96UkNRVU42UWl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6czBRa0ZEYkVJc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eHZRMEZCYjBNc1EwRkJReXhEUVVGRE8zbENRVU55UkRzMlFrRkJUVHMwUWtGRFRDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRE8zbENRVU16UWp0M1FrRkxTeXhIUVVGSExFZEJRVWNzWjBOQlFXZERMRU5CUVVNN2QwSkJRM1pETEZWQlFWVXNSMEZCUnl4VFFVRlRMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeGpRVUZqTEVOQlFVTXNRMEZCUXp0M1FrRlpjRVFzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNN2QwSkJSWFJDTEU5QlFVOHNSMEZCZFVJN05FSkJRMnhETEVkQlFVY3NSVUZCUlN4VlFVRlZPelJDUVVObUxFMUJRVTBzUlVGQlJTeExRVUZMT3pSQ1FVTmlMRTlCUVU4c1JVRkJSU3hEUVVGRExFZEJRVWNzU1VGQlNUczBRa0ZEYWtJc1dVRkJXU3hGUVVGRkxHRkJRV0U3TkVKQlF6TkNMRTlCUVU4c1JVRkJSVHRuUTBGRFVDeHRRa0ZCYlVJc1JVRkJSU3hKUVVGSkxFTkJRVU1zV1VGQldUdG5RMEZEZEVNc1MwRkJTeXhGUVVGRkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVkQlFVY3NSMEZCUnpzMlFrRkRPVUk3ZVVKQlEwWXNRMEZCUXpzN096dDNRa0ZMYVVJc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenQzUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08zZENRVWN2UWl4UFFVRlBMRWRCUVRoQ0xGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTTdkMEpCUXpWRUxIbENRVUY1UWp0M1FrRkRla0lzU1VGQlNTeFBRVUZQTEVOQlFVTXNaVUZCWlN4RFFVRkRMRWxCUVVrc1NVRkJTU3hGUVVGRk96UkNRVU53UXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFOUJRVThzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0NVFrRkRPVU03ZDBKQlNVc3NSMEZCUnl4SFFVRkhMRzlDUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RFFVRkRPM2RDUVVOc1JTd3JRMEZCSzBNN2QwSkJReTlETEVsQlFVa3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkpMRU5CUVVNc1JVRkJSVHMwUWtGRE1VUXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXc0UWtGQk9FSXNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZEYmtVc1RVRkJUU3hIUVVGSExHZENRVUZuUWl4RFFVRkRMRWRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6czBRa0ZETjBNc1dVRkJXU3hIUVVGSExFMUJRVTBzUTBGQlF5eE5RVUZOTEVOQlFVTTdORUpCUXpkQ0xFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJRenQ1UWtGRE0wTTdOa0pCUVUwN05FSkJRMHdzV1VGQldTeEhRVUZITEdsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0NVFrRkRMME03ZDBKQlJVUXNWMEZCVnp0M1FrRkRXQ3hKUVVGSkxFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFbEJRVWtzU1VGQlNTeFpRVUZaTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHMwUWtGRGFFVXNTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenMwUWtGRGVFVXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXg1UWtGQmVVSXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03ZVVKQlF6RkVPenM3TzNkQ1FVVkVMRmxCUVZrc1IwRkJSeXhGUVVGRkxFTkJRVU03ZDBKQlEyeENMRWxCUVVrc1QwRkJTeXhEUVVGRExFMUJRVTBzU1VGQlNTeFpRVUZaTEVWQlFVVTdORUpCUTJoRExITkNRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMR2xFUVVGcFJDeERRVUZETEVOQlFVTTdlVUpCUXpsRU96WkNRVUZOTEVsQlFVa3NUMEZCU3l4RFFVRkRMRTFCUVUwc1NVRkJTU3h4UWtGQmNVSXNSVUZCUlRzMFFrRkRhRVFzYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc01FUkJRVEJFTEVOQlFVTXNRMEZCUXp0NVFrRkRka1U3TmtKQlFVMDdORUpCUTB3c2MwSkJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNOa05CUVRaRExFZEJRVWNzVDBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPM2xDUVVNeFJUdDNRa0ZEUkN4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExHdENRVUZyUWl4RFFVRkRMRU5CUVVNN05FSkJSM1JETEhOQ1FVRlBMRmxCUVZrc1JVRkJRenM3TzJGQlEzSkNMRU5CUVVNN1VVRnFSMEVzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1VVRkRlRUlzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRka0lzU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1VVRkRla0lzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1NVRkRjRUlzUTBGQlF6dEpRVGhHU0N4alFVRkRPMEZCUVVRc1EwRkJReXhCUVRkSFJDeEpRVFpIUXp0QlFVVkVPenM3T3p0SFFVdEhPMEZCUTBnc1NVRkJUU3huUWtGQlowSXNSMEZCUnl4VlFVRkRMRWRCUVZjc1JVRkJSU3hOUVVGak8wbEJRMjVFTEZsQlFWazdTVUZEV2l4SlFVRk5MRTFCUVUwc1IwRkJkVU1zUlVGQlJTeERRVUZETzBsQlEzUkVMRTlCUVU4N1NVRkRVQ3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZGV2l4dlFrRkJiMEk3U1VGRGNFSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhaUVVGWk8wbEJRMW9zU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVONlFpeFBRVUZQTEVWQlFVVXNUVUZCVFN4UlFVRkJMRVZCUVVVc1lVRkJZU3hGUVVGRkxFMUJRVTBzUlVGQlJTeERRVUZETzB0QlF6RkRPMGxCUTBRc01rSkJRVEpDTzBsQlF6TkNMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUlVGQlJUdFJRVU01UXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03UzBGRGFFSTdTVUZGUkN4dFFrRkJiVUk3U1VGRGJrSXNTVUZCU1N4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1VVRkRkRU1zUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRek5DTzFOQlFVMDdVVUZEVEN4SFFVRkhMRWRCUVVjc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dExRVU5zUWp0SlFVVkVMRzlHUVVGdlJqdEpRVU53Uml4aFFVRmhPMGxCUTJJc1QwRkJUeXhIUVVGSExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNSVUZCUlN4SFFVRkhMRVZCUVVVc1JVRkJSVHRSUVVOdVF5eGpRVUZqTzFGQlEyUXNTVUZCU1N4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTTFRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRjRVE3UzBGRFJqdEpRVU5FTEc5Q1FVRnZRanRKUVVOd1FpeFBRVUZQTEVWQlFVVXNUVUZCVFN4UlFVRkJMRVZCUVVVc1lVRkJZU3hGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVTTFReXhEUVVGRExFTkJRVU03UVVGRlJqczdPenM3UjBGTFJ6dEJRVU5JTEVsQlFVMHNhVUpCUVdsQ0xFZEJRVWNzVlVGQlF5eEhRVUZYTEVWQlFVVXNUVUZCWXp0SlFVTndSQ3hYUVVGWE8wbEJRMWdzU1VGQlRTeE5RVUZOTEVkQlFYVkRMRVZCUVVVc1EwRkJRenRKUVVOMFJDeFBRVUZQTzBsQlExQXNTVUZCU1N4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRE8wbEJSV3BDTEcxQ1FVRnRRanRKUVVOdVFpeEpRVUZOTEZGQlFWRXNSMEZCUnl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETzBsQlEzcERMRmxCUVZrN1NVRkRXaXhKUVVGSkxGRkJRVkVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPMUZCUTNwQ0xFOUJRVThzVFVGQlRTeERRVUZETzB0QlEyWTdVMEZCVFR0UlFVTk1MREpDUVVFeVFqdFJRVU16UWl4SlFVRkpMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1NVRkJTU3hEUVVGRExFVkJRVVU3V1VGRE4wTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMmhDTzB0QlEwWTdTVUZGUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExHOURRVUZ2UXl4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRE8wbEJRekZFTEZsQlFWazdTVUZEV2l4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVU1zUzBGQlN6dFJRVU55UWl4aFFVRmhPMUZCUTJJc1NVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0WlFVTndRaXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU4yUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRUUVVOUU8wbEJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4dlFrRkJiMEk3U1VGRGNFSXNUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRhRUlzUTBGQlF5eERRVUZETzBGQlJVWTdPenM3UjBGSlJ6dEJRVU5JTEVsQlFVMHNaVUZCWlN4SFFVRkhMRlZCUVVNc1VVRkJaMElzUlVGQlJTeFhRVUZ0UWpzN1NVRkROVVFzWlVGQlpUdEpRVU5tTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1lVRkJZVHRKUVVOaUxFbEJRVTBzVVVGQlVTeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03U1VGRGVrTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dEpRVU4wUWl4SlFVRk5MRTFCUVUwc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEpRVVV2UXl4SlFVRk5MRkZCUVZFc1pVRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEcxQ1FVRnRRaXhEUVVGRExEQkRRVUZITEVOQlFVTXNiME5CUVVzc1JVRkJSU3hEUVVGRE8wbEJRMmhGTEVsQlFVMHNVMEZCVXl4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMGxCUTJwRUxFbEJRVTBzUjBGQlJ5eEhRVUZOTEZGQlFWRXNjMEpCUVdsQ0xGTkJRVk1zUjBGQlJ5eE5RVUZOTEUxQlFVY3NRMEZCUXp0SlFVVTVSQ3hKUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZPVUlzU1VGQlRTeEpRVUZKTEdWQlFWY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhuUWtGQlowSXNRMEZCUXl3d1EwRkJSeXhEUVVGRExHOURRVUZMTEZGQlFWRXNRMEZCUXp0SlFVTjRSU3hKUVVGTkxFMUJRVTBzUjBGQlJ5eE5RVUZOTEU5QlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhWUVVGVkxFTkJRVU1zTUVOQlFVY3NRMEZCUXl4RlFVRkZMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTTdTVUZGT1VVc1dVRkJXVHRKUVVOYUxFOUJRVTg3VVVGRFRDeEhRVUZITEV0QlFVRTdVVUZEU0N4SlFVRkpMRTFCUVVFN1VVRkRTaXhOUVVGTkxGRkJRVUU3UzBGRFVDeERRVUZETzBGQlEwb3NRMEZCUXl4RFFVRkRPMEZCUlVZN096czdSMEZKUnp0QlFVTklMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUjBGQlZ5eEZRVUZGTEVkQlFWYzdTVUZETjBNc1pVRkJaVHRKUVVObUxFOUJRVTg3U1VGRFVDeE5RVUZOTzBsQlEwNHNUMEZCVHp0SlFVTlFMRzlFUVVGdlJEdEpRVU53UkN4TlFVRk5PMGxCUTA0c2FVSkJRV2xDTzBsQlEycENMRWxCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1NVRkRha01zZFVKQlFYVkNPMGxCUTNaQ0xFbEJRVTBzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTVUZEZWtNc1NVRkJUU3hKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTNaQ0xFbEJRVTBzUlVGQlJTeEhRVUZITEUxQlFVMHNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEpRVVZvUkN4SlFVRk5MRTlCUVU4c1IwRkJaMEk3VVVGRE0wSXNUVUZCVFN4RlFVRkZMRWRCUVVjN1VVRkRXQ3hKUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnFRaXhMUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTnNRaXhKUVVGSkxFVkJRVVVzU1VGQlNUdFJRVU5XTEVsQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8xRkJRMnBDTERSQ1FVRTBRanRSUVVNMVFpeEZRVUZGTEVWQlFVVXNSVUZCUlR0UlFVTk9MRTFCUVUwc1JVRkJSU3hGUVVGRk8wdEJRMWdzUTBGQlF6dEpRVVZHTEZsQlFWazdTVUZEV2l4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOcVFpeERRVUZETEVOQlFVTTdRVUZGUml4clFrRkJaU3hQUVVGUExFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xyXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xyXG52YXIgaWNvbnZfbGl0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpY29udi1saXRlXCIpKTsgLy8g5paH5a2X44Kz44O844OJ5aSJ5o+b55So44OR44OD44Kx44O844K4XHJcbnZhciByZWFkU2l0YXJhYmFfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkU2l0YXJhYmFcIikpOyAvLyDjgZfjgZ/jgonjgbDoqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcclxudmFyIFJlYWQ1Y2hfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9SZWFkNWNoXCIpKTsgLy8gNWNo5LqS5o+b5p2/6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXHJcbi8qKlxyXG4gKiDmjrLnpLrmnb/jga7jg6zjgrnjgpLlj5blvpfjgZnjgotcclxuICogQHBhcmFtIHRocmVhZFVybCDjgrnjg6zjga5VUkxcclxuICogQHBhcmFtIHJlc051bSDjgZPjga7nlarlj7fku6XpmY3jgpLlj5blvpfjgZnjgovjgILmjIflrprjgZfjgarjgYTloLTlkIjjga/mnIDmlrAx5Lu244KS5Y+W5b6X44CCXHJcbiAqL1xyXG5leHBvcnRzLmdldFJlcyA9IGZ1bmN0aW9uIChiYnNNb2R1bGUsIHRocmVhZFVybCwgcmVzTnVtKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlc3BvbnNlLCBlXzE7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYmJzTW9kdWxlLnJlYWQodGhyZWFkVXJsLCByZXNOdW0pXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgW2dldFJlcy5qc10gZmV0Y2ggJHt0aHJlYWRVcmx9IHJlc051bSA9ICR7cmVzTnVtfSwgcmVzdWx0ID0gJHtyZXNwb25zZS5sZW5ndGh9YCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2UubWFwKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXMpLCB7IGltZ1VybDogJycgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgW11dO1xyXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbmV4cG9ydHMuZ2V0VGhyZWFkTGlzdCA9IGZ1bmN0aW9uIChib2FyZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzaXRhcmFiYURvbWFpbjtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHNpdGFyYWJhRG9tYWluID0gJ2piYnMuc2hpdGFyYWJhLm5ldCc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShib2FyZFVybC5pbmRleE9mKHNpdGFyYWJhRG9tYWluKSAhPT0gLTEpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlYWRTaXRhcmFiYV8xLnJlYWRCb2FyZChib2FyZFVybCldO1xyXG4gICAgICAgICAgICBjYXNlIDE6IFxyXG4gICAgICAgICAgICAvLyBVUkzjgavjgZfjgZ/jgonjgbDjg4njg6HjgqTjg7PlkI3jgYzlhaXjgaPjgabjgozjgbDjgZfjgZ/jgonjgbBcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFs0IC8qeWllbGQqLywgUmVhZDVjaF8xLnJlYWRCb2FyZChib2FyZFVybCldO1xyXG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuZXhwb3J0cy5wb3N0UmVzcG9uc2UgPSBmdW5jdGlvbiAoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzaXRhcmFiYURvbWFpbjtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbyhcIltwb3N0UmVzcG9uc2VdIFwiICsgaG9zdG5hbWUgKyBcIiBcIiArIHRocmVhZE51bWJlciArIFwiIFwiICsgYm9hcmRJZCk7XHJcbiAgICAgICAgICAgICAgICBzaXRhcmFiYURvbWFpbiA9ICdqYmJzLnNoaXRhcmFiYS5uZXQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoaG9zdG5hbWUuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWFkU2l0YXJhYmFfMS5wb3N0UmVzKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpXTtcclxuICAgICAgICAgICAgY2FzZSAxOiBcclxuICAgICAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIFJlYWQ1Y2hfMS5wb3N0UmVzKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpXTtcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbi8qXHJcbiAqIFVSTOOCkuOBv+OBpuOBqeOBk+OBrkJCU+OBi+WIpOWumuOBl+OBpuS9v+eUqOOBmeOCi+ODouOCuOODpeODvOODq+OCkui/lOWNtOOBmeOCi1xyXG4gKi9cclxuZXhwb3J0cy5hbmFseXNCQlNOYW1lID0gZnVuY3Rpb24gKHRocmVhZFVybCkge1xyXG4gICAgLy8g44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCNXHJcbiAgICB2YXIgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcclxuICAgIGlmICh0aHJlYWRVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXHJcbiAgICAgICAgdmFyIHNpdGFyYWJhID0gbmV3IHJlYWRTaXRhcmFiYV8xLmRlZmF1bHQoKTtcclxuICAgICAgICByZXR1cm4gc2l0YXJhYmE7XHJcbiAgICB9XHJcbiAgICAvLyDjganjgZPjgavjgoLoqbLlvZPjgZfjgarjgYvjgaPjgZ/jgonjgajjgorjgYLjgYjjgZo1Y2jjgadcclxuICAgIC8vIOOBk+OBrui+uuOCguWvvuW/nOODieODoeOCpOODs+ODquOCueODiOOBqOOBi+S9nOOBo+OBpuOBoeOCg+OCk+OBqOWIpOWumuOBl+OBn+OBu+OBhuOBjOOCiOOBleOBneOBhlxyXG4gICAgdmFyIHJlYWQ1Y2ggPSBuZXcgUmVhZDVjaF8xLmRlZmF1bHQoKTtcclxuICAgIHJldHVybiByZWFkNWNoO1xyXG59O1xyXG4vKiog44K544Os44GuVVJM44GL44KJ5p2/5oOF5aCx44KS5Y+W5b6XICovXHJcbmV4cG9ydHMudGhyZWFkVXJsVG9Cb2FyZEluZm8gPSBmdW5jdGlvbiAodGhyZWFkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHNpdGFyYWJhRG9tYWluLCByZXN1bHQsIGJvYXJkVXJsLCB0ZW1wVXJsLCBlbmNvZGluZywgb3B0aW9ucywgcmVzcG9uc2UsIHN0ciwgZV8yO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICduZycsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRVcmw6IHRocmVhZFVybCxcclxuICAgICAgICAgICAgICAgICAgICBib2FyZE5hbWU6ICfimIXlj5blvpflpLHmlZfimIUnLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGJvYXJkVXJsID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0ZW1wVXJsID0gdGhyZWFkVXJsO1xyXG4gICAgICAgICAgICAgICAgdGVtcFVybCA9IHRlbXBVcmwucmVwbGFjZSgvXFwvbFxcZCskLywgJy8nKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGVtcFVybC5tYXRjaCgvLipcXC8kLykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wVXJsICs9ICcvJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVuY29kaW5nID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGVtcFVybC5pbmRleE9mKHNpdGFyYWJhRG9tYWluKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgrnjg6w6IGh0dHBzOi8vamJicy5zaGl0YXJhYmEubmV0L2Jicy9yZWFkLmNnaS9nYW1lLzUxNjM4LzE1ODE4MzkyNjYvXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5p2/OiBodHRwczovL2piYnMuc2hpdGFyYWJhLm5ldC9nYW1lLzUxNjM4L1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOioreWumjogaHR0cHM6Ly9qYmJzLnNoaXRhcmFiYS5uZXQvYmJzL2FwaS9zZXR0aW5nLmNnaS9nYW1lLzUxNjM4L1xyXG4gICAgICAgICAgICAgICAgICAgIGVuY29kaW5nID0gJ0VVQy1KUCc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5p2/44GL44K544Os44GL5Yik5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRlbXBVcmwubWF0Y2goJ3JlYWQuY2dpJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44K544OsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsLnJlcGxhY2UoJ2piYnMuc2hpdGFyYWJhLm5ldC9iYnMvcmVhZC5jZ2kvJywgJycpLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC8vLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsLm1hdGNoKC8oLispXFwvLitcXC8kLylbMV0gKyAnLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkVXJsID0gXCJodHRwOi8vamJicy5zaGl0YXJhYmEubmV0L1wiICsgdGVtcFVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IFwiaHR0cDovL2piYnMuc2hpdGFyYWJhLm5ldC9iYnMvYXBpL3NldHRpbmcuY2dpL1wiICsgdGVtcFVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFVybCA9IHRlbXBVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsLnJlcGxhY2UoJ2piYnMuc2hpdGFyYWJhLm5ldC8nLCAnJykucmVwbGFjZSgvaHR0cHM/OlxcL1xcLy8sICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IFwiaHR0cDovL2piYnMuc2hpdGFyYWJhLm5ldC9iYnMvYXBpL3NldHRpbmcuY2dpL1wiICsgdGVtcFVybDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDjgrnjg6w6IGh0dHBzOi8vYmJzLmpwbmtuLmNvbS90ZXN0L3JlYWQuY2dpL3Bhc3RhMDQvMTU4Njc5NDYyMy9cclxuICAgICAgICAgICAgICAgICAgICAvLyDmnb86IGh0dHBzOi8vYmJzLmpwbmtuLmNvbS9wYXN0YTA0L1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOioreWumjogaHR0cHM6Ly9iYnMuanBua24uY29tL3Bhc3RhMDQvU0VUVElORy5UWFRcclxuICAgICAgICAgICAgICAgICAgICBlbmNvZGluZyA9ICdTSElGVC1KSVMnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOadv+OBi+OCueODrOOBi+WIpOWumlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wVXJsLm1hdGNoKC90ZXN0XFwvcmVhZC5jZ2lcXC8uK1xcLy4rXFwvLykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44K544OsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsLnJlcGxhY2UoJ3Rlc3QvcmVhZC5jZ2kvJywgJycpLm1hdGNoKC8oLispXFwvLitcXC8kLylbMV0gKyBcIi9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRVcmwgPSB0ZW1wVXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVXJsID0gdGVtcFVybCArIFwiU0VUVElORy5UWFRcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZFVybCA9IHRlbXBVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsICsgXCJTRVRUSU5HLlRYVFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3RlbXBVcmxdIFwiICsgdGVtcFVybCArIFwiIFtib2FyZFVybF0gXCIgKyBib2FyZFVybCk7XHJcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGVtcFVybCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPCA0MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksIGVuY29kaW5nKTtcclxuICAgICAgICAgICAgICAgICAgICBzdHIuc3BsaXQoL1xcbi9nKS5tYXAoZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSB0ZXh0Lm1hdGNoKC9CQlNfVElUTEU9KC4rKS8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmJvYXJkTmFtZSA9IG1hdGNoZWRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuYm9hcmRVcmwgPSBib2FyZFVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGF0dXMgPSAnb2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcign44Gq44KT44GL44Ko44Op44O8Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyVjBVbVZ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laMlYwVW1WekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNPRVJCUVN0Q08wRkJReTlDTEdkRVFVRnJSRHRCUVVOc1JDd3dSRUZCSzBJc1EwRkJReXhuUWtGQlowSTdRVUZGYUVRc05rUkJRVFJITEVOQlFVTXNhVUpCUVdsQ08wRkJRemxJTEcxRVFVRnpSaXhEUVVGRExHMUNRVUZ0UWp0QlFVVXhSenM3T3p0SFFVbEhPMEZCUTFVc1VVRkJRU3hOUVVGTkxFZEJRVWNzVlVGQlR5eFRRVUZ6UXl4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzVFVGQll6czdPenM3TzJkQ1FVZHFSaXh4UWtGQlRTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlFUczdaMEpCUVd4RUxGRkJRVkVzUjBGQlJ5eFRRVUYxUXp0blFrRkRlRVFzYVVkQlFXbEhPMmRDUVVWcVJ5eHpRa0ZCVHl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVU1zUjBGQlJ6dDNRa0ZEZEVJc05rSkJRMHNzUjBGQlJ5eExRVU5PTEUxQlFVMHNSVUZCUlN4RlFVRkZMRWxCUTFZN2IwSkJRMG9zUTBGQlF5eERRVUZETEVWQlFVTTdPenRuUWtGRlNDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4elFrRkJUeXhGUVVGRkxFVkJRVU03T3pzN1MwRkZZaXhEUVVGRE8wRkJSVmNzVVVGQlFTeGhRVUZoTEVkQlFVY3NWVUZCVHl4UlFVRm5RanM3T3pzN1owSkJRelZETEdOQlFXTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dHhRa0ZEZUVNc1EwRkJRU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQkxFVkJRWFpETEhkQ1FVRjFRenRuUWtGSGJFTXNjVUpCUVUwc2QwSkJRV3RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVFN08xbEJSbnBETERCQ1FVRXdRanRaUVVNeFFpeEZRVUZGTzFsQlEwWXNjMEpCUVU4c1UwRkJhME1zUlVGQlF6dHZRa0ZGYmtNc2NVSkJRVTBzYlVKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJRVHR2UWtGQmJrTXNjMEpCUVU4c1UwRkJORUlzUlVGQlF6czdPMHRCUlhaRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRlBMRkZCUVdkQ0xFVkJRVVVzV1VGQmIwSXNSVUZCUlN4UFFVRmxMRVZCUVVVc1QwRkJaVHM3T3pzN1owSkJRM3BITEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZyUWl4UlFVRlJMRk5CUVVrc1dVRkJXU3hUUVVGSkxFOUJRVk1zUTBGQlF5eERRVUZETzJkQ1FVVTFSQ3hqUVVGakxFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN2NVSkJRM2hETEVOQlFVRXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVN4RlFVRjJReXgzUWtGQmRVTTdaMEpCUld4RExIRkNRVUZOTEhOQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGQk96dFpRVVIyUlN3d1FrRkJNRUk3V1VGRE1VSXNjMEpCUVU4c1UwRkJaMFVzUlVGQlF6dHZRa0ZGYWtVc2NVSkJRVTBzYVVKQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUVR0dlFrRkJha1VzYzBKQlFVOHNVMEZCTUVRc1JVRkJRenM3TzB0QlJYSkZMRU5CUVVNN1FVRkZSanM3UjBGRlJ6dEJRVU5WTEZGQlFVRXNZVUZCWVN4SFFVRkhMRlZCUVVNc1UwRkJhVUk3U1VGRE4wTXNXVUZCV1R0SlFVTmFMRWxCUVUwc1kwRkJZeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMGxCUlRWRExFbEJRVWtzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU0xUXl3d1FrRkJNRUk3VVVGRE1VSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3h6UWtGQldTeEZRVUZGTEVOQlFVTTdVVUZEY0VNc1QwRkJUeXhSUVVGUkxFTkJRVU03UzBGRGFrSTdTVUZEUkN4M1FrRkJkMEk3U1VGRGVFSXNiME5CUVc5RE8wbEJRM0JETEVsQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc2FVSkJRVThzUlVGQlJTeERRVUZETzBsQlF6bENMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMnBDTEVOQlFVTXNRMEZCUXp0QlFVVkdMSEZDUVVGeFFqdEJRVU5TTEZGQlFVRXNiMEpCUVc5Q0xFZEJRVWNzVlVGQlR5eFRRVUZwUWpzN096czdaMEpCUTNCRUxHTkJRV01zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRuUWtGRmRFTXNUVUZCVFN4SFFVbFNPMjlDUVVOR0xFMUJRVTBzUlVGQlJTeEpRVUZKTzI5Q1FVTmFMRkZCUVZFc1JVRkJSU3hUUVVGVE8yOUNRVU51UWl4VFFVRlRMRVZCUVVVc1VVRkJVVHRwUWtGRGNFSXNRMEZCUXp0blFrRkZSU3hSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVZGtMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU03WjBKQlEzaENMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRk1VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdiMEpCUXpOQ0xFOUJRVThzU1VGQlNTeEhRVUZITEVOQlFVTTdhVUpCUTJoQ08yZENRVVZITEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJSV3hDTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRNVU1zY1VWQlFYRkZPMjlDUVVOeVJTdzBRMEZCTkVNN2IwSkJRelZETEdsRlFVRnBSVHR2UWtGRmFrVXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenR2UWtGRmNFSXNWVUZCVlR0dlFrRkRWaXhKUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN2QwSkJRemRDTEV0QlFVczdkMEpCUTB3c1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNhME5CUVd0RExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dDNRa0ZETjBZc1QwRkJUeXhIUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzNkQ1FVVjZSQ3hSUVVGUkxFZEJRVWNzSzBKQlFUWkNMRTlCUVZNc1EwRkJRenQzUWtGRGJFUXNUMEZCVHl4SFFVRkhMRzFFUVVGcFJDeFBRVUZUTEVOQlFVTTdjVUpCUTNSRk8zbENRVUZOTzNkQ1FVTk1MRWxCUVVrN2QwSkJRMG9zVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXp0M1FrRkRia0lzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0M1FrRkRhRVlzVDBGQlR5eEhRVUZITEcxRVFVRnBSQ3hQUVVGVExFTkJRVU03Y1VKQlEzUkZPMmxDUVVOR08zRkNRVUZOTzI5Q1FVTk1MRGhFUVVFNFJEdHZRa0ZET1VRc2IwTkJRVzlETzI5Q1FVTndReXhuUkVGQlowUTdiMEpCUldoRUxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdiMEpCUlhaQ0xGVkJRVlU3YjBKQlExWXNTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRVZCUVVVN2QwSkJRemRETEV0QlFVczdkMEpCUTB3c1QwRkJUeXhIUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZITEVOQlFVTTdkMEpCUTNaR0xGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdkMEpCUTI1Q0xFOUJRVThzUjBGQlRTeFBRVUZQTEdkQ1FVRmhMRU5CUVVNN2NVSkJRMjVETzNsQ1FVRk5PM2RDUVVOTUxFbEJRVWs3ZDBKQlEwb3NVVUZCVVN4SFFVRkhMRTlCUVU4c1EwRkJRenQzUWtGRGJrSXNUMEZCVHl4SFFVRk5MRTlCUVU4c1owSkJRV0VzUTBGQlF6dHhRa0ZEYmtNN2FVSkJRMFk3WjBKQlJVUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhsUVVGaExFOUJRVThzYjBKQlFXVXNVVUZCVlN4RFFVRkRMRU5CUVVNN096czdaMEpCUlc1RUxFOUJRVThzUjBGQmRVSTdiMEpCUTJ4RExFZEJRVWNzUlVGQlJTeFBRVUZQTzI5Q1FVTmFMRTFCUVUwc1JVRkJSU3hMUVVGTE8yOUNRVU5pTEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTVHR2UWtGRGFrSXNXVUZCV1N4RlFVRkZMR0ZCUVdFN2FVSkJRelZDTEVOQlFVTTdaMEpCUldVc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08yZENRVU55UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzI5Q1FVVnVRaXhIUVVGSExFZEJRVWNzYjBKQlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03YjBKQlJTOUVMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVVNc1NVRkJXVHQzUWtGRGFFTXNTVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8zZENRVU0zUXl4SlFVRkpMRTlCUVU4c1JVRkJSVHMwUWtGRFdDeE5RVUZOTEVOQlFVTXNVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZET1VJc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdORUpCUXpOQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPM2xDUVVOMFFqdHZRa0ZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRFNqczdPenRuUWtGRlJDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdiMEpCUjNSQ0xITkNRVUZQTEUxQlFVMHNSVUZCUXpzN08wdEJRMllzUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuLyoqXHJcbiAqIOOBl+OBn+OCieOBsOiqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xyXG4gKi9cclxudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcclxudmFyIGljb252X2xpdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKSk7IC8vIOaWh+Wtl+OCs+ODvOODieWkieaPm+eUqOODkeODg+OCseODvOOCuFxyXG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XHJcbnZhciBlbmNvZGluZ19qYXBhbmVzZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKSk7XHJcbi8qKiDjgrnjg6zkuIDopqfjgpLoqq3jgb/ovrzjgoAgKi9cclxuZXhwb3J0cy5yZWFkQm9hcmQgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcmVxdWVzdFVybCwgbGlzdCwgb3B0aW9ucywgcmVzcG9uc2UsIHN0ciwgZXJyb3JfMTtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSBib2FyZFVybCArIFwic3ViamVjdC50eHRcIjtcclxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdChvcHRpb25zKV07XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgc3RyID0gaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpLCAnRVVDLUpQJyk7XHJcbiAgICAgICAgICAgICAgICAvLyDjg5Hjg7zjgrnjgZfjgabmoLzntI1cclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaC5hcHBseShsaXN0LCBzdHJcclxuICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbTsgfSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChsaW5lKSB7IHJldHVybiBwYXJzZVRocmVhZExpc3QoYm9hcmRVcmwsIGxpbmUpOyB9KSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgW1lc3NhZ2U9JyArIGVycm9yXzEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZXJyb3InKTtcclxuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgbGlzdF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG4vKipcclxuICog44Os44K544KS5oqV56i/44GZ44KLXHJcbiAqIEBwYXJhbSBob3N0bmFtZSDjg5vjgrnjg4jlkI3jgIJodHRwczovL2hvZ2Vob2dlL1xyXG4gKiBAcGFyYW0gdGhyZWFkTnVtYmVyIOOCueODrOeVquWPtyAxMjM0NTY3OFxyXG4gKiBAcGFyYW0gYm9hcmRJZCDmnb9JRCBwYXN0YTA0XHJcbiAqIEBwYXJhbSBtZXNzYWdlIOaKleeov+aWh1xyXG4gKi9cclxuZXhwb3J0cy5wb3N0UmVzID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdW5pY29kZUFycmF5LCBpLCBzamlzQXJyYXksIGVuY29kZWRLZXl3b3JkLCBkaXIsIGJicztcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkucHVzaChtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2ppc0FycmF5ID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LmNvbnZlcnQodW5pY29kZUFycmF5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG86ICdFVUNKUCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ1VOSUNPREUnLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlbmNvZGVkS2V5d29yZCA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC51cmxFbmNvZGUoc2ppc0FycmF5KTtcclxuICAgICAgICAgICAgICAgIGRpciA9IGJvYXJkSWQuc3BsaXQoJy8nKVswXTtcclxuICAgICAgICAgICAgICAgIGJicyA9IGJvYXJkSWQuc3BsaXQoJy8nKVsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdC5wb3N0KGhvc3RuYW1lICsgXCJiYnMvd3JpdGUuY2dpL1wiICsgYm9hcmRJZCArIFwiL1wiICsgdGhyZWFkTnVtYmVyICsgXCIvXCIsIFwiZGlyPVwiICsgZGlyICsgXCImYmJzPVwiICsgYmJzICsgXCIma2V5PVwiICsgdGhyZWFkTnVtYmVyICsgXCImdGltZT1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCImbmFtZT0mTUFJTD1zYWdlJk1FU1NBR0U9XCIgKyBlbmNvZGVkS2V5d29yZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICcqLyonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwLCBkZWZsYXRlLCBicicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWZlcmVyOiBcIlwiICsgaG9zdG5hbWUgKyBib2FyZElkICsgXCIvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG4vKipcclxuICog44Kz44Oz44K544OI44Op44Kv44K/XHJcbiAqL1xyXG52YXIgUmVhZFNpdGFyYWJhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVhZFNpdGFyYWJhKCkge1xyXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yKCkge31cclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCueiqreOBv+i+vOOBv1xyXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiDlvJXmlbDjgafmjIflrprjgZfjgZ/mnb/jgYvjgonjg6zjgrnjgpLoqq3jgoDjgIJcclxuICAgICAgICAgKiBAZGVzY3JpcHRpb24g44Os44K555Wq5Y+344KS5oyH5a6a44GX44Gm44GE44Gq44GE5aC05ZCI44Gv5pyA5pawMeS7tuWPluW+l1xyXG4gICAgICAgICAqIEBwYXJhbSB0aHJlYWRVcmwg44K544OsVVJMXHJcbiAgICAgICAgICogQHBhcmFtIHJlc051bSDjg6zjgrnnlarlj7dcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlYWQgPSBmdW5jdGlvbiAodGhyZWFkVXJsLCByZXNOdW0pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3RVcmwsIG9wdGlvbnMsIHJlc3BvbnNlLCBzdHIsIHJlc3BvbnNlSnNvbjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IHRocmVhZFVybC5yZXBsYWNlKCdyZWFkLmNnaScsICdyYXdtb2RlLmNnaScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K555Wq5Y+344GM44GC44KL5aC05ZCI44Os44K555Wq5Y+35Lul6ZmN44KS5Y+W5b6XXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsICs9IHJlc051bSArICctJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOOCueeVquWPt+OBjOOBquOBhOWgtOWQiOacgOaWsOOBrjHku7blj5blvpdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgKz0gJ2wxJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGRlY29kZVVuaWNvZGVTdHIoaWNvbnZfbGl0ZV8xLmRlZmF1bHQuZGVjb2RlKEJ1ZmZlci5mcm9tKHJlc3BvbnNlLmRhdGEpLCAnRVVDLUpQJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBwdXJzZU5ld1Jlc3BvbnNlKHN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZUpzb25dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBSZWFkU2l0YXJhYmE7XHJcbn0oKSk7XHJcbi8qKlxyXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcclxuICogQHBhcmFtIHJlc1xyXG4gKi9cclxudmFyIHB1cnNlTmV3UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvL+e1kOaenOOCkuagvOe0jeOBmeOCi+mFjeWIl1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgLy8g5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcclxuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcclxuICAgIC8vIDHooYzjgZTjgajjgavjg5Hjg7zjgrnjgZnjgotcclxuICAgIHJlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgLy8g44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHVyc2VSZXNwb25zZSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuLyoqXHJcbiAqIOOCueODrOS4gOimp+OBruODkeODvOOCuVxyXG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XHJcbiAqIEBwYXJhbSBJbnRlZ2VyIC8vIG51bSDjg6zjgrnnlarvvIgw44K544K/44O844OI77yJXHJcbiAqL1xyXG52YXIgcGFyc2VUaHJlYWRMaXN0ID0gZnVuY3Rpb24gKGJvYXJkVXJsLCBzdWJqZWN0TGluZSkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcclxuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcclxuICAgIC8v44Os44K544Gu6KaB57SgXHJcbiAgICAvLzA6ZGF05ZCNXHJcbiAgICAvLzE644K544Os44K/44Kk77yI44Os44K55pWw77yJXHJcbiAgICB2YXIgc3BsaXRSZXMgPSBzdWJqZWN0TGluZS5zcGxpdCgnLCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3BsaXRSZXMpO1xyXG4gICAgdmFyIGRhdE51bSA9IHNwbGl0UmVzWzBdLnJlcGxhY2UoJy5jZ2knLCAnJyk7XHJcbiAgICB2YXIgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSBib2FyZFVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcclxuICAgIHZhciBib2FyZE5hbWUgPSBib2FyZFVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJyk7XHJcbiAgICB2YXIgdXJsID0gaG9zdG5hbWUgKyBcImJicy9yZWFkLmNnaS9cIiArIGJvYXJkTmFtZSArIGRhdE51bSArIFwiL1wiO1xyXG4gICAgLy8gbG9nLmluZm8oYCR7aG9zdG5hbWV9ICAke2JvYXJkTmFtZX0gJHtkYXROdW19YCk7XHJcbiAgICB2YXIgdGl0bGVUZW1wID0gc3BsaXRSZXNbMV07XHJcbiAgICB2YXIgbmFtZSA9IChfZCA9IChfYyA9IHRpdGxlVGVtcC5tYXRjaCgvKC4qPylcXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICfimIXlj5blvpflpLHmlZfimIUnO1xyXG4gICAgdmFyIHJlc051bSA9IE51bWJlcigoX2UgPSB0aXRsZVRlbXAubWF0Y2goL1xcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVswXS5yZXBsYWNlKC9cXCh8XFwpL2csICcnKSk7XHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICByZXNOdW06IHJlc051bSxcclxuICAgIH07XHJcbn07XHJcbi8qKlxyXG4gKiDjg6zjgrnjg53jg7Pjgrnjga7jg5Hjg7zjgrlcclxuICogSnNvbuOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtOOBmeOCi1xyXG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XHJcbiAqL1xyXG52YXIgcHVyc2VSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcclxuICAgIC8v44Os44K544Gu6KaB57SgXHJcbiAgICAvLzA644Os44K555Wq5Y+3XHJcbiAgICAvLzE65ZCN5YmNXHJcbiAgICAvLzI644Oh44Ki44OJXHJcbiAgICAvLzM65pel5LuYXHJcbiAgICAvLzQ65pys5paHXHJcbiAgICAvLzU644K544Os44K/44KkXHJcbiAgICAvLzY6SURcclxuICAgIHZhciBzcGxpdFJlcyA9IHJlcy5zcGxpdCgnPD4nKTtcclxuICAgIHZhciByZXNKc29uID0ge1xyXG4gICAgICAgIG51bWJlcjogTnVtYmVyKHNwbGl0UmVzWzBdKSxcclxuICAgICAgICBuYW1lOiBzcGxpdFJlc1sxXSxcclxuICAgICAgICBlbWFpbDogc3BsaXRSZXNbMl0sXHJcbiAgICAgICAgZGF0ZTogc3BsaXRSZXNbM10sXHJcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbNF0sXHJcbiAgICAgICAgLy8gdGhyZWFkVGl0bGU6IHNwbGl0UmVzWzVdLFxyXG4gICAgICAgIGlkOiBzcGxpdFJlc1s2XSxcclxuICAgICAgICBpbWdVcmw6ICcnLFxyXG4gICAgfTtcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxyXG4gICAgcmV0dXJuIHJlc0pzb247XHJcbn07XHJcbi8qKiDjgZfjgZ/jgonjgbDjgaDjgZHjga/lhajop5Ljg4Djg4Pjgrfjg6XjgYxVbmljb2Rl5paH5a2X5YiX44Go44GX44Gm5qC857SN44GV44KM44KL44Gu44Gn5aSJ5o+b44GZ44KLICovXHJcbnZhciBkZWNvZGVVbmljb2RlU3RyID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIzY1Mzc0Oy9nLCAn772eJyk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRTaXRhcmFiYTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pY21WaFpGTnBkR0Z5WVdKaExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpY21WaFpGTnBkR0Z5WVdKaExuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRTdPMGRCUlVjN1FVRkRTQ3huUkVGQmEwUTdRVUZEYkVRc01FUkJRU3RDTEVOQlFVTXNaMEpCUVdkQ08wRkJRMmhFTERoRVFVRXJRanRCUVVVdlFpeDNSVUZCZVVNN1FVRkZla01zWjBKQlFXZENPMEZCUTBnc1VVRkJRU3hUUVVGVExFZEJRVWNzVlVGQlR5eFJRVUZuUWpzN096czdaMEpCUTNoRExGVkJRVlVzUjBGQlRTeFJRVUZSTEdkQ1FVRmhMRU5CUVVNN1owSkJRM1JETEVsQlFVa3NSMEZCZVVNc1JVRkJSU3hEUVVGRE8yZENRVWRvUkN4UFFVRlBMRWRCUVhWQ08yOUNRVU5zUXl4SFFVRkhMRVZCUVVVc1ZVRkJWVHR2UWtGRFppeE5RVUZOTEVWQlFVVXNTMEZCU3p0dlFrRkRZaXhQUVVGUExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVazdiMEpCUTJwQ0xGbEJRVmtzUlVGQlJTeGhRVUZoTzJsQ1FVTTFRaXhEUVVGRE96czdPMmRDUVVscFFpeHhRa0ZCVFN4bFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVUU3TzJkQ1FVRXZRaXhSUVVGUkxFZEJRVWNzVTBGQmIwSTdaMEpCVHk5Q0xFZEJRVWNzUjBGQlJ5eHZRa0ZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dG5Ra0ZETDBRc1ZVRkJWVHRuUWtGRFZpeEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlVMRWxCUVVrc1JVRkRReXhIUVVGSE8zRkNRVU5JTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNN2NVSkJRMWdzVFVGQlRTeERRVUZETEZWQlFVTXNTVUZCU1N4SlFVRkxMRTlCUVVFc1NVRkJTU3hGUVVGS0xFTkJRVWtzUTBGQlF6dHhRa0ZEZEVJc1IwRkJSeXhEUVVGRExGVkJRVU1zU1VGQlNTeEpRVUZMTEU5QlFVRXNaVUZCWlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQkwwSXNRMEZCSzBJc1EwRkJReXhGUVVOcVJEczdPenRuUWtGRlJpeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXcwUTBGQk5FTXNSMEZCUnl4UFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WjBKQlEzaEZMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenR2UWtGSGRFTXNjMEpCUVU4c1NVRkJTU3hGUVVGRE96czdTMEZEWWl4RFFVRkRPMEZCUlVZN096czdPenRIUVUxSE8wRkJRMVVzVVVGQlFTeFBRVUZQTEVkQlFVY3NWVUZCVHl4UlFVRm5RaXhGUVVGRkxGbEJRVzlDTEVWQlFVVXNUMEZCWlN4RlFVRkZMRTlCUVdVN096czdPMmRDUVVVNVJpeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVONFFpeExRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM1pETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFF6dG5Ra0ZEU3l4VFFVRlRMRWRCUVVjc01rSkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMjlDUVVNdlF5eEZRVUZGTEVWQlFVVXNUMEZCVHp0dlFrRkRXQ3hKUVVGSkxFVkJRVVVzVTBGQlV6dHBRa0ZEYUVJc1EwRkJReXhEUVVGRE8yZENRVU5ITEdOQlFXTXNSMEZCUnl3eVFrRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJSM1JFTEVkQlFVY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmRDUVVVMVFpeEhRVUZITEVkQlFVY3NUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkZiRU1zY1VKQlFVMHNaVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkRXQ3hSUVVGUkxITkNRVUZwUWl4UFFVRlBMRk5CUVVrc1dVRkJXU3hOUVVGSExFVkJRM1JFTEZOQlFVOHNSMEZCUnl4aFFVRlJMRWRCUVVjc1lVRkJVU3haUVVGWkxHTkJRVk1zU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc2FVTkJRVFJDTEdOQlFXZENMRVZCUTJ4SU8zZENRVU5GTEU5QlFVOHNSVUZCUlRzMFFrRkRVQ3hOUVVGTkxFVkJRVVVzUzBGQlN6czBRa0ZEWWl4alFVRmpMRVZCUVVVc2JVTkJRVzFET3pSQ1FVTnVSQ3hwUWtGQmFVSXNSVUZCUlN4dFFrRkJiVUk3TkVKQlEzUkRMRTlCUVU4c1JVRkJSU3hMUVVGSExGRkJRVkVzUjBGQlJ5eFBRVUZQTEUxQlFVYzdlVUpCUTJ4RE8zRkNRVU5HTEVOQlEwWXNSVUZCUVRzN1owSkJXRVFzVTBGWFF5eERRVUZET3pzN08wdEJRMGdzUTBGQlF6dEJRVVZHT3p0SFFVVkhPMEZCUTBnN1NVRkJRVHRSUVVORkxHMUNRVUZ0UWp0UlFVUnlRaXhwUWtGNVEwTTdVVUYwUTBNN096czdPenRYUVUxSE8xRkJRMGdzVTBGQlNTeEhRVUZITEZWQlFVOHNVMEZCYVVJc1JVRkJSU3hOUVVGak96czdPenQzUWtGTmVrTXNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEdGQlFXRXNRMEZCUXl4RFFVRkRPM2RDUVVNNVJDeEpRVUZKTEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN05FSkJRMlFzY1VKQlFYRkNPelJDUVVOeVFpeFZRVUZWTEVsQlFVa3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJRenQ1UWtGRE5VSTdOa0pCUVUwN05FSkJRMHdzYlVKQlFXMUNPelJDUVVOdVFpeFZRVUZWTEVsQlFVa3NTVUZCU1N4RFFVRkRPM2xDUVVOd1FqdDNRa0ZKU3l4UFFVRlBMRWRCUVhWQ096UkNRVU5zUXl4SFFVRkhMRVZCUVVVc1ZVRkJWVHMwUWtGRFppeE5RVUZOTEVWQlFVVXNTMEZCU3pzMFFrRkRZaXhaUVVGWkxFVkJRVVVzWVVGQllUczBRa0ZETTBJc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTzNsQ1FVTnNRaXhEUVVGRE8zZENRVU5sTEhGQ1FVRk5MR1ZCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlFUczdkMEpCUVM5Q0xGRkJRVkVzUjBGQlJ5eFRRVUZ2UWp0M1FrRkZMMElzUjBGQlJ5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExHOUNRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03ZDBKQlJUTkZMRmxCUVZrc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenQzUWtGRk0wTXNjMEpCUVU4c1dVRkJXU3hGUVVGRE96czdZVUZEY2tJc1EwRkJRenRKUVVOS0xFTkJRVU03U1VGQlJDeHRRa0ZCUXp0QlFVRkVMRU5CUVVNc1FVRjZRMFFzU1VGNVEwTTdRVUZGUkRzN08wZEJSMGM3UVVGRFNDeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zUjBGQlZ6dEpRVU51UXl4WFFVRlhPMGxCUTFnc1NVRkJUU3hOUVVGTkxFZEJRWFZETEVWQlFVVXNRMEZCUXp0SlFVVjBSQ3h2UWtGQmIwSTdTVUZEY0VJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRKUVVONlF5eGhRVUZoTzBsQlEySXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExFdEJRVXM3VVVGRGNrSXNZMEZCWXp0UlFVTmtMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdXVUZEY0VJc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOdVF6dEpRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTBnc1QwRkJUeXhOUVVGTkxFTkJRVU03UVVGRGFFSXNRMEZCUXl4RFFVRkRPMEZCUlVZN096czdSMEZKUnp0QlFVTklMRWxCUVUwc1pVRkJaU3hIUVVGSExGVkJRVU1zVVVGQlowSXNSVUZCUlN4WFFVRnRRanM3U1VGRE5VUXNaVUZCWlR0SlFVTm1MRTlCUVU4N1NVRkRVQ3hSUVVGUk8wbEJRMUlzWVVGQllUdEpRVU5pTEVsQlFVMHNVVUZCVVN4SFFVRkhMRmRCUVZjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTVUZEZUVNc2VVSkJRWGxDTzBsQlEzcENMRWxCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlJTOURMRWxCUVUwc1VVRkJVU3hsUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFFVXNTVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1FzU1VGQlRTeEhRVUZITEVkQlFVMHNVVUZCVVN4eFFrRkJaMElzVTBGQlV5eEhRVUZITEUxQlFVMHNUVUZCUnl4RFFVRkRPMGxCUXpkRUxHMUVRVUZ0UkR0SlFVVnVSQ3hKUVVGTkxGTkJRVk1zUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZPVUlzU1VGQlRTeEpRVUZKTEdWQlFWY3NVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhsUVVGbExFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhSUVVGUkxFTkJRVU03U1VGRGRrVXNTVUZCVFN4TlFVRk5MRWRCUVVjc1RVRkJUU3hQUVVGRExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMREJEUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1JVRkJSU3hEUVVGRE8wbEJSVGxGTEZsQlFWazdTVUZEV2l4UFFVRlBPMUZCUTB3c1IwRkJSeXhMUVVGQk8xRkJRMGdzU1VGQlNTeE5RVUZCTzFGQlEwb3NUVUZCVFN4UlFVRkJPMHRCUTFBc1EwRkJRenRCUVVOS0xFTkJRVU1zUTBGQlF6dEJRVVZHT3pzN08wZEJTVWM3UVVGRFNDeEpRVUZOTEdGQlFXRXNSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRhRU1zWlVGQlpUdEpRVU5tTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1RVRkJUVHRKUVVOT0xFOUJRVTg3U1VGRFVDeE5RVUZOTzBsQlEwNHNUVUZCVFR0SlFVTk9MRkZCUVZFN1NVRkRVaXhOUVVGTk8wbEJRMDRzU1VGQlRTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU5xUXl4SlFVRk5MRTlCUVU4c1IwRkJaMEk3VVVGRE0wSXNUVUZCVFN4RlFVRkZMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdVVUZETTBJc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1MwRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYkVJc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc1NVRkJTU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEYWtJc05FSkJRVFJDTzFGQlF6VkNMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEyWXNUVUZCVFN4RlFVRkZMRVZCUVVVN1MwRkRXQ3hEUVVGRE8wbEJRMFlzV1VGQldUdEpRVU5hTEU5QlFVOHNUMEZCVHl4RFFVRkRPMEZCUTJwQ0xFTkJRVU1zUTBGQlF6dEJRVVZHTERaRFFVRTJRenRCUVVNM1F5eEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zUjBGQlZ6dEpRVU51UXl4UFFVRlBMRWRCUVVjc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNaRExFTkJRVU1zUTBGQlF6dEJRVVZHTEd0Q1FVRmxMRmxCUVZrc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxudmFyIGdldFJlc18xID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XHJcbnZhciBjb25zdF8xID0gcmVxdWlyZShcIi4vY29uc3RcIik7XHJcbnZhciBpc0dldHRpbmcgPSB7fTtcclxudmFyIGdldFJlc0ludGVydmFsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0YXNrO1xyXG4gICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XHJcbiAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpZiAoISghKChfYSA9IGdsb2JhbFRoaXMgPT09IG51bGwgfHwgZ2xvYmFsVGhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsVGhpcy5lbGVjdHJvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGEpIHx8ICgoX2MgPSAoX2IgPSBnbG9iYWxUaGlzID09PSBudWxsIHx8IGdsb2JhbFRoaXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdsb2JhbFRoaXMuZWxlY3Ryb24pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kYXRhKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudGhyZWFkLmxlbmd0aCkgPT09IDApKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWxfMS5zbGVlcCg1MDAwKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIGdldFJlc0ludGVydmFsKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRhc2sgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLm1hcChmdW5jdGlvbiAodGhyZWFkLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVhZC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBleHBvcnRzLnVwZGF0ZVJlcyh0aHJlYWQsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwodGFzayldO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBfZC5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoNTAwMCldO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBfZC5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBnZXRSZXNJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuZ2V0UmVzSW50ZXJ2YWwoKTtcclxuZXhwb3J0cy51cGRhdGVSZXMgPSBmdW5jdGlvbiAodGhyZWFkLCBpbmRleCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmZXRjaFJlc051bSwgbGFzdFJlc051bV8xLCByZXN1bHQsIG5ld1Jlc3VsdCwgZV8xO1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xyXG4gICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oYFt1cGRhdGVSZXNdICR7dGhyZWFkLnVybH0gICR7aW5kZXh9YCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHZXR0aW5nW3RocmVhZC51cmxdKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIGlzR2V0dGluZ1t0aHJlYWQudXJsXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9mLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFJlc051bSA9IChfYyA9IChfYiA9IHRocmVhZC5saXN0W3RocmVhZC5saXN0Lmxlbmd0aCAtIDFdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubnVtYmVyKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAxO1xyXG4gICAgICAgICAgICAgICAgbGFzdFJlc051bV8xID0gKF9lID0gKF9kID0gdGhyZWFkLmxpc3RbdGhyZWFkLmxpc3QubGVuZ3RoIC0gMV0pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5udW1iZXIpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMS5nZXRSZXModGhyZWFkLmdldFJlcywgdGhyZWFkLnVybCwgZmV0Y2hSZXNOdW0pXTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Yuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8g5oyH5a6a44GX44Gf44Os44K555Wq44Gv6Zmk5aSW5a++6LGhXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXS5udW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdSZXN1bHQgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1iZXIgPiBsYXN0UmVzTnVtXzE7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHRocmVhZC5saXN0KS5wdXNoLmFwcGx5KF9hLCBuZXdSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdSZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERvbUZvckNoYXRXaW5kb3cobmV3UmVzdWx0LCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgZV8xID0gX2Yuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlXzEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGlzR2V0dGluZ1t0aHJlYWQudXJsXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuZXhwb3J0cy5jcmVhdGVEb20gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgdmFyIGRvbVN0ciA9IFwiPGxpIGNsYXNzPVxcXCJsaXN0LWl0ZW1cXFwiPlwiO1xyXG4gICAgZG9tU3RyICs9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XCI7XHJcbiAgICAvLyDjg6zjgrnnlarooajnpLpcclxuICAgIGRvbVN0ciArPSBcIlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJyZXNOdW1iZXJcXFwiPlwiICsgbWVzc2FnZS5udW1iZXIgKyBcIjwvc3Bhbj5cXG4gICAgXCI7XHJcbiAgICAvLyDlkI3liY3ooajnpLpcclxuICAgIGRvbVN0ciArPSBcIjxzcGFuIGNsYXNzPVxcXCJuYW1lXFxcIj5cIiArIG1lc3NhZ2UubmFtZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgLy8g5pmC5Yi76KGo56S6XHJcbiAgICBkb21TdHIgKz0gXCI8c3BhbiBjbGFzcz1cXFwiZGF0ZVxcXCI+XCIgKyBtZXNzYWdlLmRhdGUgKyBcIjwvc3Bhbj5cIjtcclxuICAgIGRvbVN0ciArPSAnPGJyLz4nO1xyXG4gICAgZG9tU3RyICs9IFwiXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJyZXNcXFwiPlxcbiAgICAgIFwiICsgbWVzc2FnZS50ZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoLzxhIC4qPz4vZywgJycpIC8vIOOBl+OBn+OCieOBsOOBr+OCouODs+OCq+ODvOOCkmHjgr/jgrDljJbjgZfjgabjgYTjgotcclxuICAgICAgICAucmVwbGFjZSgvPFxcXFxhPi9nLCAnJykgKyBcIlxcbiAgICA8L3NwYW4+XFxuICAgIDwvZGl2PlxcbiAgPC9saT5cIjtcclxuICAgIHJldHVybiBkb21TdHI7XHJcbn07XHJcbnZhciBzZW5kRG9tRm9yQ2hhdFdpbmRvdyA9IGZ1bmN0aW9uIChtZXNzYWdlTGlzdCwgaW5kZXgpIHtcclxuICAgIC8vIGxvZy5pbmZvKGBbc2VuZERvbUZvckNoYXRXaW5kb3ddICR7aW5kZXh9YCk7XHJcbiAgICB2YXIgZG9tU3RyMiA9IG1lc3NhZ2VMaXN0XHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSBtZXNzYWdlLmltZ1VybCAmJiBtZXNzYWdlLmltZ1VybC5tYXRjaCgvXlxcLi8pID8gJy4uLy4uL3B1YmxpYy8nICsgbWVzc2FnZS5pbWdVcmwgOiBtZXNzYWdlLmltZ1VybDtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG1lc3NhZ2UpLCB7IGltZ1VybDogaW1nVXJsIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBleHBvcnRzLmNyZWF0ZURvbShtZXNzYWdlKTsgfSlcclxuICAgICAgICAuam9pbignXFxuJyk7XHJcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W2luZGV4XS53ZWJDb250ZW50cy5zZW5kKGNvbnN0XzEuZWxlY3Ryb25FdmVudFsnc2hvdy1jb21tZW50J10sIHsgZG9tOiBkb21TdHIyIH0pO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSB7fTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pYzNSaGNuUlRaWEoyWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUp6ZEdGeWRGTmxjblpsY2k1MGN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNPRVJCUVN0Q08wRkJReTlDTEN0Q1FVRXJRanRCUVVNdlFpd3lRMEZCTkVRN1FVRkROVVFzYVVOQlFYZERPMEZCUlhoRExFbEJRVTBzVTBGQlV5eEhRVUVyUWl4RlFVRkZMRU5CUVVNN1FVRkRha1FzU1VGQlRTeGpRVUZqTEVkQlFVYzdPenM3T3p0eFFrRkZha0lzUTBGQlFTeFJRVUZETEZWQlFWVXNZVUZCVml4VlFVRlZMSFZDUVVGV0xGVkJRVlVzUTBGQlJTeFJRVUZSTERCRFFVRkZMRWxCUVVrc1EwRkJRU3hKUVVGSkxHRkJRVUVzVlVGQlZTeGhRVUZXTEZWQlFWVXNkVUpCUVZZc1ZVRkJWU3hEUVVGRkxGRkJRVkVzTUVOQlFVVXNTVUZCU1N3d1EwRkJSU3hOUVVGTkxFTkJRVU1zVFVGQlRTeE5RVUZMTEVOQlFVTXNRMEZCUVN4RlFVRTVSU3gzUWtGQk9FVTdaMEpCUTJoR0xIRkNRVUZOTEZsQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJRVHM3WjBKQlFXcENMRk5CUVdsQ0xFTkJRVU03WjBKQlEyeENMR05CUVdNc1JVRkJSU3hEUVVGRE8yZENRVU5xUWl4elFrRkJUenM3WjBKQlIwZ3NTVUZCU1N4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1ZVRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN6dHZRa0ZETjBRc01rSkJRVEpDTzI5Q1FVTXpRaXhQUVVGUExHbENRVUZUTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8yZENRVU5zUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRFNDeHhRa0ZCVFN4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZCT3p0blFrRkJka0lzVTBGQmRVSXNRMEZCUXp0blFrRkZlRUlzY1VKQlFVMHNXVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGQk96dG5Ra0ZCYWtJc1UwRkJhVUlzUTBGQlF6dG5Ra0ZEYkVJc1kwRkJZeXhGUVVGRkxFTkJRVU03T3pzN1MwRkRiRUlzUTBGQlF6dEJRVU5HTEdOQlFXTXNSVUZCUlN4RFFVRkRPMEZCUlVvc1VVRkJRU3hUUVVGVExFZEJRVWNzVlVGQlR5eE5RVUZwUkN4RlFVRkZMRXRCUVdFN096czdPenM3WjBKQlF6bEdMRzFFUVVGdFJEdG5Ra0ZGYmtRc1NVRkJTU3hUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXp0dlFrRkJSU3h6UWtGQlR6dG5Ra0ZEYkVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN096czdaMEpCUlhKQ0xGZEJRVmNzWlVGQlZ5eE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl3d1EwRkJSU3hOUVVGTkxHMURRVUZKTEVOQlFVTXNRMEZCUXp0blFrRkRka1VzTWtKQlFXRXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc01FTkJRVVVzVFVGQlRTeHRRMEZCU1N4RFFVRkRMRU5CUVVNN1owSkJSWEpFTEhGQ1FVRk5MR1ZCUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVUU3TzJkQ1FVRnlSU3hOUVVGTkxFZEJRVWNzVTBGQk5FUTdaMEpCUXpORkxHVkJRV1U3WjBKQlEyWXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZOTEVWQlFVVTdiMEpCUTI1RUxGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1IwRkJSeXhKUVVGTExFOUJRVU1zUjBGQlJ5eERRVUZETEUxQlFXbENMRWRCUVVjc1dVRkJWU3hGUVVGdVF5eERRVUZ0UXl4RFFVRkRMRU5CUVVNN2IwSkJRemxGTEVOQlFVRXNTMEZCUVN4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGQkxFTkJRVU1zU1VGQlNTeFhRVUZKTEZOQlFWTXNSVUZCUlR0dlFrRkZMMElzU1VGQlNTeFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNN2QwSkJRVVVzYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETzJsQ1FVTnNSVHM3T3p0blFrRkZSQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkRMRU5CUVVNc1EwRkJRenM3TzJkQ1FVVm1MRk5CUVZNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRPenM3TzB0QlF5OUNMRU5CUVVNN1FVRkZWeXhSUVVGQkxGTkJRVk1zUjBGQlJ5eFZRVUZETEU5QlFXOUNPMGxCUXpWRExFbEJRVWtzVFVGQlRTeEhRVUZITERCQ1FVRjNRaXhEUVVGRE8wbEJSWFJETEUxQlFVMHNTVUZCU1N4NVFrRkJkVUlzUTBGQlF6dEpRVVZzUXl4UlFVRlJPMGxCUTFJc1RVRkJUU3hKUVVGSkxIVkRRVU52UWl4UFFVRlBMRU5CUVVNc1RVRkJUU3hyUWtGRGVrTXNRMEZCUXp0SlFVTktMRTlCUVU4N1NVRkRVQ3hOUVVGTkxFbEJRVWtzTUVKQlFYTkNMRTlCUVU4c1EwRkJReXhKUVVGSkxGbEJRVk1zUTBGQlF6dEpRVU4wUkN4UFFVRlBPMGxCUTFBc1RVRkJUU3hKUVVGSkxEQkNRVUZ6UWl4UFFVRlBMRU5CUVVNc1NVRkJTU3haUVVGVExFTkJRVU03U1VGRmRFUXNUVUZCVFN4SlFVRkpMRTlCUVU4c1EwRkJRenRKUVVWc1FpeE5RVUZOTEVsQlFVa3NkVU5CUlVvc1QwRkJUeXhEUVVGRExFbEJRVWs3VTBGRFdDeFBRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExIRkNRVUZ4UWp0VFFVTTNReXhQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNRMEZCUXl4MVEwRkhkRUlzUTBGQlF6dEpRVVZRTEU5QlFVOHNUVUZCVFN4RFFVRkRPMEZCUTJoQ0xFTkJRVU1zUTBGQlF6dEJRVVZHTEVsQlFVMHNiMEpCUVc5Q0xFZEJRVWNzVlVGQlF5eFhRVUV3UWl4RlFVRkZMRXRCUVdFN1NVRkRja1VzSzBOQlFTdERPMGxCUXk5RExFbEJRVTBzVDBGQlR5eEhRVUZITEZkQlFWYzdVMEZEZUVJc1IwRkJSeXhEUVVGRExGVkJRVU1zVDBGQlR6dFJRVU5ZTEVsQlFVMHNUVUZCVFN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEdWQlFXVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMUZCUTJwSUxEWkNRVU5MTEU5QlFVOHNTMEZEVml4TlFVRk5MRkZCUVVFc1NVRkRUanRKUVVOS0xFTkJRVU1zUTBGQlF6dFRRVU5FTEVkQlFVY3NRMEZCUXl4VlFVRkRMRTlCUVU4c1NVRkJTeXhQUVVGQkxHbENRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVd4Q0xFTkJRV3RDTEVOQlFVTTdVMEZEY0VNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlJXUXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzUlVGQlJTeFBRVUZQTEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUTJwSUxFTkJRVU1zUTBGQlF6dEJRVVZHTEd0Q1FVRmxMRVZCUVVVc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGZzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcclxuZXhwb3J0cy5yZWFkV2F2RmlsZXMgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmc18xLmRlZmF1bHQucmVhZGRpcihwYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRXhpc3RGaWxlKHBhdGggKyAnLycgKyBmaWxlKSAmJiAvLipcXC53YXYkLy50ZXN0KGZpbGUpOyAvL+e1nuOCiui+vOOBv1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzb2x2ZShmaWxlTGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIGlzRXhpc3RGaWxlID0gZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZnNfMS5kZWZhdWx0LnN0YXRTeW5jKGZpbGUpLmlzRmlsZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zbGVlcCA9IGZ1bmN0aW9uIChtc2VjKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtc2VjKTsgfSk7IH07XHJcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1smJ2BcIjw+XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXHJcbiAgICAgICAgICAgIFwiJ1wiOiAnJiN4Mjc7JyxcclxuICAgICAgICAgICAgJ2AnOiAnJiN4NjA7JyxcclxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICAgICAgICAgICc8JzogJyZsdDsnLFxyXG4gICAgICAgICAgICAnPic6ICcmZ3Q7JyxcclxuICAgICAgICB9W21hdGNoXTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLnVuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXHJcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcclxuICAgICAgICAucmVwbGFjZSgvJiMwMzk7L2csIFwiJ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKC8mIzA0NDsvZywgJywnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblYwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTd3dRMEZCYjBJN1FVRkRVQ3hSUVVGQkxGbEJRVmtzUjBGQlJ5eFZRVUZETEVsQlFWazdTVUZEZGtNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5PMUZCUTJwRExGbEJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXM3V1VGRE1VSXNTVUZCU1N4SFFVRkhPMmRDUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1NVRkJTVHRuUWtGRGFrTXNUMEZCVHl4WFFVRlhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0WlFVTjRSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNTVUZCVFN4WFFVRlhMRWRCUVVjc1ZVRkJReXhKUVVGWk8wbEJReTlDTEVsQlFVazdVVUZEUml4WlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOYUxFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJPMWxCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGVrTTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxFdEJRVXNzUjBGQlJ5eFZRVUZETEVsQlFWa3NTVUZCU3l4UFFVRkJMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVU1zVDBGQlR5eEpRVUZMTEU5QlFVRXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQmVrSXNRMEZCZVVJc1EwRkJReXhGUVVGdVJDeERRVUZ0UkN4RFFVRkRPMEZCUlRsRkxGRkJRVUVzVlVGQlZTeEhRVUZITEZWQlFVTXNUVUZCWXp0SlFVTjJReXhKUVVGSkxFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tTzBsQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZETEV0QlFVczdVVUZEZGtNc1QwRkJVVHRaUVVOT0xFZEJRVWNzUlVGQlJTeFBRVUZQTzFsQlExb3NSMEZCUnl4RlFVRkZMRkZCUVZFN1dVRkRZaXhIUVVGSExFVkJRVVVzVVVGQlVUdFpRVU5pTEVkQlFVY3NSVUZCUlN4UlFVRlJPMWxCUTJJc1IwRkJSeXhGUVVGRkxFMUJRVTA3V1VGRFdDeEhRVUZITEVWQlFVVXNUVUZCVFR0VFFVTktMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRUQ3hEUVVGRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRkRU1zVDBGQlR5eEhRVUZITzFOQlExQXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU0xUWl4RFFVRkRMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvbi1qc29uLXN0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpY29udi1saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==