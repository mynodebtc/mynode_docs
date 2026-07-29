---
title: "Using MyNode with Zeus Wallet via Tor"
description: "Pair the Zeus mobile wallet with your MyNode Lightning node over Tor, scanning the REST onion lndconnect code so you can spend from your channels anywhere."
tags:
- "Zeus"
- "Tor"
- "Lightning wallet"
- "MyNode"
---

# Using MyNode with Zeus Wallet via Tor

## Enable Tor on your Mobile Device

#### Premium Feature

First, enable Tor on your mobile device. Follow the [Setup Tor Guide](/tor/setup).

## Using Zeus Mobile with MyNode via Tor

First, download the Zeus app to your mobile device.

Next open the app, go to settings and tap "Add a new node".

<center>
  <figure>
    <img src="/images/remote-access-tor/zeus-wallet-1.png" class="app_screenshot" alt="Zeus settings screen reading No Nodes with the Add a new node button highlighted">
  </figure>
</center>

Tap on "Scan lndconnect config".

<center>
  <figure>
    <img src="/images/remote-access-tor/zeus-wallet-2.png" class="app_screenshot" alt="Zeus Node Configuration screen with host, port, and macaroon fields and the Scan lndconnect config button highlighted">
  </figure>
</center>

Open the LND Connect page in the MyNode GUI and scan the QR Code from the "REST Tor" tab.

<center>
  <figure>
    <img src="/images/remote-access-tor/zeus-wallet-3.png" class="app_screenshot" alt="Zeus lndconnect QR scanner pointed at the LND Connect page on MyNode with the REST Tor tab selected">
  </figure>
</center>

Once the QR code is scanned, click "Save Node Config" and go back to the main app screen. Zeus is now using your MyNode device!

<center>
  <figure>
    <img src="/images/remote-access-tor/zeus-wallet-4.png" class="app_screenshot" alt="Zeus main screen connected to MyNode over Tor, showing Lightning and on-chain balances with Send and Receive buttons">
  </figure>
</center>
