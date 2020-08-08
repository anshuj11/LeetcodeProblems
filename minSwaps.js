var minSwaps = function(grid) {
    let arr = []
    let count = 0
    
    for( row of grid){
        arr.push(row.lastIndexOf(1))
    }
    
    var swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
        count++
    }

    
    for ( let i=0 ; i < arr.length; i++ ) {
        
        if( arr[i] <= i)
               continue;
        
        let j = i + 1;
        
        for(; j < arr.length; j++) {
            if( arr[j] <= i )
                break;
        }
        
        
        if(j === arr.length) return -1   
        
        for( let k = j; k > i; k-- ){
           swap(k, k-1)
        }   
        
    }
    
    return count                
};
