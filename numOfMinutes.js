var numOfMinutes = function(n, headID, manager, informTime) {
    
    let directReports = new Map;
   
    manager.forEach((el, i) =>{
        if(directReports[el]){
            directReports[el].push(i)
        }else{
            directReports[el] = [i]
        }
    })
    
    var helper = function(subHead){
        const directReportsInformTime = []
        let res = informTime[subHead]
       
        if(!directReports[subHead]) {
            return res;
        }
        //console.log(`directReports[${subHead}]: ${directReports[subHead]}`)
        directReports[subHead].forEach(el =>{
          directReportsInformTime.push(helper(el))   
        })
        res += Math.max(...directReportsInformTime)
        //console.log(`Res: ${res}`)
        return res
        
    }
    res = helper(headID)
    return res;
};
