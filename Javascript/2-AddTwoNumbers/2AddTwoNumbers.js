/* Brute Force / Simple to Understand / No Dummy Node
Pull the numbers out of the linked lists, then put them back into a linked list.

Time Complexity: O(n + m)
* n is number of nodes in l1, m is number of nodes in l2.

Space Complexity: O(max(n,m))
* The size of the result linked list is proportional to the size of the bigger l1 or l2 list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let answerNum = 0,
        placeMultiplier = 1;
    while(l1){
        answerNum += l1.val * placeMultiplier;
        placeMultiplier *= 10;
        l1 = l1.next;
    }
    placeMultiplier = 1;
    while (l2){
        answerNum += l2.val * placeMultiplier;
        placeMultiplier *= 10;
        l2 = l2.next;
    }
    // Put together the result Array
    let result = new ListNode(0); 
    let current = result;
    if (answerNum === 0)
        return result;

    while (answerNum > 0){
        current.val = answerNum % 10;
        answerNum = Math.floor(answerNum / 10);
        if (answerNum > 0){
            current.next = new ListNode();
            current = current.next;
        }
    }
    return result;
};
///////////////////////////////////////////////////////////////
/* Dummy Node Solution
This is using a dummy node which mostly is just neater. Also with just 1 while loop.
Without a dummy node, you need to handle the head of the linked list separately.
And you have to handle the 0 case. 

Time Complexity: O(n + m)
Space Complexity: O(1) (Auxilary space), but if you count the result (Output space) it's O(max(n,m))
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;
        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }
        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }
    return res.next;    
};