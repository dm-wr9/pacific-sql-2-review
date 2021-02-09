UPDATE movies
SET rating = $1
WHERE movies_id = $2;

SELECT *
FROM movies;