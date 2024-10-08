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
 //////////////////////////////////////////////

 // DEPTH FIRST SEARCH
 // Time Complexity: O(n) (Analyze Complexity Verified)
//// You have to potentially go through every node to check depth
 // Space Complexity: O(h) or in worst case O(n)
public class Solution {
    public int MaxDepth(TreeNode root) {
        if (root == null) return 0; 

        var leftMaxDepth = MaxDepth(root.left);
        var rightMaxDepth = MaxDepth(root.right);
        return Math.Max(leftMaxDepth, rightMaxDepth) + 1; 
    }
}