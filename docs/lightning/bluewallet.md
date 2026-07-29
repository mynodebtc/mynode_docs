---
title: "Blue Wallet (LND Hub)"
description: "Enable LND Hub on MyNode and pair BlueWallet with it, so your phone spends over Lightning through your own Bitcoin node instead of a custodial backend."
tags:
- "BlueWallet"
- "LND Hub"
- "Lightning wallet"
- "MyNode"
---

# Blue Wallet (LND Hub)

The first step to using Blue Wallet with your MyNode is enalbling LND Hub. The can be done by clicking the "Enable" button underneath the LND Hub icon on the main page.

<center>
  <figure>
    <img src="/images/lightning/bluewallet-1.png" style="width: 500px" alt="MyNode home page with the Enable button on the LND Hub app tile highlighted">
  </figure>
</center>

Next, you can click on the "LND Hub" button and view the LND Hub web interface. This is not required.

<center>
  <figure>
    <img src="/images/lightning/bluewallet-2.png" style="width: 500px" alt="LNDhub web interface showing active and pending channel counts, connected peers, block height, and a QR code with the node URI for connecting">
  </figure>
</center>

Now that LND Hub is running, install Blue Wallet on your mobile device and connect it to your MyNode!

From the mobile wallet, click on the settings icon and then click on Lightning Settings. On this screen, enter the URL to your MyNode device on port 3000 and click Save. Alternatively, you can scan a QR code according to the [pairing instructions](/lightning/pairing-wallets).

<center>
  <figure>
    <img src="/images/lightning/bluewallet-3.png" class="app_screenshot" alt="Lightning Settings in Blue Wallet with the MyNode LNDHub URL entered on port 3000 and a Save button">
  </figure>
</center>

Any new wallets added to Blue Wallet will be tied to your MyNode device!
