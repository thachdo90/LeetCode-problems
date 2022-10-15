--Write your MySQL query statement below
--thought about having subqueries but found it easy to start with a simple query first and then gradually adding on to that query

SELECT player_id, MIN(event_date) first_login FROM Activity
GROUP BY player_id