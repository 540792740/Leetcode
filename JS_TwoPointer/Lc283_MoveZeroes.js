/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * move zero:
 * [1,0,1,0,3,12]
 *
 * [1,1,0,0,3,12] index_zero : 1, swap zero and next value, zero_index++
 * [1,1,3,0,0,12] index_zero : 2, swap....
 * [1,1,3,12,0,0] inzer_zero : 3, swap 3 and next value
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
