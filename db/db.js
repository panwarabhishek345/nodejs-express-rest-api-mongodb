const mongoose = require("mongoose");

mongoose.connect(
  "Enter the db url here",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) {
      console.log("Some error occurred while connecting to the db");
    } else {
      console.log("Db connected Successfully");
    }
  }
);
