const config = {
    MCU_PORT: process.env.MCU_PORT || "COM3",
    MCU_BAUDRATE: process.env.MCU_BAUDRATE || 57600,
    MQTT_HOSTNAME: process.env.MQTT_HOSTNAME|| "test.mosquitto.org",
    MQTT_MCUTOPIC: process.env.MQTT_MCUTOPIC || "mcutopic"
};
module.exports = config;