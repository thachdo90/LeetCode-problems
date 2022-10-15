# Write your MySQL query statement below
SELECT t2.player_id, t2.device_id FROM Activity t2
INNER JOIN
(
SELECT player_id, MIN(event_date) event_date FROM Activity
GROUP BY player_id
) AS t3
WHERE t2.player_id=t3.player_id AND t2.event_date=t3.event_date