/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let nums_sort = [...nums].sort((x,y) => x - y);
    let l = 0;
    let r = 0;
    // console.log(nums_sort)
    // console.log(nums)
    for(let i = 0; i < nums.length; i++){
        if(nums_sort[i] !== nums[i]){
            l = i;
            break;
        }
    }
    for(let i = nums.length - 1; i >= 0;i--){
        if(nums_sort[i] !== nums[i]){
            r = i;
            break;
        }
    }
    if(l === r) return 0
    return r - l + 1

};

console.log(findUnsortedSubarray( [2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([1,2,3,4]))
