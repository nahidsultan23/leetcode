const fourStringDict = [
    {
        string: 'VIII',
        value: 8,
    },
];

const threeStringDict = [
    {
        string: 'III',
        value: 3,
    },
    {
        string: 'VII',
        value: 7,
    },
];

const twoStringDict = [
    {
        string: 'II',
        value: 2,
    },
    {
        string: 'IV',
        value: 4,
    },
    {
        string: 'VI',
        value: 6,
    },
    {
        string: 'IX',
        value: 9,
    },
    {
        string: 'XL',
        value: 40,
    },
    {
        string: 'XC',
        value: 90,
    },
    {
        string: 'CD',
        value: 400,
    },
    {
        string: 'CM',
        value: 900,
    },
];

const oneStringDict = [
    {
        string: 'I',
        value: 1,
    },
    {
        string: 'V',
        value: 5,
    },
    {
        string: 'X',
        value: 10,
    },
    {
        string: 'L',
        value: 50,
    },
    {
        string: 'C',
        value: 100,
    },
    {
        string: 'D',
        value: 500,
    },
    {
        string: 'M',
        value: 1000,
    },
];

const runLoop = (receivedString, targettedArray) => {
    let value = 0;

    for (const item of targettedArray) {
        if (item.string === receivedString) {
            value = item.value;
            break;
        }
    }

    return value;
};

const getValue = (receivedString) => {
    let value = 0;

    if (receivedString.length === 4) {
        value = runLoop(receivedString, fourStringDict);
    } else if (receivedString.length === 3) {
        value = runLoop(receivedString, threeStringDict);
    } else if (receivedString.length === 2) {
        value = runLoop(receivedString, twoStringDict);
    } else {
        value = runLoop(receivedString, oneStringDict);
    }

    return value;
};

const findValue = (receivedString) => {
    let result = {
        value: 0,
        remainder: '',
    };

    for (let i = receivedString.length; i > 0; i--) {
        let evaluatableString = receivedString.slice(i * -1);
        let remainder = receivedString.slice(0, i * -1);
        const value = getValue(evaluatableString);

        if (value) {
            result.value = value;
            result.remainder = remainder;
            break;
        }
    }

    return result;
};

const matchString = (receivedString) => {
    let result = {
        value: 0,
        remainder: '',
    };

    if (receivedString.length >= 4) {
        const testableString = receivedString.slice(-4);
        const remainder = receivedString.slice(0, -4);

        const findValueResult = findValue(testableString);

        if (findValueResult.value) {
            result.value = findValueResult.value;
            result.remainder = remainder + findValueResult.remainder;
        }
    }

    if (!result.value && receivedString.length === 3) {
        const testableString = receivedString.slice(-3);
        const remainder = receivedString.slice(0, -3);

        const findValueResult = findValue(testableString);

        if (findValueResult.value) {
            result.value = findValueResult.value;
            result.remainder = remainder + findValueResult.remainder;
        }
    }

    if (!result.value && receivedString.length === 2) {
        const testableString = receivedString.slice(-2);
        const remainder = receivedString.slice(0, -2);

        const findValueResult = findValue(testableString);

        if (findValueResult.value) {
            result.value = findValueResult.value;
            result.remainder = remainder + findValueResult.remainder;
        }
    }

    if (!result.value && receivedString.length === 1) {
        const testableString = receivedString;
        const remainder = '';

        const findValueResult = findValue(testableString);

        if (findValueResult.value) {
            result.value = findValueResult.value;
            result.remainder = remainder + findValueResult.remainder;
        }
    }

    return result;
};

var romanToInt = function (s) {
    let matchStringResult = matchString(s);
    let value = matchStringResult.value;

    while (matchStringResult.remainder) {
        matchStringResult = matchString(matchStringResult.remainder);
        value += matchStringResult.value;
    }

    return value;
};

console.log(romanToInt('MCMXCIV'));
