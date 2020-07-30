/**
 * Initialize your data structure here.
 */
var HitCounter = function() {
    counter = [[1,0]]
    start = 0;
    
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
        if(counter[counter.length - 1][0] === timestamp){
            counter[counter.length - 1][1] = counter[counter.length - 1][1] + 1
        }else{
            while(counter[counter.length - 1][0] < timestamp){
                if( timestamp - counter[counter.length - 1][0] > 300 ){
                    counter = [[timestamp, 0]]
                }else{
                    counter.push([counter[counter.length - 1][0] + 1, 0])
                    if(counter.length > 300)
                        counter.shift()
                }
            }
            counter[counter.length - 1][1] = 1
        }
    //    console.log(`counter: ${counter}`)
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    while(counter[counter.length - 1][0] < timestamp){
        if( timestamp - counter[counter.length - 1][0] > 300 ){
           counter = [[timestamp, 0]]
        }else{
           counter.push([counter[counter.length - 1][0] + 1, 0])
           if(counter.length > 300)
              counter.shift()
        }
    }
    let x = 0;
    counter.forEach(el => {
        x = x + el[1]
    })
    return x
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
