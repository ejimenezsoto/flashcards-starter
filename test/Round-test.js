const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Deck = require('../src/Deck');


describe('Round', function(){

    it('should be a funciton', function(){
        const round = new Round();
        expect(Round).to.be.a('function');
    })

    it('should be an instance of Round', function(){
        const round = new Round();
        expect(round).to.be.an.instanceof(Round);
    });

    it('should return current card', function(){
            var card1 = new Card(2,
            "What is a comma-separated list of related values?",
            ["array", "object", "function"],
            "array");
    
            var card2 = new Card(3,
            "What type of prototype method directly modifies the existing array?",
            ["mutator method", "accessor method", "iteration method"],
            "mutator method");
    
            var card3 = new Card(5,
            "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
            ["mutator method", "accessor method", "iteration method"],
            "iteration method");

            var deck = new Deck([card1,card2,card3]);
            var round = new Round(deck);
            var turn = new Turn('array',round.returnCurrentCard());

            expect(round.returnCurrentCard()).to.deep.equal({
                question: 'What is a comma-separated list of related values?',
                answers: [ 'array', 'object', 'function' ],
                correctAnswer: 'array'
            });
    });

    it('should ')
});


