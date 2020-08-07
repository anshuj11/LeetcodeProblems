var countPairs = function(root, distance) {
    let numGoodPairs = 0;
    
    var callDFS = (root) => {
       if(!root) return null
       if(!root.left && !root.right) return [1]
        
       let left = callDFS(root.left)
       let right = callDFS(root.right)
       
       if(!root.left || !root.right) {
           if(root.left)
               return left.map(v => v + 1)
           return right.map(v => v + 1)
       }
       
       for ( l of left)
           for ( r of right)
               if(l+r <= distance ) numGoodPairs++
        
        return ([...left, ...right].map(v => v + 1))
        
        
    }
    callDFS(root)
    return numGoodPairs
};
