const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const { User } = require("../model/user");

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.username = decoded.username;
    next();
  });
};

const isCreator = async (req, res, next) => {
  const { username } = req;
  try {
    const user = await User.findOne({ username });
    const { roles } = user;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "CREATOR") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Creator Role!",
    });
    return;
  } catch (e) {
    console.error(e);
  }
};

const isViewAll = (req, res, next) => {
  const { username } = req;
  try {
    const user = await User.findOne({ username });
    const { roles } = user;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "VIEW ALL") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Creator Role!",
    });
    return;
  } catch (e) {
    console.error(e);
  }
};

const isViewer = (req, res, next) => {
  const { username } = req;
  try {
    const user = await User.findOne({ username });
    const { roles } = user;
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "VIEWER") {
        next();
        return;
      }
    }
    res.status(403).send({
      message: "Require Creator Role!",
    });
    return;
  } catch (e) {
    console.error(e);
  }
};

const authJwt = {
  verifyToken,
  isCreator,
  isViewAll,
  isViewer,
};
module.exports = authJwt;
