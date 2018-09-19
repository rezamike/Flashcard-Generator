let ClozeCard = require("./ClozeCard.js");
let BasicCard = require("./BasicCard.js");
let inquirer = require("inquirer");
let round = 0;

let questions = new ClozeCard("The Matrix was filmed in 1999 and was believed to be the direct influence to cause the shooting in Columbine.", "The Matrix");

let questions1 = new BasicCard("What film sucks?", "your mom")

console.log(questions.partial())
console.log(questions1)

