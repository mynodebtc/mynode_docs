---
title: "Remote Access via Tailscale"
description: "Use Tailscale to reach your MyNode from anywhere over a private network: install and log in, open the web interface and connect wallets, and compare Tailscale with Tor and VPN."
tags:
- "Tailscale"
- "remote access"
- "WireGuard"
- "MyNode"
---

# Remote Access via Tailscale

<p class="mn-availability">Premium</p>

[Tailscale](https://tailscale.com/) creates a private network between your own devices, using the open source WireGuard protocol. Once your MyNode and your phone or laptop are on the same Tailscale network, you can reach your node from anywhere as if you were at home, without opening any ports on your router.

## Tailscale vs Tor vs VPN

| | Tailscale | [Tor](/tor/setup) | [VPN](/vpn/setup) |
|---|---|---|---|
| **Speed** | Fast | Slow | Fast |
| **Router setup** | None | None | Forward port 51194 |
| **Works behind carrier-grade NAT** | Yes | Yes | Usually not |
| **Account needed** | A Tailscale account | No | No |
| **Apps on your devices** | Tailscale app | Tor Browser, Orbot, or Tor built into the wallet | OpenVPN app |
| **Third party involved** | Tailscale coordinates connections but can't read your traffic | None, traffic goes through the Tor network | None |

Tailscale is the easiest of the three if you're comfortable relying on Tailscale's service to coordinate connections. Your traffic is end-to-end encrypted between your devices.

## Step 1: Create a Tailscale Account

Sign up at [tailscale.com](https://tailscale.com/). Turn on two-factor authentication for the account you use to sign in, since anyone who controls your Tailscale account can add devices to your network.

## Step 2: Install Tailscale on MyNode

1. Open the Marketplace on your MyNode, and install **Tailscale**.
2. Once it's running, open its app page, and click **Open**.

<center>
  <figure>
    <img src="/images/tailscale/tailscale-app.png" style="width: 600px" alt="Tailscale app page on MyNode showing it Running with Open, Restart and Disable buttons, and setup instructions">
  </figure>
</center>

## Step 3: Log In

The Tailscale web interface opens in a new tab. Click **Log In**, and sign in to your Tailscale account to approve your MyNode.

<center>
  <figure>
    <img src="/images/tailscale/tailscale-login.png" style="width: 400px" alt="Tailscale web interface with a Log In button and the message Get started by logging in to your Tailscale network">
  </figure>
</center>

When you open it again, it shows your node's name and its Tailscale IP address, which starts with `100.`.

<center>
  <figure>
    <img src="/images/tailscale/tailscale-connected.png" style="width: 400px" alt="Tailscale web interface showing the device mynode with its Tailscale IP address, a message saying you are connected, and buttons to Advertise as Exit Node and Reauthenticate">
  </figure>
</center>

Leave **Advertise as Exit Node** off unless you specifically want to route your other devices' internet traffic through your home connection.

## Step 4: Connect Your Other Devices

1. Install the Tailscale app on your phone or laptop, and sign in with the same account.
2. Turn on Tailscale on that device.
3. Open your MyNode's Tailscale IP address in a browser, such as `http://100.x.y.z`.

You'll see the normal MyNode interface. If you use Tailscale's MagicDNS, you can use the device name instead of the IP address.

## Using Apps and Wallets over Tailscale

MyNode's firewall treats Tailscale addresses like your home network. Anything you can use at home by IP address also works over Tailscale, by using the Tailscale IP address instead:

- **The MyNode web interface** and web apps like RTL, Thunderhub and Mempool.
- **Electrum wallets**, such as [Sparrow](/wallets/sparrow), using port 50002 or 50001.
- **Lightning wallets** like [Zeus](/lightning/zeus) that connect to LND. When pairing, choose a local IP option, then change the host in your wallet to the Tailscale IP address. If the wallet reports a certificate error, regenerate the TLS certificate from the Lightning page after Tailscale is running, then pair again.

One exception: **Bitcoin Core RPC doesn't accept connections over Tailscale.** Wallets that connect to Bitcoin Core directly need to use your home network, Tor or the VPN. Use the Electrum Server option in your wallet instead.

## Key Expiry

By default, Tailscale makes each device log in again after a few months. If your node's key expires, you'll lose remote access until you log in again from the Tailscale web interface on your MyNode, using **Reauthenticate**. You can turn off key expiry for your node in the Tailscale admin console. Only do this if your account is well protected.

## Removing Tailscale

Disabling Tailscale stops remote access through it. Uninstalling the app logs your node out of Tailscale. You can also remove the device from your network in the Tailscale admin console.

## Next Steps

[Connect Sparrow Wallet over Tailscale](/wallets/sparrow#over-tailscale)

[Choose which services are reachable from the internet](/networking/reachable-from-internet)
