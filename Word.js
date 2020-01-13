// var Letter = require("./letter.js")
var clc = require("cli-color");

var gameWord = "hockey";
    //create letter constructor
    function Letter(char) {
      this.char = char;
      this.letterGuessedCorrectly = false;
    }
    
    
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
    
      for (i = 0; i < gameWordArray.length; i++) {
        //create letter constructor for each letter in gameWordArray
        char = gameWordArray[i];
    
        var letter = new Letter(char);
        var letterUsed = letter.char;
        console.log(letterUsed);
    
        if (letterUsed === letterGuessed) {
          guessedWordArray.push(letterUsed + " ");
          this.thisLetterGuessedCorrectly = true;
          }
        else {
          guessedWordArray.push("_ ");
          }
      }
    
      console.log(guessedWordArray);
      
      var stringWord = guessedWordArray.toString();
      console.log(stringWord);
      var stringWordNoCommas = stringWord.replace(/,/g, " ");
      console.log(clc.blue("This is the random sports word you will be guessing: \n"));
      console.log(stringWordNoCommas);
    
// module.exports = Word;