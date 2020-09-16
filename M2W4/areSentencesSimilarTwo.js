var areSentencesSimilarTwo = function(words1, words2, pairs) {
    class UnionFind {
        constructor(words1, words2) {
            this.parent = {}
            words1.forEach(w => this.parent[w] = w)
            words2.forEach(w => this.parent[w] = w)     
        }
    
        find(x){
            if(this.parent[x] == undefined ) {
                this.parent[x] = x;
                return x
            }
            if(this.parent[x] === x) return x;
            return this.find(this.parent[x])
        }
        union(x,y){
            let xx = this.find(x)
            let yy = this.find(y)
            this.parent[xx] = yy
        }
    }
    
    let U= new UnionFind(words1, words2);
    pairs.forEach(tuple => U.union(tuple[0], tuple[1]))
    if( words1.length !== words2.length) return false
    let flag = true
    words1.forEach((w,i) => { 
        if(U.find(w) !== U.find(words2[i]))
           flag = false })
        
    return flag;    
};
