DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR (255) UNIQUE NOT NULL,
    password_digest VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS habits;
CREATE TABLE habits(
    id serial PRIMARY KEY,
    name VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS user_habits;
CREATE TABLE user_habits (
    id serial PRIMARY KEY,
    user_id INT references users(id),
    habit_id INT references habits(id),
    measurement VARCHAR (255),
    frequency INT,
    created timestamp DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS habit_counter
CREATE TABLE habit_counter (
    id serial PRIMARY KEY,
    user_habit_id INT REFERENCES user_habits(id) ON DELETE CASCADE ON UPDATE CASCADE,
    finished_at timestamp DEFAULT CURRENT_TIMESTAMP,
    finished BOOLEAN
);


INSERT INTO users (username, password_digest)
VALUES 
( 'Rey', 'tu9ibtoi4tbh2hhuet' ),
( 'Mark', 'h4hoeuba3r3tbaeu');



INSERT INTO habits (name)
VALUES
('Drink Water'),
('Exercise'),
('Sleep'),
('SHINZOU WO SASAGEYO!');



INSERT INTO user_habits (user_id, habit_id, measurement, frequency, created)
VALUES
(1, 1, '2 Litres', 4, CURRENT_TIMESTAMP - INTERVAL '3 day'),
(1, 2, '1 Hour', CURRENT_TIMESTAMP - INTERVAL '2 day')




INSERT INTO habit_counter (user_habit_id, finished_at, finished)
VALUES
-- completed habit 1 3 times yesterday
(1, CURRENT_TIMESTAMP - INTERVAL '1 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '1 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '1 day', TRUE)

-- completed habit 1 3 times day before
(1, CURRENT_TIMESTAMP - INTERVAL '2 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '2 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '2 day', FALSE),

