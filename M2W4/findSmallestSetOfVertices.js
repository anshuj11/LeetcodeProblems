var findSmallestSetOfVertices = function(n, edges) {
    let set = new Set
    edges.forEach(v => {
       set.add(v[1])
    })
    let startVertices = []
    for(let i=0;i < n; i++){
        if(!set.has(i)){
              startVertices.push(i)
        }
    }
    
    return( startVertices)
};
