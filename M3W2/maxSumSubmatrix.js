var maxSumSubmatrix = function(matrix, k) {
  let n = matrix[0].length;
  let max = -Infinity
  
  for( let i = 0; i < matrix.length; i++){
     let row = new Array(n).fill(0)
     for( let ii = i; ii < matrix.length; ii++){
       let nRow = matrix[ii]
       for( let t = 0; t < row.length; t++){
         row[t] += nRow[t]
       }
       //console.log(`row: ${row}`)
       for(j = 0; j < row.length; j++){
         let sum = 0
         for(jj = j; jj < row.length; jj++){
           sum+=row[jj]
           //console.log(`sum: ${sum}`)
           if( sum == k) return k
           if(sum < k){
             max = Math.max(sum, max)
           }
         }
       }
     }
  }
  
  return max  
};
