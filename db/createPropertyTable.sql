CREATE TABLE property
(id SERIAL PRIMARY KEY,
propId INTEGER,
name VARCHAR(60),
description VARCHAR(360),
address VARCHAR(120),
city VARCHAR(120),
state VARCHAR(25),
zip_code INTEGER,
image TEXT,
loan_amount INTEGER,
mortgage INTEGER,
desired_rent INTEGER)