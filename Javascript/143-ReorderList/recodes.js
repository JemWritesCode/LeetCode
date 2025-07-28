// #region 1 -- July 27 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return;
  const nodes = [];
  let current = head;
  while (current) {
    nodes.push(current);
    current = current.next;
  }
  let left = 0,
    right = nodes.length - 1;
  while (left < right) {
    nodes[left].next = nodes[right];
    left++;
    if (left >= right) break;
    nodes[right].next = nodes[left];
    right--;
  }
  nodes[left].next = null;
};

// #endregion
