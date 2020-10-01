/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((x, y) => y - x);
    return nums[k - 1];

};

console.log(findKthLargest([3,3,3,3,4,4,2,2,2], 2))
