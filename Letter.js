
var inquirer = require('inquirer');
var clc = require("cli-color");



function Letter(char){
    this.char = char;
    this.letterGuessedCorrectly = false;

this.showLetter = function(){
    if(this.letterGuessedCorrectly){
return this.letter + " ";
    }
    else{
        return "_ ";
    };
};

this.checkGuess = function(guess){
    if (guess === this.letter){
        this.letterGuessedCorrectly = True;

    }
};

};

function playGame() {
    inquirer.prompt([{
      type: "input",
      name: "userLetterGuess",
      message: "Guess a letter"
  
    }])
  
      .then(answers => {
          var userLetterGuessUsed = answers.userLetterGuess;
        console.log(userLetterGuessUsed);
  
  
  
  
    });
  };
    playGame();

module.exports = Letter;


