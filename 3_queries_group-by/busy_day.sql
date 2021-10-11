SELECT day, count(*) AS total_assignment
FROM assignments
GROUP BY day
HAVING count(*) >= 10
ORDER BY day;