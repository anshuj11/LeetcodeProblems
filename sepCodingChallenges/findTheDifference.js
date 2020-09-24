var findTheDifference = function(s, t) {
   let map = {}
    for( ch of s)
      if(map[ch] == undefined)
        map[ch] = 1
      else
        map[ch] += 1
   for(ch of t)
     if(map[ch] == undefined || map[ch] < 1)
       return ch
     else{
       map[ch] -= 1
     }
   
};
