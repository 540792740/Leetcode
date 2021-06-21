/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dic = {};
    for(let i = 0; i < nums.length; i++){
        console.log(dic)
        if(dic[nums[i]] !== undefined) return [dic[nums[i]], i];
        else{
            dic[target - nums[i]] = i;
        }
    }
};
console.log(twoSum([2,8,4,7], 9))

