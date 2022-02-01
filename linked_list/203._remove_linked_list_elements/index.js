/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  if (!head) return null;

  let curr = head;

  while (curr && curr.next) {
    curr.next.val === val ? (curr.next = curr.next.next) : (curr = curr.next);
  }

  return head.val === val ? head.next : head;
};
