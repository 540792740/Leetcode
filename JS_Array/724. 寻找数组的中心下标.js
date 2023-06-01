/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Edge Case
    if (nums.length === 0) {
        return 0;
    }
    let right = nums.reduce((pre, cur) => pre + cur, 0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            right -= nums[i];
            if (left === right) {
                return i;
            }
            continue;
        }
        left += nums[i - 1];
        right -= nums[i];
        console.log(left, right)
        if (left === right) {
            return i;
        }
    }
    return -1;
};