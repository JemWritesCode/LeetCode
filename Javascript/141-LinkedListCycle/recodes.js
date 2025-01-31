// #region Jan 30 2025
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

 // Time Complexity: O(n). It's O(n + k) but reduces to O(n)
 // space O(1) slow and fast pointers only 
 var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// #endregion

// #region Jan 29 2025
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
 // Floyd's Cycle Detection Algorithm 
 // Time complexity: O(n) where n is the number of nodes in the linked list. We really travel n + k where k is the number of nodes in the cycle in the worst case but k is smaller than n so we drop constants and say O(n)
 // Space Complexity: O(1) we just need fast and slow pointers no matter the size of the linked list. 
 var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// #endregion 

// #region Jan 28 2025

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

 // Time Complexity: O(n + k) where n is the number of nodes in the linked list and k is the length of the cycle. But k is less than n so we reduce this to O(n).
 // Space complexity: O(1) - just need fast and slow pointer. 
 var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// #endregion

// #region Jan 27 2025
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
 // Floyd's Cycle Detection. Fast and Slow Pointers.
 // Time Complexity: O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. k will always be smaller than n so we drop that constant and it simplifies to O(n)
 // Space Complexity: O(1) - we just need fast and slow pointers.
 var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true; // slow and fast are the same
};

// #endregion 

// #region Jan 26 2025
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
 // Time Complexity: If there is a cycle you will have to potentially visit every node in the list(n) plus the length of the cycle (k). k is always less than the length of n. So it simplifies to O(n)
 // Space Complexity: O(1) - No matter the size of the linked list we just need the slow and fast pointers to go through it. 
 var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head.next;
    while (slow !== fast){
        if (!fast || !fast.next) return false; //we've reached the end or next to the end.
        slow = slow.next;
        fast = fast.next.next;
    }
    // reach here if slow is the same as fast.
    return true;
};
// #endregion

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