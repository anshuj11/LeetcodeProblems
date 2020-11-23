var longestArithSeqLength = function(A) {
   let dp = new Array(A.length);
  
  for ( let i = 0;i < A.length; i++) {
    dp[i] = new Map()
    dp[i].set(0, 1) 
  }
  let ans = 0;
  for ( let i = 0; i < A.length; i++) {
    const aI = A[i]
    const dpI = dp[i]
    for (let j = 0; j < i; j++) {
      const aJ = A[j]
      const dpJ = dp[j]
      const diff = aJ - aI;
      if (dpJ.has(diff)) {
        dpI.set(diff, dpJ.get(diff) + 1)
      } else {
        dpI.set(diff, 2)
      }
      ans = Math.max(ans, dpI.get(diff))
    }
  }
  return ans
};
