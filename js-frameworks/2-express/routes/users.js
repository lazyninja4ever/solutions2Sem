var express = require('express');
var router = express.Router();
const person = {fname: 'John', surname: 'Doe', age: 35, email: 'mail@host.abc'}

/* GET home page. */
router.get('/:firstname-:lastname', function(req, res, next) {
  console.log(req.params);
  let siteUser = {fname: req.params.firstname, surname: req.params.lastname}
  res.render('users', { user: siteUser });
});

router.get('/', function(req, res, next) {
  res.render('users', { user: person });
});

router.post('/form', function(req,res,next){
  const first_name = req.query.fname;
  console.log(req.query.fname);
  res.render('users', { user: person });
});
module.exports = router;
