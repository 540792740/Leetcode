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

    let dic = {};
    let res = [];
    let uniqueChar = 0;

    let ls1 = s.length;
    let ls2 = p.length;
    if(ls1 < ls2) return [];

    for(let i of p){
        if(dic[i] == null) {
            dic[i] = 1;
            uniqueChar++;
        }
        else dic[i] = dic[i] + 1;
    }

    let l = 0;
    let r = 0;
    for(r; r < ls1; r++){
        if(dic[s[r]] !== null) dic[s[r]]--;
        if(dic[s[r]] === 0) uniqueChar--;
        if(uniqueChar === 0) res.push(l);
        if(r - l + 1 === ls2){
            if(dic[s[l]] !== null) dic[s[l]]++;
            if(dic[s[l++]] === 1)uniqueChar++;
        }
    }
    return res;
};

console.log(findAnagrams("cbaebabacd", "abc"))
