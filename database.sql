CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
-- (forenign key is where it matches a different table)

--favorite giphy image table:
CREATE TABLE "favorites" (
    "id" SERIAL PRIMARY KEY,
    "image_url" TEXT NOT NULL,
    "category_id" VARCHAR (50) REFERENCES "category",
);

INSERT INTO "favorites" ("image_url") VALUES "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmszvtiburon.nl%2Fsecret-santa-steal%2F&psig=AOvVaw0G17f283jyxiyUGeIhp1xr&ust=1598630252323000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDunfbfu-sCFQAAAAAdAAAAABAO"

SELECT * FROM "favorites" JOIN "category" ON "favorites".category_id = "category".id


-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');
