const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// app.use(bodyParser.json());

//--------------------------------------> routes
app.get("/", (req, res) => {
  res.status(200).json({
    name: "MyProject",
  });
});

//--------------------------------------> misc
//404
app.use((req, res, next) => {
  return res.status(404).send("404 - Page Not Found.");
});

//500
app.use((err, req, res) => {
  res.status = err.status || 500;
  return res.send(res.status + ". An unknown error has occured.");
});

module.exports = app;
