const config = require("../config.js");
module.exports = function(io){
    io.on("connection",(socket)=>{
        console.log("Socket conectado");
        socket.emit("EnviarParametros",config);
      socket.on("AccionarLED",(argumento1,fncallback)=>{
        console.log("AccionarLED:"+argumento1)
        //if (argumento1=="p") port.write("p");
        //else if (argumento1=="a") port.write("a");
        fncallback(true);
      })
    })
}