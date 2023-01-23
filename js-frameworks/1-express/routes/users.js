var express = require('express');
var router = express.Router();
const person = {fname: 'John', surname: 'Doe', age: 35, email: 'mail@host.abc'}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users', { user: person });
});

module.exports = router;
