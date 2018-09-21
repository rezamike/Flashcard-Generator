let ClozeCard = require("./ClozeCard.js");
let BasicCard = require("./BasicCard.js");
let inquirer = require("inquirer");
var request = require("request");

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
    new BasicCard("Which porn star is an extra in Ghostbusters?", "Ron Jeremy"),
    new BasicCard("Fox passed on which film because they thought the script was 'one of the most unintelligible pieces of shit they had read in years?'", "The Watchmen"),
    new BasicCard("The cake in what movie is made of cardboard?", "Sixteen Candles"),
    new BasicCard("Walt Disney refused to allow Alfred Hitchcock to film at Disneyland in the early 1960s because he had made what 'disgusting movie?'", "Psycho"),
    new BasicCard("Bender from Futurama was named after John Bender from what movie?", "The Breakfast Club"),
    new BasicCard("In what movie, when Ron Pearlman is getting beat up on the beach, did he actually does shatter his kneecap, and scream of real pain?", "Drive"),
    new BasicCard("", "")
];
var x;
var count = 0;

// questions.sort(function () {
//         return Math.floor(Math.random() * questions.length)
//     });

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

            if (data.main.toLowerCase() === questions[count].cloze.toLowerCase()) {
                console.log("\nNailed it!\n\n-----------------------------------------------------------\n")
                score++;
            }
            else if (data.main === "") {
                console.log("\nYou didn't type anything, idiot...\n---------------------------------------------------------\n")
            }
            else {
                console.log("\nNope!\nThe correct answer was:\n\n" + questions[count].fullText + "\n\n---------------------------------------------------\n")
            }
            count++;
            if (count < 10) {
                runGame();
            }
            else {
                if (score > 5) {
                   console.log("\nNice! " + score + " out of 10\n"); 
                }
                else {
                    console.log(score + " out of 10\nWow. Well, could've been better...\n");
                   console.log("Thanks for playing!\n---------------------------------------------------"); 
                }
            }
        })
}

