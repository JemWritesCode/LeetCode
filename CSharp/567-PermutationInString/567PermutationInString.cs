// Sliding Window
// Check the frequency of characters in s1 and the current window in s2 that is the size of s1.

// Time Complexity: O(n)
// n is the length of string s2. worst case doesn't contain permutation so you have to go through the whole thing.

// Space Complexity: O(1)
// We use the constant same 2 int arrays no matter the size of the input. 

public class Solution {
    public bool CheckInclusion(string s1, string s2) {
        if (s1.Length > s2.Length) return false;
        int[] s1Count = new int[26];
        int[] windowCount = new int[26];
        for (int i = 0; i < s1.Length; i++){
            s1Count[s1[i] - 'a']++;
            windowCount[s2[i] - 'a']++;
        } 
        bool AreArraysEqual(int[] arr1, int[] arr2){
            for (int i = 0; i < 26; i++){
                if (arr1[i] != arr2[i]) return false;
            }
            return true;
        }

        for (int i = 0; i < s2.Length - s1.Length; i++){
            if (AreArraysEqual(s1Count, windowCount)) return true;
            windowCount[s2[i + s1.Length] - 'a']++;
            windowCount[s2[i] - 'a']--;
        }
        return AreArraysEqual(s1Count, windowCount);
    }
}