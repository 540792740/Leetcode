/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    nums.forEach(function (e) {
        if (e !== nums[count]){
            nums[++count] = e
        }
    });
    console.log(count)
    return count + 1
};

a = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(a)
