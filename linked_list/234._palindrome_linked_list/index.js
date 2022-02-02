/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  let current = "";
  let reversed = "";

  while (head) {
    current += head.val;
    reversed = head.val + reversed;
    head = head.next;
  }

  return current === reversed;
};
