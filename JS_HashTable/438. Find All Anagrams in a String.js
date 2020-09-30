/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 *
 *  abc => Set {acb, bac, bca, cba, cab}
 *  check all.
 *
 */
var findAnagrams = function(s, p) {
    const findAnagrams = (p_rem, str) => {
        console.log(str)
        if(p_rem.length === 0) {
            set.add(str)
        }
        for(let i in p_rem){
            let strTemp = str + p_rem[i];
            let temp = p_rem.slice(0, i) + p_rem.slice(i + 1)
            findAnagrams(temp, strTemp)
        }
    }
    let set = new Set();
    let p_anagrams = findAnagrams(p, '');
    console.log(set)

};

console.log(findAnagrams("cbaebabacd", "abc"))
