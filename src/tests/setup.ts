import { getTempPathForTesting } from "@/background/proc/env";
import fs from "node:fs";

afterAll(() => {
  fs.rmSync(getTempPathForTesting(), { recursive: true, force: true });
});
