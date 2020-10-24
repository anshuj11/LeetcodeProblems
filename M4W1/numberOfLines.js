var numberOfLines = function(widths, S) {
    let ln = 0
    let currW = 0
    let currLn = 1
    for( let i = 0 ; i < S.length; i++){
     let ind = S.charCodeAt(i) - 'a'.charCodeAt(0)
     let w = widths[ind]
     if( currW + w > 100){
       currLn += 1
       currW = w
     }else{
       currW += w
     }
    }
  return [currLn, currW]
};
