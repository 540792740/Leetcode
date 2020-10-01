/**
 * @param {number[]} coins
 * @param {number} amount1
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let res = new Array(amount + 1).fill(amount + 1);
    res[0] = 0;
    for(let i = 1; i < amount + 1; i++){
        for(let c of coins){
            if(i >= c) res[i] = Math.min(res[i], res[i - c] + 1);
        }
        console.log(res)

    }
    return res[amount] === amount + 1 ? -1 : res[amount];
}


// Worked but slow;
var coinChange1 = function(coins, amount) {
    // helper function, DFS find result
    const helper = (remain, i, count) =>{
        if(remain === 0) res = Math.min(count, res);
        for(i; i < coins.length; i++){

            // if remain smaller than smallest coin;
            if(remain < coins[coins.length - 1]) return;
            helper(remain - coins[i], i, count + 1);
        }
    }

    if (amount === 0) return 0;
    coins.sort((x, y) => y - x);
    let index = 0;
    let res = amount + 1;
    helper(amount, index, 0);

    // return size of the set.
    return res === amount + 1 ? -1 : res;
};

console.log(coinChange([1,2,5], 11))
// console.log(coinChange([2,5], 1))
// console.log(coinChange([2,5,10,1], 27))
// console.log(coinChange([186,419,83,408], 6249))
// console.log(coinChange(    [486,156,330,192,457,71,99], 8175))
