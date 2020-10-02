var reformat = function(s) {
    s = s.split('')
    let aVal = 'a'.charCodeAt(0)
    let zVal = 'z'.charCodeAt(0)
    let val0 = '0'.charCodeAt(0)
    let val9 = '9'.charCodeAt(0)
    
    let sAlpha = s.filter( el => el.charCodeAt(0) >= aVal && el.charCodeAt(0) <= zVal)
    let sNums = s.filter( el => el.charCodeAt(0) >= val0 && el.charCodeAt(0) <= val9)
     
    if(Math.abs(sAlpha.length - sNums.length) >= 2) return ""
    let start, end;
  
    if( sAlpha.length > sNums.length){
      start = sAlpha
      end = sNums
     }else{
       start = sNums
       end = sAlpha
     }
     let res = ""
     let i = 0;
     for( ; i < end.length; i++){
       res += start[i]+end[i]
     }
     if( start[i] !== undefined)
       res += start[i]
     return res
};
