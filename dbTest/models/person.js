const mongoose = require('mongoose');

const schema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: Number
    
});

const Person = mongoose.model("Person", schema);
module.exports = Person;


