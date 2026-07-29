---
title: "Electrum Server"
description: "Connect Electrum wallets on desktop and mobile to your own MyNode Electrum Server instead of a public one, so no third party sees your addresses or balances."
tags:
- "Electrum"
- "Electrum Server"
- "MyNode"
- "Bitcoin wallet"
---

# Electrum Server

## Enabling Electrum Server

Electrum is a very popular light wallet that lets you use Bitcoin on your PC or mobile device without needing a full copy of the blockchain. By running Electrum Server on your MyNode, you can run light wallets on other devices in a trusted manner by offloading the heavy lifting to MyNode.

First, from the MyNode home page click "Enable" to start running Electrum Server. Depending on the speed of your device, it may take several days to fully sync Electrum. Your device may run slowly during this initial sync period.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-1.png" alt="Electrum Server app tile on the MyNode home page with the Enable button highlighted" style="width: 200px">
  </figure>
</center>

Once the server has synced, you should see an Electrum Server status page similar to this.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-2.png" alt="MyNode Electrum Server status page showing a Running status, the current block height, and the standard and secure ports" style="width: 500px">
  </figure>
</center>

## Connecting an Electrum Wallet to MyNode via the GUI

At this point you can connect your Electrum light wallets to your MyNode. On the PC version, click on the colored icon in the bottom right to open up server settings. Enter the IP address of your MyNode with port 50002.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-3.png" alt="Electrum desktop Network dialog on the Server tab, with Select server automatically unchecked and the MyNode IP address entered with port 50002" style="width: 500px">
  </figure>
</center>

If everything went correctly, you will get a green status icon and your MyNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/bitcoin/electrum-4.png" alt="Electrum desktop wallet connected, with a green status icon in the bottom right corner of the window" style="width: 500px">
  </figure>
</center>

*Notice!* At this point, your Electrum light wallet client may still use other servers for various things. To limit use to ONLY your node, you will need to make one more change.

Re-open the Electrum network settings by clicking on the colored icon in the bottom right. The server you entered should now appear in the list. Right click on it and select "Use as Server" and click Close.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-10.png" alt="Electrum Network dialog on the Overview tab with the MyNode server selected under Connected nodes and the Use as server context menu option showing" style="width: 500px">
  </figure>
</center>

Restart Electrum and you will be using MyNode for trusted Electrum access!

## Connecting an Electrum Wallet to MyNode via the CLI

You can launch Electrum via a command line interface and connect it to you MyNode. Enter the following command and replace the IP with your own.

`./electrum -1 -s 192.168.1.123:50002:s`

If everything went correctly, you will get a green status icon and your MyNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/bitcoin/electrum-5.png" alt="Electrum desktop wallet launched from the command line and connected, with a green status icon in the bottom right corner" style="width: 500px">
  </figure>
</center>

## Connecting an Electrum Wallet to MyNode via Mobile

You can also run Electrum via the mobile app and connect it to you MyNode. First, go into settings and set the server like the following. Replace the IP with your own IP.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-6.png" alt="Server settings in Electrum for Android with the MyNode IP address entered as the host and 50002 as the port" style="width: 200px">
  </figure>
</center>

Also make sure Auto-connect is ON and One-server mode is ON.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-7.png" alt="Network settings in Electrum for Android showing one connection to the MyNode server with Auto-connect and One-server mode both on" style="width: 200px">
  </figure>
</center>

If everything went correctly, you will get a screen like this and your MyNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/bitcoin/electrum-8.png" alt="Synced Electrum wallet on Android showing the balance screen for default_wallet with Send, Balance, and Receive tabs" style="width: 200px">
  </figure>
</center>
