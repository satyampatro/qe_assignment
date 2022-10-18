const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
  roles: {
    type: [{ type: String, enum: ["CREATOR", "VIEW_ALL", "VIEWER"] }],
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User, UserSchema };
