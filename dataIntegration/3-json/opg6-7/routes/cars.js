var express = require('express');
var router = express.Router();
var jsonCar = require('../modules/cars.json');
var fs = require('fs');
var xml2js = require('xml2js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('cars');
  
});

router.get('/getJSON', function(req, res, next) {
    res.send(jsonCar);
});

router.get('/getXML', function(req, res, next) {
    var parser = new xml2js.Parser({explicitArray: false, attrkey: "attr_"});
    let respData;
    fs.readFile(__dirname + '/../public/cars.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            respData = JSON.stringify(result);
            res.send(respData);
        });
    });
    

    
});


module.exports = router;