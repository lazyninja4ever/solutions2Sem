var express = require('express');
var router = express.Router();
const controller = require('../controllers/user_controller');



router.get('/',async function(req, res, next) {
  let persons = await controller.getPerson(); 
  res.send(persons);
//  res.render('index');
});


router.post('/form4', async function(req,res,next){
  controller.postPerson(req, res, next);                                   // write department into db
  
  res.send('created User');
});

module.exports = router;
