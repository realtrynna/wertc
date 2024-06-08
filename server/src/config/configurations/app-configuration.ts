import { readFileSync } from "fs";
import yaml from "js-yaml";
import { join } from "path";

import { APP_ENV_YAML_FILENAME } from "src/config/constant";

const envYamlFile = readFileSync(join(process.cwd(), APP_ENV_YAML_FILENAME), "utf-8");

export default () => {
    return yaml.load(envYamlFile) as Record<string, any>;
};
