/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ls = strs.length;
    if(ls === 0 )return '';

    let str = strs[0]

    for(let word of strs){
        console.log(word)
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
