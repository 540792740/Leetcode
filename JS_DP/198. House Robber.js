/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let cur = 0;
    let prev = 0;
    let ls = nums.length;
    if(ls === 0)return 0
    if(ls === 1) return nums[0];
    if(ls === 2)return Math.max(nums[0], nums[1])
    for(let i of nums){
        let temp = prev
        prev = cur;
        cur = Math.max(i + temp, cur)
    }
    return cur
};
