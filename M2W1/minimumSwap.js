var minimumSwap = function(s1, s2) {
    if( !s1.length && !s2.length ) return 0
    if( !s1.length || !s2.length ) return -1
    if( s1.length !== s2.length ) return -1
    let temp = [];
    let step = 0;
    let i = 0;
    for( ; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            s1[i] === 'x'? temp.unshift(s1[i]) : temp.push(s1[i])
        }
    }
    if(temp.length % 2 !== 0) return -1
    for(i = 0; i < temp.length; i=i+2 ) {
        ( temp[i] === temp[i+1]) ? step += 1: step += 2;
    }
    return step
};
