/*
Time Complexity: O(n)
Where n is the number of nodes in the binary tree.
Space Complexity: O(h)
Where h is the height of the binary tree.
*/

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
 * @return {boolean}
 */
var isBalanced = function (root) {
    let isBalanced = true;
    maxDepth(root);
    return isBalanced;

    function maxDepth (node){
        if (!node || !isBalanced) return 0;
        let leftHeight = maxDepth(node.left);
        let rightHeight = maxDepth(node.right);
        if (Math.abs(leftHeight - rightHeight) > 1) 
            isBalanced = false;
        return Math.max(leftHeight, rightHeight) + 1;
    }
};