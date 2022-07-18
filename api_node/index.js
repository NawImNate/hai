const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");

app.listen(8800, () => {
  console.log(`Server running on 8800`);
});
