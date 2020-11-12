var maxDiff = function(num) {
    let str = num.toString().split('')
    let i = 0
    while (str[i] == '9') 
      i++
  
    let s1 = str[i]
    let r1 = '9'
    for(let j=0; j < str.length; j++) {
      if(str[j] === s1)
          str[j] = r1
    }
    let val1 = parseInt(str.join(''))
      
    str = num.toString().split('')
    i = 0;
    if( str[0] !== '1'){
      s1 = str[i]
      r1 = '1'
    } else {
    i++  
    while(str[i] == '1' || str[i] == '0') 
      i++
     s1 = str[i]
     r1 = '0'
    }
     for(let j=0; j < str.length; j++) {
       if (str[j] === s1)
         str[j] = r1  
     }
     let val2 = parseInt(str.join(''))
      
    return  val1 - val2 
};
