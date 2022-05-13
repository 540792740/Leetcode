/**
 * @param {number[]} prices
 * @return {number}
 * [7,1,5,3,6,4] : Output: 5
 */
var maxProfit = function(prices) {
    // 1. make sure there is 2 more number
    if (prices.length < 2) { return 0}

    // 2. Initial result, min price.
    let res = 0;
    let minPrice = prices[0];

    // 3. Traverse the array:
    for ( let i = 1; i < prices.length; i++){
        let tempRes = prices[i] - minPrice;
        minPrice = Math.min(minPrice, prices[i]);
        res = Math.max(res, tempRes);
    }

    return res;
};
console.log(maxProfit([7,1,5,3,6,4]))
