var generateParenthesis = function(n) {
  let ans = []  
  const helper = (open = 0, close = 0, path = "") => {
   if( path.length === 2*n)
     ans.push(path)
   if(open < n) helper(open + 1, close, path+"(")
   if(close < open) helper(open, close+1, path+")")  
  }

  helper()
  return ans
  
};
