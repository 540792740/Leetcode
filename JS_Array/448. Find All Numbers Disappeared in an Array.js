/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = new Array(nums.length + 1).fill(0)
    let res = []
    let set = new Set(nums)
    for(i of set) arr[i] = 1;
    for(let i = 1; i <= nums.length + 1; i++){
        if(arr[i] === 0) res.push(i)
    }
    return res

};


var findDisappearedNumbers1 = function(nums) {
    let newArr = [...new Set(nums)];
    let fullArr = Array.from(new Array(nums.length + 1).keys()).slice(1)
    return fullArr.filter(item =>{
        return newArr.indexOf(item) === -1
    })
}

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
// console.log(findDisappearedNumbers([1,1]))
console.log(findDisappearedNumbers1([1,1]))
