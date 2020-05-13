/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ls = nums.length
    nums.sort((x, y) => x - y)
    ls = Math.floor(ls / 2)
    return nums[ls]
};

a = Math.ceil(5 / 2)
b = Math.floor(5 / 2)
c = parseInt(5 / 2)
d = Math.round(5 / 2)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
