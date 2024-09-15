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

 // Time Complexity: O(n + m)
 //// where n and m are the length of the two linked lists.
 //// because we must visit each node and determine order by comparison.
 // Space Complexity: O(n + m) 
 //// the new linked list stores every node from the previous two.
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
        if(list1 == null) return list2;
        if(list2 == null) return list1;

        ListNode dummy = new ListNode();
        ListNode current = dummy;

        while (list1 != null && list2 != null)
        {
            int value = 0;
            if (list1.val <= list2.val)
            {
                value = list1.val;
                list1 = list1.next;
            }
            else
            {
                value = list2.val;
                list2 = list2.next;
            }
            ListNode tmp = new ListNode(value);
            current.next = tmp;
            current = current.next;
        }
        if (list1 == null) current.next = list2;
        else if (list2 == null) current.next = list1;
        return dummy.next;
    }
}