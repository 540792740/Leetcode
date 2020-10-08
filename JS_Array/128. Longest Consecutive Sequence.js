/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    let res = 1;
    nums.sort((x, y) => x - y);
    let temp = nums[0]
    let count = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]) continue;
        if(nums[i] === temp + 1) {
            count++
        }
        else{
            count = 1;
        }
        if(count > res) res = count;
        temp = nums[i];
    }
    return res;
};
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
