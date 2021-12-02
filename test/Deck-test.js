const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

describe('Deck', function(){
    it('should be a function', function(){
        const deck = new Deck();
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Turn', function(){
        const deck = new Deck();
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should return number of cards in deck', function(){
        const card1 = new Card(2,
        "What is a comma-separated list of related values?",
        ["array", "object", "function"],
        "array");

        const card2 = new Card(3,
        "What type of prototype method directly modifies the existing array?",
        ["mutator method", "accessor method", "iteration method"],
        "mutator method");

        const card3 = new Card(5,
        "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
        ["mutator method", "accessor method", "iteration method"],
        "iteration method");

        const deck = new Deck([card1,card2,card3]);

        expect(deck.countCards()).to.equal(3);

    });
});