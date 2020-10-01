var relativeSortArray = function(arr1, arr2) {
    let map2 = {}
    arr2.forEach((el,i) => map2[el] = i)
    arr1.sort((a,b) => {
              if( map2[a] === undefined  && map2[b] === undefined)
                return (a - b)
              else if( map2[a] !== undefined && map2[b] !== undefined)
                return (map2[a] - map2[b])
             else if( map2[a] === undefined )
                 return 1
             else
                 return -1
    })
    return arr1
  
};
