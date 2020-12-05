var longestOnes = function(nums, K) {
 let flipCnt = 0;
 let flipPos = [];
 let maxOnes = 0
 let revertPos = -1
 if( K == 0){
   let oneLen = 0;
   let maxOneLen = 0;
   for( let i = 0; i < nums.length; i++) {
     if( nums[i] == 1){
       oneLen++
     }else{
       maxOneLen = Math.max( maxOneLen, oneLen);
       oneLen = 0;
     }
   }
   maxOneLen = Math.max( maxOneLen, oneLen);
   return maxOneLen
 }
 for( let i = 0; i < nums.length; i++){
   if (nums[i] == 0){
     if( flipCnt < K) {
       flipCnt++
       flipPos.push(i)
       maxOnes = Math.max(maxOnes, i - revertPos)
     } else {
       revertPos = flipPos.shift()
       flipPos.push(i)
        maxOnes = Math.max(maxOnes, i - revertPos)
     }
   }else{
     maxOnes = Math.max(maxOnes, i - revertPos)
   }
   
 }
 return maxOnes
};
