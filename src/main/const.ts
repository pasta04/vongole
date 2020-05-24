export const electronEvent = {
  /** サーバー起動 */
  'start-server': 'start-server',

  /** アラート表示 */
  'show-alert': 'show-alert',

  'show-comment': 'show-comment',
  'clear-comment': 'clear-comment',

  /** サーバー起動の返信 */
  'start-server-reply': 'start-server-reply',

  MAIN_GET_ELECTRON_DATA: 'MAIN_GET_ELECTRON_DATA',
  MAIN_SET_ELECTRON_DATA: 'MAIN_SET_ELECTRON_DATA',
  /** 板を追加 */
  MAIN_ADD_BOARDLIST: 'MAIN_ADD_BOARDLIST',

  /** スレ一覧を開く */
  MAIN_GET_THREAD_LIST: 'MAIN_GET_THREAD_LIST',

  /** スレを開く */
  MAIN_OPEN_THREAD: 'MAIN_OPEN_THREAD',

  /** 板一覧表示 */
  SHOW_BOARD_LIST: 'SHOW_BOARD_LIST',

  /** 書き込み */
  MAIN_POST_KAKIKOMI: 'MAIN_POST_KAKIKOMI',
};

export const keyCode = {
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
};
