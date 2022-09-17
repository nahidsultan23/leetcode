const numberDict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

const allCombinations = (digits) => {
    const combinations = [];
    const firstDigit = Number(digits[0]);
    const slicedDigits = digits.slice(1);

    if (slicedDigits.length) {
        const nextCombination = allCombinations(slicedDigits);
        for (let i = 0; i < numberDict[firstDigit].length; i++) {
            for (let j = 0; j < nextCombination.length; j++) {
                combinations.push(
                    numberDict[firstDigit][i] + nextCombination[j]
                );
            }
        }
    } else {
        for (const char of numberDict[firstDigit]) {
            combinations.push(char);
        }
    }

    return combinations;
};

var letterCombinations = function (digits) {
    let result = [];

    if (digits.length) {
        result = allCombinations(digits);
    }

    return result;
};

console.log(letterCombinations('79'));
