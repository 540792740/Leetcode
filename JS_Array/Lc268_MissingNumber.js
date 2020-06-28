/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let ls = nums.length;
    let total = 0;
    for(let i = 0; i < ls; i++){
        total += nums[i];
    }
    let sum = ((1 + ls) * ls) / 2;
    return sum - total;
};
