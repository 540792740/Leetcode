/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let step = 0;
    ls = nums.length - 1
    for(let i of nums){
        if(step < 0) return false
        if(step >= ls) return true;
        step = Math.max(step, i)
        step--;
        ls--;
        console.log(step, ls)
    }
    return true
};

console.log(canJump([3,2,1,0,4]))
