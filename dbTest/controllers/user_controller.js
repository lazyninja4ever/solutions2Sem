const Person = require('../models/person.js');

module.exports = {
    getPerson: async function () {
        const persons = await Person.find();
        return persons;
    },
    postPerson: async function (req) {

        const pers = new Person({
            firstName: req.body.fname,
            lastName: req.body.lname,
            age: req.body.age});
            console.log(pers);
            try{
              await pers.save();
              res.send("created user");
            } catch(error){
              console.log(error);
            }
    },

}