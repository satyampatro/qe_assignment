const express = require("express");
const router = express.Router();
const { authJwt } = require("../middleware/authJwt");

const authController = require("../controller/auth.controller.js");
const bookController = require("../controller/book.controller.js");

router.use("/auth", authController);
router.use(authJwt);
router.use("/books", bookController);

module.exports = router;
