// #region 3 -- May 12 2025
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

 // Depth First Search, Destructuring assignment and recursion 
 // Time Complexity: O(n) where n is the number of nodes in the tree. We must traverse the entire tree to invert it.
 // Space Complexity: O(h) Each recursive call adds a new frame to the call stack, which can lead to O(h) space complexity, where h is the height of the tree. In the worst case (for a skewed tree) this would be O(n). For a balanced tree it would be O(log n). 
 var invertTree = function(root) {
    if (!root) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
};

// #endregion 

// #region 2 -- Feb 24 2025
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
 
 // Destructuring assignment and recursion.
 // Time Complexity: O(n) Where n is the number of nodes in the tree. We must traverse the entire tree to invert it.
 // Space Complexity: O(h) Each recursive call adds a new frame to the call stack, which can lead to O(h) space complexity, where h is the height of the tree. In the worst case (for a skewed tree), this could be O(n). For a balanced tree, it would be O(log n).

 var invertTree = function(root){
    if (root === null) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}


// #endregion 

// #region 1 -- Feb 20 2025

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
 
 // Destructuring assignment and recursion.
 // Time Complexity: O(n) Where n is the number of nodes in the tree. We must traverse the entire tree to invert it.
 // Space Complexity: O(h) Each recursive call adds a new frame to the call stack, which can lead to O(h) space complexity, where h is the height of the tree. In the worst case (for a skewed tree), this could be O(n). For a balanced tree, it would be O(log n).

 var invertTree = function(root){
    if (root === null) return null;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}

// #endregion 