// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }
impl Solution {
    pub fn odd_even_list(mut head: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        let mut odd = Box::new(ListNode::new(-1));
        let mut cur_odd = &mut odd;
        let mut even = Box::new(ListNode::new(-1));
        let mut cur_even = &mut even;
        let mut is_odd = true;
        
        while let Some(node) = &head {
            if is_odd {
                cur_odd.next = head;
                cur_odd = cur_odd.next.as_mut()?;
                head = cur_odd.next.take();
            } else {
                cur_even.next = head;
                cur_even = cur_even.next.as_mut()?;
                head = cur_even.next.take();
            }
            
            is_odd = !is_odd;
        }
        
        cur_odd.next = even.next;
        
        odd.next
    }
}
