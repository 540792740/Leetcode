/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--){
        if(++digits[i] > 9) digits[i] = 0;
        else return digits
    }
    digits.unshift(1);
    return digits
};

a = plusOne([1,2,3])
a = plusOne([9,9])
console.log(a)
