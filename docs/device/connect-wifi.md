# Connect WiFi

## Remote login to myNode

Follow instructions to access the [linux terminal](/advanced/linux-terminal.html)

## Open Raspberry Pi Configuration window

1. In the terminal, enter `sudo raspi-config`
2. Enter the password when prompted. Configuration window (as seen below) will open up.

![Raspi-config](/images/wifi/wifi1.png)

3. Use up and down keys to select main menu options. Use left and right arrow to use options in the footer.
4. Press Enter while "System Options" is selected
5. Press Enter again to select "Wireless LAN"

![Wireless LAN](/images/wifi/wifi2.png)

6. Use the up and down key to scroll to your country code and press Enter.
7. Type the SSID (name) of your wireless network and press Enter.

![SSID](/images/wifi/wifi3.png)

8. Type the password of your wifi and press Enter.
9. Use the Right arrow key to select "Finish" and press Enter to quit the configuration window.

## Reconfigure WPA


1. Check the WPA settings by typing `cat /etc/wpa_supplicant/wpa_supplicant.conf`. It should look like

```bash
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=US

network={
	ssid="WIFI-NAME-5G"
	psk="wifiPassword"
}

```

2. Type `wpa_cli -i wlan0 reconfigure`. It should return `OK`.
3. Wait for few minutes and type `ifconfig wlan0`. Result should look like
```bash
wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.0.10  netmask 255.255.255.0  broadcast 10.0.0.255
        inet6 27js::7fb2:5e88:test:d4f1  prefixlen 64  scopeid 0x20<link>
        ether dc:a6:32:d5:a8:4a  txqueuelen 1000  (Ethernet)
        RX packets 13103  bytes 5948283 (5.6 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 16122  bytes 13300582 (12.6 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

```
4. Now you can disconnect the wired LAN and use the IP address next to `inet` to access the node.
