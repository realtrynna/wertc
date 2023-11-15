import { pgTable, uniqueIndex, serial, varchar, timestamp } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	gender: varchar("gender").notNull(),
	name: varchar("name", { length: 10 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	password: varchar("password", { length: 255 }).notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		emailIdx: uniqueIndex("email_index").on(table.email),
	}
});