import {
    pgTable,
    serial,
    timestamp,
    uniqueIndex,
    varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable(
    "users",
    {
        id: serial("id").primaryKey(),
        email: varchar("email", { length: 255 }).notNull(),
        name: varchar("name", { length: 10 }).notNull(),
        gender: varchar("gender", { enum: ["남자", "여자"] }).notNull(),
        password: varchar("password", { length: 255 }).notNull(),
        createdAt: timestamp("created_at").defaultNow().notNull(),
        updatedAt: timestamp("updated_at").defaultNow().notNull(),
    },
    (users) => {
        return {
            emailIndex: uniqueIndex("email_index").on(users.email),
        };
    },
);

export type TInsertUser = typeof users.$inferInsert;
