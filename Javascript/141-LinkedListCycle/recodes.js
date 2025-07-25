// #region 16 -- July 25 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection aka Fast and Slow Pointers aka Tortoise and Hare
// Time Complexity: O(n + m) where n is the number of nodes in the linked list and m is the number of nodes in the cycle. m will always be smaller than n so generally we would drop the constant and just say O(n)
// Space Complexity: O(1) No matter the size of the linked list passed in we just need the two pointers slow and fast.
var hasCycle = function (head) {
  if (!head || !head.next) return false; // The list is empty or only has one node.
  let slow = head,
    fast = head.next.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false; // we managed to reach the end of the linked list
    slow = slow.next;
    fast = fast.next.next;
  }
  return true; // slow and fast pointers are now the same so there was a cycle.
};

// #endregion

// #region 15 -- July 24 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection Algorithm aka Turtoise and Hare aka Fast and Slow Pointers.
// Time Complexity: O(n) where n is the total number of nodes in the linked list. we must visit each node at least once, plus the length of the cycle with the fast pointer. But the length of the cycle is less than the length of the entire list. So we drop the constant of saying n + m and just say n.
// Space Complexity: O(1) No matter the size of the linked list we just need the fast and slow pointers. We traverse the list in place.
var hasCycle = function (head) {
  if (!head || !head.next) return false; // It's an empty list or only has one node.
  let slow = head,
    fast = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false; // we managed to reach the end of the list.
    slow = slow.next;
    fast = fast.next.next;
  }
  return true; // fast and slow are now at the same position, so we found a cycle.
};

// #endregion

// #region 14 -- July 4 2025 - practiced solving out loud. rewatched Neetcode's video so I can be better at explaining this. conceptually very easy at this point.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// We will need Floyd's Cycle Detection aka Tortoise and Hare aka Slow and Fast Pointers.
// Time Complexity: O(n) It's going to be O(n + m) where is the number of nodes in the linked list and m is the number of nodes in the cycle. But m will always be less than n. So for asymptotic notation we drop constants and just say O(n)
// Space Complexity: O(1) No matter the size of the linked list we just need the slow and fast pointers. We traverse the linked list in place
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

//#endregion

// #region 13 -- June 14 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection aka Fast and Slow aka Turtoise and Hare
// Time Complexity: O(n) where n is the number of nodes in the linked list. We will need to visit them all to determine if there is a cycle. Either we reach the end of the list or we find the cycle.
// Space Complexity: O(1) We traverse the linked list in place using only the slow and fast pointers no matter the size of the linked list.
var hasCycle = function (head) {
  if (!head || !head.next) return false; // empty list or single node.
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false; // end of list found
    slow = slow.next;
    fast = fast.next.next;
  }
  return true; // slow is the same as fast so it has a cycle
};

// #endregion

// #region 12 May 9 2025 -- I got this right away but there's some nuance to the time complexity I'm a bit unsure of.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection aka Slow and Fast Pointers aka Turtoise and Hare

// Time Complexity: O(n) where n is the number of nodes in the linked list
// Space Complexity: O(1) no matter the size of the linked list we just need fast and slow pointers.

var hasCycle = function (head) {
  if (!head || !head.next) return false; // empty linked list or one node
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false; // we reached the end of the linked list
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// #endregion

// #region 11 May 6 2025 -- I got the base idea down even though it's been a while but had a few errors.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection, aka Fast and Slow aka Tortoise and Hare algorithm

var hasCycle = function (head) {
  if (!head || !head.next) return false; // empty list or only one node
  let slow = head;
  fast = head.next;
  while (fast !== slow) {
    if (!fast || !fast.next) return false; // we found an end to the linked list
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// #endregion

// #region 10 Feb 11 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection / Fast and Slow Pointers / Tortoise and Hare Algorithm
// Time complexity: O(n). It's O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. However k will always be less than the total number of nodes in the linked list. So we will drop that smaller constant and say O(n).
// Space Complexity: O(1)
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// #endregion

// #region 9 Feb 2 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection
// Time Complexity: o(n) in the worst case must visit every node (n) plus every every node in the cycle (k). O(n + k) reduces to O(n) because k is always smaller than n and we drop constants.
// Space Complexity: O(1) We just need the slow and fast pointers no matter the size of the linked list that gets passed in.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// #endregion

// #region 8 Feb 1 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Floyd's Cycle Detection Algorithm // Slow and Fast Pointers // Tortoise and Hare
// Time Complexity: O(n + k) which will reduce to O(n) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. We drop the constant in big o notation so we get O(n)
// Space Complexity: O(1) No matter the size of the linked list we just need the 2 pointers slow and fast.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

// #endregion

// #region 7 Jan 31 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Floyd's Cycle Detection / Fast and Slow Pointers / Tortoise and Hare
// Time Complexity: O(n). It's O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. But k is always smaller than n and we drop the constants for big o complexity so it's O(n)
// Space Complexity: O(1) we just need slow and fast pointers no matter the size of the linked list.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// #endregion

// #region 6 Jan 30 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Time Complexity: O(n). It's O(n + k) but reduces to O(n)
// space O(1) slow and fast pointers only
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// #endregion

// #region 5 Jan 29 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Floyd's Cycle Detection Algorithm
// Time complexity: O(n) where n is the number of nodes in the linked list. We really travel n + k where k is the number of nodes in the cycle in the worst case but k is smaller than n so we drop constants and say O(n)
// Space Complexity: O(1) we just need fast and slow pointers no matter the size of the linked list.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// #endregion

// #region 4 Jan 28 2025

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Time Complexity: O(n + k) where n is the number of nodes in the linked list and k is the length of the cycle. But k is less than n so we reduce this to O(n).
// Space complexity: O(1) - just need fast and slow pointer.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// #endregion

// #region 3 Jan 27 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Floyd's Cycle Detection. Fast and Slow Pointers.
// Time Complexity: O(n + k) where n is the number of nodes in the linked list and k is the number of nodes in the cycle. k will always be smaller than n so we drop that constant and it simplifies to O(n)
// Space Complexity: O(1) - we just need fast and slow pointers.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true; // slow and fast are the same
};

// #endregion

// #region 2  Jan 26 2025
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Time Complexity: If there is a cycle you will have to potentially visit every node in the list(n) plus the length of the cycle (k). k is always less than the length of n. So it simplifies to O(n)
// Space Complexity: O(1) - No matter the size of the linked list we just need the slow and fast pointers to go through it.
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false; //we've reached the end or next to the end.
    slow = slow.next;
    fast = fast.next.next;
  }
  // reach here if slow is the same as fast.
  return true;
};
// #endregion

// #region 1 Jan 24 2025
// Two minutes.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Time Complexity: O(n) - Worst case you must travel to each node (n) and through the cycle once (k). k (cycle length) is always less than the length of the entire list(n) so it simplifies to O(n)
// Space Complexity: O(1) - No matter the size of the linked list we still just have the same slow and fast pointers.
var hasCycle = function (head) {
  // Floyd's fast and slow pointers. Floyd's Cycle Detection.
  if (!head || !head.next) return false;
  let slow = head,
    fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) return false; // fast pointer reached the end or next to the end.
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
// #endregion
