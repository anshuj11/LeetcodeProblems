/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  let parent = {}
  
  s.split("").forEach((ch, i) => parent[i] = i)
  
 // console.log(`${Object.keys(parent)}`)
  
  const find = (el) => parent[el] = (parent[el] === el)?el:find(parent[el])
  
  const union = (a,b) => { parent[find(a)] = find(b)}
  
  pairs.forEach( el => union(el[0], el[1]))
  
 console.log(Object.values(parent))
  
  let m = {}
  
  let keys = Object.keys( parent)
  
  for( let i = 0; i < keys.length; i++){
    let root = find(keys[i])
    if(m[root]){
      m[root].index.push(i)
      m[root].char.push(s[i])
     }else{
       m[root] = {index: [i], char: [s[i]]}
     }
  }
  
  //console.log(`m: ${Object.values(m)}`)
  let str = []
  for(const k in m){
    let chars = m[k].char
    let indices = m[k].index
    
    chars = chars.sort( (a,b) => a.charCodeAt(0) - b.charCodeAt(0))
    indices = indices.sort((a,b) => a - b)
    
    indices.forEach((pos,i) => str[pos] = chars[i])
  }
  return str.join("")
}
