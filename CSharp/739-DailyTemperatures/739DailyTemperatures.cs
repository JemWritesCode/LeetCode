// MONOTONIC STACK
// Time Complexity: O(n)
// Just going through each item once and then putting it into the stack.
// Space Complexity: O(n)
// The stack can have up to all the elements in temps.

public class Solution {
    public int[] DailyTemperatures(int[] temps) {
        int[] results = new int[temps.Length];
        Stack<int> stack = new Stack<int>();
        for (int i = 0; i < temps.Length; i++){
            while (stack.Count > 0 && temps[stack.Peek()] < temps[i]){
                int index = stack.Pop();
                results[index] = i - index;
            }
            stack.Push(i);
        }
        return results;
    }
}