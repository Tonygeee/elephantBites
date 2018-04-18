
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// =============================================================

var reservations = [];

// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "makeRes.html"));
});

app.get("/waitlist", function(req, res) {
  res.sendFile(path.join(__dirname, "waitlist.html"));
});

// =============================================================
app.post("/api/reservation", function(req, res) {
  //save the new reservation as a variable
  var newRes = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter

  res.json(newRes);
});

//start server to begin listening
// =============================================================

app.listen(PORT, function() {
  console.log("App is listening at PORT" + PORT);
});