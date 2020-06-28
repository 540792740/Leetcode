/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let dic = {}, ls = nums.length;
    for(let i = 0; i < ls; i++){
        if(nums[i] in dic && i - dic[nums[i]]  <= k ){return true}
        dic[nums[i]] = i;
    }
    return false
};
