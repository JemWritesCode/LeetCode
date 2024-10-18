/* Stack

Time Complexity: O(n) 
You have to traverse the entire string and put it into the stack

Space Complexity: O(n)
Because you have to store up to n/2 (just the closing brackets) of the string. 
Bracketmap is a constant no matter how big the string is.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    const stack = [];
    for (let c of s){
        if (bracketMap[c])
            stack.push(bracketMap[c]);
        else
            if(stack.pop() !== c) return false;
    }
    return stack.length === 0;
};