var plusOne = function (digits) {
    let ls = digits.length - 1;
    let add = 1; // 进位
    while (ls >= 0 && add == 1) {
        // 当前位是 9， 进位继续
        if (digits[ls] == 9) digits[ls] = 0
        // 当前位不是9， 返回结果
        else {
            digits[ls] += 1
            add = 0;
        }
        ls--;
    }
    if (add == 1) digits.unshift(1)
    return digits
};
var a = plusOne([1, 2, 3])
a = plusOne([9, 9])
console.log(a)
