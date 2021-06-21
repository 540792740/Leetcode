/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let res = Array(nums.length);
    let l = 0;
    let r = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[l] ** 2 > nums[r] ** 2) {
            res[i] = nums[l] ** 2;
            l++;
        }
        else {
            res[i] = nums[r] ** 2;
            r--;
        }
    }
    return res

};