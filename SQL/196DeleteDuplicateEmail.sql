-- can't update from the same table
-- this doesn't work
-- DELETE FROM Person
-- WHERE id NOT IN
-- (SELECT MIN(id) id FROM PERSON
-- GROUP BY email) as t2


-- but this works if we wrap it in another select, is this like making a copy of that result?
DELETE FROM Person
WHERE id NOT IN
(SELECT id FROM
(SELECT MIN(id) id FROM PERSON
GROUP BY email) as t2)