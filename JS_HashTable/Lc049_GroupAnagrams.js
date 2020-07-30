/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map()
    for(let value of strs){
        let letter =  value.split('').sort().join('')
        map[letter] ? map[letter].push(value) : map[letter] = [value];
    }
    return Object.values(map)

};


var groupAnagrams1 = function(strs) {
    function charCounter(str) {
        const arr = Array(26).fill(0);
        for (let c of str) arr[c.charCodeAt() - 'a'.charCodeAt()]++;
        return JSON.stringify(arr)
    }

    let map = new Map()
    for (let value of strs) {
        let letter = charCounter(value)
        map[letter] ? map[letter].push(value) : map[letter] = [value];
    }
    return Object.values(map)
    // return [...map.values()]
}

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams1(["eat", "tea", "tan", "ate", "nat", "bat"]))
