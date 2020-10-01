/**
 * @param {number[]} nums
 * @return {number[][]}
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * A solution set is: [ [-1, 0, 1], [-1, -1, 2]]
 */
var threeSum = function(nums) {
    // Less than 3 element will return nothing:
    let res = [];
    if (nums.length < 3){ return res;}
    let ls = nums.length;
    // Sort
    nums = nums.sort((x, y) => x - y);

    for(let i = 0; i < ls - 2; i++){
        if (i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        let left = i + 1;
        let right = ls - 1;
        while (left < right){
            let s = nums[i] + nums[left] + nums[right];
            if (s > 0) right -= 1;
            else if (s < 0) left += 1;
            else{
                let temp = [nums[i], nums[left], nums[right]];
                res.push(temp);
                while (left < right && nums[left] === nums[left + 1]) left += 1
                while (left < right && nums[right] === nums[right - 1]) right -= 1
                left += 1;
                right -= 1;
            }
        }

    }
    return res;
};

console.log(threeSum([-1,0,1,2,-1,-4]))


