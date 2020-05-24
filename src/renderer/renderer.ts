import electron from 'electron';
import log from 'electron-log';
import { electronEvent } from '../main/const';

const ipcRenderer = electron.ipcRenderer;

document.addEventListener('DOMContentLoaded', () => {
  (document.getElementById('addBoard') as HTMLInputElement).onclick = addBoard;
  (document.getElementById('dialog-add-board-button-cancel') as HTMLInputElement).onclick = dialogAddBoardButtonCancel;
  (document.getElementById('dialog-add-board-button-ok') as HTMLInputElement).onclick = dialogAddBoardButtonOk;

  showBoardList();
  console.debug('[renderer.js]DOM Content Loaded');
});

const addBoard = () => {
  console.log('[addBoard]');

  // 掲示板追加ダイアログを表示
  const alertDialog = document.getElementById('dialog-add-board') as HTMLElement;
  (alertDialog as any).showModal();
};

const dialogAddBoardButtonCancel = () => (document.getElementById('dialog-add-board') as any).close();
const dialogAddBoardButtonOk = async () => {
  const name = (document.getElementById('dialog-add-board-name') as HTMLInputElement).value;
  const url = (document.getElementById('dialog-add-board-url') as HTMLInputElement).value;

  if (!name || !url) return;
  if (!url.match(/^http.+\/$/)) return;

  // const data: typeof globalThis.electron.data = await ipcRenderer.invoke(electronEvent.MAIN_GET_ELECTRON_DATA);
  ipcRenderer.invoke(electronEvent.MAIN_ADD_BOARDLIST, [{ name, url }]);

  // 名前とURLを抜き出して登録処理に回す
  showBoardList();
  (document.getElementById('dialog-add-board') as any).close();
};

const showBoardList = async () => {
  const data: typeof globalThis.electron.data = await ipcRenderer.invoke(electronEvent.MAIN_GET_ELECTRON_DATA);
  const boardList = data.boardList;
  log.info(`[showBoardList] 板数：${boardList.length}`);

  const listul = document.getElementById('boardList') as HTMLElement;
  const domStr = boardList
    .map((item, index) => {
      return `<button class="boardItem mdl-button mdl-js-button">
                <div id="board_item_${index}" data-url="${item.url}">${item.name}</div>
                <div class="mdl-tooltip" data-mdl-for="board_item_${index}">
                  ${item.url}
                </div>
              </button>`;
    })
    .join('');

  listul.innerHTML = domStr;

  listul.childNodes.forEach((item, key: number) => {
    console.log(item);
    console.log(key);
    (item as HTMLElement).onclick = () => {
      // 板を開く
      const url = boardList[key].url;
      console.log(`open: ${url}`);
      showBoard(url);
    };
  });
};

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
