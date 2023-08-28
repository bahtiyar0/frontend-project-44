import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const taskGame = 'What is the result of the expression?';

const operatorArray = ['+', '-', '*'];

const calculation = (number1, number2, operator) => {
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
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const index = getRandomNumber(0, operatorArray.length - 1);
  const selectedOperator = operatorArray[index];
  const operator = selectedOperator;
  const question = `${number1} ${operator} ${number2}`;
  const answer = calculation(number1, number2, operator);
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
