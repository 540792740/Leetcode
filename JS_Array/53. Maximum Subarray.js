/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // res_sum = -Math.Max_Value;
    // sum: sum < 0; update res_sum;
    // sum < nums[i] update sum;
    // sum > nums[i]

    let sum = 0;
    let res = -Number.MAX_VALUE;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
        if(sum < 0){
            res = Math.max(res, nums[i])
            sum = 0
        }
        else{
            if(sum >= nums[i]){
                res = Math.max(res, sum)
            }
            else{
                sum = nums[i]
                res = Math.max(res, sum)
            }
        }
    }
    return res;
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    // res_sum = -Math.Max_Value;
    // sum: sum < 0; update res_sum;
    // sum < nums[i] update sum;
    // sum > nums[i]

    let prev = 0;
    let res = -Number.MAX_VALUE;
    for(let i = 0; i < nums.length; i++){
        prev = Math.max(prev + nums[i], nums[i]);
        res = Math.max(res, prev)
    }
    return res;
};
