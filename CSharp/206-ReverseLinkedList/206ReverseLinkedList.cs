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
///////////////////////////////////////////////////////////////////////////
 // ITERATIVE
 // Time Complexity: O(n) (Analyze Complexity confirmed)
 //// We go through the list once.

 // Space Complexity: O(1) 
 //// We use a constant amoutn of extra space for 3 pointers regardless of the size of the linked list. 
public class Solution {
    public ListNode ReverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        ListNode nextNode = null;
        while (current != null){
            nextNode = current.next; // save the next node 
            current.next = prev; // reverse the link
            prev = current; 
            current = nextNode;
        }
        return prev; // new head of the reversed list
    }
}