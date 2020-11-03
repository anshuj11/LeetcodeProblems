/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  posMap = {}
  
  for(let i = 0; i < S.length; i++) {
    if (posMap[S[i]]) {
      posMap[S[i]].push(i)
    } else {
      posMap[S[i]] = [i]
    }
  }
  
  let pos = posMap[S[0]]
  
  let partition = [pos[pos.length - 1]]
  // console.log(`pos: ${pos}`)
  for(i = 0; i < S.length; i++) {
    if( i <= partition[partition.length - 1] ){
      let arr = posMap[S[i]]
      if(arr[arr.length - 1] > partition[partition.length - 1]){
        partition.pop()
        partition.push( arr[arr.length - 1] )
      }
    }else {
      let arr = posMap[S[i]]
      partition.push( arr[arr.length - 1] )
    }
   // console.log(`i: ${i}, partition: ${partition}`)
  }
  let res = []
  let prev = partition[0]
  res.push(prev + 1)
  for(let i = 1; i < partition.length; i++){
    res.push( partition[i] - prev )
    prev = partition[i]
  }
  return res
};
