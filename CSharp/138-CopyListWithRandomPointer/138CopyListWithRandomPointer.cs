/*
// Definition for a Node.
public class Node {
    public int val;
    public Node next;
    public Node random;
    
    public Node(int _val) {
        val = _val;
        next = null;
        random = null;
    }
}
*/

// HASH MAP && TWO PASSES

// Time Complexity: O(n)
// each node is visited twice times but it's still linear (2n reduced to On?)

// Space Complexity: O(n)
// Each node has to be stored in the hash map. 
public class Solution {
    public Node CopyRandomList(Node head) {
     if (head == null) return null;
     Dictionary<Node, Node> oldToNew = new Dictionary<Node,Node>();
     Node curr = head;
     while (curr != null){
        oldToNew[curr] = new Node(curr.val);
        curr = curr.next;
     }   
     curr = head;
     while (curr != null){
        oldToNew[curr].next = curr.next != null ? oldToNew[curr.next] : null;
        oldToNew[curr].random = curr.random != null ? oldToNew[curr.random] : null;
        curr = curr.next;
     }
     return oldToNew[head];
    }
}