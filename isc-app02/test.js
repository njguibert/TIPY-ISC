const { SerialPort } = require('serialport')


//var SerialPort = require("serialport").SerialPort;
/*var five = require("johnny-five");
var board = new five.Board({
  port: new SerialPort("COM3", {
    baudrate: 9600,
    buffersize: 1
  })
});
*/
const { Board } = require("johnny-five");

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
const board = new Board({port:new SerialPort({
    path: 'COM3',
    baudRate: 57600,
    buffersize: 1
})});

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", () => {
  board.pinMode(13, board.MODES.OUTPUT);

  board.loop(500, () => {
    // Whatever the last value was, write the opposite
    board.digitalWrite(13, board.pins[13].value ? 0 : 1);
  });
});