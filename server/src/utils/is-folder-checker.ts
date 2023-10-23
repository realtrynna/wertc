import fs from "fs";

import { rsaPemKeySaveFolderPath } from "src/config/constant";

export function isFolderChecker() {
    const isFolder = fs.existsSync(rsaPemKeySaveFolderPath);

    return isFolder;
}
