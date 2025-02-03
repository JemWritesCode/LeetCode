// #region Feb 2 2025|
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // Time complexity: O(n) must visit every node in the linked list to reverse it
 // Space Complexity: O(1) no matter the size of the linked list we just need the 3 pointers prev curr and next
 var reverseList = function(head) {
    let prev = null, 
        curr = head;
    while (curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion 

// #region Feb 1 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // Time Complexity: O(n) Must visit each node to reverse it.
 // Space Complexity: O(1) We need same 3 pointers no matter the size of the linked list 
 var reverseList = function(head) {
    let prev = null, 
        curr = head;
    while (curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion 

// #region Jan 31 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // Time Complexity: O(n) Must visit each node to reverse it.
 // Space Complexity: O(1) Just need the 3 pointers no matter the size of the linked list. 
 var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion

// #region Jan 30 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 // Time complexity: o(n)
 // Space complexity: o(1)
 var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion 

// #region Jan 28 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // Time complexity: O(n) we have to go through every node of the linked list to reverse it.
 // Space complexity: O(1) we just need the same 3 variables
 var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion

// #region Jan 27 2025

 // Time complexity: O(n) - Must visit each node
 // Space Complexity: O(1) - same 3 variables no matter the size of the linked list.
 var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion

// #region Jan 26 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};
// #endregion 

// #region Jan 25 2025

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// #endregion