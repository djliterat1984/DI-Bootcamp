-- Instructions
-- You are going to practice tables relationships

-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- CREATE TABLE customer(
--  id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL
-- )

-- CREATE TABLE customer_profile(
--  id SERIAL PRIMARY KEY,
--  isLoggedIn BOOL DEFAULT false,
--  customer_id INT NOT NULL,
--  FOREIGN KEY (customer_id) REFERENCES customer (id)
-- )

-- Insert those customers

-- John, Doe
-- Jerome, Lalu
-- Lea, Rive

-- INSERT INTO customer (first_name, last_name)
-- VALUES
--     ('John', 'Doe'),
--     ('Jerome', 'Lalu'),
-- 	('Lea', 'Rive')

-- Insert those customer profiles, use subqueries

-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES
--     (true, (SELECT id FROM customer WHERE first_name = 'John')),
--     (DEFAULT, (SELECT id FROM customer WHERE first_name = 'Jerome'))

-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers

-- SELECT first_name FROM customer
-- INNER JOIN customer_profile
-- ON customer.id = customer_id
-- WHERE isloggedin = true

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

-- SELECT first_name, isloggedin FROM customer
-- LEFT JOIN customer_profile
-- ON customer.id = customer_id

-- The number of customers that are not LoggedIn

-- SELECT COUNT(isloggedin) FROM customer_profile WHERE isloggedin = false
-- SELECT COUNT(isloggedin) FROM customer_profile WHERE NOT isloggedin

-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- CREATE TABLE book(
--  book_id SERIAL PRIMARY KEY,
--  title VARCHAR (50) NOT NULL,
--  author VARCHAR (50) NOT NULL
-- )

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- INSERT INTO book (title, author)
-- VALUES
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee')

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

-- CREATE TABLE student(
--  student_id SERIAL PRIMARY KEY,
--  name VARCHAR (50) NOT NULL UNIQUE,
--  age INTEGER CHECK(age<=15)
-- )

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

-- INSERT INTO student (name, age)
-- VALUES
--     ('John', 12),
--     ('Lera', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14)
	
-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- CREATE TABLE library(
--   	book_fk_id INTEGER,
--   	student_id INTEGER,
-- 	PRIMARY KEY (book_fk_id, student_id),
-- 	borrowed_date TIMESTAMP,
--   	FOREIGN KEY (book_fk_id) REFERENCES book (book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--   	FOREIGN KEY (student_id) REFERENCES student (student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )


-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO library (book_fk_id, student_id, borrowed_date)
-- VALUES
--     ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 	 (SELECT student_id FROM student WHERE name = 'John'),
-- 	 '2022-02-15'),
--     ((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
-- 	 (SELECT student_id FROM student WHERE name = 'Bob'),
-- 	  '2021-03-03'),
-- 	  ((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 	 (SELECT student_id FROM student WHERE name = 'Lera'),
-- 	  '2021-05-23'),
-- 	  ((SELECT book_id FROM book WHERE title = 'Harry Potter'),
-- 	 (SELECT student_id FROM student WHERE name = 'Bob'),
-- 	   '2021/08/12')

-- Display the data
-- Select all the columns from the junction table

-- SELECT * FROM library

-- Select the name of the student and the title of the borrowed books

-- SELECT name, title FROM library
-- INNER JOIN student
-- ON student.student_id = library.student_id
-- INNER JOIN book
-- ON book_id = book_fk_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland

-- SELECT DISTINCT avg(age) FROM student
-- INNER JOIN library
-- ON student.student_id = library.student_id
-- WHERE book_fk_id = (SELECT book_id FROM book WHERE title = 'Alice In Wonderland' )

-- Delete a student from the Student table, what happened in the junction table ?

-- DELETE FROM student
-- WHERE name = 'John'

-- SELECT * FROM library
-- After delete the student, the library table also deletes the row with this student

