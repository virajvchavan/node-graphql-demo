const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    age: Number,
});

module.exports = mongoose.model('User', userSchema);
