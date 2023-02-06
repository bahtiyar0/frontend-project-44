import readlineSync from 'readline-sync';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getCalc = (number1, length, step) => {
    const progresMas = [];
    for (let i = 0; i < length; i += 1) {
        const number = number1 + (step * i);
        progresMas.push(number);
    }
    return progresMas;
};
const startGame = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Find the greatest common divisor of given numbers.')
    let sum = 0;
    for (let i = 0; i < 3; i += 1) {
        const length = getRandomNumber(5, 10);
        const unkownMemberIndex = getRandomNumber(0, length);
        const step = getRandomNumber(1, 5);
        const number1 = getRandomNumber(1, 10);
        const progresMas = getCalc(number1, length, step);
        const result = progresMas[unkownMemberIndex];
        progresMas[unkownMemberIndex] = '..';
        const question = progresMas.join(' ');

        console.log(`Question: ${question}`);
        const answer = readlineSync.question('Your answer: ');

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
