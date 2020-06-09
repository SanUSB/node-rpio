const Gpio = require('onoff').Gpio; // Gpio class
const led = new Gpio(18, 'out');       // BCM pin-based numbering

// Toggle the state of the LED connected to GPIO18 every 1000ms
const iv = setInterval(_ => {
  led.writeSync(led.readSync() ^ 1);
  console.log('onoff');  
}, 1000);

// Stop blinking the LED after 50 seconds
setTimeout(_ => {
  clearInterval(iv); // Stop blinking
  led.unexport();    // Unexport GPIO and free resources
}, 50000);

