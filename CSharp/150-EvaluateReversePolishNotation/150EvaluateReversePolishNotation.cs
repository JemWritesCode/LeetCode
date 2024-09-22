// STACK & HASH SET
// Time Complexity: O(n)
// it's O(2n) because we're just going through the list and may need to pop. remove 2 as constant.
// Space Complexity: O(n)
// n + 4 The stack will store each element of the tokens string array. Remove + 4 constant. 

public class Solution {
    public int EvalRPN(string[] tokens) {
        Stack<int> stack = new Stack<int>();
        HashSet<string> expressions = new HashSet<string>(new[] {"+", "-", "*", "/"});

        foreach (string element in tokens){
            if (!expressions.Contains(element)){
                stack.Push(int.Parse(element));
            } else {
                int num2 = stack.Pop();
                int num1 = stack.Pop();

                if (element == "+") {
                    stack.Push(num1 + num2);
                } else if (element == "-") {
                    stack.Push(num1 - num2);
                } else if (element == "*") {
                    stack.Push(num1 * num2);
                } else {
                    stack.Push(num1 / num2);
                }
            }
        }
        return stack.Pop();
    }
}