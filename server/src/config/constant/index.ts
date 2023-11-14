import { join } from "path";

export const envFileSavePath = join(__dirname, "../../../../env.yaml");
export const rsaPemKeyFolderSavePath = join(__dirname, "../../../../openssl/");
export const DB_PROVIDER_TOKEN = "DB_PROVIDER_TOKEN";
export const SCHEMA_TOKEN_LIST = {
    users: "USERS_SCHEMA_TOKEN",
};
