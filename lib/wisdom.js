module.exports = function() {
    var quotes = [
        "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
        "No matter where you go, there you are.",
        "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission. - Rear Admiral Grace Hopper, USN, Ph.D"
    ];
    //setup the random func
    var randomIndex = Math.floor(Math.random() * quotes.length);
    // return something from randomfunc
    var returnVal = quotes[randomIndex];
    //return something
    return returnVal;
};
