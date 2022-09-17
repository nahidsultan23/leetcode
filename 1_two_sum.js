var twoSum = function (nums, target) {
    const A = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (A[nums[i]]) {
            A[nums[i]].index.push(i);
        } else {
            A[nums[i]] = {
                number: nums[i],
                index: [i],
            };
        }
    }

    nums.sort((a, b) => a - b);

    for (const num of nums) {
        if (num <= target / 2) {
            const moreNeeded = target - num;

            if (A[moreNeeded]) {
                if (
                    A[moreNeeded].index[0] === A[num].index[0] &&
                    A[moreNeeded].index[1]
                ) {
                    result.push(A[num].index[0]);
                    result.push(A[moreNeeded].index[1]);
                    break;
                } else {
                    result.push(A[num].index[0]);
                    result.push(A[moreNeeded].index[0]);
                    break;
                }
            }
        }
    }

    return result;
};

console.log(twoSum([2, 3, 3], 6));
