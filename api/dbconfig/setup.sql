DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY
    username VARCHAR (255) UNIQUE NOT NULL,
    password_digest VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY

);

INSERT INTO users (username, password_digest)
VALUES 
( 'Rey', '' ),
( 'Mark', '');

INSERT INTO habits ()
VALUES
();
