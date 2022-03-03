const express = require("express");
const mongoose = require("mongoose");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

mongoose.connect("mongodb+srv://Valentina:1234@bootcamp.npjeo.mongodb.net/todolist?retryWrites=true&w=majority/authSource=admin")
    .then(() => console.log("Connected successfully"))
    .catch((err) => console.error(err));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});