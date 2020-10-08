var numRabbits = function(answers) {
    answers.sort((a,b) => b - a)
    let res = answers[0] + 1
    let temp = answers[0]
    let tempCnt = 1
    for( let i = 1 ;  i < answers.length; i++) {
      if( answers[i] !== temp || tempCnt > temp || answers[i] === 0 ){
         res += answers[i] + 1
         temp = answers[i]
         tempCnt = 1
      }else
        tempCnt++
    }
    return res
};
