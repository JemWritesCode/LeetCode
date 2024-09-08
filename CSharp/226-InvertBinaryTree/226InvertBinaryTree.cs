/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
///////////////////////////////////////////////////////
// RECURSION - Depth First Search (DFS)

// Time Complexity: O(n)
//// You must visit each node for the swap.

// Space Complexity: O(H)
/* 
H is the height of the binary tree. The recursion stack will hold at most 
H function calls at any given time. In worst case for a skewed tree
Like a linked list H will be n giving us O(n)
Best case balanced binary tree h will be log(n) so we get O(log n)
*/
public class Solution {
    public TreeNode InvertTree(TreeNode root) {
        if (root == null) return null;

        TreeNode temp = root.left;
        root.left = InvertTree(root.right);
        root.right = InvertTree(temp);
        return root;
    }
}