const mongoose = require("mongoose");
const { MONGODB_URI, MONGODB_USER, MONGODB_PASS, MONGODB_NAME } = process.env;

function connectDb() {
  return mongoose.connect(MONGODB_URI, {
    user: MONGODB_USER,
    pass: MONGODB_PASS,
    dbName: MONGODB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
connectDb();
console.log("mongodb connection established");
