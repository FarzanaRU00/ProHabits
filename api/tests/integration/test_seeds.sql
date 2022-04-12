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

INSERT INTO user_habits (user_id, habit_id, measurement, frequency)
VALUES
(
    1,
    1,
    'ml',
    4
),
(
    2,
    2,
    '8 hours',
    5
);

INSERT INTO habit_counter (user_habit_id, finished)
(
    1,
    TRUE
),
(
    2,
    FALSE
);