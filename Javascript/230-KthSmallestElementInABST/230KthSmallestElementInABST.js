/* In-Order Depth First Search

Time Complexity: O(h + k)
height of the tree + k (the number of nodes we have to process to find kth smallest)

Space Complexity: O(h)
where h is height of the tree
stack will need to hold
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = [];
    let count = 1;
    let curr = root;
    while (curr || stack.length){
        while (curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if (count === k) return curr.val;
        count++;
        curr = curr.right;
    }
};