var searchInsert = function (nums, target) {
    let result = -1;
    let start = 0;
    let end = nums.length - 1;

    if (target <= nums[start]) {
        result = 0;
    } else if (target === nums[end]) {
        result = end;
    } else if (target > nums[end]) {
        result = end + 1;
    } else {
        while (start <= end) {
            const startEndDiff = end - start;

            if (startEndDiff > 1) {
                const middle = start + Math.floor((end - start) / 2);
                if (target < nums[middle]) {
                    end = middle - 1;
                } else if (target > nums[middle]) {
                    start = middle;
                } else {
                    result = middle;
                    break;
                }
            } else {
                if (startEndDiff === 1) {
                    if (target < nums[start]) {
                        result = start - 1;
                    } else if (target === nums[start]) {
                        result = start;
                    } else if (target > nums[start] && target < nums[end]) {
                        result = start + 1;
                    } else if (target === nums[end]) {
                        result = end;
                    } else {
                        result = end + 1;
                    }
                } else {
                    if (target === nums[start]) {
                        result = start;
                    } else if (target > nums[start]) {
                        result = start + 1;
                    } else {
                        result = start - 1;
                    }
                }

                break;
            }
        }
    }

    return result;
};

const nums = [2, 5, 6, 7];
const target = 5;
console.log(searchInsert(nums, target));
