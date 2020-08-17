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
                return [4 /*yield*/, util_1.sleep(500)];
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
                if (index === -1) {
                    electron_log_1.default.warn('書き込み要求があったけど板IDが見つからない' + args.boardId);
                    return [2 /*return*/];
                }
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
    var unicodeArray, i, sjisArray, encodedKeyword, result;
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
                electron_log_1.default.info(hostname + "test/bbs.cgi");
                electron_log_1.default.info("FROM=&MESSAGE=" + encodedKeyword + "&mail=sage&key=" + threadNumber + "&bbs=" + boardId);
                return [4 /*yield*/, axios_1.default.post(hostname + "test/bbs.cgi", "FROM=&MESSAGE=" + encodedKeyword + "&mail=sage&key=" + threadNumber + "&bbs=" + boardId, {
                        headers: {
                            Accept: '*/*',
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Accept-Encoding': 'gzip, deflate, br',
                            Cookie: 'MAIL="sage"; NAME=""',
                        },
                        withCredentials: true,
                    })];
            case 1:
                result = _a.sent();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZDVjaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWQ1Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILGdEQUFrRDtBQUNsRCwwREFBK0IsQ0FBQyxnQkFBZ0I7QUFDaEQsOERBQStCO0FBQy9CLHdFQUF5QztBQUV6QywrQkFBK0I7QUFDL0IsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDO0FBQzNCLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBRXBDLGdCQUFnQjtBQUNILFFBQUEsU0FBUyxHQUFHLFVBQU8sUUFBZ0I7Ozs7O2dCQUN4QyxVQUFVLEdBQU0sUUFBUSxnQkFBYSxDQUFDO2dCQUN0QyxJQUFJLEdBQXlDLEVBQUUsQ0FBQztnQkFHaEQsT0FBTyxHQUF1QjtvQkFDbEMsR0FBRyxFQUFFLFVBQVU7b0JBQ2YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJO29CQUNqQixZQUFZLEVBQUUsYUFBYTtpQkFDNUIsQ0FBQzs7OztnQkFJaUIscUJBQU0sZUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFBOztnQkFBL0IsUUFBUSxHQUFHLFNBQW9CO2dCQU8vQixHQUFHLEdBQUcsb0JBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2xFLFVBQVU7Z0JBQ1YsSUFBSSxDQUFDLElBQUksT0FBVCxJQUFJLEVBQ0MsR0FBRztxQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDO3FCQUNYLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7cUJBQ3RCLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQS9CLENBQStC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

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
    var unicodeArray, i, sjisArray, encodedKeyword, dir, bbs, result;
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
                            Cookie: 'MAIL="sage"; NAME=""',
                        },
                        withCredentials: true,
                    })];
            case 1:
                result = _a.sent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vcmVhZEJCUy9SZWFkNWNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvZ2V0UmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvcmVhZFNpdGFyYWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N0YXJ0U2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVuY29kaW5nLWphcGFuZXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDhDQUE4QyxtQkFBTyxDQUFDLG9EQUF1QjtBQUM3RSxxQ0FBcUMsbUJBQU8sQ0FBQyxrQ0FBYztBQUMzRCxpQ0FBaUMsbUJBQU8sQ0FBQywwQkFBVTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOERBQThELHVCQUF1QjtBQUNyRjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQ0FBMkMsMmpDOzs7Ozs7Ozs7Ozs7QUNuQzlCO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCs1Qjs7Ozs7Ozs7Ozs7O0FDbkM5QjtBQUNiO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSw2QkFBNkIsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQyw4QkFBOEIsbUJBQU8sQ0FBQywwQkFBVTtBQUNoRCxxQ0FBcUMsbUJBQU8sQ0FBQyxrQ0FBYztBQUMzRCxhQUFhLG1CQUFPLENBQUMsa0NBQVE7QUFDN0IsOENBQThDLG1CQUFPLENBQUMsb0RBQXVCO0FBQzdFLCtCQUErQixtQkFBTyxDQUFDLHNDQUFVO0FBQ2pELGNBQWMsbUJBQU8sQ0FBQyxvQ0FBUztBQUMvQixlQUFlLG1CQUFPLENBQUMsc0RBQWtCO0FBQ3pDLG9CQUFvQixtQkFBTyxDQUFDLGdEQUFlO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyxzREFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1CQUFPLENBQUMsZ0RBQWU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFLEVBQUU7QUFDTDtBQUNBLCtFQUErRSxrQ0FBa0MsRUFBRTtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHFHQUFxRywrQkFBK0IsRUFBRTtBQUN0STtBQUNBO0FBQ0EsQ0FBQztBQUNELGlHQUFpRztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRSxFQUFFO0FBQ0wsMkZBQTJGO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRixtQ0FBbUMsRUFBRTtBQUMxSDtBQUNBLDJCQUEyQiw0Q0FBNEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNIQUFzSCxtQkFBbUI7QUFDekk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFLEVBQUU7QUFDTCw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRix3Q0FBd0MsRUFBRTtBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFLEVBQUU7QUFDTCwyQ0FBMkMsMjZZOzs7Ozs7Ozs7Ozs7QUNwWDlCO0FBQ2I7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMsb0JBQU87QUFDN0MsbUNBQW1DLG1CQUFPLENBQUMsOEJBQVksR0FBRztBQUMxRCxxQ0FBcUMsbUJBQU8sQ0FBQyxrQ0FBYztBQUMzRCwwQ0FBMEMsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsYUFBYSxFQUFFO0FBQzVELDBDQUEwQyx3Q0FBd0MsRUFBRTtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELFVBQVUsVUFBVSxPQUFPO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLElBQUkscUJBQXFCLGdCQUFnQixLQUFLLGNBQWM7QUFDckY7QUFDQSxVQUFVLHVCQUF1QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLCs1VDs7Ozs7Ozs7Ozs7O0FDclc5QjtBQUNiO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDZCQUE2QiwwQkFBMEIsYUFBYSxFQUFFLHFCQUFxQjtBQUN4RyxnQkFBZ0IscURBQXFELG9FQUFvRSxhQUFhLEVBQUU7QUFDeEosc0JBQXNCLHNCQUFzQixxQkFBcUIsR0FBRztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0NBQWtDLFNBQVM7QUFDM0Msa0NBQWtDLFdBQVcsVUFBVTtBQUN2RCx5Q0FBeUMsY0FBYztBQUN2RDtBQUNBLDZHQUE2RyxPQUFPLFVBQVU7QUFDOUgsZ0ZBQWdGLGlCQUFpQixPQUFPO0FBQ3hHLHdEQUF3RCxnQkFBZ0IsUUFBUSxPQUFPO0FBQ3ZGLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLE9BQU87QUFDckY7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFNBQVMsWUFBWSxhQUFhLE9BQU8sRUFBRSxVQUFVLFdBQVc7QUFDaEUsbUNBQW1DLFNBQVM7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxxQ0FBcUMsbUJBQU8sQ0FBQyxrQ0FBYztBQUMzRCw4QkFBOEIsbUJBQU8sQ0FBQyxvQkFBTztBQUM3QyxtQ0FBbUMsbUJBQU8sQ0FBQyw4QkFBWSxHQUFHO0FBQzFELGtDQUFrQyxtQkFBTyxDQUFDLDBEQUFnQixHQUFHO0FBQzdELDZCQUE2QixtQkFBTyxDQUFDLGdEQUFXLEdBQUc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELFVBQVUsWUFBWSxPQUFPLGFBQWEsZ0JBQWdCO0FBQzlHO0FBQ0EsbURBQW1ELFNBQVMsYUFBYTtBQUN6RSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNILDJDQUEyQyx1bUs7Ozs7Ozs7Ozs7OztBQ3RPOUI7QUFDYjtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyxvQkFBTztBQUM3QyxtQ0FBbUMsbUJBQU8sQ0FBQyw4QkFBWSxHQUFHO0FBQzFELHFDQUFxQyxtQkFBTyxDQUFDLGtDQUFjO0FBQzNELDBDQUEwQyxtQkFBTyxDQUFDLDRDQUFtQjtBQUNyRTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhLEVBQUU7QUFDNUQsMENBQTBDLHdDQUF3QyxFQUFFO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pELHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUyxFQUFFO0FBQ1g7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxJQUFJLFVBQVUsR0FBRyxPQUFPO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLDJDQUEyQywrMkw7Ozs7Ozs7Ozs7OztBQ3hQOUI7QUFDYjtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4Q0FBOEMsZ0JBQWdCLGdCQUFnQixPQUFPO0FBQ3JGO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxTQUFTLFlBQVksYUFBYSxPQUFPLEVBQUUsVUFBVSxXQUFXO0FBQ2hFLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHFDQUFxQyxtQkFBTyxDQUFDLGtDQUFjO0FBQzNELGFBQWEsbUJBQU8sQ0FBQyxrQ0FBUTtBQUM3QixlQUFlLG1CQUFPLENBQUMsc0RBQWtCO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxvQ0FBUztBQUMvQjtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXLElBQUksTUFBTTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxrQ0FBa0MsRUFBRTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxNQUFNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhLGlCQUFpQjtBQUNqRSxLQUFLO0FBQ0wsaUNBQWlDLG1DQUFtQyxFQUFFO0FBQ3RFO0FBQ0EsMEdBQTBHLGVBQWU7QUFDekg7QUFDQTtBQUNBLDJDQUEyQyx1eEg7Ozs7Ozs7Ozs7OztBQ3RKOUI7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLGNBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx3Q0FBd0Msa0NBQWtDLEVBQUUsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCO0FBQ0EsMkNBQTJDLHUvRDs7Ozs7Ozs7Ozs7QUNyRDNDLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZWxlY3Ryb25fanNvbl9zdG9yYWdlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiKSk7XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgZWxlY3Ryb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb25cIikpO1xudmFyIENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25maWcoKSB7XG4gICAgICAgIHRoaXMuZ2V0Qm9hZExpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LmdldCgnYm9hcmRMaXN0JywgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QgPSAoX2EgPSBkYXRhLmJvYXJkTGlzdCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW107XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqIOadv+S4gOimp+OCkuS/neWtmCAqL1xuICAgICAgICB0aGlzLnNhdmVCb2FyZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRMaXN0KSB7XG4gICAgICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LnNldCgnYm9hcmRMaXN0JywgeyBib2FyZExpc3Q6IGJvYXJkTGlzdCB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIOioreWumuODleOCoeOCpOODq+iqreOBv+i+vOOBv1xuICAgICAgICAvLyBsZXQgbm93UGF0aCA9IGVsZWN0cm9uLmFwcC5nZXRBcHBQYXRoKCk7XG4gICAgICAgIC8vIGlmIChub3dQYXRoLmluY2x1ZGVzKCdDb250ZW50cy9SZXNvdXJjZXMvYXBwLmFzYXInKSkge1xuICAgICAgICAvLyAgIG5vd1BhdGggPSBub3dQYXRoLnJlcGxhY2UoJ2FwcC5hc2FyJywgJycpICsgJy4uLy4uLy4uLyc7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gY29uc3Qgbm93UGF0aCA9IHBhdGgucmVzb2x2ZSgnJylcbiAgICAgICAgdmFyIG5vd1BhdGggPSBlbGVjdHJvbl8xLmRlZmF1bHQuYXBwLmdldFBhdGgoJ3VzZXJEYXRhJyk7XG4gICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbyhcIltDb25maWddIHBhdGggPSBcIiArIG5vd1BhdGgpO1xuICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LnNldERhdGFQYXRoKG5vd1BhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gQ29uZmlnO1xufSgpKTtcbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBDb25maWcoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVkyOXVabWxuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZMjl1Wm1sbkxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlEwRXNaMFpCUVRSRE8wRkJRelZETERoRVFVRXJRanRCUVVNdlFpeHpSRUZCWjBNN1FVRkZhRU03U1VGRFJUdFJRVmRCTEdkQ1FVRlhMRWRCUVVjN1dVRkRXaXdyUWtGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1ZVRkJReXhMUVVGVkxFVkJRVVVzU1VGQlV6czdaMEpCUXpkRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1UwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eHRRMEZCU1N4RlFVRkZMRU5CUVVNN1dVRkROVVFzUTBGQlF5eERRVUZETEVOQlFVTTdVVUZEVEN4RFFVRkRMRU5CUVVNN1VVRkZSaXhoUVVGaE8xRkJRMklzYTBKQlFXRXNSMEZCUnl4VlFVRkRMRk5CUVc5RU8xbEJRMjVGTEN0Q1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeEZRVUZGTEZOQlFWTXNWMEZCUVN4RlFVRkZMRVZCUVVVc1ZVRkJReXhIUVVGSE8yZENRVU14UXl4TlFVRk5MRWRCUVVjc1EwRkJRenRaUVVOYUxFTkJRVU1zUTBGQlF5eERRVUZETzFGQlEwd3NRMEZCUXl4RFFVRkRPMUZCY2tKQkxHRkJRV0U3VVVGRFlpd3lRMEZCTWtNN1VVRkRNME1zZVVSQlFYbEVPMUZCUTNwRUxEWkVRVUUyUkR0UlFVTTNSQ3hKUVVGSk8xRkJRMG9zYlVOQlFXMURPMUZCUTI1RExFbEJRVTBzVDBGQlR5eEhRVUZITEd0Q1FVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXp0UlFVTnFSQ3h6UWtGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4eFFrRkJiVUlzVDBGQlV5eERRVUZETEVOQlFVTTdVVUZEZGtNc0swSkJRVThzUTBGQlF5eFhRVUZYTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkRMMElzUTBGQlF6dEpRV0ZJTEdGQlFVTTdRVUZCUkN4RFFVRkRMRUZCZUVKRUxFbEJkMEpETzBGQlJVUXNhMEpCUVdVc1NVRkJTU3hOUVVGTkxFVkJRVVVzUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZWxlY3Ryb25FdmVudCA9IHtcbiAgICAvKiog44K144O844OQ44O86LW35YuVICovXG4gICAgJ3N0YXJ0LXNlcnZlcic6ICdzdGFydC1zZXJ2ZXInLFxuICAgIC8qKiDjgqLjg6njg7zjg4jooajnpLogKi9cbiAgICAnc2hvdy1hbGVydCc6ICdzaG93LWFsZXJ0JyxcbiAgICAnc2hvdy1jb21tZW50JzogJ3Nob3ctY29tbWVudCcsXG4gICAgJ2NsZWFyLWNvbW1lbnQnOiAnY2xlYXItY29tbWVudCcsXG4gICAgLyoqIOOCteODvOODkOODvOi1t+WLleOBrui/lOS/oSAqL1xuICAgICdzdGFydC1zZXJ2ZXItcmVwbHknOiAnc3RhcnQtc2VydmVyLXJlcGx5JyxcbiAgICBNQUlOX0dFVF9FTEVDVFJPTl9EQVRBOiAnTUFJTl9HRVRfRUxFQ1RST05fREFUQScsXG4gICAgTUFJTl9TRVRfRUxFQ1RST05fREFUQTogJ01BSU5fU0VUX0VMRUNUUk9OX0RBVEEnLFxuICAgIC8qKiDjgrnjg6xVUkzjgpLlhYPjgavmnb/mg4XloLHjgpLlj5blvpcgKi9cbiAgICBNQUlOX0ZFVENIX0JPQVJESU5GTzogJ01BSU5fRkVUQ0hfQk9BUkRJTkZPJyxcbiAgICAvKiog5p2/44KS6L+95YqgICovXG4gICAgTUFJTl9BRERfQk9BUkRMSVNUOiAnTUFJTl9BRERfQk9BUkRMSVNUJyxcbiAgICAvKiog5p2/44KS5YmK6ZmkICovXG4gICAgTUFJTl9ERUxFVEVfQk9BUkRMSVNUOiAnTUFJTl9ERUxFVEVfQk9BUkRMSVNUJyxcbiAgICAvKiog44K544Os5LiA6Kan44KS6ZaL44GPICovXG4gICAgTUFJTl9HRVRfVEhSRUFEX0xJU1Q6ICdNQUlOX0dFVF9USFJFQURfTElTVCcsXG4gICAgLyoqIOOCueODrOOCkumWi+OBjyAqL1xuICAgIE1BSU5fT1BFTl9USFJFQUQ6ICdNQUlOX09QRU5fVEhSRUFEJyxcbiAgICAvKiog5p2/5LiA6Kan6KGo56S6ICovXG4gICAgU0hPV19CT0FSRF9MSVNUOiAnU0hPV19CT0FSRF9MSVNUJyxcbiAgICAvKiog5pu444GN6L6844G/ICovXG4gICAgTUFJTl9QT1NUX0tBS0lLT01JOiAnTUFJTl9QT1NUX0tBS0lLT01JJyxcbiAgICAvKiog44Os44K544Km44Kj44Oz44OJ44Km44Gu5Yid5pyf5YyWICovXG4gICAgQ0hBVF9JTklUOiAnQ0hBVF9JTklUJyxcbn07XG5leHBvcnRzLmtleUNvZGUgPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIFNISUZUOiAxNixcbiAgICBDVFJMOiAxNyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lZMjl1YzNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGN5STZXeUpqYjI1emRDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGaExGRkJRVUVzWVVGQllTeEhRVUZITzBsQlF6TkNMR0ZCUVdFN1NVRkRZaXhqUVVGakxFVkJRVVVzWTBGQll6dEpRVVU1UWl4aFFVRmhPMGxCUTJJc1dVRkJXU3hGUVVGRkxGbEJRVms3U1VGRk1VSXNZMEZCWXl4RlFVRkZMR05CUVdNN1NVRkRPVUlzWlVGQlpTeEZRVUZGTEdWQlFXVTdTVUZGYUVNc1owSkJRV2RDTzBsQlEyaENMRzlDUVVGdlFpeEZRVUZGTEc5Q1FVRnZRanRKUVVVeFF5eHpRa0ZCYzBJc1JVRkJSU3gzUWtGQmQwSTdTVUZEYUVRc2MwSkJRWE5DTEVWQlFVVXNkMEpCUVhkQ08wbEJSV2hFTEhGQ1FVRnhRanRKUVVOeVFpeHZRa0ZCYjBJc1JVRkJSU3h6UWtGQmMwSTdTVUZETlVNc1YwRkJWenRKUVVOWUxHdENRVUZyUWl4RlFVRkZMRzlDUVVGdlFqdEpRVU40UXl4WFFVRlhPMGxCUTFnc2NVSkJRWEZDTEVWQlFVVXNkVUpCUVhWQ08wbEJSVGxETEdOQlFXTTdTVUZEWkN4dlFrRkJiMElzUlVGQlJTeHpRa0ZCYzBJN1NVRkZOVU1zV1VGQldUdEpRVU5hTEdkQ1FVRm5RaXhGUVVGRkxHdENRVUZyUWp0SlFVVndReXhaUVVGWk8wbEJRMW9zWlVGQlpTeEZRVUZGTEdsQ1FVRnBRanRKUVVWc1F5eFhRVUZYTzBsQlExZ3NhMEpCUVd0Q0xFVkJRVVVzYjBKQlFXOUNPMGxCUlhoRExHdENRVUZyUWp0SlFVTnNRaXhUUVVGVExFVkJRVVVzVjBGQlZ6dERRVU4yUWl4RFFVRkRPMEZCUlZjc1VVRkJRU3hQUVVGUExFZEJRVWM3U1VGRGNrSXNTMEZCU3l4RlFVRkZMRVZCUVVVN1NVRkRWQ3hMUVVGTExFVkJRVVVzUlVGQlJUdEpRVU5VTEVsQlFVa3NSVUZCUlN4RlFVRkZPME5CUTFRc1EwRkJReUo5IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gRWxlY3Ryb27jga7jg6Ljgrjjg6Xjg7zjg6tcbnZhciBwYXRoXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInBhdGhcIikpO1xudmFyIGVsZWN0cm9uXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImVsZWN0cm9uXCIpKTtcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcbnZhciB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xudmFyIGVsZWN0cm9uX3dpbmRvd19zdGF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi13aW5kb3ctc3RhdGVcIikpO1xudmFyIGNvbmZpZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2NvbmZpZ1wiKSk7XG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuL2NvbnN0XCIpO1xudmFyIGdldFJlc18xID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XG52YXIgc3RhcnRTZXJ2ZXJfMSA9IHJlcXVpcmUoXCIuL3N0YXJ0U2VydmVyXCIpO1xudmFyIGdldFJlc18yID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XG5jb25zb2xlLnRyYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vXG59O1xucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlcnIpO1xufSk7XG4vLyDjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PjgpLjgrPjg7Pjg4jjg63jg7zjg6vjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcbnZhciBhcHAgPSBlbGVjdHJvbl8xLmRlZmF1bHQuYXBwO1xuLy8g5aSa6YeN6LW35YuV6Ziy5q2iXG5pZiAoIWFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKCkpIHtcbiAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbYXBwXSBJdCBpcyB0ZXJtaW5hdGVkIGZvciBtdWx0aXBsZSBsYXVuY2hlcy4nKTtcbiAgICBhcHAucXVpdCgpO1xufVxuZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKCdbYXBwXSBzdGFydGVkJyk7XG5hcHAuYWxsb3dSZW5kZXJlclByb2Nlc3NSZXVzZSA9IHRydWU7XG52YXIgaWNvblBhdGggPSBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2ljb24ucG5nJyk7XG4vLyDjgrXjg7zjg5Djg7zotbfli5Xjg6Ljgrjjg6Xjg7zjg6tcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXG52YXIgc3MgPSByZXF1aXJlKCcuL3N0YXJ0U2VydmVyJyk7XG5jb25zb2xlLnRyYWNlKHNzKTtcbi8vIOOCpuOCo+ODs+ODieOCpuOCkuS9nOaIkOOBmeOCi+ODouOCuOODpeODvOODq1xudmFyIEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbl8xLmRlZmF1bHQuQnJvd3NlcldpbmRvdztcbi8vIOODoeOCpOODs+OCpuOCo+ODs+ODieOCpuOBr0dD44GV44KM44Gq44GE44KI44GG44Gr44Kw44Ot44O844OQ44Or5a6j6KiAXG5nbG9iYWxUaGlzLmVsZWN0cm9uID0ge1xuICAgIHdpbmRvdzoge1xuICAgICAgICBtYWluV2luZG93OiBudWxsLFxuICAgICAgICBjaGF0V2luZG93OiBbXSxcbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYm9hcmRMaXN0OiBbXSxcbiAgICAgICAgYm9hcmQ6IHtcbiAgICAgICAgICAgIHVybDogbnVsbCxcbiAgICAgICAgICAgIHRocmVhZExpc3Q6IFtdLFxuICAgICAgICB9LFxuICAgICAgICB0aHJlYWQ6IFtdLFxuICAgIH0sXG59O1xuLy8g5YWo44Gm44Gu44Km44Kj44Oz44OJ44Km44GM6ZaJ44GY44Gf44KJ57WC5LqGXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9ICdkYXJ3aW4nKSB7XG4gICAgYXBwLnF1aXQoKTtcbiAgICAvLyB9XG59KTtcbi8vIEVsZWN0cm9u44Gu5Yid5pyf5YyW5a6M5LqG5b6M44Gr5a6f6KGMXG5hcHAub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBtYWluV2luZG93U3RhdGUgPSBlbGVjdHJvbl93aW5kb3dfc3RhdGVfMS5kZWZhdWx0KHtcbiAgICAgICAgZGVmYXVsdFdpZHRoOiA3MDAsXG4gICAgICAgIGRlZmF1bHRIZWlnaHQ6IDcyMCxcbiAgICB9KTtcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjgrXjgqTjgrrjgpLvvIjjg5Xjg6zjg7zjg6DjgrXjgqTjgrrjgpLlkKvjgb7jgarjgYTvvInoqK3lrppcbiAgICB2YXIgbWFpbldpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICAgICAgLy8g5YmN5Zue6LW35YuV5pmC44Gu44KS5b6p5YWDXG4gICAgICAgIHg6IG1haW5XaW5kb3dTdGF0ZS54LFxuICAgICAgICB5OiBtYWluV2luZG93U3RhdGUueSxcbiAgICAgICAgd2lkdGg6IG1haW5XaW5kb3dTdGF0ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBtYWluV2luZG93U3RhdGUuaGVpZ2h0LFxuICAgICAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcbiAgICAgICAgaWNvbjogaWNvblBhdGgsXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHNraXBUYXNrYmFyOiB0cnVlLFxuICAgIH0pO1xuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93Lm1haW5XaW5kb3cgPSBtYWluV2luO1xuICAgIG1haW5XaW5kb3dTdGF0ZS5tYW5hZ2UobWFpbldpbik7XG4gICAgbWFpbldpbi5zZXRUaXRsZSgndm9uZ29sZScpO1xuICAgIG1haW5XaW4uc2V0TWVudShudWxsKTtcbiAgICAvLyDjg6zjg7Pjg4Djg6njg7zjgafkvb/nlKjjgZnjgotodG1s44OV44Kh44Kk44Or44KS5oyH5a6a44GZ44KLXG4gICAgbWFpbldpbi5sb2FkVVJMKCdmaWxlOi8vJyArIHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2h0bWwvaW5kZXguaHRtbCcpKTtcbiAgICAvLyDjgqbjgqPjg7Pjg4njgqbjgYzplonjgZjjgonjgozjgZ/jgonjgqLjg5fjg6rjgoLntYLkuoZcbiAgICBtYWluV2luLm9uKCdjbG9zZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyDnorroqo3jg4DjgqTjgqLjg63jgrDjgafjga/jgYTjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgonplonjgZjjgotcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZWxlY3Ryb25fMS5kaWFsb2dcbiAgICAgICAgICAgIC5zaG93TWVzc2FnZUJveChtYWluV2luLCB7XG4gICAgICAgICAgICB0eXBlOiAncXVlc3Rpb24nLFxuICAgICAgICAgICAgYnV0dG9uczogWydZZXMnLCAnTm8nXSxcbiAgICAgICAgICAgIC8vIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfntYLkuobjgZfjgb7jgZnjgYvvvJ8nLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUucmVzcG9uc2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICBhcHAuZXhpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtYWluV2luLm9uKCdjbG9zZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbygnW2FwcF0gY2xvc2UnKTtcbiAgICAgICAgYXBwLmV4aXQoKTtcbiAgICB9KTtcbiAgICAvLyDplovnmbrogIXjg4Tjg7zjg6vjgpLplovjgY9cbiAgICAvLyBtYWluV2luLndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xuICAgIC8vIOOCv+OCueOCr+ODiOODrOOCpOOBruioreWumlxuICAgIHZhciB0cmF5ID0gbnVsbDtcbiAgICBhcHAud2hlblJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyYXkgPSBuZXcgZWxlY3Ryb25fMS5UcmF5KGljb25QYXRoKTtcbiAgICAgICAgdmFyIGNvbnRleHRNZW51ID0gZWxlY3Ryb25fMS5NZW51LmJ1aWxkRnJvbVRlbXBsYXRlKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+ioreWumicsXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbldpbi5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAn44Kz44Oh44Oz44OIJyxcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93Lm1hcChmdW5jdGlvbiAod2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbi5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW4ucmVzdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+e1guS6hicsXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbldpbi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgdHJheS5zZXRUb29sVGlwKCd2b25nb2xlJyk7XG4gICAgICAgIHRyYXkuc2V0Q29udGV4dE1lbnUoY29udGV4dE1lbnUpO1xuICAgICAgICAvLyDjgr/jgrnjgq/jg4jjg6zjgqTjgq/jg6rjg4Pjgq/mmYLjga7mjJnli5VcbiAgICAgICAgdmFyIGlzRG91YmxlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICB0cmF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRG91YmxlQ2xpY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDIwMCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNEb3VibGVDbGlja2VkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cubWFwKGZ1bmN0aW9uICh3aW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW4uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW4uc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbi5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH0pO1xuICAgICAgICB0cmF5Lm9uKCdkb3VibGUtY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlzRG91YmxlQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBtYWluV2luLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIOadv+S4gOimp+WIneacn+ihqOekulxuICAgIGNvbmZpZ18xLmRlZmF1bHQuZ2V0Qm9hZExpc3QoKTtcbn0pO1xudmFyIGNyZWF0ZUNoYXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNoYXRXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XG4gICAgICAgIHdpZHRoOiA0MDAsXG4gICAgICAgIHVzZUNvbnRlbnRTaXplOiB0cnVlLFxuICAgICAgICBpY29uOiBpY29uUGF0aCxcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g44K/44K544Kv44OQ44O844Gr6KGo56S644GX44Gq44GEXG4gICAgICAgIHNraXBUYXNrYmFyOiB0cnVlLFxuICAgICAgICBjbG9zYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICAvLyDliJ3mnJ/ooajnpLrjga/pnZ7ooajnpLpcbiAgICBjaGF0V2luZG93Lm1pbmltaXplKCk7XG4gICAgLy8g44Os44Oz44OA44Op44O844Gn5L2/55So44GZ44KLaHRtbOODleOCoeOCpOODq+OCkuaMh+WumuOBmeOCi1xuICAgIGNoYXRXaW5kb3cubG9hZFVSTCgnZmlsZTovLycgKyBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL3NyYy9odG1sL2NoYXQuaHRtbCcpKTtcbiAgICBjaGF0V2luZG93LnNldFRpdGxlKCd2b25nb2xlIC0gdGhyZWFkJyk7XG4gICAgY2hhdFdpbmRvdy5zZXRNZW51KG51bGwpO1xuICAgIGNoYXRXaW5kb3cub24oJ2Nsb3NlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgdmFyIHRpdGxlID0gY2hhdFdpbmRvdy5nZXRUaXRsZSgpO1xuICAgICAgICB2YXIgdGFyZ2V0SW5kZXggPSAwO1xuICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5maWx0ZXIoZnVuY3Rpb24gKHRocmVhZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0aXRsZS5pbmNsdWRlcyh0aHJlYWQudXJsKSlcbiAgICAgICAgICAgICAgICB0YXJnZXRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgcmV0dXJuICF0aXRsZS5pbmNsdWRlcyh0aHJlYWQudXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3cgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LmZpbHRlcihmdW5jdGlvbiAod2luLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4ICE9PSB0YXJnZXRJbmRleDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gY2hhdFdpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcbiAgICByZXR1cm4gY2hhdFdpbmRvdztcbn07XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9FTEVDVFJPTl9EQVRBLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhO1xufSk7XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX1NFVF9FTEVDVFJPTl9EQVRBLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEgPSBtZXNzYWdlO1xuICAgIHJldHVybjtcbn0pO1xuZWxlY3Ryb25fMS5pcGNNYWluLmhhbmRsZShjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9GRVRDSF9CT0FSRElORk8sIGZ1bmN0aW9uIChldmVudCwgdXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMS50aHJlYWRVcmxUb0JvYXJkSW5mbyh1cmwpXTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fQUREX0JPQVJETElTVCwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7XG4gICAgdmFyIGluZGV4ID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdC5maW5kSW5kZXgoZnVuY3Rpb24gKGJvYXJkKSB7IHJldHVybiBib2FyZC51cmwgPT09IG1lc3NhZ2UudXJsOyB9KTtcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAvLyDkuIrmm7jjgY1cbiAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdFtpbmRleF0ubmFtZSA9IG1lc3NhZ2UubmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIOaWsOimj1xuICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0LnB1c2gobWVzc2FnZSk7XG4gICAgfVxuICAgIGNvbmZpZ18xLmRlZmF1bHQuc2F2ZUJvYXJkTGlzdChnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0KTtcbiAgICByZXR1cm47XG59KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fREVMRVRFX0JPQVJETElTVCwgZnVuY3Rpb24gKGV2ZW50LCBib2FyZFVybCkge1xuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS5ib2FyZExpc3QgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0LmZpbHRlcihmdW5jdGlvbiAoYm9hcmQpIHsgcmV0dXJuIGJvYXJkLnVybCAhPT0gYm9hcmRVcmw7IH0pO1xuICAgIGNvbmZpZ18xLmRlZmF1bHQuc2F2ZUJvYXJkTGlzdChnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0KTtcbiAgICByZXR1cm47XG59KTtcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fR0VUX1RIUkVBRF9MSVNULCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpc3Q7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18xLmdldFRocmVhZExpc3QobWVzc2FnZSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGxpc3QgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5lbGVjdHJvbl8xLmlwY01haW4ub24oY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fT1BFTl9USFJFQUQsIGZ1bmN0aW9uIChldmVudCwgdXJsLCBuYW1lKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCB3aW5kb3dJbmRleCwgZmlsdGVyZWQsIGksIGNoYXRXaW5kb3c7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcbiAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGhvc3RuYW1lID0gKF9iID0gKF9hID0gdXJsLm1hdGNoKC9odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgICAgICAgICAgICAgdGhyZWFkTnVtYmVyID0gKF9kID0gKF9jID0gdXJsLm1hdGNoKC9cXC9cXGQrXFwvJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMF0ucmVwbGFjZSgvXFwvL2csICcnKSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogJyc7XG4gICAgICAgICAgICAgICAgYm9hcmRJZCA9IHVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJykucmVwbGFjZShcIi9cIiArIHRocmVhZE51bWJlciArIFwiL1wiLCAnJykucmVwbGFjZSgndGVzdC9yZWFkLmNnaS8nLCAnJykucmVwbGFjZSgnYmJzL3JlYWQuY2dpLycsICcnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3dJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWQgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmZpbHRlcihmdW5jdGlvbiAodGhyZWFkKSB7IHJldHVybiB0aHJlYWQuYm9hcmRJZCA9PT0gYm9hcmRJZDsgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCEoZmlsdGVyZWQubGVuZ3RoID4gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkW2ldLmJvYXJkSWQgPT09IGJvYXJkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWRbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9zdG5hbWU6IGhvc3RuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocmVhZE51bWJlcjogdGhyZWFkTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkSWQ6IGJvYXJkSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0UmVzOiBnZXRSZXNfMS5hbmFseXNCQlNOYW1lKHVybCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogaG9zdG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRocmVhZE51bWJlcjogdGhyZWFkTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBib2FyZElkOiBib2FyZElkLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0UmVzOiBnZXRSZXNfMS5hbmFseXNCQlNOYW1lKHVybCksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2luZG93SW5kZXggPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgY2hhdFdpbmRvdyA9IGNyZWF0ZUNoYXRXaW5kb3coKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LnB1c2goY2hhdFdpbmRvdyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDUwMCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W3dpbmRvd0luZGV4XS53ZWJDb250ZW50cy5zZW5kKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5DSEFUX0lOSVQsIHsgYm9hcmRJZDogYm9hcmRJZCB9KTtcbiAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDM7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKEpTT04uc3RyaW5naWZ5KGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWRbd2luZG93SW5kZXhdLCBudWxsLCAnICAnKSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvd1t3aW5kb3dJbmRleF0ud2ViQ29udGVudHMuc2VuZChjb25zdF8xLmVsZWN0cm9uRXZlbnRbJ2NsZWFyLWNvbW1lbnQnXSk7XG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvd1t3aW5kb3dJbmRleF0uc2V0VGl0bGUobmFtZSArIFwiIC0gXCIgKyB1cmwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0YXJ0U2VydmVyXzEudXBkYXRlUmVzKGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWRbd2luZG93SW5kZXhdLCB3aW5kb3dJbmRleCldO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W3dpbmRvd0luZGV4XS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24ud2luZG93LmNoYXRXaW5kb3dbd2luZG93SW5kZXhdLnNob3coKTtcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93W3dpbmRvd0luZGV4XS5yZXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX1BPU1RfS0FLSUtPTUksIGZ1bmN0aW9uIChldmVudCwgYXJncykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5kZXgsIHRocmVhZCwgZV8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmZpbmRJbmRleChmdW5jdGlvbiAodGhyZWFkKSB7IHJldHVybiB0aHJlYWQuYm9hcmRJZCA9PT0gYXJncy5ib2FyZElkOyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQud2Fybign5pu444GN6L6844G/6KaB5rGC44GM44GC44Gj44Gf44GR44Gp5p2/SUTjgYzopovjgaTjgYvjgonjgarjgYQnICsgYXJncy5ib2FyZElkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJlYWQgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkW2luZGV4XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMi5wb3N0UmVzcG9uc2UodGhyZWFkLmhvc3RuYW1lLCB0aHJlYWQudGhyZWFkTnVtYmVyLCB0aHJlYWQuYm9hcmRJZCwgYXJncy5tZXNzYWdlKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHN0YXJ0U2VydmVyXzEudXBkYXRlUmVzKHRocmVhZCwgaW5kZXgpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc2FVSkJRV2xDTzBGQlEycENMRGhEUVVGeFF6dEJRVU55UXl4dFJFRkJhVVU3UVVGRGFrVXNPRVJCUVN0Q08wRkJReTlDTEN0Q1FVRXJRanRCUVVNdlFpeG5Sa0ZCYzBRN1FVRkRkRVFzYjBSQlFUaENPMEZCUXpsQ0xHbERRVUYzUXp0QlFVTjRReXd5UTBGQmMwWTdRVUZEZEVZc05rTkJRVEJETzBGQlF6RkRMREpEUVVGblJEdEJRVVZvUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSE8wbEJRMlFzUlVGQlJUdEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1ZVRkJReXhIUVVGSE8wbEJRMnhETEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycENMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVWdzZVVKQlFYbENPMEZCUTNwQ0xFbEJRVTBzUjBGQlJ5eEhRVUZITEd0Q1FVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRE8wRkJSWHBDTEZOQlFWTTdRVUZEVkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRVZCUVVVN1NVRkRjRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdRMEZEV2p0QlFVVkVMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMEZCUlRGQ0xFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRmNrTXNTVUZCVFN4UlFVRlJMRWRCUVVjc1kwRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkZlRVFzWTBGQll6dEJRVU5rTERoRVFVRTRSRHRCUVVNNVJDeEpRVUZOTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UVVGRGNFTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVVZzUWl4clFrRkJhMEk3UVVGRGJFSXNTVUZCVFN4aFFVRmhMRWRCUVVjc2EwSkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTTdRVUZGTjBNc05FSkJRVFJDTzBGQlF6VkNMRlZCUVZVc1EwRkJReXhSUVVGUkxFZEJRVWM3U1VGRGNFSXNUVUZCVFN4RlFVRkZPMUZCUTA0c1ZVRkJWU3hGUVVGRkxFbEJRVmM3VVVGRGRrSXNWVUZCVlN4RlFVRkZMRVZCUVVVN1MwRkRaanRKUVVORUxFbEJRVWtzUlVGQlJUdFJRVU5LTEZOQlFWTXNSVUZCUlN4RlFVRkZPMUZCUTJJc1MwRkJTeXhGUVVGRk8xbEJRMHdzUjBGQlJ5eEZRVUZGTEVsQlFWYzdXVUZEYUVJc1ZVRkJWU3hGUVVGRkxFVkJRVVU3VTBGRFpqdFJRVU5FTEUxQlFVMHNSVUZCUlN4RlFVRkZPMHRCUTFnN1EwRkRSaXhEUVVGRE8wRkJSVVlzYTBKQlFXdENPMEZCUTJ4Q0xFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNiVUpCUVcxQ0xFVkJRVVU3U1VGRE1VSXNjME5CUVhORE8wbEJRM1JETEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOWUxFbEJRVWs3UVVGRFRpeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVVklMSEZDUVVGeFFqdEJRVU55UWl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzUlVGQlJUdEpRVU5rTEVsQlFVMHNaVUZCWlN4SFFVRkhMQ3RDUVVGcFFpeERRVUZETzFGQlEzaERMRmxCUVZrc1JVRkJSU3hIUVVGSE8xRkJRMnBDTEdGQlFXRXNSVUZCUlN4SFFVRkhPMHRCUTI1Q0xFTkJRVU1zUTBGQlF6dEpRVVZJTERSQ1FVRTBRanRKUVVNMVFpeEpRVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMR0ZCUVdFc1EwRkJRenRSUVVOb1F5eFpRVUZaTzFGQlExb3NRMEZCUXl4RlFVRkZMR1ZCUVdVc1EwRkJReXhEUVVGRE8xRkJRM0JDTEVOQlFVTXNSVUZCUlN4bFFVRmxMRU5CUVVNc1EwRkJRenRSUVVOd1FpeExRVUZMTEVWQlFVVXNaVUZCWlN4RFFVRkRMRXRCUVVzN1VVRkROVUlzVFVGQlRTeEZRVUZGTEdWQlFXVXNRMEZCUXl4TlFVRk5PMUZCUlRsQ0xHTkJRV01zUlVGQlJTeEpRVUZKTzFGQlEzQkNMRWxCUVVrc1JVRkJSU3hSUVVGUk8xRkJRMlFzWTBGQll5eEZRVUZGTzFsQlEyUXNaVUZCWlN4RlFVRkZMRWxCUVVrN1UwRkRkRUk3VVVGRFJDeFhRVUZYTEVWQlFVVXNTVUZCU1R0TFFVTnNRaXhEUVVGRExFTkJRVU03U1VGRFNDeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETzBsQlEyaEVMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdTVUZGYUVNc1QwRkJUeXhEUVVGRExGRkJRVkVzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXp0SlFVTTFRaXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMGxCUlhSQ0xEQkNRVUV3UWp0SlFVTXhRaXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSMEZCUnl4alFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUlVGQlJTeDNRa0ZCZDBJc1EwRkJReXhEUVVGRExFTkJRVU03U1VGRkwwVXNjVUpCUVhGQ08wbEJRM0pDTEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRkxGVkJRVU1zUzBGQlN6dFJRVU40UWl4M1FrRkJkMEk3VVVGRGVFSXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJSU3hEUVVGRE8xRkJRM1pDTEdsQ1FVRk5PMkZCUTBnc1kwRkJZeXhEUVVGRExFOUJRVThzUlVGQlJUdFpRVU4yUWl4SlFVRkpMRVZCUVVVc1ZVRkJWVHRaUVVOb1FpeFBRVUZQTEVWQlFVVXNRMEZCUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRE8xbEJRM1JDTEdGQlFXRTdXVUZEWWl4UFFVRlBMRVZCUVVVc1UwRkJVenRUUVVOdVFpeERRVUZETzJGQlEwUXNTVUZCU1N4RFFVRkRMRlZCUVVNc1MwRkJTenRaUVVOV0xFbEJRVWtzUzBGQlN5eERRVUZETEZGQlFWRXNTMEZCU3l4RFFVRkRMRVZCUVVVN1owSkJRM2hDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVOYU8xRkJRMGdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZEVUN4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOSUxFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNVVUZCVVN4RlFVRkZPMUZCUTI1Q0xITkNRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhEUVVGRE8xRkJRM2hDTEVkQlFVY3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRKUVVOaUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJVZ3NXVUZCV1R0SlFVTmFMSE5EUVVGelF6dEpRVVYwUXl4WlFVRlpPMGxCUTFvc1NVRkJTU3hKUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETzBsQlEyaENMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTTdVVUZEYmtJc1NVRkJTU3hIUVVGSExFbEJRVWtzWlVGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMUZCUXpGQ0xFbEJRVTBzVjBGQlZ5eEhRVUZITEdWQlFVa3NRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dFpRVU42UXp0blFrRkRSU3hMUVVGTExFVkJRVVVzU1VGQlNUdG5Ra0ZEV0N4TFFVRkxMRVZCUVVVN2IwSkJRMHdzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMmRDUVVOc1FpeERRVUZETzJGQlEwWTdXVUZEUkR0blFrRkRSU3hMUVVGTExFVkJRVVVzVFVGQlRUdG5Ra0ZEWWl4TFFVRkxMRVZCUVVVN2IwSkJRMHdzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eFZRVUZETEVkQlFVYzdkMEpCUXpWRExFZEJRVWNzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0M1FrRkRXaXhIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdkMEpCUTFnc1IwRkJSeXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzI5Q1FVTm9RaXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEVEN4RFFVRkRPMkZCUTBZN1dVRkRSRHRuUWtGRFJTeExRVUZMTEVWQlFVVXNTVUZCU1R0blFrRkRXQ3hMUVVGTExFVkJRVVU3YjBKQlEwd3NUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU5zUWl4RFFVRkRPMkZCUTBZN1UwRkRSaXhEUVVGRExFTkJRVU03VVVGRFNDeEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRE8xRkJRek5DTEVsQlFVa3NRMEZCUXl4alFVRmpMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03VVVGRGFrTXNhVUpCUVdsQ08xRkJRMnBDTEVsQlFVa3NaVUZCWlN4SFFVRkhMRXRCUVVzc1EwRkJRenRSUVVNMVFpeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hWUVVGUExFdEJRVXM3T3pzN2QwSkJRek5DTEdWQlFXVXNSMEZCUnl4TFFVRkxMRU5CUVVNN2QwSkJRM2hDTEhGQ1FVRk5MRmxCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlFUczdkMEpCUVdoQ0xGTkJRV2RDTEVOQlFVTTdkMEpCUTJwQ0xFbEJRVWtzWlVGQlpUczBRa0ZCUlN4elFrRkJUenQzUWtGRE5VSXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRkRMRWRCUVVjN05FSkJRelZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenMwUWtGRFdpeEhRVUZITEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN05FSkJRMWdzUjBGQlJ5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPM2RDUVVOb1FpeERRVUZETEVOQlFVTXNRMEZCUXpzN096dGhRVU5LTEVOQlFVTXNRMEZCUXp0UlFVTklMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zWTBGQll5eEZRVUZGTEZWQlFVTXNTMEZCU3p0WlFVTTFRaXhsUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzFsQlEzWkNMRTlCUVU4c1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dFJRVU5zUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOTUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlJVZ3NWVUZCVlR0SlFVTldMR2RDUVVGTkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVOQlFVTTdRVUZEZGtJc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRlNDeEpRVUZOTEdkQ1FVRm5RaXhIUVVGSE8wbEJRM1pDTEVsQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1lVRkJZU3hEUVVGRE8xRkJRMjVETEV0QlFVc3NSVUZCUlN4SFFVRkhPMUZCUTFZc1kwRkJZeXhGUVVGRkxFbEJRVWs3VVVGRGNFSXNTVUZCU1N4RlFVRkZMRkZCUVZFN1VVRkRaQ3hqUVVGakxFVkJRVVU3V1VGRFpDeGxRVUZsTEVWQlFVVXNTVUZCU1R0VFFVTjBRanRSUVVORUxHTkJRV003VVVGRFpDeFhRVUZYTEVWQlFVVXNTVUZCU1R0UlFVTnFRaXhSUVVGUkxFVkJRVVVzU1VGQlNUdExRVU5tTEVOQlFVTXNRMEZCUXp0SlFVTklMRmRCUVZjN1NVRkRXQ3hWUVVGVkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVOQlFVTTdTVUZGZEVJc01FSkJRVEJDTzBsQlF6RkNMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEhRVUZITEdOQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhGUVVGRkxIVkNRVUYxUWl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVWcVJpeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVOQlFVTTdTVUZEZUVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0SlFVVjZRaXhWUVVGVkxFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4VlFVRkRMRXRCUVVzN1VVRkRNMElzYzBKQlFYTkNPMUZCUTNSQ0xFbEJRVTBzUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1EwRkJRenRSUVVWd1F5eEpRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN1VVRkRjRUlzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3p0WlFVTnlSaXhKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJRenRuUWtGQlJTeFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRPMWxCUTNCRUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dFJRVU55UXl4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOSUxGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVU1zUjBGQlJ5eEZRVUZGTEV0QlFVczdXVUZET1VZc1QwRkJUeXhMUVVGTExFdEJRVXNzVjBGQlZ5eERRVUZETzFGQlF5OUNMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMHdzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4NVEwRkJlVU03U1VGRmVrTXNUMEZCVHl4VlFVRlZMRU5CUVVNN1FVRkRjRUlzUTBGQlF5eERRVUZETzBGQlJVWXNhMEpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBPMGxCUTJ4RkxFOUJRVThzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1FVRkRiRU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEU0N4clFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVhkRE8wbEJRMjVITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hIUVVGSExFOUJRVThzUTBGQlF6dEpRVU51UXl4UFFVRlBPMEZCUTFRc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFNDeHJRa0ZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQllTeERRVUZETEc5Q1FVRnZRaXhGUVVGRkxGVkJRVThzUzBGQlN5eEZRVUZGTEVkQlFWYzdPenR2UWtGRGJrVXNjVUpCUVUwc05rSkJRVzlDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVFN2IwSkJRWFJETEhOQ1FVRlBMRk5CUVN0Q0xFVkJRVU03T3p0TFFVTjRReXhEUVVGRExFTkJRVU03UVVGRFNDeHJRa0ZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQllTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFYRkVPMGxCUXpWSExFbEJRVTBzUzBGQlN5eEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZUTEVOQlFVTXNWVUZCUXl4TFFVRkxMRWxCUVVzc1QwRkJRU3hMUVVGTExFTkJRVU1zUjBGQlJ5eExRVUZMTEU5QlFVOHNRMEZCUXl4SFFVRkhMRVZCUVhwQ0xFTkJRWGxDTEVOQlFVTXNRMEZCUXp0SlFVTnFSeXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlR0UlFVTmtMRTFCUVUwN1VVRkRUaXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeEhRVUZITEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNN1MwRkRMMFE3VTBGQlRUdFJRVU5NTEV0QlFVczdVVUZEVEN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRMnhFTzBsQlEwUXNaMEpCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03U1VGRGVrUXNUMEZCVHp0QlFVTlVMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMGdzYTBKQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc2NVSkJRV0VzUTBGQlF5eHhRa0ZCY1VJc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZuUWp0SlFVTXhSU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGRExFdEJRVXNzU1VGQlN5eFBRVUZCTEV0QlFVc3NRMEZCUXl4SFFVRkhMRXRCUVVzc1VVRkJVU3hGUVVGMFFpeERRVUZ6UWl4RFFVRkRMRU5CUVVNN1NVRkRiRWdzWjBKQlFVMHNRMEZCUXl4aFFVRmhMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1NVRkRla1FzVDBGQlR6dEJRVU5VTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTBnc2EwSkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNjVUpCUVdFc1EwRkJReXh2UWtGQmIwSXNSVUZCUlN4VlFVRlBMRXRCUVVzc1JVRkJSU3hQUVVGbE96czdPMjlDUVVOcVJTeHhRa0ZCVFN4elFrRkJZU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZCT3p0blFrRkJia01zU1VGQlNTeEhRVUZITEZOQlFUUkNPMmRDUVVONlF5eHpRa0ZCVHl4SlFVRkpMRVZCUVVNN096dExRVU5pTEVOQlFVTXNRMEZCUXp0QlFVTklMR3RDUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEhGQ1FVRmhMRU5CUVVNc1owSkJRV2RDTEVWQlFVVXNWVUZCVHl4TFFVRkxMRVZCUVVVc1IwRkJWeXhGUVVGRkxFbEJRVms3T3pzN096dG5Ra0ZGTVVVc1VVRkJVU3hsUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNhMEpCUVd0Q0xFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhGUVVGRkxFTkJRVU03WjBKQlEzQkVMRmxCUVZrc1pVRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZWQlFWVXNRMEZCUXl3d1EwRkJSeXhEUVVGRExFVkJRVVVzVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZMRzlEUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEYmtVc1QwRkJUeXhIUVVGSExFZEJRVWNzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eE5RVUZKTEZsQlFWa3NUVUZCUnl4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF5eG5Ra0ZCWjBJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNaVUZCWlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8yZENRVVZzU1N4WFFVRlhMRWRCUVVjc1EwRkJReXhEUVVGRE8yZENRVWRrTEZGQlFWRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1RVRkJUU3hKUVVGTExFOUJRVUVzVFVGQlRTeERRVUZETEU5QlFVOHNTMEZCU3l4UFFVRlBMRVZCUVRGQ0xFTkJRVEJDTEVOQlFVTXNRMEZCUXp0eFFrRkZOVVlzUTBGQlFTeFJRVUZSTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJRU3hGUVVGdVFpeDNRa0ZCYlVJN1owSkJRM0pDTEV0QlFWTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0dlFrRkRMMFFzU1VGQlNTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHl4TFFVRkxMRTlCUVU4c1JVRkJSVHQzUWtGRE1VUXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhPelJDUVVOdVF5eEhRVUZITEV0QlFVRTdORUpCUTBnc1VVRkJVU3hWUVVGQk96UkNRVU5TTEZsQlFWa3NZMEZCUVRzMFFrRkRXaXhQUVVGUExGTkJRVUU3TkVKQlExQXNTVUZCU1N4RlFVRkZMRVZCUVVVN05FSkJRMUlzVFVGQlRTeEZRVUZGTEhOQ1FVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRE8zbENRVU16UWl4RFFVRkRPM2RDUVVOR0xGZEJRVmNzUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUTJwQ08ybENRVU5HT3pzN1owSkJSVVFzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF6dHZRa0ZEYmtNc1IwRkJSeXhMUVVGQk8yOUNRVU5JTEZGQlFWRXNWVUZCUVR0dlFrRkRVaXhaUVVGWkxHTkJRVUU3YjBKQlExb3NUMEZCVHl4VFFVRkJPMjlDUVVOUUxFbEJRVWtzUlVGQlJTeEZRVUZGTzI5Q1FVTlNMRTFCUVUwc1JVRkJSU3h6UWtGQllTeERRVUZETEVkQlFVY3NRMEZCUXp0cFFrRkRNMElzUTBGQlF5eERRVUZETzJkQ1FVVklMRmRCUVZjc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtRc1ZVRkJWU3hIUVVGSExHZENRVUZuUWl4RlFVRkZMRU5CUVVNN1owSkJRM1JETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN1owSkJSWFpFTEhGQ1FVRk5MRmxCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlFUczdaMEpCUVdoQ0xGTkJRV2RDTEVOQlFVTTdaMEpCUTJwQ0xGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMSEZDUVVGaExFTkJRVU1zVTBGQlV5eEZRVUZGTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1JVRkJSU3hEUVVGRExFTkJRVU03T3p0blFrRkhja2dzYzBKQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zVjBGQlZ5eERRVUZETEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJXNUdMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhYUVVGWExFTkJRVU1zU1VGQlNTeERRVUZETEhGQ1FVRmhMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEY0Vjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRExGRkJRVkVzUTBGQlNTeEpRVUZKTEZkQlFVMHNSMEZCU3l4RFFVRkRMRU5CUVVNN1owSkJSV2hHTEhGQ1FVRk5MSFZDUVVGVExFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExGZEJRVmNzUTBGQlF5eEZRVUZGTEZkQlFWY3NRMEZCUXl4RlFVRkJPenRuUWtGQk1VVXNVMEZCTUVVc1EwRkJRenRuUWtGRE0wVXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8yZENRVU16UkN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WjBKQlF6RkVMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6czdPenRMUVVNNVJDeERRVUZETEVOQlFVTTdRVUZGU0N4clFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMR3RDUVVGclFpeEZRVUZGTEZWQlFVOHNTMEZCU3l4RlFVRkZMRWxCUVRCRE96czdPenM3WjBKQlJTOUdMRXRCUVVzc1IwRkJSeXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1UwRkJVeXhEUVVGRExGVkJRVU1zVFVGQlRTeEpRVUZMTEU5QlFVRXNUVUZCVFN4RFFVRkRMRTlCUVU4c1MwRkJTeXhKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUV2UWl4RFFVRXJRaXhEUVVGRExFTkJRVU03WjBKQlEzSkhMRWxCUVVrc1MwRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTzI5Q1FVTm9RaXh6UWtGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4M1FrRkJkMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2IwSkJRMnhFTEhOQ1FVRlBPMmxDUVVOU08yZENRVU5MTEUxQlFVMHNSMEZCUnl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1owSkJSWFJFTEhGQ1FVRk5MSEZDUVVGWkxFTkJRVU1zVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4TlFVRk5MRU5CUVVNc1dVRkJXU3hGUVVGRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGQk96dG5Ra0ZCZEVZc1UwRkJjMFlzUTBGQlF6dG5Ra0ZEZGtZc2NVSkJRVTBzZFVKQlFWTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVUU3TzJkQ1FVRTVRaXhUUVVFNFFpeERRVUZETzJkQ1FVVXZRaXh6UWtGQlR5eEpRVUZKTEVWQlFVTTdPenRuUWtGRldpeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4elFrRkJUeXhMUVVGTExFVkJRVU03T3pzN1MwRkZhRUlzUTBGQlF5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogNWNo5LqS5o+bQkJT6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXG4gKi9cbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XG52YXIgaWNvbnZfbGl0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpY29udi1saXRlXCIpKTsgLy8g5paH5a2X44Kz44O844OJ5aSJ5o+b55So44OR44OD44Kx44O844K4XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgZW5jb2RpbmdfamFwYW5lc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW5jb2RpbmctamFwYW5lc2VcIikpO1xuLyoqIOOCueODhuODvOOCv+OCueOCs+ODvOODiTMwNCBfTm90TW9kaWZpZWQgKi9cbnZhciBOT1RfTU9ESUZJRUQgPSAnMzA0JztcbnZhciBSQU5HRV9OT1RfU0FUSVNGSUFCTEUgPSAnNDE2Jztcbi8qKiDjgrnjg6zkuIDopqfjgpLoqq3jgb/ovrzjgoAgKi9cbmV4cG9ydHMucmVhZEJvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXF1ZXN0VXJsLCBsaXN0LCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSBib2FyZFVybCArIFwic3ViamVjdC50eHRcIjtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdTaGlmdF9KSVMnKTtcbiAgICAgICAgICAgICAgICAvLyDjg5Hjg7zjgrnjgZfjgabmoLzntI1cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2guYXBwbHkobGlzdCwgc3RyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gcGFyc2VUaHJlYWRMaXN0KGJvYXJkVXJsLCBsaW5lKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yXzEuc3RhdHVzID09IE5PVF9NT0RJRklFRCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFOT1RfTU9ESUZJRUQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMS5zdGF0dXMgPT0gUkFOR0VfTk9UX1NBVElTRklBQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgVJBTkdFX05PVF9TQVRJU0ZJQUJMRScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBbWVzc2FnZT0nICsgZXJyb3JfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCBsaXN0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vKipcbiAqIOODrOOCueOCkuaKleeov+OBmeOCi1xuICogQHBhcmFtIGhvc3RuYW1lIOODm+OCueODiOWQjeOAgmh0dHBzOi8vaG9nZWhvZ2UvXG4gKiBAcGFyYW0gdGhyZWFkTnVtYmVyIOOCueODrOeVquWPtyAxMjM0NTY3OFxuICogQHBhcmFtIGJvYXJkSWQg5p2/SUQgcGFzdGEwNFxuICogQHBhcmFtIG1lc3NhZ2Ug5oqV56i/5paHXG4gKi9cbmV4cG9ydHMucG9zdFJlcyA9IGZ1bmN0aW9uIChob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1bmljb2RlQXJyYXksIGksIHNqaXNBcnJheSwgZW5jb2RlZEtleXdvcmQsIHJlc3VsdDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkucHVzaChtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzamlzQXJyYXkgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQuY29udmVydCh1bmljb2RlQXJyYXksIHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdTSklTJyxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ1VOSUNPREUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVuY29kZWRLZXl3b3JkID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LnVybEVuY29kZShzamlzQXJyYXkpO1xuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGVuY29kZVVSSUNvbXBvbmVudC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oaG9zdG5hbWUgKyBcInRlc3QvYmJzLmNnaVwiKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oXCJGUk9NPSZNRVNTQUdFPVwiICsgZW5jb2RlZEtleXdvcmQgKyBcIiZtYWlsPXNhZ2Uma2V5PVwiICsgdGhyZWFkTnVtYmVyICsgXCImYmJzPVwiICsgYm9hcmRJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0LnBvc3QoaG9zdG5hbWUgKyBcInRlc3QvYmJzLmNnaVwiLCBcIkZST009Jk1FU1NBR0U9XCIgKyBlbmNvZGVkS2V5d29yZCArIFwiJm1haWw9c2FnZSZrZXk9XCIgKyB0aHJlYWROdW1iZXIgKyBcIiZiYnM9XCIgKyBib2FyZElkLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnKi8qJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1FbmNvZGluZyc6ICdnemlwLCBkZWZsYXRlLCBicicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llOiAnTUFJTD1cInNhZ2VcIjsgTkFNRT1cIlwiJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbnZhciBSZWFkNWNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlYWQ1Y2goKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjgrnoqq3jgb/ovrzjgb9cbiAgICAgICAgICog5byV5pWw44Gn5oyH5a6a44GX44Gf5p2/44GL44KJ44Os44K544KS6Kqt44KAXG4gICAgICAgICAqIOODrOOCueeVquWPt+OCkuaMh+WumuOBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+acgOaWsDHku7blj5blvpdcbiAgICAgICAgICogQHBhcmFtIHRocmVhZFVybCDjgrnjg6xVUkxcbiAgICAgICAgICogQHBhcmFtIHJlc051bSDjg6zjgrnnlarlj7dcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVhZCA9IGZ1bmN0aW9uICh0aHJlYWRVcmwsIHJlc051bSkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlcCwgcmVxdWVzdFVybCwgcmFuZ2UsIG9wdGlvbnMsIHJlc3BvbnNlSnNvbiwgcmVzcG9uc2UsIGhlYWRlcnMsIHN0ciwgcmVzdWx0LCBlcnJvcl8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oYFtSZWFkNWNoXSB0aHJlYWRVcmw9JHt0aHJlYWRVcmx9IHJlc051bT0ke3Jlc051bX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv+OChOacgOe1guaXpeODrOOCueeVquWPt+OBjOOBi+OCj+OBo+OBn+OCieacgOWIneOBi+OCieOBqOOCiuebtOOBmShsYXN0bW9kaWZp44GoIHJhbmdl44Gu44Oq44K744OD44OIKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRocmVhZFVybCAhPSB0aGlzLmxhc3RUaHJlYWRVcmwgfHwgTnVtYmVyLmlzTmFOKHJlc051bSkgfHwgcmVzTnVtIDwgdGhpcy5sYXN0UmVzTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0VGhyZWFkVXJsID0gdGhyZWFkVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE1vZGlmaWVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RCeXRlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5qc11yZXNldGUhISEhISEhISEhISEhISEhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdub3Jlc2V0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwID0gL1xcL3Rlc3RcXC9yZWFkLmNnaShcXC8uKykoXFwvLispXFwvLztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB0aHJlYWRVcmwucmVwbGFjZShyZXAsICckMS9kYXQkMi5kYXQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlID0gdGhpcy5sYXN0Qnl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogMyAqIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2lmLW1vZGlmaWVkLXNpbmNlJzogdGhpcy5sYXN0TW9kaWZpZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiAnYnl0ZXM9JyArIHJhbmdlICsgJy0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzID0gcmVzcG9uc2UuaGVhZGVycztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhc3RNb2RpZmllZOOBqFJhbmdl5pu05paw5Yem55CGXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snbGFzdC1tb2RpZmllZCddICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RNb2RpZmllZCA9IGhlYWRlcnNbJ2xhc3QtbW9kaWZpZWQnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ1NoaWZ0X0pJUycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K544Od44Oz44K544Kq44OW44K444Kn44Kv44OI5L2c5oiQ44CBY29udGVudC1yYW5nZeOBjOOBguOCi+WgtOWQiOOBqOOBquOBhOWgtOWQiOOBp+WHpueQhuOCkuWIhuOBkeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlcnNbJ2NvbnRlbnQtcmFuZ2UnXSA9PSBudWxsIHx8IHRoaXMubGFzdEJ5dGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnJlYWRdY29udGVudC1yYW5nZT0nICsgaGVhZGVyc1snY29udGVudC1yYW5nZSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBwdXJzZU5ld1Jlc3BvbnNlKHN0ciwgcmVzTnVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSByZXN1bHQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFJlc051bWJlciA9IHJlc3VsdC5sYXN0UmVzTnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VEaWZmUmVzcG9uc2Uoc3RyLCByZXNOdW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+W5b6X44OQ44Kk44OI5pWw6KGo56S6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSAhPSBudWxsICYmIHJlc3BvbnNlSnNvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0Qnl0ZSA9IHRoaXMubGFzdEJ5dGUgKyBwYXJzZUludChoZWFkZXJzWydjb250ZW50LWxlbmd0aCddKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucmVhZF1sYXN0Qnl0ZT0nICsgdGhpcy5sYXN0Qnl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSnNvbiA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yXzIuc3RhdHVzID09IE5PVF9NT0RJRklFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+ODrOOCueWPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgU5PVF9NT0RJRklFRCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMi5zdGF0dXMgPT0gUkFOR0VfTk9UX1NBVElTRklBQkxFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT44Os44K55Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBUkFOR0VfTk9UX1NBVElTRklBQkxFJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPjg6zjgrnlj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlSnNvbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pOyB9O1xuICAgICAgICB0aGlzLmxhc3RUaHJlYWRVcmwgPSAnJztcbiAgICAgICAgdGhpcy5sYXN0UmVzTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5sYXN0TW9kaWZpZWQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RCeXRlID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWQ1Y2g7XG59KCkpO1xuLyoqXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcbiAqIOaIu+OCiuOBqOOBl+OBpuODkeODvOOCueOBl+OBn2pzb27jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TjgZlcbiAqIEBwYXJhbSByZXMg5p2/44GL44KJ6L+U5Y2044GV44KM44GfZGF0XG4gKiBAcGFyYW0gcmVzTnVtIOODquOCr+OCqOOCueODiOOBleOCjOOBn+ODrOOCueeVquWPt1xuICovXG52YXIgcHVyc2VOZXdSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIHJlc051bSkge1xuICAgIC8vIOe1kOaenOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyDjg6zjgrnnlarlj7dcbiAgICB2YXIgbnVtID0gMDtcbiAgICAvLyDmlrDnnYDjg6zjgrnjgpLmlLnooYzjgZTjgajjgatTcGxpdOOBmeOCi1xuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcbiAgICAvLyDmlrDnnYDjgarjgZfjgarjgonmiLvjgovjgIJcbiAgICBpZiAocmVzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0LCBsYXN0UmVzTnVtYmVyOiByZXNOdW0gfTtcbiAgICB9XG4gICAgLy8g6YWN5YiX44Gu5pyA5b6M44Gr56m644Gu6KaB57Sg44GM5YWl44KL44GT44Go44GM44GC44KL44Gu44Gn5Y+W44KK6Zmk44GPXG4gICAgaWYgKHJlc0FycmF5W3Jlc0FycmF5Lmxlbmd0aCAtIDFdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXNBcnJheS5wb3AoKTtcbiAgICB9XG4gICAgLy8g44Os44K55oyH5a6a44Gq44GX44Gu5aC05ZCI5pyA5b6M44GuMeS7tuWPluW+l1xuICAgIGlmIChOdW1iZXIuaXNOYU4ocmVzTnVtKSB8fCByZXNOdW0gPCAxKSB7XG4gICAgICAgIG51bSA9IHJlc0FycmF5Lmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBudW0gPSByZXNOdW0gLSAxO1xuICAgIH1cbiAgICAvLyBsb2cuaW5mbyhgbnVtID0gJHtudW19ICByZXNBcnJheUxlbmd0aCA9ICR7cmVzQXJyYXkubGVuZ3RofSAgICR7cmVzQXJyYXlbbnVtXX1gKTtcbiAgICAvLyAx6KGM44GU44Go44Gr44OR44O844K544GZ44KLXG4gICAgZm9yICg7IG51bSA8IHJlc0FycmF5Lmxlbmd0aDsgbnVtKyspIHtcbiAgICAgICAgLy8g44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXG4gICAgICAgIGlmIChyZXNBcnJheVtudW1dLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhcnNlUmVzcG9uc2UocmVzQXJyYXlbbnVtXSwgbnVtICsgMSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOODkeODvOOCueOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOWNtFxuICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0LCBsYXN0UmVzTnVtYmVyOiBudW0gKyAxIH07XG59O1xuLyoqXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcbiAqIOaIu+OCiuOBqOOBl+OBpuODkeODvOOCueOBl+OBn2pzb27jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TjgZlcbiAqIEBwYXJhbSByZXMg5p2/44GL44KJ6L+U5Y2044GV44KM44GfZGF0MeihjOWIhlxuICogQHBhcmFtIHJlc051bSDjg6rjgq/jgqjjgrnjg4jjgZXjgozjgZ/jg6zjgrnnlarlj7dcbiAqL1xudmFyIHB1cnNlRGlmZlJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcywgcmVzTnVtKSB7XG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8g44Os44K555Wq5Y+3XG4gICAgdmFyIG51bSA9IHJlc051bTtcbiAgICAvL+aWsOedgOODrOOCueOCkuaUueihjOOBlOOBqOOBq1NwbGl044GZ44KLXG4gICAgdmFyIHJlc0FycmF5ID0gcmVzLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO1xuICAgIC8vIOaWsOedgOOBquOBl+OBquOCieaIu+OCi+OAglxuICAgIGlmIChyZXNBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIOmFjeWIl+OBruacgOW+jOOBq+epuuOBruimgee0oOOBjOWFpeOCi+OBk+OBqOOBjOOBguOCi+OBruOBp+WPluOCiumZpOOBj1xuICAgICAgICBpZiAocmVzQXJyYXlbcmVzQXJyYXkubGVuZ3RoIC0gMV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJlc0FycmF5LnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUudHJhY2UoJ1tSZWFkNWNoLnB1cnNlRGlmZlJlc3BvbnNlXeWPluW+l+ODrOOCueeVquWPtz0nICsgbnVtKTtcbiAgICAvLzHooYzjgZTjgajjgavjg5Hjg7zjgrnjgZnjgotcbiAgICByZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAvL+ODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VSZXNwb25zZSh2YWx1ZSwgbnVtKSk7XG4gICAgICAgICAgICBudW0rKztcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOODkeODvOOCueOBl+OBn+OCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOWNtFxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuLyoqXG4gKiDjgrnjg6zkuIDopqfjga7jg5Hjg7zjgrlcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcbiAqIEBwYXJhbSBJbnRlZ2VyIC8vIG51bSDjg6zjgrnnlarvvIgw44K544K/44O844OI77yJXG4gKi9cbnZhciBwYXJzZVRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwsIHN1YmplY3RMaW5lKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXG4gICAgLy/jg6zjgrnjga7opoHntKBcbiAgICAvLzA6ZGF05ZCNXG4gICAgLy8xOuOCueODrOOCv+OCpO+8iOODrOOCueaVsO+8iVxuICAgIHZhciBzcGxpdFJlcyA9IHN1YmplY3RMaW5lLnNwbGl0KCc8PicpO1xuICAgIGNvbnNvbGUubG9nKHNwbGl0UmVzKTtcbiAgICB2YXIgZGF0TnVtID0gc3BsaXRSZXNbMF0ucmVwbGFjZSgnLmRhdCcsICcnKTtcbiAgICB2YXIgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSBib2FyZFVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICB2YXIgYm9hcmROYW1lID0gYm9hcmRVcmwucmVwbGFjZShob3N0bmFtZSwgJycpO1xuICAgIHZhciB1cmwgPSBob3N0bmFtZSArIFwidGVzdC9yZWFkLmNnaS9cIiArIGJvYXJkTmFtZSArIGRhdE51bSArIFwiL1wiO1xuICAgIHZhciB0aXRsZVRlbXAgPSBzcGxpdFJlc1sxXTtcbiAgICB2YXIgbmFtZSA9IChfZCA9IChfYyA9IHRpdGxlVGVtcC5tYXRjaCgvKC4qPykgXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzFdKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAn4piF5Y+W5b6X5aSx5pWX4piFJztcbiAgICB2YXIgcmVzTnVtID0gTnVtYmVyKChfZSA9IHRpdGxlVGVtcC5tYXRjaCgvXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lWzBdLnJlcGxhY2UoL1xcKHxcXCkvZywgJycpKTtcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgcmVzTnVtOiByZXNOdW0sXG4gICAgfTtcbn07XG4vKipcbiAqIOODrOOCueOBruODkeODvOOCuVxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcbiAqL1xudmFyIHBhcnNlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCBudW0pIHtcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXG4gICAgLy/jg6zjgrnjga7opoHntKBcbiAgICAvLzA65ZCN5YmNXG4gICAgLy8xOuODoeOCouODiVxuICAgIC8vMjrml6Xku5jjgahJRCDvvIgyMDE5LzExLzAzKOaXpSkgMDg6NTU6MDAgSUQ6a2FuaWthbmnvvInjgb/jgZ/jgYTjgavooajnpLpcbiAgICAvLzM65pys5paHXG4gICAgLy80OuOCueODrOOCv+OCpCDvvIgx44Os44K555uu44Gu44G/77yJXG4gICAgdmFyIHNwbGl0UmVzID0gcmVzLnNwbGl0KCc8PicpO1xuICAgIC8vIOaXpeS7mOOBqElE5YiG6Zui5Yem55CG44CBJyBJRDon44Gn5Yy65YiH44KLXG4gICAgdmFyIGRhdGVJZCA9IHNwbGl0UmVzWzJdLnNwbGl0KCcgSUQ6Jyk7XG4gICAgdmFyIGRhdGUgPSBkYXRlSWRbMF07XG4gICAgdmFyIGlkID0gZGF0ZUlkLmxlbmd0aCA9PT0gMiA/IGRhdGVJZFsxXSA6ICcnO1xuICAgIHZhciByZXNKc29uID0ge1xuICAgICAgICBudW1iZXI6IG51bSxcbiAgICAgICAgbmFtZTogc3BsaXRSZXNbMF0sXG4gICAgICAgIGVtYWlsOiBzcGxpdFJlc1sxXSxcbiAgICAgICAgZGF0ZTogZGF0ZSxcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbM10sXG4gICAgICAgIC8vIHRocmVhZFRpdGxlOiBzcGxpdFJlc1s0XSxcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBpbWdVcmw6ICcnLFxuICAgIH07XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XG4gICAgcmV0dXJuIHJlc0pzb247XG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gUmVhZDVjaDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVmhaRFZqYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEpsWVdRMVkyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEdkRVFVRnJSRHRCUVVOc1JDd3dSRUZCSzBJc1EwRkJReXhuUWtGQlowSTdRVUZEYUVRc09FUkJRU3RDTzBGQlF5OUNMSGRGUVVGNVF6dEJRVVY2UXl3clFrRkJLMEk3UVVGREwwSXNTVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRek5DTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlJYQkRMR2RDUVVGblFqdEJRVU5JTEZGQlFVRXNVMEZCVXl4SFFVRkhMRlZCUVU4c1VVRkJaMEk3T3pzN08yZENRVU40UXl4VlFVRlZMRWRCUVUwc1VVRkJVU3huUWtGQllTeERRVUZETzJkQ1FVTjBReXhKUVVGSkxFZEJRWGxETEVWQlFVVXNRMEZCUXp0blFrRkhhRVFzVDBGQlR5eEhRVUYxUWp0dlFrRkRiRU1zUjBGQlJ5eEZRVUZGTEZWQlFWVTdiMEpCUTJZc1RVRkJUU3hGUVVGRkxFdEJRVXM3YjBKQlEySXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSk8yOUNRVU5xUWl4WlFVRlpMRVZCUVVVc1lVRkJZVHRwUWtGRE5VSXNRMEZCUXpzN096dG5Ra0ZKYVVJc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08yZENRVTh2UWl4SFFVRkhMRWRCUVVjc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN1owSkJRMnhGTEZWQlFWVTdaMEpCUTFZc1NVRkJTU3hEUVVGRExFbEJRVWtzVDBGQlZDeEpRVUZKTEVWQlEwTXNSMEZCUnp0eFFrRkRTQ3hMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETzNGQ1FVTllMRTFCUVUwc1EwRkJReXhWUVVGRExFbEJRVWtzU1VGQlN5eFBRVUZCTEVsQlFVa3NSVUZCU2l4RFFVRkpMRU5CUVVNN2NVSkJRM1JDTEVkQlFVY3NRMEZCUXl4VlFVRkRMRWxCUVVrc1NVRkJTeXhQUVVGQkxHVkJRV1VzUTBGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RFFVRkRMRVZCUVM5Q0xFTkJRU3RDTEVOQlFVTXNSVUZEYWtRN096czdaMEpCUlVZc1NVRkJTU3hQUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NSVUZCUlR0dlFrRkRhRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1owUkJRV2RFTEVOQlFVTXNRMEZCUXp0cFFrRkROMFE3Y1VKQlFVMHNTVUZCU1N4UFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxIRkNRVUZ4UWl4RlFVRkZPMjlDUVVOb1JDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXg1UkVGQmVVUXNRMEZCUXl4RFFVRkRPMmxDUVVOMFJUdHhRa0ZCVFR0dlFrRkRUQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2FVSkJRM3BGTzJkQ1FVTkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenR2UWtGSGRFTXNjMEpCUVU4c1NVRkJTU3hGUVVGRE96czdTMEZEWWl4RFFVRkRPMEZCUlVZN096czdPenRIUVUxSE8wRkJRMVVzVVVGQlFTeFBRVUZQTEVkQlFVY3NWVUZCVHl4UlFVRm5RaXhGUVVGRkxGbEJRVzlDTEVWQlFVVXNUMEZCWlN4RlFVRkZMRTlCUVdVN096czdPMmRDUVVVNVJpeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPMmRDUVVONFFpeExRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF5eE5RVUZOTEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN2IwSkJRM1pETEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMmxDUVVNeFF6dG5Ra0ZEU3l4VFFVRlRMRWRCUVVjc01rSkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNXVUZCV1N4RlFVRkZPMjlDUVVNdlF5eEZRVUZGTEVWQlFVVXNUVUZCVFR0dlFrRkRWaXhKUVVGSkxFVkJRVVVzVTBGQlV6dHBRa0ZEYUVJc1EwRkJReXhEUVVGRE8yZENRVWRITEdOQlFXTXNSMEZCUnl3eVFrRkJVU3hEUVVGRExGTkJRVk1zUTBGQlF5eFRRVUZuUWl4RFFVRkRMRU5CUVVNN1owSkJRelZFTERKRFFVRXlRenRuUWtGRE0wTXNjMEpCUVVjc1EwRkJReXhKUVVGSkxFTkJRVWtzVVVGQlVTeHBRa0ZCWXl4RFFVRkRMRU5CUVVNN1owSkJRM0JETEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHMUNRVUZwUWl4alFVRmpMSFZDUVVGclFpeFpRVUZaTEdGQlFWRXNUMEZCVXl4RFFVRkRMRU5CUVVNN1owSkJRekZGTEhGQ1FVRk5MR1ZCUVVzc1EwRkJReXhKUVVGSkxFTkJRVWtzVVVGQlVTeHBRa0ZCWXl4RlFVRkZMRzFDUVVGcFFpeGpRVUZqTEhWQ1FVRnJRaXhaUVVGWkxHRkJRVkVzVDBGQlV5eEZRVUZGTzNkQ1FVTjZTU3hQUVVGUExFVkJRVVU3TkVKQlExQXNUVUZCVFN4RlFVRkZMRXRCUVVzN05FSkJRMklzWTBGQll5eEZRVUZGTEcxRFFVRnRRenMwUWtGRGJrUXNhVUpCUVdsQ0xFVkJRVVVzYlVKQlFXMUNPelJDUVVOMFF5eE5RVUZOTEVWQlFVVXNjMEpCUVhOQ08zbENRVU12UWp0M1FrRkRSQ3hsUVVGbExFVkJRVVVzU1VGQlNUdHhRa0ZEZEVJc1EwRkJReXhGUVVGQk96dG5Ra0ZTU1N4TlFVRk5MRWRCUVVjc1UwRlJZanM3T3p0TFFVTklMRU5CUVVNN1FVRkZSanRKUVZWRk8xRkJRVUVzYVVKQlMwTTdVVUZGUkRzN096czdPMWRCVFVjN1VVRkRTQ3hUUVVGSkxFZEJRVWNzVlVGQlR5eFRRVUZwUWl4RlFVRkZMRTFCUVdNN096czdPM2RDUVVNM1F5eHBSVUZCYVVVN2QwSkJRMnBGTEd0RVFVRnJSRHQzUWtGRGJFUXNTVUZCU1N4VFFVRlRMRWxCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzU1VGQlNTeE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RlFVRkZPelJDUVVNeFJpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRk5CUVZNc1EwRkJRenMwUWtGREwwSXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03TkVKQlEzcENMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzUTBGQlF5eERRVUZET3pSQ1FVTnNRaXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEc5RFFVRnZReXhEUVVGRExFTkJRVU03ZVVKQlEzSkVPelpDUVVGTk96UkNRVU5NTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03ZVVKQlF6TkNPM2RDUVV0TExFZEJRVWNzUjBGQlJ5eG5RMEZCWjBNc1EwRkJRenQzUWtGRGRrTXNWVUZCVlN4SFFVRkhMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPM2RDUVZsd1JDeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJRenQzUWtGRmRFSXNUMEZCVHl4SFFVRjFRanMwUWtGRGJFTXNSMEZCUnl4RlFVRkZMRlZCUVZVN05FSkJRMllzVFVGQlRTeEZRVUZGTEV0QlFVczdORUpCUTJJc1QwRkJUeXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKT3pSQ1FVTnFRaXhaUVVGWkxFVkJRVVVzWVVGQllUczBRa0ZETTBJc1QwRkJUeXhGUVVGRk8yZERRVU5RTEcxQ1FVRnRRaXhGUVVGRkxFbEJRVWtzUTBGQlF5eFpRVUZaTzJkRFFVTjBReXhMUVVGTExFVkJRVVVzVVVGQlVTeEhRVUZITEV0QlFVc3NSMEZCUnl4SFFVRkhPelpDUVVNNVFqdDVRa0ZEUml4RFFVRkRPenM3TzNkQ1FVdHBRaXh4UWtGQlRTeGxRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVFN08zZENRVUV2UWl4UlFVRlJMRWRCUVVjc1UwRkJiMEk3ZDBKQlJ5OUNMRTlCUVU4c1IwRkJPRUlzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXp0M1FrRkROVVFzZVVKQlFYbENPM2RDUVVONlFpeEpRVUZKTEU5QlFVOHNRMEZCUXl4bFFVRmxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFVkJRVVU3TkVKQlEzQkRMRWxCUVVrc1EwRkJReXhaUVVGWkxFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPM2xDUVVNNVF6dDNRa0ZKU3l4SFFVRkhMRWRCUVVjc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN2QwSkJRMnhGTEN0RFFVRXJRenQzUWtGREwwTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRWxCUVVrc1EwRkJReXhGUVVGRk96UkNRVU14UkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExEaENRVUU0UWl4SFFVRkhMRTlCUVU4c1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZET3pSQ1FVTnVSU3hOUVVGTkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZET3pSQ1FVTTNReXhaUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXpzMFFrRkROMElzU1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4TlFVRk5MRU5CUVVNc1lVRkJZU3hEUVVGRE8zbENRVU16UXpzMlFrRkJUVHMwUWtGRFRDeFpRVUZaTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPM2xDUVVNdlF6dDNRa0ZGUkN4WFFVRlhPM2RDUVVOWUxFbEJRVWtzVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEZsQlFWa3NRMEZCUXl4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk96UkNRVU5vUlN4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96UkNRVU40UlN4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExIbENRVUY1UWl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dDVRa0ZETVVRN096czdkMEpCUlVRc1dVRkJXU3hIUVVGSExFVkJRVVVzUTBGQlF6dDNRa0ZEYkVJc1NVRkJTU3hQUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZsQlFWa3NSVUZCUlRzMFFrRkRhRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc2FVUkJRV2xFTEVOQlFVTXNRMEZCUXp0NVFrRkRPVVE3TmtKQlFVMHNTVUZCU1N4UFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxIRkNRVUZ4UWl4RlFVRkZPelJDUVVOb1JDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXd3UkVGQk1FUXNRMEZCUXl4RFFVRkRPM2xDUVVOMlJUczJRa0ZCVFRzMFFrRkRUQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MlEwRkJOa01zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN2VVSkJRekZGTzNkQ1FVTkVMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYTBKQlFXdENMRU5CUVVNc1EwRkJRenMwUWtGSGRFTXNjMEpCUVU4c1dVRkJXU3hGUVVGRE96czdZVUZEY2tJc1EwRkJRenRSUVdwSFFTeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRVZCUVVVc1EwRkJRenRSUVVONFFpeEpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRSUVVOMlFpeEpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRSUVVONlFpeEpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenRKUVVOd1FpeERRVUZETzBsQk9FWklMR05CUVVNN1FVRkJSQ3hEUVVGRExFRkJOMGRFTEVsQk5rZERPMEZCUlVRN096czdPMGRCUzBjN1FVRkRTQ3hKUVVGTkxHZENRVUZuUWl4SFFVRkhMRlZCUVVNc1IwRkJWeXhGUVVGRkxFMUJRV003U1VGRGJrUXNXVUZCV1R0SlFVTmFMRWxCUVUwc1RVRkJUU3hIUVVGMVF5eEZRVUZGTEVOQlFVTTdTVUZEZEVRc1QwRkJUenRKUVVOUUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVVmFMRzlDUVVGdlFqdEpRVU53UWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExGbEJRVms3U1VGRFdpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM3BDTEU5QlFVOHNSVUZCUlN4TlFVRk5MRkZCUVVFc1JVRkJSU3hoUVVGaExFVkJRVVVzVFVGQlRTeEZRVUZGTEVOQlFVTTdTMEZETVVNN1NVRkRSQ3d5UWtGQk1rSTdTVUZETTBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlF6bERMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU5vUWp0SlFVVkVMRzFDUVVGdFFqdEpRVU51UWl4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVOMFF5eEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRE0wSTdVMEZCVFR0UlFVTk1MRWRCUVVjc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEyeENPMGxCUlVRc2IwWkJRVzlHTzBsQlEzQkdMR0ZCUVdFN1NVRkRZaXhQUVVGUExFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRk8xRkJRMjVETEdOQlFXTTdVVUZEWkN4SlFVRkpMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUXpWQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOd1JEdExRVU5HTzBsQlEwUXNiMEpCUVc5Q08wbEJRM0JDTEU5QlFVOHNSVUZCUlN4TlFVRk5MRkZCUVVFc1JVRkJSU3hoUVVGaExFVkJRVVVzUjBGQlJ5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUXpWRExFTkJRVU1zUTBGQlF6dEJRVVZHT3pzN096dEhRVXRITzBGQlEwZ3NTVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eFZRVUZETEVkQlFWY3NSVUZCUlN4TlFVRmpPMGxCUTNCRUxGZEJRVmM3U1VGRFdDeEpRVUZOTEUxQlFVMHNSMEZCZFVNc1JVRkJSU3hEUVVGRE8wbEJRM1JFTEU5QlFVODdTVUZEVUN4SlFVRkpMRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU03U1VGRmFrSXNiVUpCUVcxQ08wbEJRMjVDTEVsQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTTdTVUZEZWtNc1dVRkJXVHRKUVVOYUxFbEJRVWtzVVVGQlVTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVN1VVRkRla0lzVDBGQlR5eE5RVUZOTEVOQlFVTTdTMEZEWmp0VFFVRk5PMUZCUTB3c01rSkJRVEpDTzFGQlF6TkNMRWxCUVVrc1VVRkJVU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU1zUlVGQlJUdFpRVU0zUXl4UlFVRlJMRU5CUVVNc1IwRkJSeXhGUVVGRkxFTkJRVU03VTBGRGFFSTdTMEZEUmp0SlFVVkVMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zYjBOQlFXOURMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRE1VUXNXVUZCV1R0SlFVTmFMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eExRVUZMTzFGQlEzSkNMR0ZCUVdFN1VVRkRZaXhKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzFsQlEzWkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8xTkJRMUE3U1VGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVVklMRzlDUVVGdlFqdEpRVU53UWl4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOb1FpeERRVUZETEVOQlFVTTdRVUZGUmpzN096dEhRVWxITzBGQlEwZ3NTVUZCVFN4bFFVRmxMRWRCUVVjc1ZVRkJReXhSUVVGblFpeEZRVUZGTEZkQlFXMUNPenRKUVVNMVJDeGxRVUZsTzBsQlEyWXNUMEZCVHp0SlFVTlFMRkZCUVZFN1NVRkRVaXhoUVVGaE8wbEJRMklzU1VGQlRTeFJRVUZSTEVkQlFVY3NWMEZCVnl4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEpRVU42UXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzBsQlEzUkNMRWxCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1RVRkJUU3hGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETzBsQlJTOURMRWxCUVUwc1VVRkJVU3hsUVVGSExGRkJRVkVzUTBGQlF5eExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zTUVOQlFVY3NRMEZCUXl4dlEwRkJTeXhGUVVGRkxFTkJRVU03U1VGRGFFVXNTVUZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFJRVUZSTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1NVRkRha1FzU1VGQlRTeEhRVUZITEVkQlFVMHNVVUZCVVN4elFrRkJhVUlzVTBGQlV5eEhRVUZITEUxQlFVMHNUVUZCUnl4RFFVRkRPMGxCUlRsRUxFbEJRVTBzVTBGQlV5eEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVVNVFpeEpRVUZOTEVsQlFVa3NaVUZCVnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRMREJEUVVGSExFTkJRVU1zYjBOQlFVc3NVVUZCVVN4RFFVRkRPMGxCUTNoRkxFbEJRVTBzVFVGQlRTeEhRVUZITEUxQlFVMHNUMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5d3dRMEZCUnl4RFFVRkRMRVZCUVVVc1QwRkJUeXhEUVVGRExGRkJRVkVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXp0SlFVVTVSU3haUVVGWk8wbEJRMW9zVDBGQlR6dFJRVU5NTEVkQlFVY3NTMEZCUVR0UlFVTklMRWxCUVVrc1RVRkJRVHRSUVVOS0xFMUJRVTBzVVVGQlFUdExRVU5RTEVOQlFVTTdRVUZEU2l4RFFVRkRMRU5CUVVNN1FVRkZSanM3T3p0SFFVbEhPMEZCUTBnc1NVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlF5eEhRVUZYTEVWQlFVVXNSMEZCVnp0SlFVTTNReXhsUVVGbE8wbEJRMllzVDBGQlR6dEpRVU5RTEUxQlFVMDdTVUZEVGl4UFFVRlBPMGxCUTFBc2IwUkJRVzlFTzBsQlEzQkVMRTFCUVUwN1NVRkRUaXhwUWtGQmFVSTdTVUZEYWtJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVF5eDFRa0ZCZFVJN1NVRkRka0lzU1VGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhKUVVGTkxFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkRka0lzU1VGQlRTeEZRVUZGTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTFCUVUwc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzBsQlJXaEVMRWxCUVUwc1QwRkJUeXhIUVVGblFqdFJRVU16UWl4TlFVRk5MRVZCUVVVc1IwRkJSenRSUVVOWUxFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUlVGQlJTeEpRVUZKTzFGQlExWXNTVUZCU1N4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03VVVGRGFrSXNORUpCUVRSQ08xRkJRelZDTEVWQlFVVXNSVUZCUlN4RlFVRkZPMUZCUTA0c1RVRkJUU3hGUVVGRkxFVkJRVVU3UzBGRFdDeERRVUZETzBsQlJVWXNXVUZCV1R0SlFVTmFMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMnBDTEVOQlFVTXNRMEZCUXp0QlFVVkdMR3RDUVVGbExFOUJRVThzUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIGF4aW9zXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImF4aW9zXCIpKTtcbnZhciBpY29udl9saXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImljb252LWxpdGVcIikpOyAvLyDmloflrZfjgrPjg7zjg4nlpInmj5vnlKjjg5Hjg4PjgrHjg7zjgrhcbnZhciByZWFkU2l0YXJhYmFfMSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9yZWFkU2l0YXJhYmFcIikpOyAvLyDjgZfjgZ/jgonjgbDoqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcbnZhciBSZWFkNWNoXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUmVhZDVjaFwiKSk7IC8vIDVjaOS6kuaPm+adv+iqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xuLyoqXG4gKiDmjrLnpLrmnb/jga7jg6zjgrnjgpLlj5blvpfjgZnjgotcbiAqIEBwYXJhbSB0aHJlYWRVcmwg44K544Os44GuVVJMXG4gKiBAcGFyYW0gcmVzTnVtIOOBk+OBrueVquWPt+S7pemZjeOCkuWPluW+l+OBmeOCi+OAguaMh+WumuOBl+OBquOBhOWgtOWQiOOBr+acgOaWsDHku7bjgpLlj5blvpfjgIJcbiAqL1xuZXhwb3J0cy5nZXRSZXMgPSBmdW5jdGlvbiAoYmJzTW9kdWxlLCB0aHJlYWRVcmwsIHJlc051bSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzcG9uc2UsIGVfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJic01vZHVsZS5yZWFkKHRocmVhZFVybCwgcmVzTnVtKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFtnZXRSZXMuanNdIGZldGNoICR7dGhyZWFkVXJsfSByZXNOdW0gPSAke3Jlc051bX0sIHJlc3VsdCA9ICR7cmVzcG9uc2UubGVuZ3RofWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZS5tYXAoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXMpLCB7IGltZ1VybDogJycgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlXzEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBbXV07XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5leHBvcnRzLmdldFRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNpdGFyYWJhRG9tYWluO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHNpdGFyYWJhRG9tYWluID0gJ2piYnMuc2hpdGFyYWJhLm5ldCc7XG4gICAgICAgICAgICAgICAgaWYgKCEoYm9hcmRVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVhZFNpdGFyYWJhXzEucmVhZEJvYXJkKGJvYXJkVXJsKV07XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIFJlYWQ1Y2hfMS5yZWFkQm9hcmQoYm9hcmRVcmwpXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuZXhwb3J0cy5wb3N0UmVzcG9uc2UgPSBmdW5jdGlvbiAoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2l0YXJhYmFEb21haW47XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKFwiW3Bvc3RSZXNwb25zZV0gXCIgKyBob3N0bmFtZSArIFwiIFwiICsgdGhyZWFkTnVtYmVyICsgXCIgXCIgKyBib2FyZElkKTtcbiAgICAgICAgICAgICAgICBzaXRhcmFiYURvbWFpbiA9ICdqYmJzLnNoaXRhcmFiYS5uZXQnO1xuICAgICAgICAgICAgICAgIGlmICghKGhvc3RuYW1lLmluZGV4T2Yoc2l0YXJhYmFEb21haW4pICE9PSAtMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlYWRTaXRhcmFiYV8xLnBvc3RSZXMoaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZCwgbWVzc2FnZSldO1xuICAgICAgICAgICAgY2FzZSAxOiBcbiAgICAgICAgICAgIC8vIFVSTOOBq+OBl+OBn+OCieOBsOODieODoeOCpOODs+WQjeOBjOWFpeOBo+OBpuOCjOOBsOOBl+OBn+OCieOBsFxuICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIFJlYWQ1Y2hfMS5wb3N0UmVzKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLypcbiAqIFVSTOOCkuOBv+OBpuOBqeOBk+OBrkJCU+OBi+WIpOWumuOBl+OBpuS9v+eUqOOBmeOCi+ODouOCuOODpeODvOODq+OCkui/lOWNtOOBmeOCi1xuICovXG5leHBvcnRzLmFuYWx5c0JCU05hbWUgPSBmdW5jdGlvbiAodGhyZWFkVXJsKSB7XG4gICAgLy8g44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCNXG4gICAgdmFyIHNpdGFyYWJhRG9tYWluID0gJ2piYnMuc2hpdGFyYWJhLm5ldCc7XG4gICAgaWYgKHRocmVhZFVybC5pbmRleE9mKHNpdGFyYWJhRG9tYWluKSAhPT0gLTEpIHtcbiAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXG4gICAgICAgIHZhciBzaXRhcmFiYSA9IG5ldyByZWFkU2l0YXJhYmFfMS5kZWZhdWx0KCk7XG4gICAgICAgIHJldHVybiBzaXRhcmFiYTtcbiAgICB9XG4gICAgLy8g44Gp44GT44Gr44KC6Kmy5b2T44GX44Gq44GL44Gj44Gf44KJ44Go44KK44GC44GI44GaNWNo44GnXG4gICAgLy8g44GT44Gu6L6644KC5a++5b+c44OJ44Oh44Kk44Oz44Oq44K544OI44Go44GL5L2c44Gj44Gm44Gh44KD44KT44Go5Yik5a6a44GX44Gf44G744GG44GM44KI44GV44Gd44GGXG4gICAgdmFyIHJlYWQ1Y2ggPSBuZXcgUmVhZDVjaF8xLmRlZmF1bHQoKTtcbiAgICByZXR1cm4gcmVhZDVjaDtcbn07XG4vKiog44K544Os44GuVVJM44GL44KJ5p2/5oOF5aCx44KS5Y+W5b6XICovXG5leHBvcnRzLnRocmVhZFVybFRvQm9hcmRJbmZvID0gZnVuY3Rpb24gKHRocmVhZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2l0YXJhYmFEb21haW4sIHJlc3VsdCwgYm9hcmRVcmwsIHRlbXBVcmwsIGVuY29kaW5nLCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCBlXzI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ25nJyxcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRVcmw6IHRocmVhZFVybCxcbiAgICAgICAgICAgICAgICAgICAgYm9hcmROYW1lOiAn4piF5Y+W5b6X5aSx5pWX4piFJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJvYXJkVXJsID0gJyc7XG4gICAgICAgICAgICAgICAgdGVtcFVybCA9IHRocmVhZFVybDtcbiAgICAgICAgICAgICAgICB0ZW1wVXJsID0gdGVtcFVybC5yZXBsYWNlKC9cXC9sXFxkKyQvLCAnLycpO1xuICAgICAgICAgICAgICAgIGlmICghdGVtcFVybC5tYXRjaCgvLipcXC8kLykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFVybCArPSAnLyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVuY29kaW5nID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOOCueODrDogaHR0cHM6Ly9qYmJzLnNoaXRhcmFiYS5uZXQvYmJzL3JlYWQuY2dpL2dhbWUvNTE2MzgvMTU4MTgzOTI2Ni9cbiAgICAgICAgICAgICAgICAgICAgLy8g5p2/OiBodHRwczovL2piYnMuc2hpdGFyYWJhLm5ldC9nYW1lLzUxNjM4L1xuICAgICAgICAgICAgICAgICAgICAvLyDoqK3lrpo6IGh0dHBzOi8vamJicy5zaGl0YXJhYmEubmV0L2Jicy9hcGkvc2V0dGluZy5jZ2kvZ2FtZS81MTYzOC9cbiAgICAgICAgICAgICAgICAgICAgZW5jb2RpbmcgPSAnRVVDLUpQJztcbiAgICAgICAgICAgICAgICAgICAgLy8g5p2/44GL44K544Os44GL5Yik5a6aXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wVXJsLm1hdGNoKCdyZWFkLmNnaScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjgrnjg6xcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsLnJlcGxhY2UoJ2piYnMuc2hpdGFyYWJhLm5ldC9iYnMvcmVhZC5jZ2kvJywgJycpLnJlcGxhY2UoL2h0dHBzPzpcXC9cXC8vLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wVXJsID0gdGVtcFVybC5tYXRjaCgvKC4rKVxcLy4rXFwvJC8pWzFdICsgJy8nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRVcmwgPSBcImh0dHA6Ly9qYmJzLnNoaXRhcmFiYS5uZXQvXCIgKyB0ZW1wVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IFwiaHR0cDovL2piYnMuc2hpdGFyYWJhLm5ldC9iYnMvYXBpL3NldHRpbmcuY2dpL1wiICsgdGVtcFVybDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRVcmwgPSB0ZW1wVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IHRlbXBVcmwucmVwbGFjZSgnamJicy5zaGl0YXJhYmEubmV0LycsICcnKS5yZXBsYWNlKC9odHRwcz86XFwvXFwvLywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IFwiaHR0cDovL2piYnMuc2hpdGFyYWJhLm5ldC9iYnMvYXBpL3NldHRpbmcuY2dpL1wiICsgdGVtcFVybDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g44K544OsOiBodHRwczovL2Jicy5qcG5rbi5jb20vdGVzdC9yZWFkLmNnaS9wYXN0YTA0LzE1ODY3OTQ2MjMvXG4gICAgICAgICAgICAgICAgICAgIC8vIOadvzogaHR0cHM6Ly9iYnMuanBua24uY29tL3Bhc3RhMDQvXG4gICAgICAgICAgICAgICAgICAgIC8vIOioreWumjogaHR0cHM6Ly9iYnMuanBua24uY29tL3Bhc3RhMDQvU0VUVElORy5UWFRcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RpbmcgPSAnU0hJRlQtSklTJztcbiAgICAgICAgICAgICAgICAgICAgLy8g5p2/44GL44K544Os44GL5Yik5a6aXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZW1wVXJsLm1hdGNoKC90ZXN0XFwvcmVhZC5jZ2lcXC8uK1xcLy4rXFwvLykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOOCueODrFxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IHRlbXBVcmwucmVwbGFjZSgndGVzdC9yZWFkLmNnaS8nLCAnJykubWF0Y2goLyguKylcXC8uK1xcLyQvKVsxXSArIFwiL1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmRVcmwgPSB0ZW1wVXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFVybCA9IHRlbXBVcmwgKyBcIlNFVFRJTkcuVFhUXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnb9cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkVXJsID0gdGVtcFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBVcmwgPSB0ZW1wVXJsICsgXCJTRVRUSU5HLlRYVFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW3RlbXBVcmxdIFwiICsgdGVtcFVybCArIFwiIFtib2FyZFVybF0gXCIgKyBib2FyZFVybCk7XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB0ZW1wVXJsLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgZW5jb2RpbmcpO1xuICAgICAgICAgICAgICAgICAgICBzdHIuc3BsaXQoL1xcbi9nKS5tYXAoZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVkID0gdGV4dC5tYXRjaCgvQkJTX1RJVExFPSguKykvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmJvYXJkTmFtZSA9IG1hdGNoZWRbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmJvYXJkVXJsID0gYm9hcmRVcmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXR1cyA9ICdvayc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcign44Gq44KT44GL44Ko44Op44O8Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVoyVjBVbVZ6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2laMlYwVW1WekxuUnpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlFVRXNPRVJCUVN0Q08wRkJReTlDTEdkRVFVRnJSRHRCUVVOc1JDd3dSRUZCSzBJc1EwRkJReXhuUWtGQlowSTdRVUZGYUVRc05rUkJRVFJITEVOQlFVTXNhVUpCUVdsQ08wRkJRemxJTEcxRVFVRnpSaXhEUVVGRExHMUNRVUZ0UWp0QlFVVXhSenM3T3p0SFFVbEhPMEZCUTFVc1VVRkJRU3hOUVVGTkxFZEJRVWNzVlVGQlR5eFRRVUZ6UXl4RlFVRkZMRk5CUVdsQ0xFVkJRVVVzVFVGQll6czdPenM3TzJkQ1FVZHFSaXh4UWtGQlRTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlFUczdaMEpCUVd4RUxGRkJRVkVzUjBGQlJ5eFRRVUYxUXp0blFrRkRlRVFzYVVkQlFXbEhPMmRDUVVWcVJ5eHpRa0ZCVHl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVU1zUjBGQlJ6dDNRa0ZEZEVJc05rSkJRMHNzUjBGQlJ5eExRVU5PTEUxQlFVMHNSVUZCUlN4RlFVRkZMRWxCUTFZN2IwSkJRMG9zUTBGQlF5eERRVUZETEVWQlFVTTdPenRuUWtGRlNDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4elFrRkJUeXhGUVVGRkxFVkJRVU03T3pzN1MwRkZZaXhEUVVGRE8wRkJSVmNzVVVGQlFTeGhRVUZoTEVkQlFVY3NWVUZCVHl4UlFVRm5RanM3T3pzN1owSkJRelZETEdOQlFXTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dHhRa0ZEZUVNc1EwRkJRU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQkxFVkJRWFpETEhkQ1FVRjFRenRuUWtGSGJFTXNjVUpCUVUwc2QwSkJRV3RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVFN08xbEJSbnBETERCQ1FVRXdRanRaUVVNeFFpeEZRVUZGTzFsQlEwWXNjMEpCUVU4c1UwRkJhME1zUlVGQlF6dHZRa0ZGYmtNc2NVSkJRVTBzYlVKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJRVHR2UWtGQmJrTXNjMEpCUVU4c1UwRkJORUlzUlVGQlF6czdPMHRCUlhaRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRlBMRkZCUVdkQ0xFVkJRVVVzV1VGQmIwSXNSVUZCUlN4UFFVRmxMRVZCUVVVc1QwRkJaVHM3T3pzN1owSkJRM3BITEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZyUWl4UlFVRlJMRk5CUVVrc1dVRkJXU3hUUVVGSkxFOUJRVk1zUTBGQlF5eERRVUZETzJkQ1FVVTFSQ3hqUVVGakxFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN2NVSkJRM2hETEVOQlFVRXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVN4RlFVRjJReXgzUWtGQmRVTTdaMEpCUld4RExIRkNRVUZOTEhOQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGQk96dFpRVVIyUlN3d1FrRkJNRUk3V1VGRE1VSXNjMEpCUVU4c1UwRkJaMFVzUlVGQlF6dHZRa0ZGYWtVc2NVSkJRVTBzYVVKQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUVR0dlFrRkJha1VzYzBKQlFVOHNVMEZCTUVRc1JVRkJRenM3TzB0QlJYSkZMRU5CUVVNN1FVRkZSanM3UjBGRlJ6dEJRVU5WTEZGQlFVRXNZVUZCWVN4SFFVRkhMRlZCUVVNc1UwRkJhVUk3U1VGRE4wTXNXVUZCV1R0SlFVTmFMRWxCUVUwc1kwRkJZeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMGxCUlRWRExFbEJRVWtzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4alFVRmpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdFJRVU0xUXl3d1FrRkJNRUk3VVVGRE1VSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1NVRkJTU3h6UWtGQldTeEZRVUZGTEVOQlFVTTdVVUZEY0VNc1QwRkJUeXhSUVVGUkxFTkJRVU03UzBGRGFrSTdTVUZEUkN4M1FrRkJkMEk3U1VGRGVFSXNiME5CUVc5RE8wbEJRM0JETEVsQlFVMHNUMEZCVHl4SFFVRkhMRWxCUVVrc2FVSkJRVThzUlVGQlJTeERRVUZETzBsQlF6bENMRTlCUVU4c1QwRkJUeXhEUVVGRE8wRkJRMnBDTEVOQlFVTXNRMEZCUXp0QlFVVkdMSEZDUVVGeFFqdEJRVU5TTEZGQlFVRXNiMEpCUVc5Q0xFZEJRVWNzVlVGQlR5eFRRVUZwUWpzN096czdaMEpCUTNCRUxHTkJRV01zUjBGQlJ5eHZRa0ZCYjBJc1EwRkJRenRuUWtGRmRFTXNUVUZCVFN4SFFVbFNPMjlDUVVOR0xFMUJRVTBzUlVGQlJTeEpRVUZKTzI5Q1FVTmFMRkZCUVZFc1JVRkJSU3hUUVVGVE8yOUNRVU51UWl4VFFVRlRMRVZCUVVVc1VVRkJVVHRwUWtGRGNFSXNRMEZCUXp0blFrRkZSU3hSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVZGtMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU03WjBKQlEzaENMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRuUWtGRk1VTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdiMEpCUXpOQ0xFOUJRVThzU1VGQlNTeEhRVUZITEVOQlFVTTdhVUpCUTJoQ08yZENRVVZITEZGQlFWRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1owSkJSV3hDTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0dlFrRkRNVU1zY1VWQlFYRkZPMjlDUVVOeVJTdzBRMEZCTkVNN2IwSkJRelZETEdsRlFVRnBSVHR2UWtGRmFrVXNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJRenR2UWtGRmNFSXNWVUZCVlR0dlFrRkRWaXhKUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN2QwSkJRemRDTEV0QlFVczdkMEpCUTB3c1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNhME5CUVd0RExFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMR0ZCUVdFc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dDNRa0ZETjBZc1QwRkJUeXhIUVVGSkxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNZVUZCWVN4RFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzNkQ1FVVjZSQ3hSUVVGUkxFZEJRVWNzSzBKQlFUWkNMRTlCUVZNc1EwRkJRenQzUWtGRGJFUXNUMEZCVHl4SFFVRkhMRzFFUVVGcFJDeFBRVUZUTEVOQlFVTTdjVUpCUTNSRk8zbENRVUZOTzNkQ1FVTk1MRWxCUVVrN2QwSkJRMG9zVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXp0M1FrRkRia0lzVDBGQlR5eEhRVUZITEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc2NVSkJRWEZDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExHRkJRV0VzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0M1FrRkRhRVlzVDBGQlR5eEhRVUZITEcxRVFVRnBSQ3hQUVVGVExFTkJRVU03Y1VKQlEzUkZPMmxDUVVOR08zRkNRVUZOTzI5Q1FVTk1MRGhFUVVFNFJEdHZRa0ZET1VRc2IwTkJRVzlETzI5Q1FVTndReXhuUkVGQlowUTdiMEpCUldoRUxGRkJRVkVzUjBGQlJ5eFhRVUZYTEVOQlFVTTdiMEpCUlhaQ0xGVkJRVlU3YjBKQlExWXNTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRVZCUVVVN2QwSkJRemRETEV0QlFVczdkMEpCUTB3c1QwRkJUeXhIUVVGUExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMR0ZCUVdFc1EwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eE5RVUZITEVOQlFVTTdkMEpCUTNaR0xGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdkMEpCUTI1Q0xFOUJRVThzUjBGQlRTeFBRVUZQTEdkQ1FVRmhMRU5CUVVNN2NVSkJRMjVETzNsQ1FVRk5PM2RDUVVOTUxFbEJRVWs3ZDBKQlEwb3NVVUZCVVN4SFFVRkhMRTlCUVU4c1EwRkJRenQzUWtGRGJrSXNUMEZCVHl4SFFVRk5MRTlCUVU4c1owSkJRV0VzUTBGQlF6dHhRa0ZEYmtNN2FVSkJRMFk3WjBKQlJVUXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhsUVVGaExFOUJRVThzYjBKQlFXVXNVVUZCVlN4RFFVRkRMRU5CUVVNN096czdaMEpCUlc1RUxFOUJRVThzUjBGQmRVSTdiMEpCUTJ4RExFZEJRVWNzUlVGQlJTeFBRVUZQTzI5Q1FVTmFMRTFCUVUwc1JVRkJSU3hMUVVGTE8yOUNRVU5pTEU5QlFVOHNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTVHR2UWtGRGFrSXNXVUZCV1N4RlFVRkZMR0ZCUVdFN2FVSkJRelZDTEVOQlFVTTdaMEpCUldVc2NVSkJRVTBzWlVGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkJPenRuUWtGQkwwSXNVVUZCVVN4SFFVRkhMRk5CUVc5Q08yZENRVU55UXl4SlFVRkpMRkZCUVZFc1EwRkJReXhOUVVGTkxFZEJRVWNzUjBGQlJ5eEZRVUZGTzI5Q1FVVnVRaXhIUVVGSExFZEJRVWNzYjBKQlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03YjBKQlJTOUVMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVVNc1NVRkJXVHQzUWtGRGFFTXNTVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRE8zZENRVU0zUXl4SlFVRkpMRTlCUVU4c1JVRkJSVHMwUWtGRFdDeE5RVUZOTEVOQlFVTXNVMEZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czBRa0ZET1VJc1RVRkJUU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTTdORUpCUXpOQ0xFMUJRVTBzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRPM2xDUVVOMFFqdHZRa0ZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRwUWtGRFNqczdPenRuUWtGRlJDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6czdiMEpCUjNSQ0xITkNRVUZQTEUxQlFVMHNSVUZCUXpzN08wdEJRMllzUTBGQlF5SjkiLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIOOBl+OBn+OCieOBsOiqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xuICovXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xudmFyIGljb252X2xpdGVfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiaWNvbnYtbGl0ZVwiKSk7IC8vIOaWh+Wtl+OCs+ODvOODieWkieaPm+eUqOODkeODg+OCseODvOOCuFxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xudmFyIGVuY29kaW5nX2phcGFuZXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVuY29kaW5nLWphcGFuZXNlXCIpKTtcbi8qKiDjgrnjg6zkuIDopqfjgpLoqq3jgb/ovrzjgoAgKi9cbmV4cG9ydHMucmVhZEJvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXF1ZXN0VXJsLCBsaXN0LCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSBib2FyZFVybCArIFwic3ViamVjdC50eHRcIjtcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdFVUMtSlAnKTtcbiAgICAgICAgICAgICAgICAvLyDjg5Hjg7zjgrnjgZfjgabmoLzntI1cbiAgICAgICAgICAgICAgICBsaXN0LnB1c2guYXBwbHkobGlzdCwgc3RyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbTsgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gcGFyc2VUaHJlYWRMaXN0KGJvYXJkVXJsLCBsaW5lKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBbWVzc2FnZT0nICsgZXJyb3JfMS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8qKlxuICog44Os44K544KS5oqV56i/44GZ44KLXG4gKiBAcGFyYW0gaG9zdG5hbWUg44Ob44K544OI5ZCN44CCaHR0cHM6Ly9ob2dlaG9nZS9cbiAqIEBwYXJhbSB0aHJlYWROdW1iZXIg44K544Os55Wq5Y+3IDEyMzQ1Njc4XG4gKiBAcGFyYW0gYm9hcmRJZCDmnb9JRCBwYXN0YTA0XG4gKiBAcGFyYW0gbWVzc2FnZSDmipXnqL/mlodcbiAqL1xuZXhwb3J0cy5wb3N0UmVzID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVuaWNvZGVBcnJheSwgaSwgc2ppc0FycmF5LCBlbmNvZGVkS2V5d29yZCwgZGlyLCBiYnMsIHJlc3VsdDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbWVzc2FnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkucHVzaChtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzamlzQXJyYXkgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQuY29udmVydCh1bmljb2RlQXJyYXksIHtcbiAgICAgICAgICAgICAgICAgICAgdG86ICdFVUNKUCcsXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdVTklDT0RFJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlbmNvZGVkS2V5d29yZCA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC51cmxFbmNvZGUoc2ppc0FycmF5KTtcbiAgICAgICAgICAgICAgICBkaXIgPSBib2FyZElkLnNwbGl0KCcvJylbMF07XG4gICAgICAgICAgICAgICAgYmJzID0gYm9hcmRJZC5zcGxpdCgnLycpWzFdO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdC5wb3N0KGhvc3RuYW1lICsgXCJiYnMvd3JpdGUuY2dpL1wiICsgYm9hcmRJZCArIFwiL1wiICsgdGhyZWFkTnVtYmVyICsgXCIvXCIsIFwiZGlyPVwiICsgZGlyICsgXCImYmJzPVwiICsgYmJzICsgXCIma2V5PVwiICsgdGhyZWFkTnVtYmVyICsgXCImdGltZT1cIiArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgXCImbmFtZT0mTUFJTD1zYWdlJk1FU1NBR0U9XCIgKyBlbmNvZGVkS2V5d29yZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJyovKicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnZ3ppcCwgZGVmbGF0ZSwgYnInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZmVyZXI6IFwiXCIgKyBob3N0bmFtZSArIGJvYXJkSWQgKyBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb29raWU6ICdNQUlMPVwic2FnZVwiOyBOQU1FPVwiXCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLyoqXG4gKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAqL1xudmFyIFJlYWRTaXRhcmFiYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFkU2l0YXJhYmEoKSB7XG4gICAgICAgIC8vIGNvbnN0cnVjdG9yKCkge31cbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOOCueiqreOBv+i+vOOBv1xuICAgICAgICAgKiBAZGVzY3JpcHRpb24g5byV5pWw44Gn5oyH5a6a44GX44Gf5p2/44GL44KJ44Os44K544KS6Kqt44KA44CCXG4gICAgICAgICAqIEBkZXNjcmlwdGlvbiDjg6zjgrnnlarlj7fjgpLmjIflrprjgZfjgabjgYTjgarjgYTloLTlkIjjga/mnIDmlrAx5Lu25Y+W5b6XXG4gICAgICAgICAqIEBwYXJhbSB0aHJlYWRVcmwg44K544OsVVJMXG4gICAgICAgICAqIEBwYXJhbSByZXNOdW0g44Os44K555Wq5Y+3XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWQgPSBmdW5jdGlvbiAodGhyZWFkVXJsLCByZXNOdW0pIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0VXJsLCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCByZXNwb25zZUpzb247XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gdGhyZWFkVXJsLnJlcGxhY2UoJ3JlYWQuY2dpJywgJ3Jhd21vZGUuY2dpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzTnVtID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOOCueeVquWPt+OBjOOBguOCi+WgtOWQiOODrOOCueeVquWPt+S7pemZjeOCkuWPluW+l1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgKz0gcmVzTnVtICsgJy0nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K555Wq5Y+344GM44Gq44GE5aC05ZCI5pyA5paw44GuMeS7tuWPluW+l1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgKz0gJ2wxJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZXF1ZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGF4aW9zXzEuZGVmYXVsdChvcHRpb25zKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gZGVjb2RlVW5pY29kZVN0cihpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdFVUMtSlAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBwdXJzZU5ld1Jlc3BvbnNlKHN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VKc29uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IH07XG4gICAgfVxuICAgIHJldHVybiBSZWFkU2l0YXJhYmE7XG59KCkpO1xuLyoqXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcbiAqIEBwYXJhbSByZXNcbiAqL1xudmFyIHB1cnNlTmV3UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8g5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcbiAgICB2YXIgcmVzQXJyYXkgPSByZXMuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XG4gICAgLy8gMeihjOOBlOOBqOOBq+ODkeODvOOCueOBmeOCi1xuICAgIHJlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIC8vIOODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHVyc2VSZXNwb25zZSh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIOOCueODrOS4gOimp+OBruODkeODvOOCuVxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcbiAqL1xudmFyIHBhcnNlVGhyZWFkTGlzdCA9IGZ1bmN0aW9uIChib2FyZFVybCwgc3ViamVjdExpbmUpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcbiAgICAvL+ODrOOCueOBruimgee0oFxuICAgIC8vMDpkYXTlkI1cbiAgICAvLzE644K544Os44K/44Kk77yI44Os44K55pWw77yJXG4gICAgdmFyIHNwbGl0UmVzID0gc3ViamVjdExpbmUuc3BsaXQoJywnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzcGxpdFJlcyk7XG4gICAgdmFyIGRhdE51bSA9IHNwbGl0UmVzWzBdLnJlcGxhY2UoJy5jZ2knLCAnJyk7XG4gICAgdmFyIGhvc3RuYW1lID0gKF9iID0gKF9hID0gYm9hcmRVcmwubWF0Y2goL15odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgdmFyIGJvYXJkTmFtZSA9IGJvYXJkVXJsLnJlcGxhY2UoaG9zdG5hbWUsICcnKTtcbiAgICB2YXIgdXJsID0gaG9zdG5hbWUgKyBcImJicy9yZWFkLmNnaS9cIiArIGJvYXJkTmFtZSArIGRhdE51bSArIFwiL1wiO1xuICAgIC8vIGxvZy5pbmZvKGAke2hvc3RuYW1lfSAgJHtib2FyZE5hbWV9ICR7ZGF0TnVtfWApO1xuICAgIHZhciB0aXRsZVRlbXAgPSBzcGxpdFJlc1sxXTtcbiAgICB2YXIgbmFtZSA9IChfZCA9IChfYyA9IHRpdGxlVGVtcC5tYXRjaCgvKC4qPylcXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICfimIXlj5blvpflpLHmlZfimIUnO1xuICAgIHZhciByZXNOdW0gPSBOdW1iZXIoKF9lID0gdGl0bGVUZW1wLm1hdGNoKC9cXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VbMF0ucmVwbGFjZSgvXFwofFxcKS9nLCAnJykpO1xuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxuICAgIHJldHVybiB7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICByZXNOdW06IHJlc051bSxcbiAgICB9O1xufTtcbi8qKlxuICog44Os44K544Od44Oz44K544Gu44OR44O844K5XG4gKiBKc29u44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y2044GZ44KLXG4gKiBAcGFyYW0gU3RyaW5nIC8vIHJlcyDjg6zjgrnjg53jg7Pjgrkx44Os44K5XG4gKi9cbnZhciBwdXJzZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlcykge1xuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcbiAgICAvL+ODrOOCueOBruimgee0oFxuICAgIC8vMDrjg6zjgrnnlarlj7dcbiAgICAvLzE65ZCN5YmNXG4gICAgLy8yOuODoeOCouODiVxuICAgIC8vMzrml6Xku5hcbiAgICAvLzQ65pys5paHXG4gICAgLy81OuOCueODrOOCv+OCpFxuICAgIC8vNjpJRFxuICAgIHZhciBzcGxpdFJlcyA9IHJlcy5zcGxpdCgnPD4nKTtcbiAgICB2YXIgcmVzSnNvbiA9IHtcbiAgICAgICAgbnVtYmVyOiBOdW1iZXIoc3BsaXRSZXNbMF0pLFxuICAgICAgICBuYW1lOiBzcGxpdFJlc1sxXSxcbiAgICAgICAgZW1haWw6IHNwbGl0UmVzWzJdLFxuICAgICAgICBkYXRlOiBzcGxpdFJlc1szXSxcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbNF0sXG4gICAgICAgIC8vIHRocmVhZFRpdGxlOiBzcGxpdFJlc1s1XSxcbiAgICAgICAgaWQ6IHNwbGl0UmVzWzZdLFxuICAgICAgICBpbWdVcmw6ICcnLFxuICAgIH07XG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XG4gICAgcmV0dXJuIHJlc0pzb247XG59O1xuLyoqIOOBl+OBn+OCieOBsOOBoOOBkeOBr+WFqOinkuODgOODg+OCt+ODpeOBjFVuaWNvZGXmloflrZfliJfjgajjgZfjgabmoLzntI3jgZXjgozjgovjga7jgaflpInmj5vjgZnjgosgKi9cbnZhciBkZWNvZGVVbmljb2RlU3RyID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiM2NTM3NDsvZywgJ++9nicpO1xufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWRTaXRhcmFiYTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVmhaRk5wZEdGeVlXSmhMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNtVmhaRk5wZEdGeVlXSmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUU3TzBkQlJVYzdRVUZEU0N4blJFRkJhMFE3UVVGRGJFUXNNRVJCUVN0Q0xFTkJRVU1zWjBKQlFXZENPMEZCUTJoRUxEaEVRVUVyUWp0QlFVVXZRaXgzUlVGQmVVTTdRVUZGZWtNc1owSkJRV2RDTzBGQlEwZ3NVVUZCUVN4VFFVRlRMRWRCUVVjc1ZVRkJUeXhSUVVGblFqczdPenM3WjBKQlEzaERMRlZCUVZVc1IwRkJUU3hSUVVGUkxHZENRVUZoTEVOQlFVTTdaMEpCUTNSRExFbEJRVWtzUjBGQmVVTXNSVUZCUlN4RFFVRkRPMmRDUVVkb1JDeFBRVUZQTEVkQlFYVkNPMjlDUVVOc1F5eEhRVUZITEVWQlFVVXNWVUZCVlR0dlFrRkRaaXhOUVVGTkxFVkJRVVVzUzBGQlN6dHZRa0ZEWWl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWs3YjBKQlEycENMRmxCUVZrc1JVRkJSU3hoUVVGaE8ybENRVU0xUWl4RFFVRkRPenM3TzJkQ1FVbHBRaXh4UWtGQlRTeGxRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVFN08yZENRVUV2UWl4UlFVRlJMRWRCUVVjc1UwRkJiMEk3WjBKQlR5OUNMRWRCUVVjc1IwRkJSeXh2UWtGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGREwwUXNWVUZCVlR0blFrRkRWaXhKUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZVTEVsQlFVa3NSVUZEUXl4SFFVRkhPM0ZDUVVOSUxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTTdjVUpCUTFnc1RVRkJUU3hEUVVGRExGVkJRVU1zU1VGQlNTeEpRVUZMTEU5QlFVRXNTVUZCU1N4RlFVRktMRU5CUVVrc1EwRkJRenR4UWtGRGRFSXNSMEZCUnl4RFFVRkRMRlZCUVVNc1NVRkJTU3hKUVVGTExFOUJRVUVzWlVGQlpTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJMMElzUTBGQkswSXNRMEZCUXl4RlFVTnFSRHM3T3p0blFrRkZSaXh6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM2hGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0dlFrRkhkRU1zYzBKQlFVOHNTVUZCU1N4RlFVRkRPenM3UzBGRFlpeERRVUZETzBGQlJVWTdPenM3T3p0SFFVMUhPMEZCUTFVc1VVRkJRU3hQUVVGUExFZEJRVWNzVlVGQlR5eFJRVUZuUWl4RlFVRkZMRmxCUVc5Q0xFVkJRVVVzVDBGQlpTeEZRVUZGTEU5QlFXVTdPenM3TzJkQ1FVVTVSaXhaUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjRRaXhMUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNaRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTXhRenRuUWtGRFN5eFRRVUZUTEVkQlFVY3NNa0pCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzI5Q1FVTXZReXhGUVVGRkxFVkJRVVVzVDBGQlR6dHZRa0ZEV0N4SlFVRkpMRVZCUVVVc1UwRkJVenRwUWtGRGFFSXNRMEZCUXl4RFFVRkRPMmRDUVVOSExHTkJRV01zUjBGQlJ5d3lRa0ZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGblFpeERRVUZETEVOQlFVTTdaMEpCUjNSRUxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVTFRaXhIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZGYmtJc2NVSkJRVTBzWlVGQlN5eERRVUZETEVsQlFVa3NRMEZETVVJc1VVRkJVU3h6UWtGQmFVSXNUMEZCVHl4VFFVRkpMRmxCUVZrc1RVRkJSeXhGUVVOMFJDeFRRVUZQTEVkQlFVY3NZVUZCVVN4SFFVRkhMR0ZCUVZFc1dVRkJXU3hqUVVGVExFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZMR2xEUVVFMFFpeGpRVUZuUWl4RlFVTnNTRHQzUWtGRFJTeFBRVUZQTEVWQlFVVTdORUpCUTFBc1RVRkJUU3hGUVVGRkxFdEJRVXM3TkVKQlEySXNZMEZCWXl4RlFVRkZMRzFEUVVGdFF6czBRa0ZEYmtRc2FVSkJRV2xDTEVWQlFVVXNiVUpCUVcxQ096UkNRVU4wUXl4UFFVRlBMRVZCUVVVc1MwRkJSeXhSUVVGUkxFZEJRVWNzVDBGQlR5eE5RVUZIT3pSQ1FVTnFReXhOUVVGTkxFVkJRVVVzYzBKQlFYTkNPM2xDUVVNdlFqdDNRa0ZEUkN4bFFVRmxMRVZCUVVVc1NVRkJTVHR4UWtGRGRFSXNRMEZEUml4RlFVRkJPenRuUWtGaVN5eE5RVUZOTEVkQlFVY3NVMEZoWkRzN096dExRVU5HTEVOQlFVTTdRVUZGUmpzN1IwRkZSenRCUVVOSU8wbEJRVUU3VVVGRFJTeHRRa0ZCYlVJN1VVRkVja0lzYVVKQmVVTkRPMUZCZEVORE96czdPenM3VjBGTlJ6dFJRVU5JTEZOQlFVa3NSMEZCUnl4VlFVRlBMRk5CUVdsQ0xFVkJRVVVzVFVGQll6czdPenM3ZDBKQlRYcERMRlZCUVZVc1IwRkJSeXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4aFFVRmhMRU5CUVVNc1EwRkJRenQzUWtGRE9VUXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhGUVVGRk96UkNRVU5rTEhGQ1FVRnhRanMwUWtGRGNrSXNWVUZCVlN4SlFVRkpMRTFCUVUwc1IwRkJSeXhIUVVGSExFTkJRVU03ZVVKQlF6VkNPelpDUVVGTk96UkNRVU5NTEcxQ1FVRnRRanMwUWtGRGJrSXNWVUZCVlN4SlFVRkpMRWxCUVVrc1EwRkJRenQ1UWtGRGNFSTdkMEpCU1Vzc1QwRkJUeXhIUVVGMVFqczBRa0ZEYkVNc1IwRkJSeXhGUVVGRkxGVkJRVlU3TkVKQlEyWXNUVUZCVFN4RlFVRkZMRXRCUVVzN05FSkJRMklzV1VGQldTeEZRVUZGTEdGQlFXRTdORUpCUXpOQ0xFOUJRVThzUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1R0NVFrRkRiRUlzUTBGQlF6dDNRa0ZEWlN4eFFrRkJUU3hsUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVRTdPM2RDUVVFdlFpeFJRVUZSTEVkQlFVY3NVMEZCYjBJN2QwSkJSUzlDTEVkQlFVY3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eHZRa0ZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzNkQ1FVVXpSU3haUVVGWkxFZEJRVWNzWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03ZDBKQlJUTkRMSE5DUVVGUExGbEJRVmtzUlVGQlF6czdPMkZCUTNKQ0xFTkJRVU03U1VGRFNpeERRVUZETzBsQlFVUXNiVUpCUVVNN1FVRkJSQ3hEUVVGRExFRkJla05FTEVsQmVVTkRPMEZCUlVRN096dEhRVWRITzBGQlEwZ3NTVUZCVFN4blFrRkJaMElzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEYmtNc1YwRkJWenRKUVVOWUxFbEJRVTBzVFVGQlRTeEhRVUYxUXl4RlFVRkZMRU5CUVVNN1NVRkZkRVFzYjBKQlFXOUNPMGxCUTNCQ0xFbEJRVTBzVVVGQlVTeEhRVUZITEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU03U1VGRGVrTXNZVUZCWVR0SlFVTmlMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eExRVUZMTzFGQlEzSkNMR05CUVdNN1VVRkRaQ3hKUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NRMEZCUXl4RlFVRkZPMWxCUTNCQ0xFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGJrTTdTVUZEU0N4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOSUxFOUJRVThzVFVGQlRTeERRVUZETzBGQlEyaENMRU5CUVVNc1EwRkJRenRCUVVWR096czdPMGRCU1VjN1FVRkRTQ3hKUVVGTkxHVkJRV1VzUjBGQlJ5eFZRVUZETEZGQlFXZENMRVZCUVVVc1YwRkJiVUk3TzBsQlF6VkVMR1ZCUVdVN1NVRkRaaXhQUVVGUE8wbEJRMUFzVVVGQlVUdEpRVU5TTEdGQlFXRTdTVUZEWWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhYUVVGWExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMGxCUTNoRExIbENRVUY1UWp0SlFVTjZRaXhKUVVGTkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExFMUJRVTBzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0SlFVVXZReXhKUVVGTkxGRkJRVkVzWlVGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRzFDUVVGdFFpeERRVUZETERCRFFVRkhMRU5CUVVNc2IwTkJRVXNzUlVGQlJTeERRVUZETzBsQlEyaEZMRWxCUVUwc1UwRkJVeXhIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNVVUZCVVN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJRMnBFTEVsQlFVMHNSMEZCUnl4SFFVRk5MRkZCUVZFc2NVSkJRV2RDTEZOQlFWTXNSMEZCUnl4TlFVRk5MRTFCUVVjc1EwRkJRenRKUVVNM1JDeHRSRUZCYlVRN1NVRkZia1FzU1VGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVGxDTEVsQlFVMHNTVUZCU1N4bFFVRlhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWlVGQlpTeERRVUZETERCRFFVRkhMRU5CUVVNc2IwTkJRVXNzVVVGQlVTeERRVUZETzBsQlEzWkZMRWxCUVUwc1RVRkJUU3hIUVVGSExFMUJRVTBzVDBGQlF5eFRRVUZUTEVOQlFVTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1EwRkJReXd3UTBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF6dEpRVVU1UlN4WlFVRlpPMGxCUTFvc1QwRkJUenRSUVVOTUxFZEJRVWNzUzBGQlFUdFJRVU5JTEVsQlFVa3NUVUZCUVR0UlFVTktMRTFCUVUwc1VVRkJRVHRMUVVOUUxFTkJRVU03UVVGRFNpeERRVUZETEVOQlFVTTdRVUZGUmpzN096dEhRVWxITzBGQlEwZ3NTVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJReXhIUVVGWE8wbEJRMmhETEdWQlFXVTdTVUZEWml4UFFVRlBPMGxCUTFBc1VVRkJVVHRKUVVOU0xFMUJRVTA3U1VGRFRpeFBRVUZQTzBsQlExQXNUVUZCVFR0SlFVTk9MRTFCUVUwN1NVRkRUaXhSUVVGUk8wbEJRMUlzVFVGQlRUdEpRVU5PTEVsQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEYWtNc1NVRkJUU3hQUVVGUExFZEJRV2RDTzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xEUkNRVUUwUWp0UlFVTTFRaXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1JVRkJSU3hGUVVGRk8wdEJRMWdzUTBGQlF6dEpRVU5HTEZsQlFWazdTVUZEV2l4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOcVFpeERRVUZETEVOQlFVTTdRVUZGUml3MlEwRkJOa003UVVGRE4wTXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEYmtNc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eERRVUZETEVOQlFVTTdRVUZGUml4clFrRkJaU3haUVVGWkxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZWxlY3Ryb25fbG9nXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVsZWN0cm9uLWxvZ1wiKSk7XG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbnZhciBnZXRSZXNfMSA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi9jb25zdFwiKTtcbnZhciBpc0dldHRpbmcgPSB7fTtcbnZhciBnZXRSZXNJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRhc2s7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgaWYgKCEoISgoX2EgPSBnbG9iYWxUaGlzID09PSBudWxsIHx8IGdsb2JhbFRoaXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGdsb2JhbFRoaXMuZWxlY3Ryb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhKSB8fCAoKF9jID0gKF9iID0gZ2xvYmFsVGhpcyA9PT0gbnVsbCB8fCBnbG9iYWxUaGlzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnbG9iYWxUaGlzLmVsZWN0cm9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGF0YSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRocmVhZC5sZW5ndGgpID09PSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXRpbF8xLnNsZWVwKDUwMDApXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgZ2V0UmVzSW50ZXJ2YWwoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdGFzayA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubWFwKGZ1bmN0aW9uICh0aHJlYWQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRocmVhZC51cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy51cGRhdGVSZXModGhyZWFkLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgUHJvbWlzZS5hbGwodGFzayldO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoNTAwMCldO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBnZXRSZXNJbnRlcnZhbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG5nZXRSZXNJbnRlcnZhbCgpO1xuZXhwb3J0cy51cGRhdGVSZXMgPSBmdW5jdGlvbiAodGhyZWFkLCBpbmRleCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZmV0Y2hSZXNOdW0sIGxhc3RSZXNOdW1fMSwgcmVzdWx0LCBuZXdSZXN1bHQsIGVfMTtcbiAgICB2YXIgX2E7XG4gICAgdmFyIF9iLCBfYywgX2QsIF9lO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGBbdXBkYXRlUmVzXSAke3RocmVhZC51cmx9ICAke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIGlmIChpc0dldHRpbmdbdGhyZWFkLnVybF0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICBpc0dldHRpbmdbdGhyZWFkLnVybF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF9mLmxhYmVsID0gMTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfZi50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIGZldGNoUmVzTnVtID0gKF9jID0gKF9iID0gdGhyZWFkLmxpc3RbdGhyZWFkLmxpc3QubGVuZ3RoIC0gMV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5udW1iZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDE7XG4gICAgICAgICAgICAgICAgbGFzdFJlc051bV8xID0gKF9lID0gKF9kID0gdGhyZWFkLmxpc3RbdGhyZWFkLmxpc3QubGVuZ3RoIC0gMV0pID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5udW1iZXIpICE9PSBudWxsICYmIF9lICE9PSB2b2lkIDAgPyBfZSA6IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0UmVzXzEuZ2V0UmVzKHRocmVhZC5nZXRSZXMsIHRocmVhZC51cmwsIGZldGNoUmVzTnVtKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOaMh+WumuOBl+OBn+ODrOOCueeVquOBr+mZpOWkluWvvuixoVxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLm51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdSZXN1bHQgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uIChyZXMpIHsgcmV0dXJuIHJlcy5udW1iZXIgPiBsYXN0UmVzTnVtXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSB0aHJlYWQubGlzdCkucHVzaC5hcHBseShfYSwgbmV3UmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Jlc3VsdC5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERvbUZvckNoYXRXaW5kb3cobmV3UmVzdWx0LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVfMSA9IF9mLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgaXNHZXR0aW5nW3RocmVhZC51cmxdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbmV4cG9ydHMuY3JlYXRlRG9tID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICB2YXIgZG9tU3RyID0gXCI8bGkgY2xhc3M9XFxcImxpc3QtaXRlbVxcXCI+XCI7XG4gICAgZG9tU3RyICs9IFwiPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XCI7XG4gICAgLy8g44Os44K555Wq6KGo56S6XG4gICAgZG9tU3RyICs9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInJlc051bWJlclxcXCI+XCIgKyBtZXNzYWdlLm51bWJlciArIFwiPC9zcGFuPlxcbiAgICBcIjtcbiAgICAvLyDlkI3liY3ooajnpLpcbiAgICBkb21TdHIgKz0gXCI8c3BhbiBjbGFzcz1cXFwibmFtZVxcXCI+XCIgKyBtZXNzYWdlLm5hbWUgKyBcIjwvc3Bhbj5cIjtcbiAgICAvLyDmmYLliLvooajnpLpcbiAgICBkb21TdHIgKz0gXCI8c3BhbiBjbGFzcz1cXFwiZGF0ZVxcXCI+XCIgKyBtZXNzYWdlLmRhdGUgKyBcIjwvc3Bhbj5cIjtcbiAgICBkb21TdHIgKz0gJzxici8+JztcbiAgICBkb21TdHIgKz0gXCJcXG4gICAgPHNwYW4gY2xhc3M9XFxcInJlc1xcXCI+XFxuICAgICAgXCIgKyBtZXNzYWdlLnRleHRcbiAgICAgICAgLnJlcGxhY2UoLzxhIC4qPz4vZywgJycpIC8vIOOBl+OBn+OCieOBsOOBr+OCouODs+OCq+ODvOOCkmHjgr/jgrDljJbjgZfjgabjgYTjgotcbiAgICAgICAgLnJlcGxhY2UoLzxcXFxcYT4vZywgJycpICsgXCJcXG4gICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gIDwvbGk+XCI7XG4gICAgcmV0dXJuIGRvbVN0cjtcbn07XG52YXIgc2VuZERvbUZvckNoYXRXaW5kb3cgPSBmdW5jdGlvbiAobWVzc2FnZUxpc3QsIGluZGV4KSB7XG4gICAgLy8gbG9nLmluZm8oYFtzZW5kRG9tRm9yQ2hhdFdpbmRvd10gJHtpbmRleH1gKTtcbiAgICB2YXIgZG9tU3RyMiA9IG1lc3NhZ2VMaXN0XG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGltZ1VybCA9IG1lc3NhZ2UuaW1nVXJsICYmIG1lc3NhZ2UuaW1nVXJsLm1hdGNoKC9eXFwuLykgPyAnLi4vLi4vcHVibGljLycgKyBtZXNzYWdlLmltZ1VybCA6IG1lc3NhZ2UuaW1nVXJsO1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG1lc3NhZ2UpLCB7IGltZ1VybDogaW1nVXJsIH0pO1xuICAgIH0pXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG1lc3NhZ2UpIHsgcmV0dXJuIGV4cG9ydHMuY3JlYXRlRG9tKG1lc3NhZ2UpOyB9KVxuICAgICAgICAuam9pbignXFxuJyk7XG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvd1tpbmRleF0ud2ViQ29udGVudHMuc2VuZChjb25zdF8xLmVsZWN0cm9uRXZlbnRbJ3Nob3ctY29tbWVudCddLCB7IGRvbTogZG9tU3RyMiB9KTtcbn07XG5leHBvcnRzLmRlZmF1bHQgPSB7fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWMzUmhjblJUWlhKMlpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKemRHRnlkRk5sY25abGNpNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzT0VSQlFTdENPMEZCUXk5Q0xDdENRVUVyUWp0QlFVTXZRaXd5UTBGQk5FUTdRVUZETlVRc2FVTkJRWGRETzBGQlJYaERMRWxCUVUwc1UwRkJVeXhIUVVFclFpeEZRVUZGTEVOQlFVTTdRVUZEYWtRc1NVRkJUU3hqUVVGakxFZEJRVWM3T3pzN096dHhRa0ZGYWtJc1EwRkJRU3hSUVVGRExGVkJRVlVzWVVGQlZpeFZRVUZWTEhWQ1FVRldMRlZCUVZVc1EwRkJSU3hSUVVGUkxEQkRRVUZGTEVsQlFVa3NRMEZCUVN4SlFVRkpMR0ZCUVVFc1ZVRkJWU3hoUVVGV0xGVkJRVlVzZFVKQlFWWXNWVUZCVlN4RFFVRkZMRkZCUVZFc01FTkJRVVVzU1VGQlNTd3dRMEZCUlN4TlFVRk5MRU5CUVVNc1RVRkJUU3hOUVVGTExFTkJRVU1zUTBGQlFTeEZRVUU1UlN4M1FrRkJPRVU3WjBKQlEyaEdMSEZDUVVGTkxGbEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUVRzN1owSkJRV3BDTEZOQlFXbENMRU5CUVVNN1owSkJRMnhDTEdOQlFXTXNSVUZCUlN4RFFVRkRPMmRDUVVOcVFpeHpRa0ZCVHpzN1owSkJSMGdzU1VGQlNTeEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNWVUZCUXl4TlFVRk5MRVZCUVVVc1MwRkJTenR2UWtGRE4wUXNNa0pCUVRKQ08yOUNRVU16UWl4UFFVRlBMR2xDUVVGVExFTkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMmRDUVVOc1F5eERRVUZETEVOQlFVTXNRMEZCUXp0blFrRkRTQ3h4UWtGQlRTeFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGQk96dG5Ra0ZCZGtJc1UwRkJkVUlzUTBGQlF6dG5Ra0ZGZUVJc2NVSkJRVTBzV1VGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkJPenRuUWtGQmFrSXNVMEZCYVVJc1EwRkJRenRuUWtGRGJFSXNZMEZCWXl4RlFVRkZMRU5CUVVNN096czdTMEZEYkVJc1EwRkJRenRCUVVOR0xHTkJRV01zUlVGQlJTeERRVUZETzBGQlJVb3NVVUZCUVN4VFFVRlRMRWRCUVVjc1ZVRkJUeXhOUVVGcFJDeEZRVUZGTEV0QlFXRTdPenM3T3pzN1owSkJRemxHTEcxRVFVRnRSRHRuUWtGRmJrUXNTVUZCU1N4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6dHZRa0ZCUlN4elFrRkJUenRuUWtGRGJFTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdPenM3WjBKQlJYSkNMRmRCUVZjc1pVRkJWeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFTkJRVU1zUTBGQlF5d3dRMEZCUlN4TlFVRk5MRzFEUVVGSkxFTkJRVU1zUTBGQlF6dG5Ra0ZEZGtVc01rSkJRV0VzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNNRU5CUVVVc1RVRkJUU3h0UTBGQlNTeERRVUZETEVOQlFVTTdaMEpCUlhKRUxIRkNRVUZOTEdWQlFXTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1RVRkJUU3hGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVXNWMEZCVnl4RFFVRkRMRVZCUVVFN08yZENRVUZ5UlN4TlFVRk5MRWRCUVVjc1UwRkJORVE3WjBKQlF6TkZMR1ZCUVdVN1owSkJRMllzU1VGQlNTeE5RVUZOTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVU3YjBKQlEyNUVMRk5CUVZNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFVTXNSMEZCUnl4SlFVRkxMRTlCUVVNc1IwRkJSeXhEUVVGRExFMUJRV2xDTEVkQlFVY3NXVUZCVlN4RlFVRnVReXhEUVVGdFF5eERRVUZETEVOQlFVTTdiMEpCUXpsRkxFTkJRVUVzUzBGQlFTeE5RVUZOTEVOQlFVTXNTVUZCU1N4RFFVRkJMRU5CUVVNc1NVRkJTU3hYUVVGSkxGTkJRVk1zUlVGQlJUdHZRa0ZGTDBJc1NVRkJTU3hUUVVGVExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTTdkMEpCUVVVc2IwSkJRVzlDTEVOQlFVTXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8ybENRVU5zUlRzN096dG5Ra0ZGUkN4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZETEVOQlFVTXNRMEZCUXpzN08yZENRVVZtTEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZET3pzN08wdEJReTlDTEVOQlFVTTdRVUZGVnl4UlFVRkJMRk5CUVZNc1IwRkJSeXhWUVVGRExFOUJRVzlDTzBsQlF6VkRMRWxCUVVrc1RVRkJUU3hIUVVGSExEQkNRVUYzUWl4RFFVRkRPMGxCUlhSRExFMUJRVTBzU1VGQlNTeDVRa0ZCZFVJc1EwRkJRenRKUVVWc1F5eFJRVUZSTzBsQlExSXNUVUZCVFN4SlFVRkpMSFZEUVVOdlFpeFBRVUZQTEVOQlFVTXNUVUZCVFN4clFrRkRla01zUTBGQlF6dEpRVU5LTEU5QlFVODdTVUZEVUN4TlFVRk5MRWxCUVVrc01FSkJRWE5DTEU5QlFVOHNRMEZCUXl4SlFVRkpMRmxCUVZNc1EwRkJRenRKUVVOMFJDeFBRVUZQTzBsQlExQXNUVUZCVFN4SlFVRkpMREJDUVVGelFpeFBRVUZQTEVOQlFVTXNTVUZCU1N4WlFVRlRMRU5CUVVNN1NVRkZkRVFzVFVGQlRTeEpRVUZKTEU5QlFVOHNRMEZCUXp0SlFVVnNRaXhOUVVGTkxFbEJRVWtzZFVOQlJVb3NUMEZCVHl4RFFVRkRMRWxCUVVrN1UwRkRXQ3hQUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRMSEZDUVVGeFFqdFRRVU0zUXl4UFFVRlBMRU5CUVVNc1VVRkJVU3hGUVVGRkxFVkJRVVVzUTBGQlF5eDFRMEZIZEVJc1EwRkJRenRKUVVWUUxFOUJRVThzVFVGQlRTeERRVUZETzBGQlEyaENMRU5CUVVNc1EwRkJRenRCUVVWR0xFbEJRVTBzYjBKQlFXOUNMRWRCUVVjc1ZVRkJReXhYUVVFd1FpeEZRVUZGTEV0QlFXRTdTVUZEY2tVc0swTkJRU3RETzBsQlF5OURMRWxCUVUwc1QwRkJUeXhIUVVGSExGZEJRVmM3VTBGRGVFSXNSMEZCUnl4RFFVRkRMRlZCUVVNc1QwRkJUenRSUVVOWUxFbEJRVTBzVFVGQlRTeEhRVUZITEU5QlFVOHNRMEZCUXl4TlFVRk5MRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExHVkJRV1VzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzFGQlEycElMRFpDUVVOTExFOUJRVThzUzBGRFZpeE5RVUZOTEZGQlFVRXNTVUZEVGp0SlFVTktMRU5CUVVNc1EwRkJRenRUUVVORUxFZEJRVWNzUTBGQlF5eFZRVUZETEU5QlFVOHNTVUZCU3l4UFFVRkJMR2xDUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFXeENMRU5CUVd0Q0xFTkJRVU03VTBGRGNFTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJSV1FzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEZkQlFWY3NRMEZCUXl4SlFVRkpMRU5CUVVNc2NVSkJRV0VzUTBGQlF5eGpRVUZqTEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc1JVRkJSU3hQUVVGUExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlEycElMRU5CUVVNc1EwRkJRenRCUVVWR0xHdENRVUZsTEVWQlFVVXNRMEZCUXlKOSIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGZzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcbmV4cG9ydHMucmVhZFdhdkZpbGVzID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmc18xLmRlZmF1bHQucmVhZGRpcihwYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xuICAgICAgICAgICAgaWYgKGVycilcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc0V4aXN0RmlsZShwYXRoICsgJy8nICsgZmlsZSkgJiYgLy4qXFwud2F2JC8udGVzdChmaWxlKTsgLy/ntZ7jgorovrzjgb9cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVzb2x2ZShmaWxlTGlzdCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbnZhciBpc0V4aXN0RmlsZSA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZnNfMS5kZWZhdWx0LnN0YXRTeW5jKGZpbGUpLmlzRmlsZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdFTk9FTlQnKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnRzLnNsZWVwID0gZnVuY3Rpb24gKG1zZWMpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zZWMpOyB9KTsgfTtcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bJidgXCI8Pl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXG4gICAgICAgICAgICBcIidcIjogJyYjeDI3OycsXG4gICAgICAgICAgICAnYCc6ICcmI3g2MDsnLFxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXG4gICAgICAgICAgICAnPCc6ICcmbHQ7JyxcbiAgICAgICAgICAgICc+JzogJyZndDsnLFxuICAgICAgICB9W21hdGNoXTtcbiAgICB9KTtcbn07XG5leHBvcnRzLnVuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgICAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXG4gICAgICAgIC5yZXBsYWNlKC8mIzAzOTsvZywgXCInXCIpXG4gICAgICAgIC5yZXBsYWNlKC8mIzA0NDsvZywgJywnKVxuICAgICAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblYwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTd3dRMEZCYjBJN1FVRkRVQ3hSUVVGQkxGbEJRVmtzUjBGQlJ5eFZRVUZETEVsQlFWazdTVUZEZGtNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5PMUZCUTJwRExGbEJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXM3V1VGRE1VSXNTVUZCU1N4SFFVRkhPMmRDUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1NVRkJTVHRuUWtGRGFrTXNUMEZCVHl4WFFVRlhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0WlFVTjRSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNTVUZCVFN4WFFVRlhMRWRCUVVjc1ZVRkJReXhKUVVGWk8wbEJReTlDTEVsQlFVazdVVUZEUml4WlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOYUxFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJPMWxCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGVrTTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxFdEJRVXNzUjBGQlJ5eFZRVUZETEVsQlFWa3NTVUZCU3l4UFFVRkJMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVU1zVDBGQlR5eEpRVUZMTEU5QlFVRXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQmVrSXNRMEZCZVVJc1EwRkJReXhGUVVGdVJDeERRVUZ0UkN4RFFVRkRPMEZCUlRsRkxGRkJRVUVzVlVGQlZTeEhRVUZITEZWQlFVTXNUVUZCWXp0SlFVTjJReXhKUVVGSkxFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tTzBsQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZETEV0QlFVczdVVUZEZGtNc1QwRkJVVHRaUVVOT0xFZEJRVWNzUlVGQlJTeFBRVUZQTzFsQlExb3NSMEZCUnl4RlFVRkZMRkZCUVZFN1dVRkRZaXhIUVVGSExFVkJRVVVzVVVGQlVUdFpRVU5pTEVkQlFVY3NSVUZCUlN4UlFVRlJPMWxCUTJJc1IwRkJSeXhGUVVGRkxFMUJRVTA3V1VGRFdDeEhRVUZITEVWQlFVVXNUVUZCVFR0VFFVTktMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRUQ3hEUVVGRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRkRU1zVDBGQlR5eEhRVUZITzFOQlExQXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU0xUWl4RFFVRkRMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvbi1qc29uLXN0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpY29udi1saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==