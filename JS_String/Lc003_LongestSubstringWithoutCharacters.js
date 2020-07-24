/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    ls = s.length;
    if(ls <= 1) return ls;
    let resStr = '';
    let res = 0;
    for(let i = 0; i < ls; i++){
        let index = resStr.indexOf(s[i]);
        if(index > -1) resStr =  resStr.substring(index + 1);
        resStr += s[i];
        res = Math.max(res, resStr.length)

    }
    return res
};


console.log(3, lengthOfLongestSubstring("abcabcbb"))
console.log(1, lengthOfLongestSubstring( "bbbbb"))
console.log(3, lengthOfLongestSubstring( "pwwkew"))
console.log(5, lengthOfLongestSubstring(    "ckilbkd"))
console.log(2, lengthOfLongestSubstring("aab"))
console.log(3, lengthOfLongestSubstring("dvdf"))
console.log(3, lengthOfLongestSubstring("abcabcbb"))
console.log(6, lengthOfLongestSubstring("wobgrovw"))
console.log(7, lengthOfLongestSubstring("utyodfcyzmyufyhp"))
