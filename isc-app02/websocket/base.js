/*const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
})
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)
*/
const { SerialPort } = require('serialport')
const { Board } = require("johnny-five");
const board = new Board({port:new SerialPort({
  path: 'COM3',
  baudRate: 57600,
  buffersize: 1
})});

board.on("ready", () => {
  board.pinMode(13, board.MODES.OUTPUT);

  /*board.loop(500, () => {
    // Whatever the last value was, write the opposite
    board.digitalWrite(13, board.pins[13].value ? 0 : 1);
  });*/


});

module.exports = function(io){
    io.on("connection",(socket)=>{
      console.log("Socket conectado");
      socket.send("EnviarParametros");
      socket.on("AccionarLED",(argumento1,fncallback)=>{
        console.log("AccionarLED:"+argumento1)    
        if (argumento1=="p") board.digitalWrite(13, 1);
        else if (argumento1=="a") board.digitalWrite(13, 0);
        fncallback(true);
      })
      
    })
}