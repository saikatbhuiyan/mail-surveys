const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    uniqueCaseInsensitive: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: false,
    minLength: [3, "Password cannot be less than 3 characters"],
  },
  name: {
    type: String,
    required: false,
    minLength: [3, "Name cannot be less than 3 characters"],
  },
  image: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
    required: false,
    uniqueCaseInsensitive: true,
    index: {
      unique: true,
    },
  },
  credits: { type: Number, default: 0 },
});

userSchema.plugin(uniqueValidator, { message: "is already taken." });

mongoose.model("users", userSchema);
