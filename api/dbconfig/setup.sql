DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    email varchar(100) NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
);

DROP TABLE IF EXISTS habits;
CREATE TABLE habits(
    habit_id serial PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    user_id INT references users(id) ON DELETE SET NULL,
    measurement VARCHAR (255),
    frequency INT,
    created timestamp DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO users (username, email, password_digest)
VALUES 
( 'Rey', 'test@gmail.com','tu9ibtoi4tbh2hhuet' ),
( 'Mark',  'test@hotmail.com','h4hoeuba3r3tbaeu');



INSERT INTO habits (user_id, name, measurement, frequency)
VALUES
(1,'Drink Water', '2 Litres', 5),
(1,'Exercise', '1 Hour', 3),
(2,'Sleep', '8 Hours', 7),
(2,'SHINZOU WO SASAGEYO!', '5 Sec', 7);
