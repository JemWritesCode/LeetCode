/* Fast and Slow Pointers / Floyd's Tortoise and Hare
* Eventually the pointers moving at different speeds
  will point at the same node if there's a cycle.
Time Complexity: O(n) (Analyze Complexity Confirmed)
Time complexity: O(n). 
    It's O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. 
    However k will always be less than the total number of nodes in the linked list. So we will drop that smaller constant and say O(n).
Space Complexity: O(1) (Analyze Complexity Confirmed)
* just need 2 pointers no matter size of input linked list.
*/  

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) // empty list or only one node
        return false; 
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) // fast hit the end of list. no cycle.
            return false; 
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};