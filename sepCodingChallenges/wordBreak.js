var wordBreak = function(s, wordDict, memo = {}) {
   let str = ""
   if(wordDict.includes(s)){ 
     memo[s] =  true;
     return true;
   }
   if(memo[s] !== undefined )
     return memo[s]
   for(let i = 0; i < s.length; i++){
     str += s[i]
     if(wordDict.includes(str)){
       if (wordBreak(s.slice(i+1), wordDict, memo)){
           memo[s.slice(i+1)] =  true;
           return true;
        }
     }
   }
   memo[s] = false
   return false    
};
