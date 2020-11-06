var largestSumAfterKNegations = function(A, K) {
    A.sort((a,b) => (a - b))

   let  j = 0;
   for( ; j < K && A[j] < 0; j++) 
       A[j] = -1 * A[j]
  
   if ( j < K) {
     A.sort((a,b) => (a - b))
     for( ; j < K; j++)
       A[0] = A[0] * -1
   }
   
   let sum = 0;
   for( let i = 0; i < A.length; i++) 
     sum += A[i]
  
   return sum
};
