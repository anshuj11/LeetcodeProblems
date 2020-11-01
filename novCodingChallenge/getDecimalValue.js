var getDecimalValue = function(head) {
    let res = 0;
    while(head && head.val == 0)
      head = head.next
   
    while(head) {
      if( head.val == 1) {
        res = res*2 + 1
      }else{
        res = res*2
      }
      head = head.next
    }
    return res
      
};
