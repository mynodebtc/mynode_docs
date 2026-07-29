---
title: "Customizing Bitcoin and LND Config"
description: "Edit bitcoin.conf and lnd.conf from the MyNode web interface to tune bandwidth, peers, and node policy. Custom settings survive reboots and platform upgrades."
tags:
- "Bitcoin config"
- "LND config"
- "MyNode"
- "advanced setup"
---

# Customizing Bitcoin and LND Config

## Customizing your Bitcoin Configuration
MyNode generates much of the Bitcoin config automatically so it can easily communciate with other services on the device. However, you may want to tweak certain settings to control bandwidth, add specific peers, etc...


To do this, you can edit the config via the Bitcoin page in the MyNode UI.

<center>
  <figure>
    <img src="/images/advanced/custom_bitcoin_config1.png" alt="MyNode Bitcoin Status page with the view / edit button next to Config highlighted">
  </figure>
</center>

Make any changes you like and click save once you are complete. Saving will reboot the device.

<center>
  <figure>
    <img src="/images/advanced/custom_bitcoin_config2.png" alt="Bitcoin Config editor showing the contents of bitcoin.conf in a text area, with the Save button highlighted">
  </figure>
</center>

Once a custom config is used, any future updates to the default config will not be applied. To reset
and use the default config, you will need to reset the config via "Reset Config" button.

<center>
  <figure>
    <img src="/images/advanced/custom_bitcoin_config3.png" alt="Bitcoin Config editor with the Reset Config button highlighted, used to restore the default bitcoin.conf">
  </figure>
</center>

Once the file has been saved or reset, the new settings will be applied to your bitcoin.conf 
file, even between reboots and upgrades!

## Customizing the your LND Configuration

MyNode generates much of the LND config automatically so it can easily communciate with other  services on the device. However, you may want to tweak certain settings to control bandwidth, peers, etc...

To do this, you can edit the config via the Lightning page in the MyNode UI.

<center>
  <figure>
    <img src="/images/advanced/custom_lightning_config1.png" alt="MyNode Lightning Status page with the view / edit button next to Config highlighted">
  </figure>
</center>

Make any changes you like and click save once you are complete. Saving will reboot the device.

<center>
  <figure>
    <img src="/images/advanced/custom_lightning_config2.png" alt="LND Custom Config editor showing the contents of lnd.conf in a text area, with the Save button highlighted">
  </figure>
</center>

Once a custom config is used, any future updates to the default config will not be applied. To reset and use the default config, you will need to reset the config via "Reset Config" button.

<center>
  <figure>
    <img src="/images/advanced/custom_lightning_config3.png" alt="LND Custom Config editor with the Reset Config button highlighted, used to restore the default lnd.conf">
  </figure>
</center>

Once the file has been saved or reset, the new settings will be applied to your lnd.conf file, even between reboots and upgrades!