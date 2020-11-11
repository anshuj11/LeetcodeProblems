var kthFactor = function(n, k) {
    let cnt = 1
    let i = 2;
    for ( ; i <= n && cnt < k; i++) {
      if( n % i == 0)
        cnt++
    }
    if( cnt === k) return i - 1
    return -1
};
