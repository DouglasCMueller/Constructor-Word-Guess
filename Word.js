 var Letter = require("./letter.js");




//create word constructor
var Word = function(word){
  this.word = word;
  
  var gameWordArray = Array.from(word);

var newGameWordArray = [];
 for (i=0; i<gameWordArray.length; i++){
letter = new Letter(gameWordArray[i]);
newGameWordArray.push(letter);

 }
 
  var wordString = "";
  for (j=0; j<newGameWordArray.length;j++){
    wordString += (newGameWordArray[j].showLetter());
   console.log(wordString)
     }
     

}

module.exports = Word;