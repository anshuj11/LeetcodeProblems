var minAreaRect = function(points) {
  let m = {}
  for ( let [x,y] of points){
    if (m[x] == undefined) {
      m[x] = new Set;
      m[x].add(y)
    } else {
      m[x].add(y)
    }
  }
  
  let minA = Infinity;
  
  for( let [x1, y1] of points ) {
    for ( let [x2, y2] of points ) {
      if( x1 == x2 || y1 == y2) continue;
     
      if(m[x1].has(y2) && m[x2].has(y1)) {
        
        let area = Math.abs ((y2 - y1) * ( x2 - x1))
        minA = Math.min( minA, area)
      }
     
    }
  }
  return minA == Infinity ? 0 : minA
};
