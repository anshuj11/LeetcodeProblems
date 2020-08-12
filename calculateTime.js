var calculateTime = function(keyboard, word) {
   let timeTaken = 0; 
   let prev = 0; 
   word.split("").forEach(ch => {
       const i = keyboard.indexOf(ch)
       timeTaken += Math.abs(i - prev)
       prev = i;
   }) 
    return timeTaken
};
