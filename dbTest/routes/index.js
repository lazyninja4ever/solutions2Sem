var express = require('express');
var router = express.Router();
const mysql = require('mysql');


/*const connection = mysql.createConnection({
  socketPath : process.env.DATABASE_SOCKET,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DBNAME
});*/

var connection = require('../database');
var pool = require('../database_pool');


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('went to index');
  res.render('index', { title: 'Express' });
});

router.post('/form', function(req,res,next){
  connection.connect();
  let newQuery = `INSERT INTO Data(firstName, lastName, age) VALUES( "${req.body.fname}", "${req.body.lname}", ${req.body.age} )`
  connection.query(newQuery, (err, respon) => {
    if (err) throw err;
    console.log(respon);
  });
  connection.end()
  res.render('index');
});


router.post('/form2', function(req,res,next){
  let newQuery = `INSERT INTO Data(firstName, lastName, age) VALUES( "${req.body.fname}", "${req.body.lname}", ${req.body.age} )`
  connection.query(newQuery, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('user added');
  });

});

router.post('/form3', function(req,res,next){
  let newQuery = `INSERT INTO Data(firstName, lastName, age) VALUES( "${req.body.fname}", "${req.body.lname}", ${req.body.age} )`
  pool.query(newQuery, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('user added');
  });

});


module.exports = router;
