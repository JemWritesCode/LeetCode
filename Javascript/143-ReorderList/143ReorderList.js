/*
Time complexity:O(n)

Space Complexity: O(n)

*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return; // Check for empty or single-node list
    // Store nodes in an array to access them by index
    const nodes = [];
    let current = head;
    while (current) {
        nodes.push(current);
        current = current.next;
    }
    let left = 0, right = nodes.length - 1;
    // Reorder the list by linking nodes from both ends of the array
    while (left < right) {
        nodes[left].next = nodes[right];
        left++;
        if (left >= right) break;
        nodes[right].next = nodes[left];
        right--;
    }
    // Set the next of the last node to null to terminate the list
    nodes[left].next = null;
};
