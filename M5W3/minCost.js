var minCost = function(n, cuts) {
    cuts.push(0, n)
    cuts.sort((a,b) => (a - b))
    console.log(`cuts: ${cuts}`)
    const N = cuts.length;
    const dp = new Array(N).fill(null).map(el => new Array(N).fill(Infinity))
    
    for (let i = 0; i < N - 1; i++){
      dp[i][i+1] = 0
    }
    
    for (let i = 0; i < N - 1; i++){
      dp[i][i+2] = cuts[i+2] - cuts[i]
    }
  
    for (let len = 3; len < N; len++) {
      for ( let i = 0; i <= N - len; i++) {
        let j = i + len
        
        for ( let k = i+1; k < j; k++) {
          dp[i][j] = Math.min( dp[i][j], cuts[j] - cuts[i] + dp[i][k] + dp[k][j])
        }
      }
    }
  
    console.log(`dp: ${dp}`)
    return dp[0][N - 1]
};
