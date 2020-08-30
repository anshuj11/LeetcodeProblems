var shiftingLetters = function(S, shifts) {
    alpha = "abcdefghijklmnopqrstuvwxyz".split("")
    
    let m = {}
    let mPrime = {}
    let res = new Array(S.length)
    
    alpha.forEach((el, i) => {
        m[el] = i;
        mPrime[i] = el
    })
    let lInd = shifts.length - 1
    
    res[lInd] = mPrime[ ((m[S[lInd]] +shifts[lInd] ) % 26 ) + ""]
    
    for(let i = shifts.length - 1 ; i > 0; i--) {
        shifts[i - 1] = shifts[i-1] + shifts[i]
        let sum = (shifts[i - 1] + m[S[i - 1]])%26
        res[i - 1] =  mPrime[sum]
    }
    
    
    return res.join("")
};
