/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    let prev = 0;
    let max = -Number.MAX_VALUE;

    for(let i = 0; i < nums.length; i++){
        prev = Math.max(prev + nums[i], nums[i]);
        max =  Math.max(max, prev);
    }
    return max;
};
var maxSubArray = function(nums) {
    if(nums.length===1) return nums[0];
    let maxN= nums[0];
    let bestSum= -Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (bestSum<0) {
            bestSum = nums[i]
        } else {
            bestSum += nums[i]
        }
        if (bestSum > maxN) {
            maxN = bestSum
        }
    }
    return maxN
};


/*
     [-2,1,-3,4,-1,2,1,-5,4]
     [-2, -1, -4, -3]
     [1, 2, 3, -4, 5]
     maxN = -2          -2  1   1
     bestSum = -In      -2  1  -2   4



     1. 确保目标数组第一个值是正数
     2. 如果是负数集合，每次更新
     3. 确保累加大于0, 累加大于0的情况下，才有可能出现目标数组中间有负数的情况

     a all positive [1, 2 ,3]
     b all negative [-1, -2, -3]
     c both pos neg [1, 2, 3, -4, 5] => [2, 5]
                    [1 -1 2]



* */
console.log(maxSubArray([1,3,-1,-2,5]))
