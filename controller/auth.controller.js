const express = require("express");
const router = express.Router();
const auth = require("../modules/auth");

router.get("/login", async (req, res) => {
  try {
    const result = await auth.login(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    await auth.signup(req.body);
    res.send({ message: "User registered successfully!" });
  } catch (e) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
