function countones(num){
    let count = 0;
    while(num > 0){
        num % 2 == 1 ? count+=1 : count;
        num = Math.floor(num/2)
    }
    return count
}
var sortByBits = function(arr) {
    arr.sort( (a,b) => countones(a) - countones(b) === 0 ? a - b : countones(a) - countones(b))
    return arr
};
