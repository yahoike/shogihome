import { BrowserWindow } from "electron";
import { PromptTarget } from "@/common/advanced/prompt";
import { createChildWindow } from "./child";

export function createCommandWindow(
  parent: BrowserWindow,
  target: PromptTarget,
  sessionID: number,
  name: string,
  onClose: (webContentsID: number) => void,
) {
  const query = {
    target,
    session: String(sessionID),
    name,
  };
  createChildWindow("prompt", query, parent, onClose);
}
