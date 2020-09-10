var isAlienSorted = function(words, order) {
    order = order.split("")
    for(let i = 0; i < words.length - 1; i++){
        for(let j = 0; j < words[i].length; j++){
            let ind1 = order.indexOf(words[i][j]);
            let ind2 = (j < words[i + 1].length) ? order.indexOf(words[i + 1][j]) : -1
            if(ind1 < ind2) break;
            if( ind2 < ind1  ) return false
        } 
    }
    return true;
};
