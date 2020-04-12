var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type: String,
        required: false
    },

    token : {
        type: String,
        required: false
    },

    displayname : {
        type: String,
        required: false
    },

    email : {
        type: String,
        required: false
    }
});

User = mongoose.model("user", userSchema);
module.exports = User ;

