const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  author: { type: String },
  title: { type: String },
  description: { type: String },
  category: { type: String },
  language: { type: String },
  publishDate: { type: String },
});

const Book = mongoose.model("Book", UserSchema);

module.exports = { Book, BookSchema };
