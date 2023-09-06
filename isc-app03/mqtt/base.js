const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const config = require("../config.js");

const port = new SerialPort({
    path: config.MCU_PORT,
    baudRate: config.MCU_BAUDRATE
})

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

parser.on('data', console.log)

const mqtt = require("mqtt");
module.exports = function(){
    const client = mqtt.connect("mqtt://"+config.MQTT_HOSTNAME);
    client.on("connect", () => {      
      client.subscribe(config.MQTT_MCUTOPIC, (err) => {
        console.log("Conectado al topic del mcu")
      });      
    });
    
    client.on("message", (topic, message) => {
      // message is Buffer
      //console.log(message.toString());
      if (topic==config.MQTT_MCUTOPIC){
        console.log("ENVIO AL MCU:"+message.toString())
        port.write(message.toString());
      }
      //client.end();
    });
}


