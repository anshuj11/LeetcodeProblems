var avoidFlood = function(rains) {
    for(let i=0;i < rains.length - 1;i++){
        if(rains[i] > 0 && rains[i] === rains[i+1])
            return []
    }
    let m = {}
    let place = {}
    let dryDay = []
    let res = []
    let dryDayPtr = 0;
    
    for( let i = 0; i < rains.length; i++ ){
        if(rains[i] > 0){
            res[i] = -1
            //dryDay.push(rains[i])
            if(!m[rains[i]] && m[rains[i]]!== 0 ){
                m[rains[i]] = i
            }else{
                
                if(!dryDay.length)
                    return []
                else{
                    for(let d =0; d <dryDay.length; d++){
                        if(dryDay[d] > m[rains[i]]){
                            delete m[rains[i]]
                            res[dryDay[d]] = rains[i]
                            //console.log(`dryDay: ${dryDay}, rains[i]: ${rains[i]}`)
                            dryDay = dryDay.slice(0,d).concat(dryDay.slice(d+1))
                            //console.log(`dryDay: ${dryDay}`)
                            break;
                        }
                    }
                    if(m[rains[i]]) return []
                    m[rains[i]] = i
                }
            }
        }else if( rains[i] === 0){
            dryDay.push(i)
        }
    }
    while(dryDay.length) res[dryDay.pop()] = 1
    return res
};
