var fourSum = function (nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);
    let firstNumPosition = 0;
    let secondNumPosition = 1;
    let thirdNumPosition = 2;
    let fourthNumPosition = nums.length - 1;

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        firstNumPosition = i;

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            secondNumPosition = j;
            thirdNumPosition = j + 1;
            fourthNumPosition = nums.length - 1;

            while (thirdNumPosition < fourthNumPosition) {
                if (
                    thirdNumPosition > j + 1 &&
                    nums[thirdNumPosition] === nums[thirdNumPosition - 1]
                ) {
                    thirdNumPosition++;
                } else if (
                    fourthNumPosition < nums.length - 1 &&
                    nums[fourthNumPosition] === nums[fourthNumPosition + 1]
                ) {
                    fourthNumPosition--;
                } else {
                    const sum =
                        nums[firstNumPosition] +
                        nums[secondNumPosition] +
                        nums[thirdNumPosition] +
                        nums[fourthNumPosition];

                    if (sum < target) {
                        thirdNumPosition++;
                    } else if (sum > target) {
                        fourthNumPosition--;
                    } else {
                        result.push([
                            nums[firstNumPosition],
                            nums[secondNumPosition],
                            nums[thirdNumPosition],
                            nums[fourthNumPosition],
                        ]);
                        thirdNumPosition++;
                    }
                }
            }
        }
    }

    return result;
};

const nums = [2, 2, 2, 2, 2];
console.log(fourSum(nums, 8));
