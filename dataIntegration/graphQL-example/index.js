var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var usersData = [{id:"0", firstName: "Jane", lastName: "Doe", age: 24}, {id:"1", firstName: "John", lastName: "Jim", age: 30}];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    bacon: String,
    users: [User],
    user(id: ID!): User
  }

  type User {
    id: ID!,
    firstName: String,
    lastName: String,
    age: Int
  }

`);

function getUser(args){
    for(const user of usersData){
        if(user.id === args.id){
            return user;
        }
    }
}

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  bacon: () =>{
    return "frying";
  },
  user: getUser,
  users: ()=>{
   return usersData;
  },


};


var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');