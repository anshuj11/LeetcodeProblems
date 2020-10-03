var reorderSpaces = function(text) {
    let spCnt = 0
    for(ch of text)
      if( ch == ' ')
        spCnt++
    let temp = ""
    let word = []
    let wCnt = 0
    for(let i = 0; i < text.length; i++){
      if( text[i] !== ' '){
        temp += text[i]
      }else{
        if(temp != "")
          word.push(temp)
        temp = ''
        while(text[i] == ' ')
          i++
        i--
      }
    }
    if(temp != "")
      word.push(temp)
    // console.log(`word: ${word}`)
    let sp = spCnt
    if(word.length > 1)
      sp = Math.floor(spCnt/(word.length - 1))
    // console.log(`sp: ${sp}`)
    // console.log(`spCnt: ${spCnt}`)
    let j = 0
    let spcr = ""
    while( j < sp){
      spcr += ' '
      j++
    }
    let res = word[0]
    for( let i = 1; i < word.length; i++ ){
      res += (spcr + word[i])
      spCnt -= sp
    }
  // console.log(`res: ${res}`)
    while(spCnt >0){
      res+=" "
      spCnt--;
    }  
    return res
}; 
