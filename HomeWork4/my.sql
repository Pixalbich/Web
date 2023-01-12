-- create
CREATE TABLE classmates (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO classmates VALUES (1, 'Пирог', '6932', 'Пенза');
INSERT INTO classmates VALUES (2, 'Миша', '30', 'Москва');
INSERT INTO classmates VALUES (3, 'Вася', '29', 'Москва');
INSERT INTO classmates VALUES (4, 'Егор', '28', 'Москва');
INSERT INTO classmates VALUES (5, 'Надежда', '17', 'Череповец');
INSERT INTO classmates VALUES (6, 'Катя', '18', 'Владимир');
INSERT INTO classmates VALUES (7, 'Яна', '19', 'Москва');

-- fetch 
SELECT * FROM classmates WHERE age >= 18 AND  age < 30 AND  address = 'Москва';