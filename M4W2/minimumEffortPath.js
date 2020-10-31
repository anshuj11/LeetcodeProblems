/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  let visited = new Set  
  const len = heights.length;
  const wid = heights[0].length;
  
  function dfs(arr, x = 0, y = 0, m){
    const dirs = [
      [0,1],
      [0, -1],
      [1, 0],
      [-1, 0]
    ]
    
    let key = `${x}:${y}`

    if(visited.has(key))
      return false;
    visited.add(key)
    
    if( x == len - 1 && y == wid - 1){
      return true;
    }
    
    for ( d of dirs){
      let [dx, dy] = d
      let xx = x + dx
      let yy = y + dy
      if( xx == len || xx == -1 || yy == wid || yy == -1)
        continue;
      
      let heightDiff = Math.abs(heights[x][y] - heights[xx][yy])
      
      if( heightDiff > m )
        continue;
      if( dfs(arr, xx, yy, m))
        return true;
      
    }
      
  }
  
  let l = 0
  let r = 1000000;
  while( l < r){
    let m = Math.floor((l + r) / 2)
    visited = new Set
    if( dfs(heights, 0, 0, m )){
      r = m
    }else{
      l = m + 1
    }
  }
  return l
};
