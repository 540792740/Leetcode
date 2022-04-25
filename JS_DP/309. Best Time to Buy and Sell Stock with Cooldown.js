/**
 * @param {number[]} prices
 * @return {number}
You are given an array prices where prices[i] is the price of a given stock on 
the ith day.

Find the maximum profit you can achieve. You may complete as many
transactions as you like (i.e., buy one and sell one share of the 
stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day 
(i.e., cooldown one day).

Note: You may not engage in multiple transactions simultaneously
(i.e., you must sell the stock before you buy again).


 */
var maxProfit = function (prices) {
  // 根据动作划分
  let coolDown = 0; // do nothing today: sold yesterday
  let hold = Number.MIN_SAFE_INTEGER; // hold today
  let sold = 0; // sold stock

  for (let i = 0; i < prices.length; i++) {
    let tempCoolDown = Math.max(coolDown, sold);  // 昨天卖掉， 或者再次cooldown
    let tempHold = Math.max(hold, coolDown - prices[i]) // hold就是买入或者不动
    let tempSold = hold + prices[i] // 卖掉就是涨钱
    coolDown = tempCoolDown;
    hold = tempHold;
    sold = tempSold;
  }

  return Math.max(sold, coolDown)
};



console.log(maxProfit([1, 2, 3, 0, 2]), "ANS:3");
console.log(maxProfit([1]));