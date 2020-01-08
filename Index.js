var inquirer = require('inquirer');
var clc = require("cli-color");

console.log(clc.red("Text in red"));


var wordBank = ["football", "hockey", "baseball", "soccer", "basketball", "squash", "tennis", "boxing"];
console.log(clc.yellow(wordBank));
var wordBankRandomIndex = Math.floor(Math.random() * wordBank.length);
var GameWord = wordBank[wordBankRandomIndex];
console.log(GameWord);

inquirer
  .prompt([{
      type: "list",
      name: "playGame",
      message: "What do you want to do?",
      choices: ["play the word guess game", "exit"]

  }
    /* Pass your questions in here */


  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
//    console.log(clc.blue("start the game"));
  });