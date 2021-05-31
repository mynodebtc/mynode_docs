# Electrum Server via Tor

## Enabling Electrum Server

Electrum is a very popular light wallet that lets you use Bitcoin on your PC or mobile device without needing a full copy of the blockchain. By running Electrum Server on your myNode, you can run light wallets on other devices in a trusted manner by offloading the heavy lifting to myNode.

First, from the myNode home page click "Enable" to start running Electrum Server. Depending on the speed of your device, it may take several days to fully sync Electrum. Your device may run slowly during this initial sync period.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-1.png" alt="password" style="width: 200px;">
  </figure>
</center>

Once the server has synced, you should see an Electrum Server status page similar to this.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-2.png" alt="myNode logo" style="width: 300px;">
  </figure>
</center>

## Electrum via Tor

#### Premium Feature

Electrum is an easy-to-use light wallet, but requires that you delegate some trust to other servers to give you correct information about your Bitcoin. myNode removes this risk by running a full Bitcoin node and Electrum Server on the device, removing the need to trust a random server to provide you accurate information about your Bitcoin funds.

However, for your mobile wallets to work properly wherever you are, you need to have public connection to your myNode. The most secure way to do this is via Tor. It allows remote, encrypted connections back to your myNode device.

## Android Electrum Wallet Use via Tor

On your Android device, download Orbot and enable it by Clicking the Start button. This will create a Tor connection from your phone.

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-3.png" class="app_screenshot">
  </figure>
</center>

Next, open the Electrum Server information page on your myNode device and find the Onion URL. This link will need to be used later in the Electrum App.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-2.png" style="width: 300px;">
  </figure>
</center>

Next, download the Electrum app for Android and create or import a wallet. Once your wallet has been added, click on the settings icon and choose Network. On the Network page, set Auto-connect to OFF and One-server mode to ON. Set the proxy settings to:
Proxy mode: `socks5`
Host: `localhost`
Port: `9050`

And set the Server settings to:
Host: `[your Onion Electrum URL]`
Port `50002`

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-5.png" class="app_screenshot">
  </figure>
</center>

If everything went correctly, your wallet will sync and your myNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-6.png" class="app_screenshot">
  </figure>
</center>

## Linux Electrum Wallet Use via Tor

On your Linux PC, make sure you have Tor and Electrum installed.

Once the software is installed, add the authenticated service to your /etc/tor/torrc file. This allows programs, like Electrum, on your PC to connect to secure services using the password you provide in the torrc file.

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-7.png" style="width: 300px;">
  </figure>
</center>

After the settings file is updated, restart Tor by rebooting or running "sudo systemctl restart tor" or a similar command.

Once Tor has been restarted, run the following command to launch Electrum and connect to your secure Electrum service.

Your Electrum wallet should connect successfully and look like the following!

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-8.png" style="width: 300px;">
  </figure>
</center>
