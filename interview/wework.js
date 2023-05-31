var reversStr = function (str) {
    return str.substring(0, Math.ceil(str.length / 2)) + str.substring(Math.ceil(str.length / 2)).split('').reverse().join('');
};
console.log(reversStr('abcdef'), 'abcfed')
console.log(reversStr('abcdefg'), 'abcfed')
console.log(reversStr('a'))
console.log(reversStr('ab'))

