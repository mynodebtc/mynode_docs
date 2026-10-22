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
MyNode generates much of the Bitcoin config automatically so it can easily communicate with other services on the device. However, you may want to tweak certain settings to control bandwidth, add specific peers, etc...

To do this, open the Bitcoin page in the MyNode UI and click "view / edit" next to Config.

<center>
  <figure>
    <img src="/images/advanced/custom_bitcoin_config1.png" alt="MyNode Bitcoin Status page with the view / edit button next to Config highlighted">
  </figure>
</center>

The Bitcoin Config page has two sections. In most cases, use **Additional Bitcoin Config**: anything you enter under Pre Bitcoin Config or Post Bitcoin Config is added to the top or bottom of the config MyNode generates, so you keep getting MyNode's updates to the default config. Enter your password and click Save. Saving will reboot the device.

<center>
  <figure>
    <img src="/images/advanced/custom_bitcoin_config2.png" alt="Additional Bitcoin Config section with Pre Bitcoin Config and Post Bitcoin Config text areas, a password field, and the Save button highlighted">
  </figure>
</center>

The **Override Bitcoin Config** section below it replaces the entire bitcoin.conf with your own. Once you save an override, future updates to the default config will not be applied, and many other MyNode settings will have no effect. To go back to the default config, click "Reset Config", which also reboots the device.

<center>
  <figure>
    <img src="/images/advanced/custom_bitcoin_config3.png" alt="Override Bitcoin Config section showing the full bitcoin.conf in a text area, with the Reset Config button highlighted">
  </figure>
</center>

Once the config has been saved or reset, the new settings will be applied to your bitcoin.conf file, even between reboots and upgrades!

## Customizing your LND Configuration

MyNode generates much of the LND config automatically so it can easily communicate with other services on the device. However, you may want to tweak certain settings to control bandwidth, peers, etc...

To do this, open the Lightning page in the MyNode UI and click "view / edit" next to Config.

<center>
  <figure>
    <img src="/images/advanced/custom_lightning_config1.png" alt="MyNode Lightning Status page with the view / edit button next to Config highlighted">
  </figure>
</center>

In most cases, use **Additional LND Config**: anything you enter there is added to the bottom of the config MyNode generates. Enter your password and click Save. Saving will reboot the device.

<center>
  <figure>
    <img src="/images/advanced/custom_lightning_config2.png" alt="Additional LND Config section with a text area, a password field, and the Save button highlighted">
  </figure>
</center>

The **Override LND Config** section below it replaces the entire lnd.conf with your own. Once you save an override, future updates to the default config will not be applied. To go back to the default config, click "Reset Config", which also reboots the device.

<center>
  <figure>
    <img src="/images/advanced/custom_lightning_config3.png" alt="Override LND Config section showing the full lnd.conf in a text area, with the Reset Config button highlighted">
  </figure>
</center>

Once the config has been saved or reset, the new settings will be applied to your lnd.conf file, even between reboots and upgrades!
