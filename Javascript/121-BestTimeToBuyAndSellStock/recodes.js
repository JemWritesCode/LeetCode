// #region 3 -- Feb 18 2025
/**
 * @param {number[]} prices
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of elements in the prices array. We must traverse the entire array to check if there's a better profit to be found.
// Space Complexity: O(1). No matter the size of the prices array we just need the buy and profit variables.
var maxProfit = function(prices){
    let buy = prices[0],
        profit = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < buy)
            buy = prices[i];
        else if (prices[i] - buy > profit)
            profit = prices[i] - buy;
    }
    return profit;
}
// #endregion 
// #region 2 --  Feb 11 2025
// Time Complexity: O(n) where n is the number of elements in the prices array. we have to traverse the entire prices array to find the best profit.
// Space Complexity: O(1) no matter the size of the prices array we just need the buy and profit variables.
var maxProfit = function(prices){
    let buy = prices[0],
        profit = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < buy)
            buy = prices[i];
        else if (prices[i] - buy > profit)
            profit = prices[i] - buy;
    }
    return profit;
}

// #endregion

// #region 1 -- Jan 19 2025
/*
* @param{number[]} prices
* @return {number}
*/
var maxProfit = function(prices){
    let buy = prices[0],
        profit = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < buy)
            buy = prices[i];
        else if (prices[i] - buy > profit)
            profit = prices[i] - buy;
    }
    return profit; 
}
// #endregion