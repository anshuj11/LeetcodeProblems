var reverseWords = function(s) {
  let ptr = 0
  let counter = 0;
  let len = s.length;
  
  
  while(counter < len ){
    if(s[len - 1] !== ' '){
      let temp = s.pop()
      s.splice(ptr,0, temp)
      counter++;
    }else{
      ptr = counter;
      let temp = s.pop()
      s.splice(ptr,0, temp)
      //console.log(`s: ${s}`)
      counter++;
      ptr++
    }
  }
  
  
};
