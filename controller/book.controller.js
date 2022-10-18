const express = require("express");
const router = express.Router();
const book = require("../modules/book");
const { isCreator, isViewAll } = require("../middleware/authJwt");

router.post("/", isCreator, async (req, res) => {
  try {
    const result = await book.createBook(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: err.message });
  }
});

router.get("/", isViewAll, async (req, res) => {
  try {
    const result = await book.fetchBook(req.query);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: err.message });
  }
});

router.put("/", isCreator, async (req, res) => {
  try {
    const result = await book.updateBook(req.query);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: err.message });
  }
});

router.delete("/", isCreator, async (req, res) => {
  try {
    const result = await book.deleteBook(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
