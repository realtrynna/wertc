import { registerAs } from "@nestjs/config";

import { ENV_CONFIG_TOKEN } from "../constant";

export default registerAs(ENV_CONFIG_TOKEN, () => ({
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbDatabase: process.env.DB_DATABASE,
    dbPort: process.env.DB_PORT,
}));
