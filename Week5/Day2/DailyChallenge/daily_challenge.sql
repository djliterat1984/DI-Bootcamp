-- INSERT INTO actors(first_name,last_name)
-- VALUES 
-- 	('Marc', 'Benichou');


-- 1. Count how many actors are in the table.
-- SELECT COUNT(*) FROM actors

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?
-- I think that will be a problem, because every column is required (not null).

-- ERROR:  null value in column "birthday" of relation "actors" violates not-null constraint
-- DETAIL:  Failing row contains (8, Marc, Benichou, null, null).
-- SQL state: 23502

-- INSERT INTO actors(first_name,last_name,birthday)
-- VALUES 
--  ('Marc', 'Benichou');
	
-- ERROR:  INSERT has more target columns than expressions
-- LINE 1: INSERT INTO actors(first_name,last_name,birthday)
--                                                 ^
-- SQL state: 42601
-- Character: 41