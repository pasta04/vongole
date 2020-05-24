import log from 'electron-log';

import ReadSitaraba, { readBoard as readBoardShitaraba, postRes as postResShitaraba } from './readSitaraba'; // したらば読み込み用モジュール
import Read5ch, { readBoard as readBoard5ch, postRes as postRes5ch } from './Read5ch'; // 5ch互換板読み込み用モジュール
const sitaraba = new ReadSitaraba();
const read5ch = new Read5ch();
// 掲示板読み込みモジュール、一度決定したら使いまわすためにグローバル宣言
let bbsModule: ReadSitaraba | ReadSitaraba = null as any;

/**
 * 掲示板のレスを取得する
 * @param threadUrl スレのURL
 * @param resNum この番号以降を取得する。指定しない場合は最新1件を取得。
 */
export const getRes = async (threadUrl: string, resNum: number): Promise<UserComment[]> => {
  try {
    // console.log(`[getRes] ${threadUrl} ${resNum}`);

    // リクエストURLを解析し、使用するモジュールを変更する
    bbsModule = analysBBSName(threadUrl) as any;

    // 選択したモジュールでレス取得処理を行う
    const response = await bbsModule.read(threadUrl, resNum);
    // console.log(`[getRes.js] fetch ${threadUrl} resNum = ${resNum}, result = ${response.length}`);

    return response.map((res) => {
      return {
        ...res,
        imgUrl: '',
      };
    });
  } catch (e) {
    log.error(e);
    return [];
  }
};

export const getThreadList = async (boardUrl: string) => {
  const sitarabaDomain = 'jbbs.shitaraba.net';
  if (boardUrl.indexOf(sitarabaDomain) !== -1) {
    // URLにしたらばドメイン名が入ってればしたらば
    //
    return await readBoardShitaraba(boardUrl);
  } else {
    return await readBoard5ch(boardUrl);
  }
};

export const postResponse = async (hostname: string, threadNumber: string, boardId: string, message: string) => {
  log.info(`[postResponse] ${hostname} ${threadNumber} ${boardId}`);

  const sitarabaDomain = 'jbbs.shitaraba.net';
  if (hostname.indexOf(sitarabaDomain) !== -1) {
    // URLにしたらばドメイン名が入ってればしたらば
    return await postResShitaraba(hostname, threadNumber, boardId, message);
  } else {
    return await postRes5ch(hostname, threadNumber, boardId, message);
  }
};

/*
 * URLをみてどこのBBSか判定して使用するモジュールを返却する
 */
const analysBBSName = (threadUrl: string) => {
  // したらばドメイン名
  const sitarabaDomain = 'jbbs.shitaraba.net';
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
