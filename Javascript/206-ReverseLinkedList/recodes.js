// #region 13 -- Feb 22 2025
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

 // Time Complexity: O(n) where n is the number of nodes in the linked list. We must traverse the entire linked list to reverse each link.
 // Space Complexity: O(1) no matter the size of the linked list we just need the 3 pointers prev, curr, and next to reverse the list in place. 
 var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// #endregion 

// #region 12 -- Feb 19 2025
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

 // Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit each node to reverse the link.
 // Space Complexity: O(1) no matter the size of the linked list being passed in we just need the same 3 pointers prev, curr, and next. 
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

// #region 11 -- Feb 18 2025
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
 // Time Complexity: O(n) where n is the number of nodes in the linked list. We must traverse the entire list to reverse each link.
 // Space Complexity: O(1) because no matter the size of the linked list we just need 3 pointers prev, curr, and next. 
 var reverseList = function(head) {
    let prev = null,
        curr = head;
    while (curr){
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// #endregion

// #region 10 -- Feb 11 2025
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

 // Time Complexity: O(n) where n is the number of nodes in the linked list. We must traverse the entire linked list to reverse the pointer at each node.
 // Space Complexity: O(1) We just need 3 pointers no matter the size of the linked list. Prev, curr, and next.
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

// #region 9 -- Feb 6 2025
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
 // Time complexity: O(n) where n is the number of nodes in the linked list because we must visit every node in the linked list to reverse it.
 // Space complexity: O(1) we just need the same 3 pointers to reverse the linked list no matter the size of the linked list. 
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

// #region 8 -- Feb 2 2025|
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

// #region 7 -- Feb 1 2025
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

// #region 6 -- Jan 31 2025
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

// #region 5 -- Jan 30 2025
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

// #region 4 -- Jan 28 2025
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

// #region 3 -- Jan 27 2025

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

// #region 2 -- Jan 26 2025
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

// #region 1 -- Jan 25 2025

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