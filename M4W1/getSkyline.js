var getSkyline = function(b) {
  let setX = new Set;
  let res = []
  b.forEach(el =>{
    setX.add(el[0])
    setX.add(el[1])
  })
  sortedArrX = Array.from(setX.keys()).sort((a,b) => a - b )
  
  sortedArrX.forEach(x => {
    hOptions = b.filter( co => (co[0] === x || co[0] < x && co[1] > x))
    let max = 0;
    hOptions.forEach( h => max = Math.max(max, h[2]))
    res.push([x,max])
  })
  for(let i = 1; i < res.length; i++ ){
    if(res[i][1] === res[i - 1][1]){
      res.splice(i,1)
      i--;
    }
  }
  return res
};
