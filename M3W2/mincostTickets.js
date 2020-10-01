var mincostTickets = function(days, costs) {
   let maxDay = days[days.length - 1]
    let costPerDay = new Array( maxDay + 1)
    
    costPerDay[0] = 0
  
    for( let i = 1; i < costPerDay.length; i++ ){
      if(!days.includes(i))
        costPerDay[i] = costPerDay[i - 1]
      else{
        costPerDay[i] = Math.min(
          costs[0] + costPerDay[i - 1],
          costs[1] + costPerDay[Math.max(i - 7, 0)],
          costs[2] + costPerDay[Math.max(i - 30, 0)]
        )
      }
    }
    return costPerDay[costPerDay.length - 1]
};
