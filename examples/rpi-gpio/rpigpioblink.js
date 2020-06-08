var gpio = require('rpi-gpio');
var pin = 12; // physical pin-based numbering
gpio.setup(pin, gpio.DIR_OUT, start);

function start() {
 setInterval(t, 1000);
}
function on() {
 gpio.write(pin, true);
}
function off() {
 gpio.write(pin, false);
}
var ledOn=false;

function t() {
 if (ledOn) {
    off();
 
 } else {
    on();
 }
    ledOn=!ledOn;
}

