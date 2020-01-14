
var character = "o";
var guess = "o"
letter = "o"

var Letter = function(letter){
    this.letter = letter;
    this.letterGuessedCorrectly = false;
console.log(letter)
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

  

// module.exports = Letter;


