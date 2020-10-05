var bitwiseComplement = function(N) {
   let res = "" 
  while(N > 1){
   res = (N%2 === 0) ? '1'+ res : '0'+ res
   N = Math.floor(N/2)
  }
  res = (N === 0) ? '1' + res : '0' + res
  return parseInt(res, 2)
};
