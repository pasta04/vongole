// Electronのモジュール
import path from 'path';
import electron, { Tray, Menu, dialog, ipcMain } from 'electron';
import log from 'electron-log';
import { sleep } from './util';
import windowStateKeeper from 'electron-window-state';
import Config from './config';
import { electronEvent } from './const';
import { getThreadList } from './readBBS/getRes';
import { updateRes } from './startServer';
import { postResponse } from './readBBS/getRes';

console.trace = () => {
  //
};

process.on('uncaughtException', (err) => {
  log.error(err);
});

// アプリケーションをコントロールするモジュール
const app = electron.app;

// 多重起動防止
if (!app.requestSingleInstanceLock()) {
  log.error('[app] It is terminated for multiple launches.');
  app.quit();
}

log.info('[app] started');

app.allowRendererProcessReuse = true;

const iconPath = path.resolve(__dirname, '../icon.png');

// サーバー起動モジュール
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ss = require('./startServer');
console.trace(ss);

// ウィンドウを作成するモジュール
const BrowserWindow = electron.BrowserWindow;

// メインウィンドウはGCされないようにグローバル宣言
globalThis.electron = {
  window: {
    mainWindow: null as any,
    chatWindow: null as any,
  },
  data: {
    boardList: [],
    board: {
      url: null as any,
      threadList: [],
    },
    thread: {
      url: null as any,
      boardId: null as any,
      threadNumber: null as any,
      hostname: null as any,
      list: [],
    },
  },
};

// 全てのウィンドウが閉じたら終了
app.on('window-all-closed', () => {
  // if (process.platform != 'darwin') {
  app.quit();
  // }
});

// Electronの初期化完了後に実行
app.on('ready', () => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 700,
    defaultHeight: 720,
  });

  // ウィンドウサイズを（フレームサイズを含まない）設定
  const mainWin = new BrowserWindow({
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
  mainWin.loadURL('file://' + path.resolve(__dirname, '../src/html/index.html'));

  // ウィンドウが閉じられたらアプリも終了
  mainWin.on('close', (event) => {
    // 確認ダイアログではいをクリックしたら閉じる
    event.preventDefault();
    dialog
      .showMessageBox(mainWin, {
        type: 'question',
        buttons: ['Yes', 'No'],
        // title: '',
        message: '終了しますか？',
      })
      .then((value) => {
        if (value.response === 0) {
          app.exit();
        }
      });
  });
  mainWin.on('closed', () => {
    log.info('[app] close');
    app.exit();
  });

  // 開発者ツールを開く
  // mainWin.webContents.openDevTools();

  // タスクトレイの設定
  let tray = null;
  app.whenReady().then(() => {
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
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
    let isDoubleClicked = false;
    tray.on('click', async (event) => {
      isDoubleClicked = false;
      await sleep(200);
      if (isDoubleClicked) return;
      globalThis.electron.window.chatWindow.focus();
      globalThis.electron.window.chatWindow.show();
      globalThis.electron.window.chatWindow.restore();
    });
    tray.on('double-click', (event) => {
      isDoubleClicked = true;
      mainWin.focus();
    });
  });

  // 板一覧初期表示
  Config.getBoadList();

  createChatWindow();
});

const createChatWindow = () => {
  const chatWindow = new BrowserWindow({
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
  chatWindow.loadURL('file://' + path.resolve(__dirname, '../src/html/chat.html'));

  chatWindow.setTitle('vongole - thread');
  chatWindow.setMenu(null);

  globalThis.electron.window.chatWindow = chatWindow;
  // chatWindow.webContents.openDevTools();
};

ipcMain.handle(electronEvent.MAIN_GET_ELECTRON_DATA, (event, message) => {
  return globalThis.electron.data;
});
ipcMain.handle(electronEvent.MAIN_SET_ELECTRON_DATA, (event, message: typeof globalThis.electron.data) => {
  globalThis.electron.data = message;
  return;
});
ipcMain.handle(electronEvent.MAIN_ADD_BOARDLIST, (event, message: typeof globalThis.electron.data.boardList) => {
  globalThis.electron.data.boardList.push(...message);
  Config.saveBoardList(globalThis.electron.data.boardList);
  return;
});
ipcMain.handle(electronEvent.MAIN_GET_THREAD_LIST, async (event, message: string) => {
  const list = await getThreadList(message);
  return list;
});
ipcMain.on(electronEvent.MAIN_OPEN_THREAD, async (event, url: string, name: string) => {
  // スレを開く
  const hostname = url.match(/https?:\/\/.+?\//)?.[0] ?? '';
  const threadNumber = url.match(/\/\d+\/$/)?.[0].replace(/\//g, '') ?? '';
  const boardId = url.replace(hostname, '').replace(`/${threadNumber}/`, '').replace('test/read.cgi/', '').replace('bbs/read.cgi/', '');

  globalThis.electron.data.thread = {
    url,
    hostname,
    threadNumber,
    boardId,
    list: [],
  };
  log.info(JSON.stringify(globalThis.electron.data.thread, null, '  '));

  globalThis.electron.window.chatWindow.webContents.send(electronEvent['clear-comment']);
  globalThis.electron.window.chatWindow.setTitle(`${name} - ${url}`);

  await updateRes();
  globalThis.electron.window.chatWindow.focus();
  globalThis.electron.window.chatWindow.show();
  globalThis.electron.window.chatWindow.restore();
});
ipcMain.handle(electronEvent.MAIN_POST_KAKIKOMI, async (event, message: string) => {
  try {
    await postResponse(globalThis.electron.data.thread.hostname, globalThis.electron.data.thread.threadNumber, globalThis.electron.data.thread.boardId, message);
    await updateRes();

    return true;
  } catch (e) {
    log.error(e);
    return false;
  }
});
