const isAscending = (startNum, endNum) => {
    let result = true;

    if (startNum > endNum) {
        result = false;
    }

    return result;
};

const findTarget = (nums, startPosition, endPosition, target) => {
    let result = -1;
    let start = startPosition;
    let end = endPosition;

    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);

        if (target > nums[middle]) {
            start = middle + 1;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else {
            result = middle;
            break;
        }
    }

    return result;
};

const findPivotPosition = (nums, numsLen) => {
    let start = 0;
    let end = numsLen - 1;
    let pivot = Math.floor((end - start) / 2);

    while (start <= end) {
        if (
            isAscending(nums[start], nums[pivot]) &&
            isAscending(nums[pivot + 1], nums[end])
        ) {
            break;
        } else {
            if (isAscending(nums[start], nums[pivot])) {
                start = pivot + 1;
            } else {
                end = pivot;
            }
            pivot = start + Math.floor((end - start) / 2);
        }
    }

    return pivot + 1;
};

var search = function (nums, target) {
    let result = -1;
    const numsLen = nums.length;
    let start = 0;
    let startNum = nums[start];
    let end = numsLen - 1;
    let endNum = nums[end];

    if (!isAscending(startNum, endNum)) {
        const pivotPosition = findPivotPosition(nums, numsLen);
        if (target >= nums[pivotPosition] && target <= nums[numsLen - 1]) {
            start = pivotPosition;
        } else {
            end = pivotPosition - 1;
        }
    }

    result = findTarget(nums, start, end, target);

    return result;
};

const nums = [7, 8, 9, 1, 2, 3, 4, 5, 6];
const target = 4;
console.log(search(nums, target));
