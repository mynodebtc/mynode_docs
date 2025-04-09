# My Device has a Lightning Network Error

If your device gets into a state indicating "Network Error" as a Lightning Status, it means there has been a problem with Lightning launching and it is unable to properly connect to a network it can use for communication. This can typically be resolved by changing the Lightning network to Tor-only on the main settings page.

## Check the Lightning Log

To confirm you are having this issue, find the Lightning log on the status page and check it for errors. If you see a log line similar to the one below, that will confirm you are having Lightning network issues.

```
Jan 12 14:57:21 mynode lnd[15786]: unable to create server: unable to discover a NAT-PMP enabled device on the local network
```

This is caused by your network config being set to use Clearnet for Lightning. The Lightning daemon is attempting to communicate with your router to open a port and is failing. You can disable Clearnet or customize your config to resolve this issue.

If you router has public IP address and you are skilled and able to configure port forwarding, you can edit your Lightning config to resolve the issue and continue using Clearnet. 

## Simple Resolution - Enable Tor

First, go to the main settings page on your node and scroll to the "Networking" section. In the row for Lightning, disable Clearnet and enable Tor. Save the config. Your device will reboot and Lightning should start as expected.

If you are still having issues, that setting may not have taken effect because of a [custom Lightning config](/advanced/customize-config.md). Reset your custom Lightning config back to the default so the network settings can take effect.

## Advanced Resolutions
<br/>
<details>
<summary><b>Show Advanced Resolutions</b></summary>

## Custom Config with Static Public IP

As UPnP is not working, another option is to configure port forwarding on your router / firewall device and add required parameters to Additional LND Config on MyNode. This is not guaranteed to work and is not supported by some ISPs as they do not provide your router a real public IP address.

Configure your modem/router/firewall to enable port forwarding from your public IP address TCP port 9735 to you MyNode device's IP address port 9735.

Go to MyNode main settings page. Find "Lightning" below it click "Edit Config" and "LND Custom Config" page opens. 
In the "Additional LND Config" text box enter configuration lines:
```
# Nonworking UPnP Router fix
nat=false

[Application Options]
externalhosts=<YOUR-EXTERNAL-IP>:9735
```

Usually, the public IP addresses of home Internet connections are not static, and therefore change once a while. So this solution is acceptible _only if you have _real_ static IP_ from your ISP (or cloud) provider.

## Custom Config with Dynamic Public IP

Internet connections with Dynamic Public IP addresses require bit more configuration. 

Dynamic DNS must be implemented and DNS hostname must be configured to Additional LND Config.

Dynamic DNS (DDNS) hostname can be created for free by opening account to eg. www.no-ip.com, but free DDNS hostnames must be re-verified every 30 days or so. These will give you a domain name to use in place of your public IP since it may change. Let's say you make account and create DDNS hostname "mymynodebtc.ddns.net".

To keep DDNS hostname's IP address updated in case of IPS changes your address, you need to do one of following.

a) Install and configure DDNS Client software to your MyNode (eg. https://www.noip.com/download?page=linux) and verify it is working properly.

b) Enable and configure DDNS Service on your Modem/Router/Firewall if it supports such functionality.

After the DDNS software is configured and running, you can add following lines in your Additional LND Config (do not include the line with IP Address shown in the previous section).
```
# Nonworking UPnP Router fix
nat=false

[Application Options]
tlsextradomain=mymynodebtc.ddns.net
externalhosts=mymynodebtc.ddns.net:9735
```

Be sure to use your own DDNS hostname instead of this sample one. Press Save and your MyNode will reboot with new settings.

From the MyNode Main page, click Lightning - Wallet. Notice on "URI" you have your node long ID followed by your IP address:9735 shown! This means the configuration was successful. Now, click TLS Certificates button _regenerate_. After regeneration is complete, click download and save certificate (on Windows machine) as tls.crt (not .cert!). Open .crt file and verify from Details tab field "Subject Alternative Name". Your DDNS hostname must included on the DNS Name= ... list.

Now your LND is able to receive channels from clearnet.

## Custom Config with Dynamic Public IP and Domain

If you own the domain (say mydomain.com), you can also use that domain name by continuing from the above example. Add a CNAME for your DDNS address alias in your domain DNS records like this:

```myownnode IN CNAME mymynodebtc.ddns.net.```

Add this new hostname with additional tlsextradomain to config. In this more advanced case, the config would now be:
```
# Nonworking UPnP Router fix
nat=false

[Application Options]
tlsextradomain=myownnode.mydomain.com
tlsextradomain=mymynodebtc.ddns.net
externalhosts=mymynodebtc.ddns.net:9735
```

Re-create TLS certs, download and verify DNS Name= list from cert. 
Now your node can be connected with the short address:

```https://myownnode.mydomain.com:9735```

Now, this address will work even if your ISP changes your public IP.

If you now plan to provide BTCPay Server or LNbits via clearnet - you are not quite done yet. BTCPay and LNbits require https traffic to public TCP port 443 and non-selfsigned TLS certificates. Such certs be created with Linux with certbot installed on MyNode. HTTPS traffic inside of MyNode can be forwared with nginx configs, but those configurations are out of scope for this guide.

</details>