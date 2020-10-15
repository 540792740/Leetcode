/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // init length of s;
    let ls = s.length - 1

    // ls == 1, return s;
    if(ls === 0) return s

    //init result;
    let res = '';


    // function, check longest sub string;
    const check = (l, r) =>{
        // find length of sub string
        while(l >= 0 && r <= ls){
            if(s[l] === s[r]){
                l--; r++;
            }
            else break;
        }
        console.log(l, r)
        // return length
        return s.substring(l + 1, r);
    }

    // for loop, traverse all element
    for(let i = 0; i < ls; i++){
        // even
        let evenLength = check(i, i + 1)
        if(evenLength.length > res.length) res = evenLength;

        //odd
        let oddLength = check(i, i)
        if(oddLength.length > res.length) res = oddLength;

    }
    return res;
};
// console.log(longestPalindrome('babad'))
console.log(longestPalindrome('a'))
console.log(longestPalindrome('babbb'))
console.log(longestPalindrome('bbbbbb'))

