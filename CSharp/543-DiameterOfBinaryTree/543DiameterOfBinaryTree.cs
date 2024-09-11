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

 // RECURSION 
 // Time Complexity: O(n)
 //// You need to visit each node in the tree to get height. 
 // Space Complexity: O(h) -- this can be O(logn) for a balanced tree or O(n) for nonbalanced tree
public class Solution {
    public int DiameterOfBinaryTree(TreeNode root) {
        int max = 0;
        GetHeight(root);
        return max;

        int GetHeight(TreeNode node){
            if (node == null) return -1;
            int leftHeight = 1 + GetHeight(node.left);
            int rightHeight = 1 + GetHeight(node.right);
            max = Math.Max(max, leftHeight + rightHeight);
            return Math.Max(leftHeight, rightHeight);
        }
    }
}