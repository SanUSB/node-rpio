'use strict';

const Gpio = require('pigpio').Gpio;

const led = new Gpio(18, {mode: Gpio.OUTPUT});
const button = new Gpio(4, {
  mode: Gpio.INPUT,
  pullUpDown: Gpio.PUD_DOWN,
  edge: Gpio.EITHER_EDGE
});

button.on('interrupt', (level) => {
  led.digitalWrite(level);
});

