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
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1,card2,card3]);
        const round = new Round(deck);
        const turn = new Turn('array',round.returnCurrentCard());

            expect(round.returnCurrentCard()).to.deep.equal({
                question: "What is Robbie's favorite animal",
                answers: [ 'sea otter', 'pug', 'capybara' ],
                correctAnswer: 'sea otter'
            });
    });

    it('should take turn', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1,card2,card3]);
        const round = new Round(deck);
        const turn = new Turn('array',round.returnCurrentCard());
        round.takeTurn('otter')

        expect(round.turns).to.equal(1);

    })

    it('should give feedback', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1,card2,card3]);
        const round = new Round(deck);
        const turn = new Turn('array',round.returnCurrentCard());

        expect(round.takeTurn('sea otter')).to.equal('Correct!');

    });

    it('should calculate percentage correct', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1,card2,card3]);
        const round = new Round(deck);
        const turn = new Turn('sea otter',round.returnCurrentCard());
        round.takeTurn('sea otter');
        round.takeTurn('gallbladder');
        round.takeTurn('playing with bubble wrap');

        expect(round.calculatePercentCorrect()).to.equal(100);

    });

    it('should calculate percentage correct', function(){
        const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

        const deck = new Deck([card1,card2,card3]);
        const round = new Round(deck);
        const turn = new Turn('sea otter',round.returnCurrentCard());
        round.takeTurn('sea otter');
        round.takeTurn('gallbladder');
        round.takeTurn('playing with bubble wrap');

        expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
    });


});


