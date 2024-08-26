// //////////////////////////////////////////
// LEFT RIGHT aka PREFIX SUFFIX
// Time complexity: O(n) (Analyze Complexity confirmed)
// Space Complexity: O(n)
public class Solution{
    public int[] ProductExceptSelf(int[] nums){
        int[] result = new int[nums.Length];

        int left = 1;
        for (int i = 0; i < nums.Length; i++){
            result[i] = left;
            left *= nums[i];
        }

        int right = 1;
        for (int i = nums.Length - 1; i >= 0; i--){
            result[i] *= right;
            right *= nums[i];
        }

        return result;
    }
}

// //////////////////////////////////////////
// // DIVISION 
// // Technically not an answer since we're told to not divide
// // problem is it could divide by 0 (which is mathematically undefined)
//   Time Complexity: O(n)
//   Space Complexity: O(n)
// public class Solution {
//     public int[] ProductExceptSelf(int[] nums){
//         int[] result = new int[nums.Length];
//         int allMultiplied = 1;
//         for(int i = 0; i < nums.Length; i++){
//             allMultiplied *= nums[i];
//         }
//         for (int i = 0; i < nums.Length; i++){
//             result[i] = allMultiplied / nums[i];
//         }
//         return result;
//     }
// }

// //////////////////////////////////////////
// // BRUTE FORCE
// // technically not an answer because it exceeds O(n) time complexity
// // Time Complexity: O(n^2)
// // Space Complexity: O(n)

// public class Solution {
//     public int[] ProductExceptSelf(int[] nums) {
//         int[] result = new int[nums.Length];
//         for(int i = 0; i < nums.Length; i++){
//             result[i] = 1; // otherwise it will multiply by 0 to start
//             for (int k = 0; k < nums.Length; k++){
//                 if (k != i){
//                     result[i] *= nums[k];
//                 }
//             }
//         }
//         return result;
//     }
// }