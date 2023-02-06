var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index_opg2', { title: 'Front page' });
});

module.exports = router;
