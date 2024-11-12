/* Stack
* Time Complexity: O(n)
*   Each element in heights is pushed and popped from the stack at most once.
* Space Complexity: O(n)
*   In the worst case, all indices could be pushed onto the stack (for instance, if heights is strictly increasing).
*/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
       let maxArea = 0;
       const stack = [];
       for (let i = 0; i <= n; i++) {
           const currentHeight = i === n ? 0 : heights[i];
           while (stack.length && heights[stack[stack.length - 1]] >= currentHeight) {
               const height = heights[stack.pop()];
               const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
               maxArea = Math.max(maxArea, height * width);
           }
           stack.push(i);
       }
       return maxArea;
   }