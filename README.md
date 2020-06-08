
# Use of Raspberry Pi libraries to access Gpio pins with Node.js [![N|Solid](http://sanusb.blogspot.com.br/favicon.ico)](http://sanusb.org/)

In tests performed with Raspberry Pi (Rpi) zero W, 1, 2, 3 and 4, the libraries `node-rpio` (physical pin-based numbering), `onoff` (BCM pin-based numbering) and `rpi-gpio` (physical pin-based numbering) for access to GPIO pins, this only work with manual installation. NVM did not respond well when installing the libraries using Raspberry Pi OS Buster. Functional version tested from node was 4.9.1 (lts/argon):

## Raspberry Pi Zero W and 1:

```
wget https://nodejs.org/dist/v4.9.1/node-v4.9.1-linux-armv6l.tar.gz
tar -xvf node-v4.9.1-linux-armv6l.tar.gz
cp -r node-v4.9.1-linux-armv6l/* /usr/local/
```

## Raspberry Pi 2, 3 e 4:

```
wget https://nodejs.org/dist/v4.9.1/node-v4.9.1-linux-armv7l.tar.gz
tar -xvf node-v4.9.1-linux-armv7l.tar.gz
cp -r node-v4.9.1-linux-armv7l/* /usr/local/
```

For comparison, install the three libraries:


* npm install rpio ([node-rpio](https://github.com/jperkin/node-rpio))
* npm install onoff ([onoff](https://www.npmjs.com/package/onoff))
* npm install rpi-gpio ([rpi-gpio](https://www.npmjs.com/package/rpi-gpio))

The library tested examples are in the examples folder. As stated below, after installing the rpio library, it is necessary:

### Disable GPIO interrupts

If running a newer Raspbian release, you will need to add the following line to
`/boot/config.txt` and reboot:

```
dtoverlay=gpio-no-irq
```

### Enable /dev/gpiomem access

By default the module will use `/dev/gpiomem` when using simple GPIO access.
To access this device, your user will need to be a member of the `gpio` group,
and you may need to configure udev with the following rule (as root):

```console
$ cat >/etc/udev/rules.d/20-gpiomem.rules <<EOF
SUBSYSTEM=="bcm2835-gpiomem", KERNEL=="gpiomem", GROUP="gpio", MODE="0660"
EOF
```

From now on it is possible to test the examples of the three libraries for accessing Gpio pins with Node.js.


