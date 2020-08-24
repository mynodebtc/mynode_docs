# Electrum Server

## Enabling Electrum Server

Electrum is a very popular light wallet that lets you use Bitcoin on your PC or mobile device without needing a full copy of the blockchain. By running Electrum Server on your myNode, you can run light wallets on other devices in a trusted manner by offloading the heavy lifting to myNode.

First, from the myNode home page click "Enable" to start running Electrum Server. Depending on the speed of your device, it may take several days to fully sync Electrum. Your device may run slowly during this initial sync period.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-1.png" alt="password" style="width: 500px">
  </figure>
</center>

Once the server has synced, you should see an Electrum Server status page similar to this.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-2.png" alt="password" style="width: 500px">
  </figure>
</center>

## Connecting an Electrum Wallet to myNode via the GUI

At this point you can connect your Electrum light wallets to your myNode. On the PC version, click on the colored icon in the bottom right to open up server settings. Enter the IP address of your myNode with port 50002.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-3.png" alt="password" style="width: 500px">
  </figure>
</center>

If everything went correctly, you will get a green status icon and your myNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/bitcoin/electrum-4.png" alt="password" style="width: 500px">
  </figure>
</center>

At this point, your node may still use other servers for various things. To limit use to ONLY your node, you will need to find the Electrum config file for your application and change some settings.

To find your Electrum files, try these instructions.

Open the config file and make sure the these settings are set as follows:

            "auto_connect": false,
            "oneserver": true,


Restart Electrum and you will be using myNode for trusted Electrum access!

## Connecting an Electrum Wallet to myNode via the CLI

You can launch Electrum via a command line interface and connect it to you myNode. Enter the following command and replace the IP with your own.

If everything went correctly, you will get a green status icon and your myNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/bitcoin/electrum-5.png" alt="password" style="width: 500px">
  </figure>
</center>

## Connecting an Electrum Wallet to myNode via Mobile

You can also run Electrum via the mobile app and connect it to you myNode. First, go into settings and set the server like the following. Replace the IP with your own IP.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-6.png" alt="password" style="width: 500px">
  </figure>
</center>

Also make sure Auto-connect is ON and One-server mode is ON.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-7.png" alt="password" style="width: 500px">
  </figure>
</center>

If everything went correctly, you will get a screen like this and your myNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/bitcoin/electrum-8.png" alt="password" style="width: 500px">
  </figure>
</center>

## Connecting an Electrum Wallet to myNode via Windows

The easiest way to use Electrum in Windows and connect to your myNode consistently is to add the settings by editting the Electrum Wallet icon. This screenshot shows the changes you should make as well as the result. To open Electrum Properties, right click on the Electrum icon and choose Properties.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-9.png" alt="password" style="width: 500px">
  </figure>
</center>
