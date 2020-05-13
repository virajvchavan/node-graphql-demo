const express = require('express');
const mongoose = require("mongoose");
const User = require('./models/User.rb');
const app = express();

const url = "mongodb+srv://viraj:virajvchavan@cluster0-3jswv.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

let user1 = new User({name: 'Viraj', age: 27});
user1.save();

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('server started! On 3000');
})
