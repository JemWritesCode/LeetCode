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

// Time Complexity: O(n + m) where n is the number of nodes in list1 and m is the number of nodes in list2. We must traverse them both to collect every node to put into the new list.
// Space Complexity: O(1) Generally we only consider auxiliary space for asymptotic notation so we don't count the input and output linked lists. Aside from that we just need the one dummy node no matter the size of the lists passed in.
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val > list2.val) {
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
