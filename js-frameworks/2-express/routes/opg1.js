var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('opg1', { title: 'Solution opg1' });
});

module.exports = router;