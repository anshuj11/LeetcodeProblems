var findLeastNumOfUniqueInts = function(arr, k) {
    const m = {};
    
    arr.forEach(el => {
        if(!m[el]){
          m[el] = 1
        }else {
            m[el] = m[el] + 1
        }
    })
    
    let values = Object.values(m)
    values.sort((a,b) => a - b )
    
    let i = 0 
    while(values[i] <= k ){
        k -= values[i]
        i++
    }
    return values.length - i
    
};
