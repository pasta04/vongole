import electron from 'electron';
import log from 'electron-log';
import { electronEvent } from '../main/const';

const ipcRenderer = electron.ipcRenderer;

document.addEventListener('DOMContentLoaded', () => {
  (document.getElementById('addBoard') as HTMLInputElement).onclick = addBoard;
  // 掲示板追加ダイアログのボタン
  (document.getElementById('dialog-add-board-button-cancel') as HTMLInputElement).onclick = dialogAddBoardButtonCancel;
  (document.getElementById('dialog-add-board-button-ok') as HTMLInputElement).onclick = dialogAddBoardButtonOk;
  (document.getElementById('dialog-add-board-button-fetchBoard') as HTMLInputElement).onclick = dialogAddBoardButtonFetchBoard;

  // 掲示板削除ダイアログのボタン
  (document.getElementById('dialog-delete-board-button-cancel') as HTMLInputElement).onclick = dialogdeleteBoardButtonCancel;
  (document.getElementById('dialog-delete-board-button-ok') as HTMLInputElement).onclick = dialogdialogdeleteBoardButtonOk;

  showBoardList();
  console.debug('[renderer.js]DOM Content Loaded');
});

/** 板追加ボタンクリック */
const addBoard = () => {
  console.log('[addBoard]');

  // 掲示板追加ダイアログを表示
  const alertDialog = document.getElementById('dialog-add-board') as HTMLElement;
  (document.getElementById('dialog-add-board-name') as HTMLInputElement).value = '';
  (document.getElementById('dialog-add-board-url') as HTMLInputElement).value = '';
  (alertDialog as any).showModal();
};

// 掲示板追加ダイアログでの操作
const dialogAddBoardButtonCancel = () => (document.getElementById('dialog-add-board') as any).close();
const dialogAddBoardButtonOk = async () => {
  const name = (document.getElementById('dialog-add-board-name') as HTMLInputElement).value;
  const url = (document.getElementById('dialog-add-board-url') as HTMLInputElement).value;

  if (!name || !url) return;
  if (!url.match(/^http.+\/$/)) return;

  // const data: typeof globalThis.electron.data = await ipcRenderer.invoke(electronEvent.MAIN_GET_ELECTRON_DATA);
  ipcRenderer.invoke(electronEvent.MAIN_ADD_BOARDLIST, { name, url });

  // 名前とURLを抜き出して登録処理に回す
  showBoardList();
  (document.getElementById('dialog-add-board') as any).close();
};

/** 板追加ダイアログの板情報取得 */
const dialogAddBoardButtonFetchBoard = async () => {
  const url = (document.getElementById('dialog-add-board-url') as HTMLInputElement).value;
  if (!url) return;
  if (!url.match(/^http.+$/)) return;

  const result = await ipcRenderer.invoke(electronEvent.MAIN_FETCH_BOARDINFO, url);

  // 板情報をセット
  if (result.status === 'ok') {
    (document.getElementById('dialog-add-board-name') as HTMLInputElement).value = result.boardName;
    (document.getElementById('dialog-add-board-url') as HTMLInputElement).value = result.boardUrl;
  }
};

/** 板一覧表示 */
const showBoardList = async () => {
  const data: typeof globalThis.electron.data = await ipcRenderer.invoke(electronEvent.MAIN_GET_ELECTRON_DATA);
  const boardList = data.boardList;
  log.info(`[showBoardList] 板数：${boardList.length}`);

  const listul = document.getElementById('boardList') as HTMLElement;
  // 板ごとのボタンのDOM
  const domStr = boardList
    .map((item, index) => {
      return `<div class="boardItem">
                <button class="boardName mdl-button mdl-js-button">
                  <div id="board_item_${index}" data-url="${item.url}">${item.name}</div>
                  <div class="mdl-tooltip" data-mdl-for="board_item_${index}">
                    ${item.url}
                  </div>
                </button>
                <button>x</button>
              </div>
              `;
    })
    .join('');

  listul.innerHTML = domStr;

  let keyIndex = 0;
  listul.childNodes.forEach((item, key: number) => {
    // console.log(item);
    // console.log(key);
    // console.log(item.childNodes);

    if ((item as HTMLElement).tagName === 'DIV') {
      let num = 0;
      item.childNodes.forEach((value, index) => {
        const tagName = (value as HTMLElement).tagName;
        if (tagName === 'BUTTON') {
          const url = boardList[keyIndex].url;
          if (num === 0) {
            (value as HTMLElement).onclick = () => showBoard(url);
            num++;
          } else {
            (value as HTMLElement).onclick = () => showDeleteBoardDialog(url);
          }
        }
      });

      keyIndex++;
    }
  });
};

/** スレ一覧を表示 */
const showBoard = async (boardUrl: string) => {
  // スレ一覧を取得
  const list: {
    url: string;
    name: string;
    resNum: number;
  }[] = await ipcRenderer.invoke(electronEvent.MAIN_GET_THREAD_LIST, boardUrl);

  // スレ一覧を反映
  const listul = document.getElementById('threadList') as HTMLElement;
  const domStr = list
    .map((item, index) => {
      return `<button class="boardItem mdl-button mdl-js-button">
                <div id="board_item_${index}">${item.name}</div>
              </button>`;
    })
    .join('');

  listul.innerHTML = domStr;

  listul.childNodes.forEach((item, key: number) => {
    console.log(item);
    console.log(key);
    (item as HTMLElement).onclick = () => {
      // 板を開く
      const url = list[key].url;
      const name = list[key].name;
      console.log(`open: ${url}`);
      ipcRenderer.send(electronEvent.MAIN_OPEN_THREAD, url, name);
    };
  });
};

/** 掲示板削除ダイアログ */
const showDeleteBoardDialog = (boardUrl: string) => {
  //
  (document.getElementById('dialog-delete-board-url') as HTMLInputElement).value = boardUrl;
  const alertDialog = document.getElementById('dialog-delete-board') as HTMLElement;
  (alertDialog as any).showModal();
};

const dialogdeleteBoardButtonCancel = () => (document.getElementById('dialog-delete-board') as any).close();
const dialogdialogdeleteBoardButtonOk = async () => {
  console.log('[dialogdialogdeleteBoardButtonOk]');

  const url = (document.getElementById('dialog-delete-board-url') as HTMLInputElement).value;

  console.log(`${url} を削除`);
  ipcRenderer.invoke(electronEvent.MAIN_DELETE_BOARDLIST, url);

  showBoardList();
  (document.getElementById('dialog-delete-board') as any).close();
};
