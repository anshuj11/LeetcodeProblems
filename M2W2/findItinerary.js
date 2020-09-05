/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let map = {}
   // let res = ["JFK"]
    tickets.forEach((el, i) => {
      if(map[el[0]] == undefined)
           map[el[0]] = [tickets[i][1]]
         else{
           map[el[0]].push(tickets[i][1])  
           map[el[0]].sort();
         }
    })
    let numHops = 1;
    let res = ["JFK"]
    function DFS(key){
        if(map[key] === undefined) return;
        let dest = map[key]
        for(let j=0;j<dest.length;j++){
            let temp = dest[j]
            dest.splice(j, 1)
            res.push(temp)
            numHops++
            DFS(temp)
            if(numHops === tickets.length + 1 ) return;
            res.pop()
            dest.splice(j,0, temp)
            numHops--
        }
    }
    DFS(res)
    return res
    
    
};
