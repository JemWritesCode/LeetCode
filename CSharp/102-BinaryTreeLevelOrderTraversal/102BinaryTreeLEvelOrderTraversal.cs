// Breadth First Search

// Time Complexity: O(n) (Analyze Complexity Confirmed)
// We have to visit each node once to add it to the queue. And then also dequeue. 
// So O(2N) and remove constant for O(n)

// Space Complexity: O(n) (Analyze Complexity Confirmed)
// Best case is a skewed binary tree with O(1) because each level just enqueue 1 node.
/* Worse case: Perfect Binary Tree: O((n−1)/2+1) ~ O(n). Imagine there are 7 nodes in the tree. In a perfect binary tree, that would mean 4 nodes on the 3rd level which means the queue will have at most 6/2 + 1 nodes. For 15 nodes, that's 8 nodes on the 4th level, which means the queue will have at most 14/2 + 1 nodes. Regardless, it's still O(n), but could be worth mentioning that you understand the queue never contains more nodes than the max level in a perfect binary tree.
*/

///////////////////////////////////////////////

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
public class Solution {
    public IList<IList<int>> LevelOrder(TreeNode root) {
        IList<IList<int>> result = new List<IList<int>>();
        if (root == null) return result;
        Queue<TreeNode> queue = new Queue<TreeNode>();
        queue.Enqueue(root);
        while (queue.Count > 0){
            int count = queue.Count;
            List<int> level = new List<int>();
            for (int i = 0; i < count; i++){
                TreeNode cur = queue.Dequeue();
                level.Add(cur.val);
                if (cur.left != null)
                    queue.Enqueue(cur.left);
                if (cur.right != null)
                    queue.Enqueue(cur.right);
            }
            result.Add(level);
        }
        return result;
    }
}