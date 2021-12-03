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
        this.turns++
        if(!turn.evaluateGuess){
            this.incorrectGuesses.push(this.deck.cards[this.turns].id);
        };
        return turn.giveFeedback();

    };

    calculatePercentCorrect(){
        const correctGuesses = (this.turns - this.incorrectGuesses.length);
        return Math.round((correctGuesses / this.turns) * 100);
    };

    endRound(){
        return  `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    };
};

module.exports = Round;