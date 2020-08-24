# Remote Access via VPN

## Enabling VPN on your myNode

#### Premium Feature

VPN is a technology that allows devices to communicate securely over the Internet. This technology can be incredibly useful to Bitcoin and Lightning by securing connections between the devices you use everyday and your myNode.

By enabling VPN, you can use all your mobile Bitcoin apps on your phone or laptop, no matter where you are, and still rely on the trust your myNode provides.

In fact, when VPN is enabled on your mobile device, all traffic from your device will be securely sent to your myNode. This can also help prevent snooping and monitoring of your traffic when on open WiFi connections.

For more information on VPN, visit the VPN page on wikipedia.

## Open Port for VPN

For VPN to work properly, you need to forward port 51194 on your router to port 51194 on your myNode.

First, you will need the IP address of your myNode. Go to the settings page and find its local IP address.

<center>
  <figure>
    <img src="/images/remote-access-vpn/vpn1.png" alt="myNode logo" style="width: 300px">
  </figure>
</center>

Then, go to your router and forward UDP port 51194 to port 51194 on the IP of your myNode. It will look something like this, but every router is different.

<center>
  <figure>
    <img src="/images/remote-access-vpn/vpn2.png" alt="myNode logo" style="width: 300px">
  </figure>
</center>

You can verify the port is being forwarded by checking port 51194 on a website like CanYouSeeMe.

## Connecting with VPN on your Android Device

#### Premium Feature

On your Android device, download and install OpenVPN.

Next, on your mobile device, visit the myNode web GUI while you are connected to your home WiFi. Go to the VPN page by clicking on "Info" under the VPN heading.

<center>
  <figure>
    <img src="/images/remote-access-vpn/vpn3.png" alt="myNode logo" style="width: 300px">
  </figure>
</center>

Once on the VPN Info page, click on the button to download the OVPN File. Enter your password when the prompt appears. This will download the OpenVPN profile.

<center>
  <figure>
    <img src="/images/remote-access-vpn/vpn4.png" alt="myNode logo" style="width: 300px">
  </figure>
</center>

Open the OpenVPN app and:

1. Tap on "OVPN Profile"
2. Tap on the "+" button and choose the recently downloaded file
3. Tap Import
4. Tap Add

Once the profile was imported successfully, you can tap the toggle icon and connect to your myNode securely via the Internet.

<center>
  <figure>
    <img src="/images/remote-access-vpn/vpn5.png" alt="myNode logo" style="width: 300px">
  </figure>
</center>

Now, whenever you connect to your myNode using OpenVPN, you will be able to access all the myNode services as if you were on your home WiFi network!
