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
    pub fn is_palindrome(head: Option<Box<ListNode>>) -> bool {
         let mut current = String::from("");
         let mut reversed =  String::from("");
         let mut curr = head;
 
         while let Some(node) = curr {
             current.push_str(node.val.to_string().as_mut_str());
             reversed.insert_str(0, node.val.to_string().as_mut_str());
             
             curr = node.next;
         }
 
         current == reversed
     }
 }