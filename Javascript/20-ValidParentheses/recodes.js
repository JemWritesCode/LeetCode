// #region Feb 11 2025
/**
 * @param {string} s
 * @return {boolean}
 */

 // Time Complexity: O(n) where n is the number of characters in s. You must traverse the entire string and put it into the stack.
 // Space Complexity: O(n) where n is the number of characters in s. In the worst case all characters are opening brackets so they all end up in the stack.
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

// #endregion