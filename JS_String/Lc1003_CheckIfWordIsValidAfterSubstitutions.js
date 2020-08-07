/**
 * @param {string} S
 * @return {boolean}
 */

var isValid1 = function(S) {
    let stack = '';
    for(let char of S){
        console.log(stack)

        if(char === 'c'){
            if(stack.slice(-2) !== 'ab'){
                return false
            }
            stack = stack.substring(0, stack.length - 2);
        }
        else stack += char;
    }
    return stack.length === 0

}

// Slow
var isValid = function(S) {
    let s1 = ''
    while(s1 !== S){
        s1 = S
        S = S.replace('abc', '');
    }
    return S === ''
};

a = 'abcdefg'
console.log(a.substring(0, a.length - 2))

console.log(isValid1("aabcbc"))
