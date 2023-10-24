import { readFileSync } from "fs";
import yaml from "js-yaml";

import { envFileSavePath } from "src/config/constant";

export default () => {
    return yaml.load(readFileSync(envFileSavePath, "utf8")) as Record<
        string,
        any
    >;
};
