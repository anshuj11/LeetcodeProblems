/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = []
    for( let i = 0 ; i < l.length; i++){
      let temp = []
      for( let j = l[i]; j <= r[i]; j++){
        temp.push(nums[j])
      }
      temp = temp.sort( (a,b) => a - b)
      if( temp.length < 2)
        res.push( true)
      else{
        let delta = temp[1] - temp[0]
        let k = 2
        while(k < temp.length && delta == (temp[k] - temp[k - 1])) k++
        if( k == temp.length)
          res.push(true)
        else
          res.push(false)
      }
        
    }
    return res
};
