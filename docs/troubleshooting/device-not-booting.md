# My Device is not Booting

If your device does not appear to be booting, there can be several causes. Following these steps should help resolve the issue.

## Step 1 - Reboot

In rare cases, software bugs may prevent the user interface from loading, making it appear like the the device has not started or shut off. First, verify the lights of the device are on. If not, the power adapter may be bad or may have come loose or the device may have died. Either way, disconnect the power cable and reconnect it to the device. If the lights do not appear on the device or Ethernet cable within 60 seconds, there is likely a hardware failure with the power cable or device.

For more information on diagnosing Raspberry Pi 4 LEDs, visit this link.

[LED Codes](https://elinux.org/R-Pi_Troubleshooting#Normal_LED_status)

## Step 2 - Find the IP Address

If the device lights come on, try connecting to the device via the web UI again via mynode.local as well as the IP address. How to find the [device IP address](/advanced/find-device-ip.html).

If those tools cannot find an IP address, then the device may not be booting properly or not connecting to the network.

## Step 3 - Connect Keyboard and Monitor (optional)

Another option to help diagnose some issues, is to connect a keyboard and monitor to the device. After connecting the additional hardware, reboot the device and watch the monitor. It may show error messages that indicate the operating system cannot start, which can mean SD card failure, corruption, or operating system upgrade failures. If error messages appear, go to step 4 and try re-flashing the SD card.

If a login prompt appears, try logging in with the username admin and your myNode password. After logging in, you should see an IP address in the banner to use to connect to the user interface. If no IP address appears or the interface still cannot connect, you likely have a network issue preventing access. Going to step 4 may help resolve the issue, but it is more likely a different issue related to networking or failed hardware.

## Step 4 - Reflash SD Card

If the device has lights, proving it has power, the next thing to try is to re-flash the SD card. Some failed operating system updates, power outages, or SD card corruption can prevent the device from booting and be resolved by loading a fresh copy of the software. The myNode software was designed to limit the impact of this as much as possible. Nearly all ciritical data is stored on the external drive, so re-flashing the SD card will have limited side effects.

Detailed instructions on re-flashing are available on the myNode [download page](https://mynodebtc.com/download).

## Step 5 - Replace hardware

If all other steps have failed or the device does not light up, hardware failure may be to blame. Replacing the following parts may help.

- Power Supply (if not powering up)
- SD Card (if not booting properly, but powering up)
- Raspberry Pi / Other Device (if not booting properly or not powering up)