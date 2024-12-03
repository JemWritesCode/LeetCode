/*
Time Complexity: O(n * m)
where n is the number of nodes in the root tree
and m is the number of nodes in the subRoot tree

Space Commplexity: O(h + hs)
where h is the height of root
and hs is the height of subroot

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const areEqual = (node1, node2) =>{
        if (!node1 && !node2) return true;
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        return areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right);
    }

    const dfs = node => {
        if (!node) return false;
        if (areEqual(node, subRoot)) return true;
        return dfs(node.left) || dfs(node.right);
    }
    return dfs(root);
};