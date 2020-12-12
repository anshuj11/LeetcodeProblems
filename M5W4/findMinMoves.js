var findMinMoves = function(machines) {
    let sum = machines.reduce((acc, el) => acc += el);
    
    let target = sum / machines.length
    
    if ( target !== Math.floor(target))
      return -1;
    let tot = 0;
    let max = 0;
    machines.forEach(numD => {
      let diff = numD - target
      tot += diff;
      max = Math.max(max, diff, Math.abs(tot))
    })
    return max
};
