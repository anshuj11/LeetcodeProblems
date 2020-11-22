var maxSumTwoNoOverlap = function(A, l, m) {
  let used = new Set;
  
  var maxSumWindow = (L, M) => {
  let lStart = 0;
  let lEnd = L - 1;
  let rStart = L;
  let rEnd = L + M - 1
  let lSum = 0
  let rSum = 0
  let lMax = 0
  let rMax = 0
  let sumMax = 0
  for (let i = lStart; i <= lEnd; i++) {
    lSum += A[i]
  }
  for (let i = rStart; i <= rEnd; i++) {
    rSum += A[i]
  } 
    
    lMax = lSum;
    rMax = rSum;
    sumMax = lSum + rSum;
    
  for (let i = lEnd + 1; i <= A.length - M - 1; i++) {
    lSum = lSum + A[i] - A[lStart++];
    rSum = rSum + A[i + M] - A[rStart++]
    lMax = Math.max(lSum, lMax)
    sumMax = Math.max(sumMax, rSum + lMax)
  }
  return sumMax  
}
  return Math.max( maxSumWindow(l, m), maxSumWindow(m, l) )

}; 
