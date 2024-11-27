/*
Time Complexity: O(n)
Space Complexity: O(n)
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        [node.left, node.right] = [node.right, node.left];
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return root;
};