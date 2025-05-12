/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in the s string. We must traverse the entire string to add it to the stack. 
// Space Complexity: O(n) where n is the number of characters in the s string. In the worst case all of the characters are opening brackets so they all end up in the stack. 
var isValid = function(s) {
    const bracketMap = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    const stack = [];
    for (let c of s){
        // if it's an opening parenthses 
        if (bracketMap[c]){  c is the opening parentheses, bracketMap[c] gets the value so the closing.
            stack.push(bracketMap[c]); // push the closing parentheses into the stack.
        }
        else // if it's a closing parenthses
            if(stack.pop() !== c) return false; // pop the last one off the stack (tells us what to expect) and see if it matches c. if it doesn't match expectation this isn't a valid string. 
    }
    return stack.length === 0; // if everything opened closed there should be nothing left in a valid string
};