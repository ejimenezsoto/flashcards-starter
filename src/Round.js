const Turn = require("./Turn");

class Round {
    constructor(deck){
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];

    };
    returnCurrentCard(){
        var i = 0
        return this.deck.cards[i]
    };

    takeTurn(guess){
        const turn = new Turn(guess, this.deck.cards[i]);
        turns++
        i++;
        if(!turn.evaluateGuess){
            this.incorrectGuesses.push(this.deck.cards[i].id);
        };
        turn.evaluateGuess;

    };

    calculatePercentCorrect(){
        return 100 * this.incorrectGuesses.length / this.deck.length;
    };

    endRound(){
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    };
};

module.exports = Round;