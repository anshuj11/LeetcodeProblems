var numSplits = function(s) {
    uniqueLettersMovingRt = new Array(s.length)
    uniqueLettersMovingLt = new  Array(s.length)
    let set1 = new Set
    let set2 = new Set
    

    for( let i = 0;  i < s.length; i++) {
      set1.add(s[i])
      set2.add(s[s.length - 1 - i])
      uniqueLettersMovingRt[i] = Array.from(set1).length
      uniqueLettersMovingLt[s.length - 1 - i] = Array.from(set2).length
    }
   
    let cnt = 0;
    for (let i = 0; i < s.length - 1; i++) {
      if(uniqueLettersMovingRt[i] === uniqueLettersMovingLt[i+1])
        cnt++
    }
    return cnt
};
