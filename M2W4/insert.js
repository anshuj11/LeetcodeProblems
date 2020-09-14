var insert = function(intervals, newInterval) {
    if(!intervals || intervals.length === 0)
        return [newInterval]
    let res = []
    let [nBeg, nEnd] = newInterval
    let i = 0
    for( ; i < intervals.length; i++){
        let [beg, end] = intervals[i]
        if(nBeg <= end ) break;
        res.push(intervals[i])
    } 
    if( i < intervals.length)
    nBeg = Math.min(intervals[i][0], nBeg)
    
    for(; i < intervals.length; i++){
        let [beg, end] = intervals[i]
        if(nEnd < beg ){
            break;
        }   
        nEnd = Math.max( nEnd, end)
        
        
    }
    res.push([nBeg, nEnd])
    for(; i < intervals.length; i++)
        res.push(intervals[i])
    
    return res
    
};
