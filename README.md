
# Node.js libraries to access the Raspberry Pi Gpio Pins [![N|Solid](http://sanusb.blogspot.com.br/favicon.ico)](http://sanusb.org/)

During tests performed with Raspberry Pi (Rpi) zero W, 1, 2, 3 and 4, the libraries `node-rpio` (physical pin-based numbering), `pigpio` (BCM pin-based numbering), `onoff` (BCM pin-based numbering) and `rpi-gpio` (physical pin-based numbering) for access to GPIO pins, only work with manual installation. The nvm (node version manager) did not work well when installing these libraries using Raspberry Pi OS Buster. Functional versions tested from node was `4.9.1` (lts/argon) and `10.21.0` (if failures occur in version 10.21.0, type in example folder: `npm rebuild` and `reboot`). Tutorial: https://youtu.be/GDnDrZjyT7s.

To manually remove the previous node, npm (node package manager) and nvm files and configurations, enter the commands below at the terminal:

```
rm -rf $NVM_DIR ~/.npm ~/.bower && unset NVM_DIR
rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}
```

And remove the following lines at the end of /root/.bashrc (`nano /root/.bashrc`):

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion
```

## Install node and npm on Raspberry Pi Zero W and 1 (Arm6):

```
wget https://nodejs.org/dist/v4.9.1/node-v4.9.1-linux-armv6l.tar.gz
tar -xvf node-v4.9.1-linux-armv6l.tar.gz
cp -r node-v4.9.1-linux-armv6l/* /usr/local/
```

**or**

```
wget https://nodejs.org/dist/v10.20.1/node-v10.20.1-linux-armv6l.tar.gz
tar -xvf node-v10.20.1-linux-armv6l.tar.gz
cp -r node-v10.20.1-linux-armv6l/* /usr/local/
```

## Install node and npm on Raspberry Pi 2, 3 e 4 (Arm7):

```
wget https://nodejs.org/dist/v4.9.1/node-v4.9.1-linux-armv7l.tar.gz
tar -xvf node-v4.9.1-linux-armv7l.tar.gz
cp -r node-v4.9.1-linux-armv7l/* /usr/local/
```

**or**

```
wget https://nodejs.org/dist/v10.20.1/node-v10.20.1-linux-armv7l.tar.gz
tar -xvf node-v10.20.1-linux-armv7l.tar.gz
cp -r node-v10.20.1-linux-armv7l/* /usr/local/
```

And for comparison, install the libraries:

* `npm install rpio` ([node-rpio](https://github.com/jperkin/node-rpio))
* `npm install pigpio` ([pigpio](https://www.npmjs.com/package/pigpio))
* `npm install onoff` ([onoff](https://www.npmjs.com/package/onoff))
* `npm install rpi-gpio` ([rpi-gpio](https://www.npmjs.com/package/rpi-gpio))

The libraries tested examples are in the examples folder. As stated below, after installing the node-rpio library, it is necessary:

### Disable GPIO interrupts

If running a newer Raspberry Pi OS release, you will need to add the following line to
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

From now on it is possible to test the [examples](https://github.com/SanUSB/node-rpio/tree/master/examples) of the libraries for accessing Gpio pins with Node.js. 
To avoid possible errors, it is recommended that the examples folder be run in /home/pi. If there is a process from a previous example, you can check the processes with the `ps` command in terminal and delete with `kill -9 "PID number"` command, for example, `kill -9 2681`or simply `reboot`.


