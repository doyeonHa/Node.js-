const mysql = require('mysql2');
require('dotenv').config({
    path: path.join(__dirname, '.env')
});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
    port: 3310
});

pool.query("SELECT * FROM player", (err, results) => {
    console.log(results);
});