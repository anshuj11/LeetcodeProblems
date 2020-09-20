var maxCoins = function(piles) {
    piles.sort((a,b) => a - b)
  let rounds = piles.length/3;
  let sum = 0;
  for(let i = 0 , j = piles.length - 2 ; i < rounds;  i++, j-=2){
    sum += piles[j]
  }
  return sum
};
