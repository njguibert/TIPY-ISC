const { SerialPort } = require('serialport')
const  {ReadlineParser} = require('@serialport/parser-readline')

const puertoserie = new SerialPort({
  path:"/home/jesus/virtual2",
  baudRate: 9600
})
const parser = new ReadlineParser();

puertoserie.pipe(parser)

var dataSerial ="";


module.exports = function(io){

  parser.on("data",function(data){
    console.log(data);
    io.emit("mensaje_del_mcu",data);
  })
  
  io.on("connection",function(socket){
    console.log("Socket conectado");

    socket.on("LED",function(valorLED,callback){
      console.log("valorLED:"+valorLED);
      puertoserie.write(valorLED);
      callback(true);
    });
  
  });

}