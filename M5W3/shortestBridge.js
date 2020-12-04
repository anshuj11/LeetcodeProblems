/**
 * @param {number[][]} A
 * @return {number}
 */
var shortestBridge = function(A) {
    let seen = new Set;
    let islandA = new Set;
    let islandB = new Set;
    let dirs = [[1,0], [-1, 0], [0, 1], [0, -1]]
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[0].length; j++) {
        let key = `${i}:${j}`;
        if(islandA.has(key) || islandB.has(key))
          continue;
        if (A[i][j] == 1) {
          // Find all the sqrs related to this island
          if(Array.from(islandA).length === 0) {
          let stack = []
          stack.push(`${i}:${j}`)
            while(stack.length) {
              let str = stack.pop()
              if(islandA.has(str))
                continue;
              islandA.add(str);
              let [i,j] = str.split(':')
              i = Number(i);
              j = Number(j);
              console.log()
              for ( let [x,y] of dirs){
                if(i+x >= 0 && i+x < A.length && j+y >= 0 && j+y < A[0].length) {
                  if(A[i+x][j+y] == 1){
                    let key = `${i+x}:${j+y}`
                    stack.push(key)
                  }
                }
              }
            }
           // console.log(Array.from(islandA))
          } else {
            let stack = []
            stack.push(`${i}:${j}`)
            while(stack.length) {
              let str = stack.pop()
              if(islandB.has(str))
                continue;
              islandB.add(str);
              let [i,j] = str.split(':')
              i = Number(i);
              j = Number(j);
             // console.log()
              for ( let [x,y] of dirs){
                if(i+x >= 0 && i+x < A.length && j+y >= 0 && j+y < A[0].length) {
                  if(A[i+x][j+y] == 1){
                    let key = `${i+x}:${j+y}`
                    stack.push(key)
                  }
                }
              }
            }
            break;
          } 
        }
      }
    }
    let isA = Array.from(islandA).map(el => el.split(':').map(e => Number(e)));
    let isB = Array.from(islandB).map(el => el.split(':').map(e => Number(e)))
  //  console.log(Array.from(isA))
  
  let minDist =Infinity;
  
  for( let [x1, y1] of isA) {
    for( let [x2, y2] of isB) {
      let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2) - 1
      minDist = Math.min(dist, minDist)
    }
  }
  return minDist
    
};
