import readlineSync from 'readline-sync';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getCalc = (number1, number2) => {
    if (number2 === 0) {
        return number1;
    }
    return getCalc(number2, number1 % number2);
};

const startGame = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Find the greatest common divisor of given numbers.')
    let sum = 0;
    for (let i = 0; i < 3; i += 1) {
        const number1 = getRandomNumber(1, 100);
        const number2 = getRandomNumber(1, 100);
        const question = `${number1} ${number2}`;
        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');
        const result = getCalc(number1, number2);

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
