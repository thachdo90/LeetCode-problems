-- Write your MySQL query statement below
SELECT email FROM
(SELECT email, COUNT(email) as count
FROM Person
GROUP BY email)
AS countTable
WHERE count > 1