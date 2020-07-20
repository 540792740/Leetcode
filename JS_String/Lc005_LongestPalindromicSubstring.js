var longestPalindrome = function(s) {
    let res = '';
    let ls = s.length
    const helper = (l, r)=>{
        while(l > -1 && r < ls && s[l] === s[r]){
            l--;
            r++;
        }
        return s.substring(l + 1, r);
    }
    for(let i = 0; i < ls; i++) {
        //Even
        let temp_s = helper(i, i + 1)
        if(temp_s.length > res.length) res = temp_s;

        //Odd
        temp_s = helper(i, i)
        if(temp_s.length > res.length) res = temp_s;
    }
    return res

}


var longestPalindrome1 = function(s) {
    let ls = s.length;
    if (ls <= 1) return s;
    let maxLen = 0
    let res = '';
    for(let i = 0; i < ls; i++){
        for(let j = 0; j < 2; j++){
            // Odd result or Even Result
            let left = i;
            let right = i + j;
            while(s[left] && s[right] && s[left] === s[right]){
                left--;
                right++;
            }
            if(right - left + 1 > maxLen){
                maxLen = right - left + 1
                res = s.substring(left + 1, right)
            }
        }
    }
    return res
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome("cbbd"))
