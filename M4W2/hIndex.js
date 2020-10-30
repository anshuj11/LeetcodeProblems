var hIndex = function(c) {
  
 let freqCnt = {}
  
  for( let i=0; i < c.length; i++){
    let num = Math.min(c[i], c.length)
    if(freqCnt[num] === undefined)
      freqCnt[num] = 1
    else
      freqCnt[num] += 1
  }
  
  
  let numHPapers = 0
  for( let i = c.length; i > -1; i--){
    numHPapers += freqCnt[i] || 0
    if(numHPapers >= i )
      return i
  }
  return 0
}


   
