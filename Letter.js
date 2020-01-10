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


module.exports = Letter;


