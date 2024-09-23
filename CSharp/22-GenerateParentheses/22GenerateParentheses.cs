// RECURSIVE BACKTRACKING
// Neetcode has this under "Stacks" but he even says in the youtube comments he probably should have it in Backtracking.

// Time Complexity: O(2^n) (Analyze Complexity Confirmed)
// Space Complexity: O(n) (Analyze Complexity Confirmed)

public class Solution {
    public IList<string> GenerateParenthesis(int n) {
        List<string> result = new List<string>();
        Backtrack(ref result, n, "(");
        return result;
    }
    
    public void Backtrack(ref List<string> result, int n, string str = ""){
        int leftBrackets = str.Count(ch => ch == '(');
        if (leftBrackets > n || str.Count(ch => ch == ')') > leftBrackets) return;
        if (str.Length == n*2){
            result.Add(str);
            return;
        }
        Backtrack(ref result, n, str + "(");
        Backtrack(ref result, n, str + ")");
    }
}