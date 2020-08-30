/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    let res = 0;
    nums.map(a => res = res ^ a)
    return res
};
