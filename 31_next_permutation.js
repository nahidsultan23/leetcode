const getProperties = (nums) => {
    const numberCount = nums.length;
    const result = {
        isDescending: true,
        reversedArray: [],
        orderBreakPosition: numberCount - 1,
    };
    let previousNum = nums[numberCount - 1];
    result.reversedArray.push(previousNum);

    for (let i = numberCount - 2; i >= 0; i--) {
        const currentNum = nums[i];
        result.reversedArray.push(currentNum);

        if (currentNum >= previousNum) {
            previousNum = currentNum;
        } else {
            result.isDescending = false;
            result.orderBreakPosition = i;
            break;
        }
    }

    return result;
};

var nextPermutation = function (nums) {
    let result = [];
    const properties = getProperties(nums);

    if (properties.isDescending) {
        result = properties.reversedArray;
    } else {
        properties.reversedArray.sort((a, b) => a - b);
        const orderBreakingIndex = properties.reversedArray.findIndex(
            (e) => e === nums[properties.orderBreakPosition]
        );

        for (let i = 0; i < properties.orderBreakPosition; i++) {
            result.push(nums[i]);
        }

        let nextIndexOrderBreakingIndex = orderBreakingIndex + 1;

        for (let i = 0; ; i++) {
            if (
                properties.reversedArray[orderBreakingIndex] ===
                properties.reversedArray[nextIndexOrderBreakingIndex]
            ) {
                nextIndexOrderBreakingIndex++;
            } else {
                break;
            }
        }

        result.push(properties.reversedArray[nextIndexOrderBreakingIndex]);

        for (let i = 0; i < properties.reversedArray.length; i++) {
            if (i !== nextIndexOrderBreakingIndex) {
                result.push(properties.reversedArray[i]);
            }
        }
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }

    return result;
};

console.log(nextPermutation([1, 5, 1]));
