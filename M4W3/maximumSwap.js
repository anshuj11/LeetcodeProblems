var maximumSwap = function(num) {
    num = num + ""
    num = num.split('')
    //arr = new Array(10).fill(null).map((el, i) => i )
  
    for ( let i = 0; i < num.length; i++ ) {
      if( num[i] == '9') continue;
      let iVal = num[i] - 0;
      let maxJ = 0;
      let maxJIdx = -1
      for ( let j = num.length - 1; j > i; j-- ) {
        let jVal = num[j] - 0
        if( jVal > iVal && jVal > maxJ) {
          maxJ = jVal
          maxJIdx = j
        }
      }
      if(maxJ > 0){
        [num[i], num[maxJIdx]] = [num[maxJIdx], num[i]]
        return Number(num.join(''))
      }
    }
    return Number(num.join(''))
};
