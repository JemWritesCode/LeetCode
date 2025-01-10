// #region Jan 9 2025
/**
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
    const clones = new Map();
    let n = head;
    // first pass create the nodes.
    while (n) {
        clones.set(n, new Node(n.val));
        n = n.next;
    }
    // second pass set the random pointers.
    n = head;
    while (n){
        clones.get(n).next = clones.get(n.next) || null;
        clones.get(n).random = clones.get(n.random) || null;
        n = n.next;
    }
    return clones.get(head);
};
// #endregion