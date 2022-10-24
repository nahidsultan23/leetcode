const convertToNonNegative = (number) => {
    let result = number;

    if (number < 0) {
        result = number - (number + number);
    }

    return result;
};

var divide = function (dividend, divisor) {
    let result = 0;
    const nonNegativeDividend = convertToNonNegative(dividend);
    const nonNegativeDivisor = convertToNonNegative(divisor);

    if (nonNegativeDivisor === 1) {
        result = nonNegativeDividend;
    } else if (nonNegativeDividend >= nonNegativeDivisor) {
        let tempDivisor = nonNegativeDivisor;

        for (let i = 2; ; i++) {
            tempDivisor += nonNegativeDivisor;

            if (tempDivisor > nonNegativeDividend) {
                result = i - 1;
                break;
            } else if (tempDivisor === nonNegativeDividend) {
                result = i;
                break;
            }
        }
    }

    if (!(dividend < 0 && divisor < 0) && (dividend < 0 || divisor < 0)) {
        result = result - (result + result);
    }

    if (result > 2147483647) {
        result = 2147483647;
    } else if (result < -2147483648) {
        result = -2147483648;
    }

    return result;
};

console.log(divide(7, -3));
