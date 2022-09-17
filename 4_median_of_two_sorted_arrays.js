var findMedianSortedArrays = function (nums1, nums2) {
    let median = 0;

    const nums = nums1.concat(nums2);
    nums.sort((a, b) => a - b);
    const arrayLength = nums.length;

    if (arrayLength) {
        if (arrayLength % 2) {
            const medianPosition = Math.trunc(arrayLength / 2);
            median = nums[medianPosition];
        } else {
            const median1Position = arrayLength / 2 - 1;
            const median2Position = median1Position + 1;
            median = (nums[median1Position] + nums[median2Position]) / 2;
        }
    }

    return median;
};

const nums1 = [1, 2];
const nums2 = [3, 4];

console.log(findMedianSortedArrays(nums1, nums2));
