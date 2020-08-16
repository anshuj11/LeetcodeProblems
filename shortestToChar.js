var shortestToChar = function(S, C) {
    let pos = [ -Infinity ]
    for(let i=0;i<S.length;i++){
        if(S[i] === C)
            pos.push(i)
    }
    pos.push(Infinity)
    let next_pos = pos[1];
    let prev = pos[0];
    let j = 1;
    let res = []
     for(let i=0;i<S.length;i++){
       if(i > next_pos){
           prev = next_pos
           j++
           next_pos = pos[j]
       }  
       res.push(Math.min(next_pos - i, i - prev))
    }
    return res
    
};
