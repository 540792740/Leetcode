/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let zeroPointer = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (zeroPointer === -1) {
                zeroPointer = i;
            }
        } else {
            if (zeroPointer !== -1) {
                nums[zeroPointer] = nums[i];
                nums[i] = 0;
                zeroPointer++
            }
        }
    }
};