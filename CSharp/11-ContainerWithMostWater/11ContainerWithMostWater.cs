// Two Pointers

// Time Complexity: O(n)
// we have to visit each n elements of height once.

// Space Complexity: O(1)
// We are just traversing the height array that was passed in so no extra memory needed.

public class Solution {
    public int MaxArea(int[] height) {
        int maxArea = 0;
        int left = 0, right = height.Length - 1;
        while (left < right){
            int area = (right - left) * Math.Min(height[left], height[right]);
            maxArea = Math.Max(maxArea, area);
            if(height[left] < height[right]) left++;
            else right--;
        }
        return maxArea;
    }
}