var getWinner = function(a, k) {
    let max = Math.max(...a)
    if(k > a.length)
        return max
 
    let thisWinnerCnt = 0;
    let cur = 0;
    let other = 1
    while(thisWinnerCnt < k){
        if(a[cur] === max) return max
        
        if(a[cur] > a[other])
            thisWinnerCnt++
        else {
            cur = other
            thisWinnerCnt = 1
        }
        other++
        
    }
    return a[cur]

};
