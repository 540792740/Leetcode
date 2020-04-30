/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    //Test
    console.log(nums.sort())
    console.log(nums.sort((x, y) => x - y))
    console.log(nums.sort((x, y) => y - x))

    nums.sort((x, y) => x - y)
    let res = 0;
    for(let i = 0; i < nums.length; i += 2){
        res += nums[i];
    }
    return res;
};

console.log(arrayPairSum([-5, -3, -1, 0, 1, 3]));
console.log(arrayPairSum([50, -9, 0, 8 , 3]));
