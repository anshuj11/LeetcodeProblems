/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function(price, special, needs) {
    
    const helper = (n) => {
      let minPrice = n.reduce((acc, el, i) => acc + el*price[i], 0)
      for( let i = 0; i < special.length; i++){
        let remainder = [];
        let offerPrice = 0;
        let j = 0;

        for(; j < special[i].length - 1; j++){
          if(n[j] < special[i][j] )
            break;
          else
            remainder.push(n[j] - special[i][j])
        }
        if(j === special[i].length - 1){
          offerPrice += special[i][j]
          minPrice = Math.min(offerPrice + helper(remainder), minPrice)
        }

      }  
      return minPrice
    }
    
    return helper(needs)
};
