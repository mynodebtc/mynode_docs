---
title: "Web Interface via Tor"
description: "Open the MyNode web interface from anywhere using its Tor onion address and Tor Browser, giving you remote administration without opening ports on your router."
tags:
- "Tor"
- "web interface"
- "remote access"
- "MyNode"
---

# Web Interface via Tor

## Accessing the Web User Interface

#### Premium Feature

You can access your MyNode Web Interface from anywhere using Tor if you are a Premium user. The device will open a secure Tor service for the user interface via Tor automatically.

First, make sure you have Tor Browser installed via the instructions on the [Tor Setup](/tor/setup) page.

Next, click on the Tor Services link under the Tor app on the main user interface screen.

<center>
  <figure>
    <img src="/images/remote-access-tor/web-gui-1.png" alt="MyNode Tor page with the Show Onion URLs button above a table listing myNode Web, LND Hub, and other services with their ports" style="width: 300px;">
  </figure>
</center>

Then, click on the "Show Onion URLs" button and find the Onion URL for the MyNode Web service.

Finally, open your Tor Browser app, copy the MyNode Web URL, and paste it into the Tor Browser URL bar.

<center>
  <figure>
    <img src="/images/remote-access-tor/web-gui-2.png" alt="Tor Browser loading the MyNode login page from an .onion address, with a password field and Login button" style="width: 300px;">
  </figure>
</center>

Your MyNode User Interface should appear!

For more information on Tor, visit [torproject.org](https://torproject.org).
