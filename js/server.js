
const fs  = require("fs") 

fs.rename('/home/mmc/tronserver/js/x' , '/home/mmc/tronserver/js/xz' , (err) =>{
  if(err ) throw err 

  fs.stat('/home/mmc/tronserver/js/xz' , (err , stats )=> {
    if (err ) throw err 
    console.log(`stats : ${JSON.stringify(stats)}`);
  })
})  