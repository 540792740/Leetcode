/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
    let map = {}
    for(let char of s){
        map[char] ? map[char]++ : map[char] = 1
    }
    for(let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }

}


var firstUniqChar1 = function(s) {
    let res = '';
    let ls = s.length
    if(ls <= 0) return -1
    let map = new Map()
    for(let i = 0; i < ls; i++){
        if(map.get(s[i]) === undefined){
            res += s[i];
            map.set(s[i], 1)
        }
        else if(map.get(s[i]) === 1){
            map.set(s[i], 2)
        }
    }
    let resStr = ''
    for(let i = 0; i < res.length; i++){
        if(map.get(res[i]) === 1){
            resStr = res[i]
            break;
        }
    }
    for(let i = 0; i < ls; i++){
        if(s[i] === resStr) return i
    }
    return -1
};

// console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('cc'))
