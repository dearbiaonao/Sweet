const mongoose = require("./db");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    data :{type:Object}
})

module.exports = mongoose.model("Address", UserSchema,"address");
