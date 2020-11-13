var checkIfCanBreak = function(s1, s2) {
    let s1Code = []
    let s2Code = []
    
    const A = 'a'.charCodeAt(0)
    
    for ( let i = 0; i < s1.length; i++ ) {
       s1Code.push( s1.charCodeAt(i) - A);
       s2Code.push( s2.charCodeAt(i) - A);
    }
    
  s1Code.sort((a,b) => a - b)
  s2Code.sort((a,b) => a - b)
  
  let s1BreaksS2 = true;
  for ( let i = 0; i < s1.length; i++ ) {
    if( s1Code[i] < s2Code[i]){
      s1BreaksS2 = false;
      break;
    }
      
  }
  
  let s2BreaksS1 = true;
  
  for ( let i = 0; i < s1.length; i++ ) {
    if( s2Code[i] < s1Code[i]){
      s2BreaksS1 = false;
      break;
    }
      
  }
  return s1BreaksS2 || s2BreaksS1;
  
    
};
