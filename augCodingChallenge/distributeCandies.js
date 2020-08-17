var distributeCandies = function(candies, num_people) {
    let ctr = 0;
    let res = new Array(num_people).fill(0)
    for(let i=0;candies > 0;i++){
        ctr++
        if(candies > ctr)
            candies -= ctr
        else{
            ctr = candies
            candies = 0
        }
        res[i%num_people] += ctr
         
    }
    return res
};
