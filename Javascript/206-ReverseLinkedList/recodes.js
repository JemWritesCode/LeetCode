// #region 30 -- Aug 31 2025
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

//Asymptotic Notation
// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit each node to reverse the link at that node.
// Space Complexity: O(1) -- no matter the size of the linked list passed in we just need the curr, prev, and next variables. We traverse the linked list in place.
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

//#endregion

// #region 29 -- Aug 9 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit every node of the list to reverse the link.
// Space Complexity: O(1) No matter the size of the linked list passed in we just need prev, curr, and next pointers. We reverse the linked list in place.
var reverseList = function (head) {
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

// #region 28 -- July 26 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must vist every node of the linked list in order to reverse the link.
// Space Complexity: O(1) No matter the size of the linked list passed in we just need the 3 pointers curr, prev and next.
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// #endregion

// #region 27 - July 25 2025
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
// Space Complexity: O(1) No matter the size of the linked list passed in we just need the same curr prev and next pointers.
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// #endregion

// #region 26 - July 4 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We have to visit every node in the list in order to reverse the link at each node.
// Space Complexity: O(1) no matter the size of the linked list that is passed in we just need the 3 pointers curr, prev, and next.

var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// #endregion

// #region 25 - June 14 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit each node in order to reverse the link.
// Space Complexity: O(1) No matter the size of the linked list we just need the curr, prev, and next pointers. We traverse the linked list in place.
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// #endregion

// #region 24 - June 9 2025
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

// Time Complexity: O(n) where n is equal to the number of nodes in the linked list. We have to visit every node to reverse the link.
// Space Complexity: O(1) No matter the size of the linked list passed in we just need the 3 pointers curr, prev, and next. We are traversing the linked list in place.
var reverseList = function (head) {
  let curr = head,
    prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

//#endregion

// #region 23 - May 14 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit every node in the list to reverse the link.
// Space Complexity: O(1) no matter the size of the linked list passed in we still just need the prev, curr, and next pointers.
var reverseList = function (head) {
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

// #region 22 - May 12 2025
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

// Time Complexity: O(n) where n is equal to the number of nodes in the linked list. We must visit each node to reverse the link.
// Space Complexity: O(1) no matter the size of the linked list passed in we still just need the prev, curr, and next pointers.
var reverseList = function (head) {
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

// #region 21 -- May 9 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. we must visit every node to reverse the link.
// Space Complexity: O(1) no matter the size of the linked list passed in we just need three pointers prev curr and next.
var reverseList = function (head) {
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

// #region 20 -- May 8 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit each node in the list to reverse the link.
// Space Complexity: O(1) No matter the size of the linked list that is passed in we still just need the same three pointers prev curr and next.
var reverseList = function (head) {
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

// #region 19 -- May 6 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit every node in the linked list to reverse the link.
// Space Complexity: O(1) no matter the size of the linked list passed in we just need three pointers: prev, curr, and next. We reverse the linked list in place.
var reverseList = function (head) {
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

// #region 18 -- April 27 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit every node in the list to reverse the link.
// Space Complexity: O(1) No matter the size of the linked list passed in we just need the prev, curr, and next pointers.
var reverseList = function (head) {
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

// #region 17 -- April 23 2025

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
// Space Complexity: O(1) No matter the size of the linked list passed in we just use the same 3 variables prev, curr, and next. We traverse the linked list in place.
var reverseList = function (head) {
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

// #region 16 April 21 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit each node in the linked list to reverse the next pointer.
// Space Complexity: O(1). No matter the size of the linked list that is passed in we just use the three variables: prev, curr, and next and traverse over the linked list in place.
var reverseList = function (head) {
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

// #region 15 March 31 2025

// Time Complexity: O(n) where n is equal to the number of nodes in the linked list. We must traverse the entire linked list to reverse each link.
// Space Complexity: O(1) No matter the size of the given linked list we still just need the 3 pointers prev, curr, and next.
var reverseList = function (head) {
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

// #region 14 -- Feb 25 2025
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

// Time Complexity: O(n) where n is the number of nodes in the linked list. We must visit every node in the linked list to reverse the link.
// Space Complexity: O(1) no matter the size of the linked list we just need the 3 pointers prev, curr, and next.
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
  let prev = null,
    curr = head;
  while (curr) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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
var reverseList = function (head) {
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

// #region 3 -- Jan 27 2025

// Time complexity: O(n) - Must visit each node
// Space Complexity: O(1) - same 3 variables no matter the size of the linked list.
var reverseList = function (head) {
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
var reverseList = function (head) {
  let prev = null,
    curr = head;
  while (curr !== null) {
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
var reverseList = function (head) {
  let prev = null,
    curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

// #endregion
