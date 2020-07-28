/**
 * @param {number} n
 * @return {number}
 * Use Sieve of Eratosthenes Algorithm
 * Space Complexity O(n)
 * Time Complexity O(nloglogn)
 */



var countPrimes = function(n) {
    let hash = new Array(n).fill(true);
    hash[0] = false;
    hash[1] = false;
    for(let i = 2; i * i < n; i++){
        if(hash[i]){
            for(let j = i * i; j < n; j += i){
                hash[j] = false;
            }
        }
    }
    return hash.filter(val => val).length
}




//trash
var countPrimes1 = function(n) {
    if (n < 2) return 0
    if(n === 2) return 1
    function primeCheck(num) {
        for(let i = 2; i <= num / 2; i++){
            if(num % i === 0) return false
        }
        return true
    }
    let res = 0;
    for(let i = 2; i <= n; i++){
        if(primeCheck(i)) {
            res++;
        }
    }
    return res
};


console.log(countPrimes(499979))
