// FAST AND SLOW POINTERS
// Time Complexity: O(n) (Analyze Complexity Confirmed)
// Fast pointer needs to go to the end of the list
// Space Complexity: O(1) (Analyze Complexity Confirmed)
// We need a dummy node and two pointers but just one of each no matter the size.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

public class Solution {
    public ListNode RemoveNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode fast = dummy;
        ListNode slow = dummy;
        for (int i = 0; i <= n; i++) 
            fast = fast.next; // Move fast pointer n+1 steps ahead to maintain a gap of n between fast and slow
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return dummy.next;
    }
}