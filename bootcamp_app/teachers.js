const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


pool.query (`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort, count(assistance_requests) as total_assistance
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || JUL02}'
GROUP BY teachers.name, cohorts.name
ORDER BY teachers.name;
`)
.then(res => {
  console.log(res.rows)
})
.catch(err => console.error('query error', err.stack));