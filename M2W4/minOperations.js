var minOperations = function(n) {
   // [1, 3, 5] => 2
  // [1,3,5,7] => [2,4,4,6] => [4,4,4,4] => 4
  // [1,3,5,7,9] => [3,5,5,5,7] => [5,5,5,5,5] => 6
  // [1,3] => [2,2]
  
  
  // n = 2, swaps = 1
  // n = 3, swaps = 2
  // n = 4, swaps = 4
  // n = 5, swaps = 6
  
  //Detailed explanation here
  //https://leetcode.com/problems/minimum-operations-to-make-array-equal/discuss/794229/C%2B%2B-1-liner-O(1)-solution-(return-n*n4)-beats-100-with-detailed-explanation
  
  
  return n*n/4
  
  
};
