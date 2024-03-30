const mongoose = require("mongoose");
const { mongoURI } = require("./keys");

const connect = async () => {
  await mongoose.connect(mongoURI);
};

module.exports = {
  connect,
};
