var myAtoi = function (s) {
    let result = 0;
    let currentPosition = 0;
    let resultString = '';
    const trimmedString = s.trim();
    const trimmedStringLength = trimmedString.length;

    if (trimmedString) {
        if (
            trimmedString[currentPosition] === '+' ||
            trimmedString[currentPosition] === '-'
        ) {
            resultString += trimmedString[currentPosition];
            currentPosition++;
        }

        if (
            currentPosition < trimmedStringLength &&
            (Number(trimmedString[currentPosition]) === 0 ||
                Number(trimmedString[currentPosition]))
        ) {
            resultString += trimmedString[currentPosition];
            currentPosition++;
            for (; currentPosition < trimmedStringLength; currentPosition++) {
                if (
                    trimmedString[currentPosition] !== ' ' &&
                    (Number(trimmedString[currentPosition]) === 0 ||
                        Number(trimmedString[currentPosition]))
                ) {
                    resultString += trimmedString[currentPosition];
                } else {
                    break;
                }
            }
        }

        if (Number(resultString)) {
            if (Number(resultString) < -2147483648) {
                result = -2147483648;
            } else if (Number(resultString) > 2147483647) {
                result = 2147483647;
            } else {
                result = Number(resultString);
            }
        }
    }

    return result;
};

console.log(myAtoi('        -4193 21 with words         '));
