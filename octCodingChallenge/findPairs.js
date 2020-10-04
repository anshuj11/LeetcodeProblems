var findPairs = function(nums, k) {
    if(k !== 0){
    let uniq = new Set(nums)
    let res = []
    for( let a of uniq ){
     if( uniq.has(a - k))
       res++
    }
    
    return res
    }else{
      let map = {}
      let res = 0
      for( n of nums)
        if( map[n] == undefined)
          map[n] = 1
        else{
          map[n] += 1
        }
        let freq = Object.values(map)
        res = freq.filter(el => el > 1).length
       return res
    }
};
