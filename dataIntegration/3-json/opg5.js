var fs = require('fs'),
xml2js = require('xml2js');
 
var parser = new xml2js.Parser({explicitArray: false});
fs.readFile('studentsXSD.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log(result.students.student[0].firstName);
    });
});