#!/usr/bin/env node
import readlineSync from 'readline-sync';

const evenNumberGame = () => {
    const greetUser = () => {
        console.log('Welcome to the Brain Games!');
        const name = readlineSync.question('May I have your name? ');
        return console.log(`Hello, ${name}!`);
    };
    const name = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    if (isPlayerWin()) {
        console.log(`Congratulations, ${name}!`);
    } else {
        console.log(`Let's try again, ${name}!`);
    }
};

const isPlayerWin = () => {
    const evenNumber = (attempt) => {
        if (attempt === 0) {
            return true;
        }
        
        const num = getRandom(100);
        const mod = num % 2;

        console.log(`Question: ${num}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (mod === 0) {
            if (userAnswer === 'no') {
                console.log('Correct!');
                attempt -= 1;
                evenNumber(attempt);
            } else {
                console.log(`' ${userAnswer} ' is wrong answer ;(. Correct answer was ' no '.`);
                return false;
            }
        }
    }
    return evenNumber(3);
};

const getRandom = (max) => {
    return Math.floor(Math.random() * max);
};
evenNumberGame()
export {evenNumberGame};