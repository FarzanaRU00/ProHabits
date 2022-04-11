DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY
    username VARCHAR (255) UNIQUE NOT NULL,
    password_digest VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    name VARCHAR (255),
    -- measurement VARCHAR (255),
    frequency VARCHAR (255),
    currStreak INT DEFAULT 0,
    streakEnd VARCHAR (255) NOT NULL,
    user_id INT NOT NULL,
    currentTime timestamp DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL;
);

CREATE TABLE habit_counter (
    id serial PRIMARY KEY,
    habit_id INT REFERENCES habits(id) ON DELETE CASCADE ON UPDATE CASCADE,
    time_done timestamp DEFAULT CURRENT_TIMESTAMP,
    completed BOOLEAN
)

INSERT INTO users (username, password_digest)
VALUES 
( 'Rey', 'tu9ibtoi4tbh2hhuet' ),
( 'Mark', 'h4hoeuba3r3tbaeu');

INSERT INTO habits (user_id, habit_id, name, frequency)
VALUES
(1, 1, Drink Water, '3 day'),
(1, 2, Workout, '1 day');


INSERT INTO habit_counter (habit_id, time_done, completed)
VALUES
(1, CURRENT_TIMESTAMP - INTERVAL '1 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '1 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '1 day', TRUE)

(1, CURRENT_TIMESTAMP - INTERVAL '2 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '2 day', FALSE),
(1, CURRENT_TIMESTAMP - INTERVAL '2 day', FALSE),

