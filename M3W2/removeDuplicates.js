var removeDuplicates = function(S) {
  let stack = [S[0]]
  for( let i = 1; i < S.length; i++){
    if( S[i] !== stack[stack.length - 1]){
      stack.push(S[i])
    }else{
      stack.pop()
    }
  }
  return stack.join('')
};
