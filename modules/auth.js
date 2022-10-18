const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { User } = require("../model/user");

const signup = ({username, roles, password}) => {
  const user = new User({
    username,
    password: bcrypt.hashSync(password, 8),
    roles,
  });
  await user.save();
  res.send({ message: "User registered successfully!" });
};

const login = ({username,password}) => {
  const user = await User.findOne({
    username,
    password
  });
  if (!user) {
    return res.status(404).send({ message: "User Not found." });
  }

  var passwordIsValid = bcrypt.compareSync(password, user.password);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid Password!",
    });
  }

  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400,
  });

  const { roles } = user;
  return {
    username,
    roles,
    accessToken: token,
  }
};

module.exports = {
  login,
  signup,
};
