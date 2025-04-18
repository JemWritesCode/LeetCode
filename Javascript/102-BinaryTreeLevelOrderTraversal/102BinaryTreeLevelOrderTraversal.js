/* 
Time Complexity : O(n)
Space Complexity : O(n)
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let arr = []

    const traverseNode = (root, index) => {
        if (!root)
            return;
        if (!arr[index]) 
            arr.push([]);
        arr[index].push(root.val);
        traverseNode(root.left, index + 1);
        traverseNode(root.right, index + 1);
    }
    traverseNode(root, 0);
    return arr;
};