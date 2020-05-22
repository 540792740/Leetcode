/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let res = 0
    while (left < right){
        res = numbers[left] + numbers[right];
        if(res === target){return [left + 1, right + 1]}
        else if(res > target){
            right--;
        }
        else{
            left++;
        }
    }
};
