let opg3_data = require("./salesperson.json");
let opg3_Schema = require("./opg3.json");
let opg4_data = require("./opg4Data.json");
let opg4_Schema = require("./opg4Schema.json");
let opg4_dataEx = require("./opg4DataExtended.json");
let opg4_SchemaEx = require("./opg4SchemaExtended.json");

const Ajv = require("ajv");

const ajv = new Ajv();
const ajv2  = new Ajv();
const ajv3 = new Ajv();

//validate opg 3
const validate = ajv.compile(opg3_Schema)
const valid = validate(opg3_data)
if (!valid) console.log(validate.errors)
if (valid) console.log("valid");

//validate opg 4
const validate2 = ajv2.compile(opg4_Schema);
const valid2 = validate2(opg4_data);
if(!valid2) console.log(validate2.errors);
if(valid2) console.log('valid');

//validate extended version of opg 4
const opg4Ex = ajv3.compile(opg4_SchemaEx);
const valid4Ex = opg4Ex(opg4_dataEx);
if(!valid4Ex) console.log(opg4Ex.errors);
if(valid4Ex) console.log('valid');






