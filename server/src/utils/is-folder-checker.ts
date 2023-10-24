import { existsSync } from "fs";

import { rsaPemKeySaveFolderPath } from "src/config/constant";

export function isFolderChecker() {
    const isFolder = existsSync(rsaPemKeySaveFolderPath);

    return isFolder;
}
