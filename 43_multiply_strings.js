/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let result = '0';
  const number1 = [];
  const number2 = [];

  for (const char of num1) {
    number1.push(Number(char));
  }

  for (const char of num2) {
    number2.push(Number(char));
  }

  let stepCount = 0;
  const mulResults = [];
  let remainder = 0;
  for (let i = number2.length - 1; i >= 0; i--) {
    for (let j = number1.length - 1; j >= 0; j--) {
      const mulResult = number2[i] * number1[j];
      if (!mulResults[stepCount]) {
        mulResults[stepCount] = '';
      }

      const mulResultPlusRemainder = mulResult + remainder;
      mulResults[stepCount] += mulResultPlusRemainder % 10;
      remainder = (mulResultPlusRemainder - (mulResultPlusRemainder % 10)) / 10;
    }

    if (remainder) {
      mulResults[stepCount] += remainder;
      remainder = 0;
    }

    mulResults[stepCount] = mulResults[stepCount].split('').reverse().join('');

    for (let k = 0; k < stepCount; k++) {
      mulResults[stepCount] += '0';
    }

    stepCount++;
  }

  if (stepCount > 1) {
    let sumRes = add(mulResults[0], mulResults[1]);
    if (stepCount > 2) {
      for (let i = 2; i < mulResults.length; i++) {
        sumRes = add(sumRes, mulResults[i]);
      }
    }
    result = sumRes;
  } else {
    result = mulResults[0];
  }

  let finalResult = '';
  let startAdding = false;
  for (const char of result) {
    if (char !== '0') {
      startAdding = true;
    }

    if (startAdding) {
      finalResult += char;
    }
  }

  if (!finalResult) {
    finalResult = '0';
  }

  return finalResult;
};

const add = (number1, number2) => {
  let num1 = [];
  let num2 = [];
  for (const elem of number1) {
    num1.push(Number(elem));
  }
  for (const elem of number2) {
    num2.push(Number(elem));
  }

  let lengthDiff = num1.length - num2.length;
  if (lengthDiff > 0) {
    const pad = [];
    for (let j = 0; j < lengthDiff; j++) {
      pad.push(0);
    }
    num2 = pad.concat(num2);
  } else {
    lengthDiff = lengthDiff * -1;
    const pad = [];
    for (let j = 0; j < lengthDiff; j++) {
      pad.push(0);
    }
    num1 = pad.concat(num1);
  }

  let remainder = 0;
  let sumResult = '';
  for (let j = num1.length - 1; j >= 0; j--) {
    const sumOfTwoPlusRemainder = num1[j] + num2[j] + remainder;
    sumResult += sumOfTwoPlusRemainder % 10;
    remainder = (sumOfTwoPlusRemainder - (sumOfTwoPlusRemainder % 10)) / 10;
  }

  if (remainder) {
    sumResult += remainder;
  }

  return sumResult.split('').reverse().join('');
};

const num1 = '523';
const num2 = '6984';

console.log(multiply(num1, num2));
