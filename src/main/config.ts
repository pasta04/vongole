import path from 'path';
import storage from 'electron-json-storage';
import log from 'electron-log';
import electron from 'electron';

class Config {
  constructor() {
    // 設定ファイル読み込み
    // let nowPath = electron.app.getAppPath();
    // if (nowPath.includes('Contents/Resources/app.asar')) {
    //   nowPath = nowPath.replace('app.asar', '') + '../../../';
    // }
    // const nowPath = path.resolve('')
    const nowPath = electron.app.getPath('userData');
    log.info(`[Config] path = ${nowPath}`);
    storage.setDataPath(nowPath);
  }
  getBoadList = () => {
    storage.get('boardList', (error: any, data: any) => {
      globalThis.electron.data.boardList = data.boardList ?? [];
    });
  };

  /** 板一覧を保存 */
  saveBoardList = (boardList: typeof globalThis.electron.data.boardList) => {
    storage.set('boardList', { boardList }, (err) => {
      throw err;
    });
  };
}

export default new Config();
