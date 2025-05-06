// #region 11 May 6 2025 -- I got the base idea down even though it's been a while but had a few errors.
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
 
 // Floyd's Cycle Detection, aka Fast and Slow aka Tortoise and Hare algorithm 

 var hasCycle = function(head) {
    if (!head || !head.next) return false; // empty list or only one node
    let slow = head;
        fast = head.next;
    while(fast !== slow){
        if (!fast || !fast.next) return false; // we found an end to the linked list
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// #endregion

// #region 10 Feb 11 2025
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

 // Floyd's Cycle Detection / Fast and Slow Pointers / Tortoise and Hare Algorithm
// Time complexity: O(n). It's O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. However k will always be less than the total number of nodes in the linked list. So we will drop that smaller constant and say O(n). 
// Space Complexity: O(1) 
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

// #region 9 Feb 2 2025
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

 // Floyd's Cycle Detection 
 // Time Complexity: o(n) in the worst case must visit every node (n) plus every every node in the cycle (k). O(n + k) reduces to O(n) because k is always smaller than n and we drop constants. 
 // Space Complexity: O(1) We just need the slow and fast pointers no matter the size of the linked list that gets passed in. 
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

// #region 8 Feb 1 2025
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

 // Floyd's Cycle Detection Algorithm // Slow and Fast Pointers // Tortoise and Hare
 // Time Complexity: O(n + k) which will reduce to O(n) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. We drop the constant in big o notation so we get O(n)
 // Space Complexity: O(1) No matter the size of the linked list we just need the 2 pointers slow and fast. 
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

// #region 7 Jan 31 2025
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
 // Floyd's Cycle Detection / Fast and Slow Pointers / Tortoise and Hare
 // Time Complexity: O(n). It's O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. But k is always smaller than n and we drop the constants for big o complexity so it's O(n)
 // Space Complexity: O(1) we just need slow and fast pointers no matter the size of the linked list. 
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

// #region 6 Jan 30 2025
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

// #region 5 Jan 29 2025
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

// #region 4 Jan 28 2025

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

// #region 3 Jan 27 2025
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

// #region 2  Jan 26 2025
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

// #region 1 Jan 24 2025
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