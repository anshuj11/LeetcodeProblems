var numSub = function(s) {
   let n = 0 
   let substrCnt = 0
   let mod = 1e9 + 7
   for ( let i = 0; i < s.length ; i++ ){
       if(s[i] === '1')
         n++
       else{
         substrCnt += n*(n+1)/2  
         n =  0 
       }
   } 
   substrCnt += n*(n+1)/2
   n = 0
   return substrCnt % mod
};
