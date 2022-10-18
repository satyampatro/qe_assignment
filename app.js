require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const PORT = 5000;

const app = express();

app.use(express.json());
app.use(morgan("combined"));

// db connection
require("./config/db");

app.use(routes);

app.listen(PORT, () => console.log(`server live at ${PORT}`));
