CREATE TABLE IF NOT EXISTS "table" (
	"id" serial PRIMARY KEY NOT NULL,
	"street" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" text
);
