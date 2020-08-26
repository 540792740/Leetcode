/**
 * @param {number[]} arr
 * @return {number}
 */
// var minimumMoves1 = function(arr) {
//     let ls = arr.length;
//     let dp = []
//     for(let i of arr){
//         // dp.push(new Array(ls).fill(Number.MAX_VALUE))
//         dp.push(new Array(ls).fill(100))
//     }
//     for(let i = ls - 1; i >= 0; i--){
//         for(let j = i; j < ls; j++){
//             // find palindrome []
//             if(i === j || (arr[i] === arr[j] && j - i === 1)){
//                 dp[i][j] = 1;
//                 continue;
//             }
//             if(arr[i] === arr[j]) dp[i][j] = dp[i + 1][j - 1]
//             for(let k = i; k < j; k++ ) {
//                 dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j])
//             }
//         }
//     }
//     console.log(dp)
//     return dp[0][ls - 1]
// };
//

var minimumMoves = function(arr) {
    let ls = arr.length;
    let dp = []

    // init 2D Array
    for(let i of arr){
        dp.push(new Array(ls).fill(100))
    }

    // Fill arr[i][i] diagonal
    for(let i = 0; i < ls; i++) dp[i][i] = 1

    // Fill size = 2
    for(let i = 0; i < ls - 1; i++) dp[i][i + 1] = arr[i] === arr[i + 1] ? 1: 2;

    // Fill size >= 3;
    for(let size = 3; size <= ls; size++){
        for(let l = 0, r = l + size - 1; r < ls; l++, r++){
            if(arr[l] === arr[r]) dp[l][r] = dp[l + 1][r - 1];
            for(let mid = l; mid < r; mid++){
                dp[l][r] = Math.min(dp[l][r], dp[l][mid] + dp[mid + 1][r])
            }
        }
    }
    return dp[0][ls - 1]
};

// console.log(minimumMoves([1,2]), 'Result: 2')
console.log(minimumMoves([1,3,4,1,5]), 'Result: 3')
