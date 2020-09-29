var minSetSize = function(arr) {
    let freqCtr = {}
    for( let i = 0; i < arr.length; i++){
      if( freqCtr[arr[i]] === undefined )
        freqCtr[arr[i]] = 1
      else
        freqCtr[arr[i]] += 1
    }
    let freqArr = Object.values(freqCtr)
    freqArr.sort( (a,b) => b - a)
    let i = 0
    let total = 0
    
    for(; total < Math.ceil(arr.length/2); i++){
        total+=freqArr[i]
    }
   return i 
    
};
