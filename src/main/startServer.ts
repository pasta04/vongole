import log from 'electron-log';
import { sleep } from './util';
import { getRes as getBbsResponse } from './readBBS/getRes';
import { electronEvent } from './const';

const isGetting: { [url: string]: boolean } = {};
const getResInterval = async () => {
  // log.info(globalThis?.electron?.data?.thread.url);
  if (!globalThis?.electron?.data || globalThis?.electron?.data?.thread.length === 0) {
    await sleep(5000);
    getResInterval();
    return;
  }

  const task = globalThis.electron.data.thread.map((thread, index) => {
    // console.log(thread.url);
    return updateRes(thread, index);
  });
  await Promise.all(task);

  await sleep(5000);
  getResInterval();
};
getResInterval();

export const updateRes = async (thread: typeof globalThis.electron.data.thread[0], index: number) => {
  // log.info(`[updateRes] ${thread.url}  ${index}`);

  if (isGetting[thread.url]) return;
  isGetting[thread.url] = true;
  try {
    const fetchResNum: number = thread.list[thread.list.length - 1]?.number ?? 1;
    const lastResNum = thread.list[thread.list.length - 1]?.number ?? 0;

    const result = await getBbsResponse(thread.getRes, thread.url, fetchResNum);
    // 指定したレス番は除外対象
    if (result.length > 0 && result[result.length - 1].number) {
      const newResult = result.filter((res) => (res.number as number) > lastResNum);
      thread.list.push(...newResult);

      if (newResult.length > 0) sendDomForChatWindow(newResult, index);
    }
  } catch (e) {
    log.error(e);
  }
  isGetting[thread.url] = false;
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

const sendDomForChatWindow = (messageList: UserComment[], index: number) => {
  // log.info(`[sendDomForChatWindow] ${index}`);
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

  globalThis.electron.window.chatWindow[index].webContents.send(electronEvent['show-comment'], { dom: domStr2 });
};

export default {};
