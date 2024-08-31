// STACK 
// Time Complexity: O(n) (Analyze Complexity verified) 
//      (must go through each char in string)
// Space Complexity: O(n) 
//      (We have to store up to all of s in a new stack)

// For each opening bracket we hit in s we put a closing bracket into a stack.
// when we hit a closing bracket in s we check that it matches what is popped
// off the top of the stack.
// the stack keeps in order what the closing brackets are supposed to be.

public class Solution {
    public bool IsValid(string s) {
        var k = new Stack<char>();
        foreach (char c in s){
            if(c == '('){k.Push(')');}
            else if(c == '{'){k.Push('}');}
            else if(c == '['){k.Push(']');}
            else if (k.Count == 0 || c != k.Pop()) return false;
        }
        return k.Count == 0;
    }
}


// // REPLACE
// Time Complexity: O(n^2) (Analyze Complexity Confirmed) (you have to keep replacing in a loop?)
// Space Complexity: O(n)? (I don't think it takes extra room since you work off the same string)

// Just keep going through in a loop and replacing every closed set with nothing.


// public class Solution {
//     public bool IsValid(string s) {
//         while (s.Contains("()") || s.Contains("[]") || s.Contains("{}"))
//         {
//             s = s.Replace("()", "").Replace("[]", "").Replace("{}", "");
//         }

//         return s.Length == 0;
//     }
// }