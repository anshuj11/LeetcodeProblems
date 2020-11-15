/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let ptr = head;
    let res = []
    if( !ptr) return res;
    while (ptr) {
      let temp = ptr.val
      let runner = ptr.next;
      let newVal;
       while(runner){
         if( runner.val > temp) {
           res.push(runner.val)
           newVal = runner.val;
           break;
         }
         else 
           runner = runner.next;
       }
       if( newVal === undefined)
         res.push(0)
       ptr = ptr.next
    }
    return res
};
