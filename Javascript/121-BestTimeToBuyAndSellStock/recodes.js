// #region 5 -- July 14 2025
// I had to troubleshoot a bit but got it on my own. I could write it more cleanly though. But I suppose in some ways the verbosity lends to clarity.

/**
 * @param {number[]} prices
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of elements in the prices array. We must visit each element to find the best buy and sell days.
// Space Complexity: O(1) No matter the size of the prices array we just need the buy,sell, and maxProfit pointers. We traverse the prices array in place.
var maxProfit = function (prices) {
  let maxProfit = 0,
    buy = 0,
    sell = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[sell] - prices[buy] > maxProfit)
      maxProfit = prices[sell] - prices[buy];
    if (prices[i] < prices[buy]) buy = i;
    sell++;
  }
  return maxProfit;
};

// #endregion

// #region 4 -- May 18 2025
/**
 * @param {number[]} prices
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of elements in the pricing array. We must go through the entire array to look for the best profit.
// Space Complexity: O(1) We traverse the prices array in-place. No matter the size of the prices array passed in we just need the buy and profit variables.
var maxProfit = function (prices) {
  let buy = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else if (prices[i] - buy > profit) profit = prices[i] - buy;
  }
  return profit;
};

// #endregion

// #region 3 -- Feb 18 2025

/**
 * @param {number[]} prices
 * @return {number}
 */

// Time Complexity: O(n) where n is the number of elements in the prices array. We must traverse the entire array to check if there's a better profit to be found.
// Space Complexity: O(1). No matter the size of the prices array we just need the buy and profit variables.
var maxProfit = function (prices) {
  let buy = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else if (prices[i] - buy > profit) profit = prices[i] - buy;
  }
  return profit;
};
// #endregion

// #region 2 --  Feb 11 2025
// Time Complexity: O(n) where n is the number of elements in the prices array. we have to traverse the entire prices array to find the best profit.
// Space Complexity: O(1) no matter the size of the prices array we just need the buy and profit variables.
var maxProfit = function (prices) {
  let buy = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else if (prices[i] - buy > profit) profit = prices[i] - buy;
  }
  return profit;
};

// #endregion

// #region 1 -- Jan 19 2025
/*
 * @param{number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0],
    profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    else if (prices[i] - buy > profit) profit = prices[i] - buy;
  }
  return profit;
};
// #endregion
