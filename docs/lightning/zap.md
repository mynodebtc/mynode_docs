---
title: "Zap"
description: "Connect the Zap desktop or Android client to your MyNode Lightning node with an lndconnect URL or QR code, and spend from your own channels on any device."
tags:
- "Zap"
- "Lightning wallet"
- "desktop wallet"
- "MyNode"
---

# Zap

## Using Zap with MyNode (Desktop)

First, install <a href="https://zap.jackmallers.com/">Zap</a> on your PC.

Next, open the Zap desktop app, click on "Create New Wallet".

<center>
  <figure>
    <img src="/images/lightning/zap-desktop-1.png" style="width: 500px" alt="Zap desktop app with no wallets yet and the Create new wallet button highlighted">
  </figure>
</center>

Select "Connect" and click Next. Now, open the MyNode GUI and go to the LND Connect page. Copy the LND Connect URL from the "gRPC Local IP" tab. Paste the URL into the Connection String box in Zap.

<center>
  <figure>
    <img src="/images/lightning/zap-desktop-2.png" style="width: 500px" alt="Zap Connection details screen with an lndconnect URL pasted into the Connection String box and a Next button">
  </figure>
</center>

Click Next and click Next on the Confirm screen. Zap will connect and use your MyNode device's wallet!

<center>
  <figure>
    <img src="/images/lightning/zap-desktop-3.png" style="width: 500px" alt="Zap desktop connected to the MyNode wallet, showing the satoshi balance, Pay and Receive buttons, and recent activity">
  </figure>
</center>

## Using Zap with MyNode (Android)

First, install <a href="https://zap.jackmallers.com/">Zap</a> on your mobile device.

Next, open the Zap mobile app and tap on "Connect to Remote Node".

<center>
  <figure>
    <img src="/images/lightning/zap-mobile-1.png" class="app_screenshot" alt="Zap mobile setup screen asking how you want to use Zap, with the Connect to Remote Node button highlighted">
  </figure>
</center>

In your the MyNode GUI, open the LND Connect page and enter your MyNode password. In the Zap app, scan the QR code in the "gRPC Local IP" tab.

<center>
  <figure>
    <img src="/images/lightning/zap-mobile-2.png" class="app_screenshot" alt="Zap mobile camera view scanning the LND Connect QR code displayed on the MyNode page">
  </figure>
</center>

After Zap successfully scans the QR code, Zap will be using your MyNode device's wallet!

<center>
  <figure>
    <img src="/images/lightning/zap-mobile-3.png" class="app_screenshot" alt="Zap mobile connected to the MyNode wallet, showing the satoshi balance with Pay and Receive buttons">
  </figure>
</center>
