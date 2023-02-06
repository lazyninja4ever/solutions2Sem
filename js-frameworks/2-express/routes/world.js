var express = require('express');
var router = express.Router();
const worldController = require('../controllers/worldController');

/* GET home page. */
router.get('/', worldController.world_index);

router.get('/alfabetisk', worldController.world_alfabetisk);

module.exports = router;


