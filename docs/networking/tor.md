# Using Tor for Bitcoin and LND

## Overview

Tor is a technology that allows devices to communicate securely and privately via the Internet. This technology can be incredibly useful to Bitcoin and Lightning by securing connections between the devices you use everyday and your myNode.

By default, tor is enabled for Bitcoin and Lightning connections to the network for both Community and Premium users. This helps simplify network configuration and provide security. Some advaned users may want to disable this, and that option is available on the settings page.

For more information on Tor, visit their [website](https://www.torproject.org/).

## Enabling or Disabling Tor for Bitcoin and LND

To view or modify your current Tor setting for use by Bitcoin and LND, look for the Networking section on the settings page. Move the slider to enable or disable Tor for LND and/or Lightning and click Save. Your device will reboot and Bitcoin and LND will be using the new Tor setting.

If your router does not have UPnP and/or NAT-PMP enabled, disabling Tor will break your lightning node.

If you want to allow inbound connections from other nodes on Clearnet, you would need to open port 8333 on your router first.  Reference:
https://bitcoin.org/en/full-node#network-configuration

<center>
  <figure>
    <img src="/images/networking/tor_enable_disable.png" alt="tor enable disable">
  </figure>
</center>
