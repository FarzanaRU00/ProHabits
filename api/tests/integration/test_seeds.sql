TRUNCATE users, habits RESTART IDENTITY;

INSERT INTO users (username, email, password_digest)
VALUES
('Test User 1', 'Farzana123@gmail.com' 'farzana123'),
('Test User 2', 'Sarushan123@gmail.com', 'sarushan123');

INSERT INTO habits (user_id, name, measurement, frequency)
VALUES
(1,'Test Habit 1', 'ml', 5),
(2,'Test Habit 3', '8 Hours', 7);

INSERT INTO habit_counter (user_habit_id, finished)
(
    1,
    TRUE
),
(
    2,
    FALSE
);