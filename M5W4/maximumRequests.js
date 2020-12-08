var countOnes = function(n) {
  let cnt = 0;
  while(n > 0) {
    if( n % 2 == 1 ) 
      cnt++
    n = Math.floor( n/2)
  }
  return cnt
}
var maximumRequests = function(n, requests) {
  let rSize = requests.length;
  let combinations = 1 << rSize;
  let maxcnt = 0;
  let ideal = new Array(n).fill(0).join('')
  for (let i = 1; i < combinations; i++) {
    let move = new Array(n).fill(0)
  
    let j = 0;
    for (; j < rSize; j++) {
      if((1 << j) & i) {
        move[requests[j][0]]--;
        move[requests[j][1]]++
      }
    }
    
    let f = move.join('') === ideal ? true : false;
    
    maxcnt = f ? Math.max(maxcnt, countOnes(i)) : maxcnt;
  }
  return maxcnt
};
