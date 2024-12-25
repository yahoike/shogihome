import path from "node:path";
import { BrowserWindow } from "electron";
import { getPreloadPath, isDevelopment, isPreview, isTest } from "@/background/proc/env";
import { getAppLogger } from "@/background/log";

export function createChildWindow(
  name: string,
  query: Record<string, string>,
  parent: BrowserWindow,
  onClose: (webContentsID: number) => void,
): BrowserWindow {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, getPreloadPath()),
      // on development, disable webSecurity to allow mix of "file://" and "http://localhost:5173"
      webSecurity: !isDevelopment(),
      // NOTE: 現状、子ウィンドウではタイマーの実行が抑制されても困るケースが無いので、スロットリングは有効(デフォルト)にしておく。
      //backgroundThrottling: false,
    },
  });
  win.setBackgroundColor("#888");
  win.setParentWindow(parent);
  win.menuBarVisible = false;
  win.once("ready-to-show", () => {
    win.webContents.setZoomLevel(parent.webContents.getZoomLevel());
  });

  win.on("close", () => {
    onClose(win.webContents.id);
  });

  if (isDevelopment() || isTest()) {
    // Development
    const params = new URLSearchParams(query);
    getAppLogger().info("load dev server URL (%s)", name);
    win
      .loadURL("http://localhost:5173/" + name + "?" + params.toString())
      .then(() => {
        if (!process.env.IS_TEST) {
          win.webContents.openDevTools();
        }
      })
      .catch((e) => {
        getAppLogger().error(`failed to load dev server URL: ${e}`);
        throw e;
      });
  } else if (isPreview()) {
    // Preview
    getAppLogger().info("load app URL (%s)", name);
    win.loadFile(path.join(__dirname, "../../../" + name + ".html"), { query }).catch((e) => {
      getAppLogger().error(`failed to load app URL: ${e}`);
      throw e;
    });
  } else {
    // Production
    getAppLogger().info("load app URL (%s)", name);
    win.loadFile(path.join(__dirname, "../" + name + ".html"), { query }).catch((e) => {
      getAppLogger().error(`failed to load app URL: ${e}`);
      throw e;
    });
  }
  return win;
}
