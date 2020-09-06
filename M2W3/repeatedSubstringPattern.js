var repeatedSubstringPattern = function(s) {
   let dp = new Array(s.length).fill(0)
   dp[0] = 0;
   let lL;
    
   for( let i = 1; i < s.length; i++) {
       lL = dp[i - 1]
       while( lL > 0 && s[i] !== s[lL]){
           lL = dp[lL - 1]
       }
       if(s[i] === s[lL])
           lL++
       dp[i] = lL
   }
    
   lL = dp[s.length - 1] 
    
   return (lL > 0 ) && (s.length %(s.length - lL) === 0)
};
