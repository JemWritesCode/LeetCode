// #region Feb 11 2025

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 // Time Complexity: O(n) where n is the number of nodes in both linked lists. We must traverse them both entirely.
 // Space Complexity: O(1) - we just need the one dummy node. otherwise we're just traversing the linked lists that are passed in already. 
 var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let cur = dummy;

    while (list1 && list2){
        if (list1.val > list2.val){
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }
    cur.next = list1 || list2;
    return dummy.next;
};

// #endregion