var getWinner = function(a, k) {
    let max = Math.max(...a)
    // If k is greater than a.length then 
    // it can only happen with the largest element
    //in the array
    if(k > a.length)
        return max
 
    let thisWinnerCnt = 0;
    let cur = 0;
    let other = 1
    
    while(thisWinnerCnt < k){
        //If current element is biggest
        //it will never lose
        if(a[cur] === max) return max
        
        // Counting the number current element
        // is winning
        if(a[cur] > a[other])
            thisWinnerCnt++
        else {
            // If current element loses update
            // the current with other 
            // initialize winner coungt with 1 
            // because the new cur has already won once
            cur = other
            thisWinnerCnt = 1
        }
        other++
        
    }
    return a[cur]

};
