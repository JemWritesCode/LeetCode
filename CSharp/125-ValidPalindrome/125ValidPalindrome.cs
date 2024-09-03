// FOR LOOP
// Time Complexity: O(n) (Analyze Complexity Confirmed)
// You have to go through up to every letter in the string.
// Space Complexity: O(1)
// We aren't allocating any extra space, just traversing the string given.

public class Solution {
    public bool IsPalindrome(string s) {
        for (int i = 0, j = s.Length - 1; i < j;){
            if (!Char.IsLetterOrDigit(s[i])){i++; continue;}
            if (!Char.IsLetterOrDigit(s[j])){j--; continue;}
            if(Char.ToLower(s[i]) != Char.ToLower(s[j])){return false;}
            i++;
            j--;
        }
        return true;
    }
}