var countBits = function(num) {
    let res = [0]
    for( let i = 1; i <= num ; i++){
      res.push(res[i&(i-1)] + 1)
    }
  return res
};
