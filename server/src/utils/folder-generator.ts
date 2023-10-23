import fs from "fs";

import { rsaPemKeySaveFolderPath } from "../config/constant";

export function folderGenerator() {
    fs.mkdirSync(rsaPemKeySaveFolderPath);
}
