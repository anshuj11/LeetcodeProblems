/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var mapify = ( word) => {
   let m = new Map
    word.forEach(ch => {
        if(!m[ch])
            m[ch] = 1
        else
            m[ch] = m[ch] + 1
    }) 
    return m
}
var shortestCompletingWord = function(licensePlate, words) {
    //preprocess
    let valid = []
    for (i of licensePlate){
        if(i === ' ' || parseInt(i, 10) >= 0  ||  parseInt(i, 10) <= 9 ) continue;
          valid.push(i.toLowerCase())  
    }
    
    const m = mapify(valid)
    let res = ""
    let resLength = Infinity
    for ( word of words) {
        const n = mapify(word.split(""))
        let complete = true;
        for ( i of valid){
            if(n[i])
                n[i] = n[i] - 1
            else{
                complete = false;
                break;
            }
        }
        if(complete && valid.length === word.length) return word
        if(complete && resLength > word.length){
            res = word
            resLength = word.length
        }
        
    }
    return res
};
