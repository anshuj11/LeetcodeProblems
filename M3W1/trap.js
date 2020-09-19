var trap = function(height) {
   let L = new Array(height.length + 1).fill(0)
   let R = new Array(height.length + 1).fill(0)
   let sum = 0
   
   for(let i = 1 ; i < L.length; i++){
     L[i] = Math.max(L[i - 1], height[i - 1])
   }
   for(let i = R.length - 2 ; i > -1; i--){
     R[i] = Math.max(R[i + 1], height[i])
   }
   L.shift()
   R.pop()
   for(let i=0;i < height.length; i++)
     sum+= (Math.min(L[i], R[i]) - height[i])
   return sum
};
