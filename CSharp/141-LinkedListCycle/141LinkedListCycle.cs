// Fast and Slow Pointers
 
 // Time Complexity: O(n) (Analyze Complexity Confirmed)
 // Each node could be visited once.

 // Space Complexity: O(1) (Analyze Complexity Confirmed)
 // constant space is used.
///////////////////////////////////////////////////////////
 /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        ListNode slow_pointer = head, fast_pointer = head;
        while (fast_pointer != null && fast_pointer.next != null) {
            slow_pointer = slow_pointer.next;
            fast_pointer = fast_pointer.next.next;
            if (slow_pointer == fast_pointer) return true;
        }
        return false;
    }
}
