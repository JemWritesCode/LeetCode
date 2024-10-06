// Binary Search

// Time Complexity: O(log(m * n)) (Analyze Complexity Confirmed)
// cut the entire grid in half each time you binary search.
// basically we treat it as one long array

// Space Complexity: O(1) (Analyze Complexity Confirmed)
// just traversing the array that is passed in

public class Solution {
    public bool SearchMatrix(int[][] matrix, int target) {
        int m = matrix.Length;
        int n = matrix[0].Length;
        int left = 0, right = m * n - 1;

        while (left <= right){
            int mid = left + (right - left) / 2;
            int mid_val = matrix[mid/n][mid % n];
            if (mid_val == target) return true;
            else if (mid_val < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }
}