var convert = function (s, numRows) {
    let resultString = s;
    const stringLength = s.length;
    let addNumber = 1;
    let j = 1;

    if (stringLength && numRows > 1 && numRows < stringLength) {
        resultString = '';
        const A = [];
        A[0] = s[0];

        for (let i = 1; i < stringLength; i++) {
            if (A[j]) {
                A[j] += s[i];
            } else {
                A[j] = s[i];
            }

            if (j === numRows - 1) {
                addNumber = -1;
            } else if (!j) {
                addNumber = 1;
            }

            j += addNumber;
        }

        for (let i = 0; i < numRows; i++) {
            resultString += A[i];
        }
    }

    return resultString;
};

console.log(convert('PAYPALISHIRING', 4));
