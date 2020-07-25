/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dic = new Set(nums);
    let res = 0
    for(let i = 0; i < nums.length; i++){
        res += nums[i]
    }
    console.log(dic)

    for (let n of dic) {
        res -= n * 2
    }
    return -res
};

var singleNumber1 = function(nums) {
    let res = 0
    for(let i = 0; i < nums.length; i++) res = res ^ nums[i]
    return res
}

console.log(singleNumber([2,2,1]))
console.log(singleNumber1([2,2,1]))

const a = new Set()
a.add(1)
a.add(2)
a.add(3)
a.delete((2))
console.log(a)
