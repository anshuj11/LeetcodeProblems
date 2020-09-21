var addTwoNumbers = function(l1, l2) {
    let sum = null; 
    let carry = 0;
    let prev = null;
    while(l1 && l2){
       let tempVal = l1.val + l2.val +carry;
       if(tempVal > 9){
           tempVal = tempVal - 10
           carry = 1
       }else carry = 0
       temp = new ListNode(tempVal, null)
        if(!sum) 
            sum = temp
        else{
            prev.next = temp;   
        }
        prev = temp    
         l1 = l1.next
         l2 = l2.next
    }
    while(l1 || l2){
        if(!l2){
            let tempVal = l1.val + carry
            if(tempVal > 9){
               tempVal = tempVal - 10
               carry = 1
            }else carry = 0
            temp = new ListNode(tempVal, null)
            if(!sum) 
                sum = temp
            else
                prev.next = temp
            prev = temp
            l1 = l1.next
        }    
        else if(!l1){
           let tempVal = l2.val + carry
            if(tempVal > 9){
               tempVal = tempVal - 10
               carry = 1
           }else carry = 0
           temp = new ListNode(tempVal, null)
            if(!sum) 
                sum = temp
            else
                prev.next = temp
            prev = temp
            l2 = l2.next 
        }
    }
    if(!carry)
        return sum
    temp = new ListNode(1, null) 
    prev.next = temp
    return sum
        
    
};
