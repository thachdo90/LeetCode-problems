-- Write your MySQL query statement below
-- Learned about server functions like DateDiff
-- Q: documentation says there should be 3 parements the first one being how we're measuring the diff in dates (years, months, day, etc) but leetcode accepted only two and somehow knows it's the day?

SELECT current.id from Weather current, Weather previous
WHERE DATEDIFF(current.recordDate, previous.recordDate)=1
AND current.temperature > previous.temperature