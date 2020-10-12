var buddyStrings = function(A, B) {
    if ( A.length !== B.length ) return false;
    let cnt = 0;
    let res = "";
    let x = -1
    let y = -1
    let i = 0;
    for( ; i < A.length; i++){
      if( A[i] !== B[i]){
        if(cnt == 0 ){
          x = i
          cnt++
        }else {
          y = i
          cnt++
          break;
        }
      }else
        res += A[i]
    }
    if( cnt == 0) {
      let frq = new Array(26).fill(0)
      let a = 'a'.charCodeAt(0)
      for( let i = 0; i < A.length; i++){
        let pos = A[i].charCodeAt(0) - a
        frq[pos] += 1
        if( frq[pos] == 2 ) return true
      }
      return false;
    }
    if( cnt == 1) return false
    let m = A[x]
    let n = A[y]
    res = A.slice(0,x) + n + A.slice(x+1,y) + m + A.slice(y+1)
    if( res === B) return true;
    return false
};
