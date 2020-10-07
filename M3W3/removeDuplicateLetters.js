var removeDuplicateLetters = function(s) {
let freq = new Array(26).fill(0)
let visited = new Array(26).fill(false)
let sol = []
const a = 'a'.charCodeAt(0)
for( let i = 0; i < s.length; i++){
  let k = s[i].charCodeAt(0) - a
  freq[k]++
}
  
for( let i = 0; i < s.length; i++ ){
  let k = s[i].charCodeAt(0) - a
  freq[k] = freq[k] - 1
  if(visited[k])
    continue;
  while(sol.length > 0){
    let last = sol[sol.length - 1] - a
    if( k <= last && freq[last] > 0 ) {
      sol.pop();
      visited[last] = false
    }else
      break;
  }
  visited[k] = true
  sol.push(k+a)
  //console.log(`sol: ${sol}`) 
}

return String.fromCharCode(...sol)  
};
