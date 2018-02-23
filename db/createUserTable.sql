CREATE TABLE users
(UserId SERIAL PRIMARY KEY,
username TEXT,
password TEXT,
logged_in BOOLEAN,
propId SERIAL)