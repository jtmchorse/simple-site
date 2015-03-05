var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

 app.get("/", function (req, res) {
  // res.send("hello world!");
  //res.sendFile("hello.html");
  res.sendFile('index.html');
 });


var quotes = [
"I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison.",
"No matter where you go, there you are. ",
"If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
];

 app.get("/jtmchorse", function (req, res) {
  var randomIndex = Math.floor(Math.random()*quotes.length);
res.send(quotes[randomIndex]);
 });


var jokes = [
{ setup: "What's the difference between a guitar and a fish?",
punchline: "You can't tuna fish." },
{ setup: "What do you get when you cross a cow and a duck?",
punchline: "Milk and quackers." },
{ setup: "How many tickles does it take to make an octupus laugh?",
punchline: "Ten Tickles" } ];
app.get("/joke", function(req, res) {
var randomIndex = Math.floor(Math.random() * jokes.length); res.json(jokes[randomIndex]);
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
