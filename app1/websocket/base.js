const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const puertoserie = new SerialPort('COM3', { baudRate: 9600 })
const parser = new Readline()
puertoserie.pipe(parser)

var ledStatus=0,pulsadorStatus=0;

module.exports = function(io){

  puertoserie.on('data', function (data) {
      console.log('Data:', data.toString());
      if (data.toString()=="0") io.emit("ValorActualPulsador","Presionado");
      if (data.toString()=="1") io.emit("ValorActualPulsador","En Reposo");
  })


  io.on("connection",function(socket){

    console.log("Socket conectado");
    socket.emit("ValorActualLed",ledStatus);
    socket.on("LED",function(valorLED,callback){
      ledStatus=valorLED;
      console.log("ValorLED:"+valorLED);
      puertoserie.write(valorLED.toString());
      io.emit("ValorActualLed",ledStatus);
    	callback(true);
    });


  });

}