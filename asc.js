  const fun = new Promise((res,rej)=>{

const randomVAL = Math.random();

if (randomVAL>0.5) {
    res(`this is resolve message${randomVAL}`)
    
} else {
    rej(`this is rej message${randomVAL}`)
}

  })

  fun.then((res)=>{
      
      console.log ("res",res)
    }).catch((err)=>{
        
        console.log("err",err)
  })