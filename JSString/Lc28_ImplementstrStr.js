/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    let lsn = needle.length;
    let lsh = haystack.length;
    if(lsn === 0) return 0;
    let pn = 0;
    while(pn < lsh - lsn + 1){
        while(pn < lsh - lsn + 1 && haystack[pn] !== needle[0]) ++pn;
        var currLen = 0
        var pL = 0;

        while(pL < lsn && pn < lsh && haystack[pn] === needle[pL]){
            ++pn;
            ++pL;
            ++currLen;
        }
        if(currLen === lsn) return pn - lsn;

        pn = pn - currLen + 1;
    }
    return -1
};

console.log(strStr("hello", "ll"))
//2


var strStr1 = function(haystack, needle) {
    const needleLength = needle.length;
    if(needleLength===0) return 0;
    for(let i=0;i<haystack.length;i++){
        if(haystack.substring(i,i+needleLength)===needle){
            return i;
        }
    }
    return -1;
};

console.log(strStr1("hello", "ll"))
a = 'abcdefg'
console.log(a.substring(0,2))
