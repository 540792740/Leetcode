/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ls = nums.length
    nums.sort((x, y) => x - y)
    ls = Math.floor(ls / 2)
    return nums[ls]
};
