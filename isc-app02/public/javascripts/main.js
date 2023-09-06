$(document).ready(function(){
  const socket=io();

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