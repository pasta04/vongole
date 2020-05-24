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
    mainWin.loadURL(path_1.default.resolve(__dirname, '../src/html/index.html'));
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
    chatWindow.loadURL(path_1.default.resolve(__dirname, '../src/html/chat.html'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL2NvbnN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vcmVhZEJCUy9SZWFkNWNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvZ2V0UmVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3JlYWRCQlMvcmVhZFNpdGFyYWJhLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3N0YXJ0U2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluL3V0aWwudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWpzb24tc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImVuY29kaW5nLWphcGFuZXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpY29udi1saXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLGdEQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVMsRUFBRSxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx3Q0FBd0Msa0NBQWtDLEVBQUUsRUFBRTtBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCO0FBQ0EsMkNBQTJDLHUvRDs7Ozs7Ozs7Ozs7QUNyRDNDLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi9tYWluLnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHBhdGhfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicGF0aFwiKSk7XHJcbnZhciBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tanNvbi1zdG9yYWdlXCIpKTtcclxudmFyIENvbmZpZyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmdldEJvYWRMaXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LmdldCgnYm9hcmRMaXN0JywgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEuYm9hcmRMaXN0ID0gKF9hID0gZGF0YS5ib2FyZExpc3QpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8qKiDmnb/kuIDopqfjgpLkv53lrZggKi9cclxuICAgICAgICB0aGlzLnNhdmVCb2FyZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsZWN0cm9uX2pzb25fc3RvcmFnZV8xLmRlZmF1bHQuc2V0KCdib2FyZExpc3QnLCB7IGJvYXJkTGlzdDogYm9hcmRMaXN0IH0sIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyDoqK3lrprjg5XjgqHjgqTjg6voqq3jgb/ovrzjgb9cclxuICAgICAgICBlbGVjdHJvbl9qc29uX3N0b3JhZ2VfMS5kZWZhdWx0LnNldERhdGFQYXRoKHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoJycpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBDb25maWc7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IG5ldyBDb25maWcoKTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dVptbG5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVkyOXVabWxuTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFc09FTkJRWGRDTzBGQlEzaENMR2RHUVVFMFF6dEJRVWMxUXp0SlFVTkZPMUZCU1VFc1owSkJRVmNzUjBGQlJ6dFpRVU5hTEN0Q1FVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZETEV0QlFWVXNSVUZCUlN4SlFVRlRPenRuUWtGRE4wTXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eFRRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRzFEUVVGSkxFVkJRVVVzUTBGQlF6dFpRVU0xUkN4RFFVRkRMRU5CUVVNc1EwRkJRenRSUVVOTUxFTkJRVU1zUTBGQlF6dFJRVVZHTEdGQlFXRTdVVUZEWWl4clFrRkJZU3hIUVVGSExGVkJRVU1zVTBGQmIwUTdXVUZEYmtVc0swSkJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNWMEZCVnl4RlFVRkZMRVZCUVVVc1UwRkJVeXhYUVVGQkxFVkJRVVVzUlVGQlJTeFZRVUZETEVkQlFVYzdaMEpCUXpGRExFMUJRVTBzUjBGQlJ5eERRVUZETzFsQlExb3NRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRUQ3hEUVVGRExFTkJRVU03VVVGa1FTeGhRVUZoTzFGQlEySXNLMEpCUVU4c1EwRkJReXhYUVVGWExFTkJRVU1zWTBGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRM2hETEVOQlFVTTdTVUZoU0N4aFFVRkRPMEZCUVVRc1EwRkJReXhCUVdwQ1JDeEpRV2xDUXp0QlFVVkVMR3RDUVVGbExFbEJRVWtzVFVGQlRTeEZRVUZGTEVOQlFVTWlmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5lbGVjdHJvbkV2ZW50ID0ge1xyXG4gICAgLyoqIOOCteODvOODkOODvOi1t+WLlSAqL1xyXG4gICAgJ3N0YXJ0LXNlcnZlcic6ICdzdGFydC1zZXJ2ZXInLFxyXG4gICAgLyoqIOOCouODqeODvOODiOihqOekuiAqL1xyXG4gICAgJ3Nob3ctYWxlcnQnOiAnc2hvdy1hbGVydCcsXHJcbiAgICAnc2hvdy1jb21tZW50JzogJ3Nob3ctY29tbWVudCcsXHJcbiAgICAnY2xlYXItY29tbWVudCc6ICdjbGVhci1jb21tZW50JyxcclxuICAgIC8qKiDjgrXjg7zjg5Djg7zotbfli5Xjga7ov5Tkv6EgKi9cclxuICAgICdzdGFydC1zZXJ2ZXItcmVwbHknOiAnc3RhcnQtc2VydmVyLXJlcGx5JyxcclxuICAgIE1BSU5fR0VUX0VMRUNUUk9OX0RBVEE6ICdNQUlOX0dFVF9FTEVDVFJPTl9EQVRBJyxcclxuICAgIE1BSU5fU0VUX0VMRUNUUk9OX0RBVEE6ICdNQUlOX1NFVF9FTEVDVFJPTl9EQVRBJyxcclxuICAgIC8qKiDmnb/jgpLov73liqAgKi9cclxuICAgIE1BSU5fQUREX0JPQVJETElTVDogJ01BSU5fQUREX0JPQVJETElTVCcsXHJcbiAgICAvKiog44K544Os5LiA6Kan44KS6ZaL44GPICovXHJcbiAgICBNQUlOX0dFVF9USFJFQURfTElTVDogJ01BSU5fR0VUX1RIUkVBRF9MSVNUJyxcclxuICAgIC8qKiDjgrnjg6zjgpLplovjgY8gKi9cclxuICAgIE1BSU5fT1BFTl9USFJFQUQ6ICdNQUlOX09QRU5fVEhSRUFEJyxcclxuICAgIC8qKiDmnb/kuIDopqfooajnpLogKi9cclxuICAgIFNIT1dfQk9BUkRfTElTVDogJ1NIT1dfQk9BUkRfTElTVCcsXHJcbiAgICAvKiog5pu444GN6L6844G/ICovXHJcbiAgICBNQUlOX1BPU1RfS0FLSUtPTUk6ICdNQUlOX1BPU1RfS0FLSUtPTUknLFxyXG59O1xyXG5leHBvcnRzLmtleUNvZGUgPSB7XHJcbiAgICBFTlRFUjogMTMsXHJcbiAgICBTSElGVDogMTYsXHJcbiAgICBDVFJMOiAxNyxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWTI5dWMzUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjeUk2V3lKamIyNXpkQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRmhMRkZCUVVFc1lVRkJZU3hIUVVGSE8wbEJRek5DTEdGQlFXRTdTVUZEWWl4alFVRmpMRVZCUVVVc1kwRkJZenRKUVVVNVFpeGhRVUZoTzBsQlEySXNXVUZCV1N4RlFVRkZMRmxCUVZrN1NVRkZNVUlzWTBGQll5eEZRVUZGTEdOQlFXTTdTVUZET1VJc1pVRkJaU3hGUVVGRkxHVkJRV1U3U1VGRmFFTXNaMEpCUVdkQ08wbEJRMmhDTEc5Q1FVRnZRaXhGUVVGRkxHOUNRVUZ2UWp0SlFVVXhReXh6UWtGQmMwSXNSVUZCUlN4M1FrRkJkMEk3U1VGRGFFUXNjMEpCUVhOQ0xFVkJRVVVzZDBKQlFYZENPMGxCUTJoRUxGZEJRVmM3U1VGRFdDeHJRa0ZCYTBJc1JVRkJSU3h2UWtGQmIwSTdTVUZGZUVNc1kwRkJZenRKUVVOa0xHOUNRVUZ2UWl4RlFVRkZMSE5DUVVGelFqdEpRVVUxUXl4WlFVRlpPMGxCUTFvc1owSkJRV2RDTEVWQlFVVXNhMEpCUVd0Q08wbEJSWEJETEZsQlFWazdTVUZEV2l4bFFVRmxMRVZCUVVVc2FVSkJRV2xDTzBsQlJXeERMRmRCUVZjN1NVRkRXQ3hyUWtGQmEwSXNSVUZCUlN4dlFrRkJiMEk3UTBGRGVrTXNRMEZCUXp0QlFVVlhMRkZCUVVFc1QwRkJUeXhIUVVGSE8wbEJRM0pDTEV0QlFVc3NSVUZCUlN4RlFVRkZPMGxCUTFRc1MwRkJTeXhGUVVGRkxFVkJRVVU3U1VGRFZDeEpRVUZKTEVWQlFVVXNSVUZCUlR0RFFVTlVMRU5CUVVNaWZRPT0iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHRbXCJkZWZhdWx0XCJdID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vLyBFbGVjdHJvbuOBruODouOCuOODpeODvOODq1xyXG52YXIgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcclxudmFyIGVsZWN0cm9uXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcImVsZWN0cm9uXCIpKTtcclxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxudmFyIGVsZWN0cm9uX3dpbmRvd19zdGF0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi13aW5kb3ctc3RhdGVcIikpO1xyXG52YXIgY29uZmlnXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vY29uZmlnXCIpKTtcclxudmFyIGNvbnN0XzEgPSByZXF1aXJlKFwiLi9jb25zdFwiKTtcclxudmFyIGdldFJlc18xID0gcmVxdWlyZShcIi4vcmVhZEJCUy9nZXRSZXNcIik7XHJcbnZhciBzdGFydFNlcnZlcl8xID0gcmVxdWlyZShcIi4vc3RhcnRTZXJ2ZXJcIik7XHJcbnZhciBnZXRSZXNfMiA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xyXG5jb25zb2xlLnRyYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy9cclxufTtcclxucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVycik7XHJcbn0pO1xyXG4vLyDjgqLjg5fjg6rjgrHjg7zjgrfjg6fjg7PjgpLjgrPjg7Pjg4jjg63jg7zjg6vjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcclxudmFyIGFwcCA9IGVsZWN0cm9uXzEuZGVmYXVsdC5hcHA7XHJcbi8vIOWkmumHjei1t+WLlemYsuatolxyXG5pZiAoIWFwcC5yZXF1ZXN0U2luZ2xlSW5zdGFuY2VMb2NrKCkpIHtcclxuICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1thcHBdIEl0IGlzIHRlcm1pbmF0ZWQgZm9yIG11bHRpcGxlIGxhdW5jaGVzLicpO1xyXG4gICAgYXBwLnF1aXQoKTtcclxufVxyXG5lbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oJ1thcHBdIHN0YXJ0ZWQnKTtcclxuYXBwLmFsbG93UmVuZGVyZXJQcm9jZXNzUmV1c2UgPSB0cnVlO1xyXG52YXIgaWNvblBhdGggPSBwYXRoXzEuZGVmYXVsdC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uL2ljb24ucG5nJyk7XHJcbi8vIOOCteODvOODkOODvOi1t+WLleODouOCuOODpeODvOODq1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXZhci1yZXF1aXJlc1xyXG52YXIgc3MgPSByZXF1aXJlKCcuL3N0YXJ0U2VydmVyJyk7XHJcbmNvbnNvbGUudHJhY2Uoc3MpO1xyXG4vLyDjgqbjgqPjg7Pjg4njgqbjgpLkvZzmiJDjgZnjgovjg6Ljgrjjg6Xjg7zjg6tcclxudmFyIEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbl8xLmRlZmF1bHQuQnJvd3NlcldpbmRvdztcclxuLy8g44Oh44Kk44Oz44Km44Kj44Oz44OJ44Km44GvR0PjgZXjgozjgarjgYTjgojjgYbjgavjgrDjg63jg7zjg5Djg6vlrqPoqIBcclxuZ2xvYmFsVGhpcy5lbGVjdHJvbiA9IHtcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICAgIG1haW5XaW5kb3c6IG51bGwsXHJcbiAgICAgICAgY2hhdFdpbmRvdzogbnVsbCxcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgYm9hcmRMaXN0OiBbXSxcclxuICAgICAgICBib2FyZDoge1xyXG4gICAgICAgICAgICB1cmw6IG51bGwsXHJcbiAgICAgICAgICAgIHRocmVhZExpc3Q6IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhyZWFkOiB7XHJcbiAgICAgICAgICAgIHVybDogbnVsbCxcclxuICAgICAgICAgICAgYm9hcmRJZDogbnVsbCxcclxuICAgICAgICAgICAgdGhyZWFkTnVtYmVyOiBudWxsLFxyXG4gICAgICAgICAgICBob3N0bmFtZTogbnVsbCxcclxuICAgICAgICAgICAgbGlzdDogW10sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn07XHJcbi8vIOWFqOOBpuOBruOCpuOCo+ODs+ODieOCpuOBjOmWieOBmOOBn+OCiee1guS6hlxyXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gaWYgKHByb2Nlc3MucGxhdGZvcm0gIT0gJ2RhcndpbicpIHtcclxuICAgIGFwcC5xdWl0KCk7XHJcbiAgICAvLyB9XHJcbn0pO1xyXG4vLyBFbGVjdHJvbuOBruWIneacn+WMluWujOS6huW+jOOBq+Wun+ihjFxyXG5hcHAub24oJ3JlYWR5JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG1haW5XaW5kb3dTdGF0ZSA9IGVsZWN0cm9uX3dpbmRvd19zdGF0ZV8xLmRlZmF1bHQoe1xyXG4gICAgICAgIGRlZmF1bHRXaWR0aDogNzAwLFxyXG4gICAgICAgIGRlZmF1bHRIZWlnaHQ6IDcyMCxcclxuICAgIH0pO1xyXG4gICAgLy8g44Km44Kj44Oz44OJ44Km44K144Kk44K644KS77yI44OV44Os44O844Og44K144Kk44K644KS5ZCr44G+44Gq44GE77yJ6Kit5a6aXHJcbiAgICB2YXIgbWFpbldpbiA9IG5ldyBCcm93c2VyV2luZG93KHtcclxuICAgICAgICAvLyDliY3lm57otbfli5XmmYLjga7jgpLlvqnlhYNcclxuICAgICAgICB4OiBtYWluV2luZG93U3RhdGUueCxcclxuICAgICAgICB5OiBtYWluV2luZG93U3RhdGUueSxcclxuICAgICAgICB3aWR0aDogbWFpbldpbmRvd1N0YXRlLndpZHRoLFxyXG4gICAgICAgIGhlaWdodDogbWFpbldpbmRvd1N0YXRlLmhlaWdodCxcclxuICAgICAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcclxuICAgICAgICBpY29uOiBpY29uUGF0aCxcclxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xyXG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBza2lwVGFza2JhcjogdHJ1ZSxcclxuICAgIH0pO1xyXG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cubWFpbldpbmRvdyA9IG1haW5XaW47XHJcbiAgICBtYWluV2luZG93U3RhdGUubWFuYWdlKG1haW5XaW4pO1xyXG4gICAgbWFpbldpbi5zZXRUaXRsZSgndm9uZ29sZScpO1xyXG4gICAgbWFpbldpbi5zZXRNZW51KG51bGwpO1xyXG4gICAgLy8g44Os44Oz44OA44Op44O844Gn5L2/55So44GZ44KLaHRtbOODleOCoeOCpOODq+OCkuaMh+WumuOBmeOCi1xyXG4gICAgbWFpbldpbi5sb2FkVVJMKHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2h0bWwvaW5kZXguaHRtbCcpKTtcclxuICAgIC8vIOOCpuOCo+ODs+ODieOCpuOBjOmWieOBmOOCieOCjOOBn+OCieOCouODl+ODquOCgue1guS6hlxyXG4gICAgbWFpbldpbi5vbignY2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyDnorroqo3jg4DjgqTjgqLjg63jgrDjgafjga/jgYTjgpLjgq/jg6rjg4Pjgq/jgZfjgZ/jgonplonjgZjjgotcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGVsZWN0cm9uXzEuZGlhbG9nXHJcbiAgICAgICAgICAgIC5zaG93TWVzc2FnZUJveChtYWluV2luLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdxdWVzdGlvbicsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFsnWWVzJywgJ05vJ10sXHJcbiAgICAgICAgICAgIC8vIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgbWVzc2FnZTogJ+e1guS6huOBl+OBvuOBmeOBi++8nycsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yZXNwb25zZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYXBwLmV4aXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBtYWluV2luLm9uKCdjbG9zZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5pbmZvKCdbYXBwXSBjbG9zZScpO1xyXG4gICAgICAgIGFwcC5leGl0KCk7XHJcbiAgICB9KTtcclxuICAgIC8vIOmWi+eZuuiAheODhOODvOODq+OCkumWi+OBj1xyXG4gICAgLy8gbWFpbldpbi53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoKTtcclxuICAgIC8vIOOCv+OCueOCr+ODiOODrOOCpOOBruioreWumlxyXG4gICAgdmFyIHRyYXkgPSBudWxsO1xyXG4gICAgYXBwLndoZW5SZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyYXkgPSBuZXcgZWxlY3Ryb25fMS5UcmF5KGljb25QYXRoKTtcclxuICAgICAgICB2YXIgY29udGV4dE1lbnUgPSBlbGVjdHJvbl8xLk1lbnUuYnVpbGRGcm9tVGVtcGxhdGUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ+ioreWumicsXHJcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5XaW4uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAn44Kz44Oh44Oz44OIJyxcclxuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICfntYLkuoYnLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYWluV2luLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRyYXkuc2V0VG9vbFRpcCgndm9uZ29sZScpO1xyXG4gICAgICAgIHRyYXkuc2V0Q29udGV4dE1lbnUoY29udGV4dE1lbnUpO1xyXG4gICAgICAgIC8vIOOCv+OCueOCr+ODiOODrOOCpOOCr+ODquODg+OCr+aZguOBruaMmeWLlVxyXG4gICAgICAgIHZhciBpc0RvdWJsZUNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0cmF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEb3VibGVDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHV0aWxfMS5zbGVlcCgyMDApXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRG91YmxlQ2xpY2tlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICB0cmF5Lm9uKCdkb3VibGUtY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaXNEb3VibGVDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbWFpbldpbi5mb2N1cygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvLyDmnb/kuIDopqfliJ3mnJ/ooajnpLpcclxuICAgIGNvbmZpZ18xLmRlZmF1bHQuZ2V0Qm9hZExpc3QoKTtcclxuICAgIGNyZWF0ZUNoYXRXaW5kb3coKTtcclxufSk7XHJcbnZhciBjcmVhdGVDaGF0V2luZG93ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoYXRXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7XHJcbiAgICAgICAgd2lkdGg6IDQwMCxcclxuICAgICAgICB1c2VDb250ZW50U2l6ZTogdHJ1ZSxcclxuICAgICAgICBpY29uOiBpY29uUGF0aCxcclxuICAgICAgICB3ZWJQcmVmZXJlbmNlczoge1xyXG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDjgr/jgrnjgq/jg5Djg7zjgavooajnpLrjgZfjgarjgYRcclxuICAgICAgICBza2lwVGFza2JhcjogdHJ1ZSxcclxuICAgICAgICBjbG9zYWJsZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIC8vIOWIneacn+ihqOekuuOBr+mdnuihqOekulxyXG4gICAgY2hhdFdpbmRvdy5taW5pbWl6ZSgpO1xyXG4gICAgLy8g44Os44Oz44OA44Op44O844Gn5L2/55So44GZ44KLaHRtbOODleOCoeOCpOODq+OCkuaMh+WumuOBmeOCi1xyXG4gICAgY2hhdFdpbmRvdy5sb2FkVVJMKHBhdGhfMS5kZWZhdWx0LnJlc29sdmUoX19kaXJuYW1lLCAnLi4vc3JjL2h0bWwvY2hhdC5odG1sJykpO1xyXG4gICAgY2hhdFdpbmRvdy5zZXRUaXRsZSgndm9uZ29sZSAtIHRocmVhZCcpO1xyXG4gICAgY2hhdFdpbmRvdy5zZXRNZW51KG51bGwpO1xyXG4gICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdyA9IGNoYXRXaW5kb3c7XHJcbiAgICAvLyBjaGF0V2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpO1xyXG59O1xyXG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9FTEVDVFJPTl9EQVRBLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGE7XHJcbn0pO1xyXG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX1NFVF9FTEVDVFJPTl9EQVRBLCBmdW5jdGlvbiAoZXZlbnQsIG1lc3NhZ2UpIHtcclxuICAgIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YSA9IG1lc3NhZ2U7XHJcbiAgICByZXR1cm47XHJcbn0pO1xyXG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0FERF9CT0FSRExJU1QsIGZ1bmN0aW9uIChldmVudCwgbWVzc2FnZSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgKF9hID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCkucHVzaC5hcHBseShfYSwgbWVzc2FnZSk7XHJcbiAgICBjb25maWdfMS5kZWZhdWx0LnNhdmVCb2FyZExpc3QoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLmJvYXJkTGlzdCk7XHJcbiAgICByZXR1cm47XHJcbn0pO1xyXG5lbGVjdHJvbl8xLmlwY01haW4uaGFuZGxlKGNvbnN0XzEuZWxlY3Ryb25FdmVudC5NQUlOX0dFVF9USFJFQURfTElTVCwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxpc3Q7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGdldFJlc18xLmdldFRocmVhZExpc3QobWVzc2FnZSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbmVsZWN0cm9uXzEuaXBjTWFpbi5vbihjb25zdF8xLmVsZWN0cm9uRXZlbnQuTUFJTl9PUEVOX1RIUkVBRCwgZnVuY3Rpb24gKGV2ZW50LCB1cmwsIG5hbWUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgaG9zdG5hbWUsIHRocmVhZE51bWJlciwgYm9hcmRJZDtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcclxuICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGhvc3RuYW1lID0gKF9iID0gKF9hID0gdXJsLm1hdGNoKC9odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XHJcbiAgICAgICAgICAgICAgICB0aHJlYWROdW1iZXIgPSAoX2QgPSAoX2MgPSB1cmwubWF0Y2goL1xcL1xcZCtcXC8kLykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXS5yZXBsYWNlKC9cXC8vZywgJycpKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAnJztcclxuICAgICAgICAgICAgICAgIGJvYXJkSWQgPSB1cmwucmVwbGFjZShob3N0bmFtZSwgJycpLnJlcGxhY2UoXCIvXCIgKyB0aHJlYWROdW1iZXIgKyBcIi9cIiwgJycpLnJlcGxhY2UoJ3Rlc3QvcmVhZC5jZ2kvJywgJycpLnJlcGxhY2UoJ2Jicy9yZWFkLmNnaS8nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvc3RuYW1lOiBob3N0bmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB0aHJlYWROdW1iZXI6IHRocmVhZE51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICBib2FyZElkOiBib2FyZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuaW5mbyhKU09OLnN0cmluZ2lmeShnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLCBudWxsLCAnICAnKSk7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LndlYkNvbnRlbnRzLnNlbmQoY29uc3RfMS5lbGVjdHJvbkV2ZW50WydjbGVhci1jb21tZW50J10pO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5zZXRUaXRsZShuYW1lICsgXCIgLSBcIiArIHVybCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzdGFydFNlcnZlcl8xLnVwZGF0ZVJlcygpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsVGhpcy5lbGVjdHJvbi53aW5kb3cuY2hhdFdpbmRvdy5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfSk7XHJcbmVsZWN0cm9uXzEuaXBjTWFpbi5oYW5kbGUoY29uc3RfMS5lbGVjdHJvbkV2ZW50Lk1BSU5fUE9TVF9LQUtJS09NSSwgZnVuY3Rpb24gKGV2ZW50LCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVfMTtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRSZXNfMi5wb3N0UmVzcG9uc2UoZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5ob3N0bmFtZSwgZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC50aHJlYWROdW1iZXIsIGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQuYm9hcmRJZCwgbWVzc2FnZSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzdGFydFNlcnZlcl8xLnVwZGF0ZVJlcygpXTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRydWVdO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xyXG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc2FVSkJRV2xDTzBGQlEycENMRGhEUVVGM1FqdEJRVU40UWl4dFJFRkJhVVU3UVVGRGFrVXNPRVJCUVN0Q08wRkJReTlDTEN0Q1FVRXJRanRCUVVNdlFpeG5Sa0ZCYzBRN1FVRkRkRVFzYjBSQlFUaENPMEZCUXpsQ0xHbERRVUYzUXp0QlFVTjRReXd5UTBGQmFVUTdRVUZEYWtRc05rTkJRVEJETzBGQlF6RkRMREpEUVVGblJEdEJRVVZvUkN4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSE8wbEJRMlFzUlVGQlJUdEJRVU5LTEVOQlFVTXNRMEZCUXp0QlFVVkdMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVc1ZVRkJReXhIUVVGSE8wbEJRMnhETEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycENMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVWdzZVVKQlFYbENPMEZCUTNwQ0xFbEJRVTBzUjBGQlJ5eEhRVUZITEd0Q1FVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRE8wRkJSWHBDTEZOQlFWTTdRVUZEVkN4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExIbENRVUY1UWl4RlFVRkZMRVZCUVVVN1NVRkRjRU1zYzBKQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc0swTkJRU3RETEVOQlFVTXNRMEZCUXp0SlFVTXpSQ3hIUVVGSExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdRMEZEV2p0QlFVVkVMSE5DUVVGSExFTkJRVU1zU1VGQlNTeERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPMEZCUlRGQ0xFZEJRVWNzUTBGQlF5eDVRa0ZCZVVJc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRmNrTXNTVUZCVFN4UlFVRlJMRWRCUVVjc1kwRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1FVRkZlRVFzWTBGQll6dEJRVU5rTERoRVFVRTRSRHRCUVVNNVJDeEpRVUZOTEVWQlFVVXNSMEZCUnl4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFTkJRVU03UVVGRGNFTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVVZzUWl4clFrRkJhMEk3UVVGRGJFSXNTVUZCVFN4aFFVRmhMRWRCUVVjc2EwSkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTTdRVUZGTjBNc05FSkJRVFJDTzBGQlF6VkNMRlZCUVZVc1EwRkJReXhSUVVGUkxFZEJRVWM3U1VGRGNFSXNUVUZCVFN4RlFVRkZPMUZCUTA0c1ZVRkJWU3hGUVVGRkxFbEJRVmM3VVVGRGRrSXNWVUZCVlN4RlFVRkZMRWxCUVZjN1MwRkRlRUk3U1VGRFJDeEpRVUZKTEVWQlFVVTdVVUZEU2l4VFFVRlRMRVZCUVVVc1JVRkJSVHRSUVVOaUxFdEJRVXNzUlVGQlJUdFpRVU5NTEVkQlFVY3NSVUZCUlN4SlFVRlhPMWxCUTJoQ0xGVkJRVlVzUlVGQlJTeEZRVUZGTzFOQlEyWTdVVUZEUkN4TlFVRk5MRVZCUVVVN1dVRkRUaXhIUVVGSExFVkJRVVVzU1VGQlZ6dFpRVU5vUWl4UFFVRlBMRVZCUVVVc1NVRkJWenRaUVVOd1FpeFpRVUZaTEVWQlFVVXNTVUZCVnp0WlFVTjZRaXhSUVVGUkxFVkJRVVVzU1VGQlZ6dFpRVU55UWl4SlFVRkpMRVZCUVVVc1JVRkJSVHRUUVVOVU8wdEJRMFk3UTBGRFJpeERRVUZETzBGQlJVWXNhMEpCUVd0Q08wRkJRMnhDTEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc2JVSkJRVzFDTEVWQlFVVTdTVUZETVVJc2MwTkJRWE5ETzBsQlEzUkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dEpRVU5ZTEVsQlFVazdRVUZEVGl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVWSUxIRkNRVUZ4UWp0QlFVTnlRaXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlR0SlFVTmtMRWxCUVUwc1pVRkJaU3hIUVVGSExDdENRVUZwUWl4RFFVRkRPMUZCUTNoRExGbEJRVmtzUlVGQlJTeEhRVUZITzFGQlEycENMR0ZCUVdFc1JVRkJSU3hIUVVGSE8wdEJRMjVDTEVOQlFVTXNRMEZCUXp0SlFVVklMRFJDUVVFMFFqdEpRVU0xUWl4SlFVRk5MRTlCUVU4c1IwRkJSeXhKUVVGSkxHRkJRV0VzUTBGQlF6dFJRVU5vUXl4WlFVRlpPMUZCUTFvc1EwRkJReXhGUVVGRkxHVkJRV1VzUTBGQlF5eERRVUZETzFGQlEzQkNMRU5CUVVNc1JVRkJSU3hsUVVGbExFTkJRVU1zUTBGQlF6dFJRVU53UWl4TFFVRkxMRVZCUVVVc1pVRkJaU3hEUVVGRExFdEJRVXM3VVVGRE5VSXNUVUZCVFN4RlFVRkZMR1ZCUVdVc1EwRkJReXhOUVVGTk8xRkJSVGxDTEdOQlFXTXNSVUZCUlN4SlFVRkpPMUZCUTNCQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTzFGQlEyUXNZMEZCWXl4RlFVRkZPMWxCUTJRc1pVRkJaU3hGUVVGRkxFbEJRVWs3VTBGRGRFSTdVVUZEUkN4WFFVRlhMRVZCUVVVc1NVRkJTVHRMUVVOc1FpeERRVUZETEVOQlFVTTdTVUZEU0N4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVkQlFVY3NUMEZCVHl4RFFVRkRPMGxCUTJoRUxHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1NVRkZhRU1zVDBGQlR5eERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVNMVFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJSWFJDTERCQ1FVRXdRanRKUVVNeFFpeFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMR05CUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eEZRVUZGTEhkQ1FVRjNRaXhEUVVGRExFTkJRVU1zUTBGQlF6dEpRVVZ1UlN4eFFrRkJjVUk3U1VGRGNrSXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlF5eExRVUZMTzFGQlEzaENMSGRDUVVGM1FqdFJRVU40UWl4TFFVRkxMRU5CUVVNc1kwRkJZeXhGUVVGRkxFTkJRVU03VVVGRGRrSXNhVUpCUVUwN1lVRkRTQ3hqUVVGakxFTkJRVU1zVDBGQlR5eEZRVUZGTzFsQlEzWkNMRWxCUVVrc1JVRkJSU3hWUVVGVk8xbEJRMmhDTEU5QlFVOHNSVUZCUlN4RFFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFTkJRVU03V1VGRGRFSXNZVUZCWVR0WlFVTmlMRTlCUVU4c1JVRkJSU3hUUVVGVE8xTkJRMjVDTEVOQlFVTTdZVUZEUkN4SlFVRkpMRU5CUVVNc1ZVRkJReXhMUVVGTE8xbEJRMVlzU1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4TFFVRkxMRU5CUVVNc1JVRkJSVHRuUWtGRGVFSXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yRkJRMW83VVVGRFNDeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTlFMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJRMGdzVDBGQlR5eERRVUZETEVWQlFVVXNRMEZCUXl4UlFVRlJMRVZCUVVVN1VVRkRia0lzYzBKQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVU03VVVGRGVFSXNSMEZCUnl4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wbEJRMklzUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGU0N4WlFVRlpPMGxCUTFvc2MwTkJRWE5ETzBsQlJYUkRMRmxCUVZrN1NVRkRXaXhKUVVGSkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdTVUZEYUVJc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXp0UlFVTnVRaXhKUVVGSkxFZEJRVWNzU1VGQlNTeGxRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1VVRkRNVUlzU1VGQlRTeFhRVUZYTEVkQlFVY3NaVUZCU1N4RFFVRkRMR2xDUVVGcFFpeERRVUZETzFsQlEzcERPMmRDUVVORkxFdEJRVXNzUlVGQlJTeEpRVUZKTzJkQ1FVTllMRXRCUVVzc1JVRkJSVHR2UWtGRFRDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1owSkJRMnhDTEVOQlFVTTdZVUZEUmp0WlFVTkVPMmRDUVVORkxFdEJRVXNzUlVGQlJTeE5RVUZOTzJkQ1FVTmlMRXRCUVVzc1JVRkJSVHR2UWtGRFRDeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTJoRUxFTkJRVU03WVVGRFJqdFpRVU5FTzJkQ1FVTkZMRXRCUVVzc1JVRkJSU3hKUVVGSk8yZENRVU5ZTEV0QlFVc3NSVUZCUlR0dlFrRkRUQ3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdaMEpCUTJ4Q0xFTkJRVU03WVVGRFJqdFRRVU5HTEVOQlFVTXNRMEZCUXp0UlFVTklMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdVVUZETTBJc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0UlFVTnFReXhwUWtGQmFVSTdVVUZEYWtJc1NVRkJTU3hsUVVGbExFZEJRVWNzUzBGQlN5eERRVUZETzFGQlF6VkNMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFVOHNTMEZCU3pzN096dDNRa0ZETTBJc1pVRkJaU3hIUVVGSExFdEJRVXNzUTBGQlF6dDNRa0ZEZUVJc2NVSkJRVTBzV1VGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkJPenQzUWtGQmFFSXNVMEZCWjBJc1EwRkJRenQzUWtGRGFrSXNTVUZCU1N4bFFVRmxPelJDUVVGRkxITkNRVUZQTzNkQ1FVTTFRaXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03T3pzN1lVRkRMME1zUTBGQlF5eERRVUZETzFGQlEwZ3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhqUVVGakxFVkJRVVVzVlVGQlF5eExRVUZMTzFsQlF6VkNMR1ZCUVdVc1IwRkJSeXhKUVVGSkxFTkJRVU03V1VGRGRrSXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8xRkJRMnhDTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUTB3c1EwRkJReXhEUVVGRExFTkJRVU03U1VGRlNDeFZRVUZWTzBsQlExWXNaMEpCUVUwc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF6dEpRVVZ5UWl4blFrRkJaMElzUlVGQlJTeERRVUZETzBGQlEzSkNMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJSVWdzU1VGQlRTeG5Ra0ZCWjBJc1IwRkJSenRKUVVOMlFpeEpRVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMR0ZCUVdFc1EwRkJRenRSUVVOdVF5eExRVUZMTEVWQlFVVXNSMEZCUnp0UlFVTldMR05CUVdNc1JVRkJSU3hKUVVGSk8xRkJRM0JDTEVsQlFVa3NSVUZCUlN4UlFVRlJPMUZCUTJRc1kwRkJZeXhGUVVGRk8xbEJRMlFzWlVGQlpTeEZRVUZGTEVsQlFVazdVMEZEZEVJN1VVRkRSQ3hqUVVGak8xRkJRMlFzVjBGQlZ5eEZRVUZGTEVsQlFVazdVVUZEYWtJc1VVRkJVU3hGUVVGRkxFdEJRVXM3UzBGRGFFSXNRMEZCUXl4RFFVRkRPMGxCUTBnc1YwRkJWenRKUVVOWUxGVkJRVlVzUTBGQlF5eFJRVUZSTEVWQlFVVXNRMEZCUXp0SlFVVjBRaXd3UWtGQk1FSTdTVUZETVVJc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eGpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3gxUWtGQmRVSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1NVRkZja1VzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZETzBsQlEzaERMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZGZWtJc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJRenRKUVVOdVJDeDVRMEZCZVVNN1FVRkRNME1zUTBGQlF5eERRVUZETzBGQlJVWXNhMEpCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zY1VKQlFXRXNRMEZCUXl4elFrRkJjMElzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4UFFVRlBPMGxCUTJ4RkxFOUJRVThzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNN1FVRkRiRU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEU0N4clFrRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eHhRa0ZCWVN4RFFVRkRMSE5DUVVGelFpeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVhkRE8wbEJRMjVITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hIUVVGSExFOUJRVThzUTBGQlF6dEpRVU51UXl4UFFVRlBPMEZCUTFRc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFNDeHJRa0ZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXh4UWtGQllTeERRVUZETEd0Q1FVRnJRaXhGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFXdEVPenRKUVVONlJ5eERRVUZCTEV0QlFVRXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZCTEVOQlFVTXNTVUZCU1N4WFFVRkpMRTlCUVU4c1JVRkJSVHRKUVVOd1JDeG5Ra0ZCVFN4RFFVRkRMR0ZCUVdFc1EwRkJReXhWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRKUVVONlJDeFBRVUZQTzBGQlExUXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRTQ3hyUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJZU3hEUVVGRExHOUNRVUZ2UWl4RlFVRkZMRlZCUVU4c1MwRkJTeXhGUVVGRkxFOUJRV1U3T3pzN2IwSkJRMnBGTEhGQ1FVRk5MSE5DUVVGaExFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVRTdPMmRDUVVGdVF5eEpRVUZKTEVkQlFVY3NVMEZCTkVJN1owSkJRM3BETEhOQ1FVRlBMRWxCUVVrc1JVRkJRenM3TzB0QlEySXNRMEZCUXl4RFFVRkRPMEZCUTBnc2EwSkJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNjVUpCUVdFc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4VlFVRlBMRXRCUVVzc1JVRkJSU3hIUVVGWExFVkJRVVVzU1VGQldUczdPenM3TzJkQ1FVVXhSU3hSUVVGUkxHVkJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4clFrRkJhMElzUTBGQlF5d3dRMEZCUnl4RFFVRkRMRzlEUVVGTExFVkJRVVVzUTBGQlF6dG5Ra0ZEY0VRc1dVRkJXU3hsUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMREJEUVVGSExFTkJRVU1zUlVGQlJTeFBRVUZQTEVOQlFVTXNTMEZCU3l4RlFVRkZMRVZCUVVVc2IwTkJRVXNzUlVGQlJTeERRVUZETzJkQ1FVTnVSU3hQUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4UlFVRlJMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVa3NXVUZCV1N4TlFVRkhMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4bFFVRmxMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU03WjBKQlJYUkpMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNSMEZCUnp0dlFrRkRhRU1zUjBGQlJ5eExRVUZCTzI5Q1FVTklMRkZCUVZFc1ZVRkJRVHR2UWtGRFVpeFpRVUZaTEdOQlFVRTdiMEpCUTFvc1QwRkJUeXhUUVVGQk8yOUNRVU5RTEVsQlFVa3NSVUZCUlN4RlFVRkZPMmxDUVVOVUxFTkJRVU03WjBKQlEwWXNjMEpCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU03WjBKQlJYUkZMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4WFFVRlhMRU5CUVVNc1NVRkJTU3hEUVVGRExIRkNRVUZoTEVOQlFVTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenRuUWtGRGRrWXNWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCU1N4SlFVRkpMRmRCUVUwc1IwRkJTeXhEUVVGRExFTkJRVU03WjBKQlJXNUZMSEZDUVVGTkxIVkNRVUZUTEVWQlFVVXNSVUZCUVRzN1owSkJRV3BDTEZOQlFXbENMRU5CUVVNN1owSkJRMnhDTEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXpzN096dExRVU12UXl4RFFVRkRMRU5CUVVNN1FVRkRTQ3hyUWtGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4eFFrRkJZU3hEUVVGRExHdENRVUZyUWl4RlFVRkZMRlZCUVU4c1MwRkJTeXhGUVVGRkxFOUJRV1U3T3pzN096dG5Ra0ZGTVVVc2NVSkJRVTBzY1VKQlFWa3NRMEZCUXl4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRVZCUVVVc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlFUczdaMEpCUVRWS0xGTkJRVFJLTEVOQlFVTTdaMEpCUXpkS0xIRkNRVUZOTEhWQ1FVRlRMRVZCUVVVc1JVRkJRVHM3WjBKQlFXcENMRk5CUVdsQ0xFTkJRVU03WjBKQlJXeENMSE5DUVVGUExFbEJRVWtzUlVGQlF6czdPMmRDUVVWYUxITkNRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVNc1EwRkJReXhEUVVGRE8yZENRVU5pTEhOQ1FVRlBMRXRCUVVzc1JVRkJRenM3T3p0TFFVVm9RaXhEUVVGRExFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG4vKipcclxuICogNWNo5LqS5o+bQkJT6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXHJcbiAqL1xyXG52YXIgYXhpb3NfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiYXhpb3NcIikpO1xyXG52YXIgaWNvbnZfbGl0ZV8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJpY29udi1saXRlXCIpKTsgLy8g5paH5a2X44Kz44O844OJ5aSJ5o+b55So44OR44OD44Kx44O844K4XHJcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcclxudmFyIGVuY29kaW5nX2phcGFuZXNlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImVuY29kaW5nLWphcGFuZXNlXCIpKTtcclxuLyoqIOOCueODhuODvOOCv+OCueOCs+ODvOODiTMwNCBfTm90TW9kaWZpZWQgKi9cclxudmFyIE5PVF9NT0RJRklFRCA9ICczMDQnO1xyXG52YXIgUkFOR0VfTk9UX1NBVElTRklBQkxFID0gJzQxNic7XHJcbi8qKiDmnIDntYLlj5blvpfjgrnjg6zjg4Pjg4kgKi9cclxudmFyIGxhc3RUaHJlYWRVcmwgPSAnJztcclxuLyoqIOacgOe1guODrOOCueeVquWPtyAqL1xyXG52YXIgbGFzdFJlc051bWJlciA9IDA7XHJcbi8qKiDmnIDntYLmm7TmlrDml6XmmYIgKi9cclxudmFyIGxhc3RNb2RpZmllZCA9IG51bGw7XHJcbi8qKiDmnIDntYLjg5DjgqTjg4jmlbAgKi9cclxudmFyIGxhc3RCeXRlID0gMDtcclxuLyoqIOOCueODrOS4gOimp+OCkuiqreOBv+i+vOOCgCAqL1xyXG5leHBvcnRzLnJlYWRCb2FyZCA9IGZ1bmN0aW9uIChib2FyZFVybCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXF1ZXN0VXJsLCBsaXN0LCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCBlcnJvcl8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybCA9IGJvYXJkVXJsICsgXCJzdWJqZWN0LnR4dFwiO1xyXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdTaGlmdF9KSVMnKTtcclxuICAgICAgICAgICAgICAgIC8vIOODkeODvOOCueOBl+OBpuagvOe0jVxyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoLmFwcGx5KGxpc3QsIHN0clxyXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtOyB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGxpbmUpIHsgcmV0dXJuIHBhcnNlVGhyZWFkTGlzdChib2FyZFVybCwgbGluZSk7IH0pKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yXzEuc3RhdHVzID09IE5PVF9NT0RJRklFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+adv+WPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgU5PVF9NT0RJRklFRCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMS5zdGF0dXMgPT0gUkFOR0VfTk9UX1NBVElTRklBQkxFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT5p2/5Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBUkFOR0VfTk9UX1NBVElTRklBQkxFJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8xLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuLyoqXHJcbiAqIOODrOOCueOCkuaKleeov+OBmeOCi1xyXG4gKiBAcGFyYW0gaG9zdG5hbWUg44Ob44K544OI5ZCN44CCaHR0cHM6Ly9ob2dlaG9nZS9cclxuICogQHBhcmFtIHRocmVhZE51bWJlciDjgrnjg6znlarlj7cgMTIzNDU2NzhcclxuICogQHBhcmFtIGJvYXJkSWQg5p2/SUQgcGFzdGEwNFxyXG4gKiBAcGFyYW0gbWVzc2FnZSDmipXnqL/mlodcclxuICovXHJcbmV4cG9ydHMucG9zdFJlcyA9IGZ1bmN0aW9uIChob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVuaWNvZGVBcnJheSwgaSwgc2ppc0FycmF5LCBlbmNvZGVkS2V5d29yZDtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHVuaWNvZGVBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG1lc3NhZ2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkucHVzaChtZXNzYWdlLmNoYXJDb2RlQXQoaSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2ppc0FycmF5ID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LmNvbnZlcnQodW5pY29kZUFycmF5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG86ICdTSklTJyxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAnVU5JQ09ERScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVuY29kZWRLZXl3b3JkID0gZW5jb2RpbmdfamFwYW5lc2VfMS5kZWZhdWx0LnVybEVuY29kZShzamlzQXJyYXkpO1xyXG4gICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oZW5jb2RlVVJJQ29tcG9uZW50LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0LnBvc3QoaG9zdG5hbWUgKyBcInRlc3QvYmJzLmNnaVwiLCBcIkZST009Jk1FU1NBR0U9XCIgKyBlbmNvZGVkS2V5d29yZCArIFwiJm1haWw9c2FnZSZrZXk9XCIgKyB0aHJlYWROdW1iZXIgKyBcIiZiYnM9XCIgKyBib2FyZElkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogJyovKicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUVuY29kaW5nJzogJ2d6aXAsIGRlZmxhdGUsIGJyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGVuY29kZVVSSUNvbXBvbmVudC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbnZhciBSZWFkNWNoID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVhZDVjaCgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOODrOOCueiqreOBv+i+vOOBv1xyXG4gICAgICAgICAqIOW8leaVsOOBp+aMh+WumuOBl+OBn+adv+OBi+OCieODrOOCueOCkuiqreOCgFxyXG4gICAgICAgICAqIOODrOOCueeVquWPt+OCkuaMh+WumuOBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+acgOaWsDHku7blj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gdGhyZWFkVXJsIOOCueODrFVSTFxyXG4gICAgICAgICAqIEBwYXJhbSByZXNOdW0g44Os44K555Wq5Y+3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZWFkID0gZnVuY3Rpb24gKHRocmVhZFVybCwgcmVzTnVtKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXAsIHJlcXVlc3RVcmwsIHJhbmdlLCBvcHRpb25zLCByZXNwb25zZUpzb24sIHJlc3BvbnNlLCBoZWFkZXJzLCBzdHIsIGVycm9yXzI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvZy5pbmZvKGBbUmVhZDVjaF0gdGhyZWFkVXJsPSR7dGhyZWFkVXJsfSByZXNOdW09JHtyZXNOdW19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadv+OChOacgOe1guaXpeODrOOCueeVquWPt+OBjOOBi+OCj+OBo+OBn+OCieacgOWIneOBi+OCieOBqOOCiuebtOOBmShsYXN0bW9kaWZp44GoIHJhbmdl44Gu44Oq44K744OD44OIKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhyZWFkVXJsICE9IGxhc3RUaHJlYWRVcmwgfHwgTnVtYmVyLmlzTmFOKHJlc051bSkgfHwgcmVzTnVtIDwgbGFzdFJlc051bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFRocmVhZFVybCA9IHRocmVhZFVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0Qnl0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5qc11yZXNldGUhISEhISEhISEhISEhISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdub3Jlc2V0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcCA9IC9cXC90ZXN0XFwvcmVhZC5jZ2koXFwvLispKFxcLy4rKVxcLy87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB0aHJlYWRVcmwucmVwbGFjZShyZXAsICckMS9kYXQkMi5kYXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2UgPSBsYXN0Qnl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWYtbW9kaWZpZWQtc2luY2UnOiBsYXN0TW9kaWZpZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6ICdieXRlcz0nICsgcmFuZ2UgKyAnLScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSByZXNwb25zZS5oZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXN0TW9kaWZpZWTjgahSYW5nZeabtOaWsOWHpueQhlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snbGFzdC1tb2RpZmllZCddICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZCA9IGhlYWRlcnNbJ2xhc3QtbW9kaWZpZWQnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBpY29udl9saXRlXzEuZGVmYXVsdC5kZWNvZGUoQnVmZmVyLmZyb20ocmVzcG9uc2UuZGF0YSksICdTaGlmdF9KSVMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Os44K544Od44Oz44K544Kq44OW44K444Kn44Kv44OI5L2c5oiQ44CBY29udGVudC1yYW5nZeOBjOOBguOCi+WgtOWQiOOBqOOBquOBhOWgtOWQiOOBp+WHpueQhuOCkuWIhuOBkeOCi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyc1snY29udGVudC1yYW5nZSddID09IG51bGwgfHwgbGFzdEJ5dGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucmVhZF1jb250ZW50LXJhbmdlPScgKyBoZWFkZXJzWydjb250ZW50LXJhbmdlJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VOZXdSZXNwb25zZShzdHIsIHJlc051bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBwdXJzZURpZmZSZXNwb25zZShzdHIsIHJlc051bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5Y+W5b6X44OQ44Kk44OI5pWw6KGo56S6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJzWydjb250ZW50LWxlbmd0aCddICE9IG51bGwgJiYgcmVzcG9uc2VKc29uLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RCeXRlID0gbGFzdEJ5dGUgKyBwYXJzZUludChoZWFkZXJzWydjb250ZW50LWxlbmd0aCddKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLnRyYWNlKCdbUmVhZDVjaC5yZWFkXWxhc3RCeXRlPScgKyBsYXN0Qnl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUpzb24gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yXzIuc3RhdHVzID09IE5PVF9NT0RJRklFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcignW1JlYWQ1Y2guanNdNWNo57O7QkJT44Os44K55Y+W5b6XQVBJ44Oq44Kv44Ko44K544OI44Ko44Op44O844CBTk9UX01PRElGSUVEJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JfMi5zdGF0dXMgPT0gUkFOR0VfTk9UX1NBVElTRklBQkxFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPjg6zjgrnlj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFSQU5HRV9OT1RfU0FUSVNGSUFCTEUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZWN0cm9uX2xvZ18xLmRlZmF1bHQuZXJyb3IoJ1tSZWFkNWNoLmpzXTVjaOezu0JCU+ODrOOCueWPluW+l0FQSeODquOCr+OCqOOCueODiOOCqOODqeODvOOAgW1lc3NhZ2U9JyArIGVycm9yXzIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VKc29uXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVhZDVjaDtcclxufSgpKTtcclxuLyoqXHJcbiAqIOWPluW+l+OBl+OBn+ODrOOCueODneODs+OCue+8iOikh+aVsO+8ieOBruODkeODvOOCuVxyXG4gKiDmiLvjgorjgajjgZfjgabjg5Hjg7zjgrnjgZfjgZ9qc29u44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U44GZXHJcbiAqIEBwYXJhbSByZXMg5p2/44GL44KJ6L+U5Y2044GV44KM44GfZGF0XHJcbiAqIEBwYXJhbSByZXNOdW0g44Oq44Kv44Ko44K544OI44GV44KM44Gf44Os44K555Wq5Y+3XHJcbiAqL1xyXG52YXIgcHVyc2VOZXdSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIHJlc051bSkge1xyXG4gICAgLy8g57WQ5p6c44KS5qC857SN44GZ44KL6YWN5YiXXHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAvLyDjg6zjgrnnlarlj7dcclxuICAgIHZhciBudW0gPSAwO1xyXG4gICAgLy8g5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcclxuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcclxuICAgIC8vIOaWsOedgOOBquOBl+OBquOCieaIu+OCi+OAglxyXG4gICAgaWYgKHJlc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvLyDphY3liJfjga7mnIDlvozjgavnqbrjga7opoHntKDjgYzlhaXjgovjgZPjgajjgYzjgYLjgovjga7jgaflj5bjgorpmaTjgY9cclxuICAgIGlmIChyZXNBcnJheVtyZXNBcnJheS5sZW5ndGggLSAxXS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXNBcnJheS5wb3AoKTtcclxuICAgIH1cclxuICAgIC8vIOODrOOCueaMh+WumuOBquOBl+OBruWgtOWQiOacgOW+jOOBrjHku7blj5blvpdcclxuICAgIGlmIChOdW1iZXIuaXNOYU4ocmVzTnVtKSB8fCByZXNOdW0gPCAxKSB7XHJcbiAgICAgICAgbnVtID0gcmVzQXJyYXkubGVuZ3RoIC0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG51bSA9IHJlc051bSAtIDE7XHJcbiAgICB9XHJcbiAgICAvLyAx6KGM44GU44Go44Gr44OR44O844K544GZ44KLXHJcbiAgICBmb3IgKDsgbnVtIDwgcmVzQXJyYXkubGVuZ3RoOyBudW0rKykge1xyXG4gICAgICAgIC8vIOODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xyXG4gICAgICAgIGlmIChyZXNBcnJheVtudW1dLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VSZXNwb25zZShyZXNBcnJheVtudW1dLCBudW0gKyAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGFzdFJlc051bWJlciA9IG51bSArIDE7XHJcbiAgICAvLyDjg5Hjg7zjgrnjgZfjgZ/jgqrjg5bjgrjjgqfjgq/jg4jjga7phY3liJfjgpLov5TljbRcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbi8qKlxyXG4gKiDlj5blvpfjgZfjgZ/jg6zjgrnjg53jg7PjgrnvvIjopIfmlbDvvInjga7jg5Hjg7zjgrlcclxuICog5oi744KK44Go44GX44Gm44OR44O844K544GX44GfanNvbuOCquODluOCuOOCp+OCr+ODiOOBrumFjeWIl+OCkui/lOOBmVxyXG4gKiBAcGFyYW0gcmVzIOadv+OBi+OCiei/lOWNtOOBleOCjOOBn2RhdDHooYzliIZcclxuICogQHBhcmFtIHJlc051bSDjg6rjgq/jgqjjgrnjg4jjgZXjgozjgZ/jg6zjgrnnlarlj7dcclxuICovXHJcbnZhciBwdXJzZURpZmZSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXMsIHJlc051bSkge1xyXG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIC8vIOODrOOCueeVquWPt1xyXG4gICAgdmFyIG51bSA9IHJlc051bTtcclxuICAgIC8v5paw552A44Os44K544KS5pS56KGM44GU44Go44GrU3BsaXTjgZnjgotcclxuICAgIHZhciByZXNBcnJheSA9IHJlcy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtcclxuICAgIC8vIOaWsOedgOOBquOBl+OBquOCieaIu+OCi+OAglxyXG4gICAgaWYgKHJlc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyDphY3liJfjga7mnIDlvozjgavnqbrjga7opoHntKDjgYzlhaXjgovjgZPjgajjgYzjgYLjgovjga7jgaflj5bjgorpmaTjgY9cclxuICAgICAgICBpZiAocmVzQXJyYXlbcmVzQXJyYXkubGVuZ3RoIC0gMV0ubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmVzQXJyYXkucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS50cmFjZSgnW1JlYWQ1Y2gucHVyc2VEaWZmUmVzcG9uc2Vd5Y+W5b6X44Os44K555Wq5Y+3PScgKyBudW0pO1xyXG4gICAgLy8x6KGM44GU44Go44Gr44OR44O844K544GZ44KLXHJcbiAgICByZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIC8v44OR44O844K544Oh44K944OD44OJ5ZG844Gz5Ye644GXXHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGFyc2VSZXNwb25zZSh2YWx1ZSwgbnVtKSk7XHJcbiAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g44OR44O844K544GX44Gf44Kq44OW44K444Kn44Kv44OI44Gu6YWN5YiX44KS6L+U5Y20XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG4vKipcclxuICog44K544Os5LiA6Kan44Gu44OR44O844K5XHJcbiAqIEBwYXJhbSBTdHJpbmcgLy8gcmVzIOODrOOCueODneODs+OCuTHjg6zjgrlcclxuICogQHBhcmFtIEludGVnZXIgLy8gbnVtIOODrOOCueeVqu+8iDDjgrnjgr/jg7zjg4jvvIlcclxuICovXHJcbnZhciBwYXJzZVRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwsIHN1YmplY3RMaW5lKSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xyXG4gICAgLy9BUEnjga7ov5TljbTlgKTjgpI8PuOBp+WIhuWJslxyXG4gICAgLy/jg6zjgrnjga7opoHntKBcclxuICAgIC8vMDpkYXTlkI1cclxuICAgIC8vMTrjgrnjg6zjgr/jgqTvvIjjg6zjgrnmlbDvvIlcclxuICAgIHZhciBzcGxpdFJlcyA9IHN1YmplY3RMaW5lLnNwbGl0KCc8PicpO1xyXG4gICAgY29uc29sZS5sb2coc3BsaXRSZXMpO1xyXG4gICAgdmFyIGRhdE51bSA9IHNwbGl0UmVzWzBdLnJlcGxhY2UoJy5kYXQnLCAnJyk7XHJcbiAgICB2YXIgaG9zdG5hbWUgPSAoX2IgPSAoX2EgPSBib2FyZFVybC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8uKz9cXC8vKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcclxuICAgIHZhciBib2FyZE5hbWUgPSBib2FyZFVybC5yZXBsYWNlKGhvc3RuYW1lLCAnJyk7XHJcbiAgICB2YXIgdXJsID0gaG9zdG5hbWUgKyBcInRlc3QvcmVhZC5jZ2kvXCIgKyBib2FyZE5hbWUgKyBkYXROdW0gKyBcIi9cIjtcclxuICAgIHZhciB0aXRsZVRlbXAgPSBzcGxpdFJlc1sxXTtcclxuICAgIHZhciBuYW1lID0gKF9kID0gKF9jID0gdGl0bGVUZW1wLm1hdGNoKC8oLio/KSBcXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6ICfimIXlj5blvpflpLHmlZfimIUnO1xyXG4gICAgdmFyIHJlc051bSA9IE51bWJlcigoX2UgPSB0aXRsZVRlbXAubWF0Y2goL1xcKFxcZCtcXCkkLykpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVswXS5yZXBsYWNlKC9cXCh8XFwpL2csICcnKSk7XHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICByZXNOdW06IHJlc051bSxcclxuICAgIH07XHJcbn07XHJcbi8qKlxyXG4gKiDjg6zjgrnjga7jg5Hjg7zjgrlcclxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxyXG4gKiBAcGFyYW0gSW50ZWdlciAvLyBudW0g44Os44K555Wq77yIMOOCueOCv+ODvOODiO+8iVxyXG4gKi9cclxudmFyIHBhcnNlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzLCBudW0pIHtcclxuICAgIC8vQVBJ44Gu6L+U5Y205YCk44KSPD7jgafliIblibJcclxuICAgIC8v44Os44K544Gu6KaB57SgXHJcbiAgICAvLzA65ZCN5YmNXHJcbiAgICAvLzE644Oh44Ki44OJXHJcbiAgICAvLzI65pel5LuY44GoSUQg77yIMjAxOS8xMS8wMyjml6UpIDA4OjU1OjAwIElEOmthbmlrYW5p77yJ44G/44Gf44GE44Gr6KGo56S6XHJcbiAgICAvLzM65pys5paHXHJcbiAgICAvLzQ644K544Os44K/44KkIO+8iDHjg6zjgrnnm67jga7jgb/vvIlcclxuICAgIHZhciBzcGxpdFJlcyA9IHJlcy5zcGxpdCgnPD4nKTtcclxuICAgIC8vIOaXpeS7mOOBqElE5YiG6Zui5Yem55CG44CBJyBJRDon44Gn5Yy65YiH44KLXHJcbiAgICB2YXIgZGF0ZUlkID0gc3BsaXRSZXNbMl0uc3BsaXQoJyBJRDonKTtcclxuICAgIHZhciBkYXRlID0gZGF0ZUlkWzBdO1xyXG4gICAgdmFyIGlkID0gZGF0ZUlkLmxlbmd0aCA9PT0gMiA/IGRhdGVJZFsxXSA6ICcnO1xyXG4gICAgdmFyIHJlc0pzb24gPSB7XHJcbiAgICAgICAgbnVtYmVyOiBudW0sXHJcbiAgICAgICAgbmFtZTogc3BsaXRSZXNbMF0sXHJcbiAgICAgICAgZW1haWw6IHNwbGl0UmVzWzFdLFxyXG4gICAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgICAgdGV4dDogc3BsaXRSZXNbM10sXHJcbiAgICAgICAgLy8gdGhyZWFkVGl0bGU6IHNwbGl0UmVzWzRdLFxyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBpbWdVcmw6ICcnLFxyXG4gICAgfTtcclxuICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOOCkui/lOWNtFxyXG4gICAgcmV0dXJuIHJlc0pzb247XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJlYWQ1Y2g7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVVtVmhaRFZqYUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbEpsWVdRMVkyZ3VkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkJRVHM3UjBGRlJ6dEJRVU5JTEdkRVFVRnJSRHRCUVVOc1JDd3dSRUZCSzBJc1EwRkJReXhuUWtGQlowSTdRVUZEYUVRc09FUkJRU3RDTzBGQlF5OUNMSGRGUVVGNVF6dEJRVVY2UXl3clFrRkJLMEk3UVVGREwwSXNTVUZCVFN4WlFVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRek5DTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlJYQkRMR1ZCUVdVN1FVRkRaaXhKUVVGSkxHRkJRV0VzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZGtJc1lVRkJZVHRCUVVOaUxFbEJRVWtzWVVGQllTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjBRaXhoUVVGaE8wRkJRMklzU1VGQlNTeFpRVUZaTEVkQlFXdENMRWxCUVVrc1EwRkJRenRCUVVOMlF5eGhRVUZoTzBGQlEySXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJSV3BDTEdkQ1FVRm5RanRCUVVOSUxGRkJRVUVzVTBGQlV5eEhRVUZITEZWQlFVOHNVVUZCWjBJN096czdPMmRDUVVONFF5eFZRVUZWTEVkQlFVMHNVVUZCVVN4blFrRkJZU3hEUVVGRE8yZENRVU4wUXl4SlFVRkpMRWRCUVhsRExFVkJRVVVzUTBGQlF6dG5Ra0ZIYUVRc1QwRkJUeXhIUVVGMVFqdHZRa0ZEYkVNc1IwRkJSeXhGUVVGRkxGVkJRVlU3YjBKQlEyWXNUVUZCVFN4RlFVRkZMRXRCUVVzN2IwSkJRMklzVDBGQlR5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpPMjlDUVVOcVFpeFpRVUZaTEVWQlFVVXNZVUZCWVR0cFFrRkROVUlzUTBGQlF6czdPenRuUWtGSmFVSXNjVUpCUVUwc1pVRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZCT3p0blFrRkJMMElzVVVGQlVTeEhRVUZITEZOQlFXOUNPMmRDUVU4dlFpeEhRVUZITEVkQlFVY3NiMEpCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdaMEpCUTJ4RkxGVkJRVlU3WjBKQlExWXNTVUZCU1N4RFFVRkRMRWxCUVVrc1QwRkJWQ3hKUVVGSkxFVkJRME1zUjBGQlJ6dHhRa0ZEU0N4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE8zRkNRVU5ZTEUxQlFVMHNRMEZCUXl4VlFVRkRMRWxCUVVrc1NVRkJTeXhQUVVGQkxFbEJRVWtzUlVGQlNpeERRVUZKTEVOQlFVTTdjVUpCUTNSQ0xFZEJRVWNzUTBGQlF5eFZRVUZETEVsQlFVa3NTVUZCU3l4UFFVRkJMR1ZCUVdVc1EwRkJReXhSUVVGUkxFVkJRVVVzU1VGQlNTeERRVUZETEVWQlFTOUNMRU5CUVN0Q0xFTkJRVU1zUlVGRGFrUTdPenM3WjBKQlJVWXNTVUZCU1N4UFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxGbEJRVmtzUlVGQlJUdHZRa0ZEYUVNc2MwSkJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNaMFJCUVdkRUxFTkJRVU1zUTBGQlF6dHBRa0ZETjBRN2NVSkJRVTBzU1VGQlNTeFBRVUZMTEVOQlFVTXNUVUZCVFN4SlFVRkpMSEZDUVVGeFFpeEZRVUZGTzI5Q1FVTm9SQ3h6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4NVJFRkJlVVFzUTBGQlF5eERRVUZETzJsQ1FVTjBSVHR4UWtGQlRUdHZRa0ZEVEN4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5dzBRMEZCTkVNc1IwRkJSeXhQUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdhVUpCUTNwRk8yZENRVU5FTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0dlFrRkhkRU1zYzBKQlFVOHNTVUZCU1N4RlFVRkRPenM3UzBGRFlpeERRVUZETzBGQlJVWTdPenM3T3p0SFFVMUhPMEZCUTFVc1VVRkJRU3hQUVVGUExFZEJRVWNzVlVGQlR5eFJRVUZuUWl4RlFVRkZMRmxCUVc5Q0xFVkJRVVVzVDBGQlpTeEZRVUZGTEU5QlFXVTdPenM3TzJkQ1FVVTVSaXhaUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjRRaXhMUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNaRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTXhRenRuUWtGRFN5eFRRVUZUTEVkQlFVY3NNa0pCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzI5Q1FVTXZReXhGUVVGRkxFVkJRVVVzVFVGQlRUdHZRa0ZEVml4SlFVRkpMRVZCUVVVc1UwRkJVenRwUWtGRGFFSXNRMEZCUXl4RFFVRkRPMmRDUVVkSExHTkJRV01zUjBGQlJ5d3lRa0ZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGblFpeERRVUZETEVOQlFVTTdaMEpCUXpWRUxESkRRVUV5UXp0blFrRkZNME1zY1VKQlFVMHNaVUZCU3l4RFFVRkRMRWxCUVVrc1EwRkJTU3hSUVVGUkxHbENRVUZqTEVWQlFVVXNiVUpCUVdsQ0xHTkJRV01zZFVKQlFXdENMRmxCUVZrc1lVRkJVU3hQUVVGVExFVkJRVVU3ZDBKQlF6RklMRTlCUVU4c1JVRkJSVHMwUWtGRFVDeE5RVUZOTEVWQlFVVXNTMEZCU3pzMFFrRkRZaXhqUVVGakxFVkJRVVVzYlVOQlFXMURPelJDUVVOdVJDeHBRa0ZCYVVJc1JVRkJSU3h0UWtGQmJVSTdlVUpCUTNaRE8zRkNRVU5HTEVOQlFVTXNSVUZCUVRzN1owSkJVa1lzTWtOQlFUSkRPMmRDUVVVelF5eFRRVTFGTEVOQlFVTTdPenM3UzBGRFNpeERRVUZETzBGQlJVWTdTVUZCUVR0UlFVRkJMR2xDUVRCR1F6dFJRWHBHUXpzN096czdPMWRCVFVjN1VVRkRTQ3hUUVVGSkxFZEJRVWNzVlVGQlR5eFRRVUZwUWl4RlFVRkZMRTFCUVdNN096czdPM2RDUVVNM1F5eHBSVUZCYVVVN2QwSkJRMnBGTEd0RVFVRnJSRHQzUWtGRGJFUXNTVUZCU1N4VFFVRlRMRWxCUVVrc1lVRkJZU3hKUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1RVRkJUU3hIUVVGSExHRkJRV0VzUlVGQlJUczBRa0ZEYUVZc1lVRkJZU3hIUVVGSExGTkJRVk1zUTBGQlF6czBRa0ZETVVJc1dVRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF6czBRa0ZEY0VJc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6czBRa0ZEWWl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExHOURRVUZ2UXl4RFFVRkRMRU5CUVVNN2VVSkJRM0pFT3paQ1FVRk5PelJDUVVOTUxFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN2VVSkJRek5DTzNkQ1FVdExMRWRCUVVjc1IwRkJSeXhuUTBGQlowTXNRMEZCUXp0M1FrRkRka01zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRkxHTkJRV01zUTBGQlF5eERRVUZETzNkQ1FWZHdSQ3hMUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETzNkQ1FVVnFRaXhQUVVGUExFZEJRWFZDT3pSQ1FVTnNReXhIUVVGSExFVkJRVVVzVlVGQlZUczBRa0ZEWml4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeFBRVUZQTEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrN05FSkJRMnBDTEZsQlFWa3NSVUZCUlN4aFFVRmhPelJDUVVNelFpeFBRVUZQTEVWQlFVVTdaME5CUTFBc2JVSkJRVzFDTEVWQlFVVXNXVUZCV1R0blEwRkRha01zUzBGQlN5eEZRVUZGTEZGQlFWRXNSMEZCUnl4TFFVRkxMRWRCUVVjc1IwRkJSenMyUWtGRE9VSTdlVUpCUTBZc1EwRkJRenM3T3p0M1FrRkxhVUlzY1VKQlFVMHNaVUZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGQk96dDNRa0ZCTDBJc1VVRkJVU3hIUVVGSExGTkJRVzlDTzNkQ1FVY3ZRaXhQUVVGUExFZEJRVGhDTEZGQlFWRXNRMEZCUXl4UFFVRlBMRU5CUVVNN2QwSkJRelZFTEhsQ1FVRjVRanQzUWtGRGVrSXNTVUZCU1N4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzU1VGQlNTeEZRVUZGT3pSQ1FVTndReXhaUVVGWkxFZEJRVWNzVDBGQlR5eERRVUZETEdWQlFXVXNRMEZCUXl4RFFVRkRPM2xDUVVONlF6dDNRa0ZKU3l4SFFVRkhMRWRCUVVjc2IwSkJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNWMEZCVnl4RFFVRkRMRU5CUVVNN2QwSkJRMnhGTEN0RFFVRXJRenQzUWtGREwwTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1pVRkJaU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEZGQlFWRXNTVUZCU1N4RFFVRkRMRVZCUVVVN05FSkJRM0pFTEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc09FSkJRVGhDTEVkQlFVY3NUMEZCVHl4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRExFTkJRVU03TkVKQlEzcEZMRmxCUVZrc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU03ZVVKQlF6bERPelpDUVVGTk96UkNRVU5NTEZsQlFWa3NSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN2VVSkJReTlETzNkQ1FVVkVMRmRCUVZjN2QwSkJRMWdzU1VGQlNTeFBRVUZQTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zU1VGQlNTeEpRVUZKTEVsQlFVa3NXVUZCV1N4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3TkVKQlEyaEZMRkZCUVZFc1IwRkJSeXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4blFrRkJaMElzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPelJDUVVNNVJDeFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMSGxDUVVGNVFpeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRPM2xDUVVOeVJEczdPenQzUWtGRlJDeFpRVUZaTEVkQlFVY3NSVUZCUlN4RFFVRkRPM2RDUVVOc1FpeEpRVUZKTEU5QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hGUVVGRk96UkNRVU5vUXl4elFrRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eHBSRUZCYVVRc1EwRkJReXhEUVVGRE8zbENRVU01UkRzMlFrRkJUU3hKUVVGSkxFOUJRVXNzUTBGQlF5eE5RVUZOTEVsQlFVa3NjVUpCUVhGQ0xFVkJRVVU3TkVKQlEyaEVMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETERCRVFVRXdSQ3hEUVVGRExFTkJRVU03ZVVKQlEzWkZPelpDUVVGTk96UkNRVU5NTEhOQ1FVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExEWkRRVUUyUXl4SFFVRkhMRTlCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dDVRa0ZETVVVN2QwSkJRMFFzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4clFrRkJhMElzUTBGQlF5eERRVUZET3pSQ1FVZDBReXh6UWtGQlR5eFpRVUZaTEVWQlFVTTdPenRoUVVOeVFpeERRVUZETzBsQlEwb3NRMEZCUXp0SlFVRkVMR05CUVVNN1FVRkJSQ3hEUVVGRExFRkJNVVpFTEVsQk1FWkRPMEZCUlVRN096czdPMGRCUzBjN1FVRkRTQ3hKUVVGTkxHZENRVUZuUWl4SFFVRkhMRlZCUVVNc1IwRkJWeXhGUVVGRkxFMUJRV003U1VGRGJrUXNXVUZCV1R0SlFVTmFMRWxCUVUwc1RVRkJUU3hIUVVGMVF5eEZRVUZGTEVOQlFVTTdTVUZEZEVRc1QwRkJUenRKUVVOUUxFbEJRVWtzUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0SlFVVmFMRzlDUVVGdlFqdEpRVU53UWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEZsQlFWa3NRMEZCUXl4RFFVRkRPMGxCUTNwRExGbEJRVms3U1VGRFdpeEpRVUZKTEZGQlFWRXNRMEZCUXl4TlFVRk5MRXRCUVVzc1EwRkJReXhGUVVGRk8xRkJRM3BDTEU5QlFVOHNUVUZCVFN4RFFVRkRPMHRCUTJZN1NVRkRSQ3d5UWtGQk1rSTdTVUZETTBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzUTBGQlF5eEZRVUZGTzFGQlF6bERMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dExRVU5vUWp0SlFVVkVMRzFDUVVGdFFqdEpRVU51UWl4SlFVRkpMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVsQlFVa3NUVUZCVFN4SFFVRkhMRU5CUVVNc1JVRkJSVHRSUVVOMFF5eEhRVUZITEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGRE0wSTdVMEZCVFR0UlFVTk1MRWRCUVVjc1IwRkJSeXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEyeENPMGxCUlVRc1lVRkJZVHRKUVVOaUxFOUJRVThzUjBGQlJ5eEhRVUZITEZGQlFWRXNRMEZCUXl4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVU3VVVGRGJrTXNZMEZCWXp0UlFVTmtMRWxCUVVrc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkROVUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM0JFTzB0QlEwWTdTVUZEUkN4aFFVRmhMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU40UWl4dlFrRkJiMEk3U1VGRGNFSXNUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRhRUlzUTBGQlF5eERRVUZETzBGQlJVWTdPenM3TzBkQlMwYzdRVUZEU0N4SlFVRk5MR2xDUVVGcFFpeEhRVUZITEZWQlFVTXNSMEZCVnl4RlFVRkZMRTFCUVdNN1NVRkRjRVFzVjBGQlZ6dEpRVU5ZTEVsQlFVMHNUVUZCVFN4SFFVRjFReXhGUVVGRkxFTkJRVU03U1VGRGRFUXNUMEZCVHp0SlFVTlFMRWxCUVVrc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF6dEpRVVZxUWl4dFFrRkJiVUk3U1VGRGJrSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhaUVVGWk8wbEJRMW9zU1VGQlNTeFJRVUZSTEVOQlFVTXNUVUZCVFN4TFFVRkxMRU5CUVVNc1JVRkJSVHRSUVVONlFpeFBRVUZQTEUxQlFVMHNRMEZCUXp0TFFVTm1PMU5CUVUwN1VVRkRUQ3d5UWtGQk1rSTdVVUZETTBJc1NVRkJTU3hSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhOUVVGTkxFbEJRVWtzUTBGQlF5eEZRVUZGTzFsQlF6ZERMRkZCUVZFc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU5vUWp0TFFVTkdPMGxCUlVRc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eHZRMEZCYjBNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF6dEpRVU14UkN4WlFVRlpPMGxCUTFvc1VVRkJVU3hEUVVGRExFOUJRVThzUTBGQlF5eFZRVUZETEV0QlFVczdVVUZEY2tJc1lVRkJZVHRSUVVOaUxFbEJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1dVRkRjRUlzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEZGtNc1IwRkJSeXhGUVVGRkxFTkJRVU03VTBGRFVEdEpRVU5JTEVOQlFVTXNRMEZCUXl4RFFVRkRPMGxCUlVnc2IwSkJRVzlDTzBsQlEzQkNMRTlCUVU4c1RVRkJUU3hEUVVGRE8wRkJRMmhDTEVOQlFVTXNRMEZCUXp0QlFVVkdPenM3TzBkQlNVYzdRVUZEU0N4SlFVRk5MR1ZCUVdVc1IwRkJSeXhWUVVGRExGRkJRV2RDTEVWQlFVVXNWMEZCYlVJN08wbEJRelZFTEdWQlFXVTdTVUZEWml4UFFVRlBPMGxCUTFBc1VVRkJVVHRKUVVOU0xHRkJRV0U3U1VGRFlpeEpRVUZOTEZGQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBsQlEzcERMRTlCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdTVUZEZEVJc1NVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZGTDBNc1NVRkJUU3hSUVVGUkxHVkJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5d3dRMEZCUnl4RFFVRkRMRzlEUVVGTExFVkJRVVVzUTBGQlF6dEpRVU5vUlN4SlFVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRKUVVOcVJDeEpRVUZOTEVkQlFVY3NSMEZCVFN4UlFVRlJMSE5DUVVGcFFpeFRRVUZUTEVkQlFVY3NUVUZCVFN4TlFVRkhMRU5CUVVNN1NVRkZPVVFzU1VGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wbEJSVGxDTEVsQlFVMHNTVUZCU1N4bFFVRlhMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4UlFVRlJMRU5CUVVNN1NVRkRlRVVzU1VGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4UFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETERCRFFVRkhMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlRsRkxGbEJRVms3U1VGRFdpeFBRVUZQTzFGQlEwd3NSMEZCUnl4TFFVRkJPMUZCUTBnc1NVRkJTU3hOUVVGQk8xRkJRMG9zVFVGQlRTeFJRVUZCTzB0QlExQXNRMEZCUXp0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVWR096czdPMGRCU1VjN1FVRkRTQ3hKUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZETEVkQlFWY3NSVUZCUlN4SFFVRlhPMGxCUXpkRExHVkJRV1U3U1VGRFppeFBRVUZQTzBsQlExQXNUVUZCVFR0SlFVTk9MRTlCUVU4N1NVRkRVQ3h2UkVGQmIwUTdTVUZEY0VRc1RVRkJUVHRKUVVOT0xHbENRVUZwUWp0SlFVTnFRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wbEJRMnBETEhWQ1FVRjFRanRKUVVOMlFpeEpRVUZOTEUxQlFVMHNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMGxCUTNwRExFbEJRVTBzU1VGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRKUVVOMlFpeEpRVUZOTEVWQlFVVXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdTVUZGYUVRc1NVRkJUU3hQUVVGUExFZEJRV2RDTzFGQlF6TkNMRTFCUVUwc1JVRkJSU3hIUVVGSE8xRkJRMWdzU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRha0lzUzBGQlN5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1VVRkRiRUlzU1VGQlNTeEZRVUZGTEVsQlFVazdVVUZEVml4SlFVRkpMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF6dFJRVU5xUWl3MFFrRkJORUk3VVVGRE5VSXNSVUZCUlN4RlFVRkZMRVZCUVVVN1VVRkRUaXhOUVVGTkxFVkJRVVVzUlVGQlJUdExRVU5ZTEVOQlFVTTdTVUZGUml4WlFVRlpPMGxCUTFvc1QwRkJUeXhQUVVGUExFTkJRVU03UVVGRGFrSXNRMEZCUXl4RFFVRkRPMEZCUlVZc2EwSkJRV1VzVDBGQlR5eERRVUZESW4wPSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xyXG52YXIgcmVhZFNpdGFyYWJhXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vcmVhZFNpdGFyYWJhXCIpKTsgLy8g44GX44Gf44KJ44Gw6Kqt44G/6L6844G/55So44Oi44K444Ol44O844OrXHJcbnZhciBSZWFkNWNoXzEgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUmVhZDVjaFwiKSk7IC8vIDVjaOS6kuaPm+adv+iqreOBv+i+vOOBv+eUqOODouOCuOODpeODvOODq1xyXG52YXIgc2l0YXJhYmEgPSBuZXcgcmVhZFNpdGFyYWJhXzEuZGVmYXVsdCgpO1xyXG52YXIgcmVhZDVjaCA9IG5ldyBSZWFkNWNoXzEuZGVmYXVsdCgpO1xyXG4vLyDmjrLnpLrmnb/oqq3jgb/ovrzjgb/jg6Ljgrjjg6Xjg7zjg6vjgIHkuIDluqbmsbrlrprjgZfjgZ/jgonkvb/jgYTjgb7jgo/jgZnjgZ/jgoHjgavjgrDjg63jg7zjg5Djg6vlrqPoqIBcclxudmFyIGJic01vZHVsZSA9IG51bGw7XHJcbi8qKlxyXG4gKiDmjrLnpLrmnb/jga7jg6zjgrnjgpLlj5blvpfjgZnjgotcclxuICogQHBhcmFtIHRocmVhZFVybCDjgrnjg6zjga5VUkxcclxuICogQHBhcmFtIHJlc051bSDjgZPjga7nlarlj7fku6XpmY3jgpLlj5blvpfjgZnjgovjgILmjIflrprjgZfjgarjgYTloLTlkIjjga/mnIDmlrAx5Lu244KS5Y+W5b6X44CCXHJcbiAqL1xyXG5leHBvcnRzLmdldFJlcyA9IGZ1bmN0aW9uICh0aHJlYWRVcmwsIHJlc051bSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXNwb25zZSwgZV8xO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBbZ2V0UmVzXSAke3RocmVhZFVybH0gJHtyZXNOdW19YCk7XHJcbiAgICAgICAgICAgICAgICAvLyDjg6rjgq/jgqjjgrnjg4hVUkzjgpLop6PmnpDjgZfjgIHkvb/nlKjjgZnjgovjg6Ljgrjjg6Xjg7zjg6vjgpLlpInmm7TjgZnjgotcclxuICAgICAgICAgICAgICAgIGJic01vZHVsZSA9IGFuYWx5c0JCU05hbWUodGhyZWFkVXJsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGJic01vZHVsZS5yZWFkKHRocmVhZFVybCwgcmVzTnVtKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFtnZXRSZXMuanNdIGZldGNoICR7dGhyZWFkVXJsfSByZXNOdW0gPSAke3Jlc051bX0sIHJlc3VsdCA9ICR7cmVzcG9uc2UubGVuZ3RofWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlLm1hcChmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzKSwgeyBpbWdVcmw6ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgZWxlY3Ryb25fbG9nXzEuZGVmYXVsdC5lcnJvcihlXzEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFtdXTtcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5leHBvcnRzLmdldFRocmVhZExpc3QgPSBmdW5jdGlvbiAoYm9hcmRVcmwpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2l0YXJhYmFEb21haW47XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBzaXRhcmFiYURvbWFpbiA9ICdqYmJzLnNoaXRhcmFiYS5uZXQnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoYm9hcmRVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZWFkU2l0YXJhYmFfMS5yZWFkQm9hcmQoYm9hcmRVcmwpXTtcclxuICAgICAgICAgICAgY2FzZSAxOiBcclxuICAgICAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBfYS5zZW50KCldO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIFJlYWQ1Y2hfMS5yZWFkQm9hcmQoYm9hcmRVcmwpXTtcclxuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbmV4cG9ydHMucG9zdFJlc3BvbnNlID0gZnVuY3Rpb24gKGhvc3RuYW1lLCB0aHJlYWROdW1iZXIsIGJvYXJkSWQsIG1lc3NhZ2UpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2l0YXJhYmFEb21haW47XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmluZm8oXCJbcG9zdFJlc3BvbnNlXSBcIiArIGhvc3RuYW1lICsgXCIgXCIgKyB0aHJlYWROdW1iZXIgKyBcIiBcIiArIGJvYXJkSWQpO1xyXG4gICAgICAgICAgICAgICAgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcclxuICAgICAgICAgICAgICAgIGlmICghKGhvc3RuYW1lLmluZGV4T2Yoc2l0YXJhYmFEb21haW4pICE9PSAtMSkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVhZFNpdGFyYWJhXzEucG9zdFJlcyhob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTogXHJcbiAgICAgICAgICAgIC8vIFVSTOOBq+OBl+OBn+OCieOBsOODieODoeOCpOODs+WQjeOBjOWFpeOBo+OBpuOCjOOBsOOBl+OBn+OCieOBsFxyXG4gICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX2Euc2VudCgpXTtcclxuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBSZWFkNWNoXzEucG9zdFJlcyhob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKV07XHJcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG4vKlxyXG4gKiBVUkzjgpLjgb/jgabjganjgZPjga5CQlPjgYvliKTlrprjgZfjgabkvb/nlKjjgZnjgovjg6Ljgrjjg6Xjg7zjg6vjgpLov5TljbTjgZnjgotcclxuICovXHJcbnZhciBhbmFseXNCQlNOYW1lID0gZnVuY3Rpb24gKHRocmVhZFVybCkge1xyXG4gICAgLy8g44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCNXHJcbiAgICB2YXIgc2l0YXJhYmFEb21haW4gPSAnamJicy5zaGl0YXJhYmEubmV0JztcclxuICAgIC8vIOOBk+OCk+OBquaEn+OBmOOBp+W/heimgeOBq+W/nOOBmOOBpuWil+OChOOBl+OBpuOBhOOBkeOBsOOBhOOBhOOCk+OBmOOCg+OBre+8n1xyXG4gICAgLy8gY29uc3QgZG9ra2Fub0JCUyA9ICdkb2trYS5iYnMuY29tJztcclxuICAgIGlmICh0aHJlYWRVcmwuaW5kZXhPZihzaXRhcmFiYURvbWFpbikgIT09IC0xKSB7XHJcbiAgICAgICAgLy8gVVJM44Gr44GX44Gf44KJ44Gw44OJ44Oh44Kk44Oz5ZCN44GM5YWl44Gj44Gm44KM44Gw44GX44Gf44KJ44GwXHJcbiAgICAgICAgcmV0dXJuIHNpdGFyYWJhO1xyXG4gICAgfVxyXG4gICAgLy8g44Gp44GT44Gr44KC6Kmy5b2T44GX44Gq44GL44Gj44Gf44KJ44Go44KK44GC44GI44GaNWNo44GnXHJcbiAgICAvLyDjgZPjga7ovrrjgoLlr77lv5zjg4njg6HjgqTjg7Pjg6rjgrnjg4jjgajjgYvkvZzjgaPjgabjgaHjgoPjgpPjgajliKTlrprjgZfjgZ/jgbvjgYbjgYzjgojjgZXjgZ3jgYZcclxuICAgIHJldHVybiByZWFkNWNoO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2laMlYwVW1WekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTWlPbHNpWjJWMFVtVnpMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUVzT0VSQlFTdENPMEZCUlM5Q0xEWkVRVUUwUnl4RFFVRkRMR2xDUVVGcFFqdEJRVU01U0N4dFJFRkJjMFlzUTBGQlF5eHRRa0ZCYlVJN1FVRkRNVWNzU1VGQlRTeFJRVUZSTEVkQlFVY3NTVUZCU1N4elFrRkJXU3hGUVVGRkxFTkJRVU03UVVGRGNFTXNTVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hwUWtGQlR5eEZRVUZGTEVOQlFVTTdRVUZET1VJc2MwTkJRWE5ETzBGQlEzUkRMRWxCUVVrc1UwRkJVeXhIUVVGblF5eEpRVUZYTEVOQlFVTTdRVUZGZWtRN096czdSMEZKUnp0QlFVTlZMRkZCUVVFc1RVRkJUU3hIUVVGSExGVkJRVThzVTBGQmFVSXNSVUZCUlN4TlFVRmpPenM3T3pzN1owSkJSVEZFTEd0RVFVRnJSRHRuUWtGRmJFUXNPRUpCUVRoQ08yZENRVU01UWl4VFFVRlRMRWRCUVVjc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlVTeERRVUZETzJkQ1FVY3pRaXh4UWtGQlRTeFRRVUZUTEVOQlFVTXNTVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSU3hOUVVGTkxFTkJRVU1zUlVGQlFUczdaMEpCUVd4RUxGRkJRVkVzUjBGQlJ5eFRRVUYxUXp0blFrRkRlRVFzYVVkQlFXbEhPMmRDUVVWcVJ5eHpRa0ZCVHl4UlFVRlJMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVU1zUjBGQlJ6dDNRa0ZEZEVJc05rSkJRMHNzUjBGQlJ5eExRVU5PTEUxQlFVMHNSVUZCUlN4RlFVRkZMRWxCUTFZN2IwSkJRMG9zUTBGQlF5eERRVUZETEVWQlFVTTdPenRuUWtGRlNDeHpRa0ZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZEWWl4elFrRkJUeXhGUVVGRkxFVkJRVU03T3pzN1MwRkZZaXhEUVVGRE8wRkJSVmNzVVVGQlFTeGhRVUZoTEVkQlFVY3NWVUZCVHl4UlFVRm5RanM3T3pzN1owSkJRelZETEdOQlFXTXNSMEZCUnl4dlFrRkJiMElzUTBGQlF6dHhRa0ZEZUVNc1EwRkJRU3hSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGQkxFVkJRWFpETEhkQ1FVRjFRenRuUWtGSGJFTXNjVUpCUVUwc2QwSkJRV3RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRVZCUVVFN08xbEJSbnBETERCQ1FVRXdRanRaUVVNeFFpeEZRVUZGTzFsQlEwWXNjMEpCUVU4c1UwRkJhME1zUlVGQlF6dHZRa0ZGYmtNc2NVSkJRVTBzYlVKQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJRVHR2UWtGQmJrTXNjMEpCUVU4c1UwRkJORUlzUlVGQlF6czdPMHRCUlhaRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRlBMRkZCUVdkQ0xFVkJRVVVzV1VGQmIwSXNSVUZCUlN4UFFVRmxMRVZCUVVVc1QwRkJaVHM3T3pzN1owSkJRM3BITEhOQ1FVRkhMRU5CUVVNc1NVRkJTU3hEUVVGRExHOUNRVUZyUWl4UlFVRlJMRk5CUVVrc1dVRkJXU3hUUVVGSkxFOUJRVk1zUTBGQlF5eERRVUZETzJkQ1FVVTFSQ3hqUVVGakxFZEJRVWNzYjBKQlFXOUNMRU5CUVVNN2NVSkJRM2hETEVOQlFVRXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhqUVVGakxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUVN4RlFVRjJReXgzUWtGQmRVTTdaMEpCUld4RExIRkNRVUZOTEhOQ1FVRm5RaXhEUVVGRExGRkJRVkVzUlVGQlJTeFpRVUZaTEVWQlFVVXNUMEZCVHl4RlFVRkZMRTlCUVU4c1EwRkJReXhGUVVGQk96dFpRVVIyUlN3d1FrRkJNRUk3V1VGRE1VSXNjMEpCUVU4c1UwRkJaMFVzUlVGQlF6dHZRa0ZGYWtVc2NVSkJRVTBzYVVKQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1dVRkJXU3hGUVVGRkxFOUJRVThzUlVGQlJTeFBRVUZQTEVOQlFVTXNSVUZCUVR0dlFrRkJha1VzYzBKQlFVOHNVMEZCTUVRc1JVRkJRenM3TzB0QlJYSkZMRU5CUVVNN1FVRkZSanM3UjBGRlJ6dEJRVU5JTEVsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVVNc1UwRkJhVUk3U1VGRGRFTXNXVUZCV1R0SlFVTmFMRWxCUVUwc1kwRkJZeXhIUVVGSExHOUNRVUZ2UWl4RFFVRkRPMGxCUXpWRExEWkNRVUUyUWp0SlFVTTNRaXh6UTBGQmMwTTdTVUZGZEVNc1NVRkJTU3hUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8xRkJRelZETERCQ1FVRXdRanRSUVVNeFFpeFBRVUZQTEZGQlFWRXNRMEZCUXp0TFFVTnFRanRKUVVORUxIZENRVUYzUWp0SlFVTjRRaXh2UTBGQmIwTTdTVUZEY0VNc1QwRkJUeXhQUVVGUExFTkJRVU03UVVGRGFrSXNRMEZCUXl4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbi8qKlxyXG4gKiDjgZfjgZ/jgonjgbDoqq3jgb/ovrzjgb/nlKjjg6Ljgrjjg6Xjg7zjg6tcclxuICovXHJcbnZhciBheGlvc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJheGlvc1wiKSk7XHJcbnZhciBpY29udl9saXRlXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImljb252LWxpdGVcIikpOyAvLyDmloflrZfjgrPjg7zjg4nlpInmj5vnlKjjg5Hjg4PjgrHjg7zjgrhcclxudmFyIGVsZWN0cm9uX2xvZ18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJlbGVjdHJvbi1sb2dcIikpO1xyXG52YXIgZW5jb2RpbmdfamFwYW5lc2VfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZW5jb2RpbmctamFwYW5lc2VcIikpO1xyXG4vKiog44K544Os5LiA6Kan44KS6Kqt44G/6L6844KAICovXHJcbmV4cG9ydHMucmVhZEJvYXJkID0gZnVuY3Rpb24gKGJvYXJkVXJsKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJlcXVlc3RVcmwsIGxpc3QsIG9wdGlvbnMsIHJlc3BvbnNlLCBzdHIsIGVycm9yXzE7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VXJsID0gYm9hcmRVcmwgKyBcInN1YmplY3QudHh0XCI7XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDMgKiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQob3B0aW9ucyldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIHN0ciA9IGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ0VVQy1KUCcpO1xyXG4gICAgICAgICAgICAgICAgLy8g44OR44O844K544GX44Gm5qC857SNXHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2guYXBwbHkobGlzdCwgc3RyXHJcbiAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW07IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAobGluZSkgeyByZXR1cm4gcGFyc2VUaHJlYWRMaXN0KGJvYXJkVXJsLCBsaW5lKTsgfSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKCdbUmVhZDVjaC5qc101Y2jns7tCQlPmnb/lj5blvpdBUEnjg6rjgq/jgqjjgrnjg4jjgqjjg6njg7zjgIFtZXNzYWdlPScgKyBlcnJvcl8xLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb25uZWN0aW9uIGVycm9yJyk7XHJcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxpc3RdO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuLyoqXHJcbiAqIOODrOOCueOCkuaKleeov+OBmeOCi1xyXG4gKiBAcGFyYW0gaG9zdG5hbWUg44Ob44K544OI5ZCN44CCaHR0cHM6Ly9ob2dlaG9nZS9cclxuICogQHBhcmFtIHRocmVhZE51bWJlciDjgrnjg6znlarlj7cgMTIzNDU2NzhcclxuICogQHBhcmFtIGJvYXJkSWQg5p2/SUQgcGFzdGEwNFxyXG4gKiBAcGFyYW0gbWVzc2FnZSDmipXnqL/mlodcclxuICovXHJcbmV4cG9ydHMucG9zdFJlcyA9IGZ1bmN0aW9uIChob3N0bmFtZSwgdGhyZWFkTnVtYmVyLCBib2FyZElkLCBtZXNzYWdlKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHVuaWNvZGVBcnJheSwgaSwgc2ppc0FycmF5LCBlbmNvZGVkS2V5d29yZCwgZGlyLCBiYnM7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB1bmljb2RlQXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZXNzYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pY29kZUFycmF5LnB1c2gobWVzc2FnZS5jaGFyQ29kZUF0KGkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNqaXNBcnJheSA9IGVuY29kaW5nX2phcGFuZXNlXzEuZGVmYXVsdC5jb252ZXJ0KHVuaWNvZGVBcnJheSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvOiAnRVVDSlAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdVTklDT0RFJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZW5jb2RlZEtleXdvcmQgPSBlbmNvZGluZ19qYXBhbmVzZV8xLmRlZmF1bHQudXJsRW5jb2RlKHNqaXNBcnJheSk7XHJcbiAgICAgICAgICAgICAgICBkaXIgPSBib2FyZElkLnNwbGl0KCcvJylbMF07XHJcbiAgICAgICAgICAgICAgICBiYnMgPSBib2FyZElkLnNwbGl0KCcvJylbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBheGlvc18xLmRlZmF1bHQucG9zdChob3N0bmFtZSArIFwiYmJzL3dyaXRlLmNnaS9cIiArIGJvYXJkSWQgKyBcIi9cIiArIHRocmVhZE51bWJlciArIFwiL1wiLCBcImRpcj1cIiArIGRpciArIFwiJmJicz1cIiArIGJicyArIFwiJmtleT1cIiArIHRocmVhZE51bWJlciArIFwiJnRpbWU9XCIgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArIFwiJm5hbWU9Jm1haWw9c2FnZSZNRVNTQUdFPVwiICsgZW5jb2RlZEtleXdvcmQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnKi8qJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQtRW5jb2RpbmcnOiAnZ3ppcCwgZGVmbGF0ZSwgYnInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVmZXJlcjogXCJcIiArIGhvc3RuYW1lICsgYm9hcmRJZCArIFwiL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuLyoqXHJcbiAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xyXG4gKi9cclxudmFyIFJlYWRTaXRhcmFiYSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlYWRTaXRhcmFiYSgpIHtcclxuICAgICAgICAvLyBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDjg6zjgrnoqq3jgb/ovrzjgb9cclxuICAgICAgICAgKiBAZGVzY3JpcHRpb24g5byV5pWw44Gn5oyH5a6a44GX44Gf5p2/44GL44KJ44Os44K544KS6Kqt44KA44CCXHJcbiAgICAgICAgICogQGRlc2NyaXB0aW9uIOODrOOCueeVquWPt+OCkuaMh+WumuOBl+OBpuOBhOOBquOBhOWgtOWQiOOBr+acgOaWsDHku7blj5blvpdcclxuICAgICAgICAgKiBAcGFyYW0gdGhyZWFkVXJsIOOCueODrFVSTFxyXG4gICAgICAgICAqIEBwYXJhbSByZXNOdW0g44Os44K555Wq5Y+3XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5yZWFkID0gZnVuY3Rpb24gKHRocmVhZFVybCwgcmVzTnVtKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0VXJsLCBvcHRpb25zLCByZXNwb25zZSwgc3RyLCByZXNwb25zZUpzb247XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSB0aHJlYWRVcmwucmVwbGFjZSgncmVhZC5jZ2knLCAncmF3bW9kZS5jZ2knKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc051bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOOCueeVquWPt+OBjOOBguOCi+WgtOWQiOODrOOCueeVquWPt+S7pemZjeOCkuWPluW+l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdFVybCArPSByZXNOdW0gKyAnLSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6zjgrnnlarlj7fjgYzjgarjgYTloLTlkIjmnIDmlrDjga4x5Lu25Y+W5b6XXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VXJsICs9ICdsMSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVxdWVzdFVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdhcnJheWJ1ZmZlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiAzICogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXhpb3NfMS5kZWZhdWx0KG9wdGlvbnMpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHIgPSBkZWNvZGVVbmljb2RlU3RyKGljb252X2xpdGVfMS5kZWZhdWx0LmRlY29kZShCdWZmZXIuZnJvbShyZXNwb25zZS5kYXRhKSwgJ0VVQy1KUCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VKc29uID0gcHVyc2VOZXdSZXNwb25zZShzdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VKc29uXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVhZFNpdGFyYWJhO1xyXG59KCkpO1xyXG4vKipcclxuICog5Y+W5b6X44GX44Gf44Os44K544Od44Oz44K577yI6KSH5pWw77yJ44Gu44OR44O844K5XHJcbiAqIEBwYXJhbSByZXNcclxuICovXHJcbnZhciBwdXJzZU5ld1Jlc3BvbnNlID0gZnVuY3Rpb24gKHJlcykge1xyXG4gICAgLy/ntZDmnpzjgpLmoLzntI3jgZnjgovphY3liJdcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIC8vIOaWsOedgOODrOOCueOCkuaUueihjOOBlOOBqOOBq1NwbGl044GZ44KLXHJcbiAgICB2YXIgcmVzQXJyYXkgPSByZXMuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLyk7XHJcbiAgICAvLyAx6KGM44GU44Go44Gr44OR44O844K544GZ44KLXHJcbiAgICByZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIC8vIOODkeODvOOCueODoeOCveODg+ODieWRvOOBs+WHuuOBl1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHB1cnNlUmVzcG9uc2UodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbi8qKlxyXG4gKiDjgrnjg6zkuIDopqfjga7jg5Hjg7zjgrlcclxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxyXG4gKiBAcGFyYW0gSW50ZWdlciAvLyBudW0g44Os44K555Wq77yIMOOCueOCv+ODvOODiO+8iVxyXG4gKi9cclxudmFyIHBhcnNlVGhyZWFkTGlzdCA9IGZ1bmN0aW9uIChib2FyZFVybCwgc3ViamVjdExpbmUpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XHJcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXHJcbiAgICAvL+ODrOOCueOBruimgee0oFxyXG4gICAgLy8wOmRhdOWQjVxyXG4gICAgLy8xOuOCueODrOOCv+OCpO+8iOODrOOCueaVsO+8iVxyXG4gICAgdmFyIHNwbGl0UmVzID0gc3ViamVjdExpbmUuc3BsaXQoJywnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNwbGl0UmVzKTtcclxuICAgIHZhciBkYXROdW0gPSBzcGxpdFJlc1swXS5yZXBsYWNlKCcuY2dpJywgJycpO1xyXG4gICAgdmFyIGhvc3RuYW1lID0gKF9iID0gKF9hID0gYm9hcmRVcmwubWF0Y2goL15odHRwcz86XFwvXFwvLis/XFwvLykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XHJcbiAgICB2YXIgYm9hcmROYW1lID0gYm9hcmRVcmwucmVwbGFjZShob3N0bmFtZSwgJycpO1xyXG4gICAgdmFyIHVybCA9IGhvc3RuYW1lICsgXCJiYnMvcmVhZC5jZ2kvXCIgKyBib2FyZE5hbWUgKyBkYXROdW0gKyBcIi9cIjtcclxuICAgIC8vIGxvZy5pbmZvKGAke2hvc3RuYW1lfSAgJHtib2FyZE5hbWV9ICR7ZGF0TnVtfWApO1xyXG4gICAgdmFyIHRpdGxlVGVtcCA9IHNwbGl0UmVzWzFdO1xyXG4gICAgdmFyIG5hbWUgPSAoX2QgPSAoX2MgPSB0aXRsZVRlbXAubWF0Y2goLyguKj8pXFwoXFxkK1xcKSQvKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzFdKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiAn4piF5Y+W5b6X5aSx5pWX4piFJztcclxuICAgIHZhciByZXNOdW0gPSBOdW1iZXIoKF9lID0gdGl0bGVUZW1wLm1hdGNoKC9cXChcXGQrXFwpJC8pKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VbMF0ucmVwbGFjZSgvXFwofFxcKS9nLCAnJykpO1xyXG4gICAgLy8g44Kq44OW44K444Kn44Kv44OI44KS6L+U5Y20XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgcmVzTnVtOiByZXNOdW0sXHJcbiAgICB9O1xyXG59O1xyXG4vKipcclxuICog44Os44K544Od44Oz44K544Gu44OR44O844K5XHJcbiAqIEpzb27jgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbTjgZnjgotcclxuICogQHBhcmFtIFN0cmluZyAvLyByZXMg44Os44K544Od44Oz44K5MeODrOOCuVxyXG4gKi9cclxudmFyIHB1cnNlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAvL0FQSeOBrui/lOWNtOWApOOCkjw+44Gn5YiG5YmyXHJcbiAgICAvL+ODrOOCueOBruimgee0oFxyXG4gICAgLy8wOuODrOOCueeVquWPt1xyXG4gICAgLy8xOuWQjeWJjVxyXG4gICAgLy8yOuODoeOCouODiVxyXG4gICAgLy8zOuaXpeS7mFxyXG4gICAgLy80OuacrOaWh1xyXG4gICAgLy81OuOCueODrOOCv+OCpFxyXG4gICAgLy82OklEXHJcbiAgICB2YXIgc3BsaXRSZXMgPSByZXMuc3BsaXQoJzw+Jyk7XHJcbiAgICB2YXIgcmVzSnNvbiA9IHtcclxuICAgICAgICBudW1iZXI6IE51bWJlcihzcGxpdFJlc1swXSksXHJcbiAgICAgICAgbmFtZTogc3BsaXRSZXNbMV0sXHJcbiAgICAgICAgZW1haWw6IHNwbGl0UmVzWzJdLFxyXG4gICAgICAgIGRhdGU6IHNwbGl0UmVzWzNdLFxyXG4gICAgICAgIHRleHQ6IHNwbGl0UmVzWzRdLFxyXG4gICAgICAgIC8vIHRocmVhZFRpdGxlOiBzcGxpdFJlc1s1XSxcclxuICAgICAgICBpZDogc3BsaXRSZXNbNl0sXHJcbiAgICAgICAgaW1nVXJsOiAnJyxcclxuICAgIH07XHJcbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jjgpLov5TljbRcclxuICAgIHJldHVybiByZXNKc29uO1xyXG59O1xyXG4vKiog44GX44Gf44KJ44Gw44Gg44GR44Gv5YWo6KeS44OA44OD44K344Ol44GMVW5pY29kZeaWh+Wtl+WIl+OBqOOBl+OBpuagvOe0jeOBleOCjOOCi+OBruOBp+WkieaPm+OBmeOCiyAqL1xyXG52YXIgZGVjb2RlVW5pY29kZVN0ciA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvJiM2NTM3NDsvZywgJ++9nicpO1xyXG59O1xyXG5leHBvcnRzLmRlZmF1bHQgPSBSZWFkU2l0YXJhYmE7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaWNtVmhaRk5wZEdGeVlXSmhMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaWNtVmhaRk5wZEdGeVlXSmhMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJRVUU3TzBkQlJVYzdRVUZEU0N4blJFRkJhMFE3UVVGRGJFUXNNRVJCUVN0Q0xFTkJRVU1zWjBKQlFXZENPMEZCUTJoRUxEaEVRVUVyUWp0QlFVVXZRaXgzUlVGQmVVTTdRVUZGZWtNc1owSkJRV2RDTzBGQlEwZ3NVVUZCUVN4VFFVRlRMRWRCUVVjc1ZVRkJUeXhSUVVGblFqczdPenM3WjBKQlEzaERMRlZCUVZVc1IwRkJUU3hSUVVGUkxHZENRVUZoTEVOQlFVTTdaMEpCUTNSRExFbEJRVWtzUjBGQmVVTXNSVUZCUlN4RFFVRkRPMmRDUVVkb1JDeFBRVUZQTEVkQlFYVkNPMjlDUVVOc1F5eEhRVUZITEVWQlFVVXNWVUZCVlR0dlFrRkRaaXhOUVVGTkxFVkJRVVVzUzBGQlN6dHZRa0ZEWWl4UFFVRlBMRVZCUVVVc1EwRkJReXhIUVVGSExFbEJRVWs3YjBKQlEycENMRmxCUVZrc1JVRkJSU3hoUVVGaE8ybENRVU0xUWl4RFFVRkRPenM3TzJkQ1FVbHBRaXh4UWtGQlRTeGxRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVFN08yZENRVUV2UWl4UlFVRlJMRWRCUVVjc1UwRkJiMEk3WjBKQlR5OUNMRWRCUVVjc1IwRkJSeXh2UWtGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRuUWtGREwwUXNWVUZCVlR0blFrRkRWaXhKUVVGSkxFTkJRVU1zU1VGQlNTeFBRVUZVTEVsQlFVa3NSVUZEUXl4SFFVRkhPM0ZDUVVOSUxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTTdjVUpCUTFnc1RVRkJUU3hEUVVGRExGVkJRVU1zU1VGQlNTeEpRVUZMTEU5QlFVRXNTVUZCU1N4RlFVRktMRU5CUVVrc1EwRkJRenR4UWtGRGRFSXNSMEZCUnl4RFFVRkRMRlZCUVVNc1NVRkJTU3hKUVVGTExFOUJRVUVzWlVGQlpTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRU5CUVVNc1JVRkJMMElzUTBGQkswSXNRMEZCUXl4RlFVTnFSRHM3T3p0blFrRkZSaXh6UWtGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl3MFEwRkJORU1zUjBGQlJ5eFBRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNN1owSkJRM2hGTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2EwSkJRV3RDTEVOQlFVTXNRMEZCUXp0dlFrRkhkRU1zYzBKQlFVOHNTVUZCU1N4RlFVRkRPenM3UzBGRFlpeERRVUZETzBGQlJVWTdPenM3T3p0SFFVMUhPMEZCUTFVc1VVRkJRU3hQUVVGUExFZEJRVWNzVlVGQlR5eFJRVUZuUWl4RlFVRkZMRmxCUVc5Q0xFVkJRVVVzVDBGQlpTeEZRVUZGTEU5QlFXVTdPenM3TzJkQ1FVVTVSaXhaUVVGWkxFZEJRVWNzUlVGQlJTeERRVUZETzJkQ1FVTjRRaXhMUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdiMEpCUTNaRExGbEJRVmtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJsQ1FVTXhRenRuUWtGRFN5eFRRVUZUTEVkQlFVY3NNa0pCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzI5Q1FVTXZReXhGUVVGRkxFVkJRVVVzVDBGQlR6dHZRa0ZEV0N4SlFVRkpMRVZCUVVVc1UwRkJVenRwUWtGRGFFSXNRMEZCUXl4RFFVRkRPMmRDUVVOSExHTkJRV01zUjBGQlJ5d3lRa0ZCVVN4RFFVRkRMRk5CUVZNc1EwRkJReXhUUVVGblFpeERRVUZETEVOQlFVTTdaMEpCUjNSRUxFZEJRVWNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzJkQ1FVVTFRaXhIUVVGSExFZEJRVWNzVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dG5Ra0ZGYkVNc2NVSkJRVTBzWlVGQlN5eERRVUZETEVsQlFVa3NRMEZEV0N4UlFVRlJMSE5DUVVGcFFpeFBRVUZQTEZOQlFVa3NXVUZCV1N4TlFVRkhMRVZCUTNSRUxGTkJRVThzUjBGQlJ5eGhRVUZSTEVkQlFVY3NZVUZCVVN4WlFVRlpMR05CUVZNc1NVRkJTU3hKUVVGSkxFVkJRVVVzUTBGQlF5eFBRVUZQTEVWQlFVVXNhVU5CUVRSQ0xHTkJRV2RDTEVWQlEyeElPM2RDUVVORkxFOUJRVThzUlVGQlJUczBRa0ZEVUN4TlFVRk5MRVZCUVVVc1MwRkJTenMwUWtGRFlpeGpRVUZqTEVWQlFVVXNiVU5CUVcxRE96UkNRVU51UkN4cFFrRkJhVUlzUlVGQlJTeHRRa0ZCYlVJN05FSkJRM1JETEU5QlFVOHNSVUZCUlN4TFFVRkhMRkZCUVZFc1IwRkJSeXhQUVVGUExFMUJRVWM3ZVVKQlEyeERPM0ZDUVVOR0xFTkJRMFlzUlVGQlFUczdaMEpCV0VRc1UwRlhReXhEUVVGRE96czdPMHRCUTBnc1EwRkJRenRCUVVWR096dEhRVVZITzBGQlEwZzdTVUZCUVR0UlFVTkZMRzFDUVVGdFFqdFJRVVJ5UWl4cFFrRjVRME03VVVGMFEwTTdPenM3T3p0WFFVMUhPMUZCUTBnc1UwRkJTU3hIUVVGSExGVkJRVThzVTBGQmFVSXNSVUZCUlN4TlFVRmpPenM3T3p0M1FrRk5la01zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hGUVVGRkxHRkJRV0VzUTBGQlF5eERRVUZETzNkQ1FVTTVSQ3hKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdORUpCUTJRc2NVSkJRWEZDT3pSQ1FVTnlRaXhWUVVGVkxFbEJRVWtzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXp0NVFrRkROVUk3TmtKQlFVMDdORUpCUTB3c2JVSkJRVzFDT3pSQ1FVTnVRaXhWUVVGVkxFbEJRVWtzU1VGQlNTeERRVUZETzNsQ1FVTndRanQzUWtGSlN5eFBRVUZQTEVkQlFYVkNPelJDUVVOc1F5eEhRVUZITEVWQlFVVXNWVUZCVlRzMFFrRkRaaXhOUVVGTkxFVkJRVVVzUzBGQlN6czBRa0ZEWWl4WlFVRlpMRVZCUVVVc1lVRkJZVHMwUWtGRE0wSXNUMEZCVHl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSk8zbENRVU5zUWl4RFFVRkRPM2RDUVVObExIRkNRVUZOTEdWQlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJRVHM3ZDBKQlFTOUNMRkZCUVZFc1IwRkJSeXhUUVVGdlFqdDNRa0ZGTDBJc1IwRkJSeXhIUVVGSExHZENRVUZuUWl4RFFVRkRMRzlDUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2QwSkJSVE5GTEZsQlFWa3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0M1FrRkZNME1zYzBKQlFVOHNXVUZCV1N4RlFVRkRPenM3WVVGRGNrSXNRMEZCUXp0SlFVTktMRU5CUVVNN1NVRkJSQ3h0UWtGQlF6dEJRVUZFTEVOQlFVTXNRVUY2UTBRc1NVRjVRME03UVVGRlJEczdPMGRCUjBjN1FVRkRTQ3hKUVVGTkxHZENRVUZuUWl4SFFVRkhMRlZCUVVNc1IwRkJWenRKUVVOdVF5eFhRVUZYTzBsQlExZ3NTVUZCVFN4TlFVRk5MRWRCUVhWRExFVkJRVVVzUTBGQlF6dEpRVVYwUkN4dlFrRkJiMEk3U1VGRGNFSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTXNRMEZCUXp0SlFVTjZReXhoUVVGaE8wbEJRMklzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRXRCUVVzN1VVRkRja0lzWTBGQll6dFJRVU5rTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3V1VGRGNFSXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnVRenRKUVVOSUxFTkJRVU1zUTBGQlF5eERRVUZETzBsQlEwZ3NUMEZCVHl4TlFVRk5MRU5CUVVNN1FVRkRhRUlzUTBGQlF5eERRVUZETzBGQlJVWTdPenM3UjBGSlJ6dEJRVU5JTEVsQlFVMHNaVUZCWlN4SFFVRkhMRlZCUVVNc1VVRkJaMElzUlVGQlJTeFhRVUZ0UWpzN1NVRkROVVFzWlVGQlpUdEpRVU5tTEU5QlFVODdTVUZEVUN4UlFVRlJPMGxCUTFJc1lVRkJZVHRKUVVOaUxFbEJRVTBzVVVGQlVTeEhRVUZITEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03U1VGRGVFTXNlVUpCUVhsQ08wbEJRM3BDTEVsQlFVMHNUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wbEJSUzlETEVsQlFVMHNVVUZCVVN4bFFVRkhMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4RlFVRkZMRU5CUVVNN1NVRkRhRVVzU1VGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdTVUZEYWtRc1NVRkJUU3hIUVVGSExFZEJRVTBzVVVGQlVTeHhRa0ZCWjBJc1UwRkJVeXhIUVVGSExFMUJRVTBzVFVGQlJ5eERRVUZETzBsQlF6ZEVMRzFFUVVGdFJEdEpRVVZ1UkN4SlFVRk5MRk5CUVZNc1IwRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdTVUZGT1VJc1NVRkJUU3hKUVVGSkxHVkJRVmNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4bFFVRmxMRU5CUVVNc01FTkJRVWNzUTBGQlF5eHZRMEZCU3l4UlFVRlJMRU5CUVVNN1NVRkRka1VzU1VGQlRTeE5RVUZOTEVkQlFVY3NUVUZCVFN4UFFVRkRMRk5CUVZNc1EwRkJReXhMUVVGTExFTkJRVU1zVlVGQlZTeERRVUZETERCRFFVRkhMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zVVVGQlVTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRPMGxCUlRsRkxGbEJRVms3U1VGRFdpeFBRVUZQTzFGQlEwd3NSMEZCUnl4TFFVRkJPMUZCUTBnc1NVRkJTU3hOUVVGQk8xRkJRMG9zVFVGQlRTeFJRVUZCTzB0QlExQXNRMEZCUXp0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVWR096czdPMGRCU1VjN1FVRkRTQ3hKUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEYUVNc1pVRkJaVHRKUVVObUxFOUJRVTg3U1VGRFVDeFJRVUZSTzBsQlExSXNUVUZCVFR0SlFVTk9MRTlCUVU4N1NVRkRVQ3hOUVVGTk8wbEJRMDRzVFVGQlRUdEpRVU5PTEZGQlFWRTdTVUZEVWl4TlFVRk5PMGxCUTA0c1NVRkJUU3hSUVVGUkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRKUVVOcVF5eEpRVUZOTEU5QlFVOHNSMEZCUnp0UlFVTmtMRTFCUVUwc1JVRkJSU3hOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFdEJRVXNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJ4Q0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xFbEJRVWtzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMUZCUTJwQ0xEUkNRVUUwUWp0UlFVTTFRaXhGUVVGRkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXp0UlFVTm1MRTFCUVUwc1JVRkJSU3hGUVVGRk8wdEJRMWdzUTBGQlF6dEpRVU5HTEZsQlFWazdTVUZEV2l4UFFVRlBMRTlCUVU4c1EwRkJRenRCUVVOcVFpeERRVUZETEVOQlFVTTdRVUZGUml3MlEwRkJOa003UVVGRE4wTXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eFZRVUZETEVkQlFWYzdTVUZEYmtNc1QwRkJUeXhIUVVGSExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eERRVUZETEVOQlFVTTdRVUZGUml4clFrRkJaU3haUVVGWkxFTkJRVU1pZlE9PSIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBlbGVjdHJvbl9sb2dfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcbnZhciBnZXRSZXNfMSA9IHJlcXVpcmUoXCIuL3JlYWRCQlMvZ2V0UmVzXCIpO1xyXG52YXIgY29uc3RfMSA9IHJlcXVpcmUoXCIuL2NvbnN0XCIpO1xyXG52YXIgaXNHZXR0aW5nID0gZmFsc2U7XHJcbnZhciBnZXRSZXNJbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xyXG4gICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgaWYgKCEhKChfYiA9IChfYSA9IGdsb2JhbFRoaXMgPT09IG51bGwgfHwgZ2xvYmFsVGhpcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2xvYmFsVGhpcy5lbGVjdHJvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRhdGEpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50aHJlYWQudXJsKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoNTAwMCldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBnZXRSZXNJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbNCAvKnlpZWxkKi8sIGV4cG9ydHMudXBkYXRlUmVzKCldO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1dGlsXzEuc2xlZXAoNTAwMCldO1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBfYy5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBnZXRSZXNJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuZ2V0UmVzSW50ZXJ2YWwoKTtcclxuZXhwb3J0cy51cGRhdGVSZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZldGNoUmVzTnVtLCBsYXN0UmVzTnVtXzEsIHJlc3VsdCwgbmV3UmVzdWx0LCBlXzE7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgX2IsIF9jLCBfZCwgX2U7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XHJcbiAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNHZXR0aW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIGlzR2V0dGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBfZi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9mLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaFJlc051bSA9IChfYyA9IChfYiA9IGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQubGlzdFtnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3QubGVuZ3RoIC0gMV0pID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5udW1iZXIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IDE7XHJcbiAgICAgICAgICAgICAgICBsYXN0UmVzTnVtXzEgPSAoX2UgPSAoX2QgPSBnbG9iYWxUaGlzLmVsZWN0cm9uLmRhdGEudGhyZWFkLmxpc3RbZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0Lmxlbmd0aCAtIDFdKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QubnVtYmVyKSAhPT0gbnVsbCAmJiBfZSAhPT0gdm9pZCAwID8gX2UgOiAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZ2V0UmVzXzEuZ2V0UmVzKGdsb2JhbFRoaXMuZWxlY3Ryb24uZGF0YS50aHJlYWQudXJsLCBmZXRjaFJlc051bSldO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfZi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyDmjIflrprjgZfjgZ/jg6zjgrnnlarjga/pmaTlpJblr77osaFcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCAmJiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLm51bWJlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Jlc3VsdCA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLm51bWJlciA+IGxhc3RSZXNOdW1fMTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gZ2xvYmFsVGhpcy5lbGVjdHJvbi5kYXRhLnRocmVhZC5saXN0KS5wdXNoLmFwcGx5KF9hLCBuZXdSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdSZXN1bHQubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERvbUZvckNoYXRXaW5kb3cobmV3UmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBlXzEgPSBfZi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBlbGVjdHJvbl9sb2dfMS5kZWZhdWx0LmVycm9yKGVfMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgaXNHZXR0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5leHBvcnRzLmNyZWF0ZURvbSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICB2YXIgZG9tU3RyID0gXCI8bGkgY2xhc3M9XFxcImxpc3QtaXRlbVxcXCI+XCI7XHJcbiAgICBkb21TdHIgKz0gXCI8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cIjtcclxuICAgIC8vIOODrOOCueeVquihqOekulxyXG4gICAgZG9tU3RyICs9IFwiXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcInJlc051bWJlclxcXCI+XCIgKyBtZXNzYWdlLm51bWJlciArIFwiPC9zcGFuPlxcbiAgICBcIjtcclxuICAgIC8vIOWQjeWJjeihqOekulxyXG4gICAgZG9tU3RyICs9IFwiPHNwYW4gY2xhc3M9XFxcIm5hbWVcXFwiPlwiICsgbWVzc2FnZS5uYW1lICsgXCI8L3NwYW4+XCI7XHJcbiAgICAvLyDmmYLliLvooajnpLpcclxuICAgIGRvbVN0ciArPSBcIjxzcGFuIGNsYXNzPVxcXCJkYXRlXFxcIj5cIiArIG1lc3NhZ2UuZGF0ZSArIFwiPC9zcGFuPlwiO1xyXG4gICAgZG9tU3RyICs9ICc8YnIvPic7XHJcbiAgICBkb21TdHIgKz0gXCJcXG4gICAgPHNwYW4gY2xhc3M9XFxcInJlc1xcXCI+XFxuICAgICAgXCIgKyBtZXNzYWdlLnRleHRcclxuICAgICAgICAucmVwbGFjZSgvPGEgLio/Pi9nLCAnJykgLy8g44GX44Gf44KJ44Gw44Gv44Ki44Oz44Kr44O844KSYeOCv+OCsOWMluOBl+OBpuOBhOOCi1xyXG4gICAgICAgIC5yZXBsYWNlKC88XFxcXGE+L2csICcnKSArIFwiXFxuICAgIDwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICA8L2xpPlwiO1xyXG4gICAgcmV0dXJuIGRvbVN0cjtcclxufTtcclxudmFyIHNlbmREb21Gb3JDaGF0V2luZG93ID0gZnVuY3Rpb24gKG1lc3NhZ2VMaXN0KSB7XHJcbiAgICB2YXIgZG9tU3RyMiA9IG1lc3NhZ2VMaXN0XHJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIHZhciBpbWdVcmwgPSBtZXNzYWdlLmltZ1VybCAmJiBtZXNzYWdlLmltZ1VybC5tYXRjaCgvXlxcLi8pID8gJy4uLy4uL3B1YmxpYy8nICsgbWVzc2FnZS5pbWdVcmwgOiBtZXNzYWdlLmltZ1VybDtcclxuICAgICAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIG1lc3NhZ2UpLCB7IGltZ1VybDogaW1nVXJsIH0pO1xyXG4gICAgfSlcclxuICAgICAgICAubWFwKGZ1bmN0aW9uIChtZXNzYWdlKSB7IHJldHVybiBleHBvcnRzLmNyZWF0ZURvbShtZXNzYWdlKTsgfSlcclxuICAgICAgICAuam9pbignXFxuJyk7XHJcbiAgICBnbG9iYWxUaGlzLmVsZWN0cm9uLndpbmRvdy5jaGF0V2luZG93LndlYkNvbnRlbnRzLnNlbmQoY29uc3RfMS5lbGVjdHJvbkV2ZW50WydzaG93LWNvbW1lbnQnXSwgeyBkb206IGRvbVN0cjIgfSk7XHJcbn07XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHt9O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2ljM1JoY25SVFpYSjJaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sY3lJNld5SnpkR0Z5ZEZObGNuWmxjaTUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUVVFc09FUkJRU3RDTzBGQlF5OUNMQ3RDUVVFclFqdEJRVU12UWl3eVEwRkJORVE3UVVGRE5VUXNhVU5CUVhkRE8wRkJSWGhETEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVOMFFpeEpRVUZOTEdOQlFXTXNSMEZCUnpzN096czdjVUpCUldwQ0xHTkJRVU1zVlVGQlZTeGhRVUZXTEZWQlFWVXNkVUpCUVZZc1ZVRkJWU3hEUVVGRkxGRkJRVkVzTUVOQlFVVXNTVUZCU1N3d1EwRkJSU3hOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZCTEVWQlFYWkRMSGRDUVVGMVF6dG5Ra0ZEZWtNc2NVSkJRVTBzV1VGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkJPenRuUWtGQmFrSXNVMEZCYVVJc1EwRkJRenRuUWtGRGJFSXNZMEZCWXl4RlFVRkZMRU5CUVVNN1owSkJRMnBDTEhOQ1FVRlBPMjlDUVVWVUxIRkNRVUZOTEdsQ1FVRlRMRVZCUVVVc1JVRkJRVHM3WjBKQlFXcENMRk5CUVdsQ0xFTkJRVU03WjBKQlJXeENMSEZDUVVGTkxGbEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUVRzN1owSkJRV3BDTEZOQlFXbENMRU5CUVVNN1owSkJRMnhDTEdOQlFXTXNSVUZCUlN4RFFVRkRPenM3TzB0QlEyeENMRU5CUVVNN1FVRkRSaXhqUVVGakxFVkJRVVVzUTBGQlF6dEJRVVZLTEZGQlFVRXNVMEZCVXl4SFFVRkhPenM3T3pzN08yZENRVU4yUWl4SlFVRkpMRk5CUVZNN2IwSkJRVVVzYzBKQlFVODdaMEpCUTNSQ0xGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdPenM3WjBKQlJWUXNWMEZCVnl4bFFVRlhMRlZCUVZVc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzUTBGQlF5eERRVUZETERCRFFVRkZMRTFCUVUwc2JVTkJRVWtzUTBGQlF5eERRVUZETzJkQ1FVTjZTQ3d5UWtGQllTeFZRVUZWTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXd3UTBGQlJTeE5RVUZOTEcxRFFVRkpMRU5CUVVNc1EwRkJRenRuUWtGRmRrY3NjVUpCUVUwc1pVRkJZeXhEUVVGRExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVRTdPMmRDUVVFdlJTeE5RVUZOTEVkQlFVY3NVMEZCYzBVN1owSkJRM0pHTEdWQlFXVTdaMEpCUTJZc1NVRkJTU3hOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4TlFVRk5MRVZCUVVVN2IwSkJRMjVFTEZOQlFWTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExGVkJRVU1zUjBGQlJ5eEpRVUZMTEU5QlFVTXNSMEZCUnl4RFFVRkRMRTFCUVdsQ0xFZEJRVWNzV1VGQlZTeEZRVUZ1UXl4RFFVRnRReXhEUVVGRExFTkJRVU03YjBKQlF6bEZMRU5CUVVFc1MwRkJRU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGQkxFTkJRVU1zU1VGQlNTeFhRVUZKTEZOQlFWTXNSVUZCUlR0dlFrRkZlRVFzU1VGQlNTeFRRVUZUTEVOQlFVTXNUVUZCVFN4SFFVRkhMRU5CUVVNN2QwSkJRVVVzYjBKQlFXOUNMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03YVVKQlF6TkVPenM3TzJkQ1FVVkVMSE5DUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVTXNRMEZCUXl4RFFVRkRPenM3WjBKQlJXWXNVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJRenM3T3p0TFFVTnVRaXhEUVVGRE8wRkJSVmNzVVVGQlFTeFRRVUZUTEVkQlFVY3NWVUZCUXl4UFFVRnZRanRKUVVNMVF5eEpRVUZKTEUxQlFVMHNSMEZCUnl3d1FrRkJkMElzUTBGQlF6dEpRVVYwUXl4TlFVRk5MRWxCUVVrc2VVSkJRWFZDTEVOQlFVTTdTVUZGYkVNc1VVRkJVVHRKUVVOU0xFMUJRVTBzU1VGQlNTeDFRMEZEYjBJc1QwRkJUeXhEUVVGRExFMUJRVTBzYTBKQlEzcERMRU5CUVVNN1NVRkRTaXhQUVVGUE8wbEJRMUFzVFVGQlRTeEpRVUZKTERCQ1FVRnpRaXhQUVVGUExFTkJRVU1zU1VGQlNTeFpRVUZUTEVOQlFVTTdTVUZEZEVRc1QwRkJUenRKUVVOUUxFMUJRVTBzU1VGQlNTd3dRa0ZCYzBJc1QwRkJUeXhEUVVGRExFbEJRVWtzV1VGQlV5eERRVUZETzBsQlJYUkVMRTFCUVUwc1NVRkJTU3hQUVVGUExFTkJRVU03U1VGRmJFSXNUVUZCVFN4SlFVRkpMSFZEUVVWS0xFOUJRVThzUTBGQlF5eEpRVUZKTzFOQlExZ3NUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eHhRa0ZCY1VJN1UwRkROME1zVDBGQlR5eERRVUZETEZGQlFWRXNSVUZCUlN4RlFVRkZMRU5CUVVNc2RVTkJSM1JDTEVOQlFVTTdTVUZGVUN4UFFVRlBMRTFCUVUwc1EwRkJRenRCUVVOb1FpeERRVUZETEVOQlFVTTdRVUZGUml4SlFVRk5MRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNWMEZCTUVJN1NVRkRkRVFzU1VGQlRTeFBRVUZQTEVkQlFVY3NWMEZCVnp0VFFVTjRRaXhIUVVGSExFTkJRVU1zVlVGQlF5eFBRVUZQTzFGQlExZ3NTVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNaVUZCWlN4SFFVRkhMRTlCUVU4c1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1VVRkRha2dzTmtKQlEwc3NUMEZCVHl4TFFVTldMRTFCUVUwc1VVRkJRU3hKUVVOT08wbEJRMG9zUTBGQlF5eERRVUZETzFOQlEwUXNSMEZCUnl4RFFVRkRMRlZCUVVNc1QwRkJUeXhKUVVGTExFOUJRVUVzYVVKQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJiRUlzUTBGQmEwSXNRMEZCUXp0VFFVTndReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdTVUZEWkN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWxCUVVrc1EwRkJReXh4UWtGQllTeERRVUZETEdOQlFXTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1IwRkJSeXhGUVVGRkxFOUJRVThzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETVVjc1EwRkJReXhEUVVGRE8wRkJSVVlzYTBKQlFXVXNSVUZCUlN4RFFVRkRJbjA9IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGZzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImZzXCIpKTtcclxuZXhwb3J0cy5yZWFkV2F2RmlsZXMgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmc18xLmRlZmF1bHQucmVhZGRpcihwYXRoLCBmdW5jdGlvbiAoZXJyLCBmaWxlcykge1xyXG4gICAgICAgICAgICBpZiAoZXJyKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IGZpbGVzLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzRXhpc3RGaWxlKHBhdGggKyAnLycgKyBmaWxlKSAmJiAvLipcXC53YXYkLy50ZXN0KGZpbGUpOyAvL+e1nuOCiui+vOOBv1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzb2x2ZShmaWxlTGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIGlzRXhpc3RGaWxlID0gZnVuY3Rpb24gKGZpbGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgZnNfMS5kZWZhdWx0LnN0YXRTeW5jKGZpbGUpLmlzRmlsZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ0VOT0VOVCcpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuZXhwb3J0cy5zbGVlcCA9IGZ1bmN0aW9uIChtc2VjKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCBtc2VjKTsgfSk7IH07XHJcbmV4cG9ydHMuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1smJ2BcIjw+XS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnJic6ICcmYW1wOycsXHJcbiAgICAgICAgICAgIFwiJ1wiOiAnJiN4Mjc7JyxcclxuICAgICAgICAgICAgJ2AnOiAnJiN4NjA7JyxcclxuICAgICAgICAgICAgJ1wiJzogJyZxdW90OycsXHJcbiAgICAgICAgICAgICc8JzogJyZsdDsnLFxyXG4gICAgICAgICAgICAnPic6ICcmZ3Q7JyxcclxuICAgICAgICB9W21hdGNoXTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLnVuZXNjYXBlSHRtbCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHJldHVybiBzdHJcclxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXHJcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxyXG4gICAgICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcclxuICAgICAgICAucmVwbGFjZSgvJiMwMzk7L2csIFwiJ1wiKVxyXG4gICAgICAgIC5yZXBsYWNlKC8mIzA0NDsvZywgJywnKVxyXG4gICAgICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lkWFJwYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJblYwYVd3dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3UVVGQlFTd3dRMEZCYjBJN1FVRkRVQ3hSUVVGQkxGbEJRVmtzUjBGQlJ5eFZRVUZETEVsQlFWazdTVUZEZGtNc1QwRkJUeXhKUVVGSkxFOUJRVThzUTBGQlF5eFZRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5PMUZCUTJwRExGbEJRVVVzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RlFVRkZMRlZCUVVNc1IwRkJSeXhGUVVGRkxFdEJRVXM3V1VGRE1VSXNTVUZCU1N4SFFVRkhPMmRDUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0WlFVTnlRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVVNc1NVRkJTVHRuUWtGRGFrTXNUMEZCVHl4WFFVRlhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNUVUZCVFR0WlFVTjRSU3hEUVVGRExFTkJRVU1zUTBGQlF6dFpRVU5JTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRSUVVOd1FpeERRVUZETEVOQlFVTXNRMEZCUXp0SlFVTk1MRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMHdzUTBGQlF5eERRVUZETzBGQlJVWXNTVUZCVFN4WFFVRlhMRWRCUVVjc1ZVRkJReXhKUVVGWk8wbEJReTlDTEVsQlFVazdVVUZEUml4WlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEUxQlFVMHNSVUZCUlN4RFFVRkRPMUZCUXpOQ0xFOUJRVThzU1VGQlNTeERRVUZETzB0QlEySTdTVUZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSVHRSUVVOYUxFbEJRVWtzUjBGQlJ5eERRVUZETEVsQlFVa3NTMEZCU3l4UlFVRlJPMWxCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU03UzBGRGVrTTdRVUZEU0N4RFFVRkRMRU5CUVVNN1FVRkZWeXhSUVVGQkxFdEJRVXNzUjBGQlJ5eFZRVUZETEVsQlFWa3NTVUZCU3l4UFFVRkJMRWxCUVVrc1QwRkJUeXhEUVVGRExGVkJRVU1zVDBGQlR5eEpRVUZMTEU5QlFVRXNWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hKUVVGSkxFTkJRVU1zUlVGQmVrSXNRMEZCZVVJc1EwRkJReXhGUVVGdVJDeERRVUZ0UkN4RFFVRkRPMEZCUlRsRkxGRkJRVUVzVlVGQlZTeEhRVUZITEZWQlFVTXNUVUZCWXp0SlFVTjJReXhKUVVGSkxFOUJRVThzVFVGQlRTeExRVUZMTEZGQlFWRXNSVUZCUlR0UlFVTTVRaXhQUVVGUExFMUJRVTBzUTBGQlF6dExRVU5tTzBsQlEwUXNUMEZCVHl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZETEV0QlFVczdVVUZEZGtNc1QwRkJVVHRaUVVOT0xFZEJRVWNzUlVGQlJTeFBRVUZQTzFsQlExb3NSMEZCUnl4RlFVRkZMRkZCUVZFN1dVRkRZaXhIUVVGSExFVkJRVVVzVVVGQlVUdFpRVU5pTEVkQlFVY3NSVUZCUlN4UlFVRlJPMWxCUTJJc1IwRkJSeXhGUVVGRkxFMUJRVTA3V1VGRFdDeEhRVUZITEVWQlFVVXNUVUZCVFR0VFFVTktMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03U1VGRGJrSXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRUQ3hEUVVGRExFTkJRVU03UVVGRlZ5eFJRVUZCTEZsQlFWa3NSMEZCUnl4VlFVRkRMRWRCUVZjN1NVRkRkRU1zVDBGQlR5eEhRVUZITzFOQlExQXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGNrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRk5CUVZNc1JVRkJSU3hIUVVGSExFTkJRVU03VTBGRGRrSXNUMEZCVHl4RFFVRkRMRkZCUVZFc1JVRkJSU3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU0xUWl4RFFVRkRMRU5CUVVNaWZRPT0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvbi1qc29uLXN0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb24tbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVsZWN0cm9uLXdpbmRvdy1zdGF0ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbmNvZGluZy1qYXBhbmVzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpY29udi1saXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==