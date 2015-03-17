module.exports = function() {
    var Jokes = [{
        setup: "What's the difference between a guitar and a fish?",
        punchline: "You can't tuna fish."
    }, {
        setup: "What do you get when you cross a cow and a duck?",
        punchline: "Milk and quackers."
    }, {
        setup: "How many tickles does it take to make an octopus laugh?",
        punchline: "Ten Tickles"
    }];
   //build random number generator
    var randomIndex = Math.floor(Math.random() * Jokes.length);
    //get the random item from array
    var returnVal = Jokes[randomIndex]
    //return something to server
    return returnVal;
};
