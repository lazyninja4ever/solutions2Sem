const mysql = require('mysql');

const pool = mysql.createPool({
    socketPath : process.env.DATABASE_SOCKET,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME,
    connectionLimit : 15
  });

module.exports = pool;


