/* Breadth First Search with a Queue
Time Complexity: O(n)
We need to visit every node in the linked list.
Space Complexity: O(n)
We need to create a queue. In worst case (a perfectly balanced binary tree) it will hold n/2 nodes at a time.
This will simplify to O(n) when we drop the constant.
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    const q = new Queue();

    q.push(root);

    while (!q.isEmpty()) {
        let rightSide = null;
        const qLength = q.size();

        for (let i = 0; i < qLength; i++) {
            const node = q.pop();
            if (node) {
                rightSide = node;
                q.push(node.left);
                q.push(node.right);
            }
        }
        if (rightSide) 
            result.push(rightSide.val);
    }
    return result;
};