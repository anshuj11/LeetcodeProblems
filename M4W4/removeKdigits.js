var removeKdigits = function(num, k) {
  const stack = [];
  let removed = 0;
  num = num.split("")
  for (let i = 0; i < num.length; i++) {
    while( stack.length && num[i] < stack[stack.length - 1] && removed < k) {
      let t = stack.pop()
      removed++
    }
    stack.push(num[i])
  }
  
  while( removed  < k) {
    stack.pop()
    removed++
  }
  while(stack[0] === "0" && stack.length > 0 ) stack.shift()
  
  return stack=="" ? "0":stack.join("")
  
}
