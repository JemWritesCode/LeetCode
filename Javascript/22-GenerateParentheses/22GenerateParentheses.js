/*
* Time Complexity: O(2^2n)
*   this is the total possible sequences of n pairs of parentheses.
*   However, ChatGPT mentions this isn't quite right either, will need to dig into Catalan Numbers
*   the explaination from ChatGPT is quite complex
* Space Complexity: O(n)
*   we had ( or ) up to 2n times. this reduces to O(n)
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];

    function dfs(openCount, closeCount, s) {
        if (openCount === n && closeCount === n) {
            res.push(s);
            return;
        }
        if (openCount < n) 
            dfs(openCount + 1, closeCount, s + `(`);
        if (closeCount < openCount) {
            dfs(openCount, closeCount + 1, s + `)`);
        }
    }
    dfs(0, 0, "");
    return res;
};