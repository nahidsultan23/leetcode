var searchRange = function (nums, target) {
    const result = [-1, -1];
    const numsLen = nums.length;
    let start = 0;
    let end = numsLen - 1;

    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);
        if (target < nums[middle]) {
            end = middle - 1;
        } else if (target > nums[middle]) {
            start = middle;
        } else {
            for (let i = 1; ; i++) {
                if (result[1] === -1 && nums[middle + i] !== target) {
                    result[1] = middle + i - 1;
                }

                if (result[0] === -1 && nums[middle - i] !== target) {
                    result[0] = middle - i + 1;
                }

                if (
                    nums[middle + i] !== target &&
                    nums[middle - i] !== target
                ) {
                    break;
                }
            }
            break;
        }

        const startEndDiff = end - start;
        if (startEndDiff < 2) {
            if (startEndDiff > 0) {
                if (nums[start] === nums[end]) {
                    if (target === nums[start]) {
                        result[0] = start;
                        result[1] = end;
                    }
                } else {
                    if (target === nums[start]) {
                        result[0] = start;
                        result[1] = start;
                    } else if (target === nums[end]) {
                        result[0] = end;
                        result[1] = end;
                    }
                }
            } else {
                if (target === nums[start]) {
                    result[0] = result[1] = start;
                }
            }

            break;
        }
    }

    return result;
};

const nums = [5, 7, 7, 8, 8, 10];
const target = 6;
console.log(searchRange(nums, target));
