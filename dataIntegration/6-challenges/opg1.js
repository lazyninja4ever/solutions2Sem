var mysql = require('mysql');
var fs = require('fs');
let parseString = require('xml2js').parseString;


var con = mysql.createConnection({
   socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
    host: '127.0.0.1:8889',
    user: 'root',
    password: 'root',
    database: 'integration'

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  fs.readFile('smiley_short.xml', function(err, data) {
	if(err) throw err;
    parseString(data, function (err, result){
    	console.log(result.document.row[0]);
    	for(let i = 0; i < 30; i++){
    		let entry = result.document.row[i];
    		let name = trimName(entry.navn1[0]);
    		let newAddress = setAddress(entry.adresse1[0], entry.By[0], entry.postnr[0]);

    		
    	}
    });

	});
});


//Kassér elementer der ikke er i postnummer 6000, 7100, 6100, 7000

function trimName(name){
	//Navn skal skæres af til sidste hele ord, medmindre det er et helt ord

	name = name.trim();
	let newName = name.replace(/^(.{30}[^\s]*).*/, "");
	return newName;
}

function setAddress(street, city, zipC){
	//Adresse, by og postnummer skal puttes i ét felt
	return street + ";" + city + ";" + zipC;

}



function getBusinessType(){
//Virksomhedstype skal gemmes i separat tabel
}

function setDate(){
//Seneste kontrol må kun være DMY og i DD-MM-YYYY format	
}

function duplicationCheck(){
	//Kun *1* med samme navn, flet i tilfælde af flere enheder
}














