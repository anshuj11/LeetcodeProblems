var maxScoreWords = function(words, letters, score) {
    
    // let letterScore = letters.map( ch => score[ch.charCodeAt(0) - 'a'.charCodeAt(0)])
    
    let wordsScore = words.map( w => {
        let sum = 0
        for(ch of w){
           if( !letters.includes(ch)){
               return  -1
           }
           sum+= score[ch.charCodeAt(0) - 'a'.charCodeAt(0)] 
        }
        return sum
    })
    
    let freqCtr = {}
    letters.forEach(ch => {
        if( freqCtr[ch] == undefined)
            freqCtr[ch] = 1
        else
            freqCtr[ch] +=1
    })
    
    const remLetters = (word) => {
        
    }
    
    /*
    
    current word
    letters remaining and their frequency
    what words we have seen already
    return the maxScore
    
    */
    const lettersAvailable = (word) => {
        for ( let i =0; i < word.length; i++){
            if(freqCtr[word[i]] === 0 || freqCtr[word[i]] === undefined ){
                for(let j = 0; j < i; j++){
                    freqCtr[word[j]]++
                }
                return false
            }else
                freqCtr[word[i]]--
        }
        return true;
    }
    
    
    const updateFreqCtr = ( word ) => {
        for( ch of word){
          freqCtr[ch]++
        }
    }
    
    const dfs = (i) => {
        if(i >= words.length) return 0
        
        const skipWordScore = dfs(i+1) 
        const sc = lettersAvailable(words[i])? wordsScore[i]: 0;
        if(sc == 0) return skipWordScore
        const remainingWordScore = dfs(i+1)
        updateFreqCtr(words[i])
        return Math.max(sc+remainingWordScore, skipWordScore)
    }
    
    
    return dfs(0)
    
};
