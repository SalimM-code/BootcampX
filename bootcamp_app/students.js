
const queryString = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`;

const cohortName = process.argv[2];
const limit = process.argv[3] || 5;
// store all potential malicious values in an array
const values = [`%${cohortName}%`, limit]



const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool  
  .query(queryString, values)
  .then(res => {
  console.log(res.rows)
  })
  .catch(err => console.error('query error', err.stack));