// #region Jan 24 2025
// Two minutes.
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

 // Time Complexity: O(n) - Worst case you must travel to each node (n) and through the cycle once (k). k (cycle length) is always less than the length of the entire list(n) so it simplifies to O(n)
 // Space Complexity: O(1) - No matter the size of the linked list we still just have the same slow and fast pointers.
 var hasCycle = function(head) {
    // Floyd's fast and slow pointers. Floyd's Cycle Detection.
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) return false; // fast pointer reached the end or next to the end.
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// #endregion