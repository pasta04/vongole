import { BrowserWindow } from 'electron';
import ReadSitaraba from '../main/readBBS/readSitaraba';

declare global {
  namespace electron {
    /** 各種ウィンドウ */
    let window: {
      mainWindow: BrowserWindow;
      chatWindow: BrowserWindow[];
    };
    let data: {
      /** 板一覧 */
      boardList: {
        url: string;
        name: string;
      }[];
      /** 表示中の板情報 */
      board: {
        /** 板URL */
        url: string;
        /** スレ一覧 */
        threadList: {
          /** スレURL */
          url: string;
          /** スレッドタイトル */
          name: string;
          /** レス数 */
          resNum: number;
        }[];
      };
      /** 表示中のスレ情報 */
      thread: {
        /** スレURL */
        url: string;
        /** ホスト名 */
        hostname: string;
        /** 板ID */
        boardId: string;
        /** スレ番号 */
        threadNumber: string;
        /** レス一覧 */
        list: UserComment[];
        /** レス読み込み関数 */
        getRes: ReadSitaraba | ReadSitaraba;
      }[];
    };
  }
}

export {};
