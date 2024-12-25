import { ordinal } from "@/common/helpers/string";
import { Texts } from "@/common/i18n/text_template";

export const en: Texts = {
  shogiHome: "ShogiHome",
  clear: "Clear",
  open: "Open",
  openNewInstance: "Open New ShogiHome Instance",
  saveOverwrite: "Overwrite",
  newRecord: "New Record",
  openRecord: "Open Record",
  saveRecord: "Save Record",
  saveRecordAs: "Save Record As",
  openAutoSaveDirectory: "Open Auto-Save Directory",
  exportPositionDiagram: "Export Position Diagram",
  positionImage: "Position Image",
  batchConversion: "Batch Conversion",
  recordFileBatchConversion: "Record File Batch Conversion",
  close: "Close",
  quit: "Quit",
  editing: "Edit",
  copyAsKIF: "Copy (KIF)",
  copyAsKI2: "Copy (KI2)",
  copyAsCSA: "Copy (CSA)",
  copyAsUSI: "Copy (USI)",
  copyAsSFEN: "Copy (SFEN)",
  copyAsJKF: "Copy (JKF)",
  copyAsUSEN: "Copy (USEN)",
  copy: "Copy",
  cut: "Cut",
  paste: "Paste",
  copyRecord: "Copy Record",
  asKIF: "As KIF",
  asKI2: "As KI2",
  asCSA: "As CSA",
  asUSIUntilCurrentMove: "As USI (Until Current Move)",
  asUSIAll: "As USI (All)",
  asJSONKifuFormat: "As JSON Kifu",
  asUSEN: "As USEN",
  copyPositionAsSFEN: "Copy Position (SFEN)",
  pasteRecordOrPosition: "Paste Record/Position",
  addSpecialMove: "Add Special Move",
  deleteMoves: "Delete Moves from Current Position",
  view: "View",
  openLayoutManager: "Open Layout Manager",
  openMonitorWindow: "Open Monitor Window",
  toggleFullScreen: "Toggle Full Screen",
  defaultFontSize: "Default Font Size",
  increaseFontSize: "Increase Font Size",
  decreaseFontSize: "Decrease Font Size",
  settings: "Settings",
  config: "Config",
  debug: "Debug",
  toggleDevTools: "Toggle DevTools",
  logFile: "Log File",
  openAppLog: "Open App Log",
  openUSILog: "Open USI Log",
  openCSALog: "Open CSA Log",
  tailAppLog: "Tail App Log",
  tailUSILog: "Tail USI Log",
  tailCSALog: "Tail CSA Log",
  copyAppLogTailCommand: "Copy App Log Tail Command",
  copyUSILogTailCommand: "Copy USI Log Tail Command",
  copyCSALogTailCommand: "Copy CSA Log Tail Command",
  reloadCustomPieceImage: "Reload Custom Piece Image",
  launchUSIEngine: "Launch USI Engine",
  connectToCSAServer: "Connect to CSA Server",
  adminMode: "Admin Mode",
  inAdminModeManuallyInvokeCommandsAtPrompt:
    "In admin mode, manually invoke commands at the prompt.",
  setoptionAndPrecedingCommandsAreSentAutomatically:
    "'setoption' and preceding commands are sent automatically.",
  serverMustSupportShogiServerX1ModeLogIn: "Server must support shogi-server's x1 mode login.",
  folders: "Folders",
  notification: "Notification",
  notificationTest: "Test Notification",
  thisIsTestNotification: "This is a test notification.",
  app: "App",
  log: "Log",
  backup: "Backup",
  cache: "Cache",
  help: "Help",
  openWebsite: "Open Website",
  openUserGuide: "Open User Guide",
  openLatestReleasePage: "Open Latest Release Page",
  openStableReleasePage: "Open Stable Release Page",
  license: "License",
  inputs: "Inputs",
  outputs: "Outputs",
  format: "Format",
  formats: "Formats",
  subdirectories: "Subdirectories",
  separate: "Separate",
  merge: "Merge",
  createSubdirectories: "Create Subdirectories",
  nameConflictAction: "Name Conflict Action",
  numberSuffix: "Number Suffix",
  skip: "Skip",
  convert: "Convert",
  openLogFile: "Open Log File",
  success: "Success",
  failed: "Failed",
  skipped: "Skipped",
  game: "Game",
  player: "Player",
  server: "Server",
  selectFromHistory: "Select from History",
  noHistory: "Empty",
  saveHistory: "Save History",
  version: "Version",
  gameProgress: "Game Progress",
  allGamesCompleted: "All Games Completed",
  wins: "Wins",
  draws: "Draws",
  validGames: "Valid Games",
  invalidGames: "Invalid Games",
  eloRatingDiff: "Elo Rating Diff",
  ignoreDraws: "Ignore Draws",
  drawCountAsHalfWins: "Draws Count as Half Wins",
  zValue: "Z Value",
  significance5pc: "5% Significance",
  significance1pc: "1% Significance",
  gameEnded: "Game Ended",
  offlineGame: "Offline Game",
  csaOnlineGame: "CSA Online Game",
  csaProtocolOnlineGame: "Online Game (CSA Protocol)",
  csaProtocolV121: "CSA Protocol 1.2.1 Standard",
  csaProtocolV121WithPVComments: "CSA Protocol 1.2.1 with PV Comments",
  host: "Host",
  portNumber: "Port",
  password: "Password",
  revealPassword: "Reveal Password",
  keepaliveInitialDelay: "Keepalive Initial Delay",
  blankLinePing: "Blank Line Ping",
  blankLinePingInitialDelay: "Blank Line Ping Initial Delay",
  blankLinePingInterval: "Blank Line Ping Interval",
  logout: "Logout",
  calculateJishogiPoints: "Calculate Jishogi Points",
  jishogiPoints: "Jishogi Points",
  displayGameResults: "Display Game Results",
  interrupt: "Interrupt",
  stopGame: "Stop Game",
  resign: "Resign",
  draw: "Draw",
  impass: "Impass",
  repetitionDraw: "Repetition Draw",
  mate: "Mate",
  noMate: "No Mate",
  mateSearch: "Mate Search",
  startMateSearch: "Start Mate Search",
  stopMateSearch: "Stop Mate Search",
  noMateFound: "No mate.",
  timeout: "Timeout",
  foulWin: "Foul Win",
  foulLose: "Foul Lose",
  enteringOfKing: "Entering of King",
  winByDefault: "Win by Default",
  loseByDefault: "Lose by Default",
  winByDeclaration: "Win by Declaration",
  declareWin: "Declare Win",
  research: "Research",
  startResearch: "Start Research",
  endResearch: "End Research",
  recordAnalysis: "Record Analysis",
  analysis: "Analyze",
  analyze: "Analyze",
  stopAnalysis: "Stop Analysis",
  setupPosition: "Setup Position",
  startPositionSetup: "Start Position Setup",
  completePositionSetup: "Complete Setup",
  changeTurn: "Change Turn",
  initializePosition: "Initialize Position",
  changePieceSet: "Change Piece Set",
  appSettings: "Preferences",
  language: "Languages",
  theme: "Theme",
  standard: "Standard",
  green: "Green",
  cherryBlossom: "Cherry Blossom",
  customImage: "Custom Image",
  autumn: "Autumn",
  snow: "Snow",
  darkGreen: "Dark Green",
  dark: "Dark",
  boardLayout: "Board Layout",
  compact: "Compact",
  portrait: "Portrait",
  piece: "Piece",
  singleKanjiPiece: "Single Kanji",
  singleKanjiGothicPiece: "Single Kanji (Gothic)",
  singleKanjiDarkPiece: "Single Kanji (Dark)",
  singleKanjiGothicDarkPiece: "Single Kanji (Gothic, Dark)",
  imageHasMarginsRemoveForLargerDisplay: "Image has margins (remove for larger display)",
  backgroundImage: "Background Image",
  board: "Board",
  pieceStand: "Piece Stand",
  lightWoodyTexture: "Light Wood Texture",
  warmWoodTexture: "Warm Wood Texture",
  resin: "Resin",
  transparent: "Transparent",
  boardOpacity: "Board Opacity",
  pieceStandOpacity: "Piece Stand Opacity",
  recordOpacity: "Record Opacity",
  showFileAndRank: "Show File & Rank",
  showLeftControls: "Show Left Controls",
  showRightControls: "Show Right Controls",
  tabViewStyle: "Tab View Style",
  oneColumn: "1 Column",
  twoColumns: "2 Columns",
  sounds: "Sounds",
  pieceSoundVolume: "Piece Sound Volume",
  clockSoundVolume: "Clock Sound Volume",
  clockSoundPitch: "Clock Sound Pitch",
  clockSoundTarget: "Clock Sound Target",
  anyTurn: "Any",
  onlyHumanTurn: "Human",
  defaultRecordFileFormat: "Default Record Format",
  textEncoding: "Text Encoding",
  strict: "Strict",
  autoDetect: "Auto Detect",
  newlineCharacter: "Newline Character",
  old90sMac: "90's Mac",
  autoSaving: "Auto-Save",
  autoSavingDirectory: "Auto-Save Directory",
  recordFileName: "Record File Name",
  select: "Select",
  positionOfUSIOutput: "Position of USI Output",
  movesOfUSIOutput: "Moves of USI Output",
  onlySFEN: "Only SFEN",
  readOnlyThreshold: "Read-Only Threshold",
  usiProtocol: "USI Protocol",
  translateOptionName: "Translate Option Name",
  functionalOnJapaneseOnly: "Functional on Japanese Only",
  maxStartupTime: "Max Startup Time",
  forDevelopers: "For Developers",
  enableAppLog: "Enable App Log",
  enableUSILog: "Enable USI Log",
  enableCSALog: "Enable CSA Log",
  logLevel: "Log Level",
  manageEngines: "Manage Engines",
  flipBoard: "Flip Board",
  file: "File",
  recordFile: "Record File",
  executableFile: "Executable",
  imageFile: "Image",
  unsaved: "Unsaved",
  remove: "Remove",
  deleteMove: "Delete Move",
  recordProperties: "Record Properties",
  comments: "Comments",
  commentsAndBookmarks: "Comments & Bookmarks",
  branches: "Branches",
  bookmark: "Bookmark",
  bookmarkList: "Bookmarks",
  useBookmarkAsHeader: "Use Bookmark as Header",
  moveComments: "Move Comments",
  searchLog: "Search Log",
  pv: "PV",
  mateShort: "M",
  displayPVShort: "Play",
  evaluation: "Evaluation",
  rawScore: "Raw Score",
  score: "Score",
  estimatedWinRate: "Estimated Win Rate",
  evaluationAndEstimatedWinRateAndPV: "Evaluation & Estimated Win Rate & PV",
  swapEachTurnChange: "Swap Each Turn Change",
  alwaysSenteIsPositive: "Always Sente is Positive",
  signOfEvaluation: "Sign of Evaluation",
  maxArrows: "Max Arrows",
  winRateCoefficient: "Win Rate Coefficient",
  monitor: "Monitor",
  hideTabView: "Hide",
  expandTabView: "Expand Tab View",
  sente: "Sente",
  senteOrShitate: "Sente (Shitate)",
  shitate: "Shitate",
  gote: "Gote",
  goteOrUwate: "Gote (Uwate)",
  uwate: "Uwate",
  swapSenteGote: "Swap Sente/Gote",
  pieceToss: "Piece Toss",
  currentPosition: "Current Position",
  enableEngineTimeout: "Enable Engine Timeout",
  setDifferentTimeForGote: "Set different time for Gote",
  nextTurn: "Next Move",
  elapsedTime: "Elapsed Time",
  elapsed: "Elapsed",
  rank: "Rank",
  depth: "Depth",
  searchEngine: "Search Engine",
  ponder: "Ponder",
  numberOfThreads: "Threads",
  multiPV: "Multi PV",
  startPosition: "Position",
  maxMoves: "Max Moves",
  gameRepetition: "Repeat",
  jishogi: "Jishogi",
  rule24: "24-point rule",
  rule27: "27-point rule",
  tryRule: "TRY rule",
  autoRelogin: "Auto Re-Login",
  restartItEveryGame: "Restart it Every Game",
  swapTurnWhenGameRepetition: "Swap Turns When Repeat",
  outputComments: "Output Comments",
  saveRecordAutomatically: "Save Record Automatically",
  adjustBoardToHumanPlayer: "Adjust Board to Human Player",
  adjustBoardAutomatically: "Adjust Board Automatically",
  command: "Command",
  startGame: "Start Game",
  cancelGame: "Cancel Game",
  allottedTime: "Allotted Time",
  byoyomi: "Byoyomi",
  increments: "Increments",
  startEndCriteria: "Start/End Criteria",
  endCriteria1Move: "End Criteria for 1 Move",
  outputSettings: "Output Settings",
  noOutputs: "No Outputs",
  insertCommentToTop: "Insert to Top",
  appendCommentToBottom: "Append to Bottom",
  insertToComment: "Ins. to Comment",
  insertToRecord: "Ins. to Record",
  overwrite: "Overwrite",
  fromPrefix: "from",
  fromSuffix: "",
  toPrefix: "to",
  toSuffix: "",
  plyPrefix: "",
  plySuffix: "th move",
  hoursSuffix: "h",
  minutesSuffix: "min",
  secondsSuffix: "sec",
  engineManagement: "Engine Management",
  engineName: "Engine Name",
  author: "Author",
  earlyPonder: "Early Pondering",
  enginePath: "Engine Path",
  openDirectory: "Open Directory",
  displayName: "Display Name",
  invoke: "Invoke",
  resetToEngineDefaultValues: "Reset to default values",
  defaultValue: "Default Value",
  freeTextUnsafe: "Free Text (Unsafe)",
  noEngineRegistered: "No engine",
  duplicate: "Copy",
  add: "Add",
  compareAndMerge: "Compare & Merge",
  compareEngineSettings: "Compare Engine Settings",
  noDifference: "No Difference",
  mergeToLeft: "Merge to Left",
  mergeToRight: "Merge to Right",
  recommended: "Recommended",
  import: "Import",
  saveAndClose: "Save & Close",
  save: "Save",
  saveAs: "Save As",
  history: "History",
  clearHistory: "Clear History",
  userFile: "User File",
  automaticBackup: "Automatic Backup",
  restore: "Restore",
  loadRecordFromWeb: "Load Record from Web",
  fetchLatestData: "Fetch Latest Data",
  sourceURL: "Source URL",
  ok: "OK",
  cancel: "Cancel",
  back: "Back",
  name: "Name",
  prediction: "Prediction",
  best: "Best",
  nodes: "Nodes",
  hashUsage: "Hash Usage",
  stop: "Stop",
  resume: "Resume",
  nonHandicap: "Non-Handicap",
  lanceHandicap: "Lance Handicap",
  rightLanceHandicap: "Right Lance Handicap",
  bishopHandicap: "Bishop Handicap",
  rookHandicap: "Rook Handicap",
  rookLanceHandicap: "Rook-Lance Handicap",
  twoPiecesHandicap: "2 Pieces Handicap",
  fourPiecesHandicap: "4 Pieces Handicap",
  sixPiecesHandicap: "6 Pieces Handicap",
  eightPiecesHandicap: "8 Pieces Handicap",
  tenPiecesHandicap: "10 Pieces Handicap",
  tsumeShogi: "Tsume Shogi",
  doubleKingTsumeShogi: "2-Kings Tsume Shogi",
  startDateTime: "Start",
  endDateTime: "End",
  gameDate: "Date",
  tournament: "Tournament",
  strategy: "Strategy",
  gameTitle: "Title",
  timeLimit: "Time Limit",
  blackTimeLimit: "Time Limit (Sente)",
  whiteTimeLimit: "Time Limit (Gote)",
  place: "Place",
  postedOn: "Posted On",
  note: "Note",
  senteShortName: "Sente(short)",
  goteShortName: "Gote(short)",
  scorekeeper: "Scorekeeper",
  opusNo: "Opus No.",
  opusName: "Opus Name",
  publishedBy: "Published By",
  publishedOn: "Published On",
  source: "Source",
  numberOfMoves: "Number of Moves",
  integrity: "Integrity",
  recordCategory: "Category",
  award: "Award",
  filterByOptionName: "Filter by Option Name",
  filterByEngineName: "Filter by Engine Name",
  bookStyle: "Book Style",
  gameStyle: "Game Style",
  thin: "Thin",
  bold: "Bold",
  extraBold: "Extra Bold",
  playerName: "Player Name",
  typeface: "Typeface",
  weight: "Weight",
  handLabel: "Hand Label",
  header: "Header",
  vertical: "Vertical",
  size: "Size",
  none: "None",
  bgCover: "Cover",
  bgContain: "Contain",
  bgTile: "Tile",
  inaccuracy: "Inaccuracy",
  dubious: "Dubious",
  mistake: "Mistake",
  blunder: "Blunder",
  inaccuracyThreshold: "Inaccuracy Threshold",
  dubiousThreshold: "Dubious Threshold",
  mistakeThreshold: "Mistake Threshold",
  blunderThreshold: "Blunder Threshold",
  maxPVLength: "Max PV Length",
  gothic: "Gothic",
  mincho: "Mincho",
  appVersion: "App Version",
  installed: "Installed",
  stable: "Stable",
  latest: "Latest",
  backgroundColor: "Background Color",
  dialogBackdrop: "Dialog Backdrop",
  record: "Record",
  book: "Book",
  chart: "Chart",
  analytics: "Analytics",
  controlGroup: "Control Group",
  left: "Left",
  top: "Top",
  width: "Width",
  height: "Height",
  newCustomProfile: "New Custom Profile",
  addCustomLayoutProfile: "Add Custom Layout Profile",
  duplicateCurrentProfile: "Duplicate Current Profile",
  removeCurrentProfile: "Remove Current Profile",
  exportProfileToClipboard: "Export Profile to Clipboard",
  importProfileFromClipboard: "Import Profile from Clipboard",
  profileExportedToClipboard: "Profile exported to clipboard.",
  profileImported: "Profile imported.",
  failedToImportProfile: "Failed to import profile.",
  rightControlBox: "Right Control Box",
  leftControlBox: "Left Control Box",
  topControlBox: "Top Control Box",
  legends: "Legends",
  historyMode: "History Mode",
  headers: "Headers",
  playButton: "Play Button",
  insert: "Insert",
  bringForward: "Bring Forward",
  sendBackward: "Send Backward",
  move: "Move",
  bookMove: "Book Move",
  play: "Play",
  edit: "Edit",
  freq: "Freq.",
  frequency: "Frequency",
  new: "New",
  duplicated: "Duplicated",
  moveEntry: "Entry",
  updatedAt: "Updated At",
  createdAt: "Created At",
  lastSent: "Last Sent",
  lastReceived: "Last Received",
  protocolVersion: "Protocol Version",
  prompt: "Prompt",
  openPrompt: "Open Prompt",
  forceQuit: "Force Quit",
  forceClose: "Force Close",
  blankLine: "Blank Line",
  autoScroll: "Auto Scroll",
  showTimestamp: "Show Timestamp",
  highlightByPartialMatch: "Highlight by Partial Match",
  csaServer: "CSA Server",
  usiEngine: "USI Engine",
  noRunningUSIEngine: "No running USI engine.",
  noConnectedCSAServer: "No connected CSA server.",
  willBeRemovedFromTheListSoon: "This session is closed, will be removed from the list soon.",
  typeCommandHereAndPressEnter: "Type command here and press Enter.",
  allowBlankLine: "Allow Blank Line",
  removeSpaceFromBothEnds: "Remove Space from Both Ends",
  collapseSequentialSpaces: "Collapse Sequential Spaces",
  typeCustomTitleHere: "Type custom title here",
  displayEmptyElements: "Display Empty Elements",
  share: "Share",
  waitingForNewGame: "Waiting for new game.",
  waitingForPlayerSetup: "Waiting for player setup.",
  insertedComment: "Inserted comment.",
  conversionCompleted: "Conversion completed.",
  human: "Human",
  randomPlayer: "Random Player",
  beginner: "Beginner",
  staticRook: "Static Rook",
  rangingRook: "Ranging Rook",
  pleaseSelectEngines: "Please select engines.",
  thisItemCannotBeMerged: "This item cannot be merged.",
  tryingToConnectAndLoginToCSAServer: "Trying to connect and login to CSA server.",
  inBrowserLogsOutputToConsoleAndIgnoreThisSetting:
    "*In web browser version, it will output logs to console and ignore this setting.",
  shouldRestartToApplyLogSettings: "*You should restart this app to apply log settings.",
  canOpenLogDirectoryFromMenu:
    '*You can open log directory from "Debug" - "Open Log Directory" menu.',
  hasNoOldLogCleanUpFeature: "*This app has no clean-up feature. Please remove old logs manually.",
  processingPleaseWait: "Processing, please wait.",
  importingFollowingRecordOrPosition: "Importing the following record(or position).",
  supportsKIF_KI2_CSA_USI_SFEN_JKF_USEN: "*Supports KIF, KI2, CSA, USI, SFEN, JKF, and USEN.",
  pleasePasteRecordIntoTextArea: "*Please paste record data into the text area.",
  pleaseSpecifyPlainTextURL: "*Please specify plain text URL.",
  redirectNotSupported: "*Redirect is not supported.",
  desktopVersionPastesAutomatically:
    "*In desktop version, it will paste automatically from clipboard.",
  earlyPonderFeatureSendsPonderhitCommandWithYaneuraOusNonStandardOptions:
    'Early ponder feature sends "ponderhit" command with YaneuraOu\'s non-standard options.',
  ifYourEngineNotSupportTheOptionsItMayCauseUnexpectedBehavior:
    "If your engine does not support the options, it may cause unexpected behavior.",
  someLogsDisabled: "Some log settings are disabled.",
  logsRecommendedForCSAProtocol: "Log settings are recommended for CSA protocol.",
  pleaseEnableLogsAndRestart: "Please enable log settings and restart this app.",
  notSendPVOnStandardCSAProtocol: "Client do not send PV on standard CSA protocol.",
  csaProtocolSendPlaintextPassword: "On CSA protocol, client send plaintext password.",
  passwordWillSavedPlaintextBecauseOSSideEncryptionNotAvailable:
    "Password will saved as plaintext because OS side encryption is not available.",
  pleaseUncheckSaveHistoryIfNotWantSave: "Please uncheck Save History, if you don't want to save.",
  csaProtocolSendPlaintextPasswordRegardlessOfHistory:
    "On CSA protocol, client send plaintext password regardless of history.",
  whenNewVersionIsAvailableItWillBeNotified: "When new version is available, it will be notified.",
  pleaseCheckMessageThisIsTestNotificationByAboveButton:
    'Please check the message "This is test notification." by above button.',
  ifNotWorkYouShouldAllowNotificationOnOSSetting:
    "If it does not work, you should allow notification on OS setting.",
  translationHelpNeeded: "We'd like your help to translate.",
  restartRequiredAfterLocaleChange: "You should restart this app to change the language.",
  areYouSureWantToResign: "Are you sure you want to resign?",
  areYouSureWantToDoDeclaration: "Are you sure you want to do declaration?",
  areYouSureWantToQuitGames: "Are you sure you want to quit games?",
  areYouSureWantToRequestQuit:
    "You have possibility to be loser. Are you sure you want to request quit?",
  areYouSureWantToClearRecord: "Are you sure you want to clear record?",
  areYouSureWantToDiscardPosition: "Are you sure you want to discard the position?",
  areYouSureWantToOpenFileInsteadOfCurrentRecord:
    "Are you sure you want to open the file instead of current record?",
  areYouSureWantToClearHistory: "Are you sure you want to clear history?",
  areYouSureWantToRemoveCurrentProfile: "Are you sure you want to remove current profile?",
  yamlFormatSettingsCopiedToClipboard: "YAML format settings copied to clipboard.",
  jsonFormatSettingsCopiedToClipboard: "JSON format settings copied to clipboard.",
  usiCsaBridgeCommandCopiedToClipboard: "usi-csa-bridge command copied to clipboard.",
  youCanNotCloseAppWhileCSAOnlineGame: "You cannot close app while CSA online game.",
  fileExtensionNotSupported: "File extension is not supported.",
  errorOccuredWhileDisconnectingFromCSAServer:
    "An error occured while disconnecting from CSA server.",
  failedToConnectToCSAServer: "Failed to connect to CSA server.",
  errorOccuredWhileLogoutFromCSAServer: "An error occured while logout from CSA server.",
  disconnectedFromCSAServer: "Disconnected from CSA server.",
  csaServerLoginDenied: "CSA server login denied.",
  thisFeatureNotAvailableOnWebApp: "This feature is not available on web app.",
  failedToStartNewGame: "Failed to start new game.",
  errorOccuredWhileEndingGame: "An error occured while ending game.",
  failedToSendGoCommand: "Failed to send go-command.",
  failedToSendPonderCommand: "Failed to send ponder-command.",
  failedToSendStopCommand: "Failed to send stop-command.",
  failedToShutdownEngines: "Failed to shutdown engines.",
  failedToCheckUpdates: "Failed to check updates.",
  failedToSaveRecord: "Failed to save record.",
  failedToParseSFEN: "Failed to parse SFEN.",
  failedToDetectRecordFormat: "Failed to detect record format.",
  unknown: "Unknown",
  unknownFileExtension: "Unknown file extension.",
  emptyRecordInput: "Empty record input.",
  invalidPieceName: "Invalid piece name",
  invalidTurn: "Invalid turn",
  invalidMove: "Invalid move",
  invalidMoveNumber: "Invalid move number",
  invalidDestination: "Invalid destination",
  pieceNotExists: "Piece not exists",
  invalidLine: "Invalid line",
  invalidBoard: "Invalid board",
  invalidHandPiece: "Invalid hand piece",
  invalidUSI: "Invalid USI",
  engineProcessWasClosedUnexpectedly: "The engine process was closed unexpectedly.",
  backgroundImageFileNotSelected: "Background image file is not selected.",
  pieceImageFileNotSelected: "Piece image file is not selected.",
  boardImageFileNotSelected: "Board image file is not selected.",
  pieceStandImageFileNotSelected: "Piece stand image file is not selected.",
  pieceSoundVolumeMustBe0To100Percent: "Piece sound volume must be 0% to 100%.",
  clockSoundVolumeMustBe0To100Percent: "Clock sound volume must be 0% to 100%.",
  clockSoundPitchMustBe220To880Hz: "Clock sound pitch must be 220Hz to 880Hz.",
  engineTimeoutMustBe1To300Seconds: "Engine timeout must be 1 to 300 seconds.",
  coefficientInSigmoidMustBeGreaterThan0: "Coefficient in sigmoid must be greater than 0.",
  inaccuracyThresholdMustBe1To100Percent: "Inaccuracy must be 1% to 100%.",
  dubiousThresholdMustBe1To100Percent: "Dubious threshold must be 1% to 100%.",
  mistakeThresholdMustBe1To100Percent: "Mistake threshold must be 1% to 100%.",
  blunderThresholdMustBe1To100Percent: "Blunder threshold must be 1% to 100%.",
  recordSavedWithGarbledCharacters: "The record has saved with some garbled characters.",
  pleaseConsiderToUseKIFU: "Please consider to use KIFU(UTF-8).",
  youCanChangeDefaultRecordFileFormatFromAppSettings:
    "You can change default record file format from App Settings.",
  inaccuracyThresholdMustBeLessThanDubiousThreshold:
    "Inaccuracy threshold must be less than dubious threshold.",
  dubiousThresholdMustBeLessThanMistakeThreshold:
    "Dubious threshold must be less than mistake threshold.",
  mistakeThresholdMustBeLessThanBlunderThreshold:
    "Mistake threshold must be less than blunder threshold.",
  thisEngineNotSupportsMateSearch: "This engine does not support mate search.",
  pleaseEndActiveFeaturesBeforeOpenRecord: "Please end active features before open record.",
  bothTimeLimitAndByoyomiAreNotSet: "Both time limit and byoyomi are not set.",
  canNotUseByoyomiWithFischer: "You cannot use Byoyomi with Fischer.",
  repeatsMustBeOneIfHumanPlayerIncluded:
    "The number of repeats must be 1, if a human player is included.",
  protocolVersionNotSelected: "Protocol version is not selected.",
  hostNameIsEmpty: "Host name is empty.",
  invalidPortNumber: "Invalid port number.",
  idIsEmpty: "ID is empty.",
  idContainsSpace: "ID contains space.",
  passwordContainsSpace: "Password contains space.",
  tcpKeepaliveInitialDelayMustBePositive: "TCP keepalive initial delay must be positive.",
  blankLinePingInitialDelayMustBeGreaterThanOrEqualTo30:
    "Blank line ping initial delay must be >=30.",
  blankLinePingIntervalMustBeGreaterThanOrEqualTo30: "Blank line ping interval must be >=30.",
  engineNotSelected: "Engine is not selected.",
  forExportingConversionLogPleaseEnableAppLogsAndSetLogLevelDebugAndRestart:
    "For exporting conversion log, please enable app logs, set log level to DEBUG and restart this app.",
  sourceDirectoryNotSpecified: "Source directory is not specified.",
  sourceFormatsNotSpecified: "Source formats are not specified.",
  destinationDirectoryNotSpecified: "Destination directory is not specified.",
  destinationFileNotSpecified: "Destination file is not specified.",
  anyUnsavedDataWillBeLostDoYouReallyWantToResetBookData:
    "Any unsaved data will be lost. Do you really want to reset book data?",
  bookDataOpendAsReadOnlyModeBecauseOfLargeFile:
    "Book data opened as read-only mode because of large file.",
  youCanChangeFileSizeThresholdFromPreferencesDialog:
    "You can change file size threshold from Preferences dialog.",
  bookMovesWereImported: "Book moves were imported.",
  anyBookMovesAreUnsavedDoYouReallyWantToDiscardThemAndCloseTheApp:
    "Any book moves are unsaved. Do you really want to discard them and close the app?",
  sourceRecordFileNotSet: "Source record file is not set.",
  sfenFileImportIsNotSupported: "SFEN file import is not supported.",
  sourceDirectoryNotSet: "Source directory is not set.",
  minPlyMustBeLessThanMaxPly: "Min ply must be less than max ply.",
  playerNameNotSet: "Player name is not set.",
  totalNumber: (n: number) => `Total: ${n}`,
  number: (n: number) => "" + n,
  tryToReloginToCSAServerNSecondsLater: (n) => `Try to relogin to the CSA server in ${n} seconds.`,
  mateInNPlyDoYouWantToDisplay: (n) => `Mate in ${n} ply. Do you want to display it?`,
  insertedNMovesToRecord: (n: number) => `Inserted ${n} moves to the record.`,
  errorsOccurred: (n) => (n >= 2 ? `${n} errors have occurred.` : `${n} error has occurred.`),
  between: (a, b) => `between ${a} and ${b}`,
  addNthEngine: (n) => `Add ${ordinal(n)} engine`,
  copyOf: (name) => `${name} (copy)`,
  keepLatest: (n) => `keep latest ${n}`,
  followingDataNotSavedBecauseNotSupporetedBy: (fileFormat: string) =>
    `The following data was not saved because it is not supporeted by "${fileFormat}".`,
  areYouSureWantToDeleteFollowingMove: (n) =>
    `Are you sure you want to delete th ${n}th move and the following moves?`,
  failedToOpenDirectory: (path: string) => `Failed to open directory of the file: ${path}`,
  unexpectedEventSenderPleaseReport(sender) {
    return `Unexpected event sender. Please report this error message to developer. [${sender}]`;
  },
  unexpectedHTTPMethodPleaseReport(method) {
    return `Unexpected HTTP method. Please report this error message to developer. [${method}]`;
  },
  unexpectedRequestURLPleaseReport(url) {
    return `Unexpected request URL. Please report this error message to developer. [${url}]`;
  },
  noResponseFromEnginePleaseExtendTimeout(seconds) {
    return `No response from the engine for ${seconds} seconds. Please extend the timeout in the app settings if your engine is slow.`;
  },
  stableVersionReleased(version: string) {
    return `Stable version ${version} released!`;
  },
  latestVersionReleased(version: string) {
    return `Latest version ${version} released!`;
  },
  doYouReallyWantToRemoveBookMove(name: string) {
    return `Do you really want to remove the book move "${name}"?`;
  },
  unexpectedRecordFileExtension(path: string) {
    return `Unexpected record file extension: [${path}]`;
  },
  fileNotFound(path: string) {
    return `File not found. [${path}]`;
  },
  directoryNotFound(path: string) {
    return `Directory not found. [${path}]`;
  },
};
