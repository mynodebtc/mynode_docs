# Connect WiFi

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
