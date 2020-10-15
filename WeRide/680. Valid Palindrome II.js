var validPalindrome = function(s) {

    // check palindrome
    const check = (str)=>{

        // console.log(str)
        if(str.length >= 1){
            // console.log(str, str.split('').reverse().join(''))
            return str === str.split('').reverse().join('');
        }
        return true
    }


    // init l r pointer
    let l = 0;
    let r = s.length - 1;

    // s length is 1 or 0: 'a', ''
    if(r === 0 || r === -1) return true;

    //init delete string index;
    let index = -1

    // traverse string s
    while(l < r){
        if(s[l] === s[r]) {
            l++;
            r--;
        }
        else {
            if(index !== -1) return false;
            else{
                if(check(s.substring(l + 1, r + 1)) === true ||
                    check(s.substring(l, r) )=== true ) return true;
                else return false
            }
        }
    }


    return true;
};

// console.log(validPalindrome('abca'))
console.log(validPalindrome('abc'))
