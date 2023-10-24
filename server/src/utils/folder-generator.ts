import { mkdirSync } from "fs";

import { rsaPemKeySaveFolderPath } from "../config/constant";

export function folderGenerator() {
    mkdirSync(rsaPemKeySaveFolderPath);
}
