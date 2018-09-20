let ClozeCard = require("./ClozeCard.js");
let BasicCard = require("./BasicCard.js");
let inquirer = require("inquirer");
let round = 0;

let questions = [
    new ClozeCard("The Matrix was filmed in 1999 and was believed to be the direct influence to cause the shooting in Columbine.", "The Matrix"),
    new BasicCard("Yesterday, all my troubles seemed so far away.", "Poop"),
    new ClozeCard("The Matrix is great.", "The Matrix"),

];
var x;
var count = 0;

function runGame() {
    if (questions[count].value) {
        x = {
            type: "input",
            message: questions[count].partial(),
            name: "main"
        }
    }
    else {
        x = {
            type: "input",
            message: questions[count].front,
            name: "main"
        }
    }
    inquirer
        .prompt([
            x
        ])
        .then(function (data) {
            if (data.main === questions[count].cloze) {
                console.log("yap")
                round++;
            }
            else {
                console.log("nope")
            }
            count++;
            firstPart = false;
            if (count < questions.length) {
                runGame();
            }
            else{
                console.log("thanks for playing!")
            }
        })
}
runGame();