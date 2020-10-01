/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let set = new Set();
    for(let i of nums){
        if (set.has(i)) return i;
        else set.add(i);
    }
};

var findDuplicate1 = function(nums) {
    for(let n of nums){
        if(nums[Math.abs(n)] < 0) return Math.abs(n);
        nums[Math.abs(n)]*=-1;
    }
    return -1;
};
