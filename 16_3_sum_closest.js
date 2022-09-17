var threeSumClosest = function (nums, target) {
    const len = nums.length;
    let response = nums[0] + nums[1] + nums[2];
    let sum = 0;
    let secondNumPosition = 0;
    let thirdNumPosition = 0;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < len - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        secondNumPosition = i + 1;
        thirdNumPosition = len - 1;

        while (secondNumPosition < thirdNumPosition) {
            sum = nums[i] + nums[secondNumPosition] + nums[thirdNumPosition];

            if (sum < target) {
                secondNumPosition++;
            } else if (sum > target) {
                thirdNumPosition--;
            } else {
                response = sum;
                break;
            }

            if (Math.abs(sum - target) < Math.abs(response - target))
                response = sum;
        }
    }

    return response;
};

const nums = [
    40, -53, 36, 89, -38, -51, 80, 11, -10, 76, -30, 46, -39, -15, 4, 72, 83,
    -25, 33, -69, -73, -100, -23, -37, -13, -62, -26, -54, 36, -84, -65, -51,
    11, 98, -21, 49, 51, 78, -58, -40, 95, -81, 41, -17, -70, 83, -88, -14, -75,
    -10, -44, -21, 6, 68, -81, -1, 41, -61, -82, -24, 45, 19, 6, -98, 11, 9,
    -66, 50, -97, -2, 58, 17, 51, -13, 88, -16, -77, 31, 35, 98, -2, 0, -70, 6,
    -34, -8, 78, 22, -1, -93, -39, -88, -77, -65, 80, 91, 35, -15, 7, -37, -96,
    65, 3, 33, -22, 60, 1, 76, -32, 22,
];
console.log(threeSumClosest(nums, 292));
