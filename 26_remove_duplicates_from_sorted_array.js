var removeDuplicates = function (nums) {
    let k = 0;

    if (nums.length) {
        let lastNumber = nums[0];
        k = 1;

        for (let i = 1; i < nums.length; i++) {
            if (nums[i] === lastNumber) {
                nums[i] = '_';
            } else {
                lastNumber = nums[i];
                k++;
            }
        }

        let lastNumberLocation = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== '_') {
                if (i !== lastNumberLocation) {
                    nums[lastNumberLocation] = nums[i];
                    nums[i] = '_';
                }

                lastNumberLocation++;
            }
        }
    }

    return k;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
