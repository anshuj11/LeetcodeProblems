var findAnagrams = function(s, p){
   let [sCnt, pCnt] = [{}, {}]
   let sLen = s.length
   let pLen = p.length
   
   let ans = []
   
  for ( let i = 0; i < pLen - 1; i++) {
      sCnt[s[i]] = (sCnt[s[i]]|0) + 1
      
  }

  for ( let i = 0; i < pLen; i++) {
      pCnt[p[i]] = (pCnt[p[i]]|0) + 1
  }  
    
  var checkIndices = function( a, b) {
      if( a.length !== b.length) return false
      
      for(key in a) {
          if( a[key] !== b[key]){
              
              return false
          }
      }
      return true
  }  
  
  for(let i = pLen - 1; i < sLen; i++) {
      sCnt[s[i]] = (sCnt[s[i]]|0) + 1
      if( checkIndices(pCnt, sCnt)){
          ans.push( i - pLen + 1)
                                   }
      
      sCnt[s[i - pLen + 1]] = (sCnt[s[i - pLen + 1]]|0) - 1
      
      if (sCnt[s[i - pLen + 1]] == 0 )
          delete sCnt[s[i - pLen + 1]]
  }
    
  return ans  
    
}
   
