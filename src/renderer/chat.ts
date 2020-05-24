import electron from 'electron';
import log from 'electron-log';
import { electronEvent, keyCode } from '../main/const';

const ipcRenderer = electron.ipcRenderer;

document.addEventListener('DOMContentLoaded', () => {
  console.debug('[renderer.js] DOM Content Loaded');

  (document.getElementById('postResButton') as HTMLInputElement).onclick = postRes;

  (document.getElementById('kakikomi') as HTMLInputElement).onkeydown = checkPostKey;
});

// コメント表示
ipcRenderer.on(electronEvent['show-comment'], (event: any, args: { dom: string }) => {
  log.info('[show-comment] received');
  const dom = document.getElementById('res-list') as HTMLInputElement;

  // スクロール位置が端であるなら、スクロール位置も追従する
  const isBottom = dom.scrollTop + dom.offsetHeight === dom.scrollHeight;

  // 一番下に追加する
  dom.insertAdjacentHTML('beforeend', args.dom);

  // スクロール
  if (isBottom) {
    dom.scrollTo(0, dom.scrollHeight);
  }
});

// リセット
ipcRenderer.on(electronEvent['clear-comment'], (event: any) => {
  log.info('[clear-comment] received');
  const dom = document.getElementById('res-list') as HTMLInputElement;
  dom.innerHTML = '';
});

/** レス投稿 */
const postRes = async () => {
  const resMessage = (document.getElementById('kakikomi') as HTMLInputElement).value;
  if (!resMessage) return;

  // 書き込み
  log.info(`[書き込み] ${resMessage}`);
  const result = await ipcRenderer.invoke(electronEvent.MAIN_POST_KAKIKOMI, resMessage);

  if (result) {
    // テキストを初期化
    (document.getElementById('kakikomi') as HTMLInputElement).value = '';
  }
};

/** 規定のキーで投稿 */
const checkPostKey = (event: KeyboardEvent) => {
  if (event.keyCode === keyCode.ENTER && event.ctrlKey) {
    postRes();
  }
};
