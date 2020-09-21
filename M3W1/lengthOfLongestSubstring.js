var lengthOfLongestSubstring = function(s) {
    let substr = [];
    let max = 0;
    for(let ch of s){
      let prevPtr = substr.indexOf(ch)
      if( prevPtr === -1 ){
        substr.push(ch)
      }else{
        max = Math.max(max, substr.length)
        substr = substr.slice(prevPtr+1)
        substr.push(ch)
      }
    }
    max = Math.max(max, substr.length)
    return max
};
