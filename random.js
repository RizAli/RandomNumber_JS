var userInput = parseInt(prompt("Please type a number"));

var randomNumber = Math.floor((Math.random() * userInput)+1);
// document.write(randomNumber);
var message = "<p>" + randomNumber + ' is a random number between 1 and ' + userInput + "</p>"
document.write(message);
