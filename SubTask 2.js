let common = (functionName,time)=>{
    return new Promise(resolve => {
        setTimeout(()=>{
            console.log(functionName + " is resolve in " + time)
            resolve(time)
        },time)
    })
}
// let A =common("A",2000);
// let  B =  common("B",3000)
// let  C =  common("C",4000)
// let  D =  common("D",5000)
// let  End =  common("End",6000)

Promise.all([common("A", 2000).then(() => {
    common("B", 10000).then((value) => {
        console.log(value)
    })
}), common("D", 3000)])
    .then((value)=>{
    console.log(value[0])
    console.log(value[1])
}).then(()=>{
    return common("C",5000)

}).catch((error)=>{
    console.log(error)
}).finally(async ()=>{
   await common("End",0)
})