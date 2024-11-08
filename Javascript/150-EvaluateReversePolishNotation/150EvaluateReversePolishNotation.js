/* Stack
Time Complexity: O(n)
You must go through every token in tokens to add it to the stack.
Space Complexity: O(n)
we need the extra stack variable to hold results and in worst case we could have 
many operands before we find an operator. basically all of them except the last could be operands.
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b, 
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a/b)
    };
    for (let token of tokens){
        if (ops[token]){
            let b = stack.pop();
            let a = stack.pop();
            stack.push(ops[token](a,b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
};