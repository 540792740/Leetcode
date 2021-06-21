/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
    let ls = nums.length;
    let res = [];
    let leftSum = 1;
    let rightSum = 1;
    for(let i = 0; i < ls; i++){
        res[i] = leftSum;
        leftSum *= nums[i];
    }
    for(let j = ls - 1; j >= 0; j--){
        res[j] *= rightSum;
        rightSum *= nums[j]
    }
    return res
}


// unshift is slower
var productExceptSelf1 = function(nums) {
    let ls = nums.length;
    let leftArr = [1];
    let sum = nums[0];
    for(let i = 1; i < ls; i++){
        leftArr.push(sum);
        sum *= nums[i];
    }
    sum = nums[ls - 1];
    let rightSum = 1;
    let RightArr = [leftArr[ls - 1]];
    for(let i = ls - 2; i > -1; i--){
        console.log(sum)
        rightSum = leftArr[i] * sum;
        sum *= nums[i];
        RightArr.unshift(rightSum);
    }
    return RightArr
};

console.log(productExceptSelf([1,2,3,4]))
console.log(productExceptSelf([0,0]))
