var arrayRankTransform = function(arr) {
  if(arr.length == 0) return []
   arr = arr.map((el,i) => [el, i])
    
    arr.sort((a,b) => a[0] - b[0])
  let res = new Array(arr.length)
  let ctr = 1
  res[arr[0][1]] = ctr 
  for(let i = 1; i < arr.length; i++ ){
    if( arr[i][0] !== arr[i - 1][0])
      ctr++
    res[arr[i][1]] = ctr 
  }
  return res
};
