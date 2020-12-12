/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */

var areConnected = function(n, threshold, queries) {
    let parent = [];
  
    if( threshold <= 0)
      return new Array(queries.length).fill(true);
  
    for ( let i = 1; i < n + 1; i++)
      parent[i] = i
    
    var find = (n) => {
      if( parent[n] !== n)
         parent[n] = find(parent[n])
      return parent[n]
    }
    
    
    
    for ( let i = threshold + 1; i < n + 1; i++) {
      for ( let j = 2*i; j < n + 1; j += i) {
        let pi = find(i);
        let pj = find(j)
        if( pi !== pj )
          parent[pi] = pj;
      }
    }
    
    let res = []
    for ( q of queries) {
      let [x,y] = q;
      
      if( find(x) == find(y))
        res.push(true)
      else
        res.push(false)
    }
  
    return res
};
