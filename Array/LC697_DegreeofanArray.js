/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let ls = nums.length;
    let dic = {}
    let max_num = nums[0];
    let max_value = 1;
    for(let i = 0; i < ls; i++) {
        dic[nums[i]] = dic[nums[i]] + 1 | 1;
        if (dic[nums[i]] > max_value) {
            max_value = dic[nums[i]];
            max_num = nums[i]
        }

        else if(dic[nums[i]] === max_value){

        }
    }
    let left = 0;
    let right = ls - 1
    if(left < right){
        while(left < right && nums[left] !== max_num){
            left++;
        }
        while(left < right && nums[right] !== max_num){
            right--;
        }
    }
    return right - left + 1
};

a = findShortestSubArray([1,2,2,3,1])
a = findShortestSubArray(
    [2,1,1,2,1,3,3,3,1,3,1,3,2])
console.log(a)
