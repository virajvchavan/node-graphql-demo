const express = require('express');
const mongoose = require("mongoose");
const createType = require("mongoose-schema-to-graphql");
const ExpressGraphQL = require("express-graphql");
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} = require("graphql");
const userSchema = require('./models/User.js');

const app = express();

const url = "mongodb+srv://viraj:virajvchavan@cluster0-nskfg.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const graphQLConfig = {
    name: "users", //graphQL type's name
    description: "Users schema", //graphQL type's description
    class: "GraphQLObjectType", //"definitions" class name
    schema: userSchema, //your Mongoose schema "let couponSchema = mongoose.Schema({...})"
    exclude: ["_id"], //fields which you want to exclude from mongoose schema
};
let userType = createType(graphQLConfig);

let User = mongoose.model("User", userSchema);

const graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            users: {
                type: GraphQLList(userType),
                resolve: (root, args, context, info) => {
                    return User.find().exec();
                },
            },
            user: {
                type: userType,
                args: {
                    FirstName: { type: GraphQLNonNull(GraphQLString) },
                },
                resolve: (root, args, context, info) => {
                    return User.findOne({FirstName: args.FirstName}).exec();
                },
            },
        },
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: {
            createUser: {
                type: userType,
                args: {
                    FirstName: { type: GraphQLNonNull(GraphQLString) },
                },
                resolve: (root, args, context, info) => {
                    var user = new User(args);
                    return user.save();
                },
            },
        },
    }),
});

app.use("/graphql", ExpressGraphQL({
    schema: graphQLSchema,
    graphiql: true
}));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('server started! On 3000');
})
