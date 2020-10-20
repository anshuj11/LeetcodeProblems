var minDominoRotations = function(A, B) {
  let AFreq = [0,0,0,0,0,0]
  let BFreq = [0,0,0,0,0,0]
  
  for(let i = 0; i < A.length; i++){
    AFreq[A[i] - 1] += 1
    BFreq[B[i] - 1] += 1
  }
  let options = []
  for( let i = 0; i < 6; i++){
    if(AFreq[i] + BFreq[i] >= A.length){
      options.push(i+1)
    }
  }
  
  for(o of options){
    let swapA = 0;
    for( let i = 0; i < A.length; i++ ){
      if(A[i] !== o){
        if(B[i] !== o ){
          swapA = -1;
          break;
        }
        swapA +=1
      }
    }
    let swapB = 0;
    for( let i = 0; i < B.length; i++ ){
      if(B[i] !== o){
        if(A[i] !== o ){
          swapB = -1;
          break;
        }
        swapB +=1
      }
    }
    
    if( swapA !== -1 || swapB !== -1)
      return Math.min(swapA, swapB)
  }
  
  return -1
  
};
