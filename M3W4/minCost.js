var minCost = function(costs) {
    if(!costs.length) return 0 
    let lastBlue = costs[0][0]
    let lastGreen = costs[0][1]
    let lastRed = costs[0][2]
    let curBlue;
    let curGreen;
    let curRed;
    for( let i = 1; i < costs.length; i++){
      let [b,g,r] = costs[i]
      curBlue = Math.min(lastGreen, lastRed) + b
      curGreen = Math.min(lastBlue, lastRed) + g
      curRed = Math.min(lastBlue, lastGreen) + r
      lastBlue = curBlue;
      lastGreen = curGreen;
      lastRed = curRed;
    }
  return Math.min(lastBlue, lastGreen, lastRed)
};
