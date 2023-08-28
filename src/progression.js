import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number1, length, step) => {
  const arithmProgressArr = [];
  for (let i = 0; i < length; i += 1) {
    const number = number1 + (step * i);
    arithmProgressArr.push(number);
  }
  return arithmProgressArr;
};

const startGame = () => {
  const length = getRandomNumber(5, 10);
  const unkownMemberIndex = getRandomNumber(0, length);
  const step = getRandomNumber(1, 5);
  const number1 = getRandomNumber(1, 10);
  const arithmProgressArr = getProgression(number1, length, step);
  const answer = arithmProgressArr[unkownMemberIndex];
  arithmProgressArr[unkownMemberIndex] = '..';
  const question = arithmProgressArr.join(' ');
  return [question, answer];
};

export default () => {
  getGame(taskGame, startGame);
};
