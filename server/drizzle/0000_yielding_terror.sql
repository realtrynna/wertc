-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255)
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "email_index" ON "users" ("email");
*/