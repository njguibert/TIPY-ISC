$(document).ready(function(){  
   const socket = io();
   socket.on("ValorActualLed",function(ValorLed){
    console.log("ValorLed:"+ValorLed);
    if (ValorLed==0) $("#lbl_led_status").text("Led Apagado");
    if (ValorLed==1) $("#lbl_led_status").text("Led Encendido");

   });
   socket.on("ValorActualPulsador",function(ValorPulsador){
    $("#lbl_pulsador_status").text(ValorPulsador);
   })

   $("#btn_on").click(function(){
       socket.emit("LED",1,function(data){
          if (data) $("#lbl_led_status").text("Led Encendido");
	       console.log(data);
        

	});
   });

   $("#btn_off").click(function(){
       socket.emit("LED",0,function(data){
	   console.log(data);
       if (data) $("#lbl_led_status").text("Led Apagado");
	});
   });
});