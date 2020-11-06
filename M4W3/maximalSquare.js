var maximalSquare = function(A) {
   if(!A || !A.length) return 0;
  
  let dp = new Array(A.length).fill(0).map(el => new Array(A[0].length).fill(0))
  let max = 0
  for( let i=0; i < A.length; i++) {
    for ( let j=0; j < A[0].length; j++) {
      if( i==0 || j==0)
        dp[i][j] = A[i][j] - 0
      else {
        if( A[i][j] === '0' )
          dp[i][j] = 0
        else{
          dp[i][j] = Math.min( dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        }
      }
      max = Math.max(dp[i][j], max)
    }
  }
  return max*max
};
