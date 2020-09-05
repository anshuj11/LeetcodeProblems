var removeStones = function(stones) {
    class unionFind {
       constructor(grid){
         this.graph = {}
         this.components = 0
         this.initializeGraph(grid)
       } 
       initializeGraph(grid){
        for( let [r,c] of grid){
            if(this.graph[r] === undefined){
                this.graph[r] = r
                this.components++
            }
            if(this.graph[~c] === undefined){
                this.graph[~c] = ~c
                this.components++
            }
        }
       }
        
       find(x) {
         return (this.graph[x] === x) ? x : this.find(this.graph[x]);
       } 
        
       union(x,y) {
           let xx = this.find(x);
           let yy = this.find(y);
           if(xx !== yy) {
            this.graph[xx] = yy
            this.components--   
           }
           
           
       }
        
    }
    
    let U = new unionFind(stones)
    
    for( [r,c] of stones) {
        U.union(r, ~c)    
    }
    return stones.length - U.components
};
