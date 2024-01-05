import preloadImage from "./preload";

export enum IconType {
  BUSSY = "bussy",
  ERROR = "error",
  INFO = "info",
  GAME = "game",
  INTERNET = "internet",
  STOP = "stop",
  RESIGN = "resign",
  RESEARCH = "research",
  END = "end",
  QUIZ = "quiz",
  EDIT = "edit",
  CHECK = "check",
  SWAP = "swap",
  SWAP_H = "swap_h",
  SETTINGS = "settings",
  ENGINE_SETTINGS = "engineSettings",
  FLIP = "flip",
  FILE = "file",
  OPEN = "open",
  SAVE = "save",
  SAVE_AS = "saveAs",
  PASTE = "paste",
  COPY = "copy",
  DELETE = "delete",
  COMMENT = "comment",
  BRAIN = "brain",
  PV = "pv",
  CHART = "chart",
  PERCENT = "percent",
  MONITOR = "monitor",
  ARROW_DROP = "arrowDrop",
  ARROW_UP = "arrowUp",
  FIRST = "first",
  BACK = "back",
  NEXT = "next",
  LAST = "last",
  QUESTION = "question",
  ANALYSIS = "analysis",
  DESCRIPTION = "description",
  PLAY = "play",
  CLOSE = "close",
  CALL = "call",
  SCORE = "score",
  GRID = "grid",
  MATE_SEARCH = "mateSearch",
  ADD = "add",
  TREE = "tree",
  NOTE = "note",
  BATCH = "batch",
  OPEN_FOLDER = "openFolder",
  HISTORY = "history",
  PAUSE = "pause",
  RESUME = "resume",
  HELP = "help",
}

export const iconSourceMap = {
  [IconType.BUSSY]: "icon/hourglass_empty_white_24dp.svg",
  [IconType.ERROR]: "icon/error_outline_white_24dp.svg",
  [IconType.INFO]: "icon/info_white_24dp.svg",
  [IconType.GAME]: "icon/sports_esports_white_24dp.svg",
  [IconType.INTERNET]: "icon/language_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.STOP]: "icon/block_white_24dp.svg",
  [IconType.RESIGN]: "icon/flag_white_24dp.svg",
  [IconType.RESEARCH]: "icon/science_white_24dp.svg",
  [IconType.END]: "icon/do_disturb_on_white_24dp.svg",
  [IconType.QUIZ]: "icon/quiz_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.EDIT]: "icon/app_registration_white_24dp.svg",
  [IconType.CHECK]: "icon/check_circle_white_24dp.svg",
  [IconType.SWAP]: "icon/swap_vert_white_24dp.svg",
  [IconType.SWAP_H]: "icon/swap_horiz_white_24dp.svg",
  [IconType.SETTINGS]: "icon/settings_white_24dp.svg",
  [IconType.ENGINE_SETTINGS]: "icon/settings_input_component_white_24dp.svg",
  [IconType.FLIP]: "icon/flip_camera_android_white_24dp.svg",
  [IconType.FILE]: "icon/draft_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.OPEN]: "icon/file_open_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.SAVE]: "icon/save_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.SAVE_AS]: "icon/save_as_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.PASTE]: "icon/content_paste_white_24dp.svg",
  [IconType.COPY]: "icon/content_copy_white_24dp.svg",
  [IconType.DELETE]: "icon/backspace_white_24dp.svg",
  [IconType.COMMENT]: "icon/edit_note_white_24dp.svg",
  [IconType.BRAIN]: "icon/psychology_white_24dp.svg",
  [IconType.PV]: "icon/manage_search_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.CHART]: "icon/show_chart_white_24dp.svg",
  [IconType.PERCENT]: "icon/percent_white_24dp.svg",
  [IconType.MONITOR]: "icon/browse_activity_FILL0_wght400_GRAD0_opsz24.svg",
  [IconType.ARROW_DROP]: "icon/arrow_drop_down_white_24dp.svg",
  [IconType.ARROW_UP]: "icon/arrow_drop_up_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.FIRST]: "icon/first_page_white_24dp.svg",
  [IconType.BACK]: "icon/chevron_left_white_24dp.svg",
  [IconType.NEXT]: "icon/chevron_right_white_24dp.svg",
  [IconType.LAST]: "icon/last_page_white_24dp.svg",
  [IconType.QUESTION]: "icon/help_white_24dp.svg",
  [IconType.ANALYSIS]: "icon/query_stats_white_24dp.svg",
  [IconType.DESCRIPTION]: "icon/description_white_24dp.svg",
  [IconType.PLAY]: "icon/play_arrow_FILL1_wght400_GRAD0_opsz48.svg",
  [IconType.CLOSE]: "icon/close_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.CALL]: "icon/record_voice_over_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.SCORE]: "icon/scoreboard_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.GRID]: "icon/grid_on_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.MATE_SEARCH]: "icon/psychology_alt_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.ADD]: "icon/add_circle_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.TREE]: "icon/account_tree_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.NOTE]: "icon/note_alt_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.BATCH]: "icon/home_storage_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.OPEN_FOLDER]: "icon/folder_open_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.HISTORY]: "icon/history_FILL0_wght400_GRAD0_opsz48.svg",
  [IconType.PAUSE]: "icon/pause_circle_FILL0_wght400_GRAD0_opsz24.svg",
  [IconType.RESUME]: "icon/play_circle_FILL0_wght400_GRAD0_opsz24.svg",
  [IconType.HELP]: "icon/help_FILL0_wght400_GRAD0_opsz24.svg",
};

Object.values(iconSourceMap).forEach((source) => {
  preloadImage(source);
});
