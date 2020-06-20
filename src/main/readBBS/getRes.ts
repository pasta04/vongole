import log from 'electron-log';
import axios, { AxiosRequestConfig } from 'axios';
import iconv from 'iconv-lite'; // 文字コード変換用パッケージ

import ReadSitaraba, { readBoard as readBoardShitaraba, postRes as postResShitaraba } from './readSitaraba'; // したらば読み込み用モジュール
import Read5ch, { readBoard as readBoard5ch, postRes as postRes5ch } from './Read5ch'; // 5ch互換板読み込み用モジュール

/**
 * 掲示板のレスを取得する
 * @param threadUrl スレのURL
 * @param resNum この番号以降を取得する。指定しない場合は最新1件を取得。
 */
export const getRes = async (bbsModule: ReadSitaraba | ReadSitaraba, threadUrl: string, resNum: number): Promise<UserComment[]> => {
  try {
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
export const analysBBSName = (threadUrl: string) => {
  // したらばドメイン名
  const sitarabaDomain = 'jbbs.shitaraba.net';

  if (threadUrl.indexOf(sitarabaDomain) !== -1) {
    // URLにしたらばドメイン名が入ってればしたらば
    const sitaraba = new ReadSitaraba();
    return sitaraba;
  }
  // どこにも該当しなかったらとりあえず5chで
  // この辺も対応ドメインリストとか作ってちゃんと判定したほうがよさそう
  const read5ch = new Read5ch();
  return read5ch;
};

/** スレのURLから板情報を取得 */
export const threadUrlToBoardInfo = async (threadUrl: string) => {
  const sitarabaDomain = 'jbbs.shitaraba.net';

  const result: {
    status: 'ok' | 'ng';
    boardUrl: string;
    boardName: string;
  } = {
    status: 'ng',
    boardUrl: threadUrl,
    boardName: '★取得失敗★',
  };

  let boardUrl = '';

  // 表記ゆれ補正
  let tempUrl = threadUrl;
  tempUrl = tempUrl.replace(/\/l\d+$/, '/');

  if (!tempUrl.match(/.*\/$/)) {
    tempUrl += '/';
  }

  let encoding = '';

  if (tempUrl.indexOf(sitarabaDomain) !== -1) {
    // スレ: https://jbbs.shitaraba.net/bbs/read.cgi/game/51638/1581839266/
    // 板: https://jbbs.shitaraba.net/game/51638/
    // 設定: https://jbbs.shitaraba.net/bbs/api/setting.cgi/game/51638/

    encoding = 'EUC-JP';

    // 板かスレか判定
    if (tempUrl.match('read.cgi')) {
      // スレ
      tempUrl = tempUrl.replace('jbbs.shitaraba.net/bbs/read.cgi/', '').replace(/https?:\/\//, '');
      tempUrl = (tempUrl.match(/(.+)\/.+\/$/) as any)[1] + '/';

      boardUrl = `http://jbbs.shitaraba.net/${tempUrl}`;
      tempUrl = `http://jbbs.shitaraba.net/bbs/api/setting.cgi/${tempUrl}`;
    } else {
      // 板
      boardUrl = tempUrl;
      tempUrl = tempUrl.replace('jbbs.shitaraba.net/', '').replace(/https?:\/\//, '');
      tempUrl = `http://jbbs.shitaraba.net/bbs/api/setting.cgi/${tempUrl}`;
    }
  } else {
    // スレ: https://bbs.jpnkn.com/test/read.cgi/pasta04/1586794623/
    // 板: https://bbs.jpnkn.com/pasta04/
    // 設定: https://bbs.jpnkn.com/pasta04/SETTING.TXT

    encoding = 'SHIFT-JIS';

    // 板かスレか判定
    if (tempUrl.match(/test\/read.cgi\/.+\/.+\//)) {
      // スレ
      tempUrl = `${(tempUrl.replace('test/read.cgi/', '').match(/(.+)\/.+\/$/) as any)[1]}/`;
      boardUrl = tempUrl;
      tempUrl = `${tempUrl}SETTING.TXT`;
    } else {
      // 板
      boardUrl = tempUrl;
      tempUrl = `${tempUrl}SETTING.TXT`;
    }
  }

  console.log(`[tempUrl] ${tempUrl} [boardUrl] ${boardUrl}`);
  try {
    const options: AxiosRequestConfig = {
      url: tempUrl,
      method: 'GET',
      timeout: 3 * 1000,
      responseType: 'arraybuffer',
    };

    const response = await axios(options);
    if (response.status < 400) {
      // console.log(response.data);
      const str = iconv.decode(Buffer.from(response.data), encoding);

      str.split(/\n/g).map((text: string) => {
        const matched = text.match(/BBS_TITLE=(.+)/);
        if (matched) {
          result.boardName = matched[1];
          result.boardUrl = boardUrl;
          result.status = 'ok';
        }
      });
    }
  } catch (e) {
    log.error('なんかエラー');
  }

  return result;
};
