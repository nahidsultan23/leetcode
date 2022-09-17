var reverse = function (x) {
    const upperRange = 2147483647;
    const lowerRange = -2147483648;

    let providedNumber = x;
    let negativeNumber = false;

    if (x < 0) {
        providedNumber = x * -1;
        negativeNumber = true;
    }

    const numberInString = providedNumber.toString();
    const reversedString = numberInString.split('').reverse().join('');
    let finalResult = Number(reversedString);

    if (negativeNumber) {
        finalResult = finalResult * -1;
    }

    if (finalResult < lowerRange || finalResult > upperRange) {
        finalResult = 0;
    }

    return finalResult;
};

console.log(reverse(-120));
