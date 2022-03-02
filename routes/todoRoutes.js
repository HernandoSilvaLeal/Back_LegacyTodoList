const router = require("express").Router();
const Todo = require("../models/todo");

router.get("/", async (req, res) => {
  const resul = await Todo.find();
  try {
    res.send(resul);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;