const fs = require("fs") 

fs.rename('/home/mmc/tronserver/js/xx' , '/home/mmc/tronserver/js/x' , (err)=>{
  if (err) throw err 
   console.log("renamed complete");
}) 

fs.stat('/home/mmc/tronserver/js/xx' , (err , stats ) => {
  if (err ) throw err 

  console.log(`stats : ${JSON.stringify(stats)}`);
})
