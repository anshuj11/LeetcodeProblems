var pushDominoes = function(dominoes) {
    let change = true;
    dominoes = dominoes.split('')
    while(change){
      change = false;
      let tempD = dominoes.slice()
      if( dominoes[0] === '.' && dominoes[1] === 'L'){
        tempD[0] ='L'
        change = true
      }
      let i = 1
      for( ; i < dominoes.length - 1; i++){
        if(dominoes[i] !== '.') continue;
        if(dominoes[i - 1] === 'R' && dominoes[i+1] === 'L') continue;
        if(dominoes[i - 1] === 'R' ) {
          tempD[i] = 'R'
          change = true
        }
        if(dominoes[i + 1] === 'L' ) {
          tempD[i] = 'L'
          change = true
        }
      }
      if( dominoes[i] === '.' && dominoes[i - 1] === 'R'){
        tempD[i] = 'R'
        change = true;
      }
      dominoes = tempD.slice()
    }
  return dominoes.join('')
};
