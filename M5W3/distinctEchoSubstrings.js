var distinctEchoSubstrings = function(text) {
  let subs = new Set;
  for( let i = 0; i < text.length; i++) {
    for ( let j = i + 1; j < text.length; j++) {
      let left = text.substring(i,j)
      let right = text.substring(j, j  + j - i)
      if ( left === right)
        subs.add(left)
    }
  }
  return subs.size;
};
