/* Two pointers for a Linked List.
This is also sometimes referred to as fast and slow pointers.
Left pointer is trailing behind the right pointer n spaces behind. 
Using this offset when Right reaches null (end of list) the left will be at index of length - n.
but because we have to remove it by rerouting the node before it to the one after we start with a dummy node.
so the offset becomes n + 1.

Time complexity: O(n)
The pointers go through the linked list once, and the right pointer must reach the end. 

Space Complexity O(1)
No matter the size of input we still have the same 2 pointers and dummy node. 
*/

/*************************************************
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0, head);
    let left = dummy;
    let right = head;
    for (let i = 0; i < n; i++)
        right = right.next;
    while (right !== null){
        left = left.next;
        right = right.next;
    }
    // this is the removal by changing the link to the one after the nth node.
    left.next = left.next.next; 
    return dummy.next;
};