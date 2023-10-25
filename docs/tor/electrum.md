# Electrum Server via Tor

## Enabling Electrum Server

Electrum is a very popular light wallet that lets you use Bitcoin on your PC or mobile device without needing a full copy of the blockchain. By running Electrum Server on your MyNode, you can run light wallets on other devices in a trusted manner by offloading the heavy lifting to MyNode.

First, from the MyNode home page click "Enable" to start running Electrum Server. Depending on the speed of your device, it may take several days to fully sync Electrum. Your device may run slowly during this initial sync period.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-1.png" alt="password" style="width: 200px;">
  </figure>
</center>

Once the server has synced, you should see an Electrum Server status page similar to this.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-2.png" alt="MyNode logo" style="width: 300px;">
  </figure>
</center>

## Electrum via Tor

#### Premium Feature

Electrum is an easy-to-use light wallet, but requires that you delegate some trust to other servers to give you correct information about your Bitcoin. MyNode removes this risk by running a full Bitcoin node and Electrum Server on the device, removing the need to trust a random server to provide you accurate information about your Bitcoin funds.

However, for your mobile wallets to work properly wherever you are, you need to have public connection to your MyNode. The most secure way to do this is via Tor. It allows remote, encrypted connections back to your MyNode device.

More information and tips are available in this community guide as well - <a href="https://armantheparman.com/tor/" target="_blank">All The Reasons You’ve Failed To Connect Electrum to Your Node Via Tor</a> by <a href="https://twitter.com/parman_the" target="_blank">Arman the Parman</a>.

## Android Electrum Wallet Use via Tor

On your Android device, download Orbot and enable it by Clicking the Start button. This will create a Tor connection from your phone.

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-3.png" class="app_screenshot">
  </figure>
</center>

Next, open the Electrum Server information page on your MyNode device and find the Onion URL. This link will need to be used later in the Electrum App.

<center>
  <figure>
    <img src="/images/bitcoin/electrum-2.png" style="width: 300px;">
  </figure>
</center>

Next, download the Electrum app for Android and create or import a wallet. Once your wallet has been added, click on the settings icon and choose Network. On the Network page, set Auto-connect to OFF and One-server mode to ON. Set the proxy settings to:<br/>
<br/>Proxy mode: `socks5`
<br/>Host: `localhost`
<br/>Port: `9050`

And set the Server settings to:<br/>
<br/>Host: `[your Onion Electrum URL]`
<br/>Port `50002`

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-5.png" class="app_screenshot">
  </figure>
</center>

If everything went correctly, your wallet will sync and your MyNode device will be acting as your Electrum Server!

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-6.png" class="app_screenshot">
  </figure>
</center>

## Linux Electrum Wallet Use via Tor

On your Linux PC, make sure you have Tor and Electrum installed. Tor can be installed as a proxy or Tor Browser, which includes the proxy functionality.

Open Electrum and update your settings
<br/>
<br/>Proxy mode: `socks5`
<br/>Host: `localhost`
<br/>Port: `9050` or `9150` (if using Tor Browser's proxy)

And set the Server settings to:<br/>
<br/>Host: `[your Onion Electrum URL]`
<br/>Port `50002` or `50001`

Your Electrum wallet should connect successfully and look like the following!

<center>
  <figure>
    <img src="/images/remote-access-tor/remote-electrum-access-8.png" style="width: 300px;">
  </figure>
</center>
