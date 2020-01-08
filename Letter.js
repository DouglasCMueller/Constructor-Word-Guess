function Letter(letter){
    this.letter = letter;
    this.guessedCorrectly = false;

this.showLetter = function(){
    if(this.guessedCorrectly){
return this.letter + " ";
    }
    else{
        return "_ ";
    };
};

this.checkGuess = function(guess){
    if (guess === this.letter){
        this.guessedCorrectly = True;

    }
};

};
module.exports = Letter;


