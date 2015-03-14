var startingNumber = parseInt(prompt("Please type in the starting number"))
var endingNumber = parseInt(prompt("Please type in the ending number"));

var randomNumber = Math.floor((Math.random() * (endingNumber  + 1))+ startingNumber);
var message = "<p>" + randomNumber + ' is a random number between ' +  startingNumber +  ' and ' + endingNumber + "</p>"
document.write(message);
