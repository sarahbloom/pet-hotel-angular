CREATE DATABASE "petHotel";

CREATE TABLE "pet" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25),
	"type" VARCHAR(25),
	"breed" VARCHAR(120),
	"checked_in" BOOLEAN,
	"owner_id" INTEGER FOREIGN KEY REFERENCES "owner"("id")
);

CREATE TABLE "owner" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(25),
	"email" VARCHAR(60)
);

INSERT INTO "pet" ("name", "type", "breed", "checked_in", "owner_id")
VALUES ('May', 'chicken', 'Plymouth', FALSE, 3),
('Aisha', 'gecko', 'leopard', FALSE, 2),
('Emmy', 'turtle', 'painted', FALSE, 4),
('Timmy', 'turtle', 'mapped', FALSE, 4);

INSERT INTO "owner" ("first_name", "email")
VALUES ('Jack', 'JH@aol.com'),
('Amy', 'pond@mac.com'),
('Martha', 'dr@hotmail.com'),
('Sarah Jane','sjs@yahoo.com');
