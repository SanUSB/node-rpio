var rpio = require('rpio'); 
 
LED = 12 // physical pin-based numbering
 
var ledState = 0; 
 
rpio.open(LED, rpio.OUTPUT, rpio.LOW); //define LED como output
 
setInterval(function() {
   ledState = !ledState; 
   if(ledState == 0) rpio.write(LED, rpio.HIGH);    
   else rpio.write(LED, rpio.LOW);   
   console.log('rpio');    
}, 1000); //delay 1000 ms
