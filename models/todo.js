const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  title: String
});

module.exports = mongoose.model("todos", todoSchema);
