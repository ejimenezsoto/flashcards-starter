const Turn = require("./Turn");

class Round {
    constructor(deck){
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];

    };
    returnCurrentCard(){
        return this.deck.cards[this.turns]
    };

    takeTurn(guess){
        const turn = new Turn(guess, this.deck.cards[this.turns]);
        
        if(!turn.evaluateGuess()){
            this.incorrectGuesses.push(this.deck.cards[this.turns].id);
        };
        this.turns++
        return turn.giveFeedback();

    };

    calculatePercentCorrect(){
        const correctGuesses = (this.turns - this.incorrectGuesses.length);
        return Math.round((correctGuesses / this.turns) * 100);
    };

    endRound(){
        console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
        this.turns = 0;
    };
};

module.exports = Round;