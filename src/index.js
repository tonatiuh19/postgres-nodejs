const express = require("express");

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes:
app.use(require("../routes/index"));

app.listen(3200);
console.log("Server running on port: 3200");
