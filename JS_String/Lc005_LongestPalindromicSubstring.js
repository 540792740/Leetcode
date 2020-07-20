var longestPalindrome = function(s) {
    let ls = s.length;
    if (ls <= 1) return s;
    for(let i = 0; i < ls; i++){
        for(let j = 0; j < 2; j++){
            // Odd result or Even Result
            let left = i;
            let right = i + j;
            while(s[left] && s[right] && s[left] === s[right]){

            }
        }
    }
}

console.log(longestPalindrome('babad'))
