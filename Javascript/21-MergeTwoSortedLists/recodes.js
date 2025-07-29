// #region 7 -- July 28 2025
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
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};

// #endregion

// #region 6 -- July 27 2025 -- got it in one go
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

// Time Complexity: O(n + m) where n is the number of elements in list1 and m is the number of elements in list 2. We must visit each node a maximum of 1 time in order to add them to the new list.
// Space Complexity: O(1) No matter the size of the lists passed in we only need the dummy and curr variables. For asymptotic notation we generally only consider auxiliary memory so we don't count the input or output linked lists.
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};

// #endregion

// #region 5 -- July 26 2025 -- Almost by myself just forgot to .val
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

// Time Complexity: O(n + m) where n is the number of nodes in list1 and m is the number of nodes in list2. We must visit each node to merge them into the new list.
// Space Complexity: O(1) No matter the size of the lists given we just need the dummy and curr node. For asymptotic notation we generally do not consider the input or output memory, but only the auxiliary memory.
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(),
    curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};

// #e

// #region 4 -- July 25 2025 -- small mishap with the curr.next pointer but I generally had this
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
// Time Complexity: O(n + m) where n is the number of nodes in list1 and m is the number of nodes in list2. We must visit each node once to add it to the new linked list.
// Space Complexity: O(1) No matter the size of the linked lists passed in we just need the dummy and curr nodes. For asymptotic notation we generally only count auxiliary memory so we don't count the input or output linked lists.
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};

// #endregion

// #region 3 -- July 24 2025 -- Tripped over the dummy node a bit but almost got this entirely myself
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

// Time Complexity: O(n + m) where n is the number of nodes in list1 and m is the number of nodes in list 2. We must visit every node to put it into the new linked list.
// Space Complexity: O(1) When talking about asymptotic notation we generally only count auxiliary memory. So not including the input or output linked lists. So the only other thing we declare is the dummy node no matter the size of the lists passed in.
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return dummy.next;
};

// #endregion

// #region 2 -- July 23 2025

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

// #endregion

// #region 1 -- Feb 11 2025

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

// #endregion
