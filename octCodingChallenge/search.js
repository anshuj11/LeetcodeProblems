var search = function(nums, target) {
   if ( nums.length === 0 ) return -1
  
   let m = Math.floor( nums.length / 2 )
   
   if ( nums[m] === target ) return m
   if ( nums[m] < target ){
     let res = search( nums.slice(m + 1), target)
     return res == -1 ? -1 :  m + 1 + res;
   }
   return  search(nums.slice(0, m), target)
  
};
