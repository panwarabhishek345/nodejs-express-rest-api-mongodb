const mongoose = require("mongoose");

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
  },
  age: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const Dog = mongoose.model("Dog", DogSchema);

module.exports = Dog;
