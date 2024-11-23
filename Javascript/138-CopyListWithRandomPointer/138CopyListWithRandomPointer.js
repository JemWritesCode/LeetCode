/* Hash Map
Time Complexity: O(n)
* Each node is visited twice, so O(2n) which simplifies to O(n).
Space Complexity: O(n)
* We have to store all nodes in the hash map. 
*/
/************************************************
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    const oldToNew = new Map();
    let curr = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }
    curr = head;
    while (curr){
        oldToNew.get(curr).next = oldToNew.get(curr.next) || null;
        oldToNew.get(curr).random = oldToNew.get(curr.random) || null;
        curr = curr.next;
    }
    return oldToNew.get(head);
};