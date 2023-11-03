import { mkdirSync } from "fs";

import { rsaPemKeyFolderSavePath } from "../config/constant";

export function folderGenerator() {
    mkdirSync(rsaPemKeyFolderSavePath);
}
