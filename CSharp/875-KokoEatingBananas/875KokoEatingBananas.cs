// Binary Search

// Time Complexity: O(nlog(maxPile))
// n is the number of piles, maxPile is the max number of bananas in any pile.

// Space Complexity: O(1)
// just using constant number of variables

public class Solution {
    public int MinEatingSpeed(int[] piles, int h) {
        int left = 1, right = piles.Max();
        int result = right;
        while (left <= right) {
            int middle = left + (right - left) / 2;
            int hours = 0;
            foreach (int pile in piles) 
                hours += (pile + middle - 1) / middle; 
            if (hours <= h) {
                result = middle; 
                right = middle - 1; // Try smaller eating speed
            } else 
                left = middle + 1; // Try larger eating speed
        }
        return result;
    }
}