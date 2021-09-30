# Connect WiFi

## Purpose

To disconnect from wired ethernet connection and use WiFi instead, which makes it easier to relocate the node.

## Remote login to myNode

Follow instructions to access the [linux terminal](/advanced/linux-terminal.html)

## Check device status

- Type `nmcli dev status` and press Enter. You should find the ethernet to be connected and WiFi disconnected.
```bash
DEVICE  TYPE      STATE         CONNECTION         
eth0    ethernet  connected     Wired connection 1 
wlan0   wifi      disconnected  --                 
lo      loopback  unmanaged     -- 
```

## Connect to new network

1. `sudo nmtui`
2. Enter password
3. Use up/down and left/right keys to navigate.
4. Select "Activate Connection" and press Enter.
5. Select the WiFi name. Press Enter.
6. Enter the WiFi password. Press Enter.
7. An asterisk should appear next to the WiFi name.
8. Press Escape key twice to quit.

<center>

![NMTUI](/images/wifi/wifi-1.png)

</center>


<center>
        <figure>
                <img src="/images/wifi/wifi-2.png" class="app-screenshot"/> 
        </figure>
</center>

## Recheck device status
- Type `nmcli dev status` and press Enter. You should see that WiFi is now connected.
```bash
DEVICE  TYPE      STATE      CONNECTION         
eth0    ethernet  connected  Wired connection 1 
wlan0   wifi      connected  <WIFI SSID>          
lo      loopback  unmanaged  --

```

## Disconnect Ethernet cable

You can safely remove the ethernet cable.

## Find new IP

1. Type `ifconfig wlan0 | grep inet` to find the IP address on wireless network. Example

```bash
$ ifconfig wlan0 | grep inet
inet <LOCAL-IP>  netmask 255.255.255.0  broadcast 10.0.0.255
inet6 <LOCAL-IPv6>  prefixlen 64  scopeid 0x20<link>
```

2. Use the `LOCAL-IP` listed beside `inet` to access your node once it is disconnected from wired network

## Reconfigure LND for new IP

If you are using apps like Zap to remotely access your lightning node, you might have to regenerate the TLS certificates. To do so, go to the LND page of your myNode and click on "regenerate" button in the row of "TLS Certification".

<center>

![LND regenerate certificates](/images/wifi/wifi-3.png)

</center>

## Reconfigure VPN port forwarding

If you are using the VPN to remotely access your node, you need to change the IP address corresponding to the forwarded port in your router settings. Please refer your router manufacturer's website to find out how to forward ports.
