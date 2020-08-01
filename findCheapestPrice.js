var findCheapestPrice = function(n, flights, src, dest, K) {
    let graph = buildGraph(flights, n);
    console.log(`Graph[0]: ${graph[0]}`)
    let min = Infinity
    let dfs = (u = src, hops = K+1, cost = 0, seen = new Set ) => {
        if( u === dest)
            min = Math.min(min, cost)
        if( u === dest || !hops )
            return;
        
        seen.add(u)
        for( let i of graph[u]){
            if(!seen.has(i[0]) && cost+i[1] < min ){
              dfs(i[0], hops - 1, cost + i[1], seen )
            }
        }
        seen.delete(u)
        
    }
    dfs();
    return min === Infinity? -1 : min
    
    function buildGraph(flights, n){
        let graph = {}
        flights.forEach(el => {
            graph[el[0]] = graph[el[0]]||[]
            graph[el[0]].push([el[1], el[2]])
        })
        for(let i=0;i<n;i++){
            if(!graph[i])
                graph[i] = []
        }
        return graph;
    }
};



/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
 /***** Version 1 ----buggy --- half test cases passing-------********
var findCheapestPrice = function(n, flights, src, dest, K) {
    let graph = buildGraph(flights, n);
    console.log(`Graph[1]: ${graph[1]}`)
    
    let stack = graph[src].length ? [...graph[src]] : []
    let minCost = Infinity
    let cost = 0 ;
    let k = -1;
    
    console.log(`stack: ${stack}`)
    //for(let i=0;i<K;i++){
       while(stack.length ){
        let level = stack.pop();
        k+=1   
        if (k > K) {
            k--
            continue;}
        console.log(`level: ${level}`)
        if(level[0] === dest){
            cost += level[1]
            minCost = Math.min(minCost, cost)
            cost = 0;
            k--;
        }else{
            cost += level[1]
            if(k <= K){
               stack.push(...graph[level[0]])
               if(graph[level[0]].length === 0)
                  k--;
            }else 
                k--
            
        }
        
        
        
    }
    
    return minCost === Infinity? -1 : minCost
    
    function buildGraph(flights, n){
        let graph = {}
        flights.forEach(el => {
            graph[el[0]] = graph[el[0]]||[]
            graph[el[0]].push([el[1], el[2]])
        })
        for(let i=0;i<n;i++){
            if(!graph[i])
                graph[i] = []
        }
        return graph;
    }
};
*****************************/
