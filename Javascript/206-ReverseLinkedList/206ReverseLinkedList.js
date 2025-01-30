// There are two approaches for this. 
// Reverse the string
// Two pointers. 
// Obviously two pointers is longer but it's probably given as a solution because it's an easy introduction to two pointers.
// so I should come up with a javascript implementation for that to make sure I have it


/*
Time Complexity: O(n)
We go through the linked list in a single pass

Space Complexity: O(1)
no matter the size of the linked list we just need the 3 variables prev curr and next.

*/

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
    let prev = null;
    let curr = head;
    while (curr !== null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};