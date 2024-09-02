-- (SELECT first_name, last_name, birth_date FROM students LIMIT 4) ORDER BY last_name ASC;

-- (SELECT first_name, last_name, birth_date FROM students 
-- ORDER BY birth_date DESC) 
-- FETCH FIRST 1 ROWS ONLY;

(SELECT * FROM students OFFSET 2) LIMIT 3
