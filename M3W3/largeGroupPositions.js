var largeGroupPositions = function(s) {
    freqCtr = []
   let freq = 1
   let start = 0
   for( let i = 1; i < s.length; i++){
     if(s[i] !== s[i - 1]){
       if(freq > 2){
         freqCtr.push([start, i - 1]) 
       }
       freq = 1
       start = i
     }else{
       freq++
     }
   }
  if(freq > 2)
    freqCtr.push([start, s.length - 1])
  
  return freqCtr
};
