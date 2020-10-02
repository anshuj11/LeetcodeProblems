var numSubmat = function(M) {
	let m = M.length
  let n = M[0].length;
  let res = 0;
  let min = 0;
  for( let i = 0; i < m; i++ ){
    for( let j = 0; j < n; j++ ){
      if(M[i][j] === 1){
        min = M[i][j] = j > 0 ? 1 + M[i][j - 1] : 1;
        res += min
        let k = i - 1
        while( k >= 0 && min > 0){
          min = Math.min( min, M[k][j])
          res += min
          k -= 1
        }
      }
    }
  }
	return res;
};
