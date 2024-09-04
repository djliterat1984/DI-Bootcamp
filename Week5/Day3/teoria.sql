-- topic 1
-- SELECT AVG(number_oscars) FROM actors

-- SELECT DISTINCT * FROM actors ORDER BY number_oscars DESC;

-- SELECT * FROM actors WHERE birthday > '1970/01/01'

-- SELECT * FROM actors WHERE first_name IN ('David', 'Morgan', 'Will')

-- CREATE TABLE movies(
-- movie_id SERIAL,
-- movie_title VARCHAR (50) NOT NULL,
-- movie_story TEXT,
-- actor_playing_id INTEGER,
-- PRIMARY KEY (movie_id),
-- FOREIGN KEY (actor_playing_id) REFERENCES actors (actor_id)
-- );

-- INSERT INTO movies (movie_title, movie_story, actor_playing_id) VALUES
--     ( 'Good Will Hunting', 
--     'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
--     (SELECT actor_id from actors WHERE first_name='Maty' AND last_name='Damon')),
--     ( 'Oceans Eleven', 
--     'American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
--     (SELECT actor_id from actors WHERE first_name='Maty' AND last_name='Damon'));

-- SELECT * FROM movies

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

-- CREATE TABLE producers(
-- producer_id SERIAL,
-- full_name VARCHAR (50) NOT NULL,
-- movie_id INTEGER,
-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (movie_id) REFERENCES movies (movie_id)
-- );

-- INSERT INTO producers (full_name, movie_id) VALUES 
-- ('Chicken Sandwich', (SELECT movie_id from movies WHERE movie_title= 'Oceans Eleven' AND actor_playing_id is not null))

-- SELECT 
-- movies.movie_title,
-- actors.first_name,
-- actors.last_name,
-- producers.full_name as Producers
-- FROM movies
-- INNER JOIN
-- actors ON movies.actor_playing_id = actors.actor_id
-- INNER JOIN 
-- producers ON movies.movie_id = producers.movie_id

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- FULL OUTER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id;

-- CREATE TABLE countries(
-- country_id SERIAL,
-- country_name VARCHAR (50) NOT NULL,
-- PRIMARY KEY (country_id)
-- );

-- INSERT INTO countries(country_name)
-- VALUES ('Israel'),('USA'),('Japan')

SELECT 
countries.country_name,
actors.first_name,
actors.last_name
FROM
countries
FULL JOIN
actors ON countries.country_id = actors.actor_id

