# Tor Setup

## Using Tor with your MyNode

#### Premium Feature

Tor is a technology that allows devices to communicate securely and privately via the Internet. This technology can be incredibly useful to Bitcoin and Lightning by securing connections between the devices you use everyday and your MyNode.

By enabling Tor, you can use apps, like Electrum, on your phone or laptop no matter where you are and still rely on the trust your MyNode provides.

For more information on Tor, visit their [website](https://www.torproject.org/).

## Tor Browser Setup

On any operating system, if you want to access the MyNode Web User Interface via Tor, go to [torproject.org](https://www.torproject.org/) and download and install the Tor Browser application.

Once installed, you can access the MyNode UI via the link shown on the Tor page.

## Tor Setup on Android

On your Android device, download Orbot and enable it by Clicking the Start button. This will create a Tor connection from your phone.

<center>
  <figure>
    <img src="/images/remote-access-tor/setup-tor-access-1.png" alt="MyNode logo" class="app_screenshot">
  </figure>
</center>

Some apps require "VPN Mode" to access Tor. Tap the settings button next to "Full Device VPN" and select the apps - each app's guide will describe if VPN Mode is required.

## Tor Setup using Tor Browser (Windows, Linux, Mac)

On your PC or laptop, install <a href="https://www.torproject.org/download/" target="_blank">Tor Browser</a>.

Once installed, you can use it to browse to the onion URLs found via the Tor page on your MyNode device. Many services are available via a web interface, like RTL, Thunderhub, BTC Pay Server, etc...

However, other services require the Tor network, but not the Tor browser. For example, wallets connecting to Electrum Server use the network, but cannot be interacted with via the browser. In these cases, you can use the proxy being run behind the tor browser by setting the app's proxy to port 9150.

## Tor Setup on Linux

On your Linux PC, install Tor so you have a proxy running.

```
sudo apt-get install tor
```

Your Linux PC is now running a Tor proxy and ready to connect to Tor services provided by MyNode!


## Find Onion URL for Service

To find the proper Onion URL for a service, open the Tor information page on your MyNode device.

<center>
  <figure>
    <img src="/images/remote-access-tor/setup-tor-access-2.png" alt="MyNode logo" style="width: 300px">
  </figure>
</center>

If you click "Show Onion URLs" you will see URLs for each service. Your device is now ready to use with various applications via Tor!
