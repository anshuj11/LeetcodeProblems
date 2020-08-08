var numSubmat = function(mat) {
    let m = mat.length;
    let n = mat[0].length;
    let res = 0
 for( let i = 0; i < m; i++){
     for( let j = 0; j < n; j++) {
         let temp = 0
         let mxJJ = n
         for(let ii = i; ii < m && mat[ii][j] > 0; ++ii){
             for(let jj = j; jj < mxJJ; ++jj){
                 if(mat[ii][jj] === 0 ){
                     mxJJ = Math.min(jj, mxJJ)
                     break;
                 }
                 temp++
             }
         }
         res += temp
     }
 }
    return res;
};
