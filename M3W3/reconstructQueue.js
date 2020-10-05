var reconstructQueue = function(people) {
  let res = []
  people.sort((a,b) => a[0] === b[0]? a[1] - b[1] : b[0] - a[0])
  for( let p of people){
    res.splice(p[1], 0, p)
  }
  return res
};
