const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  profileImg: String,

});

const User = mongoose.model("User", userSchema);

module.exports = User;