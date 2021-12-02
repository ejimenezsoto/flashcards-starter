const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function(){
    
    it('should be a function', function(){
        const turn = new Turn();
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Card', function(){
        const turn = new Turn();
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should return a guess', function(){
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object',card);
        expect(turn.returnGuess()).to.equal('object');
    });

    it('should correctly evalute the right guess', function(){
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object',card);
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should correctly evalute the wrong guess', function(){
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('variable',card);
        expect(turn.evaluateGuess()).to.equal(false);
    });

    it('should correctly give you feedback for the right answer', function(){
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('object',card);
        expect(turn.giveFeedback()).to.equal('Correct!');
    });

    it('should correctly give you feed back for the wrong answer', function(){
        const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const turn = new Turn('forEach',card);
        expect(turn.giveFeedback()).to.equal('Incorrect!');
    });
});