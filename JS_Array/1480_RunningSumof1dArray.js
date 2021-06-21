/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if(nums.length === 0) return []
    if(nums.length === 1) return nums
    for(let i = 1; i < nums.length; i++){
        nums[i] += nums[i - 1]
    }
    return nums
};

console.log(runningSum([1,2,3,4,5,6]))
