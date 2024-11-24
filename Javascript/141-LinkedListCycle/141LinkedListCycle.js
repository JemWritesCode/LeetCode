/* Fast and Slow Pointers / Floyd's Tortoise and Hare
* Eventually the pointers moving at different speeds
  will point at the same node if there's a cycle.
Time Complexity: O(n) (Analyze Complexity Confirmed)
* We potentially have to visit every node. 
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