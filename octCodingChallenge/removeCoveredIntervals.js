var removeCoveredIntervals = function(intervals) {
  intervals.sort((a,b) => (a[0] == b[0] ? b[1] - a[1]: a[0] - b[0]))
  let set = new Set
  for( let i = 1; i < intervals.length; i++){
    let [beg, end] = intervals[i]
    if(end <= intervals[i - 1][1]){
      intervals.splice(i, 1)
      i--
    }
  }
  return intervals.length
};
