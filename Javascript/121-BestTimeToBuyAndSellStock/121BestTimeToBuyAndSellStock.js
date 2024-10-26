/*

Time Complexity: O(n)
Must go through every element of prices.

Space Complexity: O(1)
no matter the size of prices you just need the buy and profit variables.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < buy)
            buy = prices[i];
        else if (prices[i] - buy > profit) {
            profit = prices[i] - buy;
        }
    }
    return profit;
};