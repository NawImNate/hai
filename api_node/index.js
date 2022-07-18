const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");

dotenv.config();

// connect to mongodb via mongoose
mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    try {
      console.log("Connected to Hai DB.");
    } catch (error) {
      console.log(error.message);
    }
  }
);

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// Server connection
app.listen(8800, () => {
  console.log(`Server running on 8800`);
});