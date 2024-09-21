/** LEETCODE SAYS
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.Push(val);
 * obj.Pop();
 * int param_3 = obj.Top();
 * int param_4 = obj.GetMin();
 */
// TUPLE 
// Using a tuple instead of two separate stacks simplifies the code by combining the value and it's min into a single structure.
// Time Complexity O(1) (analyze complexity confirmed)
// As required of this problem.
// Space Complexity O(n) (analyze complexity confirmed)
// we will need to store up to every item in the stack. 
public class MinStack {
    Stack<(int val, int minVal)> stack;
    int minVal = int.MaxValue;

    public MinStack() {
        stack = new Stack<(int val, int minVal)>();
    }
    
    public void Push(int val) {
        if (minVal > val)
            minVal = val;
        stack.Push((val, minVal));
    }
    
    public void Pop() {
        stack.Pop();
        minVal = stack.Count > 0 ? stack.Peek().minVal : int.MaxValue; 
    }
    
    public int Top() {
        return stack.Peek().val;
    }
    
    public int GetMin() {
        return stack.Peek().minVal;
    }
}


//////////////////////////////////////////////////////////////////

// // TWO STACKS 
// // You have a second stack that keeps track of what the min is at that point in the stack.
// // Time Complexity: O(1)
// // A requirement for this problem and the whole reason we need the 2nd stack for min.
// // Space Complexity: O(n)
// // you initialize the stack and also need a 2nd stack to keep track of min.
// //so it's O(2n) and remove constant of 2 for O(n).
 
// public class MinStack {
//     Stack<int> stack;
//     Stack<int> minStack;
//     public MinStack() {
//         stack = new Stack<int>();
//         minStack = new Stack<int>();
//     }
    
//     public void Push(int val) {
//         stack.Push(val);
//         if(minStack.Count == 0)
//             minStack.Push(val);
//         else{
//             val = Math.Min(minStack.Peek(), val);
//             minStack.Push(val);
//         }
//     }
    
//     public void Pop() {
//         stack.Pop();
//         minStack.Pop();
//     }
    
//     public int Top() {
//         return stack.Peek();
//     }
    
//     public int GetMin() {
//         return minStack.Peek();
//     }
// }

