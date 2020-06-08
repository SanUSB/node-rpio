/*
 * Set the initial state to low.  The state is set prior to the pin
 * being actived, so is safe for devices which require a stable setup.
 */
var rpio = require('rpio');

rpio.open(12, rpio.OUTPUT, rpio.LOW); // physical pin-based numbering

/*
 * The sleep functions block, but rarely in these simple programs does
 * one care about that.  Use a setInterval()/setTimeout() loop instead
 * if it matters.
 */
while (1) {
        /* On for 1 second */
        rpio.write(12, rpio.HIGH);
        rpio.sleep(1);

        /* Off for half a second (500ms) */
        rpio.write(12, rpio.LOW);
        rpio.msleep(1000);
}

