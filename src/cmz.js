import readlineSync from 'readline-sync';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const operatorArray = ['+', '-', '*'];
const calculate = (number1, number2, operator) => {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        default:
            throw new Error(`Unkown order state: '${operator}'!`);
    }
};

const startGame = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?')
    let sum = 0;
    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomNumber(1, 100);
        const number2 = getRandomNumber(1, 100);
        const index = getRandomNumber(0, operatorArray.length - 1);
        const operator = operatorArray[index];
        const question = `${number1} ${operator} ${number2}`;
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        const result = calculate(number1, number2, operator);
        if (answer === String(result)) {
            console.log('Correct!');
            sum += 1;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }
    if (sum === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};

export default startGame;
