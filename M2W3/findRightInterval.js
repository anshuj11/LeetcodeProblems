var findRightInterval = function(intervals) {
    if( intervals.length < 2 ) return [-1]
    let res = new Array(intervals.length).fill(-1)
    
    intervals.forEach((el, ind) => {
        let [beg, end] = el
        for(let i=0;i < intervals.length; i++){
            if( i!== ind && intervals[i][0] >= end ){
              if( res[ind] == -1 ) {
                res[ind] = i
              }else if(intervals[res[ind]][0] > intervals[i][0] )
                 res[ind] = i 
            }
        }
    })
    
   res = res.map(el=> (el===Infinity)? -1 : el)
   return res
    
    
};
