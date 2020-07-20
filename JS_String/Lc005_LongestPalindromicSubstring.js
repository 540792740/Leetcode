var longestPalindrome = function(s) {
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
                console.log(left + 1, right - left)
                res = s.substring(left + 1, right)
            }
        }
    }
    return res
}

console.log(longestPalindrome('babad'))
console.log(longestPalindrome("cbbd"))
