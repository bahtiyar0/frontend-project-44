import readlineSync from 'readline-sync';

const isEven = () => {
 const userName = readlineSync.question('May I have your name?');
 console.log(`Hello, ${userName}!`);
 console.log('Answer "yes" if the number is even, otherwise answer "no".')
 let sum = 0;
 for (let i = 0; i < 3; i += 1) {
 const rand = Math.round(Math.random() * 10);
 console.log(`Question: ${rand}`);
 const answer = readlineSync.question('Your answer:');
 console.log(answer);
 if (rand % 2 === 0) {
  if (answer === 'yes') {
   console.log('Correct!');
   sum += 1;
  } else {
   console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
   console.log(`Let's try again, ${userName}!`);
   return;
  }
 } else {
  if (answer === 'no') {
    console.log('Correct!');
    sum += 1;
  } else {
   console.log("It is wrong answer ;(. Correct answer was 'no'.");
   console.log(`Let's try again, ${userName}!`);
   return;
  }
 }
}
 if (sum === 3) {
   console.log(`Congratulations, ${userName}!`);
 }
};

export default isEven;
