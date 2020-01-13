// var letter = require("./word.js")

var inquirer = require('inquirer');
var clc = require("cli-color");

//function to choose randomWord

function buildWord() {
  //create letter constructor
  function Letter(char) {
    this.char = char;
    this.letterGuessedCorrectly = false;
  }
  var gameWord = "hockey";
  //create word constructor
  function Word(gameWord) {
    this.gameWord = gameWord;
  
  }
  var actualWord = new Word(gameWord);

  console.log(actualWord);
  //create gameWordArray from gameWord
  var gameWordArray = [];
  var guessedWordArray = [];
  
  gameWordArray = Array.from(gameWord);
  console.log(gameWordArray);
  
  letterGuessed = "o";
  gameWordArrayShown = [];
    for (i = 0; i < gameWordArray.length; i++) {
      //create letter constructor for each letter in gameWordArray
      char = gameWordArray[i];
  
      var letter = new Letter(char);
      var letterUsed = letter.char;
      console.log(letterUsed);
  
      if (letterUsed === letterGuessed) {
        gameWordArrayShown.push(letterUsed + " ");
        this.thisLetterGuessedCorrectly = true;
        }
      else {
        gameWordArrayShown.push("_ ");
        }
    }
  
    console.log(gameWordArrayShown);
    
    var stringWord = gameWordArrayShown.toString();
    console.log(stringWord);
    var stringWordNoCommas = stringWord.replace(/,/g, " ");
    console.log(clc.blue("This is the random sports word you will be guessing: \n"));
    console.log(stringWordNoCommas);
  

};
//function to start or exit game
function startOrExit() {
  inquirer.prompt([{
    type: "list",
    name: "playGame",
    message: "What do you want to do?",
    choices: ["play the word guess game", "exit"]

  }])
    .then(answers => {
      if (answers.playGame === "exit") {
        process.exit(0);
      }
      else {
        console.log(clc.blue("Welcome to the Sports Word Guess Game!"));
       
        buildWord();
      playGame();

      }

    });
}

startOrExit();




function playGame() {
  inquirer.prompt([{
    type: "input",
    name: "userLetterGuess",
    message: "Guess a letter"

  }])

    .then(answers => {
    //   var gameWordArray = [];
    //  guessedWordArray = "hockey";
      var userGuessedLetter = answers.userLetterGuess;
      console.log(userGuessedLetter)
      for (i = 0; i < gameWordArrayShown.length; i++) {
       
        if (userGuessedLetter === gameWordArrayShown[i]) {
          console.log("Correct Guess");

          }
          else {
            console.log("Incorrect Guess");
          }
       
      }
    
      // console.log(gameWordArrayShown);
    
      // var stringWord = gameWordArrayShown.toString();
      // console.log(stringWord);
      // var stringWordNoCommas = stringWord.replace(/,/g, " ");
      // console.log(clc.blue("This is the random sports word you will be guessing: \n"));
      // console.log(stringWordNoCommas);
    
  
  });
};

 