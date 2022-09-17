const pushResult = (firstNum, secondNum, thirdNum, result, B) => {
    const oneResultArray = [firstNum, secondNum, thirdNum];
    oneResultArray.sort((a, b) => a - b);
    let oneResultArrayString = '';
    oneResultArray.forEach((oneResult) => {
        oneResultArrayString += oneResult;
    });

    if (!B[oneResultArrayString]) {
        result.push([firstNum, secondNum, thirdNum]);
        B[oneResultArrayString] = [firstNum, secondNum, thirdNum];
    }
};

var threeSum = function (nums) {
    let result = [];
    const A = {};
    const B = {};
    const uniqueNums = [];

    if (nums.length > 2) {
        for (const num of nums) {
            if (A[num]) {
                A[num]++;
            } else {
                A[num] = 1;
                uniqueNums.push(num);
            }
        }
    }

    for (let i = 0; i < uniqueNums.length; i++) {
        const uniqueNum = uniqueNums[i];

        if (uniqueNum) {
            if (A[uniqueNum] > 1) {
                const needed = 0 - (uniqueNum + uniqueNum);

                if (A[needed]) {
                    pushResult(uniqueNum, uniqueNum, needed, result, B);
                }
            }

            for (j = i + 1; j < uniqueNums.length; j++) {
                const needed = 0 - (uniqueNum + uniqueNums[j]);

                if (A[needed]) {
                    if (needed === uniqueNum || needed === uniqueNums[j]) {
                        if (A[needed] > 1) {
                            pushResult(
                                uniqueNum,
                                uniqueNums[j],
                                needed,
                                result,
                                B
                            );
                        }
                    } else {
                        pushResult(uniqueNum, uniqueNums[j], needed, result, B);
                    }
                }
            }
        } else {
            if (A[uniqueNum] && A[uniqueNum] > 2) {
                pushResult(0, 0, 0, result, B);
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
