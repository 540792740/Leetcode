/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((x, y) => x - y)
    let res = 0;
    for(let i = 0; i < nums.length; i += 2){
        res += nums[i];
    }
    return res;
};
