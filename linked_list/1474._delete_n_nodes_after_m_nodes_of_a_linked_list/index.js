/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const deleteNodes = (head, m, n) => {
  let counter = 1;
  let curr = head;
  let removed = 0;

  while (curr.next) {
    if (counter === m) {
      if (removed === n) {
        counter = 0;
        removed = 0;
      } else {
        removed++;
        curr.next = curr.next.next;
      }
    } else {
      counter++;
      curr = curr.next;
    }
  }

  return head;
};
