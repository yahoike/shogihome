import { BrowserWindow } from "electron";
import { createChildWindow } from "./child";

let win: BrowserWindow | null = null;

export function createMonitorWindow(parent: BrowserWindow) {
  if (win) {
    win.focus();
    return;
  }
  win = createChildWindow("monitor", {}, parent, () => {
    win = null;
  });
}
