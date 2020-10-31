/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
   for( let i = 1; i < piles.length; i++){
     piles[i] += piles[i - 1]
   }
  let memo = {}
  function dfs( M, i){
    let key = `${M}:${i}`;
    if( i >= piles.length){
      memo[key] = 0;
      return 0
    }
    if( key in memo) return memo[key]
    let iTake = 0;
    let res = 0
    for ( let k = 1; k <= 2*M && (i + k) <= piles.length; k++){
      next = dfs( Math.max(M, k), k + i)
      iTake = - ~~piles[i - 1] + piles[piles.length - 1] - next
      res = Math.max( iTake, res)
    }
    memo[key] = res
    return res
  }
  
  return dfs(1, 0)
};
