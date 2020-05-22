/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dic = {};
    for(let i = 0; i < nums.length; i++){
        dic[nums[i]] = dic[nums[i]] + 1 || 1;
        if(dic[nums[i]] !== 1){return true}
    }
    return false;
};
