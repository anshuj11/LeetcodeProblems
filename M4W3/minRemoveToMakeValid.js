var minRemoveToMakeValid = function(s) {
    let stackPos = []
    let stackVal = []
    s = s.split('')
    for (let i = 0; i < s.length; i++) {
      if(s[i] === '('){
        stackPos.push(i)
        stackVal.push(s[i])
      }
      if(s[i] === ')'){
        if(stackVal[stackVal.length - 1] === '('){
          stackPos.pop()
          stackVal.pop()
        }else{
          s.splice(i,1)
          i--;
        }
      }
    }
    
  while (stackVal.length > 0) {
    let p = stackPos.pop()
    s.splice(p,1)
    stackVal.pop()
  }
  return s.join('')
};
