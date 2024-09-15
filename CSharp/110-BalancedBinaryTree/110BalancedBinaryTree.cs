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
 // Time Complexity: O(n) (Analyze Complexity Confirmed)
 //// Start at the bottom of the tree because of recursion. You only visit each node once.
 // Space Complexity: O(1)
// We aren't using any additional memory, just traversing what was already given to us.
public class Solution {
    public bool IsBalanced(TreeNode root) {
        if (root == null) return true;
        if (Math.Abs(GetHeight(root.left) - GetHeight(root.right)) > 1) return false;
        return IsBalanced(root.left) && IsBalanced(root.right);
    }

    public int GetHeight(TreeNode root){
        if (root == null) return 0;
        return Math.Max(GetHeight(root.right), GetHeight(root.left)) + 1;
    }
}