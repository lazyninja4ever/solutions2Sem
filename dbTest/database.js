const mysql = require('mysql');

const connection = mysql.createConnection({
    socketPath : process.env.DATABASE_SOCKET,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME
  });

connection.connect((err => {
    if(err) throw err;
    console.log('MySQL Connected');
}));
 

module.exports = connection;