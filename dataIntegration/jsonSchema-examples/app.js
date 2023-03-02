let data = require("./data.json");
let mySchema = require("./schemaVal.json");
const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}


const validate = ajv.compile(mySchema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
if (valid) console.log("valid");




