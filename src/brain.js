import readlineSync from 'readline-sync';
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getCalc = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

const startGame = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
    let sum = 0;
    for (let i = 0; i < 3; i += 1) {
        const number = getRandomNumber(1, 100);
        const result = getCalc(number) ? 'yes' : 'no';
        const question = `${number}`;
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
