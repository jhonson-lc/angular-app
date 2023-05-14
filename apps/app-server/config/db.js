const mongoose = require("mongoose");
require("dotenv").config({path: ".env"});

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = {
  connect,
};
