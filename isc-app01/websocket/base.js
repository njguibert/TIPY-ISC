const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const port = new SerialPort({
    path: 'COM3',
    baudRate: 9600,
})
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)

module.exports = function(io){
    io.on("connection",(socket)=>{
        console.log("Socket conectado");

      socket.on("AccionarLED",(argumento1,fncallback)=>{
        console.log("AccionarLED:"+argumento1)
        if (argumento1=="p") port.write("p");
        else if (argumento1=="a") port.write("a");
        fncallback(true);
      })
    })
}