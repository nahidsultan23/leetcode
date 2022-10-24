var removeElement = function (nums, val) {
    let k = 0;

    if (nums.length) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === val) {
                nums[i] = '_';
            } else {
                k++;
            }
        }

        let lastNumberPosition = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== '_') {
                if (i !== lastNumberPosition) {
                    nums[lastNumberPosition] = nums[i];
                    nums[i] = '_';
                }

                lastNumberPosition++;
            }
        }
    }

    return k;
};

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
