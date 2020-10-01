var getLastMoment = function(n, left, right) {
    let max = 0
    for(let i = 0; i < right.length; i++){
      max = Math.max(max, n - right[i])
    }
    return Math.max(...left, max)
};
