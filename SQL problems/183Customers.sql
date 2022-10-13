-- subquery to get a table of customers who HAVE ordered
-- select names NOT in the list of customers who have ordered

--Write your MySQL query statement below
SELECT name as Customers FROM Customers
WHERE id NOT IN
(SELECT customerId FROM Orders)