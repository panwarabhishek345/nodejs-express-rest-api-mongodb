const express = require("express");
const router = express.Router();

const Dog = require("../models/Dog");

router.get("/dogs", async (req, res) => {
  const dogs = await Dog.find();
  res.send(dogs);
});

router.post("/dog", async (req, res) => {
  const dog = new Dog({
    name: req.body.name,
    age: req.body.age,
    image: req.body.image,
  });

  const savedDog = await dog.save();
  res.send(savedDog);
});

router.delete("/dog", async (req, res) => {
  const id = req.header("dog_id");
  const result = await Dog.deleteOne({ _id: id });
  res.send(`The dog with id ${id} has been deleted`);
});

router.patch("/dog", async (req, res) => {
  const id = req.header("dog_id");

  const dog = await Dog.findById(id);

  Object.assign(dog, req.body);
  const savedDog = await dog.save();
  res.send(savedDog);
});

module.exports = router;
