const mongoose = require("mongoose");

// interface UserTypes{
//   userName:string;
//   email:string;
//   password:string;
//   date:Date;
// }

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true, min: 6, max: 255 },
  email: { type: String, required: true, min: 6, max: 255 },
  password: { type: String, required: true, min: 6, max: 1024 },
  date: { type: Date, default: new Date() },
});

module.exports = mongoose.model("User", UserSchema);

