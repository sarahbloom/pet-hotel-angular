CREATE DATABASE "petHotel";

CREATE TABLE "pet" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(25),
	"type" VARCHAR(25),
	"breed" VARCHAR(120),
	"checked_in" BOOLEAN,
	"owner_id" INTEGER FOREIGN KEY REFERENCES "owner"("id")
);

!!!! make sure this owner_id is a foreign key !!!!

CREATE TABLE "owner" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(25),
	"last_name" VARCHAR(25),
	"email" VARCHAR(60)
);

INSERT INTO "pet" ("name", "type", "breed", "checked_in", "owner_id")
VALUES ('May', 'chicken', 'Plymouth', FALSE, 3),
('Aisha', 'gecko', 'leopard', FALSE, 2),
('Emmy', 'turtle', 'painted', FALSE, 4),
('Timmy', 'turtle', 'mapped', FALSE, 4);

INSERT INTO "owner" ("first_name", "last_name", "email")
VALUES ('Jack', 'Harkness', 'JH@aol.com'),
('Amy', 'Pond', 'pond@mac.com'),
('Martha', 'Jones', 'dr@hotmail.com'),
('Sarah Jane', 'Smith', 'sjs@yahoo.com');
