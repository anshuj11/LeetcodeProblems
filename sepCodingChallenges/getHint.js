var getHint = function(secret, guess) {
    let m = {}
    for(i in secret){
        if(m[secret[i]] === undefined)
            m[secret[i]]  = 1
        else
            m[secret[i]] += 1
    }
    
    guess = guess.split('')
    let bulls = 0;
    let cows = 0;
    for( let i = 0; i < guess.length; i++){
        (secret[i] === guess[i]) ? bulls++ :1;
        if(m[guess[i]] > 0) {
            cows++
            m[guess[i]] -= 1
        }
    }
    cows -= bulls
    
    return `${bulls}A${cows}B`
};
