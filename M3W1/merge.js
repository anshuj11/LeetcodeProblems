var merge = function(intervals) {
  intervals.sort((a,b) => (a[0] - b[0]))
    for ( let i = 0; i < intervals.length - 1; i++){
      let [beg, end] = intervals[i]
      if( end >= intervals[i + 1][0] ){
        intervals[i+1][ 0] = Math.min(beg, intervals[i+1][0])
        intervals[i+1][ 1] = Math.max(end, intervals[i+1][1])
        intervals.splice(i,1)
        i--;
      }
    }
   return intervals
};
