import { existsSync } from "fs";

import { rsaPemKeyFolderSavePath } from "src/config/constant";

export function isFolderChecker() {
    const isFolder = existsSync(rsaPemKeyFolderSavePath);

    return isFolder;
}
