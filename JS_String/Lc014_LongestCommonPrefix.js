/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ls = strs.length;
    if(ls === 0 )return '';

    let str = strs[0]

    for(let word of strs){
        while(word.indexOf(str) !== 0){
            str = str.substring(0, str.length - 1);
            if(str.length === 0) break;
        }
    }
    return str
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
