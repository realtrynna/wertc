import type { Config } from "drizzle-kit";

export default {
    driver: "pg",
    schema: "./src/models/schemas/**.ts",
    out: "./drizzle",
    dbCredentials: {
        connectionString: "postgres://postgres:1234@127.0.0.1:5432/article",
    },
} satisfies Config;
