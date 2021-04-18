const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const users = new Schema(
  {
    name:{type:String},
    email: { type: String, unique: true, required: true },
    password: { type: String },
    sdt:{type:String},
    address: {type:String},
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("users", users, "users");
