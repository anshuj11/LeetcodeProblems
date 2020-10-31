/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
  
  const addA = (str) => {
    str = str.split('')
    for( let i = 0; i < str.length; i++){
      if( i % 2 !== 0){
        str[i] = (Number(str[i]) + a) % 10
      }
    }
    return str.join('')
  }
  
  const rotateB = (str) => {
    str = str.slice(b) + str.slice(0, b)
    return str
  }
  
  let col = new Set
  
  let q = [s]
  
  while( q.length > 0){
    let str = q.pop();
    
    if(!col.has(str)){
      col.add(str)
      q.push(addA(str))
      q.push(rotateB(str))
    }
  }
  
  let arr = Array.from(col)
  
  let min = Infinity;
  let minStr = ""
  for( let i = 0; i < arr.length; i++){
    if( min > Number(arr[i])){
      min = Number(arr[i])
      minStr = arr[i]
    }
  }
  
  return minStr
  
};
