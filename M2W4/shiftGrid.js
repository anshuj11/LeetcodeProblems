var shiftGrid = function(g, k) {
    
    let temp = []
    let n = g[0].length
    let m = g.length
    
    if( m < 2 && n < 2) return g
    
    if( n < 2){
        k = k%m
        g = g.slice(m - k).concat(g.slice(0,m - k))
        return g
    }
    
    while(k > 0) {
       for( let j = n - 2; j > -1; j-- ){
           for(let i = 0; i < m; i++){
              if(j === n - 2) 
                temp.push(g[i][j+1]) 
              g[i][j+1] = g[i][j]                
            }
        }
        
        for(let i = 1; i < m; i++){
            g[i][0] = temp.shift()
        }
        
        g[0][0] = temp.shift()
        k--
        
        
    }
    return g
};
