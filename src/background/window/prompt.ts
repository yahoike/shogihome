import { BrowserWindow } from "electron";
import { PromptTarget } from "@/common/advanced/prompt";
import { createAuxiliaryWindow } from "./auxiliary";

export function createCommandWindow(
  parent: BrowserWindow,
  target: PromptTarget,
  sessionID: number,
  name: string,
  onClosed: (webContentsID: number) => void,
) {
  const query = {
    target,
    session: String(sessionID),
    name,
  };
  createAuxiliaryWindow("prompt", query, parent, onClosed);
}
