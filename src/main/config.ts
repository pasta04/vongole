import path from 'path';
import storage from 'electron-json-storage';
import log from 'electron-log';

class Config {
  constructor() {
    // 設定ファイル読み込み
    storage.setDataPath(path.resolve(''));
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
