/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ls = prices.length
    // Initial return 0 when only 1 element or nothing
    if(ls < 1)return 0;

    // Initial low price and result
    let low = prices[0];
    let res = 0;
    for(let i = 0; i < ls; i++){
        if(prices[i] < low){
            low = prices[i];
        }
        else {
            let temp_price = prices[i] - low;
            console.log(prices[i], temp_price)
            if (temp_price > 0) {
                res += temp_price;
                low = prices[i];
            }
        }
    }
    return res

};

a = maxProfit([7,1,5,3,6,4])

console.log(a)
