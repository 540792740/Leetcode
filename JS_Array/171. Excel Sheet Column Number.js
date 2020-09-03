/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    //a -> 65
    let index = 0;
    let res = 0;
    for(let i = s.length - 1; i >= 0; i--){
        console.log((s[i].charCodeAt() - 64) * (26 ** index))
        res += (s[i].charCodeAt() - 64) * (26 ** index)
    }
    return res;
};


console.log(titleToNumber("AB"), "result : 28")
// console.log(titleToNumber("ZY"),"result : 701")
