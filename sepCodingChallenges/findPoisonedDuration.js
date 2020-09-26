var findPoisonedDuration = function(time, d) {
    let poisonedDuration = 0
    let timeDelta
    for(let i = 1; i < time.length; i++){
      timeDelta = time[i] - time[i - 1]
      if( timeDelta < d ){
        poisonedDuration += timeDelta
      }else{
        poisonedDuration += d
      } 
    }
    if(time.length > 0)
      poisonedDuration += d
    return poisonedDuration
};
