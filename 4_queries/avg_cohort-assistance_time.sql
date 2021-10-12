SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_request_duration
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.cohort_id
JOIN cohorts ON cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY average_assistance_request_duration;