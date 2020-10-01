const minCost = (s, cost) => {
  let res = 0
  let max = 0
  for( let i = 0; i < s.length; i++){
    res += cost[i]
    max = Math.max(max, cost[i])
    if( s[i] !== s[i+1]){
      res -= max
      max = 0
    }
  }
  return res
};
