var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < m*k) return -1
   
    let l = 1
    let r = Math.max(...bloomDay)
    let final = -1
    while (l <= r) {
        let mid = Math.floor((l+r)/2)
        
        if( bouquetsByMid(bloomDay, mid, m, k)){
           r = mid - 1 
           final = mid 
        }else{
            l = mid + 1
        }
       
    }
    return final
    
};


var bouquetsByMid = function(bloomDay, mid, m, k) {
    let flowers = 0
    let bouquets = 0 
    
    for ( let i = 0; i < bloomDay.length; i++) {
        if(bloomDay[i] <= mid) {
            flowers++
            if( flowers === k ){ 
                bouquets++
                flowers = 0
            }
        }else{
            flowers = 0;
        }
        
    }
    return (bouquets >= m)
}
