$(document).ready(function(){
  //alert("Web cargado");
  const socket=io();
  socket.on("mensaje_del_mcu",function(msg){
    console.log("Mensaje del MCU:"+msg);
    $("#lbl_mensaje_del_mcu").text(msg);
  })

  $("#btn_on").click(function(){
    socket.emit("LED","p",function(data){
      console.log("Valor de callback:"+data);
    })
  });

  $("#btn_off").click(function(){
    socket.emit("LED","a",function(data){
      console.log("Valor de callback:"+data);
    })
  });  
});