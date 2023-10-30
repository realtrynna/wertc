import { pgTable, uniqueIndex, serial, varchar } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"


export const users = pgTable("users", {
	id: serial("id").primaryKey().notNull(),
	email: varchar("email", { length: 255 }),
},
(table) => {
	return {
		emailIdx: uniqueIndex("email_index").on(table.email),
	}
});