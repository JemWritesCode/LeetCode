/* Stack
* Time Complexity: O(n)
*   We iterate through the temperatures array once, visiting each element
* Space Complexity: O(n)
*   The result array is the same size as temperatures.
*   The stack can be up to n elements. 
*   So space complexity is O(2n) and reduces to O(n) when we drop the constant.
*************************
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
    const result = Array(temperatures.length).fill(0); 
    const stack = []; 
    for (let i = temperatures.length - 1; i >= 0; i--) {
        // Find the next warmer day by popping cooler or same-day temperatures from the stack
        while (stack.length && temperatures[i] >= temperatures[stack.at(-1)]) 
            stack.pop();
        // If there's a warmer day in the stack, calculate the days difference
        if (stack.length) 
            result[i] = stack.at(-1) - i;
        stack.push(i); 
    }
    return result;
};


