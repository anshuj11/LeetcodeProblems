var minMeetingRooms = function(intervals) {
  let starts = intervals.slice().map(el => el[0]).sort((a,b) => a - b)
  let ends = intervals.slice().map(el => el[1]).sort((a,b) => a - b)
  
  let endIndex = 0;
  let rooms = 0;
  
  for( let i = 0; i < starts.length; i++) {
    if(starts[i] < ends[endIndex])
      rooms++
    else
      endIndex++
  }
  
  return rooms
  
};
