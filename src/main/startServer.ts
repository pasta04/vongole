import log from 'electron-log';
import { sleep } from './util';
import { getRes as getBbsResponse } from './readBBS/getRes';
import { electronEvent } from './const';

let isGetting = false;
const getResInterval = async () => {
  // log.info(globalThis?.electron?.data?.thread.url);
  if (!globalThis?.electron?.data?.thread.url) {
    await sleep(5000);
    getResInterval();
    return;
  }
  await updateRes();

  await sleep(5000);
  getResInterval();
};
getResInterval();

export const updateRes = async () => {
  if (isGetting) return;
  isGetting = true;
  try {
    const fetchResNum: number = globalThis.electron.data.thread.list[globalThis.electron.data.thread.list.length - 1]?.number ?? 1;
    const lastResNum = globalThis.electron.data.thread.list[globalThis.electron.data.thread.list.length - 1]?.number ?? 0;

    const result = await getBbsResponse(globalThis.electron.data.thread.url, fetchResNum);
    // 指定したレス番は除外対象
    if (result.length > 0 && result[result.length - 1].number) {
      const newResult = result.filter((res) => (res.number as number) > lastResNum);
      globalThis.electron.data.thread.list.push(...newResult);

      if (newResult.length > 0) sendDomForChatWindow(newResult);
    }
  } catch (e) {
    log.error(e);
  }
  isGetting = false;
};

export const createDom = (message: UserComment) => {
  let domStr = `<li class="list-item">`;

  domStr += `<div class="content">`;

  // レス番表示
  domStr += `
      <span class="resNumber">${message.number}</span>
    `;
  // 名前表示
  domStr += `<span class="name">${message.name}</span>`;
  // 時刻表示
  domStr += `<span class="date">${message.date}</span>`;

  domStr += '<br/>';

  domStr += `
    <span class="res">
      ${message.text
        .replace(/<a .*?>/g, '') // したらばはアンカーをaタグ化している
        .replace(/<\\a>/g, '')}
    </span>
    </div>
  </li>`;

  return domStr;
};

const sendDomForChatWindow = (messageList: UserComment[]) => {
  const domStr2 = messageList
    .map((message) => {
      const imgUrl = message.imgUrl && message.imgUrl.match(/^\./) ? '../../public/' + message.imgUrl : message.imgUrl;
      return {
        ...message,
        imgUrl,
      };
    })
    .map((message) => createDom(message))
    .join('\n');
  globalThis.electron.window.chatWindow.webContents.send(electronEvent['show-comment'], { dom: domStr2 });
};

export default {};
