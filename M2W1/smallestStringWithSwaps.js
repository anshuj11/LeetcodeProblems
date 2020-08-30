var smallestStringWithSwaps = function(s, pairs) {
    let parent = {}
    
    for( let i = 0; i < s.length; i++){
        parent[i] = i;
    }
    
    const find = (x) => parent[x] = parent[x]===x?x:find(parent[x])
    
                       
    const union = (x, y) => parent[find(x)] = find(y)
                
   // console.log(`parents: ${Object.values(parent)}`)     
    pairs.forEach(el => union(el[0], el[1]))
   // console.log(`parents: ${Object.values(parent)}`) 
    
    let keys = Object.keys(parent);
    
    let m = {}
    
    for(let i = 0; i < keys.length; i++) {
        let root = find(keys[i])
        if(m[root]){
            m[root].index.push(i)
            m[root].char.push(s[i])
        }else{
            m[root] = {index: [i], char: [s[i]]}
        }
    }
        
   // console.log(`m: ${Object.values(m)}`) 
    str = new Array(s.length)
    for(const root in m) {
        let indices = m[root].index;
        let char = m[root].char;
        
        indices.sort((a,b) => a - b)
        char.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
        
        for( let k = 0; k < indices.length; k++){
            let ind = indices[k];
            let c = char[k]
            str[ind] = c
        }
    }
    return str.join('')
};
