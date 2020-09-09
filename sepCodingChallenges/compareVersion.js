var compareVersion = function(version1, version2) {
    let arrV1 = version1.split('.')
    let arrV2 = version2.split('.')
    let vCompare = 0
    if (arrV1.length >= arrV2.length) {
      for(let i = 0; i < arrV1.length; i++){
            let n1 = parseInt(arrV1[i])
            let n2 = arrV2[i]?parseInt(arrV2[i]):0;
            console.log(`n1: ${n1}, n2: ${n2}`)
            if( n1 < n2){
              return -1
            }else if(n1 > n2){
              return 1
            }
      }    
    }else{
      for(let i = 0; i < arrV2.length; i++){
        let n2 = parseInt(arrV2[i])
        let n1 = arrV1[i]?parseInt(arrV1[i]):0;
          if( n1 < n2)
            return -1
          else if(n1 > n2)
            return 1
        }
    }
    return vCompare
};
