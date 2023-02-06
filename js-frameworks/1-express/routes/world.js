var express = require('express');
var router = express.Router();
let  worldData = require('../modules/world.js');


/* GET home page. */
router.get('/', (req, res, next) =>{
    res.render('world', { data: worldData });
});


module.exports = router;


