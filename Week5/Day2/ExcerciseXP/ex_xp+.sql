CREATE TABLE students(
 	id SERIAL PRIMARY KEY,
	first_name VARCHAR (50) NOT NULL,
 	last_name VARCHAR (50) NOT NULL,
	birth_date DATE
)

INSERT INTO students(first_name,last_name, birth_date)
VALUES 
	('Marc', 'Benichou', '11/02/1998'),
	('Yohan', 'Cohen', '03/03/2010'),
	('Lea', 'Benichou', '07/27/1987'),
	('Amelia', 'Dux', '04/07/1996'),
	('David', 'Grez', '06/14/2003'),
	('Omer', 'Simpson', '10/03/1980');

INSERT INTO students(first_name,last_name, birth_date)
VALUES 
 	('Diego', 'Literat', '06/21/1984');

SELECT * FROM students

SELECT first_name, last_name FROM students

SELECT first_name, last_name FROM students WHERE id=2

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'

SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'

SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a%'

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'a%'

SELECT first_name, last_name FROM students WHERE first_name ILIKE '%a'

SELECT first_name, last_name FROM students WHERE SUBSTRING(first_name, 2, 40) ILIKE '%a%' 

SELECT first_name, last_name FROM students WHERE id = 1 AND id=3

SELECT * FROM students WHERE birth_date >= '1/01/2000'
