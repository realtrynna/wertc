import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 255 }),
    gender: varchar("gender", { enum: ["남자", "여자"] }),
});
