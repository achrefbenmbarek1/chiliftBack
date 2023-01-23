const mongoose = require("mongoose");

require("dotenv").config();

mongoose
  .connect(process.env.mongo_URL)
  .then(() => {
    console.log("connection to database established");
  })
  .catch((err) => {
    console.log(`error connecting to database` + err);
  });
