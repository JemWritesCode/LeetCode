public class Solution {
    public bool IsAnagram(string s, string t) {
        // sort them both and see if they're the same?
        String.Concat(s.OrderBy(c =>c));
        String.Concat(t.OrderBy(c =>c));
        console.write(s);
        console.write(t);
        return Equals(s,t);
    }
}