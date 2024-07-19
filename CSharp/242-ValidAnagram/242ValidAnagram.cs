/* SORT AND COMPARE ARRAYS
Time Complexity: O(N Log N)
Space Complexity: O(1)
*/
public class Solution {
 public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        char[] ss = s.ToCharArray();
        char[] tt = t.ToCharArray();
        Array.Sort(ss);
        Array.Sort(tt);
        return ss.SequenceEqual(tt);
    }
}

//// Tests
// Console.WriteLine(IsAnagram("cat", "rat").ToString());
// Console.WriteLine(IsAnagram("tar", "rat").ToString());