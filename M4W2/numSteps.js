var numSteps = function(s) {
   let numSteps = s.length
   let numCount = 0;
   let carry = 0
   for( let i = s.length - 1; i > 0; i--){
     let val = s.charCodeAt(i) - '0'.charCodeAt(0)
     if( val + carry == 1){
       carry = 1
       numCount++
     }else if( val + carry == 0){
       carry = 0;
     }else{
       carry = 1
     }
     numCount++  
   }
  return numCount+carry
};
