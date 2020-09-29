var maxCount = function(m, n, ops) {
  let minX = Infinity
  let minY = Infinity
  for(let i = 0; i < ops.length; i++){
    minX = Math.min(minX, ops[i][0])
    minY = Math.min(minY, ops[i][1])
  }
  return (minX === Infinity || minY === Infinity)? m*n : minX * minY
  
};
