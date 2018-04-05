CREATE TABLE "pet" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25),
	"type" VARCHAR(25),
	"breed" VARCHAR(120),
	"checked_in" BOOLEAN,
	"owner_id" INTEGER
);

CREATE TABLE "owner" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(25),
	"last_name" VARCHAR(25),
	"email" VARCHAR(60)
);