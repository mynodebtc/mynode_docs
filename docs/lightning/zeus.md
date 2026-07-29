---
title: "Zeus"
description: "Set up Zeus on your phone to control your MyNode Lightning node, scanning the lndconnect QR code to send, receive, and manage channels while away from home."
tags:
- "Zeus"
- "Lightning wallet"
- "mobile wallet"
- "MyNode"
---

# Zeus

## Using Zeus with MyNode

First, install <a href="https://github.com/ZeusLN/zeus" target="_blank">Zeus</a> on your mobile device.

Next open the app, go to settings and tap "Add a new node".

<center>
  <figure>
    <img src="/images/lightning/zeus-mobile-1.png" class="app_screenshot" alt="Zeus settings screen reading No Nodes with the Add a new node button highlighted">
  </figure>
</center>

Tap on "Scan lndconnect config".

<center>
  <figure>
    <img src="/images/lightning/zeus-mobile-2.png" class="app_screenshot" alt="Zeus Node Configuration screen with host, port, and macaroon fields and the Scan lndconnect config button highlighted">
  </figure>
</center>

Open the QR Pairing page on MyNode and scan the QR Code from the "REST Local IP" tab.

<center>
  <figure>
    <img src="/images/lightning/zeus-mobile-3.png" class="app_screenshot" alt="Zeus lndconnect QR scanner pointed at the LND Connect page on MyNode">
  </figure>
</center>

Once the QR code is scanned, click "Save Node Config" and go back to the main app screen. Zeus is now using your MyNode device!

<center>
  <figure>
    <img src="/images/lightning/zeus-mobile-4.png" class="app_screenshot" alt="Zeus main screen connected to MyNode, showing Lightning and on-chain balances with Send and Receive buttons and counts of transactions, payments, invoices, and channels">
  </figure>
</center>