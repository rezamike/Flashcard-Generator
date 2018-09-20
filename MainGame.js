let ClozeCard = require("./ClozeCard.js");
let BasicCard = require("./BasicCard.js");
let inquirer = require("inquirer");
let score = 0;

let questions = [
    new ClozeCard("Die Hard originated from the failed script of Commando 2.", "Die Hard"),
    new ClozeCard("Samuel L. Jackson demanded that the studio keep Snakes on a Plane as the title because it was the only reason he accepted the role.", "Snakes on a Plane"),
    new ClozeCard("Rather than use CGI, Tim Burton had 40 squirrels trained to crack nuts for Charlie & The Chocolate Factory.", "Charlie & The Chocolate Factory"),
    new ClozeCard("Due to a zipper breaking, Olivia Newton-John had to be sewn into the trousers she wears in the last carnival scene of Grease.", "Grease"),
    new ClozeCard("The sounds made by the Brachiosaurs in Jurassic Park were a combination of whale and donkey sounds.", "Jurassic Park"),
    new ClozeCard("In National Treasure, the good guys in the movie use Google and the bad guys use Yahoo!", "National Treasure"),
    new ClozeCard("Django Unchained is the first time in 16 years that Leonardo DiCaprio didn’t get the top billing.", "Django Unchained"),
    new ClozeCard("For Dr. Strangelove, Peter Sellers was paid $1 million, 55 percent of the film’s budget. Stanley Kubrick quipped “I got three for the price of six.", "Dr. Strangelove"),
    new ClozeCard('Ryan Gosling was cast as Noah in The Notebook because the director wanted someone “not handsome.”', "The Notebook"),
    new ClozeCard("The total footage shot for 2001: A Space Odyssey was some 200 times the final length of the film.", "2001: A Space Odyssey"),
    new BasicCard("Charlie Sheen stayed awake for 48 hours to achieve a suitably wasted look for his cameo as a drugged-up felon in?", "Ferris Bueller’s Day Off"),
    new BasicCard("James Franco was originally set to play Joseph Gordon-Levitt’s role of Arthur in?", "Inception"),
    new BasicCard("What Martin Scorsese film, was the director’s first film in twelve years not to feature Leonardo DiCaprio?", "Hugo"),
    new BasicCard("", ""),
    new BasicCard("", ""),
    new BasicCard("", ""),
    new BasicCard("", ""),
    new BasicCard("", ""),
    new BasicCard("", ""),
    new BasicCard("", "")
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
                console.log("Nailed it!")
                score++;
            }
            else {
                console.log("Maybe next time...")
            }
            if (data.main === "") {
                console.log("You didn't type anything")
            }
            count++;
            if (count < 10) {
                runGame();
            }
            else {
                console.log("-------------------------------")
                console.log("Look at you... " + score + " out of 10");
                console.log("Thanks for playing!");
            }
        })
}
runGame();