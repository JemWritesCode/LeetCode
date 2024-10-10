// PROBLEM EXPLANATION
// By "lowest" in this question they mean the "Deepest" node that both p and q share as a parent.

// Once you reach a point where you see that the two nodes p and q are going to be in different sub branches
// aka the "split" you've found the Lowest Common Ancestor. 

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */

/////////////////////////////////////////////////////////////////////

// ITERATIVE METHOD 

// Time Complexity: O(n)
// O(h) where h is the height of the tree. in a balanced binary tree this will be O(logn) but in an unbalanced 
// tree where everything could potentially be on one side it could be up to all nodes in the tree.

// Space Complexity: O(1)
// No extra space is used for the call stack like in the recusrive solution. 
// we are just traversing the tree and checking values. 

public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q){
        while (root != null){
            if (p.val > root.val && q.val > root.val){ // both in right subtree
                root = root.right;
            } else if (p.val < root.val && q.val < root.val){ // both in left subtree
                root = root.left;
            } else return root; // we found the split (LCA)
        }
        return null; // No LCA found
    }
}
/////////////////////////////////////////////////////////////////////

// RECURSIVE METHOD

// Time Complexity: O(logn) (Analyze Complexity Confirmed)
// You only have to go through one side of the tree because this is a binary search tree so 
// left child is smaller and right child is bigger.
// and as soon as you see that p and q  are in different sub branches that's the LCA. 

// Space Complexity: O(n) (Analyze Complexity Confirmed)
// In worst case the recursive call stack will be equal to the height of the tree. 
// In a balanced Binary Search Tree height is log(N) so we'd get O(logN) space complexity.F
// but in an unblanced BST it could be height of N (all nodes to the right) so we could have to get to O(N)

public class Solution {
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (p.val > root.val && q.val > root.val)
            return LowestCommonAncestor(root.right, p, q);
        else if (p.val < root.val && q.val < root.val)
            return LowestCommonAncestor(root.left, p, q);
        else
            return root;
    }
}
///////////////////////////////////////////////////////