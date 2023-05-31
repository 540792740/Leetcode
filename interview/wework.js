var reversStr = function (str) {
    return str.substring(0, Math.ceil(str.length / 2)) + str.substring(Math.ceil(str.length / 2)).split('').reverse().join('');
};
var reversStr2 = function (str) {
    let res = str.substring(0, Math.ceil(str.length / 2));
    let rightStr = '';
    let left = Math.ceil(str.length / 2);
    let right = str.length - 1;
    res[1] = 's';
    while (left < right) {
        res += str[right];
        rightStr = str[left] + rightStr;
        left++;
        right--;
    }
    if (left === right) {
        res += str[left];
    }
    return res + rightStr;
};
console.log(reversStr2('abcdef'), 'abcfed')
console.log(reversStr2('abcdefg'), 'abcfed')
console.log(reversStr2('a'))
console.log(reversStr2('ab'))

