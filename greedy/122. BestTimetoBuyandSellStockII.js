/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // 贪心算法
    if (prices.length <= 1) return 0
    let res = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > minPrice) res += prices[i] - minPrice  // 价格上涨，卖！
        minPrice = prices[i]; // 价格下降，更新minPrice！(此刻合并if else都有的部分)
    }
    return res
};
a = maxProfit([7, 1, 5, 3, 6, 4])
console.log(a)
