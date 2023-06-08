const mysql = require('mysql2/promise');
const path = require('path');

require('dotenv').config({
  path: path.join(__dirname, '.env')
});

// mysql 시스템 정보(절대로 공개하면 안됨)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DB,
  port: 3310,
});

pool.query("SELECT * FROM player")
  .then(([results]) => {
    for(const r of results) {
      console.log(r);
    }
  })
  .catch(err => {
    console.error(err);
  });

// pool.query("SELECT * FROM player", (err, results) => {
//     for (const r of results)
//         console.log(results);
// });