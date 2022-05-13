/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let newSet = new Set();
    for (let ele of nums) {
        if (newSet.has(ele)) return true;
        else { newSet.add(ele) }
    }
    return false
};
