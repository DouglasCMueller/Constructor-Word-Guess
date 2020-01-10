// var letter = require("./word.js")

var inquirer = require('inquirer');
var clc = require("cli-color");


var wordBank = ["football", "hockey", "baseball", "soccer", "basketball", "squash", "tennis", "boxing"];

var wordBankRandomIndex = Math.floor(Math.random() * wordBank.length);
var gameWord = wordBank[wordBankRandomIndex];
var gameWordArray = [];
character = "a"
  gameWordArray = Array.from(gameWord);
  console.log(gameWordArray);
  char = gameWordArray[0];
  console.log(char);
  function Letter(char){
this.char=char;
this.letterGuessedCorrectly = false;
  }
  var letter = new Letter("A");
  console.log(letter);

  for(i=0; i<gameWordArray.length; i++){
    if (character === gameWordArray[i]){
      console.log(character + " ");
      // return character +" ";
    }
    else{
    console.log("_ ");
    // else return "_ ";
    }
  }
 




function startOrExit(){
inquirer.prompt([{
      type: "list",
      name: "playGame",
      message: "What do you want to do?",
      choices: ["play the word guess game", "exit"]

  }])
  .then(answers => {


    if(answers.playGame === "exit"){
      process.exit(0);
    }
    else{
     
   console.log(clc.blue("Welcome to the Sport Word Guess Game!"));
   console.log(clc.red("Here is the first sport you will be guessing:\n"));
console.log(clc.yellow(gameWord));
playGame();
    }

  });
}
  function playGame(){
inquirer.prompt([{
type: "input",
name: "userLetterGuess",
message: "Guess a letter"

}])

.then(answers => {
  console.log (answers.userLetterGuess);

  


});
compareGuess();
function compareGuess(){
for (i=0; i<gameWordArray.length[i]; i++){
  if (gameWordArray[i] === answers.userLetterGuess){
    console.log(answers.userLetterGuess);
  }
  else {
    console.log("Incorrect guess!");

  }
}
}
};
startOrExit();