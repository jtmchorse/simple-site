var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinfiy.js");

var randomify = require("./lib/random.js");

var jokeFunction = require("./lib/joke.js");
var bitOWisdom = require("./lib/wisdom.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

app.get("/quote", function(req, res) {
  var theReturnedBitOWisdom = bitOWisdom();
  res.send(theReturnedBitOWisdom);
});

app.get("/joke", function(req, res) {
   var theReturnedJoke = jokeFunction();
  res.json(theReturnedJoke);
});

app.post("/piglatin", function(req, res) {
 var firstname = piglatinify(req.body.firstname);
 var lastname = piglatinify(req.body.lastname);
 var piglatined = { firstname: firstname, lastname: lastname };
 res.json(piglatined);
});

app.post("/random", function(req, res) {
    console.log(req);
  // console.log(req.body);
  var returnedVar = randomify();

  res.json(returnedVar);
});

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port, function() {
  console.log("server starting. goto http://localhost:" + port);
});