inquirer
    .prompt([
        {
            type: "list",
            message: "\nWelcome to Flash Cards: Movie Edition!\nLearn and study Film trivia to impress your friends at parties!\n",
            choices: ["Start Studying!", "Creator", "Quit"],
            name: "main"
        }
    ])
    .then(function (response) {

        switch (response.main) {
            case "Start Studying!":

                runGame();
                break;
            case "Creator":

                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@((%@%&******************************///////////////////(((");
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@((@@%&*******************************/////////////////((((");
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(#@@%&********************************///*//////////////((");
                console.log("@@@@@@@@@@@@@@@@@@@@@@@@&&&&@@@@@@@@@@@@@@@@@@@@&&&&%%%&@@@@@(%@@%%**********************************/*//////////////((");
                console.log("@@@@@@@&@&@@@@@@@@@@@@@@&%&&@@@@@@@@@@@@@@@@%%%%%&&@&&&&&&&&&(@@@%%,********************************/*/*/////////////(/");
                console.log("@@@@&&&&&&&&&&&&&&@@@@@@&%%&@@@@@@@@@@@@@&%&&&&&@@@&@@&&&&&@&%&&%**,**********************************///////////////");
                console.log("@@@&%####%%%%&&&&&&&&&&&&%%&&@@@@@@@@@@@&&&&&&&&&&&&@@@@@@&@@@&&&%#,,,********************************/*///////////////");
                console.log("&&&%#(((((%%%%%%%%%%%%&&%%%%&@@@@@@@@@@&@@&@&&&&&@@&&&&@@@@@@@@&&@@#,,,**********************************//////////////");
                console.log("%%%%%(((((#########%%%&&%%%%&@@@@@@@@@&&@@&&&&&%&&&&&&%&&@@&@@&&@@@@*,,***********************************/////////////");
                console.log("#%%%%%############%%%%&&%%%&@@@@@@@@&&@&&&&@&&&&&&&&@@@@@&@@&&&&&@@@/,,,,***********************************///////////");
                console.log("####%%%%####%%%%%%%%%&&&%###%%&&&&&&%@@&@@@@@@@@&&&@@@@@@@@&@@@@@@@@@*,,,,*********************************//*/////////");
                console.log("%%%%%%%%%%%%%%%%%%&&&&&&%######%%%%%&@@@@@&@@&&%%%%%&&%%%%&&@@@@@@@@#,,,,,,*,***,****************************//////////");
                console.log("%%%%%%&&&&&&&&&&&&&&&&&####%%%%%%%@@@%((####((//////////(#&@@@@@@@(,,,,*****,*******************************/////////");
                console.log("&&&&&&&&&&&&&&&&&&&&&@&%#####%%%%%%%@@@(////**************/(#&@@@@@@(,***************************************//*///////");
                console.log("&&&&&&&&&&&&&&&&&&&&@@&%####%&&&&&(*@@%(//***,,,,,**********(%@@@@@@(*****************************************/*///////");
                console.log("&&&&&&&&&&&&&&&&&%#((#%%###%%&&&&(,,/@((///*,,,,,,,,,,,***///(&@@@@(*********************************************//////");
                console.log("%%#(//((#%%%%%&%/,...,/%&%%&&@@@@/   @/(%&@@**,,**(##%%%#((/(&@@##**********************************************/////");
                console.log("%*.     .*#&&&&&(***(#%#%%&&&&&*  *&//#&%%&%%(//#%%%#(((#((//&@@@***********************************************/*///");
                console.log("%/,,,,,,,*(%&&%%*,   .,(#####(((((//(%/**/(##(((**/###@@&(///&@@%*************************************************///");
                console.log("%*.       ,(####(/////*..,.       .. .//******//,**/*/////**//#@&@&**************************************************//");
                console.log("%(,....,,*/((####(,.           .      &/***,,//*,**/******///(@%#@************///***********************************//*");
                console.log(",,,..,*//((((/.               ..      %%/****/*,,**//****//(#&*#************//**************************************/");
                console.log("///*********   .    .         .    .  (@%****/#//(##****//(%@@*,,/***********/*//**************************************");
                console.log("***********                   ..      .@@#&@@@@@@@@&%##//#@@@...*..  .,*****////***************************************");
                console.log("**********              ..    ..   .   %%@%%(#####%%&@@&%@@#....(.  . ..**/*////***************************************");
                console.log("*********                .    .    .   .@&%(#(((####&@@%.,...(... ...   */////***************************************");
                console.log("********                 ..  ..    .    /&@&&@&&%&@@@(,...**,,...,..    .,////***************,,**********************");
                console.log("*******                  ..  ..          (%%%%@@@@@@@/,.%@@@,.....,..   ,   ...****************************************");
                console.log("******,        .       . ..  ....      *,,,*(/*/#(**,,.,&@@(.........  .        ...************************************");
                console.log("******                 . ..  ....     .*,,.../*,,*,,,...,,..............            . ..*******************************");
                console.log("**//*/                .....  .. .     ........(*,*,,.,,,.......,.........          .  ..  .....*,**********************");
                console.log("*////.              .......  .. .      .......,,,,,,,,... ....,...................... .. ....  .... ..........*********");
                console.log("//(/,                ......  .           . .,,...,.,...  ....,..... ...................... ........,........,....******");
                console.log("((/*                  .,...               ............   ...,........,.,,.,,,,,.......... .........................,***");
                console.log("(//                    ....  .           ..    ......   . .,..........,,.,,,,,....,,,...,.......,,....   .. ........,**");
                console.log("//.                     ,,. ...               .  ... .....,..........,*.,,,,,...,,,,,,.......,(####(((((,. . ........,*");
                console.log("/*                     .,,......       . ..  ...... .....,..........,,.*,,,,..,,,,,,,,*((#####((((((/((((((,...........");
                console.log("#                      .*,....       ..  .  ......    ..,.........,*,*,,,.,,,,**(######(/(((/((((((((((######/.......,,");
                console.log(",                    ..*,,..       .,.  .   ....     ..,,........****,,,.,,/#(//******//*///(((((((##((((((((###*,,,**/");
                console.log("                     ./,,*.      ..,..       ..    ..,,,,......,****,,,,*/////***,*((##(((((((((##((((((####%%%&&&%/*/#");
                console.log("                    ./*,*,,,,,*/*,,,...... ...   ...,,,,,,...,/***///**//*****//**/(##(((##%%%#%%%%#%%%%%%&@@@&&&&&&%&&");
                console.log("                   .(/,****///**,,,,....   ..  ,...****.....//*/*///*/////////**//(&&&&&&&&@@@@@@@@@@@@@@@@&&&&&&&%%%%%");
                console.log("                   ,(/*///////**,,,.......,..,*.. ...,.,,*///*****/**///*/(////#%%&&&&&&&&&&&&&&&@&&@@@@@&&&&&&&&&&%%%%");
                console.log("                    ##((((((/**,,,.........,**,......,*(//*///*,*//*,*//**////#&&&&&&&&&&&&&&&&@@@@&&&&&&&&&&&&&&&&&&&&");
                console.log("                   (&%#((((//**.........,*//,,.....*/((//(((/**(/#(/**((/**///%&&&&&&&&&&&&&&&&@&&&&&&&&&&&&&&&&&&&&&&&");
                console.log("                  ,##((%((//////*,,,,,**//,...,,,,//////(#*,*((##%#//*(%///&&&&@@@@&@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
                console.log("                  ////((*////*,,,******/*,,...,,**///*/(#(**(((/(%(//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
                console.log("                 //*,/*,,,***,*///////*,,,,..,,,*///((/((##(////#&&%(/*(&&&&&&&&&&&&&&&&&&&%&&&&&&&&&&&&&&&&&&&&&&&&&&&");
                console.log("               .***/*,,,***//(*******,,..,,..,**//((/(((##&%##%%%%%%%(//(%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&");
                console.log("*             .,.*(****//////,,,.,..,,,,,*/((((#(((((/((#%%%%%%%#%%####((#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
                console.log(".              .,(////***,,,......,,,,,**//(((////**(((######################################%%%%%%%%%%%%%%%%%%%%%%%%%%");
                console.log("                ,*,,,,,,,,.......,,,,*/((/////****((((#####((((((((((((#############################################%%%");
                console.log("...          . .,**,,,,,,,,,,,,,,,*/////******//(((((((((((((((((((((((((((((((((((####################################");
                console.log(",.............,,,,,,,,*********///*******/////(((((((((((((((((((((((((((((((((((((((((((((((##########################");
                console.log("/**/*,,,,.,,,,,,************//******////////((((((((((((((((((((//(/((((((((((((((((((((((((((((#((####################");
                console.log("//////****************////**///////////////((((((((((((((((((((/(////((((((((((((((((((((((((##########################");
                console.log("(//////**************//////////////////(((((((((((((((((((((((((((((((((((((((((((((((############################%%%%%");
                console.log("(((//////////////////////////////////((((((((((((((((((((((((((((((((((((((((######################%%#%%%%%%%%%%%%%%%%%");
                console.log("((((((//////////////////////(((((((((((((((((((((((((#(#######((#(((#########################%%%%%%%%%%%%%%%%%%%%%%%%%&");

                request("http://artii.herokuapp.com/make?text=Michael Sanaiha&font=trek", function (error, response, body) {

                    if (!error && response.statusCode === 200) {

                        console.log(body);
                    }
                });
                break;
            case "Quit":

                process.exit();
                break;
        }
    })