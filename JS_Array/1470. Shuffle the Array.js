/**
 * Author: Peter
 * Date: Aug 29
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let res = []
    for(let i  = 0; i < n; i++){
        res.push(nums[i])
        res.push(nums[n + i])
    }
    return res
};
console.log(shuffle([2,5,1,3,4,7], 3))
