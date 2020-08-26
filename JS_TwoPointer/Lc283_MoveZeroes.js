/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroPointer = 0;
    let ls = nums.length;
    for (let i = 0; i < ls; i++){
        if (nums[i] === 0){
            if (nums[zeroPointer] !== 0) zeroPointer = i;
            // zeroPointer++;
        }
        else{
            let a  = nums[zeroPointer];
            nums[zeroPointer] = nums[i];
            nums[i] = a;
            zeroPointer++
        }
    }
    return nums;
};

a = moveZeroes([0,1,0,3,11])
console.log(a)


function moveZeroes1(nums) {
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === 0){
            nums.splice(i, 1);
            nums.push(0)
        }
    }
    return nums
}
a = moveZeroes1([0,1,0,3,11])
console.log(a)
