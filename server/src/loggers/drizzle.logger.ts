import { Logger } from "drizzle-orm/logger";

export class DrizzleLogger implements Logger {
    logQuery(query: string, params: unknown[]) {
        console.log("query", query);
        // console.log("params", params);
    }
}
