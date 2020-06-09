'use strict';

const Gpio = require('pigpio').Gpio;

const led = new Gpio(18, {mode: Gpio.OUTPUT});

setInterval(() => {
  led.digitalWrite(led.digitalRead() ^ 1);
  console.log('pigpio');  
}, 1000);
