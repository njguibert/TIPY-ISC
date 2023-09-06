$(document).ready(function(){
  const socket=io();
  socket.on("EnviarParametros",(parametros)=>{
    console.log("EnviarParametros"+JSON.stringify(parametros));
  })
  $("#btn_on").click(()=>{
    //alert("Enciendo el led.");

    socket.emit("AccionarLED","p",(response)=>{
      console.log("Valor de callback:"+response);
    })

  })

  $("#btn_off").click(()=>{
    //alert("Apagar el led.");
    socket.emit("AccionarLED","a",(response)=>{
      console.log("Valor de callback:"+response);
    })    
  })
  
});