let A =  () =>{
    return new Promise(resolve => {
        let time = 5
        setTimeout(()=>{
            console.log("Function A is Resolve in "+time + " sec")
            resolve(time)
        },time*1000)
    })
}

let B =  async () =>{
    return new Promise(resolve => {
        let time = 10
        setTimeout(()=>{
            console.log("Function B is Resolve in "+time + " sec")
            resolve()
        },time*1000)
    })
}
let C = () =>{
    return new Promise(resolve => {
        let time = 3
        setTimeout(()=>{
            console.log("Function C is Resolve in "+time + " sec")
            resolve(time)
        },time*1000)
    })
}
let D =  () =>{
    return new Promise(resolve => {
        let time = 3
        setTimeout(()=>{
            console.log("Function D is Resolve in "+time + " sec")
            resolve(time)
        },time*1000)
    })
}
let End = () =>{
    return new Promise(resolve => {
        let time  = 2
        setTimeout(()=>{
            console.log("Function END is Resolve in "+time + " sec")
            resolve(time)
        },time*1000)
    })
}

   async function Start() {
        Promise.all([A().then( () => {
           B()
       }), D()]).then(async () => {
           await C()
       })

       // console.log(test)
   }

   async  function Run(){


   }

Run()