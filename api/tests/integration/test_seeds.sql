TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (username, password_digest)
VALUES
('Test User 1', 'farzana123'),
('Test User 2', 'sarushan123');

INSERT INTO habits (name)
VALUES
(
    'Test Habit 1'
),
(
    'Test Habit 2'
),
(
    'Test Habit 3'
);

INSERT INTO habits (user_id, name, measurement, frequency)
VALUES
(1,'Test Habit 1', 'ml', 5),
(1,'Test Habit 2', '1 Hour', 3),
(2,'Test Habit 3', '8 Hours', 7),
(2,'Test Habit 4', '5 Sec', 7);

INSERT INTO habit_counter (user_habit_id, finished)
(
    1,
    TRUE
),
(
    2,
    FALSE
);