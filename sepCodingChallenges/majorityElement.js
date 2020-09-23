var majorityElement = function(nums) {
  let [n1, n2, cnt1, cnt2] = [0,1, 0, 0]
  //console.log(`n1: ${n1}, n2: ${n2}`)
  
  for(n of nums){
    if(n  ==  n1){
      cnt1++
    }else if(n == n2){
      cnt2++
    }else if(cnt1 == 0){
      n1 = n
      cnt1 = 1
    }else if(cnt2 == 0){
      n2 = n
      cnt2 = 1
    }else{
      cnt1--
      cnt2--
    }
  }
  cnt1 = 0
  cnt2 = 0
  //console.log(`n1: ${n1}, n2: ${n2}`)
  for(n of nums){
    if(n == n1) cnt1++
    if(n == n2) cnt2++
  }
  let res = []
  if(cnt1 > nums.length/3 )
     res.push(n1)
  if(cnt2 > nums.length/3 )
    res.push(n2)
  return res
};
