/**
 * GUI アプリと CLI ツールでコードを共有するために Electron を遅延読み込みします。
 * Electron が存在しない場合は例外が投げられます。
 */
export function requireElectron() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const electron = require("electron");
  if (typeof electron !== "object") {
    throw new Error("Electron is not available");
  }
  return electron;
}

/**
 * GUI アプリと CLI ツールでコードを共有するために Electron を遅延読み込みします。
 * Electron が存在しない場合は null を返します。
 */
export function getElectron() {
  try {
    return requireElectron();
  } catch {
    return null;
  }
}
