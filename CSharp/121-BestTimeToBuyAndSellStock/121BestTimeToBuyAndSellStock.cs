// SLIDING WINDOW
// Time Complexity: O(n)
//  We have to go through potentially all numbers in prices.
// Space Complexity: O(1) 
//  We are just traversing the passed in prices
public class Solution {
    public int MaxProfit(int[] prices) {
        int min = prices[0];
        int profit = 0;
        foreach(int today in prices){
            profit = Math.Max(profit, today - min);
            min = Math.Min(min, today);
        }
        return profit;
    }
}