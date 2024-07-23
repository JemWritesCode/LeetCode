// HASH MAP
// Time Complexity: O(n)
// Space Complexity: O(n) (Potentially have to add every value to the hash map)
public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> map = new Dictionary<int,int>();
        for (int i = 0; i < nums.Length; i++){
            int complement = target - nums[i];
            if(map.ContainsKey(complement)){
                return new int[] {map[complement], i};
            }
            map[nums[i]] = i; //add the element and it's index to the hash map. the map key is the value from nums, the map value is the index from nums.
        }
        throw new ArgumentException("No solution found.");
    }
}


//=======================================================================
// // BRUTE FORCE - TWO FOR LOOPS
// // Time Complexity: O(N^2)
// // Space Complexity O(1)
// public class Solution {
//     public int[] TwoSum(int[] nums, int target) {
//         for (int i = 0; i < nums.Length; i++){
//             for (int k = i + 1; k < nums. Length; k++){
//                 if (nums[i] + nums[k] == target){
//                     return new int[] {i, k};
//                 }
//             }
//         }
//         throw new ArgumentException("No solution found.");
//     }
// }
//=======================================================================