/* 
Time Complexity: O(n)
We must visit each node once. 
Space Complexity: O(n)
Best case is O(log n) for a binary tree. Worst case skewed tree all nodes on one side it will be O(n) on the recursion stack.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    const dfs = (node, max) => {
        if (!node) return;
        if (node.val >= max)
            count++;
        let newMax = Math.max(node.val, max);
        dfs(node.left, newMax);
        dfs(node.right, newMax);
    };
    dfs(root, root.val);
    return count;
};