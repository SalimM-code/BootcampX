SELECT day, count(*) AS total_assignment
FROM assignments
GROUP BY day
ORDER BY day;