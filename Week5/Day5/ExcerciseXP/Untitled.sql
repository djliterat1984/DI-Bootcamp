-- EXERCISE 1

-- 1.Get a list of all the languages, from the language table.
-- SELECT * FROM language

-- 2.Get a list of all films joined with their languages – select the following details : film title, 
--   description, and language name.
-- SELECT film.title, film.description, language.name FROM film
-- INNER JOIN language
-- on film.language_id = language.language_id

-- 3.Get all languages, even if there are no films in those languages – select the following details : 
--   film title, description, and language name.
-- SELECT film.title, film.description, language.name from film
-- RIGHT JOIN language
-- ON film.language_id = language.language_id

-- 4.Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- CREATE TABLE new_film(
--  id SERIAL PRIMARY KEY,
--  name VARCHAR (50) NOT NULL
-- )

-- INSERT INTO new_film(name)
-- VALUES ('Batman'), ('Superman'),('Spiderman');

-- 5.Create a new table called customer_review, which will contain film reviews that customers will make.
--   Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--   It should have the following columns:
-- 		1.review_id – a primary key, non null, auto-increment.
-- 		2.film_id – references the new_film table. The film that is being reviewed.
-- 		3.language_id – references the language table. What language the review is in.
-- 		4.title – the title of the review.
-- 		5.score – the rating of the review (1-10).
-- 		6.review_text – the text of the review. No limit on the length.
-- 		7.last_update – when the review was last updated.

-- CREATE TABLE customer_review(
--  review_id SERIAL PRIMARY KEY,
--  film_id integer NOT NULL,
--  language_id integer NOT NULL,
--  title varchar(50) NOT null,
--  score smallint NOT NULL,
--  review_text text ,
--  last_update timestamp,
--  FOREIGN KEY (film_id) REFERENCES new_film (id) ON DELETE CASCADE,
--  FOREIGN KEY (language_id) REFERENCES language (language_id)
-- 	CHECK (score > 0 AND score <= 10)
-- )

-- 6.Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review(title,score,review_text,last_update, film_id,language_id)
-- VALUES 
-- 	('Excellent', 10, 'The best movie of the history','2024/09/07 23:29', 
-- 	(SELECT id FROM new_film WHERE name = 'Batman'), 
-- 	(SELECT language_id FROM language WHERE name = 'French')), 
-- 	('Good movie', 6, 'It is a good movie, but it could have been better.' ,'2024/09/07 23:36', 
-- 	(SELECT id FROM new_film WHERE name = 'Spiderman'), 
-- 	(SELECT language_id FROM language WHERE name = 'German'))

-- 7.Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film
-- WHERE name = 'Spiderman';


-- EXERCISE 2

-- 1.Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- UPDATE film
-- SET language_id = (SELECT language_id FROM language WHERE name = 'Italian')
-- WHERE title = 'Chamber Italian'

-- 2.Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT 
--   into the customer table?
-- address_id. We can't add a address directly in the new row of customer, we need to search the address id from address' table, and the result 
-- of this query will be the customer's address.
-- 3.We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE IF EXISTS customer_review; It didn't need extra checking because it is not the father from another row table.
-- 4.Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

SELECT * FROM rental WHERE (return_date IS NULL) 

-- 5.Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)



-- 6.Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- 		1.The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT film.film_id, film.title, film.description, actor.actor_id FROM film_actor
inner join actor
on actor.first_name = 'Penelope' and actor.last_name = 'Monroe'
inner join film
on film.description ILIKE '%sumo wrestler%' 
-- 		2.The 2nd film : A short documentary (less than 1 hour long), rated “R”.
-- 		3.The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
-- 		4.The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.